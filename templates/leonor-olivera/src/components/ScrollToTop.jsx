import { useEffect } from "react"
import { useLocation } from "react-router-dom"

// Resets scroll position to the top whenever the route (pathname) changes.
// Without this, react-router preserves the browser's natural scroll
// position across navigations, so clicking a link while scrolled down on
// one page leaves the next page scrolled down too.
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
