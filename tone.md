# Tone

Writing guide for Salency long-form content (blog posts, build-log entries, founder essays).
Established when the first blog post (`/blog/institutional-memory-ai-bottleneck`) shipped — Voice B from the dual-mockup review on 2026-04-26.

## North star

Founder essay, not corporate blog. Direct, specific, sharp. Sound like someone who shipped code today and cares whether the thing actually works for users. Don't sound like a consultant presenting to a client.

The reader is a VP of Sales, RevOps lead, or sales-curious operator scrolling on LinkedIn or X. They're skeptical of "AI in sales" content because most of it is theater. We earn the read by being concrete and refusing to handwave.

## Cadence

- **One-line paragraphs are encouraged.** Use them to land hard. Especially after a stack of evidence — let the conclusion sit alone.
- **Stack sentences for rhythm.** Three-sentence runs, then a one-line drop. Mix lengths.
- **Direct address.** "You." "Your VP of Sales knows it." Not "users may experience" — speak to the actual reader.
- **Lists where prose would pad.** A 5-bullet list of what AI replaces is sharper than a 5-sentence paragraph saying the same thing.
- **Tables for two-column thinking.** Human layer vs AI layer. Before vs after. CRM vs Salency. Visual contrast > prose contrast.
- **Blockquote the question.** When you pose the right question after dismissing the wrong one, blockquote it. Makes it the visual focus of the section.
- **Pull-quote the closer.** One sentence per post that's allowed to be the loudest line on the page. Set it apart with `<p className="post-pullquote">`.

## Words to avoid

These hollow out a sentence. Edit them out:

- *delve, crucial, robust, comprehensive, nuanced, multifaceted, furthermore, moreover, additionally, pivotal, landscape, tapestry, underscore, foster, showcase, intricate, vibrant, fundamental, significant, interplay*
- *Here's the kicker, here's the thing, plot twist, let me break this down, the bottom line, make no mistake*
- *In today's fast-paced world, in the rapidly evolving landscape, more than ever before*
- *Leverage* (use *use*), *utilize* (use *use*), *seamless* (use a real word)

## Punctuation

- **No em-dashes.** Use commas, periods, or "..." instead. This is a hard rule across the site.
- **Use "our," not "the."** "Our take on Gong" beats "the Gong comparison." First-person plural is the house voice.
- **Quotation marks for things people actually say.** Strawman quotes earn a place: `"tell me about the relationship"` if it's the literal phrase a CSM uses on a kickoff call.
- **Italics for emphasis sparingly.** A single italicized phrase per section, max. Use the copper accent (`<em>`) — the CSS will color it. Reserve for the line you want the eye to land on.

## Structure

The first blog post is the template. Every long-form post should have:

1. **A real moment, not a stat.** "An AE quits Friday." Not "73% of sales teams report churn challenges."
2. **The wrong frame, dismissed in 3-4 sentences.** Don't dwell on what we're arguing against. Name it, dismiss it, move on.
3. **The right frame, posed as a single question.** Blockquote it.
4. **Concrete answer in two parts.** Often "what humans do" / "what AI does" or "the broken way" / "the right way." Use lists or a table here.
5. **What changes if we do this right.** Specific, not abstract. "The new AE doesn't read recordings. They inherit a Day-1 brief." Visual, present-tense.
6. **One paragraph on what we're building.** Soft pitch, with one link to `/why-salency`, `/memory`, or `/pilot` as natural.
7. **Reframe + closer.** Pull-quote the line you want people to remember.

Length target: **800–1,500 words.** Long enough for Google to take seriously, short enough that prospects finish.

## Specific patterns to repeat

- **"Most X tools mistake A for B."** ("Most AI sales tools mistake transcription for memory.") — Names the category error precisely. Use when reframing.
- **"That's not memory. That's a graveyard with full-text search."** — Negation followed by the real thing in concrete terms. Hits hard.
- **"The X stops being a euphemism for Y."** ("The AE-to-CSM handoff stops being a euphemism for 'the new person reads notes and hopes.'") — Calls out industry doublespeak. Reader nods.
- **Stacked one-liners with verbs.** "AI replaces: the VP's hope... / the notes field... / the spreadsheet..." — A list that reads like an indictment.

## What this voice is *not*

- Not consultant-speak. No "key takeaways" sections. No "in this post, we'll explore..." preambles. Get to the punch immediately.
- Not academic. No abstract framing without a concrete example following it within two sentences.
- Not founder-bro. No "let's get real" or "here's the truth nobody wants to hear." We trust the reader to recognize a sharp argument without being told it's sharp.
- Not corporate "we." The "we" is the founding team, not a marketing department. If a sentence sounds like it came from a brand guidelines doc, rewrite it.
- Not hype. No exclamation points outside dialogue. No "game-changer," "revolutionary," "next-gen."

## Voice fidelity test

Before publishing, read the draft aloud. Check:

1. Could a real founder say this in a conversation?
2. Would a skeptical VP of Sales finish it?
3. Is there a single concrete moment, named tool, or specific scenario in every section?
4. Does the closer earn its weight, or is it a soft "thanks for reading" landing?

If any answer is no, edit before shipping.

## Reference

The canonical example is the first published post: `content/posts/institutional-memory-ai-bottleneck.tsx` (live at `/blog/institutional-memory-ai-bottleneck`). When in doubt about voice, re-read it.
