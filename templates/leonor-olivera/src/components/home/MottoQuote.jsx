import { homeQuote } from "../../data/homeContent"
import Reveal from "../Reveal"

function MottoQuote() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-content">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/15 blur-3xl"
        aria-hidden="true"
      />

      <Reveal className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <span
          className="font-display text-7xl leading-none text-accent/40"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <p className="-mt-6 font-display text-3xl font-semibold italic leading-tight sm:text-4xl">
          {homeQuote.english}
        </p>
        <div className="mx-auto mt-6 h-px w-16 bg-accent/60" aria-hidden="true" />
        <p className="mt-6 text-lg text-primary-content/80">
          {homeQuote.filipino}
        </p>
        <p className="mt-1 text-base italic text-primary-content/60">
          {homeQuote.latin}
        </p>
      </Reveal>
    </section>
  )
}

export default MottoQuote
