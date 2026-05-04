// AnchorSplitPane — /memory γ surface ("how it stays anchored").
//
// Static split-pane visualization of the citation mechanism. Left column
// renders the first six lines of the call-001 (Mar 09 Discovery) transcript
// verbatim from HUDSON_TERRACE_ARC. Right column renders three extracted
// signals (PAIN, PAIN -> PRODUCT, STAKEHOLDER) anchored to the cited lines.
// Cited lines (indices 1 and 4) get the copper left-rule + tinted background
// treatment; extract cards show a copper rule + arrow indicating the
// resolution from line to extraction.
//
// Honesty boundary: every transcript line below is verbatim from
// arc.ts call-001. Extracted signals match the canonical
// MEMORY_SIGNAL_TYPES examples drawn from the same call.

import { getCallById, SYNTHETIC_LABEL } from '@/lib/synthetic-arc';

interface ExtractCard {
  name: string;
  /** Renderable text of the signal — quote, product, stakeholder line. */
  body: React.ReactNode;
  meta: React.ReactNode;
}

const EXTRACT_CARDS: readonly ExtractCard[] = [
  {
    name: 'Pain',
    body: '\u201c3 to 5 second settlement delays, killing us during volatility windows.\u201d',
    meta: (
      <>
        cited at <span className="anchor-meta-copper">00:01:28</span> {'\u00b7'} conf{' '}
        <span className="anchor-meta-copper">0.96</span>
      </>
    ),
  },
  {
    name: 'Pain \u2192 product',
    body: (
      <>
        Atlas Settlement
        <span className="anchor-card-cap"> {'\u00b7'} sub-second settlement</span>
      </>
    ),
    meta: (
      <>
        resolves <span className="anchor-meta-copper">00:01:28</span> {'\u00b7'} primary {'\u00b7'} conf{' '}
        <span className="anchor-meta-copper">0.94</span>
      </>
    ),
  },
  {
    name: 'Stakeholder',
    body: 'Daniel Voss \u00b7 COO \u00b7 champion',
    meta: (
      <>
        inferred from <span className="anchor-meta-copper">00:01:56</span> + 7 other lines
      </>
    ),
  },
];

const EXTRACTED_LINE_INDICES = new Set([1, 4]);

export function AnchorSplitPane() {
  const call = getCallById('call-001');
  if (!call) return null;
  const lines = call.snippet.lines.slice(0, 6);

  return (
    <div className="anchor-frame" aria-label="Anchored citation example">
      <div className="anchor-head">
        <div className="anchor-head-left">
          Transcript{' '}
          <strong>
            {'\u00b7'} call-001 {'\u00b7'} {call.displayDate} {'\u00b7'} Discovery
          </strong>
        </div>
        <div className="anchor-head-right">3 signals extracted</div>
      </div>
      <p className="anchor-synthetic-chip" aria-hidden="true">
        {SYNTHETIC_LABEL}
      </p>
      <div className="anchor-split">
        <div className="anchor-col anchor-col--l">
          <div className="anchor-col-eb">Raw transcript</div>
          {lines.map((line, idx) => (
            <p
              key={idx}
              className={`anchor-line${EXTRACTED_LINE_INDICES.has(idx) ? ' is-extracted' : ''}`}
            >
              {line}
            </p>
          ))}
        </div>
        <div className="anchor-col anchor-col--r">
          <div className="anchor-col-eb">Extracted signals</div>
          {EXTRACT_CARDS.map((card) => (
            <div key={card.name} className="anchor-card">
              <div className="anchor-card-name">{card.name}</div>
              <p className="anchor-card-body">{card.body}</p>
              <p className="anchor-card-meta">{card.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
