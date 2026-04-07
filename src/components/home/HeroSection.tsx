"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import {
  GraduationCap,
  Trophy,
  Star,
  Users,
} from "@phosphor-icons/react"
import { CTAButton } from "@/components/shared/CTAButton"
import { CredentialBadge } from "@/components/shared/CredentialBadge"

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

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const floatAnimation = !mounted || prefersReducedMotion
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

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-sans font-extrabold tracking-[-0.03em] leading-[0.88] mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
          >
            Twoja zmiana
            <br />
            zaczyna się{" "}
            <span className="text-gradient-cyan">TERAZ.</span>
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
        </motion.div>

        {/* RIGHT — image */}
        <motion.div
          className="relative flex items-end justify-center lg:w-[45%] lg:items-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Cyan circular halo behind image — soft elliptical blur, not a rectangle */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
            aria-hidden="true"
            style={{
              background: "oklch(0.65 0.18 210 / 18%)",
            }}
          />

          {/* Image wrapper with float animation — natural dimensions, no fixed box */}
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

      {/* TRUST BAR */}
      <motion.div
        className="relative z-10 border-t border-border"
        variants={trustBarVariants}
        initial="hidden"
        animate="visible"
        style={{ background: "oklch(0.12 0.02 240 / 80%)" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-0"
            role="list"
            aria-label="Kwalifikacje i doświadczenie"
          >
            {/* Badge 1 */}
            <div className="flex items-center" role="listitem">
              <CredentialBadge
                icon={<GraduationCap size={20} weight="fill" />}
                label="Magister"
                value="Fizjoterapii"
              />
            </div>

            <div
              className="mx-4 hidden h-8 w-px sm:block"
              style={{ background: "var(--border)" }}
              aria-hidden="true"
            />

            {/* Badge 2 */}
            <div className="flex items-center" role="listitem">
              <CredentialBadge
                icon={<Trophy size={20} weight="fill" />}
                label="Finalista"
                value="Mistrzostw Polski"
              />
            </div>

            <div
              className="mx-4 hidden h-8 w-px sm:block"
              style={{ background: "var(--border)" }}
              aria-hidden="true"
            />

            {/* Badge 3 */}
            <div className="flex items-center" role="listitem">
              <CredentialBadge
                icon={<Star size={20} weight="fill" />}
                label="8 lat"
                value="doświadczenia"
              />
            </div>

            <div
              className="mx-4 hidden h-8 w-px sm:block"
              style={{ background: "var(--border)" }}
              aria-hidden="true"
            />

            {/* Badge 4 */}
            <div className="flex items-center" role="listitem">
              <CredentialBadge
                icon={<Users size={20} weight="fill" />}
                label="200+"
                value="zadowolonych klientów"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
