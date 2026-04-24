export function MemoryEnablesSection() {
  return (
    <section className="mem-enables">
      <div className="mem-enables-head">
        <span className="eb">Two capabilities no notetaker ships</span>
        <h2>
          What only <em>memory</em> enables.
        </h2>
      </div>

      <div className="mem-enables-grid">
        <article className="mem-enables-card">
          <div className="idx">01</div>
          <h3>
            Pain <em>&rarr;</em> product, ranked
          </h3>
          <p>
            Every customer pain gets scored against your product catalog, top-N
            ranked by confidence. Three upsells queued before the rep ends the
            call. Einstein scores leads. We score pains.
          </p>
          <div className="mem-enables-mock">
            <div className="pp-row">
              <span className="pp-prod">Memory Layer</span>
              <span className="pp-bar">
                <span className="pp-fill" style={{ width: '92%' }} />
              </span>
              <span className="pp-conf">0.92</span>
            </div>
            <div className="pp-row">
              <span className="pp-prod">Contradiction Detection</span>
              <span className="pp-bar">
                <span className="pp-fill" style={{ width: '74%' }} />
              </span>
              <span className="pp-conf">0.74</span>
            </div>
            <div className="pp-row">
              <span className="pp-prod">Account Pattern Search</span>
              <span className="pp-bar">
                <span className="pp-fill" style={{ width: '61%' }} />
              </span>
              <span className="pp-conf">0.61</span>
            </div>
          </div>
        </article>

        <article className="mem-enables-card">
          <div className="idx">02</div>
          <h3>
            <em>Contradictions</em> flagged across calls
          </h3>
          <p>
            When the customer&rsquo;s story shifts between calls, we flag it
            with both citations. The rep stops re-pitching the wrong number, or
            the wrong decision-maker.
          </p>
          <div className="mem-enables-mock">
            <div className="cx-row">
              <span className="cx-date">Apr 07</span>
              <span className="cx-quote">&ldquo;budget is fifty.&rdquo;</span>
            </div>
            <div className="cx-arrow">&darr;</div>
            <div className="cx-row">
              <span className="cx-date">Apr 14</span>
              <span className="cx-quote">
                &ldquo;budget&rsquo;s tight, maybe twenty.&rdquo;
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
