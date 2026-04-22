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
          Drop in any transcript: <em>AI notetaker</em>, Zoom, Meet, or a raw
          .vtt. Salency runs every call through the same pipeline, and the
          output is{' '}
          <em>structured, cited, and queryable</em> before your next stand-up.
        </p>
      </div>
      <div className="how-steps">
        <div className="how-step">
          <div className="idx">Step 01</div>
          <h3 className="verb">
            <em>Extract</em>
          </h3>
          <p className="desc">
            Every call is parsed into five structured signal types: pains,
            objections, competitors, requirements, next steps. Enumerated,
            not summarised. Every signal carries the verbatim quote, the
            speaker, and the timestamp.
          </p>
          <div className="ex">
            <div className="el">Example extraction</div>
            <div className="eq">
              <strong>Pain</strong> · CS director inherits accounts blind at
              renewal · Priya Shah, VP Sales · 18:02
            </div>
          </div>
        </div>
        <div className="how-step">
          <div className="idx">Step 02</div>
          <h3 className="verb">
            <em>Map</em>
          </h3>
          <p className="desc">
            Each pain maps to a line in your product catalog, ranked by
            confidence. Every new call is compared against prior calls on the
            same account, and contradictions get flagged. The graph keeps
            growing: pains, products, stakeholders, and how the story has
            changed over time.
          </p>
          <div className="ex">
            <div className="el">Example mapping</div>
            <div className="eq">
              Pain <em>&ldquo;handoff loses context&rdquo;</em>{' '}
              <strong>→ 3 products ranked</strong>, contradictions flagged
            </div>
          </div>
        </div>
        <div className="how-step">
          <div className="idx">Step 03</div>
          <h3 className="verb">
            <em>Remember</em>
          </h3>
          <p className="desc">
            The next AE inherits a Day-1 brief. The CS director picks up
            mid-story, not from zero. Pipeline review sees every pain across
            every account without replaying a single call. The memory
            outlasts any rep.
          </p>
          <div className="ex">
            <div className="el">Example surface</div>
            <div className="eq">
              <strong>Next steps</strong> · Renewal conversation by Mar 15 ·
              Open commitments: 3
            </div>
          </div>
        </div>
      </div>
      <div className="how-foot">
        <span>
          Works with any transcript.<span className="sep">·</span>
          Citations and confidence scores on every extraction.
        </span>
      </div>
    </section>
  );
}
