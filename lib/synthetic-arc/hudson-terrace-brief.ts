// Runtime data for the Day-1 Brief surface (HeroBrief on /).
//
// All hero-item quotes and citations resolve against HUDSON_TERRACE_ARC,
// so transcript-snippet expansions and modal openings stay verifiably
// tied to the synthetic transcripts shipped under Salency/synthetic-transcripts/.
// The brief is the single most load-bearing artifact (company-context §5),
// so condensed paraphrase rows here keep the call-id + lineIdx anchor that
// lets the inline expander pull the surrounding 2-3 sentences from arc.ts.
//
// Voice rules (company-context §2):
//   - No em dashes anywhere in user-visible strings.
//   - No banned phrases.
//   - Verbatim transcript text is wrapped in straight quotes when shown
//     as a hero "quote" item; paraphrased rows do NOT use quotes.

import { HUDSON_TERRACE_ARC } from './arc';
import type {
  BriefChangesBlock,
  BriefCommitmentsBlock,
  BriefMapBlock,
  BriefNeedsBlock,
  BriefNextBlock,
  BriefPeopleBlock,
} from './brief';

const CALL_001 = HUDSON_TERRACE_ARC[0];
const CALL_002 = HUDSON_TERRACE_ARC[1];
const CALL_003 = HUDSON_TERRACE_ARC[2];

// People — Daniel hero (lineIdx 4 = "[00:01:56] Daniel Voss: They yell at me...").
export const HUDSON_TERRACE_PEOPLE: BriefPeopleBlock = {
  hero: {
    callId: CALL_001.id,
    speakerName: 'Daniel Voss',
    speakerTitle: 'COO',
    displayDate: CALL_001.displayDate,
    citationTimestamp: '00:01:56',
    text: 'They yell at me. Not joking. Our head trader has literally said, in a Monday morning standup, "if I miss one more fill because of settlement, I\u2019m going to lose my mind."',
    stance: 'champion',
  },
  secondary: [
    { name: 'Priya Mehta', title: 'Head of Ops', stance: 'operational evaluator' },
    { name: 'Jordan Kim', title: 'CTO', stance: 'technical reviewer' },
  ],
};

// They need — pain hero is the verbatim 3-5s settlement delay line on Mar 09.
// Hero lineIdx 1 = "[00:01:28] Daniel Voss: ... three to five seconds...".
// Secondary rows are condensed citation rows; click expands to surrounding
// 2-3 sentences via the same callId.
export const HUDSON_TERRACE_NEEDS: BriefNeedsBlock = {
  hero: {
    callId: CALL_001.id,
    speakerName: 'Daniel Voss',
    speakerTitle: 'COO',
    displayDate: CALL_001.displayDate,
    citationTimestamp: '00:01:28',
    // Verbatim quote per spec — straight quotes preserved.
    text: '3 to 5 second settlement delays, killing us during volatility windows.',
  },
  secondary: [
    {
      callId: CALL_001.id,
      speakerName: 'Daniel Voss',
      speakerTitle: 'COO',
      displayDate: CALL_001.displayDate,
      citationTimestamp: '00:02:36',
      text: '90 min daily reconciliation across 4 venues',
    },
    {
      callId: CALL_002.id,
      speakerName: 'Daniel Voss',
      speakerTitle: 'COO',
      displayDate: CALL_002.displayDate,
      citationTimestamp: '00:07:07',
      text: 'MAS-recognized Singapore deployment by Q4',
    },
  ],
};

// We owe them — open commitments. No callId citations on this block,
// owners and due dates only (per spec block 03).
export const HUDSON_TERRACE_COMMITMENTS: BriefCommitmentsBlock = {
  hero: {
    item: 'SOC 2 Type II report',
    owner: 'Maya',
    due: 'owed since Mar 23',
    status: 'open',
  },
  secondary: [
    { item: 'Anchorage sandbox creds', owner: 'Raj', due: 'due Fri', status: 'open' },
    { item: 'Reference calls \u00d7 2', owner: 'Maya', due: 'due Fri', status: 'open' },
  ],
};

// What's changed — the contradiction-pair surface. Hero is the latency
// shift between Mar 09 and Apr 06. Secondary is the SOC 2 cadence shift.
export const HUDSON_TERRACE_CHANGES: BriefChangesBlock = {
  hero: {
    topic: 'Latency: blocker \u2192 resolved workaround',
    fromQuote: 'killing us during volatility',
    toQuote: 'gotten used to it',
    fromCall: CALL_001,
    toCall: CALL_003,
  },
  secondary: [
    {
      topic: 'SOC 2 cadence: annual \u2192 quarterly',
      fromCall: CALL_001,
      toCall: CALL_003,
    },
  ],
};

// How we map — pain to product matches drawn from arc.ts. Each row points
// at the call whose pain the match resolves, so click can drop into the
// transcript snippet for that pain.
export const HUDSON_TERRACE_MAP: BriefMapBlock = {
  rows: [
    {
      againstPainText: '3-5s settlement delays',
      match: {
        product: 'Atlas Settlement',
        capability: 'sub-second settlement',
        role: 'primary',
        confidence: 'high',
      },
    },
    {
      againstPainText: '90 min daily reconciliation',
      match: {
        product: 'Helix Recon',
        capability: 'multi-venue reconciliation',
        role: 'primary',
        confidence: 'high',
      },
    },
    {
      againstPainText: 'Singapore investor pressure',
      match: {
        product: 'Atlas Singapore',
        capability: 'MAS-recognized regional deployment',
        role: 'primary',
        confidence: 'medium',
      },
    },
  ],
};

// Next — milestone calendar. No call citations.
export const HUDSON_TERRACE_NEXT: BriefNextBlock = {
  items: [
    { date: 'Apr 18', text: 'MSA signature target' },
    { date: 'Apr 20', text: 'Kickoff call' },
    { date: 'May 1', text: 'Atlas Settlement Core live' },
    { date: 'May 15', text: 'Helix Recon rollout' },
  ],
};

/** Convenience export for HeroBrief — a single object holding all 6 blocks. */
export const HUDSON_TERRACE_BRIEF = {
  people: HUDSON_TERRACE_PEOPLE,
  needs: HUDSON_TERRACE_NEEDS,
  commitments: HUDSON_TERRACE_COMMITMENTS,
  changes: HUDSON_TERRACE_CHANGES,
  map: HUDSON_TERRACE_MAP,
  next: HUDSON_TERRACE_NEXT,
} as const;
