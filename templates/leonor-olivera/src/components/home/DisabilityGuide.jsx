import { useState } from "react"
import { disabilityCategories } from "../../data/disabilityContent"
import Reveal from "../Reveal"

function DisabilityGuide() {
  const [openId, setOpenId] = useState(null)

  function toggle(id) {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <section className="bg-base-100 py-14" aria-labelledby="disability-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
            Our Membership
          </p>
          <h2 id="disability-heading" className="mt-2 font-display text-2xl font-semibold text-primary sm:text-3xl">
            10 Types of Disability
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base-content/70">
            PKMKPI's membership represents Persons With Disability and
            Persons with Work-Related Disability across ten recognized
            categories.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8 divide-y divide-base-300 rounded-2xl border border-base-300 bg-base-100 shadow-sm">
          {disabilityCategories.map((category) => {
            const isOpen = openId === category.id
            const panelId = `disability-panel-${category.id}`
            const buttonId = `disability-button-${category.id}`

            return (
              <div key={category.id}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(category.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-semibold text-primary transition-colors hover:bg-base-200 sm:px-6"
                  >
                    {category.name}
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-xl leading-none text-accent transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5 text-sm leading-relaxed text-base-content/70 sm:px-6"
                >
                  {category.description}
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}

export default DisabilityGuide
