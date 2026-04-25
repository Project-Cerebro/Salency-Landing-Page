export function NotDoSection() {
  return (
    <section className="notdo">
      <div className="notdo-card">
        <div className="header">
          <span className="eb">What it is · what it isn&apos;t</span>Salency, in
          plain terms.
        </div>
        <div className="notdo-list">
          <div className="notdo-item">
            <span className="x">×</span>
            <div className="title">Not a CRM replacement</div>
            <span className="check" aria-label="What it does">✓</span>
            <div className="subtitle">
              CRM tracks pipeline stages, forecast, and quote-to-cash. Salency
              tracks what the customer said: pain graph, contradictions,
              account brief. Two layers, no overlap.
            </div>
          </div>
          <div className="notdo-item">
            <span className="x">×</span>
            <div className="title">Not a CRM write-back tool today</div>
            <span className="check" aria-label="What it does">✓</span>
            <div className="subtitle">
              Reps export structured fields by hand &mdash; CSV or markdown
              into HubSpot, Salesforce, Attio. Native sync is on the roadmap,
              not yet shipped. We don&apos;t commit to a version until the
              integration ships.
            </div>
          </div>
          <div className="notdo-item">
            <span className="x">×</span>
            <div className="title">Not running on your CRM&apos;s data layer</div>
            <span className="check" aria-label="What it does">✓</span>
            <div className="subtitle">
              The pain-product graph, contradictions, and account memory live
              on Salency by design. Flatten them into CRM rows and the moat
              dissolves the same day.
            </div>
          </div>
          <div className="notdo-item">
            <span className="x">×</span>
            <div className="title">Not an in-call coach</div>
            <span className="check" aria-label="What it does">✓</span>
            <div className="subtitle">
              In-call coaching is a different product. Salency works between
              calls. After each conversation it updates the account&apos;s
              memory, so the rep walks into the next call already briefed.
            </div>
          </div>
          <div className="notdo-item notdo-item--span">
            <span className="x">×</span>
            <div className="title">Not a magic close button</div>
            <span className="check" aria-label="What it does">✓</span>
            <div className="subtitle">
              We don&apos;t claim to close more deals. We capture what gets
              lost: the pain a buyer named, the contradiction from last
              week&apos;s call, the next step nobody wrote down. The hour
              before every call goes back to selling.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
