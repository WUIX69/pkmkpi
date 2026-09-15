# 0004 - Hybrid Local Daemon and Production Static Export Showcase

**Date**: 2026-09-15
**Status**: Accepted

## Context

The PKMKPI federation preserves 7 heterogeneous multi-stack reference templates under `./templates/` (`violeta-jonathan-l`, `arcel`, `glen-martin`, `john-jhonard-de-robles`, `leonor-olivera`, `neil-datuin-caguioa`, and `renzo`). 

While ADR 0003 established out-of-process process isolation via `scripts/templates.mjs` on dedicated ports (`4001`–`4007`), two operational challenges arose:
1. **Production Deployment Constraints on Vercel**: Serverless edge hosting environments cannot execute long-running background child processes (such as PHP CLI servers or concurrent Vite/Express daemons). Hosting the template showcase in production requires static snapshots accessible over standard HTTPS.
2. **Security & Framing Boundaries**: Rendering template outputs inside the Next.js viewer shell (`/templates/[slug]`) requires explicit Content Security Policy (CSP) `frame-ancestors` governance and restrictive iframe sandboxing (`allow-scripts allow-forms allow-same-origin`) to guard against clickjacking and cross-origin state leakage.
3. **Cross-Platform Daemon Spawning**: On Windows environments, background daemon spawning using `shell: true` caused `cmd.exe` path-splitting on whitespace (`C:\Program Files\nodejs\node.exe`), requiring universal `shell: false` execution.

## Decision

1. **Dual-Mode Template Viewer Architecture**:
   - Enhance `src/components/templates/template-viewer.tsx` with automatic dual-mode URL resolution:
     - **Production (`process.env.NODE_ENV === "production"`)**: Default to `/templates-preview/${slug}/index.html`.
     - **Development (`process.env.NODE_ENV !== "production"`)**: Default to `http://localhost:${port}`.
   - Introduce an in-viewer top toolbar toggle allowing reviewers to switch seamlessly between **Live Port** (`:400x`) and **Static Snapshot** (`/templates-preview/...`) at any time.

2. **Production Static Export Showcase**:
   - Provide static snapshot previews under `public/templates-preview/${slug}/` so the full catalog is instantly previewable on Vercel and static CDNs without requiring active server processes.

3. **CSP Frame-Ancestors & Sandboxing Security**:
   - Restrict iframe execution via `sandbox="allow-scripts allow-forms allow-same-origin"`.
   - Maintain `frame-ancestors 'self'` headers on root web endpoints to ensure embedded templates cannot be embedded by untrusted external third-party origins.

4. **Cross-Platform Silent Process Spawning**:
   - Enforce `shell: false` in `scripts/templates.mjs` for all process invocations across Windows, macOS, and Linux, invoking Win32 `CreateProcessW` directly to bypass shell parsing bugs on spaces in paths.

## Consequences

- **Good**: 100% production readiness on Vercel; all 7 templates can be previewed live on static web deployments without serverless timeouts.
- **Good**: Local developers and automated audit harnesses (`templates/tests/audit_all_templates.py`) retain full live daemon testing on ports 4001–4007.
- **Good**: Robust security perimeter prevents clickjacking and unintended parent window manipulation.
- **Good**: Windows child process execution is completely stable across all system paths.
- **Changed**: Reviewers can toggle preview modes directly in the UI depending on whether local daemons are running or static snapshots are preferred.
