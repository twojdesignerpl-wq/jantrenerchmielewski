"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { AnimatedCounter } from "@/components/shared/AnimatedCounter"
import { CTAButton } from "@/components/shared/CTAButton"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { Container } from "@/components/layout/Container"

const competitionPhotos = [
  { src: "/images/zawody-1.png", alt: "Jan Chmielewski na zawodach kulturystycznych — 1" },
  { src: "/images/zawody-2.png", alt: "Jan Chmielewski na zawodach kulturystycznych — 2" },
  { src: "/images/zawody-4.png", alt: "Jan Chmielewski na zawodach kulturystycznych — 3" },
  { src: "/images/zawody-5.png", alt: "Jan Chmielewski na zawodach kulturystycznych — 4" },
]

const metrics = [
  { value: 8, suffix: " lat", label: "doświadczenia" },
  { value: 200, suffix: "+", label: "zadowolonych klientów" },
  { value: 1, suffix: "", label: "Finalista Mistrzostw Polski" },
]

export function CredentialsSection() {
  return (
    <section
      className="py-24 md:py-32 section-glow-bottom"
      aria-labelledby="credentials-heading"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT — image */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Background glow */}
              <div
                className="pointer-events-none absolute -inset-4 z-0 rounded-3xl"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 80% at 50% 50%, oklch(0.65 0.18 210 / 8%) 0%, transparent 70%)",
                }}
              />

              <motion.div
                className="relative z-10 overflow-hidden rounded-2xl border-glow"
                style={{
                  boxShadow:
                    "0 0 40px oklch(0.65 0.18 210 / 12%), 0 20px 60px oklch(0.14 0.025 232 / 60%)",
                }}
                whileHover={{
                  boxShadow:
                    "0 0 60px oklch(0.65 0.18 210 / 22%), 0 24px 80px oklch(0.14 0.025 232 / 70%)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/images/jan-magister.png"
                    alt="Jan Chmielewski — Magister Fizjoterapii, Trener Personalny"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* RIGHT — content */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="flex flex-col gap-8">
              <SectionHeading
                eyebrow="O MNIE"
                title="Wiedza i doświadczenie"
                description="Jestem magistrem fizjoterapii, certyfikowanym trenerem personalnym i finalistą Mistrzostw Polski w kulturystyce. Łączę wiedzę naukową z praktyką zawodnicza, by dawać Ci najlepsze wyniki."
              />

              {/* Metrics row */}
              <div
                className="grid grid-cols-3 gap-4 rounded-2xl border border-border p-6"
                style={{ background: "var(--card)" }}
                role="list"
                aria-label="Liczby i osiągnięcia"
              >
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex flex-col items-center gap-1 text-center"
                    role="listitem"
                  >
                    <AnimatedCounter
                      value={metric.value}
                      suffix={metric.suffix}
                      className="text-gradient-cyan text-2xl md:text-3xl lg:text-4xl"
                    />
                    <span className="text-label text-center text-[0.65rem] leading-tight">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Competition gallery */}
              <div>
                <p className="text-label mb-4">Galeria zawodów</p>
                <div
                  className="grid grid-cols-2 gap-4 sm:grid-cols-4"
                  role="list"
                  aria-label="Zdjęcia z zawodów kulturystycznych"
                >
                  {competitionPhotos.map((photo) => (
                    <motion.div
                      key={photo.src}
                      className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border bg-[oklch(0.16_0.025_232)]"
                      whileHover={{
                        scale: 1.05,
                        boxShadow:
                          "0 0 20px oklch(0.65 0.18 210 / 25%), 0 0 50px oklch(0.65 0.18 210 / 10%)",
                        transition: {
                          type: "spring" as const,
                          stiffness: 300,
                          damping: 25,
                        },
                      }}
                      role="listitem"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-contain object-center"
                        sizes="(max-width: 640px) 45vw, 200px"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div>
                <CTAButton href="/o-mnie" variant="secondary">
                  Poznaj mnie bliżej →
                </CTAButton>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </Container>
    </section>
  )
}
