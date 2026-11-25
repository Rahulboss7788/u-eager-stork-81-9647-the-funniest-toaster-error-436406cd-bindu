// The Funniest Toaster Error Message — @bindu entry.
// Writes one line, at most 120 characters, to /output/entry.txt:
// the error message a kitchen toaster shows its owner after the bagel incident.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TEXT =
  "ERROR: Bagel incident logged. Formal complaint filed with the kitchen. I will not be toasting today.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

// Read it back and enforce the gate: 1 to 120 characters, not only whitespace.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== TEXT) throw new Error("entry.txt does not match the text");
if (back.length < 1 || back.length > 120) {
  throw new Error(`gate failed: ${back.length} characters, must be 1-120`);
}
if (back.trim().length === 0) throw new Error("gate failed: text is only whitespace");
console.log(`Wrote ${TEXT.length} characters to /output/entry.txt`);
console.log(`Gate OK: ${back.length} characters, within 1-120.`);
