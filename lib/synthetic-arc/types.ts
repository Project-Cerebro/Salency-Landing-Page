// Shared type definitions for the synthetic Hudson Terrace demo arc.
// PR 1 of Path D-Hybrid extracts these from the original monolithic
// lib/synthetic-arc.ts so PR 2 can grow brief/match/notification shapes
// without churning a 5x-larger single file (Eng E-3 finding).

export type SignalType = 'pain' | 'objection' | 'contradiction';

export type CallType = 'discovery' | 'technical' | 'pricing';

export type MatchConfidence = 'high' | 'medium' | 'low';

/** Tier labels the app shows for a product match (GLOSSARY.md:
 *  Confidence tier). The app cuts at 0.8 (Strong) and 0.5 (Probable). */
export const MATCH_TIER_LABEL: Record<MatchConfidence, string> = {
  high: 'Strong',
  medium: 'Probable',
  low: 'Speculative',
};

export interface SyntheticCallSpeaker {
  name: string;
  title: string;
}

export interface SyntheticCallSnippet {
  lines: string[];
  highlightLineIndex: number;
}

export interface ProductMatch {
  /** Anonymous catalog product name (Atlas / Helix / Vector / Anchor). */
  product: string;
  /** Short capability one-liner shown under the product name. */
  capability: string;
  role: 'primary' | 'secondary';
  confidence: MatchConfidence;
  note?: string;
}

export interface SyntheticCall {
  id: string;
  date: string;
  displayDate: string;
  callType: CallType;
  speaker: SyntheticCallSpeaker;
  quote: string;
  citationTimestamp: string;
  confidence: number;
  signal: SignalType;
  contradicts?: string;
  snippet: SyntheticCallSnippet;
  matches?: ProductMatch[];
}
