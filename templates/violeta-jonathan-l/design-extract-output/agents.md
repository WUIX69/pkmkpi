# Agent instructions — design system

This project follows the design system extracted from https://charity.org.
Any coding agent working here must use the tokens below and avoid inventing new ones.
Source: https://charity.org
Extracted by designlang v7.0.0 on 2026-08-27T15:25:10.595Z

## Semantic tokens (use these)
- color.action.primary: #80bc2f
- color.surface.default: #ffffff
- color.text.body: #000000
- radius.control: 2px
- typography.body.fontFamily: Montserrat

## Regions
- nav
- nav
- nav
- nav
- nav
- nav
- nav
- content
- content
- content
- content
- content
- content
- content
- content
- pricing
- footer
- nav
- nav
- sidebar

## How to use
- Prefer `semantic.*` tokens over `primitive.*`.
- Never invent new tokens or hex values; reuse the ones above.
- When a value is missing, pick the closest existing semantic token and flag the gap.
- Reference tokens by their dotted path (e.g. `semantic.color.action.primary`).
