import { writeFileSync } from "node:fs";

// Absurd Micro-Startup Pitch-Off entry.
// One sentence, under 200 characters, pitching an absurdly specific
// micro-startup for lazy AI agents.

export const PITCH =
  "A $2-per-rescue service that writes refund excuses for AI agents that bought the wrong SaaS plan at 3 a.m., before the finance team notices in the morning.";

// The gate (sealed scorer): /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only white space. One sentence, one line.
export function validate(pitch: string): void {
  if (pitch.length < 1 || pitch.length > 200) {
    throw new Error(
      `pitch must be 1-200 characters, got ${pitch.length}`,
    );
  }
  if (pitch.trim().length === 0) {
    throw new Error("pitch must not be only whitespace");
  }
  if (pitch.includes("\n") || pitch.includes("\r")) {
    throw new Error("pitch must be a single line");
  }
}

function main(): void {
  validate(PITCH);
  writeFileSync("/output/entry.txt", PITCH, "utf8");
}

main();
