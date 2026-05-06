'use client';

// HandoffExportStage — Path D-Hybrid section 5. Static markdown viewer
// with a copy button. Demonstrates the rep-rotation use case (§6 thesis).
//
// Honesty guardrails (spec section 5):
//   - "Paste into Notion, Slack, your CRM, or wherever the next rep lives" OK.
//   - NO "API" / "webhook" / "machine-readable" / "automation" / "agent" / "MCP".
//   - NO CTA on this stage (Q6=iv lock — Surface stages are static read-only).

import { useId, useState } from 'react';
import { StageHead } from '@/components/sections/StageHead';

const FILENAME = 'hudson-terrace-handoff.md';

// Locked markdown content per spec section 5 "Mock content". Verbatim
// references use Daniel's Apr 06 quote at 00:06:45 ("I want the cash
// flow flexibility") which exists in the synthetic transcripts.
const MARKDOWN = `# Hudson Terrace Capital \u00b7 Account Handoff
Generated 2026-04-06 \u00b7 3 calls indexed

## People
- **Daniel Voss**, COO \u00b7 primary contact, champion
  > "I want the cash flow flexibility." (Apr 06 \u00b7 00:06:45)
- Priya Mehta, Head of Ops \u00b7 operational evaluator
- Jordan Kim, CTO \u00b7 technical reviewer

## They need
1. **Sub-second settlement** \u00b7 Daniel \u00b7 Mar 09 \u00b7 00:01:28
2. **Multi-venue reconciliation** \u00b7 Daniel \u00b7 Mar 09 \u00b7 00:02:36
3. **MAS-recognized Singapore deployment** \u00b7 Daniel \u00b7 Mar 23 \u00b7 00:07:07

## We owe them
- [ ] SOC 2 Type II report (owed Mar 23, owner: Maya)
- [ ] Anchorage sandbox creds (due Fri, owner: Raj)
- [ ] Reference calls \u00d7 2 (due Fri, owner: Maya)

## What's changed
- Latency: blocker \u2192 resolved workaround (Mar 09 \u2194 Apr 06)
- SOC 2 cadence: annual \u2192 quarterly (Apr 06)

## How we map
1. Atlas Settlement \u00b7 0.94 \u00b7 sub-second settlement
2. Helix Recon \u00b7 0.92 \u00b7 multi-venue reconciliation
3. Atlas Singapore \u00b7 0.85 \u00b7 MAS-recognized regional deployment

## Next
- Apr 18 \u00b7 MSA signature target
- Apr 20 \u00b7 Kickoff
- May 1 \u00b7 Atlas Settlement Core live
- May 15 \u00b7 Helix Recon rollout
`;

export function HandoffExportStage() {
  const headingId = useId();
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(MARKDOWN);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable (older Safari, locked-down env). Fail
      // silently; user can still select+copy by hand from the viewer.
    }
  };

  return (
    <section className="handoff-stage" aria-labelledby={headingId}>
      <div className="handoff-grid">
        <StageHead
          className="handoff-head"
          headingId={headingId}
          eyebrow="Export"
          h2={
            <>
              Hand off the account, not just the <em>seat.</em>
            </>
          }
          lede={
            <>
              One-click markdown export. Paste it into Notion, Slack, your CRM,
              or wherever the next rep lives. The successor inherits everything,
              not just the pipeline stage.
            </>
          }
        />

        <div className="handoff-viewer" role="figure" aria-label={`${FILENAME} preview`}>
          <div className="handoff-viewer-head">
            <span className="handoff-viewer-name">{FILENAME}</span>
            <button
              type="button"
              className="handoff-viewer-copy"
              onClick={onCopy}
              aria-label={`Copy ${FILENAME} to clipboard`}
            >
              {copied ? 'Copied' : 'Copy'} {'\u2197'}
            </button>
          </div>
          <pre className="handoff-viewer-pre">
            <code className="handoff-viewer-code">{MARKDOWN}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
