'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { track } from '@vercel/analytics';

interface FormData {
    firstName: string;
    email: string;
    companyWebsite: string;
    role: string;
    teamSize: string;
    website?: string;
}

const ROLES = [
    'AE',
    'Sales Manager',
    'VP Sales',
    'RevOps',
    'CS Lead',
    'Founder / CEO',
    'Other',
];

const TEAM_SIZES = ['1–4', '5–10', '11–50', '50+'];

const WEBSITE_PATTERN = /^[^\s]+\.[^\s]+$/;

export function EmailForm({ prefillEmail }: { prefillEmail?: string }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>({
        defaultValues: { email: prefillEmail ?? '', role: '', teamSize: '' },
    });

    useEffect(() => {
        if (prefillEmail) setValue('email', prefillEmail);
    }, [prefillEmail, setValue]);

    const onSubmit = async (data: FormData) => {
        if (data.website) {
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
                <p className="text-gray-300 mb-1">We&apos;ll reply within 24 hours to schedule your pilot kickoff.</p>
                <p className="text-sm text-gray-500">Check your inbox for a confirmation from the Salency team.</p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-card p-8 rounded-2xl border border-white/10 max-w-2xl mx-auto shadow-2xl"
            suppressHydrationWarning
        >
            <h3 className="text-xl font-bold text-white mb-1">Request your pilot</h3>
            <p className="text-sm text-gray-400 mb-6">We reply within 24 hours.</p>

            {serverError && (
                <div className="mb-6 bg-red-500/10 border border-red-500/30 text-red-300 text-sm rounded-lg px-4 py-3">
                    {serverError}
                </div>
            )}

            <div className="hidden" aria-hidden="true">
                <label className="block text-sm font-medium text-gray-300 mb-1">Website</label>
                <input
                    {...register('website')}
                    tabIndex={-1}
                    autoComplete="off"
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white"
                    suppressHydrationWarning
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">First name *</label>
                <input
                    {...register('firstName', { required: true })}
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-warm transition-colors"
                    placeholder="Jane"
                    autoComplete="given-name"
                    onFocus={() => track('form_start')}
                    suppressHydrationWarning
                />
                {errors.firstName && <span className="text-red-400 text-xs mt-1">Required</span>}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">Work email *</label>
                <input
                    type="email"
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-warm transition-colors"
                    placeholder="jane@acme.com"
                    autoComplete="email"
                    suppressHydrationWarning
                />
                {errors.email && <span className="text-red-400 text-xs mt-1">Valid email required</span>}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">Company website *</label>
                <input
                    type="text"
                    {...register('companyWebsite', { required: true, pattern: WEBSITE_PATTERN })}
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-warm transition-colors"
                    placeholder="acme.com"
                    autoComplete="url"
                    suppressHydrationWarning
                />
                {errors.companyWebsite && <span className="text-red-400 text-xs mt-1">Valid website required</span>}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">Your role *</label>
                <select
                    {...register('role', { required: true })}
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-warm transition-colors"
                    defaultValue=""
                    suppressHydrationWarning
                >
                    <option value="" disabled>Select your role</option>
                    {ROLES.map((role) => (
                        <option key={role} value={role}>{role}</option>
                    ))}
                </select>
                {errors.role && <span className="text-red-400 text-xs mt-1">Required</span>}
            </div>

            <div className="mb-8">
                <label className="block text-sm font-medium text-gray-300 mb-1">Sales team size *</label>
                <select
                    {...register('teamSize', { required: true })}
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-warm transition-colors"
                    defaultValue=""
                    suppressHydrationWarning
                >
                    <option value="" disabled>Select team size</option>
                    {TEAM_SIZES.map((size) => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
                {errors.teamSize && <span className="text-red-400 text-xs mt-1">Required</span>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-warm hover:brightness-110 text-background font-bold py-4 rounded-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg shadow-[0_0_20px_rgba(232,146,90,0.3)] hover:shadow-[0_0_30px_rgba(232,146,90,0.5)] transition-[color,background-color,box-shadow,transform,opacity,filter] duration-200"
            >
                {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : 'Request pilot access →'}
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">
                No marketing sequences. You&apos;ll hear from a founder, not a bot.
            </p>
        </form>
    );
}
