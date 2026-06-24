# Blitz World Immigration — Section Design System

Reference doc for the "departures board / boarding pass" visual language used in `CountriesWorkers.tsx`, `HowItWorks.tsx`, and `SuccessStories.tsx`. Paste this into another IDE or LLM as context to keep new sections visually consistent with these three.

## Concept

A white-background, orange-accent theme for an overseas recruitment site, built around one idea: the content is literally about a journey (destination, application, deployment, life abroad), so the visual language borrows from travel artifacts — departure boards, boarding passes, postcards, flight paths — instead of generic SaaS cards. Each section picks **one** travel artifact that fits its content; they're not all used everywhere.

| Artifact | Used for | Where |
|---|---|---|
| Departures board (data table, tabular mono numbers, demand badges) | Ranked/listing data | `CountriesWorkers.tsx` jobs table |
| Boarding pass (dashed perforation + punched notch circles + tear-off stub) | Grouped destination/sector cards | `CountriesWorkers.tsx` sector cards |
| Flight-path timeline (dashed vertical line + numbered circular nodes) | Genuinely sequential processes only | `HowItWorks.tsx` 5-step list |
| Postcard (dashed border + rotated postmark stamp + quote watermark) | People-first, testimonial content | `SuccessStories.tsx` cards |
| Torn ticket edge (scalloped top border via radial-gradient) | A hard "ready to act" CTA banner | Used in `CountriesWorkers.tsx` and `HowItWorks.tsx` — **not** mandatory on every section, skip it when the copy doesn't end on a pitch (e.g. `SuccessStories.tsx` doesn't have one) |

## Color tokens

Defined as CSS variables on a scoped `.cw-root` wrapper class so they don't leak globally.

```css
--cw-bg-warm: #FFF8F1;     /* warm ivory section tint, card backgrounds */
--cw-ink: #1C1410;         /* primary text, near-black warm */
--cw-ink-soft: #6B5D52;    /* secondary/muted text */
--cw-orange: #EA5B0C;      /* primary brand accent */
--cw-orange-deep: #B6430A; /* hover states, deep text-on-light-orange */
--cw-orange-light: #FFE4CC;/* tonal badge/icon backgrounds */
--cw-line: #F0DFC9;        /* hairline borders, dividers, dashed lines */
```

Page background is plain white (`#FFFFFF`); `--cw-bg-warm` is used for card/section tints, never the page itself.

## Typography

Loaded via Google Fonts. Three roles, each with a distinct job — don't blend them.

| Role | Font | Weight(s) | Used for |
|---|---|---|---|
| Display | Space Grotesk | 500, 600, 700 | Headings (`h1`–`h3`), eyebrow micro-labels, big stat numbers |
| Body | Inter | 400, 500, 600, 700 | Paragraphs, descriptions, UI labels |
| Mono | JetBrains Mono | 500, 600 | Numbers, codes, counts, anything tabular — always with `font-variant-numeric: tabular-nums` |

Import line used in every file's inline `<style>` block:

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap');
```

For production, replace this inline `@import` with `next/font` in the root layout instead — it's only inline here so each file is self-contained and drops in without editing the layout.

## Layout conventions

- Outer container: `mx-auto max-w-7xl px-6 lg:px-8` (narrower `max-w-4xl` for the single-column step timeline in `HowItWorks.tsx`).
- Section vertical rhythm: hero tops use `pt-20 sm:pt-28`, section bottoms use `pb-20` or `pb-24`.
- Card corner radius: `rounded-2xl` for cards, `rounded-3xl`/`rounded-b-3xl` for the big CTA banner.
- Borders: hairline `border border-[var(--cw-line)]` almost everywhere; dashed variants (`border-dashed`) signal "perforation" on boarding-pass/postcard elements specifically.
- Card grids: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
- Decorative background blobs: large blurred orange circles at low opacity (`blur-3xl bg-[var(--cw-orange)]/10`) behind hero sections only, kept subtle.

## Component patterns

**Buttons**
- Primary: `rounded-full bg-[var(--cw-orange)] text-white px-6 py-3 text-sm font-semibold hover:bg-[var(--cw-orange-deep)]`
- Secondary/outline: `rounded-full border border-[var(--cw-line)] bg-white px-6 py-3 text-sm font-semibold hover:border-[var(--cw-orange)]`
- On dark/orange backgrounds, secondary becomes `border-white/40 text-white hover:bg-white/10`
- Icon convention: trailing `ArrowUpRight` for "go forward" actions, leading `PhoneCall` for "talk to us" actions
- Always include `focus-visible:ring-2 focus-visible:ring-[var(--cw-orange)] focus-visible:ring-offset-2`

**Badges / pills**
`rounded-full px-3 py-1 text-xs font-semibold` with tonal backgrounds: `bg-[var(--cw-orange)] text-white` (strongest), `bg-[var(--cw-orange-light)] text-[var(--cw-orange-deep)]` (medium), `bg-stone-100 text-stone-500` (neutral/low).

**Tables**
Header row: `bg-[var(--cw-bg-warm)] border-b-2 border-[var(--cw-orange)]`, uppercase tracked labels. Numeric columns right-aligned, mono, tabular. Row hover: `hover:bg-[var(--cw-bg-warm)]`.

**Boarding-pass notch effect**
A card split into a main area and a narrow "stub," divided by `border-l-2 border-dashed`, with two small circles (`bg-white`, absolutely positioned, `-translate-x-1/2`) at the top and bottom of the divider to fake a punched hole.

**Torn ticket edge (CTA banner only)**
```css
.cw-scallop-top::before {
  content: "";
  position: absolute;
  top: -1px; left: 0; right: 0; height: 18px;
  background-image: radial-gradient(circle at 9px 9px, #ffffff 9px, transparent 9.5px);
  background-size: 18px 18px;
  background-repeat: repeat-x;
  background-position: -9px -9px;
}
```
Apply to a flat-topped (`rounded-b-3xl`, not `rounded-t-*`) orange gradient panel sitting directly on the white page background.

## Icons

All from `lucide-react`: `Plane`, `PlaneTakeoff`, `ArrowUpRight`, `PhoneCall`, `FileCheck2`, `Wallet`, `TrendingUp`, `Languages`, `Send`, `Search`, `FileText`, `UserCheck`, `ClipboardCheck`, `ShieldCheck`, `CheckCircle2`, `Quote`, `Users`, `PlayCircle`. Decorative icons get `aria-hidden="true"`.

## Accessibility & motion

- All interactive elements get visible `focus-visible` rings.
- Hover transforms (card lift, button lift) use the `motion-safe:` prefix.
- Each file's `<style>` block includes a `prefers-reduced-motion: reduce` override that disables transitions/animations entirely.
- Decorative shapes (notch circles, blobs, postmark stamps) are `aria-hidden`.

## Code conventions

- Each section is a single self-contained `.tsx` file: default export, no required props, App Router-friendly (no `"use client"` unless interactivity is added).
- Content lives in typed data arrays at the top of the file (e.g. `COUNTRIES`, `STEPS`, `TESTIMONIALS`) so copy/data edits never touch markup.
- Derived numbers (totals, unique counts) are computed from the data arrays in JS rather than hardcoded, so stats can't drift out of sync with the data.
- Navigation uses `next/link`; `href`s are placeholders (`/jobs`, `/contact`, etc.) meant to be wired to real routes.
- The same `--cw-*` variables are redeclared inside each file's own scoped `<style>` block. That's intentional for drop-in portability right now, but once more sections exist it's worth extracting into one shared `globals.css` or a Tailwind theme extension instead of repeating the block.

## Open decisions for whoever continues this

- Fonts are loaded via inline `@import`, not `next/font` — fine for prototyping, should move to the root layout for production.
- The CTA banner is opt-in per section, not automatic — only add it where the copy genuinely ends on a "ready to act" beat.
- Numbered steps (`01`–`05` style) should only be used for content that's a real ordered sequence, not as a default decorative device.