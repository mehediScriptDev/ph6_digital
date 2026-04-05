# ph6_digital

A small marketing/demo site for premium digital products built with React, Vite and Tailwind CSS. The project demonstrates a hero section, gradient CTA, pricing cards, steps, and a simple products + cart flow (client-side).

**Features**
- **Hero:** Responsive hero with gradient CTA and secondary action.
- **Stats / CTA:** Gradient stats and full-width CTA sections using project CSS variables.
- **Pricing:** 3-card pricing section using daisyUI-style cards and `react-icons` checks.
- **Steps:** Simple 3-step feature cards with icons from `/public/assets`.
- **Products & Cart:** Fetches product data from `public/data/products.json`, lets users add products to a client-side cart and remove them; shows transient toasts.
- **Responsive:** Layouts built with Tailwind for mobile-first responsiveness.

**Tech Stack**
- **Framework:** React (Vite)
- **Styling:** Tailwind CSS (+ optional daisyUI utilities)
- **Icons:** `react-icons`
- **Bundler:** Vite

**Quick Start**
- Install dependencies:

```bash
npm install
```

- Start dev server:

```bash
npm run dev
```

- Build for production:

```bash
npm run build
```

**Important Files**
- `src/components/` — main UI components (`Hero.jsx`, `ProductsCarts.jsx`, `Pricing.jsx`, `Steps.jsx`, etc.)
- `src/index.css` — global CSS and theme variables (`--color-primary`, `--color-another`)
- `public/data/products.json` — sample product data used by the products list


