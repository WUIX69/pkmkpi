import { useMemo, useState } from "react"
import NewsHero from "../components/news/NewsHero"
import FeaturedNewsCard from "../components/news/FeaturedNewsCard"
import NewsFilterBar from "../components/news/NewsFilterBar"
import NewsList from "../components/news/NewsList"
import NewsComingSoon from "../components/news/NewsComingSoon"
import Reveal from "../components/Reveal"
import { newsArticles } from "../data/newsContent"

const PAGE_SIZE = 6

function News() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const featuredArticle = useMemo(
    () => newsArticles.find((article) => article.featured),
    [],
  )

  const otherArticles = useMemo(
    () => newsArticles.filter((article) => article.id !== featuredArticle?.id),
    [featuredArticle],
  )

  const filteredArticles = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    return otherArticles.filter((article) => {
      const matchesCategory =
        activeCategory === "All" || article.category === activeCategory
      const matchesSearch =
        query === "" ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [otherArticles, activeCategory, searchTerm])

  function handleCategoryChange(category) {
    setActiveCategory(category)
    setVisibleCount(PAGE_SIZE)
  }

  function handleSearchChange(value) {
    setSearchTerm(value)
    setVisibleCount(PAGE_SIZE)
  }

  function handleReset() {
    setActiveCategory("All")
    setSearchTerm("")
    setVisibleCount(PAGE_SIZE)
  }

  const hasAnyArticles = newsArticles.length > 0

  return (
    <>
      <NewsHero />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        {!hasAnyArticles ? (
          <Reveal>
            <NewsComingSoon />
          </Reveal>
        ) : (
          <>
            {featuredArticle && (
              <Reveal className="mb-12">
                <FeaturedNewsCard article={featuredArticle} />
              </Reveal>
            )}

            <Reveal delay={80}>
              <div className="h-1 w-14 rounded-full bg-secondary" aria-hidden="true" />
              <h2 className="mt-4 font-display text-xl font-semibold text-primary sm:text-2xl">
                Latest Updates
              </h2>

              <div className="mt-5 mb-6">
                <NewsFilterBar
                  activeCategory={activeCategory}
                  onCategoryChange={handleCategoryChange}
                  searchTerm={searchTerm}
                  onSearchChange={handleSearchChange}
                />
              </div>

              <p className="mb-6 text-sm text-base-content/60">
                Showing {Math.min(visibleCount, filteredArticles.length)} of{" "}
                {filteredArticles.length} article
                {filteredArticles.length === 1 ? "" : "s"}
              </p>
            </Reveal>

            <NewsList
              articles={filteredArticles}
              visibleCount={visibleCount}
              onLoadMore={() => setVisibleCount((count) => count + PAGE_SIZE)}
              onReset={handleReset}
            />
          </>
        )}
      </section>
    </>
  )
}

export default News
