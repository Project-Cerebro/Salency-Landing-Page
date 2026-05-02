'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import {
  HUDSON_TERRACE_ARC,
  ACCOUNT_NAME,
  type SyntheticCall,
} from '@/lib/synthetic-arc';
import { openHeroArtifactModal } from '@/lib/hero-artifact-modal-event';

const CALL_TYPE_LABEL: Record<SyntheticCall['callType'], string> = {
  discovery: 'Discovery',
  technical: 'Technical',
  pricing: 'Pricing',
};

const SIGNAL_LABEL: Record<SyntheticCall['signal'], string> = {
  pain: 'PAIN',
  objection: 'OBJECTION',
  contradiction: 'CONTRADICTION',
};

const DOM_ORDER: readonly SyntheticCall[] = [...HUDSON_TERRACE_ARC]
  .slice()
  .sort((a, b) => (a.date < b.date ? 1 : -1));

const CHRONO_INDEX: Record<string, number> = HUDSON_TERRACE_ARC.reduce(
  (acc, call, idx) => {
    acc[call.id] = idx;
    return acc;
  },
  {} as Record<string, number>,
);

const APR_06_ID = 'call-003';

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}
function getReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function formatCitation(call: SyntheticCall): string {
  return `${ACCOUNT_NAME} · ${CALL_TYPE_LABEL[call.callType]} call · ${call.date} · ${call.citationTimestamp}`;
}

function buildContradictsLabel(call: SyntheticCall): string | null {
  if (!call.contradicts) return null;
  const target = HUDSON_TERRACE_ARC.find((c) => c.id === call.contradicts);
  if (!target) return null;
  return `CONTRADICTS ${target.displayDate.toUpperCase()}`;
}

export function HeroArtifact() {
  const rootRef = useRef<HTMLDivElement>(null);
  const aprBadgeRef = useRef<HTMLSpanElement>(null);
  const [pinged, setPinged] = useState(false);

  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false,
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    el.dataset.reduced = reduced ? 'true' : 'false';

    const reveal = () => {
      el.dataset.revealed = 'true';
    };

    if (reduced) {
      reveal();
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(el);
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  useEffect(() => {
    if (reduced || pinged) return;
    const badge = aprBadgeRef.current;
    if (!badge) return;
    const card = badge.closest<HTMLElement>('.hero-artifact-card');
    if (!card) return;

    const onEnd = (e: AnimationEvent) => {
      if (e.animationName !== 'heroArtifactCardEnter') return;
      card.removeEventListener('animationend', onEnd);
      setPinged(true);
    };
    card.addEventListener('animationend', onEnd);
    return () => card.removeEventListener('animationend', onEnd);
  }, [reduced, pinged]);

  return (
    <div ref={rootRef} className="hero-artifact" data-revealed="false">
      <div className="hero-artifact-frame">
        <div className="hero-artifact-head">
          <span className="hero-artifact-eb">
            {ACCOUNT_NAME} · live memory
          </span>
          <span className="hero-artifact-pulse">3 calls indexed</span>
        </div>

        <ol className="hero-artifact-stack">
          {DOM_ORDER.map((call, domIndex) => {
            const chronoIndex = CHRONO_INDEX[call.id];
            const contradictsLabel = buildContradictsLabel(call);
            const isApr = call.id === APR_06_ID;

            return (
              <li
                key={call.id}
                className="hero-artifact-card-wrap"
                style={{ ['--i' as string]: domIndex }}
              >
                <button
                  type="button"
                  className="hero-artifact-card"
                  data-chrono-index={chronoIndex}
                  data-signal={call.signal}
                  onClick={() => openHeroArtifactModal(call.id)}
                  aria-label={`Open transcript snippet for ${call.displayDate} ${CALL_TYPE_LABEL[call.callType]} call`}
                >
                  <div className="hero-artifact-meta">
                    <span className="date">{call.displayDate}</span>
                    <span className="sep">·</span>
                    <span className="kind">{CALL_TYPE_LABEL[call.callType]}</span>
                    {contradictsLabel && (
                      <span
                        ref={isApr ? aprBadgeRef : undefined}
                        className={`hero-artifact-contra${pinged && isApr ? ' is-pinged' : ''}`}
                      >
                        {contradictsLabel}
                      </span>
                    )}
                  </div>

                  <p className="hero-artifact-pain">&ldquo;{call.quote}&rdquo;</p>

                  <p className="hero-artifact-cite">
                    {call.speaker.name}, {call.speaker.title}
                    <span className="sep">·</span>
                    <span>{SIGNAL_LABEL[call.signal]}</span>
                  </p>

                  <div className="hero-artifact-card-expanded">
                    <p className="hero-artifact-card-cite-full">
                      {formatCitation(call)}
                    </p>
                    <p className="hero-artifact-card-conf">
                      conf {call.confidence.toFixed(2)}
                    </p>
                    <p className="hero-artifact-card-hint">
                      Click for transcript snippet
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="hero-artifact-foot">
          <span className="dot" />
          <span>Memory compounds with every call</span>
        </div>
      </div>
    </div>
  );
}
