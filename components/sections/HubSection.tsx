'use client';

import { useState } from 'react';

export function HubSection() {
  const [played, setPlayed] = useState(false);
  const trigger = () => setPlayed(true);

  return (
    <section className={`hub-wrap${played ? ' played' : ''}`}>
      <div className="hub">
        <div className="hub-main">
        <div className="hub-head">
          <span className="eb">
            Inputs <span className="arrow">→</span>
          </span>
          <span className="eb r">
            <span className="arrow">→</span> Outputs
          </span>
        </div>

        <svg
          className="hub-lines"
          viewBox="0 0 1000 560"
          preserveAspectRatio="none"
          role="img"
          aria-label="Hover to play the pipeline animation"
          tabIndex={0}
          onMouseEnter={trigger}
          onPointerEnter={trigger}
          onFocus={trigger}
        >
          <defs>
            <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(254,133,49,0.22)" />
              <stop offset="60%" stopColor="rgba(254,133,49,0.04)" />
              <stop offset="100%" stopColor="rgba(254,133,49,0)" />
            </radialGradient>
          </defs>
          <rect
            x="0"
            y="0"
            width="1000"
            height="560"
            fill="transparent"
            pointerEvents="all"
          />
          <ellipse cx="500" cy="280" rx="340" ry="200" fill="url(#hubGlow)" />
          <ellipse
            cx="500"
            cy="280"
            rx="360"
            ry="210"
            fill="none"
            stroke="rgba(254,133,49,0.22)"
            strokeDasharray="2 6"
          />
          <ellipse
            cx="500"
            cy="280"
            rx="280"
            ry="160"
            fill="none"
            stroke="rgba(254,133,49,0.14)"
            strokeDasharray="2 8"
          />
        </svg>

        <div className="hub-inputs">
          <div className="hub-input" style={{ top: '22%' }}>
            <div className="hub-input-ic">
              <svg viewBox="0 0 48 48" width="44" height="44" aria-hidden="true">
                <path
                  d="M11 4 H29 L39 14 V42 C39 43.1 38.1 44 37 44 H11 C9.9 44 9 43.1 9 42 V6 C9 4.9 9.9 4 11 4 Z"
                  fill="#22202A"
                  stroke="rgba(254,133,49,0.55)"
                  strokeWidth="1"
                />
                <path
                  d="M29 4 V14 H39"
                  fill="none"
                  stroke="rgba(254,133,49,0.55)"
                  strokeWidth="1"
                />
                <text
                  x="24"
                  y="32"
                  fontSize="8"
                  fontWeight="600"
                  fill="#E8925A"
                  textAnchor="middle"
                  fontFamily="'Geist Mono', monospace"
                  letterSpacing="0.5"
                >
                  .TXT
                </text>
              </svg>
            </div>
            <div className="hub-input-label">Transcript</div>
          </div>

          <div className="hub-input" style={{ top: '39%' }}>
            <div className="hub-input-ic">
              <svg viewBox="0 0 48 48" width="44" height="44" aria-hidden="true">
                <circle
                  cx="24"
                  cy="24"
                  r="16"
                  fill="#22202A"
                  stroke="rgba(254,133,49,0.55)"
                  strokeWidth="1"
                />
                <ellipse
                  cx="24"
                  cy="24"
                  rx="6"
                  ry="16"
                  fill="none"
                  stroke="rgba(254,133,49,0.55)"
                  strokeWidth="1"
                />
                <line
                  x1="8"
                  y1="24"
                  x2="40"
                  y2="24"
                  stroke="rgba(254,133,49,0.55)"
                  strokeWidth="1"
                />
                <path
                  d="M11 16 Q24 20, 37 16"
                  fill="none"
                  stroke="rgba(254,133,49,0.55)"
                  strokeWidth="1"
                />
                <path
                  d="M11 32 Q24 28, 37 32"
                  fill="none"
                  stroke="rgba(254,133,49,0.55)"
                  strokeWidth="1"
                />
              </svg>
            </div>
            <div className="hub-input-label">Product Catalog</div>
          </div>

          <div className="hub-input" style={{ top: '59%' }}>
            <div className="hub-input-ic">
              <svg viewBox="0 0 48 48" width="44" height="44" aria-hidden="true">
                <rect x="4" y="4" width="40" height="40" rx="7" fill="#0052CC" />
                <path
                  d="M8 34 C14 28, 20 28, 26 30 C32 32, 38 32, 42 28"
                  stroke="#FFFFFF"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M8 20 C14 14, 20 14, 26 16 C32 18, 38 18, 42 14"
                  stroke="#FFFFFF"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="hub-input-label">Product Details</div>
          </div>

          <div className="hub-input" style={{ top: '76%' }}>
            <div className="hub-input-ic">
              <svg viewBox="0 0 48 48" width="44" height="44" aria-hidden="true">
                <rect x="4" y="4" width="40" height="40" rx="8" fill="#2D8CFF" />
                <path d="M18 17 L32 24 L18 31 Z" fill="#FFFFFF" />
              </svg>
            </div>
            <div className="hub-input-label">Call Recording</div>
          </div>
        </div>

        <div className="hub-core">
          <div className="hub-core-brand">
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG mark, no next/image optimization needed */}
            <img className="hub-core-mark" src="/salency-mark.svg" alt="" />
            <span className="hub-core-name">Salency</span>
          </div>
          <div className="hub-core-ttl">
            Extract · Map · Remember
          </div>
        </div>

        <div className="hub-outputs">
          <div className="hub-output" style={{ top: '26%' }}>
            <div className="hub-output-ic" aria-hidden="true">
              <svg viewBox="0 0 14 14" width="12" height="12">
                <path
                  d="M2 7.5 L5.5 11 L12 3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="hub-output-body">
              <div className="hub-output-ttl">Pain → product mappings</div>
              <div className="hub-output-sub">cited to transcript, confidence-scored</div>
            </div>
          </div>
          <div className="hub-output" style={{ top: '50%' }}>
            <div className="hub-output-ic" aria-hidden="true">
              <svg viewBox="0 0 14 14" width="12" height="12">
                <path
                  d="M2 7.5 L5.5 11 L12 3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="hub-output-body">
              <div className="hub-output-ttl">Recaps + follow-up drafts</div>
              <div className="hub-output-sub">pains, objections, competitors, next steps</div>
            </div>
          </div>
          <div className="hub-output" style={{ top: '74%' }}>
            <div className="hub-output-ic" aria-hidden="true">
              <svg viewBox="0 0 14 14" width="12" height="12">
                <path
                  d="M2 7.5 L5.5 11 L12 3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="hub-output-body">
              <div className="hub-output-ttl">Handoff briefs</div>
              <div className="hub-output-sub">full account state, ready for the next rep</div>
            </div>
          </div>
        </div>

        </div>

        <div className="hub-outcome" role="complementary">
          <div className="hub-outcome-eb">Outcome</div>
          <div className="hub-outcome-grid">
            <div className="hub-outcome-row">
              <div className="hub-outcome-role">New account executive</div>
              <div className="hub-outcome-role-title">Inherits the account</div>
              <div className="hub-outcome-role-summary">Every pain, objection, and commitment from prior calls</div>
            </div>
            <div className="hub-outcome-row">
              <div className="hub-outcome-role">Customer success manager</div>
              <div className="hub-outcome-role-title">Picks up the relationship</div>
              <div className="hub-outcome-role-summary">Cited pain-to-product mappings, no re-asking</div>
            </div>
            <div className="hub-outcome-row">
              <div className="hub-outcome-role">Director</div>
              <div className="hub-outcome-role-title">Sees the pattern</div>
              <div className="hub-outcome-role-summary">Pains and objections across every deal in the pipe</div>
            </div>
          </div>
        </div>

        <div className="hub-foot">
          <span>One pipeline · every role · zero handoff loss</span>
          <span>
            Early access · Q2 2026
          </span>
        </div>
      </div>
    </section>
  );
}
