// The Self-Checkout Is Judging You — one smug line from a judgmental till.
// Writes the entry to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR outside the grader).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  'Twelve yoghurts. No spoon, no bag, no plan — and you call this dinner?';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY, 'utf8');
