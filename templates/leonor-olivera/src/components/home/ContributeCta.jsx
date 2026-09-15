import { NavLink } from "react-router-dom"
import Reveal from "../Reveal"

function ContributeCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary px-6 py-14 text-center text-primary-content shadow-xl sm:px-10 sm:py-16">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Support Us
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-2xl font-semibold sm:text-3xl">
              Stand with the PWD sector
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-primary-content/80">
              Your support helps us advocate for the full implementation of
              disability laws and build self-reliant PWD communities
              nationwide.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <NavLink to="/contribute" className="btn btn-accent btn-lg">
                Contribute
              </NavLink>
              <NavLink
                to="/about"
                className="btn btn-outline btn-lg border-primary-content/40 text-primary-content hover:border-accent hover:bg-transparent hover:text-accent"
              >
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default ContributeCta
