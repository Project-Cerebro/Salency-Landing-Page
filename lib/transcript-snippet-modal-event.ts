// Modal event contract for TranscriptSnippetModal.
//
// Renamed from HERO_ARTIFACT_MODAL_EVENT in PR 1 of Path D-Hybrid so the
// same modal can serve all 4 transcript-snippet surfaces in PR 2:
//   1. Hero brief citation expansion
//   2. Stage 03 Map "See the mapping engine" CTA
//   3. Stage 05 Recall contradiction "See full transcript"
//   4. /memory HeroArtifact card click (PR 1 entry point — already wired)
//
// PR 1 only consumes the transcript-only mode (`callId` + optional
// `lineIdx`). The `matches` and `contradicts` slots are typed-but-unused
// pass-throughs so PR 2 can populate them without a breaking change.

import type { ProductMatch } from './synthetic-arc';

export const TRANSCRIPT_SNIPPET_MODAL_EVENT = 'open-transcript-snippet-modal';

/**
 * Optional contradiction-pair payload. PR 2's Stage 05 Recall populates
 * this so the modal can render the diff view alongside the transcript.
 */
export interface TranscriptSnippetContradictsPayload {
  priorCallId: string;
  /** Optional inline diff annotation, e.g. "blocker → resolved workaround". */
  delta?: string;
}

export interface TranscriptSnippetModalDetail {
  /** Required — which call's transcript to show. */
  callId: string;
  /** Optional — line index to highlight; defaults to the call's snippet highlightLineIndex. */
  lineIdx?: number;
  /** Optional — render a matched-products block alongside the snippet. */
  matches?: readonly ProductMatch[];
  /** Optional — render a contradiction diff alongside the snippet. */
  contradicts?: TranscriptSnippetContradictsPayload;
}

export function openTranscriptSnippetModal(
  callIdOrDetail: string | TranscriptSnippetModalDetail,
) {
  if (typeof window === 'undefined') return;
  const detail: TranscriptSnippetModalDetail =
    typeof callIdOrDetail === 'string'
      ? { callId: callIdOrDetail }
      : callIdOrDetail;
  window.dispatchEvent(
    new CustomEvent<TranscriptSnippetModalDetail>(
      TRANSCRIPT_SNIPPET_MODAL_EVENT,
      { detail },
    ),
  );
}
