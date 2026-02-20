# Quartum Games — Marketing Website

Premium, conversion-focused marketing site for Quartum Games (a subsidiary of Quartum Group). Built for client acquisition in Europe: **Request a Demo** and **Email Us** conversions.

## Tech stack

- **React 18** + **Vite** + **TypeScript**
- **Tailwind CSS** for styling
- Single-page layout with smooth scrolling and sticky header
- No backend: demo form uses `mailto` (or placeholder `POST /api/demo-request` with TODO for your API)
- Analytics: placeholder `trackCTA()` in `src/analytics.ts` (replace with your provider when ready)

## Commands

```bash
npm install
npm run dev      # Start dev server (default: http://localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build locally
```

## Folder structure

```
quartum_games_webpage/
├── index.html              # Entry HTML, SEO meta, fonts
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── public/
│   └── favicon.svg
├── src/
│   ├── main.tsx            # App mount
│   ├── App.tsx             # Page composition
│   ├── index.css           # Tailwind + CSS variables (brand colors)
│   ├── vite-env.d.ts
│   ├── constants.ts        # Sales email, phone, pricing labels, brand copy
│   ├── analytics.ts        # CTA tracking placeholder
│   └── components/
│       ├── Header.tsx      # Sticky nav + CTAs
│       ├── Hero.tsx
│       ├── ProblemSolution.tsx
│       ├── HardwareTiers.tsx
│       ├── GameCatalog.tsx
│       ├── HowItWorks.tsx
│       ├── WhoItsFor.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx
│       ├── FinalCTA.tsx    # Demo section + form
│       ├── DemoForm.tsx    # Demo request (mailto / TODO: POST)
│       └── Footer.tsx
└── README.md
```

## Editable constants

Edit **`src/constants.ts`** for:

- `CONTACT.salesEmail` — used in mailto and footer
- `CONTACT.phone` — optional; set to `''` to hide
- `PRICING_LABELS` — “starting at” style labels for each tier
- `PRICING_NOTE` — note under tiers
- `BRAND` — tagline, subline, company name, parent, region note
- `TRUST_CUES` — hero trust bullets

Brand colors are in **`src/index.css`** (`:root` CSS variables). Tailwind theme extension in **`tailwind.config.js`** references them.

## Demo form behavior

1. **Submit** tries `POST /api/demo-request` (placeholder; will 404 without a backend).
2. On failure or no backend, it opens a **mailto** with the form fields in the body so the lead still reaches you.
3. **TODO:** Point the form to your real endpoint (e.g. serverless function or API route) and remove the mailto fallback if desired.

## SEO

- Title and meta description in `index.html`
- Open Graph placeholders (og:title, og:description, og:type, og:url)
- Semantic HTML and section IDs for in-page navigation

## Accessibility

- Semantic headings and landmarks
- Focus styles and keyboard navigation
- ARIA where needed (e.g. FAQ expand/collapse, mobile menu)
- Sufficient color contrast and readable font sizes
# Quartum_games
