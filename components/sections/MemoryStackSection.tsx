export function MemoryStackSection() {
  return (
    <section className="mem-stack" id="memory-stack">
      <div className="mem-stack-head">
        <span className="eb">Where Salency lives</span>
        <h2>
          Same transcripts, same CRM.{' '}
          <em>New layer between them.</em>
        </h2>
      </div>
      <div className="mem-stack-rows">
        <div className="mem-stack-row">
          <span className="layer-label">CRM</span>
          <span className="layer-role">Pipeline layer</span>
          <p className="layer-desc">
            Stages, quotas, forecasts. What the deal <em>is.</em>
          </p>
        </div>
        <div className="mem-stack-row">
          <span className="layer-label">Notetaker</span>
          <span className="layer-role">Capture layer</span>
          <p className="layer-desc">
            Transcript, summary, coaching snippets. What was <em>said.</em>
          </p>
        </div>
        <div className="mem-stack-row mem-stack-row--accent">
          <span className="layer-label">Salency</span>
          <span className="layer-role">Memory layer</span>
          <p className="layer-desc">
            Pains, product matches, contradictions, stakeholder graph. What it{' '}
            <em>means</em>, across every call.
          </p>
        </div>
      </div>
    </section>
  );
}
