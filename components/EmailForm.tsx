'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { track } from '@vercel/analytics';
import { PILOT_TERMS } from '@/lib/pilot-terms';

const INDUSTRIES = [
    'SaaS / Software',
    'Financial Services',
    'Healthcare',
    'Retail & E-commerce',
    'Manufacturing',
    'Professional Services',
    'Media & Advertising',
    'Education',
    'Other',
] as const;

const TEAM_SIZES = ['1-4', '5-10', '11-50', '50+'] as const;

const ROLES = [
    'Founder / CEO',
    'VP Sales',
    'VP Revenue / CRO',
    'Head of Sales / Sales Director',
    'Sales Manager',
    'Account Executive',
    'Sales Operations / RevOps',
    'VP / Head of Customer Success',
    'Customer Success Manager',
    'Other',
] as const;

type Industry = (typeof INDUSTRIES)[number];
type TeamSize = (typeof TEAM_SIZES)[number];
type Role = (typeof ROLES)[number];

interface FormData {
    name: string;
    email: string;
    website: string;
    industry: Industry | '';
    role: Role | '';
    teamSize: TeamSize | '';
    address?: string;
}

const NAME_REGEX = /^[\p{L}\p{M}\p{Zs}'\-.]{2,80}$/u;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WEBSITE_REGEX = /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/[^\s]*)?$/i;

// Pilot terms shown inside the modal so the visitor knows what they are
// applying for before the first field. /pilot renders the same list in its
// "Pilot includes" card beside the form, so the page variant omits it.

export function EmailForm({
    prefillEmail,
    showTerms = false,
}: {
    prefillEmail?: string;
    showTerms?: boolean;
}) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);
    const successHeadingRef = useRef<HTMLHeadingElement>(null);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>({
        mode: 'onTouched',
        defaultValues: { email: prefillEmail ?? '', industry: '', role: '', teamSize: '' },
    });

    useEffect(() => {
        if (prefillEmail) setValue('email', prefillEmail);
    }, [prefillEmail, setValue]);

    // Move focus to the confirmation so keyboard and screen-reader users
    // land on the outcome instead of a removed submit button.
    useEffect(() => {
        if (isSuccess) successHeadingRef.current?.focus();
    }, [isSuccess]);

    const onSubmit = async (data: FormData) => {
        if (data.address) {
            setIsSuccess(true);
            return;
        }

        setIsSubmitting(true);
        setServerError(null);
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.status === 429) {
                setServerError('Too many requests from this connection. Try again in a few minutes, or email founders@salency.ai.');
                return;
            }

            if (!response.ok) {
                const body = await response.json().catch(() => null);
                setServerError(body?.error ?? 'We couldn’t send your application. Try again, or email founders@salency.ai.');
                return;
            }

            setIsSuccess(true);
            track('form_complete');
        } catch {
            setServerError('Your application didn’t send. Check your connection and try again. Nothing you typed was lost.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="pilot-form pilot-form--done" role="status">
                <h3 ref={successHeadingRef} tabIndex={-1} className="pilot-form-title">
                    Application received.
                </h3>
                <p className="pilot-form-sub">
                    We&apos;ll reply by email to scope the fit for your team. A confirmation
                    from the Salency team is on its way to your inbox.
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="pilot-form"
            noValidate
            suppressHydrationWarning
        >
            <h3 className="pilot-form-title">Apply for the pilot</h3>
            <p className="pilot-form-sub">
                Tell us about your team. We&apos;ll reply by email to scope the fit.
            </p>

            {showTerms && (
                <div className="pilot-form-terms">
                    <ul>
                        {PILOT_TERMS.map((t) => (
                            <li key={t}>{t}</li>
                        ))}
                    </ul>
                    <p className="pilot-form-fit">
                        Best fit: 5–50 reps, with reps inheriting accounts.
                    </p>
                </div>
            )}

            {serverError && (
                <div className="pilot-form-alert" role="alert">
                    {serverError}
                </div>
            )}

            <div className="hidden" aria-hidden="true">
                <label>Address</label>
                <input
                    {...register('address')}
                    tabIndex={-1}
                    autoComplete="off"
                    suppressHydrationWarning
                />
            </div>

            <div className="pilot-field">
                <label htmlFor="pilot-name" className="pilot-label">Name</label>
                <input
                    id="pilot-name"
                    {...register('name', { required: true, pattern: NAME_REGEX })}
                    className="pilot-input"
                    placeholder="Jane Doe"
                    autoComplete="name"
                    onFocus={() => track('form_start')}
                    aria-required="true"
                    aria-invalid={errors.name ? 'true' : undefined}
                    aria-describedby={errors.name ? 'pilot-name-error' : undefined}
                    suppressHydrationWarning
                />
                {errors.name && <span id="pilot-name-error" className="pilot-error">Enter your full name, using letters only (2–80 characters).</span>}
            </div>

            <div className="pilot-field">
                <label htmlFor="pilot-email" className="pilot-label">Work email</label>
                <input
                    id="pilot-email"
                    type="email"
                    {...register('email', { required: true, pattern: EMAIL_REGEX })}
                    className="pilot-input"
                    placeholder="jane@acme.com"
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : undefined}
                    aria-describedby={errors.email ? 'pilot-email-error' : undefined}
                    suppressHydrationWarning
                />
                {errors.email && <span id="pilot-email-error" className="pilot-error">Enter an email address like jane@acme.com.</span>}
            </div>

            <div className="pilot-field">
                <label htmlFor="pilot-website" className="pilot-label">Company website</label>
                <input
                    id="pilot-website"
                    {...register('website', { required: true, pattern: WEBSITE_REGEX })}
                    className="pilot-input"
                    placeholder="acme.com"
                    autoComplete="url"
                    inputMode="url"
                    aria-required="true"
                    aria-invalid={errors.website ? 'true' : undefined}
                    aria-describedby={errors.website ? 'pilot-website-error' : undefined}
                    suppressHydrationWarning
                />
                {errors.website && <span id="pilot-website-error" className="pilot-error">Enter a website like acme.com or https://acme.com.</span>}
            </div>

            <div className="pilot-field-row">
                <div className="pilot-field">
                    <label htmlFor="pilot-industry" className="pilot-label">Industry</label>
                    <div className="select-wrap">
                        <select
                            id="pilot-industry"
                            {...register('industry', { required: true })}
                            className="pilot-input pilot-select"
                            defaultValue=""
                            aria-required="true"
                            aria-invalid={errors.industry ? 'true' : undefined}
                            aria-describedby={errors.industry ? 'pilot-industry-error' : undefined}
                            suppressHydrationWarning
                        >
                            <option value="" disabled>Select an industry</option>
                            {INDUSTRIES.map((i) => (
                                <option key={i} value={i}>{i}</option>
                            ))}
                        </select>
                    </div>
                    {errors.industry && <span id="pilot-industry-error" className="pilot-error">Choose your industry.</span>}
                </div>

                <div className="pilot-field">
                    <label htmlFor="pilot-role" className="pilot-label">Your role</label>
                    <div className="select-wrap">
                        <select
                            id="pilot-role"
                            {...register('role', { required: true })}
                            className="pilot-input pilot-select"
                            defaultValue=""
                            aria-required="true"
                            aria-invalid={errors.role ? 'true' : undefined}
                            aria-describedby={errors.role ? 'pilot-role-error' : undefined}
                            suppressHydrationWarning
                        >
                            <option value="" disabled>Select your role</option>
                            {ROLES.map((r) => (
                                <option key={r} value={r}>{r}</option>
                            ))}
                        </select>
                    </div>
                    {errors.role && <span id="pilot-role-error" className="pilot-error">Choose your role.</span>}
                </div>
            </div>

            <div className="pilot-field pilot-field--last">
                <span id="pilot-team-size-label" className="pilot-label">Reps on your revenue team</span>
                <div
                    className="pilot-sizes"
                    role="radiogroup"
                    aria-labelledby="pilot-team-size-label"
                    aria-required="true"
                    aria-invalid={errors.teamSize ? 'true' : undefined}
                    aria-describedby={errors.teamSize ? 'pilot-team-size-error' : undefined}
                >
                    {TEAM_SIZES.map((s) => {
                        const inputId = `pilot-team-size-${s}`;
                        return (
                            <label key={s} htmlFor={inputId} className="pilot-size">
                                <input
                                    id={inputId}
                                    type="radio"
                                    value={s}
                                    {...register('teamSize', { required: true })}
                                    className="sr-only"
                                    suppressHydrationWarning
                                />
                                {s}
                            </label>
                        );
                    })}
                </div>
                {errors.teamSize && <span id="pilot-team-size-error" className="pilot-error">Choose a team size.</span>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="btn-submit"
            >
                {isSubmitting && <Loader2 className="animate-spin w-5 h-5" aria-hidden />}
                <span>{isSubmitting ? 'Sending application' : 'Apply for the pilot'}</span>
            </button>

            <p className="pilot-form-note">
                All fields required. We use your details only to reply about the pilot.{' '}
                <Link href="/privacy">Privacy policy</Link>
            </p>
        </form>
    );
}
