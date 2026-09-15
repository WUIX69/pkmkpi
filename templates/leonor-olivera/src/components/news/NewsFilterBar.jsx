import { SearchIcon } from "../icons"
import { newsCategories } from "../../data/newsContent"

function NewsFilterBar({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
}) {
  const categories = ["All", ...newsCategories]

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter news by category"
      >
        {categories.map((category) => {
          const isActive = category === activeCategory
          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              aria-pressed={isActive}
              className={[
                "btn btn-sm rounded-full transition-all duration-200",
                isActive
                  ? "btn-primary shadow-sm"
                  : "btn-ghost border border-base-300 hover:border-secondary/40 hover:bg-secondary/5",
              ].join(" ")}
            >
              {category}
            </button>
          )
        })}
      </div>

      <label className="input input-bordered flex w-full items-center gap-2 transition-colors duration-200 focus-within:border-secondary sm:w-64">
        <SearchIcon className="h-4 w-4 text-base-content/50" />
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search news..."
          className="grow"
          aria-label="Search news articles"
        />
      </label>
    </div>
  )
}

export default NewsFilterBar
