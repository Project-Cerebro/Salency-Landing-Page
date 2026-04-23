'use client';

import { openPilotModal } from '@/components/PilotModal';

export function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-card">
        <div className="eb">Early access · Q2 2026</div>
        <h2>
          Stop paying the <em>ramp-time tax.</em>
        </h2>
        <p className="sub">
          A memory layer that outlasts any rep. We&apos;re opening early access
          to a small group of revenue teams this quarter. Request a slot and
          we&apos;ll scope a fit together.
        </p>
        <div className="btns">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => openPilotModal()}
          >
            Request early access →
          </button>
          <button type="button" className="btn btn-ghost">Read the memo</button>
        </div>
        <div className="fine">
          No card required · 30-minute scoping call · Works alongside your AI
          notetaker
        </div>
      </div>
    </section>
  );
}
