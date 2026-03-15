# klay+ Landing Page

Product-focused landing page for the klay+ Semantic Knowledge Platform.

## Commands

```bash
pnpm dev          # Astro dev server (localhost:4321)
pnpm build        # Production build to dist/
pnpm preview      # Preview production build
```

## Stack

- Astro 6 (static output)
- Tailwind CSS 3
- Inter font (Google Fonts)
- No client-side framework — vanilla JS for interactivity

## Structure

```
src/
  components/    # One Astro component per landing section (Nav, Hero, ProblemSolution, etc.)
  layouts/       # Layout.astro (HTML shell + scroll observer + lang toggle script)
  pages/         # index.astro (assembles all sections)
  i18n/          # en.json, es.json, t.ts helper
  styles/        # global.css (Tailwind directives + glass/gradient/typing utilities)
```

## i18n

Bilingual EN/ES via `data-lang` attribute on `<html>`.
- Components render both languages; CSS hides the inactive one (`data-lang-en`/`data-lang-es` attributes)
- Toggle stores preference in `localStorage` under key `klay-lang`
- Copy lives in `src/i18n/en.json` and `src/i18n/es.json`

## Lead Capture

Form action uses `PUBLIC_FORM_ACTION` env var (Formspree URL).
Fallback: `#` (no-op in dev).

## Visual Direction

Dark & Bold — navy/purple gradients, floating orbs, glass-morphism cards.
Palette: `#0a0a0f` (bg), `#6366f1` (accent indigo), `#8b5cf6` (violet), `#c084fc` (tertiary).

## Design Spec

Full spec with copy, sections, and color tokens: see `docs/specs/2026-03-15-landing-page-design.md`
