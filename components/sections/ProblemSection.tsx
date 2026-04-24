import Link from 'next/link';

export function ProblemSection() {
  return (
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
          <h3 className="title">
            Calls are <em>recorded.</em> Context isn&apos;t <em>captured.</em>
          </h3>
          <p className="desc">
            Conversation intelligence gives you 90 minutes of searchable
            transcript. Nobody reads 90 minutes of transcript. The unprompted
            pain, the offhand competitor mention, the stakeholder aside — they
            stay locked in the audio.
          </p>
          <div className="cost">
            <span className="figure">&lt; 4%</span>
            <span className="label">
              of transcripts get re-read after the handoff &middot; internal estimate, AE/CS interviews
            </span>
          </div>
        </div>

        <div className="prob-card">
          <div className="idx">ii.</div>
          <h3 className="title">
            Every handoff restarts from <em>zero.</em>
          </h3>
          <p className="desc">
            A new account executive picks up the account. A CS director
            inherits at renewal.
            Neither gets the pain history, the stakeholder map, or the promises
            made. They rebuild the relationship by calling the customer and
            asking again.
          </p>
          <div className="cost">
            <span className="figure">40–50%</span>
            <span className="label">
              of customers visibly frustrated when asked to repeat themselves &middot; AE/CS interviews, Q1 2026
            </span>
          </div>
        </div>

        <div className="prob-card">
          <div className="idx">iii.</div>
          <h3 className="title">
            Reps pay a <em>busywork tax</em> to keep the lights on.
          </h3>
          <p className="desc">
            Manual status updates. Hand-typed handoff docs. Slack summaries of
            calls that were already recorded. Hours per rep, per week, spent
            re-encoding information the system already has.
          </p>
          <div className="cost">
            <span className="figure">3–5 hrs</span>
            <span className="label">
              per rep per week re-encoding what the recording already captured &middot; AE interviews, Q1 2026
            </span>
          </div>
        </div>
      </div>

      <div className="prob-resolve">
        <span className="label">— The fix</span>
        <p className="text">
          Salency sits above your AI notetaker and CRM as an{' '}
          <em>institutional memory layer</em> — extracting structured context
          from every call, keeping it current as the account evolves, and
          surfacing it the moment someone new picks up the relationship.
        </p>
        <Link href="#memory-stack" className="link">
          See how it works →
        </Link>
      </div>
    </section>
  );
}
