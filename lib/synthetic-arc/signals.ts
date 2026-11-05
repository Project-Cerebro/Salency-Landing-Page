// Signal helpers — pain / objection / contradiction extraction surface.
// PR 1: thin module with derived views over HUDSON_TERRACE_ARC. PR 2 will
// expand this to back the Stage 03 Map and Stage 05 Recall surfaces.

import { HUDSON_TERRACE_ARC } from './arc';
import type { SignalType, SyntheticCall } from './types';

export function getCallsBySignal(
  signal: SignalType,
): readonly SyntheticCall[] {
  return HUDSON_TERRACE_ARC.filter((c) => c.signal === signal);
}

export function getContradictionPairs(): ReadonlyArray<{
  current: SyntheticCall;
  prior: SyntheticCall;
}> {
  const pairs: Array<{ current: SyntheticCall; prior: SyntheticCall }> = [];
  for (const call of HUDSON_TERRACE_ARC) {
    if (call.signal !== 'contradiction' || !call.contradicts) continue;
    const prior = HUDSON_TERRACE_ARC.find((c) => c.id === call.contradicts);
    if (prior) pairs.push({ current: call, prior });
  }
  return pairs;
}
