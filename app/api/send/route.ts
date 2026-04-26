
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder');

const ratelimit = process.env.UPSTASH_REDIS_REST_URL
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(5, '1 h'),
      analytics: true,
    })
  : null;

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

const NAME_REGEX = /^[\p{L}\p{M}\p{Zs}'\-.]{2,80}$/u;
const WEBSITE_REGEX = /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/[^\s]*)?$/i;

const FormSchema = z.object({
    name: z.string().regex(NAME_REGEX, "Invalid name").max(80),
    email: z.string().email("Invalid email address").max(120),
    website: z.string().regex(WEBSITE_REGEX, "Invalid website").max(200),
    industry: z.enum(INDUSTRIES),
    role: z.enum(ROLES),
    teamSize: z.enum(TEAM_SIZES),
    address: z.string().optional(),
});

export async function POST(request: Request) {
    try {
        if (ratelimit) {
            const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'anonymous';
            const { success } = await ratelimit.limit(ip);
            if (!success) {
                return NextResponse.json(
                    { error: 'Too many requests. Please try again later.' },
                    { status: 429 }
                );
            }
        }

        let body;
        try {
            body = await request.json();
        } catch {
            return NextResponse.json(
                { error: 'Invalid request body' },
                { status: 400 }
            );
        }

        if (body.address) {
            return NextResponse.json({ success: true, status: 'filtered' });
        }

        const result = FormSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: 'Invalid input', details: result.error.flatten() },
                { status: 400 }
            );
        }

        const { name, email, website: rawWebsite, industry, role, teamSize } = result.data;
        const website = /^https?:\/\//i.test(rawWebsite) ? rawWebsite : `https://${rawWebsite}`;

        const escapeHtml = (unsafe: string | undefined) => {
            return (unsafe || '').replace(/[&<"']/g, (m) => {
                switch (m) {
                    case '&': return '&amp;';
                    case '<': return '&lt;';
                    case '"': return '&quot;';
                    default: return '&#039;';
                }
            });
        };

        const adminEmailFn = resend.emails.send({
            from: 'Salency Admin <onboarding@resend.dev>',
            to: ['hello@salency.ai'],
            subject: `New Pilot Request: ${escapeHtml(name)} · ${escapeHtml(website)}`,
            html: `
        <h1>New Pilot Request</h1>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Work Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Website:</strong> <a href="${escapeHtml(website)}">${escapeHtml(website)}</a></p>
        <p><strong>Industry:</strong> ${escapeHtml(industry)}</p>
        <p><strong>Role:</strong> ${escapeHtml(role)}</p>
        <p><strong>Team Size:</strong> ${escapeHtml(teamSize)}</p>
      `,
        });

        const userEmailFn = resend.emails.send({
            from: 'Salency Team <onboarding@resend.dev>',
            to: [email],
            subject: 'Pilot Request Received - Salency',
            html: `
        <h1>We received your request!</h1>
        <p>Hi ${escapeHtml(name)},</p>
        <p>Thanks for your interest in the Salency pilot. We've received your details and someone from our team will reach out to you shortly.</p>
        <p>Best,<br/>The Salency Team</p>
      `,
        });

        const [adminResult, userResult] = await Promise.allSettled([adminEmailFn, userEmailFn]);

        if (adminResult.status === 'rejected') {
            throw new Error('Failed to send admin notification');
        }

        return NextResponse.json({
            success: true,
            adminId: adminResult.value.data?.id,
            userEmailStatus: userResult.status === 'fulfilled' ? 'sent' : 'failed_sandbox_restriction'
        });

    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
    }
}
