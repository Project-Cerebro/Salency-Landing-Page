// ComparativeStrip — Path D-Hybrid section 7. 3-card row with the
// Salency card highlighted. Currency-checked against company-context
// §9 (2026-04-29): Gong ships AI Briefer + Account Console + Smart
// Trackers; Salesforce ships Account Research & Meeting Prep Agent;
// HubSpot ships Breeze + Smart Deal Progression. No Attio card per
// Q13=d strategic decision.
//
// Voice rules: no em dashes, no banned phrases, no captivity / lock-in
// framings, no "harder to rip out" language.

export function ComparativeStrip() {
  return (
    <section className="comparative" aria-labelledby="comparative-h2">
      <div className="comparative-head">
        <span className="eb">vs. the stack you already have</span>
        <h2 id="comparative-h2" className="comparative-h2">
          Salency is <em>not a replacement.</em>
        </h2>
        <p className="comparative-sub">
          It{'\u2019'}s the layer that makes the rest of your stack remember.
        </p>
      </div>

      <div className="comparative-row">
        <article className="comparative-card">
          <header className="comparative-card-head">
            <h3 className="comparative-card-eb">Notetaker</h3>
            <span className="comparative-card-name">Gong, Fireflies, Otter</span>
          </header>
          <p className="comparative-card-copy">
            Records what was said. Surfaces deal warnings inside calls. The
            raw input layer Salency reads from.
          </p>
        </article>

        <article className="comparative-card">
          <header className="comparative-card-head">
            <h3 className="comparative-card-eb">CRM</h3>
            <span className="comparative-card-name">Salesforce, HubSpot</span>
          </header>
          <p className="comparative-card-copy">
            Tracks pipeline stages and deal amounts. The system of record for
            the deal motion. Salency holds the qualitative layer those rows
            can{'\u2019'}t.
          </p>
        </article>

        <article className="comparative-card comparative-card--salency">
          <header className="comparative-card-head">
            <h3 className="comparative-card-eb">Salency</h3>
            <span className="comparative-card-name">Memory layer</span>
          </header>
          <p className="comparative-card-copy">
            Pains, contradictions, pain {'\u2192'} product matches, account
            briefs. The graph CRM rows can{'\u2019'}t hold.
          </p>
        </article>
      </div>
    </section>
  );
}
