'use client';

// MapStage — interactive pain → product mapping demo.
// 4 verbatim Hudson Terrace pains in left column. Hover/focus a pain →
// matched products column swaps with a 150ms crossfade. Mobile: pains
// become horizontal scroll-snap pills, tap swaps the column.
//
// ARIA pattern: tablist (per Design D-3 finding). Arrow keys navigate;
// Home/End jump to first/last; Enter/Space activate.
//
// Stage CTA opens TranscriptSnippetModal. Honesty boundary: all pain
// quotes are verbatim from arc.ts / synthetic-transcripts.

import { useId, useRef, useState, type KeyboardEvent } from 'react';
import {
  HUDSON_TERRACE_ARC,
  type ProductMatch,
} from '@/lib/synthetic-arc';
import { openTranscriptSnippetModal } from '@/lib/transcript-snippet-modal-event';

interface MapPain {
  /** Stable id used for tab key + aria controls. */
  id: string;
  /** Verbatim pain text shown on the pill. */
  text: string;
  speakerName: string;
  speakerTitle: string;
  displayDate: string;
  citationTimestamp: string;
  callId: string;
  matches: ReadonlyArray<ProductMatch>;
}

const CALL_001 = HUDSON_TERRACE_ARC[0];
const CALL_003 = HUDSON_TERRACE_ARC[2];

// Verbatim pains per spec section 4. Pain 4 is from the Apr 06 call
// (CALL_003), the SOC-evidence-quarterly line. The rest are Mar 09.
const PAINS: ReadonlyArray<MapPain> = [
  {
    // Verbatim from meeting-1 at 00:01:28.
    id: 'pain-1',
    text: 'We\u2019re seeing three to five seconds of settlement delay on our internal transfers, and that\u2019s killing us during volatility windows.',
    speakerName: 'Daniel Voss',
    speakerTitle: 'COO',
    displayDate: CALL_001.displayDate,
    citationTimestamp: '00:01:28',
    callId: CALL_001.id,
    matches: [
      { product: 'Atlas Settlement', capability: 'sub-second settlement', role: 'primary', confidence: 'high' },
      { product: 'Vector API', capability: 'burst-capacity tier', role: 'secondary', confidence: 'medium' },
    ],
  },
  {
    // Verbatim from meeting-1 at 00:02:36 (em-dash em removed per
    // company-context §2 voice rules; replaced with commas).
    id: 'pain-2',
    text: 'Priya, our head of ops, spends about 90 minutes every morning tying out settlement across our four venues.',
    speakerName: 'Daniel Voss',
    speakerTitle: 'COO',
    displayDate: CALL_001.displayDate,
    citationTimestamp: '00:02:36',
    callId: CALL_001.id,
    matches: [
      { product: 'Helix Recon', capability: 'multi-venue reconciliation', role: 'primary', confidence: 'high' },
    ],
  },
  {
    // Verbatim from meeting-1 at 00:02:12. The spec phrasing
    // ("We've hit Fireblocks' throughput ceiling twice this quarter")
    // is Maya's later summary, not Daniel's words. We use Daniel's
    // verbatim line to satisfy the honesty boundary.
    id: 'pain-3',
    text: 'Fireblocks has an API throttle that we\u2019ve now hit twice this quarter. Both times during volatility.',
    speakerName: 'Daniel Voss',
    speakerTitle: 'COO',
    displayDate: CALL_001.displayDate,
    citationTimestamp: '00:02:12',
    callId: CALL_001.id,
    matches: [
      { product: 'Vector API', capability: 'burst-capacity tier', role: 'primary', confidence: 'high' },
      { product: 'Atlas Settlement', capability: 'sub-second settlement', role: 'secondary', confidence: 'medium' },
    ],
  },
  {
    // Verbatim composite from meeting-3 at 00:03:02. The spec phrasing
    // condenses Daniel's two-sentence answer; we keep his words intact.
    id: 'pain-4',
    text: 'The SOC evidence collection happens quarterly, not annually. That\u2019s going to triple the documentation overhead if our vendors aren\u2019t automated about sending it.',
    speakerName: 'Daniel Voss',
    speakerTitle: 'COO',
    displayDate: CALL_003.displayDate,
    citationTimestamp: '00:03:02',
    callId: CALL_003.id,
    matches: [
      { product: 'Anchor Compliance', capability: 'continuous SOC evidence', role: 'primary', confidence: 'high' },
    ],
  },
];

// Confidence -> numeric score for the bar/label. Locked per spec
// section 4 "Matched products" rows.
const SCORE_LOOKUP: Record<string, number> = {
  'pain-1::Atlas Settlement': 0.94,
  'pain-1::Vector API': 0.61,
  'pain-2::Helix Recon': 0.92,
  'pain-3::Vector API': 0.88,
  'pain-3::Atlas Settlement': 0.55,
  'pain-4::Anchor Compliance': 0.85,
};

function scoreFor(painId: string, product: string): number {
  return SCORE_LOOKUP[`${painId}::${product}`] ?? 0.7;
}

export function MapStage() {
  const tabsRef = useRef<HTMLDivElement>(null);
  const headingId = useId();
  const [activeId, setActiveId] = useState<string>(PAINS[0].id);
  const active = PAINS.find((p) => p.id === activeId) ?? PAINS[0];

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const idx = PAINS.findIndex((p) => p.id === activeId);
    if (idx === -1) return;
    let nextIdx = idx;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextIdx = (idx + 1) % PAINS.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') nextIdx = (idx - 1 + PAINS.length) % PAINS.length;
    else if (e.key === 'Home') nextIdx = 0;
    else if (e.key === 'End') nextIdx = PAINS.length - 1;
    else return;
    e.preventDefault();
    setActiveId(PAINS[nextIdx].id);
    requestAnimationFrame(() => {
      const next = tabsRef.current?.querySelector<HTMLButtonElement>(
        `[data-pain-id="${PAINS[nextIdx].id}"]`,
      );
      next?.focus();
    });
  };

  const onCtaClick = () => {
    // Open the modal anchored to the active pain's call. The modal
    // already renders matches off the call's matches array; here we
    // pass the active pain's full match list so the user sees both
    // primary + secondary mappings rather than only the call's one
    // catalog hit (which is shown on the brief surface).
    openTranscriptSnippetModal({
      callId: active.callId,
      matches: active.matches,
    });
  };

  return (
    <section className="map-stage" aria-labelledby={headingId}>
      <div className="stage-head">
        <span className="eb">Map</span>
        <h2 id={headingId} className="stage-h2">
          Every pain meets your <em>catalog.</em>
        </h2>
        <p className="stage-lede">
          Salency reads your product catalog and ranks which products match
          each extracted pain by confidence. The recommendation a rep needed
          before the next call.
        </p>
      </div>

      <div className="map-grid">
        <div
          ref={tabsRef}
          role="tablist"
          aria-label="Hudson Terrace pains"
          aria-orientation="vertical"
          className="map-pains"
        >
          {PAINS.map((pain) => {
            const isActive = pain.id === activeId;
            return (
              <button
                key={pain.id}
                type="button"
                role="tab"
                id={`map-tab-${pain.id}`}
                data-pain-id={pain.id}
                aria-selected={isActive}
                aria-controls={`map-panel-${pain.id}`}
                tabIndex={isActive ? 0 : -1}
                className={`map-pain${isActive ? ' is-active' : ''}`}
                onClick={() => setActiveId(pain.id)}
                onMouseEnter={() => setActiveId(pain.id)}
                onFocus={() => setActiveId(pain.id)}
                onKeyDown={onTabKey}
              >
                <span className="map-pain-text">
                  {'\u201c'}{pain.text}{'\u201d'}
                </span>
                <span className="map-pain-cite">
                  {pain.speakerName} {'\u00b7'} {pain.speakerTitle} {'\u00b7'}{' '}
                  {pain.displayDate} {'\u00b7'} {pain.citationTimestamp}
                </span>
              </button>
            );
          })}
        </div>

        <div className="map-matches">
          {PAINS.map((pain) => {
            const isActive = pain.id === activeId;
            return (
              <div
                key={pain.id}
                role="tabpanel"
                id={`map-panel-${pain.id}`}
                aria-labelledby={`map-tab-${pain.id}`}
                hidden={!isActive}
                className={`map-panel${isActive ? ' is-active' : ''}`}
              >
                <ul className="map-match-list">
                  {pain.matches.map((m) => {
                    const score = scoreFor(pain.id, m.product);
                    return (
                      <li
                        key={m.product}
                        className="map-match"
                        data-role={m.role}
                      >
                        <div className="map-match-head">
                          <span className="map-match-name">{m.product}</span>
                          <span className="map-match-role">{m.role}</span>
                        </div>
                        <div className="map-match-cap">{m.capability}</div>
                        <div className="map-match-bar" aria-hidden="true">
                          <div
                            className="map-match-bar-fill"
                            style={{ width: `${Math.round(score * 100)}%` }}
                          />
                        </div>
                        <div className="map-match-score">
                          confidence {score.toFixed(2)}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="stage-foot">
        <button
          type="button"
          className="stage-cta"
          onClick={onCtaClick}
        >
          See the mapping engine {'\u2192'}
        </button>
      </div>
    </section>
  );
}
