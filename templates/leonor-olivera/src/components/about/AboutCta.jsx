import { NavLink } from "react-router-dom"

function AboutCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="rounded-3xl border border-primary/15 bg-base-100 px-6 py-12 text-center shadow-lg sm:px-10">
        <h2 className="font-display text-2xl font-semibold text-primary sm:text-3xl">
          Want to know more, or get involved?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base-content/70">
          Reach out to us directly, or see how you can support the PWD sector
          nationwide.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <NavLink to="/contact" className="btn btn-primary">
            Contact us
          </NavLink>
          <NavLink to="/support" className="btn btn-outline btn-primary">
            Support Us
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default AboutCta
