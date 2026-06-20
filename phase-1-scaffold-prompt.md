# Phase 1 — Scaffold (Claude Code task prompt)

> Paste this into Claude Code at the root of a new, empty Git repository. Read `CLAUDE.md` first; it is the source of truth for stack and conventions. This phase builds a correct, deployable skeleton only — **no design, no real content, no styling decisions** (those are Phases 2–3).

## Objective
Stand up the greenfield Astro project, tooling, and the CI/CD deploy pipeline to Hostinger. The output is a minimal site that builds and deploys, ready for the design system and content phases.

## Tasks

1. **Project init**
   - Initialize a new **Astro** (latest) project with **TypeScript strict** and `output: 'static'`.
   - Use **pnpm**. Add `.nvmrc` (Node **26**) and `"engines": { "node": ">=20" }`.
   - Set `site: 'https://linktothecloud.com'` in `astro.config`.

2. **Integrations**
   - Add `@astrojs/react` (islands), `@astrojs/mdx`, `@astrojs/sitemap`.
   - Keep config minimal and documented.

3. **Content Collections (structure only)**
   - Define typed collections `projects` and `blog` using Zod schemas (e.g. `title`, `description`, `pubDate`, `updatedDate?`, `draft`, `tags[]`, and for `projects` also `role?`, `stack[]?`, `summary`).
   - Add **one placeholder draft entry each** (`draft: true`) so schemas validate — no real content.

4. **Base layout + placeholder Home**
   - One base layout with a `<head>` that takes `title`/`description` props and emits semantic, accessible markup.
   - A placeholder Home page (semantic skeleton + title/meta only — **no design**) to prove the build renders.

5. **Tooling**
   - ESLint + Prettier with Astro plugins; strict `tsconfig`; `.editorconfig`.
   - `.gitignore` excluding `node_modules`, `dist`, `.env*`.

6. **CI/CD — `.github/workflows/deploy.yml`**
   - Trigger on push to `main`.
   - Steps: checkout → setup pnpm → setup Node (use `node-version-file: .nvmrc`, so local and CI match) → `pnpm install --frozen-lockfile` → `pnpm build` → **deploy `dist/` to Hostinger `public_html` via rsync over SSH**.
   - Read from **GitHub Secrets**: `SSH_HOST`, `SSH_USER`, `SSH_PORT` (65002 shared / 22 VPS), `SSH_KEY`, `DEPLOY_PATH`.
   - Deploy **only `dist/`** — never source, `.env`, or secrets.
   - Include a **commented FTPS fallback job** (using `FTP_*` secrets) for plans without SSH.

7. **README**
   - Local dev (`pnpm dev`), build (`pnpm build`).
   - Deploy setup: the exact GitHub Secrets to create; how to find the Hostinger SSH host/user/port (65002)/path; note the **Premium/Business plan requirement** for SSH.

## Constraints
- No design system, styling, or real content — Phases 2–3.
- No secrets or client data committed. Placeholder content stays `draft: true`.
- Placeholder Home ships **zero client JS**.

## Acceptance criteria
- `pnpm install && pnpm build` produces a static `dist/` containing the placeholder Home page.
- `pnpm dev` runs locally with no errors.
- `projects` and `blog` collection schemas typecheck and the placeholder drafts validate.
- `sitemap` and `robots` are generated on build.
- `.github/workflows/deploy.yml` is valid and, with the documented secrets set, deploys `dist/` to Hostinger on push to `main`; the FTPS fallback is present (commented) and documented.
- README documents the required secrets and the Hostinger plan/SSH prerequisites.
- Repo is clean: no `node_modules`, `dist`, or secrets committed; ESLint/Prettier pass.

## Verify before finalizing deploy
Confirm Nicole's Hostinger plan supports SSH/Git (Premium or Business). Capture the SSH host, username, port (65002 on shared), and target directory (`public_html`, or the subdomain folder). If the plan has no SSH, use the FTPS fallback or upgrade the plan.
