import { coreValueDetails } from "../../data/homeContentExtra"
import Reveal from "../Reveal"

function CoreValues() {
  return (
    <section className="bg-base-300/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Reveal className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
            Core Values
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-primary sm:text-3xl">
            What we stand for
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {coreValueDetails.map((value, index) => (
            <Reveal key={value.word} delay={index * 90}>
              <div className="h-full rounded-2xl border border-primary/15 bg-base-100 px-5 py-6 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="font-display text-base font-semibold text-primary">
                  {value.word}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-base-content/65">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues
