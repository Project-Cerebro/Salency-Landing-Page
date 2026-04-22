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
              Salesforce, HubSpot, Attio stay. Salency is the memory layer
              alongside them: pain graph, contradictions, account-level
              brief. Flat fields export when leadership wants them in CRM.
            </div>
          </div>
          <div className="notdo-item">
            <span className="x">×</span>
            <div className="t">Not an in-call coach</div>
            <span className="check" aria-label="What it does">✓</span>
            <div className="s">
              That&apos;s Gong&apos;s turf. Salency works between calls.
              After each conversation it updates the account&apos;s memory,
              so the rep walks into the next call already briefed.
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
          <div className="notdo-item">
            <span className="x">×</span>
            <div className="t">Not a CRM integration (yet)</div>
            <span className="check" aria-label="What it does">✓</span>
            <div className="s">
              V1 ships CSV and markdown export. Reps copy structured fields
              into Salesforce, HubSpot, or Attio manually. Programmatic
              write-back lands in V1.5. The graph stays on Salency by design.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
