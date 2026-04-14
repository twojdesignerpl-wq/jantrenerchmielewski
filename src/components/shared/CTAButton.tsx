"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
  variant?: "primary" | "secondary"
  href: string
  children: React.ReactNode
  className?: string
  size?: "default" | "lg"
}

export function CTAButton({
  variant = "primary",
  href,
  children,
  className,
  size = "default",
}: CTAButtonProps) {
  const isPrimary = variant === "primary"
  const isLg = size === "lg"

  return (
    <motion.div
      className="inline-flex"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Link
        href={href}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-semibold transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          isLg ? "px-8 py-3.5 text-base sm:px-11 sm:py-4.5 sm:text-lg" : "px-7 py-3 text-[0.9375rem] sm:px-9 sm:py-3.5 sm:text-base",
          isPrimary
            ? [
                "bg-primary text-primary-foreground",
                "hover:opacity-90",
                // Glow applied via inline style for dynamic values
              ]
            : [
                "border border-border bg-transparent text-foreground",
                "hover:bg-secondary",
              ],
          className
        )}
        style={
          isPrimary
            ? {
                boxShadow: "0 0 20px oklch(0.65 0.18 210 / 0%)",
                transition: "box-shadow 0.2s ease",
              }
            : undefined
        }
        onMouseEnter={(e) => {
          if (isPrimary) {
            ;(e.currentTarget as HTMLAnchorElement).style.boxShadow =
              "0 0 30px oklch(0.65 0.18 210 / 35%), 0 0 80px oklch(0.65 0.18 210 / 15%)"
          }
        }}
        onMouseLeave={(e) => {
          if (isPrimary) {
            ;(e.currentTarget as HTMLAnchorElement).style.boxShadow =
              "0 0 20px oklch(0.65 0.18 210 / 0%)"
          }
        }}
      >
        {children}
      </Link>
    </motion.div>
  )
}
