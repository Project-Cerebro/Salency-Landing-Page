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
              <span className="lbl">Data primitive</span>
              <p className="tt">
                Structured account memory —{' '}
                <em>cited, scoped, and compounding</em> — is the input every
                future revenue tool will be measured against.
              </p>
            </div>
          </section>

          <section className="roadmap">
            <div className="roadmap-card">
              <span className="v">On the roadmap</span>
              <span className="t">
                A <em>Recall.ai meeting bot</em> that joins Zoom, Meet, and
                Teams calls directly — feeding the extraction pipeline without
                a transcript upload step.
              </span>
            </div>
          </section>

          <section className="team" id="team">
            <div className="sect-head">
              <span className="num">03.</span>
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
                  Founding AE at <em>Viggle</em> (a16z-backed), where he ran
                  pilot-to-paid motions with the exact B2B buyers Salency sells
                  to today. Before that, he led MUFG Hong Kong&apos;s first
                  Panda Bond and handled business development at Sequence and
                  Treasure. MBET, Waterloo.
                </p>
                <div className="fit">
                  <div className="lbl">Unfair advantage</div>
                  <p>
                    Has <em>lost deals to forgotten context personally</em>, in
                    rooms where the budget was real. The product spec comes
                    from that scar tissue — not from a market-map.
                  </p>
                </div>
              </div>
            </div>

            <div className="founder rev">
              <div className="photo p2">NI</div>
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
                <div className="fit">
                  <div className="lbl">Unfair advantage</div>
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
              <div className="photo p3">BO</div>
              <div className="body">
                <div className="name">Babajide Okusanya</div>
                <div className="role">Technical Lead</div>
                <p className="bio">
                  Built Salency&apos;s{' '}
                  <em>extraction and pain-to-product mapping engine</em>.
                  Previously scaled a B2B marketplace to meaningful ARR as an
                  applied-AI operator — not a research hire.
                </p>
                <div className="fit">
                  <div className="lbl">Unfair advantage</div>
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
              <div className="close">
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
