import Link from 'next/link';
import { FOUNDERS } from '@/lib/founders';
import { FOUNDERS_EMAIL } from '@/lib/links';

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
              Salency is the structured, cited, queryable memory layer for
              what your accounts actually told you — the input every future
              revenue tool will inherit from. Every call compounds the graph.
            </p>
            <div className="inv-intro-meta">
              <span>Pre-seed</span>
              <span className="sep">·</span>
              <span>Pilot cohort · Spring 2026</span>
              <span className="sep">·</span>
              <a href={`mailto:${FOUNDERS_EMAIL}`}>
                Private deck available on request
              </a>
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
              Vs CRM, the wedge is the <em>shape of the data.</em> Contradiction pairs,
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
            <figure className="platform-evidence">
              <p className="stat">
                <em>40–50%</em> of customers get visibly annoyed when asked to
                repeat themselves; <em>20–30%</em> explicitly express
                frustration.
              </p>
              <figcaption className="src">
                CS director, crypto/fintech Series B · January 2026
              </figcaption>
            </figure>
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
              Pain extraction, pre-call briefing, and handoff briefs are
              now table-stakes &mdash; Gong, HubSpot Frame AI, and AskElephant
              ship versions of all three. No single competitor ships
              pain-product mapping plus contradiction detection as an
              integrated stack. The gap is the shape of the join, not the
              individual capabilities.
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
                  <em>high</em>
                </span>
                <span className="c-why">
                  <strong>12&ndash;18 month window.</strong> Already ships
                  pain Smart Trackers (pre-2024), AI Briefer for handoffs (May
                  2025), Account Console (Feb 2026). Doesn&rsquo;t ship pain
                  &rarr; product matching against a customer-maintained
                  catalog (no Vault primitive) or cross-call contradiction
                  detection. Historical base rate ~38% per 12-month window
                  for competitor-parity ships.
                </span>
              </div>
              <div className="compete-row">
                <span className="c-who">HubSpot Breeze</span>
                <span className="c-threat">
                  <em>mod-high</em>
                </span>
                <span className="c-why">
                  <strong>12 month window.</strong> Frame AI acquisition (Dec
                  2024) and Smart Deal Progression (Apr 2026) put them ~12
                  months from packaging the matching engine. The architecture-
                  flat moat argument is retracted post-Frame AI. 200K
                  customers, freemium.
                </span>
              </div>
              <div className="compete-row">
                <span className="c-who">Salesforce Einstein</span>
                <span className="c-threat">
                  <em>wildcard</em>
                </span>
                <span className="c-why">
                  <strong>18&ndash;24 month window.</strong> Account Research
                  Agent (Dreamforce 2025), Data 360 customer graph, Agentforce
                  360. Recipe published in Architect docs but not packaged as
                  a SKU. 150K customers. One Spring 2027 release-note bullet
                  erases the wedge for that base.
                </span>
              </div>
              <div className="compete-row">
                <span className="c-who">AskElephant</span>
                <span className="c-threat">
                  <em>moderate</em>
                </span>
                <span className="c-why">
                  <strong>6&ndash;12 month window.</strong> Pre-call briefs
                  already ship per third-party reviewers. $6M seed (May 2025)
                  with a scale-AI-agents mandate. $99/mo anchor. Doesn&rsquo;t
                  ingest a product catalog or do pain-product matching.
                </span>
              </div>
              <div className="compete-row">
                <span className="c-who">Clari + Salesloft</span>
                <span className="c-threat">
                  <em>low</em>
                </span>
                <span className="c-why">
                  <strong>12&ndash;18 month window.</strong> Merged Dec 2025,
                  $450M combined ARR. Integration paralysis: 2 CI stacks plus
                  2 engagement stacks to rationalize. CEO Cox&rsquo;s public
                  language is 100% forecast-execution unification. FAQ says
                  full unification &ldquo;coming years.&rdquo;
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

            <div className="team-strip">
              {FOUNDERS.map((founder) => (
                <div key={founder.id} className="strip-cell">
                  <div className={`photo ${founder.photoVariant}`.trim()}>
                    {founder.initials}
                  </div>
                  <span className="name">{founder.name}</span>
                  <span className="role">{founder.role}</span>
                </div>
              ))}
            </div>

            <Link href="/our-story" className="team-compact-link">
              Read our founding story →
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
                  <span className="pill">Following · 2026 H2</span>
                  <span className="label">Workflow depth</span>
                </div>
                <ul className="horizon-body">
                  <li>
                    Embedding pain-product mapping into product-management
                    tools (Productboard, Aha, Jira) — where switching cost
                    compounds into quarters. Pulled forward from 2027 after
                    competitive-window analysis tightened the high-threat
                    tier from 18 months to 12.
                  </li>
                  <li>
                    Native integrations with the CRMs revenue teams already
                    live in — scoped once each one ships a stable contract,
                    not before.
                  </li>
                </ul>
              </div>
              <div className="horizon">
                <div className="horizon-head">
                  <span className="pill">Further out</span>
                  <span className="label">Enterprise readiness + vertical expansion</span>
                </div>
                <ul className="horizon-body">
                  <li>
                    Security posture for regulated-vertical buyers (SOC 2 Type
                    II audit kickoff post-bridge).
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
                account, with every call. The moat is the{' '}
                <em>specific join</em> — pain → product → contradiction across
                time — wired into the PM tools where roadmaps already live.
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
