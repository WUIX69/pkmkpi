import { NavLink } from "react-router-dom"
import { aboutIntro } from "../../data/aboutContent"
import { GroupIcon, ArrowRightIcon } from "../icons"
import { useScrollReveal } from "../../hooks/useScrollReveal"
import AboutImageGallery from "./AboutImageGallery"

function AboutPreview() {
  // One shared trigger for the whole section: fires once when it enters
  // the viewport, then each child below reveals on its own schedule via
  // transitionDelay (staggered "landing" effect), driven by this single
  // isVisible flag rather than separate observers per element.
  const { ref, isVisible } = useScrollReveal()
  const stagger = (step) => (isVisible ? `${step * 130}ms` : "0ms")

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <div ref={ref} className="grid items-center gap-10 lg:grid-cols-[1.08fr_1fr] lg:gap-14">
        <div className="flex flex-col lg:pr-2">
          <p
            className={`about-reveal-item font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary/70 ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: stagger(0) }}
          >
            {aboutIntro.eyebrow}
          </p>
          <h2
            className={`about-reveal-item mt-2 font-display text-2xl font-semibold text-primary sm:text-3xl ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: stagger(1) }}
          >
            {aboutIntro.heading}
          </h2>
          <p
            className={`about-reveal-item mt-4 text-base leading-relaxed text-base-content/75 ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: stagger(2) }}
          >
            {aboutIntro.paragraphs[0]}
          </p>

          <div
            className={`about-reveal-item mt-6 flex items-center gap-3 rounded-xl border border-base-300 bg-base-100 p-4 ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: stagger(3) }}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
              <GroupIcon className="h-5 w-5" />
            </span>
            <p className="text-sm text-base-content/70">
              Non-stock, non-profit — every peso and every hour goes back into
              serving the PWD and PWRD community.
            </p>
          </div>

          <NavLink
            to="/about"
            className={`about-reveal-item btn btn-primary mt-6 w-fit gap-2 ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: stagger(4) }}
          >
            Learn More About Us
            <ArrowRightIcon />
          </NavLink>
        </div>

        <div
          className={`about-gallery-reveal mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none ${isVisible ? "is-visible" : ""}`}
          style={{ transitionDelay: stagger(1) }}
        >
          <AboutImageGallery />
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
