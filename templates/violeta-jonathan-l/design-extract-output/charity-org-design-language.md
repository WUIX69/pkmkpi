# Design Language: Homepage - Global Impact

> Extracted from `https://charity.org/` on August 27, 2026
> 844 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#80bc2f` | rgb(128, 188, 47) | hsl(86, 60%, 46%) | 61 |
| Secondary | `#06333c` | rgb(6, 51, 60) | hsl(190, 82%, 13%) | 250 |
| Accent | `#eba92f` | rgb(235, 169, 47) | hsl(39, 82%, 55%) | 48 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#333333` | hsl(0, 0%, 20%) | 561 |
| `#ffffff` | hsl(0, 0%, 100%) | 409 |
| `#000000` | hsl(0, 0%, 0%) | 251 |
| `#202020` | hsl(0, 0%, 13%) | 7 |
| `#f1f1f1` | hsl(0, 0%, 95%) | 7 |

### Background Colors

Used on large-area elements: `#ffffff`, `#80bc00`, `#06333c`, `#80bc2f`, `#d15e1e`, `#eba92f`, `#772583`, `#15768d`

### Text Colors

Text color palette: `#000000`, `#333333`, `#06333c`, `#ffffff`, `#33373d`, `#6ec1e4`, `#15768d`, `#80bc2f`, `#eba92f`, `#d15e1e`

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#333333` | text, border | 561 |
| `#ffffff` | background, text, border | 409 |
| `#000000` | text, border | 251 |
| `#06333c` | text, border, background | 250 |
| `#15768d` | background, text, border | 120 |
| `#80bc2f` | background, text, border | 61 |
| `#eba92f` | background, text, border | 48 |
| `#6ec1e4` | text, border | 14 |
| `#d15e1e` | background, text, border | 8 |
| `#202020` | border, text | 7 |
| `#f1f1f1` | border, background | 7 |
| `#ff0000` | background, text, border | 5 |
| `#2e9935` | text, border | 2 |
| `#80bc00` | background | 1 |
| `#772583` | background | 1 |

## Typography

### Font Families

- **Montserrat** — used for all (370 elements)
- **Times New Roman** — used for body (85 elements)
- **turbinado-pro** — used for all (17 elements)
- **eicons** — used for body (2 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 140px | 8.75rem | 400 | 140px | normal | div, svg, defs, g |
| 130px | 8.125rem | 700 | 68px | normal | span |
| 90px | 5.625rem | 700 | 45px | normal | h1 |
| 86px | 5.375rem | 400 | 86px | normal | div, svg, defs, style |
| 80px | 5rem | 400 | 50px | normal | div, p |
| 72px | 4.5rem | 700 | 68px | normal | div |
| 64px | 4rem | 700 | 68px | normal | h1, br |
| 50px | 3.125rem | 400 | 50px | normal | div, svg, g, path |
| 48px | 3rem | 600 | 60px | normal | span |
| 42px | 2.625rem | 700 | 44px | normal | div, p |
| 38px | 2.375rem | 700 | 45px | normal | h2 |
| 32px | 2rem | 400 | 28px | normal | a, svg, g, path |
| 29px | 1.8125rem | 400 | 29px | normal | a, span, i |
| 28px | 1.75rem | 400 | 33.6px | normal | span |
| 25px | 1.5625rem | 600 | 36px | normal | h3, a, div, p |

### Heading Scale

```css
h1 { font-size: 90px; font-weight: 700; line-height: 45px; }
h1 { font-size: 64px; font-weight: 700; line-height: 68px; }
h2 { font-size: 38px; font-weight: 700; line-height: 45px; }
h3 { font-size: 25px; font-weight: 600; line-height: 36px; }
h4 { font-size: 24px; font-weight: 500; line-height: 28.8px; }
h6 { font-size: 16px; font-weight: 400; line-height: 18.4px; }
```

### Body Text

```css
body { font-size: 13px; font-weight: 400; line-height: 19.5px; }
```

### Font Weights in Use

`400` (663x), `600` (84x), `700` (78x), `900` (9x), `500` (5x), `800` (5x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-30 | 30px | 1.875rem |
| spacing-34 | 34px | 2.125rem |
| spacing-38 | 38px | 2.375rem |
| spacing-46 | 46px | 2.875rem |
| spacing-60 | 60px | 3.75rem |
| spacing-64 | 64px | 4rem |
| spacing-68 | 68px | 4.25rem |
| spacing-75 | 75px | 4.6875rem |
| spacing-78 | 78px | 4.875rem |
| spacing-84 | 84px | 5.25rem |
| spacing-90 | 90px | 5.625rem |
| spacing-134 | 134px | 8.375rem |
| spacing-160 | 160px | 10rem |
| spacing-264 | 264px | 16.5rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| sm | 3px | 1 |
| md | 7px | 4 |
| md | 10px | 1 |
| full | 25px | 1 |
| full | 34px | 1 |
| full | 50px | 10 |

## Box Shadows

**xs** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 1px 1px 0px 0px;
```

**md** — blur: 10px
```css
box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 10px 0px;
```

**lg** — blur: 5px
```css
box-shadow: rgb(0, 0, 0) 8px 8px 5px 0px;
```

**lg** — blur: 5px
```css
box-shadow: rgba(0, 0, 0, 0.99) 8px 8px 5px 0px;
```

**lg** — blur: 10px
```css
box-shadow: rgba(0, 0, 0, 0.33) 0px 7px 10px -3px;
```

**lg** — blur: 13px
```css
box-shadow: rgba(0, 0, 0, 0.89) 6px 5px 13px 0px;
```

**lg** — blur: 30px
```css
box-shadow: rgba(35, 35, 35, 0.1) 0px 0px 30px 0px;
```

## CSS Custom Properties

### Other

```css
--wp-internal-comment: "Placeholder for wp_hoist_late_printed_styles() to replace with the block styles printed at wp_footer.";
--direction-multiplier: 1;
--page-title-display: block;
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| xs | 350px | max-width |
| sm | 479px | max-width |
| 575px | 575px | max-width |
| sm | 576px | min-width |
| sm | 600px | min-width |
| md | 767px | max-width |
| md | 768px | min-width |
| lg | 991px | max-width |
| lg | 992px | min-width |
| lg | 999px | max-width |
| lg | 1000px | min-width |
| lg | 1024px | max-width |
| lg | 1025px | min-width |
| 1200px | 1200px | min-width |
| xl | 1300px | max-width |
| 99999px | 99999px | max-width |

## Transitions & Animations

**Easing functions:** `[object Object]`

**Durations:** `0.3s`, `0.4s`, `0.25s`, `0.2s`

### Common Transitions

```css
transition: all;
transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
transition: 0.4s;
transition: max-height 0.3s, transform 0.3s;
transition: 0.3s;
transition: background 0.25s, border 0.25s, box-shadow 0.25s;
transition: filter 0.3s;
transition: opacity 0.3s;
transition: bottom 0.3s cubic-bezier(0.17, 0.04, 0.03, 0.94);
```

### Keyframe Animations

**jet-engine-spin**
```css
@keyframes jet-engine-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(359deg); }
}
```

**jet-engine-map-spin**
```css
@keyframes jet-engine-map-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(359deg); }
}
```

**fa-spin**
```css
@keyframes fa-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(359deg); }
}
```

**fa-spin**
```css
@keyframes fa-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(359deg); }
}
```

**eicon-spin**
```css
@keyframes eicon-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(359deg); }
}
```

**hide-scroll**
```css
@keyframes hide-scroll {
  0%, 100% { overflow: hidden; }
}
```

**fa-spin**
```css
@keyframes fa-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(1turn); }
}
```

**fa-spin**
```css
@keyframes fa-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(1turn); }
}
```

**a**
```css
@keyframes a {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(359deg); }
}
```

**jet-spinner-animation**
```css
@keyframes jet-spinner-animation {
  0% { transform: scaleY(0.4); }
  25% { transform: scaleY(0.9); }
  50% { transform: scaleY(0.2); }
  80% { transform: scaleY(0.4); }
  100% { transform: scaleY(0.4); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (14 instances)

```css
.button {
  background-color: rgb(128, 188, 47);
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 400;
  padding-top: 13px;
  padding-right: 20px;
  border-radius: 5px;
}
```

### Cards (1 instances)

```css
.card {
  background-color: rgb(255, 255, 255);
  border-radius: 5px 0px 0px 5px;
  box-shadow: rgba(35, 35, 35, 0.1) 0px 0px 30px 0px;
  padding-top: 30px;
  padding-right: 30px;
}
```

### Inputs (1 instances)

```css
.input {
  color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
  border-radius: 0px;
  font-size: 16px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (96 instances)

```css
.link {
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
}
```

### Navigation (31 instances)

```css
.navigatio {
  background-color: rgb(21, 118, 141);
  color: rgb(51, 51, 51);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 10px 0px;
}
```

### Footer (3 instances)

```css
.foote {
  background-color: rgb(255, 255, 255);
  color: rgb(51, 51, 51);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Modals (11 instances)

```css
.modal {
  background-color: rgb(255, 255, 255);
  border-radius: 0px;
  box-shadow: rgba(35, 35, 35, 0.1) 0px 0px 30px 0px;
  padding-top: 0px;
  padding-right: 0px;
  max-width: 1170px;
}
```

### Dropdowns (99 instances)

```css
.dropdown {
  background-color: rgb(21, 118, 141);
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 10px 0px;
  border-color: rgb(51, 51, 51);
  padding-top: 0px;
}
```

### Tabs (16 instances)

```css
.tab {
  background-color: rgb(241, 241, 241);
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-color: rgb(0, 0, 0);
  border-radius: 0px;
}
```

### Switches (5 instances)

```css
.switche {
  background-color: rgb(6, 51, 60);
  border-radius: 0px;
  border-color: rgb(255, 255, 255);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 51, 51);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 51, 51);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(128, 188, 47);
  color: rgb(6, 51, 60);
  padding: 12px 20px 12px 20px;
  border-radius: 5px;
  border: 0px none rgb(6, 51, 60);
  font-size: 16px;
  font-weight: 600;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(6, 51, 60);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(6, 51, 60);
  font-size: 16px;
  font-weight: 600;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(6, 51, 60);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(6, 51, 60);
  font-size: 16px;
  font-weight: 600;
```

### Button — 3 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(32, 32, 32);
  padding: 0px 0px 0px 0px;
  border-radius: 5px;
  border: 0px none rgb(32, 32, 32);
  font-size: 14px;
  font-weight: 400;
```

**Variant 2** (2 instances)

```css
  background: rgb(128, 188, 47);
  color: rgb(255, 255, 255);
  padding: 8px 30px 8px 30px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 38.4px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
```

## Layout System

**1 grid containers** and **194 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 100% | 64px |
| min(100%, 1440px) | 0px |
| 75% | 5px |
| 985px | 0px |
| 311px | 0px |
| 624px | 0px |
| 1440px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 3-column | 1x |

### Grid Templates

```css
grid-template-columns: 357.328px 357.328px 357.344px;
gap: 35px 30px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 129x |
| column/nowrap | 62x |
| row/wrap | 3x |

**Gap values:** `10px`, `134px`, `20px`, `35px 30px`, `5px`

## Accessibility (WCAG 2.1)

**Overall Score: 29%** — 2 passing, 5 failing color pairs

### Failing Color Pairs

| Foreground | Background | Ratio | Level | Used On |
|------------|------------|-------|-------|---------|
| `#ffffff` | `#80bc2f` | 2.29:1 | FAIL | button (5x) |

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#06333c` | `#80bc2f` | 5.92:1 | AA |

## Design System Score

**Overall: 68/100 (Grade: D)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 40/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 90/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 29/100 |
| CSS Tokenization | 50/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii

**Issues:**
- 4 font families — consider limiting to 2 (heading + body)
- 23 distinct font sizes — consider a tighter type scale
- 5 WCAG contrast failures
- 205 !important rules — prefer specificity over overrides
- 87% of CSS is unused — consider purging
- 6302 duplicate CSS declarations

## Z-Index Map

**11 unique z-index values** across 4 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 9900,9997 | aside.m.o.o.v.e.-.g.d.p.r.-.a.l.i.g.n.-.c.e.n.t.e.r. .m.o.o.v.e.-.g.d.p.r.-.l.i.g.h.t.-.s.c.h.e.m.e. .g.d.p.r._.i.n.f.o.b.a.r._.p.o.s.t.i.o.n._.b.o.t.t.o.m, nav.e.l.e.m.e.n.t.o.r.-.n.a.v.-.m.e.n.u.-.-.d.r.o.p.d.o.w.n. .e.l.e.m.e.n.t.o.r.-.n.a.v.-.m.e.n.u._._.c.o.n.t.a.i.n.e.r |
| dropdown | 500,500 | div.e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t. .e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t.-.c.4.1.a.8.7.4. .e.-.c.o.n.-.f.u.l.l. .e.-.f.l.e.x. .e.-.c.o.n. .e.-.p.a.r.e.n.t. .e.-.l.a.z.y.l.o.a.d.e.d. .e.l.e.m.e.n.t.o.r.-.s.t.i.c.k.y, div.e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t. .e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t.-.1.2.2.a.2.c.4. .e.-.f.l.e.x. .e.-.c.o.n.-.b.o.x.e.d. .e.-.c.o.n. .e.-.c.h.i.l.d, div.e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t. .e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t.-.c.b.3.b.5.a.5. .e.-.c.o.n.-.f.u.l.l. .e.-.f.l.e.x. .e.-.c.o.n. .e.-.c.h.i.l.d |
| sticky | 10,99 | div.e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t. .e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t.-.0.c.1.c.9.f.1. .e.-.c.o.n.-.f.u.l.l. .e.-.f.l.e.x. .e.-.c.o.n. .e.-.p.a.r.e.n.t. .e.-.l.a.z.y.l.o.a.d.e.d, div.e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t. .e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t.-.7.8.8.2.c.8.e. .e.-.f.l.e.x. .e.-.c.o.n.-.b.o.x.e.d. .e.-.c.o.n. .e.-.c.h.i.l.d, div.m.o.o.v.e.-.g.d.p.r.-.m.o.d.a.l.-.l.e.f.t.-.c.o.n.t.e.n.t |
| base | -1,2 | span.s.c.r.i.p.t, div.e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t. .e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t.-.6.3.3.f.8.3.6. .e.l.e.m.e.n.t.o.r.-.a.b.s.o.l.u.t.e. .e.l.e.m.e.n.t.o.r.-.v.i.e.w.-.d.e.f.a.u.l.t. .e.l.e.m.e.n.t.o.r.-.w.i.d.g.e.t. .e.l.e.m.e.n.t.o.r.-.w.i.d.g.e.t.-.i.c.o.n, div.e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t. .e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t.-.1.0.2.a.9.8.f. .e.l.e.m.e.n.t.o.r.-.w.i.d.g.e.t._._.w.i.d.t.h.-.i.n.i.t.i.a.l. .e.l.e.m.e.n.t.o.r.-.w.i.d.g.e.t. .e.l.e.m.e.n.t.o.r.-.w.i.d.g.e.t.-.t.e.x.t.-.e.d.i.t.o.r |

## SVG Icons

**5 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| lg | 1 |
| xl | 4 |

**Icon colors:** `white`, `rgb(235, 169, 47)`, `rgb(21, 118, 141)`, `rgb(128, 188, 47)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| FontAwesome | self-hosted | normal | normal |
| Font Awesome 5 Free | self-hosted | 900 | normal |
| eicons | self-hosted | 400 | normal |
| Montserrat | self-hosted | 100, 200, 300, 400, 500, 600, 700, 800, 900 | italic, normal |
| Font Awesome 5 Brands | self-hosted | 400 | normal |
| turbinado-pro | self-hosted | 700 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 10 | objectFit: fill, borderRadius: 0px, shape: square |
| general | 5 | objectFit: fill, borderRadius: 25px, shape: pill |

**Aspect ratios:** 3:2 (8x), 1:1 (3x), 3.2:1 (2x), 11.82:1 (1x), 16:9 (1x)

## Motion Language

**Feel:** responsive · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |

### Easing Families

- **ease-out** (1 uses) — `cubic-bezier(0.17, 0.04, 0.03, 0.94)`

## Component Anatomy

### button — 9 instances

**Slots:** label
**Variants:** link
**Sizes:** sm

| variant | count | sample label |
|---|---|---|
| default | 8 | Subscribe |
| link | 1 | Subscribe |

## Brand Voice

**Tone:** friendly · **Pronoun:** you-only · **Headings:** unknown (tight)

### Top CTA Verbs

- **subscribe** (5)
- **accept** (2)
- **settings** (1)
- **reject** (1)

### Button Copy Patterns

- "subscribe" (5×)
- "settings" (1×)
- "accept
reject" (1×)
- "accept" (1×)
- "reject" (1×)

## Page Intent

**Type:** `landing` (confidence 0.29)
**Description:** Global Impact serves as a trusted philanthropy advisor, intermediary, and nonprofit partner for greater giving.

Alternates: legal (0.4)

## Section Roles

Reading order (top→bottom): nav → nav → nav → nav → nav → nav → sidebar → footer → nav

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.4 |
| 1 | nav | — | 0.9 |
| 2 | nav | — | 0.9 |
| 3 | nav | — | 0.9 |
| 4 | nav | — | 0.9 |
| 5 | footer | — | 0.95 |
| 6 | nav | — | 0.9 |
| 7 | nav | — | 0.9 |
| 8 | sidebar | — | 0.4 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.539 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 50px |
| backdrop-filter in use | no |
| Gradients | 0 |

## Imagery Style

**Label:** `flat-illustration` (confidence 0.2)
**Counts:** total 15, svg 6, icon 0, screenshot-like 0, photo-like 2
**Dominant aspect:** landscape
**Radius profile on images:** square

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Montserrat` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
