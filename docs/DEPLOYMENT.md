# Deployment Guide

## Prerequisites
- Node.js 18+ installed
- pnpm package manager installed (`npm install -g pnpm`)

## Run Locally

```bash
cd yellow-dot-pwa-proposal-site
pnpm install
pnpm dev
```

The development server will start at `http://localhost:3000`.

## Build for Production

```bash
pnpm build
```

This generates an optimized production build in the `.next/` directory.

To preview the production build locally:

```bash
pnpm start
```

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
cd yellow-dot-pwa-proposal-site
vercel
```

Follow the prompts to deploy.

### Option 2: Git Integration

1. Push the `yellow-dot-pwa-proposal-site` folder to a Git repository (GitHub, GitLab, or Bitbucket).
2. Go to [vercel.com](https://vercel.com) and create a new project.
3. Import the repository.
4. Vercel will auto-detect Next.js and configure the build settings.
5. Click **Deploy**.

### Build Settings (if manual configuration needed)
- **Framework Preset:** Next.js
- **Build Command:** `pnpm build`
- **Output Directory:** `.next`
- **Install Command:** `pnpm install`

## Environment Variables
No environment variables are required. The site is fully static with all content hardcoded.

## Notes
- The site generates static HTML at build time (no server-side rendering required).
- The proposal pack zip (`/proposal-pack.zip`) is served from the `public/` directory.
- Lock screen state persists in the browser via localStorage.
- Lock code: 1006
