import { useEffect, useRef } from "react"
import { useAccessibility } from "../hooks/useAccessibilityPrefs"
import { useTextToSpeech } from "../hooks/useTextToSpeech"
import { EyeIcon, CloseIcon, SunIcon, MoonIcon } from "./icons"

const FONT_SCALES = [100, 115, 130, 150]

function AccessibilityPanel() {
  const {
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
  } = useAccessibility()

  const { isSupported: ttsSupported, isSpeaking, speakPageContent, stopSpeaking } =
    useTextToSpeech()

  const panelRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (panelOpen) {
      panelRef.current?.querySelector("button, input")?.focus()
    } else {
      triggerRef.current?.focus()
    }
  }, [panelOpen])

  return (
    <>
      <button
        type="button"
        ref={triggerRef}
        onClick={() => setPanelOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={panelOpen}
        aria-controls="accessibility-panel"
        className="btn btn-circle btn-primary fixed bottom-5 left-5 z-40 shadow-lg"
        title="Accessibility options (Alt+A)"
      >
        <EyeIcon className="h-5 w-5" />
        <span className="sr-only">Open accessibility options (Alt+A)</span>
      </button>

      {panelOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-end bg-neutral/40 p-0 sm:items-center sm:p-4"
          onClick={() => setPanelOpen(false)}
        >
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="accessibility-panel-title"
            id="accessibility-panel"
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] w-full overflow-y-auto rounded-t-2xl bg-base-100 p-6 shadow-2xl sm:max-w-sm sm:rounded-2xl"
          >
            <div className="flex items-center justify-between">
              <h2 id="accessibility-panel-title" className="font-display text-lg font-semibold text-primary">
                Accessibility Options
              </h2>
              <button
                type="button"
                onClick={() => setPanelOpen(false)}
                className="btn btn-ghost btn-circle btn-sm"
                aria-label="Close accessibility options"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <div className="flex items-center justify-between gap-4">
                <label htmlFor="toggle-theme" className="text-sm font-semibold text-base-content/80">
                  Dark mode
                </label>
                <button
                  type="button"
                  id="toggle-theme"
                  onClick={toggleTheme}
                  aria-pressed={theme === "dark"}
                  className="btn btn-outline btn-sm gap-2"
                >
                  {theme === "dark" ? (
                    <SunIcon className="h-4 w-4" />
                  ) : (
                    <MoonIcon className="h-4 w-4" />
                  )}
                  {theme === "dark" ? "Light" : "Dark"}
                </button>
              </div>

              <fieldset>
                <legend className="text-sm font-semibold text-base-content/80">
                  Font size
                </legend>
                <div className="mt-2 grid grid-cols-4 gap-2" role="group" aria-label="Font size">
                  {FONT_SCALES.map((scale) => (
                    <button
                      key={scale}
                      type="button"
                      aria-pressed={prefs.fontScale === scale}
                      onClick={() => setFontScale(scale)}
                      className={`btn btn-sm ${
                        prefs.fontScale === scale ? "btn-primary" : "btn-outline"
                      }`}
                    >
                      {scale}%
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="flex items-center justify-between gap-4">
                <label htmlFor="toggle-contrast" className="text-sm font-semibold text-base-content/80">
                  High contrast
                </label>
                <input
                  id="toggle-contrast"
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked={prefs.highContrast}
                  onChange={toggleHighContrast}
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <label htmlFor="toggle-dyslexia" className="text-sm font-semibold text-base-content/80">
                  Dyslexia-friendly font
                </label>
                <input
                  id="toggle-dyslexia"
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked={prefs.dyslexiaMode}
                  onChange={toggleDyslexiaMode}
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <label htmlFor="toggle-motion" className="text-sm font-semibold text-base-content/80">
                  Pause animations
                </label>
                <input
                  id="toggle-motion"
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked={prefs.motionPaused}
                  onChange={toggleMotionPaused}
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-base-content/80">
                  Text to speech
                </p>
                {ttsSupported ? (
                  <button
                    type="button"
                    onClick={isSpeaking ? stopSpeaking : speakPageContent}
                    className="btn btn-outline btn-sm mt-2 w-full"
                  >
                    {isSpeaking ? "Stop reading" : "Read this page aloud"}
                  </button>
                ) : (
                  <p className="mt-2 text-xs text-base-content/60">
                    Text-to-speech isn't supported in this browser.
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={resetPrefs}
                className="btn btn-ghost btn-sm w-full"
              >
                Reset to defaults
              </button>
            </div>

            <p className="mt-6 text-xs text-base-content/50">
              Keyboard shortcut: Alt + A to open or close this panel.
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default AccessibilityPanel
