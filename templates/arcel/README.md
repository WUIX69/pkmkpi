# PKMKPI Federation — Frontend

Static frontend for the PKMKPI Federation homepage, built with **HTML + Tailwind CSS + vanilla JS**, served by a **Node.js** static server (no framework/backend needed).

## Stack
- `public/index.html` — page markup (Tailwind utility classes)
- `src/input.css` → `public/dist/output.css` — Tailwind build output
- `public/js/main.js` — mobile nav, scroll-reveal, 3D tilt on the hero image, and accessibility controls (high contrast, text scaler, read-aloud via Web Speech API)
- `tailwind.config.js` — design tokens (colors, type scale, spacing, radii) copied from `DESIGN.md`
- `server.js` — zero-dependency Node static file server

## Setup

```bash
npm install
```

## Development (watch Tailwind + serve)

Run in two terminals:

```bash
npm run watch:css   # rebuilds public/dist/output.css on change
npm start            # serves ./public at http://localhost:3000
```

Or do a one-off build + serve:

```bash
npm run dev
```

## Production build

```bash
npm run build:css   # minified CSS to public/dist/output.css
npm start
```

Then open **http://localhost:3000**.

## Notes
- All colors, type sizes, spacing, and radii are wired into `tailwind.config.js` from `DESIGN.md` (primary navy `#0A2540`, accent gold `#D97706`, accent green `#15803D`, etc.) so any Tailwind class like `bg-primary`, `text-accent-gold`, `rounded-xs` maps directly to the design system.
- Accessibility: high-contrast toggle, 3-step font scaler, and a Web Speech API "read page aloud" control live in the nav (desktop) — `Alt+A` also toggles high contrast.
- Motion respects `prefers-reduced-motion`.
