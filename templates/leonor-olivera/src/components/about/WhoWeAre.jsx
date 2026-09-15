import { aboutIntro, aboutPullQuote } from "../../data/aboutContent"
import Reveal from "../Reveal"
import { useScrollReveal } from "../../hooks/useScrollReveal"

function WhoWeAre() {
  const { ref: mainImageRef, isVisible: mainImageVisible } = useScrollReveal()
  const { ref: subImage1Ref, isVisible: subImage1Visible } = useScrollReveal()
  const { ref: subImage2Ref, isVisible: subImage2Visible } = useScrollReveal()

  return (
    <section className="bg-base-200/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-14">
          {/* LEFT: organizational content (unchanged) */}
          <Reveal>
            <div className="h-1 w-14 rounded-full bg-secondary" aria-hidden="true" />
            <p className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              {aboutIntro.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-primary sm:text-3xl">
              {aboutIntro.heading}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-base-content/80">
              {aboutIntro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          {/* RIGHT: editorial image composition + pull quote */}
          <div>
            {/* Main image */}
            <div
              ref={mainImageRef}
              className={`about-image-anim overflow-hidden rounded-3xl border border-primary/10 bg-base-100 shadow-xl ${
                mainImageVisible ? "is-visible" : ""
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1570793005299-c091be91bbad?auto=format&fit=crop&w=1100&h=650&q=80"
                alt="A woman using a wheelchair moving along a tree-lined outdoor path, representing PWD community participation and inclusion"
                className="aspect-[16/9] w-full object-cover object-center"
              />
            </div>

            {/* Two supporting images, side by side */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div
                ref={subImage1Ref}
                className={`about-image-anim overflow-hidden rounded-2xl border border-primary/10 bg-base-100 shadow-md ${
                  subImage1Visible ? "is-visible" : ""
                }`}
                style={{ transitionDelay: subImage1Visible ? "120ms" : "0ms" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1778432999383-8e241a3c91f0?auto=format&fit=crop&w=600&h=500&q=80"
                  alt="Wheelchair basketball players competing on an outdoor court, representing PWD sports empowerment and active participation"
                  className="aspect-[6/5] w-full object-cover"
                />
              </div>
              <div
                ref={subImage2Ref}
                className={`about-image-anim overflow-hidden rounded-2xl border border-primary/10 bg-base-100 shadow-md ${
                  subImage2Visible ? "is-visible" : ""
                }`}
                style={{ transitionDelay: subImage2Visible ? "220ms" : "0ms" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1519053450113-32bed8bbf61d?auto=format&fit=crop&w=600&h=500&q=80"
                  alt="A person using a wheelchair for everyday mobility, representing accessibility for persons with disabilities"
                  className="aspect-[6/5] w-full object-cover"
                />
              </div>
            </div>

            {/* Pull quote, anchored to the image composition */}
            <Reveal
              delay={150}
              className="mt-6 rounded-2xl border border-primary/15 bg-primary/5 p-6 shadow-sm"
            >
              <div className="mb-3 h-px w-12 bg-secondary" aria-hidden="true" />
              <blockquote className="border-l-4 border-secondary pl-5">
                <p className="font-display text-xl italic leading-snug text-primary sm:text-2xl">
                  &ldquo;{aboutPullQuote}&rdquo;
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
