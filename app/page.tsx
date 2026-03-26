
import React from 'react';
import { Ear, Lightbulb, Bell, CheckCircle2, ArrowRight, FileText, Upload, Zap } from 'lucide-react';
import { EmailForm } from '@/components/EmailForm';
import { PillarCard } from '@/components/PillarCard';
import { Header } from '@/components/Header';

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

          {/* Hero Visual - Transcript to Output */}
          <div className="mt-16 md:mt-20 relative">
            <div className="relative max-w-5xl mx-auto">
              {/* Subtle glow */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/8 blur-[100px] rounded-full pointer-events-none"></div>

              {/* Product Interface — Transcript → Output */}
              <div className="relative z-10">
                {/* Browser Chrome */}
                <div className="bg-[#0a0a0f] rounded-t-2xl border border-white/10 border-b-0 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-white/5 rounded-md px-4 py-1.5 flex items-center gap-2 text-xs text-gray-500">
                      <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                      app.cerebro.ai/analysis
                    </div>
                  </div>
                  <div className="w-20"></div>
                </div>

                {/* App Interface */}
                <div className="bg-gradient-to-b from-[#0d0d14] to-[#080810] rounded-b-2xl border border-white/10 border-t-0 overflow-hidden">
                  <div className="flex min-h-[500px] md:min-h-[580px]">

                    {/* Left Sidebar - 3 Icons Only */}
                    <div className="hidden md:flex w-16 bg-black/40 border-r border-white/5 flex-col items-center py-6 gap-4">
                      <div className="w-9 h-9 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                        <Calendar size={18} />
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
                        <Package size={18} />
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
                        <Radar size={18} />
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 flex flex-col md:flex-row">

                      {/* Left Panel - Past Calls */}
                      <div className="md:w-[340px] border-b md:border-b-0 md:border-r border-white/5 p-4 md:p-5">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                            <Ear size={14} className="text-accent" />
                            Past Calls
                          </h3>
                          <span className="text-xs text-gray-500">This week</span>
                        </div>

                        {/* Recent Call - Highlighted */}
                        <div className="bg-gradient-to-r from-accent/10 to-transparent rounded-xl p-4 border border-accent/30 mb-3 relative overflow-hidden group cursor-pointer">
                          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div className="flex items-start gap-3 relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">AC</div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-semibold text-white truncate">Acme Corp</span>
                                <span className="text-[10px] bg-accent/20 text-accent px-1.5 py-0.5 rounded font-medium">Discovery</span>
                              </div>
                              <p className="text-xs text-gray-400 mb-2 line-clamp-2">"...our <span className="text-accent">reporting takes 3 hours</span> every week, it's killing productivity..."</p>
                              <div className="flex items-center gap-3 text-[10px] text-gray-500">
                                <span className="flex items-center gap-1"><Clock size={10} /> 45 min</span>
                                <span className="text-emerald-400">✓ 3 insights captured</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Other Calls */}
                        {[
                          { initials: 'NX', name: 'Nexus Systems', type: 'Follow-up', duration: '32 min', insights: 2, color: 'from-blue-500 to-indigo-600' },
                          { initials: 'SB', name: 'ScaleBox', type: 'Demo', duration: '58 min', insights: 4, color: 'from-emerald-500 to-teal-600' },
                          { initials: 'DF', name: 'DataFlow Inc', type: 'Discovery', duration: '41 min', insights: 2, color: 'from-purple-500 to-pink-600' },
                        ].map((call, i) => (
                          <div key={i} className="bg-white/[0.02] hover:bg-white/[0.05] rounded-xl p-4 border border-white/5 mb-2 cursor-pointer transition-all">
                            <div className="flex items-start gap-3">
                              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${call.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 opacity-60`}>{call.initials}</div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-sm font-medium text-gray-300 truncate">{call.name}</span>
                                  <span className="text-[10px] bg-white/10 text-gray-400 px-1.5 py-0.5 rounded">{call.type}</span>
                                </div>
                                <div className="flex items-center gap-3 text-[10px] text-gray-600">
                                  <span><Clock size={10} className="inline mr-1" />{call.duration}</span>
                                  <span className="text-gray-500">{call.insights} insights</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Center Panel - Radar (Upcoming Alerts) */}
                      <div className="flex-1 p-4 md:p-5 bg-gradient-to-b from-transparent to-accent/[0.02]">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                            <Radar size={14} className="text-accent" />
                            Radar
                          </h3>
                          <span className="text-xs text-gray-500">12 upcoming alerts</span>
                        </div>

                        {/* Priority Alert - Ready Now */}
                        <div className="bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent rounded-2xl p-5 border-2 border-emerald-500/50 mb-4 relative overflow-hidden ready-pulse breathe">
                          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/30 blur-[80px] rounded-full"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-400/20 blur-[40px] rounded-full"></div>
                          <div className="relative">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                                </span>
                                Ready to Act
                              </span>
                              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-medium">Today</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Company</div>
                                <div className="text-sm font-semibold text-white">Nexus Systems</div>
                              </div>
                              <div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Contact</div>
                                <div className="text-sm font-semibold text-white">Mike Chen</div>
                              </div>
                            </div>

                            <div className="bg-black/30 rounded-xl p-4 mb-4">
                              <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">Pain Point</div>
                              <div className="text-white font-semibold text-lg mb-2">Manual Data Entry Bottleneck</div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-lg font-medium">Timeline Hit: Q2</span>
                                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-lg font-medium">Budget Confirmed</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center gap-2">
                                <Target size={14} className="text-accent" />
                                <span className="text-xs text-accent font-medium">Match: Workflow Automation Suite</span>
                              </div>
                            </div>
                            <button className="w-full mt-4 bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-bold py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:-translate-y-0.5">
                              View Context & Reach Out →
                            </button>
                          </div>
                        </div>

                        {/* Upcoming Alerts Grid */}
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-3">Coming Up This Month</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            { company: 'Acme Corp', pain: 'Slow Reporting Workflow', timeline: 'Jul 15', priority: 'high', days: 12 },
                            { company: 'ScaleBox', pain: 'Team Collaboration Gaps', timeline: 'Jul 22', priority: 'medium', days: 19 },
                            { company: 'DataFlow Inc', pain: 'Customer Onboarding Friction', timeline: 'Aug 1', priority: 'high', days: 29 },
                            { company: 'CloudFirst', pain: 'Integration Complexity', timeline: 'Aug 8', priority: 'medium', days: 36 },
                          ].map((alert, i) => (
                            <div key={i} className="bg-white/[0.03] hover:bg-white/[0.06] rounded-xl p-4 border border-white/5 cursor-pointer transition-all group">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium text-gray-300">{alert.company}</span>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded ${alert.priority === 'high' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                                  {alert.priority}
                                </span>
                              </div>
                              <div className="text-sm font-medium text-white mb-2">{alert.pain}</div>
                              <div className="flex items-center justify-between text-[10px] text-gray-500">
                                <span>{alert.timeline}</span>
                                <span className="text-accent group-hover:text-accent/80">{alert.days}d</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Panel - Upcoming Meetings */}
                      <div className="md:w-[280px] border-t md:border-t-0 md:border-l border-white/5 p-4 md:p-5 bg-gradient-to-b from-transparent to-purple-500/[0.02] relative">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                            <Calendar size={14} className="text-purple-400" />
                            Upcoming Meetings
                          </h3>
                        </div>

                        {/* Today's Meeting - Featured */}
                        <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl p-4 border border-purple-500/40 mb-3 relative overflow-hidden group hover:border-purple-500/60 transition-colors cursor-pointer">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/20 blur-[40px] rounded-full"></div>
                          <div className="relative">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">Today 2:00 PM</span>
                              <span className="text-[10px] bg-purple-500/30 text-purple-200 px-2 py-0.5 rounded-full font-medium animate-pulse">In 2 hours</span>
                            </div>
                            <div className="text-sm font-semibold text-white mb-1">Acme Corp — Follow-up</div>
                            <div className="text-xs text-gray-400 mb-3">Sarah Chen, VP of Ops</div>

                            {/* Insights from Cerebro */}
                            <div className="bg-black/40 rounded-lg p-3 border border-purple-500/20">
                              <div className="flex items-center gap-1.5 mb-2">
                                <Lightbulb size={10} className="text-accent" />
                                <span className="text-[9px] text-accent font-bold uppercase tracking-wider">Cerebro Insights</span>
                              </div>
                              <ul className="space-y-1.5 text-[10px]">
                                <li className="flex items-start gap-2 text-gray-300">
                                  <span className="text-accent mt-0.5">•</span>
                                  <span>Pain: <span className="text-white">Reporting takes 3hrs/week</span></span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-300">
                                  <span className="text-purple-400 mt-0.5">•</span>
                                  <span>Timeline: <span className="text-white">Q3 automation budget</span></span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-300">
                                  <span className="text-emerald-400 mt-0.5">•</span>
                                  <span>Match: <span className="text-white">Analytics Dashboard Pro</span></span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Other Meetings */}
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2 mt-4">This Week</div>
                        {[
                          { company: 'ScaleBox', contact: 'Demo Call', when: 'Tomorrow 10am', context: 'Team scaling challenges' },
                          { company: 'DataFlow Inc', contact: 'Discovery', when: 'Wed 3pm', context: 'Onboarding bottlenecks' },
                          { company: 'CloudFirst', contact: 'Check-in', when: 'Thu 11am', context: 'Integration questions' },
                        ].map((meeting, i) => (
                          <div key={i} className="flex items-start gap-3 py-3 border-b border-white/5 last:border-0 cursor-pointer hover:bg-white/[0.02] -mx-2 px-2 rounded-lg transition-all">
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 flex-shrink-0">
                              <Calendar size={14} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-medium text-gray-300 truncate">{meeting.company}</div>
                              <div className="text-[10px] text-gray-500">{meeting.contact}</div>
                              <div className="text-[10px] text-purple-400/70 mt-1 truncate">{meeting.context}</div>
                            </div>
                            <div className="text-[10px] text-gray-600 whitespace-nowrap">{meeting.when}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">The Silent Revenue Leak</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Your team is leaving money on the table.</h3>
              <p className="text-xl text-gray-400 mb-4">
                70% of sales leaders lose <span className="text-white font-semibold">$50K+ annually</span> to forgotten customer needs.
              </p>
              <p className="text-lg text-gray-500">
                This isn't about bad messaging. It's about lost memory and sloppy timing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProblemCard
                heading="Reps forget needs"
                description="A customer mentions they need compliance automation 'next quarter.' The rep jots it down. But when next quarter arrives, nobody remembers the conversation. By the time the customer is actually ready, your team has moved on—or sends a generic, irrelevant email."
                quote="Most of my day ends up spent following up with people because communication has gotten so bad...Why leave people in the dark?"
                author="Sales Rep, r/sales"
              />
              <ProblemCard
                heading="Poorly timed follow-ups"
                description="Reps send follow-ups at random times with no context. Customers ignore them because they aren't relevant in that moment. Deals die. You're either too early to be relevant or too late to be considered."
                quote="If they say 'call me in 3 months' we say 'what's going to change?' But we forget to ask, and we forget to call back."
                author="VP Sales"
              />
              <ProblemCard
                heading="Missed upsell chances"
                description="In project-based services, customers mention needs during Phase 1 that aren't in scope. When Phase 2 planning arrives, nobody remembers what they said. Expansion revenue dies quietly because no one remembers what the customer signaled months ago."
                quote="We finish Phase 1, move on. Customer has 3 problems they mentioned but weren't in scope. Nobody follows up."
                author="Impl. Manager"
              />
            </div>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">The 3-Pillar Solution</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">We built a system that solves this.</h3>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Cerebro isn't another call recorder or note-taker—it's a contextual re-engagement engine that turns conversations into dated, product-specific follow-up plays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PillarCard
              icon={Ear}
              heading="Listen to Every Call"
              description="Our AI listens to your customer calls and identifies every problem, objection, and need mentioned. We extract the pain, the timeline, and the urgency. This creates a persistent memory of every need and timeline across your entire book of business."
            />
            <PillarCard
              icon={Lightbulb}
              heading="Match Needs to Product (Our Moat)"
              description="We ingest your product docs, enablement materials, past won deals, and call transcripts to learn which features solve which pains. When a prospect says 'we need SOC2 before Q3,' Cerebro doesn't just tag 'security'; it suggests your SOC2 automation module and proven talk tracks from past wins. Where call recorders stop at what was said, Cerebro learns what actually solved it and brings that mapping back to reps when it matters."
            />
            <PillarCard
              icon={Bell}
              heading="Alert at Right Time"
              description="If a customer said 'Q3 budget,' Cerebro will ping your rep on July 1 with the exact pain point and suggested angle—no one has to remember anything."
            />
          </div>

          {/* Built to Fit Your Stack */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-white/[0.03] rounded-2xl p-8 border border-white/10">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Package size={18} className="text-accent" />
                Built to Fit Your Stack
              </h4>
              <p className="text-gray-400 mb-6">
                Cerebro connects to the tools you already use, so you don't have to overhaul your workflow on day one. It starts simple—just your call recordings and CRM—and layers in more context over time.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Works with your existing call recorder (Zoom, Gong, Dialer, etc.)—no change to how reps run meetings.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Reads from, but doesn't rewrite, your CRM; we create tasks and alerts instead of flooding you with new objects.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Start pilots with calls + CRM only, then add product docs and calendars later if and when it makes sense.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* GONG COMPARISON SECTION */}
        <section className="py-24 px-6 border-y border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Positioning</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">The last mile Gong leaves unaddressed.</h3>
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
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Team</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Built by people who&apos;ve done the job.</h3>
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
        <section id="pilot" className="py-24 px-6 max-w-7xl mx-auto">
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
            <p className="text-sm text-gray-500">We help sales teams remember what customers need.</p>
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>

          <div className="text-sm text-gray-600">
            © 2026 Cerebro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
