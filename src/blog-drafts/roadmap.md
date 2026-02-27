# AI Coding Adoption Roadmap

> Identify where you are. See what to improve.

---

## The Stages

### Stage 1: Single Component with Iterations

Generate a single function, handler, component, or hook. Fix simple bugs. Each output requires careful review and several back-and-forth iterations. Fails when multiple components need to work together.

**How does it feel:** You're a typist with an autocomplete. You spend as much time fixing AI output as you would writing it yourself. Some days it feels like a novelty.

**Your role:** Writer who occasionally delegates sentences.

---

### Stage 2: Multi-Component with Iterations

Generate several components that work together and integrate into the existing system. Handler + service + repository. Component + hook + API call. Still requires careful review and several iterations.

**How does it feel:** You're a junior tech lead reviewing a fast but sloppy developer. The output is useful but needs corrections. Net positive, but you feel the ceiling.

**Your role:** Reviewer who guides output into shape.

---

### Stage 3: Multi-Component Generation, One Iteration

Components and small features are generated respecting your architecture, code style, and conventions. Minimal regression risk. One prompt, one review, done.

**How does it feel:** You're a senior engineer delegating to a competent mid-level. You describe what you need, review once, merge. The bottleneck shifts from writing code to deciding what to build.

**Your role:** Architect who specifies and reviews.

---

### Stage 4: Feature Generation

Generate complete features: API + business logic + UI + tests + migration. You describe the _what_ and _why_ — the agent handles the _how_. Review focuses on approach, not syntax.

**How does it feel:** You're a tech lead writing specs instead of code. When something goes wrong, it's usually because your spec was ambiguous — not because the agent is bad.

**Your role:** Product-minded engineer who specifies outcomes.

---

### Stage 5: Autonomous Task Completion

The agent picks up a well-defined ticket and delivers a complete, tested, reviewed PR. It runs tests, fixes failures, and iterates autonomously before requesting review.

**How does it feel:** You're an engineering manager running a team of agents. Your job is prioritization, specification quality, and architecture. The constraint is no longer "can we build it?" but "should we build it?"

**Your role:** Manager of autonomous contributors.

---

## Practices

Good engineering practices amplify AI coding tools. Bad ones limit them. Ordered from easiest to hardest to implement.

| Practice                                       | Difficulty  | What you get                                                                                                                                                                                                                  |
| ---------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Code style linter**                          | 🟢 Easy     | Agent generates code that looks like yours. Reviews stop being about formatting. [→ Read more](/blog/code-style-linter)                                                                                                       |
| **Basic prompting techniques**                 | 🟢 Easy     | Better first-attempt output. Less back-and-forth. Include file paths, constraints, architecture context. [→ Read more](/blog/prompting-techniques)                                                                            |
| **Small, focused tasks**                       | 🟢 Easy     | Agent succeeds more often when each prompt has one clear responsibility. [→ Read more](/blog/small-focused-tasks)                                                                                                             |
| **Unit testing**                               | 🟢 Easy     | Fast feedback on whether generated code works. Agent can verify its own output. [→ Read more](/blog/unit-testing)                                                                                                             |
| **Strong typing / type annotations**           | 🟢 Easy     | Agents understand data shapes and constraints through types. Fewer implicit rules to guess at. Free leverage in TypeScript and Go. [→ Read more](/blog/strong-typing)                                                         |
| **Simplified project structure**               | 🟢 Easy     | Flat beats deep nesting. Agents get lost in complex directory hierarchies with many micro-packages, just like new team members do. [→ Read more](/blog/simplified-project-structure)                                          |
| **Good docstrings and inline docs**            | 🟢 Easy     | Every new agent session starts cold. Docstrings are the cheapest way to reduce ramp-up time — good docs mean instant onboarding. [→ Read more](/blog/docstrings)                                                              |
| **Per-file validation commands**               | 🟢 Easy     | Run tsc, prettier, and tests per file instead of full project builds. Agents default to slow full builds — per-file commands give much faster feedback. [→ Read more](/blog/per-file-validation)                              |
| **Context management (CLAUDE.md / AGENTS.md)** | 🟡 Medium   | Agent knows your codebase persistently — architecture, patterns, conventions. No more explaining from scratch. Keep it minimal: onboarding doc, not encyclopedia. [→ Read more](/blog/context-management)                     |
| **Advanced linters (complexity)**              | 🟡 Medium   | Enforcing cognitive/cyclomatic complexity keeps generated code reviewable and maintainable. [→ Read more](/blog/advanced-linters)                                                                                             |
| **Architecture decision records**              | 🟡 Medium   | Feed architectural patterns to the agent. "Follow ADR-007" beats explaining your architecture every time. [→ Read more](/blog/architecture-decision-records)                                                                  |
| **Integration / API testing**                  | 🟡 Medium   | Catches gaps between generated components. Unit tests alone miss how pieces connect. [→ Read more](/blog/integration-testing)                                                                                                 |
| **Database migration patterns**                | 🟡 Medium   | Agent generates schema changes that are safe, reversible, and follow your workflow. [→ Read more](/blog/migration-patterns)                                                                                                   |
| **Trunk-based development**                    | 🟡 Medium   | Small, frequent merges reduce blast radius of any generated change. Big PRs are the enemy of AI-assisted flow. [→ Read more](/blog/trunk-based-development)                                                                   |
| **Implementation plans / strategy docs**       | 🟡 Medium   | Write a markdown plan with goals, constraints, edge cases, and step breakdown before prompting. Acts as a contract between you and the agent — better plans produce better code. [→ Read more](/blog/implementation-plans)    |
| **Code health / AI-readiness assessment**      | 🟡 Medium   | Measure code quality to know where agents can work effectively. Low-health code increases agent failure rate and token waste. Refactor before you automate. [→ Read more](/blog/code-health-assessment)                       |
| **Stable dependency management**               | 🟡 Medium   | Agents leave comments about why they chose one path. Casual dependency upgrades invalidate those decisions and cause context drift. Control your versions. [→ Read more](/blog/stable-dependencies)                           |
| **Plan-then-execute workflow**                 | 🟡 Medium   | Require the agent to outline its approach before writing code. Review the plan, then approve implementation. Catches misunderstandings before they become code. [→ Read more](/blog/plan-then-execute)                        |
| **E2E testing**                                | 🟠 Hard     | Trust that a generated feature works as a whole, not just in parts. [→ Read more](/blog/e2e-testing)                                                                                                                          |
| **Code review agent**                          | 🟠 Hard     | Automated first pass catches style violations, missing tests, and common mistakes before you look at it. [→ Read more](/blog/code-review-agent)                                                                               |
| **Architecture linters and scripts**           | 🟠 Hard     | Enforce boundaries programmatically — dependency rules, layer violations, import restrictions. The agent can't break what's mechanically enforced. [→ Read more](/blog/architecture-linters)                                  |
| **CI quality gates**                           | 🟠 Hard     | Every generated PR passes linting, tests, security, and architecture checks before a human sees it. [→ Read more](/blog/ci-quality-gates)                                                                                     |
| **Specification templates**                    | 🟠 Hard     | Standardized specs with acceptance criteria, edge cases, and constraints. Better specs produce better first-attempt code. [→ Read more](/blog/specification-templates)                                                        |
| **Observability and monitoring**               | 🟠 Hard     | Know if generated code behaves correctly in production, not just in tests. Build observability in from first generation — don't wait for the debug loop. [→ Read more](/blog/observability)                                   |
| **Hooks and pre-commit automation**            | 🟠 Hard     | Automated safeguards at three levels: review during generation, pre-commit check on staged files, full branch check before PR. Creates a refactoring loop on any quality regression. [→ Read more](/blog/hooks-and-precommit) |
| **Sub-agents for isolated tasks**              | 🟠 Hard     | Delegate research and exploration to sub-agents running in separate context windows. They report back summaries, keeping your main conversation clean for implementation. [→ Read more](/blog/sub-agents)                     |
| **Specialized review agents**                  | 🔴 Advanced | Security, performance, accessibility — different concerns need dedicated reviewers at scale. [→ Read more](/blog/specialized-review-agents)                                                                                   |
| **Agent guardrails and permissions**           | 🔴 Advanced | Define what the agent can and cannot do: which files, services, environments. Autonomy requires boundaries. [→ Read more](/blog/agent-guardrails)                                                                             |
| **Specification-driven development**           | 🔴 Advanced | Your specifications _are_ your code. The highest-leverage skill when agents handle implementation. [→ Read more](/blog/specification-driven-development)                                                                      |
| **Continuous feedback loops**                  | 🔴 Advanced | Track what tasks agents handle well vs. need human intervention. Use data to improve specs and tooling. [→ Read more](/blog/feedback-loops)                                                                                   |
| **Writer/Reviewer pattern**                    | 🔴 Advanced | Run parallel agent sessions — one writes, another reviews in a fresh context. Separation of concerns at the agent level eliminates self-review bias. [→ Read more](/blog/writer-reviewer-pattern)                             |

---

## Quick Self-Assessment

| Question                                                                 | If yes...             |
| ------------------------------------------------------------------------ | --------------------- |
| I mostly generate single functions and fix them manually                 | You're at **Stage 1** |
| I can generate multiple connected components but need several iterations | You're at **Stage 2** |
| Most of my generated code works on first try within our conventions      | You're at **Stage 3** |
| I describe features and get complete, tested implementations             | You're at **Stage 4** |
| I assign tickets to agents and review finished PRs                       | You're at **Stage 5** |

---

## The Underlying Principle

AI coding tools amplify your engineering practices — good and bad.

No tests → the agent can't verify its work. No architecture boundaries → the agent can't respect them. Vague specs → the agent guesses wrong. Spaghetti code → the agent writes more spaghetti, faster.

> The teams that adopt AI coding fastest aren't the ones with the best prompts. They're the ones with the best engineering foundations.
