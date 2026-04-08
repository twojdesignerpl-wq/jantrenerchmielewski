import type { Metadata } from "next"
import Link from "next/link"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { CTAButton } from "@/components/shared/CTAButton"
import { BreadcrumbSchema, ServicePageSchema, FAQSchema, HowToSchema } from "@/components/seo/JsonLd"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  Barbell,
  Notepad,
  TrendUp,
  VideoCamera,
  Flask,
  Target,
  UserFocus,
} from "@phosphor-icons/react/dist/ssr"
import { cities } from "@/lib/data/cities"

export const metadata: Metadata = {
  title: "Plan Treningowy 8-tygodniowy — 149 zł",
  description:
    "Indywidualny plan treningowy 8-tygodniowy dopasowany do Twojego poziomu i celów. Progresja treningowa, technika wykonania, wskazówki suplementacyjne. Jan Chmielewski — Finalista Mistrzostw Polski.",
  keywords: [
    "plan treningowy online",
    "program treningowy",
    "plan ćwiczeń",
    "trener online",
    "kulturystyka plan treningowy",
    "Jan Chmielewski plan treningowy",
  ],
  openGraph: {
    title: "Plan Treningowy 8-tygodniowy — 149 zł | Jan Chmielewski",
    description:
      "Indywidualny plan treningowy z progresją, techniką i wskazówkami suplementacyjnymi. Finalista Mistrzostw Polski w kulturystyce.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Plan treningowy Jan Chmielewski" }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://jantrenerchmielewski.pl/plan-treningowy" },
}

const features = [
  {
    icon: Target,
    title: "Program na Twój poziom",
    description:
      "Niezależnie czy jesteś początkujący, średniozaawansowany czy zaawansowany — plan jest skalowany pod Twoje możliwości i sprzęt.",
  },
  {
    icon: Notepad,
    title: "Notacja każdego ćwiczenia",
    description:
      "Każde ćwiczenie opisane z seriami, powtórzeniami, ciężarem startowym i wskazówkami dotyczącymi wykonania.",
  },
  {
    icon: TrendUp,
    title: "Progresja treningowa",
    description:
      "Plan zaplanowany z tygodniową progresją obciążenia — Twoje ciało będzie stale się adaptować i rosnąć.",
  },
  {
    icon: VideoCamera,
    title: "Technika wykonania",
    description:
      "Linki lub opisy do prawidłowej techniki każdego ćwiczenia, żebyś trenował bezpiecznie i efektywnie.",
  },
  {
    icon: Flask,
    title: "Wskazówki suplementacyjne",
    description:
      "Praktyczne porady dotyczące suplementacji — co, kiedy i w jakiej ilości, dopasowane do Twojego celu.",
  },
  {
    icon: Barbell,
    title: "Dostosowany sprzęt",
    description:
      "Plan pod Twoje warunki — siłownia, dom z hantlami lub trening własną masą ciała. Zawsze efektywny.",
  },
]

const steps = [
  {
    number: "01",
    title: "Kwestionariusz",
    description:
      "Wypełniasz formularz: poziom zaawansowania, dostępny sprzęt, cele, dyspozycyjność w tygodniu.",
  },
  {
    number: "02",
    title: "Tworzenie planu",
    description:
      "W ciągu 48–72 godzin przygotowuję spersonalizowany 8-tygodniowy plan z pełną notacją ćwiczeń.",
  },
  {
    number: "03",
    title: "Realizacja + wsparcie",
    description:
      "Otrzymujesz PDF z planem. Przez miesiąc jesteś pod moją opieką — możesz pytać i zgłaszać problemy.",
  },
]

const targetGroups = [
  {
    icon: UserFocus,
    title: "Początkujący",
    description:
      "Zaczynasz przygodę z siłownią i nie wiesz, od czego zacząć? Plan buduje solidne fundamenty — prawidłowa technika, bezpieczna progresja i nawyk regularnego treningu bez ryzyka kontuzji.",
  },
  {
    icon: UserFocus,
    title: "Średniozaawansowani na plateau",
    description:
      "Trenujesz już jakiś czas, ale wyniki stanęły w miejscu? Doświadczenie w periodyzacji i programowaniu pozwoli mi przełamać stagnację i ponownie uruchomić Twój postęp.",
  },
  {
    icon: UserFocus,
    title: "Ćwiczący w domu",
    description:
      "Nie masz dostępu do siłowni lub preferujesz trening w domu? Tworzę efektywne programy na hantle, drążek i masę własnego ciała — bez kompromisów w kwestii wyników.",
  },
  {
    icon: UserFocus,
    title: "Sportowcy i aktywni",
    description:
      "Uprawiasz sport i chcesz poprawić wydolność, siłę lub kompozycję ciała? Jako magister fizjoterapii i Finalista Mistrzostw Polski łączę wiedzę sportową z metodycznym programowaniem.",
  },
]

const trainingWeek = [
  {
    day: "Dzień 1",
    label: "Góra ciała",
    focus: "Klatka piersiowa i barki",
    details:
      "Wyciskanie sztangi na ławce, rozpiętki, wyciskanie żołnierskie, boczne unoszenie ramion, triceps.",
  },
  {
    day: "Dzień 2",
    label: "Dół ciała",
    focus: "Przysiad, martwy ciąg",
    details:
      "Przysiad klasyczny, martwy ciąg rumuński, wykroki, prostowanie nóg, uginanie nóg.",
  },
  {
    day: "Dzień 3",
    label: "Odpoczynek aktywny",
    focus: "Regeneracja i mobilizacja",
    details:
      "Spacer, stretching, mobilizacja stawów biodrowych i kręgosłupa — żadnych obciążeń siłowych.",
  },
  {
    day: "Dzień 4",
    label: "Plecy i biceps",
    focus: "Ciąg pionowy i poziomy",
    details:
      "Podciąganie, wiosłowanie sztangą, wiosłowanie na maszynie, uginanie ramion na biceps.",
  },
  {
    day: "Dzień 5",
    label: "Nogi",
    focus: "Progresja i izolacja",
    details:
      "Przysiad bułgarski, hip thrust, wypychanie na suwnicy, łydki — nacisk na wolumizację i progresję ciężaru.",
  },
  {
    day: "Dzień 6–7",
    label: "Regeneracja",
    focus: "Pełen odpoczynek",
    details:
      "Dni bez treningu siłowego. Możliwa lekka aktywność aerobowa. Priorytet: sen i odbudowa mięśni.",
  },
]

const comparisonRows = [
  {
    feature: "Dopasowanie do Twojego poziomu",
    plan: "Tak — indywidualny kwestionariusz",
    youtube: "Nie — jedno dla wszystkich",
  },
  {
    feature: "Progresja obciążenia",
    plan: "Zaplanowana tydzień po tygodniu",
    youtube: "Brak lub przypadkowa",
  },
  {
    feature: "Uwzględnienie sprzętu",
    plan: "Tak — siłownia, dom, brak sprzętu",
    youtube: "Ograniczone",
  },
  {
    feature: "Kontakt z trenerem",
    plan: "30 dni wsparcia po zakupie",
    youtube: "Brak",
  },
  {
    feature: "Korekta pod Twoje cele",
    plan: "Tak — cel buduje strukturę planu",
    youtube: "Nie — cel autora video",
  },
  {
    feature: "Wiedza fizjoterapeutyczna",
    plan: "Tak — bezpieczny dobór ćwiczeń",
    youtube: "Zależy od twórcy",
  },
]

const faqItems = [
  {
    question: "Dla kogo jest ten plan treningowy?",
    answer:
      "Plany tworzę zarówno dla początkujących (pierwsze miesiące na siłowni), jak i dla osób średniozaawansowanych i zaawansowanych. Kluczowe jest to, że każdy plan jest indywidualny — dostosowany do Twojego poziomu, celów i dostępnego sprzętu.",
  },
  {
    question: "Czy plan zadziała bez chodzenia na siłownię?",
    answer:
      "Tak. Tworzę plany pod różne warunki: siłownię z pełnym wyposażeniem, siłownię domową z hantlami i drążkiem, a także plany oparte wyłącznie na masie własnego ciała. Podaj dostępny sprzęt w kwestionariuszu.",
  },
  {
    question: "Ile dni w tygodniu powinienem trenować?",
    answer:
      "W kwestionariuszu pytam o Twoją dostępność. Tworzę plany 3-, 4- i 5-dniowe. Ważniejsza jest regularność niż liczba dni — plan jest tak zbudowany, żebyś mógł go realnie realizować.",
  },
  {
    question: "Czy będę mieć kontakt z Tobą po zakupie?",
    answer:
      "Tak — przez 30 dni od dostarczenia planu możesz pisać z pytaniami dotyczącymi techniki, progresji lub modyfikacji. Odpowiadam w ciągu 24 godzin roboczych.",
  },
  {
    question: "Co jeśli plan nie będzie odpowiedni dla mnie?",
    answer:
      "Zanim przygotowuję plan, dokładnie analizuję Twój kwestionariusz. Jeśli po otrzymaniu planu coś nie będzie pasować — modyfikuję. Chcę, żebyś trenował i osiągał wyniki, nie żebyś miał plik PDF leżący bez użytku.",
  },
  {
    question: "Ile trwa realizacja planu?",
    answer:
      "Standardowy czas realizacji to 48–72 godziny robocze od momentu wypełnienia kwestionariusza. W przypadku zwiększonego obłożenia informuję o tym z wyprzedzeniem.",
  },
  {
    question: "Czy plan uwzględnia moje kontuzje lub ograniczenia zdrowotne?",
    answer:
      "Tak. Jako magister fizjoterapii biorę pod uwagę wszelkie ograniczenia zdrowotne, przebyte kontuzje lub bóle stawów. Podaj je szczegółowo w kwestionariuszu — dobiorę ćwiczenia bezpieczne i skuteczne dla Twojej sytuacji.",
  },
  {
    question: "Czy plan obejmuje dietę?",
    answer:
      "Plan treningowy za 149 zł obejmuje wskazówki suplementacyjne, ale nie zawiera szczegółowego planu żywieniowego. Jeśli chcesz mieć kompletną dietę, polecam skorzystanie z usługi Dieta Online lub Prowadzenie Online, które łączą trening z żywieniem.",
  },
  {
    question: "W jakiej formie otrzymam plan?",
    answer:
      "Plan dostarczam w formacie PDF — czytelny, dobrze sformatowany dokument, który możesz otworzyć na telefonie lub wydrukować i zabrać na siłownię. Każde ćwiczenie jest opisane z notacją serii, powtórzeń i ciężaru.",
  },
  {
    question: "Czy mogę zamówić plan dla kogoś innego (prezent)?",
    answer:
      "Oczywiście. W takim przypadku zaznacz to w wiadomości przy zamówieniu — przeprowadzę krótki wywiad dotyczący osoby, dla której tworzę plan, lub wyślę kwestionariusz bezpośrednio do niej.",
  },
  {
    question: "Co to jest periodyzacja i dlaczego jest ważna?",
    answer:
      "Periodyzacja to planowe dzielenie treningu na fazy o różnym intensywności i objętości. Dzięki temu unikasz przetrenowania, a ciało nie przyzwyczaja się do jednego bodźca. Moje plany mają wbudowaną strukturę mikrocykli — tygodniowych jednostek treningowych — oraz tygodnia deload co 4–6 tygodni.",
  },
]

const topCities = cities.slice(0, 10)

const relatedServices = [
  {
    href: "/dieta-online",
    title: "Dieta Online",
    description:
      "Indywidualny plan żywieniowy 4-tygodniowy dopasowany do Twoich celów i preferencji smakowych. Uzupełnienie planu treningowego o właściwe odżywianie.",
    price: "199 zł",
  },
  {
    href: "/prowadzenie-online",
    title: "Prowadzenie Online",
    description:
      "Kompleksowe prowadzenie — dieta + plan treningowy + cotygodniowy kontakt. Idealne, gdy chcesz mieć trenera na każdym kroku swojej drogi.",
    price: "od 399 zł / mies.",
  },
  {
    href: "/trening-personalny-chelmza",
    title: "Trening Personalny Chełmża",
    description:
      "Sesje stacjonarne jeden na jeden w Chełmży. Korekta techniki na żywo, motywacja i pełna kontrola nad Twoim postępem.",
    price: "149 zł / sesja",
  },
]

export default function PlanTreningowy() {
  return (
    <LenisProvider>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Plan Treningowy", url: "/plan-treningowy" },
        ]}
      />
      <ServicePageSchema
        name="Plan Treningowy 8-tygodniowy"
        description="Indywidualny program treningowy 8-tygodniowy z progresją, notacją ćwiczeń i wskazówkami suplementacyjnymi."
        price="149"
        url="/plan-treningowy"
      />
      <FAQSchema questions={faqItems} />
      <HowToSchema
        name="Jak zamówić indywidualny plan treningowy"
        description="Proces zamawiania spersonalizowanego planu treningowego 8-tygodniowego od Jana Chmielewskiego."
        steps={steps.map((s) => ({ name: s.title, text: s.description }))}
      />

      <Navbar />

      <main className="min-h-[100dvh]">
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div
            className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full blur-[120px] opacity-15"
            style={{ background: "var(--cyan)" }}
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <ScrollReveal delay={0}>
                <p className="text-label mb-4" style={{ color: "var(--cyan)" }}>
                  Usługa online — cała Polska
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-display-sm mb-6 text-[clamp(2.5rem,5vw,4.5rem)]">
                  Plan treningowy{" "}
                  <span className="text-gradient-cyan">napisany dla Ciebie.</span>{" "}
                  Nie dla tłumu.
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-body-lg mb-8 text-muted-foreground max-w-2xl">
                  8 tygodni przemyślanej progresji. Każde ćwiczenie, seria i powtórzenie zaplanowane
                  pod Twój poziom, sprzęt i cel. Jako Finalista Mistrzostw Polski w kulturystyce wiem,
                  jak budować efektywne programy.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-4">
                  <CTAButton href="/kontakt?service=plan" size="lg">
                    Zamów plan — 149 zł
                  </CTAButton>
                  <CTAButton href="/prowadzenie-online" variant="secondary">
                    Prowadzenie online (kompleksowo)
                  </CTAButton>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="mt-10 grid grid-cols-3 gap-8 border-t border-border pt-10 max-w-lg">
                  {[
                    { value: "8 tyg", label: "czas programu" },
                    { value: "48h", label: "czas realizacji" },
                    { value: "149 zł", label: "cena" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-mono-metric text-2xl font-bold text-gradient-cyan">
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
        <section className="py-20" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Co zawiera plan
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Wszystko, czego potrzebujesz do treningu
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

        {/* ===== HOW IT WORKS ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Jak to działa
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">Od zamówienia do treningu</h2>
              </div>
            </ScrollReveal>

            <div className="relative grid gap-8 md:grid-cols-3">
              <div
                className="pointer-events-none absolute top-10 left-0 right-0 hidden h-px md:block"
                style={{
                  background:
                    "linear-gradient(to right, transparent, var(--cyan), transparent)",
                  opacity: 0.3,
                }}
                aria-hidden="true"
              />

              {steps.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="mb-6 flex size-20 items-center justify-center rounded-full border-glow glow-cyan"
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

        {/* ===== MOJE PODEJŚCIE DO PROGRAMOWANIA TRENINGU ===== */}
        <section className="py-20" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-10 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Filozofia treningu
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Moje podejście do programowania treningu
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <article
                className="mx-auto max-w-4xl rounded-2xl border border-border p-8 md:p-12 space-y-6 leading-relaxed text-base text-muted-foreground"
                style={{ background: "var(--background)" }}
              >
                <p>
                  Każdy plan treningowy, który tworzę, opiera się na zasadzie <strong className="text-foreground">progresywnego przeciążenia</strong> — fundamentu każdej skutecznej metody budowania siły i masy mięśniowej. Oznacza to, że co tydzień Twoje ciało otrzymuje nieco silniejszy bodziec niż poprzednio: więcej kilogramów na sztandze, dodatkowe powtórzenie lub skróconą przerwę między seriami. Bez tej zasady trening staje się rekreacją, a nie narzędziem do zmiany sylwetki.
                </p>
                <p>
                  W programowaniu obciążeń korzystam ze skali <strong className="text-foreground">RPE (Rate of Perceived Exertion)</strong> — subiektywnego odczucia wysiłku w skali 1–10. Zamiast narzucać Ci sztywny ciężar, uczę Cię słuchać własnego ciała i dobierać obciążenie tak, by każda seria kończyła się z odpowiednią rezerwą powtórzeń. Dzięki temu postęp jest bezpieczny niezależnie od tego, czy masz gorszy dzień, jesteś niewyspany czy po tygodniu przerwy.
                </p>
                <p>
                  Moje plany mają wbudowaną strukturę <strong className="text-foreground">periodyzacji liniowej i blokowej</strong>. Pierwsze 3–4 tygodnie to faza adaptacji neuromięśniowej — ciało uczy się ćwiczeń i wzorców ruchowych. Kolejne tygodnie to intensyfikacja: wzrost obciążenia i objętości. Co 4–6 tygodni programuję <strong className="text-foreground">tydzień deload</strong> — celowe obniżenie intensywności o 40–50%, które pozwala na regenerację stawów, ścięgien i układu nerwowego. Deload to nie strata czasu — to inwestycja w kolejne tygodnie postępu.
                </p>
                <p>
                  Jako <strong className="text-foreground">magister fizjoterapii</strong> dobór ćwiczeń opieram nie tylko na skuteczności, lecz przede wszystkim na bezpieczeństwie biomechanicznym. Oceniam ryzyka dla poszczególnych stawów, uwzględniam Twoje przebyte kontuzje i wykluczam ćwiczenia, które mogłyby zaszkodzić przy nieprawidłowych wzorcach ruchowych. Każde ćwiczenie w planie jest tam z konkretnego powodu — nie ma przypadkowych ruchów wybranych dla wypełnienia arkusza.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== DLA KOGO JEST PLAN TRENINGOWY ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Dopasowanie
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Dla kogo jest plan treningowy?
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 items-stretch">
              {targetGroups.map((group, i) => (
                <ScrollReveal key={group.title} delay={i * 0.08} className="h-full flex">
                  <article
                    className="h-full flex flex-col gap-4 rounded-xl border-glow p-6 transition-all hover:glow-cyan"
                    style={{ background: "var(--card)" }}
                  >
                    <group.icon
                      className="size-9 shrink-0"
                      style={{ color: "var(--cyan)" }}
                      weight="duotone"
                      aria-hidden="true"
                    />
                    <div>
                      <h3
                        className="mb-2 text-xl font-bold"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {group.title}
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {group.description}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PRZYKŁADOWY TYDZIEŃ TRENINGOWY ===== */}
        <section className="py-20" style={{ background: "var(--card)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Struktura tygodnia
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Przykładowy tydzień treningowy
                </h2>
              </div>
            </ScrollReveal>

            <div className="mx-auto max-w-3xl">
              <ol className="relative border-l border-border space-y-0" aria-label="Tydzień treningowy">
                {trainingWeek.map((item, i) => (
                  <ScrollReveal key={item.day} delay={i * 0.07}>
                    <li className="group ml-6 pb-8 last:pb-0">
                      <span
                        className="absolute -left-3 flex size-6 items-center justify-center rounded-full border-glow ring-2 ring-background"
                        style={{ background: "var(--cyan)" }}
                        aria-hidden="true"
                      />
                      <div
                        className="rounded-xl border border-border p-5 transition-all group-hover:border-[var(--cyan)]"
                        style={{ background: "var(--background)" }}
                      >
                        <p className="text-label mb-1" style={{ color: "var(--cyan)" }}>
                          {item.day}
                        </p>
                        <h3
                          className="text-lg font-bold mb-1"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {item.label}{" "}
                          <span className="text-muted-foreground font-normal text-base">
                            — {item.focus}
                          </span>
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.details}
                        </p>
                      </div>
                    </li>
                  </ScrollReveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ===== PLAN TRENINGOWY VS TRENING Z YOUTUBE ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Porównanie
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Plan treningowy vs trening z YouTube
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mx-auto max-w-4xl overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-sm md:text-base">
                  <thead>
                    <tr style={{ background: "var(--card)" }}>
                      <th className="px-6 py-4 text-left font-semibold text-muted-foreground w-2/5">
                        Cecha
                      </th>
                      <th
                        className="px-6 py-4 text-left font-semibold w-[30%]"
                        style={{ color: "var(--cyan)" }}
                      >
                        Indywidualny plan
                      </th>
                      <th className="px-6 py-4 text-left font-semibold text-muted-foreground w-[30%]">
                        Trening z YouTube
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr
                        key={row.feature}
                        className="border-t border-border transition-colors hover:bg-[var(--card)]"
                        style={i % 2 === 0 ? { background: "var(--background)" } : { background: "var(--card)" }}
                      >
                        <td className="px-6 py-4 font-medium">{row.feature}</td>
                        <td className="px-6 py-4 text-foreground">{row.plan}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.youtube}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

        {/* ===== DOSTĘPNE W CAŁEJ POLSCE ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-10 text-center">
                <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                  Zasięg
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">
                  Dostępne w całej Polsce
                </h2>
                <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
                  Plany treningowe realizuję w 100% online — dlatego współpracuję z klientami
                  z każdego zakątka kraju. Wybierz swoje miasto i dowiedz się więcej.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap justify-center gap-3">
                {topCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/plan-treningowy-online-${city.slug}`}
                    className="rounded-full border border-border px-5 py-2 text-sm font-medium transition-all hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
                    style={{ background: "var(--card)" }}
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
                  Odkryj więcej
                </p>
                <h2 className="text-display-sm text-3xl md:text-5xl">Powiązane usługi</h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-3 items-stretch">
              {relatedServices.map((service, i) => (
                <ScrollReveal key={service.href} delay={i * 0.08} className="h-full flex">
                  <Link
                    href={service.href}
                    className="group h-full flex flex-col rounded-xl border-glow p-6 transition-all hover:glow-cyan"
                    style={{ background: "var(--background)" }}
                  >
                    <h3
                      className="mb-2 text-lg font-bold transition-colors group-hover:text-[var(--cyan)]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--cyan)" }}
                    >
                      {service.price}
                    </p>
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
                Gotowy na trening?
              </p>
              <h2 className="text-display-sm mb-6 text-3xl md:text-5xl">
                8 tygodni do lepszej wersji siebie
              </h2>
              <p className="text-body-lg mx-auto mb-10 text-muted-foreground max-w-xl">
                149 zł za plan treningowy, który faktycznie zadziała. Realizacja w 48 godzin.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <CTAButton href="/kontakt?service=plan" size="lg">
                  Zamów plan — 149 zł
                </CTAButton>
                <CTAButton href="/prowadzenie-online" variant="secondary">
                  Kompleksowe prowadzenie
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
