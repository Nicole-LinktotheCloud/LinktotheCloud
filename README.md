# Link to the Cloud

Portfolio and lead-generation site for Nicole Inman — AI automation specialist and cloud automation architect. Built with Astro (static), TypeScript strict, deployed to Hostinger via GitHub Actions.

**Live site:** https://linktothecloud.com

---

## Local development

**Prerequisites:** Node 26 (`nvm use` or `fnm use`), pnpm.

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # outputs to dist/
pnpm preview    # preview dist/ locally
pnpm lint       # ESLint
pnpm format     # Prettier
```

---

## Deploy setup

Deploys automatically on push to `main` via `.github/workflows/deploy.yml`.  
Build runs in CI only — **never build on Hostinger directly**.

### GitHub Secrets to create

Go to **Settings → Secrets and variables → Actions → New repository secret** and add:

| Secret | Value |
|---|---|
| `SSH_HOST` | Hostinger SSH hostname (e.g. `srv123.hostinger.com`) — find in hPanel → Hosting → Manage → SSH Access |
| `SSH_USER` | SSH username — same section |
| `SSH_PORT` | `65002` for shared hosting; `22` for VPS |
| `SSH_KEY` | Private key for the SSH key pair you added to Hostinger (paste the full PEM including headers) |
| `DEPLOY_PATH` | Absolute path to your webroot, e.g. `/home/user/public_html` or `/home/user/domains/linktothecloud.com/public_html` |

**FTPS fallback** (if SSH unavailable — see commented job in deploy.yml):

| Secret | Value |
|---|---|
| `FTP_HOST` | FTP hostname from hPanel |
| `FTP_USER` | FTP username |
| `FTP_PASSWORD` | FTP password |
| `FTP_PATH` | Remote path, e.g. `/public_html` |

### Hostinger SSH prerequisites

SSH access requires a **Premium** or **Business** hosting plan. Starter plans do not include SSH.

1. Log in to **hPanel** → **Hosting** → **Manage** → **SSH Access**.
2. Enable SSH and generate or upload an SSH key pair.
3. Copy the hostname, username, and port (65002 for shared) into the GitHub Secrets above.
4. The `DEPLOY_PATH` is typically `/home/<username>/public_html` — verify in hPanel → **File Manager**.

### Generating an SSH key pair (if needed)

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/linktothecloud_deploy
# Upload the PUBLIC key (~/.ssh/linktothecloud_deploy.pub) to Hostinger hPanel
# Paste the PRIVATE key (~/.ssh/linktothecloud_deploy) into the SSH_KEY GitHub Secret
```

---

## Project structure

```
src/
  content/
    config.ts          # Zod schemas for content collections
    blog/              # Markdown blog posts
    projects/          # Markdown case studies
  layouts/
    BaseLayout.astro   # Base HTML layout with SEO <head>
  pages/
    index.astro        # Home page
public/
  robots.txt
.github/
  workflows/
    deploy.yml         # CI/CD: build + rsync deploy
```

## Build phases

1. **Scaffold** (this phase) — tooling, CI/CD, empty skeleton
2. **Design system** — typography, color, spacing tokens
3. **Content pages** — Home, About, Projects, Contact, Blog
4. **SEO / performance** — JSON-LD, image optimization, Lighthouse audit
5. **Deploy** — go live
6. **Waitlist** (Phase 2) — lead capture
