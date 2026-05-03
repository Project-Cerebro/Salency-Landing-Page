'use client';

// Renders the SYNTHETIC TRANSCRIPT chip — the synthetic-data honesty label
// required by the hero-artifact spec. Literal kept here so the CI guard
// (scripts/check-synthetic-label.mjs) can detect it via grep without
// crossing the lib boundary.

import { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import {
  HUDSON_TERRACE_ARC,
  SYNTHETIC_LABEL,
  ACCOUNT_NAME,
  type SyntheticCall,
} from '@/lib/synthetic-arc';
import { useBodyScrollLock } from '@/lib/use-body-scroll-lock';
import {
  TRANSCRIPT_SNIPPET_MODAL_EVENT,
  type TranscriptSnippetModalDetail,
} from '@/lib/transcript-snippet-modal-event';

export { TRANSCRIPT_SNIPPET_MODAL_EVENT } from '@/lib/transcript-snippet-modal-event';

const CALL_TYPE_LABEL: Record<SyntheticCall['callType'], string> = {
  discovery: 'Discovery',
  technical: 'Technical',
  pricing: 'Pricing',
};

const SIGNAL_HEADER: Record<SyntheticCall['signal'], string> = {
  pain: 'Pain → product',
  objection: 'Objection → product',
  contradiction: 'Pain → product',
};

function formatCitation(call: SyntheticCall): string {
  return `${ACCOUNT_NAME} · ${CALL_TYPE_LABEL[call.callType]} call · ${call.date} · ${call.citationTimestamp}`;
}

export default function TranscriptSnippetModal() {
  const [detail, setDetail] = useState<TranscriptSnippetModalDetail | null>(
    null,
  );
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const close = useCallback(() => {
    setDetail(null);
    const t = triggerRef.current;
    triggerRef.current = null;
    if (t && typeof t.focus === 'function') {
      requestAnimationFrame(() => t.focus());
    }
  }, []);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const next = (e as CustomEvent<TranscriptSnippetModalDetail>).detail;
      if (!next?.callId) return;
      const active = document.activeElement;
      triggerRef.current = active instanceof HTMLElement ? active : null;
      setDetail(next);
    };
    window.addEventListener(TRANSCRIPT_SNIPPET_MODAL_EVENT, onOpen);
    return () =>
      window.removeEventListener(TRANSCRIPT_SNIPPET_MODAL_EVENT, onOpen);
  }, []);

  const open = detail !== null;

  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;
    requestAnimationFrame(() => closeBtnRef.current?.focus());
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        close();
        return;
      }
      if (e.key !== 'Tab') return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeEl = document.activeElement as HTMLElement | null;
      if (e.shiftKey && activeEl === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && activeEl === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, close]);

  if (!open || !detail) return null;

  const call = HUDSON_TERRACE_ARC.find((c) => c.id === detail.callId);
  if (!call) return null;

  const highlightLineIndex =
    detail.lineIdx ?? call.snippet.highlightLineIndex;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Transcript snippet — ${ACCOUNT_NAME} ${CALL_TYPE_LABEL[call.callType]} call ${call.date}`}
      className="hero-artifact-modal-backdrop"
      onClick={close}
    >
      <div
        ref={panelRef}
        className="hero-artifact-modal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          type="button"
          onClick={close}
          aria-label="Close transcript snippet"
          className="hero-artifact-modal-close"
        >
          <X className="hero-artifact-modal-close-icon" aria-hidden />
        </button>

        <div className="hero-artifact-modal-head">
          <span className="hero-artifact-modal-chip">{SYNTHETIC_LABEL}</span>
          <p className="hero-artifact-modal-cite">{formatCitation(call)}</p>
          <p className="hero-artifact-modal-speaker">
            {call.speaker.name}, {call.speaker.title}
            <span className="sep">·</span>
            <span className="conf">conf {call.confidence.toFixed(2)}</span>
          </p>
        </div>

        <ol className="hero-artifact-modal-snippet">
          {call.snippet.lines.map((line, idx) => {
            const isCited = idx === highlightLineIndex;
            return (
              <li
                key={idx}
                className={
                  isCited
                    ? 'hero-artifact-modal-line is-cited'
                    : 'hero-artifact-modal-line'
                }
              >
                {isCited ? <mark>{line}</mark> : line}
              </li>
            );
          })}
        </ol>

        {(detail.matches ?? call.matches) && (detail.matches ?? call.matches)!.length > 0 && (
          <section
            className="hero-artifact-modal-matches"
            aria-label="Matched products"
          >
            <p className="hero-artifact-modal-matches-eb">
              {SIGNAL_HEADER[call.signal]}
            </p>
            <ul className="hero-artifact-modal-matches-list">
              {(detail.matches ?? call.matches)!.map((m) => (
                <li
                  key={m.product}
                  className="hero-artifact-modal-match"
                  data-role={m.role}
                  data-confidence={m.confidence}
                >
                  <span className="hero-artifact-modal-match-name">
                    {m.product}
                  </span>
                  <span className="hero-artifact-modal-match-meta">
                    {m.role}
                    <span className="sep">·</span>
                    {m.confidence}
                    {m.note && (
                      <>
                        <span className="sep">·</span>
                        <span className="hero-artifact-modal-match-note">
                          {m.note}
                        </span>
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
