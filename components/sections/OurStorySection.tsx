import Link from 'next/link';

export function OurStorySection() {
  return (
    <section className="story">
      <div className="story-intro">
        <span className="eb">Our story</span>
        <h1>
          <em>The sentence that became a company.</em>
        </h1>
        <p className="lede">
          Salency started with a comment said in passing, in an office. The
          person who heard it had spent years inside a version of the same
          failure on a different side of the business, and had just realized
          something had changed that made it fixable. This is the company
          that came out of it.
        </p>
      </div>

      <div className="story-origin">
        <span className="eb">The sentence</span>
        <div className="story-origin-grid">
          <div className="story-origin-prose">
            <p className="story-origin-body">
              Nikki is a data analyst at a B2B SaaS company, three years
              into running the operational reporting. A coworker said it in
              passing: salespeople record every call, but nobody ever
              rewatches the transcripts. One deal closes out of the
              conversation. The other thousand pain points —{' '}
              <em>
                the ones waiting on budget cycles, waiting on headcount,
                waiting on the slow things
              </em>{' '}
              — die in a file no one opens. The company never even knew
              they were said.
            </p>
            <p className="story-origin-body">
              She&rsquo;s been watching a version of this on her own side
              of the business for years. Documentation out of date the
              week it ships. The real context living in Slack threads and
              call recordings no one has time to read. She&rsquo;s been
              asking herself the same question from the ops side: if the
              evidence lives in conversations, why is a human still
              writing the doc?
            </p>
            <p className="story-origin-body">
              And then the math changed. LLMs had just gotten good enough
              to read the evidence directly — the transcripts, the
              threads, the things that actually happened — and update what
              the business knew in real time.{' '}
              <em>
                That&rsquo;s the beat that turned a workplace observation
                into a company.
              </em>
            </p>
          </div>
          <aside className="story-origin-aside">
            <p className="story-origin-quote">
              If the evidence lives in conversations, why is a human still
              writing the doc?
            </p>
          </aside>
        </div>
      </div>

      <div className="story-origin">
        <span className="eb">The confirmation</span>
        <div className="story-origin-grid">
          <div className="story-origin-prose">
            <p className="story-origin-body">
              Nikki brought it to Howard — a salesperson by trade, and her
              reality check. He&rsquo;d done five founding-sales seats in
              four years and had just finished his Entrepreneurship
              Masters. If the pain was real, he&rsquo;d know. If the
              market wasn&rsquo;t there, he&rsquo;d say so.
            </p>
            <p className="story-origin-body">
              He recognized it immediately. Late 2024, first onboarding
              call for a new web3 game-studio customer at Sequence. By
              minute 15 the customer had said some version of{' '}
              <em>&ldquo;I already told your colleague this&rdquo;</em>{' '}
              three times. The rep who closed the deal was two desks away.
              Nobody had asked him to do a handover. The CRM had a stage
              field and a one-line note.
            </p>
            <p className="story-origin-body">
              Howard had stopped thinking of that as a behavior problem
              months earlier. Behavior doesn&rsquo;t fail at that scale.
              Infrastructure does. When Nikki named the same failure from
              the analyst side, he already knew she was right.
            </p>
          </div>
          <aside className="story-origin-aside">
            <p className="story-origin-quote">
              Behavior doesn&rsquo;t fail at that scale. Infrastructure
              does.
            </p>
          </aside>
        </div>
      </div>

      <div className="story-origin">
        <span className="eb">The reframe</span>
        <div className="story-origin-grid">
          <div className="story-origin-prose">
            <p className="story-origin-body">
              The CRM was built to store pipeline stages. It was never
              built to store what the customer said. So the conversation
              lived in the head of whoever took the call, and died with
              them when they context-switched, quit, or got reassigned.
              The recording was the evidence. Nobody read the evidence.
            </p>
            <p className="story-origin-body">
              Until now, nobody could.{' '}
              <em>That&rsquo;s what changed.</em>
            </p>
          </div>
          <aside className="story-origin-aside">
            <p className="story-origin-quote">
              Nobody read the evidence. Until now, nobody could.
            </p>
          </aside>
        </div>
      </div>

      <div className="story-founders">
        <span className="eb">Who&rsquo;s building it</span>

        <article className="story-founder">
          <aside className="story-founder-meta">
            <div className="photo">HT</div>
            <div className="story-founder-identity">
              <h2 className="story-founder-name">Howard Tam</h2>
              <div className="story-founder-role">Co-founder &amp; CEO</div>
            </div>
          </aside>
          <div className="story-founder-body">
            <p className="story-founder-stake">
              <em>
                Why he&rsquo;s here: lived the pain for four years across
                five sales seats, then confirmed what Nikki was describing
                the moment she said it.
              </em>
            </p>
            <p>
              Five founding-AE / BD seats in four years —{' '}
              <em>Dora, Sequence, Treasure, Nijta, Viggle</em> (a16z-backed).
              Ran the HubSpot→Monday CRM migration at Sequence and came out
              knowing flat fields can&rsquo;t hold what the customer said.
              Entrepreneurship Masters (MBET, Waterloo). Before sales, he
              led MUFG Hong Kong&apos;s first Panda Bond issuance.
            </p>
            <p>
              In January 2026 he interviewed a senior relationship manager
              at a fintech who said 40–50% of her customers get visibly
              annoyed when asked to repeat themselves. Her verbatim:{' '}
              <em>
                &ldquo;I avoid recording my calls because people tense
                up.&rdquo;
              </em>{' '}
              That was the input constraint named by the person Salency was
              being built for.
            </p>
          </div>
        </article>

        <article className="story-founder">
          <aside className="story-founder-meta">
            <div className="photo photo--violet">NI</div>
            <div className="story-founder-identity">
              <h2 className="story-founder-name">Nikki Ip</h2>
              <div className="story-founder-role">
                Co-founder &amp; Product
              </div>
            </div>
          </aside>
          <div className="story-founder-body">
            <p className="story-founder-stake">
              <em>
                Why she&rsquo;s here: the product, the business idea, and
                the way this company tells its story are hers.
              </em>
            </p>
            <p>
              Three years as a data analyst in B2B SaaS. Operations roles
              across banking and crypto before that — the grounding that
              tells her where to look inside any business:{' '}
              <em>
                where the gaps hide, where signal gets lost, where the team
                closest to the customer always knows something the company
                never captures.
              </em>
            </p>
          </div>
        </article>

        <article className="story-founder">
          <aside className="story-founder-meta">
            <div className="photo photo--teal">BO</div>
            <div className="story-founder-identity">
              <h2 className="story-founder-name">Babajide Okusanya</h2>
              <div className="story-founder-role">Founding Engineer</div>
            </div>
          </aside>
          <div className="story-founder-body">
            <p className="story-founder-stake">
              <em>
                Why he&rsquo;s here: had already built this class of system
                in production and knew what makes it defensible.
              </em>
            </p>
            <p>
              Met Howard during his MBET at Waterloo. Scaled{' '}
              <em>MakersValley</em> from 0 to $2M ARR (6.5y, NYC) as an
              applied-AI operator — not a research hire. Built
              Salency&rsquo;s extraction and pain-to-product mapping engine.
              Trained 2,000+ engineers on AI-assisted workflows along the
              way.
            </p>
            <p>
              The core technical risk in Salency isn&rsquo;t &ldquo;can an
              LLM summarise a call.&rdquo; It&rsquo;s{' '}
              <em>
                &ldquo;can extractions stay cited, scoped to a specific
                catalog, and trustworthy at volume.&rdquo;
              </em>{' '}
              He has shipped that class of system before —
              provenance-tracked AI context systems in production.
            </p>
          </div>
        </article>

        <article className="story-founder">
          <aside className="story-founder-meta">
            <div className="photo photo--amber">SG</div>
            <div className="story-founder-identity">
              <h2 className="story-founder-name">Shristi Gartaula</h2>
              <div className="story-founder-role">Founding Designer</div>
            </div>
          </aside>
          <div className="story-founder-body">
            <p className="story-founder-stake">
              <em>
                Why she&rsquo;s here: AI-augmented design is her stated top
                skill — not a pivot.
              </em>
            </p>
            <p>
              The designer who shipped Salency&rsquo;s V1.{' '}
              <em>
                &ldquo;Sales intelligence platform&rsquo;s MVP application
                using AI-augmented design skills&rdquo;
              </em>{' '}
              on her portfolio is this one.
            </p>
            <p>
              Five years designing enterprise complex-systems tools before
              Salency. Sole designer at <em>Index Exchange</em> for a
              10-engineer ad-tech platform, shipping workflows for
              blacklisting and account administration at ad-tech scale.
              Redesigned legacy shipping applications at StatysTech with
              user research driving the journey rewrites. Fortune 500 HR
              interfaces at Myplanet. Her process opens with a user, not a
              wireframe. AI-augmented design is her stated top skill —{' '}
              <em>not a pivot.</em>
            </p>
          </div>
        </article>
      </div>

      <div className="story-close">
        <p>
          Every revenue tool shipped in the last twenty years assumed the
          structured row was the unit of truth. Pipeline stage. Deal size.
          Close date. Meanwhile the actual thing that closes or loses a
          deal —{' '}
          <em>
            what the customer said, what contradicts what, which pain the
            budget cycle is actually attached to
          </em>{' '}
          — has been living in transcripts no one reads and heads that
          quit.
        </p>
        <p>
          What we bet on: remembering every customer conversation
          isn&rsquo;t another feature on top of a CRM.{' '}
          <em>It&rsquo;s a layer underneath.</em> And the bottleneck is
          about to shift from &ldquo;how much pipeline can a rep
          generate&rdquo; to{' '}
          <em>
            &ldquo;how much of what the customer actually said can the
            company remember.&rdquo;
          </em>
        </p>
        <p>We&rsquo;re building that layer.</p>
        <Link href="/investors" className="story-close-link">
          Read the full thesis →
        </Link>
      </div>
    </section>
  );
}
