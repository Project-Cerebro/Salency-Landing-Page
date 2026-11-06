// ComparativeStrip: homepage "vs. the stack you already have" section.
//
// Two-column table, one row per tool category: what that tool keeps, and
// what Salency adds on top. Rebuilt from a 3-card row (2026-11-05) so the
// section reads as a comparison instead of a feature grid.
//
// Honesty boundary: Salency has no notetaker or CRM integration today.
// Reps upload transcripts by hand, so the copy says "works alongside",
// never "reads from" or "syncs with". The right column says what Salency
// adds, not what the other tool lacks: Gong and HubSpot ship cross-call
// features of their own, so we don't claim they lose anything.
//
// Voice rules: no em dashes, no banned phrases, no captivity / lock-in
// framings, no "harder to rip out" language.

const ROWS = [
  {
    category: 'Notetaker',
    tools: 'Gong, Fireflies, Otter',
    keeps:
      'A record of each call: who said what, a summary, and the warnings raised on that call.',
    adds:
      'What carries across calls: each pain in their words, what you’ve committed to, and where call 03 contradicts call 01.',
  },
  {
    category: 'CRM',
    tools: 'Salesforce, HubSpot',
    keeps:
      'Stage, amount, close date and owner. The system of record for the deal.',
    adds:
      'The story behind those fields: who needs what and why, and which of your products fits, each with a quote to back it.',
  },
];

export function ComparativeStrip() {
  return (
    <section className="comparative" aria-labelledby="comparative-h2">
      <div className="comparative-head">
        <span className="eb">vs. the stack you already have</span>
        <h2 id="comparative-h2" className="comparative-h2">
          Salency is <em>not a replacement.</em>
        </h2>
        <p className="comparative-sub">
          It works alongside the tools you have. Upload the transcripts your
          notetaker already makes.
        </p>
      </div>

      <table className="comparative-table">
        <thead>
          <tr>
            <th scope="col">
              <span className="sr-only">Tool</span>
            </th>
            <th scope="col">What it keeps</th>
            <th scope="col" className="comparative-salency">
              What Salency adds
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.category}>
              <th scope="row">
                <span className="comparative-cat">{row.category}</span>
                <span className="comparative-tools">{row.tools}</span>
              </th>
              <td data-label="What it keeps">{row.keeps}</td>
              <td data-label="What Salency adds" className="comparative-salency">
                {row.adds}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
