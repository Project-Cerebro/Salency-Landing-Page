export function CompoundsSection() {
  return (
    <section className="compounds" id="compounds">
      <div className="compounds-head">
        <span className="eb">The switching cost</span>
        <h2>
          Month one is the handoff.{' '}
          <em>Month twelve is the moat.</em>
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
            Each account&rsquo;s pain landscape stabilizes. Contradictions
            start surfacing across calls on the same account.
          </p>
        </div>
        <div className="compounds-step">
          <span className="compounds-marker">M6</span>
          <h4>Cross-account patterns emerge</h4>
          <p>
            &ldquo;Handoff loses context&rdquo; lights up seven accounts. Your
            pipeline review stops starting from zero.
          </p>
        </div>
        <div className="compounds-step">
          <span className="compounds-marker">M12</span>
          <h4>Moat, measured in quarters</h4>
          <p>
            Rip it out at month twelve and you lose what nobody wrote down.
            That&rsquo;s the switching cost.
          </p>
        </div>
      </div>

      <p className="compounds-foot">
        Flatten the graph into flat fields and you kill the thing. The memory
        layer has to live on Salency, or it isn&rsquo;t memory.
      </p>
    </section>
  );
}
