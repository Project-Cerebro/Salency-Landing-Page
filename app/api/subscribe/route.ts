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

const SubscribeSchema = z.object({
  email: z.string().email('Invalid email address').max(120),
  address: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    if (ratelimit) {
      const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'anonymous';
      const { success } = await ratelimit.limit(`subscribe:${ip}`);
      if (!success) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 },
        );
      }
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    if (body.address) {
      return NextResponse.json({ success: true, status: 'filtered' });
    }

    const result = SubscribeSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: result.error.flatten() },
        { status: 400 },
      );
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (!audienceId) {
      return NextResponse.json(
        { error: 'Subscribe is not configured. Try again soon.' },
        { status: 503 },
      );
    }

    const { email } = result.data;
    const { error } = await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    if (error) {
      console.error('Resend contacts.create error:', error);
      return NextResponse.json(
        { error: 'Could not subscribe. Please try again.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Could not subscribe. Please try again.' },
      { status: 500 },
    );
  }
}
