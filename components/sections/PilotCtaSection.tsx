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
        First account memory stands up in a week. By month two, the rep
        inheriting it reads the story, not a notes field.
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
