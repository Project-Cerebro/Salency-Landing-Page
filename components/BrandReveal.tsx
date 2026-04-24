'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Animated brand-reveal wordmark.
 *
 * Shows the etymology of the brand: "sale" (revenue) + "saliency" (what
 * stands out) fuse into "salency" — redundant letters collapse, survivors
 * reflow via flex. All motion is CSS transitions; JS only toggles
 * orchestration classes on timers.
 *
 * First-visit gate via sessionStorage so repeat page loads in the same
 * tab don't replay. prefers-reduced-motion snaps to final state.
 */

const STORAGE_KEY = 'salency_brand_reveal_played';

export function BrandReveal() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Read gating state on client (SSR renders static final state).
    const alreadyPlayed =
      typeof window !== 'undefined' &&
      sessionStorage.getItem(STORAGE_KEY) === '1';
    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (alreadyPlayed || reducedMotion) {
      // Skip animation; render the final state directly.
      stageRef.current?.classList.add('is-final');
      return;
    }

    setShouldAnimate(true);
    sessionStorage.setItem(STORAGE_KEY, '1');
  }, []);

  useEffect(() => {
    if (!shouldAnimate) return;
    const stage = stageRef.current;
    if (!stage) return;

    // Beat 1: entrance (handled by per-letter CSS animation delays).
    // Beat 2 at 1600ms: merge — collapse redundant letters + shift survivors to copper.
    const mergeTimer = window.setTimeout(() => {
      stage.classList.add('is-merged');
    }, 1600);
    // Beat 3 at 2500ms: underline sweep + glow.
    const finalTimer = window.setTimeout(() => {
      stage.classList.add('is-final');
    }, 2500);

    return () => {
      window.clearTimeout(mergeTimer);
      window.clearTimeout(finalTimer);
    };
  }, [shouldAnimate]);

  return (
    <div
      ref={stageRef}
      className={`brand-reveal ${shouldAnimate ? 'is-animating' : ''}`}
      aria-label="Salency"
      role="img"
    >
      <span className="brand-reveal-wordmark" aria-hidden>
        <span className="brand-reveal-word brand-reveal-sale">
          <span className="brand-reveal-letter">s</span>
          <span className="brand-reveal-letter">a</span>
          <span className="brand-reveal-letter">l</span>
          <span className="brand-reveal-letter">e</span>
        </span>
        <span className="brand-reveal-sep"> + </span>
        <span className="brand-reveal-word brand-reveal-saliency">
          {/* Letters that are dropped in the final "salency": s, a, l, i, e */}
          <span className="brand-reveal-letter brand-reveal-drop">s</span>
          <span className="brand-reveal-letter brand-reveal-drop">a</span>
          <span className="brand-reveal-letter brand-reveal-drop">l</span>
          <span className="brand-reveal-letter brand-reveal-drop">i</span>
          <span className="brand-reveal-letter brand-reveal-drop">e</span>
          {/* Surviving letters: n, c, y */}
          <span className="brand-reveal-letter brand-reveal-survive">n</span>
          <span className="brand-reveal-letter brand-reveal-survive">c</span>
          <span className="brand-reveal-letter brand-reveal-survive">y</span>
        </span>
        <span className="brand-reveal-underline" aria-hidden />
      </span>
    </div>
  );
}
