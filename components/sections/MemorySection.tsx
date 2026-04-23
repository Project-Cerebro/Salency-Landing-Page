'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import { openPilotModal } from '@/components/PilotModal';

const PEOPLE = [
  {
    name: 'Priya Shah',
    role: 'VP Sales',
    stance: 'champion' as const,
    stanceLabel: 'Champion',
    quote: 'We lose deals to forgotten context every quarter.',
    cite: 'call 03, Apr 14 · 18:02',
  },
  {
    name: 'Marcus Chen',
    role: 'Sales Ops',
    stance: 'skeptic' as const,
    stanceLabel: 'Skeptic',
    quote: 'How does this not become another tab we forget about?',
    cite: 'call 03, Apr 14 · 42:18',
  },
];

const PAINS = [
  {
    quote: 'Handoff loses context every time an AE rotates off.',
    who: 'Priya Shah, VP Sales',
    cite: 'call 03, Apr 14 · 18:02',
    urgency: 3,
  },
  {
    quote:
      'We can\u2019t tell which pains repeat across accounts \u2014 it\u2019s all in reps\u2019 heads.',
    who: 'Priya Shah, VP Sales',
    cite: 'call 02, Apr 07 · 27:44',
    urgency: 2,
  },
  {
    quote: 'Our CRM has a notes field, but nothing structured we can query.',
    who: 'Marcus Chen, Sales Ops',
    cite: 'call 03, Apr 14 · 41:02',
    urgency: 1,
  },
];

const COMPARE_ROWS = [
  {
    signal: 'Customer pain',
    crm: 'Free-text field, last writer wins',
    salency: 'Cited quote, speaker, timestamp \u2014 ranked by urgency',
  },
  {
    signal: 'Contradiction between calls',
    crm: 'Invisible \u2014 fields overwrite silently',
    salency: 'Flagged with both source citations',
  },
  {
    signal: 'Pain \u2192 product fit',
    crm: 'One value per field, no ranking',
    salency: 'Confidence-ranked, top-N per pain',
  },
  {
    signal: 'Pattern across accounts',
    crm: 'CSV export to a spreadsheet',
    salency:
      'Live graph query, "handoff loses context" lights up 7 accounts',
  },
];

function UrgencyDots({ level }: { level: number }) {
  return (
    <span className="intensity" aria-label={`Urgency ${level} of 3`}>
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={i <= level ? 'intensity-dot' : 'intensity-dot off'}
        />
      ))}
    </span>
  );
}

function ConfBar({ pct }: { pct: number }) {
  return (
    <span className="mapping-bar">
      <span
        className="mapping-bar-fill"
        style={{ width: `${Math.round(pct * 100)}%` }}
      />
    </span>
  );
}

export function MemorySection() {
  return (
    <>
      <ScrollReveal>
        <section className="mem-intro">
          <span className="eb">Memory · Built for revenue teams</span>
          <h1>
            Institutional memory, <em>built.</em>
          </h1>
          <p className="lede">
            Every call your team runs becomes{' '}
            <em>structured, cited, queryable</em> context, mapped to your product
            catalog and tied to the rep who heard it. The new AE inherits a Day-1
            brief. The CS director picks up mid-story. Nothing is re-asked.
          </p>
        </section>
      </ScrollReveal>

      {/* ─── Surface 01: featured brief ─── */}
      <ScrollReveal>
        <section className="mem-hero-surface">
          <div className="mem-hero-frame">
            <div className="mem-hero-head">
              <span className="mem-hero-kicker">The brief &middot; Surface 01</span>
              <span className="mem-hero-chip">Design preview</span>
            </div>

            <div className="mem-brief">
              <div className="crumb">
                <span className="crumb-link">Prospects</span>
                <span className="sep">/</span>
                <span>Acme Corp</span>
              </div>
              <h2 className="brief-title">
                Acme Corp &middot; <em>Day-1 brief</em>
              </h2>
              <div className="brief-meta">
                <span>Updated 2026-04-22</span>
                <span className="sep">&middot;</span>
                <span className="pulse">3 new pains flagged</span>
                <span className="sep">&middot;</span>
                <span>12 calls indexed &middot; 2 stakeholders on this card</span>
              </div>

              {/* People */}
              <div className="brief-block">
                <div className="eb">
                  People{' '}
                  <span className="sub">who&rsquo;s in the room</span>
                </div>
                <div className="people">
                  {PEOPLE.map((p) => (
                    <div key={p.name} className="person">
                      <div className="person-main">
                        <span className="person-name">{p.name}</span>
                        <span className="person-role">{p.role}</span>
                        <span className={`stance ${p.stance}`}>
                          {p.stanceLabel}
                        </span>
                      </div>
                      <div className="person-quote">
                        &ldquo;{p.quote}&rdquo;
                      </div>
                      <div className="person-cite">
                        <span>
                          {p.name}, {p.role} &middot;
                        </span>
                        <span className="person-cite-link">{p.cite}</span>
                        <span className="arrow">&rsaquo;&rsaquo;</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* They need */}
              <div className="brief-block">
                <div className="eb">
                  They need <span className="sub">top pains, cited</span>
                </div>
                <div className="pains">
                  {PAINS.map((p) => (
                    <div key={p.cite} className="pain">
                      <p className="pain-quote">&ldquo;{p.quote}&rdquo;</p>
                      <div className="pain-cite">
                        <span>
                          {p.who} &middot;{' '}
                          <span className="pain-cite-link">{p.cite}</span>
                        </span>
                        <UrgencyDots level={p.urgency} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="brief-foot">
                <span>This is what the rep opens Monday at 1:45pm.</span>
                <span className="brief-foot-also">
                  Also in the brief: open commitments &middot; contradictions &middot; pain &rarr; product mapping &middot; next-step cliffhanger.
                </span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── Supporting surfaces 02 / 03 / 04 ─── */}
      <ScrollReveal>
        <section className="mem-supporting">
          <div className="mem-support-head">
            <span className="eb">
              What else lives here <span className="sub">supporting surfaces</span>
            </span>
          </div>
          <div className="mem-support-grid">
            <article className="mem-support-card">
              <div className="support-head">
                <span className="idx">02</span>
                <span className="support-chip">Design preview</span>
              </div>
              <h3>
                <em>Pain &rarr; product</em> mapping
              </h3>
              <p className="support-desc">
                Every extracted pain ranked against your catalog, confidence-scored.
                Three upsells queued before the AE has ended the call.
              </p>
              <div className="support-mock pp-mock">
                <div className="pp-row">
                  <span className="pp-prod">Memory Layer</span>
                  <ConfBar pct={0.92} />
                  <span className="pp-conf">0.92</span>
                </div>
                <div className="pp-row">
                  <span className="pp-prod">Contradiction Detection</span>
                  <ConfBar pct={0.74} />
                  <span className="pp-conf">0.74</span>
                </div>
                <div className="pp-row">
                  <span className="pp-prod">Account Pattern Search</span>
                  <ConfBar pct={0.61} />
                  <span className="pp-conf">0.61</span>
                </div>
              </div>
            </article>

            <article className="mem-support-card">
              <div className="support-head">
                <span className="idx">03</span>
                <span className="support-chip">Design preview</span>
              </div>
              <h3>
                <em>Contradictions</em> flagged
              </h3>
              <p className="support-desc">
                Call A: &ldquo;budget is fifty.&rdquo; Call B: &ldquo;budget&rsquo;s
                tight.&rdquo; Salency flags it with both citations before the rep
                re-pitches the wrong number.
              </p>
              <div className="support-mock cx-mock">
                <div className="cx-row">
                  <span className="cx-date">Apr 07</span>
                  <span className="cx-quote">
                    &ldquo;budget is fifty.&rdquo;
                  </span>
                </div>
                <div className="cx-arrow">&darr;</div>
                <div className="cx-row">
                  <span className="cx-date">Apr 14</span>
                  <span className="cx-quote">
                    &ldquo;budget&rsquo;s tight, maybe twenty.&rdquo;
                  </span>
                </div>
              </div>
            </article>

            <article className="mem-support-card">
              <div className="support-head">
                <span className="idx">04</span>
                <span className="support-chip">Design preview</span>
              </div>
              <h3>
                <em>Handoff export</em>
              </h3>
              <p className="support-desc">
                One-click markdown. The new AE gets a brief. The CS director gets
                a handoff. Nobody gets &ldquo;I wasn&rsquo;t in that call.&rdquo;
              </p>
              <div className="support-mock hx-mock">
                <div className="hx-line"># Acme Corp — handoff</div>
                <div className="hx-line muted">## Stakeholders</div>
                <div className="hx-line">- Priya Shah, VP Sales (champion)</div>
                <div className="hx-line">- Marcus Chen, Sales Ops (skeptic)</div>
                <div className="hx-line muted">## Open commitments</div>
                <div className="hx-line">- Pricing memo &middot; due Apr 26</div>
                <div className="hx-line muted">## Watch-outs</div>
                <div className="hx-line">- Budget reset flagged Apr 14</div>
              </div>
            </article>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── CRM vs Salency ─── */}
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
            <Link href="/investors#thesis">Read the full thesis &rarr;</Link>
          </p>
        </section>
      </ScrollReveal>

      {/* ─── Transcript sources ─── */}
      <ScrollReveal>
        <section className="mem-compat">
          <span className="eb">Transcript sources</span>
          <p className="mem-compat-line">
            Bring transcripts from{' '}
            <em>Gong, Fathom, Fireflies, Otter, Zoom</em>, or raw .vtt / .txt.
            Paste or upload &mdash; takes about a minute per call.
          </p>
        </section>
      </ScrollReveal>

      {/* ─── Pilot CTA ─── */}
      <ScrollReveal>
        <section className="mem-cta">
          <span className="eb">Pilot cohort &middot; Spring 2026</span>
          <h2>
            Inherit every account&rsquo;s <em>memory</em> from Day 1.
          </h2>
          <p className="sub">
            We&rsquo;re onboarding a small group of revenue teams this cohort.
            Tell us about your team and we&rsquo;ll scope the fit together.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => openPilotModal()}
          >
            Request a pilot &rarr;
          </button>
        </section>
      </ScrollReveal>
    </>
  );
}
