'use client';

// HeroBrief — the dominant Day-1 Brief artifact in the / hero (Path D-Hybrid).
// Renders 6 blocks: 4 above-fold (People / They need / We owe them / What's changed)
// + 2 below-fold (How we map / Next). Each citation is clickable; click expands
// inline to the surrounding 2-3 sentences pulled from arc.ts. "See full
// transcript ->" opens TranscriptSnippetModal.
//
// All transcript text resolves through getCallById so the surrounding context
// stays anchored to the synthetic transcripts (honesty boundary).

import { useState } from 'react';
import {
  ACCOUNT_NAME,
  HUDSON_TERRACE_BRIEF,
  getCallById,
  type SyntheticCall,
} from '@/lib/synthetic-arc';
import { openTranscriptSnippetModal } from '@/lib/transcript-snippet-modal-event';

// Surrounding-context window for inline expansion. The brief shows a single
// quoted line; the click reveals 2-3 sentences around the highlighted line.
function buildSurroundingContext(call: SyntheticCall, lineIdx: number): string[] {
  const lines = call.snippet.lines;
  const start = Math.max(0, lineIdx - 1);
  const end = Math.min(lines.length, lineIdx + 2);
  return lines.slice(start, end);
}

function findLineIdxByTimestamp(call: SyntheticCall, ts: string): number {
  const idx = call.snippet.lines.findIndex((line) => line.includes(`[${ts}]`));
  return idx === -1 ? call.snippet.highlightLineIndex : idx;
}

interface CitationButtonProps {
  callId: string;
  citationLabel: string;
  speaker?: string;
  expanded: boolean;
  onToggle: () => void;
  ariaLabel: string;
}

function CitationButton({
  citationLabel,
  speaker,
  expanded,
  onToggle,
  ariaLabel,
}: CitationButtonProps) {
  return (
    <button
      type="button"
      className="hb-cite"
      onClick={onToggle}
      aria-expanded={expanded}
      aria-label={ariaLabel}
    >
      {speaker && <span className="hb-cite-speaker">{speaker}</span>}
      {speaker && <span className="hb-cite-sep" aria-hidden="true">{' \u00b7 '}</span>}
      <span className="hb-cite-stamp">{citationLabel}</span>
    </button>
  );
}

interface InlineExpansionProps {
  callId: string;
  lineIdx: number;
}

function InlineExpansion({ callId, lineIdx }: InlineExpansionProps) {
  const call = getCallById(callId);
  if (!call) return null;
  const lines = buildSurroundingContext(call, lineIdx);
  return (
    <div className="hb-expand" role="region">
      <ol className="hb-expand-lines">
        {lines.map((line, i) => (
          <li key={i} className="hb-expand-line">
            {line}
          </li>
        ))}
      </ol>
      <button
        type="button"
        className="hb-expand-trigger"
        onClick={() =>
          openTranscriptSnippetModal({ callId, lineIdx })
        }
      >
        See full transcript {'\u2192'}
      </button>
    </div>
  );
}

interface HeroBriefProps {
  /**
   * When true, drops the 640px max-height + internal scroll. Used on /memory
   * where the brief is the page-opening artifact and benefits from showing
   * all 6 blocks at once without a scrollbar. Defaults to false (the
   * capped variant shipping on /).
   */
  uncapped?: boolean;
}

export function HeroBrief({ uncapped = false }: HeroBriefProps = {}) {
  const { people, needs, commitments, changes, map, next } = HUDSON_TERRACE_BRIEF;
  // Expansion state keyed by `${blockId}:${rowId}` so each click toggles
  // independently. Only one citation per row, so the row id is enough.
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) =>
    setOpenKey((cur) => (cur === key ? null : key));

  const peopleHeroLineIdx = findLineIdxByTimestamp(
    getCallById(people.hero.callId)!,
    people.hero.citationTimestamp,
  );

  const needsHeroLineIdx = findLineIdxByTimestamp(
    getCallById(needs.hero.callId)!,
    needs.hero.citationTimestamp,
  );

  // For the change-pair, the "from" and "to" calls each get their own
  // expansion row keyed by the call id.
  const changeFromCallId = changes.hero.fromCall?.id;
  const changeToCallId = changes.hero.toCall?.id;
  const changeFromLineIdx = changes.hero.fromCall?.snippet.highlightLineIndex ?? 0;
  const changeToLineIdx = changes.hero.toCall?.snippet.highlightLineIndex ?? 0;

  return (
    <div
      className={`hero-brief${uncapped ? ' hero-brief--uncapped' : ''}`}
      aria-label={`Day-1 Brief for ${ACCOUNT_NAME}`}
    >
      <div className="hero-brief-frame">
        <header className="hero-brief-head">
          <h2 className="hero-brief-eb">{ACCOUNT_NAME} {'\u00b7'} Day-1 Brief</h2>
          <p className="hero-brief-meta">
            15 min prep {'\u00b7'} 3 calls indexed {'\u00b7'} auto-generated 2026-04-06
          </p>
        </header>

        <div className="hero-brief-body">
          {/* Block 01 — People */}
          <section className="hb-block" aria-labelledby="hb-block-people">
            <h3 id="hb-block-people" className="hb-block-eb">People</h3>
            <div className="hb-hero">
              <div className="hb-hero-row">
                <span className="hb-hero-name">
                  {people.hero.speakerName}
                  <span className="hb-hero-sep" aria-hidden="true">{' \u00b7 '}</span>
                  <span className="hb-hero-title">{people.hero.speakerTitle}</span>
                </span>
                {people.hero.stance && (
                  <span className="hb-pill" data-stance="champion">
                    <span className="sr-only">role: </span>{people.hero.stance}
                  </span>
                )}
              </div>
              <p className="hb-hero-quote">
                {'\u201c'}{people.hero.text}{'\u201d'}
              </p>
              <CitationButton
                callId={people.hero.callId}
                citationLabel={`${people.hero.displayDate} \u00b7 ${people.hero.citationTimestamp}`}
                expanded={openKey === 'people:hero'}
                onToggle={() => toggle('people:hero')}
                ariaLabel={`Show surrounding transcript for ${people.hero.speakerName} on ${people.hero.displayDate}`}
              />
              {openKey === 'people:hero' && (
                <InlineExpansion
                  callId={people.hero.callId}
                  lineIdx={peopleHeroLineIdx}
                />
              )}
            </div>
            <ul className="hb-secondary">
              {people.secondary.map((p) => (
                <li key={p.name} className="hb-secondary-row">
                  <span className="hb-secondary-name">{p.name}</span>
                  <span className="hb-secondary-sep" aria-hidden="true">{' \u00b7 '}</span>
                  <span className="hb-secondary-title">{p.title}</span>
                  {p.stance && (
                    <>
                      <span className="hb-secondary-sep" aria-hidden="true">{' \u00b7 '}</span>
                      <span className="hb-secondary-stance">
                        <span className="sr-only">role: </span>{p.stance}
                      </span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* Block 02 — They need */}
          <section className="hb-block" aria-labelledby="hb-block-needs">
            <h3 id="hb-block-needs" className="hb-block-eb">They need</h3>
            <div className="hb-hero">
              <p className="hb-hero-quote">
                {'\u201c'}{needs.hero.text}{'\u201d'}
              </p>
              <CitationButton
                callId={needs.hero.callId}
                citationLabel={`${needs.hero.displayDate} \u00b7 ${needs.hero.citationTimestamp}`}
                speaker={needs.hero.speakerName}
                expanded={openKey === 'needs:hero'}
                onToggle={() => toggle('needs:hero')}
                ariaLabel={`Show surrounding transcript for the settlement-delay pain on ${needs.hero.displayDate}`}
              />
              {openKey === 'needs:hero' && (
                <InlineExpansion
                  callId={needs.hero.callId}
                  lineIdx={needsHeroLineIdx}
                />
              )}
            </div>
            <ul className="hb-secondary">
              {needs.secondary.map((row, idx) => {
                const key = `needs:secondary:${idx}`;
                const call = getCallById(row.callId);
                const lineIdx = call
                  ? findLineIdxByTimestamp(call, row.citationTimestamp)
                  : 0;
                return (
                  <li key={idx} className="hb-secondary-row">
                    <span className="hb-secondary-text">{row.text}</span>
                    <CitationButton
                      callId={row.callId}
                      citationLabel={`${row.displayDate} \u00b7 ${row.citationTimestamp}`}
                      expanded={openKey === key}
                      onToggle={() => toggle(key)}
                      ariaLabel={`Show surrounding transcript for ${row.text} (${row.speakerName}, ${row.displayDate})`}
                    />
                    {openKey === key && call && (
                      <InlineExpansion callId={row.callId} lineIdx={lineIdx} />
                    )}
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Block 03 — We owe them */}
          <section className="hb-block" aria-labelledby="hb-block-owe">
            <h3 id="hb-block-owe" className="hb-block-eb">We owe them</h3>
            <div className="hb-hero">
              <div className="hb-hero-row">
                <span className="hb-hero-item">{commitments.hero.item}</span>
                <span className="hb-pill" data-status={commitments.hero.status}>
                  {commitments.hero.status}
                </span>
              </div>
              <p className="hb-meta-row">
                {commitments.hero.due && <span>{commitments.hero.due}</span>}
                {commitments.hero.due && commitments.hero.owner && (
                  <span className="hb-secondary-sep" aria-hidden="true">{' \u00b7 '}</span>
                )}
                {commitments.hero.owner && (
                  <span>owner: {commitments.hero.owner}</span>
                )}
              </p>
            </div>
            <ul className="hb-secondary hb-secondary--commit">
              {commitments.secondary.map((c, idx) => (
                <li key={idx} className="hb-secondary-row">
                  <span className="hb-secondary-text">{c.item}</span>
                  <span className="hb-secondary-meta hb-commit-meta">
                    {c.owner && (
                      <span>
                        <span className="sr-only">owner: </span>{c.owner}
                      </span>
                    )}
                    {c.owner && c.due && (
                      <span className="hb-secondary-sep" aria-hidden="true">{' \u00b7 '}</span>
                    )}
                    {c.due && <span>{c.due}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Block 04 — What's changed */}
          <section className="hb-block" aria-labelledby="hb-block-changed">
            <h3 id="hb-block-changed" className="hb-block-eb">What{'\u2019'}s changed</h3>
            <div className="hb-hero">
              <p className="hb-hero-item">{changes.hero.topic}</p>
              <div className="hb-change-pair hb-change-pair--earlier">
                <span className="hb-change-tag">Earlier</span>
                <span className="hb-change-quote">{'\u201c'}{changes.hero.fromQuote}{'\u201d'}</span>
                {changes.hero.fromCall && (
                  <CitationButton
                    callId={changes.hero.fromCall.id}
                    citationLabel={changes.hero.fromCall.displayDate}
                    expanded={openKey === 'changes:from'}
                    onToggle={() => toggle('changes:from')}
                    ariaLabel={`Show surrounding transcript for ${changes.hero.fromCall.displayDate} latency quote`}
                  />
                )}
              </div>
              {openKey === 'changes:from' && changeFromCallId && (
                <InlineExpansion
                  callId={changeFromCallId}
                  lineIdx={changeFromLineIdx}
                />
              )}
              <div className="hb-change-divider" aria-hidden="true">
                <span>{'\u2195'} contradicts</span>
              </div>
              <div className="hb-change-pair hb-change-pair--now">
                <span className="hb-change-tag">Now</span>
                <span className="hb-change-quote">{'\u201c'}{changes.hero.toQuote}{'\u201d'}</span>
                {changes.hero.toCall && (
                  <CitationButton
                    callId={changes.hero.toCall.id}
                    citationLabel={changes.hero.toCall.displayDate}
                    expanded={openKey === 'changes:to'}
                    onToggle={() => toggle('changes:to')}
                    ariaLabel={`Show surrounding transcript for ${changes.hero.toCall.displayDate} latency quote`}
                  />
                )}
              </div>
              {openKey === 'changes:to' && changeToCallId && (
                <InlineExpansion
                  callId={changeToCallId}
                  lineIdx={changeToLineIdx}
                />
              )}
            </div>
            <ul className="hb-secondary">
              {changes.secondary.map((c, idx) => (
                <li key={idx} className="hb-secondary-row">
                  <span className="hb-secondary-text">{c.topic}</span>
                  {c.fromCall && c.toCall && (
                    <>
                      <span className="hb-secondary-sep" aria-hidden="true">{' \u00b7 '}</span>
                      <span className="hb-secondary-meta">
                        {c.fromCall.displayDate} {'\u2194'} {c.toCall.displayDate}
                      </span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* Block 05 — How we map (below fold) */}
          <section className="hb-block hb-block--below" aria-labelledby="hb-block-map">
            <h3 id="hb-block-map" className="hb-block-eb">How we map</h3>
            <ul className="hb-map-list">
              {map.rows.map((row, idx) => (
                <li key={idx} className="hb-map-row">
                  <div className="hb-map-row-main">
                    <span className="hb-map-product">{row.match.product}</span>
                    <span className="hb-secondary-sep" aria-hidden="true">{' \u00b7 '}</span>
                    <span className="hb-map-capability">{row.match.capability}</span>
                  </div>
                  <div className="hb-map-row-meta">
                    matches: {row.againstPainText}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Block 06 — Next (below fold) */}
          <section className="hb-block hb-block--below" aria-labelledby="hb-block-next">
            <h3 id="hb-block-next" className="hb-block-eb">Next</h3>
            <ul className="hb-next-list">
              {next.items.map((item, idx) => (
                <li key={idx} className="hb-next-row">
                  <span className="hb-next-date">{item.date}</span>
                  <span className="hb-next-text">{item.text}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
