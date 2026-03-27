
import React from 'react';
import { Ear, Lightbulb, Bell, CheckCircle2, ArrowRight, FileText, Upload, Zap } from 'lucide-react';
import { EmailForm } from '@/components/EmailForm';
import { Header } from '@/components/Header';
import { HeroMock } from '@/components/HeroMock';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent/30 selection:text-white relative">
      {/* Background Effects */}
      <div className="bg-noise"></div>
      <div className="bg-mesh"></div>

      <Header />

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-accent/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              New: Pilot Access Open
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-2xl">
              AI that remembers every customer pain<br className="hidden md:block" /> your sales reps forget.
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
              Gong records your calls. Cerebro solves what happens after.
            </p>

            <p className="text-base text-gray-500 max-w-2xl mx-auto mb-12">
              Built for B2B SaaS teams with 5–50 reps who are tired of losing context between calls.
            </p>

            <a
              href="#pilot"
              className="inline-flex items-center bg-accent hover:bg-cyan-400 text-background font-bold px-8 py-4 rounded-lg text-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:-translate-y-1"
            >
              Get Early Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Hero Visual — Product UI Mock */}
          <HeroMock />
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-16 md:py-24 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sm font-bold tracking-widest text-accent uppercase mb-3">The Problem</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The same context problem. Two different faces.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Persona 1 */}
              <div className="bg-white/[0.03] rounded-2xl p-8 border border-white/10">
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-4">The rep who misses things in the moment</div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  They walk out of a discovery call with gold — and bury it in a Google Doc no one reads again. They heard the pain, but only captured what they already understood. The signal that could have closed the deal? Gone before the follow-up email.
                </p>
                <blockquote className="border-l-2 border-white/10 pl-4">
                  <p className="text-sm text-gray-400 italic leading-relaxed">&ldquo;Most of my day ends up spent following up because communication has gotten so bad. Why leave people in the dark?&rdquo;</p>
                  <cite className="text-xs text-gray-600 not-italic mt-2 block">— Sales Rep, r/sales</cite>
                </blockquote>
              </div>

              {/* Persona 2 */}
              <div className="bg-white/[0.03] rounded-2xl p-8 border border-white/10">
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-4">The successor who inherits nothing</div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  New AE on the account. CS director picking up a client relationship. They are not flying blind because they forgot — they are flying blind because the system never gave them anything to remember. Every handoff starts from zero.
                </p>
                <blockquote className="border-l-2 border-white/10 pl-4">
                  <p className="text-sm text-gray-400 italic leading-relaxed">&ldquo;We finish Phase 1, move on. Customer had three problems they mentioned but weren&apos;t in scope. Nobody follows up. That&apos;s expansion revenue just walking away.&rdquo;</p>
                  <cite className="text-xs text-gray-600 not-italic mt-2 block">— Implementation Manager</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section id="how-it-works" className="py-24 px-6 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest text-accent uppercase mb-3">How It Works</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Three steps. No integrations required.</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Start a pilot with a product catalog and a few call transcripts. That&apos;s it.
            </p>
          </div>

          {/* 3-Step Workflow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Upload,
                step: "01",
                heading: "Connect your product catalog",
                desc: "Upload your product docs, feature list, and positioning. Cerebro builds a queryable knowledge base from your specific catalog — not generic AI guesses.",
              },
              {
                icon: FileText,
                step: "02",
                heading: "Upload a call transcript",
                desc: "Paste or upload any transcript. Cerebro extracts pains, objections, competitors, timelines, and requirements. Every extraction is cited back to the source line.",
              },
              {
                icon: Zap,
                step: "03",
                heading: "Get structured output",
                desc: "Pain-to-product mappings, a full call recap, and a follow-up email draft. Confidence scores on every insight. Your rep sends a better email in minutes.",
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-[10px] font-mono text-accent/50 mb-3">{item.step}</div>
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <item.icon size={18} className="text-accent" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.heading}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* What Cerebro extracts */}
          <div className="text-center mb-12">
            <p className="text-sm font-bold tracking-widest text-accent uppercase mb-3">What we extract</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Not just a summary. Structured signal.</h2>
          </div>

          <div className="space-y-10 mb-16 max-w-3xl mx-auto">
            {[
              {
                icon: Ear,
                heading: "Extract pains and timelines",
                description: "Every problem, objection, competitor mention, and timeline is pulled from the transcript — in the customer's own words, cited back to the source. Reps see exactly what was said and when.",
              },
              {
                icon: Lightbulb,
                heading: "Map pain to your products",
                description: "Cerebro doesn't just tag topics. It maps each extracted pain to specific products and features in your catalog, with reasoning. Where call recorders stop at what was said, Cerebro connects it to what actually solves it.",
              },
              {
                icon: Bell,
                heading: "Generate the follow-up",
                description: "A call recap and a draft follow-up email, grounded in the actual conversation. Your reps send better outreach in minutes, not hours — and successors inherit the full context.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <item.icon size={20} className="text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-1.5">{item.heading}</h4>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* What V1 gives you today */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/[0.03] rounded-2xl p-8 border border-white/10">
              <h4 className="text-base font-bold text-white mb-2">What V1 gives you today</h4>
              <p className="text-sm text-gray-500 mb-6">No CRM integration. No call recorder access. Just transcripts in, structured output out.</p>
              <ul className="space-y-3">
                {[
                  "Upload transcripts as plain text — paste from Gong, Otter, or anywhere",
                  "Citations on every extracted insight, linked back to the source line",
                  "Confidence scores so reps know what to prioritize",
                  "Pain-to-product mappings based on your specific catalog",
                  "Call recap + follow-up email draft generated per call",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle2 className="text-accent w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* GONG COMPARISON SECTION */}
        <section className="py-16 md:py-20 px-6 border-y border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Positioning</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The last mile Gong leaves unaddressed.</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Gong records everything. But a full transcript doesn&apos;t tell your CS director which product solves which pain, or give your new AE the context they need to pick up where someone left off.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 pr-8 text-gray-500 font-medium w-1/2"></th>
                    <th className="py-4 px-6 text-center text-gray-400 font-semibold">Gong</th>
                    <th className="py-4 px-6 text-center text-white font-semibold">Cerebro</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { capability: "Records calls", gong: true, cerebro: "Works with any transcript" },
                    { capability: "Coaches reps in the moment", gong: true, cerebro: false },
                    { capability: "Extracts pain in the customer’s own words", gong: false, cerebro: true },
                    { capability: "Maps pain to your specific products", gong: false, cerebro: true },
                    { capability: "Generates context-aware follow-up drafts", gong: false, cerebro: true },
                    { capability: "Gives successors full account context", gong: false, cerebro: true },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 pr-8 text-gray-300">{row.capability}</td>
                      <td className="py-4 px-6 text-center">
                        {row.gong === true ? (
                          <span className="text-gray-400">✓</span>
                        ) : row.gong === false ? (
                          <span className="text-gray-700">—</span>
                        ) : (
                          <span className="text-gray-400 text-xs">{row.gong}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.cerebro === true ? (
                          <span className="text-accent font-semibold">✓</span>
                        ) : row.cerebro === false ? (
                          <span className="text-gray-700">—</span>
                        ) : (
                          <span className="text-accent text-xs font-medium">{row.cerebro}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* RESULTS SECTION */}
        <section className="py-24 bg-gradient-to-br from-accent/5 to-transparent border-y border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What changes when nothing gets lost.</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Cerebro doesn&apos;t close deals. It captures the context your team needs to close them — so the signal from a January discovery call is still there when the customer&apos;s budget unlocks in Q3.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Capture what gets lost", desc: "Every pain, timeline, and buying signal is extracted from calls and stored — so reps re-engage with the exact context that was discussed, not a blank CRM field." },
                  { title: "Re-engage at the right moment", desc: "Cerebro pings reps when a customer stated timeline arrives — not randomly, not too late. The follow-up writes itself from real call context." },
                  { title: "Faster rep ramp", desc: "New reps inherit real account history instead of starting from zero. Training is built on actual pain-to-product chains from past calls, not role-play scripts." },
                  { title: "Expansion revenue you would otherwise miss", desc: "Every out-of-scope comment becomes a scheduled follow-up touch, triggered when the timing actually hits." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-accent flex-shrink-0 w-6 h-6 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section id="team" className="py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Team</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Built by people who&apos;ve done the job.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Howard",
                  title: "Co-founder & CEO",
                  bio: "Former founding AE at Viggle (a16z-backed). Led MUFG Hong Kong’s first Panda Bond. BD roles at Sequence and Treasure. MBET, University of Waterloo.",
                  initials: "H",
                  color: "from-cyan-500 to-blue-600",
                },
                {
                  name: "Nikki Ip",
                  title: "Co-founder & COO",
                  bio: "Building Cerebro’s go-to-market and operations. Previously led revenue analytics and operational strategy at Adaptavist Group. Background in institutional client management and compliance in banking.",
                  initials: "N",
                  color: "from-violet-500 to-purple-600",
                },
                {
                  name: "Babajide Okusanya",
                  title: "Co-founder & Technical Lead",
                  bio: "LLM specialist building Cerebro’s extraction and mapping engine. Previously scaled a B2B marketplace to meaningful ARR. Deep experience in applied AI.",
                  initials: "B",
                  color: "from-emerald-500 to-teal-600",
                },
              ].map((founder, i) => (
                <div key={i} className="bg-white/[0.03] rounded-2xl p-6 border border-white/10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${founder.color} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                    {founder.initials}
                  </div>
                  <div className="text-lg font-bold text-white mb-1">{founder.name}</div>
                  <div className="text-sm text-accent mb-3">{founder.title}</div>
                  <p className="text-sm text-gray-400 leading-relaxed">{founder.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PILOT SECTION */}
        <section id="pilot" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Join the Pilot</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We're currently running free pilots with 2-3 sales teams. We handle everything. You get the system, we get the feedback.
              </p>

              <div className="bg-white/5 rounded-xl p-8 border border-white/10 mb-8">
                <h4 className="text-lg font-bold text-white mb-4">Pilot Includes:</h4>
                <ul className="space-y-3">
                  {['60 days of free access', 'We analyze your calls weekly', 'Weekly coaching alerts sent to reps', 'Weekly feedback calls with our team', 'No obligation to continue'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 pt-4 border-t border-white/10 text-sm text-gray-400">
                  If you continue after the pilot, Cerebro is priced as a simple per-rep SaaS seat, with volume discounts for larger teams — just like your other sales tools.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <h4 className="text-lg font-bold text-white mb-4">Ideal Pilot Customer:</h4>
                <ul className="space-y-3">
                  {['5-50 sales reps', '$5M-$100M ARR', 'B2B SaaS or project-based services', 'Need re-engagement or expansion'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-24">
                <EmailForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-6 h-6 relative">
                <img src="/logo.png" alt="Cerebro Logo" className="object-contain w-full h-full opacity-80" />
              </div>
              <span className="text-xl font-bold text-white">Cerebro</span>
            </div>
            <p className="text-sm text-gray-500">Toronto, Canada</p>
          </div>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="mailto:founders@trycerebro.com" className="hover:text-white transition-colors py-3">founders@trycerebro.com</a>
            <a href="/privacy" className="hover:text-white transition-colors py-3">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors py-3">Terms</a>
          </div>

          <div className="text-sm text-gray-600">
            © 2026 Cerebro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
