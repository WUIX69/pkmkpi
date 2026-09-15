import { NavLink } from "react-router-dom"
import { supportWays } from "../data/supportContent"
import { siteInfo } from "../data/siteInfo"
import PageHero from "../components/PageHero"
import Reveal from "../components/Reveal"

function SupportUs() {
  return (
    <>
      <PageHero
        eyebrow="Support Us"
        title="Stand with the PWD sector"
        description="There are several ways to support PKMKPI's mission — as a member, a volunteer, a partner, or an advocate."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2">
          {supportWays.map((way, index) => {
            const Icon = way.icon
            return (
              <Reveal key={way.id} delay={index * 80}>
                <div className="group flex h-full flex-col gap-3 rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-secondary group-hover:text-secondary-content">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="font-display text-lg font-semibold text-primary">
                    {way.title}
                  </h2>
                  <p className="flex-1 text-sm leading-relaxed text-base-content/70">
                    {way.description}
                  </p>
                  <NavLink
                    to="/contact"
                    className="btn btn-outline btn-primary btn-sm mt-1 self-start"
                  >
                    Get in touch
                  </NavLink>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal
          delay={220}
          className="mt-10 rounded-2xl border border-primary/15 bg-primary/5 p-6 text-center sm:p-7"
        >
          <p className="text-sm text-base-content/70">
            For membership, volunteering, or partnership inquiries, reach us
            directly at{" "}
            <a href={`mailto:${siteInfo.email}`} className="font-semibold text-primary underline decoration-secondary/40 underline-offset-2 hover:text-secondary">
              {siteInfo.email}
            </a>
            .
          </p>
        </Reveal>
      </section>
    </>
  )
}

export default SupportUs
