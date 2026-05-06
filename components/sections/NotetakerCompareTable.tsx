// NotetakerCompareTable, /why-salency depth payoff under the diff-pair
// viewer. 7-row contrast between AI notetakers (conversation intelligence)
// and Salency (institutional memory). Refresh of the previous
// NotetakerSection: dropped the - / + icon column treatment in favor of
// type-driven contrast (dim ink-3 on the Notetaker column, full ink with
// copper-accented strong tags on the Salency column) plus the copper-glow
// column treatment that mirrors /memory's CRM compare table.

export function NotetakerCompareTable() {
  return (
    <section className="notetaker">
      <div className="notetaker-head">
        <div className="eb">vs AI notetakers</div>
        <h2>
          The last mile <em>AI notetakers leave unaddressed.</em>
        </h2>
        <p>
          AI notetakers record what was said. Salency reads what they recorded
          and keeps it alive as reps rotate, accounts hand off, and the quarter
          turns. Here&apos;s where the two diverge.
        </p>
      </div>
      <div className="notetaker-wrap">
        <table className="notetaker-table">
          <thead>
            <tr>
              <th>Dimension</th>
              <th className="col-n">
                <span>Notetaker</span>
                <span className="brand">Conversation intelligence</span>
              </th>
              <th className="col-s salency-col">
                <span>Salency</span>
                <span className="brand">Institutional memory</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="dim">Output</td>
              <td className="col-n">Transcript + call summary</td>
              <td className="col-s salency-col">
                <strong>Structured signals</strong> mapped to your catalog
              </td>
            </tr>
            <tr>
              <td className="dim">Unit of memory</td>
              <td className="col-n">The call</td>
              <td className="col-s salency-col">
                The <strong>account</strong>
              </td>
            </tr>
            <tr>
              <td className="dim">Survives rep turnover</td>
              <td className="col-n">
                Templated handoff doc per inheritance event
              </td>
              <td className="col-s salency-col">
                Live <strong>account graph</strong>. The brief regenerates
                from it and persists between handoffs
              </td>
            </tr>
            <tr>
              <td className="dim">Citations</td>
              <td className="col-n">Timestamps in transcript</td>
              <td className="col-s salency-col">
                Every extraction cited:{' '}
                <strong>transcript + timestamp + confidence</strong>
              </td>
            </tr>
            <tr>
              <td className="dim">Pain &rarr; product matching</td>
              <td className="col-n">No product catalog primitive</td>
              <td className="col-s salency-col">
                Every pain auto-matched to your catalog,{' '}
                <strong>ranked by confidence</strong>
              </td>
            </tr>
            <tr>
              <td className="dim">Cross-call contradiction detection</td>
              <td className="col-n">Single-record deal warnings</td>
              <td className="col-s salency-col">
                <strong>Cross-call adversarial comparison</strong>, both
                citations attached
              </td>
            </tr>
            <tr>
              <td className="dim">Works alongside</td>
              <td className="col-n">Your CRM</td>
              <td className="col-s salency-col">
                Your notetaker + your CRM:{' '}
                <strong>zero rip-and-replace</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="notetaker-takeaway">
        Notetakers tell you <em>what happened.</em> Salency tells you{' '}
        <em>what to do next.</em>
      </p>
    </section>
  );
}
