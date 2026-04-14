"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { CheckCircle, XCircle } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ComparisonFeature {
  name: string
  values: (boolean | string)[]
}

interface ComparisonService {
  name: string
  price: string
  href: string
}

interface ComparisonTableProps {
  features: ComparisonFeature[]
  services: ComparisonService[]
  highlightIndex?: number
  className?: string
}

const rowVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 18,
    },
  },
}

export function ComparisonTable({
  features,
  services,
  highlightIndex = -1,
  className,
}: ComparisonTableProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <div
      ref={ref}
      className={cn("w-full overflow-x-auto -mx-4 px-4", className)}
    >
      <table className="w-full min-w-[540px] border-collapse">
        {/* Header */}
        <thead>
          <tr>
            <th className="sticky left-0 z-10 bg-background py-4 pr-4 text-left text-sm font-medium text-muted-foreground">
              Funkcja
            </th>
            {services.map((service, i) => (
              <th
                key={service.name}
                className={cn(
                  "px-4 py-4 text-center",
                  i === highlightIndex && "rounded-t-xl"
                )}
                style={
                  i === highlightIndex
                    ? { backgroundColor: "oklch(0.65 0.18 210 / 8%)" }
                    : undefined
                }
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="font-heading text-base font-semibold text-foreground">
                    {service.name}
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--cyan)" }}
                  >
                    {service.price}
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {features.map((feature, rowIndex) => (
            <motion.tr
              key={feature.name}
              className="border-t border-border/50"
              variants={prefersReducedMotion ? undefined : rowVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: rowIndex * 0.05 }}
            >
              <td className="sticky left-0 z-10 bg-background py-3.5 pr-4 text-sm text-foreground/90">
                {feature.name}
              </td>
              {feature.values.map((value, colIndex) => (
                <td
                  key={colIndex}
                  className={cn("px-4 py-3.5 text-center")}
                  style={
                    colIndex === highlightIndex
                      ? { backgroundColor: "oklch(0.65 0.18 210 / 8%)" }
                      : undefined
                  }
                >
                  {typeof value === "string" ? (
                    <span className="text-sm font-medium text-foreground/90">
                      {value}
                    </span>
                  ) : value ? (
                    <CheckCircle
                      weight="fill"
                      className="mx-auto size-5"
                      style={{ color: "oklch(0.70 0.16 155)" }}
                      aria-label="Tak"
                    />
                  ) : (
                    <XCircle
                      weight="fill"
                      className="mx-auto size-5 text-muted-foreground/40"
                      aria-label="Nie"
                    />
                  )}
                </td>
              ))}
            </motion.tr>
          ))}

          {/* CTA row */}
          <tr className="border-t border-border/50">
            <td className="sticky left-0 z-10 bg-background py-5 pr-4" />
            {services.map((service, i) => (
              <td
                key={service.name}
                className={cn(
                  "px-4 py-5 text-center",
                  i === highlightIndex && "rounded-b-xl"
                )}
                style={
                  i === highlightIndex
                    ? { backgroundColor: "oklch(0.65 0.18 210 / 8%)" }
                    : undefined
                }
              >
                <Link
                  href={service.href}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    i === highlightIndex
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border bg-transparent text-foreground hover:bg-secondary"
                  )}
                >
                  Wybierz
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
