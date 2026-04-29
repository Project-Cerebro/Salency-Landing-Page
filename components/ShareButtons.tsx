'use client';

import { useState } from 'react';

interface Props {
  url: string;
  title: string;
}

export function ShareButtons({ url, title }: Props) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const twitterHref = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="post-share" aria-label="Share">
      <span className="post-share-label">Share</span>
      <a
        className="post-share-btn"
        href={twitterHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter ↗
      </a>
      <a
        className="post-share-btn"
        href={linkedinHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn ↗
      </a>
      <button
        type="button"
        className="post-share-btn"
        onClick={handleCopy}
        aria-live="polite"
      >
        {copied ? 'Copied' : 'Copy link'}
      </button>
    </div>
  );
}
