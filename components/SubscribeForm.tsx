'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { track } from '@vercel/analytics';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'loading') return;

    if (!EMAIL_REGEX.test(email)) {
      setStatus('error');
      setErrorMsg('Enter a valid email address.');
      return;
    }

    if (address) {
      setStatus('success');
      return;
    }

    setStatus('loading');
    setErrorMsg(null);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, address }),
      });

      if (res.status === 429) {
        setStatus('error');
        setErrorMsg('Too many requests. Try again in a few minutes.');
        return;
      }

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setStatus('error');
        setErrorMsg(data?.error ?? 'Could not subscribe. Please try again.');
        return;
      }

      setStatus('success');
      track('blog_subscribe_complete');
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Check your connection and try again.');
    }
  }

  if (status === 'success') {
    return (
      <p className="subscribe-success">
        You&rsquo;re on the list. Watch your inbox.
      </p>
    );
  }

  return (
    <form className="subscribe-form" onSubmit={handleSubmit} noValidate>
      <div className="hidden" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
        <label>
          Address
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
      </div>
      <label htmlFor="subscribe-email" className="sr-only">
        Email address
      </label>
      <input
        id="subscribe-email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === 'error') {
            setStatus('idle');
            setErrorMsg(null);
          }
        }}
        placeholder="you@company.com"
        aria-invalid={status === 'error' ? 'true' : undefined}
        aria-describedby={errorMsg ? 'subscribe-error' : undefined}
      />
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <Loader2 className="animate-spin w-4 h-4" />
        ) : (
          <>Notify me &rarr;</>
        )}
      </button>
      {errorMsg && (
        <span id="subscribe-error" className="subscribe-error" role="alert">
          {errorMsg}
        </span>
      )}
    </form>
  );
}
