export function InvestorsSection() {
  return (
    <>
      <div id="investors" className="investors-register">
        <div className="inv-intro">
          <div className="inv-intro-inner">
            <span className="eb">For investors</span>
            <h1>
              Institutional memory is the <em>new bottleneck</em> in B2B sales.
              We own the layer.
            </h1>
            <p>
              Salency is a system of record for what your accounts actually
              told you — a structured, cited, queryable memory layer that every
              future revenue tool will inherit from. Below: what we&apos;re
              building, who&apos;s building it, and why this moat compounds.
            </p>
            <div className="inv-intro-meta">
              <span>Pre-seed · Q2 2026</span>
              <span className="sep">·</span>
              <span>Early access opening Q2 2026</span>
              <span className="sep">·</span>
              <span>Private deck available on request</span>
            </div>
          </div>
        </div>

        <div className="reg-inv">
          <section className="platform" id="platform">
            <div className="eb">Platform</div>
            <h2>
              The <em>structured memory layer</em> for B2B sales accounts.
            </h2>
            <p>
              Salency is a system of record for what your accounts actually
              told you. Every call becomes <em>durable, queryable context</em>{' '}
              mapped to your product catalog, so the next rep, the next
              quarter, and the next pipeline review all inherit what was said —
              not what someone remembered to type.
            </p>
            <p>
              The primitive is structured account memory. The loop compounds:
              every call makes every future call smarter, for every future rep
              on that account. Every feature we ship — handoff docs, objection
              libraries, renewal briefs, agent-drafted outreach — inherits from
              the same core graph. One primitive. Everything else is surface.
            </p>
            <div className="primitive">
              <span className="label">Data primitive</span>
              <p className="title">
                Structured account memory —{' '}
                <em>cited, scoped, and compounding</em> — is the input every
                future revenue tool will be measured against.
              </p>
            </div>
          </section>

          <section className="inv-tam" id="tam">
            <div className="eb">Market</div>
            <h2>
              A <em>$100M ARR</em> opportunity, on a graph we own.
            </h2>
            <div className="tam-grid">
              <div className="cell">
                <span className="label">Bottom-up</span>
                <div className="figure">~50K</div>
                <p className="desc">
                  Enterprise B2B sales teams running AI notetakers today. Every
                  one has a memory problem.
                </p>
              </div>
              <div className="cell">
                <span className="label">Capture target</span>
                <div className="figure">
                  <em>0.5–1%</em> in 3 years
                </div>
                <p className="desc">
                  250–1,000 teams × $50–100K ACV ={' '}
                  <strong>$12M–$100M ARR</strong>.
                </p>
              </div>
              <div className="cell">
                <span className="label">Validation</span>
                <div className="figure">
                  Clay: <em>$1M → $100M</em>
                </div>
                <p className="desc">
                  AI sales tooling category proves the scale. Clay hit $100M
                  ARR in 2 years (a16z-led Series C, $3.1B valuation).
                </p>
              </div>
            </div>
            <div className="tam-counter">
              <span className="label">Counterexample</span>
              <p>
                11x.ai raised <em>$74M</em> on autonomous AI SDRs and lost
                70–80% of customers. Autonomous bots without structured
                customer memory don&rsquo;t hold the relationship. That&rsquo;s
                the gap we fill.
              </p>
            </div>
          </section>

          <section className="moat" id="moat">
            <div className="eb">Moat</div>
            <h2>
              Why this doesn&apos;t live in <em>Salesforce.</em>
            </h2>
            <p>
              The wedge is the <em>shape of the data</em>. Contradiction pairs,
              pain evolution over time, confidence-ranked pain → product
              matches, cross-account pattern graphs. None of these fit a CRM
              row. Flatten any of them into a field and you kill the thing
              that makes Salency uncopyable.
            </p>
            <p>
              So Salency sits <em>on top</em> of your stack, not inside it.
              Linear syncs completion status to GitHub, keeps the ticket
              experience in Linear. Superhuman reads your Gmail, keeps the
              triage experience in Superhuman. Reps live in CRM for pipeline
              stages. Reps live in Salency for the qualitative layer — what
              the customer actually said, what contradicts what, which pains
              map to which products.
            </p>
            <div className="primitive">
              <span className="label">The uncopyable pair</span>
              <p className="title">
                Pain-product mapping plus contradiction detection, embedded in
                product-management workflows.{' '}
                <em>
                  Either alone is defensible for 6 to 9 months. Together, with
                  workflow depth, switching cost is measured in quarters.
                </em>
              </p>
            </div>
          </section>

          <section className="inv-compete" id="competitive">
            <div className="eb">Competitive landscape</div>
            <h2>
              Closest threats, and <em>where the shape doesn&rsquo;t fit.</em>
            </h2>
            <p className="compete-lede">
              No single competitor ships pain-product mapping plus
              contradiction detection plus handoff brief as an integrated
              stack. The gap is the shape of the join, not the individual
              capabilities.
            </p>
            <div className="compete-table">
              <div className="compete-row compete-row--head">
                <span className="c-who">Who</span>
                <span className="c-threat">Threat</span>
                <span className="c-why">Why they&rsquo;re not there yet</span>
              </div>
              <div className="compete-row">
                <span className="c-who">Gong</span>
                <span className="c-threat">
                  <em>75%</em>
                </span>
                <span className="c-why">
                  Could ship &ldquo;Gong Reactivate&rdquo; as a $10–20/seat
                  add-on. Their focus is forecasting and coaching. Pain-product
                  mapping is not their customer motion.
                </span>
              </div>
              <div className="compete-row">
                <span className="c-who">Clari + Salesloft</span>
                <span className="c-threat">50%</span>
                <span className="c-why">
                  $450M combined ARR (merged Dec 2025). Call intelligence plus
                  forecasting. Pain-timing is their natural expansion, but
                  their account is stage and number, not qualitative shape.
                </span>
              </div>
              <div className="compete-row">
                <span className="c-who">HubSpot Breeze</span>
                <span className="c-threat">50%</span>
                <span className="c-why">
                  200K customers, freemium. Could bundle pain-product mapping
                  into Sales Hub — but bundling into a CRM flattens the graph,
                  which is the thing that defends the wedge.
                </span>
              </div>
              <div className="compete-row">
                <span className="c-who">Salesforce Einstein</span>
                <span className="c-threat">45%</span>
                <span className="c-why">
                  150K customers. Could bundle for free. Slow to move, but
                  devastating if they do. Same flattening problem as HubSpot.
                </span>
              </div>
              <div className="compete-row">
                <span className="c-who">AskElephant</span>
                <span className="c-threat">35%</span>
                <span className="c-why">
                  Closest on handoff docs. $99/mo anchor, 500+ teams, strong
                  G2. Doesn&rsquo;t hold state between handoffs, and
                  doesn&rsquo;t map pains to a product catalog.
                </span>
              </div>
            </div>
          </section>

          <section className="roadmap" id="roadmap">
            <div className="eb">Roadmap</div>
            <h2>
              What ships <em>next.</em>
            </h2>
            <div className="horizon-list">
              <div className="horizon">
                <div className="horizon-head">
                  <span className="pill">V1.5 · Q2–Q3 2026</span>
                  <span className="label">Capture + push</span>
                </div>
                <ul className="horizon-body">
                  <li>
                    <em>Recall.ai meeting bot</em> — joins Zoom, Meet, Teams
                    directly. Extraction without a transcript upload step.
                  </li>
                  <li>
                    CRM push to Monday and HubSpot — flat summary fields write
                    back so reps don&rsquo;t double-enter.
                  </li>
                </ul>
              </div>
              <div className="horizon">
                <div className="horizon-head">
                  <span className="pill">V2 · Q4 2026</span>
                  <span className="label">Enterprise readiness</span>
                </div>
                <ul className="horizon-body">
                  <li>
                    Salesforce and HubSpot native sync — the two buyers that
                    sign the enterprise contract.
                  </li>
                  <li>
                    Gong API transcript pull — turns Salency into the layer
                    sitting on top of the most-entrenched input pipe.
                  </li>
                  <li>
                    10 paying customers, $50–100K ACV range.
                  </li>
                </ul>
              </div>
              <div className="horizon">
                <div className="horizon-head">
                  <span className="pill">V2.5 · 2027</span>
                  <span className="label">Scale decision</span>
                </div>
                <ul className="horizon-body">
                  <li>
                    $10–30M ARR target. Workflow integration depth (Productboard
                    / Aha / Jira) locks switching cost to quarters, not weeks.
                  </li>
                  <li>
                    Decision point: raise at the category-leader mark, or walk
                    a profitability path into the expanded surface.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="team" id="team">
            <div className="sect-head">
              <span className="section-num">03.</span>
              <h2>
                Why <em>this team,</em> on this problem, now.
              </h2>
            </div>

            <div className="founder">
              <div className="photo">HT</div>
              <div className="body">
                <div className="name">Howard Tam</div>
                <div className="role">Co-founder &amp; CEO</div>
                <p className="bio">
                  <em>Five founding-AE / BD seats in four years</em> — Dora,
                  Sequence, Treasure, Nijta, Viggle (a16z-backed). Ran the
                  HubSpot→Monday CRM migration at Sequence; came out knowing
                  flat fields can&rsquo;t hold what the customer said. Before
                  that he led MUFG Hong Kong&apos;s first Panda Bond. MBET,
                  Waterloo.
                </p>
                <div className="founder-fit">
                  <div className="label">Unfair advantage</div>
                  <p>
                    Watched post-sale trust break when handovers didn&rsquo;t
                    happen — a rep two desks away, a customer repeating
                    themselves by minute 15.{' '}
                    <em>
                      The product spec comes from that, not from a market map.
                    </em>
                  </p>
                </div>
              </div>
            </div>

            <div className="founder founder--reversed">
              <div className="photo photo--violet">NI</div>
              <div className="body">
                <div className="name">Nikki Ip</div>
                <div className="role">Co-founder &amp; COO</div>
                <p className="bio">
                  Runs revenue analytics and operational strategy at{' '}
                  <em>Adaptavist Group</em>, where she owns the pipeline
                  instrumentation Salency&apos;s buyers are trying to build
                  internally. Prior background in institutional client
                  management and AML/KYC compliance in banking.
                </p>
                <div className="founder-fit">
                  <div className="label">Unfair advantage</div>
                  <p>
                    Knows what sales ops <em>actually trusts</em>, how handoffs
                    break at 50 reps, and which metrics survive a board deck.
                    She writes the go-to-market motion from the buyer&apos;s
                    side of the desk.
                  </p>
                </div>
              </div>
            </div>

            <div className="founder">
              <div className="photo photo--teal">BO</div>
              <div className="body">
                <div className="name">Babajide Okusanya</div>
                <div className="role">Founding Engineer</div>
                <p className="bio">
                  Scaled <em>MakersValley</em> from 0 to $2M ARR (6.5y, NYC)
                  as an applied-AI operator — not a research hire. Has shipped{' '}
                  <em>provenance-tracked AI context systems</em> — the exact
                  technical class Salency runs on. Trained 2,000+ engineers on
                  AI-assisted workflows.
                </p>
                <div className="founder-fit">
                  <div className="label">Unfair advantage</div>
                  <p>
                    The core technical risk in Salency is not &ldquo;can an LLM
                    summarise a call.&rdquo; It is{' '}
                    <em>
                      &ldquo;can extractions stay cited, scoped to a specific
                      catalog, and trustworthy at volume.&rdquo;
                    </em>{' '}
                    He has shipped that class of system before.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="thesis" id="thesis">
            <div className="thesis-card">
              <div className="eb">Future-fit thesis</div>
              <h2>
                The <em>bottleneck</em> is about to shift.
              </h2>
              <p>
                Sales teams are consolidating tools and cutting rep headcount
                while deal complexity keeps rising. The surviving reps own{' '}
                <em>more accounts with less tribal knowledge</em>, and AI
                agents will start drafting their outreach inside the next
                eighteen months.
              </p>
              <p>
                Both of those depend on structured account memory as the input
                — not a raw transcript pile, not another CRM field. The agent
                doesn&apos;t know what the buyer has already told you. The rep
                inheriting the account doesn&apos;t either. The asset that
                makes either one useful is the same asset.
              </p>
              <div className="thesis-close">
                Salency owns that layer. The longer a team runs it,{' '}
                <em>the more context compounds</em> — and the harder it is to
                rip out.
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
