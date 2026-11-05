// Barrel re-export. The synthetic-arc module was split into
// lib/synthetic-arc/{types,arc,signals,matches,brief,notifications,invariants}.ts
// in PR 1 of the Path D-Hybrid rebuild (Eng E-3 finding) so PR 2 can grow
// brief/match/notification shapes without churning a 5x-larger single file.
//
// Existing call-sites continue importing from `@/lib/synthetic-arc` — this
// file just forwards to the new modular directory.

export * from './synthetic-arc/index';
