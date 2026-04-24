'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`;
    }

    // If the element is already in viewport at mount, reveal it immediately.
    // IntersectionObserver's first callback is async and can race with initial
    // paint. On pages that wrap the whole body in a single ScrollReveal
    // (e.g. /investors), the observer sometimes doesn't fire until a scroll
    // event wakes it up, leaving content stuck at opacity: 0.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
}
