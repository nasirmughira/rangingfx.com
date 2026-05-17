# RangingFX Premium

A premium fintech and trading website built with Next.js 15, TypeScript, Tailwind CSS, and MDX.

## Features

- Next.js App Router with server-side routes
- Mobile-first responsive fintech UI
- Dark/light theme toggle
- MDX blog system with dynamic routing
- RSS feed and sitemap generation
- SEO metadata, OpenGraph, Twitter cards, and structured data
- Cloudflare Pages compatible build setup
- Tailwind CSS, Framer Motion animations, and premium glassmorphism

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

## Scripts

- `npm run dev` — start local development
- `npm run build` — create production build
- `npm run start` — run production server
- `npm run lint` — run ESLint
- `npm run format` — format files with Prettier
- `npm run typecheck` — run TypeScript type checks

## Deployment

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages.
2. Set the framework preset to `Next.js`.
3. Use build command: `npm run build`.
4. Set the build output directory to `.next`.
5. Optionally add environment variables from `.env.example`.

### Environment variables

Create a `.env.local` file with the following values:

```bash
CLOUDFLARE_ANALYTICS_TOKEN=your_cloudflare_analytics_token
EMAIL_PROVIDER_API_KEY=your_email_provider_api_key
```

## Project Structure

- `app/` — application routes and pages
- `components/` — shared UI components
- `content/blog/` — MDX blog posts
- `lib/` — content loaders, SEO utilities
- `public/` — static assets and icons
- `styles/` — global Tailwind styles
- `hooks/` — reusable React hooks
- `types/` — TypeScript type definitions
- `utils/` — utility helpers

## Notes

- The contact form includes a placeholder submission experience.
- RSS feed is available at `/rss.xml`.
- Sitemap is available at `/sitemap.xml`.
