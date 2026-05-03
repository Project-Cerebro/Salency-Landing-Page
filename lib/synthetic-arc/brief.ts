// Day-1 Brief shape — declared in PR 1 so the type slots exist when
// PR 2 builds HeroBrief / TranscriptSnippetModal's transcript+matches mode.
// No runtime data here yet; arc-derived helpers live alongside the call data.

import type { ProductMatch, SyntheticCall } from './types';

/** A cited line from a call, used as a hero item or secondary row. */
export interface BriefCitation {
  callId: string;
  speakerName: string;
  speakerTitle?: string;
  displayDate: string;
  citationTimestamp: string;
  /** Verbatim quote or short summary line. */
  text: string;
}

/** People block — champion + secondary stakeholders. */
export interface BriefPeopleBlock {
  hero: BriefCitation & { stance?: string };
  secondary: ReadonlyArray<{
    name: string;
    title: string;
    stance?: string;
  }>;
}

/** "They need" block — verbatim pain hero + secondary pain rows. */
export interface BriefNeedsBlock {
  hero: BriefCitation;
  secondary: readonly BriefCitation[];
}

/** "We owe them" block — open commitments. */
export interface BriefCommitment {
  item: string;
  owner?: string;
  due?: string;
  status: 'open' | 'closed';
}

export interface BriefCommitmentsBlock {
  hero: BriefCommitment;
  secondary: readonly BriefCommitment[];
}

/** "What's changed" block — contradiction or shift between calls. */
export interface BriefChange {
  topic: string;
  fromQuote?: string;
  toQuote?: string;
  fromCall?: SyntheticCall;
  toCall?: SyntheticCall;
}

export interface BriefChangesBlock {
  hero: BriefChange;
  secondary: readonly BriefChange[];
}

/** "How we map" block — pain → product matches. */
export interface BriefMapBlock {
  rows: ReadonlyArray<{
    match: ProductMatch;
    againstPainText: string;
  }>;
}

/** "Next" block — upcoming milestones. */
export interface BriefNextItem {
  date: string;
  text: string;
}

export interface BriefNextBlock {
  items: readonly BriefNextItem[];
}
