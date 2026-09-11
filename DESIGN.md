---
colors:
  primary: "#80BC2F"
  secondary: "#06333C"
  petrol_dark: "#04242B"
  petrol_light: "#0E4A56"
  accent_gold: "#EBA92F"
  high_lime: "#B8F264"
  ocean_blue: "#15768D"
  background: "#FFFFFF"
  foreground: "#333333"
  gray_bg: "#F8FAFC"
  text_dark_bg: "#FFFFFF"
  text_lime_bg: "#06333C"
  high_contrast:
    bg: "#000B18"
    fg: "#FFD700"
    links: "#00E5FF"
typography:
  sans: "Montserrat, -apple-system, BlinkMacSystemFont, sans-serif"
  script: "Caveat, cursive"
  editorial: "Merriweather, serif"
  dyslexia: "OpenDyslexic, 'Comic Sans MS', sans-serif"
  base: 15
rounded:
  sm: "0.5rem"
  md: "1rem"
  lg: "1.25rem"
  xl: "1.5rem"
  "2xl": "1.75rem"
  "3xl": "2rem"
  full: "9999px"
spacing:
  base: "4px"
  scale: [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64]
components:
  - "floating-island-nav"
  - "sector-drawer"
  - "btn-pill-primary"
  - "btn-pill-secondary"
  - "1-click-copy"
  - "a11y-suite"
  - "spotlight-card"
  - "tilt-card"
  - "atmospheric-gradient-mesh"
---

# PKMKPI V2 Design System Specification (Charity.org Standard)

## 1. Visual Theme & Atmosphere Philosophy

The **PKMKPI V2 Design System** establishes a world-class, human-first philanthropic digital environment inspired by modern global NGO benchmarks (such as Charity.org). It combines institutional credibility with energetic optimism, warmth, and uncompromising accessibility.

- **Atmosphere:** Modern, clean, empathetic, and purposeful. Avoids dull bureaucratic aesthetics in favor of lush Deep Petrol foundations paired with vibrant Fresh Lime vitality and Marigold Gold trust marks.
- **Visual Materials:** Premium frosted glass islands (`backdrop-filter: blur(18px - 22px)`), crisp tactile 3D perspective geometry, and soft layered elevation shadows.
- **Copy & Voice:** Respectful, empowering, and action-oriented Tagalog-English copy representing 17 regional chapters and 10 sectoral disability classifications under SEC Reg. No. `CN202105447`.

---

## 2. Color Palette & Semantic Roles

| Token Name | Hex Code | Functional Role & Application |
|---|---|---|
| **Primary / Fresh Lime** | `#80BC2F` | Main Call-to-Action buttons, active nav indicators, interactive borders, stat counter highlights, badge accents. |
| **Secondary / Deep Petrol** | `#06333C` | Foundation canvas, Hero section background, major institutional headings on light surfaces, modal surfaces. |
| **Petrol Dark** | `#04242B` | Top announcement bar, input field backgrounds, high-contrast dark surfaces. |
| **Petrol Light** | `#0E4A56` | Card dividers, interactive subtle hover highlights, secondary containers. |
| **Accent / Marigold Gold** | `#EBA92F` | Presidential trust marks, official SEC accreditation highlights, tertiary action accents. |
| **High-Lime** | `#B8F264` | High-legibility subtitles, section tag labels, and stat emphasis on dark teal canvases. |
| **Ocean Blue** | `#15768D` | Region pill badges, informational card accents, subtle link states. |
| **Foreground / Charcoal** | `#333333` | Primary body typography on white and light gray canvases. |
| **Pure White** | `#FFFFFF` | Light card surfaces, primary text and icons on dark petrol canvases. |
| **Soft Gray Tint** | `#F8FAFC` / `#F1F5F9` | Section alternating background tints for visual pacing. |
| **High-Contrast Canvas** | `#000B18` | PWD AAA High-Contrast Mode obsidian background. |
| **High-Contrast Gold** | `#FFD700` | PWD AAA High-Contrast Mode text, borders, and icons. |
| **High-Contrast Cyan** | `#00E5FF` | PWD AAA High-Contrast Mode interactive links and focus rings. |

---

## 3. WCAG 2.2 AAA Contrast Compliance Matrix

All visual color combinations adhere strictly to **WCAG 2.2 Level AAA** standards (>= 7.0:1 for normal body copy, >= 4.5:1 for large display headings):

| Pair Foreground | Pair Background | Contrast Ratio | WCAG 2.2 Level | Usage Context |
|---|---|---|---|---|
| Pure White (`#FFFFFF`) | Deep Petrol (`#06333C`) | **14.8:1** | **AAA Pass** | Hero text, dark card body copy, buttons |
| Charcoal (`#333333`) | Pure White (`#FFFFFF`) | **12.6:1** | **AAA Pass** | Main editorial body copy on light cards |
| Charcoal (`#333333`) | Soft Gray (`#F1F5F9`) | **11.2:1** | **AAA Pass** | Secondary content containers |
| High-Lime (`#B8F264`) | Deep Petrol (`#06333C`) | **7.80:1** | **AAA Pass** | Section badges, subtitles on dark canvas |
| Marigold Gold (`#EBA92F`) | Deep Petrol (`#06333C`) | **6.63:1** | **AAA Large / AA UI** | Trust badges, large headings |
| Deep Petrol (`#06333C`) | Fresh Lime (`#80BC2F`) | **5.92:1** | **AAA Large / AA UI** | Text inside Pill CTA buttons |
| Ocean Blue (`#15768D`) | Pure White (`#FFFFFF`) | **5.24:1** | **AAA Large / AA UI** | Region pills and category tags |
| Cyan (`#00E5FF`) | Obsidian (`#000B18`) | **13.5:1** | **AAA Pass** | High Contrast Mode hyperlinks |
| Gold (`#FFD700`) | Obsidian (`#000B18`) | **14.2:1** | **AAA Pass** | High Contrast Mode text & borders |

---

## 4. Typography Hierarchy & Font Stacks

### Font Families
1. **Primary Sans-Serif:** `Montserrat` (`font-sans`) — Weights: 400 (Regular), 600 (SemiBold), 700 (Bold), 800 (ExtraBold), 900 (Black).
2. **Accent Script:** `Caveat` (`font-script`) — Weight: 700 (Bold) for presidential signatures and personal handwritten quotes.
3. **Editorial Serif:** `Merriweather` (`font-editorial`) — Weights: 400 (Regular), 700 (Bold) for formal declarations and SEC compliance statements.
4. **Dyslexia-Friendly Stack:** `OpenDyslexic, 'Comic Sans MS', sans-serif` — Enforces `0.05em` letter-spacing and `1.75` line-height when activated via accessibility controls.

### Scale & Weight Specifications
| Level | Font Size | Line Height | Font Weight | Letter Spacing |
|---|---|---|---|---|
| **Display 2XL** | `56px - 64px` | `1.08` | `800 - 900` | `-0.025em` |
| **Display XL** | `40px - 48px` | `1.12` | `800` | `-0.02em` |
| **Display LG** | `28px - 36px` | `1.20` | `800` | `-0.015em` |
| **Section Title** | `22px - 26px` | `1.30` | `700 - 800` | `-0.01em` |
| **Card Heading** | `16px - 18px` | `1.35` | `700` | `normal` |
| **Body Regular** | `14px - 15px` | `1.60` | `400` | `normal` |
| **Caption / Badge** | `11px - 12px` | `1.40` | `600 - 700` | `0.05em uppercase` |

---

## 5. Shapes, Elevation & Spacing

### Corner Radius System
- **Pill / Circular:** `rounded-full` (`9999px`) — CTA buttons, floating navigation island, category pills, `#a11y-fab`.
- **Card Containers:** `rounded-3xl` (`1.5rem - 2rem`) — 3D tilt cards, disability cards, banking cards, modal dialogs.
- **Inner Elements & Inputs:** `rounded-xl` (`0.75rem`) — Form inputs, drawer badges, modal action buttons.

### Elevation & Shadow Scale
- **Subtle Layer:** `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06)` — Static cards, input focus states.
- **Tactile Island:** `box-shadow: 0 12px 36px -4px rgba(0, 0, 0, 0.35)` — Suspended transparent navigation.
- **Deep Elevation:** `box-shadow: 0 20px 40px -8px rgba(6, 51, 60, 0.35)` — Hovered 3D tilt cards, sector drawer modal.
- **Lime Glow Halo:** `box-shadow: 0 0 18px rgba(128, 188, 47, 0.35)` — Accessibility FAB, primary CTA focus rings.

---

## 6. Core Component Specifications

### 1. Floating Island Navigation (`.floating-island-nav`)
- **Structure:** Suspended pill-shaped container centered in `header.site-header`.
- **Positioning:**
  - Resting on Hero: `top: 4.75rem` (desktop) / `top: 7.25rem` (mobile).
  - Scrolled / Docked: `top: 0.75rem` (all screens) with smooth `0.4s cubic-bezier(0.16, 1, 0.3, 1)` transition.
- **Surface:** Permanent transparent frosted glass (`rgba(6, 51, 60, 0.50)` resting -> `rgba(6, 51, 60, 0.68)` scrolled, `backdrop-filter: blur(18px - 22px)`). Zero jarring white background transition.
- **Typography & Links:** `#FFFFFF` text, `#80BC2F` active underline/color, `#FFFFFF` mobile hamburger toggle.
- **Mobile Menu:** GSAP-animated slide-in drawer (`opacity: 0 -> 1`, `y: -10 -> 0`, `scale: 0.98 -> 1`).

### 2. Sliding Right-Side Drawer Panel (`#sector-drawer`)
- **Structure:** Accessible slide-in modal panel (`w-full sm:max-w-md bg-brand-petrol text-white`) with dark backdrop blur overlay.
- **Features:** Dynamic dataset injection from `disabilities.js`, close button `✕`, `Escape` key dismiss, and focus trap.

### 3. Interactive 1-Click Copy Banking Cards
- **Structure:** Tactile payment transfer cards (BPI, LandBank, GCash) with account badges and visual copy cues.
- **Feedback:** Fixed bottom floating toast notification (`#copy-toast`) with green checkmark and localized confirmation message.

### 4. PWD Floating Accessibility Suite (`#a11y-fab` & `#a11y-panel`)
- **Position:** Fixed bottom-right (`bottom: 24px; right: 24px`).
- **FAB Button:** 54px circular badge with official universal PWD figure SVG (`M12 2c1.1...`), `#06333C` background, `#80BC2F` 2.5px border, and dual glow shadow.
- **Modal Controls (`Alt+A` / `Esc`):**
  1. Text Sizing 3-button grid (`A-` 90%, `Reset` 100%, `A+` 115%) with live percentage badge.
  2. High Contrast (AAA) toggle (Dark & Gold).
  3. Dyslexia-Friendly text toggle (`OpenDyslexic`).
  4. Pause All Animations toggle.
  5. Web Speech API Text-to-Speech audio reader (`tl-PH` locale with `.tts-reading-active` highlight).
  6. Global "Reset All Settings" button.

### 5. 10 Sectoral Disability Spotlight Cards
- **Structure:** `.spotlight-card` with cursor-following flashlight illumination (`.spotlight-beam`).
- **Containment:** `top: 0 !important; inset: 0 !important; margin: 0 !important; width: 100% !important; height: 100% !important; z-index: 1;` — completely eliminates margin gaps.
- **Illumination:** `radial-gradient(450px circle at x,y, rgba(184, 242, 100, 0.32) 0%, rgba(128, 188, 47, 0.15) 40%, transparent 75%)`.

### 6. Atmospheric Gradient Meshes & Ambient Glow Orbs (`.section-hero-gradient`, `.section-regions-gradient`, `.ambient-glow`)
- **Standard Application:** Mandatory baseline backdrop across all page Hero headers (`index.html`, `about.html`, and all future subpages).
- **Multi-Point Radial Matrix:**
  - Radial Spot 1 (Top Left / `12% 20%`): Fresh Lime `rgba(128, 188, 47, 0.22)`
  - Radial Spot 2 (Bottom Right / `88% 75%`): Marigold Gold `rgba(235, 169, 47, 0.16)`
  - Radial Spot 3 (Center Top / `50% 10%`): Ocean Blue `rgba(21, 118, 141, 0.20)`
  - Base Linear Gradient (135°): `#06333C 0%, #04252C 60%, #02171B 100%`
- **Dynamic Breathing Shift:** `background-size: 130% 130%`, `animation: heroGradientShift 18s ease-in-out infinite alternate`.
- **In-Section Floating Orbs:** `.ambient-glow` with `border-radius: 50%`, `filter: blur(90px)`, `opacity: 0.22`, `animation: floatGlow 12s ease-in-out infinite alternate`.

---

## 7. 4-Tier Pure GSAP 3.12.5 Motion Engine Specification

The motion engine runs **100% on GSAP 3.12.5 + ScrollTrigger** with zero native fallback loops or conflicting CSS transitions:

### Motion Tier Matrix
0. **Tier 0: Atmospheric Breathing Gradient Mesh & Ambient Glows**
   - Active on: Page Hero headers (`.section-hero-gradient`), regional scope sections (`.section-regions-gradient`), footer crowns (`.section-footer-gradient`), and `.ambient-glow` floating orbs.
   - Parameters: `background-size: 130% 130%`, `animation: heroGradientShift 18s ease-in-out infinite alternate`, `floatGlow 12s alternate`.

1. **Tier 1: Tactile 3D Perspective Tilt**
   - Active on: About photo collages, Hero photo card, Region dossier card, SEC Trust badge.
   - Parameters: `transformPerspective: 1000`, `rotationX: ((y-cY)/cY)*-12`, `rotationY: ((x-cX)/cX)*12`, `scale: 1.04`, `duration: 0.12`, `ease: "power1.out"`, `overwrite: "auto"`.
   - Recovery: `0.5s` spring recovery (`ease: "power2.out"`).

2. **Tier 1B: Cursor-Following Spotlight Beam**
   - Active on: 10 Sectoral Disability cards (`[data-disability-card]`).
   - Parameters: `radial-gradient(450px circle at x,y, ...)`, `gsap.to(beam, { opacity: 1/0, duration: 0.2 })`.

3. **Tier 2: Clean 2D Micro-Elevation**
   - Active on: AEIOU pillars, Core Values, Support cards (`.card-hover-lift`).
   - Parameters: `transform: translateY(-4px)`, `0.2s ease`, standard soft elevation shadow.

4. **Tier 3: Zero-Dependency Scroll Reveals**
   - Active on: All `.sr-item` elements.
   - Variants: `.sr-left` (x: -50), `.sr-right` (x: 50), `.sr-scale` (scale: 0.94), Default (y: 40).
   - Parameters: `ScrollTrigger.batch`, `duration: 0.6s`, `ease: "expo.out"`, `stagger: 0.035s`, `once: true`.

5. **Tier 4: PWD Accessibility Motion Bypass**
   - Active on: `body.animations-paused` or `prefers-reduced-motion`.
   - Action: `ScrollTrigger.getAll().forEach(st => st.disable())`, `gsap.globalTimeline.pause()`, `gsap.set('.sr-item', { opacity: 1, x: 0, y: 0, scale: 1 })`.

---

## 8. Multi-Viewport Containment & QA Standards

- **Zero Horizontal Overflow:** Enforce `overflow-x: hidden !important` on `html`/`body`, clipped backdrop layer (`fixed inset-0 pointer-events-none overflow-hidden -z-10`), and section-level clipping.
- **Tested Viewports:**
  - `320px` (iPhone SE / Small Mobile)
  - `375px` (Standard Mobile)
  - `414px` (Large Mobile)
  - `768px` (Tablet Portrait)
  - `1024px` (Tablet Landscape / Laptop)
  - `1440px` (Desktop Standard)
- **Quality Gate:** `bodyScrollWidth === clientWidth` (`hasOverflow === False`) and 100% test pass on master test suite (`tests/run_all_audits.py`).

---

## 9. Design System Do's & Don'ts

### Do's
- **DO** use Pure White (`#FFFFFF`) or High-Lime (`#B8F264`) for typography over Deep Petrol (`#06333C`) surfaces.
- **DO** maintain `border-radius: 9999px` on all floating interactive buttons and nav containers.
- **DO** let GSAP exclusively manage inline transforms without adding CSS `transition: transform` to animated elements.
- **DO** keep the floating navbar permanently transparent with dark frosted tint across both resting and scrolled states.

### Don'ts
- **DON'T** use Fresh Lime (`#80BC2F`) for normal body copy over dark backgrounds (violates 7:1 AAA contrast floor).
- **DON'T** inject Tailwind `space-y-*` onto containers that hold absolutely positioned spotlight beams.
- **DON'T** add hardcoded inline `style="transition-delay: ..."` attributes to scroll-revealed elements.
- **DON'T** introduce third-party UI framework dependencies — maintain zero-build architecture.
