# LinkedIn Post: Evals for AI Coding Agents

## Hook (pick one)

I’ve spent plenty of time improving my AI coding workflows. Feedback loop is one of the strongest factors that introduce positive change.

## Body

Before AI, when shipping the code

I delegate 90%+ of my coding to AI. The output quality used to be inconsistent — sometimes great, sometimes a mess.

The fix wasn't a better model. It was evals.

An eval is a test for your AI. It checks whether the output is correct, consistent, and matches your standards.

Here's what I run after every AI code change:

**1. Build** — Can it compile? Sounds basic, but agents don't know until they try. One line in your guidelines file.

**2. Linters** — Static analysis catches what agents miss. My favorite: cognitive complexity checks. When the agent writes unreadable nested code, the linter sends it back to refactor. No human needed.

**3. Architecture rules** — I use dependency checkers to make sure the agent doesn't break module boundaries. This one saved me more times than I can count.

**4. Hooks** — I don't trust guidelines alone. I use hooks so checks run automatically when the agent stops. Deterministic trigger, deterministic check. No "forgetting" to run them.

The result: builds compile, no linter violations, architecture boundaries intact — before I even look at the code.

The beauty of this approach — none of it relies on AI. You combine a non-deterministic agent with deterministic tools. That feedback loop is what makes the difference.

## Closing (pick one)

- Intelligence of the model matters. But your guardrails matter just as much. I was getting impressive results since Sonnet 3.5.
- Start with one line in your guidelines file. Add a build check. Then a linter. It compounds faster than you think.
- The cheapest eval you can set up takes 30 minutes. The ROI is every code review after that.

## CTA

Link to both blog posts:

- Overview: /llm-evals-overview
- Static checks: /llm-evals-static

---

## Notes

- Keep under 1300 characters for optimal LinkedIn reach (current draft body is ~1100 chars)
- Consider adding a simple before/after code snippet as an image (the cognitive complexity example from the static checks post works well)
- Hashtags: #AgenticEngineering #AICoding #SoftwareEngineering
