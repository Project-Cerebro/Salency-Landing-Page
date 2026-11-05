// Build-time invariant assertions for the synthetic arc.
// Imported once from the barrel so importing the arc anywhere
// guarantees the asserts run at module load.

import { HUDSON_TERRACE_ARC } from './arc';

if (HUDSON_TERRACE_ARC.length !== 3) {
  throw new Error(
    `HUDSON_TERRACE_ARC must have exactly 3 calls, got ${HUDSON_TERRACE_ARC.length}`,
  );
}

HUDSON_TERRACE_ARC.forEach((call) => {
  if (!call.quote || call.quote.trim().length === 0) {
    throw new Error(`Call ${call.id} missing required quote`);
  }
  if (!call.snippet.lines.length) {
    throw new Error(`Call ${call.id} missing snippet lines`);
  }
  if (
    call.snippet.highlightLineIndex < 0 ||
    call.snippet.highlightLineIndex >= call.snippet.lines.length
  ) {
    throw new Error(
      `Call ${call.id} highlightLineIndex ${call.snippet.highlightLineIndex} out of bounds for ${call.snippet.lines.length} lines`,
    );
  }
  if (call.confidence < 0 || call.confidence > 1) {
    throw new Error(`Call ${call.id} confidence ${call.confidence} not in [0,1]`);
  }
  if (call.matches) {
    for (const match of call.matches) {
      if (!match.product || match.product.trim().length === 0) {
        throw new Error(`Call ${call.id} has match with missing product name`);
      }
      if (!match.capability || match.capability.trim().length === 0) {
        throw new Error(
          `Call ${call.id} match "${match.product}" missing capability one-liner`,
        );
      }
    }
  }
});

export {};
