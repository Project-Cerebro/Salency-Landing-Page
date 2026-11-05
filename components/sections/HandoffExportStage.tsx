// HandoffExportStage — Path D-Hybrid section 5. Read-only preview of the
// company brief export. Demonstrates the rep-rotation use case (§6 thesis).
//
// Honesty guardrails (PRODUCT.md shipped list):
//   - The product exports a company brief per prospect as a PDF. Section
//     names and citation format mirror cerebro-frontend
//     src/lib/build-company-brief-html.ts. No markdown export, no copy.
//   - Citations carry speaker, role, date, call number. No timestamps.
//   - NO "API" / "webhook" / "machine-readable" / "automation" / "agent" / "MCP".
//   - NO CTA on this stage (Q6=iv lock — Surface stages are static read-only).

import { useId } from 'react';
import { StageHead } from '@/components/sections/StageHead';

const FILENAME = 'hudson-terrace-capital.pdf';

// Mock content mirrors the real brief's six sections. Quotes are verbatim
// from the synthetic transcripts (Daniel's Apr 06 cash-flow line).
const BRIEF = `Hudson Terrace Capital \u00b7 Company brief
3 calls indexed

01 \u00b7 People
  Daniel Voss, COO \u00b7 primary contact, champion
    "I want the cash flow flexibility."
    Daniel Voss, COO \u00b7 Apr 06, call 03
  Priya Mehta, Head of Ops \u00b7 operational evaluator
  Jordan Kim, CTO \u00b7 technical reviewer

02 \u00b7 They need
  1. Sub-second settlement
     Daniel Voss, COO \u00b7 Mar 09, call 01
  2. Multi-venue reconciliation
     Daniel Voss, COO \u00b7 Mar 09, call 01
  3. MAS-recognized Singapore deployment
     Daniel Voss, COO \u00b7 Mar 23, call 02

03 \u00b7 We owe them
  SOC 2 Type II report \u00b7 owed Mar 23 \u00b7 owner: Maya
  Anchorage sandbox creds \u00b7 due Fri \u00b7 owner: Raj
  Reference calls \u00d7 2 \u00b7 due Fri \u00b7 owner: Maya

04 \u00b7 What's changed
  Latency: blocker \u2192 resolved workaround
    Between call 01 and call 03. Verify before next call.
  SOC 2 cadence: annual \u2192 quarterly
    Between call 01 and call 03. Verify before next call.

05 \u00b7 How we map
  Atlas Settlement \u00b7 0.94 \u00b7 sub-second settlement
  Helix Recon \u00b7 0.92 \u00b7 multi-venue reconciliation
  Atlas Singapore \u00b7 0.85 \u00b7 MAS-recognized regional deployment

06 \u00b7 Next
  Apr 18 \u00b7 MSA signature target
  Apr 20 \u00b7 Kickoff
  May 1 \u00b7 Atlas Settlement Core live
  May 15 \u00b7 Helix Recon rollout
`;

export function HandoffExportStage() {
  const headingId = useId();

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
              Export the company brief as a PDF and hand it to whoever picks up
              the account next. The successor inherits everything, not just the
              pipeline stage.
            </>
          }
        />

        <div className="handoff-viewer" role="figure" aria-label={`${FILENAME} preview`}>
          <div className="handoff-viewer-head">
            <span className="handoff-viewer-name">{FILENAME}</span>
            <span className="synthetic-tag">Synthetic demo account</span>
          </div>
          <pre className="handoff-viewer-pre">
            <code className="handoff-viewer-code">{BRIEF}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
