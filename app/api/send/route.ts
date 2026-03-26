
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const FormSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    companyName: z.string().min(1, "Company name is required"),
    role: z.string().min(1, "Role is required"),
    salesReps: z.string().min(1, "Team size is required"),
    website: z.string().optional(), // Honeypot
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // 1. Silent Bot Check (Honeypot)
        // If the 'website' field is populated, it's a bot. Return fake success.
        if (body.website) {
            return NextResponse.json({ success: true, status: 'filtered' });
        }

        // Validate request body
        const result = FormSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: 'Invalid input', details: result.error.flatten() },
                { status: 400 }
            );
        }

        const { firstName, lastName, email, companyName, role, salesReps } = result.data;

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

        // 1. Send Admin Notification
        const adminEmailFn = resend.emails.send({
            from: 'Cerebro Admin <onboarding@resend.dev>',
            to: ['delivered@resend.dev'], // TODO: Replace with your actual admin email
            subject: `New Pilot Request: ${escapeHtml(companyName)}`,
            html: `
        <h1>New Pilot Request</h1>
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(companyName)}</p>
        <p><strong>Role:</strong> ${escapeHtml(role)}</p>
        <p><strong>Team Size:</strong> ${escapeHtml(salesReps)}</p>
      `,
        });

        // 2. Send User Confirmation
        // Note: In Resend "Test Mode", you can ONLY send to your verified email. 
        // Sending to the user's random email will fail unless you verify your domain.
        const userEmailFn = resend.emails.send({
            from: 'Cerebro Team <onboarding@resend.dev>',
            to: [email],
            subject: 'Pilot Request Received - Cerebro',
            html: `
        <h1>We received your request!</h1>
        <p>Hi ${escapeHtml(firstName)},</p>
        <p>Thanks for your interest in the Cerebro pilot. We've received your details and will be in touch within 24 hours.</p>
        <p>Best,<br/>The Cerebro Team</p>
      `,
        });

        // Send both in parallel, but handle User email failure gracefully (for Sandbox mode)
        const [adminResult, userResult] = await Promise.allSettled([adminEmailFn, userEmailFn]);

        // Check if Admin email failed (critical)
        if (adminResult.status === 'rejected') {
            throw new Error('Failed to send admin notification');
        }

        // Return success even if user email fails (common in dev/sandbox)
        return NextResponse.json({
            success: true,
            adminId: adminResult.value.data?.id,
            userEmailStatus: userResult.status === 'fulfilled' ? 'sent' : 'failed_sandbox_restriction'
        });

    } catch (error) {
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
