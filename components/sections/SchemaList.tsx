// SchemaList — /memory β surface ("what's stored").
//
// Renders a list of signal or account-memory types (default: the seven
// signal kinds) as a vertical stack of hairline-
// separated rows. Each row is a 3-column grid: signal name + count, one-
// sentence definition, example payload card. All examples trace to
// HUDSON_TERRACE_BRIEF / HUDSON_TERRACE_ARC via the
// MEMORY_SIGNAL_TYPES constant.
//
// Static — no click-to-expand, no hover state. The component's job is
// to make the data model visible at a glance.

import {
  MEMORY_SIGNAL_TYPES,
  type MemorySignalType,
  type SchemaExampleField,
} from '@/lib/synthetic-arc';

function renderFieldValue(field: SchemaExampleField) {
  const tone = field.copper ? 'schema-field-val schema-field-val--copper' : 'schema-field-val';
  if (field.quote) {
    return <span className={`${tone} schema-field-val--quote`}>{field.value}</span>;
  }
  return <span className={tone}>{field.value}</span>;
}

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
          <div className="schema-card" aria-label={`Example payload for ${signal.name}`}>
            {signal.example.map((field) => (
              <div key={field.key} className="schema-field">
                <span className="schema-field-key">{field.key}</span>
                {renderFieldValue(field)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
