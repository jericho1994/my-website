# Jericho — Portfolio

Star Wars–themed personal portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # eslint
npm run build    # production build + sitemap/robots.txt (next-sitemap)
npm start
```

## Where to edit content

| What | File |
|------|------|
| Name, URL, email, social links | `lib/site.ts` |
| Projects and filter tabs | `lib/projects.ts` |
| About page facts / timeline | `app/about/AboutPageClient.tsx` |
| Colours, fonts, shared CSS classes | `app/globals.css` |
| Per-page SEO metadata | `app/*/page.tsx` |
| Production URL for the sitemap | `SITE_URL` env var or `next-sitemap.config.js` |

## Structure

```
app/            routes (page.tsx = server component + metadata, *PageClient.tsx = interactive UI)
components/ui/  Navbar, ProjectCard, SectionTitle, Starfield, HyperspaceLoader, SpacecraftParallax, Spacecraft (SVG art), BrandIcons
lib/            site.ts (identity), projects.ts (data)
```

## Notes

- Fonts (Orbitron, Rajdhani, Inter) are self-hosted via `next/font` in `app/layout.tsx`.
- The ship drawings are hand-coded SVGs in `components/ui/Spacecraft.tsx`; `SpacecraftParallax` positions one and drifts it on scroll.
- The contact form currently simulates a send; wire `handleSubmit` in `app/contact/ContactPageClient.tsx` to an API route or email service.
