# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Run production server
```

No test suite is configured. There is no single-test command.

## Environment Setup

Requires a `.env.local` file with:
```
RESEND_API_KEY=your_key_here
```

## Architecture

Single-page marketing/landing site built with **Next.js 16 App Router**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

### Key files

- `app/page.tsx` — Entire landing page. All content sections are inline: Header, Hero, HeroMock, Problem, Solution, Gong Comparison, Results, Team, Pilot CTA, Footer.
- `app/layout.tsx` — Root layout; loads Geist Sans, Geist Mono, and Outfit from Google Fonts.
- `app/globals.css` — Theme tokens (CSS vars), custom utility classes, scroll-reveal animations, and all keyframe animations.
- `app/api/send/route.ts` — Single POST endpoint for pilot signup form. Validates with Zod, checks honeypot, and sends two emails via Resend (admin notification + user confirmation).
- `components/EmailForm.tsx` — Client component using React Hook Form. Includes a hidden honeypot `website` field for bot detection. Posts to `/api/send`.
- `components/Header.tsx` — Responsive header with mobile hamburger menu and "Get Early Access" CTA.
- `components/HeroMock.tsx` — Interactive replica of Cerebro's product UI with tabbed views (Transcript, Pains, Objections, etc.).
- `components/ScrollReveal.tsx` — Client component using IntersectionObserver for scroll-triggered fade-in animations. Respects `prefers-reduced-motion`.
- `components/SpotlightCard.tsx` — Client component wrapping cards with a mouse-tracking radial gradient spotlight effect.
- `components/ProblemCard.tsx` — Presentational wrapper around `SpotlightCard`.

### Styling conventions

- **Tailwind CSS v4** — No `tailwind.config.ts`; theme is defined via `@theme` blocks inside `globals.css`.
- Theme colors are CSS variables: `--accent: #06b6d4` (cyan), `--v-bg: #0a1219`, `--v-text: #EDEDED`.
- Dark theme throughout. All accent colors reference the CSS vars.
- Custom animation classes in `globals.css` are applied as plain class names (e.g., `animate-in`, `delay-100`, `breathe`, `float-card`).
- `ScrollReveal` wraps below-fold sections for scroll-triggered fade-in animations.
- Explicit `transition-property` lists instead of `transition-all` for performance.

### Design system

- See `DESIGN.md` for the full proposed design system with competitive research, color/type tokens, SAFE/RISK classification, and implementation sequence.
- See `.gstack/design-reports/design-preview.html` for a live preview (open in browser, toggle dark/light mode).
- Current system uses cyan (`#06b6d4`) as sole accent. Proposed system adds warm copper (`#E8925A`) for CTAs and Instrument Serif for hero headlines.

### Data flow

- No database. Form submissions go directly to Resend via the `/api/send` route.
- The admin recipient email in `route.ts` is currently `delivered@resend.dev` (a Resend sandbox address) — update to a real address before production.

### Component model

- Server Components by default. `EmailForm`, `SpotlightCard`, `Header`, `HeroMock`, and `ScrollReveal` are `'use client'` (they require interactivity/browser APIs).
- `ProblemCard` is a server component that accepts plain props and renders `SpotlightCard` inside.
