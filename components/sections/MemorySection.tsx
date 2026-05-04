'use client';

// MemorySection — /memory body, sits below <HeroArtifact /> at top of the page.
// Editorial pass (2026-05-03): all demo fixtures realigned to the canonical
// Hudson Terrace synthetic arc + Atlas/Helix/Vector/Anchor catalog. Reader
// flow: HeroArtifact (3-card stack at page top) → this section's intro
// pivots straight to "below is what those calls compose into" without
// re-introducing the concept.
//
// Honesty boundary: every quote and citation here resolves against
// HUDSON_TERRACE_BRIEF / HUDSON_TERRACE_ARC, the same data the modal serves
// on /. The SYNTHETIC TRANSCRIPT chip on Surface 01 mirrors the modal label.

import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import { openPilotModal } from '@/components/PilotModal';
import { MemoryStackSection } from '@/components/sections/MemoryStackSection';
import {
  ACCOUNT_NAME,
  HUDSON_TERRACE_BRIEF,
  SYNTHETIC_LABEL,
} from '@/lib/synthetic-arc';

const { people, needs, commitments, changes } = HUDSON_TERRACE_BRIEF;

// Pain → product rows for Surface 02 mirror the Map block on /, drawn from
// HUDSON_TERRACE_BRIEF.map. Confidence numbers match arc.ts SCORE_LOOKUP
// in MapStage so the same artifact reads consistent across both pages.
const PP_ROWS = [
  { product: 'Atlas Settlement', capability: 'sub-second settlement', conf: 0.94 },
  { product: 'Helix Recon', capability: 'multi-venue reconciliation', conf: 0.92 },
  { product: 'Atlas Singapore', capability: 'MAS-recognized regional deployment', conf: 0.85 },
];

const COMPARE_ROWS = [
  {
    signal: 'Customer pain',
    crm: 'Free-text field, last writer wins',
    salency: 'Cited quote, speaker, timestamp, ranked by confidence',
  },
  {
    signal: 'Contradiction between calls',
    crm: 'Invisible. Fields overwrite silently',
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
      'Search \u201csettlement delay\u201d, every account that flagged it surfaces',
  },
];

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
  const heroPerson = people.hero;
  const heroNeed = needs.hero;
  const fromCall = changes.hero.fromCall;
  const toCall = changes.hero.toCall;

  return (
    <>
      <ScrollReveal>
        <section className="mem-intro">
          <span className="eb">Memory {'\u00b7'} Built for revenue teams</span>
          <h1>
            Institutional memory, <em>built.</em>
          </h1>
          <p className="lede">
            Above: 3 calls indexed. Below: what they compose into. A Day-1
            brief, pain {'\u2192'} product mapping, contradiction alerts,
            handoff export. Every artifact cited to a transcript line, anchored
            to the rep who heard it.
          </p>
        </section>
      </ScrollReveal>

      {/* ─── Surface 01: Day-1 brief, anchored to Hudson Terrace ─── */}
      <ScrollReveal>
        <section className="mem-hero-surface">
          <div className="mem-hero-frame">
            <div className="mem-hero-head">
              <div className="mem-hero-title-group">
                <span className="mem-hero-title">
                  {ACCOUNT_NAME} {'\u00b7'} <em>Day-1 brief</em>
                </span>
                <span className="mem-hero-meta">
                  <span>Auto-generated 2026-04-06</span>
                  <span className="sep">{'\u00b7'}</span>
                  <span className="pulse">3 calls indexed</span>
                  <span className="sep">{'\u00b7'}</span>
                  <span>21 signals extracted</span>
                </span>
              </div>
              <span className="mem-hero-chip">{SYNTHETIC_LABEL}</span>
            </div>

            <div className="mem-brief-grid">
              {/* LEFT: People */}
              <div className="brief-block">
                <div className="eb">
                  People <span className="sub">who&rsquo;s in the room</span>
                </div>
                <div className="people">
                  <div className="person">
                    <div className="person-main">
                      <span className="person-name">{heroPerson.speakerName}</span>
                      <span className="person-role">{heroPerson.speakerTitle}</span>
                      <span className="stance champion">Champion</span>
                    </div>
                    <div className="person-quote">
                      &ldquo;{heroPerson.text}&rdquo;
                    </div>
                    <div className="person-cite">
                      <span>{heroPerson.speakerName} {'\u00b7'} </span>
                      <span className="person-cite-link">
                        {heroPerson.displayDate} {'\u00b7'} {heroPerson.citationTimestamp}
                      </span>
                    </div>
                  </div>
                  {people.secondary.map((p) => (
                    <div key={p.name} className="person">
                      <div className="person-main">
                        <span className="person-name">{p.name}</span>
                        <span className="person-role">{p.title}</span>
                        {p.stance && (
                          <span className="stance">{p.stance}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: They need */}
              <div className="brief-block">
                <div className="eb">
                  They need <span className="sub">top pains, cited</span>
                </div>
                <div className="pains">
                  <div className="pain">
                    <p className="pain-quote">&ldquo;{heroNeed.text}&rdquo;</p>
                    <div className="pain-cite">
                      <span>
                        {heroNeed.speakerName} {'\u00b7'}{' '}
                        <span className="pain-cite-link">
                          {heroNeed.displayDate} {'\u00b7'} {heroNeed.citationTimestamp}
                        </span>
                      </span>
                    </div>
                  </div>
                  {needs.secondary.map((p, i) => (
                    <div key={i} className="pain">
                      <p className="pain-quote">{p.text}</p>
                      <div className="pain-cite">
                        <span>
                          {p.speakerName} {'\u00b7'}{' '}
                          <span className="pain-cite-link">
                            {p.displayDate} {'\u00b7'} {p.citationTimestamp}
                          </span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bridge below the card */}
          <div className="mem-hero-bridge">
            <span className="bridge-lead">
              This is what the rep opens 15 minutes before the next call.
            </span>
            <span className="bridge-also">
              Also in the brief: commitments {'\u00b7'} contradictions {'\u00b7'}{' '}
              pain {'\u2192'} product {'\u00b7'} next-step calendar.{' '}
              <Link href="/investors#platform" className="bridge-link">
                Why not Salesforce {'\u2192'}
              </Link>
              {' \u00b7 '}
              <Link href="/why-salency" className="bridge-link">
                Why Salency {'\u2192'}
              </Link>
            </span>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── Surfaces 02 / 03 / 04 ─── */}
      <ScrollReveal>
        <section className="mem-supporting">
          <div className="mem-support-head">
            <span className="eb">
              What else lives here{' '}
              <span className="sub">supporting surfaces</span>
            </span>
          </div>
          <div className="mem-support-grid">
            <article className="mem-support-card">
              <div className="support-head">
                <span className="idx">02</span>
              </div>
              <h3>
                <em>Pain {'\u2192'} product</em> mapping
              </h3>
              <p className="support-desc">
                Every extracted pain ranked against your catalog,
                confidence-scored. The recommendation a rep needed before the
                next call.
              </p>
              <div className="support-mock pp-mock">
                {PP_ROWS.map((r) => (
                  <div key={r.product} className="pp-row">
                    <span className="pp-prod">{r.product}</span>
                    <ConfBar pct={r.conf} />
                    <span className="pp-conf">{r.conf.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="mem-support-card">
              <div className="support-head">
                <span className="idx">03</span>
              </div>
              <h3>
                <em>Contradictions</em> flagged
              </h3>
              <p className="support-desc">
                Call A: a stated blocker. Call B: walked back. Salency surfaces
                both citations before the rep re-pitches the wrong position.
              </p>
              <div className="support-mock cx-mock">
                <div className="cx-row">
                  <span className="cx-date">{fromCall?.displayDate}</span>
                  <span className="cx-quote">
                    &ldquo;{changes.hero.fromQuote}&rdquo;
                  </span>
                </div>
                <div className="cx-arrow">{'\u2195'}</div>
                <div className="cx-row">
                  <span className="cx-date">{toCall?.displayDate}</span>
                  <span className="cx-quote">
                    &ldquo;{changes.hero.toQuote}&rdquo;
                  </span>
                </div>
              </div>
            </article>

            <article className="mem-support-card">
              <div className="support-head">
                <span className="idx">04</span>
              </div>
              <h3>
                <em>Handoff export</em>
              </h3>
              <p className="support-desc">
                One-click markdown. Paste it into Notion, Slack, your CRM. The
                successor inherits the account, not just the pipeline stage.
              </p>
              <div className="support-mock hx-mock">
                <div className="hx-line"># {ACCOUNT_NAME} {'\u2014'} handoff</div>
                <div className="hx-line muted">## Stakeholders</div>
                <div className="hx-line">- Daniel Voss, COO (champion)</div>
                <div className="hx-line">- Priya Mehta, Head of Ops</div>
                <div className="hx-line">- Jordan Kim, CTO</div>
                <div className="hx-line muted">## Open commitments</div>
                <div className="hx-line">
                  - {commitments.hero.item} {'\u00b7'} owner: {commitments.hero.owner}
                </div>
                <div className="hx-line muted">## Watch-outs</div>
                <div className="hx-line">- Latency stance shift Mar 09 {'\u2194'} Apr 06</div>
              </div>
            </article>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── Where Salency lives (3-layer frame) ─── */}
      <ScrollReveal>
        <MemoryStackSection />
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
            <Link href="/investors#thesis">Read our memory thesis {'\u2192'}</Link>
          </p>
        </section>
      </ScrollReveal>

      {/* ─── Pilot CTA ─── */}
      <section className="mem-cta">
        <span className="eb">Pilot cohort {'\u00b7'} Spring 2026</span>
        <h2>
          Inherit every account&rsquo;s <em>memory</em> from Day 1.
        </h2>
        <p className="sub">
          First account memory stands up in a week. By month two, the rep
          inheriting it reads the story, not a notes field.
        </p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => openPilotModal()}
        >
          Request a pilot {'\u2192'}
        </button>
      </section>
    </>
  );
}
