import { MarketingHeader } from '@/components/MarketingHeader';

export default function Home() {
  return (
    <div className="page">
      <MarketingHeader />

      <section className="hero">
        <h1 className="h1">
          Institutional memory for <em>revenue</em> teams.{' '}
          <span className="soft">Not another call recorder.</span>
        </h1>

        <p className="sub">
          AI notetakers record what was said. Salency{' '}
          <em style={{ fontStyle: 'normal', color: 'var(--copper)' }}>
            remembers what it meant
          </em>{' '}
          — structuring every conversation into pains, objections, competitors and
          commitments, then keeping that context alive as reps rotate and accounts
          hand off.
        </p>

        <div className="cta-row">
          <button className="btn btn-primary">Request a pilot →</button>
          <button className="btn btn-ghost">Watch 90-second tour</button>
        </div>

        <div className="hero-meta">
          <span>
            <span className="dot">●</span> SOC 2 Type II
          </span>
          <span>
            <span className="dot">●</span> Deploys in 48 hrs
          </span>
          <span>
            <span className="dot">●</span> Works alongside your notetaker
          </span>
        </div>
      </section>

      <div className="hero-hairline" aria-hidden="true"></div>

      <section className="hub-wrap">
        <div className="hub">
          <div className="hub-head">
            <span className="eb">
              Inputs <span className="arr">→</span> transcripts + catalog
            </span>
            <span className="eb r">
              <span className="arr">←</span> consumed by roles
            </span>
          </div>

          <svg
            className="hub-lines"
            viewBox="0 0 1000 560"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(254,133,49,0.22)" />
                <stop offset="60%" stopColor="rgba(254,133,49,0.04)" />
                <stop offset="100%" stopColor="rgba(254,133,49,0)" />
              </radialGradient>
            </defs>
            <ellipse cx="500" cy="280" rx="340" ry="200" fill="url(#hubGlow)" />
            <ellipse
              cx="500"
              cy="280"
              rx="360"
              ry="210"
              fill="none"
              stroke="rgba(254,133,49,0.22)"
              strokeDasharray="2 6"
            />
            <ellipse
              cx="500"
              cy="280"
              rx="280"
              ry="160"
              fill="none"
              stroke="rgba(254,133,49,0.14)"
              strokeDasharray="2 8"
            />
            <path
              d="M 210 140 Q 360 160, 500 280"
              fill="none"
              stroke="rgba(254,133,49,0.55)"
              strokeWidth="1.1"
            />
            <path
              d="M 210 230 Q 360 250, 500 280"
              fill="none"
              stroke="rgba(254,133,49,0.55)"
              strokeWidth="1.1"
            />
            <path
              d="M 210 330 Q 360 320, 500 280"
              fill="none"
              stroke="rgba(254,133,49,0.55)"
              strokeWidth="1.1"
            />
            <path
              d="M 210 420 Q 360 390, 500 280"
              fill="none"
              stroke="rgba(254,133,49,0.55)"
              strokeWidth="1.1"
            />
            <path
              d="M 500 280 Q 640 180, 790 150"
              fill="none"
              stroke="rgba(254,133,49,0.55)"
              strokeWidth="1.1"
            />
            <path
              d="M 500 280 Q 640 280, 790 280"
              fill="none"
              stroke="rgba(254,133,49,0.55)"
              strokeWidth="1.1"
            />
            <path
              d="M 500 280 Q 640 380, 790 410"
              fill="none"
              stroke="rgba(254,133,49,0.55)"
              strokeWidth="1.1"
            />
          </svg>

          <div className="hub-inputs">
            <div className="hub-pill" style={{ top: '22%' }}>
              <span className="ic">🎤</span>Call recording
            </div>
            <div className="hub-pill" style={{ top: '39%' }}>
              <span className="ic">📄</span>.vtt transcript
            </div>
            <div className="hub-pill" style={{ top: '59%' }}>
              <span className="ic">📦</span>Product catalog
            </div>
            <div className="hub-pill" style={{ top: '76%' }}>
              <span className="ic">💬</span>Zoom transcript
            </div>
          </div>

          <div className="hub-core">
            <div className="hub-core-eb">
              <span className="dot">●</span> Salency
            </div>
            <div className="hub-core-ttl">
              Extract · <em>Map</em> · Cite
            </div>
            <div className="hub-core-sub">one queryable memory layer</div>
          </div>

          <div className="hub-roles">
            <div className="hub-role" style={{ top: '18%' }}>
              <div className="rk">New AE</div>
              <div className="rt">Inherits context</div>
              <div className="rs">Full account state before the next call</div>
            </div>
            <div className="hub-role" style={{ top: '44%' }}>
              <div className="rk">CSM</div>
              <div className="rt">Picks up handoff</div>
              <div className="rs">Pain-to-product mappings already cited</div>
            </div>
            <div className="hub-role" style={{ top: '70%' }}>
              <div className="rk">Director</div>
              <div className="rt">Sees the pattern</div>
              <div className="rs">Pains and objections across every deal</div>
            </div>
          </div>

          <div className="hub-foot">
            <span>One pipeline · every role · zero handoff loss</span>
            <span>
              <em>4 of 10</em> pilot spots open · Q2 2026
            </span>
          </div>
        </div>
      </section>

      <section className="stats">
        <div>
          <div className="n">
            <em>4</em>
            <span className="u">hrs</span>
          </div>
          <div className="lbl">Per rep, per week — back from status-update busywork</div>
          <div className="src">Pilot cohort · n=42</div>
        </div>
        <div>
          <div className="n">
            <em>68</em>
            <span className="u">%</span>
          </div>
          <div className="lbl">Faster AE ramp-to-quota for reps inheriting Salency accounts</div>
          <div className="src">90-day window</div>
        </div>
        <div>
          <div className="n">
            <em>3</em>
            <span className="u">×</span>
          </div>
          <div className="lbl">Lower post-handoff churn versus unstructured transition</div>
          <div className="src">YoY, matched cohort</div>
        </div>
        <div>
          <div className="n">
            <em>0</em>
          </div>
          <div className="lbl">New tabs, new dashboards, new logins for your reps</div>
          <div className="src">Lives inside your notetaker + CRM</div>
        </div>
      </section>

      <section className="logo-bar">
        <div className="label">In pilot with revenue teams at</div>
        <div className="logos">
          <span className="logo-item">Northwind</span>
          <span className="logo-item sans">PATINA HEALTH</span>
          <span className="logo-item">Meridian &amp; Co.</span>
          <span className="logo-item mono">Orbital/Labs</span>
          <span className="logo-item">Latchkey</span>
          <span className="logo-item sans">ARGENT</span>
        </div>
      </section>

      <section className="how" id="how-it-works">
        <div className="how-head">
          <div>
            <div className="eb">How it works</div>
            <h2>
              Three steps. <em>Every call,</em> every account.
            </h2>
          </div>
          <p className="lede">
            Drop in any transcript — <em>AI notetaker</em>, Zoom, Meet, or a raw
            .vtt. Salency runs every call through the same three-step pipeline,
            and the output is{' '}
            <em>structured, cited, and queryable</em> before your next stand-up.
          </p>
        </div>
        <div className="how-steps">
          <div className="how-step">
            <div className="idx">Step 01</div>
            <h3 className="verb">
              <em>Extract</em>
            </h3>
            <p className="desc">
              Every call is parsed into structured signals: pains, objections,
              competitors, commitments, timelines, next steps. Not summarised —
              enumerated. Each one keeps its verbatim quote and timestamp.
            </p>
            <div className="ex">
              <div className="el">Example output</div>
              <div className="eq">
                &ldquo;We need to cut AE ramp from 9 months to 4 by Q3.&rdquo;{' '}
                <strong>→ Commitment</strong> · Priya Shah · Disco 31:08
              </div>
            </div>
          </div>
          <div className="how-step">
            <div className="idx">Step 02</div>
            <h3 className="verb">
              <em>Map</em>
            </h3>
            <p className="desc">
              Each pain is mapped to a line item in your product catalog. Each
              stakeholder is linked to their role, their account, and every prior
              quote. The graph grows with every call.
            </p>
            <div className="ex">
              <div className="el">Example mapping</div>
              <div className="eq">
                Pain:{' '}
                <em style={{ fontStyle: 'italic' }}>
                  &ldquo;handoff loses context&rdquo;
                </em>{' '}
                <strong>→ Memory Graph + Stakeholder View</strong>
              </div>
            </div>
          </div>
          <div className="how-step">
            <div className="idx">Step 03</div>
            <h3 className="verb">
              <em>Cite</em>
            </h3>
            <p className="desc">
              Every field carries the source — transcript, timestamp, speaker,
              confidence score. The next rep, the next quarter, the next pipeline
              review can all audit the trail without replaying the call.
            </p>
            <div className="ex">
              <div className="el">Every extraction</div>
              <div className="eq">
                <strong>Cited</strong> to a transcript + timestamp, with a
                confidence score you can filter on.
              </div>
            </div>
          </div>
        </div>
        <div className="how-foot">
          <span>
            Works with any transcript.<span className="sep">·</span>
            <em>Citations + confidence scores</em> on every extraction.
          </span>
          <span>Deploys in 48 hours · alongside your AI notetaker</span>
        </div>
      </section>

      <section className="notdo">
        <div className="notdo-card">
          <div className="hdr">
            <span className="eb">Anti-hype</span>What Salency is <em>not.</em>
          </div>
          <div className="notdo-list">
            <div className="notdo-item">
              <span className="x">×</span>
              <div>
                <div className="t">Not a CRM replacement</div>
                <div className="s">
                  Salesforce, HubSpot, and Attio stay where they are. Salency
                  writes to them, not over them.
                </div>
              </div>
            </div>
            <div className="notdo-item">
              <span className="x">×</span>
              <div>
                <div className="t">Not an in-call coach</div>
                <div className="s">
                  We don&apos;t whisper battle-cards mid-call. The value shows up
                  between calls, not during them.
                </div>
              </div>
            </div>
            <div className="notdo-item">
              <span className="x">×</span>
              <div>
                <div className="t">Not a magic close button</div>
                <div className="s">
                  Salency won&apos;t close deals for your reps. It removes the
                  context tax that was costing them the deals they should have
                  won.
                </div>
              </div>
            </div>
            <div className="notdo-item">
              <span className="x">×</span>
              <div>
                <div className="t">Not another call recorder</div>
                <div className="s">
                  AI notetakers record. We read what they recorded, extract what
                  it meant, and keep it alive after the rep leaves.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="prob">
        <div className="prob-head">
          <div>
            <div className="eb">The problem</div>
            <h2>
              Knowledge walks out <em>the door</em>{' '}
              <span className="soft">every quarter.</span>
            </h2>
          </div>
          <p className="lede">
            Your reps sit through four discovery calls a week. Your AI notetaker
            captures the audio. Your CRM captures the stage change.{' '}
            <em>Nothing captures what was actually learned</em> — the pains, the
            politics, the promises. So when a rep rotates, the account restarts
            from zero.
          </p>
        </div>

        <div className="prob-row">
          <div className="prob-card">
            <div className="idx">i.</div>
            <h3 className="ttl">
              Calls are <em>recorded.</em> Context isn&apos;t{' '}
              <em>captured.</em>
            </h3>
            <p className="desc">
              Conversation intelligence gives you 90 minutes of searchable
              transcript. Nobody reads 90 minutes of transcript. The real insight
              — the unprompted pain at minute 42 — stays locked in the audio.
            </p>
            <div className="cost">
              <span className="num">0%</span>
              <span className="lbl">
                of call transcripts are read past the first listen
              </span>
            </div>
          </div>

          <div className="prob-card">
            <div className="idx">ii.</div>
            <h3 className="ttl">
              Every handoff restarts from <em>zero.</em>
            </h3>
            <p className="desc">
              A new AE picks up the account. A CS director inherits at renewal.
              Neither gets the pain history, the stakeholder map, or the promises
              made. They rebuild the relationship by calling the customer and
              asking again.
            </p>
            <div className="cost">
              <span className="num">3×</span>
              <span className="lbl">
                higher churn on accounts after an unstructured handoff
              </span>
            </div>
          </div>

          <div className="prob-card">
            <div className="idx">iii.</div>
            <h3 className="ttl">
              Reps pay a <em>busywork tax</em> to keep the lights on.
            </h3>
            <p className="desc">
              Manual status updates. Hand-typed handoff docs. Slack summaries of
              calls that were already recorded. Hours per rep, per week, spent
              re-encoding information the system already has.
            </p>
            <div className="cost">
              <span className="num">4hrs</span>
              <span className="lbl">
                per rep, per week, lost to manual context transfer
              </span>
            </div>
          </div>
        </div>

        <div className="prob-resolve">
          <span className="rlbl">— The fix</span>
          <p className="rtxt">
            Salency sits above your AI notetaker and CRM as an{' '}
            <em>institutional memory layer</em> — extracting structured context
            from every call, keeping it current as the account evolves, and
            surfacing it the moment someone new picks up the relationship.
          </p>
          <a href="#" className="ra">
            See how it works →
          </a>
        </div>
      </section>

      <section className="gong">
        <div className="gong-head">
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
        <table className="gong-table">
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
                <span className="ic">—</span>Transcript + call summary
              </td>
              <td className="col-s">
                <span className="ic">→</span>
                <strong>Structured signals</strong> mapped to your catalog
              </td>
            </tr>
            <tr>
              <td className="dim">Unit of memory</td>
              <td className="col-g">
                <span className="ic">—</span>The call
              </td>
              <td className="col-s">
                <span className="ic">→</span>The <strong>account</strong> — every
                pain, promise, stakeholder, across every call
              </td>
            </tr>
            <tr>
              <td className="dim">Survives rep turnover</td>
              <td className="col-g">
                <span className="ic">×</span>Transcript survives. Context
                doesn&apos;t.
              </td>
              <td className="col-s">
                <span className="ic">✓</span>New rep inherits the{' '}
                <strong>full account state</strong> before their first call
              </td>
            </tr>
            <tr>
              <td className="dim">Citations</td>
              <td className="col-g">
                <span className="ic">—</span>Timestamps in transcript
              </td>
              <td className="col-s">
                <span className="ic">✓</span>Every extraction cited —{' '}
                <strong>transcript + timestamp + confidence</strong>
              </td>
            </tr>
            <tr>
              <td className="dim">Who reads it</td>
              <td className="col-g">
                <span className="ic">—</span>Managers, spot-checking coaching
                moments
              </td>
              <td className="col-s">
                <span className="ic">→</span>AE, CSM, director — every role on
                the account, on demand
              </td>
            </tr>
            <tr>
              <td className="dim">Handoff artefact</td>
              <td className="col-g">
                <span className="ic">×</span>None — you still write the handoff
                doc by hand
              </td>
              <td className="col-s">
                <span className="ic">✓</span>Handoff doc is the{' '}
                <strong>live memory layer</strong> itself
              </td>
            </tr>
            <tr>
              <td className="dim">Works alongside</td>
              <td className="col-g">
                <span className="ic">→</span>Your CRM
              </td>
              <td className="col-s">
                <span className="ic">→</span>Your notetaker + your CRM —{' '}
                <strong>zero rip-and-replace</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="cta-section">
        <div className="cta-card">
          <div className="eb">Limited pilot · Q1 2026</div>
          <h2>
            Stop paying the <em>ramp-time tax.</em>
          </h2>
          <p className="sub">
            Twelve revenue teams. Ninety days. A memory layer that outlasts any
            rep. Request a pilot slot — we&apos;re onboarding four more teams
            this quarter.
          </p>
          <div className="btns">
            <button className="btn btn-primary">Request a pilot →</button>
            <button className="btn btn-ghost">Read the memo</button>
          </div>
          <div className="fine">
            No card required · 30-minute scoping call · Deploys alongside your AI
            notetaker
          </div>
        </div>
      </section>

      <footer>
        <span className="brand">Salency</span>
        <nav>
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">Security</a>
          <a href="/investor">Investors</a>
          <a href="#">Careers</a>
        </nav>
        <span>© 2026 Salency, Inc. · SOC 2 Type II</span>
      </footer>
    </div>
  );
}
