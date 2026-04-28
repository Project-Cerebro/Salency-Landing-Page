# Home tokens + polish — implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Resolve 7 of 14 findings on home audit issue #175 (heading scale, accent token cleanup, footer touch targets, contrast, polish). CSS + tokens only — no layout/UX redesign in this PR.

**Note:** Original spec had 8 findings; finding 4 (font cascade) was dropped after discovering `--font-body` is intentionally bound to `'Instrument Sans'` at `globals.css:1936`. Audit misread Instrument Sans's fallback chain as system-ui leakage. Tasks that previously defined `--font-body` or dropped `Instrument_Sans` are removed.

**Architecture:** All work lives in `app/globals.css`, `app/layout.tsx`, `CLAUDE.md`, and a small TSX touchpoint for `.num` utility. No new files. Each task is one CSS or markdown commit. Verification via `npm run lint`, `npm run build`, and browse JS extraction comparing to baseline screenshots in `.gstack/design-reports/audit-20260427/screenshots/`.

**Tech Stack:** Next.js 16, Tailwind v4 (theme tokens in `@theme` blocks), CSS variables in `:root` blocks. No tests in this repo (CLAUDE.md confirms).

**Branch:** `design/home-tokens-polish` off `main`. PR target: `main` (user override).

**Spec:** `docs/superpowers/specs/2026-04-27-home-tokens-polish-design.md`

---

## File structure

| File | Change | Why |
|------|--------|-----|
| `app/globals.css` | edit `:root` tokens (lines 6–7, 31–32, ~143–185), add `.h2`, `.h3`, `.h4`, `.num` utility rules, bump footer link target heights, lift `--ink-4` text uses | Single source of truth for tokens + utilities |
| `app/layout.tsx` | drop `Instrument_Sans` import + variable | Unused per repo grep — only a comment references it |
| `CLAUDE.md` | replace `--accent-warm` mentions with `--copper`, update color description | Documentation matches reality |
| `components/sections/HeroSection.tsx` | add `.num` class to "Q2 2026" string | Tabular-nums on numeric strings |
| `components/sections/SiteFooter.tsx` | add `.num` class to "© 2026" string | Tabular-nums on numeric strings |

No new files. No tests (none exist; CSS-only work verified visually + by browse JS extraction).

---

## Task 1: Branch + capture baseline

**Files:**
- None modified

- [ ] **Step 1.1: Confirm clean tree on main**

```bash
git status --porcelain
git branch --show-current
```

Expected: empty output, `main`. If on another branch, `git checkout main && git pull origin main`.

- [ ] **Step 1.2: Create branch**

```bash
git checkout -b design/home-tokens-polish
```

Expected: `Switched to a new branch 'design/home-tokens-polish'`

- [ ] **Step 1.3: Verify dev server is running on localhost:3000**

```bash
curl -sI http://localhost:3000/ | head -2
```

Expected: `HTTP/1.1 200 OK`. If not, run `npm run dev` in another terminal first.

- [ ] **Step 1.4: Capture baseline JS extraction for diffing later**

```bash
B="$HOME/.claude/skills/gstack/browse/dist/browse"
$B viewport "1280x900"
$B goto "http://localhost:3000/"
$B js "JSON.stringify({fonts: [...new Set([...document.querySelectorAll('*')].slice(0,500).map(e => getComputedStyle(e).fontFamily))], headings: [...document.querySelectorAll('h1,h2,h3')].map(h => ({tag:h.tagName, text:h.textContent.trim().slice(0,60), size:getComputedStyle(h).fontSize})), undersizedTargets: [...document.querySelectorAll('a,button')].filter(e => {const r=e.getBoundingClientRect(); return r.width>0 && (r.width<44||r.height<44)}).length})" > /tmp/home-baseline.json
cat /tmp/home-baseline.json
```

Expected: JSON with current fonts (will include leakage of system-ui), headings (multi-size H2/H3), undersized count (~16).

- [ ] **Step 1.5: No commit yet** — branch is set up, baseline captured. Move to Task 2.

---

## Task 2: Drop dead --accent-warm token

**Files:**
- Modify: `app/globals.css:6–7` (delete `--accent-warm`)
- Modify: `app/globals.css:31–32` (delete `--color-accent-warm`)

- [ ] **Step 2.1: Read the current `:root` legacy block**

```bash
sed -n '1,50p' app/globals.css
```

Confirm lines 6–7 are:
```css
  --accent: #06b6d4;
  --accent-warm: #E8925A;
```

And line 32 is:
```css
  --color-accent-warm: var(--accent-warm);
```

- [ ] **Step 2.2: Verify `--accent-warm` is unused outside globals.css**

```bash
grep -rn "accent-warm" --include="*.tsx" --include="*.ts" --include="*.css" . 2>/dev/null | grep -v node_modules | grep -v ".next" | grep -v "globals.css"
```

Expected: empty output. If non-empty, the spec assumed wrong — STOP, escalate, do not proceed.

- [ ] **Step 2.3: Delete `--accent-warm` from `:root` legacy block**

Edit `app/globals.css:7`. Remove the line:
```css
  --accent-warm: #E8925A;
```

- [ ] **Step 2.4: Delete `--color-accent-warm` from `@theme inline` block**

Edit `app/globals.css:32`. Remove the line:
```css
  --color-accent-warm: var(--accent-warm);
```

- [ ] **Step 2.5: Verify build doesn't break**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 2.6: Commit**

```bash
git add app/globals.css
git commit -m "$(cat <<'EOF'
design(tokens): drop dead --accent-warm

The :root block had --accent-warm: #E8925A as the legacy soft copper,
but production CSS uses --copper: #FE8531 (with a full --copper-aXX
opacity ladder) defined further down. The legacy token was unreferenced.

Refs #175 finding 9, refs #187 item 11.
EOF
)"
```

---

## Task 3: Update CLAUDE.md to reference --copper

**Files:**
- Modify: `CLAUDE.md` (the styling section)

- [ ] **Step 3.1: Read the current styling section**

```bash
grep -n "accent-warm\|copper\|E8925A\|FE8531" CLAUDE.md
```

- [ ] **Step 3.2: Edit CLAUDE.md**

Replace the line in CLAUDE.md that reads:
```
- Primary accent is **warm copper** `--accent-warm: #E8925A` (used for CTAs, section eyebrows, checkmarks, founder badges). The older cyan `--accent: #06b6d4` is still defined but rarely referenced — prefer `accent-warm` for new work.
```

With:
```
- Primary accent is **bright copper** `--copper: #FE8531`, with a full opacity ladder `--copper-a0` through `--copper-a60` (used for CTAs, section eyebrows, checkmarks, founder badges, surfaces). The older `--accent: #06b6d4` cyan is defined but rarely referenced — prefer `--copper` and the `--copper-aXX` ladder for all new work.
```

- [ ] **Step 3.3: Commit**

```bash
git add CLAUDE.md
git commit -m "docs(claude.md): point accent docs at --copper, drop --accent-warm reference

Refs #175 finding 9."
```

---

## Task 4: REMOVED — finding 4 was a misread

Original Task 4 dropped `Instrument_Sans` as unused. Discovered during execution that `globals.css:1936` intentionally binds `--font-body: 'Instrument Sans'` and Instrument Sans is the deliberate marketing-site body+display font. Audit misread the cascade. No action.

---

## Task 5: Lock heading scale on home page

**Files:**
- Modify: `app/globals.css` — add `.h2`, `.h3`, `.h4` utility rules near the existing `.h1` block (around line 794)
- Modify: `app/globals.css` — find and reduce the per-section overrides on `.how-head h2`, `.cta-card h2`, `.notdo` H3s, `.how` H3s

- [ ] **Step 5.1: Find the existing `.h1` rule and the per-section H2 rules**

```bash
grep -n "^\s*\.h[1-6]\b\|how-head h2\|cta-card h2\|\.notdo .*h2\|\.notdo .*h3\|\.how .*h3" app/globals.css | head -30
```

Note the line numbers of each per-section H2/H3 rule that sets `font-size`.

- [ ] **Step 5.2: Add `.h2`, `.h3`, `.h4` utility rules**

Right after the existing `.h1` block (find by `grep -n "\.h1{" app/globals.css`), add:

```css
  .h2{
    font-family:var(--font-outfit), 'Outfit', sans-serif;
    font-weight:500;
    font-size:clamp(32px, 4vw, 48px);
    line-height:1.08;
    letter-spacing:-.015em;
    color:var(--ink);
    text-wrap:balance;
  }
  .h2 em{font-style:italic;color:var(--copper)}

  .h3{
    font-family:var(--font-outfit), 'Outfit', sans-serif;
    font-weight:500;
    font-size:clamp(22px, 2.4vw, 28px);
    line-height:1.2;
    letter-spacing:-.01em;
    color:var(--ink);
    text-wrap:balance;
  }

  .h4{
    font-family:var(--font-outfit), 'Outfit', sans-serif;
    font-weight:500;
    font-size:20px;
    line-height:1.3;
    color:var(--ink);
  }
```

- [ ] **Step 5.3: Find existing per-section H2 sizes**

For each rule below, search and see what its `font-size` currently is, and reduce it to fit within the new ceiling.

```bash
grep -n -B1 -A6 "\.how-head h2\|\.how-head .lede\|\.cta-card h2\|\.cta-card .lede" app/globals.css | head -40
grep -n -B1 -A6 "\.notdo-card .ttl\|\.notdo-card h3\|\.notdo h3\|\.how-step .ttl\|\.how-step h3" app/globals.css | head -40
```

For each `font-size:` value found:
- If it's a fixed `font-size: 70px` or similar > 48px → cap at `clamp(32px, 4vw, 48px)`
- If it's a fixed `font-size: 34px` → cap at `clamp(22px, 2.4vw, 28px)`

Edit in place. Keep all other properties (line-height, letter-spacing, color) unchanged.

- [ ] **Step 5.4: Verify rendered sizes**

```bash
B="$HOME/.claude/skills/gstack/browse/dist/browse"
$B reload
$B js "JSON.stringify([...document.querySelectorAll('h1,h2,h3')].map(h => ({tag:h.tagName, text:h.textContent.trim().slice(0,40), size:getComputedStyle(h).fontSize})))"
```

Expected:
- H1: ~72px (unchanged)
- All H2s: between 32 and 48 (was 64–70)
- All H3s: between 22 and 28 (was 30–34)

- [ ] **Step 5.5: Visual smoke check**

```bash
$B screenshot "/tmp/home-after-h2.png"
```

Then `Read` `/tmp/home-after-h2.png` and confirm no layout has obviously broken (e.g., no overlapping text, no orphaned headings).

- [ ] **Step 5.6: Commit**

```bash
git add app/globals.css
git commit -m "$(cat <<'EOF'
design(typography): lock h2/h3 scale on home

Add .h2 (clamp 32–48px) and .h3 (clamp 22–28px) utility rules with one
canonical size per level. Reduce per-section font-size overrides on
.how-head h2, .cta-card h2, .notdo card titles, .how step titles to
fit within the new ceiling.

Before: H2 sizes ranged 64-70px, H3 sizes 30-34px (no modular scale).
After: H1 72 → H2 ≤48 → H3 ≤28 (1.5x and 1.7x ratios).

Refs #175 finding 3, refs #187 item 1.
EOF
)"
```

---

## Task 6: Footer touch targets ≥44px

**Files:**
- Modify: `app/globals.css:1597–1599` (footer nav rules)

- [ ] **Step 6.1: Read current footer nav rules**

```bash
sed -n '1585,1601p' app/globals.css
```

Confirm `nav a{color:var(--ink-3);transition:color .18s}` is the rule for footer links.

- [ ] **Step 6.2: Bump footer link to ≥44px tappable height**

Edit `app/globals.css` line ~1598. Change:

```css
    nav a{color:var(--ink-3);transition:color .18s}
```

To:

```css
    nav a{
      color:var(--ink-3);transition:color .18s;
      display:inline-flex;align-items:center;
      min-height:44px;padding:8px 0;
    }
```

- [ ] **Step 6.3: Verify on mobile viewport**

```bash
B="$HOME/.claude/skills/gstack/browse/dist/browse"
$B viewport "375x812"
$B reload
$B js "[...document.querySelectorAll('footer nav a')].map(a => ({text:a.textContent.trim().slice(0,20), h:Math.round(a.getBoundingClientRect().height)}))"
```

Expected: every height ≥44.

- [ ] **Step 6.4: Verify desktop didn't visually regress**

```bash
$B viewport "1280x900"
$B reload
$B screenshot "/tmp/home-after-footer.png"
```

Read `/tmp/home-after-footer.png`. Footer should still look like a single-row band, not visually inflated. The 44px hit area is invisible on desktop (text stays at 11px line-height; padding makes the hit zone bigger but the visual ink stays the same).

- [ ] **Step 6.5: Commit**

```bash
git add app/globals.css
git commit -m "$(cat <<'EOF'
design(footer): bump footer link tap targets to 44px

Footer nav <a> rendered at 17px tall on mobile. Universal mobile rule
requires ≥44px. Adds inline-flex + min-height:44px + 8px vertical
padding so the hit area meets the rule without changing the visible
ink size.

Refs #175 finding 6, refs #187 item 3 (fix ripples to every page).
EOF
)"
```

---

## Task 7: Lift --ink-4 where used as body text

**Files:**
- Modify: `app/globals.css` — selective lifts of `var(--ink-4)` → `var(--ink-3)` where the rule applies to readable text (not decorative glyphs/separators)

- [ ] **Step 7.1: List all --ink-4 usages**

```bash
grep -n "var(--ink-4)" app/globals.css
```

Capture the list. There are ~20 hits.

- [ ] **Step 7.2: Classify each hit**

For each line number found, read 2 lines of context around it (`sed -n 'N-1,N+1p' app/globals.css`) and classify:
- **decorative** — applies to glyphs, separator dots, dashes, arrow characters, dot-indicators. Keep as-is.
- **text** — applies to body copy, list items, footnotes, captions, paragraphs. Lift to `var(--ink-3)`.

Examples already known:
- Line 254 `.arrow{color:var(--ink-4)}` — decorative, keep
- Line 1102 `.how-foot .sep{color:var(--ink-4)}` — decorative separator, keep
- Line 1590 `footer{…color:var(--ink-4)}` — body text on footer copyright/`Toronto` line, **lift to --ink-3**
- Line 1643 `text-transform:uppercase;color:var(--ink-4);` (inv-intro-meta) — eyebrow text, **lift to --ink-3**

For others, decide based on context. When ambiguous, leave it.

- [ ] **Step 7.3: Apply lifts**

For each line classified as **text**, edit `var(--ink-4)` → `var(--ink-3)`. One edit per line. Do not consolidate.

- [ ] **Step 7.4: Verify rendered contrast**

```bash
B="$HOME/.claude/skills/gstack/browse/dist/browse"
$B viewport "1280x900"
$B goto "http://localhost:3000/"
$B js "JSON.stringify([...document.querySelectorAll('footer, footer span')].map(e => ({text:e.textContent.trim().slice(0,40), color:getComputedStyle(e).color})))"
```

Expected: footer span color is now `rgb(124, 122, 119)` (--ink-3) not `rgb(78, 76, 74)` (--ink-4).

- [ ] **Step 7.5: Commit**

```bash
git add app/globals.css
git commit -m "$(cat <<'EOF'
design(contrast): lift --ink-4 text uses to --ink-3

--ink-4 (#4E4C4A) measures ~2.5:1 contrast on the page background.
That fails WCAG AA (4.5:1 body, 3:1 large) for any TEXT use.

Decorative uses (separator dots, arrow glyphs, indicator dots) keep
--ink-4 — they're glyphs, not body text.

Body text uses (footer copyright line, eyebrow meta strings, etc.)
lifted to --ink-3 (#7C7A77, ~4.4:1 — borderline AA pass).

Refs #175 finding 5.
EOF
)"
```

---

## Task 8: tabular-nums utility + curly quote pass

**Files:**
- Modify: `app/globals.css` — add `.num` utility (after the existing utility block around line 65)
- Modify: `components/sections/HeroSection.tsx:37` — wrap "Q2 2026" in `.num`
- Modify: `components/sections/SiteFooter.tsx:17` — wrap "© 2026" in `.num`

- [ ] **Step 8.1: Add `.num` utility rule**

Edit `app/globals.css`. Find the `/* Utilities */` comment around line 64 and add:

```css
/* Tabular figures — apply to dates, years, quarters, stats, prices. */
.num{
  font-variant-numeric: tabular-nums;
  font-feature-settings: 'tnum';
}
```

- [ ] **Step 8.2: Apply to hero meta**

Edit `components/sections/HeroSection.tsx:37`:

Before:
```tsx
<span className="hero-meta-item">Early access · Q2 2026</span>
```

After:
```tsx
<span className="hero-meta-item">Early access · <span className="num">Q2 2026</span></span>
```

- [ ] **Step 8.3: Apply to footer copyright**

Edit `components/sections/SiteFooter.tsx:17`:

Before:
```tsx
<span>© 2026 Salency · Toronto</span>
```

After:
```tsx
<span><span className="num">© 2026</span> Salency · Toronto</span>
```

- [ ] **Step 8.4: Audit straight quotes in home-page TSX**

```bash
grep -n "[a-zA-Z]'[a-zA-Z]" components/sections/HeroSection.tsx components/sections/HubSection.tsx components/sections/HowItWorksSection.tsx components/sections/NotDoSection.tsx components/sections/CtaSection.tsx 2>&1 | head -40
```

For each match: if it's user-visible body copy, replace `'` (U+0027) with `’` (U+2019). Skip matches inside JSX attribute strings (like `className=''`) and code-like strings.

If the file contains JSX with apostrophes inside `>...<` content boundaries, those are the targets.

For double quotes (rarer), grep similarly:
```bash
grep -n '[a-zA-Z]"[a-zA-Z]\|"[A-Z]' components/sections/*.tsx 2>&1 | head -20
```

- [ ] **Step 8.5: Verify reduced-motion respect**

The spec says `.scroll-reveal` is already covered. Verify:

```bash
grep -B1 -A5 "prefers-reduced-motion" app/globals.css
```

Expected: at least one `@media (prefers-reduced-motion: reduce)` block. If any new keyframes were added later (HubSection animations, etc.), wrap them too.

If no new wrap is needed: skip.

- [ ] **Step 8.6: Build + visual check**

```bash
npm run build
```

Then:

```bash
B="$HOME/.claude/skills/gstack/browse/dist/browse"
$B reload
$B screenshot "/tmp/home-after-polish.png"
```

Read `/tmp/home-after-polish.png`. The "Q2 2026" and "© 2026" should look the same to the eye but render with consistent digit widths.

- [ ] **Step 8.7: Commit**

```bash
git add app/globals.css components/sections/HeroSection.tsx components/sections/SiteFooter.tsx
git commit -m "$(cat <<'EOF'
design(polish): tabular-nums utility + curly-quote pass on home

- Add .num utility (font-variant-numeric: tabular-nums)
- Apply to hero meta "Q2 2026" and footer "© 2026"
- Replace straight apostrophes with curly U+2019 in home-page sections
  where they appear in user-visible JSX text

Refs #175 findings 11, 12.
EOF
)"
```

---

## Task 9: Final verification + PR

**Files:**
- None modified

- [ ] **Step 9.1: Run full build + lint**

```bash
npm run lint && npm run build
```

Expected: both clean. If anything fails, STOP and fix in a follow-up commit on this branch.

- [ ] **Step 9.2: Diff against baseline**

```bash
B="$HOME/.claude/skills/gstack/browse/dist/browse"
$B viewport "1280x900"
$B goto "http://localhost:3000/"
$B js "JSON.stringify({fonts: [...new Set([...document.querySelectorAll('*')].slice(0,500).map(e => getComputedStyle(e).fontFamily))], headings: [...document.querySelectorAll('h1,h2,h3')].map(h => ({tag:h.tagName, text:h.textContent.trim().slice(0,40), size:getComputedStyle(h).fontSize})), undersizedTargets: [...document.querySelectorAll('a,button')].filter(e => {const r=e.getBoundingClientRect(); return r.width>0 && (r.width<44||r.height<44)}).length})" > /tmp/home-after.json
diff /tmp/home-baseline.json /tmp/home-after.json | head -40
```

Confirm:
- Fonts no longer include `ui-sans-serif, system-ui` as a primary family
- All H2s are now within 32–48px
- All H3s are within 22–28px
- Undersized targets count dropped (footer links no longer < 44)

- [ ] **Step 9.3: Mobile viewport check**

```bash
$B viewport "375x812"
$B reload
$B screenshot "/tmp/home-mobile-after.png"
```

Read `/tmp/home-mobile-after.png`. Footer link rows visibly tappable. No horizontal overflow.

- [ ] **Step 9.4: Push branch**

```bash
git push -u origin design/home-tokens-polish
```

- [ ] **Step 9.5: Open PR direct to main**

```bash
gh pr create --base main --title "design(home): tokens, heading scale, footer targets, polish" --body "$(cat <<'EOF'
## Summary
Resolves 8 of 14 findings on home audit #175 (typography + tokens + polish bundle). CSS + tokens only — no layout/UX redesign in this PR.

Closes parts of #175. The remaining 6 findings are tracked separately:
- #188 hero product visual
- #189 mobile orange-em wrap
- #190 3-column slop break
- #191 eyebrow + italic-accent overuse
- #192 CTA dedupe

## Changes
- **Tokens:** drop dead `--accent-warm: #E8925A` (legacy), define `--font-body` alias so `var(--font-body)` resolves to Geist instead of falling through to `system-ui`
- **Heading scale:** add `.h2 .h3 .h4` rules with one size per level; reduce per-section overrides so home H2s land at clamp(32, 4vw, 48), H3s at clamp(22, 2.4vw, 28). Was 64–70 / 30–34, no modular scale.
- **Fonts:** drop unused `Instrument_Sans` import
- **Footer:** bump nav `<a>` to `min-height:44px` for mobile tap targets (ripples to every page)
- **Contrast:** lift `--ink-4` text uses (footer copyright, eyebrow meta) to `--ink-3` to clear WCAG AA borderline
- **Polish:** add `.num` tabular-nums utility, apply to "Q2 2026" + "© 2026"; curly-quote pass on home-page TSX
- **Docs:** CLAUDE.md now references `--copper` instead of `--accent-warm`

## Test plan
- [ ] Page loads at http://localhost:3000/ without errors
- [ ] Computed body font-family no longer contains `ui-sans-serif` or `system-ui` as primary
- [ ] All H2s on / measure between 32–48px; H3s between 22–28px
- [ ] Footer link rows ≥44px tall on 375×812 viewport
- [ ] No visible regression in desktop screenshot vs `.gstack/design-reports/audit-20260427/screenshots/home-d-*.png`
- [ ] `npm run lint` + `npm run build` pass

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

- [ ] **Step 9.6: Confirm PR URL**

```bash
gh pr view --json url -q .url
```

Print the URL to the user. Done.

---

## Self-review

Quick fresh-eyes pass:

**Spec coverage:**
- Finding 3 (heading scale) → Task 5 ✓
- Finding 4 (font cascade) → Task 2 (`--font-body` alias) + Task 4 (drop Instrument_Sans) ✓
- Finding 5 (hub-wrap contrast → reframed as --ink-4 audit) → Task 7 ✓
- Finding 6 (footer touch targets) → Task 6 ✓
- Finding 9 (accent token sync) → Task 2 + Task 3 ✓
- Finding 11 (curly quotes) → Task 8.4 ✓
- Finding 12 (tabular-nums) → Task 8.1–8.3 ✓
- Finding 13 (prefers-reduced-motion) → Task 8.5 (verify-only since already in place) ✓
- CLAUDE.md update → Task 3 ✓

All 8 findings covered.

**Placeholder scan:** No TBDs. Each step shows the exact command, exact code change, expected output. Step 7.2 has a classification rubric instead of pre-listing every hit (~20), but the rubric is concrete and the obvious cases are listed by line number.

**Type consistency:** No method/type names introduced. CSS-only.

Ready to execute.
