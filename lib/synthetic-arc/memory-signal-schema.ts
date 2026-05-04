// Memory signal schema — the typed payload Salency extracts per indexed call.
// Used by /memory's β surface (SchemaList) to render seven signal types,
// each with a one-sentence definition and one canonical Hudson Terrace
// example payload.
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

export const MEMORY_SIGNAL_TYPES: readonly MemorySignalType[] = [
  {
    name: 'Pain',
    count: '7 across 3 calls',
    definition:
      'A customer-stated problem the rep should remember. Verbatim quote, speaker, citation, urgency-ranked.',
    example: [
      { key: 'speaker', value: 'Daniel Voss \u00b7 COO' },
      {
        key: 'text',
        value:
          '\u201c3 to 5 second settlement delays, killing us during volatility windows.\u201d',
        quote: true,
      },
      { key: 'call', value: 'Mar 09 \u00b7 Discovery \u00b7 00:01:28' },
      { key: 'confidence', value: '0.96', copper: true },
    ],
  },
  {
    name: 'Objection',
    count: '2 across 3 calls',
    definition:
      'A stated blocker or buying friction. Tracked separately from pain so closing logic can route them.',
    example: [
      { key: 'speaker', value: 'Daniel Voss \u00b7 COO' },
      {
        key: 'text',
        value:
          '\u201cMAS-recognized infra vendors by Q4.\u201d',
        quote: true,
      },
      { key: 'call', value: 'Mar 23 \u00b7 Technical \u00b7 00:07:07' },
      { key: 'blocking', value: 'true', copper: true },
    ],
  },
  {
    name: 'Contradiction',
    count: '1 across 3 calls',
    definition:
      "When a buyer's stated position shifts between calls. Both citations preserved so the rep sees the delta, not the overwrite.",
    example: [
      { key: 'topic', value: 'Latency: blocker \u2192 resolved workaround' },
      {
        key: 'from',
        value: '\u201ckilling us during volatility\u201d \u00b7 Mar 09 \u00b7 00:01:28',
        quote: true,
      },
      {
        key: 'to',
        value: '\u201cgotten used to it\u201d \u00b7 Apr 06 \u00b7 00:01:00',
        quote: true,
      },
      { key: 'span', value: '28 days', copper: true },
    ],
  },
  {
    name: 'Commitment',
    count: '3 open',
    definition:
      'Something we owe the customer. Owner, due date, status. Closes when delivered.',
    example: [
      { key: 'item', value: 'SOC 2 Type II report' },
      { key: 'owner', value: 'Maya' },
      { key: 'due', value: 'owed since Mar 23' },
      { key: 'status', value: 'open', copper: true },
    ],
  },
  {
    name: 'Stakeholder',
    count: '3 mapped',
    definition:
      "Who's in the room and where they sit. Stance is inferred from quote patterns across calls.",
    example: [
      { key: 'name', value: 'Daniel Voss' },
      { key: 'title', value: 'COO' },
      { key: 'stance', value: 'champion', copper: true },
      { key: 'quotes', value: '8 across 3 calls' },
    ],
  },
  {
    name: 'Product match',
    count: '5 ranked',
    definition:
      'A pain ranked against your catalog. Confidence-scored, role-tagged primary or secondary.',
    example: [
      { key: 'pain', value: '3-5s settlement delays' },
      { key: 'product', value: 'Atlas Settlement', copper: true },
      { key: 'capability', value: 'sub-second settlement' },
      { key: 'role', value: 'primary' },
      { key: 'confidence', value: '0.94', copper: true },
    ],
  },
  {
    name: 'Change delta',
    count: '2 detected',
    definition:
      'A non-contradiction shift. Cadence change, scope change, owner change. Same anchor pair, different topic.',
    example: [
      { key: 'topic', value: 'SOC 2 cadence: annual \u2192 quarterly' },
      { key: 'from', value: 'Mar 09 \u00b7 Discovery' },
      { key: 'to', value: 'Apr 06 \u00b7 Pricing' },
      { key: 'span', value: '28 days', copper: true },
    ],
  },
] as const;

/** The account this example schema is drawn from. Re-exported for callers
 *  that want to render an attribution line without importing arc.ts directly. */
export const MEMORY_SIGNAL_ACCOUNT = ACCOUNT_NAME;
