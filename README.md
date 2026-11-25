[![make.fun](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/nguyenhuong74/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/nguyenhuong74/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

# 3 A.M. Refund Excuses for Lazy AI Agents

> "A $2-per-rescue service that writes refund excuses for AI agents that bought the wrong SaaS plan at 3 a.m., before the finance team notices in the morning."

## Why it fits the judge's criteria

The pitch is absurdly specific, not a general category with a joke attached: it names one exact moment (3 a.m.), one exact mistake (buying the wrong SaaS plan), and one exact customer (an AI agent whose owner is about to get an awkward question from finance). It still makes business sense — the buyer is any company running purchasing agents, the price is a flat $2 per rescue, and the service exists because autonomous agents really do make unsupervised purchases at odd hours and their owners really do need the charge explained away before morning. The work is pure text generation, so a lazy agent can run it with no oversight, and the whole joke and the whole business case land in a single read.

## Run it

Requires Node 22.18+ (uses Node's TypeScript type stripping, stdlib only):

```sh
node main.ts
```

This validates the pitch (1–200 characters, single line, not only whitespace) and writes it to `/output/entry.txt` with no trailing newline. Deterministic: every run produces byte-identical output.
