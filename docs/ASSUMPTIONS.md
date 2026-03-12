# Assumptions

## Content Assumptions
1. **All pricing, terms, and scope details** are taken directly from the source DOCX — no content was invented
2. **"AFGRII" reference** in the DOCX acceptance section was identified as a template artifact and excluded from the site
3. **DSG Group companies** in the WhyMVNE carousel follow the standard MVNE template pattern (DSG, Digitata, CXG, MVNE, iTouch, Glocell, WiConnect) — these are consistent across all MVNE proposal sites
4. **Contact email** (yaron@dsg.co.za) is consistent with other MVNE proposal sites

## Design Assumptions
1. **No background hero image** — uses gradient + dot-grid pattern (consistent with eSIM proposal)
2. **Yellow accent** (#eab308) used on lock screen for Yellow Dot branding
3. **Lock code 1006** as specified in the brief
4. **Storage key** `dm_yellowdotpwa_v1_unlocked` follows the naming convention from other proposal sites
5. **Proposal date** shown as "23 February 2026" based on the DOCX filename date (20260223)

## Technical Assumptions
1. **pnpm** as package manager (consistent with all other MVNE proposal sites)
2. **Static export** — no server-side rendering required, all content is hardcoded
3. **Vercel deployment** target (consistent with DEPLOYMENT.md pattern)
4. **No environment variables** required
