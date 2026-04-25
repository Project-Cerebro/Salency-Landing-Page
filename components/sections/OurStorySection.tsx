import { FOUNDERS } from '@/lib/founders';
import { CALENDAR_URL, PILOT_FORM_ANCHOR } from '@/lib/links';

export function OurStorySection() {
  return (
    <section className="story">
      {/* Layer 1 — Hero buyer-quote */}
      <div className="story-intro">
        <span className="eb">Our story</span>
        <blockquote className="story-hero-quote">
          <span className="open-quote">&ldquo;</span>I avoid recording my calls
          because people tense up.&rdquo;
        </blockquote>
        <div className="story-hero-attribution">
          Senior relationship manager, fintech &middot; January 2026
        </div>
        <p className="story-hero-body">
          She was explaining why her team&rsquo;s account history lives in her
          head. 40&ndash;50% of her customers visibly annoyed when asked to
          repeat themselves. <em>Every B2B sales org has this person.</em>{' '}
          Salency is the structured account memory layer for the conversations
          that never make it into the CRM. Two people on opposite sides of the
          same business spotted it before the tooling existed.
        </p>
      </div>

      {/* Layer 2 — Founder collision (parallel columns) */}
      <div className="story-collision">
        <span className="eb">
          Two founders, opposite sides of the same failure
        </span>
        <div className="story-collision-grid">
          <div className="story-collision-col">
            <span className="name">Howard &middot; Sequence, late 2024</span>
            <p>
              First onboarding call for a new web3 game-studio customer at
              Sequence. By minute 15 the customer had said some version of{' '}
              <em>&ldquo;I already told your colleague this&rdquo;</em> three
              times. The rep who closed the deal was two desks away. Nobody
              had asked him to do a handover. The CRM had a stage field and a
              one-line note. Howard had stopped thinking of that as a behavior
              problem months earlier.{' '}
              <em>
                Behavior doesn&rsquo;t fail at that scale. Infrastructure
                does.
              </em>
            </p>
          </div>
          <div className="story-collision-divider" aria-hidden="true" />
          <div className="story-collision-col">
            <span className="name">
              Nikki &middot; Adaptavist Group, three years in
            </span>
            <p>
              A coworker said it in passing &mdash; salespeople record every
              call, but nobody rewatches the transcripts. One deal closes; a
              thousand pain points die in a file no one opens. Nikki is a data
              analyst at Adaptavist Group, three years running operational
              reporting across HubSpot/Snowflake/DBT. She&rsquo;d been
              watching a version of the same failure on her own side of the
              business. She recognized the seam the moment her coworker named
              it.{' '}
              <em>
                If the evidence lives in conversations, why is a human still
                writing the doc?
              </em>
            </p>
          </div>
        </div>
        <p className="story-collision-close">
          Until 2024 nobody could read the evidence. By late 2024 they could.{' '}
          <em>
            That&rsquo;s the beat that turned a workplace observation into a
            company.
          </em>
        </p>
      </div>

      {/* Layer 3 — 4 founders, 2x2 grid, square photos */}
      <div className="story-founders">
        <span className="eb">Who&rsquo;s building it</span>
        <div className="story-founders-list">
          {FOUNDERS.map((founder) => (
            <article key={founder.id} className="story-founder">
              <aside className="story-founder-meta">
                <div className={`photo ${founder.photoVariant}`.trim()}>
                  {founder.initials}
                </div>
              </aside>
              <div className="story-founder-body">
                <h2 className="story-founder-name">{founder.name}</h2>
                <span className="story-founder-role">{founder.role}</span>
                <p>{founder.longBio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Close — 2 sentences + dual CTA */}
      <div className="story-close">
        <p>
          We&rsquo;re building the layer that remembers what your customers
          actually said.{' '}
          <em>
            If you run a B2B sales team and that sentence describes a problem
            you have
          </em>
          , we&rsquo;d like to talk.
        </p>
        <div className="story-close-ctas">
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="story-close-link"
          >
            Take a 25-min call &rarr;
          </a>
          <a
            href={PILOT_FORM_ANCHOR}
            className="story-close-link story-close-link--secondary"
          >
            Request early access &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
