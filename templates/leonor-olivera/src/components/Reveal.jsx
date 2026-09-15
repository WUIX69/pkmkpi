import { useScrollReveal } from "../hooks/useScrollReveal"

// Wrap any block of markup in <Reveal> to make it fade/rise into view
// on scroll. `as` lets you pick the wrapping tag (div by default),
// and `delay` (ms) staggers multiple reveals in the same section.
function Reveal({ children, as: Tag = "div", delay = 0, className = "" }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  )
}

export default Reveal
