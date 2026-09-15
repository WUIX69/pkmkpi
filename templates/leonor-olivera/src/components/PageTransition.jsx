import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"

// Wraps <Outlet /> so every route change gets a brief, subtle
// fade-in + slight-upward-move as the new page mounts. Pure CSS
// transition driven by a class toggle — no animation library, no
// route-exit choreography, so back/forward and refresh behave exactly
// like normal navigation (nothing to get "stuck" mid-transition).
// Inner component that actually owns the transition state. Keying
// this by pathname (done by the wrapper below) forces a fresh mount
// per route, so isEntered naturally starts at `false` for every new
// page with no synchronous setState-in-effect needed to "reset" it.
function TransitionFrame({ children }) {
  const [isEntered, setIsEntered] = useState(false)
  const frameRef = useRef(null)

  useEffect(() => {
    // Flip to "entered" on the next animation frame so the browser
    // actually paints the starting ("before") state before
    // transitioning from it.
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = requestAnimationFrame(() => setIsEntered(true))
    })
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <div className={`page-transition ${isEntered ? "is-entered" : ""}`}>
      {children}
    </div>
  )
}

function PageTransition({ children }) {
  const { pathname } = useLocation()
  return <TransitionFrame key={pathname}>{children}</TransitionFrame>
}

export default PageTransition
