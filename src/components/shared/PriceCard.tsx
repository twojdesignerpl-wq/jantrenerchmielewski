"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

interface PriceCardProps {
  title: string
  price: string
  period?: string
  features: string[]
  href: string
  highlighted?: boolean
  badge?: string
  ctaLabel?: string
  savings?: string
}

export function PriceCard({
  title,
  price,
  period,
  features,
  href,
  highlighted = false,
  badge,
  ctaLabel = "Wybierz plan",
  savings,
}: PriceCardProps) {
  return (
    <motion.article
      className={cn(
        "relative flex h-full flex-col gap-6 rounded-2xl border p-7 md:p-8",
        highlighted
          ? "border-glow glow-cyan-strong ring-2 ring-primary scale-[1.04]"
          : "border-border"
      )}
      style={{
        background: highlighted ? "oklch(0.18 0.025 232)" : "var(--card)",
        boxShadow: highlighted
          ? "0 0 40px oklch(0.65 0.18 210 / 20%), 0 0 80px oklch(0.65 0.18 210 / 8%), 0 20px 60px oklch(0 0 0 / 30%)"
          : undefined,
      }}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 300, damping: 25 },
      }}
      whileTap={{
        scale: 0.98,
        transition: { type: "spring", stiffness: 400, damping: 30 },
      }}
    >
      {/* Hover glow overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0"
        style={{
          boxShadow:
            "0 0 30px oklch(0.65 0.18 210 / 20%), 0 0 60px oklch(0.65 0.18 210 / 8%)",
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Badge — with pulse animation for highlighted */}
      {badge && (
        <div
          className="absolute -top-3 right-4 rounded-full px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wide"
          style={{
            background: "var(--cyan)",
            color: "var(--primary-foreground)",
            animation: highlighted ? "badgePulse 3s ease-in-out infinite" : undefined,
          }}
          aria-label={`Oznaczenie: ${badge}`}
        >
          {badge}
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col gap-1">
        <h3
          className="text-lg font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-1">
        <span className="whitespace-nowrap font-mono text-3xl font-bold tabular-nums md:text-4xl">
          {price}
        </span>
        {period && (
          <span className="text-base font-normal text-muted-foreground">
            {period}
          </span>
        )}
      </div>

      {/* Savings display */}
      {savings && (
        <p
          className="text-[0.9375rem] font-semibold"
          style={{ color: "oklch(0.65 0.22 145)" }}
          aria-label={savings}
        >
          {savings}
        </p>
      )}

      {/* Divider */}
      <div className="h-px bg-border" role="separator" />

      {/* Features */}
      <ul className="flex flex-col gap-3" role="list">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-base">
            <CheckCircle
              className="mt-0.5 size-4 shrink-0"
              style={{ color: "var(--cyan)" }}
              weight="fill"
              aria-hidden="true"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto">
        <Link
          href={href}
          className={cn(
            "inline-flex w-full items-center justify-center rounded-full px-6 py-3",
            "text-base font-semibold transition-all",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "active:scale-[0.98]",
            highlighted
              ? "glow-cyan bg-primary text-primary-foreground hover:opacity-90"
              : "border border-border bg-transparent text-foreground hover:bg-secondary"
          )}
          aria-label={`${ctaLabel} — ${title}`}
        >
          {ctaLabel}
        </Link>
      </div>
    </motion.article>
  )
}
