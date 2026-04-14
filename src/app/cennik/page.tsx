import type { Metadata } from "next"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { CTAButton } from "@/components/shared/CTAButton"
import { PriceCard } from "@/components/shared/PriceCard"
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/JsonLd"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  Phone,
  ChatCircle,
  Clock,
  ShieldCheck,
  Users,
} from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "Cennik — Wszystkie usługi",
  description:
    "Pełny cennik usług Jana Chmielewskiego. Dieta 4-tygodniowa 199 zł, Plan treningowy 149 zł, Prowadzenie online od 399 zł, Trening personalny od 199 zł/sesja.",
  keywords: [
    "cennik trener personalny",
    "cena diety online",
    "cena planu treningowego",
    "prowadzenie online cena",
    "trening personalny cena Chełmża",
  ],
  openGraph: {
    title: "Cennik — Wszystkie usługi | Jan Chmielewski",
    description:
      "Dieta 199 zł, Plan treningowy 149 zł, Prowadzenie online od 399 zł, Trening personalny od 199 zł.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Cennik Jan Chmielewski" }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://jantrenerchmielewski.pl/cennik" },
}

const singleServices = [
  {
    title: "Dieta 4-tygodniowa",
    price: "199 zł",
    period: "jednorazowo",
    features: [
      "Analiza metabolizmu",
      "Kalkulacja kaloryczna i makroskładniki",
      "Plan posiłków na 4 tygodnie",
      "Lista zakupów tygodniowych",
      "Spersonalizowane przepisy",
      "30 dni wsparcia online",
    ],
    href: "/kontakt?service=dieta",
    highlighted: false,
    ctaLabel: "Zamów dietę",
  },
  {
    title: "Plan Treningowy 8-tygodniowy",
    price: "149 zł",
    period: "jednorazowo",
    features: [
      "Program dopasowany do poziomu",
      "Pełna notacja ćwiczeń",
      "Progresja treningowa co tydzień",
      "Technika i wskazówki wykonania",
      "Wskazówki suplementacyjne",
      "30 dni wsparcia online",
    ],
    href: "/kontakt?service=plan",
    highlighted: false,
    ctaLabel: "Zamów plan",
  },
]

const onlineCoachingTiers = [
  {
    title: "1 miesiąc",
    price: "399 zł",
    period: "/ miesiąc",
    features: [
      "Spersonalizowana dieta",
      "Indywidualny plan treningowy",
      "Kontakt przez 30 dni",
      "1 analiza postępów",
      "Korekty planu w razie potrzeby",
    ],
    href: "/kontakt?service=prowadzenie",
    highlighted: false,
    ctaLabel: "Zacznij współpracę",
  },
  {
    title: "3 miesiące",
    price: "1\u00A0049 zł",
    period: "/ 3 miesiące",
    badge: "Popularne",
    features: [
      "Spersonalizowana dieta",
      "Indywidualny plan treningowy",
      "Kontakt przez 90 dni",
      "Cotygodniowe raporty postępów",
      "Bieżące korekty planu",
      "Oszczędzasz 148 zł",
    ],
    href: "/kontakt?service=prowadzenie",
    highlighted: false,
    ctaLabel: "Zacznij współpracę",
  },
  {
    title: "6 miesięcy",
    price: "1\u00A0999 zł",
    period: "/ 6 miesięcy",
    badge: "Najlepsza wartość",
    features: [
      "Spersonalizowana dieta",
      "Indywidualny plan treningowy",
      "Kontakt przez 180 dni",
      "Cotygodniowe raporty",
      "Bieżące korekty planu",
      "Priorytetowe odpowiedzi",
      "Oszczędzasz 395 zł",
    ],
    href: "/kontakt?service=prowadzenie",
    highlighted: true,
    ctaLabel: "Zacznij współpracę",
  },
  {
    title: "12 miesięcy",
    price: "3\u00A0699 zł",
    period: "/ rok",
    features: [
      "Spersonalizowana dieta",
      "Indywidualny plan treningowy",
      "Kontakt przez 365 dni",
      "Cotygodniowe raporty",
      "Bieżące korekty planu",
      "Priorytetowe odpowiedzi",
      "Kompleksowa roczna transformacja",
      "Oszczędzasz 989 zł",
    ],
    href: "/kontakt?service=prowadzenie",
    highlighted: false,
    ctaLabel: "Zacznij współpracę",
  },
]

const personalTrainingOptions = [
  {
    title: "Pojedyncza sesja",
    price: "199 zł",
    period: "/ sesja (60 min)",
    features: [
      "Trening 1 na 1",
      "Indywidualny plan sesji",
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
    price: "1\u00A0599 zł",
    period: "/ 10 sesji",
    badge: "Oszczędzasz 391 zł",
    features: [
      "10 sesji 1 na 1 (60 min)",
      "Dostosowany plan każdej sesji",
      "Kontrola techniki",
      "Elementy fizjoterapii",
      "Priorytetowe terminy",
    ],
    href: "/kontakt?service=trening",
    highlighted: true,
    ctaLabel: "Umów trening",
  },
]

const faqItems = [
  {
    question: "Jak mogę zapłacić za usługi?",
    answer:
      "Akceptuję płatności przelewem bankowym i Blikiem. Po ustaleniu szczegółów współpracy przesyłam dane do płatności. Usługę realizuję po zaksięgowaniu wpłaty.",
  },
  {
    question: "Czy można kupić dietę i plan treningowy razem taniej?",
    answer:
      "Tak — w ramach prowadzenia online dostajesz oba plany (dietę i trening) w jednym pakiecie, który jest tańszy niż kupowanie ich osobno. Prowadzenie online startuje od 399 zł za miesiąc i obejmuje pełne wsparcie.",
  },
  {
    question: "Jak długo czekam na realizację po zamówieniu?",
    answer:
      "Zarówno dieta, jak i plan treningowy są realizowane w ciągu 48–72 godzin roboczych od zaksięgowania wpłaty i wypełnienia kwestionariusza. Dostawa odbywa się mailowo w formacie PDF.",
  },
  {
    question: "Czy mogę zrezygnować z prowadzenia online w trakcie?",
    answer:
      "Przy prowadzeniu miesięcznym płacisz z góry za dany miesiąc. Przy pakietach wielomiesięcznych istnieje możliwość wcześniejszego zakończenia — skontaktuj się ze mną, omówimy sytuację indywidualnie.",
  },
  {
    question: "Czy usługi online są tylko dla osób z całej Polski?",
    answer:
      "Tak — dieta, plan treningowy i prowadzenie online są dostępne dla klientów z całej Polski. Trening personalny realizuję stacjonarnie w Chełmży (ul. 3 Maja 18A).",
  },
]

export default function CennikPage() {
  return (
    <LenisProvider>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Cennik", url: "/cennik" },
        ]}
      />
      <FAQSchema questions={faqItems} />

      <Navbar />

      <main className="min-h-[100dvh]">
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full blur-[120px] opacity-15"
            style={{ background: "var(--cyan)" }}
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal delay={0}>
              <p className="text-label mb-4" style={{ color: "var(--cyan)" }}>
                Transparentne ceny
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-display-sm mb-6 text-[clamp(2.5rem,5vw,4.5rem)]">
                Wszystkie usługi{" "}
                <span className="text-gradient-cyan">w jednym miejscu</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-body-lg mx-auto mb-10 text-muted-foreground max-w-2xl">
                Bez ukrytych kosztów, bez niespodzianek. Wybierz usługę dopasowaną do swoich celów
                i budżetu.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== SINGLE SERVICES ===== */}
        <section className="py-20 section-glow" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Jednorazowe plany
                </p>
                <h2 className="text-display-sm text-3xl md:text-4xl">
                  Dieta i trening osobno
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Idealne, gdy potrzebujesz konkretnego narzędzia bez długoterminowego zobowiązania.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 max-w-2xl mx-auto sm:grid-cols-2 items-stretch">
              {singleServices.map((service, i) => (
                <ScrollReveal key={service.title} delay={i * 0.1} className="h-full flex">
                  <PriceCard
                    title={service.title}
                    price={service.price}
                    period={service.period}
                    features={service.features}
                    href={service.href}
                    highlighted={service.highlighted}
                    ctaLabel={service.ctaLabel}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ONLINE COACHING ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Flagowa usługa
                </p>
                <h2 className="text-display-sm text-3xl md:text-4xl">
                  Prowadzenie online
                </h2>
                <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                  Dieta + trening + cotygodniowe raporty + kontakt 24/7. Im dłuższa współpraca,
                  tym większe oszczędności.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 items-stretch">
              {onlineCoachingTiers.map((tier, i) => (
                <ScrollReveal key={tier.title} delay={i * 0.08} className="h-full flex">
                  <PriceCard
                    title={tier.title}
                    price={tier.price}
                    period={tier.period}
                    features={tier.features}
                    href={tier.href}
                    highlighted={tier.highlighted}
                    badge={tier.badge}
                    ctaLabel={tier.ctaLabel}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PERSONAL TRAINING ===== */}
        <section className="py-20 section-glow" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Stacjonarnie — Chełmża
                </p>
                <h2 className="text-display-sm text-3xl md:text-4xl">
                  Trening personalny
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Treningi 1 na 1 z elementami fizjoterapii. ul. 3 Maja 18A, 87-140 Chełmża.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 max-w-2xl mx-auto sm:grid-cols-2 items-stretch">
              {personalTrainingOptions.map((option, i) => (
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

        {/* ===== TRUST SIGNALS ===== */}
        <section className="py-12">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {[
                  { icon: ChatCircle, text: "Bezpłatna konsultacja" },
                  { icon: Clock, text: "Odpowiedź w 24h" },
                  { icon: ShieldCheck, text: "Bez umowy — rezygnuj kiedy chcesz" },
                  { icon: Users, text: "200+ zadowolonych klientów" },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Icon weight="duotone" className="size-5 text-primary" aria-hidden="true" />
                    <span>{text}</span>
                  </div>
                ))}
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
                  Pytania o płatności
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
                Nie wiesz, co wybrać?
              </p>
              <h2 className="text-display-sm mb-6 text-3xl md:text-5xl">
                Porozmawiajmy o Twoich celach
              </h2>
              <p className="text-body-lg mx-auto mb-10 text-muted-foreground max-w-xl">
                Napisz lub zadzwoń — pomogę Ci wybrać usługę, która najlepiej odpowiada Twoim
                potrzebom i budżetowi.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <CTAButton href="/kontakt" size="lg">
                  Napisz do mnie
                </CTAButton>
                <a
                  href="tel:+48534214398"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-semibold transition-all hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Zadzwoń do Jana Chmielewskiego: +48 534 214 398"
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
