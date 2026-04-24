export function FiveYearBetSection() {
  return (
    <section className="fiveyear">
      <div className="fiveyear-head">
        <span className="eb">Why now</span>
        <h2>
          The reps are the <em>first</em> users. The AI agents are the{' '}
          <em>second.</em>
        </h2>
      </div>

      <div className="fiveyear-beats">
        <div className="fiveyear-beat">
          <span className="beat-idx">01</span>
          <h3>Sales teams are consolidating</h3>
          <p>
            Surviving reps own more accounts with less tribal knowledge. The
            handoff problem gets worse, not better.
          </p>
        </div>
        <div className="fiveyear-beat">
          <span className="beat-idx">02</span>
          <h3>AI SDRs are drafting outreach</h3>
          <p>
            Autonomous agents inside the next 18 months. They all need
            structured account memory as input &mdash; not a raw transcript
            pile, not another CRM field.
          </p>
        </div>
        <div className="fiveyear-beat">
          <span className="beat-idx">03</span>
          <h3>The moat is the graph, not the model</h3>
          <p>
            Every LLM commoditizes extraction. What doesn&rsquo;t commoditize
            is the customer-built graph of pains, products, and contradictions.
            That compounds per customer, per call.
          </p>
        </div>
      </div>

      <p className="fiveyear-foot">
        Counterexample: 11x.ai raised $74M on autonomous AI SDRs and lost
        70&ndash;80% of customers. Autonomous bots without customer memory
        don&rsquo;t hold the relationship. That&rsquo;s the gap we fill.
      </p>
    </section>
  );
}
