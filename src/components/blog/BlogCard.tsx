import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"
import { cn } from "@/lib/utils"

interface BlogCardProps {
  title: string
  slug: string
  excerpt: string
  date: string
  readingTime: string
  category: string
  imageSrc?: string
  featured?: boolean
}

export function BlogCard({
  title,
  slug,
  excerpt,
  date,
  readingTime,
  category,
  imageSrc,
  featured = false,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group relative flex overflow-hidden rounded-2xl border border-border",
        "transition-all duration-500",
        "hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_8px_40px_oklch(0.65_0.18_210/12%)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        featured ? "flex-col md:flex-row md:min-h-[400px]" : "flex-col"
      )}
      style={{ backgroundColor: "var(--card)" }}
    >
      {/* Image */}
      <div
        className={cn(
          "relative overflow-hidden",
          featured
            ? "aspect-[16/9] md:aspect-auto md:w-1/2"
            : "aspect-[16/9]"
        )}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            className="object-cover transition-transform duration-700 group-hover:scale-110"
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

        {/* Dark gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.14 0.025 232 / 80%) 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />

        {/* Category badge */}
        <span
          className="absolute left-4 top-4 inline-flex rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-md"
          style={{
            backgroundColor: "oklch(0.14 0.025 232 / 80%)",
            color: "var(--cyan)",
            border: "1px solid oklch(0.65 0.18 210 / 25%)",
          }}
        >
          {category}
        </span>

        {/* Hover arrow */}
        <div
          className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100"
          style={{
            backgroundColor: "oklch(0.65 0.18 210 / 90%)",
            color: "var(--primary-foreground)",
          }}
          aria-hidden="true"
        >
          <ArrowUpRight size={18} weight="bold" />
        </div>
      </div>

      {/* Content */}
      <div
        className={cn(
          "flex flex-1 flex-col gap-4 p-6",
          featured && "md:justify-center md:p-10"
        )}
      >
        {/* Date + reading time */}
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("pl-PL", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span
            aria-hidden="true"
            className="size-1 rounded-full bg-muted-foreground/40"
          />
          <span>{readingTime}</span>
        </div>

        <h3
          className={cn(
            "font-heading font-bold leading-tight text-foreground transition-colors group-hover:text-primary",
            featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl",
            "line-clamp-2"
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "leading-relaxed text-muted-foreground",
            featured
              ? "text-base line-clamp-4"
              : "text-[0.9375rem] line-clamp-3"
          )}
        >
          {excerpt}
        </p>

        {/* Read more */}
        <div
          className="mt-auto flex items-center gap-2 text-sm font-medium transition-colors group-hover:text-primary"
          style={{ color: "var(--cyan)" }}
        >
          Czytaj artykuł
          <ArrowUpRight
            size={16}
            weight="bold"
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </Link>
  )
}
