# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Buyers (primary audience for every marketing page):** VP of Sales, RevOps leads, and customer-success leaders at B2B SaaS companies, deciding whether to apply for the pilot.

**The people the story is about (daily users):**
- The AE who walks out of a discovery call with real signal and loses it, because reps only write down what they already understand.
- The AE or CSM who inherits an account and starts from zero, because the system never gave them anything to remember.

**Secondary audience:** investors and accelerator reviewers. They are served on `/investors` only; other pages are not written for them.

## Product Purpose

Salency is account memory for sales teams: every call's pains, objections, competitors, requirements, and next steps are extracted, cited back to the transcript, mapped to the seller's own products, and merged into durable per-account context, so context outlives the rep who heard it.

Success on the site means a qualified buyer applies for the pilot. The pilot application is the single primary action.

## Positioning

Call recorders and AI notetakers (Gong, Fathom, Fireflies, Otter, Granola) capture the conversation. CRMs hold the fields. Salency is the account memory between them: what was said, mapped to what you sell, merged across calls, with contradictions flagged.

Guardrails:
- Salency is a platform (the memory layer). Recaps, follow-up drafts, and company briefs are surfaces on top of it, never the product itself.
- It works alongside your CRM. It does not replace it.
- It does not coach reps live during calls.
- It never claims to "close more deals." It keeps what gets lost.
- Never trash competitors. Name them precisely and position Salency as the layer they leave unaddressed.

## Operating Context

- Input today is a transcript: pasted text or an uploaded .txt / .vtt / .srt / .docx (up to 2 MB). Transcripts exported from any notetaker work; there is no direct notetaker integration. No audio or video.
- The seller's product catalog is built from their website URL, PDFs, or CSVs.
- Work is organized by prospect (account): multiple calls per account, contacts per account.

**Pilot terms (current product facts):** free 4–6 week pilot, 1–2 week setup, weekly extraction reports, 30-minute weekly debrief, no obligation to continue. After the pilot, pricing is per engagement and set with the customer; no list prices are published. Good fit: 5–50 reps, already using a notetaker or holding raw transcripts, reps inheriting accounts. Cohort dates are not product truth and live in page copy only.

## Capabilities and Constraints

The site may claim only what is on the shipped list. Anything else is described as not available, or not mentioned.

**Shipped (verified in product code, 2026-11-04):**
- Transcript upload (text formats above) with pre-scan that detects company and attendees.
- Product catalog ingestion from URL, PDF, CSV, with regeneration.
- Extraction of pains, objections, competitors, requirements, next steps, key events, and urgency, each with a verbatim quote and speaker.
- Pain → product and requirement → product mapping down to feature level, with confidence tiers (Strong / Probable / Speculative); unmatched pains go to an operational bucket.
- Call recaps and follow-up email drafts (subject + body).
- Per-prospect account memory: merged pains with sources, objections, requirements, competitors, key events, contacts with inferred stance, and todos. Prospect and contact merging.
- Cross-call contradiction detection: new claims labeled as contradicting or shifting earlier ones, shown side by side with both source quotes; pain-shift deltas.
- Exported company brief (PDF) per prospect.
- Dashboard (KPIs, recent meetings, follow-ups with overdue), in-app notifications, private vs workspace meeting visibility, transcript retention purge.

**Not shipped (do not claim, imply, or date):**
- Meeting bot / call recording capture (Zoom, Meet, Teams).
- CRM integrations (Salesforce, HubSpot, any).
- Cross-account search or pattern views across deals (search matches meeting title, company, and participant only).
- Timestamps on citations (quotes and speakers only).
- A "handoff brief" that regenerates itself. What exists is the exported company brief.

Confidence scores exist only on product mappings, not on every extraction.

## Brand Commitments

- **Voice (site-wide, all copy):** founder voice, direct and specific; no em-dashes; "our," not "the"; none of the banned words in `tone.md`; no hype, no exclamation points outside dialogue. `tone.md` is the detailed reference.
- **Team naming:** Howard and Nikki Ip are the named co-founders. Babajide Okusanya is credited as a technical contributor and is never publicly titled "Co-founder" unless his status formally changes.
- Contact: founders@salency.ai. Based in Toronto, Canada.

## Evidence on Hand

- **No customers, logos, testimonials, case studies, or product metrics exist.** Do not invent any.
- Proof is the real product (its artifacts and UI) and the founders' backgrounds.
- All demo content (`lib/synthetic-arc/`) is synthetic and must be labeled as synthetic wherever it appears.
- Founder photos: `public/founders/`. Logo and mark: `public/logo.png`, `public/salency-mark.svg`.

## Product Principles

1. **Only claim what ships.** The shipped list above is the ceiling for every page.
2. **Show the artifact, don't describe it.** Real product output, labeled synthetic, is the proof.
3. **Memory, not transcription.** Lead with durable account context; individual outputs are surfaces.
4. **Speak to the leader, dramatize the rep.** The buyer decides; the AE and inheriting CSM are the story.
5. **Precise about neighbors.** Name what notetakers and CRMs do well, then the gap, without disparaging them.
