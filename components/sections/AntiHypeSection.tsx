export function AntiHypeSection() {
  return (
    <section className="antihype">
      <div className="antihype-head">
        <span className="eb">What Salency isn&rsquo;t</span>
        <h2>
          Five things Salency <em>doesn&rsquo;t do.</em>
        </h2>
      </div>
      <ul className="antihype-list">
        <li>
          <span className="antihype-idx">01</span>
          <div className="antihype-body">
            <strong>Doesn&rsquo;t replace your CRM.</strong> Pipeline stages,
            forecast, quote-to-cash stay where they are. Pain graph,
            contradictions, handoff narrative live on Salency. Two layers,
            no overlap.
          </div>
        </li>
        <li>
          <span className="antihype-idx">02</span>
          <div className="antihype-body">
            <strong>Doesn&rsquo;t coach reps mid-call.</strong> In-call
            coaching is a different product category. Salency works between
            calls.
          </div>
        </li>
        <li>
          <span className="antihype-idx">03</span>
          <div className="antihype-body">
            <strong>Doesn&rsquo;t promise more deals closed.</strong>{' '}
            Captures what gets lost. The win is the next rep walks in
            briefed, not a quota lift we can&rsquo;t underwrite.
          </div>
        </li>
        <li>
          <span className="antihype-idx">04</span>
          <div className="antihype-body">
            <strong>Doesn&rsquo;t write back to your CRM today.</strong>{' '}
            Reps export structured fields by hand (CSV / markdown). Native
            sync is on the roadmap, not yet shipped.
          </div>
        </li>
        <li>
          <span className="antihype-idx">05</span>
          <div className="antihype-body">
            <strong>
              Doesn&rsquo;t recompute pain-product mapping inside your CRM.
            </strong>{' '}
            The graph lives on Salency by design. Flatten it into CRM rows
            and you kill the thing.
          </div>
        </li>
      </ul>
    </section>
  );
}
