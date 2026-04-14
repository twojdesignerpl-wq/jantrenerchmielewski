import type { Metadata } from "next"
import Link from "next/link"
import { Star, Users, TrendUp, ArrowRight, Quotes } from "@phosphor-icons/react/dist/ssr"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import {
  BreadcrumbSchema,
  AggregateRatingSchema,
  ReviewSchema,
} from "@/components/seo/JsonLd"
import { testimonials, aggregateStats } from "@/lib/data/testimonials"

export const metadata: Metadata = {
  title: "Efekty klientów — opinie i rezultaty | Jan Chmielewski Trener Personalny",
  description:
    "Realne efekty klientów Jana Chmielowskiego — dieta online, plan treningowy i prowadzenie online. 200+ klientów, 4.9/5 ocena, rzeczywiste transformacje z Chełmży, Torunia i całej Polski.",
  keywords: [
    "trener personalny efekty",
    "dieta online efekty",
    "prowadzenie online rezultaty",
    "Jan Chmielewski opinie",
    "trener personalny opinie",
    "plan treningowy efekty",
  ],
  alternates: {
    canonical: "https://jantrenerchmielewski.pl/efekty",
  },
  openGraph: {
    title: "Efekty klientów | Jan Chmielewski — Trener Personalny",
    description:
      "Realne efekty 200+ klientów — dieta online, plan treningowy, prowadzenie online. Ocena 4.9/5.",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
}

const serviceColors: Record<string, string> = {
  "Prowadzenie Online": "oklch(0.65 0.18 30)",
  "Plan Treningowy": "oklch(0.65 0.18 150)",
  "Dieta Online": "oklch(0.65 0.18 210)",
  "Trening Personalny": "oklch(0.65 0.18 300)",
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Ocena: ${rating} na 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          weight={i < rating ? "fill" : "regular"}
          className="size-4"
          style={{ color: i < rating ? "oklch(0.75 0.18 80)" : "oklch(0.4 0 0)" }}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

const ctaSections: { afterIndex: number; service: string; href: string; color: string; text: string }[] = [
  {
    afterIndex: 1,
    service: "Prowadzenie Online",
    href: "/prowadzenie-online",
    color: "oklch(0.65 0.18 30)",
    text: "Podobne efekty są możliwe przy kompleksowej współpracy — dieta + trening + cotygodniowy kontakt.",
  },
  {
    afterIndex: 4,
    service: "Dieta Online",
    href: "/dieta-online",
    color: "oklch(0.65 0.18 210)",
    text: "Spersonalizowana dieta to inwestycja, która zwraca się już w pierwszym miesiącu.",
  },
  {
    afterIndex: 7,
    service: "Trening Personalny",
    href: "/trening-personalny-chelmza",
    color: "oklch(0.65 0.18 300)",
    text: "Trening pod okiem magistra fizjoterapii — bezpieczny i efektywny od pierwszej sesji.",
  },
]

export default function EfektyPage() {
  const reviewsForSchema = testimonials.map((t) => ({
    author: t.name,
    rating: t.rating,
    text: t.quote,
    date: t.date,
  }))

  return (
    <LenisProvider>
      <AggregateRatingSchema
        ratingValue={aggregateStats.ratingValue}
        reviewCount={aggregateStats.reviewCount}
      />
      <ReviewSchema
        reviews={reviewsForSchema}
        itemName="Jan Chmielewski — Usługi Trenerskie i Dietetyczne"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Efekty", url: "/efekty" },
        ]}
      />

      <Navbar />

      <main>
        {/* Header */}
        <header className="relative pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <nav aria-label="Nawigacja okruszkowa" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <li>
                  <Link href="/" className="transition-colors hover:text-foreground">
                    Strona główna
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground/60" aria-current="page">Efekty</li>
              </ol>
            </nav>

            <div
              className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
              style={{
                background: "oklch(0.65 0.18 210 / 12%)",
                color: "oklch(0.65 0.18 210)",
                border: "1px solid oklch(0.65 0.18 210 / 20%)",
              }}
            >
              Realne rezultaty
            </div>

            <h1 className="font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl">
              Efekty klientów
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Nie publikuję spektakularnych &bdquo;before-after&rdquo; bez kontekstu. Poniżej znajdziesz
              realne opinie klientów z całej Polski — z ich słowami, konkretnymi wynikami i usługami,
              z których korzystali.
            </p>
          </div>
        </header>

        {/* Aggregate stats */}
        <section aria-label="Statystyki ogólne" className="border-y border-border bg-card/50 py-12">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="flex flex-col items-center gap-1 text-center">
                <div className="flex items-center gap-1">
                  <Users weight="duotone" className="size-5" style={{ color: "oklch(0.65 0.18 210)" }} aria-hidden="true" />
                </div>
                <span className="font-heading text-3xl font-extrabold text-foreground">
                  {aggregateStats.totalClients}
                </span>
                <span className="text-xs text-muted-foreground">Klientów</span>
              </div>

              <div className="flex flex-col items-center gap-1 text-center">
                <div className="flex justify-center">
                  <StarRating rating={5} />
                </div>
                <span className="font-heading text-3xl font-extrabold text-foreground">
                  {aggregateStats.ratingValue}/5
                </span>
                <span className="text-xs text-muted-foreground">Średnia ocena</span>
              </div>

              <div className="flex flex-col items-center gap-1 text-center">
                <TrendUp weight="duotone" className="size-5" style={{ color: "oklch(0.65 0.18 150)" }} aria-hidden="true" />
                <span className="font-heading text-3xl font-extrabold text-foreground">
                  {aggregateStats.avgFatLoss}
                </span>
                <span className="text-xs text-muted-foreground">Śr. utrata tłuszczu</span>
              </div>

              <div className="flex flex-col items-center gap-1 text-center">
                <TrendUp weight="duotone" className="size-5" style={{ color: "oklch(0.65 0.18 30)" }} aria-hidden="true" />
                <span className="font-heading text-3xl font-extrabold text-foreground">
                  {aggregateStats.avgMuscleGain}
                </span>
                <span className="text-xs text-muted-foreground">Śr. przyrost mięśni</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section aria-label="Opinie klientów" className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="flex flex-col gap-8">
              {testimonials.map((testimonial, index) => {
                const color = serviceColors[testimonial.service] ?? "oklch(0.65 0.18 210)"
                const cta = ctaSections.find((c) => c.afterIndex === index)

                return (
                  <div key={index}>
                    <article
                      className="rounded-2xl border border-border bg-card p-6 md:p-8"
                      itemScope
                      itemType="https://schema.org/Review"
                    >
                      {/* Header */}
                      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex flex-col gap-1">
                          <div className="flex flex-wrap items-center gap-3">
                            <span
                              className="font-heading text-lg font-bold text-foreground"
                              itemProp="author"
                            >
                              {testimonial.name}
                            </span>
                            <span className="text-sm text-muted-foreground">{testimonial.city}</span>
                          </div>
                          <span
                            className="inline-block w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold"
                            style={{
                              background: color.replace(")", " / 12%)"),
                              color,
                              border: `1px solid ${color.replace(")", " / 20%)")}`,
                            }}
                          >
                            {testimonial.service}
                          </span>
                        </div>

                        <div className="flex flex-col items-start gap-1 sm:items-end">
                          <StarRating rating={testimonial.rating} />
                          <time
                            dateTime={testimonial.date}
                            className="text-xs text-muted-foreground"
                            itemProp="datePublished"
                          >
                            {new Date(testimonial.date).toLocaleDateString("pl-PL", {
                              year: "numeric",
                              month: "long",
                            })}
                          </time>
                        </div>
                      </div>

                      {/* Result highlight */}
                      <div
                        className="mb-4 rounded-xl px-4 py-3"
                        style={{ background: color.replace(")", " / 8%)") }}
                      >
                        <p className="text-sm font-bold" style={{ color }}>
                          Wynik: {testimonial.result}
                        </p>
                      </div>

                      {/* Quote */}
                      <div className="relative">
                        <Quotes
                          weight="fill"
                          className="absolute -top-1 -left-1 size-6 opacity-20"
                          style={{ color }}
                          aria-hidden="true"
                        />
                        <blockquote
                          className="pl-5 text-sm leading-relaxed text-muted-foreground italic"
                          itemProp="reviewBody"
                        >
                          {testimonial.quote}
                        </blockquote>
                      </div>
                    </article>

                    {/* CTA between testimonials */}
                    {cta && (
                      <div
                        className="my-8 flex flex-col items-start gap-4 rounded-2xl border px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
                        style={{
                          borderColor: cta.color.replace(")", " / 30%)"),
                          background: cta.color.replace(")", " / 5%)"),
                        }}
                      >
                        <p className="text-sm text-muted-foreground">{cta.text}</p>
                        <Link
                          href={cta.href}
                          className="inline-flex shrink-0 items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
                          style={{ background: cta.color }}
                        >
                          {cta.service}
                          <ArrowRight weight="bold" className="size-4" aria-hidden="true" />
                        </Link>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-border py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-4 md:px-6 text-center">
            <p
              className="mb-2 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "oklch(0.65 0.18 210)" }}
            >
              Twoja kolej
            </p>
            <h2 className="mb-3 font-heading text-2xl font-bold text-foreground md:text-3xl">
              Dołącz do 200+ zadowolonych klientów
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
              Wybierz usługę, która najlepiej pasuje do Twojego celu i stylu życia.
              Pierwsza rozmowa jest bezpłatna i bez zobowiązań.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {[
                { href: "/dieta-online", label: "Dieta Online", price: "199 zł", color: "oklch(0.65 0.18 210)" },
                { href: "/plan-treningowy", label: "Plan Treningowy", price: "149 zł", color: "oklch(0.65 0.18 150)" },
                { href: "/prowadzenie-online", label: "Prowadzenie Online", price: "od 399 zł", color: "oklch(0.65 0.18 30)" },
                { href: "/trening-personalny-chelmza", label: "Trening Personalny", price: "149 zł/sesja", color: "oklch(0.65 0.18 300)" },
              ].map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-current"
                  style={{ "--hover-border": service.color } as React.CSSProperties}
                >
                  <span className="text-xs font-semibold" style={{ color: service.color }}>
                    {service.price}
                  </span>
                  <span className="text-sm font-bold text-foreground">{service.label}</span>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold text-white"
                style={{ background: "oklch(0.65 0.18 210)" }}
              >
                Skontaktuj się ze mną
                <ArrowRight weight="bold" className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/jak-to-dziala"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Jak to działa?
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </LenisProvider>
  )
}
