import { useEffect, useState } from "react"
import { ArrowUpIcon } from "./icons"
import { useAccessibility } from "../hooks/useAccessibilityPrefs"

function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { prefs } = useAccessibility()

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 480)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function scrollToTop() {
    const prefersReducedMotion =
      prefs.motionPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={[
        "btn btn-circle btn-primary fixed bottom-6 right-4 z-40 shadow-lg transition-all duration-300 sm:bottom-8 sm:right-8",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      ].join(" ")}
    >
      <ArrowUpIcon />
    </button>
  )
}

export default BackToTop
