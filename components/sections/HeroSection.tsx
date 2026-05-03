'use client';

// Hero — Path D-Hybrid layout. 2-col grid on desktop:
//   Left  ~40% — copy stack (H1, sub, CTAs, meta strip)
//   Right ~60% — HeroBrief (the dominant Day-1 Brief artifact)
// Single-column on mobile. HeroArtifact moved to /memory in PR 1; the
// 3-card stack is no longer rendered on /.
//
// H1 + sub-headline are locked (company-context §2 + spec section 1).
// Do not alter without re-locking the copy.

import { openPilotModal } from '@/components/PilotModal';
import { HeroBrief } from '@/components/sections/HeroBrief';

export function HeroSection() {
  const onSeePlatform = () => {
    if (typeof window === 'undefined') return;
    const target = document.getElementById('hub');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1 className="h1">
            The institutional memory for revenue teams.{' '}
            <span className="h1-italic">So every rep walks in briefed.</span>
          </h1>

          <p className="sub">
            AI that turns every call into structured, cited context. Pains,
            objections, contradictions, mapped to your products. Reps stop
            losing deals to forgotten signals.
          </p>

          <div className="cta-row">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => openPilotModal()}
            >
              Request a pilot {'\u2192'}
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={onSeePlatform}
            >
              See the platform {'\u2192'}
            </button>
          </div>

          <div className="hero-meta">
            <span className="hero-meta-item">
              Gong, Fireflies, Otter, Granola, Fathom, or any raw transcript
            </span>
            <span className="hero-meta-item">
              Now accepting pilot applications
            </span>
          </div>
        </div>

        <HeroBrief />
      </section>

      <div className="hero-hairline" aria-hidden="true"></div>
    </>
  );
}
