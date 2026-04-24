'use client';

import { useEffect, useState } from 'react';
import { BrandReveal } from './BrandReveal';

/**
 * First-landing splash overlay.
 *
 * Shows exactly once per browser — the very first time a visitor lands on
 * the site. Gated on `localStorage` so refreshes, return visits, and
 * client-side `<Link>` navigation all skip it.
 *
 * Rendered client-only (initial `mounted = false`) so repeat visitors never
 * get a flash of splash-then-dismiss on SSR. First-time visitors see the
 * splash mount on hydration, play the reveal, and fade out after ~4.2s.
 *
 * Respects `prefers-reduced-motion`: flag is marked so the splash never
 * shows again, but the animation itself is not played.
 */

const STORAGE_KEY = 'salency_first_visit_shown';
const TOTAL_MS = 4200; // beats finish ~4100ms + a short tail for underline fade

export function BrandRevealSplash() {
  const [mounted, setMounted] = useState(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem(STORAGE_KEY) === '1';
    if (alreadyShown) return;

    localStorage.setItem(STORAGE_KEY, '1');

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (reducedMotion) return;

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
