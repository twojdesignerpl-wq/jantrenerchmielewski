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
  title: "Dieta Online vs Prowadzenie Online — Co wybrać?",
  description:
    "Porównanie diety online (199 zł) i prowadzenia online (399 zł/msc). Sprawdź, która usługa lepiej pasuje do Twoich celów. Jan Chmielewski — Trener Personalny i Dietetyk.",
  keywords: [
    "dieta online vs prowadzenie online",
    "porównanie usług fitness",
    "dieta czy prowadzenie",
    "Jan Chmielewski usługi",
    "dietetyk online porównanie",
  ],
  openGraph: {
    title: "Dieta Online vs Prowadzenie Online — Co wybrać? | Jan Chmielewski",
    description:
      "Porównanie diety online (199 zł) i prowadzenia online (399 zł/msc). Która usługa lepiej pasuje do Twoich celów?",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Porównanie usług Jan Chmielewski" }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://jantrenerchmielewski.pl/dieta-online-vs-prowadzenie-online",
  },
}

const comparisonFeatures = [
  { name: "Indywidualny plan żywieniowy", values: [true, true] },
  { name: "Analiza metabolizmu", values: [true, true] },
  { name: "Plan treningowy", values: [false, true] },
  { name: "Cotygodniowe raporty", values: [false, true] },
  { name: "Kontakt 24/7 z trenerem", values: [false, true] },
  { name: "Modyfikacje na bieżąco", values: [false, true] },
  { name: "Lista zakupów", values: [true, true] },
  { name: "Wsparcie motywacyjne", values: [false, true] },
  { name: "Monitorowanie postępów", values: [false, true] },
  { name: "Gwarancja rezultatów", values: [false, true] },
]

const comparisonServices = [
  { name: "Dieta Online", price: "199 zł", href: "/dieta-online" },
  { name: "Prowadzenie Online", price: "399 zł/msc", href: "/prowadzenie-online" },
]

const faqItems = [
  {
    question: "Czym różni się dieta online od prowadzenia online?",
    answer:
      "Dieta online to jednorazowy plan żywieniowy na 4 tygodnie. Prowadzenie online to kompleksowa współpraca obejmująca dietę, plan treningowy, cotygodniowe raporty i stały kontakt z trenerem.",
  },
  {
    question: "Czy mogę zacząć od diety, a potem przejść na prowadzenie?",
    answer:
      "Oczywiście. Wielu klientów zaczyna od samej diety, a po zobaczeniu pierwszych efektów decyduje się na pełne prowadzenie online, żeby przyspieszyć rezultaty.",
  },
  {
    question: "Czy prowadzenie online jest warte dodatkowych pieniędzy?",
    answer:
      "Jeśli potrzebujesz wsparcia motywacyjnego, regularnej kontroli postępów i bieżących korekt — zdecydowanie tak. Prowadzenie online daje statystycznie lepsze rezultaty, bo zapewnia ciągłą opiekę i odpowiedzialność.",
  },
  {
    question: "Ile trwa realizacja diety online?",
    answer:
      "Dietę online przygotowuję w ciągu 48–72 godzin roboczych od zaksięgowania wpłaty i wypełnienia kwestionariusza. Dostarczam ją w formacie PDF na e-mail.",
  },
  {
    question: "Czy w prowadzeniu online mogę zrezygnować w dowolnym momencie?",
    answer:
      "Przy miesięcznym prowadzeniu płacisz za dany miesiąc z góry. Nie ma żadnej umowy długoterminowej — rezygnujesz kiedy chcesz, bez kar i zobowiązań.",
  },
]

export default function DietaVsProwadzeniePage() {
  return (
    <LenisProvider>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Dieta Online vs Prowadzenie Online", url: "/dieta-online-vs-prowadzenie-online" },
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
                Dieta Online vs{" "}
                <span className="text-gradient-cyan">Prowadzenie Online</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-body-lg mx-auto mb-10 text-muted-foreground max-w-2xl">
                Nie wiesz, która usługa lepiej odpowiada Twoim celom? Porównaj obie opcje
                i wybierz tę, która przyniesie Ci najlepsze rezultaty.
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
                highlightIndex={1}
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
                  Kiedy wybrać dietę online, a kiedy prowadzenie?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Dieta online za 199 zł</strong> to doskonały wybór, jeśli
                  wiesz jak trenować, ale potrzebujesz profesjonalnego planu żywieniowego. Otrzymasz
                  spersonalizowany jadłospis na 4 tygodnie z analizą metabolizmu, kalkulacją kaloryczną
                  i listą zakupów. To rozwiązanie jednorazowe — idealne dla osób samodzielnych.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Prowadzenie online od 399 zł/miesiąc</strong> to
                  kompleksowa współpraca. Oprócz diety dostajesz plan treningowy, cotygodniowe raporty
                  postępów, bieżące korekty i stały kontakt ze mną. To opcja dla osób, które chcą
                  maksymalnych rezultatów pod stałą opieką trenera.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Statystycznie klienci korzystający z prowadzenia online osiągają lepsze i trwalsze
                  rezultaty dzięki ciągłej motywacji i regularnym korektom planu. Jeśli nie masz pewności
                  — napisz do mnie, pomogę Ci wybrać.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-20" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Najczęstsze pytania
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Dieta vs prowadzenie — FAQ
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
                Nadal nie wiesz?
              </p>
              <h2 className="text-display-sm mb-6 text-3xl md:text-5xl">
                Porozmawiajmy o Twoich celach
              </h2>
              <p className="text-body-lg mx-auto mb-10 text-muted-foreground max-w-xl">
                Napisz do mnie — pomogę Ci wybrać usługę dopasowaną do Twoich potrzeb, budżetu
                i oczekiwań.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <CTAButton href="/kontakt" size="lg">
                  Napisz do mnie
                </CTAButton>
                <Link
                  href="/cennik"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-semibold transition-all hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Zobacz pełny cennik
                  <ArrowRight className="size-4" weight="bold" aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </LenisProvider>
  )
}
