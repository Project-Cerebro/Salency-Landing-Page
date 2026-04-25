import { FOUNDERS } from '@/lib/founders';
import { FOUNDERS_EMAIL, PILOT_FORM_ANCHOR } from '@/lib/links';

export function OurStorySection() {
  return (
    <section className="story">
      {/* Layer 1 — Hero: the founding observation */}
      <div className="story-intro">
        <span className="eb">Our story</span>
        <blockquote className="story-hero-quote">
          Salespeople record every call. Nobody rewatches the transcripts.
        </blockquote>
        <div className="story-hero-attribution">
          Said in a Toronto office &middot; 2024
        </div>
        <p className="story-hero-body">
          Thousands of pain points die in files no one opens.{' '}
          <em>
            The customer raises five per call. The rep on the call catches
            three. The rep who inherits sees zero.
          </em>{' '}
          Two people on opposite sides of the same business spotted it first.
        </p>
      </div>

      {/* Layer 2 — Founder collision (parallel columns) */}
      <div className="story-collision">
        <span className="eb">
          Two founders, opposite sides of the same failure
        </span>
        <div className="story-collision-grid">
          <div className="story-collision-col">
            <span className="name">
              Nikki &middot; Adaptavist, 3 years in
            </span>
            <p>
              She heard the line first. Three years running operational
              reporting at Adaptavist Group across sales, services, and
              finance, she&rsquo;d been watching a version of the same
              failure from the analyst side &mdash; documentation out of date
              the week it ships, real context living in Slack threads no one
              reads. When her coworker said it out loud, she recognized the
              seam.{' '}
              <em>
                If the evidence lives in conversations, why is a human still
                writing the doc?
              </em>
            </p>
          </div>
          <div className="story-collision-divider" aria-hidden="true" />
          <div className="story-collision-col">
            <span className="name">Howard &middot; Sequence, late 2024</span>
            <p>
              First onboarding call for a new web3 game-studio customer at
              Sequence. By minute 15 the customer had said some version of{' '}
              <em>&ldquo;I already told your colleague this&rdquo;</em> three
              times. The rep who closed the deal was two desks away. Nobody
              had asked him to do a handover. The CRM had a stage field and a
              one-line note.
            </p>
            <p>
              Howard had stopped thinking of that as a behavior problem months
              earlier. When Nikki brought him the line, he already knew she
              was right.{' '}
              <em>
                Behavior doesn&rsquo;t fail at that scale. Infrastructure
                does.
              </em>
            </p>
          </div>
        </div>
        <p className="story-collision-close">
          Until 2024 the evidence existed. Nobody could read it at scale. By
          2024 they could. Two more years showed which shapes failed.{' '}
          <em>
            That&rsquo;s what turned a workplace observation into a company.
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

      {/* Close — universal body + single primary CTA + subtle email line */}
      <div className="story-close">
        <p>
          We&rsquo;re building the layer that remembers what your customers
          actually said.{' '}
          <em>If that&rsquo;s a problem you&rsquo;ve watched fail</em>,
          we&rsquo;d like to talk.
        </p>
        <div className="story-close-ctas">
          <a href={PILOT_FORM_ANCHOR} className="story-close-link">
            Request early access &rarr;
          </a>
        </div>
        <p className="story-close-email">
          Or email us at{' '}
          <a href={`mailto:${FOUNDERS_EMAIL}`}>{FOUNDERS_EMAIL}</a>
        </p>
      </div>
    </section>
  );
}
