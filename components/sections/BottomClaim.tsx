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
          The empty CRM is the wound. Everything else is your team trying to
          bandage it.
        </p>
        <p className="bottom-claim-followup">
          Salency keeps what the CRM never captured.
        </p>
        <p className="bottom-claim-signoff">
          Free pilot {'\u00b7'} 4{'\u2013'}6 weeks {'\u00b7'} no obligation
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
