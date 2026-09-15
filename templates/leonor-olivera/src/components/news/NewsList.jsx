import Reveal from "../Reveal"
import NewsCard from "./NewsCard"
import NewsEmptyState from "./NewsEmptyState"

const STAGGER_STEP_MS = 60
const MAX_STAGGER_MS = 240

function NewsList({ articles, visibleCount, onLoadMore, onReset }) {
  if (articles.length === 0) {
    return <NewsEmptyState onReset={onReset} />
  }

  const visibleArticles = articles.slice(0, visibleCount)
  const hasMore = visibleCount < articles.length

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleArticles.map((article, index) => (
          <Reveal
            key={article.id}
            delay={Math.min(index * STAGGER_STEP_MS, MAX_STAGGER_MS)}
          >
            <NewsCard article={article} />
          </Reveal>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={onLoadMore}
            className="btn btn-outline btn-primary rounded-full px-6 transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none"
          >
            Load more news
          </button>
        </div>
      )}
    </div>
  )
}

export default NewsList
