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
              Reads every call transcript, extracts the pains, stakeholders,
              and commitments, and writes them back into Salesforce, HubSpot,
              or Attio as structured fields — so your CRM finally reflects
              what was actually said.
            </div>
          </div>
          <div className="notdo-item">
            <span className="x">×</span>
            <div className="t">Not an in-call coach</div>
            <span className="check" aria-label="What it does">✓</span>
            <div className="s">
              Works between calls. After each conversation, Salency updates
              the account&apos;s memory — pain history, objection log,
              stakeholder map — so the rep walks into the next call already
              briefed.
            </div>
          </div>
          <div className="notdo-item">
            <span className="x">×</span>
            <div className="t">Not a magic close button</div>
            <span className="check" aria-label="What it does">✓</span>
            <div className="s">
              Removes the context tax. Reps stop re-reading transcripts,
              re-asking customers, and reconstructing deals from Slack threads
              — so the hour before every call goes back to selling.
            </div>
          </div>
          <div className="notdo-item">
            <span className="x">×</span>
            <div className="t">Not another call recorder</div>
            <span className="check" aria-label="What it does">✓</span>
            <div className="s">
              Sits <em>on top of</em> your notetaker. Gong, Fathom, Fireflies,
              or raw .vtt — Salency takes the transcript they produce and
              turns it into a cited, queryable memory layer that survives rep
              rotation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
