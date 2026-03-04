# CLAUDE.md — AI Assistant Guide for next_solutions

This file provides context for AI assistants (Claude, Copilot, etc.) working in this repository.

---

## Project Overview

**next_solutions** is a French-language marketing and product showcase website for Next Solutions, a company selling point-of-sale hardware and software (caisses enregistreuses, logiciels de gestion, TPE terminals, balances). The site runs on **Next.js 16 (App Router)** with **React 19** and **Tailwind CSS 4**.

- **Domain:** next-solutions.fr
- **Language:** French (all user-facing content)
- **No database** — the only backend API is a contact form email sender via Resend

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.1.6 (App Router) |
| UI | React 19.2.3 |
| Styling | Tailwind CSS 4 + CVA + custom CSS variables |
| Validation | Zod 4 + React Hook Form 7 |
| Animation | Framer Motion 12 |
| Icons | lucide-react |
| Theming | next-themes (dark/light) |
| Email | Resend API |
| Language | TypeScript 5 (strict mode) |

---

## Repository Structure

```
/
├── app/                        # Next.js App Router pages & API
│   ├── layout.tsx              # Root layout: Navbar, Footer, ThemeProvider
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles, CSS vars, Tailwind v4 tokens
│   ├── error.tsx               # Error boundary
│   ├── not-found.tsx           # 404 page
│   ├── loading.tsx             # Loading skeleton
│   ├── robots.ts               # SEO robots config
│   ├── sitemap.ts              # Dynamic sitemap
│   ├── api/contact/route.ts    # POST /api/contact — sends email via Resend
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── caisses/page.tsx        # Touchscreen cashiers product page
│   ├── logiciels/page.tsx      # Management software page
│   ├── tpe/page.tsx            # Payment terminals page
│   ├── balances/page.tsx       # Scales page
│   ├── faq/page.tsx
│   ├── cgv/page.tsx            # Terms of sale
│   ├── cgu/page.tsx            # Terms of use
│   ├── rendez-vous/page.tsx    # Calendly booking
│   └── rejoindre/page.tsx      # Careers
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Responsive nav with mega-dropdown
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── CTASection.tsx
│   ├── contact/
│   │   └── ContactForm.tsx     # Form with Zod + RHF + Resend
│   ├── products/
│   │   └── ProductCard.tsx     # Reusable product card with accent color
│   ├── shared/
│   │   ├── ThemeProvider.tsx   # next-themes wrapper
│   │   ├── ThemeToggle.tsx     # Dark/light toggle button
│   │   ├── PageHero.tsx        # Reusable page header (badge + title)
│   │   └── CalendlyWidget.tsx  # Calendly iframe embed
│   └── ui/                     # shadcn-style primitives
│       ├── button.tsx          # Polymorphic button (renders as <button> or <Link>)
│       ├── badge.tsx           # CVA badge variants
│       ├── card.tsx            # Card components
│       └── separator.tsx
├── lib/
│   ├── utils.ts                # cn() helper (clsx + tailwind-merge)
│   ├── types.ts                # Shared TypeScript types
│   └── validations.ts          # Zod schemas (contactSchema)
├── public/images/              # Static images (35+ PNG/JPG product images)
├── legacy/                     # Archived static HTML site — do not modify
├── balance/                    # Product images for balances
├── terminaux ingenico/         # TPE product images
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
└── postcss.config.mjs
```

---

## Development Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm start         # Run production server
npm run lint      # Run ESLint
```

> There are no test scripts. Tests are not currently configured.

---

## Environment Variables

Create a `.env.local` file (never commit it):

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

The only server-side env var is `RESEND_API_KEY`, used in `app/api/contact/route.ts` to send emails via the Resend API.

---

## Key Conventions

### Component Authoring

- **Server Components by default** — pages and layouts are server components unless they need interactivity.
- Add `"use client"` at the top only when needed (state, effects, event handlers, animations, browser APIs).
- All components must have explicit TypeScript prop interfaces.

**Example pattern:**
```tsx
"use client";

interface MyComponentProps {
  title: string;
  accentColor?: string;
}

export default function MyComponent({ title, accentColor = "#f0a050" }: MyComponentProps) {
  return <div style={{ color: accentColor }}>{title}</div>;
}
```

### Naming Conventions

| Thing | Convention | Example |
|---|---|---|
| Components | PascalCase | `HeroSection.tsx` |
| Route files | lowercase | `app/contact/page.tsx` |
| Directories | kebab-case | `components/home/` |
| Constants | UPPER_CASE | `const STATS = [...]` |
| Path alias | `@/` | `import { cn } from "@/lib/utils"` |

### Styling

- Use **Tailwind CSS utility classes**. Tailwind v4 is configured via PostCSS — no `tailwind.config.js` needed.
- Reference CSS custom properties for brand colors: `bg-[var(--c-bg)]`, `text-[var(--c-text)]`.
- Theme tokens are defined in `app/globals.css` under `:root` (dark) and `.light`.
- Use the `cn()` utility from `lib/utils.ts` to merge conditional classes:
  ```ts
  import { cn } from "@/lib/utils";
  cn("base-class", isActive && "active-class", className)
  ```
- Use `class-variance-authority` (CVA) for components with multiple variants (see `ui/button.tsx`, `ui/badge.tsx`).
- Fluid typography: use `clamp()` for responsive font sizes, e.g. `text-[clamp(2rem,5vw,4rem)]`.

### Brand Color Palette (CSS variables)

| Variable | Usage |
|---|---|
| `--c-bg` | Page background (dark: `#09080c`) |
| `--c-card` | Card background (dark: `#17151b`) |
| `--c-text` | Primary text |
| `--c-muted` | Muted/secondary text |
| `--c-amber` | Main accent / CTA (`#f0a050`) |
| `--c-caisses` | Caisses product accent (`#b07ae0`) |
| `--c-logiciels` | Logiciels accent (`#4f8ef7`) |
| `--c-tpe` | TPE accent (`#52c48a`) |
| `--c-balances` | Balances accent (`#e8748a`) |

### Forms

- Use **React Hook Form** with a **Zod resolver**. Define schema in `lib/validations.ts`.
- Add `aria-invalid` and `aria-describedby` attributes for accessibility.
- Display validation errors inline beneath each field.
- Use `status` state (`"idle" | "loading" | "success" | "error"`) to manage form submission states.

### Animation

- Use **Framer Motion** for transitions. Common pattern:
  ```tsx
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
  >
  ```
- Use `AnimatePresence` when conditionally rendering animated elements.
- Respect `prefers-reduced-motion` — globals.css suppresses animations for users who opt out.

### API Routes

- Located in `app/api/[route]/route.ts`.
- Export named functions `GET`, `POST`, etc. (Next.js App Router convention).
- Always return `NextResponse.json()` with appropriate HTTP status codes.
- Validate request bodies with Zod before processing.

**Current API routes:**
- `POST /api/contact` — validates body with `contactSchema`, sends two emails via Resend (admin notification + user auto-reply).

---

## Data Patterns

Product data and section data are defined as typed **constant arrays** directly in the component or page file:

```ts
const products: Product[] = [
  { id: "1", name: "...", description: "...", image: "/images/...", price: "..." },
];
```

There is no database, CMS, or external data fetch. All content is hardcoded in TypeScript.

---

## Image Handling

- Static images are stored in `public/images/` and referenced as `/images/filename.png`.
- Use Next.js `<Image>` component (from `next/image`) with `width`, `height`, and `alt`.
- The `next.config.ts` allows remote images from `maps.googleapis.com`.
- Output formats configured: `avif`, `webp`.

---

## Accessibility Checklist

When adding or modifying UI:
- Include `alt` text on all images.
- Use semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Add `aria-label` to icon-only buttons.
- Ensure interactive elements have visible focus styles (`:focus-visible` is globally styled).
- Link `<label>` elements to form inputs via `htmlFor`/`id`.

---

## What Does NOT Exist (yet)

- **No tests** — no Jest, Vitest, Playwright, or Cypress configured
- **No CI/CD** — no `.github/workflows/` or other pipeline configuration
- **No database** — all data is static / hardcoded
- **No authentication** — no login, sessions, or protected routes
- **No CMS** — content lives in component files

---

## Common Tasks

### Add a new page

1. Create `app/<route>/page.tsx` as a server component.
2. Add a `<PageHero>` at the top with `badge`, `title`, and `subtitle` props.
3. Register the route in `Navbar.tsx` if it should appear in navigation.
4. Add the URL to `app/sitemap.ts`.

### Add a new product card

1. Add product data to the relevant page file (e.g., `app/caisses/page.tsx`).
2. Use the `<ProductCard>` component with `accentColor` matching the product category CSS variable.

### Modify the contact form

- Schema: `lib/validations.ts` (`contactSchema`)
- UI: `components/contact/ContactForm.tsx`
- Backend: `app/api/contact/route.ts`

### Add a new UI primitive

- Create in `components/ui/`.
- Use CVA for variant management.
- Export all subcomponents from a single file.
- Follow patterns from existing `button.tsx` or `card.tsx`.

---

## Legacy Code

The `legacy/` directory contains an archived static HTML site. **Do not modify files in this directory.** It is kept for historical reference only.

---

## Git Workflow

- The main branch is `master` / `main`.
- Feature/AI branches follow the pattern: `claude/<description>-<sessionId>`.
- Commit messages should be descriptive (e.g., `feat: add balances product page`, `fix: contact form validation`).
- Always push with: `git push -u origin <branch-name>`.
