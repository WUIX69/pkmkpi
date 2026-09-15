import { NavLink } from "react-router-dom"
import { advocacyPillars } from "../../data/homeContentExtra"
import { ScaleIcon, HandshakeIcon, RampIcon, LeafIcon } from "../icons"
import Reveal from "../Reveal"

const iconMap = {
  scale: ScaleIcon,
  handshake: HandshakeIcon,
  ramp: RampIcon,
  leaf: LeafIcon,
}

function Advocacy() {
  return (
    <section className="bg-primary text-primary-content">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Advocacy
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold leading-snug sm:text-3xl">
              Working toward disability rights, access, and equal opportunity
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-content/75">
              PKMKPI advocates on behalf of its member federations for the
              full implementation of disability laws, fair access to
              opportunity, and communities built to include — not accommodate
              as an afterthought — every Filipino with a disability.
            </p>
            <NavLink to="/contribute" className="btn btn-accent mt-6">
              Support the advocacy
            </NavLink>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {advocacyPillars.map((pillar, index) => {
              const Icon = iconMap[pillar.icon]
              return (
                <Reveal key={pillar.title} delay={index * 100}>
                  <div className="h-full rounded-2xl border border-primary-content/15 bg-primary-content/5 p-5 transition-colors duration-300 hover:bg-primary-content/10">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 font-display text-base font-semibold">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-primary-content/70">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advocacy
