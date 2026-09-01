# 🤖 AI Studio Vibe Coding Guidelines

Because you (the client) are using an AI agent (Google AI Studio / Vibe Coding tool) to make all the changes, the AI itself needs to handle the branching and deployment workflow. 

You don't need to run manual Git commands—you just need to **instruct the AI correctly** so it doesn't accidentally overwrite the live website.

## 📝 How to Prompt the AI (Copy & Paste this to start your session)

Whenever you start a new coding session, paste this exact prompt to the AI to establish the ground rules:

> **"Hello AI. We are working on the Bluepin web project. Here are your strict workflow rules:**
> 1. **Never commit directly to the `main` or `develop` branches.**
> 2. **Always sync/pull the latest code from `main` before starting our work today.**
> 3. **For any new feature or fix I ask for, create a new branch named `feat/[brief-description]`.**
> 4. **Write the code, make the changes, and commit them to this new branch.**
> 5. **When we are done, push the branch and instruct me to go to GitHub to open a Pull Request against the `develop` branch for staging preview."**

---

## 🚦 Your Workflow (As the Human Director)

1. **Start the Session:** Paste the prompt above into the AI.
2. **Vibe Code:** Ask the AI to build features, fix bugs, or change styles. Let it do all the coding and committing.
3. **Deploy to Staging (Preview):** 
   * When the AI says it has pushed the branch, go to GitHub.
   * Open a Pull Request from the AI's branch into the **`develop`** branch.
   * Firebase will automatically build a private Preview URL for you to click and test.
4. **Deploy to Production (Live):**
   * If the Staging URL looks perfect, go back to GitHub.
   * Open a Pull Request from the AI's branch into the **`main`** branch.
   * Merge it, and Firebase will update the live website!

## 🔄 If the AI Gets Stuck (Merge Conflicts)
If GitHub says you can't merge because of a "conflict", just tell the AI:
> *"AI, there is a merge conflict. Please fetch the latest `main` branch, merge it into our current branch, resolve any conflicts, and push again."*
