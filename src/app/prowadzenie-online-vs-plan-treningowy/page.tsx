import type { Metadata } from "next"
import Link from "next/link"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { Container } from "@/components/layout/Container"
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/JsonLd"
import {
  CheckCircle,
  XCircle,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "Prowadzenie Online vs Plan Treningowy — Co wybrać? | Jan Chmielewski",
  description:
    "Porównanie prowadzenia online (od 399 zł/mies.) z planem treningowym (149 zł). Dowiedz się, która opcja lepiej pasuje do Twoich celów fitness. Szczegółowe zestawienie różnic.",
  keywords: [
    "prowadzenie online vs plan treningowy",
    "trener online czy plan",
    "prowadzenie online czy warto",
    "plan treningowy czy prowadzenie",
  ],
  alternates: { canonical: "https://jantrenerchmielewski.pl/prowadzenie-online-vs-plan-treningowy" },
}

const comparisonRows = [
  { feature: "Indywidualny plan treningowy", plan: true, coaching: true },
  { feature: "Indywidualna dieta", plan: false, coaching: true },
  { feature: "Cotygodniowe korekty i optymalizacja", plan: false, coaching: true },
  { feature: "Dostęp do trenera 24/7", plan: false, coaching: true },
  { feature: "Cotygodniowe raporty postępów", plan: false, coaching: true },
  { feature: "Progresja treningowa tydzień po tygodniu", plan: true, coaching: true },
  { feature: "Notacja ćwiczeń z opisem techniki", plan: true, coaching: true },
  { feature: "Motywacja i accountability", plan: false, coaching: true },
  { feature: "Dopasowanie do sprzętu domowego / siłowni", plan: true, coaching: true },
  { feature: "Reagowanie na kontuzje i ograniczenia", plan: false, coaching: true },
]

const faqItems = [
  {
    question: "Czy mogę zacząć od planu treningowego i później przejść na prowadzenie?",
    answer: "Tak, to bardzo częsta ścieżka. Wielu klientów zaczyna od planu treningowego, żeby sprawdzić moje podejście, a potem przechodzi na prowadzenie online, gdy chcą szybszych i bardziej kompleksowych efektów.",
  },
  {
    question: "Czy plan treningowy wystarczy do schudnięcia?",
    answer: "Plan treningowy to świetny start, ale do redukcji wagi kluczowa jest dieta. Jeśli Twoim celem jest schudnięcie, prowadzenie online (które łączy dietę i trening) da znacznie lepsze efekty niż sam plan treningowy.",
  },
  {
    question: "Ile kosztuje prowadzenie online w porównaniu do planu treningowego?",
    answer: "Plan treningowy to jednorazowy koszt 149 zł za 8 tygodni. Prowadzenie online zaczyna się od 399 zł/miesiąc, ale obejmuje dietę, trening, cotygodniowe raporty i stały dostęp do trenera. W dłuższej perspektywie prowadzenie daje znacznie więcej wartości za złotówkę.",
  },
  {
    question: "Dla kogo lepszy jest plan treningowy?",
    answer: "Plan treningowy jest idealny dla osób, które mają już doświadczenie na siłowni, znają podstawy żywienia i potrzebują struktury treningowej — ale nie wymagają stałego nadzoru i korekty diety.",
  },
  {
    question: "Dla kogo lepsze jest prowadzenie online?",
    answer: "Prowadzenie online jest dla osób, które chcą kompleksowej transformacji: schudnąć, zbudować masę lub zmienić sylwetkę. Jeśli potrzebujesz motywacji, rozliczalności i stałego wsparcia — to opcja dla Ciebie.",
  },
]

export default function ComparisonPage() {
  return (
    <LenisProvider>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Prowadzenie Online vs Plan Treningowy", url: "/prowadzenie-online-vs-plan-treningowy" },
        ]}
      />
      <FAQSchema questions={faqItems} />

      <Navbar />
      <main>
        {/* Hero */}
        <section className="pb-16 pt-32 section-glow">
          <Container>
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="text-label mb-4 block">PORÓWNANIE</span>
                <h1
                  className="text-display-sm mb-6"
                  style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                >
                  Prowadzenie Online vs{" "}
                  <span className="text-gradient-cyan">Plan Treningowy</span>
                </h1>
                <p className="text-body-lg text-muted-foreground">
                  Nie wiesz, co wybrać? Porównaj obie opcje i zdecyduj, która
                  najlepiej odpowiada Twoim celom i budżetowi.
                </p>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* Comparison Table */}
        <section className="pb-20">
          <Container>
            <ScrollReveal>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 py-4 text-left text-sm font-medium text-muted-foreground">
                        Funkcja
                      </th>
                      <th className="px-4 py-4 text-center">
                        <div className="rounded-xl border border-border bg-card px-4 py-3">
                          <p className="text-sm font-semibold">Plan Treningowy</p>
                          <p className="font-mono text-lg font-bold">149 zł</p>
                          <p className="text-xs text-muted-foreground">jednorazowo</p>
                        </div>
                      </th>
                      <th className="px-4 py-4 text-center">
                        <div className="rounded-xl border border-primary/30 bg-primary/5 px-4 py-3">
                          <p className="text-sm font-semibold text-primary">Prowadzenie Online</p>
                          <p className="font-mono text-lg font-bold">od 399 zł</p>
                          <p className="text-xs text-muted-foreground">/ miesiąc</p>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.feature} className="border-t border-border">
                        <td className="px-4 py-3.5 text-sm">{row.feature}</td>
                        <td className="px-4 py-3.5 text-center">
                          {row.plan ? (
                            <CheckCircle size={20} weight="fill" className="mx-auto text-primary" />
                          ) : (
                            <XCircle size={20} weight="fill" className="mx-auto text-muted-foreground/30" />
                          )}
                        </td>
                        <td className="px-4 py-3.5 text-center">
                          {row.coaching ? (
                            <CheckCircle size={20} weight="fill" className="mx-auto text-primary" />
                          ) : (
                            <XCircle size={20} weight="fill" className="mx-auto text-muted-foreground/30" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* Recommendation */}
        <section className="pb-20">
          <Container>
            <div className="grid gap-6 md:grid-cols-2">
              <ScrollReveal delay={0}>
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h2 className="mb-4 text-xl font-bold">Wybierz Plan Treningowy, jeśli:</h2>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} weight="fill" className="mt-0.5 shrink-0 text-primary" />
                      Masz doświadczenie na siłowni i znasz podstawy
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} weight="fill" className="mt-0.5 shrink-0 text-primary" />
                      Potrzebujesz struktury treningowej, ale nie diety
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} weight="fill" className="mt-0.5 shrink-0 text-primary" />
                      Preferujesz jednorazowy koszt bez abonamentu
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} weight="fill" className="mt-0.5 shrink-0 text-primary" />
                      Jesteś zdyscyplinowany i nie potrzebujesz stałego nadzoru
                    </li>
                  </ul>
                  <Link
                    href="/plan-treningowy"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-medium transition-all hover:bg-secondary"
                  >
                    Zobacz Plan Treningowy
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                  <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Polecane
                  </div>
                  <h2 className="mb-4 text-xl font-bold">Wybierz Prowadzenie Online, jeśli:</h2>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} weight="fill" className="mt-0.5 shrink-0 text-primary" />
                      Chcesz schudnąć lub zmienić sylwetkę kompleksowo
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} weight="fill" className="mt-0.5 shrink-0 text-primary" />
                      Potrzebujesz zarówno diety, jak i treningu
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} weight="fill" className="mt-0.5 shrink-0 text-primary" />
                      Cenisz stały kontakt z trenerem i cotygodniowe korekty
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} weight="fill" className="mt-0.5 shrink-0 text-primary" />
                      Chcesz najszybszych i najtrwalszych efektów
                    </li>
                  </ul>
                  <Link
                    href="/prowadzenie-online"
                    className="glow-cyan mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Zobacz Prowadzenie Online
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="pb-20">
          <Container>
            <ScrollReveal>
              <h2 className="text-display-sm mb-8 text-center text-2xl md:text-3xl">
                Najczęściej zadawane pytania
              </h2>
              <div className="mx-auto max-w-3xl space-y-4">
                {faqItems.map((faq) => (
                  <details key={faq.question} className="group rounded-xl border border-border bg-card">
                    <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-medium">
                      {faq.question}
                      <ArrowRight size={16} className="shrink-0 rotate-90 transition-transform group-open:rotate-[270deg]" />
                    </summary>
                    <div className="px-6 pb-4 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* CTA */}
        <section className="pb-28 section-glow-bottom">
          <Container>
            <ScrollReveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-display-sm mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  Nadal nie wiesz co wybrać?
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Napisz do mnie — pomogę dopasować usługę do Twoich celów i budżetu. Pierwsza konsultacja jest bezpłatna.
                </p>
                <Link
                  href="/kontakt"
                  className="glow-cyan inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Bezpłatna konsultacja
                  <ArrowRight size={20} weight="bold" />
                </Link>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      </main>
      <Footer />
    </LenisProvider>
  )
}
