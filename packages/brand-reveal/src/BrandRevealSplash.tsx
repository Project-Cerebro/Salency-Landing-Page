'use client';

import { useEffect, useState } from 'react';
import { BrandReveal } from './BrandReveal';

export interface BrandRevealSplashProps {
  /**
   * sessionStorage key for the "already shown this session" gate.
   * Default: `salency_splash_shown`.
   */
  storageKey?: string;
  /**
   * Total time the splash stays mounted before fading out.
   * Default: `4200` (matches the BrandReveal beats).
   */
  durationMs?: number;
  /**
   * Accessible label for the wordmark.
   * Default: `Salency`.
   */
  ariaLabel?: string;
  /**
   * Path to the SVG mark shown on the left of the wordmark.
   * Default: `/salency-mark.svg`.
   * Set to `null` to render the wordmark alone.
   */
  markSrc?: string | null;
  /**
   * Two-line mission statement rendered below the wordmark.
   * Default: "Every call becomes memory. / Every role inherits it."
   * Pass `null` to hide it.
   */
  mission?: React.ReactNode | null;
  /**
   * Bottom label beneath the rail.
   * Default: `Loading`.
   */
  loadingLabel?: string | null;
}

const DEFAULT_STORAGE_KEY = 'salency_splash_shown';
const DEFAULT_DURATION_MS = 4200;

const DEFAULT_MISSION = (
  <>
    Every call becomes memory.
    <br />
    Every role inherits it.
  </>
);

/**
 * First-landing splash overlay.
 *
 * Plays on fresh tab, hard refresh, and soft refresh (detected via
 * `PerformanceNavigationTiming`). Skips on client-side SPA navigation
 * within the session via sessionStorage.
 *
 * Rendered client-only (initial `mounted = false`) so session-repeat
 * renders don't flash the splash before the gate decides to skip it.
 * Respects `prefers-reduced-motion`.
 */
export function BrandRevealSplash({
  storageKey = DEFAULT_STORAGE_KEY,
  durationMs = DEFAULT_DURATION_MS,
  ariaLabel = 'Salency',
  markSrc = '/salency-mark.svg',
  mission = DEFAULT_MISSION,
  loadingLabel = 'Loading',
}: BrandRevealSplashProps = {}) {
  const [mounted, setMounted] = useState(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (reducedMotion) {
      sessionStorage.setItem(storageKey, '1');
      return;
    }

    const navEntry = performance.getEntriesByType(
      'navigation',
    )[0] as PerformanceNavigationTiming | undefined;
    const isReload = navEntry?.type === 'reload';
    const alreadyShown = sessionStorage.getItem(storageKey) === '1';

    if (alreadyShown && !isReload) return;

    sessionStorage.setItem(storageKey, '1');
    setMounted(true);

    const hideTimer = window.setTimeout(() => {
      setHiding(true);
      window.setTimeout(() => setMounted(false), 400);
    }, durationMs);

    return () => window.clearTimeout(hideTimer);
  }, [storageKey, durationMs]);

  if (!mounted) return null;

  return (
    <div
      className={`loading-screen${hiding ? ' is-hiding' : ''}`}
      role="status"
      aria-live="polite"
    >
      <div className="loading-inner">
        <div className="brand-lockup">
          {markSrc && (
            <img
              className="brand-lockup-mark"
              src={markSrc}
              alt=""
              aria-hidden="true"
            />
          )}
          <BrandReveal ariaLabel={ariaLabel} forcePlay />
        </div>
        {mission && <p className="loading-mission">{mission}</p>}
        <div className="loading-rail" aria-hidden="true" />
        {loadingLabel && <span className="loading-label">{loadingLabel}</span>}
      </div>
    </div>
  );
}
