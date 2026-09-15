# 0003 - Multi-Stack Template Isolation and Verification Framework

**Date**: 2026-09-15
**Status**: Accepted

## Context

Following the initial isolation of `templates/violeta-jonathan-l` (ADR 0002), the PKMKPI team submitted 6 additional reference templates under `./templates/` (`arcel`, `glen-martin`, `john-jhonard-de-robles`, `leonor-olivera`, `neil-datuin-caguioa`, and `renzo`). These submissions employ heterogeneous technology stacks:
- PHP 8.5 procedural with MySQL queries (`neil-datuin-caguioa`)
- React 19 + Vite 8 + DaisyUI (`leonor-olivera`)
- HTML5 + Tailwind v3 + Express server (`arcel`)
- Plain HTML5, CSS3, and Vanilla JS (`glen-martin`, `john-jhonard-de-robles`, `renzo`)

Several hygiene challenges existed:
1. `templates/arcel` contained an internal `.git/` folder, causing Git to treat it as a dirty nested submodule.
2. `templates/neil-datuin-caguioa` executed `require_once 'includes/db.php'` and MySQL queries, but `db.php` was omitted from the submission.
3. `templates/renzo` had HTML files nested in `html/` while referencing styles in `css/`, causing 404 path breaks when served at root. Furthermore, `home.html` linked to `css/home.css` while stylesheet was named `mockup.css`, and team photos in `our_team.html` were missing from `templates/renzo/images/`.
4. `templates/leonor-olivera` required npm packages that could pollute root pnpm workspace dependencies. When spawned via Node on Windows with `shell: true`, unquoted paths like `C:\Program Files\nodejs\node.exe` failed with `'C:\Program' is not recognized`.

The primary portal is migrating to Next.js 16 + React 19 + Tailwind CSS 4. The root application must not be polluted by foreign dependencies, compilers, or broken runtimes, yet reviewers must be able to inspect, preview, and audit all 7 templates.

## Decision

1. **Strict Perimeter Isolation**: Maintain `./templates/**` in `eslint.config.mjs`, `tsconfig.json`, `.prettierignore`, and `pnpm-workspace.yaml` `packages: []`. Add `templates/**/node_modules` to root `.gitignore`.
2. **Git Submodule Purge**: Delete `templates/arcel/.git` so root Git natively tracks all template files.
3. **In-Memory Database Mock**: Provide `templates/neil-datuin-caguioa/includes/db.php` with an in-memory class mocking `$conn->prepare(...)` and `$stmt->get_result()` for the 10 disability clusters, enabling the PHP app to run on PHP CLI server (`php -S`) without a live MySQL instance.
4. **Renzo Path & Asset Normalization**: Flatten `templates/renzo/html/*.html` to `templates/renzo/*.html`, provide `templates/renzo/index.html`, duplicate `mockup.css` as `css/home.css`, and populate `templates/renzo/images/` with the PKMKPI seal, community hero image, and all 9 web-ready team photos with case/punctuation aliases (`RENZO MINGAN.jpeg`, `Espiritu, Rosemarie M__.jpg`, `VIOLETA, JONATHAN L..jpg`). Normalize shared reference assets in `public/img/our-team-images/`.
5. **Local Dependency Installation**: Install `templates/leonor-olivera` dependencies locally via `npm --prefix templates/leonor-olivera install`, never adding it to root `pnpm-workspace.yaml`.
6. **Cross-Platform Out-of-Process Server Orchestration**: Implement `scripts/templates.mjs` managing dedicated ports with `shell: false` child process spawning on Windows:
   - `4001`: `violeta-jonathan-l` (Static HTTP)
   - `4002`: `arcel` (Static / Express with `PORT=4002`)
   - `4003`: `glen-martin` (Static HTTP)
   - `4004`: `john-jhonard-de-robles` (Static HTTP)
   - `4005`: `leonor-olivera` (Vite dev server, spawned with `shell: false`)
   - `4006`: `neil-datuin-caguioa` (PHP CLI)
   - `4007`: `renzo` (Static HTTP)
7. **Next.js Federation Showcase & Sandboxed Viewer**:
   - `/templates`: Catalog grid displaying metadata and links for all 7 templates.
   - `/templates/[slug]`: Sandboxed viewer embedding running ports in `<iframe sandbox="allow-scripts allow-forms">` with responsive viewport presets (`320px`, `768px`, `1024px`, `1440px`).
8. **Multi-Viewport & Image Load Automated Audits**: Provide `templates/tests/audit_all_templates.py` asserting HTTP 200, zero console errors, zero horizontal scrollbar overflow, and image load integrity (`naturalWidth > 0`) across 6 standard viewports.

## Consequences

- **Good**: 100% of team submissions remain authentic, runnable, and visually testable.
- **Good**: Zero toolchain, compiler, or dependency contamination of root Next.js 16.
- **Good**: Submodule corruption and fatal PHP crashes eliminated.
- **Good**: Windows path execution bugs (`C:\Program`) resolved across all process spawns.
- **Good**: Renzo styling and team photos render completely with zero broken image icons.
- **Good**: Reviewers can switch viewports and preview templates inside Next.js without security or auth leakage.
- **Changed**: Reviewers must start template servers (`pnpm templates:serve <name>` or `pnpm templates:serve:all`) to view running templates in the sandboxed iframe viewer.
