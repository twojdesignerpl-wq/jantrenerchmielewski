"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import {
  GraduationCap,
  Trophy,
  Users,
  Clock,
} from "@phosphor-icons/react/dist/ssr"
import { cn } from "@/lib/utils"

const badges = [
  {
    icon: GraduationCap,
    label: "Mgr Fizjoterapii",
  },
  {
    icon: Trophy,
    label: "Finalista Mistrzostw Polski",
  },
  {
    icon: Users,
    label: "200+ klientów",
  },
  {
    icon: Clock,
    label: "8 lat doświadczenia",
  },
] as const

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const badgeVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 16,
    },
  },
}

export function TrustBadges({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={cn(
        "flex flex-wrap items-center justify-center gap-3",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {badges.map(({ icon: Icon, label }) => (
        <motion.div
          key={label}
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2",
            "bg-secondary/50 text-sm text-foreground/90"
          )}
          variants={prefersReducedMotion ? undefined : badgeVariants}
        >
          <Icon weight="duotone" className="size-5 text-primary" />
          <span>{label}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
