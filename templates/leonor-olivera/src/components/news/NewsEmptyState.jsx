import { InboxEmptyIcon } from "../icons"

function NewsEmptyState({ onReset }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-base-300 bg-base-200/40 px-6 py-16 text-center">
      <InboxEmptyIcon className="h-8 w-8 text-base-content/40" />
      <p className="font-display text-lg font-semibold text-primary">
        No news articles match your search
      </p>
      <p className="max-w-sm text-sm text-base-content/60">
        Try a different keyword, or clear the filters to see everything we've
        published.
      </p>
      <button type="button" onClick={onReset} className="btn btn-outline btn-primary btn-sm mt-2">
        Clear filters
      </button>
    </div>
  )
}

export default NewsEmptyState
