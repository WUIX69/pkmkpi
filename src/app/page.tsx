import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Link href="/templates" className={buttonVariants({ className: "mt-2 inline-flex" })}>
            Browse Federation Templates
          </Link>
        </div>
        <div className="pt-2 border-t text-xs text-muted-foreground">
          <p className="font-semibold text-foreground">Reference Templates:</p>
          <p>7 isolated multi-stack submissions preserved under <code className="bg-muted px-1 py-0.5 rounded">./templates/</code>.</p>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
