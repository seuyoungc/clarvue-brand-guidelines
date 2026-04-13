# CLARVUE Brand Guidelines

An interactive brand guideline site for CLARVUE — built as a presentation layer to define and communicate the visual identity, voice, and design system behind the product.

Deployed via GitHub Pages. A separate repo from the CLARVUE MVP (`seuyoungc/clarvue-mvp`).

---

## Sections

| Section | Content |
|---|---|
| **Brand Story** | Product philosophy and origin |
| **Archetype & Voice** | Ruler × Sage archetype, tone of voice, copy patterns |
| **The Name** | Etymology and meaning of CLARVUE |
| **Color System** | Token-based palette, Silver Rule callout |
| **Typography** | Type scale — Space Grotesk, Manrope, Space Mono |
| **Three-State Theme** | Day / Dawn / Dusk live theme mockups |
| **UI Components** | Meal cards, AI chips, feature labels |

---

## Tech Stack

- **React 19** + **Vite**
- **Tailwind CSS v4**
- **Framer Motion** (`motion/react`)
- **Lucide React** (icons)
- Fonts: Space Grotesk · Manrope · Space Mono

---

## Run Locally

**Prerequisites:** Node.js

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`.

---

## Deploy

Pushes to `main` automatically deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

```bash
npm run build   # Build for production
npm run preview # Preview the production build locally
```
