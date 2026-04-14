import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { CTAButton } from "@/components/shared/CTAButton"
import { TrustBadges } from "@/components/shared/TrustBadges"
import { BreadcrumbSchema, ServicePageSchema, FAQSchema, HowToSchema, CourseSchema } from "@/components/seo/JsonLd"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  ChartBar,
  Calculator,
  ForkKnife,
  ShoppingCart,
  UserFocus,
  ChatCircleDots,
  Lightning,
  Barbell,
  Heartbeat,
  Leaf,
  CheckCircle,
  XCircle,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr"
import { cities } from "@/lib/data/cities"

export const metadata: Metadata = {
  title: "Dieta 4-tygodniowa Online — 199 zł",
  description:
    "Spersonalizowany plan żywieniowy 4-tygodniowy dopasowany do Twoich celów, metabolizmu i stylu życia. Analiza, kalkulacja kaloryczna, lista zakupów. Jan Chmielewski — Magister Fizjoterapii.",
  keywords: [
    "dieta online",
    "plan żywieniowy",
    "dieta personalizowana",
    "dietetyk online",
    "dieta treningowa",
    "Jan Chmielewski dieta",
  ],
  openGraph: {
    title: "Dieta 4-tygodniowa Online — 199 zł | Jan Chmielewski",
    description:
      "Spersonalizowany plan żywieniowy dopasowany do Twoich celów. Analiza metabolizmu, kalkulacja kaloryczna, lista zakupów.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Dieta online Jan Chmielewski" }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://jantrenerchmielewski.pl/dieta-online" },
}

const features = [
  {
    icon: ChartBar,
    title: "Analiza metabolizmu",
    description:
      "Obliczam Twoje zapotrzebowanie kaloryczne na podstawie danych biometrycznych i poziomu aktywności.",
  },
  {
    icon: Calculator,
    title: "Kalkulacja kaloryczna",
    description:
      "Precyzyjny podział makroskładników (białko, tłuszcze, węglowodany) dostosowany do Twojego celu.",
  },
  {
    icon: ForkKnife,
    title: "Plan z prostych przepisów",
    description:
      "Smaczne i łatwe posiłki — bez egzotycznych składników. Dieta, której będziesz się trzymać.",
  },
  {
    icon: ShoppingCart,
    title: "Lista zakupów",
    description:
      "Gotowa lista produktów tygodniowych, żebyś zaoszczędził czas i nie kupował niczego zbędnego.",
  },
  {
    icon: UserFocus,
    title: "Spersonalizowane posiłki",
    description:
      "Każdy plan tworzę od zera pod konkretną osobę — uwzględniam preferencje, nietolerancje i tryb dnia.",
  },
  {
    icon: ChatCircleDots,
    title: "Wsparcie online",
    description:
      "Przez cały miesiąc możesz pisać z pytaniami. Odpowiadam i wprowadzam korekty na bieżąco.",
  },
]

const steps = [
  {
    number: "01",
    title: "Analiza",
    description:
      "Wypełniasz kwestionariusz: cele, tryb życia, preferencje kulinarne, alergie. Podajesz pomiary ciała.",
  },
  {
    number: "02",
    title: "Planowanie",
    description:
      "W ciągu 48–72 godzin przygotowuję spersonalizowany plan żywieniowy z przepisami i listą zakupów.",
  },
  {
    number: "03",
    title: "Realizacja",
    description:
      "Otrzymujesz gotowy plan w PDF. Jestem dostępny przez miesiąc na pytania i wprowadzanie korekt.",
  },
]

const faqItems = [
  {
    question: "Czym różni się Twoja dieta od diety z internetu?",
    answer:
      "Każdy plan tworzę indywidualnie od podstaw — nie korzystam z szablonów. Uwzględniam Twój metabolizm, poziom aktywności, preferencje smakowe, nietolerancje pokarmowe i harmonogram dnia. Dieta z internetu to produkt masowy, moja dieta to narzędzie dopasowane do Ciebie.",
  },
  {
    question: "Ile czasu potrzebuję na przygotowanie się do diety?",
    answer:
      "Po wypełnieniu kwestionariusza (ok. 10–15 minut) zajmuję się wszystkim. Plan dostarczam w ciągu 48–72 godzin roboczych w formie przejrzystego PDF z przepisami i listą zakupów.",
  },
  {
    question: "Co się dzieje, jeśli nie toleruję jakiegoś produktu?",
    answer:
      "W kwestionariuszu pytam o wszystkie preferencje, nietolerancje i alergie. Planuję posiłki wokół produktów, które możesz i lubisz jeść. W razie potrzeby po otrzymaniu planu mogę wprowadzić zamiany.",
  },
  {
    question: "Czy dieta obejmuje wsparcie po otrzymaniu planu?",
    answer:
      "Tak. Przez 30 dni od dostarczenia planu jesteś pod moją opieką — możesz pisać z pytaniami, zgłaszać trudności lub prosić o modyfikacje. Odpowiadam w ciągu 24 godzin.",
  },
  {
    question: "Jak płacę i kiedy otrzymam plan?",
    answer:
      "Po zamówieniu kontaktujesz się ze mną przez formularz lub telefonicznie pod numer +48 534 214 398. Płatność przelewem lub Blikiem. Plan trafia do Ciebie mailowo w ciągu 48–72 godzin od zaksięgowania wpłaty.",
  },
  {
    question: "Czy dieta jest odpowiednia dla wegetarian i wegan?",
    answer:
      "Tak, bez żadnego problemu. W kwestionariuszu zaznaczasz swój styl żywienia, a ja dopasowuję całe menu do diety roślinnej lub wegetariańskiej — z pełnym pokryciem zapotrzebowania na białko, żelazo, witaminę B12 i pozostałe kluczowe składniki odżywcze.",
  },
  {
    question: "Ile kosztuje przedłużenie diety po 4 tygodniach?",
    answer:
      "Przedłużenie kolejnego miesiąca to koszt 149 zł — preferencyjnie dla stałych klientów. Kolejny plan uwzględnia Twoje postępy, zmiany wagi i feedback z poprzedniego miesiąca, więc jest jeszcze bardziej celny niż pierwsze zlecenie.",
  },
  {
    question: "Czy mogę zamówić dietę dla pary lub rodziny?",
    answer:
      "Tak, oferuję pakiety dla par i rodzin w obniżonej cenie. Każda osoba otrzymuje własny, indywidualnie przygotowany plan uwzględniający jej cel, wiek i zapotrzebowanie. Skontaktuj się ze mną przed zakupem, żebym mógł wycenić pakiet.",
  },
  {
    question: "Jak wygląda kwestionariusz przed ułożeniem diety?",
    answer:
      "Kwestionariusz obejmuje: dane biometryczne (waga, wzrost, wiek, płeć), poziom aktywności fizycznej, cel główny (redukcja, masa, zdrowie), preferencje kulinarne i potrawy których nie lubisz, alergie i nietolerancje, liczbę posiłków dziennie oraz godziny ich spożycia. Wypełnienie zajmuje ok. 10–15 minut i możesz to zrobić przez formularz online lub w wiadomości.",
  },
  {
    question: "Czy dieta uwzględnia suplementację?",
    answer:
      "Na życzenie dołączam rekomendacje suplementacyjne dostosowane do Twojego celu — np. kreatyna przy budowie masy, witamina D i kwasy omega-3 przy redukcji, kolagen i magnez przy intensywnym treningu. Suplementy traktuję jako dodatek, nie substytut diety.",
  },
  {
    question: "Czy mogę jeść słodycze na diecie?",
    answer:
      "Tak — i to jest jeden z filarów mojej filozofii żywieniowej. Stosuję podejście Flexible Dieting: żaden produkt nie jest całkowicie zakazany. Słodycze, fast food czy ulubione przekąski mogą mieć swoje miejsce w diecie — o ile mieszczą się w dziennym bilansie kalorycznym i makroskładników. To sprawia, że dieta jest realistyczna i możliwa do utrzymania długoterminowo.",
  },
]

const targetGroups = [
  {
    icon: Lightning,
    title: "Osoby chcące schudnąć",
    description:
      "Stosuję podejście oparte na umiarkowanym deficycie kalorycznym — nie drastycznym głodzeniu. Schudniesz w tempie 0,5–1 kg tygodniowo, zachowując mięśnie, energię i dobre samopoczucie. Bez efektu jo-jo.",
  },
  {
    icon: Barbell,
    title: "Sportowcy budujący masę",
    description:
      "Budowa masy to sztuka precyzyjnego nadwyżki kalorycznej i odpowiedniej podaży białka. Obliczam Twoje zapotrzebowanie co do kilokaloriii i gramu białka, żebyś rósł w mięśnie — nie w tłuszcz.",
  },
  {
    icon: Heartbeat,
    title: "Osoby z nietolerancjami",
    description:
      "Nietolerancja laktozy, glutenu, histaminy czy alergia pokarmowa nie jest przeszkodą. Każde menu układam z uwzględnieniem Twoich ograniczeń — pełnowartościowo, smacznie i bez produktów, które Ci szkodzą.",
  },
  {
    icon: Leaf,
    title: "Osoby szukające zdrowych nawyków",
    description:
      "Jeśli nie chodzi Ci o drastyczne zmiany, ale o nauczenie się jeść lepiej na co dzień — to też jest dla Ciebie. Pomagam budować nawyki żywieniowe, które zostają na lata, a nie tylko na czas diety.",
  },
]

const topCitySlugs = ["warszawa", "krakow", "gdansk", "wroclaw", "poznan", "lodz", "katowice", "torun", "bydgoszcz", "szczecin"]
const topCities = cities.filter((c) => topCitySlugs.includes(c.slug))

export default function DietaOnlinePage() {
  return (
    <LenisProvider>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Dieta Online", url: "/dieta-online" },
        ]}
      />
      <ServicePageSchema
        name="Dieta 4-tygodniowa Online"
        description="Spersonalizowany plan żywieniowy 4-tygodniowy dopasowany do celów, metabolizmu i stylu życia klienta."
        price="199"
        url="/dieta-online"
      />
      <CourseSchema
        name="Dieta 4-tygodniowa Online"
        description="Spersonalizowany plan żywieniowy 4-tygodniowy dopasowany do Twoich celów, metabolizmu i stylu życia. Obejmuje analizę metabolizmu, kalkulację kaloryczną, rozkład makroskładników i listę zakupów."
        price="199"
        url="https://jantrenerchmielewski.pl/dieta-online"
        duration="P4W"
      />
      <FAQSchema questions={faqItems} />
      <HowToSchema
        name="Jak zamówić indywidualną dietę online"
        description="Trzy kroki do spersonalizowanego planu żywieniowego od Jana Chmielewskiego — Magistra Fizjoterapii i trenera z 8-letnim doświadczeniem."
        steps={steps.map((s) => ({ name: s.title, text: s.description }))}
      />

      <Navbar />

      <main className="min-h-[100dvh]">
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden pt-32 pb-20">
          {/* Background glow */}
          <div
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full blur-[120px] opacity-20"
            style={{ background: "var(--cyan)" }}
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <ScrollReveal delay={0}>
                  <p className="text-label mb-4" style={{ color: "var(--cyan)" }}>
                    Usługa online — cała Polska
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <h1 className="text-display-sm mb-6 text-[clamp(2.5rem,5vw,4.5rem)]">
                    Indywidualna dieta{" "}
                    <span className="text-gradient-cyan">dopasowana do Twoich celów</span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <p className="text-body-lg mb-8 text-muted-foreground">
                    Jako Magister Fizjoterapii i trener z 8-letnim doświadczeniem tworzę diety, które
                    działają. Nie szablony — prawdziwa analiza Twojego ciała i stylu życia.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <div className="flex flex-wrap items-center gap-4">
                    <CTAButton href="/kontakt?service=dieta" size="lg">
                      Zamów dietę — 199 zł
                    </CTAButton>
                    <a
                      href="tel:+48534214398"
                      className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Zadzwoń: +48 534 214 398"
                    >
                      +48 534 214 398
                    </a>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <div className="mt-8 flex flex-wrap gap-6">
                    {[
                      { value: "48h", label: "czas realizacji" },
                      { value: "200+", label: "zadowolonych klientów" },
                      { value: "8 lat", label: "doświadczenia" },
                    ].map((stat) => (
                      <div key={stat.label} className="flex flex-col gap-1">
                        <span className="text-mono-metric text-2xl font-bold text-gradient-cyan">
                          {stat.value}
                        </span>
                        <span className="text-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.2} direction="left">
                <div className="relative">
                  <div className="border-glow glow-cyan overflow-hidden rounded-2xl">
                    <Image
                      src="/images/oferta-dieta.png"
                      alt="Plan diety — zdrowy posiłek i tablet z jadłospisem"
                      width={800}
                      height={500}
                      className="w-full object-cover"
                      priority
                    />
                  </div>
                  {/* Price badge */}
                  <div
                    className="absolute -bottom-4 -right-4 rounded-2xl border-glow px-6 py-4 text-center glow-cyan"
                    style={{ background: "var(--card)" }}
                  >
                    <p className="text-mono-metric text-3xl font-bold text-gradient-cyan">199 zł</p>
                    <p className="text-label mt-1">jednorazowo</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== TRUST BADGES ===== */}
        <div className="py-8">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <TrustBadges />
          </div>
        </div>

        {/* ===== FEATURES ===== */}
        <section className="py-20" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Co zawiera plan
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Kompleksowe podejście do odżywiania
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
              {features.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 0.07} className="h-full flex">
                  <article className="group h-full flex flex-col border-glow rounded-xl p-6 transition-all hover:glow-cyan" style={{ background: "var(--background)" }}>
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
                <h2 className="text-display-sm text-3xl md:text-5xl">3 kroki do Twojej diety</h2>
              </div>
            </ScrollReveal>

            <div className="relative grid gap-8 md:grid-cols-3">
              {/* Connector line */}
              <div
                className="pointer-events-none absolute top-10 left-0 right-0 hidden h-px md:block"
                style={{ background: "linear-gradient(to right, transparent, var(--cyan), transparent)", opacity: 0.3 }}
                aria-hidden="true"
              />

              {steps.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 0.1}>
                  <div className="relative flex flex-col items-center text-center">
                    <div
                      className="relative mb-6 flex size-20 items-center justify-center rounded-full border-glow glow-cyan"
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

        {/* ===== METODOLOGIA ===== */}
        <section className="py-20" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Moja metodologia
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Moja metodologia żywieniowa
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div
                className="mx-auto max-w-4xl rounded-2xl border border-border p-8 md:p-12 space-y-6"
                style={{ background: "var(--card)" }}
              >
                <div>
                  <h3
                    className="mb-3 text-xl font-bold"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--cyan)" }}
                  >
                    Kalkulacja oparta na dowodach naukowych
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Zapomnij o dietach liczonych „na oko" albo opartych wyłącznie na intuicji. Każdy
                    plan żywieniowy zaczynam od precyzyjnego obliczenia Twojego całkowitego
                    dobowego zapotrzebowania energetycznego — z uwzględnieniem podstawowej przemiany
                    materii (PPM według wzorów Mifflin-St Jeor lub Cunninghama dla osób aktywnych),
                    współczynnika aktywności fizycznej (PAL) oraz termicznego efektu pożywienia
                    (TEF). Dopiero na tej bazie buduję deficyt lub nadwyżkę kaloryczną dostosowaną
                    do Twojego celu — bez zgadywania, bez szablonów.
                  </p>
                </div>

                <div>
                  <h3
                    className="mb-3 text-xl font-bold"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--cyan)" }}
                  >
                    Flexible Dieting — żaden produkt nie jest zakazany
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Stosuję filozofię Flexible Dieting (IIFYM — If It Fits Your Macros): żaden
                    produkt nie jest z góry wykluczony. Pizza, słodycze, ulubiony deser — mogą mieć
                    swoje miejsce w diecie, o ile mieszczą się w dobowym bilansie makroskładników.
                    Takie podejście sprawia, że dieta przestaje być karą, a staje się stylem życia.
                    Badania konsekwentnie pokazują, że diety bez skrajnych restrykcji są znacznie
                    lepiej przestrzegane w długim terminie i przynoszą trwalsze efekty niż modne
                    diety eliminacyjne.
                  </p>
                </div>

                <div>
                  <h3
                    className="mb-3 text-xl font-bold"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--cyan)" }}
                  >
                    Wiedza fizjoterapeutyczna w służbie odżywiania
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Jako Magister Fizjoterapii patrzę na odżywianie szerzej niż przeciętny
                    dietetyk. Uwzględniam właściwości przeciwzapalne i prozapalne produktów
                    spożywczych, rolę kwasów omega-3 w regeneracji tkanek, znaczenie kolagenu i
                    witaminy C dla stawów oraz wpływ magnezu na skurcz mięśniowy. Dla klientów z
                    urazami, przewlekłymi dolegliwościami stawowymi lub po operacjach opracowuję
                    dietę wspierającą procesy naprawcze — nie tylko sylwetkę. To unikalna
                    perspektywa, której nie znajdziesz u standardowych dietetyków online.
                  </p>
                </div>

                <div>
                  <h3
                    className="mb-3 text-xl font-bold"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--cyan)" }}
                  >
                    Periodyzacja żywienia wokół cykli treningowych
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Odżywianie i trening są nierozłączne. W planach dla osób aktywnych stosuję
                    periodyzację żywienia — większe spożycie węglowodanów w dni treningowe
                    (carb-timing), odpowiednia podaż białka w oknie anabolicznym po treningu oraz
                    zredukowana kaloryczność w dni regeneracji. Taki cykl sprawia, że organizm
                    maksymalnie wykorzystuje każdą sesję na siłowni, szybciej się regeneruje i
                    buduje lub ochrania tkankę mięśniową nawet w trakcie redukcji.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== DLA KOGO ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Dopasowanie
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Dla kogo jest dieta online?
                </h2>
                <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
                  Nie ma jednej diety dla wszystkich. Dlatego każdy plan tworzę od zera — niezależnie
                  od tego, jaki jest Twój cel i punkt startowy.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {targetGroups.map((group, i) => (
                <ScrollReveal key={group.title} delay={i * 0.08}>
                  <article className="rounded-xl border border-border bg-card p-6">
                    <group.icon
                      className="mb-4 size-8"
                      style={{ color: "var(--cyan)" }}
                      weight="duotone"
                      aria-hidden="true"
                    />
                    <h3
                      className="mb-3 text-lg font-bold"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {group.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {group.description}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CZEGO SIE SPODZIEWAC ===== */}
        <section className="py-20" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Realistyczne oczekiwania
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Czego możesz się spodziewać?
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground">
                <p>
                  Pierwsze dwa tygodnie to zazwyczaj faza adaptacji. Twój organizm przyzwyczaja się
                  do nowego rytmu posiłków, kaloryczności i składu makroskładników. Możesz odczuć
                  lekkie zmiany energii — to naturalny proces przestrajania metabolizmu. W tym
                  czasie najważniejsza jest konsekwencja i trzymanie się planu bez improwizowania.
                </p>
                <p>
                  W tygodniach trzecim i czwartym pierwsze wymierne efekty stają się widoczne:
                  redukcja tkanki tłuszczowej, lepsza kompozycja ciała, więcej energii w ciągu
                  dnia, lepszy sen i poprawa wyników treningowych. Przy redukcji realistyczny wynik
                  to 0,5–1 kg utraconej tłuszczowej masy ciała tygodniowo. Przy budowie masy —
                  wzrost siły i stopniowy przyrost beztłuszczowej masy mięśniowej.
                </p>
                <p>
                  Kluczem do sukcesu jest konsekwencja — nie perfekcja. Jeśli jeden dzień nie
                  wyjdzie idealnie, to nie katastrofa. Ważne, żeby wracać do planu następnego dnia.
                  Jestem dostępny przez cały miesiąc właśnie po to, żebyś miał wsparcie w trudnych
                  momentach i nie musiał zaczynać wszystkiego od nowa po każdej potknięciu.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== POROWNANIE ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Różnica
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Dieta online vs diety z internetu
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {/* Diety z internetu */}
              <ScrollReveal delay={0}>
                <div className="rounded-xl border border-border bg-card/50 p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <XCircle
                      className="size-7 shrink-0"
                      style={{ color: "var(--muted-foreground)" }}
                      weight="duotone"
                      aria-hidden="true"
                    />
                    <h3
                      className="text-lg font-bold text-muted-foreground"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Diety z internetu
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {[
                      "Generyczny szablon dla wszystkich",
                      "Brak kalkulacji Twojego metabolizmu",
                      "Zero wsparcia i możliwości korekt",
                      "Jedno menu pasujące do nikogo",
                      "Brak wiedzy o Twoich nietolerancjach",
                      "Nikt nie pyta o Twój tryb życia",
                      "Efekty, jeśli w ogóle, krótkotrwałe",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 shrink-0 size-1.5 rounded-full bg-muted-foreground/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Dieta od Jana */}
              <ScrollReveal delay={0.1}>
                <div
                  className="rounded-xl border-2 p-8 h-full"
                  style={{ borderColor: "var(--cyan)", background: "var(--card)" }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle
                      className="size-7 shrink-0"
                      style={{ color: "var(--cyan)" }}
                      weight="duotone"
                      aria-hidden="true"
                    />
                    <h3
                      className="text-lg font-bold"
                      style={{ fontFamily: "var(--font-heading)", color: "var(--cyan)" }}
                    >
                      Dieta od Jana
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    {[
                      "Spersonalizowana kalkulacja makroskładników",
                      "Analiza metabolizmu na podstawie Twoich danych",
                      "Wsparcie i korekty przez 30 dni",
                      "Menu dostosowane do Twoich preferencji",
                      "Uwzględnienie alergii i nietolerancji",
                      "Dostosowanie do Twojego harmonogramu dnia",
                      "Trwałe efekty i wypracowane nawyki",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="mt-1 shrink-0 size-1.5 rounded-full"
                          style={{ background: "var(--cyan)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
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

        {/* ===== ZASIEG — MIASTA ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-10 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Zasięg ogólnopolski
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Dieta online dostępna w całej Polsce
                </h2>
                <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
                  Prowadzę klientów z całego kraju — wystarczy internet i chęć zmiany. Poniżej
                  znajdziesz strony z informacjami dla klientów z największych miast Polski.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap justify-center gap-3">
                {topCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/dieta-online-${city.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-[var(--cyan)] hover:text-foreground"
                  >
                    Dieta online {city.name}
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== POWIAZANE USLUGI ===== */}
        <section className="py-20" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-10 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Powiązane usługi
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Dieta to dopiero początek
                </h2>
                <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
                  Połącz dietę z planem treningowym lub kompleksowym prowadzeniem online — i osiągnij
                  wyniki szybciej niż myślisz.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
              {[
                {
                  href: "/plan-treningowy",
                  label: "Uzupełnij dietę treningiem",
                  title: "Plan Treningowy",
                  description:
                    "8-tygodniowy program ćwiczeń dopasowany do Twojego poziomu, celu i dostępnego sprzętu. Idealnie współpracuje z planem żywieniowym.",
                  price: "149 zł",
                },
                {
                  href: "/prowadzenie-online",
                  label: "Kompleksowe prowadzenie",
                  title: "Prowadzenie Online",
                  description:
                    "Dieta + trening + stały kontakt i cotygodniowe korekty. Najbardziej efektywna opcja dla osób stawiających na szybkie i trwałe efekty.",
                  price: "399 zł / mies.",
                },
                {
                  href: "/trening-personalny-chelmza",
                  label: "Trening stacjonarny",
                  title: "Trening Personalny",
                  description:
                    "Dla klientów z Chełmży i okolic — treningi stacjonarne z Janem. Idealne uzupełnienie diety dla osób, które wolą pracować pod bezpośrednim okiem trenera.",
                  price: "od 149 zł",
                },
              ].map((service, i) => (
                <ScrollReveal key={service.href} delay={i * 0.08}>
                  <Link href={service.href} className="group block h-full">
                    <article className="h-full rounded-xl border border-border bg-card/50 p-6 transition-all group-hover:border-[var(--cyan)] group-hover:bg-card">
                      <p className="text-label mb-2" style={{ color: "var(--cyan)" }}>
                        {service.label}
                      </p>
                      <h3
                        className="mb-3 text-lg font-bold"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {service.title}
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <p
                        className="text-sm font-bold"
                        style={{ color: "var(--cyan)" }}
                      >
                        {service.price}
                      </p>
                    </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-24 text-center relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{ background: "radial-gradient(ellipse at center, var(--cyan) 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <ScrollReveal>
              <p className="text-label mb-4" style={{ color: "var(--cyan)" }}>
                Gotowy na zmianę?
              </p>
              <h2 className="text-display-sm mb-6 text-3xl md:text-5xl">
                Zacznij jeść mądrze już dziś
              </h2>
              <p className="text-body-lg mx-auto mb-10 text-muted-foreground max-w-xl">
                199 zł za plan, który realnie zmieni Twoje nawyki żywieniowe. Realizacja w 48 godzin.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <CTAButton href="/kontakt" size="lg">
                  Zamów dietę — 199 zł
                </CTAButton>
                <CTAButton href="/cennik" variant="secondary">
                  Zobacz wszystkie usługi
                </CTAButton>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Pytania?{" "}
                <a
                  href="tel:+48534214398"
                  className="underline hover:text-foreground transition-colors"
                  aria-label="Zadzwoń do Jana Chmielewskiego"
                >
                  +48 534 214 398
                </a>
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </LenisProvider>
  )
}
