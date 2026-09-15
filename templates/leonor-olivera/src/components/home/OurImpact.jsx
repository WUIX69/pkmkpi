import { ScaleIcon, GroupIcon, CompassIcon } from "../icons"
import Reveal from "../Reveal"

const impactAreas = [
  {
    title: "Advocacy & Rights",
    description:
      "Promoting policies and initiatives that protect and advance the rights of persons with disabilities.",
    image: "/images/about/disability-rights-speaker.jpg",
    icon: ScaleIcon,
  },
  {
    title: "Community Programs",
    description:
      "Supporting PWD communities through meaningful programs, activities, and partnerships.",
    image: "/images/about/community-gathering.jpg",
    icon: GroupIcon,
  },
  {
    title: "Nationwide Network",
    description:
      "Connecting PWD organizations and federations across regions to strengthen collaboration and inclusion.",
    image: "/images/about/pwd-inclusivity-walk.jpg",
    icon: CompassIcon,
  },
]

function OurImpact() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
          Our Impact
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-primary sm:text-3xl">
          Making a Difference Across the Philippines
        </h2>
        <p className="mt-4 text-base leading-relaxed text-base-content/75">
          Through advocacy, programs, partnerships, and community
          initiatives, PKMKPI works to promote inclusion, accessibility, and
          equal opportunities for persons with disabilities nationwide.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {impactAreas.map((area, index) => (
          <Reveal key={area.title} delay={index * 90}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <area.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold leading-snug text-primary">
                  {area.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-base-content/70">
                  {area.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default OurImpact
