"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "@phosphor-icons/react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { Container } from "@/components/layout/Container"

export function MetamorphosisTeaser() {
  return (
    <section
      className="relative py-24 md:py-32 section-glow"
      aria-labelledby="metamorphosis-heading"
      style={{ background: "var(--surface-elevated)" }}
    >
      {/* Subtle top/bottom border lines */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--border)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{ background: "var(--border)" }}
        aria-hidden="true"
      />

      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="METAMORFOZA"
            title="Od początku do podium"
            description="Każda transformacja zaczyna się od jednej decyzji. Moja historia to dowód, że to możliwe."
            align="center"
            className="mb-16"
          />
        </ScrollReveal>

        {/* Images comparison */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-stretch sm:gap-8 lg:gap-12">
            {/* BEFORE image */}
            <motion.div
              className="relative flex w-full flex-col sm:flex-1"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring" as const, stiffness: 200, damping: 25 }}
            >
              {/* Label */}
              <div
                className="absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider"
                style={{
                  background: "oklch(0.55 0.22 25 / 90%)",
                  color: "white",
                }}
                aria-label="Przed transformacją"
              >
                PRZED
              </div>
              <div
                className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl"
                style={{
                  border: "2px solid oklch(0.55 0.22 25 / 40%)",
                  boxShadow:
                    "0 0 40px oklch(0.55 0.22 25 / 15%), 0 20px 60px oklch(0.10 0.02 240 / 50%)",
                }}
              >
                <Image
                  src="/images/metamorfoza-1.png"
                  alt="Jan Chmielewski przed transformacją"
                  fill
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 45vw"
                />
              </div>
            </motion.div>

            {/* Arrow separator */}
            <div
              className="flex items-center justify-center"
              aria-hidden="true"
            >
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                }}
              >
                <ArrowRight
                  size={40}
                  weight="bold"
                  className="rotate-90 sm:rotate-0"
                  style={{ color: "var(--cyan)" }}
                />
              </motion.div>
            </div>

            {/* AFTER image */}
            <motion.div
              className="relative flex w-full flex-col sm:flex-1"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring" as const, stiffness: 200, damping: 25 }}
            >
              {/* Label */}
              <div
                className="absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider"
                style={{
                  background: "oklch(0.65 0.18 210 / 90%)",
                  color: "var(--primary-foreground)",
                }}
                aria-label="Po transformacji"
              >
                PO TRANSFORMACJI
              </div>
              <div
                className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl"
                style={{
                  border: "2px solid oklch(0.65 0.18 210 / 40%)",
                  boxShadow:
                    "0 0 40px oklch(0.65 0.18 210 / 20%), 0 20px 60px oklch(0.10 0.02 240 / 50%)",
                }}
              >
                <Image
                  src="/images/jan-hero.png"
                  alt="Jan Chmielewski po transformacji — sylwetka zawodnicza"
                  fill
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 45vw"
                />
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Text + CTA */}
        <ScrollReveal delay={0.4}>
          <div className="mx-auto mt-14 max-w-2xl text-center">
            <p className="text-body-lg mx-auto mb-8 text-muted-foreground">
              Każda transformacja zaczyna się od pierwszego kroku.
              Pozwól, że pomogę Ci osiągnąć Twoje cele — niezależnie
              od Twojego punktu startowego.
            </p>
            <Link
              href="/metamorfoza"
              className="group inline-flex items-center gap-2 text-base font-semibold transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              style={{ color: "var(--cyan)" }}
              aria-label="Zobacz pełną historię metamorfozy Jana Chmielewskiego"
            >
              Zobacz pełną historię
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
