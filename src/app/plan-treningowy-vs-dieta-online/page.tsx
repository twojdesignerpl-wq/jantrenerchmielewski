import type { Metadata } from "next"
import Link from "next/link"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { CTAButton } from "@/components/shared/CTAButton"
import { ComparisonTable } from "@/components/shared/ComparisonTable"
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/JsonLd"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "Plan Treningowy vs Dieta Online — Co wybrać?",
  description:
    "Porównanie planu treningowego (149 zł) i diety online (199 zł). Sprawdź różnice i wybierz usługę dopasowaną do swoich celów. Jan Chmielewski — Trener Personalny i Dietetyk.",
  keywords: [
    "plan treningowy vs dieta online",
    "trening czy dieta",
    "porównanie plan treningowy dieta",
    "Jan Chmielewski usługi",
    "co wybrać trening czy dietę",
  ],
  openGraph: {
    title: "Plan Treningowy vs Dieta Online — Co wybrać? | Jan Chmielewski",
    description:
      "Porównanie planu treningowego (149 zł) i diety online (199 zł). Która usługa lepiej pasuje do Twoich celów?",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Porównanie usług Jan Chmielewski" }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://jantrenerchmielewski.pl/plan-treningowy-vs-dieta-online",
  },
}

const comparisonFeatures = [
  { name: "Indywidualny program", values: [true, true] },
  { name: "Periodyzacja / Analiza metabolizmu", values: [true, true] },
  { name: "Notacja ćwiczeń / Lista zakupów", values: [true, true] },
  { name: "Progresja obciążeń", values: [true, false] },
  { name: "Plan żywieniowy", values: [false, true] },
  { name: "Wsparcie techniczne online", values: [true, true] },
  { name: "Suplementacja", values: [true, false] },
  { name: "Makroskładniki", values: [false, true] },
  { name: "Czas trwania", values: ["8 tygodni", "4 tygodnie"] as (boolean | string)[] },
]

const comparisonServices = [
  { name: "Plan Treningowy", price: "149 zł", href: "/plan-treningowy" },
  { name: "Dieta Online", price: "199 zł", href: "/dieta-online" },
]

const faqItems = [
  {
    question: "Czy lepiej zacząć od planu treningowego czy diety?",
    answer:
      "To zależy od Twojego celu. Jeśli chcesz schudnąć — dieta da szybsze efekty. Jeśli chcesz zbudować masę lub poprawić siłę — plan treningowy będzie lepszym startem. W obu przypadkach możesz dołożyć drugą usługę później.",
  },
  {
    question: "Czy kupienie obu usług osobno jest tańsze niż prowadzenie online?",
    answer:
      "Plan treningowy (149 zł) + dieta (199 zł) = 348 zł jednorazowo. Prowadzenie online (399 zł/msc) kosztuje więcej, ale obejmuje stały kontakt, cotygodniowe raporty, korekty planu i wsparcie motywacyjne. To zupełnie inny poziom opieki.",
  },
  {
    question: "Czy plan treningowy zawiera wskazówki żywieniowe?",
    answer:
      "Plan treningowy zawiera wskazówki suplementacyjne, ale nie obejmuje pełnego planu żywieniowego z kalkulacją kaloryczną i jadłospisem. Do tego potrzebujesz diety online lub prowadzenia.",
  },
  {
    question: "Na ile wystarczy plan treningowy?",
    answer:
      "Plan treningowy jest zaprojektowany na 8 tygodni z progresją obciążeń. Po tym okresie możesz zamówić nowy plan lub przejść na prowadzenie online z bieżącymi modyfikacjami.",
  },
  {
    question: "Czy mogę kupić oba produkty jednocześnie?",
    answer:
      "Oczywiście. Możesz zamówić plan treningowy i dietę osobno, lub od razu wybrać prowadzenie online, które zawiera oba elementy plus stałą opiekę trenera.",
  },
]

export default function PlanVsDietaPage() {
  return (
    <LenisProvider>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Plan Treningowy vs Dieta Online", url: "/plan-treningowy-vs-dieta-online" },
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
                Porównanie usług
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-display-sm mb-6 text-[clamp(2.5rem,5vw,4.5rem)]">
                Plan Treningowy vs{" "}
                <span className="text-gradient-cyan">Dieta Online</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-body-lg mx-auto mb-10 text-muted-foreground max-w-2xl">
                Dwa produkty, dwa różne cele. Sprawdź, który lepiej odpowiada Twoim potrzebom
                — lub połącz oba w ramach prowadzenia online.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== COMPARISON TABLE ===== */}
        <section className="py-20" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <ComparisonTable
                features={comparisonFeatures}
                services={comparisonServices}
              />
            </ScrollReveal>
          </div>
        </section>

        {/* ===== SEO CONTENT ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="prose prose-invert mx-auto max-w-none">
                <h2 className="text-display-sm text-2xl md:text-3xl mb-6">
                  Plan treningowy czy dieta — co jest ważniejsze?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Plan treningowy za 149 zł</strong> to
                  8-tygodniowy program ćwiczeń z pełną notacją, progresją obciążeń i wskazówkami
                  suplementacyjnymi. Idealny dla osób, które chcą trenować efektywnie, ale
                  samodzielnie zarządzają swoim odżywianiem.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Dieta online za 199 zł</strong> to
                  4-tygodniowy plan żywieniowy z analizą metabolizmu, kalkulacją kaloryczną i listą
                  zakupów. Najlepszy wybór, gdy Twoim priorytetem jest utrata wagi lub poprawa
                  kompozycji ciała.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Najlepsze efekty daje połączenie obu elementów. Jeśli chcesz mieć plan treningowy
                  i dietę w jednym pakiecie ze stałą opieką — sprawdź{" "}
                  <Link href="/prowadzenie-online" className="text-primary hover:underline">
                    prowadzenie online
                  </Link>
                  .
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== RECOMMENDATION ===== */}
        <section className="py-16" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                Rekomendacja
              </p>
              <h2 className="text-display-sm text-2xl md:text-3xl mb-4">
                Chcesz jedno i drugie?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Prowadzenie online łączy plan treningowy, dietę, cotygodniowe raporty i stały
                kontakt z trenerem — wszystko w jednym pakiecie od 399 zł/miesiąc.
              </p>
              <Link
                href="/prowadzenie-online"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Sprawdź prowadzenie online
                <ArrowRight className="size-4" weight="bold" aria-hidden="true" />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Najczęstsze pytania
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Trening vs dieta — FAQ
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
                Nie wiesz co wybrać?
              </p>
              <h2 className="text-display-sm mb-6 text-3xl md:text-5xl">
                Napisz do mnie
              </h2>
              <p className="text-body-lg mx-auto mb-10 text-muted-foreground max-w-xl">
                Porozmawiajmy o Twoich celach — pomogę Ci wybrać usługę, która przyniesie
                najlepsze rezultaty.
              </p>
              <CTAButton href="/kontakt" size="lg">
                Napisz do mnie
              </CTAButton>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </LenisProvider>
  )
}
