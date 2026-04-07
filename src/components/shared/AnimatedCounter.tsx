"use client"

import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useTransform, animate, motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false

  // Round to display integer-like counting
  const rounded = useTransform(motionValue, (latest) =>
    Math.round(latest).toLocaleString("pl-PL")
  )

  useEffect(() => {
    if (!isInView) return

    if (prefersReducedMotion) {
      motionValue.set(value)
      return
    }

    const controls = animate(motionValue, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    })

    return () => controls.stop()
  }, [isInView, value, duration, motionValue, prefersReducedMotion])

  return (
    <span
      ref={ref}
      className={cn(
        "font-mono text-4xl md:text-5xl font-bold tabular-nums",
        className
      )}
      aria-label={`${prefix}${value}${suffix}`}
    >
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}
