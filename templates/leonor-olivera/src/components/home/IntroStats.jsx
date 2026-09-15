import { homeIntro, homeStats } from "../../data/homeContent"
import { useCountUp } from "../../hooks/useCountUp"
import Reveal from "../Reveal"

function StatCard({ value, label, delay }) {
  const { ref, display } = useCountUp(value)

  return (
    <Reveal delay={delay}>
      <div
        ref={ref}
        className="rounded-2xl border border-base-300 bg-base-100 px-2 py-5 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md sm:px-4 sm:py-6"
      >
        <p className="font-display text-3xl font-bold text-primary sm:text-4xl">
          {display}
        </p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-base-content/60 sm:text-sm">
          {label}
        </p>
      </div>
    </Reveal>
  )
}

function IntroStats() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
            {homeIntro.eyebrow}
          </p>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-base-content/80">
            {homeIntro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 lg:gap-4">
          {homeStats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default IntroStats
