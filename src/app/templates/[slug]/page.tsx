import { notFound } from "next/navigation"
import { TemplateViewer } from "@/components/templates/template-viewer"

interface TemplateRecord {
  slug: string
  name: string
  author: string
  stack: string
  port: number
  description: string
}

const TEMPLATES_MAP: Record<string, TemplateRecord> = {
  "violeta-jonathan-l": {
    slug: "violeta-jonathan-l",
    name: "Charity.org V2 Reference Portal",
    author: "Jonathan L. Violeta",
    stack: "HTML5 · GSAP 3.12 · CSS3",
    port: 4001,
    description: "Gold standard Charity.org V2 portal featuring Tier 0 breathing gradient mesh, WCAG 2.2 AAA accessibility toolbar, 16-leader leadership directory, and Playwright verification.",
  },
  arcel: {
    slug: "arcel",
    name: "Tailwind Federation Portal",
    author: "Arcel Zamora",
    stack: "HTML5 · Tailwind v3 · Express",
    port: 4002,
    description: "Clean institutional federation portal styled with Tailwind CSS typography, accessible team grid, and dedicated static server.",
  },
  "glen-martin": {
    slug: "glen-martin",
    name: "Multi-Page Institutional Portal",
    author: "Glen Martin V. Denosta",
    stack: "Plain HTML5 · CSS3 · Vanilla JS",
    port: 4003,
    description: "Comprehensive 8-page federation website with detailed news, press releases, advocacy donation flows, and team photography.",
  },
  "john-jhonard-de-robles": {
    slug: "john-jhonard-de-robles",
    name: "National Roster & Identity Portal",
    author: "John Jhonard C. De Robles",
    stack: "Plain HTML5 · CSS3 · Vanilla JS",
    port: 4004,
    description: "National federation portal emphasizing official PKMKPI branding, responsive card grid layout, and leadership roster.",
  },
  "leonor-olivera": {
    slug: "leonor-olivera",
    name: "Modern React 19 + Vite SPA",
    author: "Leonor Olivera",
    stack: "React 19 · Vite 8 · DaisyUI · Tailwind 4",
    port: 4005,
    description: "Client-side Single Page Application built on React 19 and Vite 8, featuring React Router v7 navigation, DaisyUI components, and video backgrounds.",
  },
  "neil-datuin-caguioa": {
    slug: "neil-datuin-caguioa",
    name: "PHP 8.5 Server-Rendered Portal",
    author: "Neil Datuin Caguioa",
    stack: "PHP 8.5 · Bootstrap · Mock DB",
    port: 4006,
    description: "Dynamic PHP application with regional advocacy lookup APIs, server-side includes, and in-memory mock database for 10 disability clusters.",
  },
  renzo: {
    slug: "renzo",
    name: "Accessible Semantic Web Portal",
    author: "Renzo Mingan",
    stack: "Plain HTML5 · Semantic CSS3",
    port: 4007,
    description: "Structured multi-page website featuring skip-links, Tagalog-English accessible copy, announcement banners, and modular CSS stylesheets.",
  },
}

export async function generateStaticParams() {
  return Object.keys(TEMPLATES_MAP).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const template = TEMPLATES_MAP[slug]
  if (!template) return { title: "Template Not Found" }

  return {
    title: `${template.name} - Sandbox Preview | PKMKPI`,
    description: template.description,
  }
}

export default async function TemplateViewerRoute({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const template = TEMPLATES_MAP[slug]

  if (!template) {
    notFound()
  }

  return (
    <TemplateViewer
      slug={template.slug}
      name={template.name}
      author={template.author}
      stack={template.stack}
      port={template.port}
      description={template.description}
    />
  )
}
