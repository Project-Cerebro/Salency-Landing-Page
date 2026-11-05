'use client';

// BottomClaim — Path D-Hybrid section 8. Final CTA. Replaces CtaSection.
// Locked copy per spec section 8. Quote is verbatim from company-context
// §3 wound metaphor (single word "her" replaced with "your team" for
// genericity).

import { openPilotModal } from '@/components/PilotModal';

export function BottomClaim() {
  return (
    <section className="bottom-claim">
      <div className="bottom-claim-card">
        <p className="bottom-claim-quote">
          {'\u201c'}The empty CRM is the wound. Everything else is your team
          trying to bandage it.{'\u201d'}
        </p>
        <p className="bottom-claim-followup">
          Salency is the layer that fills it.
        </p>
        <p className="bottom-claim-signoff">
          Spring 2026 pilot cohort {'\u00b7'} open
        </p>
        <div className="bottom-claim-cta">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => openPilotModal()}
          >
            Request a pilot {'\u2192'}
          </button>
        </div>
      </div>
    </section>
  );
}
