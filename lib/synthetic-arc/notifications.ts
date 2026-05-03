// Recall notification shapes — declared in PR 1 so the Stage 05 Recall
// surface can be built in PR 2 against a stable type contract.

import type { SyntheticCall } from './types';

export type NotificationKind = 'contradiction' | 'pipeline-complete';

export interface ContradictionNotification {
  kind: 'contradiction';
  account: string;
  topic: string;
  current: SyntheticCall;
  prior: SyntheticCall;
}

export interface PipelineCompleteNotification {
  kind: 'pipeline-complete';
  account: string;
  callsIndexed: number;
  signalsExtracted: number;
}

export type RecallNotification =
  | ContradictionNotification
  | PipelineCompleteNotification;
