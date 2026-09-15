import { useEffect, useRef, useState } from "react"
import { useAccessibility } from "./useAccessibilityPrefs"

// Extracts the leading integer from strings like "40+" or "17" so we
// know what number to count up to, and keeps whatever comes after
// (the "+") as a suffix to re-attach once the animation finishes.
function parseTarget(value) {
  const match = String(value).match(/^(\d+)(.*)$/)
  if (!match) return { target: 0, suffix: String(value) }
  return { target: Number(match[1]), suffix: match[2] }
}

export function useCountUp(value, { duration = 1200 } = {}) {
  const { target, suffix } = parseTarget(value)
  const [display, setDisplay] = useState("0" + suffix)
  const ref = useRef(null)
  const hasRun = useRef(false)
  const { prefs } = useAccessibility()

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReducedMotion =
      prefs.motionPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // Skip the animation entirely (jump straight to the final value)
    // when the user prefers less motion or the browser can't observe
    // scroll position — deferred to a microtask so we don't set state
    // synchronously inside the effect body.
    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      queueMicrotask(() => setDisplay(target + suffix))
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return
        hasRun.current = true

        const start = performance.now()

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - (1 - progress) ** 3 // ease-out cubic
          setDisplay(Math.round(eased * target) + suffix)
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, suffix, duration, prefs.motionPaused])

  return { ref, display }
}
