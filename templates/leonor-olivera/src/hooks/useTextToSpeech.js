import { useState } from "react"

const isSupported = typeof window !== "undefined" && "speechSynthesis" in window

export function useTextToSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false)

  function speakPageContent() {
    if (!isSupported) return

    const main = document.getElementById("main-content")
    const text = main?.innerText?.trim()
    if (!text) return

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    window.speechSynthesis.speak(utterance)
  }

  function stopSpeaking() {
    if (!isSupported) return
    window.speechSynthesis.cancel()
    setIsSpeaking(false)
  }

  return { isSupported, isSpeaking, speakPageContent, stopSpeaking }
}
