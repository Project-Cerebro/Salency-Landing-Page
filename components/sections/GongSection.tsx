export function GongSection() {
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
            <th className="col-g">
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
            <td className="col-g">
              <span className="icon">—</span>Transcript + call summary
            </td>
            <td className="col-s">
              <span className="icon">✓</span>
              <strong>Structured signals</strong> mapped to your catalog
            </td>
          </tr>
          <tr>
            <td className="dim">Unit of memory</td>
            <td className="col-g">
              <span className="icon">—</span>The call
            </td>
            <td className="col-s">
              <span className="icon">✓</span>The <strong>account</strong>
            </td>
          </tr>
          <tr>
            <td className="dim">Survives rep turnover</td>
            <td className="col-g">
              <span className="icon">—</span>Transcript survives. Context
              doesn&apos;t.
            </td>
            <td className="col-s">
              <span className="icon">✓</span>New rep inherits the{' '}
              <strong>full account state</strong> before their first call
            </td>
          </tr>
          <tr>
            <td className="dim">Citations</td>
            <td className="col-g">
              <span className="icon">—</span>Timestamps in transcript
            </td>
            <td className="col-s">
              <span className="icon">✓</span>Every extraction cited —{' '}
              <strong>transcript + timestamp + confidence</strong>
            </td>
          </tr>
          <tr>
            <td className="dim">When it&rsquo;s used</td>
            <td className="col-g">
              <span className="icon">—</span>During the call &mdash; managers
              spot-check coaching moments
            </td>
            <td className="col-s">
              <span className="icon">✓</span>
              <strong>After every call, and every handoff</strong> &mdash; AE,
              CSM, director, on demand
            </td>
          </tr>
          <tr>
            <td className="dim">Handoff artifact</td>
            <td className="col-g">
              <span className="icon">—</span>None &mdash; you still write the
              handoff doc by hand
            </td>
            <td className="col-s">
              <span className="icon">✓</span>
              <strong>Auto-generated, always current</strong> &mdash; the graph
              regenerates the doc
            </td>
          </tr>
          <tr>
            <td className="dim">Works alongside</td>
            <td className="col-g">
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
        Gong tells you <em>what happened.</em> Salency tells you{' '}
        <em>what to do next.</em>
      </p>
    </section>
  );
}
