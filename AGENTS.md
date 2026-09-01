<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AI AGENT STRICT GIT WORKFLOW RULES
As an AI coding assistant operating in this repository, you MUST adhere to this workflow:
1. **NEVER COMMIT TO MAIN OR DEVELOP:** You are strictly forbidden from committing directly to the `main` or `develop` branches.
2. **ALWAYS SYNC FIRST:** Before starting any new task, pull the latest changes from `main`.
3. **FEATURE BRANCHES ONLY:** Always create and switch to a new branch (`feat/[description]` or `fix/[description]`) before writing code.
4. **COMMIT & PUSH:** Commit your changes to the feature branch and push to the remote.
5. **PR HANDOFF:** Tell the user to go to GitHub and open a Pull Request against `develop` so Firebase App Hosting can preview it.
