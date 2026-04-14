import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface BlogCardProps {
  title: string
  slug: string
  excerpt: string
  date: string
  readingTime: string
  category: string
  imageSrc?: string
}

export function BlogCard({
  title,
  slug,
  excerpt,
  date,
  readingTime,
  category,
  imageSrc,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      )}
      style={{ backgroundColor: "var(--card)" }}
    >
      {/* Image area */}
      <div className="relative aspect-[16/9] overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="size-full"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.22 0.04 232) 0%, oklch(0.18 0.06 210) 100%)",
            }}
            aria-hidden="true"
          />
        )}

        {/* Category badge */}
        <span
          className={cn(
            "absolute left-3 top-3 inline-flex rounded-full px-2.5 py-1 text-xs font-medium",
            "backdrop-blur-md"
          )}
          style={{
            backgroundColor: "oklch(0.14 0.025 232 / 75%)",
            color: "var(--cyan)",
            border: "1px solid oklch(0.65 0.18 210 / 20%)",
          }}
        >
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-heading text-xl font-semibold leading-snug text-foreground line-clamp-2 transition-colors group-hover:text-primary">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {excerpt}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center gap-3 pt-2 text-xs text-muted-foreground">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("pl-PL", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </time>
          <span aria-hidden="true" className="size-1 rounded-full bg-muted-foreground/40" />
          <span>{readingTime}</span>
        </div>
      </div>
    </Link>
  )
}
