import { aboutFacts } from "../../data/aboutContent"

function OrgFacts() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-center font-display text-sm font-semibold uppercase tracking-[0.25em] text-primary-content/80">
          Organization at a Glance
        </p>

        <dl className="mt-8 divide-y divide-primary-content/10 overflow-hidden rounded-2xl border border-primary-content/15 bg-primary-content/5 shadow-lg backdrop-blur-sm">
          {aboutFacts.map((fact) => (
            <div
              key={fact.label}
              className="grid gap-1 px-5 py-4 transition-colors duration-300 hover:bg-primary-content/5 sm:grid-cols-[13rem_1fr] sm:items-baseline sm:gap-4 sm:px-6"
            >
              <dt className="org-fact-label text-sm font-semibold uppercase tracking-wide text-accent">
                {fact.label}
              </dt>
              <dd className="text-base text-primary-content/85">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default OrgFacts
