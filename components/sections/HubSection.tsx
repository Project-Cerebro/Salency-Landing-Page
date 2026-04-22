export function HubSection() {
  return (
    <section className="hub-wrap">
      <div className="hub">
        <div className="hub-head">
          <span className="eb">
            Inputs <span className="arr">→</span> transcripts + catalog
          </span>
          <span className="eb r">
            <span className="arr">←</span> consumed by roles
          </span>
        </div>

        <svg
          className="hub-lines"
          viewBox="0 0 1000 560"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(254,133,49,0.22)" />
              <stop offset="60%" stopColor="rgba(254,133,49,0.04)" />
              <stop offset="100%" stopColor="rgba(254,133,49,0)" />
            </radialGradient>
          </defs>
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
          <path
            d="M 210 140 Q 360 160, 500 280"
            fill="none"
            stroke="rgba(254,133,49,0.55)"
            strokeWidth="1.1"
          />
          <path
            d="M 210 230 Q 360 250, 500 280"
            fill="none"
            stroke="rgba(254,133,49,0.55)"
            strokeWidth="1.1"
          />
          <path
            d="M 210 330 Q 360 320, 500 280"
            fill="none"
            stroke="rgba(254,133,49,0.55)"
            strokeWidth="1.1"
          />
          <path
            d="M 210 420 Q 360 390, 500 280"
            fill="none"
            stroke="rgba(254,133,49,0.55)"
            strokeWidth="1.1"
          />
          <path
            d="M 500 280 Q 640 180, 790 150"
            fill="none"
            stroke="rgba(254,133,49,0.55)"
            strokeWidth="1.1"
          />
          <path
            d="M 500 280 Q 640 280, 790 280"
            fill="none"
            stroke="rgba(254,133,49,0.55)"
            strokeWidth="1.1"
          />
          <path
            d="M 500 280 Q 640 380, 790 410"
            fill="none"
            stroke="rgba(254,133,49,0.55)"
            strokeWidth="1.1"
          />
        </svg>

        <div className="hub-inputs">
          <div className="hub-pill" style={{ top: '22%' }}>
            <span className="ic">🎤</span>Call recording
          </div>
          <div className="hub-pill" style={{ top: '39%' }}>
            <span className="ic">📄</span>.vtt transcript
          </div>
          <div className="hub-pill" style={{ top: '59%' }}>
            <span className="ic">📦</span>Product catalog
          </div>
          <div className="hub-pill" style={{ top: '76%' }}>
            <span className="ic">💬</span>Zoom transcript
          </div>
        </div>

        <div className="hub-core">
          <div className="hub-core-eb">
            <span className="dot">●</span> Salency
          </div>
          <div className="hub-core-ttl">
            Extract · <em>Map</em> · Remember
          </div>
          <div className="hub-core-sub">one queryable memory layer</div>
        </div>

        <div className="hub-roles">
          <div className="hub-role" style={{ top: '18%' }}>
            <div className="rk">New AE</div>
            <div className="rt">Inherits context</div>
            <div className="rs">Full account state before the next call</div>
          </div>
          <div className="hub-role" style={{ top: '44%' }}>
            <div className="rk">CSM</div>
            <div className="rt">Picks up handoff</div>
            <div className="rs">Pain-to-product mappings already cited</div>
          </div>
          <div className="hub-role" style={{ top: '70%' }}>
            <div className="rk">Director</div>
            <div className="rt">Sees the pattern</div>
            <div className="rs">Pains and objections across every deal</div>
          </div>
        </div>

        <div className="hub-foot">
          <span>One pipeline · every role · zero handoff loss</span>
          <span>
            <em>Early access</em> · Q2 2026
          </span>
        </div>
      </div>
    </section>
  );
}
