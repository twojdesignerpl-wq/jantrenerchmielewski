"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

type RevealVariant = "fade" | "slide" | "scale" | "blur" | "glow"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right" | "down"
  variant?: RevealVariant
}

const directionOffsets = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { y: 0, x: -40 },
  right: { y: 0, x: 40 },
}

function getInitial(
  variant: RevealVariant,
  direction: "up" | "left" | "right" | "down",
  reduced: boolean
) {
  if (reduced) return { opacity: 0 }

  const offset = directionOffsets[direction]

  switch (variant) {
    case "scale":
      return { opacity: 0, scale: 0.92, ...offset }
    case "blur":
      return { opacity: 0, filter: "blur(12px)", ...offset }
    case "glow":
      return { opacity: 0, scale: 0.96, ...offset }
    case "fade":
      return { opacity: 0 }
    case "slide":
    default:
      return { opacity: 0, ...offset }
  }
}

function getAnimate(variant: RevealVariant) {
  const base = { opacity: 1, x: 0, y: 0 }
  switch (variant) {
    case "scale":
      return { ...base, scale: 1 }
    case "blur":
      return { ...base, filter: "blur(0px)" }
    case "glow":
      return { ...base, scale: 1 }
    default:
      return base
  }
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  variant = "slide",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const prefersReducedMotion = useReducedMotion()

  const initial = getInitial(variant, direction, !!prefersReducedMotion)
  const animate = isInView ? getAnimate(variant) : initial

  return (
    <motion.div
      ref={ref}
      className={cn(
        variant === "glow" && isInView
          ? "[&]:animate-none"
          : undefined,
        className
      )}
      initial={initial}
      animate={animate}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 18,
        delay,
        opacity: { duration: 0.5 },
        filter: { duration: 0.6 },
      }}
    >
      {variant === "glow" && isInView ? (
        <div className="relative">
          <div
            className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 animate-[glowPulse_2s_ease-in-out_forwards]"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.65 0.18 210 / 12%) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          {children}
        </div>
      ) : (
        children
      )}
    </motion.div>
  )
}
