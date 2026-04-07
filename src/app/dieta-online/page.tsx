import type { Metadata } from "next"
import Image from "next/image"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { CTAButton } from "@/components/shared/CTAButton"
import { BreadcrumbSchema, ServicePageSchema, FAQSchema } from "@/components/seo/JsonLd"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  ChartBar,
  Calculator,
  ForkKnife,
  ShoppingCart,
  UserFocus,
  ChatCircleDots,
} from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "Dieta 4-tygodniowa Online — 199 zł",
  description:
    "Spersonalizowany plan żywieniowy 4-tygodniowy dopasowany do Twoich celów, metabolizmu i stylu życia. Analiza, kalkulacja kaloryczna, lista zakupów. Jan Chmielewski — Magister Fizjoterapii.",
  keywords: [
    "dieta online",
    "plan żywieniowy",
    "dieta personalizowana",
    "dietetyk online",
    "dieta treningowa",
    "Jan Chmielewski dieta",
  ],
  openGraph: {
    title: "Dieta 4-tygodniowa Online — 199 zł | Jan Chmielewski",
    description:
      "Spersonalizowany plan żywieniowy dopasowany do Twoich celów. Analiza metabolizmu, kalkulacja kaloryczna, lista zakupów.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Dieta online Jan Chmielewski" }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://jantrenerchmielewski.pl/dieta-online" },
}

const features = [
  {
    icon: ChartBar,
    title: "Analiza metabolizmu",
    description:
      "Obliczam Twoje zapotrzebowanie kaloryczne na podstawie danych biometrycznych i poziomu aktywności.",
  },
  {
    icon: Calculator,
    title: "Kalkulacja kaloryczna",
    description:
      "Precyzyjny podział makroskładników (białko, tłuszcze, węglowodany) dostosowany do Twojego celu.",
  },
  {
    icon: ForkKnife,
    title: "Plan z prostych przepisów",
    description:
      "Smaczne i łatwe posiłki — bez egzotycznych składników. Dieta, której będziesz się trzymać.",
  },
  {
    icon: ShoppingCart,
    title: "Lista zakupów",
    description:
      "Gotowa lista produktów tygodniowych, żebyś zaoszczędził czas i nie kupował niczego zbędnego.",
  },
  {
    icon: UserFocus,
    title: "Spersonalizowane posiłki",
    description:
      "Każdy plan tworzę od zera pod konkretną osobę — uwzględniam preferencje, nietolerancje i tryb dnia.",
  },
  {
    icon: ChatCircleDots,
    title: "Wsparcie online",
    description:
      "Przez cały miesiąc możesz pisać z pytaniami. Odpowiadam i wprowadzam korekty na bieżąco.",
  },
]

const steps = [
  {
    number: "01",
    title: "Analiza",
    description:
      "Wypełniasz kwestionariusz: cele, tryb życia, preferencje kulinarne, alergie. Podajesz pomiary ciała.",
  },
  {
    number: "02",
    title: "Planowanie",
    description:
      "W ciągu 48–72 godzin przygotowuję spersonalizowany plan żywieniowy z przepisami i listą zakupów.",
  },
  {
    number: "03",
    title: "Realizacja",
    description:
      "Otrzymujesz gotowy plan w PDF. Jestem dostępny przez miesiąc na pytania i wprowadzanie korekt.",
  },
]

const faqItems = [
  {
    question: "Czym różni się Twoja dieta od diety z internetu?",
    answer:
      "Każdy plan tworzę indywidualnie od podstaw — nie korzystam z szablonów. Uwzględniam Twój metabolizm, poziom aktywności, preferencje smakowe, nietolerancje pokarmowe i harmonogram dnia. Dieta z internetu to produkt masowy, moja dieta to narzędzie dopasowane do Ciebie.",
  },
  {
    question: "Ile czasu potrzebuję na przygotowanie się do diety?",
    answer:
      "Po wypełnieniu kwestionariusza (ok. 10–15 minut) zajmuję się wszystkim. Plan dostarczam w ciągu 48–72 godzin roboczych w formie przejrzystego PDF z przepisami i listą zakupów.",
  },
  {
    question: "Co się dzieje, jeśli nie toleruję jakiegoś produktu?",
    answer:
      "W kwestionariuszu pytam o wszystkie preferencje, nietolerancje i alergie. Planuję posiłki wokół produktów, które możesz i lubisz jeść. W razie potrzeby po otrzymaniu planu mogę wprowadzić zamiany.",
  },
  {
    question: "Czy dieta obejmuje wsparcie po otrzymaniu planu?",
    answer:
      "Tak. Przez 30 dni od dostarczenia planu jesteś pod moją opieką — możesz pisać z pytaniami, zgłaszać trudności lub prosić o modyfikacje. Odpowiadam w ciągu 24 godzin.",
  },
  {
    question: "Jak płacę i kiedy otrzymam plan?",
    answer:
      "Po zamówieniu kontaktujesz się ze mną przez formularz lub telefonicznie pod numer +48 534 214 398. Płatność przelewem lub Blikiem. Plan trafia do Ciebie mailowo w ciągu 48–72 godzin od zaksięgowania wpłaty.",
  },
]

export default function DietaOnlinePage() {
  return (
    <LenisProvider>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Dieta Online", url: "/dieta-online" },
        ]}
      />
      <ServicePageSchema
        name="Dieta 4-tygodniowa Online"
        description="Spersonalizowany plan żywieniowy 4-tygodniowy dopasowany do celów, metabolizmu i stylu życia klienta."
        price="199"
        url="/dieta-online"
      />
      <FAQSchema questions={faqItems} />

      <Navbar />

      <main className="min-h-[100dvh]">
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden pt-32 pb-20">
          {/* Background glow */}
          <div
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full blur-[120px] opacity-20"
            style={{ background: "var(--cyan)" }}
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <ScrollReveal delay={0}>
                  <p className="text-label mb-4" style={{ color: "var(--cyan)" }}>
                    Usługa online — cała Polska
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <h1 className="text-display-sm mb-6 text-[clamp(2.5rem,5vw,4.5rem)]">
                    Indywidualna dieta{" "}
                    <span className="text-gradient-cyan">dopasowana do Twoich celów</span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <p className="text-body-lg mb-8 text-muted-foreground">
                    Jako Magister Fizjoterapii i trener z 8-letnim doświadczeniem tworzę diety, które
                    działają. Nie szablony — prawdziwa analiza Twojego ciała i stylu życia.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <div className="flex flex-wrap items-center gap-4">
                    <CTAButton href="/kontakt?service=dieta" size="lg">
                      Zamów dietę — 199 zł
                    </CTAButton>
                    <a
                      href="tel:+48534214398"
                      className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Zadzwoń: +48 534 214 398"
                    >
                      +48 534 214 398
                    </a>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <div className="mt-8 flex flex-wrap gap-6">
                    {[
                      { value: "48h", label: "czas realizacji" },
                      { value: "200+", label: "zadowolonych klientów" },
                      { value: "8 lat", label: "doświadczenia" },
                    ].map((stat) => (
                      <div key={stat.label} className="flex flex-col gap-1">
                        <span className="text-mono-metric text-2xl font-bold text-gradient-cyan">
                          {stat.value}
                        </span>
                        <span className="text-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.2} direction="left">
                <div className="relative">
                  <div className="border-glow glow-cyan overflow-hidden rounded-2xl">
                    <Image
                      src="https://picsum.photos/seed/dieta-jc/800/500"
                      alt="Zdrowe posiłki — przykład diety Jana Chmielewskiego"
                      width={800}
                      height={500}
                      className="w-full object-cover"
                      priority
                    />
                  </div>
                  {/* Price badge */}
                  <div
                    className="absolute -bottom-4 -right-4 rounded-2xl border-glow px-6 py-4 text-center glow-cyan"
                    style={{ background: "var(--card)" }}
                  >
                    <p className="text-mono-metric text-3xl font-bold text-gradient-cyan">199 zł</p>
                    <p className="text-label mt-1">jednorazowo</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="py-20" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Co zawiera plan
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Kompleksowe podejście do odżywiania
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
              {features.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 0.07} className="h-full flex">
                  <article className="group h-full flex flex-col border-glow rounded-xl p-6 transition-all hover:glow-cyan" style={{ background: "var(--background)" }}>
                    <feature.icon
                      className="mb-4 size-8"
                      style={{ color: "var(--cyan)" }}
                      weight="duotone"
                      aria-hidden="true"
                    />
                    <h3
                      className="mb-2 text-lg font-semibold"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Jak to działa
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">3 kroki do Twojej diety</h2>
              </div>
            </ScrollReveal>

            <div className="relative grid gap-8 md:grid-cols-3">
              {/* Connector line */}
              <div
                className="pointer-events-none absolute top-10 left-0 right-0 hidden h-px md:block"
                style={{ background: "linear-gradient(to right, transparent, var(--cyan), transparent)", opacity: 0.3 }}
                aria-hidden="true"
              />

              {steps.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 0.1}>
                  <div className="relative flex flex-col items-center text-center">
                    <div
                      className="relative mb-6 flex size-20 items-center justify-center rounded-full border-glow glow-cyan"
                      style={{ background: "var(--card)" }}
                    >
                      <span className="text-mono-metric text-2xl font-bold text-gradient-cyan">
                        {step.number}
                      </span>
                    </div>
                    <h3
                      className="mb-3 text-xl font-bold"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-20" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Pytania i odpowiedzi
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Najczęściej zadawane pytania
                </h2>
              </div>
            </ScrollReveal>

            <div className="mx-auto max-w-3xl">
              <Accordion>
                {faqItems.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="py-4 text-base font-medium text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed pb-4">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-24 text-center relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{ background: "radial-gradient(ellipse at center, var(--cyan) 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <ScrollReveal>
              <p className="text-label mb-4" style={{ color: "var(--cyan)" }}>
                Gotowy na zmianę?
              </p>
              <h2 className="text-display-sm mb-6 text-3xl md:text-5xl">
                Zacznij jeść mądrze już dziś
              </h2>
              <p className="text-body-lg mx-auto mb-10 text-muted-foreground max-w-xl">
                199 zł za plan, który realnie zmieni Twoje nawyki żywieniowe. Realizacja w 48 godzin.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <CTAButton href="/kontakt" size="lg">
                  Zamów dietę — 199 zł
                </CTAButton>
                <CTAButton href="/cennik" variant="secondary">
                  Zobacz wszystkie usługi
                </CTAButton>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Pytania?{" "}
                <a
                  href="tel:+48534214398"
                  className="underline hover:text-foreground transition-colors"
                  aria-label="Zadzwoń do Jana Chmielewskiego"
                >
                  +48 534 214 398
                </a>
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </LenisProvider>
  )
}
