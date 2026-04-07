import type { Metadata } from "next"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { CTAButton } from "@/components/shared/CTAButton"
import { PriceCard } from "@/components/shared/PriceCard"
import { BreadcrumbSchema, ServicePageSchema, FAQSchema } from "@/components/seo/JsonLd"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  Users,
  Heartbeat,
  Crosshair,
  Trophy,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "Trening Personalny Chełmża — od 149 zł/sesja",
  description:
    "Trening personalny 1 na 1 w Chełmży. Indywidualne podejście, elementy fizjoterapii, kontrola techniki. Jan Chmielewski — Magister Fizjoterapii, ul. 3 Maja 18A, Chełmża.",
  keywords: [
    "trening personalny Chełmża",
    "trener personalny Chełmża",
    "trener personalny Toruń",
    "trening personalny",
    "personal trainer Chełmża",
    "Jan Chmielewski trening",
  ],
  openGraph: {
    title: "Trening Personalny Chełmża — od 149 zł/sesja | Jan Chmielewski",
    description:
      "Trening 1 na 1 z Magistrem Fizjoterapii w Chełmży. Indywidualne podejście, elementy fizjoterapii, kontrola techniki.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Trening personalny Chełmża — Jan Chmielewski",
      },
    ],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://jantrenerchmielewski.pl/trening-personalny-chelmza",
  },
}

const features = [
  {
    icon: Users,
    title: "Sesje 1 na 1",
    description:
      "Twój trening. Twoje tempo. Twoje cele. Zero rozpraszania się — pełna koncentracja na Tobie przez cały czas sesji.",
  },
  {
    icon: Crosshair,
    title: "Indywidualne podejście",
    description:
      "Każda sesja jest zaplanowana pod Twój poziom, możliwości i cel. Żadnych standardowych szablonów.",
  },
  {
    icon: Heartbeat,
    title: "Elementy fizjoterapii",
    description:
      "Jako Magister Fizjoterapii identyfikuję dysfunkcje ruchowe i włączam ćwiczenia korekcyjne do treningu.",
  },
  {
    icon: Trophy,
    title: "Kontrola techniki",
    description:
      "Każde ćwiczenie wykonujesz pod okiem specjalisty. Bezpiecznie, efektywnie i z pełną kontrolą ciała.",
  },
  {
    icon: Heartbeat,
    title: "Motywacja i wsparcie",
    description:
      "Trening z trenerem to znacznie więcej niż ćwiczenia — to zobowiązanie, dyscyplina i ktoś, kto nie pozwoli Ci odpuścić.",
  },
]

const pricingOptions = [
  {
    title: "Pojedyncza sesja",
    price: "149 zł",
    period: "/ sesja",
    features: [
      "60 minut 1 na 1",
      "Dostosowany plan sesji",
      "Kontrola techniki",
      "Elementy fizjoterapii",
      "Konsultacja po sesji",
    ],
    href: "/kontakt?service=trening",
    highlighted: false,
    ctaLabel: "Umów trening",
  },
  {
    title: "Pakiet 10 treningów",
    price: "1\u00A0119 zł",
    period: "/ 10 sesji",
    badge: "Oszczędzasz 371 zł",
    features: [
      "10 sesji 1 na 1 (60 min)",
      "Dostosowany plan każdej sesji",
      "Kontrola techniki",
      "Elementy fizjoterapii",
      "Konsultacja po każdej sesji",
      "Priorytetowe terminy",
    ],
    href: "/kontakt?service=trening",
    highlighted: true,
    ctaLabel: "Umów trening",
  },
]

const faqItems = [
  {
    question: "Gdzie odbywają się treningi personalne?",
    answer:
      "Treningi odbywają się w Chełmży przy ul. 3 Maja 18A (87-140 Chełmża). Lokalizacja jest łatwo dostępna samochodem z centrum Chełmży i okolic Torunia.",
  },
  {
    question: "Jak długo trwa jedna sesja treningowa?",
    answer:
      "Standardowa sesja treningowa trwa 60 minut. W tym czasie skupiamy się wyłącznie na Twoim treningu — rozgrzewka, część główna i stretching lub ćwiczenia korekcyjne.",
  },
  {
    question: "Czy jako fizjoterapeuta możesz pomóc z bólami i kontuzjami?",
    answer:
      "Tak — to jedna z moich największych przewag jako trenera. Jako Magister Fizjoterapii identyfikuję dysfunkcje ruchowe, napięcia i kompensacje, które mogą prowadzić do kontuzji. Włączam ćwiczenia korekcyjne i uczę Cię poruszać się bezpiecznie i efektywnie.",
  },
  {
    question: "Czy treningi personalne są dla początkujących?",
    answer:
      "Absolutnie tak. Treningi personalne są idealne dla osób, które dopiero zaczynają — uczę prawidłowych wzorców ruchowych od podstaw, co zapobiega kontuzjom i buduje silne fundamenty. Pracuję też z osobami zaawansowanymi, które chcą przełamać plateau.",
  },
  {
    question: "Jak umówić się na trening?",
    answer:
      "Najszybciej przez telefon lub formularz kontaktowy. Omówimy Twoje cele, dostępność i zaplanujemy pierwsze spotkanie. Pierwszy trening to też konsultacja — sprawdzamy poziom i ustalamy kierunek współpracy.",
  },
]

export default function TreningPersonalnyChelmzaPage() {
  return (
    <LenisProvider>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Trening Personalny Chełmża", url: "/trening-personalny-chelmza" },
        ]}
      />
      <ServicePageSchema
        name="Trening Personalny Chełmża"
        description="Indywidualny trening personalny 1 na 1 z elementami fizjoterapii w Chełmży. Profesjonalna kontrola techniki i spersonalizowane podejście."
        price="149"
        url="/trening-personalny-chelmza"
      />
      <FAQSchema questions={faqItems} />

      <Navbar />

      <main className="min-h-[100dvh]">
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div
            className="pointer-events-none absolute top-0 left-0 h-[500px] w-[500px] rounded-full blur-[120px] opacity-15"
            style={{ background: "var(--cyan)" }}
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <ScrollReveal delay={0}>
                <div className="mb-4 flex items-center gap-2">
                  <MapPin
                    className="size-4"
                    style={{ color: "var(--cyan)" }}
                    weight="fill"
                    aria-hidden="true"
                  />
                  <p className="text-label" style={{ color: "var(--cyan)" }}>
                    Chełmża — ul. 3 Maja 18A
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-display-sm mb-6 text-[clamp(2.5rem,5vw,4.5rem)]">
                  Trening personalny{" "}
                  <span className="text-gradient-cyan">na najwyższym poziomie</span>{" "}
                  w Chełmży
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-body-lg mb-8 text-muted-foreground max-w-2xl">
                  Jako jedyna osoba w regionie łączę wiedzę Magistra Fizjoterapii z 8-letnim
                  doświadczeniem trenera personalnego i tytułem Finalisty Mistrzostw Polski w
                  kulturystyce. Twój trening jest bezpieczny, skuteczny i indywidualny.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-4">
                  <CTAButton href="/kontakt?service=trening" size="lg">
                    Umów trening — od 149 zł
                  </CTAButton>
                  <a
                    href="tel:+48534214398"
                    className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Zadzwoń: +48 534 214 398"
                  >
                    <Phone className="size-4" weight="fill" aria-hidden="true" />
                    +48 534 214 398
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="py-20 section-glow" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Dlaczego warto
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Co wyróżnia trening ze mną
                </h2>
              </div>
            </ScrollReveal>

            {/* Top row — 3 cards */}
            <div className="grid gap-6 sm:grid-cols-3">
              {features.slice(0, 3).map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 0.08} className="h-full flex">
                  <article
                    className="h-full flex flex-col border-glow rounded-xl p-6 transition-all hover:glow-cyan"
                    style={{ background: "var(--background)" }}
                  >
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

            {/* Bottom row — 2 cards centered */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
              {features.slice(3).map((feature, i) => (
                <ScrollReveal key={feature.title} delay={(i + 3) * 0.08} className="h-full flex">
                  <article
                    className="h-full flex flex-col border-glow rounded-xl p-6 transition-all hover:glow-cyan"
                    style={{ background: "var(--background)" }}
                  >
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

        {/* ===== PRICING ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Cennik
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">Ceny treningów</h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 max-w-2xl mx-auto sm:grid-cols-2 items-stretch">
              {pricingOptions.map((option, i) => (
                <ScrollReveal key={option.title} delay={i * 0.1} className="h-full flex">
                  <PriceCard
                    title={option.title}
                    price={option.price}
                    period={option.period}
                    features={option.features}
                    href={option.href}
                    highlighted={option.highlighted}
                    badge={option.badge}
                    ctaLabel={option.ctaLabel}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== MAP ===== */}
        <section className="py-20" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Lokalizacja
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">Gdzie trenujemy?</h2>
                <address className="mt-4 not-italic text-muted-foreground">
                  ul. 3 Maja 18A, 87-140 Chełmża
                </address>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl border-glow" style={{ height: 400 }}>
                <iframe
                  title="Lokalizacja trenera personalnego Jana Chmielewskiego — Chełmża, ul. 3 Maja 18A"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2399.5!2d18.604!3d53.183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47031fbe5e9b5b5d%3A0x2a3a69b8a60a0a4a!2s3+Maja+18A%2C+87-140+Che%C5%82m%C5%BCa!5e0!3m2!1spl!2spl!4v1"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Mapa z lokalizacją studia treningowego Jana Chmielewskiego w Chełmży"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-20">
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
        <section className="relative overflow-hidden py-24 text-center">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              background: "radial-gradient(ellipse at center, var(--cyan) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <ScrollReveal>
              <p className="text-label mb-4" style={{ color: "var(--cyan)" }}>
                Chełmża i okolice
              </p>
              <h2 className="text-display-sm mb-6 text-3xl md:text-5xl">
                Umów pierwszą sesję już dziś
              </h2>
              <p className="text-body-lg mx-auto mb-10 text-muted-foreground max-w-xl">
                Skontaktuj się ze mną telefonicznie lub przez formularz — ustalamy termin i zaczynamy.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <CTAButton href="/kontakt?service=trening" size="lg">
                  Umów trening
                </CTAButton>
                <a
                  href="tel:+48534214398"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-semibold transition-all hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Zadzwoń do Jana: +48 534 214 398"
                >
                  <Phone className="size-4" weight="fill" aria-hidden="true" />
                  +48 534 214 398
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </LenisProvider>
  )
}
