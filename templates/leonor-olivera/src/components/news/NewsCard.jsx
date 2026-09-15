import { Link } from "react-router-dom"
import { formatDate } from "../../utils/formatDate"
import { ArrowRightIcon } from "../icons"
import NewsCardMedia from "./NewsCardMedia"

function NewsCard({ article }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg motion-reduce:transform-none">
      <NewsCardMedia
        article={article}
        className="h-44 w-full transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none"
      />

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
            {article.category}
          </span>
          <span className="text-xs text-base-content/50">
            {formatDate(article.date)}
          </span>
        </div>

        <h3 className="font-display text-lg font-semibold leading-snug text-primary transition-colors duration-300 group-hover:text-secondary">
          {article.title}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-base-content/70">
          {article.excerpt}
        </p>

        <Link
          to={`/news/${article.slug}`}
          className="btn btn-outline btn-primary btn-sm mt-1 w-fit gap-2"
        >
          Read more
          <ArrowRightIcon />
        </Link>
      </div>
    </article>
  )
}

export default NewsCard
