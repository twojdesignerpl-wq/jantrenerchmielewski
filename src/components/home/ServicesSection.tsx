"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  BowlFood,
  Barbell,
  ChatsCircle,
  PersonSimpleRun,
  ArrowRight,
  CheckCircle,
} from "@phosphor-icons/react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { Container } from "@/components/layout/Container"

interface ServiceRowProps {
  imageLeft: boolean
  imageSrc: string
  imageAlt: string
  icon: React.ReactNode
  eyebrow?: string
  title: string
  description: string
  price: string
  pricePrefix?: string
  priceLabel?: string
  features: string[]
  href: string
  highlighted?: boolean
  index: number
}

function ServiceRow({
  imageLeft,
  imageSrc,
  imageAlt,
  icon,
  title,
  description,
  price,
  pricePrefix,
  priceLabel,
  features,
  href,
  highlighted = false,
  index,
}: ServiceRowProps) {
  const imageBlock = (
    <div className="relative overflow-hidden rounded-2xl lg:h-full">
      <motion.div
        className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 lg:h-full lg:min-h-[380px]"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring" as const, stiffness: 200, damping: 25 }}
        style={{
          boxShadow: highlighted
            ? "0 0 40px oklch(0.65 0.18 210 / 20%)"
            : undefined,
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Subtle overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: highlighted
              ? "linear-gradient(135deg, oklch(0.65 0.18 210 / 15%) 0%, transparent 50%)"
              : "linear-gradient(180deg, transparent 60%, oklch(0.14 0.025 232 / 30%) 100%)",
          }}
          aria-hidden="true"
        />
      </motion.div>
    </div>
  )

  const textBlock = (
    <div className="flex flex-col justify-center gap-6">
      {/* Icon + title row */}
      <div className="flex items-start gap-4">
        <div
          className="flex size-14 shrink-0 items-center justify-center rounded-xl"
          style={{
            background: highlighted
              ? "oklch(0.65 0.18 210 / 15%)"
              : "oklch(0.65 0.18 210 / 8%)",
            color: "var(--cyan)",
          }}
          aria-hidden="true"
        >
          {icon}
        </div>
        <div>
          {highlighted && (
            <div className="mb-1.5 flex items-center gap-2">
              <span
                className="inline-block text-xs font-mono font-semibold uppercase tracking-widest"
                style={{ color: "var(--cyan)" }}
              >
                Najpopularniejsze
              </span>
              {/* Bestseller badge */}
              <span
                className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider"
                style={{
                  background: "var(--cyan)",
                  color: "var(--primary-foreground)",
                  animation: "badgePulse 3s ease-in-out infinite",
                }}
              >
                Bestseller
              </span>
            </div>
          )}
          <h3
            className="text-display-sm text-2xl md:text-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h3>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed">{description}</p>

      {/* Features */}
      <ul className="flex flex-col gap-2.5" role="list">
        {features.map((feat) => (
          <li key={feat} className="flex items-center gap-2.5 text-[0.9375rem]">
            <CheckCircle
              size={16}
              weight="fill"
              style={{ color: "var(--cyan)" }}
              aria-hidden="true"
            />
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      {/* Price + CTA */}
      <div className="flex flex-wrap items-center gap-6 border-t border-border pt-6">
        <div className="flex items-baseline gap-1.5">
          {pricePrefix && (
            <span className="text-base text-muted-foreground">{pricePrefix}</span>
          )}
          <span className="font-mono text-2xl font-bold tabular-nums md:text-3xl">
            {price}
          </span>
          {priceLabel && (
            <span className="text-base text-muted-foreground">{priceLabel}</span>
          )}
        </div>
        <Link
          href={href}
          className="group inline-flex items-center gap-2 rounded-full border px-7 py-3 text-base font-semibold transition-all hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]"
          style={
            highlighted
              ? {
                  background: "var(--cyan)",
                  color: "var(--primary-foreground)",
                  borderColor: "var(--cyan)",
                }
              : {
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }
          }
          aria-label={`Dowiedz się więcej o ${title}`}
        >
          Dowiedz się więcej
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  )

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
          highlighted ? "rounded-3xl border p-8" : ""
        }`}
        style={
          highlighted
            ? {
                borderColor: "oklch(0.65 0.18 210 / 25%)",
                background:
                  "linear-gradient(135deg, oklch(0.65 0.18 210 / 4%) 0%, transparent 50%)",
              }
            : undefined
        }
        whileHover={{
          y: -8,
          transition: { type: "spring", stiffness: 200, damping: 22 },
        }}
      >
        {imageLeft ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            <div className="lg:order-2">{imageBlock}</div>
            <div className="lg:order-1">{textBlock}</div>
          </>
        )}
      </motion.div>
    </ScrollReveal>
  )
}

export function ServicesSection() {
  return (
    <section
      className="py-24 md:py-32 section-glow"
      aria-labelledby="services-heading"
    >
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="OFERTA"
            title="Kompleksowe wsparcie na każdym etapie"
            description="Niezależnie od Twojego celu — redukcja wagi, budowa masy czy poprawa wyników — mam dla Ciebie odpowiedni plan."
            className="mb-20"
          />
        </ScrollReveal>

        <div className="flex flex-col gap-20 md:gap-28">
          {/* Row 1 — Image left */}
          <ServiceRow
            index={0}
            imageLeft={true}
            imageSrc="/images/oferta-dieta.png"
            imageAlt="Plan diety — zdrowy posiłek i tablet z jadłospisem"
            icon={<BowlFood size={28} weight="fill" />}
            title="Dieta 4-tygodniowa"
            description="Spersonalizowany plan żywieniowy oparty na Twoich celach, preferencjach i stylu życia. Wiedza magistra fizjoterapii w służbie Twojego zdrowia."
            price="199 zł"
            features={[
              "Analiza potrzeb i celów",
              "Plan z przepisów sezonowych",
              "Lista zakupów na każdy tydzień",
              "Wsparcie online przez cały okres",
            ]}
            href="/dieta-online"
          />

          {/* Row 2 — Text left, image right */}
          <ServiceRow
            index={1}
            imageLeft={false}
            imageSrc="/images/oferta-plan-treningowy.png"
            imageAlt="Plan treningowy — mężczyzna z telefonem na siłowni"
            icon={<Barbell size={28} weight="fill" />}
            title="Plan Treningowy 8-tygodniowy"
            description="Ośmiotygodniowy program dopasowany do Twojego poziomu zaawansowania i dostępnego sprzętu. Progresja zapewniająca ciągłe wyniki."
            price="149 zł"
            features={[
              "Program dostosowany do poziomu",
              "Notacja ćwiczeń z opisem techniki",
              "Progresja treningowa tydzień po tygodniu",
            ]}
            href="/plan-treningowy"
          />

          {/* Row 3 — Image left, HIGHLIGHTED */}
          <ServiceRow
            index={2}
            imageLeft={true}
            imageSrc="/images/oferta-prowadzenie-online.png"
            imageAlt="Prowadzenie online — kobieta ćwiczy z trenerem przez laptop"
            icon={<ChatsCircle size={28} weight="fill" />}
            title="Prowadzenie Online"
            description="Kompleksowe prowadzenie łączące dietę i trening w jednym abonamencie. Cotygodniowe raporty, korekty i nieograniczony dostęp do trenera."
            pricePrefix="od"
            price="399 zł"
            priceLabel="/ mies."
            features={[
              "Dieta + plan treningowy w pakiecie",
              "Dostęp do trenera 24/7",
              "Cotygodniowe raporty i analizy",
              "Korekty planu i motywacja",
            ]}
            href="/prowadzenie-online"
            highlighted={true}
          />

          {/* Row 4 — Text left, image right */}
          <ServiceRow
            index={3}
            imageLeft={false}
            imageSrc="/images/oferta-trening-personalny.png"
            imageAlt="Trening personalny — trener koryguje technikę ćwiczenia"
            icon={<PersonSimpleRun size={28} weight="fill" />}
            title="Trening Personalny"
            description="Sesje jeden na jeden w Chełmży. Elementy fizjoterapii i pracy z ciałem, indywidualne podejście i stała kontrola techniki wykonania."
            pricePrefix="od"
            price="149 zł"
            features={[
              "Sesje 1 na 1 w Chełmży",
              "Indywidualne podejście",
              "Elementy fizjoterapii",
              "Kontrola i korekta techniki",
            ]}
            href="/trening-personalny-chelmza"
          />
        </div>
      </Container>
    </section>
  )
}
