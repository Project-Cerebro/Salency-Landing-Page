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

- [x] Replace or reframe the product mockup
  - New 2-panel interface: left = raw transcript with highlighted extractions, right = Cerebro output (pains + confidence scores + citations + product match + follow-up draft)
  - Shows actual V1 workflow accurately

- [x] Rewrite Problem section with two-persona framing (from brief)
  - Persona 1: The rep who misses things in the moment
  - Persona 2: The successor who inherits nothing

- [x] Remove/rewrite "Built to Fit Your Stack" section
  - Replaced with "What V1 gives you today" — honest description of current capabilities
  - No implied integrations

- [x] Add "How It Works" 3-step workflow visual
  - Step 1: Connect your product catalog (Upload icon)
  - Step 2: Upload a call transcript (FileText icon)
  - Step 3: Get structured output (Zap icon)
  - Added before the 3-pillar section within the solution section

- [x] Audit and cut ambient animations
  - Removed: .breathe, .flow-particle, .flow-particle-delayed, .shimmer-badge, .float-card, .flow-line, .flow-dot, .glow-card, .ready-pulse, .pulse-glow, .typing-cursor, .hero-card-1/2/3
  - Kept: .animate-in, .delay-*, .spotlight-card (all purposeful)

## Polish (Design Bandwidth)

- [x] Reconsider heading font — Outfit is becoming overused in startup space
  - Switched to Syne — geometric grotesque with strong character at display sizes, editorial without being quirky

- [x] Pull back on cyan neon — let type and whitespace do more work
  - Restored strategic cyan: blockquote borders, step numbers, V1 card glow, comparison header, Results border — purposeful not ambient

- [x] Fix nav and footer items
  - Removed "Home" link from nav
  - Fixed mobile hamburger (now a client component with toggle state)
  - Added founders@trycerebro.com to footer
  - Added "Toronto, Canada" to footer
  - Removed LinkedIn link
  - Added "Team" nav item linking to #team anchor

- [x] Remove unsubstantiated stat
  - Removed "70% of sales leaders lose $50K+ annually..." from Problem section
