'use client';

// DiffPairViewer, /why-salency centerpiece artifact (Linear treatment).
//
// 3-pane interactive diff: transcript (left) | CRM record (middle) | Salency
// memory (right). Click any of 5 transcript lines from call-003 (Apr 06
// Pricing) and the CRM and Salency panes update with a 130ms cross-fade to
// show what each layer preserves from that line. The CRM pane signals "lossy"
// (last-writer-wins); the Salency pane signals "preserved" with cited
// signal cards (Contradiction / Pain to product / Stakeholder / Change delta /
// Pain ranking depending on which line is active).
//
// Visual reference: locked mockup at /tmp/salency-mockup/why-salency-v-1and2.html.
// The STATES object and CSS rules in this component are ported from there.
//
// Honesty boundary:
//   - All 5 transcript lines are paraphrased headlines pointing at verbatim
//     lines in lib/synthetic-arc/arc.ts call-003.snippet.lines (idx 0, 2, 3,
//     4, 5). The viewer shows truncated single-line versions for layout
//     reasons; the modal always opens the full verbatim transcript.
//   - Signal-card content is verbatim from arc.ts where it's a quote; the
//     paraphrased descriptive labels (status badges, foot lines) are
//     non-quoted UI copy.
//   - The salency.ai/account/hudson-terrace URL pill is decorative chrome,
//     not a real route. The "memory · diff view" title is utility language,
//     not a feature claim.
//   - The "all product matches" framing in the mapping modal opens
//     anchored to call-001 (the Mar 09 Discovery where the pain was raised)
//     and passes call-001's matches array as-is.

import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import {
  HUDSON_TERRACE_ARC,
  getCallById,
} from '@/lib/synthetic-arc';
import { openTranscriptSnippetModal } from '@/lib/transcript-snippet-modal-event';

// Unicode glyph constants. Kept here so JSX text children can pull from
// these constants instead of trying to inline `\u00b7` (which JSX text
// does not interpret as an escape sequence).
const MIDDOT = '\u00b7';
const ARROW = '\u2192';
const ARROW_UP = '\u2191';
const ARROW_DOWN = '\u2193';
const CROSS = '\u2715';
const DOT_FILLED = '\u25CF';

// ─────────────────────────────────────────────────────────────────────────
// Transcript lines, stripped to one line each for layout. These map to
// arc.ts call-003.snippet.lines indices.

const CALL_003 = getCallById('call-003');

interface TLine {
  ts: string;
  speaker: string;
  text: string;
}

// Five lines we surface in the viewer. Source: arc.ts call-003.snippet.lines.
// The mockup truncates the contradiction line for fit; the modal always
// shows the full verbatim line.
const TRANSCRIPT: readonly TLine[] = [
  {
    ts: '[00:00:48]',
    speaker: 'Maya:',
    text: 'Where are we on the commercial side?',
  },
  {
    ts: '[00:01:00]',
    speaker: 'Daniel:',
    text: 'On the latency piece, I was hot about that on the first call. We\u2019ve gotten used to it. Not the main thing anymore.',
  },
  {
    ts: '[00:01:18]',
    speaker: 'Maya:',
    text: 'Interesting. What changed?',
  },
  {
    ts: '[00:01:22]',
    speaker: 'Daniel:',
    text: 'The trader who was yelling at me, we adjusted his workflow. He pre-positions margin earlier.',
  },
  {
    ts: '[00:01:46]',
    speaker: 'Daniel:',
    text: 'So latency is on the list but it\u2019s not the top.',
  },
];

// ─────────────────────────────────────────────────────────────────────────
// Signal card content per active transcript line.

type ModalKey = 'call-001' | 'call-003-context' | 'mapping';

interface SignalRow {
  label: string;
  body: ReactNode;
}

interface SignalDetail {
  ctx: { ts?: string; text: string }[];
  cta: string;
  modalKey: ModalKey;
}

interface SignalCardSpec {
  name: string;
  status: string;
  flagged: boolean;
  title: ReactNode;
  rows: SignalRow[];
  foot: ReactNode;
  detail?: SignalDetail;
}

interface CrmFoot {
  hidden: boolean;
  text?: string;
}

// CRM fails in three distinct ways across the arc. Each state declares which
// failure mode it demonstrates; the badge, the reveal label, and the visual
// treatment (strikethrough vs not) all key off this.
type GapKind = 'overwrite' | 'no-link' | 'no-field';

interface GapRow {
  line: string;
  meta: string;
}

interface CrmGapPayload {
  kind: GapKind;
  rows: GapRow[];
  comment: string;
}

interface DiffState {
  crmNotes: string;
  crmFoot: CrmFoot;
  gap: CrmGapPayload | null;
  signals: SignalCardSpec[];
}

const GAP_BADGE: Record<GapKind, string> = {
  'overwrite': `${CROSS} overwrites`,
  'no-link': '\u26A0 no link',
  'no-field': '\u26A0 no field',
};

const GAP_LABEL: Record<GapKind, string> = {
  'overwrite': 'Lost in this overwrite',
  'no-link': 'What CRM can\u2019t connect',
  'no-field': 'What CRM has no field for',
};

const GAP_CUE: Record<GapKind, { closed: string; open: string }> = {
  'overwrite': {
    closed: `${ARROW_DOWN} Click to see what was overwritten`,
    open: `${ARROW_UP} Click to collapse`,
  },
  'no-link': {
    closed: `${ARROW_DOWN} Click to see what isn\u2019t linked`,
    open: `${ARROW_UP} Click to collapse`,
  },
  'no-field': {
    closed: `${ARROW_DOWN} Click to see what has no schema home`,
    open: `${ARROW_UP} Click to collapse`,
  },
};

const STATES: Record<number, DiffState> = {
  // 0: Maya framing question. CRM still carries the stale March note from
  // before the pricing call started. Salency stays quiet.
  0: {
    crmNotes: '"3-5s settlement delays during vol windows. follow up commercial."',
    crmFoot: {
      hidden: false,
      text: `Mar 09 entry ${MIDDOT} not yet updated this call.`,
    },
    gap: null,
    signals: [
      {
        name: 'Context only',
        status: 'no signal',
        flagged: false,
        title: 'Maya Chen, framing question',
        rows: [],
        foot: 'Not all transcript lines extract. Salency knows when to be quiet.',
      },
    ],
  },
  // 1: DEFAULT, the contradiction line. CRM gets overwritten in place,
  // erasing the original March pain. Salency keeps both citations and
  // flags the delta.
  1: {
    crmNotes: '"gotten used to it. not main thing anymore."',
    crmFoot: { hidden: false, text: `${CROSS} Mar 09 pain overwritten Apr 06.` },
    gap: {
      kind: 'overwrite',
      rows: [
        {
          line:
            '"three to five seconds of settlement delay on our internal transfers, and that\u2019s killing us during volatility windows."',
          meta: `Daniel Voss ${MIDDOT} Mar 09 ${MIDDOT} 00:01:28 ${MIDDOT} this same notes field`,
        },
      ],
      comment:
        'The pain that drove the deal in March is gone from this CRM record. Salency keeps it cited and contradicted, not erased.',
    },
    signals: [
      {
        name: 'Contradiction',
        status: 'flagged',
        flagged: true,
        title: `Latency stance: blocker ${ARROW} resolved workaround`,
        rows: [
          {
            label: 'Mar 09',
            body: (
              <>
                <span className="quote">
                  &ldquo;killing us during volatility&rdquo;
                </span>
                <span className="cite">{`call-001 ${MIDDOT} 00:01:28`}</span>
              </>
            ),
          },
          {
            label: 'Apr 06',
            body: (
              <>
                <span className="quote">&ldquo;gotten used to it&rdquo;</span>
                <span className="cite">{`call-003 ${MIDDOT} 00:01:00`}</span>
              </>
            ),
          },
        ],
        foot: (
          <>
            {`Span: `}
            <span className="copper">28 days</span>
            {` ${MIDDOT} same speaker ${MIDDOT} both citations preserved`}
          </>
        ),
        detail: {
          ctx: [
            {
              ts: '[00:01:24]',
              text: 'Maya Chen: When you say ceiling, what specifically?',
            },
            {
              ts: '[00:01:28]',
              text: 'Daniel Voss: Two things. First, latency. Three to five seconds of settlement delay on internal transfers.',
            },
          ],
          cta: `Open Mar 09 Discovery transcript ${ARROW}`,
          modalKey: 'call-001',
        },
      },
      {
        name: `Pain ${ARROW} product`,
        status: 'still ranked',
        flagged: false,
        title: (
          <>
            Atlas Settlement{' '}
            <span className="signal-title-meta">
              {`${MIDDOT} sub-second settlement`}
            </span>
          </>
        ),
        rows: [
          {
            label: 'match',
            body: (
              <>
                {`3-5s settlement delays ${MIDDOT} primary ${MIDDOT} `}
                <span className="copper">0.96 confidence</span>
              </>
            ),
          },
        ],
        foot: 'Pain doesn\u2019t disappear when the rep adapts. The match stays ranked.',
        detail: {
          ctx: [
            {
              text: 'Match held even after Daniel adapted his trader workflow. The underlying pain is structural; the workaround is local. Atlas Settlement remains primary.',
            },
          ],
          cta: `See full pain ${ARROW} product mapping ${ARROW}`,
          modalKey: 'mapping',
        },
      },
    ],
  },
  // 2: Maya followup probe. CRM unchanged from state 1 (questions don't
  // trigger CRM updates). Salency stays quiet on follow-up prompts.
  2: {
    crmNotes: '"gotten used to it. not main thing anymore."',
    crmFoot: {
      hidden: false,
      text: `Apr 06 entry ${MIDDOT} unchanged from previous line.`,
    },
    gap: null,
    signals: [
      {
        name: 'Context only',
        status: 'no signal',
        flagged: false,
        title: 'Maya Chen, follow-up probe',
        rows: [],
        foot: 'Follow-up prompts surface no extraction.',
      },
    ],
  },
  // 3: Trader workflow adjustment. CRM stores the new line but cannot
  // connect it to the underlying pain (call-001) or to the trader as a
  // stakeholder. The failure mode is "no link", not "overwrite".
  3: {
    crmNotes: '"trader workflow adjusted, pre-positions margin"',
    crmFoot: {
      hidden: false,
      text: `${CROSS} New line stored. No link to the related pain or stakeholder.`,
    },
    gap: {
      kind: 'no-link',
      rows: [
        {
          line:
            '"three to five seconds of settlement delay on our internal transfers..."',
          meta: `related pain ${MIDDOT} call-001 ${MIDDOT} 00:01:28 ${MIDDOT} stored as separate note, no relation`,
        },
        {
          line: '"They yell at me. Not joking."',
          meta: `head trader ${MIDDOT} call-001 ${MIDDOT} 00:01:56 ${MIDDOT} no stakeholder field, no relation`,
        },
      ],
      comment:
        'Three related facts across two calls. CRM stores them as flat strings with no relationship. Salency links the workaround to the pain it compensates for and to the person who drove it.',
    },
    signals: [
      {
        name: 'Change delta',
        status: 'detected',
        flagged: true,
        title: `Trader workflow: reactive ${ARROW} pre-positioned`,
        rows: [
          {
            label: 'topic',
            body: `Margin pre-positioning ${MIDDOT} compensates settlement lag`,
          },
          {
            label: 'cite',
            body: (
              <>
                <span className="quote">&ldquo;adjusted his workflow&rdquo;</span>
                <span className="cite">{`call-003 ${MIDDOT} 00:01:22`}</span>
              </>
            ),
          },
        ],
        foot: `Linked to the latency contradiction ${MIDDOT} signals workaround maturity.`,
        detail: {
          ctx: [
            {
              text: 'This change-delta links to the latency contradiction above. Same account, same speaker, related but distinct event. CRM cannot represent this dependency; Salency tracks both.',
            },
          ],
          cta: `See related signals ${ARROW}`,
          modalKey: 'call-003-context',
        },
      },
      {
        name: 'Stakeholder',
        status: 'inferred',
        flagged: false,
        title: `Head trader ${MIDDOT} operational driver`,
        rows: [
          {
            label: 'role',
            body: `Daniel Voss\u2019s direct report ${MIDDOT} mentioned across both calls`,
          },
        ],
        foot: 'Salency tracks people Daniel mentions, not just attendees of the call.',
      },
    ],
  },
  // 4: Pain ranking. Daniel's "list" statement implies an ordered priority
  // across the account's pains. CRM has no priority/ranking field type, so
  // even if the rep typed it, there's no schema home for the order. The
  // failure mode is "no field", not "overwrite". The rebalance only cites
  // pains that actually appear in the arc (latency from call-001 and MAS
  // Singapore from call-002).
  4: {
    crmNotes: '"latency on the list but not the top"',
    crmFoot: {
      hidden: false,
      text: `${CROSS} "List" is referenced. CRM has no priority field.`,
    },
    gap: {
      kind: 'no-field',
      rows: [
        {
          line: 'Latency · 3-5s settlement delays',
          meta: `call-001 ${MIDDOT} Mar 09 ${MIDDOT} stored as a pain with no rank`,
        },
        {
          line: 'MAS Singapore · Q4 deadline',
          meta: `call-002 ${MIDDOT} Mar 23 ${MIDDOT} stored as an objection with no rank`,
        },
      ],
      comment:
        'Two pains tracked across the arc. Daniel\u2019s "list" statement reorders them: MAS now urgent, latency demoted. CRM has no priority field, so the order has no place to live. Salency stores ranked weights as first-class data.',
    },
    signals: [
      {
        name: 'Pain ranking',
        status: 'updated',
        flagged: true,
        title: 'Account pain priority shifted',
        rows: [
          {
            label: 'before',
            body: `Latency #1 (Mar 09) ${MIDDOT} MAS Singapore #2 (Mar 23)`,
          },
          {
            label: 'after',
            body: `MAS Singapore #1 ${MIDDOT} Latency #2`,
          },
        ],
        foot: `Same two pains, new weights ${MIDDOT} rebalanced from Daniel\u2019s ranking statement.`,
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────
// Modal payload routing.

function dispatchModal(key: ModalKey) {
  if (key === 'call-001') {
    openTranscriptSnippetModal({
      callId: 'call-001',
      lineIdx: 1,
      contradicts: {
        priorCallId: 'call-003',
        delta: `blocker ${ARROW} resolved workaround`,
      },
    });
    return;
  }
  if (key === 'call-003-context') {
    openTranscriptSnippetModal({
      callId: 'call-003',
      lineIdx: 4,
    });
    return;
  }
  if (key === 'mapping') {
    const call = getCallById('call-001');
    openTranscriptSnippetModal({
      callId: 'call-001',
      matches: call?.matches,
    });
  }
}

// ─────────────────────────────────────────────────────────────────────────
// Component.

export function DiffPairViewer() {
  const [activeIdx, setActiveIdx] = useState(1);
  // swapKey increments on every transcript-line change so we can re-key
  // the signals container and run the entrance animation.
  const [swapKey, setSwapKey] = useState(0);
  const [renderState, setRenderState] = useState<DiffState>(STATES[1]);
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const [overwriteOpen, setOverwriteOpen] = useState(false);
  const [pulseBadge, setPulseBadge] = useState(false);
  // outgoing-fade flag for the signals + crm-notes during the 130ms
  // pre-swap window. CSS transitions on .is-outgoing handle the fade.
  const [outgoing, setOutgoing] = useState(false);
  const tlineRefs = useRef<Array<HTMLButtonElement | null>>([]);
  // Refs for the CRM gap reveal panel and the Salency signal cards. When the
  // user expands either, we scroll the parent pane so the new content is in
  // view without forcing a manual scroll. Only scrolls the pane (not the
  // page) by walking up to the nearest .pane ancestor.
  const overwriteRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  const totalCallsLine = useMemo(
    () => `Tracked across ${HUDSON_TERRACE_ARC.length} calls`,
    [],
  );

  // Scroll the parent pane (not the page) so an expanded element is visible.
  // Uses scrollTop math instead of scrollIntoView to avoid the document also
  // scrolling when the artifact itself is partially below the fold.
  useEffect(() => {
    if (!overwriteOpen || !overwriteRef.current) return;
    const el = overwriteRef.current;
    const pane = el.closest('.pane') as HTMLElement | null;
    if (!pane) return;
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const elBottom = el.offsetTop + el.offsetHeight;
    const paneBottom = pane.scrollTop + pane.clientHeight;
    if (elBottom > paneBottom) {
      pane.scrollTo({
        top: elBottom - pane.clientHeight + 16,
        behavior: reduceMotion ? 'auto' : 'smooth',
      });
    }
  }, [overwriteOpen]);

  useEffect(() => {
    if (expanded.size === 0) return;
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    expanded.forEach((idx) => {
      const el = cardRefs.current[idx];
      if (!el) return;
      const pane = el.closest('.pane') as HTMLElement | null;
      if (!pane) return;
      const elBottom = el.offsetTop + el.offsetHeight;
      const paneBottom = pane.scrollTop + pane.clientHeight;
      if (elBottom > paneBottom) {
        pane.scrollTo({
          top: elBottom - pane.clientHeight + 16,
          behavior: reduceMotion ? 'auto' : 'smooth',
        });
      }
    });
  }, [expanded]);

  const onSelectLine = (idx: number) => {
    if (idx === activeIdx) return;
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setExpanded(new Set());
    setOverwriteOpen(false);
    if (reduceMotion) {
      setActiveIdx(idx);
      setRenderState(STATES[idx]);
      setSwapKey((k) => k + 1);
      return;
    }
    // Mark outgoing for 130ms, then commit + bump swapKey for entrance.
    setOutgoing(true);
    window.setTimeout(() => {
      setOutgoing(false);
      setActiveIdx(idx);
      setRenderState(STATES[idx]);
      setSwapKey((k) => k + 1);
      const next = STATES[idx];
      if (next.gap) {
        setPulseBadge(true);
        window.setTimeout(() => setPulseBadge(false), 1200);
      }
    }, 130);
  };

  // Arrow-key nav between transcript lines for a11y (ARIA listbox pattern).
  const onTlineKey = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    idx: number,
  ) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    const next =
      e.key === 'ArrowDown'
        ? Math.min(idx + 1, TRANSCRIPT.length - 1)
        : Math.max(idx - 1, 0);
    tlineRefs.current[next]?.focus();
    onSelectLine(next);
  };

  const toggleCard = (cardIdx: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(cardIdx)) next.delete(cardIdx);
      else next.add(cardIdx);
      return next;
    });
  };

  return (
    <div className="diff-stage">
      <div className="window-chrome">
        <div className="chrome-bar">
          <div className="chrome-traffic" aria-hidden="true">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="chrome-url">
            <span className="lock" aria-hidden="true">
              {DOT_FILLED}
            </span>
            <span className="domain">salency.ai</span>
            <span className="path">/account/hudson-terrace</span>
          </div>
          <div className="chrome-title">{`memory ${MIDDOT} diff view`}</div>
        </div>

        <div className="diff-frame">
          <div className="diff-head">
            <div className="left">
              <strong>Hudson Terrace Capital</strong>
              {` ${MIDDOT} ${CALL_003?.displayDate ?? 'Apr 06'} ${MIDDOT} Pricing call`}
            </div>
            <div className="right">{`Synthetic transcript ${MIDDOT} demo arc`}</div>
          </div>

          <div className="column-headers" role="presentation">
            <div className="col-header">
              <span className="col-name">Notetaker</span>
              <span className="col-sub">What was said</span>
            </div>
            <div className="col-header">
              <span className="col-name">Your CRM</span>
              <span className="col-sub">What got stored</span>
            </div>
            <div className="col-header salency-header">
              <span className="col-name">Salency</span>
              <span className="col-sub">What&rsquo;s remembered</span>
            </div>
          </div>

          <div className="diff-grid">
            {/* Transcript pane */}
            <div className="pane">
              <div className="pane-eb" role="presentation">
                {`Transcript `}
                <span className="meta">{` ${MIDDOT} call-003`}</span>
              </div>
              <div
                role="listbox"
                aria-label="Call transcript lines"
                className="tline-list"
              >
                {TRANSCRIPT.map((line, idx) => (
                  <button
                    type="button"
                    key={idx}
                    ref={(el) => {
                      tlineRefs.current[idx] = el;
                    }}
                    role="option"
                    aria-selected={idx === activeIdx}
                    tabIndex={idx === activeIdx ? 0 : -1}
                    onClick={() => onSelectLine(idx)}
                    onKeyDown={(e) => onTlineKey(e, idx)}
                    className={`tline${idx === activeIdx ? ' is-active' : ''}`}
                  >
                    <span className="ts">{line.ts}</span>
                    <span className="speaker">{line.speaker}</span> {line.text}
                  </button>
                ))}
              </div>
              <div className="transcript-foot">{`${ARROW_UP} Click any line`}</div>
            </div>

            {/* CRM pane */}
            <div className="pane crm-pane">
              <div className="pane-eb">
                {`CRM record `}
                <span className="meta">{` ${MIDDOT} #4128`}</span>
              </div>
              <div className="crm-record">
                <div className="crm-row">
                  <span className="crm-key">
                    stage<span className="crm-constraint">15 options</span>
                  </span>
                  <span className="crm-val">Negotiation</span>
                </div>
                <div className="crm-row">
                  <span className="crm-key">
                    amount<span className="crm-constraint">currency</span>
                  </span>
                  <span className="crm-val">$480,000</span>
                </div>
                <div className="crm-row">
                  <span className="crm-key">
                    owner<span className="crm-constraint">single user</span>
                  </span>
                  <span className="crm-val">Maya Chen</span>
                </div>
                <div className="crm-row">
                  <span className="crm-key">
                    last activity<span className="crm-constraint">date</span>
                  </span>
                  <span className="crm-val dim">Apr 06</span>
                </div>
                <button
                  type="button"
                  className={`crm-row notes${overwriteOpen ? ' is-expanded' : ''}${renderState.gap ? '' : ' is-quiet'}`}
                  onClick={() => {
                    if (!renderState.gap) return;
                    setOverwriteOpen((v) => !v);
                  }}
                  aria-expanded={overwriteOpen}
                  aria-disabled={renderState.gap ? 'false' : 'true'}
                >
                  <span className="crm-key">
                    notes
                    <span className="crm-constraint warn">
                      {`1024 chars ${MIDDOT} last writer wins`}
                    </span>
                  </span>
                  <span className="crm-val-col">
                    <span
                      className={`crm-overwrite-badge${renderState.gap ? ` is-${renderState.gap.kind}` : ' is-hidden'}${pulseBadge ? ' is-pulse' : ''}`}
                      aria-hidden={renderState.gap ? 'false' : 'true'}
                    >
                      {renderState.gap
                        ? GAP_BADGE[renderState.gap.kind]
                        : ''}
                    </span>
                    <span
                      key={swapKey}
                      className={`crm-val crm-val-fade${outgoing ? ' is-outgoing' : ''}`}
                    >
                      {renderState.crmNotes}
                    </span>
                    {renderState.gap ? (
                      <span className="crm-expand-cue" aria-hidden="true">
                        {overwriteOpen
                          ? GAP_CUE[renderState.gap.kind].open
                          : GAP_CUE[renderState.gap.kind].closed}
                      </span>
                    ) : null}
                  </span>
                </button>
              </div>
              {renderState.gap ? (
                <div
                  // Key includes activeIdx + overwriteOpen so React remounts
                  // when the user re-expands on a new state. Forces the flash
                  // animation to restart cleanly instead of being preserved
                  // mid-progress across state-to-state transitions.
                  key={`gap-${activeIdx}-${overwriteOpen}`}
                  ref={overwriteRef}
                  className={`crm-overwrite is-${renderState.gap.kind}${overwriteOpen ? ' is-shown' : ''}`}
                  role="region"
                  aria-label={GAP_LABEL[renderState.gap.kind]}
                >
                  <div className="lost-eb">{GAP_LABEL[renderState.gap.kind]}</div>
                  {renderState.gap.rows.map((r, ri) => (
                    <div className="lost-row" key={ri}>
                      <p className="lost-line">{r.line}</p>
                      <p className="lost-meta">{r.meta}</p>
                    </div>
                  ))}
                  <div className="lost-comment">{renderState.gap.comment}</div>
                </div>
              ) : null}
              {!renderState.crmFoot.hidden ? (
                <div className="crm-foot">{renderState.crmFoot.text}</div>
              ) : null}
            </div>

            {/* Salency pane */}
            <div className="pane salency-pane">
              <div className="pane-eb">
                {`Memory layer`}
                <span className="meta">
                  {` ${MIDDOT} ${HUDSON_TERRACE_ARC.length} calls ${MIDDOT} 21 signals`}
                </span>
              </div>
              <div
                className={`signals${outgoing ? ' is-outgoing' : ''}`}
                key={swapKey}
              >
                {renderState.signals.map((sig, i) => {
                  const isExpanded = expanded.has(i);
                  return (
                    <article
                      key={`${swapKey}-${i}`}
                      ref={(el) => {
                        cardRefs.current[i] = el;
                      }}
                      className={`signal-card is-new${sig.flagged ? ' is-flagged' : ''}${isExpanded ? ' is-expanded' : ''}`}
                      style={{ animationDelay: `${i * 60}ms` }}
                    >
                      <div className="signal-head">
                        <span className="signal-name">{sig.name}</span>
                        <span className="signal-status">{sig.status}</span>
                      </div>
                      <p className="signal-title">{sig.title}</p>
                      {sig.rows.map((r, ri) => (
                        <div className="signal-quote-row" key={ri}>
                          <span className="label">{r.label}</span>
                          <span className="body">{r.body}</span>
                        </div>
                      ))}
                      <div className="signal-foot">{sig.foot}</div>
                      {sig.detail ? (
                        <>
                          {!isExpanded ? (
                            <button
                              type="button"
                              className="expand-toggle"
                              onClick={() => toggleCard(i)}
                              aria-expanded={isExpanded}
                            >
                              {`${ARROW_DOWN} click to expand`}
                            </button>
                          ) : null}
                          {isExpanded ? (
                            <div
                              className="signal-card-detail"
                              role="region"
                              aria-label={`${sig.name} detail`}
                            >
                              {sig.detail.ctx.map((c, ci) => (
                                <p className="ctx-line" key={ci}>
                                  {c.ts ? (
                                    <span className="ts">{c.ts}</span>
                                  ) : null}
                                  {c.text}
                                </p>
                              ))}
                              <button
                                type="button"
                                className="open-modal"
                                onClick={() => {
                                  if (sig.detail)
                                    dispatchModal(sig.detail.modalKey);
                                }}
                              >
                                {sig.detail.cta}
                              </button>
                              <button
                                type="button"
                                className="expand-toggle expand-toggle--collapse"
                                onClick={() => toggleCard(i)}
                                aria-expanded={isExpanded}
                              >
                                {`${ARROW_UP} collapse`}
                              </button>
                            </div>
                          ) : null}
                        </>
                      ) : null}
                    </article>
                  );
                })}
              </div>
              <div className="cross-call-foot">
                <span className="dot" aria-hidden="true" />
                <span>
                  {`${totalCallsLine} ${MIDDOT} `}
                  <a
                    href="#"
                    className="link"
                    onClick={(e) => e.preventDefault()}
                  >
                    {`see full account ${ARROW}`}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
