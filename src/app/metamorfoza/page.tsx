import type { Metadata } from "next"
import Image from "next/image"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { CTAButton } from "@/components/shared/CTAButton"
import { BreadcrumbSchema } from "@/components/seo/JsonLd"
import { ArrowRight, Trophy, Calendar, Star } from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "Metamorfoza — Od początku do podium",
  description:
    "Historia transformacji Jana Chmielewskiego — od pierwszego treningu do sceny Mistrzostw Polski w kulturystyce. Prawdziwa metamorfoza, która zajęła lata ciężkiej pracy.",
  keywords: [
    "metamorfoza Jan Chmielewski",
    "transformacja ciała",
    "kulturystyka metamorfoza",
    "Jan Chmielewski historia",
    "przed i po kulturystyka",
  ],
  openGraph: {
    title: "Metamorfoza — Od początku do podium | Jan Chmielewski",
    description:
      "Prawdziwa historia transformacji — lata pracy, wyrzeczeń i finał na scenie Mistrzostw Polski.",
    images: [
      {
        url: "/images/jan-hero.png",
        width: 800,
        height: 1000,
        alt: "Jan Chmielewski — metamorfoza do Mistrzostw Polski",
      },
    ],
    type: "article",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://jantrenerchmielewski.pl/metamorfoza" },
}

export default function MetamorfozyPage() {
  return (
    <LenisProvider>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Metamorfoza", url: "/metamorfoza" },
        ]}
      />

      <Navbar />

      <main className="min-h-[100dvh]">
        {/* ===== DRAMATIC INTRO ===== */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, oklch(0.65 0.18 210 / 12%) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal delay={0}>
                <p className="text-label mb-4" style={{ color: "var(--cyan)" }}>
                  Prawdziwa historia
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-display-sm mb-6 text-[clamp(2.5rem,6vw,5.5rem)]">
                  Od początku{" "}
                  <span className="text-gradient-cyan">do podium</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-body-lg mx-auto text-muted-foreground max-w-2xl">
                  To nie jest historia o perfekcyjnych warunkach i sprzyjającym losie. To historia
                  o tym, co dzieje się, gdy połączysz wiedzę z konsekwencją i nie odpuścisz — przez
                  lata.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== PHASE 1 — BEGINNING ===== */}
        <section className="py-16" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <ScrollReveal>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="flex size-10 items-center justify-center rounded-full"
                      style={{ background: "var(--surface-elevated)", border: "1px solid var(--border)" }}
                    >
                      <span className="text-mono-metric font-bold" style={{ color: "var(--cyan)" }}>
                        01
                      </span>
                    </div>
                    <p className="text-label" style={{ color: "var(--cyan)" }}>
                      Faza pierwsza — Początek
                    </p>
                  </div>
                  <h2 className="text-display-sm mb-6 text-3xl md:text-4xl">
                    Każdy zaczyna od zera
                  </h2>
                  <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                    <p>
                      Pierwszy raz wszedłem na siłownię bez żadnego planu. Jak większość ludzi —
                      z entuzjazmem, ale bez kierunku. Robiłem to, co inni, i osiągałem dokładnie
                      tyle samo, co inni: nie za wiele.
                    </p>
                    <p>
                      Ale zacząłem szukać wiedzy. Studia z fizjoterapii dały mi fundament, którego
                      nie miałem — zrozumiałem, jak naprawdę działa ciało, jak budować mięśnie
                      bezpiecznie, jak programować trening z myślą o długoterminowych wynikach.
                    </p>
                    <p>
                      To właśnie wtedy zrozumiałem, że wiedza to przewaga. I że chcę ją przekazywać
                      dalej.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} direction="left">
                <div
                  className="border-glow overflow-hidden rounded-2xl aspect-[4/5]"
                  style={{ background: "oklch(0.16 0.025 232)" }}
                >
                  <Image
                    src="/images/metamorfoza-1.png"
                    alt="Jan Chmielewski — początki treningowe, faza pierwsza metamorfozy"
                    width={600}
                    height={750}
                    className="w-full h-full object-contain object-center"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== PHASE 2 — PROGRESS ===== */}
        <section className="py-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <ScrollReveal delay={0.2} direction="right" className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="border-glow overflow-hidden rounded-xl aspect-[4/5]"
                    style={{ background: "oklch(0.16 0.025 232)" }}
                  >
                    <Image
                      src="/images/metamorfoza-2.png"
                      alt="Jan Chmielewski — progres treningowy, widoczna poprawa sylwetki"
                      width={400}
                      height={500}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <div
                    className="border-glow overflow-hidden rounded-xl aspect-[4/5]"
                    style={{ background: "oklch(0.16 0.025 232)" }}
                  >
                    <Image
                      src="/images/metamorfoza-3.png"
                      alt="Jan Chmielewski — dalsza transformacja, etap środkowy"
                      width={400}
                      height={500}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <div
                    className="border-glow overflow-hidden rounded-xl col-span-2 aspect-[2/1]"
                    style={{ background: "oklch(0.16 0.025 232)" }}
                  >
                    <Image
                      src="/images/metamorfoza-5.png"
                      alt="Jan Chmielewski — zaawansowany etap transformacji przed zawodami"
                      width={800}
                      height={400}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal className="order-1 lg:order-2">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="flex size-10 items-center justify-center rounded-full"
                      style={{ background: "var(--surface-elevated)", border: "1px solid var(--border)" }}
                    >
                      <span className="text-mono-metric font-bold" style={{ color: "var(--cyan)" }}>
                        02
                      </span>
                    </div>
                    <p className="text-label" style={{ color: "var(--cyan)" }}>
                      Faza druga — Progres
                    </p>
                  </div>
                  <h2 className="text-display-sm mb-6 text-3xl md:text-4xl">
                    Lata systematycznej pracy
                  </h2>
                  <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                    <p>
                      Transformacja ciała to nie sprint — to maraton. Przez kolejne lata
                      systematycznie budowałem sylwetkę, ucząc się na każdym etapie. Każdy płaskowyż,
                      każda kontuzja, każdy brak motywacji — wszystko to stało się wiedzą.
                    </p>
                    <p>
                      Równolegle zacząłem pracować jako trener. Pierwszych klientów uczyłem tego,
                      co sam testowałem na sobie. Wiedza akademicka plus własne doświadczenie —
                      to był fundament metody, którą stosuję do dziś.
                    </p>
                    <p>
                      Zacząłem myśleć o startach. Nie jako o celu — ale jako o sprawdzianie.
                      Czy wszystko, w co wierzę, naprawdę działa?
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-3 text-sm" style={{ color: "var(--cyan)" }}>
                    <ArrowRight className="size-4 shrink-0" weight="bold" aria-hidden="true" />
                    <span className="font-mono">Ponad 8 lat konsekwentnej pracy</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== PHASE 3 — THE RESULT ===== */}
        <section className="py-16 relative overflow-hidden" style={{ background: "var(--card)" }}>
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, var(--cyan) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div
                    className="flex size-10 items-center justify-center rounded-full border-glow glow-cyan"
                    style={{ background: "var(--background)" }}
                  >
                    <span className="text-mono-metric font-bold text-gradient-cyan">03</span>
                  </div>
                  <p className="text-label" style={{ color: "var(--cyan)" }}>
                    Faza trzecia — Wynik
                  </p>
                </div>
                <h2 className="text-display-sm text-3xl md:text-5xl mb-6">
                  Scena <span className="text-gradient-cyan">Mistrzostw Polski</span>
                </h2>
                <p className="text-body-lg mx-auto text-muted-foreground max-w-2xl">
                  Finał Mistrzostw Polski w kulturystyce. Efekt lat pracy, wyrzeczeń, nauki i
                  konsekwencji. Nie cel sam w sobie — ale dowód, że metoda działa.
                </p>
              </div>
            </ScrollReveal>

            {/* Hero result image */}
            <ScrollReveal delay={0.1}>
              <div
                className="border-glow glow-cyan overflow-hidden rounded-2xl mb-8"
                style={{ background: "oklch(0.16 0.025 232)" }}
              >
                <Image
                  src="/images/metamorfoza-6.png"
                  alt="Jan Chmielewski — wynik finalny metamorfozy, gotowość do zawodów Mistrzostw Polski"
                  width={1200}
                  height={600}
                  className="w-full object-contain object-center"
                />
              </div>
            </ScrollReveal>

            {/* Competition photos grid */}
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-12">
              {[
                { src: "/images/jan-hero.png", alt: "Jan Chmielewski — zdjęcie profilowe, rezultat wieloletniej pracy" },
                { src: "/images/zawody-1.png", alt: "Jan Chmielewski na scenie Mistrzostw Polski — pozycja obowiązkowa" },
                { src: "/images/zawody-2.png", alt: "Jan Chmielewski — prezentacja na zawodach kulturystycznych" },
                { src: "/images/zawody-5.png", alt: "Jan Chmielewski — finał Mistrzostw Polski w kulturystyce" },
              ].map((photo, i) => (
                <ScrollReveal key={photo.src} delay={i * 0.08}>
                  <div
                    className="border-glow overflow-hidden rounded-xl aspect-[3/4]"
                    style={{ background: "oklch(0.16 0.025 232)" }}
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

            {/* Stats row */}
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 border-t border-border pt-12">
                {[
                  { icon: Calendar, value: "8 lat", label: "intensywnej pracy" },
                  { icon: Trophy, value: "Finalista", label: "Mistrzostw Polski" },
                  { icon: Star, value: "200+", label: "klientów po drodze" },
                  { icon: ArrowRight, value: "Ciągle", label: "do przodu" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center text-center gap-2">
                    <stat.icon
                      className="size-6 mb-1"
                      style={{ color: "var(--cyan)" }}
                      weight="duotone"
                      aria-hidden="true"
                    />
                    <p className="text-mono-metric text-2xl font-bold text-gradient-cyan">
                      {stat.value}
                    </p>
                    <p className="text-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== CTA — YOUR TRANSFORMATION ===== */}
        <section className="relative overflow-hidden py-28 text-center">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.65 0.18 210 / 15%) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <ScrollReveal>
              <p className="text-label mb-4" style={{ color: "var(--cyan)" }}>
                Twoja kolej
              </p>
              <h2 className="text-display-sm mb-6 text-[clamp(2rem,5vw,4rem)]">
                Twoja metamorfoza{" "}
                <span className="text-gradient-cyan">może zacząć się dziś</span>
              </h2>
              <p className="text-body-lg mx-auto mb-10 text-muted-foreground max-w-2xl">
                Nie obiecuję, że będzie łatwo. Obiecuję, że będziesz wiedział, co robisz i dlaczego.
                I że nie będziesz sam w tym procesie.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <CTAButton href="/kontakt" size="lg">
                  Zacznij swoją metamorfozę
                </CTAButton>
                <CTAButton href="/prowadzenie-online" variant="secondary">
                  Prowadzenie online
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
