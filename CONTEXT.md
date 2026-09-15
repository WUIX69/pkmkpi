# CONTEXT

## Domains

- **PKM**: Personal Knowledge Management.
- **KPI**: Key Performance Indicator.
- **Template**: Reusable reference UI implementations stored in `./templates/`. Preserved for visual reference, UX comparison, and cross-stack porting.
- **Template Sandbox**: Out-of-process execution boundary ensuring heterogeneous template runtimes (PHP, Vite, Tailwind v3, static HTML) run on dedicated ports (4001–4007) with zero toolchain or dependency leakage into root Next.js 16.
- **Template Catalog**: The federation showcase page at `/templates` presenting cards, tech stack tags, and metadata for all 7 team submissions.
- **Sandboxed Viewer**: The Next.js viewer shell at `/templates/[slug]` embedding running template ports inside `<iframe sandbox="allow-scripts allow-forms">` with interactive viewport presets.
- **Dual-Mode Template Viewer**: Next.js client component (`template-viewer.tsx`) with dynamic URL resolution defaulting to `/templates-preview/${slug}/index.html` in production (Vercel) and `http://localhost:${port}` in development, with an interactive top toolbar toggle to switch preview modes on demand.
- **Static Template Snapshot**: Pre-rendered, production-ready static export copies located under `public/templates-preview/` enabling serverless edge preview of multi-stack templates without active daemon runtimes.
- **Frame-Ancestors Policy**: Content Security Policy directive (`frame-ancestors 'self'`) and iframe sandboxing (`allow-scripts allow-forms allow-same-origin`) protecting the embedded viewer from clickjacking and unauthorized external embedding.
- **arcel**: HTML5 + Tailwind v3 + Express reference template on port 4002.
- **glen-martin**: Plain HTML5, CSS3, Vanilla JS reference template on port 4003.
- **john-jhonard-de-robles**: Plain HTML5, CSS3, Vanilla JS reference template on port 4004.
- **leonor-olivera**: React 19 + Vite 8 + DaisyUI reference template on port 4005 (spawned with `shell: false` cross-platform).
- **neil-datuin-caguioa**: PHP 8.5 procedural + Bootstrap reference template with in-memory database mock on port 4006.
- **renzo**: Plain HTML5, CSS3 reference template on port 4007 with dedicated `css/home.css`, community hero, and 9 normalized team photos.
- **violeta-jonathan-l**: The Charity.org Humanitarian V2 zero-build reference portal (Deep Petrol `#06333C`, Fresh Lime `#80BC2F`, Marigold Gold `#EBA92F`, GSAP motion, WCAG AAA accessibility) preserved under `./templates/violeta-jonathan-l/` on port 4001.

(Glossary expands as we add details.)