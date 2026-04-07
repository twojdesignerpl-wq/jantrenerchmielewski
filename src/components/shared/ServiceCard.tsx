"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  price: string
  priceLabel?: string
  href: string
  icon: React.ReactNode
  features: string[]
  highlighted?: boolean
}

export function ServiceCard({
  title,
  description,
  price,
  priceLabel,
  href,
  icon,
  features,
  highlighted = false,
}: ServiceCardProps) {
  return (
    <motion.article
      className={cn(
        "relative flex flex-col gap-6 rounded-2xl border p-6 transition-colors",
        "bg-card",
        highlighted
          ? "border-glow glow-cyan"
          : "border-border hover:border-border/80"
      )}
      whileHover={{
        y: -4,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 25 },
      }}
      whileTap={{ scale: 0.98, transition: { type: "spring", stiffness: 400, damping: 30 } }}
      animate={
        highlighted
          ? { boxShadow: "0 0 30px oklch(0.65 0.18 210 / 25%), 0 0 80px oklch(0.65 0.18 210 / 10%)" }
          : {}
      }
    >
      {/* Hover glow overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0"
        style={{
          boxShadow: "0 0 30px oklch(0.65 0.18 210 / 25%), 0 0 80px oklch(0.65 0.18 210 / 10%)",
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Icon */}
      <div
        className="flex size-10 shrink-0 items-center justify-center rounded-xl"
        style={{ color: "var(--cyan)", background: "oklch(0.65 0.18 210 / 10%)" }}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3
          className="font-bold text-xl leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>
        <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
      </div>

      {/* Features */}
      {features.length > 0 && (
        <ul className="flex flex-col gap-2" role="list">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-base">
              <CheckCircle
                className="mt-0.5 shrink-0 size-4"
                style={{ color: "var(--cyan)" }}
                weight="fill"
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Price + CTA */}
      <div className="mt-auto flex flex-col gap-3 border-t border-border pt-4">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-2xl font-bold tabular-nums">{price}</span>
          {priceLabel && (
            <span className="text-sm text-muted-foreground">{priceLabel}</span>
          )}
        </div>
        <Link
          href={href}
          className="group inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          style={{ color: "var(--cyan)" }}
          aria-label={`Dowiedz się więcej o ${title}`}
        >
          Dowiedz się więcej
          <span
            className="inline-block transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </motion.article>
  )
}
