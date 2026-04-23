import { EmailForm } from '@/components/EmailForm';

const PILOT_INCLUDES = [
  '60 days of free access',
  'Weekly extraction reports on your calls',
  '30-minute weekly debrief with our team',
  '1–2 week setup, no obligation to continue',
];

const IDEAL = [
  '5–50 reps on your revenue team',
  'Already using a notetaker (Gong, Fathom, Fireflies) or raw transcripts',
  'Reps inheriting accounts, deals, or customers',
];

export function PilotApplication() {
  return (
    <main className="apply-page max-w-[1280px] mx-auto mt-20 px-10 py-5">
      <section className="mb-16 md:mb-20 max-w-3xl">
        <p className="eb mb-5">Pilot cohort · Spring 2026</p>
        <h1 className="text-5xl md:text-6xl mb-6 text-balance">
          Join the <em>pilot.</em>
        </h1>
        <p className="apply-lede text-lg md:text-xl max-w-[52ch]">
          A memory layer that outlasts any rep. We&apos;re opening early access to a
          small group of revenue teams this cohort. Tell us about your team and
          we&apos;ll scope the fit together.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
        <div className="space-y-6 order-2 lg:order-1">
          <div className="apply-card">
            <h3 className="text-xl mb-4">Pilot includes</h3>
            <ul className="space-y-3">
              {PILOT_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-accent-warm mt-[2px] shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="apply-card">
            <h3 className="text-xl mb-4">Good fit if</h3>
            <ul className="space-y-3">
              {IDEAL.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-warm mt-[9px] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <EmailForm />
        </div>
      </section>
    </main>
  );
}
