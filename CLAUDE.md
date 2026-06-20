# CLAUDE.md — linktothecloud.com

Repo context and conventions for Claude Code. This file is the build-time source of truth; the project's master prompt holds the fuller planning rationale.

## What this is
Greenfield rebuild of Nicole Inman's portfolio + lead-generation site, replacing a slow, unplanned WordPress/Elementor site. Goals: fast, SEO-strong, minimal/technical, developer-credible. Markets Nicole as an **AI automation specialist / cloud automation architect / fullstack consultant**.

## Stack (locked)
- **Astro** (latest), static output (`output: 'static'`), **TypeScript strict**.
- **React only for interactive islands** (`@astrojs/react`). Default to `.astro` components; ship no client JS unless an island genuinely needs it.
- **Content:** Markdown/MDX via Astro **Content Collections** (typed schemas) for case studies and blog.
- **Package manager:** pnpm. **Node:** 24 LTS.
- Styling approach is decided in Phase 2 (design system). Keep it lightweight; no heavy UI frameworks.

## Hosting & deploy (locked)
- Host: **Hostinger** (existing), domain **linktothecloud.com**; static files served from `public_html`.
- **Build in CI only (GitHub Actions). Never build on Hostinger** — its native Git integration copies files but does not run build steps.
- Deploy: on push to `main`, GitHub Actions runs `pnpm install` → `astro build` → deploys `dist/` to Hostinger `public_html` via **SSH/rsync** (shared SSH port **65002**, VPS port 22). Node version comes from `.nvmrc` (24). Credentials in **GitHub Secrets**. FTPS fallback if the plan lacks SSH.
- Requires a Hostinger **Premium/Business** plan (SSH/Git). Verify tier and capture SSH host/user/port/path before finalizing deploy.

## Conventions
- Semantic, accessible HTML. **SEO-first:** per-page meta, Open Graph + Twitter, canonical, sitemap, robots, JSON-LD structured data (Person/Organization site-wide; per-project/article schema on those pages).
- **Performance budget:** near-zero JS by default; optimize images with `astro:assets` / `<Image>`; target fast LCP and high Lighthouse scores.
- Content separated from layout via Content Collections with Zod schemas.
- **No secrets, keys, `.env`, or client data committed to the repo, ever.**

## Site structure (MVP)
Home · About · Projects (case studies) · Contact · Blog ("AI's latest and greatest", static Markdown). **Waitlist is Phase 2.**

## Content rules (honesty — important)
- Positioning: AI-powered cloud automation architecture for business operations. Not "builds Power Apps / knows Azure" — those are tools.
- **Lead with the hero A→B case study:** (A) the shipped Power Platform Automated Intelligent Document Processing System (AP + PM) for a construction contractor — AI Builder document extraction, quote→PO→invoice→staging→accounting export, model-driven PM app with Heavy Job connector, source-controlled and pipeline-deployed via Azure DevOps; (B) the open-source re-architecture as a **tested OpenClaw autonomous-agent POC** (vision invoice extraction → Twenty CRM write → self-corrects on schema mismatch). B is the strongest AI evidence.
- **AI framing is legitimate but be specific per project.** The genuine AI anchors are the AI Builder ML document intelligence and the OpenClaw agent POC. Frame rule-based automation accurately as automation, not "AI." Never fabricate AI involvement, metrics, certifications, revenue, or outcomes.
- OpenClaw work is a **tested proof-of-concept, never a finished product**; treat governance (least-privilege, human-in-the-loop, sandboxing, client-owned infra) as a selling point.
- **Public repos only for work Nicole owns and may publish.** Client deliverables (the AP system, Azure DevOps client work) are case-study writeups with sanitized screenshots/architecture — never public code. The public-repo anchors are the OpenClaw POC (sanitized, synthetic invoice only) and the existing `LineChartPCFUpdate` PCF component.
- **Verified metrics, present honestly (do not inflate):** 100% Job Success, $30K+ earned, 8 jobs, 585 hours, 5.0 ratings, $60/hr — a strong *freelance* record, not enterprise scale. Education: UW MSIM (AI & Data Science focus, in progress); BAS, Bellevue College.
- **Differentiator to surface:** Nicole runs real ALM — source control + CI/CD pipelines for Power Platform solutions in Azure DevOps. Supports the "architect, not button-clicker" thesis.

## Voice
Direct, grounded, outcome-focused. Plain but professional. No hype, filler, or startup-speak. Lead with business outcomes: less manual data entry, fewer errors, better data accuracy, improved visibility, governed/connected workflows, repeatable automation assets. Never overstate.

## Build phases (do not jump ahead)
MVP: **1 Scaffold → 2 Design system → 3 Content pages → 4 SEO/performance → 5 Deploy.** Phase 2: **6 Waitlist** (lead capture to an external service; Twenty CRM candidate). Each phase is a separate, self-contained task prompt with its own acceptance criteria.
