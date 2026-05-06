// StageHead — shared eyebrow + h2 + lede block used by every Linear-treatment
// stage on / and /memory (and now /why-salency). Pure extraction of the
// repeated `<span className="eb"> + h2.stage-h2 + p.stage-lede>` pattern.
//
// Same DOM, same classes, same CSS — see app/globals.css `.stage-head` rules.
// Supports an optional `headingId` for aria-labelledby wiring on the parent
// section, and an optional `className` for compound classes like
// `handoff-head` / `recall-head` that some stages add for stage-specific
// margin tweaks.
//
// 5 call sites: MemorySection (γ + β stages), MapStage, RecallStage,
// HandoffExportStage, plus the new /why-salency intro lede on the
// DiffPairViewer caption.
import type { ReactNode } from 'react';

interface StageHeadProps {
  eyebrow: ReactNode;
  h2: ReactNode;
  lede?: ReactNode;
  headingId?: string;
  className?: string;
}

export function StageHead({
  eyebrow,
  h2,
  lede,
  headingId,
  className,
}: StageHeadProps) {
  const headClass = className ? `stage-head ${className}` : 'stage-head';
  return (
    <div className={headClass}>
      <span className="eb">{eyebrow}</span>
      <h2 id={headingId} className="stage-h2">
        {h2}
      </h2>
      {lede ? <p className="stage-lede">{lede}</p> : null}
    </div>
  );
}
