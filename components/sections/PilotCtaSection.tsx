'use client';

import { openPilotModal } from '@/components/PilotModal';

export function PilotCtaSection() {
  return (
    <section className="why-cta">
      <span className="eb">Pilot applications open</span>
      <h2>
        Add the <em>memory layer</em> to your stack.
      </h2>
      <p className="sub">
        Pilot applications are open. The transcripts you already have become
        memory within the first two weeks. Notetaker integration not required.
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
