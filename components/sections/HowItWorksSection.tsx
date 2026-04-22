export function HowItWorksSection() {
  return (
    <section className="how" id="how-it-works">
      <div className="how-head">
        <div>
          <div className="eb">How it works</div>
          <h2>
            Three steps. <em>Every call,</em> every account.
          </h2>
        </div>
        <p className="lede">
          Transcript from any source: <em>AI notetaker</em>, Zoom, Meet, or a
          raw .vtt. Three steps turn it into <em>structured memory</em>: every
          pain, commitment, and stakeholder cited, queryable, and still useful
          after the rep who took the call has moved on.
        </p>
      </div>
      <div className="how-steps">
        <div className="how-step">
          <div className="idx">Step 01</div>
          <h3 className="verb">
            <em>Extract</em>
          </h3>
          <p className="desc">
            Every call is parsed into structured signals: pains, objections,
            competitors, commitments, timelines, next steps. Not summarised —
            enumerated. Each one keeps its verbatim quote and timestamp.
          </p>
          <div className="ex">
            <div className="el">Example output</div>
            <div className="eq">
              &ldquo;We need to cut AE ramp from 9 months to 4 by Q3.&rdquo;{' '}
              <strong>→ Commitment</strong> · Priya Shah · Disco 31:08
            </div>
          </div>
        </div>
        <div className="how-step">
          <div className="idx">Step 02</div>
          <h3 className="verb">
            <em>Map</em>
          </h3>
          <p className="desc">
            Each pain is mapped to a line item in your product catalog. Each
            stakeholder is linked to their role, their account, and every prior
            quote. The graph grows with every call.
          </p>
          <div className="ex">
            <div className="el">Example mapping</div>
            <div className="eq">
              Pain:{' '}
              <em style={{ fontStyle: 'italic' }}>
                &ldquo;handoff loses context&rdquo;
              </em>{' '}
              <strong>→ Memory Graph + Stakeholder View</strong>
            </div>
          </div>
        </div>
        <div className="how-step">
          <div className="idx">Step 03</div>
          <h3 className="verb">
            <em>Remember</em>
          </h3>
          <p className="desc">
            The graph keeps every extraction alive long after the call ends.
            When a rep rotates or the quarter turns, the account&apos;s memory
            travels with it — still linked to source, still queryable, still
            current.
          </p>
          <div className="ex">
            <div className="el">Example recall</div>
            <div className="eq">
              New AE opens <strong>Acme</strong> → inherits 47 extractions
              across 9 calls, each cited and stakeholder-mapped.
            </div>
          </div>
        </div>
      </div>
      <div className="how-foot">
        <span>
          Works with any transcript.<span className="sep">·</span>
          <em>Citations + confidence scores</em> on every extraction.
        </span>
        <span>Deploys in 48 hours · alongside your AI notetaker</span>
      </div>
    </section>
  );
}
