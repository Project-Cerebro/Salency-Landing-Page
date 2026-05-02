export const HERO_ARTIFACT_MODAL_EVENT = 'open-hero-artifact-modal';

export interface HeroArtifactModalDetail {
  callId: string;
}

export function openHeroArtifactModal(callId: string) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent<HeroArtifactModalDetail>(HERO_ARTIFACT_MODAL_EVENT, {
      detail: { callId },
    }),
  );
}
