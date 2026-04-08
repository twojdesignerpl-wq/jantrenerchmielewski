import type { Metadata } from "next"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { CTAButton } from "@/components/shared/CTAButton"
import { PriceCard } from "@/components/shared/PriceCard"
import {
  BreadcrumbSchema,
  ServicePageSchema,
  FAQSchema,
  HowToSchema,
} from "@/components/seo/JsonLd"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  ForkKnife,
  Barbell,
  Clock,
  ChartLineUp,
  PencilLine,
  SmileyWink,
  CheckCircle,
  XCircle,
  UserFocus,
  MapPin,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr"
import { cities } from "@/lib/data/cities"

export const metadata: Metadata = {
  title: "Prowadzenie Online — Kompleksowe wsparcie fitness",
  description:
    "Kompleksowe prowadzenie online: spersonalizowana dieta + plan treningowy + cotygodniowe raporty + dostęp 24/7. Od 399 zł/miesiąc. Jan Chmielewski — Magister Fizjoterapii, 8 lat doświadczenia.",
  keywords: [
    "prowadzenie online",
    "trener online",
    "dieta i trening online",
    "coaching fitness",
    "indywidualne prowadzenie",
    "Jan Chmielewski prowadzenie",
  ],
  openGraph: {
    title: "Prowadzenie Online — Kompleksowe wsparcie | Jan Chmielewski",
    description:
      "Dieta + trening + cotygodniowe raporty + kontakt 24/7. Kompleksowe prowadzenie od 399 zł/miesiąc.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Prowadzenie online Jan Chmielewski" }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://jantrenerchmielewski.pl/prowadzenie-online" },
}

const features = [
  {
    icon: ForkKnife,
    title: "Spersonalizowana dieta",
    description: "Plan żywieniowy dostosowany do Twojego metabolizmu, celów i preferencji smakowych.",
  },
  {
    icon: Barbell,
    title: "Indywidualny plan treningowy",
    description: "Program treningowy z progresją, notacją i wskazówkami technicznymi.",
  },
  {
    icon: Clock,
    title: "Dostęp 24/7",
    description: "Piszesz kiedy potrzebujesz — odpowiadam w ciągu 24 godzin, 7 dni w tygodniu.",
  },
  {
    icon: ChartLineUp,
    title: "Cotygodniowe raporty",
    description: "Co tydzień analizujemy postępy, wagę, zdjęcia i samopoczucie. Dostosowujemy plan.",
  },
  {
    icon: PencilLine,
    title: "Korekty i sugestie",
    description: "Bieżące modyfikacje diety i treningu na podstawie Twoich wyników i feedbacku.",
  },
  {
    icon: SmileyWink,
    title: "Motywacja i support",
    description: "Nie jesteś sam. Jestem obok na każdym etapie — sukcesach i trudniejszych momentach.",
  },
]

const pricingTiers = [
  {
    title: "1 miesiąc",
    price: "399 zł",
    period: "/ miesiąc",
    features: [
      "Spersonalizowana dieta",
      "Plan treningowy",
      "Kontakt przez 30 dni",
      "1 analiza postępów",
      "Korekty planu",
    ],
    href: "/kontakt?service=prowadzenie",
    highlighted: false,
    ctaLabel: "Zacznij współpracę",
  },
  {
    title: "3 miesiące",
    price: "1\u00A0049 zł",
    period: "/ 3 miesiące",
    badge: "Popularne",
    features: [
      "Spersonalizowana dieta",
      "Plan treningowy",
      "Kontakt przez 90 dni",
      "Cotygodniowe raporty",
      "Korekty planu",
      "Oszczędzasz 148 zł",
    ],
    href: "/kontakt?service=prowadzenie",
    highlighted: false,
    ctaLabel: "Zacznij współpracę",
  },
  {
    title: "6 miesięcy",
    price: "1\u00A0999 zł",
    period: "/ 6 miesięcy",
    badge: "Najlepsza wartość",
    features: [
      "Spersonalizowana dieta",
      "Plan treningowy",
      "Kontakt przez 180 dni",
      "Cotygodniowe raporty",
      "Korekty planu",
      "Priorytetowe odpowiedzi",
      "Oszczędzasz 395 zł",
    ],
    href: "/kontakt?service=prowadzenie",
    highlighted: true,
    ctaLabel: "Zacznij współpracę",
  },
  {
    title: "12 miesięcy",
    price: "3\u00A0699 zł",
    period: "/ rok",
    features: [
      "Spersonalizowana dieta",
      "Plan treningowy",
      "Kontakt przez 365 dni",
      "Cotygodniowe raporty",
      "Korekty planu",
      "Priorytetowe odpowiedzi",
      "Kompleksowa transformacja",
      "Oszczędzasz 989 zł",
    ],
    href: "/kontakt?service=prowadzenie",
    highlighted: false,
    ctaLabel: "Zacznij współpracę",
  },
]

const comparisonRows: {
  feature: string
  single: boolean
  online: boolean
}[] = [
  { feature: "Spersonalizowana dieta", single: false, online: true },
  { feature: "Indywidualny plan treningowy", single: true, online: true },
  { feature: "Cotygodniowe raporty postępów", single: false, online: true },
  { feature: "Bieżące korekty planu", single: false, online: true },
  { feature: "Kontakt 24/7", single: false, online: true },
  { feature: "Analiza pomiarów i zdjęć", single: false, online: true },
  { feature: "Motywacja i wsparcie", single: false, online: true },
  { feature: "Wskazówki suplementacyjne", single: true, online: true },
]

const faqItems = [
  {
    question: "Czym różni się prowadzenie online od jednorazowego planu?",
    answer:
      "Jednorazowy plan (dieta lub trening) to narzędzie. Prowadzenie online to proces — jestem z Tobą każdego tygodnia, analizuję postępy, dostosowuję plan i motywuję. Większość ludzi potrzebuje właśnie tego: nie pliku PDF, ale kogoś, kto trzyma ich za słowo.",
  },
  {
    question: "Jak wygląda kontakt w trakcie prowadzenia?",
    answer:
      "Głównie przez wiadomości (Messenger, WhatsApp lub e-mail — do wyboru). Co tydzień przesyłasz mi zdjęcia, wagę i jak poszedł tydzień. Ja analizuję i odpowiadam z feedbackiem. Możesz też pisać z pytaniami na bieżąco — odpowiadam w ciągu 24 godzin.",
  },
  {
    question: "Czy mogę zacząć od krótszego pakietu i przedłużyć?",
    answer:
      "Oczywiście. Wielu klientów zaczyna od miesiąca, żeby zobaczyć jak to działa, a potem przechodzi na dłuższy pakiet. Przy przedłużeniu stosuję cenę pakietową.",
  },
  {
    question: "Czy prowadzenie online sprawdzi się przy mojej diecie eliminacyjnej?",
    answer:
      "Tak. Pracuję z osobami na diecie wegetariańskiej, wegańskiej, bezglutenowej, bezlaktozowej i innymi wariantami eliminacyjnymi. Podaj swoje wymagania w kwestionariuszu — dostosuję wszystko.",
  },
  {
    question: "Co jeśli w trakcie prowadzenia wyjeżdżam lub mam gorszy tydzień?",
    answer:
      "Życie się zdarza — właśnie dlatego potrzebujesz kogoś obok. Jeśli wyjeżdżasz, dostosujemy plan do dostępnych opcji. Jeśli masz gorszy tydzień — porozmawiamy, co poszło nie tak i jak to naprawić. Nie oczekuję perfekcji, oczekuję szczerości.",
  },
  {
    question: "Jak wygląda komunikacja z trenerem?",
    answer:
      "Kontaktujemy się przez wybrany przez Ciebie kanał — WhatsApp, Messenger lub e-mail. Piszesz kiedy potrzebujesz i zawsze odpowiem w ciągu 24 godzin. Co tydzień przeprowadzamy ustrukturyzowany check-in: przesyłasz zdjęcia postępów, pomiary i swoje odczucia z minionego tygodnia, a ja odsyłam szczegółowy feedback oraz ewentualne korekty planu.",
  },
  {
    question: "Czy mogę zmienić pakiet w trakcie współpracy?",
    answer:
      "Tak, zawsze możemy dopasować zakres współpracy do Twoich aktualnych potrzeb. Jeśli chcesz przejść na dłuższy pakiet — doliczę jedynie różnicę w cenie. Jeśli Twoja sytuacja się zmieni i potrzebujesz przerwy — porozmawiajmy, znajdziemy rozwiązanie.",
  },
  {
    question: "Co jeśli mam kontuzję lub ograniczenia zdrowotne?",
    answer:
      "Jako Magister Fizjoterapii podchodzę do tego z pełnym zrozumieniem. Kontuzja nie musi oznaczać przerwy w postępach — dostosowuję plan treningowy tak, żebyś mógł pracować nad resztą ciała i utrzymać formę podczas rekonwalescencji. Zawsze proszę o dokumentację medyczną lub zalecenia lekarskie, jeśli kontuzja jest poważna.",
  },
  {
    question: "Czy prowadzenie online działa tak samo jak trening personalny?",
    answer:
      "To dwa różne formaty z różnymi zaletami. Trening personalny daje bezpośrednią korektę techniki w czasie rzeczywistym. Prowadzenie online zapewnia ciągłość — jestem z Tobą przez cały tydzień, analizuję dane, modyfikuję plan i motywuję. Dla wielu klientów prowadzenie online okazuje się skuteczniejsze, bo obejmuje pełny kontekst życia: sen, stres, dietę i trening razem.",
  },
  {
    question: "Jak szybko zobaczę pierwsze efekty?",
    answer:
      "Pierwsze zauważalne zmiany — więcej energii, lepszy sen, poprawa samopoczucia — klienci obserwują już po 2-3 tygodniach. Widoczne zmiany sylwetkowe pojawiają się zazwyczaj między 4. a 8. tygodniem, w zależności od celu i punktu startowego. Całkowita transformacja wymaga minimum 3 miesięcy regularnej pracy — dlatego pakiety trzymiesięczne i dłuższe przynoszą najlepsze rezultaty.",
  },
  {
    question: "Czy mogę zawiesić współpracę na czas urlopu?",
    answer:
      "Oczywiście. Urlop to nie powód do przerwy w postępach — zwykle przygotowuję specjalny plan na okres wyjazdu, dopasowany do dostępnych opcji żywieniowych i treningowych. Jeśli jednak chcesz formalnie zawiesić pakiet, możemy to omówić indywidualnie. Nie chcę, żebyś płacił za czas, gdy nie możesz w pełni korzystać ze współpracy.",
  },
]

const weekDays = [
  {
    day: "Poniedziałek",
    shortDay: "Pon",
    title: "Analiza weekendu",
    description:
      "Przeglądam Twój raport z weekendu — wagę, zdjęcia, samopoczucie. Jeśli dieta wymagała korekt (impreza, wyjazd, gorszy dzień), wprowadzam odpowiednie zmiany na nadchodzące dni. Zaczynamy tydzień z aktualnym planem.",
  },
  {
    day: "Wtorek–Czwartek",
    shortDay: "Wt–Cz",
    title: "Realizacja planu",
    description:
      "Pracujesz według planu treningowego i żywieniowego. Masz pytanie o zamianę posiłku, wątpliwości co do ćwiczenia lub złe samopoczucie? Piszesz — odpowiadam w ciągu 24 godzin, przez cały czas trwania współpracy.",
  },
  {
    day: "Piątek",
    shortDay: "Pt",
    title: "Przegląd tygodnia",
    description:
      "Przesyłasz mi krótki feedback: jak przebiegły treningi, czy dieta była do utrzymania, jak śpisz i czujesz się energetycznie. Analizuję dane i przygotowuję swoje spostrzeżenia. To klucz do ciągłego doskonalenia planu.",
  },
  {
    day: "Weekend",
    shortDay: "Sob–Nd",
    title: "Raport i nowe wytyczne",
    description:
      "Otrzymujesz ode mnie cotygodniowy raport z postępów — analizę wagi, zmian składu ciała, realizacji treningów i diety. Dołączam aktualizacje planu na kolejny tydzień oraz motywacyjny komentarz. Weekend to czas odpoczynku i przygotowania do kolejnego cyklu.",
  },
]

const targetAudience = [
  {
    title: "Osoby, które próbowały samodzielnie",
    description:
      "Masz za sobą kilka podejść do diety i treningów, które kończyły się po 2-3 tygodniach. Wiesz, że potrzebujesz kogoś, kto nada kierunek, rozliczy Cię z postępów i nie pozwoli odpuścić przy pierwszej przeszkodzie. Prowadzenie online to właśnie ten brakujący element — accountability i strategia w jednym.",
  },
  {
    title: "Przygotowujący się do wydarzeń",
    description:
      "Ślub za 4 miesiące. Wyjazd na wakacje za 10 tygodni. Zawody sportowe na horyzoncie. Masz konkretny cel i konkretną datę — dlatego potrzebujesz planu skrojone pod ten termin, nie generycznego podejścia. Razem ustawimy tempo zmian, które dadzą efekt dokładnie wtedy, kiedy potrzebujesz.",
  },
  {
    title: "Długoterminowa rekompozycja ciała",
    description:
      "Nie chcesz drastycznej diety — chcesz trwałej zmiany. Jednoczesna utrata tkanki tłuszczowej i budowa mięśni to proces, który wymaga precyzyjnej periodyzacji diety i treningu przez wiele miesięcy. Sześcio- i dwunastomiesięczne pakiety prowadzenia online są stworzone właśnie z myślą o tej grupie.",
  },
  {
    title: "Sportowcy amatorzy",
    description:
      "Biegasz, jeździsz na rowerze, grasz w squasha albo chodzisz na crossfit. Chcesz poprawić wyniki, a nie tylko sylwetkę. Doświadczenie w fizjoterapii i pracy z zawodnikami pozwala mi budować plany, które realnie przekładają się na wydolność, siłę i regenerację — bez przeciążeń i kontuzji.",
  },
]

const resultStats = [
  {
    value: "8–12 kg",
    label: "Średnia utrata tkanki tłuszczowej",
    sublabel: "w 3 miesiące",
  },
  {
    value: "3–5 kg",
    label: "Średni przyrost masy mięśniowej",
    sublabel: "w 6 miesięcy",
  },
  {
    value: "95%",
    label: "Klientów kontynuuje",
    sublabel: "po pierwszym miesiącu",
  },
  {
    value: "200+",
    label: "Zadowolonych klientów",
    sublabel: "z całej Polski",
  },
]

const howToSteps = [
  {
    name: "Wypełnij formularz kontaktowy",
    text: "Opisz swoje cele, aktualne nawyki i oczekiwania. Wybierz interesujący Cię pakiet czasowy prowadzenia online.",
  },
  {
    name: "Uzupełnij szczegółowy kwestionariusz",
    text: "Po pierwszym kontakcie otrzymasz rozbudowany kwestionariusz dotyczący zdrowia, preferencji żywieniowych, dostępności sprzętu i trybu życia.",
  },
  {
    name: "Otrzymaj spersonalizowaną dietę i plan treningowy",
    text: "W ciągu 3-5 dni roboczych przygotowuję kompletny plan diety i treningu dopasowany do Twoich celów i możliwości.",
  },
  {
    name: "Realizuj plan i korzystaj z kontaktu 24/7",
    text: "Wdrażasz plan w życie. Masz pytania lub napotykasz trudności — piszesz, a ja odpowiadam w ciągu 24 godzin przez cały czas trwania współpracy.",
  },
  {
    name: "Cotygodniowy check-in i korekty",
    text: "Co tydzień przesyłasz raport postępów (waga, zdjęcia, samopoczucie). Analizuję wyniki i wprowadzam bieżące korekty diety lub treningu.",
  },
  {
    name: "Osiągaj cele i przedłuż współpracę",
    text: "Po zakończeniu pakietu oceniamy postępy. Większość klientów decyduje się na kontynuację — do kolejnego celu lub w celu utrzymania wypracowanych wyników.",
  },
]

// Top 10 cities for city links (by population / importance)
const topCitySlugs = [
  "warszawa",
  "krakow",
  "wroclaw",
  "poznan",
  "gdansk",
  "katowice",
  "lodz",
  "bydgoszcz",
  "lublin",
  "torun",
]
const topCities = cities.filter((c) => topCitySlugs.includes(c.slug))

const relatedServices = [
  {
    href: "/dieta-online",
    title: "Dieta Online",
    description:
      "Jednorazowy plan żywieniowy — idealne rozwiązanie, gdy budżet jest ograniczony lub chcesz zacząć od samej diety.",
    badge: "od 199 zł",
  },
  {
    href: "/plan-treningowy",
    title: "Plan Treningowy",
    description:
      "Spersonalizowany program treningowy bez abonamentu — kup raz, ćwicz przez wiele tygodni według sprawdzonego planu.",
    badge: "od 149 zł",
  },
  {
    href: "/trening-personalny-chelmza",
    title: "Trening Personalny — Chełmża",
    description:
      "Wolisz trenować stacjonarnie pod okiem trenera? Oferuję sesje personalne w Chełmży i okolicach.",
    badge: "od 149 zł / sesja",
  },
]

export default function ProwadzenieOnlinePage() {
  return (
    <LenisProvider>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Prowadzenie Online", url: "/prowadzenie-online" },
        ]}
      />
      <ServicePageSchema
        name="Prowadzenie Online"
        description="Kompleksowe prowadzenie online: spersonalizowana dieta + plan treningowy + cotygodniowe raporty + kontakt 24/7."
        price="399"
        url="/prowadzenie-online"
      />
      <FAQSchema questions={faqItems} />
      <HowToSchema
        name="Jak rozpocząć prowadzenie online z Janem Chmielewskim"
        description="Krok po kroku — od pierwszego kontaktu do osiągnięcia celu z pomocą prowadzenia online."
        steps={howToSteps}
      />

      <Navbar />

      <main className="min-h-[100dvh]">
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div
            className="pointer-events-none absolute -top-60 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full blur-[140px] opacity-20"
            style={{ background: "var(--cyan)" }}
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <ScrollReveal delay={0}>
                <p className="text-label mb-4" style={{ color: "var(--cyan)" }}>
                  Flagowa usługa — kompleksowe wsparcie
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-display-sm mb-6 text-[clamp(2.5rem,5vw,4.5rem)]">
                  Nie kupujesz planu.{" "}
                  <span className="text-gradient-cyan">Kupujesz wyniki.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-body-lg mx-auto mb-10 text-muted-foreground max-w-2xl">
                  Prowadzenie online to więcej niż dieta i trening. To cotygodniowe raporty,
                  bieżące korekty i ktoś, kto rzeczywiście trzyma Cię za słowo. Przez cały czas
                  trwania współpracy.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <CTAButton href="/kontakt?service=prowadzenie" size="lg">
                    Zacznij współpracę
                  </CTAButton>
                  <CTAButton href="#cennik" variant="secondary">
                    Zobacz pakiety cenowe
                  </CTAButton>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="mt-12 flex flex-wrap justify-center gap-10">
                  {[
                    { value: "200+", label: "klientów pod opieką" },
                    { value: "8 lat", label: "doświadczenia" },
                    { value: "24/7", label: "kontakt" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-mono-metric text-3xl font-bold text-gradient-cyan">
                        {stat.value}
                      </p>
                      <p className="text-label mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="py-20 section-glow" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Co dostajesz
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Wszystko w jednym pakiecie
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
              {features.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 0.07} className="h-full flex">
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

        {/* ===== TYPICAL WEEK ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Rytm współpracy
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Jak wygląda typowy tydzień
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  Prowadzenie online to nie plik PDF wysłany raz. To ustrukturyzowany proces
                  — każdy dzień tygodnia ma swoje miejsce w naszej współpracy.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {weekDays.map((day, i) => (
                <ScrollReveal key={day.day} delay={i * 0.08}>
                  <article
                    className="relative h-full flex flex-col border-glow rounded-xl p-6 overflow-hidden"
                    style={{ background: "var(--card)" }}
                  >
                    <div
                      className="mb-4 inline-flex items-center rounded-lg px-3 py-1 text-xs font-bold tracking-widest uppercase self-start"
                      style={{
                        background: "color-mix(in srgb, var(--cyan) 12%, transparent)",
                        color: "var(--cyan)",
                        border: "1px solid color-mix(in srgb, var(--cyan) 25%, transparent)",
                      }}
                    >
                      {day.shortDay}
                    </div>
                    <h3
                      className="mb-3 text-base font-semibold"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {day.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                      {day.description}
                    </p>
                    <div
                      className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full blur-2xl opacity-10"
                      style={{ background: "var(--cyan)" }}
                      aria-hidden="true"
                    />
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TARGET AUDIENCE ===== */}
        <section className="py-20 section-glow" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Dla kogo
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Dla kogo jest prowadzenie online?
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  Prowadzenie online sprawdza się w różnych sytuacjach życiowych. Sprawdź, czy
                  rozpoznajesz się w którymś z poniższych przypadków.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {targetAudience.map((group, i) => (
                <ScrollReveal key={group.title} delay={i * 0.08}>
                  <article
                    className="flex gap-5 border-glow rounded-xl p-6 h-full"
                    style={{ background: "var(--background)" }}
                  >
                    <div className="shrink-0 mt-1">
                      <UserFocus
                        className="size-7"
                        style={{ color: "var(--cyan)" }}
                        weight="duotone"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3
                        className="mb-2 text-base font-semibold"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {group.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {group.description}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== RESULTS STATS ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Efekty
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Wyniki moich klientów
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  Liczby zagregowane na podstawie wyników klientów prowadzonych
                  w ramach długoterminowych pakietów.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {resultStats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 0.08}>
                  <div
                    className="flex flex-col items-center text-center border-glow rounded-xl p-8"
                    style={{ background: "var(--card)" }}
                  >
                    <p
                      className="text-4xl font-bold mb-2 text-gradient-cyan"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sm font-medium mb-1">{stat.label}</p>
                    <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.2}>
              <p className="mt-8 text-center text-xs text-muted-foreground max-w-lg mx-auto">
                Wyniki indywidualne mogą się różnić w zależności od punktu startowego, celu,
                zaangażowania i przestrzegania planu. Podane wartości to zakresy obserwowane
                przy regularnej współpracy przez minimum 3-6 miesięcy.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== COMPARISON TABLE ===== */}
        <section className="py-20 section-glow" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Porównanie
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Prowadzenie vs jednorazowy plan
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border-glow">
                <div
                  className="grid grid-cols-3 px-6 py-4 text-sm font-semibold"
                  style={{ background: "var(--surface-elevated)" }}
                >
                  <span className="text-muted-foreground">Funkcja</span>
                  <span className="text-center text-muted-foreground">Jednorazowy plan</span>
                  <span className="text-center" style={{ color: "var(--cyan)" }}>
                    Prowadzenie online
                  </span>
                </div>
                {comparisonRows.map((row, i) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-3 items-center px-6 py-3.5 text-sm border-t border-border"
                    style={{
                      background: i % 2 === 0 ? "var(--card)" : "var(--background)",
                    }}
                  >
                    <span className="text-muted-foreground">{row.feature}</span>
                    <span className="flex justify-center">
                      {row.single ? (
                        <CheckCircle
                          className="size-5"
                          style={{ color: "var(--cyan)" }}
                          weight="fill"
                          aria-label="Tak"
                        />
                      ) : (
                        <XCircle
                          className="size-5 opacity-30"
                          weight="fill"
                          aria-label="Nie"
                        />
                      )}
                    </span>
                    <span className="flex justify-center">
                      {row.online ? (
                        <CheckCircle
                          className="size-5"
                          style={{ color: "var(--cyan)" }}
                          weight="fill"
                          aria-label="Tak"
                        />
                      ) : (
                        <XCircle
                          className="size-5 opacity-30"
                          weight="fill"
                          aria-label="Nie"
                        />
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== PRICING ===== */}
        <section id="cennik" className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Pakiety
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Wybierz czas współpracy
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  Im dłuższa współpraca, tym większe oszczędności i głębsza transformacja.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 items-stretch">
              {pricingTiers.map((tier, i) => (
                <ScrollReveal key={tier.title} delay={i * 0.08} className="h-full flex">
                  <PriceCard
                    title={tier.title}
                    price={tier.price}
                    period={tier.period}
                    features={tier.features}
                    href={tier.href}
                    highlighted={tier.highlighted}
                    badge={tier.badge}
                    ctaLabel={tier.ctaLabel}
                  />
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.2}>
              <p className="mt-8 text-center text-sm text-muted-foreground">
                Nie wiesz, który pakiet wybrać?{" "}
                <a
                  href="tel:+48534214398"
                  className="underline hover:text-foreground transition-colors"
                  aria-label="Zadzwoń do Jana Chmielewskiego"
                >
                  Zadzwoń — +48 534 214 398
                </a>{" "}
                — pomogę Ci zdecydować.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-20 section-glow" style={{ background: "var(--card)" }}>
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

        {/* ===== CITY LINKS ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Zasięg
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Dostępne w całej Polsce
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  Prowadzenie online nie zna granic geograficznych. Pracuję z klientami
                  z każdego zakątka Polski — od Szczecina po Rzeszów.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <nav aria-label="Prowadzenie online w miastach Polski">
                <ul className="flex flex-wrap justify-center gap-3">
                  {topCities.map((city) => (
                    <li key={city.slug}>
                      <a
                        href={`/dietetyk-online-${city.slug}`}
                        className="inline-flex items-center gap-2 rounded-full border-glow px-4 py-2 text-sm font-medium transition-all hover:glow-cyan"
                        style={{ background: "var(--card)" }}
                      >
                        <MapPin
                          className="size-3.5"
                          style={{ color: "var(--cyan)" }}
                          weight="fill"
                          aria-hidden="true"
                        />
                        {city.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-8 text-center text-sm text-muted-foreground">
                Nie widzisz swojego miasta?{" "}
                <a
                  href="/kontakt?service=prowadzenie"
                  className="underline hover:text-foreground transition-colors"
                >
                  Napisz do mnie
                </a>{" "}
                — prowadzę klientów z całego kraju.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== RELATED SERVICES ===== */}
        <section className="py-20 section-glow" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Inne opcje
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Powiązane usługi
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  Prowadzenie online to moja flagowa usługa, ale oferuję też inne formy
                  wsparcia — dopasowane do różnych potrzeb i budżetów.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-3">
              {relatedServices.map((service, i) => (
                <ScrollReveal key={service.href} delay={i * 0.08}>
                  <a
                    href={service.href}
                    className="group flex flex-col h-full border-glow rounded-xl p-6 transition-all hover:glow-cyan"
                    style={{ background: "var(--background)" }}
                  >
                    <div className="flex items-start justify-between mb-3 gap-3">
                      <h3
                        className="text-base font-semibold group-hover:text-gradient-cyan transition-colors"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {service.title}
                      </h3>
                      <span
                        className="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap"
                        style={{
                          background: "color-mix(in srgb, var(--cyan) 12%, transparent)",
                          color: "var(--cyan)",
                          border: "1px solid color-mix(in srgb, var(--cyan) 25%, transparent)",
                        }}
                      >
                        {service.badge}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground flex-1 mb-4">
                      {service.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-1 text-sm font-medium"
                      style={{ color: "var(--cyan)" }}
                    >
                      Dowiedz się więcej
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </a>
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
                Gotowy na prawdziwą zmianę?
              </p>
              <h2 className="text-display-sm mb-6 text-3xl md:text-5xl">
                Zacznij prowadzenie online już dziś
              </h2>
              <p className="text-body-lg mx-auto mb-10 text-muted-foreground max-w-xl">
                Skontaktuj się ze mną — omówimy Twoje cele i wybierzemy odpowiedni pakiet.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <CTAButton href="/kontakt?service=prowadzenie" size="lg">
                  Napisz do mnie
                </CTAButton>
                <CTAButton href="/cennik" variant="secondary">
                  Porównaj wszystkie usługi
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
