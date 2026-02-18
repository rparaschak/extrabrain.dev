Post 1 — The overview.
- "Your AI coding agent has no idea if its code is good. Here's how to tell it."
- This is the hook post. Map out the three layers: static analysis (linters), review agents, automated tests.
- Keep it high-level, opinionated. The key message: most teams adopting AI agents skip evals entirely and then wonder why output quality is inconsistent.
- This post should make people feel the pain.

Post 2 — Linters + Claude Code hooks. Don't just list linters — frame it as "the cheapest eval you can set up in 30 minutes."
- Show cognitive complexity checks, architecture rules, and how hooks give the agent instant feedback before it even submits code.
- The angle: this is the equivalent of giving your junior developer a style guide that actually enforces itself.
- Practical, concrete, short setup time. Include your actual hook config.

Post 3 — Review agents.
- This is your most contrarian piece. "One review agent is a rubber stamp. You need at least three."
- Explain why a single agent reviewing its own paradigm produces blind spots.
- Show the separation: guidelines compliance, architecture review, security/quality.
- This maps directly to how human code review works in strong teams — you wouldn't have one person review everything.
- Tie it to Claude Code implementation.

Post 4 — Backend testing: integration over API. This one needs a strong opinion up front: "API tests tell you your endpoints work. Integration tests tell you your system works. Guess which one AI agents actually need as feedback." The argument: when an agent generates a feature, integration tests catch the real breakage — data flow, side effects, service interactions. API tests are too shallow to serve as meaningful evals. Show a concrete example of an agent generating code that passes API tests but breaks integration.

Post 5 — Frontend testing. Frame around the unique challenge: frontend is where AI agents struggle most because the feedback loop is weakest. You can't easily tell an agent "this looks wrong." E2E tests and component integration tests become the agent's eyes. Show what a good frontend eval setup looks like and be honest about current limitations.

