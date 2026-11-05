'use client';

import { openPilotModal } from '@/components/PilotModal';

export function PilotCtaSection() {
  return (
    <section className="why-cta">
      <span className="eb">Pilot cohort &middot; Spring 2026</span>
      <h2>
        Add the <em>memory layer</em> to your stack.
      </h2>
      <p className="sub">
        Pilot cohort opens Spring 2026. Your existing calls become memory in
        week one. Notetaker integration not required.
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
