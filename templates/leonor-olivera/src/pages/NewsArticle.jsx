import { Link, useParams } from "react-router-dom"
import { newsArticles } from "../data/newsContent"
import { formatDate } from "../utils/formatDate"
import { ArrowRightIcon, InboxEmptyIcon } from "../components/icons"
import NewsCardMedia from "../components/news/NewsCardMedia"

// Reusable article detail page for /news/:slug. Looks up the article by
// slug in the shared `newsArticles` data source — no separate fetch or
// API call is involved, so this is ready to render real content the
// moment real articles are added to src/data/newsContent.js. Until then
// (or if a slug doesn't match anything published), it shows a clear,
// non-fake "not available" state rather than inventing an article.
function NewsArticle() {
  const { slug } = useParams()
  const article = newsArticles.find((item) => item.slug === slug)

  if (!article) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/5 text-primary">
          <InboxEmptyIcon className="h-7 w-7" />
        </span>
        <h1 className="mt-4 font-display text-2xl font-semibold text-primary">
          This article isn&rsquo;t available
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-base-content/65 sm:text-base">
          It may have been moved, or it hasn&rsquo;t been published yet.
          Browse the latest news and updates from PKMKPI instead.
        </p>
        <Link to="/news" className="btn btn-primary mt-6 gap-2">
          <ArrowRightIcon className="h-4 w-4 rotate-180" />
          Back to News
        </Link>
      </section>
    )
  }

  return (
    <article>
      <NewsCardMedia article={article} className="h-64 w-full sm:h-80" />

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          to="/news"
          className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-primary"
        >
          <ArrowRightIcon className="h-4 w-4 rotate-180" />
          Back to News
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
            {article.category}
          </span>
          <span className="text-xs text-base-content/50">
            {formatDate(article.date)}
          </span>
        </div>

        <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-primary sm:text-4xl">
          {article.title}
        </h1>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-base-content/80">
          {article.content.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        {article.source && (
          <p className="mt-8 rounded-xl border border-base-300 bg-base-200/40 px-4 py-3 text-xs text-base-content/60">
            Source:{" "}
            {article.sourceUrl ? (
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-secondary hover:text-primary"
              >
                {article.source}
              </a>
            ) : (
              <span className="font-semibold">{article.source}</span>
            )}
          </p>
        )}

        <Link
          to="/news"
          className="btn btn-outline btn-primary mt-10 gap-2"
        >
          <ArrowRightIcon className="h-4 w-4 rotate-180" />
          Back to News
        </Link>
      </div>
    </article>
  )
}

export default NewsArticle
