import type { Metadata } from "next"
import Link from "next/link"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { CTAButton } from "@/components/shared/CTAButton"
import { TrustBadges } from "@/components/shared/TrustBadges"
import { PriceCard } from "@/components/shared/PriceCard"
import {
  BreadcrumbSchema,
  ServicePageSchema,
  FAQSchema,
  HowToSchema,
  LocalBusinessSchema,
} from "@/components/seo/JsonLd"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  Users,
  Heartbeat,
  Crosshair,
  Trophy,
  MapPin,
  Phone,
  UserFocus,
} from "@phosphor-icons/react/dist/ssr"
import { cities } from "@/lib/data/cities"

export const metadata: Metadata = {
  title: "Trening Personalny Chełmża — od 149 zł/sesja",
  description:
    "Trening personalny 1 na 1 w Chełmży. Indywidualne podejście, elementy fizjoterapii, kontrola techniki. Jan Chmielewski — Magister Fizjoterapii, ul. 3 Maja 18A, Chełmża.",
  keywords: [
    "trening personalny Chełmża",
    "trener personalny Chełmża",
    "trener personalny Toruń",
    "trening personalny",
    "personal trainer Chełmża",
    "Jan Chmielewski trening",
  ],
  openGraph: {
    title: "Trening Personalny Chełmża — od 149 zł/sesja | Jan Chmielewski",
    description:
      "Trening 1 na 1 z Magistrem Fizjoterapii w Chełmży. Indywidualne podejście, elementy fizjoterapii, kontrola techniki.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Trening personalny Chełmża — Jan Chmielewski",
      },
    ],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://jantrenerchmielewski.pl/trening-personalny-chelmza",
  },
}

const features = [
  {
    icon: Users,
    title: "Sesje 1 na 1",
    description:
      "Twój trening. Twoje tempo. Twoje cele. Zero rozpraszania się — pełna koncentracja na Tobie przez cały czas sesji.",
  },
  {
    icon: Crosshair,
    title: "Indywidualne podejście",
    description:
      "Każda sesja jest zaplanowana pod Twój poziom, możliwości i cel. Żadnych standardowych szablonów.",
  },
  {
    icon: Heartbeat,
    title: "Elementy fizjoterapii",
    description:
      "Jako Magister Fizjoterapii identyfikuję dysfunkcje ruchowe i włączam ćwiczenia korekcyjne do treningu.",
  },
  {
    icon: Trophy,
    title: "Kontrola techniki",
    description:
      "Każde ćwiczenie wykonujesz pod okiem specjalisty. Bezpiecznie, efektywnie i z pełną kontrolą ciała.",
  },
  {
    icon: Heartbeat,
    title: "Motywacja i wsparcie",
    description:
      "Trening z trenerem to znacznie więcej niż ćwiczenia — to zobowiązanie, dyscyplina i ktoś, kto nie pozwoli Ci odpuścić.",
  },
]

const pricingOptions = [
  {
    title: "Pojedyncza sesja",
    price: "149 zł",
    period: "/ sesja",
    features: [
      "60 minut 1 na 1",
      "Dostosowany plan sesji",
      "Kontrola techniki",
      "Elementy fizjoterapii",
      "Konsultacja po sesji",
    ],
    href: "/kontakt?service=trening",
    highlighted: false,
    ctaLabel: "Umów trening",
  },
  {
    title: "Pakiet 10 treningów",
    price: "1\u00A0119 zł",
    period: "/ 10 sesji",
    badge: "Oszczędzasz 371 zł",
    features: [
      "10 sesji 1 na 1 (60 min)",
      "Dostosowany plan każdej sesji",
      "Kontrola techniki",
      "Elementy fizjoterapii",
      "Konsultacja po każdej sesji",
      "Priorytetowe terminy",
    ],
    href: "/kontakt?service=trening",
    highlighted: true,
    ctaLabel: "Umów trening",
  },
]

const targetGroups = [
  {
    title: "Początkujący",
    description:
      "Dopiero zaczynasz swoją przygodę z treningiem? Uczę prawidłowych wzorców ruchowych od podstaw, buduję solidne fundamenty i sprawiam, że trening staje się nawykiem — nie obowiązkiem.",
  },
  {
    title: "Osoby po kontuzjach",
    description:
      "Masz za sobą operację, uraz kręgosłupa lub przewlekły ból? Jako Magister Fizjoterapii dobieram ćwiczenia, które rehabilitują zamiast szkodzić — i wracają Cię do pełnej sprawności.",
  },
  {
    title: "Seniorzy",
    description:
      "Trening w każdym wieku ma sens. Dla seniorów skupiam się na sile funkcjonalnej, równowadze, mobilności i prewencji upadków — by pozostawać sprawnym i samodzielnym jak najdłużej.",
  },
  {
    title: "Sportowcy",
    description:
      "Chcesz przełamać plateau, poprawić wyniki lub zadbać o ciało po sezonie? Pracuję z zawodnikami różnych dyscyplin — dostarczam analizę biomechaniczną i periodyzację treningową.",
  },
]

const sessionSteps = [
  {
    number: "01",
    name: "Wywiad zdrowotny",
    duration: "15 min",
    text: "Rozmowa o Twoim stanie zdrowia, historii kontuzji, obecnych dolegliwościach, stylu życia i celach. Zbieramy informacje niezbędne do bezpiecznego i skutecznego planowania treningu.",
  },
  {
    number: "02",
    name: "Screening ruchowy",
    duration: "15 min",
    text: "Oceniam wzorce ruchowe: jakość przysiadu, wyprostu bioder, stabilizacji tułowia i mobilności stawów. Identyfikuję dysfunkcje i asymetrie, które mogłyby prowadzić do kontuzji.",
  },
  {
    number: "03",
    name: "Trening próbny",
    duration: "30 min",
    text: "Przeprowadzam skróconą sesję treningową dostosowaną do wyników screeningu i Twoich celów. Uczę techniki kluczowych ćwiczeń i obserwuję reakcję ciała na obciążenie.",
  },
  {
    number: "04",
    name: "Omówienie planu",
    duration: "10 min",
    text: "Podsumowujemy obserwacje, ustalamy kierunek współpracy, częstotliwość sesji i długoterminowy plan działania. Odpowiadam na wszystkie pytania i omawiamy kolejne kroki.",
  },
]

const faqItems = [
  {
    question: "Gdzie odbywają się treningi personalne?",
    answer:
      "Treningi odbywają się w Chełmży przy ul. 3 Maja 18A (87-140 Chełmża). Lokalizacja jest łatwo dostępna samochodem z centrum Chełmży i okolic Torunia.",
  },
  {
    question: "Jak długo trwa jedna sesja treningowa?",
    answer:
      "Standardowa sesja treningowa trwa 60 minut. W tym czasie skupiamy się wyłącznie na Twoim treningu — rozgrzewka, część główna i stretching lub ćwiczenia korekcyjne.",
  },
  {
    question: "Czy jako fizjoterapeuta możesz pomóc z bólami i kontuzjami?",
    answer:
      "Tak — to jedna z moich największych przewag jako trenera. Jako Magister Fizjoterapii identyfikuję dysfunkcje ruchowe, napięcia i kompensacje, które mogą prowadzić do kontuzji. Włączam ćwiczenia korekcyjne i uczę Cię poruszać się bezpiecznie i efektywnie.",
  },
  {
    question: "Czy treningi personalne są dla początkujących?",
    answer:
      "Absolutnie tak. Treningi personalne są idealne dla osób, które dopiero zaczynają — uczę prawidłowych wzorców ruchowych od podstaw, co zapobiega kontuzjom i buduje silne fundamenty. Pracuję też z osobami zaawansowanymi, które chcą przełamać plateau.",
  },
  {
    question: "Jak umówić się na trening?",
    answer:
      "Najszybciej przez telefon lub formularz kontaktowy. Omówimy Twoje cele, dostępność i zaplanujemy pierwsze spotkanie. Pierwszy trening to też konsultacja — sprawdzamy poziom i ustalamy kierunek współpracy.",
  },
  {
    question: "Ile treningów tygodniowo potrzebuję, żeby zobaczyć efekty?",
    answer:
      "To zależy od celu i poziomu zaawansowania. Dla osób początkujących rekomendowane są 2 sesje tygodniowo — dają wystarczającą stymulację przy odpowiednim czasie na regenerację. Przy zaawansowanych celach sportowych możemy przejść na 3 sesje. Efekty widoczne są już po 4–6 tygodniach regularnej pracy.",
  },
  {
    question: "Czy mogę ćwiczyć, jeśli mam bóle kręgosłupa?",
    answer:
      "W większości przypadków tak — i właśnie trening personalny z fizjoterapeutą jest wtedy najlepszym rozwiązaniem. Bóle kręgosłupa bardzo często wynikają z osłabienia mięśni głębokich, złych wzorców ruchowych lub siedzącego trybu życia. Dobieram ćwiczenia, które wzmacniają stabilizację bez obciążania bolących struktur.",
  },
  {
    question: "Czy trening personalny różni się od zajęć grupowych?",
    answer:
      "Zdecydowanie tak. Na zajęciach grupowych instruktor obserwuje jednocześnie kilkanaście lub kilkadziesiąt osób — nie jest w stanie korygować techniki każdego. W treningu personalnym 1 na 1 każde powtórzenie, każdy ruch jest pod kontrolą. To przekłada się na bezpieczeństwo, szybsze efekty i brak wyuczonych błędów technicznych.",
  },
  {
    question: "Czy konieczne jest wcześniejsze doświadczenie siłowniowe?",
    answer:
      "Nie. Treningi personalne są równie wartościowe dla kogoś, kto nigdy nie był na siłowni, jak i dla osoby ćwiczącej od lat. Dla zupełnych początkujących pierwsza sesja jest łagodna i edukacyjna — uczymy się razem, jak działa Twoje ciało i co chcemy osiągnąć.",
  },
  {
    question: "Co powinienem zabrać na pierwsze spotkanie?",
    answer:
      "Wygodny strój sportowy, buty sportowe z odpowiednią podeszwą (nie klapki), bidon z wodą. Opcjonalnie: wyniki badań lub dokumentację medyczną, jeśli masz przewlekłe schorzenia lub przeszłeś operację. Reszta jest po mojej stronie.",
  },
  {
    question: "Czy oferujesz trening dla seniorów powyżej 60 lat?",
    answer:
      "Tak i jest to jedna z moich specjalizacji. Trening dla seniorów koncentruje się na sile funkcjonalnej, balansie, gęstości kości i prewencji upadków. Intensywność i dobór ćwiczeń są zawsze dostosowane do aktualnego stanu zdrowia, możliwości i celu osoby trenującej.",
  },
]

const top8Cities = cities.filter((c) => c.slug !== "chelmza").slice(0, 8)

export default function TreningPersonalnyChelmzaPage() {
  return (
    <LenisProvider>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Trening Personalny Chełmża", url: "/trening-personalny-chelmza" },
        ]}
      />
      <ServicePageSchema
        name="Trening Personalny Chełmża"
        description="Indywidualny trening personalny 1 na 1 z elementami fizjoterapii w Chełmży. Profesjonalna kontrola techniki i spersonalizowane podejście."
        price="149"
        url="/trening-personalny-chelmza"
      />
      <FAQSchema questions={faqItems} />
      <LocalBusinessSchema />
      <HowToSchema
        name="Jak wygląda pierwsza sesja treningu personalnego w Chełmży"
        description="Przewodnik po pierwszym spotkaniu z trenerem personalnym Janem Chmielewskim w Chełmży — od wywiadu zdrowotnego po ustalenie planu współpracy."
        steps={sessionSteps.map((s) => ({ name: s.name, text: s.text }))}
      />

      <Navbar />

      <main className="min-h-[100dvh]">
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div
            className="pointer-events-none absolute top-0 left-0 h-[500px] w-[500px] rounded-full blur-[120px] opacity-15"
            style={{ background: "var(--cyan)" }}
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <ScrollReveal delay={0}>
                <div className="mb-4 flex items-center gap-2">
                  <MapPin
                    className="size-4"
                    style={{ color: "var(--cyan)" }}
                    weight="fill"
                    aria-hidden="true"
                  />
                  <p className="text-label" style={{ color: "var(--cyan)" }}>
                    Chełmża — ul. 3 Maja 18A
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-display-sm mb-6 text-[clamp(2.5rem,5vw,4.5rem)]">
                  Trening personalny{" "}
                  <span className="text-gradient-cyan">na najwyższym poziomie</span>{" "}
                  w Chełmży
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-body-lg mb-8 text-muted-foreground max-w-2xl">
                  Jako jedyna osoba w regionie łączę wiedzę Magistra Fizjoterapii z 8-letnim
                  doświadczeniem trenera personalnego i tytułem Finalisty Mistrzostw Polski w
                  kulturystyce. Twój trening jest bezpieczny, skuteczny i indywidualny.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-4">
                  <CTAButton href="/kontakt?service=trening" size="lg">
                    Umów trening — od 149 zł
                  </CTAButton>
                  <a
                    href="tel:+48534214398"
                    className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Zadzwoń: +48 534 214 398"
                  >
                    <Phone className="size-4" weight="fill" aria-hidden="true" />
                    +48 534 214 398
                  </a>
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
        <section className="py-20 section-glow" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Dlaczego warto
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Co wyróżnia trening ze mną
                </h2>
              </div>
            </ScrollReveal>

            {/* Top row — 3 cards */}
            <div className="grid gap-6 sm:grid-cols-3">
              {features.slice(0, 3).map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 0.08} className="h-full flex">
                  <article
                    className="h-full flex flex-col border-glow rounded-xl p-6 transition-all hover:glow-cyan"
                    style={{ background: "var(--background)" }}
                  >
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

            {/* Bottom row — 2 cards centered */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
              {features.slice(3).map((feature, i) => (
                <ScrollReveal key={feature.title} delay={(i + 3) * 0.08} className="h-full flex">
                  <article
                    className="h-full flex flex-col border-glow rounded-xl p-6 transition-all hover:glow-cyan"
                    style={{ background: "var(--background)" }}
                  >
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

        {/* ===== DLACZEGO TRENING Z FIZJOTERAPEUTĄ ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Unikalna przewaga
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Dlaczego trening z fizjoterapeutą?
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <article
                className="mx-auto max-w-4xl rounded-2xl border-glow p-8 md:p-12 space-y-6"
                style={{ background: "var(--card)" }}
              >
                <div>
                  <h3
                    className="mb-3 text-xl font-semibold"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Ocena wzorców ruchowych — fundament bezpiecznego treningu
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Większość urazów i bólów przeciążeniowych nie pojawia się nagle — są wynikiem
                    miesięcy lub lat kompensacji i nieprawidłowych wzorców ruchowych. Jako Magister
                    Fizjoterapii przeprowadzam szczegółowy screening ruchowy już przed pierwszą
                    sesją. Oceniam jakość przysiadu, stabilizację w płaszczyźnie czołowej,
                    mobilność stawów biodrowych i piersiowego odcinka kręgosłupa, a także wzorzec
                    dźwigania i wypychania. Wyniki tego badania stają się podstawą całego programu
                    treningowego — nie zaczynamy od ciężarów, zanim nie upewnimy się, że Twoje
                    ciało porusza się prawidłowo.
                  </p>
                </div>

                <div>
                  <h3
                    className="mb-3 text-xl font-semibold"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Prewencja kontuzji jako integralna część treningu
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Standardowy trener personalny skupia się na tym, żebyś wykonał zaplanowane
                    powtórzenia. Trener z wykształceniem fizjoterapeutycznym widzi więcej — zauważa
                    moment, gdy kolano „zapada" do wewnątrz podczas przysiadu, gdy łopatka
                    odstaje podczas wyciskania, gdy stopa pronuje przy wykroku. Każda z tych
                    kompensacji, bagatelizowana przez miesiące, może skończyć się kontuzją
                    wymagającą rehabilitacji. W moim podejściu prewencja jest wpleciona w każdą
                    sesję: ćwiczenia aktywacyjne, technika korekcyjna i monitorowanie wzorców
                    ruchowych chronią Cię tak samo jak rozgrzewka i schłodzenie.
                  </p>
                </div>

                <div>
                  <h3
                    className="mb-3 text-xl font-semibold"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Rehabilitacja przez trening — powrót do formy po kontuzji
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Jednym z największych mitów w branży fitness jest przekonanie, że po kontuzji
                    „nie wolno ćwiczyć". W rzeczywistości odpowiednio dobrany ruch jest kluczem
                    do szybszego powrotu do zdrowia. Pracuję z osobami po operacjach kolan i
                    barków, z przepuklinami krążków międzykręgowych, po złamaniach i przewlekłych
                    zespołach bólowych. Każdy program jest dostosowany indywidualnie do aktualnego
                    stanu zdrowia — unikamy obciążeń, które szkodzą, a stosujemy te, które leczą
                    i wzmacniają. Wielu moich klientów zaczynało ze mną właśnie w momencie, gdy
                    skończyła się formalna rehabilitacja i nie wiedzieli, co dalej.
                  </p>
                </div>

                <div>
                  <h3
                    className="mb-3 text-xl font-semibold"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Bezpieczna progresja — jak rozwijać się bez ryzyka przeciążenia
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Progressive overload, czyli stopniowe zwiększanie obciążenia treningowego, jest
                    kluczem do długoterminowych efektów. Problem w tym, że większość osób ćwiczących
                    samodzielnie albo progresuje za szybko (i ląduje z kontuzją), albo zbyt wolno
                    (i stagnuje). Jako trener z wiedzą fizjoterapeutyczną oceniam gotowość Twojego
                    układu mięśniowo-szkieletowego do zwiększenia obciążenia — biorę pod uwagę
                    jakość techniki, sygnały płynące z ciała, stan regeneracji i historię
                    przeciążeń. Progresja w moim programie jest planowa, mierzalna i bezpieczna —
                    bo długoterminowy postęp zawsze jest ważniejszy niż jednorazowy rekord.
                  </p>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== DLA KOGO ===== */}
        <section className="py-20" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Dla każdego
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Dla kogo jest trening personalny?
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {targetGroups.map((group, i) => (
                <ScrollReveal key={group.title} delay={i * 0.08} className="h-full flex">
                  <article
                    className="h-full flex flex-col gap-4 border-glow rounded-xl p-6 transition-all hover:glow-cyan"
                    style={{ background: "var(--background)" }}
                  >
                    <div className="flex items-center gap-3">
                      <UserFocus
                        className="size-8 shrink-0"
                        style={{ color: "var(--cyan)" }}
                        weight="duotone"
                        aria-hidden="true"
                      />
                      <h3
                        className="text-lg font-semibold"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {group.title}
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {group.description}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PIERWSZA SESJA — HOWTO ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Krok po kroku
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Jak wygląda pierwsza sesja
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  Łącznie 70 minut — bez stresu, bez presji, z pełnym obrazem Twoich możliwości.
                </p>
              </div>
            </ScrollReveal>

            <div className="mx-auto max-w-3xl space-y-4">
              {sessionSteps.map((step, i) => (
                <ScrollReveal key={step.name} delay={i * 0.08}>
                  <div
                    className="flex gap-6 rounded-xl border-glow p-6"
                    style={{ background: "var(--card)" }}
                  >
                    <div className="shrink-0 flex flex-col items-center gap-1">
                      <span
                        className="text-2xl font-bold font-mono"
                        style={{ color: "var(--cyan)" }}
                      >
                        {step.number}
                      </span>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {step.duration}
                      </span>
                    </div>
                    <div>
                      <h3
                        className="mb-2 text-lg font-semibold"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {step.name}
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DOJAZD Z TORUNIA ===== */}
        <section className="py-20" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Dostępność
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Dojazd z Torunia — łatwiejszy niż myślisz
                </h2>
              </div>
            </ScrollReveal>

            <div className="mx-auto max-w-3xl">
              <ScrollReveal delay={0.1}>
                <div
                  className="rounded-2xl border-glow p-8 md:p-10 space-y-6"
                  style={{ background: "var(--background)" }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                        Odległość
                      </span>
                      <span className="text-2xl font-bold" style={{ color: "var(--cyan)" }}>
                        18 km
                      </span>
                      <span className="text-sm text-muted-foreground">
                        z centrum Torunia
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                        Czas dojazdu
                      </span>
                      <span className="text-2xl font-bold" style={{ color: "var(--cyan)" }}>
                        ~20 min
                      </span>
                      <span className="text-sm text-muted-foreground">
                        samochodem bez korków
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 border-t border-border pt-6">
                    <p className="text-base leading-relaxed text-muted-foreground">
                      <strong className="text-foreground">Trasa:</strong> Z Torunia dojedziesz
                      drogą DK91 lub autostradą A1 — obie trasy są dobrze oznakowane i
                      komfortowe przez cały rok. Studio mieści się przy ul. 3 Maja 18A w centrum
                      Chełmży, kilka minut od wjazdu do miasta.
                    </p>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      <strong className="text-foreground">Parking:</strong> Bezpłatny parking
                      dostępny bezpośrednio przy obiekcie — nie musisz szukać miejsca ani
                      martwić się strefą płatnego parkowania.
                    </p>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      <strong className="text-foreground">Alternatywa online:</strong> Jeśli
                      wolisz ćwiczyć we własnym mieście lub nie możesz dojechać danego dnia,
                      oferuję pełne prowadzenie online — plan treningowy, dieta, stały kontakt
                      i cotygodniowe korekty. Jakość bez kompromisów, bez wychodzenia z domu.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== PORÓWNANIE: PERSONALNY vs SAMODZIELNY ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Porównanie
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Trening personalny vs samodzielny trening
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border-glow">
                <div
                  className="grid grid-cols-2 divide-x divide-border"
                  style={{ background: "var(--card)" }}
                >
                  {/* Header */}
                  <div
                    className="px-6 py-4 text-center font-semibold"
                    style={{
                      background: "var(--background)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Trening personalny ze mną
                  </div>
                  <div className="px-6 py-4 text-center font-semibold text-muted-foreground">
                    Samodzielny trening
                  </div>

                  {/* Rows */}
                  {[
                    [
                      "Program dostosowany do Twojego ciała i historii zdrowia",
                      "Ogólne plany z internetu, niedopasowane do Ciebie",
                    ],
                    [
                      "Kontrola techniki w czasie rzeczywistym",
                      "Ryzyko wyuczenia błędnych wzorców ruchowych",
                    ],
                    [
                      "Screening fizjoterapeutyczny przed treningiem",
                      "Brak oceny dysfunkcji — ćwiczysz z kompensacjami",
                    ],
                    [
                      "Bezpieczna, planowa progresja obciążeń",
                      "Przypadkowa progresja lub stagnacja",
                    ],
                    [
                      "Motywacja i rozliczalność — ktoś na Ciebie czeka",
                      "Łatwe opuszczanie sesji bez konsekwencji",
                    ],
                    [
                      "Modyfikacja planu w razie bólu lub kontuzji",
                      "Brak wiedzy, co robić gdy coś boli",
                    ],
                  ].map(([pro, con], i) => (
                    <div
                      key={i}
                      className="col-span-2 grid grid-cols-2 divide-x divide-border border-t border-border"
                    >
                      <div className="px-6 py-4 text-sm leading-relaxed text-foreground">
                        {pro}
                      </div>
                      <div className="px-6 py-4 text-sm leading-relaxed text-muted-foreground">
                        {con}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== PRICING ===== */}
        <section className="py-20" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Cennik
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">Ceny treningów</h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 max-w-2xl mx-auto sm:grid-cols-2 items-stretch">
              {pricingOptions.map((option, i) => (
                <ScrollReveal key={option.title} delay={i * 0.1} className="h-full flex">
                  <PriceCard
                    title={option.title}
                    price={option.price}
                    period={option.period}
                    features={option.features}
                    href={option.href}
                    highlighted={option.highlighted}
                    badge={option.badge}
                    ctaLabel={option.ctaLabel}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== MAP ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Lokalizacja
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">Gdzie trenujemy?</h2>
                <address className="mt-4 not-italic text-muted-foreground">
                  ul. 3 Maja 18A, 87-140 Chełmża
                </address>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl border-glow" style={{ height: 400 }}>
                <iframe
                  title="Lokalizacja trenera personalnego Jana Chmielewskiego — Chełmża, ul. 3 Maja 18A"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2399.5!2d18.604!3d53.183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47031fbe5e9b5b5d%3A0x2a3a69b8a60a0a4a!2s3+Maja+18A%2C+87-140+Che%C5%82m%C5%BCa!5e0!3m2!1spl!2spl!4v1"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Mapa z lokalizacją studia treningowego Jana Chmielewskiego w Chełmży"
                />
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

        {/* ===== DOSTĘPNE ONLINE — MIASTA ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Bez granic
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Dostępny również online
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  Pracuję z klientami z całej Polski. Jeśli jesteś spoza Chełmży — prowadzenie
                  online daje Ci dokładnie taką samą jakość i indywidualne podejście.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap justify-center gap-3">
                {top8Cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/trener-personalny-${city.slug}`}
                    className="inline-flex items-center rounded-full border border-border px-5 py-2 text-sm font-medium transition-all hover:border-[var(--cyan)] hover:text-[var(--cyan)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== POWIĄZANE USŁUGI ===== */}
        <section className="py-20" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Kompletna oferta
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Powiązane usługi
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  Trening personalny to jeden z filarów. Sprawdź też pozostałe sposoby,
                  w jakie mogę Ci pomóc osiągnąć cel.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  href: "/dieta-online",
                  label: "Dieta online",
                  title: "Dieta Online",
                  description:
                    "Spersonalizowany plan żywieniowy dopasowany do Twoich celów, trybu życia i preferencji smakowych. Dieta to 70% sukcesu — zadbajmy o nią razem.",
                  price: "od 199 zł",
                },
                {
                  href: "/prowadzenie-online",
                  label: "Prowadzenie online",
                  title: "Prowadzenie Online",
                  description:
                    "Kompleksowe wsparcie na co dzień — plan treningowy, dieta, cotygodniowe korekty i stały kontakt przez Messenger. Cały coaching w jednym pakiecie.",
                  price: "od 399 zł / mies.",
                },
                {
                  href: "/plan-treningowy",
                  label: "Plan treningowy",
                  title: "Plan Treningowy",
                  description:
                    "Gotowy, spersonalizowany program treningowy na 8 tygodni. Ćwiczysz samodzielnie według mojego planu — z pełnym opisem techniki i progresji.",
                  price: "od 149 zł",
                },
              ].map((service, i) => (
                <ScrollReveal key={service.href} delay={i * 0.08} className="h-full flex">
                  <Link
                    href={service.href}
                    aria-label={service.label}
                    className="group h-full flex flex-col border-glow rounded-xl p-6 transition-all hover:glow-cyan"
                    style={{ background: "var(--background)" }}
                  >
                    <p
                      className="mb-1 text-xs font-mono uppercase tracking-widest"
                      style={{ color: "var(--cyan)" }}
                    >
                      {service.price}
                    </p>
                    <h3
                      className="mb-3 text-lg font-semibold transition-colors group-hover:text-[var(--cyan)]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground flex-1">
                      {service.description}
                    </p>
                    <span
                      className="mt-4 text-sm font-medium"
                      style={{ color: "var(--cyan)" }}
                    >
                      Dowiedz się więcej &rarr;
                    </span>
                  </Link>
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
                Chełmża i okolice
              </p>
              <h2 className="text-display-sm mb-6 text-3xl md:text-5xl">
                Umów pierwszą sesję już dziś
              </h2>
              <p className="text-body-lg mx-auto mb-10 text-muted-foreground max-w-xl">
                Skontaktuj się ze mną telefonicznie lub przez formularz — ustalamy termin i zaczynamy.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <CTAButton href="/kontakt?service=trening" size="lg">
                  Umów trening
                </CTAButton>
                <a
                  href="tel:+48534214398"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-semibold transition-all hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Zadzwoń do Jana: +48 534 214 398"
                >
                  <Phone className="size-4" weight="fill" aria-hidden="true" />
                  +48 534 214 398
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </LenisProvider>
  )
}
