'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Animated brand-reveal wordmark.
 *
 * Shows the etymology of the brand: "Sales" (revenue) + "Saliency" (what
 * stands out) fuse into "Salency" — redundant letters collapse, survivors
 * reflow via flex. All motion is CSS transitions; JS only toggles
 * orchestration classes on timers.
 *
 * Replay rule:
 *   - Fresh tab           → replay
 *   - Hard refresh        → replay (navigation type === 'reload')
 *   - Soft refresh (F5)   → replay (same navigation type)
 *   - Client-side Link    → do NOT replay (marketing reveal, not nav noise)
 *   - prefers-reduced-motion → snap to final state
 */

const STORAGE_KEY = 'salency_brand_reveal_played';

export function BrandReveal() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (reducedMotion) {
      stageRef.current?.classList.add('is-final');
      return;
    }

    // Detect navigation type. Reload (hard or soft) → force replay and
    // clear the session flag. Otherwise honor the sessionStorage gate so
    // client-side <Link> back-nav doesn't replay.
    const navEntry = performance.getEntriesByType(
      'navigation',
    )[0] as PerformanceNavigationTiming | undefined;
    const isReload = navEntry?.type === 'reload';

    const alreadyPlayed = sessionStorage.getItem(STORAGE_KEY) === '1';

    if (!isReload && alreadyPlayed) {
      // SPA nav back to /; keep the static final state.
      stageRef.current?.classList.add('is-final');
      return;
    }

    // Fresh tab OR any kind of refresh → play the reveal.
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
          <span className="brand-reveal-letter">S</span>
          <span className="brand-reveal-letter">a</span>
          <span className="brand-reveal-letter">l</span>
          <span className="brand-reveal-letter">e</span>
          {/* Trailing "s" of Sales drops in the merge — final mark is Salency, not Salesency. */}
          <span className="brand-reveal-letter brand-reveal-drop">s</span>
        </span>
        <span className="brand-reveal-sep"> + </span>
        <span className="brand-reveal-word brand-reveal-saliency">
          {/* Letters dropped in the final "Salency": S, a, l, i, e */}
          <span className="brand-reveal-letter brand-reveal-drop">S</span>
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
