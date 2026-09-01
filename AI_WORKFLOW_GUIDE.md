# 🚀 AI Studio Vibe Coding & Deployment Workflow

This guide outlines the safe, step-by-step process for making code changes via Google AI Studio, previewing them on a staging environment, and pushing them to the live production site.

## 🏗️ Our Environments
We use two separate Firebase App Hosting backends to safely manage deployments:

* **Production (Live Site):** Tied to the `main` branch. 
* **Staging (Preview Site):** Tied to the `develop` branch.

**Golden Rule:** *Never commit directly to `main` or `develop`.* Always use feature branches!

---

## 🔄 The 5-Step Workflow

### Step 1: Sync Your Environment (Crucial!)
Before starting any new coding session in AI Studio, you must ensure you have the latest code to avoid conflicts.
1. When importing the repository into AI Studio, ensure you are pulling the latest version of the `main` branch. 
2. If others have merged changes while you were away, you must sync (pull) those latest changes into your workspace before making new edits.

### Step 2: Create a Feature Branch
Before you ask the AI to write any code, isolate your work.
1. Create a new branch originating from `main`.
2. Give it a descriptive name (e.g., `update-hero-text` or `fix-footer-links`).

### Step 3: Vibe Code & Commit
1. Use AI Studio to prompt, generate, and refine your code.
2. Once the AI has created a working solution, commit those changes directly to your new feature branch.

### Step 4: Preview on Staging
To see your changes live on the internet without breaking the real website:
1. Go to the project repository on GitHub.
2. Open a **Pull Request (PR)** to merge your feature branch into the **`develop`** branch.
3. Merge the PR into `develop`.
4. Firebase App Hosting will automatically trigger a build. Within a few minutes, your changes will be live on the **Staging URL**.
5. Visit the Staging URL and test the AI's changes thoroughly.

### Step 5: Ship to Production
Once you have verified that everything looks perfect on Staging:
1. Go back to GitHub.
2. Open a new **Pull Request (PR)**, but this time merge your feature branch into the **`main`** branch.
3. Merge the PR.
4. Firebase App Hosting will automatically deploy your code to the live **Production URL**.

---

## ⚠️ Troubleshooting Merge Conflicts
If GitHub prevents you from merging into `main` because of "Merge Conflicts", it means someone else changed the exact same lines of code while you were working. 
To fix this:
1. Update your feature branch by pulling/merging the latest `main` branch into it.
2. Resolve the overlapping lines of code.
3. Push the resolved code, and the PR will turn green, allowing you to merge!
