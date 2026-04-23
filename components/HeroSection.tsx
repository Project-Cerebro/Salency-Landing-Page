'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { HeroMock } from '@/components/HeroMock';
import { HeroEmailCapture } from '@/components/HeroEmailCapture';
import { InteractiveDemo } from '@/components/InteractiveDemo';
import { openPilotModal } from '@/components/PilotModal';

export function HeroSection({ onEmailCapture }: { onEmailCapture?: (email: string) => void }) {
  const [, setCapturedEmail] = useState('');

  const handleCapture = (email: string) => {
    setCapturedEmail(email);
    onEmailCapture?.(email);
  };

  return (
    <section id="hero" className="py-24 md:py-32 px-6 max-w-7xl mx-auto text-center">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="inline-block bg-accent-warm/10 text-accent-warm px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-accent-warm/20 shadow-[0_0_15px_rgba(232,146,90,0.1)]">
          Pilot Access Open
        </div>

        <h1 className="text-5xl md:text-7xl font-normal tracking-tight text-white mb-6 leading-[1.08] drop-shadow-2xl" style={{ fontFamily: 'var(--font-instrument-serif), Georgia, serif' }}>
          AI that remembers every customer <em className="italic text-accent-warm not-italic" style={{ fontStyle: 'italic' }}>pain</em><br className="hidden md:block" /> your sales reps forget.
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
          Gong records your calls. Salency solves what happens after.
        </p>

        <p className="text-base text-gray-500 max-w-2xl mx-auto mb-12">
          Built for B2B SaaS teams with 5–50 reps who are tired of losing context between calls.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => openPilotModal()}
            className="inline-flex items-center bg-accent-warm hover:brightness-110 text-background font-bold px-8 py-4 rounded-lg text-lg shadow-[0_0_20px_rgba(232,146,90,0.3)] hover:shadow-[0_0_40px_rgba(232,146,90,0.5)] hover:-translate-y-1 transition-[color,background-color,box-shadow,transform,filter] duration-200"
          >
            Get Early Access
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <a
            href="#how-it-works"
            className="inline-flex items-center text-gray-300 hover:text-white font-medium px-6 py-4 rounded-lg text-lg border border-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-[color,border-color,transform] duration-200"
          >
            See How It Works
          </a>
        </div>

        <HeroEmailCapture onCapture={handleCapture} />
      </div>

      <HeroMock />
      <InteractiveDemo />
    </section>
  );
}
