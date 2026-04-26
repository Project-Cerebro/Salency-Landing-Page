'use client';

import { openPilotModal } from '@/components/PilotModal';

export function PilotCtaSection() {
  return (
    <section className="why-cta">
      <span className="eb">Pilot cohort &middot; Spring 2026</span>
      <h2>
        Start the memory. <em>Inherit it forever.</em>
      </h2>
      <p className="sub">
        Week one, your existing calls become searchable memory. Every handoff
        after that &mdash; internal or customer-side &mdash; reads the story
        instead of restarting the relationship. No notetaker integration
        required to start.
      </p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => openPilotModal()}
      >
        Request a pilot &rarr;
      </button>
    </section>
  );
}
