import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { navLinks } from "../data/navLinks"
import { siteInfo } from "../data/siteInfo"
import logo from "../assets/pkmkpi-logo.png"
import { MenuIcon, EyeIcon, SunIcon, MoonIcon } from "./icons"
import { useAccessibility } from "../hooks/useAccessibilityPrefs"

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useAccessibility()

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const desktopLinkClass = ({ isActive }) =>
    [
      "relative flex min-h-[44px] items-center whitespace-nowrap px-3 py-2 text-sm font-semibold tracking-wide transition-colors xl:px-4",
      "after:absolute after:left-1/2 after:-bottom-1 after:h-[3px] after:-translate-x-1/2 after:rounded-full after:bg-accent after:transition-all after:duration-300",
      isActive
        ? "text-primary after:w-6"
        : "text-base-content/80 hover:text-primary after:w-0 hover:after:w-6",
    ].join(" ")

  const mobileLinkClass = ({ isActive }) =>
    [
      "block rounded-md px-3 py-3 text-base font-semibold transition-colors",
      isActive
        ? "bg-primary/10 text-primary"
        : "text-base-content/80 hover:bg-base-200",
    ].join(" ")

  return (
    <header className="sticky top-0 z-50 bg-base-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-content"
      >
        Skip to main content
      </a>

      {/* Utility row: SEC badge, contact info, region count, accessibility hint */}
      <div className="hidden border-b border-base-300 bg-base-100 lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-2 text-xs">
          <div className="flex items-center gap-4 text-base-content/70">
            <span className="badge badge-outline badge-sm border-secondary/40 font-semibold uppercase tracking-wide text-secondary">
              SEC Registered
            </span>
            <span>
              SEC Reg. No. {siteInfo.secRegNo} · {siteInfo.address.split(",").slice(-3, -1).join(",").trim()}
            </span>
          </div>
          <div className="flex items-center gap-4 text-base-content/70">
            <span className="flex items-center gap-1.5 font-semibold text-accent">
              <EyeIcon className="h-3.5 w-3.5" />
              Accessibility Mode (Alt+A)
            </span>
            <span className="text-base-300">|</span>
            <button
              type="button"
              onClick={toggleTheme}
              aria-pressed={theme === "dark"}
              className="flex items-center gap-1.5 font-semibold text-base-content/70 hover:text-secondary"
            >
              {theme === "dark" ? (
                <SunIcon className="h-3.5 w-3.5" />
              ) : (
                <MoonIcon className="h-3.5 w-3.5" />
              )}
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={[
          "bg-base-100 transition-shadow duration-300",
          scrolled ? "shadow-md" : "border-b border-base-300",
        ].join(" ")}
      >
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:gap-3 lg:px-6 xl:gap-6 xl:px-8 xl:py-4"
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            className="flex shrink-0 items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-11 w-11 shrink-0 overflow-hidden rounded-full sm:h-12 sm:w-12">
              <img
                src={logo}
                alt={`${siteInfo.shortName} logo`}
                className="h-full w-full object-cover object-center"
              />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base font-bold text-primary sm:text-lg">
                {siteInfo.shortName}, Inc.
              </span>
              <span className="hidden max-w-xs text-[11px] uppercase tracking-wide text-base-content/60 sm:block lg:hidden">
                {siteInfo.fullName}
              </span>
            </span>
          </NavLink>

          <ul className="hidden min-w-0 flex-1 items-center justify-center gap-1.5 lg:flex xl:gap-2">
            {navLinks.map((link) => (
              <li key={link.path} className="flex">
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={desktopLinkClass}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <NavLink to="/contribute" className="btn btn-secondary btn-sm min-h-11">
              Donate Now
            </NavLink>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-pressed={theme === "dark"}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-11 w-11 items-center justify-center rounded-md text-primary"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-md text-primary"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((prev) => !prev)}
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </nav>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden bg-base-100 transition-[max-height] duration-300 ease-out lg:hidden ${
          open ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 border-b border-base-300 px-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                onClick={() => setOpen(false)}
                className={mobileLinkClass}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="px-3 pt-2">
            <NavLink
              to="/contribute"
              onClick={() => setOpen(false)}
              className="btn btn-secondary btn-sm min-h-11 w-full"
            >
              Donate Now
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
