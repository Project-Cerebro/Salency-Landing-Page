# Cerebro Landing Page — Design & Content Tasks

## This Week (High Priority)

- [x] Fix hero headline and sub-headline to match the brief
  - Headline → "AI that remembers every customer pain your sales reps forget."
  - Sub → "Gong records your calls. Cerebro solves what happens after."
  - Cut the 4 body copy blocks above the CTA down to 2 tight lines

- [x] Add Gong comparison table (positioning / wedge section)
  - Added between Solution and Results sections
  - 6-row table: Records calls, Coaches reps, Extracts pain, Maps pain→product, Context-aware follow-ups, Successor context

- [x] Add Team section (3 co-founders)
  - Added between Results and Pilot CTA sections
  - Howard, Nikki Ip, Babajide Okusanya with avatar initials and bios

- [x] Fix Results section — remove "Close More Deals" framing
  - New heading: "What changes when nothing gets lost."
  - New items: Capture what gets lost / Re-engage at the right moment / Faster rep ramp / Expansion revenue

- [x] Trim signup form to 4–5 fields
  - Removed phone number from: FormData interface, form JSX, Zod schema, API destructuring, admin email template

## Next Sprint

- [ ] Replace or reframe the product mockup
  - Current mockup shows a CRM-like live dashboard (doesn't match MVP)
  - Should show actual workflow: transcript in → structured output out
  - Highlight citations and confidence scores (stated key differentiator)

- [ ] Rewrite Problem section with two-persona framing (from brief)
  - Persona 1: The rep who misses things in the moment
  - Persona 2: The successor who inherits nothing

- [ ] Remove/rewrite "Built to Fit Your Stack" section
  - Currently implies CRM integrations that don't exist in V1
  - Either cut or reframe to accurately describe what V1 does

- [ ] Add "How It Works" 3-step workflow visual
  - Step 1: Ingest your product catalog
  - Step 2: Upload a call transcript
  - Step 3: Get structured output (pain mappings, recap, follow-up draft)
  - This is different from the current "3 Pillars" — this shows user workflow

- [ ] Audit and cut ambient animations
  - Remove at least half: .breathe, .flow-particle, .shimmer-badge, .float-card are all running constantly
  - Keep only purposeful entry animations and hover states

## Polish (Design Bandwidth)

- [ ] Reconsider heading font — Outfit is becoming overused in startup space
  - Look for something more editorial with character
  - Consider compact condensed sans, a grotesque with personality, or a serif

- [ ] Pull back on cyan neon — let type and whitespace do more work
  - Reduce glow effects on cards and buttons
  - One well-placed accent > neon everywhere

- [ ] Fix broken nav and footer items
  - Remove "Home" link from nav (redundant on single page)
  - Fix mobile hamburger (currently non-functional)
  - Add contact email: founders@trycerebro.com
  - Add location: Toronto, Canada
  - Remove LinkedIn link unless it's a real active page

- [ ] Remove unsubstantiated stat
  - "70% of sales leaders lose $50K+ annually..." — needs a source or should be cut
