'use client';

import dynamic from 'next/dynamic';

const TranscriptSnippetModal = dynamic(
  () => import('./TranscriptSnippetModal'),
  { ssr: false },
);

export function TranscriptSnippetModalLazy() {
  return <TranscriptSnippetModal />;
}
