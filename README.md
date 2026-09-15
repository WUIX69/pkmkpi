# PKMKPI Web Portal & Template Federation Showcase

Federation web portal for the **Pederasyon ng May Kapansanan sa Pilipinas, Inc. (PKMKPI)**, built on Next.js 16, React 19, and Tailwind CSS v4, featuring a hybrid multi-runtime template federation showcase, Vercel static export pipeline, and automated multi-viewport Playwright audit harness.

---

## Architecture Overview

1. **Root Next.js Application (`src/`)**:
   - Next.js 16 (App Router), React 19, Tailwind CSS v4, shadcn/ui.
   - Federation Showcase (`/templates`): Catalog grid displaying metadata, tech stacks, and live status for all 7 team submissions.
   - Dual-Mode Sandboxed Template Viewer (`/templates/[slug]`): Embedded viewer rendering active template ports or pre-rendered static snapshots inside `<iframe sandbox="allow-scripts allow-forms allow-same-origin">` with responsive viewport presets (`375px`, `768px`, `1024px`, `1440px`, `100%`) and top toolbar toggle.

2. **Isolated Multi-Stack Template Catalog (`./templates/`)**:
   - Preserved reference templates executing strictly out-of-process on dedicated localhost ports (4001–4007) with zero toolchain or dependency leakage into root Next.js:
     - `violeta-jonathan-l` (**Port 4001**): Charity.org Humanitarian V2 zero-build reference portal (HTML5, GSAP 3.12, WCAG 2.2 AAA accessibility toolbar).
     - `arcel` (**Port 4002**): HTML5 + Tailwind CSS v3 + Express server.
     - `glen-martin` (**Port 4003**): Plain HTML5, CSS3, Vanilla JS 8-page institutional portal.
     - `john-jhonard-de-robles` (**Port 4004**): Plain HTML5, CSS3, Vanilla JS national branding and roster portal.
     - `leonor-olivera` (**Port 4005**): React 19 + Vite 8 + DaisyUI SPA (spawned via cross-platform `shell: false` runner).
     - `neil-datuin-caguioa` (**Port 4006**): PHP 8.5 procedural + Bootstrap server-rendered portal with zero-config in-memory mock database for 10 disability clusters and CSP `frame-ancestors` compliance.
     - `renzo` (**Port 4007**): Plain HTML5 + Semantic CSS3 web portal with normalized team assets, community hero, and skip-to-content accessibility.

3. **Multi-Runtime Orchestrator & Static Export CLI (`scripts/templates.mjs`)**:
   - Centralized Node.js runner to inspect, serve, export, and kill template runtimes across Windows, macOS, and Linux without shell-escaping bugs (`shell: false`, `windowsHide: true`).
   - Static Export Pipeline (`pnpm templates:export`): Pre-renders all 7 templates into `public/templates-preview/` during `pnpm build` for zero-daemon Vercel production hosting.

4. **Automated Audit Harness (`templates/tests/audit_all_templates.py`)**:
   - Playwright test suite auditing all 7 running templates across 6 device viewports (`320x568`, `375x667`, `414x896`, `768x1024`, `1024x768`, `1440x900`).
   - Asserts HTTP 200, zero horizontal overflow (`scrollWidth <= clientWidth`), zero unhandled console errors, and image load integrity (`img.complete && img.naturalWidth > 0`).

---

## Quick Start

### Prerequisites
- Node.js 20+ (pnpm recommended)
- Python 3.10+ with `playwright` (for template audits)
- PHP CLI (optional, required only for serving `neil-datuin-caguioa` on port 4006)

### Install Dependencies
```bash
pnpm install
```

### Run Next.js Portal
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) for the main portal and [http://localhost:3000/templates](http://localhost:3000/templates) for the Federation Template Showcase.

---

## Template Federation Commands

| Command | Description |
|---|---|
| `pnpm templates:list` | Check runtime and port status of all 7 templates |
| `pnpm templates:serve <name>` | Start a specific template (e.g. `violeta-jonathan-l`, `renzo`) |
| `pnpm templates:serve:all` | Boot all 7 template servers concurrently in background |
| `pnpm templates:export` | Export all 7 templates as static snapshots to `public/templates-preview/` |
| `pnpm templates:audit` | Run the automated multi-viewport & image integrity Playwright audit |
| `pnpm templates:kill` | Terminate all active background template servers cleanly |

> **Production Note**: On Vercel deployments, template previews are served from pre-rendered static snapshots under `public/templates-preview/` without requiring live daemon processes.

### Complete Audit Workflow
```bash
# 1. Start all template servers in the background
pnpm templates:serve:all

# 2. Run multi-viewport Playwright audit suite
pnpm templates:audit

# 3. Stop background servers when complete
pnpm templates:kill
```

---

## Repository Structure

```
├── .claude/               # Architecture decision records, plans, and reports
├── design-system/         # Canonical PKMKPI design tokens and specs (SSOT)
├── docs/
│   └── adr/               # Architecture Decision Records (0001, 0002, 0003, 0004)
├── public/                # Static assets, branding, and templates-preview snapshots
├── scripts/
│   └── templates.mjs      # Out-of-process multi-runtime template orchestrator
├── src/
│   ├── app/
│   │   ├── page.tsx       # Root landing page
│   │   └── templates/     # Showcase grid & sandboxed iframe viewer routes
│   ├── components/        # Reusable UI primitives and dual-mode template viewer
│   └── lib/               # Shared utilities
└── templates/             # 7 isolated multi-stack reference implementations
    ├── arcel/
    ├── glen-martin/
    ├── john-jhonard-de-robles/
    ├── leonor-olivera/
    ├── neil-datuin-caguioa/
    ├── renzo/
    ├── violeta-jonathan-l/
    └── tests/
        └── audit_all_templates.py   # Multi-viewport audit test harness
```

---

## Architectural Guardrails

- **Strict Isolation**: `./templates/**` is excluded from root ESLint, Prettier, and TypeScript checks. Templates manage their own isolated runtimes.
- **Cross-Platform Process Safety**: `scripts/templates.mjs` executes child binaries with `shell: false` and `windowsHide: true` to prevent Windows `cmd.exe` path-splitting on paths containing spaces (`C:\Program Files\nodejs\node.exe`).
- **Targeted Process Management**: Never issue blanket kills (`taskkill /im node.exe`). Always use `pnpm templates:kill` which tracks PID allocations in `.templates-pids.json`.
