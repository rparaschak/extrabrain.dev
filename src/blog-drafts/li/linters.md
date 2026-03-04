How to improve AI code quality for free.

You probably know that Coding Agent doesn't always follow the rules from your guideline files. Therefore, everything that can be checked by a static tool should be checked by it.
Why do I want to rely on non-deterministic guidelines if I can rely on deterministic static tools?

Linters are great, especially when combined with AI workflows. The idea is simple - agent runs a linter when the task is done, gets the feedback and fixes all warnings.

**What rules help me the most?**

Cognitive Complexity - When your function/component gets too long and has nested ifs, loops, and early returns stacked together, it becomes hard to read. This linter penalizes nesting and control flow branching. It forces the agent to extract smaller, readable functions.

Cyclomatic Complexity - similar to cognitive complexity, but a bit different. It counts the number of independent paths through your function. The more paths you have, the more edge cases and more potential bugs you have. It forces AI to simplify decision logic or break down the code.

Function Length, Function Arguments, Early Return - Simple ones but very efficient. When you are adjusting existing code it is very easy to start adding the logic in the existing function/component. These linters help prevent it.

The rules above are available in any popular linters.

How to integrate?

A. CLAUDE.md. Just add something like “After you are done with any code changes YOU MUST run linter and fix warnings and errors”.
B. Use Hooks. You are able to create a hook that is ALWAYS triggered on specific event.

For a long time I lived with solution A. It works fine, and I believe it is a solid start. Sometimes agent forgets to run the linter, so if you want to run linter every time - use option B.

Today I have a single command that runs a) linter; b) build; and c) auto tests; All of it is executed automatically when an agent is done with the task.
