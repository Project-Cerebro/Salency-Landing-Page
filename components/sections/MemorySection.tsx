'use client';

// MemorySection — /memory body, Linear-treatment rebuild (2026-05-04).
//
// Reader frame: buyer in evaluation mode who clicked "Memory" from /. They
// already saw the architectural framing and ComparativeStrip there. This
// page goes deeper on the memory artifact itself: brief uncapped, then α
// (composition) → γ (anchored) → β (schema) → CRM compare → CTA.
//
// Honesty boundary: every artifact below traces to HUDSON_TERRACE_ARC /
// HUDSON_TERRACE_BRIEF / MEMORY_SIGNAL_TYPES. No fictional names.

import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import { openPilotModal } from '@/components/PilotModal';
import { HeroArtifact } from '@/components/HeroArtifact';
import { HeroBrief } from '@/components/sections/HeroBrief';
import { AnchorSplitPane } from '@/components/sections/AnchorSplitPane';
import { SchemaList } from '@/components/sections/SchemaList';

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

export function MemorySection() {
  return (
    <>
      <ScrollReveal>
        <section className="mem-intro">
          <span className="eb">Memory</span>
          <h1>
            The memory layer, <em>in detail.</em>
          </h1>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="mem-brief-stage">
          <HeroBrief uncapped />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="alpha-stage">
          <div className="stage-head">
            <span className="eb">How it composes</span>
            <h2 className="stage-h2">
              The brief is the output. These are the <em>inputs.</em>
            </h2>
            <p className="stage-lede">
              Three indexed calls, 28 days apart. Each card opens the
              transcript snippet behind one of the brief&rsquo;s blocks above.
            </p>
          </div>
          <HeroArtifact />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="gamma-stage">
          <div className="stage-head">
            <span className="eb">How it stays anchored</span>
            <h2 className="stage-h2">
              Every signal points <em>back at a line.</em>
            </h2>
            <p className="stage-lede">
              The brief above isn&rsquo;t conjured. Every claim resolves to a
              transcript line, with the cite-link visible. Below, one Hudson
              Terrace call with extracted signals shown beside the source.
            </p>
          </div>
          <AnchorSplitPane />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="beta-stage">
          <div className="stage-head">
            <span className="eb">What&rsquo;s stored</span>
            <h2 className="stage-h2">
              Seven signal types, <em>cited.</em>
            </h2>
            <p className="stage-lede">
              Every call extracts a typed payload. Same 7 shapes, every
              account, every successor. Below, each type with one Hudson
              Terrace example.
            </p>
          </div>
          <SchemaList />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="mem-compare">
          <div className="mem-compare-head">
            <span className="eb">Not another CRM field</span>
            <h2>
              Memory is a <em>graph with time.</em> CRMs store flat rows.
            </h2>
          </div>
          <div className="mem-compare-wrap">
            <table className="mem-table">
              <thead>
                <tr>
                  <th>Signal</th>
                  <th>In your CRM</th>
                  <th className="salency-col">In Salency</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr key={row.signal}>
                    <td>{row.signal}</td>
                    <td>{row.crm}</td>
                    <td className="salency-col">{row.salency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mem-compare-foot">
            Flatten the graph and you kill the thing.{' '}
            <Link href="/investors#thesis">Read our memory thesis {'\u2192'}</Link>
          </p>
        </section>
      </ScrollReveal>

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
