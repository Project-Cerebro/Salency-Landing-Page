'use client';

import { useState, FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { track } from '@vercel/analytics';
import { openPilotModal } from '@/components/PilotModal';

export function HeroEmailCapture({ onCapture }: { onCapture: (email: string) => void }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid work email');
      return;
    }
    track('hero_email_submit');
    onCapture(email);
    openPilotModal(email);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your work email"
          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent-warm/50 transition-colors"
        />
        <button
          type="submit"
          className="bg-accent-warm/20 hover:bg-accent-warm/30 text-accent-warm font-semibold px-4 py-3 rounded-lg text-sm border border-accent-warm/30 transition-colors shrink-0"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      {error && <p className="text-red-400 text-xs mt-2 text-center">{error}</p>}
    </form>
  );
}
