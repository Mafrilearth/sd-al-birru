# Constraints & Strict Engineering Rules: SD Al-Birru

Last reviewed: 2026-10-06 by Engineering & UX Team

## 1. The Quality Floor (Always Enforced, Zero Tolerance)

- **Zero Type Errors:** `tsc --noEmit` must pass with exit code 0 on every commit and task increment.
- **Zero Hydration & Console Errors:** No React hydration mismatches, invalid DOM nesting, or unhandled promise rejections in browser runtime.
- **No Suppression Comments:** Strict ban on `@ts-ignore`, `@ts-nocheck`, `eslint-disable`, or `any` bypasses.
- **No Hardcoded/Arbitrary Styling:** All colors, spacing, radius, fonts, and elevations must map to tokens in `DESIGN_SYSTEM.md` and `PRINCIPLES.md`.
- **Zero Generic Template Card Mandate:** Under no circumstances should simple 3-column bootstrap cards with giant stock photos be used. Every content section must utilize Bento Grid, asymmetrical balance, soft glassmorphism (`backdrop-blur-md`), or high-contrast dark obsidian cards.
- **Zero Insecure Packages:** All third-party packages must be production-vetted, free of high CVE vulnerabilities, and long-term maintained.

---

## 2. Enforced Dimensions & Metrics

| Dimension | Rule | Checked by | Runs at |
|-----------|------|-----------|---------|
| **Types** | Zero type errors | `npx tsc --noEmit` | Every task & build |
| **Production Build** | Clean build with static & SSG generation | `npm run build` | Every task completion |
| **Responsiveness** | Flawless UI at 375px (mobile), 768px (tablet), 1280px (laptop), 1920px (desktop) | DevTools MCP / Subagent | UI verification |
| **Accessibility** | W3C WCAG 2.1 AA compliant, proper ARIA labels, semantic HTML tags | Subagent / audit | Pre-release |
| **Micro-Interactions** | Hover states, active press transforms, smooth cubic-bezier transitions, feedback on actions | Visual inspection | UI verification |
| **Performance** | Clean DOM, no layout shift (CLS ≤ 0.1), fast TTFB | Lighthouse / Next build | CI / Launch |

---

## 3. Strict Style & Token Matrix

- **Primary Brand Color:** Solar Gold `#F59E0B` (`amber-500` / `amber-600`), accent `#FBBF24`.
- **Deep Obsidian Slate:** `#0B0F17` / `slate-950` / `slate-900`.
- **Alabaster Warm Canvas:** `#FDFDFB`.
- **Tahfidz Emerald:** `#065F46` / `emerald-600` / `emerald-700`.
- **Typography:** Plus Jakarta Sans (`--font-sans`).
- **Corner Radii:** `rounded-2xl` (cards/inputs) and `rounded-3xl` (sections/hero containers).
- **Interactive Transitions:** `transition-all duration-300 ease-in-out` with hover scale `hover:scale-[1.02]` and active press `active:scale-[0.98]`.

---

## 4. Architectural Rules for New Features

1. **Folder Organization:**
   - Public layouts & routes belong exclusively in `src/app/(public)/`.
   - CMS administrative views belong exclusively in `src/app/(payload)/admin/`.
   - Shared atomic UI belongs in `src/components/ui/` (shadcn Base UI compliant).
   - Domain-specific sections belong in `src/components/sections/<domain>/`.
   - Form schemas & actions belong in `src/lib/validations/` and `src/app/api/`.
2. **Naming Conventions:**
   - React components: `PascalCase.tsx`.
   - Utilities & schemas: `camelCase.ts`.
   - REST endpoints & routes: `kebab-case`.
   - Design tokens: DTCG kebab-case standard.
3. **Form Handling:**
   - Every user-facing form must be validated with Zod on both client and server.
   - Every form submit must provide optimistic feedback, loading spinners, and failure recovery.
