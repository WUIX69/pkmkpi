import { createContext, useContext, useEffect, useState } from "react"

const STORAGE_KEY = "pkmkpi-accessibility-prefs"
const THEME_STORAGE_KEY = "pkmkpi-theme"

const defaultPrefs = {
  fontScale: 100,
  highContrast: false,
  dyslexiaMode: false,
  motionPaused: false,
}

function loadPrefs() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultPrefs
    return { ...defaultPrefs, ...JSON.parse(raw) }
  } catch {
    return defaultPrefs
  }
}

// Theme is stored separately from the other a11y prefs (its own small
// localStorage key) so it can be read/applied before first paint by an
// inline script in index.html, avoiding a light-mode flash for users
// who prefer dark. Falls back to the OS-level color-scheme preference
// when the user hasn't chosen one explicitly yet.
function loadTheme() {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === "light" || stored === "dark") return stored
  } catch {
    // localStorage may be unavailable (private mode, etc.) — fall through.
  }
  if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    return "dark"
  }
  return "light"
}

export const AccessibilityContext = createContext(null)

export function useAccessibilityState() {
  const [prefs, setPrefs] = useState(loadPrefs)
  const [panelOpen, setPanelOpen] = useState(false)
  const [theme, setTheme] = useState(loadTheme)

  useEffect(() => {
    const root = document.documentElement
    root.style.fontSize = `${prefs.fontScale}%`
    root.classList.toggle("a11y-high-contrast", prefs.highContrast)
    root.classList.toggle("a11y-dyslexia", prefs.dyslexiaMode)
    root.classList.toggle("a11y-motion-paused", prefs.motionPaused)

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
    } catch {
      // localStorage may be unavailable (private mode, etc.) — safe to ignore.
    }
  }, [prefs])

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "pkmkpi-dark" : "pkmkpi",
    )
    document.documentElement.style.colorScheme = theme

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // localStorage may be unavailable (private mode, etc.) — safe to ignore.
    }
  }, [theme])

  useEffect(() => {
    function handleKeydown(event) {
      if (event.altKey && (event.key === "a" || event.key === "A")) {
        event.preventDefault()
        setPanelOpen((prev) => !prev)
      }
      if (event.key === "Escape") {
        setPanelOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeydown)
    return () => window.removeEventListener("keydown", handleKeydown)
  }, [])

  function setFontScale(value) {
    setPrefs((prev) => ({ ...prev, fontScale: value }))
  }

  function toggleHighContrast() {
    setPrefs((prev) => ({ ...prev, highContrast: !prev.highContrast }))
  }

  function toggleDyslexiaMode() {
    setPrefs((prev) => ({ ...prev, dyslexiaMode: !prev.dyslexiaMode }))
  }

  function toggleMotionPaused() {
    setPrefs((prev) => ({ ...prev, motionPaused: !prev.motionPaused }))
  }

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  function resetPrefs() {
    setPrefs(defaultPrefs)
  }

  return {
    prefs,
    panelOpen,
    setPanelOpen,
    theme,
    toggleTheme,
    setFontScale,
    toggleHighContrast,
    toggleDyslexiaMode,
    toggleMotionPaused,
    resetPrefs,
  }
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error("useAccessibility must be used within AccessibilityProvider")
  }
  return context
}
