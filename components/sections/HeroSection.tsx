'use client';

import { openPilotModal } from '@/components/PilotModal';

export function HeroSection() {
  return (
    <>
      <section className="hero">
        <h1 className="h1">
          Institutional memory for <em>revenue</em> teams.{' '}
          <span className="soft">Not another call recorder.</span>
        </h1>

        <p className="sub">
          AI notetakers record what was said. Salency{' '}
          <em style={{ fontStyle: 'normal', color: 'var(--copper)' }}>
            remembers what it meant
          </em>
          , structuring every conversation into pains, objections, competitors
          and commitments, then keeping that context alive as reps rotate and
          accounts hand off.
        </p>

        <div className="cta-row">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => openPilotModal()}
          >
            Request a pilot →
          </button>
          <button className="btn btn-ghost">Watch 90-second tour</button>
        </div>

        <div className="hero-meta">
          <span className="hero-meta-item">Gong, Fireflies, Otter, Granola, Fathom, or any raw transcript</span>
          <span className="hero-meta-item">Early access · Q2 2026</span>
        </div>
      </section>

      <div className="hero-hairline" aria-hidden="true"></div>
    </>
  );
}
