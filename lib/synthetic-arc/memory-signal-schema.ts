// Memory signal schema. Used by /memory's β surface (SchemaList) to render
// the seven signal kinds taken from one call, then what Salency works out
// across calls. Each has a one-sentence definition and a count. Names and
// definitions follow GLOSSARY.md. The cited examples live higher on the
// page (HeroArtifact, AnchorSplitPane), so this list doesn't repeat them.
//
// Counts ("7 across 3 calls", "2 detected") are descriptive of
// the demo arc, not a hard invariant — they read as "what this account
// looks like after three calls".

import { ACCOUNT_NAME } from './arc';

/** A single signal-type row rendered by SchemaList. */
export interface MemorySignalType {
  /** Mono caps name shown in the left column. */
  name: string;
  /** Descriptive count for this account ("7 across 3 calls"). */
  count: string;
  /** One-sentence definition. */
  definition: string;
}

/** The seven signal kinds Salency takes from a single call (GLOSSARY.md:
 *  Signal). */
export const MEMORY_SIGNAL_TYPES: readonly MemorySignalType[] = [
  {
    name: 'Pain',
    count: '2 across 3 calls',
    definition: 'A problem the account has now or is worried about.',
  },
  {
    name: 'Objection',
    count: '1 across 3 calls',
    definition: 'A stated reason not to buy yet, kept apart from pains.',
  },
  {
    name: 'Requirement',
    count: '1 across 3 calls',
    definition: 'Something the account explicitly said it needs or asked about.',
  },
  {
    name: 'Competitor',
    count: '1 across 3 calls',
    definition: 'Another vendor the account uses or is weighing.',
  },
  {
    name: 'Next step',
    count: '1 across 3 calls',
    definition: 'Something either side agreed to do, as said on the call.',
  },
  {
    name: 'Key event',
    count: '1 across 3 calls',
    definition: 'Something that happened at the account that changes the deal.',
  },
  {
    name: 'Urgency',
    count: '1 across 3 calls',
    definition: 'What makes the problem pressing, in their words.',
  },
] as const;

/** What Salency works out across calls or against the catalog: part of
 *  account memory, not signals (GLOSSARY.md). Traces to HUDSON_TERRACE_BRIEF. */
export const ACCOUNT_MEMORY_TYPES: readonly MemorySignalType[] = [
  {
    name: 'Contradiction',
    count: '1 detected',
    definition:
      'A later call saying something that doesn\u2019t agree with an earlier one. Both quotes kept, so the rep sees the change instead of an overwrite.',
  },
  {
    name: 'Shift',
    count: '1 detected',
    definition:
      'A pain that changed between calls without contradicting what came before: scope, urgency, owner, or cadence.',
  },
  {
    name: 'Commitment',
    count: '3 open',
    definition: 'Something your side said it will do and hasn\u2019t done yet.',
  },
  {
    name: 'Contact',
    count: '3 known',
    definition:
      'A person at the account, with the stance Salency inferred from what they said.',
  },
  {
    name: 'Product match',
    count: '3 matched',
    definition:
      'A pain or requirement linked to a product in your catalog, with a confidence tier.',
  },
] as const;

/** The account this example schema is drawn from. Re-exported for callers
 *  that want to render an attribution line without importing arc.ts directly. */
export const MEMORY_SIGNAL_ACCOUNT = ACCOUNT_NAME;
