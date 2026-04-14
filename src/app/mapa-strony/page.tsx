import type { Metadata } from "next"
import Link from "next/link"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { BreadcrumbSchema } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Mapa strony | Jan Chmielewski — Trener Personalny",
  description:
    "Kompletna mapa strony jantrenerchmielewski.pl — wszystkie podstrony: usługi, blog, miasta, porównania i strony informacyjne.",
  alternates: {
    canonical: "https://jantrenerchmielewski.pl/mapa-strony",
  },
  openGraph: {
    title: "Mapa strony | Jan Chmielewski",
    description: "Kompletna mapa strony — wszystkie dostępne podstrony.",
    type: "website",
  },
}

interface SitemapSection {
  title: string
  links: { label: string; href: string }[]
}

const citiesByVoivodeship: { voivodeship: string; cities: { name: string; slug: string }[] }[] = [
  {
    voivodeship: "Kujawsko-Pomorskie",
    cities: [
      { name: "Chełmża", slug: "chelmza" },
      { name: "Toruń", slug: "torun" },
      { name: "Bydgoszcz", slug: "bydgoszcz" },
      { name: "Włocławek", slug: "wloclawek" },
      { name: "Grudziądz", slug: "grudziadz" },
      { name: "Inowrocław", slug: "inowroclaw" },
      { name: "Brodnica", slug: "brodnica" },
    ],
  },
  {
    voivodeship: "Mazowieckie",
    cities: [
      { name: "Warszawa", slug: "warszawa" },
      { name: "Radom", slug: "radom" },
      { name: "Płock", slug: "plock" },
    ],
  },
  {
    voivodeship: "Małopolskie",
    cities: [{ name: "Kraków", slug: "krakow" }],
  },
  {
    voivodeship: "Pomorskie",
    cities: [{ name: "Gdańsk", slug: "gdansk" }],
  },
  {
    voivodeship: "Dolnośląskie",
    cities: [{ name: "Wrocław", slug: "wroclaw" }],
  },
  {
    voivodeship: "Wielkopolskie",
    cities: [{ name: "Poznań", slug: "poznan" }],
  },
  {
    voivodeship: "Łódzkie",
    cities: [{ name: "Łódź", slug: "lodz" }],
  },
  {
    voivodeship: "Śląskie",
    cities: [
      { name: "Katowice", slug: "katowice" },
      { name: "Częstochowa", slug: "czestochowa" },
    ],
  },
  {
    voivodeship: "Zachodniopomorskie",
    cities: [{ name: "Szczecin", slug: "szczecin" }],
  },
  {
    voivodeship: "Lubelskie",
    cities: [{ name: "Lublin", slug: "lublin" }],
  },
  {
    voivodeship: "Podlaskie",
    cities: [{ name: "Białystok", slug: "bialystok" }],
  },
  {
    voivodeship: "Świętokrzyskie",
    cities: [{ name: "Kielce", slug: "kielce" }],
  },
  {
    voivodeship: "Warmińsko-Mazurskie",
    cities: [{ name: "Olsztyn", slug: "olsztyn" }],
  },
  {
    voivodeship: "Podkarpackie",
    cities: [{ name: "Rzeszów", slug: "rzeszow" }],
  },
  {
    voivodeship: "Opolskie",
    cities: [{ name: "Opole", slug: "opole" }],
  },
  {
    voivodeship: "Lubuskie",
    cities: [
      { name: "Gorzów Wielkopolski", slug: "gorzow-wielkopolski" },
      { name: "Zielona Góra", slug: "zielona-gora" },
    ],
  },
]

const serviceSlugPrefixes = [
  { prefix: "trener-personalny", label: "Trener personalny" },
  { prefix: "dietetyk-online", label: "Dietetyk online" },
  { prefix: "plan-treningowy-online", label: "Plan treningowy online" },
  { prefix: "dieta-online", label: "Dieta online" },
]

const mainSections: SitemapSection[] = [
  {
    title: "Główne strony",
    links: [
      { label: "Strona główna", href: "/" },
      { label: "O mnie", href: "/o-mnie" },
      { label: "Kontakt", href: "/kontakt" },
      { label: "Cennik", href: "/cennik" },
      { label: "Efekty klientów", href: "/efekty" },
      { label: "Metamorfoza", href: "/metamorfoza" },
      { label: "Opinie", href: "/opinie" },
      { label: "FAQ — Pytania i odpowiedzi", href: "/faq" },
      { label: "Jak to działa", href: "/jak-to-dziala" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Usługi",
    links: [
      { label: "Dieta Online — 199 zł", href: "/dieta-online" },
      { label: "Plan Treningowy — 149 zł", href: "/plan-treningowy" },
      { label: "Prowadzenie Online — od 399 zł/msc", href: "/prowadzenie-online" },
      { label: "Trening Personalny Chełmża — 199 zł/sesja", href: "/trening-personalny-chelmza" },
    ],
  },
  {
    title: "Porównania i przewodniki",
    links: [
      { label: "Prowadzenie Online vs Plan Treningowy", href: "/prowadzenie-online-vs-plan-treningowy" },
      { label: "Jak to działa — krok po kroku", href: "/jak-to-dziala" },
      { label: "FAQ — najczęstsze pytania", href: "/faq" },
    ],
  },
  {
    title: "Blog — artykuły eksperckie",
    links: [
      { label: "Dieta online — kompletny przewodnik 2026", href: "/blog/dieta-online-kompletny-przewodnik" },
      { label: "Plan treningowy online — od podstaw do zaawansowanych", href: "/blog/plan-treningowy-online-przewodnik" },
      { label: "Prowadzenie online — co to jest i czy warto?", href: "/blog/prowadzenie-online-co-to-jest" },
      { label: "Trener personalny Chełmża — dlaczego warto?", href: "/blog/trener-personalny-chelmza-dlaczego-warto" },
      { label: "Ile kosztuje dieta online? Ceny 2026", href: "/blog/ile-kosztuje-dieta-online-ceny" },
      { label: "Ile kosztuje trener personalny? Ceny 2026", href: "/blog/ile-kosztuje-trener-personalny" },
      { label: "Dieta na masę — jak zbudować masę mięśniową", href: "/blog/dieta-na-mase-jak-zbudowac-mase" },
      { label: "Dieta na redukcję — jak skutecznie schudnąć", href: "/blog/dieta-na-redukcje-jak-schudnac" },
      { label: "Najlepsze ćwiczenia na brzuch — przewodnik", href: "/blog/cwiczenia-na-brzuch-przewodnik" },
      { label: "Prowadzenie online vs plan treningowy — co wybrać?", href: "/blog/prowadzenie-online-vs-plan-treningowy" },
    ],
  },
  {
    title: "Informacje prawne",
    links: [
      { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
    ],
  },
]

export default function MapaStronyPage() {
  return (
    <LenisProvider>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Mapa strony", url: "/mapa-strony" },
        ]}
      />

      <Navbar />

      <main>
        <header className="relative pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <nav aria-label="Nawigacja okruszkowa" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <li>
                  <Link href="/" className="transition-colors hover:text-foreground">
                    Strona główna
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground/60" aria-current="page">Mapa strony</li>
              </ol>
            </nav>

            <h1 className="font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              Mapa strony
            </h1>
            <p className="mt-3 text-base text-muted-foreground">
              Kompletny spis wszystkich podstron serwisu jantrenerchmielewski.pl.
            </p>
          </div>
        </header>

        <section className="pb-24">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2">
              {/* Main sections */}
              {mainSections.map((section) => (
                <div key={section.title}>
                  <h2
                    className="mb-4 font-heading text-lg font-bold text-foreground"
                    style={{ color: "oklch(0.65 0.18 210)" }}
                  >
                    {section.title}
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Cities section */}
            <div className="mt-14">
              <h2
                className="mb-8 font-heading text-xl font-bold text-foreground"
                style={{ color: "oklch(0.65 0.18 210)" }}
              >
                Strony dla miast — usługi online w całej Polsce
              </h2>
              <p className="mb-8 text-sm text-muted-foreground">
                Oferuję usługi online dla klientów z całej Polski. Poniżej znajdziesz strony
                dedykowane poszczególnym miastom, z informacjami o dostępnych usługach.
              </p>

              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {citiesByVoivodeship.map((region) => (
                  <div key={region.voivodeship}>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {region.voivodeship}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {region.cities.map((city) => (
                        <li key={city.slug}>
                          <p className="mb-1 text-sm font-semibold text-foreground">{city.name}</p>
                          <ul className="flex flex-col gap-1 pl-2">
                            {serviceSlugPrefixes.map((svc) => (
                              <li key={svc.prefix}>
                                <Link
                                  href={`/${svc.prefix}-${city.slug}`}
                                  className="text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                                >
                                  {svc.label} {city.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </LenisProvider>
  )
}
