'use client';

import { ScrollReveal } from '@/components/ScrollReveal';

const founders = [
  {
    name: 'Howard Tam',
    title: 'Co-founder & CEO',
    initials: 'H',
    pullQuote: 'Founding AE pain is the product spec.',
    bio: "Founding AE at Viggle (a16z-backed), where he ran pilot-to-paid motions with the exact B2B buyers Salency sells to today. Before that he led MUFG Hong Kong's first Panda Bond and worked BD at Sequence and Treasure. He has lost deals to forgotten context personally, in rooms where the budget was real. The product spec comes from that scar tissue. MBET, Waterloo.",
    domainFit: 'Ex-founding AE at an a16z-backed company selling to the same buyer Salency sells to today.',
  },
  {
    name: 'Nikki Ip',
    title: 'Co-founder & COO',
    initials: 'N',
    pullQuote: 'Writes go-to-market from the buyer\u2019s side of the desk.',
    bio: "Runs revenue analytics and operational strategy at Adaptavist Group, where she owns the pipeline instrumentation Salency's buyers are trying to build internally. Prior background in institutional client management and AML/KYC compliance in banking. She knows what sales ops actually trusts, how handoffs break at 50 reps, and which metrics survive a board deck.",
    domainFit: 'Currently runs the instrumentation Salency\u2019s buyers are trying to build internally.',
  },
  {
    name: 'Babajide Okusanya',
    title: 'Technical Lead',
    initials: 'B',
    pullQuote: 'Applied-AI operator, not a research hire.',
    bio: "Built Salency's extraction and pain-to-product mapping engine. Previously scaled a B2B marketplace to meaningful ARR as an applied-AI operator, not a research hire. The core technical risk in Salency is not \u201ccan an LLM summarize a call.\u201d It is \u201ccan extractions stay cited, scoped to a specific catalog, and trustworthy at volume.\u201d He has shipped that class of system before.",
    domainFit: 'Shipped cited, catalog-scoped extraction systems at volume before.',
  },
];

export function InvestorRegister() {
  return (
    <section className="register-investor bg-bg-register-investor">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        {/* Platform framing */}
        <ScrollReveal>
          <div className="max-w-[62ch] mx-auto text-center mb-20">
            <p className="text-sm font-bold tracking-widest text-accent-warm uppercase mb-4">Platform</p>
            <h3 className="text-3xl md:text-5xl text-white mb-6 leading-tight">
              The structured memory layer for B2B sales accounts.
            </h3>
            <p className="text-lg text-gray-300">
              Salency turns every call into durable, queryable context mapped to your product catalog, so the next rep, the next quarter, and the next pipeline review all inherit what was actually said instead of what someone remembered to type.
            </p>
          </div>
        </ScrollReveal>

        {/* V1.5 Roadmap line */}
        <ScrollReveal>
          <div className="max-w-[62ch] mx-auto mb-24 pb-12 border-b border-white/10">
            <p className="text-sm font-bold tracking-widest text-accent-warm uppercase mb-3">Next on the roadmap</p>
            <p className="text-base text-gray-300">
              A Recall.ai meeting bot is next, joining Zoom, Meet, and Teams calls and feeding the extraction pipeline directly.
            </p>
          </div>
        </ScrollReveal>

        {/* Team — editorial layout */}
        <ScrollReveal>
          <div id="team" className="mb-24">
            <div className="text-center mb-16">
              <p className="text-sm font-bold tracking-widest text-accent-warm uppercase mb-3">Team</p>
              <h3 className="text-3xl md:text-4xl text-white">Why these three, on this problem, now.</h3>
            </div>

            <div className="space-y-16 max-w-4xl mx-auto">
              {founders.map((f, i) => (
                <div
                  key={f.name}
                  className={`grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                    }`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-accent-warm/15 border border-accent-warm/25 flex items-center justify-center font-bold text-5xl text-accent-warm">
                      {f.initials}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl text-white mb-1 m-0">{f.name}</h4>
                    <div className="text-[13px] font-bold uppercase tracking-wider text-accent-warm mb-5">
                      {f.title}
                    </div>
                    <blockquote
                      className="border-l-2 border-accent-warm/40 pl-5 mb-5 italic text-lg text-gray-200"
                      style={{ fontFamily: 'var(--font-instrument-serif), Georgia, serif' }}
                    >
                      &ldquo;{f.pullQuote}&rdquo;
                    </blockquote>
                    <p className="text-gray-300 mb-4 max-w-[62ch]">{f.bio}</p>
                    <p className="text-xs text-gray-500">
                      <span className="uppercase tracking-wider">Domain fit: </span>
                      <span className="text-gray-400">{f.domainFit}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Future-fit thesis */}
        <ScrollReveal>
          <div className="max-w-[62ch] mx-auto border-t border-white/10 pt-16">
            <p className="text-sm font-bold tracking-widest text-accent-warm uppercase mb-4">Why this compounds</p>
            <h3 className="text-2xl md:text-3xl text-white mb-6 leading-tight">
              The input layer for AI-era sales.
            </h3>
            <p className="text-lg text-gray-300">
              Sales teams are consolidating tools and cutting rep headcount while deal complexity keeps rising. The surviving reps own more accounts with less tribal knowledge, and AI agents will start drafting their outreach. Both depend on structured account memory as the input, not a raw transcript pile. Salency owns that layer. The longer a team runs it, the more context compounds, and the harder it is to rip out.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
