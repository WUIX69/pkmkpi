"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Smartphone,
  Tablet,
  Laptop,
  Monitor,
  RotateCw,
  ExternalLink,
  ShieldCheck,
  Server,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface TemplateViewerProps {
  slug: string
  name: string
  author: string
  stack: string
  port: number
  description: string
}

type ViewportMode = "mobile" | "tablet" | "laptop" | "desktop" | "full"
type PreviewMode = "live" | "static"

const VIEWPORT_WIDTHS: Record<ViewportMode, string> = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
  full: "100%",
}

export function TemplateViewer({
  slug,
  name,
  author,
  stack,
  port,
  description,
}: TemplateViewerProps) {
  const [viewport, setViewport] = useState<ViewportMode>("full")
  const [previewMode, setPreviewMode] = useState<PreviewMode>(
    process.env.NODE_ENV === "production" ? "static" : "live"
  )
  const [key, setKey] = useState(0)

  const liveUrl = `http://localhost:${port}`
  const staticUrl = `/templates-preview/${slug}/index.html`
  const activeUrl = previewMode === "live" ? liveUrl : staticUrl

  const handleRefresh = () => {
    setKey((prev) => prev + 1)
  }

  return (
    <div className="flex flex-col h-screen bg-neutral-950 text-neutral-100 overflow-hidden font-sans">
      {/* Top Toolbar */}
      <header className="h-14 border-b border-neutral-800 bg-neutral-900/90 backdrop-blur-md px-4 flex items-center justify-between z-20 shrink-0 gap-2">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/templates"
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Catalog</span>
          </Link>
          <span className="text-neutral-600 shrink-0">/</span>
          <div className="flex items-center gap-2 min-w-0">
            <span className="font-semibold text-sm truncate max-w-[140px] sm:max-w-[220px] md:max-w-md">
              {name}
            </span>
            <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-800 text-neutral-300 border border-neutral-700 shrink-0">
              {stack}
            </span>
            <span className="text-xs text-neutral-400 hidden lg:inline truncate">by {author}</span>
          </div>
        </div>

        {/* Center Controls: Preview Mode Toggle & Viewport Switcher */}
        <div className="flex items-center gap-2">
          {/* Dual-Mode Preview Toggle */}
          <div className="flex items-center bg-neutral-950 p-1 rounded-lg border border-neutral-800">
            <button
              onClick={() => {
                setPreviewMode("live")
                setKey((prev) => prev + 1)
              }}
              title="Live Local Daemon Server (port isolation)"
              className={`px-2 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                previewMode === "live"
                  ? "bg-neutral-800 text-white font-medium shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Server className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline text-[11px]">Live Port</span>
              <span className="sm:hidden text-[11px]">:{port}</span>
            </button>
            <button
              onClick={() => {
                setPreviewMode("static")
                setKey((prev) => prev + 1)
              }}
              title="Static Snapshot Preview (Vercel production deployment)"
              className={`px-2 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                previewMode === "static"
                  ? "bg-neutral-800 text-white font-medium shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline text-[11px]">Static Snapshot</span>
              <span className="sm:hidden text-[11px]">Static</span>
            </button>
          </div>

          {/* Viewport Switcher Controls */}
          <div className="hidden md:flex items-center gap-1 bg-neutral-950 p-1 rounded-lg border border-neutral-800">
            <button
              onClick={() => setViewport("mobile")}
              title="Mobile (375px)"
              className={`p-1.5 rounded text-xs transition-colors flex items-center gap-1 ${
                viewport === "mobile"
                  ? "bg-neutral-800 text-white font-medium"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden lg:inline text-[11px]">375px</span>
            </button>
            <button
              onClick={() => setViewport("tablet")}
              title="Tablet (768px)"
              className={`p-1.5 rounded text-xs transition-colors flex items-center gap-1 ${
                viewport === "tablet"
                  ? "bg-neutral-800 text-white font-medium"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span className="hidden lg:inline text-[11px]">768px</span>
            </button>
            <button
              onClick={() => setViewport("laptop")}
              title="Laptop (1024px)"
              className={`p-1.5 rounded text-xs transition-colors flex items-center gap-1 ${
                viewport === "laptop"
                  ? "bg-neutral-800 text-white font-medium"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span className="hidden lg:inline text-[11px]">1024px</span>
            </button>
            <button
              onClick={() => setViewport("desktop")}
              title="Desktop (1440px)"
              className={`p-1.5 rounded text-xs transition-colors flex items-center gap-1 ${
                viewport === "desktop"
                  ? "bg-neutral-800 text-white font-medium"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden lg:inline text-[11px]">1440px</span>
            </button>
            <button
              onClick={() => setViewport("full")}
              title="Full Width (100%)"
              className={`p-1.5 rounded text-xs transition-colors ${
                viewport === "full"
                  ? "bg-neutral-800 text-white font-medium"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <span className="text-[11px] px-1">100%</span>
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRefresh}
            title="Reload Frame"
            className="h-8 px-2 text-neutral-300 hover:text-white hover:bg-neutral-800"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </Button>
          <a
            href={activeUrl}
            target="_blank"
            rel="noreferrer"
            title={
              previewMode === "live"
                ? "Open live server in standalone tab"
                : "Open static snapshot in standalone tab"
            }
            className="inline-flex items-center gap-1 h-8 px-2.5 rounded-md text-xs bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors border border-neutral-700"
          >
            <span className="font-mono text-[11px]">
              {previewMode === "live" ? `:${port}` : "Static"}
            </span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </header>

      {/* Sub-bar notice */}
      <div className="bg-neutral-900 border-b border-neutral-800 px-4 py-1.5 text-xs text-neutral-400 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2 truncate">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="truncate" title={description}>
            <span className="inline-flex items-center gap-1 font-medium text-neutral-300 mr-1.5">
              {previewMode === "live" ? (
                <span className="text-amber-400 font-mono">[Live Daemon]</span>
              ) : (
                <span className="text-emerald-400 font-mono">[Static Snapshot]</span>
              )}
            </span>
            {description} · <code className="text-neutral-200">{activeUrl}</code>
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {previewMode === "live" ? (
            <span className="text-[11px] text-neutral-500 hidden sm:inline">
              CLI: <code className="text-neutral-300">pnpm templates:serve {slug}</code>
            </span>
          ) : (
            <span className="text-[11px] text-emerald-500/90 hidden sm:inline">
              Vercel Production Compatible
            </span>
          )}
        </div>
      </div>

      {/* Main Sandbox Canvas */}
      <main className="flex-1 bg-neutral-950 p-3 sm:p-4 flex items-center justify-center overflow-auto relative">
        <div
          className="h-full bg-black rounded-lg shadow-2xl border border-neutral-800 flex flex-col overflow-hidden transition-all duration-300"
          style={{
            width: VIEWPORT_WIDTHS[viewport],
            maxWidth: "100%",
          }}
        >
          <iframe
            key={key}
            src={activeUrl}
            title={`${name} Preview`}
            sandbox="allow-scripts allow-forms allow-same-origin"
            className="w-full h-full border-0 bg-white"
          />
        </div>
      </main>
    </div>
  )
}
