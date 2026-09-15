import { programs } from "../../data/homeContentExtra"
import {
  BriefcaseIcon,
  GraduationCapIcon,
  UsersIcon,
  RampIcon,
  ArrowRightIcon,
} from "../icons"
import Reveal from "../Reveal"

const iconMap = {
  briefcase: BriefcaseIcon,
  graduationCap: GraduationCapIcon,
  users: UsersIcon,
  ramp: RampIcon,
}

function Programs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <Reveal className="text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
          Programs &amp; Initiatives
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-primary sm:text-3xl">
          How we serve our members
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base-content/70">
          A sample of the kinds of programs member federations run and
          coordinate through the national network.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((program, index) => {
          const Icon = iconMap[program.icon]
          return (
            <Reveal key={program.title} delay={index * 100}>
              <div className="group flex h-full flex-col rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-secondary-content">
                  <Icon />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                  {program.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-base-content/70">
                  {program.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                  Learn more
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default Programs
