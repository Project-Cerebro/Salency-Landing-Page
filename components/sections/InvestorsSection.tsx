import Link from 'next/link';
import { FOUNDERS } from '@/lib/founders';

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
            <div className="eb">Platform &amp; moat</div>
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
              on that account. Every surface we ship — starting with handoff
              docs today — inherits from the same core graph. One primitive.
              Everything else is surface.
            </p>
            <div className="primitive">
              <span className="label">Data primitive</span>
              <p className="title">
                Structured account memory —{' '}
                <em>cited, scoped, and compounding</em> — is the input every
                future revenue tool will be measured against.
              </p>
            </div>
            <p className="platform-moat-bridge">
              The wedge is the <em>shape of the data.</em> Contradiction pairs,
              pain evolution over time, confidence-ranked pain → product
              matches, cross-account pattern graphs. None of these fit a CRM
              row. Flatten any of them into a field and you kill the thing
              that makes Salency uncopyable. That&rsquo;s why we sit{' '}
              <em>on top</em> of your stack, not inside it. Reps live in CRM
              for pipeline stages. Reps live in Salency for the qualitative
              layer — what the customer actually said, what contradicts what,
              which pains map to which products.
            </p>
            <div className="primitive">
              <span className="label">The uncopyable pair</span>
              <p className="title">
                Pain-product mapping plus contradiction detection.{' '}
                <em>
                  Either alone is defensible for 6 to 9 months. Together — and
                  once wired into product-management workflows — switching cost
                  is measured in quarters.
                </em>
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
                  B2B SaaS companies with 10–500 reps and multi-feature product
                  catalogs. Every one has a memory problem.
                </p>
              </div>
              <div className="cell">
                <span className="label">Capture target</span>
                <div className="figure">
                  <em>0.5–1%</em> in 3 years
                </div>
                <p className="desc">
                  250–1,000 teams. Revenue scales with category-standard
                  enterprise ACVs.
                </p>
              </div>
              <div className="cell">
                <span className="label">Validation</span>
                <div className="figure">
                  Clay: <em>$1M → $100M</em>
                </div>
                <p className="desc">
                  AI sales tooling category proves the scale. Clay hit $100M
                  ARR in 2 years (CapitalG-led Series C, $3.1B valuation).
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

          <section className="team" id="team">
            <div className="sect-head">
              <span className="section-num">03.</span>
              <h2>
                Why <em>this team,</em> on this problem, now.
              </h2>
            </div>

            <div className="team-compact">
              {FOUNDERS.map((founder) => (
                <div key={founder.id} className="team-compact-row">
                  <div className={`photo ${founder.photoVariant}`.trim()}>
                    {founder.initials}
                  </div>
                  <div className="team-compact-body">
                    <span className="name">{founder.name}</span>
                    <span className="role">{founder.role}</span>
                    <p className="line">{founder.shortBio}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/our-story" className="team-compact-link">
              Full bios + founding story on /our-story →
            </Link>
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
                  <span className="label">Capture, without the upload step</span>
                </div>
                <ul className="horizon-body">
                  <li>
                    <em>Recall.ai meeting bot</em> — joins Zoom, Meet, Teams
                    directly. Extraction runs without a transcript upload step.
                  </li>
                </ul>
              </div>
              <div className="horizon">
                <div className="horizon-head">
                  <span className="pill">Following</span>
                  <span className="label">Enterprise readiness</span>
                </div>
                <ul className="horizon-body">
                  <li>
                    Native integrations with the tools revenue teams already
                    live in — scoped once each one ships a stable contract,
                    not before.
                  </li>
                  <li>
                    Security posture for regulated-vertical buyers (SOC 2 Type
                    II audit kickoff post-bridge).
                  </li>
                </ul>
              </div>
              <div className="horizon">
                <div className="horizon-head">
                  <span className="pill">Further out</span>
                  <span className="label">Workflow depth</span>
                </div>
                <ul className="horizon-body">
                  <li>
                    Embedding pain-product mapping into product-management
                    tools (Productboard, Aha, Jira) — where switching cost
                    compounds into quarters.
                  </li>
                  <li>
                    Vertical expansion. First vertical: B2B SaaS. Next:
                    FinTech.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="thesis" id="thesis">
            <div className="thesis-card">
              <div className="eb">Why now</div>
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
              <p>
                Every LLM commoditizes extraction. What doesn&rsquo;t
                commoditize is the <em>customer-built graph</em> of pains,
                products, and contradictions — and that graph compounds per
                customer, per call. The moat is the data shape, not the model.
              </p>
              <div className="thesis-close">
                Salency owns that layer. The longer a team runs it,{' '}
                <em>the more context compounds</em> — and the deeper the
                graph gets.
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
