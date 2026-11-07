import { EmailForm } from '@/components/EmailForm';
import { PILOT_TERMS } from '@/lib/pilot-terms';

type MarkerKind = 'check' | 'dot';

const APPLY_CARDS: Array<{ title: string; marker: MarkerKind; items: readonly string[] }> = [
  {
    title: 'Pilot includes',
    marker: 'check',
    items: PILOT_TERMS,
  },
  {
    title: 'Good fit if',
    marker: 'dot',
    items: [
      '5–50 reps on your revenue team',
      'Already using a notetaker (Gong, Fathom, Fireflies) or raw transcripts',
      'Reps inheriting accounts, before or after the sale',
    ],
  },
];

function Marker({ kind }: { kind: MarkerKind }) {
  if (kind === 'check') {
    return (
      <span className="apply-check" aria-hidden>
        ✓
      </span>
    );
  }
  return <span className="apply-dot" aria-hidden />;
}

export function PilotApplication() {
  return (
    <main className="apply-page">
      <section className="apply-intro">
        <p className="eb">Pilot applications open</p>
        <h1>
          Join the <em>pilot.</em>
        </h1>
        <p className="apply-lede">
          A memory layer that outlasts any rep. We&apos;re opening the pilot to a
          small group of revenue teams. Tell us about your team and
          we&apos;ll scope the fit together.
        </p>
        <p className="apply-price">
          Free for 4–6 weeks. Pricing per engagement after.
        </p>
      </section>

      <section className="apply-layout">
        <div className="apply-sidebar">
          {APPLY_CARDS.map((card) => (
            <div key={card.title} className="apply-card">
              <h3>{card.title}</h3>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>
                    <Marker kind={card.marker} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="apply-form" id="apply">
          <EmailForm />
        </div>
      </section>
    </main>
  );
}
