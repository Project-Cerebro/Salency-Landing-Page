export function CompoundsSection() {
  return (
    <section className="compounds" id="compounds">
      <div className="compounds-head">
        <span className="eb">What compounds</span>
        <h2>
          Month one is the handoff.{' '}
          <em>Month twelve is the asset.</em>
        </h2>
      </div>

      <div className="compounds-timeline">
        <div className="compounds-rail" aria-hidden="true" />
        <div className="compounds-step">
          <span className="compounds-marker">M1</span>
          <h4>First calls indexed</h4>
          <p>
            Transcripts from the first two weeks establish the baseline. Every
            rep&rsquo;s account starts to fill in.
          </p>
        </div>
        <div className="compounds-step">
          <span className="compounds-marker">M3</span>
          <h4>Pain graphs fill</h4>
          <p>
            Each account&rsquo;s pain map stabilizes. Contradictions start
            surfacing across calls on the same account.
          </p>
        </div>
        <div className="compounds-step">
          <span className="compounds-marker">M6</span>
          <h4>Cross-account patterns begin to surface</h4>
          <p>
            A single pain query starts returning every account where it
            appears. Pipeline review stops starting from zero.
          </p>
        </div>
        <div className="compounds-step">
          <span className="compounds-marker">M12</span>
          <h4>A year of tribal knowledge, structured</h4>
          <p>
            By year one, you have a year of structured customer knowledge that
            wouldn&rsquo;t otherwise exist. That&rsquo;s the design. Not a
            promise, a structural consequence of how memory compounds.
          </p>
        </div>
      </div>

      <p className="compounds-foot">
        Flatten the graph into a CRM row and you kill the thing. The memory
        layer has to live on Salency, or it isn&rsquo;t memory.
      </p>
    </section>
  );
}
