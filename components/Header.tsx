'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 relative">
            <img src="/logo.png" alt="Cerebro Logo" className="object-contain w-full h-full" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white font-heading">Cerebro</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <a href="#team" className="hover:text-white transition-colors">Team</a>
          <a href="#pilot" className="hover:text-white transition-colors">Pilot Access</a>
        </nav>

        <a
          href="#pilot"
          className="hidden md:block bg-accent/90 hover:bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-lg shadow-accent/20"
        >
          Get Early Access
        </a>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {[
              { href: '#how-it-works', label: 'How it Works' },
              { href: '#team', label: 'Team' },
              { href: '#pilot', label: 'Pilot Access' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-3 border-b border-white/5 last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#pilot"
              className="mt-3 bg-accent/90 hover:bg-accent text-white px-5 py-3 rounded-lg text-sm font-medium transition-all text-center"
              onClick={() => setMobileOpen(false)}
            >
              Get Early Access
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
