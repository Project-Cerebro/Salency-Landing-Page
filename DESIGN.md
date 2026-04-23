# Salency Design System

> "Stripe's clarity meets Linear's confidence." — `SALENCY_LANDING_PAGE.md`

**This doc reflects what ships on the home page (`/`) as of 2026-04-23.** Extracted from `app/globals.css`, `app/layout.tsx`, and the live composition in `components/sections/HeroSection.tsx` + `PageClient.tsx`. When code and this doc disagree, code wins. Update the doc.

Philosophy carries over from the earlier proposal: editorial confidence, warm professionalism, zero AI-startup clichés. The rest below reflects current shipped state.

---

## 1 · Philosophy

Salency is a B2B sales-intelligence platform for revenue leaders, not developers. The visual language projects a company already in market — trustworthy, shipped, calm. Every pixel answers: *"Would a VP Sales at a $30M-ARR company trust this enough to reply to the pilot email?"*

**Three principles:**

1. **Signal over noise.** Clean surfaces, strong type hierarchy, no clutter. Cards earn their existence — no decorative card grids.
2. **Warm professionalism.** B2B sales culture runs on trust and relationships, not dark-mode hacker aesthetics. Warm copper accent, never purple gradients.
3. **Editorial typography.** Instrument Sans drives display + body. Geist Mono for eyebrows. One type voice. No generic Inter/Roboto/system-ui fallbacks as the primary stack.

---

## 2 · Typography

### Loaded fonts (`app/layout.tsx`)

| CSS variable | Family | Weights | Style |
|---|---|---|---|
| `--font-instrument-sans` | Instrument Sans | 400, 500, 600, 700 | normal + italic |
| `--font-instrument-serif` | Instrument Serif | 400 | normal + italic |
| `--font-geist-sans` | Geist | all | normal |
| `--font-geist-mono` | Geist Mono | all | normal |
| `--font-outfit` | Outfit | all | normal |

### Resolved tokens (`globals.css:1631-1632`)

```css
--font-body: var(--font-instrument-sans), 'Instrument Sans', system-ui, sans-serif;
--font-display: var(--font-instrument-sans), 'Instrument Sans', system-ui, sans-serif;
```

Both `--font-body` and `--font-display` currently resolve to **Instrument Sans**. Many CSS rules still list `'Instrument Serif', serif` as a fallback — those are legacy declarations that never activate because Instrument Sans loads successfully. When in doubt, use `var(--font-display)` for headings and `var(--font-body)` for prose and trust the token.

### Usage map

| Role | Font | Weight | Used on |
|---|---|---|---|
| Hero h1, section h2, card h3, editorial accents | `var(--font-display)` (Instrument Sans) | 400 normal, 400 italic for `em` | `.h1`, `.hero h1`, `.prob-head h2`, `.how-head h2`, `.gong-head h2`, `.platform h2`, `.thesis-card h2`, `.coming-soon h1`, `.pilot-app h1`/`h3`, `.inv-intro h1`, `.founder .name` |
| Body, ledes, paragraph text, list items | `var(--font-body)` (Instrument Sans) | 300 for ledes, 400 for body | `.sub`, `.how-head .lede`, `.platform p`, `.inv-intro p`, `.pilot-lede`, `.founder .bio`, `.thesis-card p` |
| Eyebrows, meta strips, labels, pill tags, footer legal | `'Geist Mono', monospace` | 400 or 500 | `.eb`, `.hero-meta`, `.inv-intro-meta`, `.founder .role`, `.roadmap-card .v`, `.sample-label`, `footer`, legal pages |
| Brand wordmark (header logo) | `var(--font-outfit)` | 800 | `.brand .name`, `.nav-brand` |

Geist Sans is loaded but effectively not used — `body` lists it after `--font-body` in fallback.

### Type scale (all `clamp()` fluid)

| Role | Size | Line-height | Letter-spacing |
|---|---|---|---|
| Hero h1 | `clamp(40px, 5.6vw, 72px)` | 1.08 | -.025em |
| Section h2 | `clamp(38px, 4.2vw-5.4vw, 54-76px)` (varies per section) | 1.02–1.1 | -.02 to -.025em |
| Card h3 | 20–22px | 1.2 | — |
| Founder name / hero accent | 30–32px | 1.1 | -.015em |
| Lede | 18–19px | 1.55–1.7 | — |
| Body | 15–17px | 1.55–1.75 | — |
| Eyebrow (`.eb`) | 10–11px | — | .16–.18em uppercase |
| Caption / meta | 10–11px | — | .12–.2em uppercase |

### Italic accent rule

Inside display text, `em` = italic color accent. Two forms:

```css
.hero .h1 em       { font-style: normal; font-weight: inherit; color: var(--copper); }
.platform h2 em    { font-style: italic;  color: var(--copper); }
```

Some heroes use `font-style: normal` for the accent (kept upright), others use italic. Either is acceptable — `em` always switches color to `--copper`, the italicness is per-context.

---

## 3 · Color Tokens (`globals.css:194-214`)

### Surfaces

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#0E0C11` | Page background |
| `--bg-2` | `#121015` | (alternate; mostly unused today) |
| `--bg-3` | `#1A171E` | (alternate bands) |
| `--surface` | `#201D24` | Cards, primitives |
| `--surface-2` | `#2A262F` | Elevated hover |

Investor page uses a slightly darker `#0C0A10` literal for the register band — intentional scene break.

### Hairlines

| Token | Value | Use |
|---|---|---|
| `--hair` | `rgba(232,230,227,0.08)` | Subtle dividers, section bottoms |
| `--hair-2` | `rgba(232,230,227,0.14)` | Card borders, stronger dividers |

### Ink (text)

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#E8E6E3` | Headlines, primary body |
| `--ink-2` | `#B6B4B0` | Secondary body, ledes |
| `--ink-3` | `#7C7A77` | Labels, captions, meta |
| `--ink-4` | `#4E4C4A` | Footer legal, muted meta |

### Accent — copper only

| Token | Hex | Use |
|---|---|---|
| `--copper` | `#FE8531` | **Primary accent.** Every eyebrow, every `em` accent, every primary CTA, every `::before` dash, checkmarks, focus rings. |
| `--copper-soft` | `#FEBEA8` | Rare — soft copper for tinted surfaces. |
| `--copper-deep` | `#CA640A` | Gradient terminator on `.btn-primary` / `.btn-submit`. |
| `--rust` | `#D13C13` | Occasional founder-photo gradient accents. |
| `--rust-deep` | `#95280A` | Gradient depths. |
| `--sand` | `#FFEDE8` | Copper-on-copper text highlight (founder photo initials). |

Common copper alpha idioms (no tokens but consistent): `rgba(254,133,49, .03 / .05 / .08 / .14 / .18 / .22 / .28 / .3 / .4 / .5)`. Use these literal rgbas for surfaces, borders, and gradients that need copper at transparency.

**Rule:** every accent uses `--copper`. Never introduce new hex colors for accents. If you need a softer tone, use copper at lower alpha (`rgba(254,133,49,.5)`) rather than shifting hue.

---

## 4 · Spacing + Layout

### Section container

```css
max-width: 1280px;
margin: 0 auto;
padding: 0 40px;
```

Wider sections (investor) use `max-width: 1100px` with the same padding. Legal pages use narrower.

### Section rhythm

- Between sections: `margin-top: 100–140px` at desktop.
- First section on a page: `padding: 48–96px top`.
- Last section before footer: `padding-bottom: 96–120px`.

### Standalone intro padding — `120px 40px 96px` (canonical)

Every standalone marketing page (pages accessed from the MarketingHeader nav that aren't the home page) uses the same intro padding so header-to-content spacing feels identical across the site. Selectors:

- `.coming-soon` (on `/memory`)
- `.inv-intro` (on `/investors`)
- `.pilot-app` (on `/pilot` and `/pricing`, applied via `pt-[120px] pb-24 px-6 md:px-10` in `PilotApplication.tsx`)

Home (`/`) uses the tighter `.hero` 96/40/72 variant because it has more above-the-fold content. Legal pages (`/privacy`, `/terms`) use `pt-32` (128px) via Tailwind since they're narrow-measure prose.

### Card / card-like surfaces

| Treatment | Value |
|---|---|
| Border-radius | 10–16px (10 for pills and small cards, 12 for medium, 16 for hero cards like `.thesis-card`, `.cta-card`) |
| Border | `1px solid var(--hair-2)` |
| Background | `rgba(255,255,255,.02)` or `rgba(254,133,49,.03–.05)` for copper-tinted |
| Padding | 22–32px for card content, 56–64px for hero cards |

### Spacing scale (observed, not strictly enforced)

4, 8, 12, 16, 18, 20, 24, 28, 32, 40, 44, 48, 56, 64, 72, 80, 96, 100, 120, 140. Most values land on an 8px grid; 18/22/28/44/56/72 appear often for comfortable editorial rhythm.

---

## 5 · Component Patterns

### Eyebrow (`.eb`) — the signature pattern

Used on every marketing section to label the content area.

```css
.eb {
  font-family: 'Geist Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--copper);
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.eb::before {
  content: "";
  width: 28px;
  height: 1px;
  background: var(--copper);
  display: inline-block;
}
```

Shipped copies (all use the same 28×1 dash, copper, `.18em` tracking):
- `.prob-head .eb` / `::before` — Problem section
- `.how-head .eb` / `::before` — How it works
- `.gong-head .eb` / `::before` — Gong comparison
- `.platform .eb` / `::before` — Platform framing (investors)
- `.coming-soon .eb` / `::before` — Pricing + Memory stubs
- `.pilot-app .eb` / `::before` — Pilot + Pricing page intro
- `.inv-intro .eb` / `::before` — Investors intro
- `.thesis-card .eb` / `::before` — Future-fit thesis

When adding a new section, use this pattern. Exactly 28×1 copper dash, `.18em` tracking, copper text.

### Buttons

Three canonical buttons, all in `globals.css:627-666`:

**`.btn .btn-primary`** — nav CTAs, section CTAs

```css
background: linear-gradient(180deg, #FE9544 0%, var(--copper) 50%, var(--copper-deep) 100%);
color: #1A0A02;
font-weight: 600;
box-shadow:
  inset 0 1px 0 rgba(255,255,255,.25),
  inset 0 -1px 0 rgba(0,0,0,.2),
  0 1px 0 rgba(0,0,0,.3),
  0 8px 24px -8px rgba(254,133,49,.5);
/* hover */ filter: brightness(1.08); transform: translateY(-1px);
```

**`.btn .btn-ghost`** — secondary CTAs

```css
background: rgba(232,230,227,.04);
color: var(--ink);
border: 1px solid var(--hair-2);
/* hover */ background: rgba(232,230,227,.08); border-color: rgba(232,230,227,.22);
```

**`.btn-submit`** — form submit button (larger, full-width) (`globals.css:649-666`)

Same gradient + shadow stack as `.btn-primary` but sized for forms (`padding: 16px 24px`, `font-size: 16px`, `width: 100%`). Hover uses `filter: brightness(1.1)` only — no lift. Written with native CSS nesting (`&:hover`, `&:disabled`, `&:disabled:hover`).

### Meta strip (`.hero-meta`, `.hero-meta-item`)

Shared mono-caps meta line with 6×6 copper circle bullets via `::before`. Shipped in `.hero-meta` + `.hero-meta-item` (reused by `.coming-soon-meta` on stub pages).

### Global chrome — `<MarketingHeader />` + `<SiteFooter />`

Every marketing page and every legal page renders the same header + footer components. Single source of truth for site-wide navigation. Styled in the top-level `header { ... }` and `footer { ... }` blocks in `globals.css` (both native-nested).

**`<MarketingHeader />`** (`components/MarketingHeader.tsx`) — mounted on `/`, `/why-salency`, `/memory`, `/investors`, `/pricing`, `/pilot`, `/privacy`, `/terms`. Links: Products · Why Salency · Memory · Investors · Pricing + the "Request a pilot →" CTA (opens `PilotModal`).

**`<SiteFooter />`** (`components/sections/SiteFooter.tsx`) — mounted on every page. Brand → home, nav links: Why Salency · Memory · Pricing · Investors · Privacy · Terms. No Careers link.

**Footer styling** (`globals.css` top-level `footer` block):
- `padding: 40px`, `border-top: 1px solid var(--hair)`, mono 11px `var(--ink-4)` text.
- `.brand` — Outfit 800, 17px, `var(--ink)` (full-bright).
- `nav a` — `var(--ink-3)` with `transition: color .18s`; hover lands on `var(--copper)`.
- `nav` has `flex-wrap` so long link lists wrap gracefully on narrower widths.

When adding a new page, don't write a page-specific header or footer. Use the shared components.

### Card chrome

Most marketing cards:

```css
background: rgba(255,255,255,.02);
border: 1px solid var(--hair-2);
border-radius: 10–16px;
padding: 22–32px (content) / 56–64px (hero);
```

Hero cards (`.thesis-card`, `.cta-card`) add a 2px left gradient via `::before`:

```css
&::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 2px; height: 100%;
  background: linear-gradient(180deg, var(--copper), rgba(254,133,49,0));
}
```

---

## 6 · Conventions

### Native CSS nesting is the convention

`globals.css` migrates flat selectors to native CSS nesting. Existing nested blocks: `.hub-wrap`, `.loading-screen`, `.btn-submit`, `.pilot-app`, `.coming-soon`, `.reg-inv`, `.platform`, `.roadmap`, `.team`, `.founder`, `.thesis-card`, `.investors-register`, `.inv-intro`, `header`, `footer`.

When writing new CSS, nest descendants, `&::before`, `&::after`, `&:hover`, `&.modifier`, `&:disabled` inside the parent selector. Use blank lines between the parent's own rules and nested children for readability.

### Section banner hierarchy

- **Top-level marketing section** — thick banner: `/* ═══════════ Name ═══════════ */`. Examples: `Hero`, `Product mock`, `Problem section`, `How it works`, `Gong comparison`, `Investor register`, `Footer`, `Mobile nav`, `Coming-soon stub pages`, `Loading UI`.
- **Sub-section within a banner** — thin comment: `/* Name */`. Examples: `Platform framing`, `V1.5 roadmap`, `Team`, `Future-fit thesis` (all inside Investor register); `sidebar`, `main`, `pain cards`, `right rail` (all inside Product mock).
- **Pre-system utilities** (reset, bg effects, animations, scroll reveal) use thin comments since they sit outside the marketing system.

When adding a new top-level section, use the thick banner. When adding a sub-section inside an existing banner, use the thin comment.

### Token discipline

- **Never introduce a hex literal for text or accent color.** Use `var(--ink)`, `var(--ink-2)`, `var(--ink-3)`, `var(--ink-4)`, `var(--copper)`.
- **Background/neutral hexes are allowed for section scenography** — `#0C0A10` for the investor register band is intentional.
- **Copper at alpha** uses literal `rgba(254,133,49,*)`. Do not use `rgba(240,168,118,*)` (off-brand peach) — that was drift and was purged on 2026-04-23.

### Italic accent

`em` inside a display heading changes color to `var(--copper)`. Italicness is per-context. Never introduce `<strong>` for color emphasis — that shift is reserved for `em`.

### File path reference

All selectors above live in a single file: `app/globals.css`. Section headers use the `═══════════` banner comment pattern. Keep the banner style when adding new sections.

---

## 7 · Anti-Patterns (purged, don't reintroduce)

1. **Off-brand peach `#F0A876`.** Previously used as a muted copper on the investor page. Purged 2026-04-23 in favor of the single `--copper` token.
2. **`rgba(240,168,118,*)` gradients.** Same drift. Use `rgba(254,133,49,*)` for copper-at-alpha.
3. **Hardcoded ink hexes** (`#E8E6E3`, `#B6B4B0`, `#7C7A77`, `#4E4C4A`). Use `var(--ink)` / `--ink-2` / `--ink-3` / `--ink-4`.
4. **Tailwind `font-serif` / `font-mono` / `font-light` on marketing headings.** These resolve to generic `ui-serif`, `ui-monospace`, and system sans — not our loaded fonts. Use the CSS tokens via globals selectors (`.eb`, `.pilot-lede`, `h1` inside `.pilot-app`).
5. **New eyebrow variants.** Always use `.eb` with the 28×1 copper dash. Don't invent `.kicker` / `.pilot-eb` / `.inv-eb` — they drift. `.kicker` and the `.reg-div` scene-break band that contained it were removed from `/investors` on 2026-04-23.
6. **Inter / Roboto / system-ui as a primary font.** Never add those back as the first font family. Instrument Sans loads via `next/font` and is reliable.
7. **Purple gradients, icon-in-circle feature grids, centered-everything hero, emoji as design, cookie-cutter section rhythm.** Standard AI-slop blacklist. Salency explicitly rejects these.

---

## 8 · Consuming This System on a New Page

When building a new marketing page:

1. Root wrapper: `<div className="page"><MarketingHeader />...<SiteFooter /></div>`.
2. For editorial intro (hero-like section), use or mirror `.inv-intro` / `.coming-soon` / `.pilot-app` — a scoped block with nested `.eb`, `h1`, lede `p`.
3. For structured sections below, use the `.prob-head` / `.how-head` / `.platform` patterns — `.eb` + `h2` + supporting copy.
4. CTAs: `.btn .btn-primary` for primary, `.btn .btn-ghost` for secondary. Form submits: `.btn-submit`.
5. Colors: only `var(--copper)` for accents, `var(--ink)` scale for text, `var(--hair)` / `--hair-2` for dividers.
6. Nesting: write new CSS blocks with native nesting, not flat selectors.

---

## 9 · Reference: /investors Alignment (2026-04-23)

`/investors` was audited against this system and aligned:
- Every accent now pulls from `var(--copper)`; off-brand peach purged.
- Every ink value uses the `--ink-*` scale; no hardcoded grays.
- Every eyebrow (`.inv-intro .eb`, `.platform .eb`, `.thesis-card .eb`) uses the 28×1 copper dash `::before` with `.18em` tracking.
- Every investor-block selector is native-nested CSS.
- The `.reg-div` 96px scene-break band at the top of the section was removed — it held only a single `.kicker` span that wasn't earning its weight. `.reg-div`, `.kicker`, `.wrap`, and `.inv-footer` CSS blocks all dropped as dead code.
- `.inv-intro` padding normalized to `120px 40px 96px` to match `.coming-soon` and `.pilot-app` — the standalone intro canonical.
- Chrome: `/investors` renders `<MarketingHeader />` and `<SiteFooter />`, same as every other marketing + legal page.

Known investor-specific deliberate choices (not drift):
- Background `#0C0A10` (darker than home `--bg`) for the `.investors-register` band — scene break.
- Founder photo gradients use `rgba(107,78,255,...)` (purple) and `rgba(0,181,160,...)` (teal) to differentiate founders. Exception to the "copper only" rule, narrow in scope (3 avatars only).
