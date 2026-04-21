'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type Variant = 'product' | 'investor';

function isActive(href: string, pathname: string): boolean {
  if (!href || href === '#' || href.startsWith('mailto:')) return false;
  if (href.startsWith('#')) return false;
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

interface MarketingHeaderProps {
  variant?: Variant;
}

export function MarketingHeader({ variant = 'product' }: MarketingHeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? '/';

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const isInvestor = variant === 'investor';

  const links = isInvestor
    ? [
        { href: '/', label: 'Product' },
        { href: '#platform', label: 'Platform' },
        { href: '#team', label: 'Team' },
        { href: '#thesis', label: 'Thesis' },
      ]
    : [
        { href: '#how-it-works', label: 'How it works' },
        { href: '#', label: 'Memory', badge: 'New' },
        { href: '#', label: 'vs AI notetakers' },
        { href: '/investor', label: 'Investors' },
        { href: '#', label: 'Pricing' },
      ];

  return (
    <header>
      <div className="nav">
        <a className="brand" href="/">
          <img src="/salency-mark.png" alt="" />
          <span className="name">Salency</span>
        </a>

        <nav className="links">
          {links.map((l) => {
            const active = isActive(l.href, pathname);
            return (
              <a
                key={l.label}
                href={l.href}
                className={active ? 'is-active' : undefined}
                aria-current={active ? 'page' : undefined}
              >
                {l.label}
                {'badge' in l && l.badge && <span className="new">{l.badge}</span>}
              </a>
            );
          })}
        </nav>

        <div className="nav-cta">
          {isInvestor ? (
            <>
              <a href="mailto:howard@salency.com" className="sign">
                Contact Howard
              </a>
              <a href="/" className="btn btn-ghost">
                ← Back to product
              </a>
            </>
          ) : (
            <>
              <a href="#" className="sign">
                Sign in
              </a>
              <button className="btn btn-primary">Request a pilot →</button>
            </>
          )}
        </div>

        <button
          type="button"
          className="nav-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? 'bar bar-1 is-open' : 'bar bar-1'} />
          <span className={open ? 'bar bar-2 is-open' : 'bar bar-2'} />
          <span className={open ? 'bar bar-3 is-open' : 'bar bar-3'} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={open ? 'nav-panel is-open' : 'nav-panel'}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        hidden={!open}
      >
        <nav className="nav-panel-links">
          {links.map((l) => {
            const active = isActive(l.href, pathname);
            return (
              <a
                key={l.label}
                href={l.href}
                className={active ? 'is-active' : undefined}
                aria-current={active ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
                {'badge' in l && l.badge && <span className="new">{l.badge}</span>}
              </a>
            );
          })}
        </nav>
        <div className="nav-panel-cta">
          {isInvestor ? (
            <>
              <a
                href="mailto:howard@salency.com"
                className="sign"
                onClick={() => setOpen(false)}
              >
                Contact Howard
              </a>
              <a
                href="/"
                className="btn btn-ghost"
                onClick={() => setOpen(false)}
              >
                ← Back to product
              </a>
            </>
          ) : (
            <>
              <a href="#" className="sign" onClick={() => setOpen(false)}>
                Sign in
              </a>
              <button
                className="btn btn-primary"
                onClick={() => setOpen(false)}
              >
                Request a pilot →
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
