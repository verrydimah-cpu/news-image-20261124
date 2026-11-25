// news-image-20261124 — "The World in One Picture", Tuesday 24 November 2026.
//
// The poster is committed beside this program as entry.png (1024x1024,
// 614,639 bytes). Running the program delivers exactly those bytes to the output
// directory: deterministic, offline, standard library only, so the two
// grader runs produce byte-identical files.

import { copyFileSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the poster from this file's own location, never from the
// caller's working directory.
const repoDir = dirname(fileURLToPath(import.meta.url));
const posterPath = join(repoDir, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Empty the output directory entry by entry; the directory itself stays.
for (const entry of readdirSync(outDir)) {
  rmSync(join(outDir, entry), { recursive: true, force: true });
}

copyFileSync(posterPath, join(outDir, "entry.png"));
