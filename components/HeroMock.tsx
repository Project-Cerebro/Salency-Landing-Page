'use client';

import { useState } from 'react';
import {
  ExternalLink,
  Calendar,
  Users,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Swords,
  ListChecks,
  FileText,
  MessageSquareWarning,
} from 'lucide-react';

type Tab = 'summary' | 'painpoints' | 'objections' | 'requirements' | 'competitors' | 'transcript';

const painPoints = [
  {
    pain: "All onboarding is ad hoc \u2014 managed in Priya\u2019s head",
    urgency: 'high' as const,
    mappedSolution: 'Workflow Builder + Templates',
    strategyLabel: 'Systematise',
    rationale: "Priya is the process \u2014 that\u2019s a founder bottleneck. Lead with Workflow Builder: build the playbook once, every customer runs on it. Frame it as buying her time back. This is what closes the deal.",
  },
  {
    pain: 'No visibility across concurrent onboardings',
    urgency: 'high' as const,
    mappedSolution: 'CSM Dashboard + Reminders',
    strategyLabel: 'Centralise',
    rationale: "A near-miss kickoff is a near-miss churn event. Push hard: \u2018You got lucky last month. At 50 customers this breaks completely. The dashboard makes sure nothing falls through \u2014 ever.\u2019",
  },
  {
    pain: '4+ hrs/week on manual status update emails',
    urgency: 'medium' as const,
    mappedSolution: 'Client Portal',
    strategyLabel: 'Eliminate',
    rationale: "Easiest ROI on the call. Do the math out loud: 4 hrs \u00d7 50 weeks = 200 hrs/year on emails clients could self-serve in seconds. The portal sells itself once you frame the cost.",
  },
  {
    pain: "No handoff process \u2014 onboardings stall if Priya is out",
    urgency: 'medium' as const,
    mappedSolution: 'Task Ownership',
    strategyLabel: 'De-risk',
    rationale: "Name it directly: single point of failure. If Priya\u2019s out for a week, onboardings stop. Every step gets an owner and context \u2014 anyone picks it up cold. \u2018Your bus factor is one. That\u2019s not sustainable.\u2019",
  },
];

const tabs: { id: Tab; label: string; count?: number; icon?: typeof Swords }[] = [
  { id: 'summary', label: 'Summary' },
  { id: 'painpoints', label: 'Pain Points', count: 4 },
  { id: 'objections', label: 'Objections', count: 2, icon: MessageSquareWarning },
  { id: 'requirements', label: 'Requirements', count: 3 },
  { id: 'competitors', label: 'Competitors', count: 3, icon: Swords },
  { id: 'transcript', label: 'Transcript', icon: FileText },
];

const urgencyStyles = {
  high: { text: 'text-red-600', badge: 'bg-red-500 text-white', label: 'High' },
  medium: { text: 'text-amber-600', badge: 'bg-amber-500 text-white', label: 'Medium' },
} as const;

export function HeroMock() {
  const [activeTab, setActiveTab] = useState<Tab>('painpoints');
  const [expandedRow, setExpandedRow] = useState<number | null>(1);

  return (
    <div className="mt-16 md:mt-20 relative text-left">
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/8 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 bg-white rounded-2xl shadow-2xl shadow-black/25 border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="px-5 md:px-8 pt-5 md:pt-7 pb-3 md:pb-4">
            <div className="flex items-center gap-2 text-sm mb-0.5">
              <span className="font-semibold text-gray-900">Latchkey IO</span>
              <span className="text-gray-400">&middot;</span>
              <span className="flex items-center gap-1 text-blue-600 text-xs">
                <ExternalLink size={11} />
                latchkey.io
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 tracking-tight">Discovery Call</h3>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs md:text-sm text-gray-500 mb-1.5">
              <span className="bg-blue-100 text-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-widest">Latest</span>
              <span className="flex items-center gap-1 text-blue-600">
                <Calendar size={12} />
                January 14, 2026
              </span>
              <span className="text-gray-300">&middot;</span>
              <span>~40 minutes</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs md:text-sm text-gray-500 mb-1.5">
              <Users size={13} className="text-gray-400 shrink-0" />
              <span>Priya Nair (CEO/Founder), Tomas Vasek (CTO)</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs md:text-sm text-gray-500">
              <Sparkles size={12} className="text-blue-500 shrink-0" />
              <span className="underline decoration-gray-300 cursor-pointer">Meeting transcript</span>
              <span className="text-gray-300">&middot;</span>
              <span>Auto-extracted</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-0 px-5 md:px-8 border-b border-gray-200 text-sm overflow-x-auto scrollbar-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 py-2.5 px-3 md:px-4 font-medium border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-gray-900 font-semibold'
                      : 'border-transparent text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {Icon && <Icon size={13} />}
                  {tab.label}
                  {tab.count != null && (
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full leading-none ${
                      activeTab === tab.id && tab.id === 'painpoints'
                        ? 'bg-red-100 text-red-600'
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="relative">
            <div className="px-5 md:px-8 py-5">

              {/* Summary Tab */}
              {activeTab === 'summary' && (
                <div className="space-y-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Founder-led onboarding with zero process, no visibility, and no handoff structure. Strong buying signals &mdash; this deal closes fast if the demo lands.
                  </p>
                  <ul className="text-sm text-gray-700 leading-relaxed space-y-1.5">
                    <li className="flex gap-2.5"><span className="text-gray-400 font-bold shrink-0">&bull;</span>Workflow builder and client portal got the strongest reactions</li>
                    <li className="flex gap-2.5"><span className="text-gray-400 font-bold shrink-0">&bull;</span>Pricing (~$400/mo) landed well &mdash; no hard objections raised</li>
                    <li className="flex gap-2.5"><span className="text-gray-400 font-bold shrink-0">&bull;</span>Previously tried Notion (too messy) and Monday.com (overkill)</li>
                  </ul>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="border-b border-gray-200 py-2 px-4 flex items-center gap-2 bg-gray-50">
                      <ListChecks size={14} className="text-blue-600" />
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-500">Next Tasks</span>
                    </div>
                    <div className="px-4 py-3 space-y-2.5">
                      {[
                        { text: 'Send recap email + product one-pager', due: 'by Jan 17, 2026' },
                        { text: 'Book demo \u2014 client portal & workflow builder' },
                        { text: 'Confirm white-label portal interest with Priya' },
                      ].map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded border border-gray-300 shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">
                            {step.text}
                            {step.due && <span className="ml-1.5 text-xs font-mono text-red-500 font-medium">{step.due}</span>}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Pain Points Tab */}
              {activeTab === 'painpoints' && (
                <div className="-mx-5 md:-mx-8 -my-5 px-5 md:px-8">
                  <div className="hidden md:grid grid-cols-[1fr_auto_auto] items-center py-3 border-b border-gray-200 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                    <span>Pain Point</span>
                    <span className="w-64 text-right">Mapped Solution</span>
                    <span className="w-24 text-right">Urgency</span>
                  </div>
                  {painPoints.map((point, i) => {
                    const style = urgencyStyles[point.urgency];
                    const isExpanded = expandedRow === i;
                    return (
                      <div key={i} className="border-b border-gray-100 last:border-b-0">
                        <div
                          className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_auto] items-center py-3.5 cursor-pointer hover:bg-gray-50 transition-colors"
                          onClick={() => setExpandedRow(isExpanded ? null : i)}
                        >
                          <span className={`text-sm ${style.text}`}>{point.pain}</span>
                          <span className="hidden md:flex items-center gap-1.5 w-64 justify-end text-[10px] font-semibold text-gray-500 uppercase tracking-widest">
                            {point.mappedSolution}
                            {isExpanded
                              ? <ChevronUp size={14} className="text-gray-400" />
                              : <ChevronDown size={14} className="text-gray-400" />
                            }
                          </span>
                          <span className="w-24 flex justify-end">
                            <span className={`text-[10px] uppercase tracking-widest font-semibold rounded px-2 py-0.5 ${style.badge}`}>{style.label}</span>
                          </span>
                        </div>
                        {isExpanded && (
                          <div className="pb-4 pl-4 pr-4 md:pr-8">
                            <div className="bg-gray-50 rounded-lg px-4 py-3">
                              <span className="text-[10px] uppercase tracking-widest font-semibold text-green-600 mb-1.5 block">Suggested Response</span>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                <span className="inline-flex items-center text-[10px] uppercase tracking-widest font-semibold text-blue-600 border border-blue-600 rounded px-1.5 py-0.5 mr-1.5 align-middle">{point.strategyLabel}</span>
                                {point.rationale}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                  <div className="h-3" />
                </div>
              )}

              {/* Objections Tab — compact table preview */}
              {activeTab === 'objections' && (
                <div className="border border-gray-200 rounded-lg overflow-hidden divide-y divide-gray-100">
                  {[
                    { title: 'Tool built for teams their size (~6 people)?', urgency: 'Medium' as const, response: 'Re-emphasise Growth plan \u2014 built for SMBs, show case studies' },
                    { title: 'Implementation timeline concerns', urgency: 'Low' as const, response: 'Confirm 1\u20132 week timeline in writing, offer onboarding call' },
                  ].map((obj, i) => (
                    <div key={i} className="px-4 py-3 flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-900 mb-1">{obj.title}</p>
                        <p className="text-sm text-gray-500 leading-relaxed">{obj.response}</p>
                      </div>
                      <span className={`text-[10px] uppercase tracking-widest font-semibold rounded px-2 py-0.5 shrink-0 mt-0.5 ${
                        obj.urgency === 'Medium' ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-500'
                      }`}>{obj.urgency}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Requirements Tab — compact list preview */}
              {activeTab === 'requirements' && (
                <div className="border border-gray-200 rounded-lg overflow-hidden divide-y divide-gray-100">
                  {[
                    { name: 'Jira Integration', status: 'Confirmed', color: 'bg-blue-600 text-white' },
                    { name: 'White-Label Portal', status: 'Next Steps', color: 'bg-amber-500 text-white' },
                    { name: 'Compliance / Security', status: 'Not Raised', color: 'bg-gray-200 text-gray-500' },
                  ].map((req, i) => (
                    <div key={i} className="px-4 py-3 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">{req.name}</span>
                      <span className={`text-xs font-semibold rounded-full px-2.5 py-0.5 ${req.color}`}>{req.status}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Competitors Tab — compact list preview */}
              {activeTab === 'competitors' && (
                <div className="border border-gray-200 rounded-lg overflow-hidden divide-y divide-gray-100">
                  {[
                    { name: 'Notion', quote: 'turned into a mess of pages', status: 'Rejected' },
                    { name: 'Monday.com', quote: 'felt like overkill', status: 'Rejected' },
                    { name: 'Manual (email + spreadsheet)', quote: null, status: 'Current' },
                  ].map((comp, i) => (
                    <div key={i} className="px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Swords size={14} className="text-gray-400 shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{comp.name}</p>
                          {comp.quote && <p className="text-xs text-gray-400 italic">&ldquo;{comp.quote}&rdquo;</p>}
                        </div>
                      </div>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
                        comp.status === 'Current' ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-500'
                      }`}>{comp.status}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Transcript Tab — highlighted excerpts with fade */}
              {activeTab === 'transcript' && (
                <div className="relative">
                  <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                    <p>
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 mr-2">Priya Nair</span>
                      &ldquo;every new customer is kind of its own project and I&apos;m just managing it in my head&rdquo;
                    </p>
                    <p>
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 mr-2">Priya Nair</span>
                      &ldquo;last month I had three onboardings happening at once and I almost missed a kickoff call&rdquo;
                    </p>
                    <p>
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 mr-2">Priya Nair</span>
                      &ldquo;I spent probably 4 hours last week just writing status update emails&rdquo;
                    </p>
                    <p>
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 mr-2">Tomas Vasek</span>
                      Asked about Jira integration, bidirectional sync
                    </p>
                    <p className="text-gray-400 italic">
                      &ldquo;wait, so the client can actually see their own progress?&rdquo;
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom fade gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
