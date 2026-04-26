export function NotetakerSection() {
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
      <table className="notetaker-table">
        <thead>
          <tr>
            <th>Dimension</th>
            <th className="col-n">
              <span>Notetaker</span>
              <span className="brand">Conversation intelligence</span>
            </th>
            <th className="col-s">
              <span>Salency</span>
              <span className="brand">Institutional memory</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="dim">Output</td>
            <td className="col-n">
              <span className="icon">—</span>Transcript + call summary
            </td>
            <td className="col-s">
              <span className="icon">✓</span>
              <strong>Structured signals</strong> mapped to your catalog
            </td>
          </tr>
          <tr>
            <td className="dim">Unit of memory</td>
            <td className="col-n">
              <span className="icon">—</span>The call
            </td>
            <td className="col-s">
              <span className="icon">✓</span>The <strong>account</strong>
            </td>
          </tr>
          <tr>
            <td className="dim">Survives rep turnover</td>
            <td className="col-n">
              <span className="icon">—</span>Templated handoff doc per
              inheritance event
            </td>
            <td className="col-s">
              <span className="icon">✓</span>Live{' '}
              <strong>account graph</strong> — the brief regenerates from it
              and persists between handoffs
            </td>
          </tr>
          <tr>
            <td className="dim">Citations</td>
            <td className="col-n">
              <span className="icon">—</span>Timestamps in transcript
            </td>
            <td className="col-s">
              <span className="icon">✓</span>Every extraction cited —{' '}
              <strong>transcript + timestamp + confidence</strong>
            </td>
          </tr>
          <tr>
            <td className="dim">Pain &rarr; product matching</td>
            <td className="col-n">
              <span className="icon">—</span>No product catalog primitive
            </td>
            <td className="col-s">
              <span className="icon">✓</span>Every pain auto-matched to your
              catalog, <strong>ranked by confidence</strong>
            </td>
          </tr>
          <tr>
            <td className="dim">Cross-call contradiction detection</td>
            <td className="col-n">
              <span className="icon">—</span>Single-record deal warnings
            </td>
            <td className="col-s">
              <span className="icon">✓</span>
              <strong>Cross-call adversarial comparison</strong> &mdash; both
              citations attached
            </td>
          </tr>
          <tr>
            <td className="dim">Works alongside</td>
            <td className="col-n">
              <span className="icon">—</span>Your CRM
            </td>
            <td className="col-s">
              <span className="icon">✓</span>Your notetaker + your CRM —{' '}
              <strong>zero rip-and-replace</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="notetaker-takeaway">
        Notetakers tell you <em>what happened.</em> Salency tells you{' '}
        <em>what to do next.</em>
      </p>
    </section>
  );
}
