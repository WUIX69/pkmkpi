import { missionVision } from "../../data/homeContentExtra"
import { CompassIcon, EyeIcon } from "../icons"
import Reveal from "../Reveal"

function MissionVision() {
  const cards = [
    { ...missionVision.mission, Icon: CompassIcon },
    { ...missionVision.vision, Icon: EyeIcon },
  ]

  return (
    <section className="bg-base-300/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Reveal className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
            What Guides Us
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-primary sm:text-3xl">
            Mission &amp; Vision
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {cards.map(({ eyebrow, heading, body, Icon }, index) => (
            <Reveal key={eyebrow} delay={index * 120}>
              <div className="h-full rounded-2xl border border-base-300 bg-base-100 p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon />
                </span>
                <p className="mt-5 font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  {eyebrow}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-primary sm:text-2xl">
                  {heading}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-base-content/75">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionVision
