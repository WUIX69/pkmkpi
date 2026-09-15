import { siteInfo } from "../../data/siteInfo"
import { FacebookIcon, InboxEmptyIcon } from "../icons"

// Shown on the News page when `newsArticles` is empty — i.e. no real
// articles have been published yet. Deliberately does not invent any
// PKMKPI announcements; it simply points visitors to the federation's
// real, existing Facebook Page (siteInfo.facebook) in the meantime.
function NewsComingSoon() {
  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-secondary/30 bg-base-200/50 px-6 py-16 text-center sm:py-20">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
        <InboxEmptyIcon className="h-7 w-7" />
      </span>

      <h2 className="font-display text-xl font-semibold text-primary sm:text-2xl">
        News &amp; Updates
      </h2>

      <p className="max-w-md text-sm leading-relaxed text-base-content/65 sm:text-base">
        Official announcements, activities, and stories from PKMKPI will
        appear here.
      </p>

      <a
        href={siteInfo.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary mt-2 gap-2"
      >
        <FacebookIcon className="h-4 w-4" />
        Follow us on Facebook
      </a>
    </div>
  )
}

export default NewsComingSoon
