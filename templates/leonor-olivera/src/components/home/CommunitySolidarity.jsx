import Reveal from "../Reveal"
import { useScrollReveal } from "../../hooks/useScrollReveal"

function CommunitySolidarity() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal()

  return (
    <section className="bg-base-200">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Community Solidarity
          </p>
          <h2 className="mx-auto mt-2 max-w-2xl font-display text-2xl font-semibold text-primary sm:text-3xl">
            Together, We Make Inclusion Stronger
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-base-content/70">
            A heartfelt thank you to our corporate members, regional
            chapters, PWD champions, partners, and communities supporting
            PKMKPI&rsquo;s mission nationwide.
          </p>
        </Reveal>

        <div
          ref={imageRef}
          className={`solidarity-image-anim mx-auto mt-8 w-full max-w-[770px] overflow-hidden rounded-2xl border border-primary/10 bg-base-100 p-2 shadow-lg sm:p-3 ${
            imageVisible ? "is-visible" : ""
          }`}
        >
          <img
            src="/images/community/thank-you-for-the-love.png"
            alt="Thank you for the love - PKMKPI: a commemorative graphic thanking corporate members, regional chapters, PWD champions, partners, and communities for supporting the federation's mission, featuring the PKMKPI seal and the message 'Isang Bansa. Isang Kapisanan. Isang Layunin. Walang Iwanan. Lahat ay Mahalaga.'"
            className="h-auto w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default CommunitySolidarity
