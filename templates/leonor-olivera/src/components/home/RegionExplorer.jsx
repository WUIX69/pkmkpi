import { useMemo, useState } from "react"
import { islandGroups, regions } from "../../data/regionsContent"
import { CompassIcon } from "../icons"
import Reveal from "../Reveal"

function RegionExplorer() {
  const [activeIsland, setActiveIsland] = useState(islandGroups[0].id)
  const [activeRegionId, setActiveRegionId] = useState(
    regions.find((region) => region.island === islandGroups[0].id)?.id,
  )

  const regionsForIsland = useMemo(
    () => regions.filter((region) => region.island === activeIsland),
    [activeIsland],
  )

  const activeRegion = useMemo(
    () => regions.find((region) => region.id === activeRegionId),
    [activeRegionId],
  )

  function handleIslandChange(islandId) {
    setActiveIsland(islandId)
    const firstRegion = regions.find((region) => region.island === islandId)
    setActiveRegionId(firstRegion?.id)
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6" aria-labelledby="regions-heading">
      <Reveal className="text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
          Nationwide Reach
        </p>
        <h2 id="regions-heading" className="mt-2 font-display text-2xl font-semibold text-primary sm:text-3xl">
          Explore the 17 Regions
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base-content/70">
          PKMKPI's member federations are organized across every region of
          the Philippines, from Luzon to Mindanao.
        </p>
      </Reveal>

      <Reveal delay={80} className="mt-8">
        <div
          role="tablist"
          aria-label="Island group"
          className="tabs tabs-boxed mx-auto flex w-full max-w-xl justify-center bg-base-100"
        >
          {islandGroups.map((island) => (
            <button
              key={island.id}
              type="button"
              role="tab"
              id={`island-tab-${island.id}`}
              aria-selected={activeIsland === island.id}
              aria-controls={`island-panel-${island.id}`}
              className={`tab flex-1 font-semibold ${
                activeIsland === island.id ? "tab-active" : ""
              }`}
              onClick={() => handleIslandChange(island.id)}
            >
              {island.label}
            </button>
          ))}
        </div>

        <div
          className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
          role="tabpanel"
          id={`island-panel-${activeIsland}`}
          aria-labelledby={`island-tab-${activeIsland}`}
        >
          <div className="rounded-2xl border border-base-300 bg-base-100 p-3 shadow-sm">
            <ul className="flex flex-col gap-1" role="list">
              {regionsForIsland.map((region) => (
                <li key={region.id}>
                  <button
                    type="button"
                    aria-pressed={activeRegionId === region.id}
                    onClick={() => setActiveRegionId(region.id)}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${
                      activeRegionId === region.id
                        ? "bg-primary text-primary-content"
                        : "text-base-content/80 hover:bg-base-200"
                    }`}
                  >
                    {region.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
            {activeRegion && (
              <div key={activeRegion.id} className="reveal is-visible">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CompassIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-primary">
                  {activeRegion.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-base-content/70">
                  PKMKPI has member federations organized in this region as
                  part of its nationwide network. Region-specific program and
                  contact details will appear here once connected to the
                  federation's records.
                </p>
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default RegionExplorer
