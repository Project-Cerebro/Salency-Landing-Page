# Home page tokens + polish — design

**Issue:** #175 (home page design audit, 14 findings)
**Bundle scope:** findings 3, 4, 5, 6, 9, 11, 12, 13 (typography + tokens + polish)
**Out of scope, separate PRs:** findings 1, 2 (hero artifact + mobile wrap), 7, 8, 10 (AI-slop layout + CTA dedupe)
**Branch:** `design/home-tokens-polish` off `main`. PR target: `main` directly (user override of CLAUDE.md `test`-first rule for this PR).

## Findings against current code (audit corrections)

Three audit findings were wrong against current code:

- `text-wrap: balance` is already applied to `h1, h2, h3, h4, h5, h6` globally (`app/globals.css:61`). The mobile headline orphaning of "revenue" is happening despite this. Keep the rule, look elsewhere — likely the orange `<em>` accent inside the H1 is the wrap problem (an inline element forcing a break). Investigate during implementation, not before.
- `prefers-reduced-motion` is already respected on `.scroll-reveal` (`app/globals.css:129`). Verify any new motion respects it.
- **Finding 4 (font cascade) was a misread.** `app/globals.css:1924–1938` has an explicit `:root` block binding `--font-body` and `--font-display` to literal `'Instrument Sans'` strings, with a long comment explaining why (next/font's CSS variable lives on `<body>`, not `:root`). Instrument Sans is the **intentional** body+display font on the marketing site — not a system-ui leak. The audit's "system-ui as primary" finding misread Instrument Sans's fallback chain. Tasks that drop `Instrument_Sans` or define `--font-body` are removed from this PR.

The accent token state is more interesting than the audit suggested:

- `--accent-warm: #E8925A` exists in `:root` (line 7) — the soft copper from CLAUDE.md.
- `--copper: #FE8531` plus a full `--copper-aXX` opacity ladder (a0…a60) exists in a second `:root` block (lines 143–185). This is what production uses.
- `HeroSection.tsx` uses `var(--copper)` for the inline em accent.

Two parallel token systems. The bright `--copper` is canonical (user-confirmed). The soft `--accent-warm` is dead.

## Decisions

### 1. Accent token sync (finding 9)
- Canonical accent: `--copper: #FE8531` (already in production).
- Delete `--accent-warm: #E8925A` from `:root`.
- Delete `--color-accent-warm: var(--accent-warm)` from the `@theme inline` block.
- Update CLAUDE.md to reference `--copper` instead of `--accent-warm` and remove the line that calls `#E8925A` the brand color.
- Keep the `--copper-aXX` opacity ladder as-is. It's already well-architected and used.
- Grep for any straggling `rgba(254, *133, *49,…)` literals outside `globals.css` and replace with the matching `--copper-aXX` token.

### 2. Heading scale lock (finding 3)
Define utility classes `.h1 .h2 .h3 .h4` with one size per class and forbid per-section overrides on the home page in this PR. Sizes use `clamp()` so mobile and desktop don't need separate rules.

| Class | size (clamp) | weight | use |
|-------|-------------|--------|-----|
| `.h1` | `clamp(40px, 5.6vw, 72px)` | 500 | hero only — existing rule, keep |
| `.h2` | `clamp(32px, 4vw, 48px)` | 500 | section heads |
| `.h3` | `clamp(22px, 2.4vw, 28px)` | 500 | sub-section / card titles |
| `.h4` | `20px` | 500 | small headings, modal titles |
| `.eb` | `11px` mono | 500 | eyebrow — existing rule, keep |

For the home page audit specifically, this means:
- `.how-head h2` ("Three steps. Every call, every account.") — currently 70px → 48px ceiling
- `.cta-card h2` ("Stop paying the ramp-time tax.") — currently 70px → 48px ceiling
- `.notdo` H3s (Inherits / Picks up / Sees) — currently 30px → 28px ceiling
- `.how` H3s (Extract / Map / Remember) — currently 34px → 28px ceiling

The hero H1 stays at 72px. Result: clean H1 → H2 → H3 ratio of 1.5 → 1.7 instead of the current 1.0 → 2.0.

### 3. Font cascade — DROPPED
The audit was wrong. `--font-body` is defined at `app/globals.css:1936` to point at `'Instrument Sans'` intentionally (see misread note at top). Instrument Sans is the deliberate body+display typeface on the marketing site, with a long inline comment explaining why the binding uses literal strings instead of `var(--font-instrument-sans)`. No change needed.

### 4. Footer touch targets (finding 6)
- The footer link rows currently render at 17px tall on mobile. Universal rule: ≥44px.
- Find the footer component (`components/sections/SiteFooter.tsx`) and the footer rule in `globals.css`. Add `min-height: 44px` and vertical padding so each `<a>` row hits 44px on mobile.
- Verify by Cmd-clicking on each footer link in DevTools mobile mode.

### 5. Hub-wrap contrast (finding 5)
- `--ink-3: #7C7A77` (used for hub-output sub-text) measures ~4.4:1 against `--bg: #0E0C11` — borderline AA pass for body. Acceptable.
- `--ink-4: #4E4C4A` measures ~2.5:1 — fails AA. Used as `.arrow` color in hub-head and likely elsewhere.
- **Fix:** keep `--ink-4` available as a legitimate "decorative element" token, but audit all *text* uses and lift to `--ink-3` or `--ink-2`. Specifically `.arrow` (line 254) — fine because it's a single-character glyph used as a separator, not body text. Verify with the `axe` extension in DevTools.

### 6. Curly quotes (finding 11)
- Grep for straight `"` and `'` in `components/sections/**/*.tsx` and `components/**/*.tsx`. Replace with `“ ” ‘ ’` where appropriate. Skip JSX attribute strings (those are syntax, not user-facing copy).

### 7. tabular-nums utility (finding 12)
- Add a utility class:
  ```css
  .num { font-variant-numeric: tabular-nums; font-feature-settings: 'tnum'; }
  ```
- Apply to: hero meta `Q3 2026`, footer `© 2026 Salency`, any dated changelog/blog entries on home (none currently). Discrete addition — small surface.

### 8. prefers-reduced-motion verification (finding 13)
- `.scroll-reveal` is covered.
- Check any `@keyframes` rules added later (e.g., in HubSection animations starting around line 320 with `--out-delay`). Add a `@media (prefers-reduced-motion: reduce)` block that pauses or hides the animations.
- One-time grep for `animation:` in `globals.css`, ensure each is wrapped or has a no-motion fallback.

## Implementation order

Each step lands as a single commit. CSS-only first, then JSX touchpoints, then content audit.

1. **Tokens.** Delete dead `--accent-warm`. CLAUDE.md update. (~5 min)
2. **Heading scale.** Add `.h2 .h3` rules; reduce per-section font-size overrides on `.how-head h2`, `.cta-card h2`, `.notdo` H3s, `.how` H3s. (~25 min)
3. **Footer touch targets.** Footer CSS bump. Test on 375px viewport. (~10 min)
4. **Contrast.** Audit `--ink-4` text uses; lift where used as text. (~15 min)
5. **Polish.** Add `.num` class + apply. Audit straight quotes → curly. Verify reduced-motion. (~20 min)

Total: ~75 min CC time. Single PR, ~5 commits.

## Verification

After each commit:
- `npm run lint` — must pass
- `npm run build` — must pass
- Visual check: open `/` at 1280×900 and 375×812 with browse, screenshot, compare against `.gstack/design-reports/audit-20260427/screenshots/home-*.png`.
- Contrast check: pull rendered text colors with `$B js`, compute contrast ratio against background. Spot-check 5 elements.

After the full bundle:
- Re-run a slim version of the home audit JS extraction (heading sizes, font cascade, undersized targets count) and confirm:
  - No more than 5 distinct heading sizes on `/`
  - Body cascade primary family is Geist (not system-ui)
  - Footer link target heights ≥44px on mobile

## Out of scope (don't do in this PR — each tracked as its own GitHub issue)

- Hero product visual — **#188**
- Mobile headline wrap of orange `<em>` — **#189** (investigate during this PR if cheap, otherwise punt)
- 3-column AI-slop pattern break — **#190**
- Eyebrow + italic display-accent overuse — **#191** (site-wide)
- CTA dedupe — **#192**
- Legal pages typography — **#185**, **#186**
- All the other 11 page audits — **#176**, **#177**, **#178**, **#179**, **#180**, **#181**, **#182**, **#183**, **#184**, **#185**, **#186**

## Risk

- **Heading scale tightening could break section-specific layouts** (e.g., the hub-head positioning relies on a specific font-size). Mitigation: change one section at a time, screenshot before/after.
- **Dropping `Instrument_Sans`** could break a usage I missed. Mitigation: grep for `Instrument_Sans` and `instrument-sans` first; only drop if zero hits in `*.tsx`/`*.css`.
- **Footer `min-height: 44px` could push the footer taller** and shift layout above. Mitigation: verify the footer uses flex with `align-items: center`, so per-link height changes don't cascade.

## Success criteria

- All 8 findings either fixed or explicitly punted with a reason.
- Lighthouse a11y score on `/` doesn't regress.
- No visible regression in production screenshot diff.
- CLAUDE.md reflects the actual token system in use.
