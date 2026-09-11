# PKMKPI V2 Design System MASTER Runbook

## 1. Overview & Institutional Constitution
This master runbook serves as the definitive Single Source of Truth (SSOT) index for the **PKMKPI V2 Design System**, engineered to international NGO presentation standards (inspired by Charity.org) under SEC Registration No. `CN202105447`.

---

## 2. Core Token Mapping
- **Primary / Action:** `#80BC2F` (Fresh Lime) — CTA buttons, active state indicators, stat highlights.
- **Secondary / Canvas:** `#06333C` (Deep Petrol) — Foundation surfaces, hero background, primary institutional headings.
- **Petrol Dark:** `#04242B` — Top announcement bar, input background.
- **Petrol Light:** `#0E4A56` — Subtle dividers and card outlines.
- **Accent / Gold:** `#EBA92F` (Marigold Gold) — Presidential trust marks, accreditation accents.
- **High-Lime:** `#B8F264` — AAA High-legibility subtitles on dark canvas.
- **Ocean Blue:** `#15768D` — Regional pills and informational badges.
- **Foreground / Text:** `#333333` (Charcoal) — Body text on light surfaces.
- **Pure White:** `#FFFFFF` — Light cards, typography on dark petrol backgrounds.
- **High Contrast Palette:** Obsidian (`#000B18`), Gold (`#FFD700`), Cyan (`#00E5FF`).

---

## 3. Typography Stacks
- **Primary Body & Headings:** `Montserrat` (400 Regular, 600 SemiBold, 700 Bold, 800 ExtraBold, 900 Black).
- **Presidential Accent Script:** `Caveat` (700 Bold).
- **Editorial Declarations:** `Merriweather` (400 Regular, 700 Bold).
- **Dyslexia Mode:** `OpenDyslexic, 'Comic Sans MS', sans-serif`.

---

## 4. Component Architecture Index
1. **Floating Island Navigation:** Suspended pill navbar (`rgba(6, 51, 60, 0.50)` -> `0.68`, blur `22px`, `#FFFFFF` links, mobile slide drawer).
2. **Sliding Sector Drawer (`#sector-drawer`):** Modal drawer for 10 disability classifications with rights copy.
3. **1-Click Copy Banking Cards:** Interactive transfer cards (BPI, LandBank, GCash) with floating `#copy-toast`.
4. **PWD Floating Accessibility Suite:** Bottom-right circular FAB (`#a11y-fab`), 3-step scaler (`0.9 / 1.0 / 1.15`), high contrast, dyslexia, pause motion, TTS reader, and Reset All Settings.
5. **10 Sectoral Disability Spotlight Cards:** Flashlight beam with zero-margin containment (`top: 0; inset: 0; margin: 0; width: 100%; height: 100%`).
6. **17 Regional Chapter Matrix:** Luzon, Visayas, Mindanao pills with live chapter dossier card.
7. **Atmospheric Gradient Meshes & Ambient Glows:** Multi-point radial gradient mesh (`.section-hero-gradient`, `.section-regions-gradient`) with `heroGradientShift` 18s and breathing `.ambient-glow` orbs.

---

## 5. 5-Tier Pure GSAP Motion Engine
- **Tier 0 (Atmospheric Gradient Mesh & Ambient Glows):** `.section-hero-gradient` (`background-size: 130% 130%`, `animation: heroGradientShift 18s ease-in-out infinite alternate`) and `.ambient-glow` (`floatGlow 12s alternate`).
- **Tier 1 (Tactile 3D Tilt):** `.tilt-card` (`perspective: 1000px`, `rotationX/Y: +-12deg`, `scale: 1.04`).
- **Tier 1B (Spotlight Beam):** `radial-gradient(450px circle at x,y...)` with GSAP opacity tween.
- **Tier 2 (Clean 2D Micro-Lift):** `.card-hover-lift` (`translateY(-4px)` with soft shadow).
- **Tier 3 (Batch Scroll Reveals):** `ScrollTrigger.batch` for `.sr-item`, `.sr-left`, `.sr-right`, `.sr-scale`.
- **Tier 4 (Accessibility Motion Override):** Instant bypass when `body.animations-paused` or `prefers-reduced-motion` is active.

---

## 6. Page Blueprints & Specification Links
- [DESIGN.md Core Specification](../../DESIGN.md)
- [Home Page Blueprint](./pages/home.md)
- [About Us Page Blueprint](./pages/about.md)
