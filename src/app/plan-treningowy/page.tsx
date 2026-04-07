import type { Metadata } from "next"
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
  Barbell,
  Notepad,
  TrendUp,
  VideoCamera,
  Flask,
  Target,
} from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "Plan Treningowy 8-tygodniowy — 149 zł",
  description:
    "Indywidualny plan treningowy 8-tygodniowy dopasowany do Twojego poziomu i celów. Progresja treningowa, technika wykonania, wskazówki suplementacyjne. Jan Chmielewski — Finalista Mistrzostw Polski.",
  keywords: [
    "plan treningowy online",
    "program treningowy",
    "plan ćwiczeń",
    "trener online",
    "kulturystyka plan treningowy",
    "Jan Chmielewski plan treningowy",
  ],
  openGraph: {
    title: "Plan Treningowy 8-tygodniowy — 149 zł | Jan Chmielewski",
    description:
      "Indywidualny plan treningowy z progresją, techniką i wskazówkami suplementacyjnymi. Finalista Mistrzostw Polski w kulturystyce.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Plan treningowy Jan Chmielewski" }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://jantrenerchmielewski.pl/plan-treningowy" },
}

const features = [
  {
    icon: Target,
    title: "Program na Twój poziom",
    description:
      "Niezależnie czy jesteś początkujący, średniozaawansowany czy zaawansowany — plan jest skalowany pod Twoje możliwości i sprzęt.",
  },
  {
    icon: Notepad,
    title: "Notacja każdego ćwiczenia",
    description:
      "Każde ćwiczenie opisane z seriami, powtórzeniami, ciężarem startowym i wskazówkami dotyczącymi wykonania.",
  },
  {
    icon: TrendUp,
    title: "Progresja treningowa",
    description:
      "Plan zaplanowany z tygodniową progresją obciążenia — Twoje ciało będzie stale się adaptować i rosnąć.",
  },
  {
    icon: VideoCamera,
    title: "Technika wykonania",
    description:
      "Linki lub opisy do prawidłowej techniki każdego ćwiczenia, żebyś trenował bezpiecznie i efektywnie.",
  },
  {
    icon: Flask,
    title: "Wskazówki suplementacyjne",
    description:
      "Praktyczne porady dotyczące suplementacji — co, kiedy i w jakiej ilości, dopasowane do Twojego celu.",
  },
  {
    icon: Barbell,
    title: "Dostosowany sprzęt",
    description:
      "Plan pod Twoje warunki — siłownia, dom z hantlami lub trening własną masą ciała. Zawsze efektywny.",
  },
]

const steps = [
  {
    number: "01",
    title: "Kwestionariusz",
    description:
      "Wypełniasz formularz: poziom zaawansowania, dostępny sprzęt, cele, dyspozycyjność w tygodniu.",
  },
  {
    number: "02",
    title: "Tworzenie planu",
    description:
      "W ciągu 48–72 godzin przygotowuję spersonalizowany 8-tygodniowy plan z pełną notacją ćwiczeń.",
  },
  {
    number: "03",
    title: "Realizacja + wsparcie",
    description:
      "Otrzymujesz PDF z planem. Przez miesiąc jesteś pod moją opieką — możesz pytać i zgłaszać problemy.",
  },
]

const faqItems = [
  {
    question: "Dla kogo jest ten plan treningowy?",
    answer:
      "Plany tworzę zarówno dla początkujących (pierwsze miesiące na siłowni), jak i dla osób średniozaawansowanych i zaawansowanych. Kluczowe jest to, że każdy plan jest indywidualny — dostosowany do Twojego poziomu, celów i dostępnego sprzętu.",
  },
  {
    question: "Czy plan zadziała bez chodzenia na siłownię?",
    answer:
      "Tak. Tworzę plany pod różne warunki: siłownię z pełnym wyposażeniem, siłownię domową z hantlami i drążkiem, a także plany oparte wyłącznie na masie własnego ciała. Podaj dostępny sprzęt w kwestionariuszu.",
  },
  {
    question: "Ile dni w tygodniu powinienem trenować?",
    answer:
      "W kwestionariuszu pytam o Twoją dostępność. Tworzę plany 3-, 4- i 5-dniowe. Ważniejsza jest regularność niż liczba dni — plan jest tak zbudowany, żebyś mógł go realnie realizować.",
  },
  {
    question: "Czy będę mieć kontakt z Tobą po zakupie?",
    answer:
      "Tak — przez 30 dni od dostarczenia planu możesz pisać z pytaniami dotyczącymi techniki, progresji lub modyfikacji. Odpowiadam w ciągu 24 godzin roboczych.",
  },
  {
    question: "Co jeśli plan nie będzie odpowiedni dla mnie?",
    answer:
      "Zanim przygotowuję plan, dokładnie analizuję Twój kwestionariusz. Jeśli po otrzymaniu planu coś nie będzie pasować — modyfikuję. Chcę, żebyś trenował i osiągał wyniki, nie żebyś miał plik PDF leżący bez użytku.",
  },
]

export default function PlanTreningowy() {
  return (
    <LenisProvider>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Plan Treningowy", url: "/plan-treningowy" },
        ]}
      />
      <ServicePageSchema
        name="Plan Treningowy 8-tygodniowy"
        description="Indywidualny program treningowy 8-tygodniowy z progresją, notacją ćwiczeń i wskazówkami suplementacyjnymi."
        price="149"
        url="/plan-treningowy"
      />
      <FAQSchema questions={faqItems} />

      <Navbar />

      <main className="min-h-[100dvh]">
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div
            className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full blur-[120px] opacity-15"
            style={{ background: "var(--cyan)" }}
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <ScrollReveal delay={0}>
                <p className="text-label mb-4" style={{ color: "var(--cyan)" }}>
                  Usługa online — cała Polska
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-display-sm mb-6 text-[clamp(2.5rem,5vw,4.5rem)]">
                  Plan treningowy{" "}
                  <span className="text-gradient-cyan">napisany dla Ciebie.</span>{" "}
                  Nie dla tłumu.
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-body-lg mb-8 text-muted-foreground max-w-2xl">
                  8 tygodni przemyślanej progresji. Każde ćwiczenie, seria i powtórzenie zaplanowane
                  pod Twój poziom, sprzęt i cel. Jako Finalista Mistrzostw Polski w kulturystyce wiem,
                  jak budować efektywne programy.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-4">
                  <CTAButton href="/kontakt?service=plan" size="lg">
                    Zamów plan — 149 zł
                  </CTAButton>
                  <CTAButton href="/prowadzenie-online" variant="secondary">
                    Prowadzenie online (kompleksowo)
                  </CTAButton>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="mt-10 grid grid-cols-3 gap-8 border-t border-border pt-10 max-w-lg">
                  {[
                    { value: "8 tyg", label: "czas programu" },
                    { value: "48h", label: "czas realizacji" },
                    { value: "149 zł", label: "cena" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-mono-metric text-2xl font-bold text-gradient-cyan">
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
        <section className="py-20" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Co zawiera plan
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Wszystko, czego potrzebujesz do treningu
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

        {/* ===== HOW IT WORKS ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Jak to działa
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">Od zamówienia do treningu</h2>
              </div>
            </ScrollReveal>

            <div className="relative grid gap-8 md:grid-cols-3">
              <div
                className="pointer-events-none absolute top-10 left-0 right-0 hidden h-px md:block"
                style={{
                  background:
                    "linear-gradient(to right, transparent, var(--cyan), transparent)",
                  opacity: 0.3,
                }}
                aria-hidden="true"
              />

              {steps.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="mb-6 flex size-20 items-center justify-center rounded-full border-glow glow-cyan"
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
                Gotowy na trening?
              </p>
              <h2 className="text-display-sm mb-6 text-3xl md:text-5xl">
                8 tygodni do lepszej wersji siebie
              </h2>
              <p className="text-body-lg mx-auto mb-10 text-muted-foreground max-w-xl">
                149 zł za plan treningowy, który faktycznie zadziała. Realizacja w 48 godzin.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <CTAButton href="/kontakt?service=plan" size="lg">
                  Zamów plan — 149 zł
                </CTAButton>
                <CTAButton href="/prowadzenie-online" variant="secondary">
                  Kompleksowe prowadzenie
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
