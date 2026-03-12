# MVNE Proposal Website Template

## What This Is

A reusable Next.js website template for creating MVNE/Digital Mobile proposal websites for prospective clients. Derived from the DSG ipNX DBOT proposal site.

## How It Was Created

1. The original DBOT proposal project (`DBOT/dsg-ipnx-proposal`) was used as the reference implementation
2. The project was copied as-is, preserving the complete architecture and visual system
3. The package name was updated to `mvne-proposal-template`

## Architecture

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with PostCSS
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel-ready (static export)

## Visual System

### MVNE Brand Colours
- Primary accent: `#032572` (navy blue)
- Accent dark: `#021d5a`
- Accent light: `#e8eef9`
- Text primary: `#212529`
- Text muted: `#6c757d`
- Border: `#dee2e6`
- Surface: `#f8f9fa`

### Typography
- Font: Inter (weights 300–900)
- Section labels: `section-label` class (0.7rem, uppercase, tracked)
- Heading hierarchy: 5xl–8xl for h1, 4xl–5xl for h2

### Reusable CSS Classes
- `.anim-fade-up`, `.anim-fade-in`, `.anim-slide-left`, `.anim-scale-in` — entrance animations
- `.delay-100` through `.delay-800` — animation delay utilities
- `.hero-pattern` — dot-grid background
- `.section-label` — section header style
- `.card-lift` — hover elevation effect
- `.proposal-table` — styled data table
- `.phase-badge` — inline pill badges

## Section Components

The template includes these reusable section patterns:
1. **Navigation** — Fixed nav with scroll-triggered styling, mobile menu
2. **Hero** — Full-screen hero with background image, overlay, stats bar
3. **ExecutiveSummary** — Card grid + quote callout + metrics row
4. **Background** — Strategic rationale cards + comparison table + callout
5. **WhyDSG** — Horizontal scrollable capability carousel
6. **CompetitiveDiff** — Full-bleed section with image background, comparison cards
7. **Approach** — Phase timeline with colour-coded badges
8. **DBOTPhases** — Collapsible accordion phase detail sections
9. **Deliverables** — Grouped deliverable cards with counts
10. **ResourcePlan** — Visual timeline bar + phase detail cards
11. **Investment** — Dark section with figures, accordion cost breakdown
12. **NextSteps** — Action item cards + CTA callout
13. **Footer** — CTA strip + 4-column footer with nav links

## How to Use for a New Proposal

1. Copy this template to a new project folder
2. Update `package.json` name
3. Update `app/layout.tsx` metadata (title, description, keywords)
4. Replace or adapt section components with new client content
5. Add/remove sections as needed in `app/page.tsx`
6. Replace `public/Logos/ipnx-logo.png` with client logo (or remove)
7. Replace background images in `public/Images/` if desired
8. Update all `mailto:` links and contact references
9. Run `pnpm install && pnpm build` to verify

## Content Architecture

Content is hardcoded in section components as typed arrays/objects at the top of each file. This was a deliberate choice for:
- Simplicity (no build-time data layer complexity)
- Component co-location (content lives with its visual representation)
- Easy diffing (all changes visible in component files)

For future proposals, consider extracting content to `app/content/` if the number of proposals grows beyond 3–4.

## Deployment

```bash
pnpm install
pnpm dev      # Local development
pnpm build    # Production build
pnpm start    # Serve production build
```

Deploy to Vercel: push to GitHub and connect in Vercel dashboard. No environment variables required.
