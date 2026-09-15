import { AccessibilityContext, useAccessibilityState } from "../hooks/useAccessibilityPrefs"
import AccessibilityPanel from "./AccessibilityPanel"

function AccessibilityProvider({ children }) {
  const state = useAccessibilityState()

  return (
    <AccessibilityContext.Provider value={state}>
      {children}
      <AccessibilityPanel />
    </AccessibilityContext.Provider>
  )
}

export default AccessibilityProvider
