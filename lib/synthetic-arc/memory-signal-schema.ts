// Memory signal schema. Used by /memory's β surface (SchemaList) to render
// the seven signal kinds taken from one call, then what Salency works out
// across calls. Each has a one-sentence definition and one Hudson Terrace
// example. Names and definitions follow GLOSSARY.md.
//
// Honesty boundary: every example below traces to HUDSON_TERRACE_ARC or
// HUDSON_TERRACE_BRIEF. No fictional names, no fabricated quotes, no
// product names outside the canonical Atlas / Helix / Vector / Anchor
// catalog. Counts ("7 across 3 calls", "2 detected") are descriptive of
// the demo arc, not a hard invariant — they read as "what this account
// looks like after three calls".

import { ACCOUNT_NAME } from './arc';

/** A single field row inside an example payload card. */
export interface SchemaExampleField {
  key: string;
  value: string;
  /** Render value as italic serif quote (verbatim transcript text). */
  quote?: boolean;
  /** Render value (or its trailing token) in copper accent. */
  copper?: boolean;
}

/** A single signal-type row rendered by SchemaList. */
export interface MemorySignalType {
  /** Mono caps name shown in the left column. */
  name: string;
  /** Descriptive count for this account ("7 across 3 calls"). */
  count: string;
  /** One-sentence definition. */
  definition: string;
  /** Example payload card fields. */
  example: SchemaExampleField[];
}

const DANIEL = 'Daniel Voss \u00b7 COO';
const MAYA = 'Maya Chen';
const MAR_09 = 'Mar 09 \u00b7 Discovery';
const MAR_23 = 'Mar 23 \u00b7 Technical';
const APR_06 = 'Apr 06 \u00b7 Pricing';

/** The seven signal kinds Salency takes from a single call (GLOSSARY.md:
 *  Signal). Every quote is verbatim from HUDSON_TERRACE_ARC snippets. */
export const MEMORY_SIGNAL_TYPES: readonly MemorySignalType[] = [
  {
    name: 'Pain',
    count: '2 across 3 calls',
    definition: 'A problem the account has now or is worried about.',
    example: [
      { key: 'speaker', value: DANIEL },
      {
        key: 'quote',
        value:
          '\u201cthree to five seconds of settlement delay on our internal transfers\u201d',
        quote: true,
      },
      { key: 'call', value: MAR_09 },
    ],
  },
  {
    name: 'Objection',
    count: '1 across 3 calls',
    definition: 'A stated reason not to buy yet, kept apart from pains.',
    example: [
      { key: 'speaker', value: DANIEL },
      { key: 'quote', value: '\u201cIt\u2019s becoming more of a blocker.\u201d', quote: true },
      { key: 'call', value: MAR_23 },
    ],
  },
  {
    name: 'Requirement',
    count: '1 across 3 calls',
    definition: 'Something the account explicitly said it needs or asked about.',
    example: [
      { key: 'speaker', value: DANIEL },
      {
        key: 'quote',
        value: '\u201conly use MAS-recognized infra vendors by Q4\u201d',
        quote: true,
      },
      { key: 'call', value: MAR_23 },
    ],
  },
  {
    name: 'Competitor',
    count: '1 across 3 calls',
    definition: 'Another vendor the account uses or is weighing.',
    example: [
      { key: 'competitor', value: 'Fireblocks', copper: true },
      {
        key: 'quote',
        value: '\u201cI\u2019ve been watching the Fireblocks numbers the last three weeks.\u201d',
        quote: true,
      },
      { key: 'call', value: APR_06 },
    ],
  },
  {
    name: 'Next step',
    count: '1 across 3 calls',
    definition: 'Something either side agreed to do, as said on the call.',
    example: [
      { key: 'speaker', value: MAYA },
      {
        key: 'quote',
        value: '\u201cI\u2019ll put it in writing as a contractual milestone.\u201d',
        quote: true,
      },
      { key: 'call', value: MAR_23 },
    ],
  },
  {
    name: 'Key event',
    count: '1 across 3 calls',
    definition: 'Something that happened at the account that changes the deal.',
    example: [
      { key: 'speaker', value: DANIEL },
      {
        key: 'quote',
        value: '\u201cOur Singapore entity just took on a second strategic investor\u201d',
        quote: true,
      },
      { key: 'call', value: MAR_23 },
    ],
  },
  {
    name: 'Urgency',
    count: '1 across 3 calls',
    definition: 'What makes the problem pressing, in their words.',
    example: [
      { key: 'speaker', value: DANIEL },
      {
        key: 'quote',
        value: '\u201cThat\u2019s six figures of P&L on one trade.\u201d',
        quote: true,
      },
      { key: 'call', value: MAR_09 },
    ],
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
    example: [
      { key: 'topic', value: 'Latency: blocker \u2192 resolved workaround' },
      {
        key: 'from',
        value: '\u201ckilling us during volatility\u201d \u00b7 Mar 09',
        quote: true,
      },
      {
        key: 'to',
        value: '\u201cgotten used to it\u201d \u00b7 Apr 06',
        quote: true,
      },
    ],
  },
  {
    name: 'Shift',
    count: '1 detected',
    definition:
      'A pain that changed between calls without contradicting what came before: scope, urgency, owner, or cadence.',
    example: [
      { key: 'topic', value: 'SOC 2 cadence: annual \u2192 quarterly' },
      { key: 'from', value: MAR_09 },
      { key: 'to', value: APR_06 },
    ],
  },
  {
    name: 'Commitment',
    count: '3 open',
    definition: 'Something your side said it will do and hasn\u2019t done yet.',
    example: [
      { key: 'item', value: 'SOC 2 Type II report' },
      { key: 'owner', value: 'Maya' },
      { key: 'status', value: 'open', copper: true },
    ],
  },
  {
    name: 'Contact',
    count: '3 known',
    definition:
      'A person at the account, with the stance Salency inferred from what they said.',
    example: [
      { key: 'name', value: 'Daniel Voss' },
      { key: 'title', value: 'COO' },
      { key: 'stance', value: 'champion', copper: true },
    ],
  },
  {
    name: 'Product match',
    count: '3 matched',
    definition:
      'A pain or requirement linked to a product in your catalog, with a confidence tier.',
    example: [
      { key: 'pain', value: '3-5s settlement delays' },
      { key: 'product', value: 'Atlas Settlement', copper: true },
      { key: 'tier', value: 'Strong', copper: true },
    ],
  },
] as const;

/** The account this example schema is drawn from. Re-exported for callers
 *  that want to render an attribution line without importing arc.ts directly. */
export const MEMORY_SIGNAL_ACCOUNT = ACCOUNT_NAME;
