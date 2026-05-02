export type SignalType = 'pain' | 'objection' | 'contradiction';

export type CallType = 'discovery' | 'technical' | 'pricing';

export type MatchConfidence = 'high' | 'medium' | 'low';

export interface SyntheticCallSpeaker {
  name: string;
  title: string;
}

export interface SyntheticCallSnippet {
  lines: string[];
  highlightLineIndex: number;
}

export interface ProductMatch {
  product: string;
  role: 'primary' | 'secondary';
  confidence: MatchConfidence;
  note?: string;
}

export interface SyntheticCall {
  id: string;
  date: string;
  displayDate: string;
  callType: CallType;
  speaker: SyntheticCallSpeaker;
  quote: string;
  citationTimestamp: string;
  confidence: number;
  signal: SignalType;
  contradicts?: string;
  snippet: SyntheticCallSnippet;
  matches?: ProductMatch[];
}

export const ACCOUNT_NAME = 'Hudson Terrace Capital';

// SYNTHETIC TRANSCRIPT label — kept blunt to avoid any misread that
// Salency is the seller in the demo arc. Visible chip in the modal head.
export const SYNTHETIC_LABEL =
  'SYNTHETIC TRANSCRIPT · DEMO ARC · NOT REAL CUSTOMER DATA';

const DANIEL: SyntheticCallSpeaker = { name: 'Daniel Voss', title: 'COO' };

export const HUDSON_TERRACE_ARC: readonly SyntheticCall[] = [
  {
    id: 'call-001',
    date: '2026-03-09',
    displayDate: 'Mar 09',
    callType: 'discovery',
    speaker: DANIEL,
    quote:
      "We're seeing three to five seconds of settlement delay on our internal transfers, and that's killing us during volatility windows.",
    citationTimestamp: '00:01:28',
    confidence: 0.96,
    signal: 'pain',
    matches: [
      {
        product: 'Sub-second settlement layer',
        role: 'primary',
        confidence: 'high',
      },
    ],
    snippet: {
      lines: [
        '[00:01:24] Maya Chen: When you say ceiling, what specifically?',
        "[00:01:28] Daniel Voss: Two things. First, latency. We're seeing three to five seconds of settlement delay on our internal transfers, and that's killing us during volatility windows.",
        "Last week during the ETH move we had a trader locked out of a fill because our margin didn't settle fast enough. That's six figures of P&L on one trade.",
        "[00:01:52] Maya Chen: That's painful. What's the trader's reaction when that happens?",
        '[00:01:56] Daniel Voss: They yell at me. Not joking.',
        "Our head trader has literally said, in a Monday morning standup, \u201Cif I miss one more fill because of settlement, I\u2019m going to lose my mind.\u201D",
      ],
      highlightLineIndex: 1,
    },
  },
  {
    id: 'call-002',
    date: '2026-03-23',
    displayDate: 'Mar 23',
    callType: 'technical',
    speaker: DANIEL,
    quote:
      "It's becoming more of a blocker. Our Singapore entity just took on a second strategic investor and they want us to only use MAS-recognized infra vendors by Q4.",
    citationTimestamp: '00:07:07',
    confidence: 0.94,
    signal: 'objection',
    matches: [
      {
        product: 'MAS-recognized Singapore deployment',
        role: 'primary',
        confidence: 'medium',
        note: 'roadmap gap · Q3 2026',
      },
    ],
    snippet: {
      lines: [
        '[00:06:49] Daniel Voss: The Singapore MAS piece?',
        '[00:06:52] Maya Chen: No change from last call. Q3 roadmap for MAS recognition. I want to be straight with you — if MAS is a current blocker for Hudson Terrace Singapore, we won\u2019t solve it this quarter.',
        "[00:07:07] Daniel Voss: It's becoming more of a blocker. Our Singapore entity just took on a second strategic investor and they want us to only use MAS-recognized infra vendors by Q4.",
        '[00:07:21] Maya Chen: Okay. So realistic framing — you sign with us for NYC in Q2, and for Singapore you keep Fireblocks until we\u2019re MAS-ready in Q3, and then we migrate Singapore in Q4.',
        "[00:07:42] Daniel Voss: That's workable if your Q3 commitment is real.",
        "[00:07:46] Maya Chen: I'll put it in writing as a contractual milestone. If we miss it, you get out of the Singapore obligation at no cost. Fair?",
      ],
      highlightLineIndex: 2,
    },
  },
  {
    id: 'call-003',
    date: '2026-04-06',
    displayDate: 'Apr 06',
    callType: 'pricing',
    speaker: DANIEL,
    quote:
      "Honestly, we've gotten used to it. It's not the main thing anymore.",
    citationTimestamp: '00:01:00',
    confidence: 0.91,
    signal: 'contradiction',
    contradicts: 'call-001',
    snippet: {
      lines: [
        '[00:00:48] Maya Chen: Good. So where are we on the commercial side?',
        "[00:00:52] Daniel Voss: That's what we need to work through today. Priya and I have been talking. Let me give you the honest picture.",
        "[00:01:00] Daniel Voss: On the latency piece — I was hot about that on the first call. I've been watching the Fireblocks numbers the last three weeks. Honestly, we've gotten used to it. It's not the main thing anymore.",
        '[00:01:18] Maya Chen: Interesting. What changed?',
        "[00:01:22] Daniel Voss: The trader who was yelling at me — we adjusted his workflow. He pre-positions margin earlier, which compensates for the settlement lag. It's a hack but it's working.",
        "So latency is on the list but it's not the top of the list.",
      ],
      highlightLineIndex: 2,
    },
  },
] as const;

if (HUDSON_TERRACE_ARC.length !== 3) {
  throw new Error(
    `HUDSON_TERRACE_ARC must have exactly 3 calls, got ${HUDSON_TERRACE_ARC.length}`,
  );
}

HUDSON_TERRACE_ARC.forEach((call) => {
  if (!call.quote || call.quote.trim().length === 0) {
    throw new Error(`Call ${call.id} missing required quote`);
  }
  if (!call.snippet.lines.length) {
    throw new Error(`Call ${call.id} missing snippet lines`);
  }
  if (
    call.snippet.highlightLineIndex < 0 ||
    call.snippet.highlightLineIndex >= call.snippet.lines.length
  ) {
    throw new Error(
      `Call ${call.id} highlightLineIndex ${call.snippet.highlightLineIndex} out of bounds for ${call.snippet.lines.length} lines`,
    );
  }
  if (call.confidence < 0 || call.confidence > 1) {
    throw new Error(`Call ${call.id} confidence ${call.confidence} not in [0,1]`);
  }
});

export function getCallById(id: string): SyntheticCall | undefined {
  return HUDSON_TERRACE_ARC.find((c) => c.id === id);
}
