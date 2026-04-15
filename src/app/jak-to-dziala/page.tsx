import type { Metadata } from "next"
import Link from "next/link"
import {
  CurrencyCircleDollar,
  ClipboardText,
  ChatCircleText,
  Rocket,
  ArrowRight,
  UserCircle,
  CalendarCheck,
  ChartLineUp,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { BreadcrumbSchema, HowToSchema } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Jak to działa — przewodnik po usługach | Jan Chmielewski",
  description:
    "Krok po kroku: jak zamówić dietę online, jak wygląda prowadzenie online, jak zacząć trening personalny i jak działa plan treningowy. Przejrzysty przewodnik od Jana Chmielowskiego.",
  keywords: [
    "jak zamówić dietę online",
    "jak wygląda prowadzenie online",
    "jak zacząć trening personalny",
    "jak działa plan treningowy online",
    "Jan Chmielewski jak to działa",
  ],
  alternates: {
    canonical: "https://jantrenerchmielewski.pl/jak-to-dziala",
  },
  openGraph: {
    title: "Jak to działa | Jan Chmielewski — Trener Personalny",
    description:
      "Krok po kroku: jak zamawiać diety online, plany treningowe i prowadzenie online u Jana Chmielowskiego.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

interface Step {
  number: number
  icon: React.ReactNode
  title: string
  description: string
}

interface ServiceSection {
  id: string
  label: string
  price: string
  priceNote: string
  href: string
  color: string
  headline: string
  subheadline: string
  steps: Step[]
  schemaSteps: { name: string; text: string }[]
}

const services: ServiceSection[] = [
  {
    id: "dieta-online",
    label: "Dieta Online",
    price: "199 zł",
    priceNote: "4-tygodniowy plan",
    href: "/dieta-online",
    color: "oklch(0.65 0.18 210)",
    headline: "Jak zamówić dietę online",
    subheadline: "Spersonalizowany plan żywieniowy gotowy w 48–72 godziny.",
    steps: [
      {
        number: 1,
        icon: <ChatCircleText weight="duotone" className="size-7" />,
        title: "Kontakt i wstępna rozmowa",
        description:
          "Napisz przez formularz kontaktowy lub zadzwoń na +48 534 214 398. Opowiedz krótko o swoim celu. Odpowiem w ciągu 24 godzin i — jeśli zdecydujesz się na zamówienie — wyślę Ci szczegółowy kwestionariusz.",
      },
      {
        number: 2,
        icon: <ClipboardText weight="duotone" className="size-7" />,
        title: "Wypełnienie kwestionariusza",
        description:
          "30+ pytań o Twoje dane biometryczne, historię diet, preferencje kulinarne, nietolerancje, tryb dnia i cel. Zajmuje ok. 15–20 minut. Jakość kwestionariusza bezpośrednio wpływa na jakość planu — im więcej szczegółów, tym lepiej dopasowany jadłospis.",
      },
      {
        number: 3,
        icon: <CurrencyCircleDollar weight="duotone" className="size-7" />,
        title: "Płatność i start pracy",
        description:
          "Po potwierdzeniu zamówienia przesyłam dane do płatności (przelew lub BLIK, 199 zł). Po zaksięgowaniu wpłaty zaczynam pracę nad Twoim planem — kalkulację kaloryczną, podział makroskładników i budowę jadłospisu.",
      },
      {
        number: 4,
        icon: <Rocket weight="duotone" className="size-7" />,
        title: "Dostarczenie planu i wsparcie 30 dni",
        description:
          "Gotowy jadłospis dostajesz w formie PDF w ciągu 48–72 godzin roboczych. Przez 30 dni masz bezpośredni kontakt ze mną — pytaj, zgłaszaj trudności, proś o korekty. Odpowiadam w ciągu 24 godzin.",
      },
    ],
    schemaSteps: [
      {
        name: "Kontakt i wstępna rozmowa",
        text: "Napisz przez formularz kontaktowy lub zadzwoń. Odpowiedź w 24 godziny i kwestionariusz startowy.",
      },
      {
        name: "Wypełnienie kwestionariusza",
        text: "30+ pytań o dane biometryczne, historię diet, preferencje i cel. Zajmuje 15–20 minut.",
      },
      {
        name: "Płatność i start pracy",
        text: "Po potwierdzeniu zamówienia i płatności 199 zł rozpoczynam pracę nad spersonalizowanym planem.",
      },
      {
        name: "Dostarczenie planu i wsparcie 30 dni",
        text: "Plan PDF gotowy w 48–72 godziny. 30 dni kontaktu z możliwością korekt.",
      },
    ],
  },
  {
    id: "plan-treningowy",
    label: "Plan Treningowy",
    price: "149 zł",
    priceNote: "8-tygodniowy plan",
    href: "/plan-treningowy",
    color: "oklch(0.65 0.18 150)",
    headline: "Jak działa plan treningowy online",
    subheadline: "Spersonalizowany 8-tygodniowy program z periodyzacją, gotowy w 48–72 godziny.",
    steps: [
      {
        number: 1,
        icon: <ChatCircleText weight="duotone" className="size-7" />,
        title: "Kontakt i określenie celu",
        description:
          "Skontaktuj się przez formularz na stronie /kontakt lub telefonicznie. Pytam o cel, poziom zaawansowania i dostępny sprzęt. Jeśli zdecydujesz się na zamówienie — wysyłam kwestionariusz treningowy.",
      },
      {
        number: 2,
        icon: <ClipboardText weight="duotone" className="size-7" />,
        title: "Kwestionariusz treningowy",
        description:
          "Pytam o: historię treningową, dostępny sprzęt (siłownia, dom, brak sprzętu), dostępny czas (dni/tydzień, czas sesji), ograniczenia ruchowe lub historię kontuzji, cel i poziom zaawansowania. Na tej podstawie buduję program.",
      },
      {
        number: 3,
        icon: <CurrencyCircleDollar weight="duotone" className="size-7" />,
        title: "Płatność i realizacja",
        description:
          "Po potwierdzeniu zamówienia przesyłam dane do płatności (149 zł, przelew lub BLIK). Realizacja w ciągu 48–72 godzin roboczych od zaksięgowania płatności.",
      },
      {
        number: 4,
        icon: <CheckCircle weight="duotone" className="size-7" />,
        title: "Gotowy plan i 30 dni wsparcia",
        description:
          "Plan trafia do Ciebie jako PDF z tabelą ćwiczeń, pełną notacją (serie × powtórzenia × tempo × ciężar startowy), wskazówkami technicznymi i protokołem rozgrzewki. Przez 30 dni możesz zadawać pytania i prosić o korekty.",
      },
    ],
    schemaSteps: [
      {
        name: "Kontakt i określenie celu",
        text: "Skontaktuj się przez formularz lub telefon. Określamy cel, poziom i sprzęt.",
      },
      {
        name: "Kwestionariusz treningowy",
        text: "Pytania o historię treningową, sprzęt, czas, ograniczenia i cel.",
      },
      {
        name: "Płatność i realizacja",
        text: "Płatność 149 zł i realizacja planu w ciągu 48–72 godzin roboczych.",
      },
      {
        name: "Gotowy plan i 30 dni wsparcia",
        text: "PDF z pełną notacją ćwiczeń i 30-dniowy kontakt z możliwością korekt.",
      },
    ],
  },
  {
    id: "prowadzenie-online",
    label: "Prowadzenie Online",
    price: "od 399 zł",
    priceNote: "miesięcznie",
    href: "/prowadzenie-online",
    color: "oklch(0.65 0.18 30)",
    headline: "Jak wygląda prowadzenie online",
    subheadline: "Kompleksowa opieka trenerska z cotygodniowym kontaktem i modyfikacjami.",
    steps: [
      {
        number: 1,
        icon: <ChatCircleText weight="duotone" className="size-7" />,
        title: "Rozmowa wstępna i wybór pakietu",
        description:
          "Napisz lub zadzwoń — porozmawiamy o Twoim celu, historii i oczekiwaniach. Na tej podstawie omówimy, który pakiet (1, 3, 6 lub 12 miesięcy) jest dla Ciebie właściwy. Bez zobowiązań.",
      },
      {
        number: 2,
        icon: <ClipboardText weight="duotone" className="size-7" />,
        title: "Obszerny kwestionariusz startowy",
        description:
          "Po potwierdzeniu zamówienia i płatności wysyłam kwestionariusz startowy (ok. 25 minut). Obejmuje dane biometryczne, historię treningową i dietetyczną, dostępny sprzęt, czas, preferencje żywieniowe, nietolerancje, tryb dnia i styl pracy. To fundament całej współpracy.",
      },
      {
        number: 3,
        icon: <UserCircle weight="duotone" className="size-7" />,
        title: "Kompleksowy start — dieta + trening",
        description:
          "W ciągu 48–72 godzin od kwestionariusza dostajesz kompletny pakiet startowy: spersonalizowaną dietę (jadłospis tygodniowy z przepisami i listą zakupów) i plan treningowy (z periodyzacją, notacją i wskazówkami technicznymi).",
      },
      {
        number: 4,
        icon: <CalendarCheck weight="duotone" className="size-7" />,
        title: "Cotygodniowy rytm — raport i feedback",
        description:
          "Co tydzień wysyłasz mi raport postępów (masa ciała, treningi, samopoczucie, dieta). Analizuję postępy i w ciągu 24 godzin odsyłam feedback z planem na kolejny tydzień — z ewentualnymi modyfikacjami diety i treningu. Możesz pisać do mnie codziennie.",
      },
      {
        number: 5,
        icon: <ChartLineUp weight="duotone" className="size-7" />,
        title: "Miesięczne przeglądy i korekty strategii",
        description:
          "Co 4 tygodnie przeprowadzam głębszą analizę: porównanie danych, ocenę tempa zmian i planowanie kolejnego miesiąca. Reaguję na Twoją rzeczywistość — kontuzje, wyjazdy, chorobę, zmianę pracy — modyfikując plan natychmiast, nie czekając do cotygodniowego raportu.",
      },
    ],
    schemaSteps: [
      {
        name: "Rozmowa wstępna i wybór pakietu",
        text: "Rozmowa o celu, historii i wyborze odpowiedniego pakietu czasowego.",
      },
      {
        name: "Obszerny kwestionariusz startowy",
        text: "25-minutowy kwestionariusz obejmujący wszystkie aspekty stylu życia, celu i preferencji.",
      },
      {
        name: "Kompleksowy start — dieta i trening",
        text: "Spersonalizowana dieta i plan treningowy gotowe w 48–72 godziny od kwestionariusza.",
      },
      {
        name: "Cotygodniowy rytm — raport i feedback",
        text: "Co tydzień raport postępów i feedback w ciągu 24 godzin z modyfikacjami programu.",
      },
      {
        name: "Miesięczne przeglądy i korekty strategii",
        text: "Miesięczna analiza postępów i planowanie kolejnego etapu współpracy.",
      },
    ],
  },
  {
    id: "trening-personalny",
    label: "Trening Personalny",
    price: "149 zł",
    priceNote: "za sesję",
    href: "/trening-personalny-chelmza",
    color: "oklch(0.65 0.18 300)",
    headline: "Jak zacząć trening personalny w Chełmży",
    subheadline: "Indywidualne sesje z magistrem fizjoterapii — Chełmża i okolice.",
    steps: [
      {
        number: 1,
        icon: <ChatCircleText weight="duotone" className="size-7" />,
        title: "Pierwsza rozmowa bez zobowiązań",
        description:
          "Napisz przez formularz kontaktowy lub zadzwoń na +48 534 214 398. Powiedz o swoim celu, historii treningowej i ewentualnych ograniczeniach zdrowotnych. Nie pobieramy opłaty za wstępną konsultację.",
      },
      {
        number: 2,
        icon: <UserCircle weight="duotone" className="size-7" />,
        title: "Ocena ruchowa na pierwszej sesji",
        description:
          "Każda współpraca zaczyna się od oceny ruchowej — analiza posturalna, zakresy stawowe, identyfikacja asymetrii i słabych ogniw. To 15–20 minut inwestycji, która sprawia, że trening jest bezpieczny i efektywny od pierwszego ćwiczenia.",
      },
      {
        number: 3,
        icon: <ClipboardText weight="duotone" className="size-7" />,
        title: "Indywidualny program treningowy",
        description:
          "Na podstawie oceny ruchowej i rozmowy wstępnej buduję program dopasowany do Twojego celu i ograniczeń. Nie stosuję gotowych schematów — każdy plan to praca od zera pod konkretną osobę.",
      },
      {
        number: 4,
        icon: <ChartLineUp weight="duotone" className="size-7" />,
        title: "Regularne sesje i progresja",
        description:
          "Rekomendowana częstotliwość: 2–3 sesje tygodniowo. Po każdej sesji omawiamy postępy i planuję kolejne kroki. Możliwy jest zakup pakietu 10 sesji za 1599 zł (oszczędzasz 391 zł). Możesz też łączyć sesje z moimi usługami online.",
      },
    ],
    schemaSteps: [
      {
        name: "Pierwsza rozmowa bez zobowiązań",
        text: "Bezpłatna rozmowa o celu, historii i ograniczeniach zdrowotnych przez formularz lub telefon.",
      },
      {
        name: "Ocena ruchowa na pierwszej sesji",
        text: "Kliniczna ocena posturalna i zakresów stawowych — fundament bezpiecznego treningu.",
      },
      {
        name: "Indywidualny program treningowy",
        text: "Program tworzony od zera na podstawie oceny ruchowej i celu klienta.",
      },
      {
        name: "Regularne sesje i progresja",
        text: "2–3 sesje tygodniowo z cotygodniowym omówieniem postępów i planowaniem kolejnych kroków.",
      },
    ],
  },
]

export default function JakToDzialaPage() {
  return (
    <LenisProvider>
      {services.map((service) => (
        <HowToSchema
          key={service.id}
          name={service.headline}
          description={service.subheadline}
          steps={service.schemaSteps}
        />
      ))}
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Jak to działa", url: "/jak-to-dziala" },
        ]}
      />

      <Navbar />

      <main>
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
                <li className="text-foreground/60" aria-current="page">Jak to działa</li>
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
              Przewodnik po usługach
            </div>

            <h1 className="font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl">
              Jak to działa
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Przejrzysty przewodnik krok po kroku dla każdej usługi. Bez marketingowych ogólników —
              tylko to, co faktycznie się dzieje od pierwszego kontaktu do dostarczenia wyniku.
            </p>

            {/* Jump links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:bg-muted"
                >
                  {service.label}
                </a>
              ))}
            </div>
          </div>
        </header>

        <div className="pb-24">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="flex flex-col gap-20">
              {services.map((service) => (
                <section key={service.id} id={service.id} aria-labelledby={`heading-${service.id}`}>
                  {/* Service header */}
                  <div className="mb-10">
                    <div className="mb-4 flex flex-wrap items-center gap-4">
                      <span
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                          background: `${service.color.replace(")", " / 12%)")}`,
                          color: service.color,
                          border: `1px solid ${service.color.replace(")", " / 20%)")}`,
                        }}
                      >
                        {service.label}
                      </span>
                      <span className="font-heading text-xl font-bold" style={{ color: service.color }}>
                        {service.price}
                        <span className="ml-1 text-sm font-normal text-muted-foreground">
                          {service.priceNote}
                        </span>
                      </span>
                    </div>

                    <h2
                      id={`heading-${service.id}`}
                      className="font-heading text-2xl font-bold text-foreground md:text-3xl"
                    >
                      {service.headline}
                    </h2>
                    <p className="mt-2 text-base text-muted-foreground">{service.subheadline}</p>
                  </div>

                  {/* Steps */}
                  <ol className="relative flex flex-col gap-0">
                    {service.steps.map((step, index) => (
                      <li key={index} className="flex gap-6">
                        {/* Timeline */}
                        <div className="flex flex-col items-center">
                          <div
                            className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 text-white"
                            style={{
                              borderColor: service.color,
                              background: `${service.color.replace(")", " / 15%)")}`,
                              color: service.color,
                            }}
                          >
                            {step.icon}
                          </div>
                          {index < service.steps.length - 1 && (
                            <div
                              className="my-2 w-0.5 flex-1"
                              style={{ background: `${service.color.replace(")", " / 20%)")}` }}
                              aria-hidden="true"
                            />
                          )}
                        </div>

                        {/* Content */}
                        <div className={`pb-8 ${index === service.steps.length - 1 ? "" : ""}`}>
                          <div className="mb-1 flex items-center gap-2">
                            <span
                              className="text-xs font-semibold uppercase tracking-widest"
                              style={{ color: service.color }}
                            >
                              Krok {step.number}
                            </span>
                          </div>
                          <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>

                  {/* CTA */}
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all"
                      style={{ background: service.color }}
                    >
                      Dowiedz się więcej o {service.label}
                      <ArrowRight weight="bold" className="size-4" aria-hidden="true" />
                    </Link>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                    >
                      Zacznij teraz
                    </Link>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="border-t border-border py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-4 md:px-6 text-center">
            <p
              className="mb-2 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "oklch(0.65 0.18 210)" }}
            >
              Masz pytania?
            </p>
            <h2 className="mb-3 font-heading text-2xl font-bold text-foreground md:text-3xl">
              Napisz zanim zdecydujesz
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
              Rozmowa wstępna jest bezpłatna i bez zobowiązań. Chętnie odpowiem, która usługa
              najlepiej pasuje do Twojego celu i sytuacji. Odpiszę w ciągu 24 godzin.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold text-white"
                style={{ background: "oklch(0.65 0.18 210)" }}
              >
                Formularz kontaktowy
                <ArrowRight weight="bold" className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/cennik"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Pełny cennik
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </LenisProvider>
  )
}
