# Home Page Blueprint (PKMKPI V2)

## Page Architecture & Layout Map
The homepage is organized into a cohesive, single-column 8-section layout with zero horizontal overflow across 6 standard viewports (320px, 375px, 414px, 768px, 1024px, 1440px).

---

### Section 1: Top Announcement Bar (`#announcement-bar`)
- **Background:** `#04242B` (Brand Petrol Dark)
- **Typography:** Pure White `#FFFFFF` + Fresh Lime `#80BC2F` highlight badges.
- **Content:**
  - Official SEC Reg. No. `CN202105447` badge.
  - National HQ Address: Quezon City, Philippines.
  - Contact Email: `info@pkmkpi.org.ph`.
  - Accessible keyboard navigation hint (`Alt+A`).

### Section 2: Suspended Transparent Island Navigation (`header.site-header`)
- **Structure:** Floating frosted pill container centered in viewport.
- **Surface:** Permanent transparent frosted glass (`rgba(6, 51, 60, 0.50)` resting -> `rgba(6, 51, 60, 0.68)` scrolled, `backdrop-filter: blur(22px)`).
- **Positioning:** `top: 4.75rem` (desktop) / `top: 7.25rem` (mobile) resting on Hero, gliding smoothly to `top: 0.75rem` on scroll.
- **Navigation Links:** `#FFFFFF` text with `#80BC2F` active states (Tahanan, Tungkol, AEIOU, Rehiyon, Sektor, Mag-ambag, Balita, Makipag-ugnayan).
- **Pill CTA:** "Mag-Donate" button (`bg-brand-lime text-brand-petrol font-black hover:bg-brand-highlime`).
- **Mobile Drawer:** GSAP slide-and-fade drawer on `#mobile-menu`.

### Section 3: Hero Section (`#home`)
- **Background:** `#06333C` (Deep Petrol canvas) with clipped background lighting layers.
- **Display Heading:** "Pambansang Katipunan ng mga Maykapansanan sa Pilipinas, Inc." with High-Lime emphasis.
- **3D Tilt Photo Card:** Hero photo collage (`.tilt-card`) featuring Filipino PWD leaders.
- **Floating Tri-Corner Trust Badges:**
  1. `badge-floating-1`: "17 Regional Chapters"
  2. `badge-floating-2`: "10 Disability Sectors"
  3. `badge-floating-3`: "SEC Registered CN202105447"

### Section 4: About Federation Section (`#about`)
- **Background:** `#FFFFFF` (Pure White) with Charcoal `#333333` body typography.
- **3D Tilt Image Collages:** Community empowerment photos with smooth GSAP hover perspective.
- **Institutional Statement:** Official presidential message and signature in `Caveat` script font.
- **Accreditation Badge:** SEC Reg. `CN202105447` verified certification badge with tactile 3D tilt.

### Section 5: AEIOU Strategic Pillars & Core Values (`#aeiou`)
- **Background:** `#F8FAFC` (Soft Gray Tint)
- **5 Strategic Pillars:**
  1. **A** - Aksyon (Empowerment in Action)
  2. **E** - Edukasyon (Inclusive Education & Skills)
  3. **I** - Integrasyon (Social & Economic Inclusion)
  4. **O** - Oportunidad (Livelihood & Careers)
  5. **U** - Ugnayan (Cross-Sector Partnerships)
- **5 Core Values:** Makatao, Makabansa, Marangal, Matatag, Mapagkalinga.
- **Motion:** Tier 2 Clean 2D Micro-Elevation (`.card-hover-lift` -> `translateY(-4px)`).

### Section 6: 17 Regional Chapters Federation Grid (`#regions`)
- **Background:** `#06333C` (Deep Petrol)
- **Island Group Selector:** Interactive tabs for Luzon (8), Visayas (3), and Mindanao (6).
- **Regional Pills:** Interactive badge buttons updating the active regional chapter dossier.
- **Interactive Dossier Card:** `#region-dossier-card` with tactile 3D tilt (`.tilt-card`) displaying chapter head, center address, and regional programs.

### Section 7: 10 Sectoral Disability Classifications (`#sectors`)
- **Background:** `#06333C` (Deep Petrol)
- **10 Sector Cards:**
  1. Visual Impairment & Blindness
  2. Hearing & Deaf Impairment
  3. Orthopedic & Physical Mobility
  4. Psychosocial & Mental Health
  5. Intellectual Disability
  6. Learning Disability
  7. Speech & Language Impairment
  8. Autism Spectrum Disorder
  9. Chronic Illness with Disability
  10. Multiple Disabilities
- **Motion:** Tier 1B Cursor-Following Spotlight Beam (`radial-gradient(450px circle at x,y...)`, zero-margin containment `inset: 0 !important; margin: 0 !important; width: 100% !important; height: 100% !important; z-index: 1`).
- **Interactive Trigger:** Click/Enter opens `#sector-drawer` with full rights, institutional mandates, and accessible accommodations.

### Section 8: Contribute & Banking Suite (`#contribute`)
- **Background:** `#FFFFFF` (Pure White)
- **1-Click Copy Banking Cards:**
  - **BPI:** Account No. `1234-5678-90` (PKMKPI Inc.)
  - **LandBank:** Account No. `9876-5432-10` (PKMKPI National)
  - **GCash:** Account No. `0917-123-4567` (PKMKPI Finance)
- **Toast Feedback:** Floating `#copy-toast` confirmation message upon clicking any account number.
- **Volunteer & Partnership Form:** Accessible form fields with `#04242B` dark background, `#0E4A56` borders, and `#80BC2F` focus rings.

---

### Section 9: Persistent Accessibility Suite (`#a11y-fab` & `#a11y-panel`)
- **FAB Trigger:** Fixed bottom-right circular button with universal PWD SVG figure.
- **Floating Panel:** Modal suite with 3-button font scaler (`A- / Reset / A+`), high contrast mode, dyslexia mode, pause motion, Web Speech TTS, and Reset All Settings.
