// news-image-20261118 — "Sum up 18 November's world news in one image".
//
// The poster itself ships in this repository as entry.png (drawn in
// poster.html, rendered to PNG). This program's whole job is to deliver
// those exact bytes to the output directory under the name entry.png.
// Node standard library only, no network, fully deterministic: every run
// writes the same file, byte for byte.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// (MAKEFUN_OUTPUT_DIR stands in for the grader's /output.)

import { copyFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outFile = join(targetDir, 'entry.png');

copyFileSync(join(here, 'entry.png'), outFile);
console.log(`entry.png delivered: ${statSync(outFile).size} bytes`);
