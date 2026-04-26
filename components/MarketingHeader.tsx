'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { openPilotModal } from '@/components/PilotModal';

type NavLink = {
  label: string;
  href: string;
  badge?: string;
};

const links: NavLink[] = [
  { label: 'Products', href: '/' },
  { label: 'Why Salency', href: '/why-salency' },
  { label: 'Memory', href: '/memory' },
  { label: 'Our story', href: '/our-story' },
  { label: 'Investors', href: '/investors' },
  { label: 'Pricing', href: '/pricing' },
];

function isActive(href: string, pathname: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

export function MarketingHeader() {
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

  const renderLink = (l: NavLink, onClick?: () => void) => {
    const active = isActive(l.href, pathname);
    return (
      <Link
        key={l.label}
        href={l.href}
        className={active ? 'is-active' : undefined}
        aria-current={active ? 'page' : undefined}
        onClick={onClick}
      >
        {l.label}
        {l.badge && <span className="new">{l.badge}</span>}
      </Link>
    );
  };

  return (
    <header>
      <div className="nav">
        <Link className="brand" href="/">
          <img src="/salency-mark.svg" alt="" />
          <span className="name">Salency</span>
        </Link>

        <nav className="links">{links.map((l) => renderLink(l))}</nav>

        <div className="nav-cta">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => openPilotModal()}
          >
            Request a pilot →
          </button>
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
          {links.map((l) => renderLink(l, () => setOpen(false)))}
        </nav>
        <div className="nav-panel-cta">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setOpen(false);
              openPilotModal();
            }}
          >
            Request a pilot →
          </button>
        </div>
      </div>
    </header>
  );
}
