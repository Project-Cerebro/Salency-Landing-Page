'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { Zap, ChevronDown, Sparkles, AlertCircle, Copy, Check } from 'lucide-react';
import { track } from '@vercel/analytics';
import { openPilotModal } from '@/components/PilotModal';

const SAMPLE_TRANSCRIPTS = [
  {
    label: 'Discovery Call — SaaS Procurement',
    text: `Rep: Can you walk me through the biggest pain points your team faces today?

Customer: Honestly, the biggest issue is that we lose track of what customers need after the call ends. My reps take notes, but they're inconsistent. Half the time the follow-up email misses the key problems. We had a customer bring up a renewal timeline — said their budget opens in Q3 — and nobody followed up. That deal just died.

Rep: Got it. And when you onboard new reps, how do they ramp on existing accounts?

Customer: They don't, really. They start from scratch. The CRM has some notes but nothing structured. It takes 2-3 months before a new rep knows the account well enough to have a real conversation. We lose deals in that gap.

Rep: Are you using any tools for this currently?

Customer: We have Gong for recording, but it's really a recording tool. It doesn't tell us what problems map to what products. We need something that connects the dots.`,
  },
  {
    label: 'CS Handoff — Enterprise Renewal',
    text: `CS Lead: We're taking over this account from the sales team. Can you give me the context?

Account Exec: Sure. The customer mentioned three things in our last call. First, their team hates the manual reporting — they said they spend 4 hours a week building reports that should be automated. Second, they want an API integration with Salesforce, which we don't have yet but it's on the roadmap for Q2. Third, their VP of Ops mentioned they're evaluating competitors — specifically mentioned Clari and InsightSquared.

CS Lead: Is any of this in the CRM?

Account Exec: The Salesforce ask is in there. The competitor mention and the reporting pain — I think I put it in a Google Doc somewhere. Let me find it...`,
  },
];

interface ExtractedPain {
  pain: string;
  source: string;
  confidence: number;
  product_mapping: string;
}

const SIMULATED_RESULTS: Record<number, ExtractedPain[]> = {
  0: [
    { pain: 'Lose track of customer needs after calls end', source: '"we lose track of what customers need after the call ends"', confidence: 0.95, product_mapping: 'Pain-to-Product Mapping — auto-structures post-call context' },
    { pain: 'Inconsistent rep notes; follow-ups miss key problems', source: '"reps take notes, but they\'re inconsistent. Half the time the follow-up email misses the key problems"', confidence: 0.92, product_mapping: 'Follow-up Email Draft — grounded in actual call content' },
    { pain: 'Missed renewal timeline (Q3 budget cycle)', source: '"said their budget opens in Q3 — and nobody followed up"', confidence: 0.89, product_mapping: 'Timeline Extraction — tags date-sensitive context for re-engagement' },
    { pain: 'New reps start from scratch; 2-3 month ramp', source: '"They start from scratch... takes 2-3 months before a new rep knows the account"', confidence: 0.94, product_mapping: 'Account Context History — structured handoff for successor reps' },
    { pain: 'Gong records but doesn\'t connect problems to products', source: '"doesn\'t tell us what problems map to what products"', confidence: 0.91, product_mapping: 'Core Value Prop — extract + map to your catalog' },
  ],
  1: [
    { pain: 'Manual reporting wastes 4 hours/week', source: '"they spend 4 hours a week building reports that should be automated"', confidence: 0.93, product_mapping: 'Pain Extraction — captures specific time/cost impact for upsell' },
    { pain: 'Salesforce API integration needed (roadmap Q2)', source: '"they want an API integration with Salesforce... on the roadmap for Q2"', confidence: 0.88, product_mapping: 'Product Mapping — links customer ask to roadmap item' },
    { pain: 'Competitor evaluation: Clari and InsightSquared', source: '"evaluating competitors — specifically mentioned Clari and InsightSquared"', confidence: 0.96, product_mapping: 'Competitor Mention Extraction — flags competitive risk' },
    { pain: 'Critical context lost in Google Docs, not CRM', source: '"I think I put it in a Google Doc somewhere"', confidence: 0.91, product_mapping: 'Structured Output — ensures nothing lives in unstructured docs' },
  ],
};

const CUSTOM_RESULTS: ExtractedPain[] = [
  { pain: 'Customer pain point identified', source: '(extracted from your transcript)', confidence: 0.88, product_mapping: 'Pain-to-Product Mapping' },
  { pain: 'Follow-up action required', source: '(extracted from your transcript)', confidence: 0.85, product_mapping: 'Follow-up Email Draft' },
  { pain: 'Timeline or deadline mentioned', source: '(extracted from your transcript)', confidence: 0.82, product_mapping: 'Timeline Extraction' },
];

type DemoState = 'idle' | 'processing' | 'done';

export function InteractiveDemo() {
  const [state, setState] = useState<DemoState>('idle');
  const [inputMode, setInputMode] = useState<'sample' | 'paste'>('sample');
  const [selectedSample, setSelectedSample] = useState(0);
  const [customText, setCustomText] = useState('');
  const [results, setResults] = useState<ExtractedPain[]>([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  const processTranscript = useCallback(() => {
    setState('processing');
    track('demo_interact');

    const targetResults = inputMode === 'sample'
      ? (SIMULATED_RESULTS[selectedSample] || SIMULATED_RESULTS[0])
      : CUSTOM_RESULTS;

    setResults(targetResults);
    setVisibleCount(0);

    let count = 0;
    intervalRef.current = setInterval(() => {
      count++;
      setVisibleCount(count);
      if (count >= targetResults.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setState('done');
        track('demo_complete');
      }
    }, 600);
  }, [inputMode, selectedSample]);

  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setState('idle');
    setResults([]);
    setVisibleCount(0);
    setCustomText('');
  };

  const handleCopyResults = () => {
    const text = results
      .map((r, i) => `${i + 1}. ${r.pain}\n   Source: ${r.source}\n   Maps to: ${r.product_mapping}\n   Confidence: ${Math.round(r.confidence * 100)}%`)
      .join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const truncatedCustomText = customText.length > 10000 ? customText.slice(0, 10000) : customText;

  return (
    <div className="mt-16 max-w-4xl mx-auto">
      <div className="bg-white/[0.02] rounded-2xl border border-white/10 overflow-hidden">
        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent-warm" />
            <span className="text-sm font-semibold text-white">Try Salency</span>
          </div>
          {state !== 'idle' && (
            <button onClick={reset} className="text-xs text-gray-500 hover:text-white transition-colors">
              Reset
            </button>
          )}
        </div>

        {state === 'idle' && (
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setInputMode('sample')}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                  inputMode === 'sample'
                    ? 'bg-accent-warm/10 border-accent-warm/30 text-accent-warm'
                    : 'border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                Use a sample
              </button>
              <button
                onClick={() => setInputMode('paste')}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                  inputMode === 'paste'
                    ? 'bg-accent-warm/10 border-accent-warm/30 text-accent-warm'
                    : 'border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                Paste your own
              </button>
            </div>

            {inputMode === 'sample' ? (
              <div className="space-y-3">
                {SAMPLE_TRANSCRIPTS.map((sample, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedSample(i)}
                    className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ${
                      selectedSample === i
                        ? 'bg-accent-warm/5 border-accent-warm/20 text-white'
                        : 'border-white/5 text-gray-400 hover:border-white/10'
                    }`}
                  >
                    <span className="font-medium">{sample.label}</span>
                    <ChevronDown
                      className={`inline-block ml-2 w-3 h-3 transition-transform ${
                        selectedSample === i ? 'rotate-180' : ''
                      }`}
                    />
                    {selectedSample === i && (
                      <p className="mt-2 text-xs text-gray-500 line-clamp-3 leading-relaxed">
                        {sample.text.slice(0, 200)}...
                      </p>
                    )}
                  </button>
                ))}
              </div>
            ) : (
              <div>
                <textarea
                  value={truncatedCustomText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="Paste a call transcript here to see what Salency extracts..."
                  className="w-full h-32 bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-accent-warm/30 resize-none transition-colors"
                />
                {customText.length > 10000 && (
                  <div className="flex items-center gap-1.5 mt-1.5 text-yellow-400/80 text-xs">
                    <AlertCircle className="w-3 h-3" />
                    <span>Truncated to 10,000 characters for demo</span>
                  </div>
                )}
              </div>
            )}

            <button
              onClick={processTranscript}
              disabled={inputMode === 'paste' && customText.trim().length === 0}
              className="mt-4 w-full bg-accent-warm hover:brightness-110 text-background font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-[color,background-color,filter,opacity] duration-200 shadow-[0_0_15px_rgba(232,146,90,0.2)]"
            >
              <Zap className="w-4 h-4" />
              Extract Pain Points
            </button>
          </div>
        )}

        {(state === 'processing' || state === 'done') && (
          <div className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs text-gray-500">
                {state === 'processing' ? 'Extracting...' : `${results.length} pain points extracted`}
              </span>
              {state === 'done' && (
                <button
                  onClick={handleCopyResults}
                  className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              )}
            </div>

            <div className="space-y-3">
              {results.slice(0, visibleCount).map((result, i) => (
                <div
                  key={i}
                  className="bg-white/[0.03] border border-white/5 rounded-lg p-4 animate-in fade-in slide-in-from-bottom-2 duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white">{result.pain}</p>
                      <p className="text-xs text-gray-500 mt-1 italic truncate">{result.source}</p>
                    </div>
                    <span className={`text-xs font-mono shrink-0 px-2 py-0.5 rounded ${
                      result.confidence >= 0.9
                        ? 'bg-green-500/10 text-green-400'
                        : 'bg-yellow-500/10 text-yellow-400'
                    }`}>
                      {Math.round(result.confidence * 100)}%
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="text-[10px] text-accent-warm/60 uppercase tracking-wider">Maps to</span>
                    <span className="text-xs text-accent-warm">{result.product_mapping}</span>
                  </div>
                </div>
              ))}

              {state === 'processing' && (
                <div className="flex items-center gap-2 px-4 py-3">
                  <div className="w-2 h-2 rounded-full bg-accent-warm animate-pulse" />
                  <span className="text-xs text-gray-500">Analyzing transcript...</span>
                </div>
              )}
            </div>

            {state === 'done' && (
              <div className="mt-6 pt-4 border-t border-white/5 text-center">
                <p className="text-sm text-gray-400 mb-3">
                  Want to see this on your own calls?
                </p>
                <button
                  type="button"
                  onClick={() => openPilotModal()}
                  className="inline-flex items-center bg-accent-warm/10 hover:bg-accent-warm/20 text-accent-warm font-semibold px-5 py-2.5 rounded-lg text-sm border border-accent-warm/20 transition-colors"
                >
                  Start Your Free Pilot
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
