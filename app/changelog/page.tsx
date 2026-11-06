import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/MarketingHeader';
import { SiteFooter } from '@/components/sections/SiteFooter';

export const metadata: Metadata = {
  title: 'Build log · Salency',
  description:
    'A running log of what’s moving on Salency: what shipped each month, plus the research and operations behind it.',
  alternates: { canonical: '/changelog' },
  robots: { index: true, follow: true },
};

type EntryKind = 'shipped' | 'building' | 'research' | 'operations';

type Entry = {
  id: string;
  /** ISO date for <time datetime>; render uses formatDate. */
  iso: string;
  kind: EntryKind;
  title: string;
  body: React.ReactNode;
};

const KIND_LABEL: Record<EntryKind, string> = {
  shipped: 'Shipped',
  building: 'Building',
  research: 'Research',
  operations: 'Operations',
};

function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00Z');
  return d.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

const ENTRIES: Entry[] = [
  {
    id: '2026-06-feature-mapping',
    iso: '2026-06-30',
    kind: 'shipped',
    title: 'Mapping down to the feature, and pain shifts',
    body: (
      <>
        Pains and requirements now map to the specific feature in your
        catalog, not only the product. Requirements get their own product
        matches. Pains no product covers go to an operational bucket for CS
        or account management. Salency now flags when a pain shifts between
        calls, not only when a later call contradicts an earlier one.
        Duplicate contacts and prospects can be merged, your catalog can be
        regenerated after you update product material, and the dashboard
        shows overdue follow-ups.
      </>
    ),
  },
  {
    id: '2026-05-ranked-matches',
    iso: '2026-05-30',
    kind: 'shipped',
    title: 'Ranked product matches in the company brief',
    body: (
      <>
        The exported company brief now ranks the products that match each
        pain. Reps can dismiss a pain that no longer applies, and it stays
        dismissed as later calls come in. We also built an evaluation
        harness that scores extraction against reference transcripts:
        quotes have to appear in the transcript and speakers have to be
        real. Prompt changes get measured before they ship.
      </>
    ),
  },
  {
    id: '2026-04-company-brief',
    iso: '2026-04-26',
    kind: 'shipped',
    title: 'Company brief export and side-by-side contradictions',
    body: (
      <>
        Reps can export a company brief for any prospect as a PDF. When a
        call contradicts an earlier one, both quotes now sit side by side
        with the meetings they came from. Salency infers each contact&rsquo;s
        stance from what they said on calls. Follow-up drafts can be scoped
        to the tasks you pick, and a new dashboard shows KPIs, recent
        meetings, and follow-ups.
      </>
    ),
  },
  {
    id: '2026-04-seo-foundation',
    iso: '2026-04-15',
    kind: 'shipped',
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
    iso: '2026-04-01',
    kind: 'building',
    title: 'V1 build underway',
    body: (
      <>
        Shipping the V1 sales surface: transcript upload, pain extraction
        with citations, company brief, and pain-to-product mapping.
      </>
    ),
  },
  {
    id: '2026-03-user-interviews',
    iso: '2026-03-15',
    kind: 'research',
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
    id: '2026-03-accelerators',
    iso: '2026-03-01',
    kind: 'operations',
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
      <main className="changelog-page pt-32 pb-24 px-6 max-w-3xl mx-auto">
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
            <article key={entry.id} className="changelog-entry">
              <div className="changelog-meta">
                <time
                  className="num"
                  dateTime={entry.iso}
                >
                  {formatDate(entry.iso)}
                </time>
                <span className={`changelog-kind changelog-kind--${entry.kind}`}>
                  {KIND_LABEL[entry.kind]}
                </span>
              </div>
              <h2
                id={entry.id}
                className="changelog-title"
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
