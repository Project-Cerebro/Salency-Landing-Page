'use client';

// RecallStage — Path D-Hybrid section 6. Notification stream with the
// contradiction alert as the hero. Click to expand the full diff inline;
// "See full transcript" opens TranscriptSnippetModal with the contradicts
// payload so the modal renders the diff alongside the snippet.
//
// Honesty boundary: both quotes (Mar 09 settlement-delay, Apr 06 "gotten
// used to it") are verbatim from arc.ts. Pipeline-complete numbers
// (3 calls indexed, 21 signals extracted) are derived from the synthetic
// arc surface ONLY for the demo strip; no real customer data.

import { useId, useState } from 'react';
import { ACCOUNT_NAME } from '@/lib/synthetic-arc';
import { openTranscriptSnippetModal } from '@/lib/transcript-snippet-modal-event';
import { StageHead } from '@/components/sections/StageHead';

const PRIOR_QUOTE = {
  text: 'Killing us during volatility windows. Six figures of P&L on one trade.',
  date: 'Mar 09',
  callType: 'Discovery',
  citationTimestamp: '00:01:28',
  callId: 'call-001',
};

const CURRENT_QUOTE = {
  text: 'Honestly, we\u2019ve gotten used to it. It\u2019s not the main thing anymore.',
  date: 'Apr 06',
  callType: 'Pricing',
  citationTimestamp: '00:01:00',
  callId: 'call-003',
};

export function RecallStage() {
  const headingId = useId();
  const contradictionLabelId = useId();
  const completeLabelId = useId();
  const diffRegionId = useId();
  const [expanded, setExpanded] = useState(false);

  const onSeeTranscript = () => {
    openTranscriptSnippetModal({
      callId: CURRENT_QUOTE.callId,
      lineIdx: 2,
      contradicts: {
        priorCallId: PRIOR_QUOTE.callId,
        delta: 'blocker \u2192 resolved workaround',
      },
    });
  };

  return (
    <section className="recall-stage" aria-labelledby={headingId}>
      <div className="recall-grid">
        <StageHead
          className="recall-head"
          headingId={headingId}
          eyebrow="Recall"
          h2={
            <>
              Salency tells you when something <em>changed.</em>
            </>
          }
          lede={
            <>
              Contradiction alerts when a buyer{'\u2019'}s position shifts
              between calls. Pipeline-complete pings when a meeting is fully
              indexed. The memory layer that surfaces signal, not noise.
            </>
          }
        />

        <div className="recall-stream">
          <div className="recall-stream-head">
            <span>Recall {'\u00b7'} 2 alerts</span>
            <span className="recall-stream-dot" aria-hidden="true" />
          </div>

          <article
            className={`recall-card recall-card--contradiction${expanded ? ' is-expanded' : ''}`}
            aria-labelledby={contradictionLabelId}
          >
            <header className="recall-card-head">
              <span id={contradictionLabelId} className="recall-card-eb">
                Contradiction {'\u00b7'} {ACCOUNT_NAME}
              </span>
              <span className="recall-card-pill">flagged</span>
            </header>

            <p className="recall-card-title">
              Daniel Voss shifted on integration latency.
            </p>

            <div className="recall-pair">
              <div className="recall-pair-quote">
                <p className="recall-pair-text">{'\u201c'}{PRIOR_QUOTE.text}{'\u201d'}</p>
                <p className="recall-pair-cite">
                  {PRIOR_QUOTE.date} {'\u00b7'} {PRIOR_QUOTE.callType} {'\u00b7'}{' '}
                  {PRIOR_QUOTE.citationTimestamp}
                </p>
              </div>
              <div className="recall-pair-divider" aria-hidden="true">
                <span>{'\u2195'} contradicts</span>
              </div>
              <div className="recall-pair-quote">
                <p className="recall-pair-text">{'\u201c'}{CURRENT_QUOTE.text}{'\u201d'}</p>
                <p className="recall-pair-cite">
                  {CURRENT_QUOTE.date} {'\u00b7'} {CURRENT_QUOTE.callType} {'\u00b7'}{' '}
                  {CURRENT_QUOTE.citationTimestamp}
                </p>
              </div>
            </div>

            {expanded && (
              <div className="recall-diff" id={diffRegionId} role="region" aria-label="Latency contradiction delta">
                <p className="recall-diff-eb">Delta</p>
                <p className="recall-diff-text">
                  Latency: <span className="recall-diff-from">blocker</span>{' '}
                  {'\u2192'}{' '}
                  <span className="recall-diff-to">resolved workaround</span>
                </p>
                <p className="recall-diff-meta">
                  Span: 28 days {'\u00b7'} 2 calls {'\u00b7'} same speaker
                </p>
              </div>
            )}

            <div className="recall-card-actions">
              <button
                type="button"
                className="recall-card-toggle"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                aria-controls={diffRegionId}
              >
                {expanded ? 'Hide diff' : 'Show diff'}
              </button>
              <button
                type="button"
                className="recall-card-link"
                onClick={onSeeTranscript}
              >
                See full transcript {'\u2192'}
              </button>
            </div>
          </article>

          <article className="recall-card recall-card--complete" aria-labelledby={completeLabelId}>
            <span className="recall-card-status" aria-hidden="true" />
            <div className="recall-card-body">
              <p id={completeLabelId} className="recall-card-title recall-card-title--small">
                Pipeline complete {'\u00b7'} {ACCOUNT_NAME}
              </p>
              <p className="recall-card-meta">
                All 3 calls indexed {'\u00b7'} 21 signals extracted
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
