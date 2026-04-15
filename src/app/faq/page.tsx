import type { Metadata } from "next"
import Link from "next/link"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/JsonLd"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ — Najczęściej zadawane pytania | Jan Chmielewski Trener Personalny",
  description:
    "Odpowiedzi na najczęściej zadawane pytania o trening personalny, dietę online, prowadzenie online i plan treningowy. Pytania o ceny, procesy, efekty i metody pracy Jana Chmielowskiego.",
  keywords: [
    "trener personalny FAQ",
    "dieta online pytania",
    "trening personalny pytania i odpowiedzi",
    "prowadzenie online pytania",
    "Jan Chmielewski FAQ",
    "plan treningowy pytania",
  ],
  alternates: {
    canonical: "https://jantrenerchmielewski.pl/faq",
  },
  openGraph: {
    title: "FAQ — Pytania i odpowiedzi | Jan Chmielewski",
    description:
      "Odpowiedzi na najczęściej zadawane pytania o trening personalny, dietę online i prowadzenie online.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

interface FaqCategory {
  id: string
  label: string
  color: string
  questions: { question: string; answer: string }[]
}

const faqCategories: FaqCategory[] = [
  {
    id: "dieta-online",
    label: "Dieta Online",
    color: "oklch(0.65 0.18 210)",
    questions: [
      {
        question: "Czym jest dieta online i kto ją tworzy?",
        answer:
          "Dieta online to indywidualny plan żywieniowy tworzony przez specjalistę na podstawie danych przesłanych przez klienta drogą elektroniczną. Każdy plan tworzony jest od zera pod konkretną osobę — uwzględniając jej metabolizm, cel, preferencje smakowe i tryb dnia. Nie korzystam z gotowych szablonów ani generatorów.",
      },
      {
        question: "Ile kosztuje dieta online u Jana Chmielowskiego?",
        answer:
          "4-tygodniowy spersonalizowany plan żywieniowy kosztuje 199 zł. W tej cenie otrzymujesz kalkulację kaloryczną TDEE, podział makroskładników, jadłospis z przepisami, tygodniową listę zakupów i 30 dni kontaktu z możliwością korekt. Szczegóły na stronie /dieta-online.",
      },
      {
        question: "Jak długo czeka się na gotową dietę online?",
        answer:
          "Po wypełnieniu kwestionariusza przygotowuję plan w ciągu 48–72 godzin roboczych. Przy pilnych zamówieniach staram się realizować w 24 godziny — napisz o tym w wiadomości.",
      },
      {
        question: "Czy mogę zamówić dietę, jeśli mam nietolerancje lub alergie pokarmowe?",
        answer:
          "Absolutnie tak. Kwestionariusz zawiera szczegółowe pytania o alergie, nietolerancje i preferencje smakowe. Buduję jadłospis wyłącznie z produktów, które możesz i lubisz jeść. To jeden z kluczowych powodów, dla których warto wybrać indywidualny plan zamiast gotowego jadłospisu z internetu.",
      },
      {
        question: "Czy dieta online jest skuteczna bez trenowania?",
        answer:
          "Tak. Skuteczność diety wynika przede wszystkim z jej indywidualnego dopasowania do metabolizmu i deficytu kalorycznego. Jeśli nie ćwiczysz, uwzględniam to przy kalkulacji zapotrzebowania i nie przepisuję menu wymagającego intensywnego wysiłku.",
      },
      {
        question: "Co wliczone jest w cenę diety online?",
        answer:
          "W cenie 199 zł otrzymujesz: pełną analizę kwestionariusza, kalkulację TDEE z korekcją indywidualną, podział makroskładników z uzasadnieniem, 4-tygodniowy jadłospis z przepisami (4–5 posiłków dziennie), tygodniową listę zakupów, wskazówki suplementacyjne (jeśli dotyczy) i 30 dni kontaktu z możliwością korekt.",
      },
    ],
  },
  {
    id: "plan-treningowy",
    label: "Plan Treningowy",
    color: "oklch(0.65 0.18 150)",
    questions: [
      {
        question: "Ile kosztuje plan treningowy online?",
        answer:
          "8-tygodniowy plan treningowy kosztuje 149 zł. Obejmuje pełny program z periodyzacją i progresją, notację wszystkich ćwiczeń z wskazówkami technicznymi, rozpiski tygodniowe z dniami odpoczynku i 30-dniowy kontakt. Pełne informacje na stronie /plan-treningowy.",
      },
      {
        question: "Czy plan treningowy jest odpowiedni dla absolutnego początkującego?",
        answer:
          "Tak — i właśnie na początku drogi indywidualny plan ma największą wartość. Błędy techniczne popełnione na starcie utrwalają się jako nawyki. Plany dostosowuję do każdego poziomu — od zerowego doświadczenia po wieloletni staż treningowy.",
      },
      {
        question: "Czy mogę realizować plan bez siłowni, w domu?",
        answer:
          "Tak. W kwestionariuszu pytam o dostępny sprzęt — siłownia, hantle domowe, gumy oporowe lub całkowity brak sprzętu. Buduję plan w ramach Twoich możliwości. Trening bez sprzętu ma ograniczenia przy zaawansowanej hipertrofii, ale dla większości celów jest w pełni wystarczający.",
      },
      {
        question: "Co to jest periodyzacja i dlaczego jest ważna w planie?",
        answer:
          "Periodyzacja to planowe zarządzanie objętością i intensywnością treningu w czasie. Bez niej ciało adaptuje się do stałego obciążenia i postępy zatrzymują się. Moje plany zawierają periodyzację mezocyklową — fazy akumulacji, intensyfikacji i deload — co gwarantuje ciągły postęp.",
      },
      {
        question: "Jak długo czeka się na gotowy plan treningowy?",
        answer:
          "Po otrzymaniu wypełnionego kwestionariusza przygotowuję plan w ciągu 48–72 godzin roboczych. Dostarczam go w formie przejrzystego PDF z tabelą ćwiczeń, notacją (serie × powtórzenia × ciężar), wskazówkami technicznymi i protokołem rozgrzewki.",
      },
    ],
  },
  {
    id: "prowadzenie-online",
    label: "Prowadzenie Online",
    color: "oklch(0.65 0.18 30)",
    questions: [
      {
        question: "Czym jest prowadzenie online i czym różni się od planu?",
        answer:
          "Prowadzenie online to kompleksowa opieka trenerska realizowana zdalnie — łączy spersonalizowany plan żywieniowy, plan treningowy i cotygodniowy kontakt z trenerem. Plan to dokument, prowadzenie to relacja: cotygodniowy raport, analiza postępów, modyfikacje w czasie rzeczywistym. Jak mapa vs GPS.",
      },
      {
        question: "Ile kosztuje prowadzenie online?",
        answer:
          "Oferuję cztery pakiety: 1 miesiąc (399 zł), 3 miesiące (999 zł — oszczędzasz 198 zł), 6 miesięcy (1799 zł — oszczędzasz 595 zł), 12 miesięcy (3699 zł — oszczędzasz 1089 zł). Minimum dla realnych efektów sylwetkowych to 3 miesiące. Pełne informacje na stronie /prowadzenie-online.",
      },
      {
        question: "Jak wygląda cotygodniowy kontakt przy prowadzeniu online?",
        answer:
          "Co tydzień wysyłasz mi raport: aktualna masa ciała, zrealizowane treningi, samopoczucie, jakość snu, adherencja do diety. Na podstawie raportu analizuję postępy i w ciągu 24 godzin odsyłam feedback z planem na kolejny tydzień — z ewentualnymi modyfikacjami diety i treningu.",
      },
      {
        question: "Jak szybko widać efekty prowadzenia online?",
        answer:
          "Pierwsze wymierne efekty (zmiana masy ciała, poprawa samopoczucia, wzrost siły) zazwyczaj widoczne są po 3–4 tygodniach. Widoczne zmiany sylwetkowe — po 8–12 tygodniach. Trwałe przeprogramowanie nawyków żywieniowych i treningowych — po 3–6 miesiącach.",
      },
      {
        question: "Czy prowadzenie online wymaga siłowni?",
        answer:
          "Nie. Dostosowuję plan do dostępnego sprzętu — siłownia, dom z hantlami, gumy oporowe lub brak sprzętu. Prowadzę klientów trenujących w różnych warunkach. Kluczowa jest Twoja regularność, nie miejsce treningu.",
      },
    ],
  },
  {
    id: "trening-personalny",
    label: "Trening Personalny",
    color: "oklch(0.65 0.18 300)",
    questions: [
      {
        question: "Gdzie odbywają się treningi personalne?",
        answer:
          "Treningi personalne prowadzę w Chełmży. Dokładną lokalizację podaję po pierwszym kontakcie. Obsługuję klientów z Chełmży, Torunia i okolic powiatu toruńskiego. Napisz przez formularz na stronie /kontakt lub zadzwoń na +48 534 214 398.",
      },
      {
        question: "Ile kosztuje sesja treningu personalnego?",
        answer:
          "Pojedyncza sesja (60 min) kosztuje 149 zł. Pakiet 10 sesji to 1599 zł — oszczędzasz 391 zł. Każda sesja obejmuje spersonalizowaną rozgrzewkę, trening z korektą techniki i omówienie postępów. Pełny cennik na stronie /cennik.",
      },
      {
        question: "Co wyróżnia trenera z tytułem magistra fizjoterapii?",
        answer:
          "Magister fizjoterapii rozumie anatomię, biomechanikę i patologie ruchu na poziomie klinicznym. Oceniam wzorce ruchowe, identyfikuję asymetrie i dostosowuję program bezpiecznie nawet przy historii kontuzji. To wiedza, której nie nabywa się na weekendowym kursie trenerskim.",
      },
      {
        question: "Czy trening personalny jest tylko dla zaawansowanych?",
        answer:
          "Wręcz przeciwnie — trening personalny ma największą wartość dla osób zaczynających. Błędy techniczne popełnione na starcie utrwalają się i prowadzą do kontuzji. Pracuję z osobami na każdym poziomie — od absolutnych początków po sportowców amatorów przygotowujących się do zawodów.",
      },
    ],
  },
  {
    id: "cennik-platnosci",
    label: "Cennik i Płatności",
    color: "oklch(0.65 0.18 60)",
    questions: [
      {
        question: "Jakie są dostępne metody płatności?",
        answer:
          "Przyjmuję płatności przelewem bankowym i BLIK. Po potwierdzeniu zamówienia przez formularz kontaktowy lub telefon przekazuję dane do płatności. Nie ma możliwości płatności kartą bezpośrednio na stronie — jeśli to problem, napisz i znajdziemy rozwiązanie.",
      },
      {
        question: "Czy można zapłacić za usługi w ratach?",
        answer:
          "W przypadku dłuższych pakietów prowadzenia online (6 i 12 miesięcy) możliwe jest ustalenie płatności w częściach. Napisz przez formularz kontaktowy lub zadzwoń i omówimy szczegóły. Nie chcę, żeby kwestie finansowe były przeszkodą w dostępie do pomocy.",
      },
      {
        question: "Czy ceny są stałe czy negocjowalne?",
        answer:
          "Ceny usług są standardowe i podane na stronie /cennik. W wyjątkowych sytuacjach (studenci, osoby w trudnej sytuacji finansowej) możemy porozmawiać o indywidualnych warunkach. Proszę o kontakt — staram się być elastyczny tam, gdzie to możliwe.",
      },
      {
        question: "Co się dzieje, jeśli nie jestem zadowolony z planu lub diety?",
        answer:
          "30 dni kontaktu po dostarczeniu planu jest właśnie po to, żeby wprowadzać korekty. Jeśli plan nie pasuje do Twojego stylu życia, preferencji lub pojawiły się nowe informacje — modyfikuję go bezpłatnie. Zależy mi na Twoim sukcesie, nie na jednorazowej transakcji.",
      },
    ],
  },
  {
    id: "ogolne",
    label: "Ogólne",
    color: "oklch(0.65 0.18 180)",
    questions: [
      {
        question: "Kim jest Jan Chmielewski?",
        answer:
          "Jan Chmielewski to magister fizjoterapii i finalista Mistrzostw Polski w kulturystyce. Trener personalny i specjalista od żywienia z 8-letnim doświadczeniem i ponad 200 zadowolonymi klientami. Prowadzi trening personalny w Chełmży oraz usługi online dla klientów z całej Polski. Więcej na stronie /o-mnie.",
      },
      {
        question: "Jak skontaktować się z Janem Chmielowskim?",
        answer:
          "Przez formularz kontaktowy na stronie /kontakt, e-mailem na kontakt@jantrenerchmielewski.pl lub telefonicznie na +48 534 214 398. Odpowiadam na wiadomości w ciągu 24 godzin (poniedziałek–sobota).",
      },
      {
        question: "W jakich godzinach można się kontaktować?",
        answer:
          "Odpowiadam na wiadomości od poniedziałku do soboty, zazwyczaj między 8:00 a 20:00. Kontakt telefoniczny najlepiej w godzinach 9:00–19:00. Na pilne wiadomości staram się odpowiadać jak najszybciej.",
      },
      {
        question: "Czy Jan Chmielewski prowadzi klientów z całej Polski?",
        answer:
          "Tak. Dieta online, plan treningowy i prowadzenie online są świadczone całkowicie zdalnie — dla klientów z całej Polski, bez ograniczeń geograficznych. Trening personalny prowadzę wyłącznie stacjonarnie w Chełmży i okolicach.",
      },
      {
        question: "Czy efekty pracy z Janem są gwarantowane?",
        answer:
          "Nie gwarantuję efektów, bo zależą one od konsekwencji i zaangażowania klienta — tego nie kontroluję. Gwarantuję natomiast profesjonalne, indywidualnie przygotowane programy oparte na aktualnej wiedzy naukowej i 8-letnim doświadczeniu. Klienci, którzy realizują plany zgodnie z zaleceniami, osiągają realne rezultaty — czego dowodem są opinie na stronie /efekty.",
      },
      {
        question: "Jak wygląda pierwsze spotkanie lub kontakt?",
        answer:
          "Nie musisz płacić za rozmowę wstępną. Napisz lub zadzwoń — odpowiem szczerze, czy dana usługa pasuje do Twojej sytuacji. Jeśli nie — powiem wprost i doradzę co wybrać. Nie sprzedaję usług osobom, dla których nie będą właściwym wyborem.",
      },
    ],
  },
]

const allQuestions = faqCategories.flatMap((cat) => cat.questions)

export default function FaqPage() {
  return (
    <LenisProvider>
      <FAQSchema questions={allQuestions} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "FAQ", url: "/faq" },
        ]}
      />

      <Navbar />

      <main>
        <header className="relative pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="container mx-auto max-w-3xl px-4 md:px-6">
            <nav aria-label="Nawigacja okruszkowa" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <li>
                  <Link href="/" className="transition-colors hover:text-foreground">
                    Strona główna
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground/60" aria-current="page">FAQ</li>
              </ol>
            </nav>

            <div className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
              style={{
                background: "oklch(0.65 0.18 210 / 12%)",
                color: "oklch(0.65 0.18 210)",
                border: "1px solid oklch(0.65 0.18 210 / 20%)",
              }}
            >
              Pytania i odpowiedzi
            </div>

            <h1 className="font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl">
              Najczęściej zadawane pytania
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Zebrałem tu odpowiedzi na pytania, które najczęściej zadają mi klienci przed pierwszym zamówieniem.
              Jeśli nie znajdziesz odpowiedzi na swoje pytanie — napisz do mnie przez{" "}
              <Link href="/kontakt" className="underline underline-offset-4 hover:text-foreground" style={{ color: "oklch(0.65 0.18 210)" }}>
                formularz kontaktowy
              </Link>
              .
            </p>
          </div>
        </header>

        <section className="pb-24">
          <div className="container mx-auto max-w-3xl px-4 md:px-6">
            <div className="flex flex-col gap-12">
              {faqCategories.map((category) => (
                <div key={category.id} id={category.id}>
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className="h-1 w-8 rounded-full"
                      style={{ background: category.color }}
                      aria-hidden="true"
                    />
                    <h2
                      className="font-heading text-xl font-bold"
                      style={{ color: category.color }}
                    >
                      {category.label}
                    </h2>
                  </div>

                  <div className="rounded-2xl border border-border bg-card">
                    <Accordion multiple>
                      {category.questions.map((item, index) => (
                        <AccordionItem key={index} value={`${category.id}-${index}`}>
                          <AccordionTrigger className="px-6 py-4 text-sm font-medium text-foreground md:text-base">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 text-sm text-muted-foreground">
                            <p>{item.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.65 0.18 210)" }}>
                Nie znalazłeś odpowiedzi?
              </p>
              <h2 className="mb-3 font-heading text-2xl font-bold text-foreground">
                Napisz bezpośrednio
              </h2>
              <p className="mb-6 text-sm text-muted-foreground">
                Odpowiadam na wszystkie wiadomości w ciągu 24 godzin, od poniedziałku do soboty.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all"
                  style={{ background: "oklch(0.65 0.18 210)" }}
                >
                  Formularz kontaktowy
                </Link>
                <a
                  href="tel:+48534214398"
                  className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  +48 534 214 398
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </LenisProvider>
  )
}
