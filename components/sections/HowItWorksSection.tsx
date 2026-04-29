import Link from 'next/link';

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
          Drop in a Gong, Fireflies, Otter, Granola, or Fathom transcript. Or
          paste raw text from Zoom, Meet, or Teams. Same pipeline, same
          output: <em>structured, cited, queryable</em> before your next
          stand-up.
        </p>
      </div>
      <div className="how-steps">
        <div className="how-step">
          <div className="idx">Step 01</div>
          <h3 className="how-step-action">
            <em>Extract</em>
          </h3>
          <p className="desc">
            Every call is parsed into five structured signal types: pains,
            objections, competitors, requirements, next steps. Enumerated,
            not summarised. Every signal carries the verbatim quote, the
            speaker, and the timestamp.
          </p>
          <div className="ex">
            <div className="example-label">Example extraction</div>
            <div className="example-quote">
              <strong>Pain</strong> · CS director inherits accounts blind at
              renewal · Priya Shah, VP Sales · 18:02
            </div>
          </div>
        </div>
        <div className="how-step">
          <div className="idx">Step 02</div>
          <h3 className="how-step-action">
            <em>Map</em>
          </h3>
          <p className="desc">
            Each pain maps to a line in your product catalog, ranked by
            confidence. Every new call is compared against prior calls on the
            same account, and contradictions get flagged. The memory graph
            keeps growing: pains, products, stakeholders, and how the story
            has changed over time.
          </p>
          <div className="ex">
            <div className="example-label">Example mapping</div>
            <div className="example-quote">
              Pain &ldquo;handoff loses context&rdquo;{' '}
              <strong>→ 3 products ranked</strong>, contradictions flagged
            </div>
          </div>
        </div>
        <div className="how-step">
          <div className="idx">Step 03</div>
          <h3 className="how-step-action">
            <em>Remember</em>
          </h3>
          <p className="desc">
            The next account executive inherits a Day-1 brief. The CS
            director picks up
            mid-story, not from zero. Pipeline review sees every customer
            need across every account without replaying a single call. The
            memory outlasts any rep.
          </p>
          <div className="ex">
            <div className="example-label">Example surface</div>
            <div className="example-quote">
              <strong>Next steps</strong> · Renewal conversation by Mar 15 ·
              Open commitments: 3
            </div>
          </div>
        </div>
      </div>
      <div className="how-foot">
        <span>
          Works with any transcript.<span className="sep">·</span>
          Citations and confidence scores on every extraction.<span className="sep">·</span>
          <Link href="/why-salency">Why Salency &rarr;</Link>
        </span>
      </div>
    </section>
  );
}
