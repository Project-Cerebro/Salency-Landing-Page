import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/MarketingHeader';
import { SiteFooter } from '@/components/sections/SiteFooter';

export const metadata: Metadata = {
  title: 'Build log · Salency',
  description:
    'A running log of what’s moving on Salency: V1 build, user interviews with B2B sales leaders, accelerator applications, and the SEO foundation.',
  alternates: { canonical: '/changelog' },
  robots: { index: true, follow: true },
};

type Entry = {
  id: string;
  date: string;
  title: string;
  body: React.ReactNode;
};

const ENTRIES: Entry[] = [
  {
    id: '2026-04-seo-foundation',
    date: 'April 2026',
    title: 'SEO foundation shipped',
    body: (
      <>
        Sitemap, robots, per-page metadata, canonicals, JSON-LD (Organization,
        WebSite, SoftwareApplication, Person, FAQPage), 1200&times;630 OG
        cards, anchor diversity, and broken-fragment fixes. The site is now
        properly discoverable to search engines and AI assistants.
      </>
    ),
  },
  {
    id: '2026-04-v1-build',
    date: 'April 2026',
    title: 'V1 build underway',
    body: (
      <>
        Shipping the V1 sales surface: notetaker bot, transcript ingest, pain
        extraction with citations, account brief, and pain-to-product mapping.
        Aiming to land the Spring 2026 pilot cohort with the first real account
        memories.
      </>
    ),
  },
  {
    id: '2026-spring-user-interviews',
    date: 'Spring 2026',
    title: 'User interview cycle running',
    body: (
      <>
        Talking with VPs of Sales, CSMs, and AEs across B2B SaaS to validate
        the institutional-memory thesis. The &ldquo;AE&rarr;CSM handoff&rdquo;
        and &ldquo;new rep on inherited book&rdquo; pain patterns keep showing
        up. If you live one of those, we want to hear about it.
      </>
    ),
  },
  {
    id: '2026-spring-accelerators',
    date: 'Spring 2026',
    title: 'Accelerator applications submitted',
    body: (
      <>
        Applying to early-stage accelerator programs with the structured-context
        platform pitch. Thesis: institutional memory is the next bottleneck for
        B2B revenue teams.
      </>
    ),
  },
];

export default function ChangelogPage() {
  return (
    <div className="page">
      <MarketingHeader />
      <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <span className="eb mb-6 inline-flex">Build log</span>
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
          What we&rsquo;re shipping.
        </h1>
        <p className="text-lg text-gray-400 mb-16 leading-relaxed">
          A running log of what&rsquo;s moving on Salency. Updated as we ship,
          interview, and apply.
        </p>

        <div className="space-y-14">
          {ENTRIES.map((entry) => (
            <article key={entry.id}>
              <div className="text-xs font-mono uppercase tracking-[0.16em] text-accent-warm mb-2">
                {entry.date}
              </div>
              <h2
                id={entry.id}
                className="text-2xl font-semibold text-white mb-3 tracking-tight"
              >
                {entry.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">{entry.body}</p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
