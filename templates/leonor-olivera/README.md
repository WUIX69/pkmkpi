# PKMKPI Frontend

Frontend-only website for PKMKPI, built with React + Vite. No backend, database,
API, or authentication — this repo is UI/static assets only.

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS (v4)
- DaisyUI (v5)

## Getting Started

```bash
npm install
npm run dev
```

The dev server will print a local URL (usually `http://localhost:5173`).

## Other Commands

```bash
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project Structure

```text
pkmkpi-frontend/
├── public/
│   └── images/
│       ├── logo/       # site/brand logo assets
│       ├── hero/       # hero/banner images
│       ├── news/       # news section images
│       ├── press/      # press/media images
│       └── gallery/    # gallery images
│
├── src/
│   ├── components/   # reusable UI components (empty for now)
│   ├── pages/        # page-level components (empty for now)
│   ├── layouts/       # layout wrappers, e.g. header/footer shells (empty for now)
│   ├── data/          # static data/content files (empty for now)
│   ├── assets/        # local images/icons used directly in components
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

## Notes

- Tailwind CSS is wired in via the `@tailwindcss/vite` plugin in `vite.config.js`.
- Tailwind and DaisyUI are enabled in `src/index.css`:

  ```css
  @import "tailwindcss";
  @plugin "daisyui";
  ```

- `App.jsx` currently renders a simple placeholder screen to confirm Tailwind
  and DaisyUI are working. Pages, layouts, components, and data will be added
  in later steps.
- Empty folders (`components`, `pages`, `layouts`, `data`, and the
  `public/images/*` subfolders) contain a `.gitkeep` file so they're tracked
  by git even before real files are added. Delete `.gitkeep` once a folder
  has real content.
