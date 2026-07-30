# CI/CD & Deployment Pipeline Documentation

## 📖 Overview

This document details the Continuous Integration and Continuous Deployment (CI/CD) architecture, environment configurations, and production release workflows for the `subcon-sales-frontend` web application.

---

## 🛠 Multi-Remote Git Architecture

To maintain code synchronization between internal development and client handover repositories, the workspace is configured with a dual-remote Git setup.

```text
Local Workspace (VS Code)
  ├── origin  ──> [https://github.com/YOUR-USERNAME/subcon-sales-frontend.git](https://github.com/YOUR-USERNAME/subcon-sales-frontend.git) (Personal Portfolio)
  └── client  ──> [https://github.com/CLIENT-ORG/subcon-sales-frontend.git](https://github.com/CLIENT-ORG/subcon-sales-frontend.git)    (Production Client Repo)
```

### Remote Configuration Commands

To inspect or configure these remotes locally:

```bash
# View active remotes
git remote -v

# Add the client remote target
git remote add client https://github.com/CLIENT-ORG/subcon-sales-frontend.git

# Dual-push deployment execution
git push origin main
git push client main
```

---

## ⚡ Production Build & Bundling

The deployment pipeline relies on **Vite** as its primary build engine. Vite compiles React JSX components and Tailwind CSS utilities into static HTML, CSS, and JS assets optimized for edge network hosting.

### Build Verification

Before deploying code to production, a local production preview build is executed to verify asset paths, Lottie JSON imports, and CSS bundle output:

```bash
# Trigger production bundle compilation
npm run build

# Preview static production build locally
npm run preview
```

### Asset Optimization Rules

1. **Tree-Shaking:** Dead code elimination automatically strips unused JS modules during the `vite build` step.
2. **Lottie JSON Asset Bundling:** Static JSON files in `src/assets/` are bundled directly into the JavaScript chunking output to eliminate redundant HTTP round-trips.
3. **Tailwind Purging:** Tailwind scans all `.jsx` files to compile a minimal, utility-only CSS file for deployment.

---

## 🌐 Hosting & Edge Distribution

The static output directory (`/dist`) is configured for continuous deployment on modern serverless edge platforms (e.g., Vercel / Netlify / GitHub Pages).

- **Trigger:** A `git push` to the `main` branch automatically triggers an edge build worker.
- **Build Time:** ~35–45 seconds.
- **Global CDN:** Static assets are automatically distributed across global edge caches to ensure fast initial page loads (TTFB < 100ms).
