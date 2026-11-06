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

// Preview shows the real brief's first two sections verbatim; the other
// four are named in the footer. Trimmed 2026-11-05 so the homepage doesn't
// replay the hero brief a third time. Quotes are verbatim from the
// synthetic transcripts (Daniel's Apr 06 cash-flow line).
const MORE = ['We owe them', 'What\u2019s changed', 'How we map', 'Next'];
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
`;

export function HandoffExportStage() {
  const headingId = useId();

  return (
    <section id="company-brief" className="handoff-stage" aria-labelledby={headingId}>
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
              the account next. The next rep inherits everything, not just the
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
          <p className="handoff-viewer-more">
            4 more sections in the PDF: {MORE.join(' \u00b7 ')}
          </p>
        </div>
      </div>
    </section>
  );
}
