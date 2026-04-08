import type { Metadata } from "next"
import Link from "next/link"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { Container } from "@/components/layout/Container"
import {
  BreadcrumbSchema,
  AggregateRatingSchema,
  ReviewSchema,
} from "@/components/seo/JsonLd"
import { testimonials, aggregateStats } from "@/lib/data/testimonials"
import {
  Star,
  Users,
  TrendDown,
  Barbell,
  ArrowRight,
  Quotes,
} from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "Opinie Klientów — Jan Chmielewski | Trener Personalny",
  description:
    "Opinie i recenzje klientów Jana Chmielewskiego. 200+ zadowolonych klientów, średnia ocena 4.9/5. Diety online, plany treningowe, prowadzenie online i treningi personalne.",
  keywords: [
    "Jan Chmielewski opinie",
    "trener personalny opinie",
    "dieta online opinie",
    "prowadzenie online opinie",
    "trener Chełmża opinie",
  ],
  openGraph: {
    title: "Opinie Klientów — Jan Chmielewski",
    description:
      "200+ zadowolonych klientów, średnia ocena 4.9/5. Zobacz co mówią klienci o dietach, planach treningowych i prowadzeniu online.",
  },
  alternates: { canonical: "https://jantrenerchmielewski.pl/opinie" },
}

const stats = [
  { icon: Users, value: aggregateStats.totalClients, label: "zadowolonych klientów" },
  { icon: Star, value: aggregateStats.ratingValue, label: "średnia ocena" },
  { icon: TrendDown, value: aggregateStats.avgFatLoss, label: "średnia utrata tkanki tłuszczowej (3 mies.)" },
  { icon: Barbell, value: aggregateStats.avgMuscleGain, label: "średni przyrost masy (6 mies.)" },
]

export default function OpiniePage() {
  return (
    <LenisProvider>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Opinie", url: "/opinie" },
        ]}
      />
      <AggregateRatingSchema
        ratingValue={aggregateStats.ratingValue}
        reviewCount={aggregateStats.reviewCount}
      />
      <ReviewSchema
        itemName="Usługi fitness — Jan Chmielewski"
        reviews={testimonials.map((t) => ({
          author: t.name,
          rating: t.rating,
          text: t.quote,
          date: t.date,
        }))}
      />

      <Navbar />
      <main>
        {/* Hero */}
        <section className="pb-16 pt-32 section-glow">
          <Container>
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="text-label mb-4 block">OPINIE KLIENTÓW</span>
                <h1
                  className="text-display-sm mb-6"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
                >
                  Co mówią moi{" "}
                  <span className="text-gradient-cyan">klienci</span>
                </h1>
                <p className="text-body-lg text-muted-foreground">
                  Ponad 200 osób zaufało mi w drodze do lepszej formy. Oto ich
                  historie.
                </p>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* Stats */}
        <section className="pb-16">
          <Container>
            <ScrollReveal>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {stats.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-6 text-center"
                    >
                      <Icon size={28} weight="duotone" className="text-primary" />
                      <span className="font-mono text-3xl font-bold tabular-nums">
                        {stat.value}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {stat.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* Testimonials Grid */}
        <section className="pb-24">
          <Container>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <ScrollReveal key={t.name} delay={i * 0.05}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                    {/* Header */}
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <p className="font-semibold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {t.city} · {t.service}
                        </p>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star
                            key={j}
                            size={14}
                            weight="fill"
                            className="text-amber-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Result badge */}
                    <div className="mb-4 inline-flex self-start rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                      {t.result}
                    </div>

                    {/* Quote */}
                    <div className="relative flex-1">
                      <Quotes
                        size={24}
                        weight="fill"
                        className="absolute -left-1 -top-1 text-primary/20"
                      />
                      <p className="pl-6 text-sm leading-relaxed text-muted-foreground">
                        {t.quote}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="pb-28 section-glow-bottom">
          <Container>
            <ScrollReveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2
                  className="text-display-sm mb-4"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  Dołącz do grona zadowolonych klientów
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Pierwsze konsultacje są bezpłatne. Napisz do mnie i zacznijmy
                  Twoją transformację.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/kontakt"
                    className="glow-cyan inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Zacznij transformację
                    <ArrowRight size={20} weight="bold" />
                  </Link>
                  <Link
                    href="/cennik"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-lg font-medium transition-all hover:bg-secondary"
                  >
                    Zobacz cennik
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      </main>
      <Footer />
    </LenisProvider>
  )
}
