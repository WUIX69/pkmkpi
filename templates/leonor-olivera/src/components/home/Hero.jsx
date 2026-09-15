import { NavLink } from "react-router-dom"
import { siteInfo } from "../../data/siteInfo"
import { useScrollReveal } from "../../hooks/useScrollReveal"

function Hero() {
  const regionStat = siteInfo.stats.find((s) => s.label === "Regions Covered")
  const typesStat = siteInfo.stats.find((s) => s.label === "Types of Disability")
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal()

  return (
    <section className="relative overflow-hidden bg-base-200">
      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        {/* LEFT: headline + description + CTA (unchanged content) */}
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge badge-outline h-auto min-h-8 flex-wrap gap-2 whitespace-normal border-secondary/40 px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-secondary sm:py-3">
              <span aria-hidden="true">🌐</span>
              The Only National Federation in the Philippines
            </span>
          </div>

          <h1 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.15] text-primary sm:text-4xl lg:text-5xl">
            Pambansang Kapisanan ng mga{" "}
            <span className="text-accent">May Kapansanan</span> ng
            Pilipinas, Inc.
          </h1>

          <p className="mt-4 max-w-xl text-base font-semibold text-base-content sm:text-lg">
            {siteInfo.tagline.split(".")[0]}.
          </p>
          <p className="mt-1 max-w-xl font-display text-base italic text-base-content/70 sm:text-lg">
            {siteInfo.tagline.split(".").slice(1).join(".").trim()}
          </p>

          <div className="mt-6 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
            <p className="text-sm leading-relaxed text-base-content/80 sm:text-base">
              <span className="font-bold text-primary">
                {siteInfo.fullName} (PKMKPI)
              </span>{" "}
              is a non-stock, non-profit people&rsquo;s organization
              registered with the Securities and Exchange Commission under{" "}
              <span className="font-bold text-primary">
                SEC Reg. No. {siteInfo.secRegNo}
              </span>
              . It is the only National Federation (Kapisanan) of Persons
              With Disability in the Philippines, composed of corporate
              members across all 17 regions.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <NavLink to="/contribute" className="btn btn-lg border-none bg-secondary text-white hover:bg-secondary/85">
              Support Our Mission
            </NavLink>
            <NavLink
              to="/about"
              className="btn btn-outline btn-lg border-primary/30 text-primary hover:border-primary hover:bg-primary hover:text-primary-content"
            >
              Learn More
            </NavLink>
          </div>
        </div>

        {/* RIGHT: premium editorial image composition */}
        <div className="relative mx-auto w-full max-w-md px-3 pb-8 pt-4 sm:max-w-lg lg:mx-0 lg:ml-auto">
          {/* Main image — balanced aspect ratio, minimal frame, soft shadow */}
          <div
            ref={imageRef}
            className={`hero-image-anim relative overflow-hidden rounded-2xl border border-primary/10 bg-base-100 shadow-lg ${
              imageVisible ? "is-visible" : ""
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1732194439368-4655fd0ea955?auto=format&fit=crop&w=1100&q=80"
              alt="A woman in a wheelchair standing together with a companion in a park, representing PWD inclusion and community participation"
              className="aspect-[4/3] w-full object-cover object-[center_28%]"
            />
            {/* Subtle wipe-reveal mask, clears just after the image starts fading in */}
            <div
              aria-hidden="true"
              className={`hero-image-mask pointer-events-none absolute inset-0 bg-base-200 ${
                imageVisible ? "is-visible" : ""
              }`}
            />
          </div>

          {/* Thin accent line, appears just after the image settles */}
          <div
            aria-hidden="true"
            className={`hero-image-accent mt-4 h-[3px] w-14 rounded-full bg-accent ${
              imageVisible ? "is-visible" : ""
            }`}
          />

          {/* Small green institutional marker, top-left */}
          <div className="absolute -top-3 left-6 flex items-center gap-2 rounded-full border border-secondary/15 bg-base-100 px-3 py-1.5 shadow-md sm:left-8">
            <span className="h-2 w-2 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
            <span className="text-[10px] font-bold uppercase tracking-wide text-primary">
              National Federation
            </span>
          </div>

          {/* Institutional data marker, bottom-right, overlapping the image corner only */}
          {regionStat && (
            <div className="absolute bottom-16 -right-1 rounded-xl bg-primary px-4 py-3 shadow-xl sm:-right-2 sm:px-5 sm:py-4">
              <p className="font-display text-2xl font-extrabold leading-none text-accent sm:text-3xl">
                {regionStat.value}
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-primary-content/90">
                {regionStat.label}
              </p>
            </div>
          )}

          {/* Secondary data marker, bottom-left, small and unobtrusive */}
          {typesStat && (
            <div className="absolute bottom-16 left-0 rounded-xl border border-primary/10 bg-base-100 px-4 py-3 shadow-md sm:px-5 sm:py-4">
              <p className="font-display text-2xl font-extrabold leading-none text-primary sm:text-3xl">
                {typesStat.value}
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-base-content/60">
                {typesStat.label}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
