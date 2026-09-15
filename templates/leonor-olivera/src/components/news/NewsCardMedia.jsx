import { useState } from "react"
import NewsMediaPlaceholder from "./NewsMediaPlaceholder"

// Renders the real photo for a news article (article.image /
// article.imageAlt) with object-cover framing so it always fills its
// container without stretching. Falls back to the on-brand
// NewsMediaPlaceholder if an article has no image yet, or if the
// image fails to load (e.g. offline), so a card never shows a broken
// image icon.
function NewsCardMedia({ article, className = "" }) {
  const [failed, setFailed] = useState(false)

  if (!article.image || failed) {
    return <NewsMediaPlaceholder category={article.category} className={className} />
  }

  return (
    <img
      src={article.image}
      alt={article.imageAlt || article.title}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  )
}

export default NewsCardMedia
