import { siteInfo } from "../../data/siteInfo"
import { ShieldIcon } from "../icons"
import { useScrollReveal } from "../../hooks/useScrollReveal"

// Premium editorial-style 3-image gallery for the "About PKMKPI" section:
// one large primary photo on top, two supporting photos side by side below,
// with a navy/gold credential bar anchoring the composition. Each image
// fades/rises into view (staggered) the first time it enters the viewport,
// and respects prefers-reduced-motion via the shared .about-image-anim CSS.
function AboutImageGallery() {
  const { ref: mainRef, isVisible: mainVisible } = useScrollReveal()
  const { ref: subRef1, isVisible: sub1Visible } = useScrollReveal()
  const { ref: subRef2, isVisible: sub2Visible } = useScrollReveal()

  return (
    <div className="mx-auto w-full max-w-[380px] overflow-hidden rounded-[24px] border border-primary/10 bg-base-100 p-2 shadow-xl lg:max-w-none">
      {/* Primary image */}
      <div
        ref={mainRef}
        className={`about-image-anim overflow-hidden rounded-[16px] ${
          mainVisible ? "is-visible" : ""
        }`}
      >
        <img
          src="/images/about/disability-rights-speaker.jpg"
          alt="A PWD community leader speaking into a microphone during the 47th National Disability Rights Week event"
          className="aspect-[16/10] w-full object-cover object-top"
        />
      </div>

      {/* Two supporting images, side by side, gap matches the one above */}
      <div className="mt-2 grid grid-cols-2 gap-2">
        <div
          ref={subRef1}
          className={`about-image-anim overflow-hidden rounded-[16px] ${
            sub1Visible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: sub1Visible ? "120ms" : "0ms" }}
        >
          <img
            src="/images/about/community-gathering.jpg"
            alt="PKMKPI PWD and PWRD community members gathered together at an indoor celebration"
            className="aspect-square w-full object-cover"
          />
        </div>
        <div
          ref={subRef2}
          className={`about-image-anim overflow-hidden rounded-[16px] ${
            sub2Visible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: sub2Visible ? "220ms" : "0ms" }}
        >
          <img
            src="/images/about/pwd-inclusivity-walk.jpg"
            alt="Members marching together in the PWD Inclusivity Walk, carrying a banner about inclusion"
            className="aspect-square w-full object-cover"
          />
        </div>
      </div>

      {/* Credential bar, anchoring the gallery like an official seal footer */}
      <div className="mt-2 flex flex-col gap-2 rounded-[16px] bg-primary px-5 py-4 text-primary-content sm:flex-row sm:items-center sm:justify-between">
        <div className="inline-flex items-center gap-2 text-xs">
          <ShieldIcon className="h-3.5 w-3.5 text-accent" />
          SEC Reg. No. {siteInfo.secRegNo}
        </div>
        <div className="text-xs font-semibold uppercase tracking-wide text-accent">
          17 Regions <span className="text-primary-content/60">&middot;</span>{" "}
          One National Federation
        </div>
      </div>
    </div>
  )
}

export default AboutImageGallery
