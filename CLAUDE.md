# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Run production server
```

No test suite is configured.

## Environment

`.env.local` vars:

```
RESEND_API_KEY=...                 # required — pilot form emails
UPSTASH_REDIS_REST_URL=...         # optional — enables per-IP rate limit (5/hour)
UPSTASH_REDIS_REST_TOKEN=...       # required if UPSTASH_REDIS_REST_URL is set
```

Rate limiting in `app/api/send/route.ts` is gated on `UPSTASH_REDIS_REST_URL` — if unset, the limiter is skipped entirely (fine for local dev).

## Architecture

Single-page marketing site. **Next.js 16 App Router**, **React 19**, **TypeScript**, **Tailwind CSS v4**.

### Page composition

- `app/page.tsx` — Thin server shell: background layers, `<Header />`, `<PageClient />`, footer. Does **not** contain section content.
- `components/PageClient.tsx` — Client component that owns the whole page body. All marketing sections (Problem, Solution, Gong Comparison, Results, Team, Pilot) are defined as local functions inside this file. Holds the `capturedEmail` state that flows from the hero email capture into the pilot form.
- `components/HeroSection.tsx`, `SocialProof.tsx`, `FounderVideo.tsx`, `HeroEmailCapture.tsx`, `InteractiveDemo.tsx`, `HeroMock.tsx` — Hero-area pieces composed by `PageClient`.
- `app/privacy/page.tsx`, `app/terms/page.tsx` — Static legal pages.

When editing marketing copy: check `components/PageClient.tsx` first. `app/page.tsx` only contains header/footer chrome.

### API + form flow

- `components/EmailForm.tsx` — React Hook Form. Hidden honeypot `website` field. POSTs to `/api/send`. Accepts a `prefillEmail` prop from `PageClient` (wired through `HeroSection` → `setCapturedEmail`).
- `app/api/send/route.ts` — Single POST endpoint. Flow: Upstash rate limit (if configured) → honeypot short-circuit returns `{success, status:'filtered'}` → Zod validate → send two emails via Resend (admin to `founders@salency.ai`, confirmation to user) with `Promise.allSettled` so admin failure 500s but user-confirmation failure is tolerated (sandbox restriction surfaced in the response).
- HTML in emails uses a manual `escapeHtml` — do not concatenate user input into the templates without running it through that helper.

### Styling

- Tailwind v4 — no `tailwind.config.ts`. Theme tokens live in `@theme` blocks inside `app/globals.css`.
- Primary accent is **warm copper** `--accent-warm: #E8925A` (used for CTAs, section eyebrows, checkmarks, founder badges). The older cyan `--accent: #06b6d4` is still defined but rarely referenced — prefer `accent-warm` for new work.
- Background uses `--background: #121015` with `--bg-secondary: #1A171E` for alternating bands, plus `bg-noise` and `bg-mesh` layers rendered in `app/page.tsx`.
- Fonts loaded in `app/layout.tsx`: Geist Sans (body), Outfit (display), Instrument Serif (hero accent). No Geist Mono.
- `components/ScrollReveal.tsx` wraps below-fold sections; uses IntersectionObserver and respects `prefers-reduced-motion`.
- `components/SpotlightCard.tsx` provides a mouse-tracked radial gradient for cards; `ProblemCard.tsx` is a server-component wrapper around it.
- `packages/brand-reveal/` — portable animated wordmark ("Sales + Saliency" → "Salency") and loading-screen splash, packaged for drop-in use in other Salency frontend apps. Exports `<BrandReveal />`, `<BrandRevealSplash />`, plus two standalone stylesheets (`styles.css` = wordmark-only, `loading-screen.css` = full splash chrome + wordmark). Not consumed by this repo — kept as a design primitive only.
- Prefer explicit `transition-property` lists over `transition-all`.

### Client/server split

Server by default. Client components (`'use client'`): `PageClient`, `Header`, `HeroSection`, `HeroEmailCapture`, `HeroMock`, `InteractiveDemo`, `FounderVideo`, `SocialProof`, `EmailForm`, `ScrollReveal`, `SpotlightCard`. Because `PageClient` is a client boundary, everything it renders is effectively client — keep `app/page.tsx` and footer in the server tree if you want static rendering of the chrome.

### Analytics

`@vercel/analytics` is mounted once in `app/layout.tsx` via `<Analytics />`. No other tracking.

### Design system reference

- `DESIGN.md` — full proposed system with tokens, competitive research, SAFE/RISK classification.
- `SALENCY_LANDING_PAGE.md`, `TASKS.md` — product/positioning context and outstanding work.
- `.gstack/design-reports/design-preview.html` — live token preview (open in browser).

## Branching strategy (GitHub Flow)

**Trunk = `main`. Feature branches branch off `main`, PR to `main`, merge to `main`. `main` auto-deploys to production.**

- **Never** branch off `test-revamp`, `test`, or any long-lived non-main branch. They're obsolete for this repo.
- **Vercel preview URL per PR** is the staging environment — review the preview, then merge. No intermediate staging branch needed.
- **Branch names:** `content/*` for copy, `design/*` for visual, `feat/*` for features, `fix/*` for bugs, `refactor/*` for restructure.
- **One PR = one logical change.** Small, reviewable, bisectable.

**Why:** Salency's landing page is small + fast-moving. The earlier `feature → test-revamp → main` flow caused ordering bugs (e.g., PR #36 shipped before PR #37, breaking prod copy) and double-PR overhead with no integration-risk benefit that Vercel previews don't already cover.

**If you see an older PR targeting `test-revamp`:** retarget to `main` with `gh pr edit <N> --base main`.
