export function HandoffToolsSection() {
  return (
    <section className="handoff-compare">
      <div className="handoff-compare-head">
        <span className="eb">vs handoff tools</span>
        <h2>
          AskElephant hands off <em>one deal.</em> We remember{' '}
          <em>every account.</em>
        </h2>
      </div>

      <table className="handoff-table">
        <thead>
          <tr>
            <th>Dimension</th>
            <th className="col-g">
              <span>AskElephant / CRM notes</span>
              <span className="brand">Handoff tools</span>
            </th>
            <th className="col-s">
              <span>Salency</span>
              <span className="brand">Institutional memory</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="dim">Scope</td>
            <td className="col-g">
              <span className="icon">—</span>One-off handoff doc per deal
            </td>
            <td className="col-s">
              <span className="icon">✓</span>
              <strong>Every account, continuously</strong>
            </td>
          </tr>
          <tr>
            <td className="dim">Pain &rarr; product mapping</td>
            <td className="col-g">
              <span className="icon">—</span>Not modeled
            </td>
            <td className="col-s">
              <span className="icon">✓</span>
              <strong>Confidence-ranked, top-N per pain</strong>
            </td>
          </tr>
          <tr>
            <td className="dim">Contradictions across calls</td>
            <td className="col-g">
              <span className="icon">—</span>Overwritten silently
            </td>
            <td className="col-s">
              <span className="icon">✓</span>
              <strong>Flagged with both citations</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
