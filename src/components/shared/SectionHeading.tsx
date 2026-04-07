import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className="text-label"
          style={{ color: "var(--cyan)" }}
          aria-label={`Kategoria: ${eyebrow}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-display-sm text-4xl md:text-5xl lg:text-6xl",
          align === "center" && "max-w-3xl"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-body-lg text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
