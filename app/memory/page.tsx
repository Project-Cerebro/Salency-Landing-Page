'use client';

import Link from 'next/link';
import { MarketingHeader } from '@/components/MarketingHeader';
import { SiteFooter } from '@/components/sections/SiteFooter';
import { ScrollReveal } from '@/components/ScrollReveal';
import { openPilotModal } from '@/components/PilotModal';

const COMPARE_ROWS = [
  {
    signal: 'Customer pain',
    crm: 'Free-text field, last writer wins',
    salency: 'Cited quote, speaker, timestamp — ranked by urgency',
  },
  {
    signal: 'Contradiction between calls',
    crm: 'Invisible — fields overwrite silently',
    salency: 'Flagged with both source citations',
  },
  {
    signal: 'Pain → product fit',
    crm: 'One value per field, no ranking',
    salency: 'Confidence-ranked, top-N per pain',
  },
  {
    signal: 'Pattern across accounts',
    crm: 'CSV export to a spreadsheet',
    salency: 'Live graph query, "handoff loses context" lights up 7 accounts',
  },
];

export default function MemoryPage() {
  return (
    <div className="page memory-page">
      <MarketingHeader />

      <ScrollReveal>
        <section className="mem-intro">
          <span className="eb">Memory · Built for revenue teams</span>
          <h1>
            Institutional memory, <em>built.</em>
          </h1>
          <p className="lede">
            Every call your team runs becomes <em>structured, cited, queryable</em>{' '}
            context, mapped to your product catalog and tied to the rep who heard it.
            The new AE inherits a Day-1 brief. The CS director picks up mid-story.
            Nothing is re-asked.
          </p>
        </section>
      </ScrollReveal>

      <section className="mem-surfaces">
        <ScrollReveal>
          <article className="mem-card">
            <div className="mem-card-head">
              <span className="idx">Surface 01</span>
            </div>
            <h3>
              <em>Day-1 brief</em> per account
            </h3>
            <p className="desc">
              Every stakeholder named, every pain cited, every open commitment
              listed. The new rep walks in briefed, not briefed-from-scratch.
            </p>
            <div className="shot">
              {/* TODO: swap with <img src="/memory/day-1-brief.png" alt="..." /> when Howard drops screenshot */}
              Screenshot · Day-1 brief
            </div>
          </article>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <article className="mem-card">
            <div className="mem-card-head">
              <span className="idx">Surface 02</span>
              <span className="preview-chip">Design preview</span>
            </div>
            <h3>
              <em>Pain → product</em> mapping
            </h3>
            <p className="desc">
              Every extracted pain ranked against your catalog, confidence-scored.
              Three upsells queued before the AE has ended the call.
            </p>
            <div className="mem-mock">
              <div className="mock-head">
                <span>Acme Corp · Call 03 · 2026-04-14</span>
                <span>Confidence</span>
              </div>
              <div className="mock-pain">
                &ldquo;Handoff loses context every time an AE rotates off.&rdquo;{' '}
                <span style={{ fontStyle: 'normal', color: 'var(--ink-4)' }}>
                  — Priya Shah, VP Sales
                </span>
              </div>
              <div className="mock-row">
                <span className="mock-prod">Memory Layer · Handoff Brief</span>
                <span
                  className="mock-bar"
                  style={{ ['--pct' as string]: '92%' } as React.CSSProperties}
                />
                <span className="mock-conf">0.92</span>
              </div>
              <div className="mock-row">
                <span className="mock-prod">Contradiction Detection add-on</span>
                <span
                  className="mock-bar"
                  style={{ ['--pct' as string]: '74%' } as React.CSSProperties}
                />
                <span className="mock-conf">0.74</span>
              </div>
              <div className="mock-row">
                <span className="mock-prod">Account Pattern Search</span>
                <span
                  className="mock-bar"
                  style={{ ['--pct' as string]: '61%' } as React.CSSProperties}
                />
                <span className="mock-conf">0.61</span>
              </div>
            </div>
          </article>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <article className="mem-card">
            <div className="mem-card-head">
              <span className="idx">Surface 03</span>
            </div>
            <h3>
              <em>Contradictions</em> flagged
            </h3>
            <p className="desc">
              Call A: &ldquo;budget is fifty.&rdquo; Call B, three weeks later:
              &ldquo;budget&apos;s tight, maybe twenty.&rdquo; Salency flags it,
              with both citations, before the rep re-pitches the wrong number.
            </p>
            <div className="shot">
              {/* TODO: swap with <img src="/memory/contradictions.png" alt="..." /> */}
              Screenshot · Contradictions UI
            </div>
          </article>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <article className="mem-card">
            <div className="mem-card-head">
              <span className="idx">Surface 04</span>
            </div>
            <h3>
              <em>Handoff export</em>
            </h3>
            <p className="desc">
              One-click markdown. The new AE gets a brief. The CS director gets a
              handoff. Nobody gets &ldquo;I wasn&apos;t in that call.&rdquo;
            </p>
            <div className="shot">
              {/* TODO: swap with <img src="/memory/handoff-export.png" alt="..." /> */}
              Screenshot · Handoff export
            </div>
          </article>
        </ScrollReveal>
      </section>

      <ScrollReveal>
        <section className="mem-compare">
          <div className="mem-compare-head">
            <span className="eb">Not another CRM field</span>
            <h2>
              Memory is a <em>graph with time.</em> CRMs store flat rows.
            </h2>
          </div>
          <table className="mem-table">
            <thead>
              <tr>
                <th>Signal</th>
                <th>In your CRM</th>
                <th>In Salency</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr key={row.signal}>
                  <td>{row.signal}</td>
                  <td>{row.crm}</td>
                  <td>{row.salency}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mem-compare-foot">
            Flatten the graph and you kill the thing.{' '}
            <Link href="/investors#thesis">Read the full thesis →</Link>
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="mem-compat">
          <span className="eb">Transcript sources</span>
          <p className="mem-compat-line">
            Bring transcripts from <em>Gong, Fathom, Fireflies, Otter, Zoom</em>,
            or raw .vtt / .txt. Paste or upload — takes about a minute per call.
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="mem-cta">
          <span className="eb">Pilot cohort · Spring 2026</span>
          <h2>
            Inherit every account&apos;s <em>memory</em> from Day 1.
          </h2>
          <p className="sub">
            We&apos;re onboarding a small group of revenue teams this cohort. Tell
            us about your team and we&apos;ll scope the fit together.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => openPilotModal()}
          >
            Request a pilot →
          </button>
        </section>
      </ScrollReveal>

      <SiteFooter />
    </div>
  );
}
