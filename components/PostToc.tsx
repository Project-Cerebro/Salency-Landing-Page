'use client';

import { useEffect, useState } from 'react';

export interface PostTocSection {
  id: string;
  title: string;
}

interface Props {
  sections: PostTocSection[];
}

export function PostToc({ sections }: Props) {
  const [activeId, setActiveId] = useState<string | null>(sections[0]?.id ?? null);

  useEffect(() => {
    if (typeof window === 'undefined' || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
  };

  return (
    <nav className="post-toc" aria-label="On this page">
      <span className="post-toc-eb">On this page</span>
      <ol>
        {sections.map(({ id, title }) => (
          <li key={id} className={activeId === id ? 'is-active' : undefined}>
            <a href={`#${id}`} onClick={(e) => handleClick(e, id)}>
              {title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
