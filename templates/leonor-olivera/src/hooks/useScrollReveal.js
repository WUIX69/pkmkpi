import { useEffect, useRef, useState } from "react"

// Attach the returned ref to any element and it will gain the
// `is-visible` class (see .reveal in index.css) the first time it
// scrolls into view. Uses IntersectionObserver so it's cheap even
// with many sections on the page.
export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // Keep the latest options available to the effect below without
  // making them a dependency: callers pass a fresh object literal on
  // every render (e.g. `useScrollReveal()`), so depending on it
  // directly would tear down and recreate the IntersectionObserver on
  // every re-render of every component that uses <Reveal> or this
  // hook — needlessly expensive across a page with dozens of them.
  const optionsRef = useRef(options)
  optionsRef.current = options

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // If the browser lacks IntersectionObserver support, just show
    // the element immediately (deferred so we don't set state
    // synchronously inside the effect body).
    if (typeof IntersectionObserver === "undefined") {
      queueMicrotask(() => setIsVisible(true))
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, ...optionsRef.current },
    )

    observer.observe(node)
    return () => observer.disconnect()
    // oxlint-disable-next-line react/exhaustive-deps
  }, [])

  return { ref, isVisible }
}
