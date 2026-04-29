import { EmailForm } from '@/components/EmailForm';

type MarkerKind = 'check' | 'dot';

const APPLY_CARDS: Array<{ title: string; marker: MarkerKind; items: string[] }> = [
  {
    title: 'Pilot includes',
    marker: 'check',
    items: [
      'Weekly extraction reports on your calls',
      '30-minute weekly debrief with our team',
      '1–2 week setup, no obligation to continue',
    ],
  },
  {
    title: 'Good fit if',
    marker: 'dot',
    items: [
      '5–50 reps on your revenue team',
      'Already using a notetaker (Gong, Fathom, Fireflies) or raw transcripts',
      'Reps inheriting accounts, deals, or customers',
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
        <p className="eb">Pilot cohort · Spring 2026</p>
        <h1>
          Join the <em>pilot.</em>
        </h1>
        <p className="apply-lede">
          A memory layer that outlasts any rep. We&apos;re opening early access to a
          small group of revenue teams this cohort. Tell us about your team and
          we&apos;ll scope the fit together.
        </p>
        <p className="apply-price">
          Free during the Spring 2026 pilot. Pricing per engagement after.
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
        <div className="apply-form">
          <EmailForm />
        </div>
      </section>
    </main>
  );
}
