// Pain → product match helpers. Used by the modal to render the matched
// products block, and (PR 2) by the Stage 03 Map for hover-driven swaps.

import { HUDSON_TERRACE_ARC } from './arc';
import type { ProductMatch, SyntheticCall } from './types';

export function getMatchesForCall(
  callId: string,
): readonly ProductMatch[] | undefined {
  const call = HUDSON_TERRACE_ARC.find((c) => c.id === callId);
  return call?.matches;
}

/**
 * All matches across the arc, flattened with the originating call attached.
 * PR 2's Stage 03 Map and Hero Brief Block 05 (How we map) consume this.
 */
export function getAllMatches(): ReadonlyArray<{
  call: SyntheticCall;
  match: ProductMatch;
}> {
  const out: Array<{ call: SyntheticCall; match: ProductMatch }> = [];
  for (const call of HUDSON_TERRACE_ARC) {
    if (!call.matches) continue;
    for (const match of call.matches) {
      out.push({ call, match });
    }
  }
  return out;
}
