"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion"
import {
  GraduationCap,
  Trophy,
  Star,
  Users,
  Clock,
} from "@phosphor-icons/react"
import { CTAButton } from "@/components/shared/CTAButton"
import { AnimatedCounter } from "@/components/shared/AnimatedCounter"
import { testimonials } from "@/lib/data/testimonials"

/* ---------- animation variants ---------- */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
}

const trustBarVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 20,
      delay: 0.7,
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 20,
      delay: 0.2,
    },
  },
}

/* ---------- social proof messages ---------- */

const socialProofMessages = testimonials.slice(0, 4).map((t) => {
  const serviceMap: Record<string, string> = {
    "Prowadzenie Online": "rozpoczął prowadzenie online",
    "Plan Treningowy": "zamówił plan treningowy",
    "Dieta Online": "zamówiła dietę online",
    "Trening Personalny": "rozpoczął treningi personalne",
  }
  const action = serviceMap[t.service] ?? "dołączył do klientów"
  return `${t.name} z ${t.city.replace("ń", "nia").replace("ów", "owa")} — ${action}`
})

/* ========== SOCIAL PROOF TICKER ========== */

function SocialProofTicker() {
  const prefersReducedMotion = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % socialProofMessages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [prefersReducedMotion])

  return (
    <div
      className="mt-6 flex h-6 items-center overflow-hidden"
      aria-live="polite"
      aria-atomic="true"
    >
      <div
        className="mr-2 size-2 shrink-0 rounded-full"
        style={{ background: "oklch(0.65 0.22 145)" }}
        aria-hidden="true"
      />
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        >
          {socialProofMessages[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

/* ========== HERO SECTION ========== */

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  /* Parallax: text moves slower, image moves faster */
  const { scrollY } = useScroll()
  const textParallaxY = useTransform(scrollY, [0, 300], [0, -20])
  const imageParallaxY = useTransform(scrollY, [0, 300], [0, -40])

  const floatAnimation =
    !mounted || prefersReducedMotion
      ? {}
      : {
          y: [0, -10, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        }

  return (
    <section
      className="relative flex min-h-[100dvh] flex-col"
      aria-label="Sekcja główna — Jan Chmielewski Trener Personalny"
    >
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 65% 50%, oklch(0.65 0.18 210 / 7%) 0%, transparent 70%)",
        }}
      />

      {/* Main content — split layout */}
      <div className="relative z-10 flex flex-1 flex-col lg:flex-row">
        {/* LEFT — text */}
        <motion.div
          className="flex flex-1 flex-col justify-center px-6 pb-8 pt-24 sm:px-10 lg:w-[55%] lg:pb-12 lg:pt-28 lg:pl-[8%] lg:pr-8 xl:pl-[10%]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={prefersReducedMotion ? {} : { y: textParallaxY }}
        >
          {/* Eyebrow badges */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex flex-wrap gap-2"
          >
            <span
              className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider"
              style={{
                borderColor: "oklch(0.65 0.18 210 / 30%)",
                color: "var(--cyan)",
                background: "oklch(0.65 0.18 210 / 8%)",
              }}
            >
              Magister Fizjoterapii
            </span>
            <span
              className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider"
              style={{
                borderColor: "oklch(0.65 0.18 210 / 30%)",
                color: "var(--cyan)",
                background: "oklch(0.65 0.18 210 / 8%)",
              }}
            >
              Finalista Mistrzostw Polski
            </span>
          </motion.div>

          {/* Headline with shimmer on TRANSFORMACJĘ */}
          <motion.h1
            variants={itemVariants}
            className="font-sans font-extrabold tracking-[-0.03em] leading-[0.88] mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
          >
            Rozpocznij swoją
            <br />
            <span className="hero-shimmer-text">TRANSFORMACJĘ</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-body-lg mb-8 text-muted-foreground"
          >
            Indywidualne diety, plany treningowe i prowadzenie online.
            8 lat doświadczenia. 200+ klientów z całej Polski.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <CTAButton href="/kontakt" variant="primary" size="lg">
              Zacznij transformację
            </CTAButton>
            <CTAButton href="/metamorfoza" variant="secondary" size="lg">
              Zobacz moją metamorfozę
            </CTAButton>
          </motion.div>

          {/* Social proof ticker */}
          <motion.div variants={itemVariants}>
            <SocialProofTicker />
          </motion.div>
        </motion.div>

        {/* RIGHT — image */}
        <motion.div
          className="relative flex items-end justify-center lg:w-[45%] lg:items-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          style={prefersReducedMotion ? {} : { y: imageParallaxY }}
        >
          {/* Cyan circular halo behind image */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
            aria-hidden="true"
            style={{
              background: "oklch(0.65 0.18 210 / 18%)",
            }}
          />

          {/* Image wrapper with float animation */}
          <motion.div
            className="relative z-10 mx-auto w-full max-w-[600px]"
            animate={floatAnimation}
          >
            <Image
              src="/images/jan-hero.png"
              alt="Jan Chmielewski — Trener Personalny, Finalista Mistrzostw Polski w kulturystyce"
              width={600}
              height={900}
              className="h-auto w-full object-contain"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* ENHANCED TRUST BAR */}
      <motion.div
        className="relative z-10 border-t border-border"
        variants={trustBarVariants}
        initial="hidden"
        animate="visible"
        style={{ background: "oklch(0.16 0.025 232 / 80%)" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div
            className="grid grid-cols-2 gap-6 sm:flex sm:items-center sm:justify-center sm:gap-0"
            role="list"
            aria-label="Kwalifikacje i doświadczenie"
          >
            {/* Stat 1 — Clients */}
            <div className="flex flex-col items-center gap-1.5" role="listitem">
              <Users
                size={24}
                weight="fill"
                style={{ color: "var(--cyan)" }}
                aria-hidden="true"
              />
              <AnimatedCounter
                value={200}
                suffix="+"
                className="text-2xl md:text-3xl"
              />
              <span className="text-xs text-muted-foreground tracking-wide uppercase">
                klientów
              </span>
            </div>

            <div
              className="mx-6 hidden h-12 w-px sm:block"
              style={{ background: "oklch(0.65 0.18 210 / 15%)" }}
              aria-hidden="true"
            />

            {/* Stat 2 — Years */}
            <div className="flex flex-col items-center gap-1.5" role="listitem">
              <Clock
                size={24}
                weight="fill"
                style={{ color: "var(--cyan)" }}
                aria-hidden="true"
              />
              <AnimatedCounter
                value={8}
                className="text-2xl md:text-3xl"
              />
              <span className="text-xs text-muted-foreground tracking-wide uppercase">
                lat doświadczenia
              </span>
            </div>

            <div
              className="mx-6 hidden h-12 w-px sm:block"
              style={{ background: "oklch(0.65 0.18 210 / 15%)" }}
              aria-hidden="true"
            />

            {/* Stat 3 — Rating */}
            <div className="flex flex-col items-center gap-1.5" role="listitem">
              <Star
                size={24}
                weight="fill"
                style={{ color: "var(--cyan)" }}
                aria-hidden="true"
              />
              <span
                className="font-mono text-2xl font-bold tabular-nums md:text-3xl"
                aria-label="Ocena 4.9 na 5"
              >
                4.9
              </span>
              <span className="text-xs text-muted-foreground tracking-wide uppercase">
                średnia ocen
              </span>
            </div>

            <div
              className="mx-6 hidden h-12 w-px sm:block"
              style={{ background: "oklch(0.65 0.18 210 / 15%)" }}
              aria-hidden="true"
            />

            {/* Stat 4 — Credentials */}
            <div className="flex flex-col items-center gap-1.5" role="listitem">
              <GraduationCap
                size={24}
                weight="fill"
                style={{ color: "var(--cyan)" }}
                aria-hidden="true"
              />
              <span className="font-mono text-2xl font-bold tabular-nums md:text-3xl">
                Mgr
              </span>
              <span className="text-xs text-muted-foreground tracking-wide uppercase">
                fizjoterapii
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
