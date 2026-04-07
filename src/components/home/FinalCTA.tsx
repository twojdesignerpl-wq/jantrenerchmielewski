"use client"

import { motion } from "framer-motion"
import { Phone } from "@phosphor-icons/react"
import { CTAButton } from "@/components/shared/CTAButton"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { Container } from "@/components/layout/Container"

export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-28 md:py-40 section-glow"
      aria-labelledby="final-cta-heading"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.65 0.18 210 / 10%) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top border */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--border)" }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            {/* Eyebrow */}
            <span className="text-label" style={{ color: "var(--cyan)" }}>
              ZACZNIJMY RAZEM
            </span>

            {/* Headline */}
            <h2
              id="final-cta-heading"
              className="text-display"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Gotowy na{" "}
              <span className="text-gradient-cyan">zmianę?</span>
            </h2>

            {/* Subtitle */}
            <p className="text-body-lg mx-auto text-muted-foreground">
              Skontaktuj się ze mną i zacznijmy Twoją transformację.
              Pierwsze konsultacje są bezpłatne.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <CTAButton href="/kontakt" variant="primary" size="lg">
                Napisz do mnie
              </CTAButton>

              <motion.a
                href="tel:+48534214398"
                className="inline-flex items-center gap-2.5 rounded-full border border-border px-8 py-4 text-base font-semibold transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
                aria-label="Zadzwoń do Jana Chmielewskiego: +48 534 214 398"
              >
                <Phone
                  size={18}
                  weight="fill"
                  style={{ color: "var(--cyan)" }}
                  aria-hidden="true"
                />
                Zadzwoń: +48 534 214 398
              </motion.a>
            </div>

            {/* Trust signal */}
            <p className="text-mono-metric text-xs text-muted-foreground">
              Bezpłatna konsultacja • Bez zobowiązań • Odpowiadam w 24h
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
