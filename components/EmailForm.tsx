
'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { track } from '@vercel/analytics';

interface FormData {
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    role: string;
    salesReps: string;
    website?: string;
}

export function EmailForm({ prefillEmail }: { prefillEmail?: string }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: { email: prefillEmail ?? '' },
    });

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
                <h3 className="text-2xl font-bold text-white mb-2">Thanks!</h3>
                <p className="text-accent-warm/80">We&apos;ll be in touch within 24 hours to schedule your pilot.</p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-card p-8 rounded-2xl border border-white/10 max-w-2xl mx-auto shadow-2xl"
            suppressHydrationWarning
        >
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">First Name *</label>
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
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Last Name *</label>
                    <input
                        {...register('lastName', { required: true })}
                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-warm transition-colors"
                        placeholder="Doe"
                        autoComplete="family-name"
                        suppressHydrationWarning
                    />
                    {errors.lastName && <span className="text-red-400 text-xs mt-1">Required</span>}
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">Company Name *</label>
                <input
                    {...register('companyName', { required: true })}
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-warm transition-colors"
                    placeholder="Acme Inc."
                    autoComplete="organization"
                    suppressHydrationWarning
                />
                {errors.companyName && <span className="text-red-400 text-xs mt-1">Required</span>}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">Work Email *</label>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Role *</label>
                    <select
                        {...register('role', { required: true })}
                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-warm transition-colors appearance-none"
                        suppressHydrationWarning
                    >
                        <option value="">Select Role...</option>
                        <option value="VP Sales">VP Sales</option>
                        <option value="RevOps">RevOps</option>
                        <option value="Sales Enablement">Sales Enablement</option>
                        <option value="Founder">Founder</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.role && <span className="text-red-400 text-xs mt-1">Required</span>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Number of Sales Reps *</label>
                    <select
                        {...register('salesReps', { required: true })}
                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-warm transition-colors appearance-none"
                        suppressHydrationWarning
                    >
                        <option value="">Select Range...</option>
                        <option value="5-10">5-10</option>
                        <option value="10-25">10-25</option>
                        <option value="25-50">25-50</option>
                        <option value="50+">50+</option>
                    </select>
                    {errors.salesReps && <span className="text-red-400 text-xs mt-1">Required</span>}
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-warm hover:brightness-110 text-background font-bold py-4 rounded-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg shadow-[0_0_20px_rgba(232,146,90,0.3)] hover:shadow-[0_0_30px_rgba(232,146,90,0.5)] transition-[color,background-color,box-shadow,transform,opacity,filter] duration-200"
            >
                {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : 'Get Early Access'}
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">
                Your data is secure. No spam, ever.
            </p>
        </form>
    );
}
