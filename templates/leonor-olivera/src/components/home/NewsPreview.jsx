import { NavLink } from "react-router-dom"
import { newsArticles } from "../../data/newsContent"
import { formatDate } from "../../utils/formatDate"
import NewsMediaPlaceholder from "../news/NewsMediaPlaceholder"
import { ArrowRightIcon, InboxEmptyIcon } from "../icons"
import Reveal from "../Reveal"

function NewsPreview() {
  const featured = newsArticles.find((article) => article.featured)
  const rest = newsArticles
    .filter((article) => article.id !== featured?.id)
    .slice(0, 3)

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
            News &amp; Events
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-primary sm:text-3xl">
            Latest from the federation
          </h2>
        </div>
        <NavLink to="/news" className="btn btn-outline btn-primary btn-sm gap-2">
          View all news
          <ArrowRightIcon />
        </NavLink>
      </Reveal>

      {newsArticles.length === 0 ? (
        <Reveal delay={80} className="mt-8">
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-base-300 bg-base-100 px-6 py-14 text-center">
            <InboxEmptyIcon className="h-8 w-8 text-base-content/40" />
            <p className="font-display text-lg font-semibold text-primary">
              No news published yet
            </p>
            <p className="max-w-sm text-sm text-base-content/60">
              Federation news and updates will appear here once published.
            </p>
          </div>
        </Reveal>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {featured && (
            <Reveal className="lg:row-span-2">
              <NavLink
                to={`/news/${featured.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-shadow hover:shadow-md"
              >
                <NewsMediaPlaceholder
                  category={featured.category}
                  className="h-52 w-full sm:h-64"
                />
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center gap-3">
                    <span className="badge badge-accent badge-sm font-semibold uppercase tracking-wide">
                      Featured
                    </span>
                    <span className="text-xs text-base-content/50">
                      {formatDate(featured.date)}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold leading-snug text-primary">
                    {featured.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-base-content/70">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                    Read more
                    <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </NavLink>
            </Reveal>
          )}

          <div className="grid gap-6">
            {rest.map((article, index) => (
              <Reveal key={article.id} delay={index * 90}>
                <NavLink
                  to={`/news/${article.slug}`}
                  className="group flex gap-4 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <NewsMediaPlaceholder
                    category={article.category}
                    className="h-24 w-24 shrink-0 rounded-xl sm:h-28 sm:w-28"
                  />
                  <div className="flex min-w-0 flex-col justify-center gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
                        {article.category}
                      </span>
                      <span className="text-xs text-base-content/50">
                        {formatDate(article.date)}
                      </span>
                    </div>
                    <h3 className="line-clamp-2 font-display text-base font-semibold leading-snug text-primary">
                      {article.title}
                    </h3>
                  </div>
                </NavLink>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default NewsPreview
