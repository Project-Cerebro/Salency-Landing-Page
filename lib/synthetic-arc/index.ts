// Barrel for the synthetic-arc module. Import from this entry point
// (or the `lib/synthetic-arc.ts` re-export) so all consumers get the
// build-time invariant assertions on first load.

export type {
  SignalType,
  CallType,
  MatchConfidence,
  SyntheticCallSpeaker,
  SyntheticCallSnippet,
  ProductMatch,
  SyntheticCall,
} from './types';

export type {
  BriefCitation,
  BriefPeopleBlock,
  BriefNeedsBlock,
  BriefCommitment,
  BriefCommitmentsBlock,
  BriefChange,
  BriefChangesBlock,
  BriefMapBlock,
  BriefNextItem,
  BriefNextBlock,
} from './brief';

export type {
  NotificationKind,
  ContradictionNotification,
  PipelineCompleteNotification,
  RecallNotification,
} from './notifications';

export {
  ACCOUNT_NAME,
  SYNTHETIC_LABEL,
  HUDSON_TERRACE_ARC,
  getCallById,
} from './arc';

export { getCallsBySignal, getContradictionPairs } from './signals';
export { getMatchesForCall, getAllMatches } from './matches';

// Side-effect import: runs the build-time invariant assertions on load.
import './invariants';
