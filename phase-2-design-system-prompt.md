# Phase 2 — Design System (Claude Code task prompt)

> Read `CLAUDE.md` first. This phase builds the visual foundation — layout, typography, color, and reusable components. **No real content yet** (that's Phase 3). Every page built in Phase 3 will use what's created here.

## Design direction

**Minimal, technical, white background.** The site markets an AI automation architect — it should read as clean, developer-credible, and intentional. Not a SaaS landing page, not a design agency portfolio, not a generic template.

### Principles
- **White space is structure.** Let content breathe. Dense = amateur.
- **Typography does the heavy lifting.** No decorative elements. The type system IS the design.
- **Monospace for technical credibility.** Use a monospace font (JetBrains Mono, IBM Plex Mono, or similar) for headings, code, and accents. Pair with a clean sans-serif (Inter, system-ui) for body text.
- **Restrained color.** Near-black text on white. One accent color only — a muted teal/blue-green that says "technical" not "startup." Use it sparingly: links, hover states, subtle borders, one or two section accents. No gradients, no bright colors.
- **No stock illustrations, no decorative icons, no hero images.** Let the case-study screenshots and architecture diagrams (Phase 3) be the only visuals.

### Visual references (mood, not copy)
- The feel of a well-formatted README or technical documentation site
- Linear.app's restraint and density balance
- Vercel/Next.js docs aesthetic — lots of white, sharp type, minimal accent

## Tasks

### 1. CSS foundation
Create a global CSS file (`src/styles/global.css`) with:
- CSS custom properties (variables) for the full design system: colors, type scale, spacing scale, max-widths, border-radius
- Color palette: `--color-bg: #ffffff`, `--color-text: #1a1a1a`, `--color-text-muted: #6b7280`, `--color-accent: #0d9488` (teal-600, adjust if needed), `--color-accent-hover`, `--color-border: #e5e7eb`, `--color-surface: #f9fafb` (light gray for cards/sections)
- Type scale using `clamp()` for fluid sizing (base 16–18px, scale ratio ~1.25)
- Spacing scale: 4px base, multiples (4, 8, 12, 16, 24, 32, 48, 64, 96)
- Reset/normalize basics (box-sizing, margin reset, smooth scroll, font antialiasing)
- Base body styles applying the font stack and colors
- Import and apply the chosen fonts (use Google Fonts or `@fontsource` packages)

### 2. Layout components
Create reusable `.astro` components in `src/components/`:

- **`Header.astro`** — minimal top nav. Site name/wordmark (text, not a logo image for now) on the left. Navigation links on the right: Home, About, Projects, Blog, Contact. Mobile: hamburger menu (this is the ONE React island — `MobileNav.tsx`). No sticky header — let it scroll away.
- **`Footer.astro`** — simple: © 2026 Nicole Inman · linktothecloud.com. Social links (LinkedIn, GitHub, Upwork) as small icons or text. Nothing heavy.
- **`Container.astro`** — max-width wrapper (720px for prose, 1080px for wider sections). Centers content with consistent horizontal padding.
- **`Section.astro`** — a semantic `<section>` with consistent vertical spacing. Optional `variant` prop for alternate background (`surface` vs `white`).

### 3. Typography components
- **`Prose.astro`** — wrapper that styles Markdown-rendered content (headings, paragraphs, lists, code blocks, blockquotes, links). This is what case studies and blog posts will be wrapped in.
- Heading styles (h1–h4) using the monospace font, with restrained sizes and consistent spacing.
- Body text: the sans-serif, 1.6–1.7 line-height, comfortable reading width.
- Code blocks: slightly darker surface background, monospace, subtle border.
- Links: accent color, underline on hover only.

### 4. UI primitives
- **`Button.astro`** — primary (accent bg, white text) and secondary/outline variants. Used for CTAs. Minimal border-radius (2–4px). No shadows.
- **`Card.astro`** — for project cards on the Projects page. Surface background, subtle border, padding. Title + summary + tags. No hover animations beyond a slight border-color shift.
- **`Tag.astro`** — small pill for tech stack labels (e.g., "Power Platform", "OpenClaw", "AI Builder"). Monospace, small text, subtle background.
- **`TestimonialCard.astro`** — blockquote-style: quote text, attribution, subtle left border accent.

### 5. Update BaseLayout
- Import `global.css`
- Wrap page content in `<Header>` + `<main>` + `<Footer>`
- Ensure the layout produces valid, semantic HTML

### 6. Update placeholder Home page
- Use the new layout and components to render a minimal but *designed* placeholder:
  - Header with working nav links (pages don't exist yet — link to `#`)
  - A hero section: one headline ("AI-powered automation. Architected, not assembled."), one subline, one CTA button ("View Projects" → `#`)
  - Footer
- This proves the design system works end-to-end. Still no real content.

## Constraints
- **No client JS except the mobile nav.** Everything else is static Astro components.
- **No Tailwind, no CSS framework.** Hand-written CSS with custom properties. Keeps bundle minimal and teaches the system.
- **No real content.** Placeholder text only. Phase 3 fills it in.
- **Responsive.** Mobile-first. Test at 375px and 1280px.

## Acceptance criteria
- `pnpm build` succeeds with zero warnings.
- `pnpm dev` shows a styled placeholder Home with header, hero, and footer.
- All CSS uses custom properties from `global.css` — no magic numbers anywhere.
- Mobile nav works (hamburger toggle, React island).
- Lighthouse accessibility score ≥ 95 on the placeholder page.
- Zero client JS on the page except the mobile nav island.
- All components are documented with a brief comment at the top explaining their purpose and props.
