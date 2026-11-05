#!/usr/bin/env node
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const file = resolve('components/TranscriptSnippetModal.tsx');
const required = 'SYNTHETIC TRANSCRIPT';

if (!existsSync(file)) {
  console.error(`[check-synthetic-label] missing file: ${file}`);
  process.exit(1);
}

const contents = readFileSync(file, 'utf8');
if (!contents.includes(required)) {
  console.error(
    `[check-synthetic-label] required label "${required}" not found in ${file}`,
  );
  process.exit(1);
}
