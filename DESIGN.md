# Salency Design System

> "Stripe's clarity meets Linear's confidence."
> — SALENCY_LANDING_PAGE.md brief

This doc reflects what is **actually shipped** in `app/globals.css`, `app/layout.tsx`, and the component tree. When code and this doc disagree, code wins — update the doc.

## Design Philosophy

Salency is a B2B sales intelligence tool for revenue leaders, not developers. The visual language should feel like **a company already in market** — editorial confidence, warm professionalism, zero AI-startup clichés. Every pixel answers: "Would a VP of Sales at a $30M ARR company trust this enough to reply to the pilot email?"

### Three Principles

1. **Signal over noise.** Just as Salency extracts structured context from messy transcripts, the design extracts clarity from complexity. Clean surfaces, strong type hierarchy, no visual clutter.
2. **Warm professionalism.** B2B sales culture runs on trust and relationships, not dark-mode hacker aesthetics. Palette and typography project confidence and warmth in equal measure.
3. **Product-led identity.** The `HeroMock` — a functioning replica of Salency's actual UI — is the most distinctive element on the page. Let the product do the visual heavy lifting. Everything else frames it, doesn't compete with it.

---

## Design Tokens (shipped)

All tokens defined in `app/globals.css` `:root` and exposed to Tailwind via `@theme inline`.

### Backgrounds

| Token | Hex | Tailwind | Use |
|---|---|---|---|
| `--background` | `#121015` | `bg-background` | Page background (warm neutral) |
| `--bg-secondary` | `#1A171E` | `bg-bg-secondary` | Alternating section bands |
| `--bg-surface` / `--card` / `--muted` | `#201D24` | `bg-card` / `bg-muted` | Cards, containers |
| `--bg-elevated` | `#2A262F` | `bg-bg-elevated` | Hover states, dropdowns |

Ambient layer: `.bg-mesh` (in `globals.css`) paints two radial gradients — copper at 15%/50% (5% opacity) and cyan at 85%/30% (3% opacity). Copper stronger than cyan on purpose — reinforces warm identity at the ambient level. `.bg-noise` adds 5% opacity SVG turbulence on top.

### Accents — copper leads, cyan supports

| Token | Hex | Tailwind | Use |
|---|---|---|---|
| `--accent-warm` | `#E8925A` | `accent-warm` | **Primary:** CTAs, emphasis, focus, checkmarks, borders, quote rules, section eyebrows |
| `--accent` | `#06B6D4` | `accent` | Data-only: comparison table, HeroMock product chrome |

**Rule:** if unsure which accent to use, use copper. Cyan is reserved for product-data contexts. This keeps Salency reading as "warm memorable brand" rather than "another blue AI tool with orange accents."

Opacity tint idioms seen across components (no token, but consistent): `/8`, `/10`, `/20`, `/30`, `/50` on `accent-warm` for tinted surfaces, hover states, and borders. Example patterns:

```tsx
bg-accent-warm/10 border border-accent-warm/20 text-accent-warm     // eyebrow pill
bg-accent-warm text-background shadow-[0_0_20px_rgba(232,146,90,0.3)]  // primary CTA
border-accent-warm/30 bg-white/5                                     // subtle border on card quote
```

### Text

| Token | Hex | Tailwind | Use |
|---|---|---|---|
| `--foreground` / `--text-primary` | `#E8E6E3` | `text-foreground` | Headlines, primary content (warm off-white, not pure white) |
| `--text-secondary` | `#9B9A97` | (raw `text-[#9B9A97]` or utility) | Descriptions, secondary info |
| `--text-muted` | `#5E5D5B` | (raw) | Labels, captions, step numerals |

Note: only `--foreground` is registered as a Tailwind color via `@theme inline`. Secondary/muted are consumed via CSS var or raw Tailwind opacity utilities (`text-gray-400`, `text-white/60`) across components. Worth tightening if you add new surfaces.

### Semantic

| Token | Hex | Tailwind |
|---|---|---|
| `--success` | `#34D399` | `text-success` / `bg-success` |
| `--warning` | `#FBBF24` | `warning` |
| `--error` | `#F87171` | `error` |
| `--info` | `#60A5FA` | `info` |

### Borders

| Token | Value | Use |
|---|---|---|
| `--border-default` | `rgba(255,255,255,0.08)` | Default divider (not mapped to Tailwind utility — use `border-white/10` in components) |
| `--border-strong` | `rgba(255,255,255,0.14)` | Card/input borders |

Actual component usage: `border border-white/5` (subtle), `border border-white/10` (default), `border border-white/20` (strong hover). Copper borders use `border-accent-warm/20` through `/50`.

---

## Typography

Fonts loaded in `app/layout.tsx` via `next/font/google`:

| Role | Font | Weight | Variable | Where |
|---|---|---|---|---|
| **Display** | Instrument Serif | 400 regular + italic | `--font-instrument-serif` | Hero H1 only (inline `fontFamily` in `HeroSection.tsx`) |
| **Headings** | Outfit | 400–700 | `--font-outfit` → `--font-heading` | All `h1–h6` via `globals.css` body rule; brand wordmark in `Header.tsx` |
| **Body** | Geist Sans | 400–600 | `--font-geist-sans` → `--font-sans` | Body text (default) |
| **Mono** | System mono stack | — | `--font-mono` | Small numerals, badges, step counters. **No webfont loaded.** |

`--font-mono` is literal `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` — platform defaults, no download. If mono gets used more, upgrade to JetBrains Mono or Geist Mono.

Heading rule (`globals.css`):
```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-outfit), ui-sans-serif, system-ui, sans-serif;
  text-wrap: balance;
}
```

Why Instrument Serif for hero: serif headlines on warm dark backgrounds create editorial gravitas (NYT, Stripe Press). Pairs naturally with Outfit (geometric sans) for automatic hierarchy contrast. Italic is the hero's emphasis mechanism — no second accent color needed. No competitor in sales-intel uses a serif.

---

## Spacing & Layout

Tailwind default 4px scale. Section-level spacing thinks in 8px multiples.

### Section rhythm (observed in `PageClient.tsx`)

| Context | Pattern |
|---|---|
| Major content section | `py-24 md:py-32 px-6` with `max-w-7xl mx-auto` |
| Mid section | `py-24 px-6 max-w-5xl mx-auto` |
| Alternating band (`bg-bg-secondary`) | `py-16 md:py-20` (or `md:py-24`) `border-y border-white/5` |
| Content block inside section | `max-w-3xl` / `max-w-4xl` for prose, `max-w-5xl` for mixed |

Alternating sections use `bg-bg-secondary` with `border-y border-white/5` to create visual rhythm without heavy dividers. Do not use a uniform padding on every section — vary it.

### Max widths

`max-w-7xl` for page shell, `max-w-5xl` mid, `max-w-4xl` for prose + table, `max-w-3xl` for narrow body copy.

---

## Border Radius

Ladder, matching Tailwind defaults:

| Tailwind | Use |
|---|---|
| `rounded-full` | Pills (eyebrow, status badges), avatar dots, radial glow shapes |
| `rounded-lg` (8px) | Buttons, inputs, small cards, demo cards |
| `rounded-xl` (12px) | `ProblemCard` surfaces |
| `rounded-2xl` (16px) | Hero card, `FounderVideo`, `InteractiveDemo` container, feature surfaces |

Large bubbly radius on every element is an AI-slop signal (see Anti-patterns). Stick to the ladder.

---

## Interaction Patterns

### CTAs

Primary (header, hero, form submit):

```tsx
bg-accent-warm hover:brightness-110 text-background
font-bold px-8 py-4 rounded-lg
shadow-[0_0_20px_rgba(232,146,90,0.3)]
hover:shadow-[0_0_40px_rgba(232,146,90,0.5)] hover:-translate-y-1
transition-[color,background-color,box-shadow,transform,filter] duration-200
```

Ghost (secondary hero action):

```tsx
text-gray-300 hover:text-white font-medium
border border-white/10 hover:border-white/20 hover:-translate-y-0.5
transition-[color,border-color,transform] duration-200
```

### Transitions — always explicit

Never `transition-all`. List properties:

```tsx
transition-[color,background-color,filter] duration-200       // buttons
transition-colors                                              // nav links, borders
transition-[color,border-color,transform] duration-200         // ghost buttons
```

Durations: 200ms for interactions, 300–700ms for reveals/fades.

### Touch targets

Header CTA has `min-h-[44px]` explicitly. Nav links get `py-3` for 44px tap area. Follow the pattern for any new interactive element.

### Scroll reveal

`components/ScrollReveal.tsx` wraps below-fold sections. Uses IntersectionObserver, respects `prefers-reduced-motion` (see `globals.css` `@media (prefers-reduced-motion: reduce)`). 700ms ease with `cubic-bezier(0.16, 1, 0.3, 1)` and 24px translate.

### Spotlight hover

`components/SpotlightCard.tsx` — radial white gradient that tracks the cursor via CSS custom properties (`--mouse-x`, `--mouse-y`). Used by `ProblemCard`. Don't sprinkle on every card — it earns its place when the card IS the interaction.

---

## Anti-patterns (explicitly avoided)

These are ban-list. Reviewers: flag any of these on sight.

- **Gradient-circle icon grids.** The "3 icons in colored circles + bold title + 2-line description" pattern is the most recognizable AI-slop layout. Use inline icons or ghost numerals instead.
- **Multi-colored founder avatars.** Single accent color. Real photos where available.
- **Pure white text on near-black.** Use `#E8E6E3` (warm off-white). Reduces eye strain, warmer feel.
- **`transition: all`.** Always specify transition properties explicitly (lint yourself — this is in `CLAUDE.md`).
- **System fonts as primary.** Outfit for headings, Geist Sans for body. Never fall back to raw system sans-serif.
- **Cyan as primary accent.** Copper leads. Cyan is data-only (comparison table, HeroMock chrome). Everything else copper.
- **Uniform section padding.** Vary padding across sections for visual rhythm. `py-16` on one, `py-24 md:py-32` on the next.
- **Uniform bubbly border-radius.** Stick to the radius ladder. Don't make everything `rounded-2xl`.
- **Purple/violet/indigo gradients.** Color palette is warm neutral + copper + data cyan. No blue-to-purple.

---

## Competitive Intelligence

Research conducted March 2026 across five reference sites. Retained as context — explains why the system looks the way it does.

### Direct Competitors

| Product | Theme | Primary Accent | Fonts | Visual Character |
|---|---|---|---|---|
| **Gong** | Light (white) | Deep purple `oklch(0.53 0.23 297)` | Custom "Grotesk" + Inter + Inter Tight | Energetic, social-proof-heavy, human photography |
| **Clari** | Dark hero → light sections | Cyan/teal | "Maison Neue" + "Faktum" condensed | Enterprise-heavyweight. Dark+cyan — very similar to where Salency started. |
| **Apollo** | Warm cream `~#F5F0E8` | Amber/gold | Soehne + Founders Grotesk + ABC Diatype | Most distinctive — warm, editorial, deliberately breaks from blue/purple. |

### Reference Sites

| Product | Theme | Accent | Fonts | Takeaway |
|---|---|---|---|---|
| **Linear** | Full dark near-black | Minimal yellow | Inter Variable | Gets away with "default" font because everything else is immaculate. Product screenshots carry the identity. |
| **Stripe** | Light with gradient washes | Multi-color | Custom "Sohne" | Gold standard for premium B2B. Warm, editorial, multi-color. |

### Key findings

- **Every competitor uses blue or purple.** Gong = purple, Clari = cyan, Salesforce = blue. Cyan positions Salency as "smaller Clari."
- **Apollo broke the mold** with warm cream + amber — works. Warmth signals trust, which B2B sales leaders respond to.
- **Premium typefaces are table stakes.** Gong, Apollo, Stripe all use custom/distinctive. System fonts (Inter, Roboto) read as generic.
- **Light dominates** for B2B sales audiences (Gong, Apollo, Stripe). Dark reads more dev-tool (Linear). Dark can still work for premium positioning **if warm enough** — that's the bet Salency is making.
- **Product UI screenshots carry identity.** Linear and Stripe both let visuals do the work. Salency's `HeroMock` already does this.

---

## Reference — not adopted

Options considered but held off on. Documented so the decision doesn't get re-litigated.

### DM Sans (body) instead of Geist Sans
Geist Sans is well-made and already loaded. Delta is subtle. Skip unless a specific readability complaint shows up.

### JetBrains Mono instead of system mono
Only affects small numerals and step labels. Not worth the font-load cost until mono appears on more surfaces.

### Light mode toggle

Reference tokens if it comes back:

```css
[data-theme="light"] {
  --background: #FAFAF8;
  --bg-secondary: #F3F2EF;
  --bg-surface: #FFFFFF;
  --bg-elevated: #FFFFFF;
  --foreground: #1A1A1A;
  --text-secondary: #5C5C5C;
  --text-muted: #9C9C9C;
  --accent: #0891B2;      /* deeper cyan for light bg */
  --accent-warm: #C47534; /* deeper copper for light bg */
  --border-default: rgba(0, 0, 0, 0.08);
  --border-strong: rgba(0, 0, 0, 0.14);
}
```

High effort (requires second complete token set + full component testing). Deferred until there's demand.

---

## Implementation status

All in-scope "warm dark editorial" moves are shipped:

- Warm background `#121015` replaced cold `#111827`
- Copper `--accent-warm` `#E8925A` added and wired to all CTAs
- Instrument Serif loaded, applied to hero H1 with italic emphasis
- Warm off-white text `#E8E6E3` replaced pure white
- Semantic tokens (`--success`, `--warning`, `--error`, `--info`)
- Surface tokens (`--bg-secondary`, `--bg-surface`, `--bg-elevated`)
- Ghost secondary button on hero
- Section alternation with `bg-bg-secondary` + `border-y border-white/5`

---

## Preview

Live HTML preview at `.gstack/design-reports/design-preview.html` (open in browser) — shows all fonts, colors, components, and the hero mockup together, with a dark/light toggle.
