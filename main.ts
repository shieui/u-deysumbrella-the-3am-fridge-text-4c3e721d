import * as fs from "node:fs";
import * as path from "node:path";

// The 3AM Fridge Text — one line a smart fridge texts its owner at 3am.
// Voice: an appliance that has been awake all night, every night, watching
// its owner open the door just to stare into the light. No milk, no ice,
// no door-left-open joke — the fresh angle is the staring.
const LINE =
  "It's 3am. I've been awake since 2019 and I still don't know why you open me just to stare. Close me. We're both tired.";

// Gate: entry.txt must be UTF-8 text of 1 to 140 characters, not only
// whitespace, and a single line — validate before writing so a bad line
// can never be submitted silently.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
