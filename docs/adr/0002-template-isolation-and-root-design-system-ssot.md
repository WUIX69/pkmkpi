# 0002 - Template Isolation and Root Design System SSOT

**Date**: 2026-09-12
**Status**: Accepted

## Context

The legacy PKMKPI zero-build static web portal resided in a separate repository (`c:/projects/pkmkpi-old`). The team decided to retire the legacy V1 prototype, retain the Charity.org Humanitarian V2 implementation, and preserve it as a reference template while migrating the main portal to a modern Next.js 16 + React 19 + Tailwind CSS stack. The Next.js stack requires access to the authoritative design specifications and tokens, while the static template must remain functional and testable without polluting the root Next.js build and linting pipelines.

## Decision

1. Copy the flattened V2 static portal into `./templates/violeta-jonathan-l/` containing `index.html`, `about.html`, `src/` (styles, scripts, data), and self-contained Playwright tests.
2. Promote `DESIGN.md`, `design-system/`, and `design-extract-output/` to the project root (`./`) as the canonical Single Source of Truth (SSOT) for design tokens across both the template and future Next.js components.
3. Isolate `./templates/**`, `./design-extract-output/**`, and `./.agents/**` from root ESLint processing via `eslint.config.mjs` `globalIgnores` and `.prettierignore`.
4. Leave `c:/projects/pkmkpi-old` intact as an external archival backup.

## Consequences

- **Good**: The legacy V2 portal remains 100% operational and verifiable with zero external dependencies.
- **Good**: Next.js 16 build, typecheck, and lint pipelines remain clean and decoupled from static template JavaScript.
- **Good**: Canonical design tokens and page blueprints sit at project root for direct consumption during React component authoring.
- **Changed**: Template tests resolve design system SSOT files at project root via relative paths.
