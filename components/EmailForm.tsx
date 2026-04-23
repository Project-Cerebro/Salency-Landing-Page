
'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { track } from '@vercel/analytics';

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

export function EmailForm({ prefillEmail }: { prefillEmail?: string }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>({
        mode: 'onTouched',
        defaultValues: { email: prefillEmail ?? '', industry: '', role: '', teamSize: '' },
    });

    useEffect(() => {
        if (prefillEmail) setValue('email', prefillEmail);
    }, [prefillEmail, setValue]);

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
                setServerError('Too many requests. Please try again in a few minutes.');
                return;
            }

            if (!response.ok) {
                const body = await response.json().catch(() => null);
                setServerError(body?.error ?? 'Something went wrong. Please try again.');
                return;
            }

            setIsSuccess(true);
            track('form_complete');
        } catch {
            setServerError('Network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-accent-warm/10 border border-accent-warm/30 p-8 rounded-xl text-center max-w-lg mx-auto">
                <h3 className="text-2xl font-bold text-white mb-2">You&apos;re in.</h3>
                <p className="text-gray-300 mb-1">Someone from our team will reach out to you shortly to schedule your pilot kickoff.</p>
                <p className="text-sm text-gray-500">Check your inbox for a confirmation from the Salency team.</p>
            </div>
        );
    }

    const inputClass = 'w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-warm transition-colors';

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-card p-8 rounded-2xl border border-white/10 max-w-2xl mx-auto shadow-2xl"
            suppressHydrationWarning
        >
            <h3 className="text-xl font-bold text-white mb-1">Request Your Pilot</h3>
            <p className="text-sm text-gray-400 mb-6">Someone from our team will reach out to you shortly.</p>

            {serverError && (
                <div className="mb-6 bg-red-500/10 border border-red-500/30 text-red-300 text-sm rounded-lg px-4 py-3">
                    {serverError}
                </div>
            )}

            <div className="hidden" aria-hidden="true">
                <label className="block text-sm font-medium text-gray-300 mb-1">Address</label>
                <input
                    {...register('address')}
                    tabIndex={-1}
                    autoComplete="off"
                    className={inputClass}
                    suppressHydrationWarning
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">Name *</label>
                <input
                    {...register('name', { required: true, pattern: NAME_REGEX })}
                    className={inputClass}
                    placeholder="Jane Doe"
                    autoComplete="name"
                    onFocus={() => track('form_start')}
                    suppressHydrationWarning
                />
                {errors.name && <span className="text-red-400 text-xs mt-1 block">Enter your full name (letters only, 2–80 chars)</span>}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">Work Email *</label>
                <input
                    type="email"
                    {...register('email', { required: true, pattern: EMAIL_REGEX })}
                    className={inputClass}
                    placeholder="jane@acme.com"
                    autoComplete="email"
                    suppressHydrationWarning
                />
                {errors.email && <span className="text-red-400 text-xs mt-1 block">Valid email required</span>}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">Company Website *</label>
                <input
                    {...register('website', { required: true, pattern: WEBSITE_REGEX })}
                    className={inputClass}
                    placeholder="acme.com"
                    autoComplete="url"
                    inputMode="url"
                    suppressHydrationWarning
                />
                {errors.website && <span className="text-red-400 text-xs mt-1 block">Enter a valid URL (e.g. acme.com or https://acme.com)</span>}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">Industry *</label>
                <select
                    {...register('industry', { required: true })}
                    className={inputClass}
                    defaultValue=""
                    suppressHydrationWarning
                >
                    <option value="" disabled>Select an industry</option>
                    {INDUSTRIES.map((i) => (
                        <option key={i} value={i}>{i}</option>
                    ))}
                </select>
                {errors.industry && <span className="text-red-400 text-xs mt-1 block">Please select an industry</span>}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">Your Role *</label>
                <select
                    {...register('role', { required: true })}
                    className={inputClass}
                    defaultValue=""
                    suppressHydrationWarning
                >
                    <option value="" disabled>Select your role</option>
                    {ROLES.map((r) => (
                        <option key={r} value={r}>{r}</option>
                    ))}
                </select>
                {errors.role && <span className="text-red-400 text-xs mt-1 block">Please select your role</span>}
            </div>

            <div className="mb-8">
                <label className="block text-sm font-medium text-gray-300 mb-2">Team Size *</label>
                <div className="grid grid-cols-4 gap-2" role="radiogroup" aria-label="Team size">
                    {TEAM_SIZES.map((s) => (
                        <label
                            key={s}
                            className="relative flex items-center justify-center cursor-pointer rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-sm font-medium text-gray-300 hover:border-white/20 has-[:checked]:border-accent-warm has-[:checked]:bg-accent-warm/10 has-[:checked]:text-accent-warm transition-colors"
                        >
                            <input
                                type="radio"
                                value={s}
                                {...register('teamSize', { required: true })}
                                className="sr-only"
                                suppressHydrationWarning
                            />
                            {s}
                        </label>
                    ))}
                </div>
                {errors.teamSize && <span className="text-red-400 text-xs mt-1 block">Please select a team size</span>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-warm hover:brightness-110 text-background font-bold py-4 rounded-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg shadow-[0_0_20px_rgba(232,146,90,0.3)] hover:shadow-[0_0_30px_rgba(232,146,90,0.5)] transition-[color,background-color,box-shadow,transform,opacity,filter] duration-200"
            >
                {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : 'Request Pilot'}
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">
                Your data is secure. No spam, ever.
            </p>
        </form>
    );
}
