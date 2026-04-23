'use client';

import Link from 'next/link';
import { openPilotModal } from '@/components/PilotModal';

export function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-card">
        <div className="eb">Pilot cohort · Spring 2026</div>
        <h2>
          Stop paying the <em>ramp-time tax.</em>
        </h2>
        <p className="sub">
          Most AEs take months to ramp. Every week of that is revenue on the
          floor. A memory layer that outlasts any rep, so the next hire
          inherits a Day-1 brief instead of starting from zero.
        </p>
        <div className="btns">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => openPilotModal()}
          >
            Request pilot access →
          </button>
          <Link href="/investors#thesis" className="btn btn-ghost">
            Read our thesis
          </Link>
        </div>
        <div className="fine">
          Works with Gong, Fathom, Fireflies, or raw text · 1–2 week setup
          · 30-minute scoping call
        </div>
      </div>
    </section>
  );
}
