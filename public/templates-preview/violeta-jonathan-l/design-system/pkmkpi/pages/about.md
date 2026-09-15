# About Us Page Blueprint (PKMKPI V2)

## Page Architecture & Layout Map
The standalone About Us page (`about.html`) is structured into a dedicated 9-section institutional layout with zero horizontal overflow across 6 standard viewports (320px, 375px, 414px, 768px, 1024px, 1440px).

---

### Section 1: Top Announcement Bar (`#announcement-bar`)
- **Background:** `#031D22` (Brand Petrol Dark)
- **Typography:** Pure White `#FFFFFF` + Fresh Lime `#80BC2F` highlight badges.
- **Content:**
  - Official SEC Reg. No. `CN202105447` verified badge.
  - National HQ Address: 98 Major Marcos St., Pasong Tamo, Quezon City.
  - Contact Email: `pkmkpi.pwd@gmail.com`.
  - Accessible keyboard navigation shortcut (`Alt+A`).

### Section 2: Suspended Frosted Island Navigation (`header.site-header`)
- **Structure:** Floating frosted pill container centered in viewport.
- **Surface:** Permanent transparent frosted glass (`rgba(6, 51, 60, 0.50)` resting -> `rgba(6, 51, 60, 0.68)` scrolled, `backdrop-filter: blur(22px)`).
- **Active Page:** `About Us` (`aria-current="page"` with `text-brand-lime font-black`).
- **Cross-Page Links:** Routed back to `index.html#home`, `index.html#aeiou`, `index.html#values`, `index.html#regions`, `index.html#sectors`, `index.html#support`, `index.html#contact`.
- **Pill CTA:** "Mag-Donate" button linking to `index.html#contribute`.
- **Mobile Drawer:** GSAP slide-and-fade drawer on `#mobile-menu`.

### Section 3: About Hero & SEC Charter Banner
- **Background:** `.section-hero-gradient` with multi-point radial mesh and breathing `heroGradientShift` animation.
- **In-Section Floating Glows:** Dual `.ambient-glow` orbs (`.glow-primary`, `.glow-gold`).
- **Display Heading:** "Pambansang Kapisanan ng mga May Kapansanan ng Pilipinas, Inc."
- **3D Tilt Seal Card:** Official PKMKPI seal (`.tilt-card`) featuring the Latin motto *"Nihil de nobis, sine nobis"* (*"Nothing About Us Without Us"*).
- **Accreditation Pill:** SEC Reg. No. `CN202105447`.

### Section 4: Statistical Scope & Alliance Validation
- **Background:** `#031D22` (Petrol Dark)
- **3 Metric Tiles:**
  1. **17** Rehiyon sa Pilipinas (Luzon, Visayas, Mindanao, BARMM).
  2. **40+** Corporate Member Organizations.
  3. **10** Uri ng Kapansanan (Harnessed PWD & PWRD sectors).

### Section 5: Institutional History & Organizational Story
- **Background:** `#FFFFFF` (Pure White) with Charcoal `#333333` body copy.
- **Institutional Facts:** Non-stock, non-profit people's organization, 40 corporate member alliance, nationwide family of PWDs and PWRDs.
- **Aming Panata:** 3D tilt card framing the national unity pledge.

### Section 6: Vision, Mission & Strategic Objectives
- **Background:** `#F8FAFC` (Soft Gray Tint)
- **3-Pillar Cards:**
  1. **Bisyon:** Equality, dignity, and recognition of abilities over disabilities.
  2. **Misyon:** Full implementation of disability laws (RA 7277, BP 344, RA 10524).
  3. **Layunin:** Empowered, self-sufficient, and self-reliant PWD community.
- **Motion:** Tier 2 Clean 2D Micro-Elevation (`.card-hover-lift` -> `translateY(-4px)`).

### Section 7: AEIOU National Goals & 5 Core Values Matrix
- **Background:** `#06333C` (Deep Petrol)
- **AEIOU Goals (5):** Awareness, Empowerment, Involvement, Cooperation, Unity.
- **Core Values (5):** Maka-Panginoon, Maka-Bansa, Maka-Tao, Maka-Kalikasan, Maka-Kapansanan.

### Section 8: National Leadership & Governance Directory (`#leadership`)
- **Background:** `#FFFFFF` (Pure White)
- **Interactive Category Filters:** `[Lahat ng Pinuno (16)]`, `[National Officers (7)]`, `[Board of Trustees (3)]`, `[Regional Board Members (6)]`.
- **Tier 1: Executive Officers (7):**
  - Fe V. Corpuz, D.D. (NCR) — National President
  - Ferdinand F. Bello (RVIII) — National Vice President
  - Leilani I. Servas (RIV-B) — National Secretary
  - Neil C. Pena (NCR) — National Treasurer
  - Homer L. Alcover (RIV-A) — National Auditor
  - Nelson P. Balmores (RIII) — National PIO
  - Kristel G. Manzano (NCR) — National Executive Secretary
- **Tier 2: Board of Trustees (3):**
  - Joniro F. Fradejas (NCR) — Chairperson
  - Alpio G. Dacut, Jr. (Region X) — Vice Chairperson
  - Cheryl P. Borbe (NCR) — Corporate Secretary
- **Tier 3: Regional Board Members (6):**
  - Marlon P. Publico (NCR), Romeo N. Oli (CAR), Edison G. Lamadrid (R2), Teddy M. Kahil (R9), Jerry M. Micabalo (RXIII), Johaira T. Sultan (BARMM).
- **Regional Affiliation Badges:** Ocean Blue chips (`[NCR]`, `[RVIII]`, `[BARMM]`, etc.) with screen-reader accessible `aria-label` expansions.

### Section 9: Regional Alliance Summary & Chapter Map CTA
- **Background:** `.section-regions-gradient` with ambient glow orb.
- **Content:** 40+ corporate alliance narrative with CTA buttons linking to `index.html#regions` and `index.html#sectors`.

### Section 10: Federation Creed & Call to Solidarity
- **Background:** `.section-footer-gradient` with golden ambient glow.
- **Creed:** *"Isang Bansa. Isang Kapisanan. Isang Layunin. Walang Iwanan. Lahat ay Mahalaga."*
- **Primary CTA:** "Mag-Ambag sa Pederasyon" linking to `index.html#contribute`.

### Section 11: Site Footer & PWD Accessibility Suite
- **Footer:** SEC registration details, Quezon City headquarters, social channels, copyright notice.
- **Accessibility Suite (`#a11y-fab` & `#a11y-panel`):** Persistent 3-button font scaler, AAA high contrast, dyslexia font, animation pause toggle, and Web Speech TTS audio reader (`tl-PH`).
