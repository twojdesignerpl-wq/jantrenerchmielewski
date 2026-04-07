import { cn } from "@/lib/utils"

interface CredentialBadgeProps {
  icon: React.ReactNode
  label: string
  value: string
  className?: string
}

export function CredentialBadge({
  icon,
  label,
  value,
  className,
}: CredentialBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3",
        className
      )}
      role="figure"
      aria-label={`${label}: ${value}`}
    >
      <span
        className="shrink-0 size-6 flex items-center justify-center"
        style={{ color: "var(--cyan)" }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="text-xs text-muted-foreground leading-none">{label}</span>
        <span className="text-sm font-semibold leading-none">{value}</span>
      </div>
    </div>
  )
}
