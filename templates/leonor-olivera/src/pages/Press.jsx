import { siteInfo } from "../data/siteInfo"
import { officialReleases, sectorUpdates } from "../data/pressContent"
import { InboxEmptyIcon, MailIcon, ArrowRightIcon } from "../components/icons"
import PageHero from "../components/PageHero"
import Reveal from "../components/Reveal"
import { formatDate } from "../utils/formatDate"

function PressCard({ item, badgeLabel, badgeClassName }) {
  return (
    <article className="group flex flex-col gap-3 rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg motion-reduce:transform-none">
      <div className="flex flex-wrap items-center gap-3">
        <span className={`badge badge-sm font-semibold uppercase tracking-wide ${badgeClassName}`}>
          {badgeLabel}
        </span>
        {item.date && (
          <span className="text-xs text-base-content/50">{formatDate(item.date)}</span>
        )}
      </div>

      <h3 className="font-display text-lg font-semibold leading-snug text-primary transition-colors duration-300 group-hover:text-secondary sm:text-xl">
        {item.title}
      </h3>

      <p className="text-sm leading-relaxed text-base-content/70 sm:text-base">
        {item.summary}
      </p>

      <div className="mt-1 flex flex-wrap items-center justify-between gap-3 border-t border-base-300 pt-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
          {item.source}
        </span>
        <a
          href={item.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-primary btn-sm gap-2"
        >
          View source
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
    </article>
  )
}

function Press() {
  const hasOfficial = officialReleases.length > 0
  const hasSectorUpdates = sectorUpdates.length > 0
  const hasAnyContent = hasOfficial || hasSectorUpdates

  return (
    <>
      <PageHero
        eyebrow="Press"
        title="Press releases and media resources"
        description="Official statements from PKMKPI, plus verified press and media coverage from across the Philippine disability sector."
      />

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        {!hasAnyContent ? (
          <Reveal className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-secondary/30 bg-base-200/50 px-6 py-14 text-center">
            <InboxEmptyIcon className="h-8 w-8 text-primary/50" />
            <h2 className="font-display text-lg font-semibold text-primary">
              No press releases published yet
            </h2>
            <p className="max-w-md text-sm text-base-content/60">
              This page is ready to publish official press releases and media
              statements as soon as they're issued.
            </p>
            <a
              href={`mailto:${siteInfo.email}`}
              className="btn btn-outline btn-primary btn-sm mt-2 gap-2"
            >
              <MailIcon className="h-4 w-4" />
              Media inquiries: {siteInfo.email}
            </a>
          </Reveal>
        ) : (
          <div className="flex flex-col gap-14">
            {hasOfficial && (
              <div>
                <Reveal>
                  <div className="h-1 w-14 rounded-full bg-secondary" aria-hidden="true" />
                  <h2 className="mt-4 font-display text-xl font-semibold text-primary sm:text-2xl">
                    PKMKPI Press Releases
                  </h2>
                  <p className="mt-2 text-sm text-base-content/60 sm:text-base">
                    Official statements and announcements published by PKMKPI.
                  </p>
                </Reveal>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {officialReleases.map((item, index) => (
                    <Reveal key={item.id} delay={Math.min(index * 60, 240)}>
                      <PressCard
                        item={item}
                        badgeLabel="PKMKPI"
                        badgeClassName="badge-primary"
                      />
                    </Reveal>
                  ))}
                </div>
              </div>
            )}

            {hasSectorUpdates && (
              <div>
                <Reveal delay={hasOfficial ? 80 : 0}>
                  <div className="h-1 w-14 rounded-full bg-secondary" aria-hidden="true" />
                  <h2 className="mt-4 font-display text-xl font-semibold text-primary sm:text-2xl">
                    Disability Sector Updates
                  </h2>
                  <p className="mt-2 text-sm text-base-content/60 sm:text-base">
                    Verified press coverage and announcements from government
                    agencies and news outlets, relevant to the disability
                    community. These are not PKMKPI publications; each item
                    links back to its original source.
                  </p>
                </Reveal>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {sectorUpdates.map((item, index) => (
                    <Reveal key={item.id} delay={Math.min(index * 60, 240)}>
                      <PressCard
                        item={item}
                        badgeLabel="External / Sector News"
                        badgeClassName="badge-secondary"
                      />
                    </Reveal>
                  ))}
                </div>
              </div>
            )}

            <Reveal className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-secondary/30 bg-base-200/50 px-6 py-10 text-center">
              <MailIcon className="h-6 w-6 text-primary/50" />
              <p className="max-w-md text-sm text-base-content/60">
                For media inquiries regarding PKMKPI, please reach out
                directly.
              </p>
              <a
                href={`mailto:${siteInfo.email}`}
                className="btn btn-outline btn-primary btn-sm gap-2"
              >
                <MailIcon className="h-4 w-4" />
                Media inquiries: {siteInfo.email}
              </a>
            </Reveal>
          </div>
        )}
      </section>
    </>
  )
}

export default Press
