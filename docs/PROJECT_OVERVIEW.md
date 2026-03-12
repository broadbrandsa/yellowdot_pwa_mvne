# Project Overview

## Yellow Dot MVNO PWA Support Proposal Site

A standalone Next.js proposal website presenting MVNE's PWA platform development and support proposal for Yellow Dot.

### Tech Stack
- **Framework:** Next.js 15.5 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **React:** 19
- **Package Manager:** pnpm
- **Deployment:** Vercel-ready static export

### Key Features
- Lock screen with 4-digit PIN (code: 1006)
- Responsive design (mobile, tablet, desktop)
- Animated section transitions
- Downloadable proposal pack (ZIP)
- "Hide" button to re-lock the site
- DSG capabilities carousel (WhyMVNE section)

### Sections
1. **Navigation** — Sticky header with section links and contact CTA
2. **Hero** — Gradient hero with key stats (setup fee, monthly, support hours, dev hours)
3. **Introduction** — Overview with 3 highlight cards
4. **Scope of Work** — 5 scope areas and 3 support tier definitions
5. **Commercial** — One-off and monthly pricing with expandable breakdown
6. **Terms & Conditions** — 5 term cards (validity, agreements, payment, pricing, invoicing)
7. **Why MVNE** — DSG Group capabilities carousel
8. **Downloads** — DOCX and ZIP proposal pack downloads
9. **Next Steps** — 4 action items with contact details
10. **Footer** — CTA strip, navigation, key facts, copyright

### Lock Screen
- **Code:** 1006
- **Storage Key:** `dm_yellowdotpwa_v1_unlocked`
- **Behaviour:** Persists unlock state in localStorage. "Hide" button in nav clears state to re-lock.
