'use client';

import dynamic from 'next/dynamic';

const HeroArtifactModal = dynamic(() => import('./HeroArtifactModal'), {
  ssr: false,
});

export function HeroArtifactModalLazy() {
  return <HeroArtifactModal />;
}
