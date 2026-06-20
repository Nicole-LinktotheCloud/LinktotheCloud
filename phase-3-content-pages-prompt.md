# Phase 3 — Content Pages (Claude Code task prompt)

> Read `CLAUDE.md` first. This phase fills in the real site — every page a visitor will see. Use the design system from Phase 2 (components, CSS variables, layout). **This is the most important phase — the copy, structure, and case studies ARE the product.**

## Voice & copy rules (critical — read before writing anything)
- Direct, grounded, outcome-focused. Plain but professional.
- Lead with **business outcomes**: less manual data entry, fewer operational errors, better data accuracy, improved visibility, governed/connected workflows, repeatable automation assets.
- **No hype, no filler, no startup-speak, no "passionate problem-solver" language.** No "leveraging cutting-edge solutions" or "transforming businesses." Write like a senior engineer explaining what they built and why it worked.
- **Never overstate.** Present metrics honestly. Don't inflate experience, certifications, or results.
- The AI framing is legitimate — but be **specific per project** about what each system actually was (ML document intelligence, rule-based orchestration, CI/CD, data integration). Don't call a deterministic Power Automate flow "AI."

## Pages to build

### 1. Home (`src/pages/index.astro`)
Replace the placeholder with the real home page. Structure:

**Hero section:**
- Headline: something direct about AI-powered automation architecture (not generic — this person designs systems that replace manual, fragmented operations with scalable workflows)
- Subline: one sentence grounding the claim — UW MSIM (AI focus), real project portfolio, open-source + Microsoft ecosystems
- Two CTAs: "View Projects" → /projects, "Get in Touch" → /contact

**Proof section (surface background):**
- Upwork metrics in a clean row: 100% Job Success · $30K+ earned · 5.0 rating · 585 hours
- Below that, 1-2 short testimonial quotes using `TestimonialCard`:
  - "Nicole provided expert, reliable Power Platform consulting and was a pleasure to work with — highly recommended."
  - "It was a pleasure to work with Nicole! Understood our needs and provided excellent documentation."

**What I do section:**
- 3-4 short capability blocks (not a services grid — just clear statements):
  - AI document intelligence & autonomous agents
  - Cloud automation architecture (Power Platform, Azure, open-source)
  - Fullstack development (TypeScript, React, custom components)
  - Source-controlled, pipeline-deployed solutions (CI/CD, ALM)

**Featured project preview:**
- The hero A→B case study as a card linking to its full page: "From Power Platform to open-source — the same AP automation system, rebuilt with an autonomous agent on contractor-owned infrastructure."

**CTA section:**
- "Have a system that's held together with spreadsheets and manual steps? Let's fix that." → /contact

### 2. About (`src/pages/about.astro`)

**Opening paragraph:** Who Nicole is in 2-3 sentences. AI automation specialist and cloud automation architect. Currently in the UW MSIM program (AI & Data Science focus, ~3rd quarter). Previously built automation systems across Microsoft Power Platform and Azure; now expanding into open-source, self-hostable architectures.

**Background section:**
- BAS in Computer & Information Systems (Application/Software Development), Bellevue College, 2017–2022
- UW MSIM — MS in Information Management, AI & Data Science focus, 2026–2028 (in progress)
- Freelance track record: 100% Job Success on Upwork, 5.0 across all rated engagements

**How I work section:**
- Source control and CI/CD pipelines for every solution (not just code-and-deploy — proper ALM)
- Solutions designed for the client's actual workflows, not forced into off-the-shelf patterns
- Open-source where it gives the client ownership; Microsoft where it's the right tool
- "Architect, not button-clicker" — custom connectors, data modeling, API integrations, not drag-and-drop forms

**Current focus:**
- Autonomous AI agents for business operations (OpenClaw + Twenty CRM + n8n)
- AI document intelligence (ML-based extraction, not just OCR)
- Open-source alternatives to vendor-locked enterprise tools

### 3. Projects (`src/pages/projects/index.astro` + individual pages)

**Projects index page:**
- Grid of `Card` components linking to individual case study pages
- Order: Hero case study first, then supporting projects

**Individual case study pages** (create as content collection entries in `src/content/projects/`):

#### 3a. HERO: Power Platform AP Automation → OpenClaw POC
**File:** `src/content/projects/ap-automation-system.md` (or `.mdx`)

This is TWO projects told as ONE story — the A→B arc.

**Part A — The shipped system:**
- Title: "Automated Intelligent Document Processing System"
- Client: a contracting company (via Fiverr) whose off-the-shelf AP software created more problems than it solved
- What was built: custom Power Platform solution merging project management + accounts payable into one environment
- Technical detail (pull from https://linktothecloud.com/ap-automation-solution/ — rewrite, don't copy verbatim):
  - AI Builder uploaders for Receipts, Quotes, Invoices, Custom docs → automated extraction
  - Quote → Purchase Order generation via custom command-bar command
  - PO with tax config, vendor details, cost codes, equipment codes, calculated totals, editable line-item grid
  - Invoice auto-populated by cross-referencing PO; approval workflows by invoice total; real-time discount recalculation
  - Approved invoices staged → Power Automate consolidates into Excel for accounting upload
  - Companion PM app: projects with cost codes, vendors, PO line items, equipment, employees, tickets; cost codes via custom Heavy Job connector
  - **Source-controlled and pipeline-deployed via Azure DevOps CI/CD**
- Stack: Power Apps (model-driven + canvas), Power Automate, AI Builder, SharePoint, Dataverse, Azure DevOps
- Role: Project Owner, Developer, Solution Architect

**Part B — The open-source rebuild (POC):**
- Title: "Autonomous AP Agent — Open-Source POC"
- Why: no vendor lock-in — contractor owns their own infrastructure and data
- What was proved: end-to-end document intelligence → CRM write
  - OpenClaw agent reads a scanned vendor invoice PDF using vision
  - Extracts: vendor name, invoice #, date, amount, PO reference, bill-to
  - Queries self-hosted Twenty CRM (Dockerized) for context
  - Writes a new invoice record with confirmed ID
  - **Self-corrects on schema mismatches** (queried metadata for valid status values, retried successfully)
- Ran on Claude Haiku 4.5 for cost efficiency
- Target stack: Twenty CRM + OpenClaw + n8n + Postgres, all containerized
- **Frame as tested proof-of-concept, not a finished product**
- Governance: least-privilege CRM credentials, human-in-the-loop approval, sandboxed, client-owned infra
- Link to: github.com/Nicole-LinktotheCloud/contractor-ops-twin-

**The arc framing:** "Built it on Microsoft. Then rebuilt it open-source so the contractor owns their data, their infrastructure, and their independence from any single vendor — including me."

#### 3b. Event Registration & Payment System
**File:** `src/content/projects/event-registration-system.md`
- Modernized a paper-based event registration (Women's Spiritual Retreat)
- QR-code + password-protected form; PayPal/Stripe payments
- Automated waiver emails; SharePoint flows verifying payments, updating records, confirming registration
- Stack: Power Automate, SharePoint, PayPal/Stripe integration
- Skills: Payment Gateway Integration, Email Automation, Web Development

#### 3c. Power BI & Azure Synapse Monitoring
**File:** `src/content/projects/synapse-monitoring-report.md`
- 12-page Power BI diagnostics report for real-time Synapse monitoring
- Tracks pipeline success/failure, API latency, SQL Serverless Pool performance
- Drill-down by activity type, views, external tables; time granularity (day, hour, minute)
- Power Query ETL integrating Azure Data Lake
- Environment-specific pages (Prod, Test, Dev)
- Stack: Power BI, Azure Synapse, Azure Data Lake, SQL, Power Query

#### 3d. Additional engagements (shorter entries)
Create brief entries for:
- Power Platform & Model-Driven Apps consulting + data migrations (5.0, 135 hrs)
- Document Management & Automation in Teams + SharePoint (5.0, 46 hrs)
- Power Apps Custom Connectors from scratch — repeat client, excellent documentation (5.0)

### 4. Blog (`src/pages/blog/index.astro` + `src/pages/blog/[...slug].astro`)

**Blog index page:**
- List of blog posts sorted by date (newest first)
- Each entry: title, date, description, tags
- No posts yet — but the page and routing must work. Create ONE starter post:

**Starter post:** `src/content/blog/why-open-source-automation.md`
- Title: "Why I'm Rebuilding Client Systems on Open-Source Infrastructure"
- A short post (400–600 words) explaining the pivot from Microsoft-only to open-source stacks
- Hit these points: vendor lock-in costs small businesses more than they realize; contractor should be able to fire the consultant and keep running; Twenty CRM + OpenClaw + Postgres as the reference stack; this isn't anti-Microsoft — it's pro-ownership
- Tone: direct, practical, opinionated but fair

### 5. Contact (`src/pages/contact.astro`)

**Simple, low-friction:**
- Headline: "Let's talk about your operations"
- Short paragraph: if you have manual processes eating time, fragmented systems, or automation that needs an architect — reach out
- Contact methods (text, not a form — forms need a backend, which is Phase 2/waitlist territory):
  - Email: nicole@linktothecloud.com (or whatever email — use a placeholder if not confirmed)
  - Upwork: link to profile
  - LinkedIn: link to profile
- Small note: "Based in Renton, WA · Available for remote engagements worldwide"

### 6. Projects layout
Create `src/pages/projects/[...slug].astro` — the dynamic route that renders individual project pages from the `projects` content collection, wrapped in `BaseLayout` + `Prose`.

### 7. Navigation
Update `Header.astro` nav links to point to real pages: `/`, `/about`, `/projects`, `/blog`, `/contact`.

## Constraints
- All copy must follow the voice rules above. No hype. No filler.
- Never fabricate metrics, AI involvement, or outcomes.
- The OpenClaw POC is a **tested proof-of-concept**, not a shipped product. Say so.
- Don't copy text verbatim from the existing WordPress page — rewrite it in the site's voice.
- All pages must be responsive and use the Phase 2 design system components.

## Acceptance criteria
- `pnpm build` succeeds. All 5 pages render. Blog and project routes work.
- Home page has: hero, proof metrics, testimonials, capability blocks, featured project, CTA.
- About page has: bio, education, approach, current focus.
- Projects index shows all case studies as cards. Each links to a full page.
- Hero case study (AP automation) tells the A→B arc with genuine technical detail.
- Blog index works. Starter post renders with proper Prose styling.
- Contact page has working links (Upwork, LinkedIn).
- Nav links all resolve. No dead links.
- Zero client JS except mobile nav.
- All content is honest, specific, and grounded. No inflated claims.
