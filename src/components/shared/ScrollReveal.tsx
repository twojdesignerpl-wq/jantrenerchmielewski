"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right"
}

const directionVariants = {
  up: { y: 30, x: 0 },
  left: { y: 0, x: -30 },
  right: { y: 0, x: 30 },
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  const initial = prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, ...directionVariants[direction] }

  const animate = isInView ? { opacity: 1, x: 0, y: 0 } : initial

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={initial}
      animate={animate}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay,
        opacity: { duration: 0.4 },
      }}
    >
      {children}
    </motion.div>
  )
}
