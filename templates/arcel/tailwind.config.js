/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // toggled by adding/removing `.dark` on <html> — see js/theme.js
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // ---------------------------------------------------------------
        // THEME-REACTIVE TOKENS
        // These read from CSS custom properties defined in input.css, so
        // the same utility class (e.g. bg-canvas, text-heading) resolves
        // to a different color in light vs. dark mode automatically.
        // The `rgb(var(--x) / <alpha-value>)` pattern keeps opacity
        // modifiers (bg-canvas/90, text-heading/60, etc.) working.
        // ---------------------------------------------------------------
        canvas: "rgb(var(--canvas-rgb) / <alpha-value>)",
        "canvas-subtle": "rgb(var(--canvas-subtle-rgb) / <alpha-value>)",
        "surface-soft": "rgb(var(--surface-soft-rgb) / <alpha-value>)",

        primary: "rgb(var(--primary-rgb) / <alpha-value>)",
        "primary-dark": "rgb(var(--primary-dark-rgb) / <alpha-value>)",
        "primary-light": "rgb(var(--primary-light-rgb) / <alpha-value>)",

        // Heading/eyebrow ink — Deep Petrol on light canvases, High-Lime on dark canvases
        heading: "rgb(var(--heading-rgb) / <alpha-value>)",
        "eyebrow-accent": "rgb(var(--eyebrow-rgb) / <alpha-value>)",

        ink: "rgb(var(--ink-rgb) / <alpha-value>)",
        "ink-light": "rgb(var(--ink-light-rgb) / <alpha-value>)",
        "ink-muted": "rgb(var(--ink-muted-rgb) / <alpha-value>)",

        hairline: "rgb(var(--hairline-rgb) / <alpha-value>)",
        "hairline-strong": "rgb(var(--hairline-strong-rgb) / <alpha-value>)",

        nav: "rgb(var(--nav-bg-rgb) / <alpha-value>)",

        // ---------------------------------------------------------------
        // FIXED BRAND TOKENS — same value in both themes
        // ---------------------------------------------------------------
        "accent-gold": "#EBA92F",       // Marigold Gold — trust marks, accreditation accents
        "accent-gold-light": "#F2C368",

        "accent-green": "#80BC2F",         // Fresh Lime — primary CTA color
        " ": "#B8F264",  // High-Lime — AAA subtitles on dark canvas
        "accent-green-soft": "#EAF6DC",

        "ocean-blue": "#15768D",

        "badge-bg": "#E6F3F6",
        "badge-text": "#15768D",

        "badge-gold-bg": "#FCEFD8",
        "badge-gold-text": "#06333C",

        "badge-green-bg": "#EAF6DC",
        "badge-green-text": "#06333C",

        error: "#DC2626",
        warning: "#EBA92F",
        success: "#80BC2F",

        // High Contrast Palette — used only when AAA high-contrast mode is toggled on
        "hc-bg": "#000B18",     // Obsidian
        "hc-gold": "#FFD700",   // Gold
        "hc-cyan": "#00E5FF",   // Cyan
      },
      fontFamily: {
        display: ["Montserrat", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        editorial: ["Merriweather", "Georgia", "Cambria", "Times New Roman", "serif"],
        script: ["Caveat", "cursive"],
      },
      fontSize: {
        "display-xl": ["clamp(2.25rem, 4.6vw, 4rem)", { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-lg": ["clamp(1.875rem, 3.6vw, 3rem)", { lineHeight: "1.12", letterSpacing: "-0.015em", fontWeight: "800" }],
        "display-md": ["clamp(1.5rem, 2.6vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "display-sm": ["1.75rem", { lineHeight: "1.25", fontWeight: "700" }],
        "title-lg": ["1.375rem", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "700" }],
        "title-md": ["1.125rem", { lineHeight: "1.35", fontWeight: "700" }],
        "title-sm": ["1rem", { lineHeight: "1.4", fontWeight: "700" }],
        eyebrow: ["0.8125rem", { lineHeight: "1.3", letterSpacing: "0.12em", fontWeight: "700" }],
        "body-lead": ["1.125rem", { lineHeight: "1.65", fontWeight: "400" }],
        "body-md": ["0.9375rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["0.8125rem", { lineHeight: "1.5", fontWeight: "400" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "500" }],
        btn: ["0.875rem", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "700" }],
        "nav-link": ["0.875rem", { lineHeight: "1.4", fontWeight: "600" }],
      },
      borderRadius: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "1.5rem",
        "2xl": "1.75rem",
        "3xl": "2rem",
      },
      spacing: {
        xxs: "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "48px",
        section: "80px",
        "section-lg": "104px",
      },
      boxShadow: {
        lift: "0 10px 25px -5px rgba(10, 37, 64, 0.08), 0 8px 10px -6px rgba(10, 37, 64, 0.04)",
        tilt: "0 20px 40px -15px rgba(10, 37, 64, 0.16), 0 0 0 1px rgba(217, 119, 6, 0.25)",
        "lift-dark": "0 10px 25px -5px rgba(0, 0, 0, 0.45), 0 8px 10px -6px rgba(0, 0, 0, 0.3)",
        "glow-lime": "0 0 18px rgba(128, 188, 47, 0.35)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};