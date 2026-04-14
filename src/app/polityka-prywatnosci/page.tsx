import type { Metadata } from "next"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Container } from "@/components/layout/Container"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { BreadcrumbSchema } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Polityka Prywatności",
  description:
    "Polityka prywatności strony jantrenerchmielewski.pl. Informacje o przetwarzaniu danych osobowych, plikach cookies i prawach użytkownika zgodnie z RODO.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://jantrenerchmielewski.pl/polityka-prywatnosci" },
}

const LAST_UPDATED = "7 kwietnia 2026"

const sections = [
  { id: "administrator", label: "Administrator danych" },
  { id: "dane", label: "Jakie dane zbieramy" },
  { id: "cele", label: "Cele i podstawy prawne" },
  { id: "odbiorcy", label: "Odbiorcy danych" },
  { id: "okres", label: "Okres przechowywania" },
  { id: "prawa", label: "Twoje prawa" },
  { id: "cookies", label: "Pliki cookies" },
  { id: "uslugi", label: "Uslugi zewnetrzne" },
  { id: "zmiany", label: "Zmiany polityki" },
]

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-4 mt-12 scroll-mt-24 font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-foreground first:mt-0 md:text-3xl"
    >
      {children}
    </h2>
  )
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 max-w-[65ch] font-[family-name:var(--font-sans)] text-sm leading-relaxed text-[oklch(0.75_0.02_232)] md:text-base">
      {children}
    </p>
  )
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative pl-5 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-[oklch(0.75_0.02_232)] before:absolute before:left-0 before:top-2.5 before:size-1.5 before:rounded-full before:bg-[var(--primary)] md:text-base">
      {children}
    </li>
  )
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--primary)] underline decoration-[var(--primary)]/30 underline-offset-2 transition-colors hover:decoration-[var(--primary)]"
    >
      {children}
    </a>
  )
}

export default function PolitykaPrywatnosciPage() {
  return (
    <LenisProvider>
      <BreadcrumbSchema
        items={[
          { name: "Strona glowna", url: "/" },
          { name: "Polityka Prywatnosci", url: "/polityka-prywatnosci" },
        ]}
      />

      <Navbar />

      <main className="pb-20 pt-32 md:pt-40">
        <Container className="max-w-4xl">
          {/* Header */}
          <ScrollReveal>
            <p className="text-label mb-3 text-[oklch(0.55_0.02_232)]">
              Dokument prawny
            </p>
            <h1 className="mb-4 font-[family-name:var(--font-heading)] text-4xl font-extrabold tracking-tighter text-foreground md:text-5xl lg:text-6xl">
              Polityka Prywatnosci
            </h1>
            <p className="mb-8 font-[family-name:var(--font-mono)] text-xs tracking-tight text-[oklch(0.48_0.02_232)]">
              Ostatnia aktualizacja: {LAST_UPDATED}
            </p>
          </ScrollReveal>

          {/* Table of contents */}
          <ScrollReveal delay={0.1}>
            <nav
              aria-label="Spis tresci polityki prywatnosci"
              className="mb-12 rounded-xl border border-[oklch(0.28_0.025_232)] bg-[oklch(0.16_0.025_232)] p-6"
            >
              <p className="mb-3 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-[0.15em] text-[oklch(0.55_0.02_232)]">
                Spis tresci
              </p>
              <ol className="flex flex-col gap-1.5">
                {sections.map((section, i) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="inline-flex items-baseline gap-2 font-[family-name:var(--font-sans)] text-sm text-[oklch(0.65_0.02_232)] transition-colors hover:text-foreground"
                    >
                      <span className="font-[family-name:var(--font-mono)] text-xs text-[oklch(0.48_0.02_232)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {section.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.15}>
            <div className="space-y-2">
              {/* 1. Administrator */}
              <SectionHeading id="administrator">1. Administrator danych</SectionHeading>
              <Paragraph>
                Administratorem Twoich danych osobowych jest <strong className="text-foreground">Jan Chmielewski</strong>,
                prowadzacy dzialalnosc pod adresem: 3 Maja 18A, 87-140 Chelmza.
              </Paragraph>
              <Paragraph>
                Kontakt w sprawach dotyczacych danych osobowych:
              </Paragraph>
              <ul className="mb-6 flex flex-col gap-2">
                <ListItem>
                  E-mail:{" "}
                  <a href="mailto:kontakt@jantrenerchmielewski.pl" className="text-[var(--primary)] underline decoration-[var(--primary)]/30 underline-offset-2 transition-colors hover:decoration-[var(--primary)]">
                    kontakt@jantrenerchmielewski.pl
                  </a>
                </ListItem>
                <ListItem>Telefon: +48 534 214 398</ListItem>
                <ListItem>Adres korespondencyjny: 3 Maja 18A, 87-140 Chelmza</ListItem>
              </ul>

              {/* 2. Jakie dane zbieramy */}
              <SectionHeading id="dane">2. Jakie dane zbieramy</SectionHeading>
              <Paragraph>
                Zbieramy wylacznie dane, ktore sam nam przekazujesz lub ktore sa gromadzone automatycznie
                podczas korzystania ze strony.
              </Paragraph>

              <h3 className="mb-2 mt-6 font-[family-name:var(--font-heading)] text-lg font-bold text-foreground">
                Dane z formularza kontaktowego
              </h3>
              <ul className="mb-6 flex flex-col gap-2">
                <ListItem>Imie (wymagane)</ListItem>
                <ListItem>Adres e-mail (wymagany)</ListItem>
                <ListItem>Numer telefonu (opcjonalny)</ListItem>
                <ListItem>Wybrana usluga i pakiet</ListItem>
                <ListItem>Tresc wiadomosci (opcjonalna)</ListItem>
              </ul>

              <h3 className="mb-2 mt-6 font-[family-name:var(--font-heading)] text-lg font-bold text-foreground">
                Dane gromadzone automatycznie
              </h3>
              <ul className="mb-6 flex flex-col gap-2">
                <ListItem>
                  Dane analityczne — odwiedzane podstrony, czas wizyty, typ urzadzenia, przegladarka
                  (zbierane przez Vercel Analytics)
                </ListItem>
                <ListItem>
                  Dane wydajnosciowe — metryki Core Web Vitals, czasy ladowania
                  (zbierane przez Vercel Speed Insights)
                </ListItem>
              </ul>
              <Paragraph>
                Nie zbieramy danych wrazliwych (zdrowotnych, biometrycznych). Nie prowadzimy profilowania
                ani nie podejmujemy zautomatyzowanych decyzji na podstawie Twoich danych.
              </Paragraph>

              {/* 3. Cele i podstawy prawne */}
              <SectionHeading id="cele">3. Cele przetwarzania i podstawy prawne</SectionHeading>
              <Paragraph>
                Przetwarzamy Twoje dane na podstawie art. 6 ust. 1 Rozporzadzenia Parlamentu Europejskiego
                i Rady (UE) 2016/679 (RODO):
              </Paragraph>
              <ul className="mb-6 flex flex-col gap-3">
                <ListItem>
                  <strong className="text-foreground">Odpowiedz na zapytanie</strong> — dane z formularza
                  kontaktowego przetwarzamy w celu udzielenia odpowiedzi na Twoja wiadomosc
                  (art. 6 ust. 1 lit. b — podejmowanie dzialan na zadanie osoby przed zawarciem umowy)
                </ListItem>
                <ListItem>
                  <strong className="text-foreground">Realizacja uslugi</strong> — po zawarciu wspolpracy
                  dane sa przetwarzane w celu realizacji umowy
                  (art. 6 ust. 1 lit. b — wykonanie umowy)
                </ListItem>
                <ListItem>
                  <strong className="text-foreground">Analityka i poprawa jakosci strony</strong> — anonimowe
                  dane o ruchu na stronie pomagaja nam usprawnic dzialanie witryny
                  (art. 6 ust. 1 lit. f — uzasadniony interes administratora)
                </ListItem>
              </ul>

              {/* 4. Odbiorcy danych */}
              <SectionHeading id="odbiorcy">4. Odbiorcy danych</SectionHeading>
              <Paragraph>
                Twoje dane moga byc przekazywane nastepujacym podmiotom, wylacznie w zakresie niezbednym
                do realizacji celow opisanych powyzej:
              </Paragraph>
              <ul className="mb-6 flex flex-col gap-3">
                <ListItem>
                  <strong className="text-foreground">Supabase Inc.</strong> (USA) — hosting bazy danych,
                  w ktorej przechowywane sa dane z formularza kontaktowego. Transfer danych poza EOG
                  odbywa sie na podstawie standardowych klauzul umownych (SCC).{" "}
                  <ExternalLink href="https://supabase.com/privacy">
                    Polityka prywatnosci Supabase
                  </ExternalLink>
                </ListItem>
                <ListItem>
                  <strong className="text-foreground">Vercel Inc.</strong> (USA) — hosting strony
                  internetowej oraz analityka (Vercel Analytics, Speed Insights). Transfer danych poza
                  EOG odbywa sie na podstawie standardowych klauzul umownych (SCC).{" "}
                  <ExternalLink href="https://vercel.com/legal/privacy-policy">
                    Polityka prywatnosci Vercel
                  </ExternalLink>
                </ListItem>
                <ListItem>
                  <strong className="text-foreground">Google LLC</strong> (USA) — uslugi Google Maps
                  osadzone na podstronach kontaktowych. Google moze zbierac dane za posrednictwem
                  elementow iframe zgodnie z wlasna polityka prywatnosci.{" "}
                  <ExternalLink href="https://policies.google.com/privacy">
                    Polityka prywatnosci Google
                  </ExternalLink>
                </ListItem>
              </ul>

              {/* 5. Okres przechowywania */}
              <SectionHeading id="okres">5. Okres przechowywania danych</SectionHeading>
              <ul className="mb-6 flex flex-col gap-3">
                <ListItem>
                  <strong className="text-foreground">Dane z formularza kontaktowego</strong> — przechowywane
                  do momentu realizacji celu (odpowiedz na zapytanie / zakonczenie wspolpracy), a nastepnie
                  przez okres 3 lat od ostatniego kontaktu (termin przedawnienia roszczen cywilnoprawnych
                  zgodnie z art. 118 Kodeksu cywilnego)
                </ListItem>
                <ListItem>
                  <strong className="text-foreground">Dane analityczne</strong> — przechowywane przez Vercel
                  zgodnie z ich polityka retencji danych (do 24 miesiecy)
                </ListItem>
              </ul>

              {/* 6. Prawa */}
              <SectionHeading id="prawa">6. Twoje prawa</SectionHeading>
              <Paragraph>
                Na podstawie RODO przysluguja Ci nastepujace prawa:
              </Paragraph>
              <ul className="mb-6 flex flex-col gap-2">
                <ListItem>
                  <strong className="text-foreground">Prawo dostepu</strong> — mozesz zapytac, jakie dane
                  o Tobie przechowujemy (art. 15)
                </ListItem>
                <ListItem>
                  <strong className="text-foreground">Prawo do sprostowania</strong> — mozesz poprosic
                  o poprawienie blednych danych (art. 16)
                </ListItem>
                <ListItem>
                  <strong className="text-foreground">Prawo do usuniecia</strong> — mozesz zadac usuniecia
                  swoich danych, gdy nie ma podstawy do ich dalszego przetwarzania (art. 17)
                </ListItem>
                <ListItem>
                  <strong className="text-foreground">Prawo do ograniczenia przetwarzania</strong> — mozesz
                  zadac ograniczenia przetwarzania w okreslonych sytuacjach (art. 18)
                </ListItem>
                <ListItem>
                  <strong className="text-foreground">Prawo do przenoszenia danych</strong> — mozesz
                  otrzymac swoje dane w formacie nadajacym sie do odczytu maszynowego (art. 20)
                </ListItem>
                <ListItem>
                  <strong className="text-foreground">Prawo do sprzeciwu</strong> — mozesz wniesc sprzeciw
                  wobec przetwarzania opartego na uzasadnionym interesie (art. 21)
                </ListItem>
              </ul>
              <Paragraph>
                W celu realizacji swoich praw skontaktuj sie z nami:{" "}
                <a href="mailto:kontakt@jantrenerchmielewski.pl" className="text-[var(--primary)] underline decoration-[var(--primary)]/30 underline-offset-2 transition-colors hover:decoration-[var(--primary)]">
                  kontakt@jantrenerchmielewski.pl
                </a>
              </Paragraph>
              <Paragraph>
                Masz rowniez prawo wniesienia skargi do organu nadzorczego — Prezesa Urzedu Ochrony
                Danych Osobowych (ul. Stawki 2, 00-193 Warszawa,{" "}
                <ExternalLink href="https://uodo.gov.pl">uodo.gov.pl</ExternalLink>).
              </Paragraph>

              {/* 7. Cookies */}
              <SectionHeading id="cookies">7. Pliki cookies</SectionHeading>
              <Paragraph>
                Strona korzysta z plikow cookies (ciasteczek) zgodnie z art. 173 ustawy
                Prawo telekomunikacyjne. Stosujemy nastepujace rodzaje cookies:
              </Paragraph>
              <ul className="mb-6 flex flex-col gap-3">
                <ListItem>
                  <strong className="text-foreground">Techniczne (niezbedne)</strong> — zapewniaja
                  prawidlowe dzialanie strony. Nie wymagaja zgody.
                </ListItem>
                <ListItem>
                  <strong className="text-foreground">Analityczne (Vercel Analytics)</strong> — first-party
                  cookies sluzace do zbierania anonimowych statystyk odwiedzin. Vercel Analytics nie
                  uzywa ciasteczek sledzacych miedzy stronami i jest zgodny z prywatnoscig uzytkownikow.
                </ListItem>
                <ListItem>
                  <strong className="text-foreground">Cookies uslug zewnetrznych (Google Maps)</strong> —
                  elementy iframe Google Maps moga ustawiac wlasne cookies. Dotyczy podstron z osadzona
                  mapa (kontakt, trening personalny).
                </ListItem>
              </ul>
              <Paragraph>
                Mozesz zarzadzac plikami cookies w ustawieniach swojej przegladarki. Wylaczenie
                niektorych cookies moze ograniczyc funkcjonalnosc strony.
              </Paragraph>

              {/* 8. Uslugi zewnetrzne */}
              <SectionHeading id="uslugi">8. Uslugi zewnetrzne</SectionHeading>
              <Paragraph>Strona korzysta z nastepujacych uslug zewnetrznych:</Paragraph>
              <ul className="mb-6 flex flex-col gap-3">
                <ListItem>
                  <strong className="text-foreground">Vercel</strong> — hosting strony, analityka
                  (Analytics), monitorowanie wydajnosci (Speed Insights).{" "}
                  <ExternalLink href="https://vercel.com/legal/privacy-policy">
                    vercel.com/legal/privacy-policy
                  </ExternalLink>
                </ListItem>
                <ListItem>
                  <strong className="text-foreground">Supabase</strong> — baza danych i uwierzytelnianie.{" "}
                  <ExternalLink href="https://supabase.com/privacy">
                    supabase.com/privacy
                  </ExternalLink>
                </ListItem>
                <ListItem>
                  <strong className="text-foreground">Google Maps</strong> — mapy lokalizacji osadzone
                  na wybranych podstronach.{" "}
                  <ExternalLink href="https://policies.google.com/privacy">
                    policies.google.com/privacy
                  </ExternalLink>
                </ListItem>
              </ul>
              <Paragraph>
                Czcionki sa ladowane serwerowo za posrednictwem next/font i nie powoduja
                bezposredniego polaczenia przegladarki uzytkownika z serwerami Google.
              </Paragraph>

              {/* 9. Zmiany polityki */}
              <SectionHeading id="zmiany">9. Zmiany polityki prywatnosci</SectionHeading>
              <Paragraph>
                Zastrzegamy sobie prawo do aktualizacji niniejszej polityki prywatnosci. Data ostatniej
                zmiany jest widoczna na gorze dokumentu. W przypadku istotnych zmian poinformujemy
                o tym na stronie glownej.
              </Paragraph>
            </div>
          </ScrollReveal>
        </Container>
      </main>

      <Footer />
    </LenisProvider>
  )
}
