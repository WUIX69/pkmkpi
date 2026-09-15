import { Link } from "react-router-dom"
import { formatDate } from "../../utils/formatDate"
import { ArrowRightIcon } from "../icons"
import NewsCardMedia from "./NewsCardMedia"

function FeaturedNewsCard({ article }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-primary/10 bg-base-100 shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div className="grid lg:grid-cols-[1.1fr_1.4fr]">
        <div className="overflow-hidden rounded-3xl lg:rounded-l-3xl lg:rounded-r-none">
          <NewsCardMedia
            article={article}
            className="h-56 w-full transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none lg:h-full"
          />
        </div>

        <div className="flex flex-col justify-center gap-3 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge badge-accent badge-sm font-semibold uppercase tracking-wide">
              Featured
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
              {article.category}
            </span>
            <span className="text-xs text-base-content/50">
              {formatDate(article.date)}
            </span>
          </div>

          <h2 className="font-display text-2xl font-semibold leading-snug text-primary sm:text-3xl">
            {article.title}
          </h2>

          <p className="text-base leading-relaxed text-base-content/75">
            {article.excerpt}
          </p>

          <Link
            to={`/news/${article.slug}`}
            className="btn btn-primary mt-2 w-fit gap-2 transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none"
          >
            Read more
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedNewsCard
