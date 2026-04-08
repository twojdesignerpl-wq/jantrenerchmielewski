import type { Metadata } from "next"
import Image from "next/image"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { CTAButton } from "@/components/shared/CTAButton"
import { BreadcrumbSchema, PersonSchema } from "@/components/seo/JsonLd"
import { GraduationCap, Trophy, Users, Calendar, Barbell, Heart } from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "O Mnie — Jan Chmielewski",
  description:
    "Jan Chmielewski — Magister Fizjoterapii, Finalista Mistrzostw Polski w kulturystyce, 8 lat doświadczenia, 200+ zadowolonych klientów. Poznaj moją historię i filozofię treningu.",
  keywords: [
    "Jan Chmielewski trener",
    "magister fizjoterapii trener",
    "finalista mistrzostw polski kulturystyka",
    "o mnie trener personalny",
    "Jan Chmielewski bio",
  ],
  openGraph: {
    title: "O Mnie — Jan Chmielewski | Trener Personalny",
    description:
      "Magister Fizjoterapii, Finalista Mistrzostw Polski, 8 lat doświadczenia. Poznaj moją historię i filozofię.",
    images: [
      {
        url: "/images/jan-magister.png",
        width: 800,
        height: 1000,
        alt: "Jan Chmielewski — Magister Fizjoterapii i Trener Personalny",
      },
    ],
    type: "profile",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://jantrenerchmielewski.pl/o-mnie" },
}

const timeline = [
  {
    icon: GraduationCap,
    year: "Wykształcenie",
    title: "Magister Fizjoterapii",
    description:
      "Ukończyłem studia magisterskie z fizjoterapii — wiedza o biomechanice, anatomii i rehabilitacji, którą przekładam bezpośrednio na pracę z klientami. Trenuję bezpiecznie i skutecznie.",
  },
  {
    icon: Trophy,
    year: "Sport",
    title: "Finalista Mistrzostw Polski w kulturystyce",
    description:
      "Startowałem i dotarłem do finałów Mistrzostw Polski w kulturystyce. Wiem z własnego doświadczenia, czego wymaga przygotowanie do zawodów — i jak wygląda prawdziwa, długoterminowa transformacja ciała.",
  },
  {
    icon: Calendar,
    year: "Doświadczenie",
    title: "8 lat jako trener personalny",
    description:
      "Od 8 lat pomagam ludziom zmieniać swoje ciała i nawyki. Pracowałem z osobami na różnych poziomach zaawansowania — od kompletnych początkujących po sportowców wyczynowych.",
  },
  {
    icon: Users,
    year: "Wyniki",
    title: "200+ zadowolonych klientów",
    description:
      "Ponad 200 osób, którym pomogłem osiągnąć realne zmiany. Nie liczby na papierze, ale prawdziwe metamorfozy, lepsze wyniki sportowe i zdrowsze podejście do ciała.",
  },
]

const competitionPhotos = [
  { src: "/images/zawody-1.png", alt: "Jan Chmielewski na zawodach kulturystycznych — pozycja 1" },
  { src: "/images/zawody-2.png", alt: "Jan Chmielewski na zawodach kulturystycznych — pozycja 2" },
  { src: "/images/zawody-4.png", alt: "Jan Chmielewski na zawodach kulturystycznych — trofeum" },
  { src: "/images/zawody-5.png", alt: "Jan Chmielewski — wyniki zawodów kulturystycznych" },
]

export default function OMniePage() {
  return (
    <LenisProvider>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "O Mnie", url: "/o-mnie" },
        ]}
      />
      <PersonSchema />

      <Navbar />

      <main className="min-h-[100dvh]">
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div
            className="pointer-events-none absolute -top-20 right-0 h-[600px] w-[600px] rounded-full blur-[140px] opacity-15"
            style={{ background: "var(--cyan)" }}
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              {/* Text */}
              <div className="order-2 lg:order-1">
                <ScrollReveal delay={0}>
                  <p className="text-label mb-4" style={{ color: "var(--cyan)" }}>
                    Poznaj swojego trenera
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <h1 className="text-display-sm mb-6 text-[clamp(2.5rem,5vw,4.5rem)]">
                    Jan <span className="text-gradient-cyan">Chmielewski</span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <p className="text-body-lg mb-6 text-muted-foreground">
                    Jestem trenerem personalnym z tytułem Magistra Fizjoterapii i 8-letnim
                    doświadczeniem. Finalistą Mistrzostw Polski w kulturystyce — wiem, jak wygląda
                    prawdziwa transformacja od środka.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <p className="text-body-lg mb-8 text-muted-foreground">
                    Łączę wiedzę akademicką z doświadczeniem wyczynowym, żeby pomagać ludziom
                    trenować skutecznie i bezpiecznie. Nie sprzedaję skrótów — sprzedaję proces.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <div className="flex flex-wrap gap-4">
                    <CTAButton href="/kontakt" size="lg">
                      Zacznij współpracę
                    </CTAButton>
                    <CTAButton href="/metamorfoza" variant="secondary">
                      Moja metamorfoza
                    </CTAButton>
                  </div>
                </ScrollReveal>
              </div>

              {/* Image */}
              <ScrollReveal delay={0.2} direction="left" className="order-1 lg:order-2">
                <div className="relative mx-auto max-w-sm lg:max-w-full">
                  <div className="border-glow glow-cyan overflow-hidden rounded-2xl">
                    <Image
                      src="/images/jan-magister.png"
                      alt="Jan Chmielewski — Magister Fizjoterapii i Trener Personalny"
                      width={600}
                      height={750}
                      className="w-full object-cover"
                      priority
                    />
                  </div>
                  {/* Credential badges */}
                  <div
                    className="absolute -bottom-6 -left-6 rounded-xl border-glow px-5 py-3 glow-cyan"
                    style={{ background: "var(--card)" }}
                  >
                    <p className="text-mono-metric text-lg font-bold text-gradient-cyan">MGR FT</p>
                    <p className="text-label mt-0.5">Magister Fizjoterapii</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== TIMELINE ===== */}
        <section className="py-20" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-16 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Kwalifikacje i osiągnięcia
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Moje doświadczenie w liczbach
                </h2>
              </div>
            </ScrollReveal>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
                style={{ background: "linear-gradient(to bottom, transparent, var(--cyan), transparent)", opacity: 0.3 }}
                aria-hidden="true"
              />

              <div className="flex flex-col gap-12">
                {timeline.map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 0.1}>
                    <div className="grid gap-6 md:grid-cols-[4rem_1fr] items-start">
                      {/* Icon dot */}
                      <div
                        className="relative flex size-16 shrink-0 items-center justify-center rounded-full border-glow glow-cyan z-10"
                        style={{ background: "var(--background)" }}
                      >
                        <item.icon
                          className="size-7"
                          style={{ color: "var(--cyan)" }}
                          weight="duotone"
                          aria-hidden="true"
                        />
                      </div>

                      {/* Content */}
                      <div
                        className="border-glow rounded-xl p-6"
                        style={{ background: "var(--background)" }}
                      >
                        <p className="text-label mb-2" style={{ color: "var(--cyan)" }}>
                          {item.year}
                        </p>
                        <h3
                          className="mb-3 text-xl font-bold"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== PHILOSOPHY ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <ScrollReveal>
                <p className="text-label mb-4" style={{ color: "var(--cyan)" }}>
                  Moja filozofia
                </p>
                <h2 className="text-display-sm mb-6 text-3xl md:text-5xl">
                  Trening to narzędzie,{" "}
                  <span className="text-gradient-cyan">nie cel sam w sobie</span>
                </h2>
                <div className="flex flex-col gap-6 text-muted-foreground leading-relaxed">
                  <p>
                    Za wiele lat pracy z klientami nauczyłem się jednej rzeczy: najlepszy plan to
                    ten, którego można się trzymać. Nie ekstremalny, nie idealny — realny i dopasowany
                    do prawdziwego życia.
                  </p>
                  <p>
                    Moim zadaniem nie jest pokazanie Ci, jak ciężko potrafię Cię ćwiczyć. Moim
                    zadaniem jest pomóc Ci osiągnąć cel — szybciej, bezpieczniej i z większą
                    satysfakcją niż gdybyś robił to sam.
                  </p>
                  <p>
                    Jako Magister Fizjoterapii patrzę na ciało całościowo — nie tylko na mięśnie,
                    ale na wzorce ruchowe, przeciążenia, asymetrie. Trenuję Cię tak, żebyś za 20 lat
                    wciąż mógł się poruszać bez bólu.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} direction="left">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Barbell, label: "Siła i kondycja" },
                    { icon: Heart, label: "Bezpieczeństwo" },
                    { icon: GraduationCap, label: "Wiedza akademicka" },
                    { icon: Trophy, label: "Wyniki sportowe" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-3 border-glow rounded-xl p-6 text-center"
                      style={{ background: "var(--card)" }}
                    >
                      <item.icon
                        className="size-8"
                        style={{ color: "var(--cyan)" }}
                        weight="duotone"
                        aria-hidden="true"
                      />
                      <span
                        className="text-sm font-semibold"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== COMPETITION GALLERY ===== */}
        <section className="py-20" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Na scenie
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Zawody kulturystyczne
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  Finalista Mistrzostw Polski — doświadczenie, które przekształca wiedzę w wyniki.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
              {competitionPhotos.map((photo, i) => (
                <ScrollReveal key={photo.src} delay={i * 0.08}>
                  <div
                    className="border-glow overflow-hidden rounded-xl aspect-[3/4]"
                    style={{ background: "oklch(0.12 0.02 240)" }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={400}
                      height={533}
                      className="w-full h-full object-contain object-center transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </ScrollReveal>
              ))}
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
                Gotowy na współpracę?
              </p>
              <h2 className="text-display-sm mb-6 text-3xl md:text-5xl">
                Zacznijmy razem
              </h2>
              <p className="text-body-lg mx-auto mb-10 text-muted-foreground max-w-xl">
                Skontaktuj się ze mną — opowiedz mi o swoich celach i razem ustalimy, jak je osiągnąć.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <CTAButton href="/kontakt" size="lg">
                  Napisz do mnie
                </CTAButton>
                <CTAButton href="/cennik" variant="secondary">
                  Zobacz usługi i ceny
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
