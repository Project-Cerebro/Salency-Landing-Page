// SchemaList — /memory β surface ("what's stored").
//
// Renders a list of signal or account-memory types (default: the seven
// signal kinds) as a vertical stack of hairline-separated rows. Each row
// is the type's name + count beside its one-sentence definition. The
// cited examples live higher on the page (HeroArtifact, AnchorSplitPane),
// so rows don't repeat them.
//
// Static — no click-to-expand, no hover state. The component's job is
// to make the data model visible at a glance.

import { MEMORY_SIGNAL_TYPES, type MemorySignalType } from '@/lib/synthetic-arc';

export function SchemaList({
  items = MEMORY_SIGNAL_TYPES,
}: {
  items?: readonly MemorySignalType[];
}) {
  return (
    <div className="schema-list">
      {items.map((signal) => (
        <div key={signal.name} className="schema-row">
          <div className="schema-name-col">
            <div className="schema-name">{signal.name}</div>
            <div className="schema-count">{signal.count}</div>
          </div>
          <div className="schema-def">{signal.definition}</div>
        </div>
      ))}
    </div>
  );
}
