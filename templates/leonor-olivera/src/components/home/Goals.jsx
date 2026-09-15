import { homeGoals } from "../../data/homeContent"
import { goalDescriptions } from "../../data/homeContentExtra"
import Reveal from "../Reveal"

function Goals() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <Reveal className="text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
          Our Goals
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-primary sm:text-3xl">
          AEIOU
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base-content/70">
          Together these describe the awareness, empowerment, involvement,
          cooperation, and unity of the PWD sector in the whole country.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {homeGoals.map((goal, index) => (
          <Reveal key={goal.letter} delay={index * 90}>
            <div className="group h-full rounded-2xl border border-base-300 bg-base-100 px-5 py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-lg">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 font-display text-2xl font-bold text-primary transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-content">
                {goal.letter}
              </span>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-base-content/80">
                {goal.word}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-base-content/60">
                {goalDescriptions[goal.letter]}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Goals
