'use client';

import { useEffect, useRef, useState } from 'react';

export interface BrandRevealProps {
  /**
   * sessionStorage key used to gate replays across navigations.
   * Override per surface so two instances can replay independently.
   * Default: `salency_brand_reveal_played`.
   */
  storageKey?: string;
  /**
   * Override the aria-label. Default: `Salency`.
   */
  ariaLabel?: string;
  /**
   * Force the animation to play on mount, ignoring the sessionStorage gate
   * and navigation-type detection. Useful for Storybook or design previews.
   */
  forcePlay?: boolean;
}

const DEFAULT_STORAGE_KEY = 'salency_brand_reveal_played';

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
 *   - Hard refresh        → replay
 *   - Soft refresh (F5)   → replay
 *   - Client-side Link    → do NOT replay (marketing reveal, not nav noise)
 *   - prefers-reduced-motion → snap to final state
 */
export function BrandReveal({
  storageKey = DEFAULT_STORAGE_KEY,
  ariaLabel = 'Salency',
  forcePlay = false,
}: BrandRevealProps = {}) {
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

    if (forcePlay) {
      setShouldAnimate(true);
      return;
    }

    const navEntry = performance.getEntriesByType(
      'navigation',
    )[0] as PerformanceNavigationTiming | undefined;
    const isReload = navEntry?.type === 'reload';

    const alreadyPlayed = sessionStorage.getItem(storageKey) === '1';

    if (!isReload && alreadyPlayed) {
      stageRef.current?.classList.add('is-final');
      return;
    }

    setShouldAnimate(true);
    sessionStorage.setItem(storageKey, '1');
  }, [storageKey, forcePlay]);

  useEffect(() => {
    if (!shouldAnimate) return;
    const stage = stageRef.current;
    if (!stage) return;

    const mergeTimer = window.setTimeout(() => {
      stage.classList.add('is-merged');
    }, 1600);
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
      aria-label={ariaLabel}
      role="img"
    >
      <span className="brand-reveal-wordmark" aria-hidden>
        <span className="brand-reveal-word brand-reveal-sale">
          <span className="brand-reveal-letter">S</span>
          <span className="brand-reveal-letter">a</span>
          <span className="brand-reveal-letter">l</span>
          <span className="brand-reveal-letter">e</span>
          <span className="brand-reveal-letter brand-reveal-drop">s</span>
        </span>
        <span className="brand-reveal-sep"> + </span>
        <span className="brand-reveal-word brand-reveal-saliency">
          <span className="brand-reveal-letter brand-reveal-drop">S</span>
          <span className="brand-reveal-letter brand-reveal-drop">a</span>
          <span className="brand-reveal-letter brand-reveal-drop">l</span>
          <span className="brand-reveal-letter brand-reveal-drop">i</span>
          <span className="brand-reveal-letter brand-reveal-drop">e</span>
          <span className="brand-reveal-letter brand-reveal-survive">n</span>
          <span className="brand-reveal-letter brand-reveal-survive">c</span>
          <span className="brand-reveal-letter brand-reveal-survive">y</span>
        </span>
        <span className="brand-reveal-underline" aria-hidden />
      </span>
    </div>
  );
}
