"use client"

import { SectionHeading } from "@/components/shared/SectionHeading"
import { PriceCard } from "@/components/shared/PriceCard"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { Container } from "@/components/layout/Container"

const plans = [
  {
    title: "Dieta 4-tygodniowa",
    price: "199 zł",
    period: "jednorazowo",
    features: [
      "Analiza potrzeb i celów",
      "Plan z przepisów sezonowych",
      "Lista zakupów",
      "Wsparcie online",
    ],
    href: "/kontakt?service=dieta",
    highlighted: false,
    badge: undefined,
    ctaLabel: "Zamów dietę",
    savings: undefined,
  },
  {
    title: "Plan Treningowy",
    price: "149 zł",
    period: "jednorazowo",
    features: [
      "Program na Twój poziom",
      "Notacja ćwiczeń z opisem",
      "Progresja treningowa",
    ],
    href: "/kontakt?service=plan",
    highlighted: false,
    badge: undefined,
    ctaLabel: "Zamów plan",
    savings: undefined,
  },
  {
    title: "Prowadzenie Online",
    price: "od 399 zł",
    period: "/ mies.",
    features: [
      "Dieta + plan treningowy",
      "Dostęp do trenera 24/7",
      "Cotygodniowe raporty",
      "Korekty i motywacja",
      "1 mies. — 399 zł",
      "3 mies. — 1\u00A0049 zł",
      "6 mies. — 1\u00A0999 zł",
      "12 mies. — 3\u00A0699 zł",
    ],
    href: "/kontakt?service=prowadzenie",
    highlighted: true,
    badge: "Najpopularniejsze",
    ctaLabel: "Zacznij współpracę",
    savings: "Oszczędzasz do 1\u00A0089 zł przy 12 mies.",
  },
  {
    title: "Trening Personalny",
    price: "od 149 zł",
    period: "/ sesja",
    features: [
      "Sesje 1 na 1 w Chełmży",
      "Indywidualne podejście",
      "Elementy fizjoterapii",
      "Kontrola techniki",
    ],
    href: "/kontakt?service=trening",
    highlighted: false,
    badge: undefined,
    ctaLabel: "Umów trening",
    savings: undefined,
  },
]

export function PricingOverview() {
  return (
    <section
      className="py-24 md:py-32 section-glow"
      aria-labelledby="pricing-heading"
      style={{ background: "var(--surface-elevated)" }}
    >
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="CENNIK"
            title="Wybierz plan idealny dla Ciebie"
            description="Przejrzyste ceny, żadnych ukrytych kosztów. Każdy plan możesz rozszerzyć w dowolnym momencie."
            align="center"
            className="mb-6"
          />
          {/* Price anchoring */}
          <p
            className="mx-auto mb-16 text-center text-base tracking-wide"
            style={{ color: "var(--muted-foreground)", maxWidth: "40ch" }}
          >
            Typowy koszt trenera personalnego: 200–350 zł/sesja
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.title} delay={i * 0.1}>
              <div className="flex h-full flex-col">
                <PriceCard
                  title={plan.title}
                  price={plan.price}
                  period={plan.period}
                  features={plan.features}
                  href={plan.href}
                  highlighted={plan.highlighted}
                  badge={plan.badge}
                  ctaLabel={plan.ctaLabel}
                  savings={plan.savings}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
