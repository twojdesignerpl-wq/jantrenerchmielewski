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
  ForkKnife,
  Barbell,
  Clock,
  ChartLineUp,
  PencilLine,
  SmileyWink,
  CheckCircle,
  XCircle,
} from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "Prowadzenie Online — Kompleksowe wsparcie fitness",
  description:
    "Kompleksowe prowadzenie online: spersonalizowana dieta + plan treningowy + cotygodniowe raporty + dostęp 24/7. Od 399 zł/miesiąc. Jan Chmielewski — Magister Fizjoterapii, 8 lat doświadczenia.",
  keywords: [
    "prowadzenie online",
    "trener online",
    "dieta i trening online",
    "coaching fitness",
    "indywidualne prowadzenie",
    "Jan Chmielewski prowadzenie",
  ],
  openGraph: {
    title: "Prowadzenie Online — Kompleksowe wsparcie | Jan Chmielewski",
    description:
      "Dieta + trening + cotygodniowe raporty + kontakt 24/7. Kompleksowe prowadzenie od 399 zł/miesiąc.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Prowadzenie online Jan Chmielewski" }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://jantrenerchmielewski.pl/prowadzenie-online" },
}

const features = [
  {
    icon: ForkKnife,
    title: "Spersonalizowana dieta",
    description: "Plan żywieniowy dostosowany do Twojego metabolizmu, celów i preferencji smakowych.",
  },
  {
    icon: Barbell,
    title: "Indywidualny plan treningowy",
    description: "Program treningowy z progresją, notacją i wskazówkami technicznymi.",
  },
  {
    icon: Clock,
    title: "Dostęp 24/7",
    description: "Piszesz kiedy potrzebujesz — odpowiadam w ciągu 24 godzin, 7 dni w tygodniu.",
  },
  {
    icon: ChartLineUp,
    title: "Cotygodniowe raporty",
    description: "Co tydzień analizujemy postępy, wagę, zdjęcia i samopoczucie. Dostosowujemy plan.",
  },
  {
    icon: PencilLine,
    title: "Korekty i sugestie",
    description: "Bieżące modyfikacje diety i treningu na podstawie Twoich wyników i feedbacku.",
  },
  {
    icon: SmileyWink,
    title: "Motywacja i support",
    description: "Nie jesteś sam. Jestem obok na każdym etapie — sukcesach i trudniejszych momentach.",
  },
]

const pricingTiers = [
  {
    title: "1 miesiąc",
    price: "399 zł",
    period: "/ miesiąc",
    features: [
      "Spersonalizowana dieta",
      "Plan treningowy",
      "Kontakt przez 30 dni",
      "1 analiza postępów",
      "Korekty planu",
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
      "Plan treningowy",
      "Kontakt przez 90 dni",
      "Cotygodniowe raporty",
      "Korekty planu",
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
      "Plan treningowy",
      "Kontakt przez 180 dni",
      "Cotygodniowe raporty",
      "Korekty planu",
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
      "Plan treningowy",
      "Kontakt przez 365 dni",
      "Cotygodniowe raporty",
      "Korekty planu",
      "Priorytetowe odpowiedzi",
      "Kompleksowa transformacja",
      "Oszczędzasz 989 zł",
    ],
    href: "/kontakt?service=prowadzenie",
    highlighted: false,
    ctaLabel: "Zacznij współpracę",
  },
]

const comparisonRows: {
  feature: string
  single: boolean
  online: boolean
}[] = [
  { feature: "Spersonalizowana dieta", single: false, online: true },
  { feature: "Indywidualny plan treningowy", single: true, online: true },
  { feature: "Cotygodniowe raporty postępów", single: false, online: true },
  { feature: "Bieżące korekty planu", single: false, online: true },
  { feature: "Kontakt 24/7", single: false, online: true },
  { feature: "Analiza pomiarów i zdjęć", single: false, online: true },
  { feature: "Motywacja i wsparcie", single: false, online: true },
  { feature: "Wskazówki suplementacyjne", single: true, online: true },
]

const faqItems = [
  {
    question: "Czym różni się prowadzenie online od jednorazowego planu?",
    answer:
      "Jednorazowy plan (dieta lub trening) to narzędzie. Prowadzenie online to proces — jestem z Tobą każdego tygodnia, analizuję postępy, dostosowuję plan i motywuję. Większość ludzi potrzebuje właśnie tego: nie pliku PDF, ale kogoś, kto trzyma ich za słowo.",
  },
  {
    question: "Jak wygląda kontakt w trakcie prowadzenia?",
    answer:
      "Głównie przez wiadomości (Messenger, WhatsApp lub e-mail — do wyboru). Co tydzień przesyłasz mi zdjęcia, wagę i jak poszedł tydzień. Ja analizuję i odpowiadam z feedbackiem. Możesz też pisać z pytaniami na bieżąco — odpowiadam w ciągu 24 godzin.",
  },
  {
    question: "Czy mogę zacząć od krótszego pakietu i przedłużyć?",
    answer:
      "Oczywiście. Wielu klientów zaczyna od miesiąca, żeby zobaczyć jak to działa, a potem przechodzi na dłuższy pakiet. Przy przedłużeniu stosuję cenę pakietową.",
  },
  {
    question: "Czy prowadzenie online sprawdzi się przy mojej diecie eliminacyjnej?",
    answer:
      "Tak. Pracuję z osobami na diecie wegetariańskiej, wegańskiej, bezglutenowej, bezlaktozowej i innymi wariantami eliminacyjnymi. Podaj swoje wymagania w kwestionariuszu — dostosuję wszystko.",
  },
  {
    question: "Co jeśli w trakcie prowadzenia wyjeżdżam lub mam gorszy tydzień?",
    answer:
      "Życie się zdarza — właśnie dlatego potrzebujesz kogoś obok. Jeśli wyjeżdżasz, dostosujemy plan do dostępnych opcji. Jeśli masz gorszy tydzień — porozmawiamy, co poszło nie tak i jak to naprawić. Nie oczekuję perfekcji, oczekuję szczerości.",
  },
]

export default function ProwadzenieOnlinePage() {
  return (
    <LenisProvider>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Prowadzenie Online", url: "/prowadzenie-online" },
        ]}
      />
      <ServicePageSchema
        name="Prowadzenie Online"
        description="Kompleksowe prowadzenie online: spersonalizowana dieta + plan treningowy + cotygodniowe raporty + kontakt 24/7."
        price="399"
        url="/prowadzenie-online"
      />
      <FAQSchema questions={faqItems} />

      <Navbar />

      <main className="min-h-[100dvh]">
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div
            className="pointer-events-none absolute -top-60 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full blur-[140px] opacity-20"
            style={{ background: "var(--cyan)" }}
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <ScrollReveal delay={0}>
                <p className="text-label mb-4" style={{ color: "var(--cyan)" }}>
                  Flagowa usługa — kompleksowe wsparcie
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-display-sm mb-6 text-[clamp(2.5rem,5vw,4.5rem)]">
                  Nie kupujesz planu.{" "}
                  <span className="text-gradient-cyan">Kupujesz wyniki.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-body-lg mx-auto mb-10 text-muted-foreground max-w-2xl">
                  Prowadzenie online to więcej niż dieta i trening. To cotygodniowe raporty,
                  bieżące korekty i ktoś, kto rzeczywiście trzyma Cię za słowo. Przez cały czas
                  trwania współpracy.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <CTAButton href="/kontakt?service=prowadzenie" size="lg">
                    Zacznij współpracę
                  </CTAButton>
                  <CTAButton href="#cennik" variant="secondary">
                    Zobacz pakiety cenowe
                  </CTAButton>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="mt-12 flex flex-wrap justify-center gap-10">
                  {[
                    { value: "200+", label: "klientów pod opieką" },
                    { value: "8 lat", label: "doświadczenia" },
                    { value: "24/7", label: "kontakt" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-mono-metric text-3xl font-bold text-gradient-cyan">
                        {stat.value}
                      </p>
                      <p className="text-label mt-1">{stat.label}</p>
                    </div>
                  ))}
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
                  Co dostajesz
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Wszystko w jednym pakiecie
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
              {features.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 0.07} className="h-full flex">
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

        {/* ===== COMPARISON TABLE ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Porównanie
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Prowadzenie vs jednorazowy plan
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border-glow">
                <div
                  className="grid grid-cols-3 px-6 py-4 text-sm font-semibold"
                  style={{ background: "var(--surface-elevated)" }}
                >
                  <span className="text-muted-foreground">Funkcja</span>
                  <span className="text-center text-muted-foreground">Jednorazowy plan</span>
                  <span className="text-center" style={{ color: "var(--cyan)" }}>
                    Prowadzenie online
                  </span>
                </div>
                {comparisonRows.map((row, i) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-3 items-center px-6 py-3.5 text-sm border-t border-border"
                    style={{
                      background: i % 2 === 0 ? "var(--card)" : "var(--background)",
                    }}
                  >
                    <span className="text-muted-foreground">{row.feature}</span>
                    <span className="flex justify-center">
                      {row.single ? (
                        <CheckCircle
                          className="size-5"
                          style={{ color: "var(--cyan)" }}
                          weight="fill"
                          aria-label="Tak"
                        />
                      ) : (
                        <XCircle
                          className="size-5 opacity-30"
                          weight="fill"
                          aria-label="Nie"
                        />
                      )}
                    </span>
                    <span className="flex justify-center">
                      {row.online ? (
                        <CheckCircle
                          className="size-5"
                          style={{ color: "var(--cyan)" }}
                          weight="fill"
                          aria-label="Tak"
                        />
                      ) : (
                        <XCircle
                          className="size-5 opacity-30"
                          weight="fill"
                          aria-label="Nie"
                        />
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== PRICING ===== */}
        <section id="cennik" className="py-20 section-glow" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Pakiety
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Wybierz czas współpracy
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  Im dłuższa współpraca, tym większe oszczędności i głębsza transformacja.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 items-stretch">
              {pricingTiers.map((tier, i) => (
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

            <ScrollReveal delay={0.2}>
              <p className="mt-8 text-center text-sm text-muted-foreground">
                Nie wiesz, który pakiet wybrać?{" "}
                <a
                  href="tel:+48534214398"
                  className="underline hover:text-foreground transition-colors"
                  aria-label="Zadzwoń do Jana Chmielewskiego"
                >
                  Zadzwoń — +48 534 214 398
                </a>{" "}
                — pomogę Ci zdecydować.
              </p>
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
                Gotowy na prawdziwą zmianę?
              </p>
              <h2 className="text-display-sm mb-6 text-3xl md:text-5xl">
                Zacznij prowadzenie online już dziś
              </h2>
              <p className="text-body-lg mx-auto mb-10 text-muted-foreground max-w-xl">
                Skontaktuj się ze mną — omówimy Twoje cele i wybierzemy odpowiedni pakiet.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <CTAButton href="/kontakt?service=prowadzenie" size="lg">
                  Napisz do mnie
                </CTAButton>
                <CTAButton href="/cennik" variant="secondary">
                  Porównaj wszystkie usługi
                </CTAButton>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </LenisProvider>
  )
}
