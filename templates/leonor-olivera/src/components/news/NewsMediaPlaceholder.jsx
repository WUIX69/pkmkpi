import {
  MegaphoneIcon,
  UsersIcon,
  CalendarIcon,
  HandshakeIcon,
  GavelIcon,
  BellIcon,
} from "../icons"
import { categoryTheme } from "../../data/newsContent"

const iconMap = {
  megaphone: MegaphoneIcon,
  users: UsersIcon,
  calendar: CalendarIcon,
  handshake: HandshakeIcon,
  gavel: GavelIcon,
  bell: BellIcon,
}

// Stands in for a real photo. Once actual photos are added to
// /public/images/news, an article can use them by rendering a plain
// <img> instead of this component — this placeholder just keeps every
// card visually consistent and on-brand until then.
function NewsMediaPlaceholder({ category, className = "" }) {
  const theme = categoryTheme[category] ?? categoryTheme.Announcements
  const Icon = iconMap[theme.icon] ?? BellIcon

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${theme.from} ${theme.to} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)",
          color: "#ffffff",
        }}
        aria-hidden="true"
      />
      <Icon className="relative h-10 w-10 text-white/90 sm:h-12 sm:w-12" />
    </div>
  )
}

export default NewsMediaPlaceholder
