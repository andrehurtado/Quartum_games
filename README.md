# Quartum Games — Marketing Website

Premium, conversion-focused marketing site for Quartum Games (a subsidiary of Quartum Group). Built for client acquisition in Europe: **Request a Demo** and **Email Us** conversions.

## Tech stack

- **React 18** + **Vite** + **TypeScript**
- **Tailwind CSS** for styling
- Single-page layout with smooth scrolling and sticky header
- Backend endpoint at `POST /api/demo-request` (Cloudflare Pages Function)
- Supabase for lead storage + Resend for sales notifications
- Analytics: placeholder `trackCTA()` in `src/analytics.ts` (replace with your provider when ready)

## Commands

```bash
npm install
npm run dev      # Start dev server (default: http://localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build locally
```

## Demo request backend (production)

The contact/demo form now submits to `POST /api/demo-request` and performs:

1. Input validation + basic sanitization
2. Insert into Supabase table `public.demo_requests`
3. Email notification to `salesquartumgroup@gmail.com` via Resend
4. JSON response back to the frontend

### Runtime platform

This is implemented as a **Cloudflare Pages Function**:

- `functions/api/demo-request.ts`

This is deployment-compatible with your `pages.dev` setup.

### Required environment variables

Set these in Cloudflare Pages project settings (Environment Variables):

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `SALES_NOTIFICATION_EMAIL` (recommended: `salesquartumgroup@gmail.com`)

Local examples:

- `.dev.vars.example` (Cloudflare local functions)
- `.env.local.example` (reference)

### Supabase schema

Run the SQL in:

- `supabase/schema.sql`

This creates `public.demo_requests` with:

- `id`, `name`, `email`, `organization`, `role`, `interest`, `phone`, `message`, `source_page`, `created_at`

### Failure behavior

- Validation errors return `400`
- Database errors return `500`
- If DB insert succeeds but email fails, endpoint still returns success (lead capture prioritized), and logs a warning server-side

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

1. Frontend submits JSON to `POST /api/demo-request`.
2. On success, user sees a confirmation state in the same UI.
3. On failure, user sees an inline error message and can retry.

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
