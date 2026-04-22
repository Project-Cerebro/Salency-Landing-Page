export function NotDoSection() {
  return (
    <section className="notdo">
      <div className="notdo-card">
        <div className="hdr">
          <span className="eb">What it is · what it isn&apos;t</span>Salency, in
          plain terms.
        </div>
        <div className="notdo-list">
          <div className="notdo-item">
            <span className="x">×</span>
            <div className="t">Not a CRM replacement</div>
            <span className="check" aria-label="What it does">✓</span>
            <div className="s">
              CRM tracks pipeline stages and quotes. Salency tracks what the
              customer said: pain graph, contradictions, account brief. The
              memory layer stays on Salency; flat fields export to Salesforce,
              HubSpot, or Attio as CSV or markdown. Native CRM integration is
              on the roadmap.
            </div>
          </div>
          <div className="notdo-item">
            <span className="x">×</span>
            <div className="t">Not a magic close button</div>
            <span className="check" aria-label="What it does">✓</span>
            <div className="s">
              We don&apos;t claim to close more deals. We capture what gets
              lost: the pain a buyer named, the contradiction from last
              week&apos;s call, the next step nobody wrote down. The hour
              before every call goes back to selling.
            </div>
          </div>
          <div className="notdo-item">
            <span className="x">×</span>
            <div className="t">Not another call recorder</div>
            <span className="check" aria-label="What it does">✓</span>
            <div className="s">
              Salency sits <em>on top of</em> your notetaker. Gong, Fathom,
              Fireflies, raw .vtt go in. A cited, queryable memory layer
              comes out. Survives rep rotation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
