# Cerebro Design System

> "Stripe's clarity meets Linear's confidence."
> — CEREBRO_LANDING_PAGE.md brief

## Design Philosophy

Cerebro is a B2B sales intelligence tool for revenue leaders, not developers. The visual language should feel like **a company already in market** — editorial confidence, warm professionalism, and zero AI-startup clichés. Every pixel should answer the question: "Would a VP of Sales at a $30M ARR company trust this enough to reply to the pilot email?"

### Three Principles

1. **Signal over noise.** Just as Cerebro extracts structured context from messy transcripts, the design should extract clarity from complexity. Clean surfaces, strong type hierarchy, no visual clutter.
2. **Warm professionalism.** B2B sales culture runs on trust and relationships, not on dark-mode hacker aesthetics. The palette and typography should project confidence and warmth in equal measure.
3. **Product-led identity.** The HeroMock — a functioning replica of Cerebro's actual UI — is the most distinctive element on the page. Let the product do the visual heavy lifting. Everything else should frame it, not compete with it.

---

## Competitive Intelligence

Research conducted March 2026 across five reference sites.

### Direct Competitors

| Product | Theme | Primary Accent | Fonts | Visual Character |
|---|---|---|---|---|
| **Gong** | Light (white) | Deep purple `oklch(0.53 0.23 297)` | Custom "Grotesk" + Inter + Inter Tight | Energetic, social-proof-heavy, human photography |
| **Clari** | Dark hero → light sections | Cyan/teal | "Maison Neue" + "Faktum" condensed | Enterprise-heavyweight, dark+cyan (very similar to current Cerebro) |
| **Apollo** | Warm cream `~#F5F0E8` | Amber/gold | Soehne + Founders Grotesk + ABC Diatype | Most distinctive — warm, editorial, deliberately breaks from blue/purple |

### Brief Reference Sites

| Product | Theme | Accent | Fonts | Takeaway |
|---|---|---|---|---|
| **Linear** | Full dark, near-black | Minimal (yellow accents) | Inter Variable | Gets away with "default" font because everything else is immaculate. Product screenshots do all work. |
| **Stripe** | Light with gradient washes | Multi-color | Custom "Sohne" | Gold standard for premium B2B. Warm, editorial, multi-color. |

### Key Findings

- **Every competitor uses blue or purple.** Gong = purple, Clari = cyan, Salesforce = blue. Using cyan positions Cerebro as "smaller Clari."
- **Apollo broke the mold** with warm cream + amber and it works. The warmth signals trust and approachability — qualities B2B sales leaders respond to.
- **Premium typefaces are table stakes.** Gong, Apollo, and Stripe all use custom or distinctive fonts. System fonts (Inter, Roboto) read as generic.
- **Light themes dominate** for B2B sales audiences (Gong, Apollo, Stripe). Dark is more dev-tool (Linear). But dark can work for premium positioning if warm enough.
- **Product UI screenshots are essential.** Linear and Stripe both let their product visuals carry the identity. Cerebro's HeroMock already does this well.

---

## Current System (Baseline)

What's deployed today. Preserved here so changes are deliberate.

### Colors — Current

```
--background: #111827 (gray-900 — cold blue-gray)
--accent: #06b6d4     (cyan-500)
--v-bg: #0a1219       (adjusted — slightly warm)
--v-text: #EDEDED
--v-text-secondary: #94A3B8
--v-text-muted: #6B7A8D
--v-border: rgba(255,255,255,0.08)
--v-border-subtle: rgba(255,255,255,0.05)
```

### Typography — Current

- **Headings:** Outfit 700 (via `next/font/google`)
- **Body:** Geist Sans (via `next/font/google`)
- **Mono:** Geist Mono (via `next/font/google`)

### Issues with Current

1. **One-dimensional accent.** Cyan is the only color with personality. Everything else is gray.
2. **Cold background.** `#111827` is Tailwind's default `gray-900` — reads as "dark mode template."
3. **No display font.** Outfit works for H2–H6 but lacks distinction for the hero headline. The brief asks for "something with character."
4. **Cyan = Clari.** Our direct competitor uses the same dark + cyan combination.

---

## Proposed System

### Direction: Warm Dark Editorial

Keep the dark theme (it's built, it works, it projects technical confidence) but warm it up significantly and add a second accent color.

### Colors — Proposed

#### Backgrounds (warm undertone, not blue-gray)

| Token | Hex | Use |
|---|---|---|
| `--bg-primary` | `#0F1117` | Page background |
| `--bg-secondary` | `#161922` | Alternate section bg |
| `--bg-surface` | `#1C1F2B` | Cards, containers |
| `--bg-elevated` | `#242836` | Hover states, dropdowns |

#### Accents (dual — cyan for data, copper for action)

| Token | Hex | Use |
|---|---|---|
| `--accent-primary` | `#06B6D4` | Data highlights, links, progress indicators, HeroMock chrome |
| `--accent-warm` | `#E8925A` | CTAs, hero emphasis, badges, the "human" accent |
| `--accent-primary-subtle` | `rgba(6,182,212,0.12)` | Cyan tinted backgrounds |
| `--accent-warm-subtle` | `rgba(232,146,90,0.12)` | Copper tinted backgrounds |

**Rationale:** Cyan stays because it's already in the HeroMock and product UI. But CTAs and emotional emphasis get the warm copper — a color that says "trust, warmth, action" to sales leaders, not "cold analytics." This dual-accent system gives us range.

#### Text (warm off-white, not pure white)

| Token | Hex | Use |
|---|---|---|
| `--text-primary` | `#E8E6E3` | Headlines, primary content |
| `--text-secondary` | `#9B9A97` | Descriptions, secondary info |
| `--text-muted` | `#5E5D5B` | Labels, captions, step numbers |

#### Semantic

| Token | Hex | Use |
|---|---|---|
| `--success` | `#34D399` | Confirmations, "complete" states |
| `--warning` | `#FBBF24` | Timelines, urgency |
| `--error` | `#F87171` | Failures, objections |
| `--info` | `#60A5FA` | Neutral highlights |

#### Borders

| Token | Value | Use |
|---|---|---|
| `--border` | `rgba(255,255,255,0.08)` | Default dividers |
| `--border-strong` | `rgba(255,255,255,0.14)` | Cards, inputs, table borders |

### Typography — Proposed

| Role | Font | Weight | Sizes | Source |
|---|---|---|---|---|
| **Display** | Instrument Serif | 400 (regular + italic) | 48–80px (hero only) | Google Fonts |
| **Headings** | Outfit | 600–700 | 20–48px (H2–H6) | Google Fonts (already loaded) |
| **Body** | DM Sans | 400–600 | 14–20px | Google Fonts |
| **Mono** | JetBrains Mono | 400–600 | 11–14px | Google Fonts |

**Why Instrument Serif for display?**
- Serif headlines on dark backgrounds create editorial gravitas (think: The New York Times, The Verge, Stripe Press)
- It pairs naturally with Outfit (geometric sans for subheadings) — the contrast creates visual hierarchy automatically
- The italic style gives us an expressive tool for emphasis without needing a second accent color
- No competitor in the sales intelligence space uses a serif — instant differentiation

**Why DM Sans over Geist Sans for body?**
- Geometric like Geist but optically warmer — rounder letterforms read as more approachable
- Excellent weight range for fine-grained hierarchy
- If you prefer to keep Geist Sans (it's well-made and already loaded), that's a valid choice. The difference is subtle.

**Why JetBrains Mono over Geist Mono?**
- Wider character spacing makes data strings more scannable at small sizes
- Already popular in the developer/AI space, but both are solid choices

### Spacing

8px base unit. Use Tailwind's default scale (which is 4px-based) but think in 8px increments for section-level spacing.

| Token | Value | Use |
|---|---|---|
| `xs` | 4px | Tight gaps, icon margins |
| `sm` | 8px | Inner padding, tight lists |
| `md` | 16px | Standard padding, card internal spacing |
| `lg` | 24px | Section subsections |
| `xl` | 32px | Between components |
| `2xl` | 48px | Between content blocks |
| `3xl` | 64px | Section padding (mobile) |
| `4xl` | 96px | Section padding (desktop) |

### Border Radius

| Token | Value | Use |
|---|---|---|
| `sm` | 6px | Buttons, badges, inputs |
| `md` | 10px | Cards, containers |
| `lg` | 16px | Hero card, major surfaces |
| `full` | 9999px | Pills, avatars |

---

## SAFE vs. RISK Classification

Changes are classified by risk to help prioritize implementation.

### SAFE — Low risk, high confidence

These changes improve the system without breaking anything. Implement freely.

| Change | Impact | Effort |
|---|---|---|
| Warm up backgrounds (`#0F1117` replacing `#111827`) | Medium | Low — CSS var swap |
| Add warm copper `--accent-warm` as secondary accent | High | Medium — add token + update CTAs |
| Warm text colors (`#E8E6E3` replacing `#EDEDED`) | Low | Low — CSS var swap |
| Add Instrument Serif for hero H1 only | High | Low — add font, one class |
| Warm border tokens | Low | Low — CSS var swap |
| Dual accent button system (copper CTA, cyan links) | High | Medium — update ~5 buttons |

### RISK — Higher risk, requires testing

These changes have meaningful visual impact. Test with real users or A/B if possible.

| Change | Impact | Risk | Notes |
|---|---|---|---|
| Replace DM Sans for Geist Sans (body) | Medium | Medium | Affects every paragraph. Test readability. |
| Replace JetBrains Mono for Geist Mono | Low | Low | Only affects HeroMock data labels. Safe to skip. |
| Full light mode option | Very high | High | Requires second complete color token set + all component testing |
| Move hero to Instrument Serif italic for emphasis words | Medium | Medium | Italic serif is expressive but might read as "too editorial" for some audiences |

---

## Light Mode Tokens (Reference Only)

If you decide to add a light theme toggle later:

```css
[data-theme="light"] {
  --bg-primary: #FAFAF8;
  --bg-secondary: #F3F2EF;
  --bg-surface: #FFFFFF;
  --bg-elevated: #FFFFFF;

  --text-primary: #1A1A1A;
  --text-secondary: #5C5C5C;
  --text-muted: #9C9C9C;

  --accent-primary: #0891B2;    /* Slightly deeper cyan for light bg */
  --accent-warm: #C47534;       /* Deeper copper for light bg */

  --border: rgba(0, 0, 0, 0.08);
  --border-strong: rgba(0, 0, 0, 0.14);
}
```

---

## Implementation Sequence

If you decide to implement this system, here's the recommended order:

1. **Background warmth** (5 min) — Swap `--v-bg` / `--background` to `#0F1117`. Instant improvement, zero risk.
2. **Text warmth** (5 min) — Swap `--v-text` to `#E8E6E3`. Reduces eye strain, adds warmth.
3. **Add Instrument Serif** (15 min) — Import in `layout.tsx`, apply to hero H1 only. Biggest visual differentiation for minimal effort.
4. **Add copper accent token** (10 min) — Define `--accent-warm: #E8925A` in `globals.css`. Don't apply yet.
5. **Update CTA buttons to copper** (20 min) — Change hero CTA, pilot form submit, and header "Get Early Access" from cyan to copper. Keep links and data highlights in cyan.
6. **Test and iterate** — View the page. If it feels right, continue. If not, revert to SAFE-only changes.

---

## Preview

A live HTML preview of this design system (both dark and light mode) is available at:

```
.gstack/design-reports/design-preview.html
```

Open in a browser to see all fonts, colors, components, and a proposed hero mockup rendered together. Use the "Switch to Light" button in the top right to toggle modes.

---

## Anti-Patterns

Things this design system deliberately avoids:

- **Gradient-circle icon grids** — The "3 icons in colored circles" pattern is the most recognizable AI slop pattern. Use inline icons or ghost numerals instead.
- **Multi-colored founder avatars** — Single accent color for all avatars. Real photos when available.
- **Pure white text on near-black** — Use warm off-white (`#E8E6E3`) for reduced eye strain and warmer feel.
- **`transition: all`** — Always specify transition properties explicitly.
- **System fonts** — At minimum, use Outfit for headings and Geist Sans for body. Never fall back to raw system sans-serif.
- **Cyan-only accent** — Always pair cyan (data/links) with copper (CTAs/emphasis) for visual range.
- **Uniform section padding** — Vary padding across sections for visual rhythm.

---

*Generated by `/design-consultation` — March 2026*
*Based on competitive analysis of Gong, Clari, Apollo, Linear, and Stripe*
