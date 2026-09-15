import Link from "next/link"
import { ArrowLeft, ExternalLink, Eye, Server, Layers, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "PKMKPI Federation Template Showcase",
  description: "Browse and preview 7 multi-stack team submissions running in isolated sandboxes.",
}

interface TemplateMeta {
  slug: string
  name: string
  author: string
  stack: string
  badgeColor: string
  port: number
  description: string
  pages: string[]
  highlights: string[]
}

const TEMPLATES: TemplateMeta[] = [
  {
    slug: "violeta-jonathan-l",
    name: "Charity.org V2 Reference Portal",
    author: "Jonathan L. Violeta",
    stack: "HTML5 · GSAP 3.12 · CSS3",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400",
    port: 4001,
    description: "Gold standard Charity.org V2 portal featuring Tier 0 breathing gradient mesh, WCAG 2.2 AAA accessibility toolbar, 16-leader leadership directory, and Playwright verification.",
    pages: ["index.html (Landing)", "about.html (16 Leaders)"],
    highlights: ["GSAP Motion Engine", "WCAG AAA Toolbar", "100% Playwright Pass"],
  },
  {
    slug: "arcel",
    name: "Tailwind Federation Portal",
    author: "Arcel Zamora",
    stack: "HTML5 · Tailwind v3 · Express",
    badgeColor: "bg-sky-500/10 text-sky-600 border-sky-500/20 dark:text-sky-400",
    port: 4002,
    description: "Clean institutional federation portal styled with Tailwind CSS typography, accessible team grid, and dedicated static server.",
    pages: ["public/index.html", "public/our_team.html"],
    highlights: ["Tailwind Typography", "Static Server", "Purged Submodule"],
  },
  {
    slug: "glen-martin",
    name: "Multi-Page Institutional Portal",
    author: "Glen Martin V. Denosta",
    stack: "Plain HTML5 · CSS3 · Vanilla JS",
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400",
    port: 4003,
    description: "Comprehensive 8-page federation website with detailed news, press releases, advocacy donation flows, and team photography.",
    pages: ["index.html", "about.html", "contact.html", "team.html", "+4 more"],
    highlights: ["8 Complete HTML Pages", "Zero Dependencies", "Hero Media"],
  },
  {
    slug: "john-jhonard-de-robles",
    name: "National Roster & Identity Portal",
    author: "John Jhonard C. De Robles",
    stack: "Plain HTML5 · CSS3 · Vanilla JS",
    badgeColor: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20 dark:text-indigo-400",
    port: 4004,
    description: "National federation portal emphasizing official PKMKPI branding, responsive card grid layout, and leadership roster.",
    pages: ["index.html", "team.html"],
    highlights: ["Official Branding", "Clean Typography", "Responsive Navigation"],
  },
  {
    slug: "leonor-olivera",
    name: "Modern React 19 + Vite SPA",
    author: "Leonor Olivera",
    stack: "React 19 · Vite 8 · DaisyUI · Tailwind 4",
    badgeColor: "bg-purple-500/10 text-purple-600 border-purple-500/20 dark:text-purple-400",
    port: 4005,
    description: "Client-side Single Page Application built on React 19 and Vite 8, featuring React Router v7 navigation, DaisyUI components, and video backgrounds.",
    pages: ["App.jsx", "pages/*", "components/*"],
    highlights: ["React 19 SPA", "Vite 8 Dev Server", "DaisyUI Component Suite"],
  },
  {
    slug: "neil-datuin-caguioa",
    name: "PHP 8.5 Server-Rendered Portal",
    author: "Neil Datuin Caguioa",
    stack: "PHP 8.5 · Bootstrap · Mock DB",
    badgeColor: "bg-rose-500/10 text-rose-600 border-rose-500/20 dark:text-rose-400",
    port: 4006,
    description: "Dynamic PHP application with regional advocacy lookup APIs, server-side includes, and in-memory mock database for 10 disability clusters.",
    pages: ["index.php", "about.php", "api/get_disability.php", "+5 more"],
    highlights: ["PHP CLI Runner", "In-Memory DB Mock", "Regional Coordinator API"],
  },
  {
    slug: "renzo",
    name: "Accessible Semantic Web Portal",
    author: "Renzo Mingan",
    stack: "Plain HTML5 · Semantic CSS3",
    badgeColor: "bg-teal-500/10 text-teal-600 border-teal-500/20 dark:text-teal-400",
    port: 4007,
    description: "Structured multi-page website featuring skip-links, Tagalog-English accessible copy, announcement banners, and modular CSS stylesheets.",
    pages: ["index.html", "about.html", "contact.html", "our_team.html", "+4 more"],
    highlights: ["Skip-to-Content A11y", "8 Normalized Pages", "Official Seal Assets"],
  },
]

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-semibold text-sm">Federation Showcase</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Root Isolated
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
            <Layers className="w-3.5 h-3.5" />
            PKMKPI Multi-Stack Architecture
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Federation Template Showcase
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            All 7 team technical submissions preserved as autonomous reference templates under{" "}
            <code className="px-1.5 py-0.5 rounded bg-muted text-foreground text-sm">./templates/</code>.
            Each runs in an isolated out-of-process runtime on dedicated ports, guaranteeing zero contamination to the root Next.js 16 application.
          </p>
        </div>

        {/* Quick Orchestrator Notice */}
        <div className="mt-8 p-4 rounded-xl border bg-card/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <p className="font-medium">Orchestrator Quick Start</p>
              <p className="text-xs text-muted-foreground">
                Run <code className="bg-muted px-1 py-0.5 rounded">pnpm templates:serve:all</code> to launch all 7 ports (4001–4007) concurrently.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <code className="text-xs bg-muted px-2.5 py-1.5 rounded-md font-mono">
              pnpm templates:list
            </code>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEMPLATES.map((tmpl) => (
            <div
              key={tmpl.slug}
              className="rounded-xl border bg-card shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${tmpl.badgeColor}`}
                  >
                    {tmpl.stack}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    Port :{tmpl.port}
                  </span>
                </div>

                <h2 className="text-lg font-bold group-hover:text-primary transition-colors">
                  {tmpl.name}
                </h2>
                <p className="text-xs text-muted-foreground mb-3">Author: {tmpl.author}</p>
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-4">
                  {tmpl.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t">
                  <p className="text-xs font-medium text-foreground">Highlights:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tmpl.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[11px] px-2 py-0.5 rounded bg-muted text-muted-foreground"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-muted/30 border-t flex items-center justify-between gap-2">
                <Link href={`/templates/${tmpl.slug}`} className="flex-1">
                  <Button variant="default" size="sm" className="w-full gap-1.5 text-xs">
                    <Eye className="w-3.5 h-3.5" />
                    Preview Sandbox
                  </Button>
                </Link>
                <a
                  href={`http://localhost:${tmpl.port}`}
                  target="_blank"
                  rel="noreferrer"
                  title="Open in new tab directly"
                  className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
