# 0001 - Use `src/` directory layout

**Date**: 2026-09-11
**Status**: Accepted

## Context

A fresh Next.js project was generated with elements (`app`, `components`, `lib`, `hooks`) at the root `/`. The codebase will grow.

## Decision

Move all application code (`app`, `components`, `lib`, `hooks`) into `src/`. Map `@/*` path alias to `./src/*` in `tsconfig.json`.

## Consequences

- **Good**: Configuration files stay isolated at the root. Application code is consolidated.
- **Changed**: Path aliases resolve cleanly under `src/`.