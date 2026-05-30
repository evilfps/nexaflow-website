# NexaFlow Solutions

College capstone project — supply chain intelligence platform landing page.

Built with Next.js 16 + Tailwind CSS v4 + Framer Motion. Static export for easy hosting.

## What this is

NexaFlow is a fictional B2B SaaS company for my capstone. The site needed to look legit enough to pass as a real product landing page, with:

- Editorial typography (Geist font, light weights)
- Functional dashboard mockup (not just screenshots — built in CSS/HTML)
- Animated number counters, scroll-triggered reveals
- Data viz (disruption trend chart)
- Light mode enterprise aesthetic inspired by Cursor, Linear, etc.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
```

Outputs static files to `dist/` — can be dropped on any static host (Vercel, Netlify, GitHub Pages).

## Project structure

```
src/app/
  components/
    Navbar.tsx          — sticky nav with mobile menu
    Hero.tsx             — headline + network map + stats
    NetworkMap.tsx       — SVG node graph animation
    Stats.tsx            — animated counters
    ProductVisual.tsx    — dashboard mockup (the dense part)
    Pillars.tsx          — 4 capabilities, editorial list
    Problem.tsx          — stat rows + trend chart
    CTA.tsx              — call to action
    Footer.tsx           — minimal footer
  globals.css            — theme tokens + Tailwind v4
  layout.tsx             — root layout, fonts
  page.tsx               — composes all sections
```

## Notes

- Went through a few iterations — started dark mode, switched to light because it felt less empty
- Dashboard mockup took the longest, getting the table + alerts + chart to feel real
- Some animations use Framer Motion's `useInView` for scroll triggers
- Static export because I didn't want to deal with a server for a demo site

## License

MIT — feel free to fork if you're also doing a college project and need a reference.
