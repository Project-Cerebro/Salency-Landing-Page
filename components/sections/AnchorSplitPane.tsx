// AnchorSplitPane — /memory γ surface ("how it stays anchored").
//
// Static split pane showing where each signal comes from. Left column
// renders the first six lines of the call-001 (Mar 09 Discovery)
// transcript verbatim from HUDSON_TERRACE_ARC. The lines a signal was
// taken from are highlighted and labeled with that signal's kind, so the
// link survives on phones where the columns stack. Right column shows
// those signals (verbatim quotes) plus the product match Salency made
// from the pain against the catalog. Contacts live in the Across calls
// list below (GLOSSARY.md: a contact is account memory, not a signal).
//
// Honesty boundary: every transcript line and quote below is verbatim
// from arc.ts call-001.

import { getCallById, SYNTHETIC_LABEL } from '@/lib/synthetic-arc';

interface ExtractCard {
  name: string;
  /** Renderable text: a verbatim quote, or a product line. */
  body: React.ReactNode;
  meta: React.ReactNode;
}

/** Transcript line index → the kind of signal taken from it. */
const EXTRACTED_LINES: ReadonlyMap<number, string> = new Map([
  [1, 'Pain'],
  [2, 'Urgency'],
]);

const EXTRACT_CARDS: readonly ExtractCard[] = [
  {
    name: 'Pain',
    body: '\u201cthree to five seconds of settlement delay on our internal transfers, and that\u2019s killing us during volatility windows\u201d',
    meta: <>Daniel Voss {'\u00b7'} Mar 09</>,
  },
  {
    name: 'Urgency',
    body: '\u201cThat\u2019s six figures of P&L on one trade.\u201d',
    meta: <>Daniel Voss {'\u00b7'} Mar 09</>,
  },
  {
    name: 'Product match',
    body: (
      <>
        Atlas Settlement
        <span className="anchor-card-cap"> {'\u00b7'} sub-second settlement</span>
      </>
    ),
    meta: (
      <>
        matched from the pain against your catalog {'\u00b7'}{' '}
        <span className="anchor-meta-copper">Strong</span>
      </>
    ),
  },
];

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
            {'\u00b7'} {call.displayDate} {'\u00b7'} Discovery call
          </strong>
        </div>
        <div className="anchor-head-right">2 signals {'\u00b7'} 1 product match</div>
      </div>
      <p className="anchor-synthetic-chip" aria-hidden="true">
        {SYNTHETIC_LABEL}
      </p>
      <div className="anchor-split">
        <div className="anchor-col anchor-col--l">
          <div className="anchor-col-eb">Raw transcript</div>
          {lines.map((line, idx) => {
            const kind = EXTRACTED_LINES.get(idx);
            return (
              <p
                key={idx}
                className={`anchor-line${kind ? ' is-extracted' : ''}`}
              >
                {kind && <span className="anchor-line-tag">{kind}</span>}
                {line}
              </p>
            );
          })}
        </div>
        <div className="anchor-col anchor-col--r">
          <div className="anchor-col-eb">What Salency keeps</div>
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
