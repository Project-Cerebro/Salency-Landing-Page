'use client';

import { useEffect, useState } from 'react';
import { BrandReveal } from './BrandReveal';

/**
 * First-landing splash overlay.
 *
 * Shows on:
 *   - Fresh tab (first time the session touches the site)
 *   - Hard refresh
 *   - Soft refresh (Cmd+R / F5) — detected via `PerformanceNavigationTiming`
 *
 * Skips on:
 *   - Client-side `<Link>` navigation within the session (sessionStorage gate)
 *   - `prefers-reduced-motion`
 *
 * Rendered client-only (initial `mounted = false`) so session-repeat visitors
 * never get a flash of splash-then-dismiss via SSR. Gate runs in useEffect,
 * mounts the splash only when we've decided to play.
 */

const STORAGE_KEY = 'salency_splash_shown';
const TOTAL_MS = 4200; // beats finish ~4100ms + a short tail for underline fade

export function BrandRevealSplash() {
  const [mounted, setMounted] = useState(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (reducedMotion) {
      sessionStorage.setItem(STORAGE_KEY, '1');
      return;
    }

    const navEntry = performance.getEntriesByType(
      'navigation',
    )[0] as PerformanceNavigationTiming | undefined;
    const isReload = navEntry?.type === 'reload';
    const alreadyShown = sessionStorage.getItem(STORAGE_KEY) === '1';

    if (alreadyShown && !isReload) return;

    sessionStorage.setItem(STORAGE_KEY, '1');
    setMounted(true);

    const hideTimer = window.setTimeout(() => {
      setHiding(true);
      window.setTimeout(() => setMounted(false), 400);
    }, TOTAL_MS);

    return () => window.clearTimeout(hideTimer);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`loading-screen${hiding ? ' is-hiding' : ''}`}
      role="status"
      aria-live="polite"
    >
      <div className="loading-inner">
        <div className="brand-lockup">
          <img
            className="brand-lockup-mark"
            src="/salency-mark.svg"
            alt=""
            aria-hidden="true"
          />
          <BrandReveal />
        </div>
        <p className="loading-mission">
          Every call becomes memory.
          <br />
          Every role inherits it.
        </p>
        <div className="loading-rail" aria-hidden="true" />
        <span className="loading-label">Loading</span>
      </div>
    </div>
  );
}
