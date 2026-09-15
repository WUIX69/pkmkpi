// Shared header pattern for every internal page (About, News, Press,
// Support, Contact, Contribute). Deliberately light and compact —
// the full dark sunburst hero is reserved for the Home page only, so
// internal pages read as pages of the same site rather than each
// starting over with their own full-bleed dark block.
function PageHero({ eyebrow, title, description, cta }) {
  return (
    <section className="border-b border-base-300 bg-base-100">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </p>
        <div className="mt-3 h-1 w-14 rounded-full bg-secondary" aria-hidden="true" />
        <h1 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-primary sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-base-content/70">
            {description}
          </p>
        )}
        {cta && <div className="mt-6">{cta}</div>}
      </div>
    </section>
  )
}

export default PageHero
