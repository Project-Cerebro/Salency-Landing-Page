// ProvenanceCard — Howard founder voice + photo, position 4 in the
// Path D-Hybrid composition (between HubSection and MapStage).
//
// Copy is locked verbatim per spec section 3 (5 sentences, no em dashes).
// Reuses Howard's existing /our-story headshot — no new permission needed.
// Voice: declarative, first-person, founder-as-operator (company-context §2).

import Image from 'next/image';
import { FOUNDERS } from '@/lib/founders';

const HOWARD = FOUNDERS.find((f) => f.id === 'howard')!;

export function ProvenanceCard() {
  return (
    <section className="provenance" aria-label="A note from the founder">
      <div className="provenance-card">
        <div className="provenance-photo">
          <Image
            src={HOWARD.photoSrc}
            alt={`${HOWARD.name}, ${HOWARD.role}`}
            width={160}
            height={160}
            sizes="80px"
            loading="lazy"
          />
        </div>
        <div className="provenance-body">
          <p className="provenance-copy">
            I{'\u2019'}m Howard, co-founder of Salency. At Sequence in late
            2024, a customer told me{' '}
            <em>{'\u201c'}I already told your colleague this{'\u201d'}</em>{' '}
            three times in 15 minutes. The rep who closed the deal was one
            Slack message away. The CRM had a stage field and a one-line
            note. That{'\u2019'}s why we built Salency. Spring 2026 pilot
            cohort is open.
          </p>
        </div>
      </div>
    </section>
  );
}
