// FollowUpStage: homepage stage between Map and Export. Shows one
// follow-up draft for the synthetic Hudson Terrace account.
//
// Honesty guardrails (PRODUCT.md shipped list):
//   - Follow-up drafts ship: one editable email (subject + body) per call,
//     generated from that call's recap, pains, next steps and product
//     mappings (cerebro-backend src/inngest/functions/generate-follow-up-draft.ts).
//   - Drafts carry no quotes or citations, so this mock shows none.
//   - Salency doesn't send email. The rep edits and sends it themselves.
//   - Every fact in the draft traces to arc.ts or hudson-terrace-brief.ts:
//     Priya (call 03 00:52), SOC 2 owed since Mar 23 / reference calls x2 /
//     Anchorage creds (brief "We owe them"), MAS milestone with free exit
//     (call 02 07:46), pricing (call 03 is the pricing call).

import { useId } from 'react';
import { StageHead } from '@/components/sections/StageHead';

const TO = 'Daniel Voss · Hudson Terrace Capital';
const SUBJECT = 'Next steps from today’s call';

const BODY = [
  'Hi Daniel,',
  'Thanks for walking me through where you and Priya have landed.',
  'On our side: the SOC 2 Type II report, which I’ve owed you since Mar 23, and two reference calls, both from me by Friday. Raj is sending the Anchorage sandbox credentials by Friday too.',
  'On Singapore, the Q3 milestone for Monetary Authority of Singapore (MAS) recognition goes into the contract as we agreed on the 23rd: if we miss it, you’re out of the Singapore obligation at no cost.',
  'Once you’ve done the reference calls, would it help to get time with you and Priya on pricing?',
];

export function FollowUpStage() {
  const headingId = useId();

  return (
    <section className="followup-stage" aria-labelledby={headingId}>
      <div className="handoff-grid">
        <StageHead
          className="handoff-head"
          headingId={headingId}
          eyebrow="Follow up"
          h2={
            <>
              The follow-up, <em>drafted from the call.</em>
            </>
          }
          lede={
            <>
              After each call, Salency drafts the follow-up email from the
              recap, the pains and the next steps. Edit it, then send it
              yourself.
            </>
          }
        />

        <figure className="followup-mail" aria-label="Follow-up draft preview">
          <div className="handoff-viewer-head">
            <span className="handoff-viewer-name">
              Follow-up draft {'·'} Call 03 {'·'} Apr 06
            </span>
            <span className="synthetic-tag">Synthetic demo account</span>
          </div>
          <dl className="followup-meta">
            <div>
              <dt>To</dt>
              <dd>{TO}</dd>
            </div>
            <div>
              <dt>Subject</dt>
              <dd>{SUBJECT}</dd>
            </div>
          </dl>
          <div className="followup-body">
            {BODY.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="followup-signoff">
              Cheers,
              <br />
              Maya
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
}
