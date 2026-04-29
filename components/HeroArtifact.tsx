'use client';

import { useSyncExternalStore } from 'react';

interface CallNote {
  id: string;
  date: string;
  kind: string;
  pain: string;
  cite: string;
  conf?: string;
}

const CALLS: CallNote[] = [
  {
    id: 'apr-21',
    date: 'Apr 21',
    kind: 'Renewal',
    pain: '"AE-to-CSM handoff lost the pricing context — third re-ask."',
    cite: 'Priya Shah, VP Sales · 14:08',
    conf: '0.92',
  },
  {
    id: 'apr-14',
    date: 'Apr 14',
    kind: 'Discovery',
    pain: '"Budget\u2019s tight, maybe twenty." (contradicts Apr 07)',
    cite: 'Marcus Chen, Sales Ops · 27:04',
    conf: '0.87',
  },
  {
    id: 'apr-07',
    date: 'Apr 07',
    kind: 'Pre-call',
    pain: '"Budget is fifty. Need it live by Q3."',
    cite: 'Priya Shah, VP Sales · 18:02',
    conf: '0.94',
  },
];

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}
function getReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function HeroArtifact() {
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => true,
  );

  return (
    <div
      className={`hero-artifact${reduced ? ' is-reduced' : ''}`}
      aria-hidden="true"
    >
      <div className="hero-artifact-frame">
        <div className="hero-artifact-head">
          <span className="hero-artifact-eb">Acme Corp · live memory</span>
          <span className="hero-artifact-pulse">3 calls indexed</span>
        </div>
        <ol className="hero-artifact-stack">
          {CALLS.map((call, i) => (
            <li
              key={call.id}
              className="hero-artifact-card"
              style={{ ['--i' as string]: i }}
            >
              <div className="hero-artifact-meta">
                <span className="date">{call.date}</span>
                <span className="sep">·</span>
                <span className="kind">{call.kind}</span>
                {call.conf && (
                  <>
                    <span className="sep">·</span>
                    <span className="conf">conf {call.conf}</span>
                  </>
                )}
              </div>
              <p className="hero-artifact-pain">{call.pain}</p>
              <p className="hero-artifact-cite">{call.cite}</p>
            </li>
          ))}
        </ol>
        <div className="hero-artifact-foot">
          <span className="dot" />
          <span>Memory compounds with every call</span>
        </div>
      </div>
    </div>
  );
}
