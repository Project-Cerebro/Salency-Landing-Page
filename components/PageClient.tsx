'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { SocialProof } from '@/components/SocialProof';
import { FounderVideo } from '@/components/FounderVideo';
import { EmailForm } from '@/components/EmailForm';
import { ScrollReveal } from '@/components/ScrollReveal';
import { RegisterDivider } from '@/components/RegisterDivider';
import { InvestorRegister } from '@/components/InvestorRegister';

export function PageClient() {
  const [capturedEmail, setCapturedEmail] = useState('');

  return (
    <>
      <main className="pt-20">
        <HeroSection onEmailCapture={setCapturedEmail} />
        <SocialProof />

        {/* PROBLEM SECTION */}
        <section className="py-16 md:py-24 bg-bg-secondary border-y border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-sm font-bold tracking-widest text-accent-warm uppercase mb-3">The Problem</p>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Your reps hear everything. Your CRM remembers nothing.</h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/[0.03] rounded-2xl p-8 border border-white/10">
                <div className="text-xs font-bold text-accent-warm uppercase tracking-wider mb-4">The rep who misses things in the moment</div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  They walk out of a discovery call with gold — and bury it in a Google Doc no one reads again. They heard the pain, but only captured what they already understood. The signal that could have closed the deal? Gone before the follow-up email.
                </p>
                <blockquote className="border-l-2 border-white/10 pl-4">
                  <p className="text-sm text-gray-400 italic leading-relaxed">&ldquo;Most of my day ends up spent following up because communication has gotten so bad. Why leave people in the dark?&rdquo;</p>
                  <cite className="text-xs text-gray-600 not-italic mt-2 block">— Sales Rep, r/sales</cite>
                </blockquote>
              </div>

              <div className="bg-white/[0.03] rounded-2xl p-8 border border-white/10">
                <div className="text-xs font-bold text-accent-warm uppercase tracking-wider mb-4">The successor who inherits nothing</div>
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

        <FounderVideo />

        {/* SOLUTION SECTION */}
        <SolutionSection />

        {/* GONG COMPARISON SECTION */}
        <GongComparisonSection />

        {/* PILOT SECTION */}
        <section id="pilot" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Join the Pilot</h2>
                <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                  We&apos;re currently running free pilots with 2-3 sales teams. We handle everything. You get the system, we get the feedback.
                </p>
                <p className="text-sm text-gray-400 mb-8">
                  Best for B2B SaaS teams with 5-50 reps losing context between calls.
                </p>

                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                  <h4 className="text-lg font-bold text-white mb-4">Pilot Includes:</h4>
                  <ul className="space-y-3">
                    {['60 days of free access', 'We analyze your calls weekly', 'Structured Salency report per call', 'Weekly feedback calls with our team', 'No obligation to continue'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle2 className="text-accent-warm w-5 h-5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="sticky top-24">
                  <EmailForm prefillEmail={capturedEmail} />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* REGISTER DIVIDER */}
        <RegisterDivider eyebrow="What we're building" chapter="02" />

        {/* INVESTOR REGISTER */}
        <InvestorRegister />
      </main>
    </>
  );
}

function SolutionSection() {
  return (
    <section id="how-it-works" className="py-24 px-6 max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest text-accent-warm uppercase mb-3">How It Works</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Three steps. No integrations required.</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Start a pilot with a product catalog and a few call transcripts. That&apos;s it.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 mb-10">
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] border-t border-dashed border-accent-warm/15" aria-hidden="true" />
          {[
            { step: '01', heading: 'Connect your product catalog', desc: 'Upload your product docs, feature list, and positioning. Salency builds a queryable knowledge base from your specific catalog — not generic AI guesses.' },
            { step: '02', heading: 'Upload a call transcript', desc: "Paste or upload any transcript. Salency extracts pains, objections, competitors, and timelines — in the customer's own words, cited back to the source line." },
            { step: '03', heading: 'Get structured output', desc: 'Pain-to-product mappings, a full call recap, and a follow-up email draft — grounded in the actual conversation and scored for confidence on every insight.' },
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="text-[56px] md:text-[64px] font-bold text-accent-warm/8 font-mono leading-none -mb-3 select-none" aria-hidden="true">
                {item.step}
              </div>
              <h4 className="text-base font-bold text-white mb-2">{item.heading}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <p className="text-center text-sm text-gray-500 mb-16 max-w-xl mx-auto">
          Works with any transcript. Citations and confidence scores on every extraction.
        </p>
      </ScrollReveal>

      {/* ANTI-HYPE STRIP */}
      <ScrollReveal>
        <div className="max-w-3xl mx-auto pt-10 border-t border-white/5">
          <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-5 text-center">
            What Salency doesn&apos;t do
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-500">
            {[
              'Not a CRM replacement',
              'Not real-time call coaching',
              'No CRM integrations in V1',
              'Doesn\u2019t claim to close deals — captures the context so your reps can',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-gray-700 mt-0.5" aria-hidden>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </section>
  );
}

function GongComparisonSection() {
  return (
    <section className="py-16 md:py-20 px-6 bg-bg-secondary border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-sm font-bold tracking-widest text-accent-warm uppercase mb-3">Positioning</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The last mile Gong leaves unaddressed.</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Gong records everything. But a full transcript doesn&apos;t tell your CS director which product solves which pain, or give your new AE the context they need to pick up where someone left off.
            </p>
          </div>
        </ScrollReveal>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 pr-8 text-gray-500 font-medium w-1/2"></th>
                <th className="py-4 px-6 text-center text-gray-400 font-semibold">Gong</th>
                <th className="py-4 px-6 text-center text-white font-semibold">Salency</th>
              </tr>
            </thead>
            <tbody>
              {[
                { capability: 'Records calls', gong: true, salency: 'Works with any transcript' },
                { capability: 'Coaches reps in the moment', gong: true, salency: false },
                { capability: "Extracts pain in the customer's own words", gong: false, salency: true },
                { capability: 'Maps pain to your specific products', gong: false, salency: true },
                { capability: 'Generates context-aware follow-up drafts', gong: false, salency: true },
                { capability: 'Gives successors full account context', gong: false, salency: true },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 pr-8 text-gray-300">{row.capability}</td>
                  <td className="py-4 px-6 text-center">
                    {row.gong === true ? (
                      <span className="text-gray-400">✓</span>
                    ) : row.gong === false ? (
                      <span className="text-gray-700">—</span>
                    ) : (
                      <span className="text-gray-400 text-xs">{String(row.gong)}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.salency === true ? (
                      <span className="text-accent-warm font-semibold">✓</span>
                    ) : row.salency === false ? (
                      <span className="text-gray-700">—</span>
                    ) : (
                      <span className="text-accent-warm text-xs font-medium">{String(row.salency)}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
