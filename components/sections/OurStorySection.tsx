import Link from 'next/link';

export function OurStorySection() {
  return (
    <section className="story">
      <div className="story-intro">
        <span className="eb">Our story</span>
        <h1>
          Four people. Four months.{' '}
          <em>One bet about how sales actually works.</em>
        </h1>
        <p className="lede">
          We started Salency because we watched the same thing fail in
          different rooms — reps inheriting accounts with no memory of what
          was said, customers repeating themselves, deals losing trust at
          the handover. Every behavioral fix made it worse. This is the
          story of what we did instead.
        </p>
      </div>

      <div className="story-origin">
        <span className="eb">The moment</span>
        <p className="story-origin-body">
          Late 2024. Howard was helping out on customer success at Sequence.
          First onboarding call for a new web3 game-studio customer. By
          minute 15 the customer had said some version of{' '}
          <em>&ldquo;I already told your colleague this&rdquo;</em> three
          times. The rep who closed the deal was two desks away. Nobody had
          asked him to do a handover. The CRM had a stage field and a
          one-line note.
        </p>
        <p className="story-origin-body">
          Howard stopped thinking of this as a behavior problem. Behavior
          doesn&rsquo;t fail at that scale. <em>Infrastructure does.</em>
        </p>
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
            <p>
              Five founding-AE / BD seats in four years —{' '}
              <em>Dora, Sequence, Treasure, Nijta, Viggle</em> (a16z-backed).
              Ran the HubSpot→Monday CRM migration at Sequence and came out
              knowing flat fields can&rsquo;t hold what the customer said.
              Before sales, he led MUFG Hong Kong&apos;s first Panda Bond
              issuance. MBET, Waterloo.
            </p>
            <p>
              In January 2026 he interviewed a senior relationship manager at
              a fintech who said 40–50% of her customers get visibly annoyed
              when asked to repeat themselves. Her verbatim:{' '}
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
              <div className="story-founder-role">Co-founder &amp; COO</div>
            </div>
          </aside>
          <div className="story-founder-body">
            <p>
              Data analyst at <em>Adaptavist Group</em> for 3+ years,
              running the operational reporting stack across HubSpot,
              Snowflake, and DBT. She&rsquo;s lived the exact pain Salency
              fixes —{' '}
              <em>
                revenue data scattered across platforms, no single layer
                where the story survives.
              </em>
            </p>
            <p>
              When Howard showed her the thesis, her first reaction was{' '}
              <em>
                &ldquo;I&rsquo;ve been doing this by hand for five
                years.&rdquo;
              </em>{' '}
              She joined as co-founder two weeks later. Before Adaptavist:
              Hong Kong commercial banking at Nanyang Commercial Bank
              (credit for HKD 4B+ listed clients) and operations at a
              Toronto crypto exchange.
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
            <p>
              Scaled <em>MakersValley</em> from 0 to $2M ARR (6.5y, NYC) as
              an applied-AI operator — not a research hire. Built
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
            <p>
              Shristi was the designer who shipped Salency&rsquo;s V1.{' '}
              <em>
                &ldquo;Sales intelligence platform&rsquo;s MVP application
                using AI-augmented design skills&rdquo;
              </em>{' '}
              on her portfolio is this one. She joined the way the others
              did — already in the work before the decision was formal.
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
          What we bet on: institutional memory isn&rsquo;t another feature.{' '}
          <em>It&rsquo;s a layer.</em> And the bottleneck is about to shift.
        </p>
        <Link href="/investors" className="story-close-link">
          Read the full thesis →
        </Link>
      </div>
    </section>
  );
}
