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

const ROLES = [
    'AE',
    'Sales Manager',
    'VP Sales',
    'RevOps',
    'CS Lead',
    'Founder / CEO',
    'Other',
] as const;

const TEAM_SIZES = ['1–4', '5–10', '11–50', '50+'] as const;

const normalizeWebsite = (raw: string) =>
    raw.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '');

const FormSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    email: z.string().email('Invalid email address'),
    companyWebsite: z
        .string()
        .min(1, 'Company website is required')
        .regex(/^[^\s]+\.[^\s]+$/, 'Invalid website')
        .transform(normalizeWebsite),
    role: z.enum(ROLES),
    teamSize: z.enum(TEAM_SIZES),
    website: z.string().optional(),
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

        if (body.website) {
            return NextResponse.json({ success: true, status: 'filtered' });
        }

        const result = FormSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: 'Invalid input', details: result.error.flatten() },
                { status: 400 }
            );
        }

        const { firstName, email, companyWebsite, role, teamSize } = result.data;

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
            to: ['founders@salency.ai'],
            subject: `New Pilot Request: ${escapeHtml(companyWebsite)}`,
            html: `
        <h1>New Pilot Request</h1>
        <p><strong>Name:</strong> ${escapeHtml(firstName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company website:</strong> ${escapeHtml(companyWebsite)}</p>
        <p><strong>Role:</strong> ${escapeHtml(role)}</p>
        <p><strong>Team size:</strong> ${escapeHtml(teamSize)}</p>
      `,
        });

        const userEmailFn = resend.emails.send({
            from: 'Salency Team <onboarding@resend.dev>',
            to: [email],
            subject: 'Pilot Request Received - Salency',
            html: `
        <h1>We received your request!</h1>
        <p>Hi ${escapeHtml(firstName)},</p>
        <p>Thanks for your interest in the Salency pilot. We've received your details and will be in touch within 24 hours.</p>
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
