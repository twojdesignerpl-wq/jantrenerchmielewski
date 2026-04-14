import type React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  FacebookLogo,
  InstagramLogo,
  Phone,
  EnvelopeSimple,
  MapPin,
} from "@phosphor-icons/react/dist/ssr"

import { Container } from "@/components/layout/Container"
import { Separator } from "@/components/ui/separator"
import { NewsletterForm } from "@/components/layout/NewsletterForm"

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const ofertaLinks = [
  { label: "Indywidualne Diety Online", href: "/dieta-online" },
  { label: "Plany Treningowe", href: "/plan-treningowy" },
  { label: "Prowadzenie Online", href: "/prowadzenie-online" },
  { label: "Trening Personalny", href: "/trening-personalny-chelmza" },
]

const infoLinks = [
  { label: "O Mnie", href: "/o-mnie" },
  { label: "Metamorfoza", href: "/metamorfoza" },
  { label: "Efekty", href: "/efekty" },
  { label: "Opinie", href: "/opinie" },
  { label: "Cennik", href: "/cennik" },
  { label: "Blog", href: "/blog" },
  { label: "Polityka Prywatności", href: "/polityka-prywatnosci" },
]

const cityLinks = [
  { label: "Trener Personalny Warszawa", href: "/trener-personalny-warszawa" },
  { label: "Dieta Online Kraków", href: "/dieta-online-krakow" },
  { label: "Plan Treningowy Gdańsk", href: "/plan-treningowy-online-gdansk" },
  { label: "Trener Personalny Toruń", href: "/trener-personalny-torun" },
  { label: "Dieta Online Wrocław", href: "/dieta-online-wroclaw" },
  { label: "Prowadzenie Online Poznań", href: "/dietetyk-online-poznan" },
  { label: "Trener Personalny Bydgoszcz", href: "/trener-personalny-bydgoszcz" },
  { label: "Dieta Online Łódź", href: "/dieta-online-lodz" },
  { label: "Plan Treningowy Katowice", href: "/plan-treningowy-online-katowice" },
  { label: "Trener Personalny Chełmża", href: "/trener-personalny-chelmza" },
]

/* ------------------------------------------------------------------ */
/*  Sub-components                                                      */
/* ------------------------------------------------------------------ */

function FooterColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-label mb-4 text-[oklch(0.55_0.02_232)]">{children}</h3>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-1.5 font-[family-name:var(--font-sans)] text-sm text-[oklch(0.65_0.02_232)] transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.11_0.02_232)]"
      >
        <span className="transition-transform group-hover:translate-x-0.5">
          {children}
        </span>
      </Link>
    </li>
  )
}

/* ------------------------------------------------------------------ */
/*  Main component (Server Component — no "use client")                */
/* ------------------------------------------------------------------ */

export function Footer() {
  return (
    <footer
      className="mt-auto bg-[oklch(0.11_0.02_232)]"
      aria-label="Stopka strony"
    >
      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent opacity-30" />

      <Container>
        {/* Main columns */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 self-start rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.11_0.02_232)]"
              aria-label="Jan Chmielewski — strona główna"
            >
              <div className="relative size-10 overflow-hidden rounded-full ring-1 ring-[oklch(0.28_0.025_232)] transition-shadow group-hover:ring-[oklch(0.65_0.18_210/50%)]">
                <Image
                  src="/images/logo.png"
                  alt="Logo Jan Chmielewski"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <span className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-foreground">
                Jan Chmielewski
              </span>
            </Link>

            <p className="font-[family-name:var(--font-sans)] text-sm leading-relaxed text-[oklch(0.65_0.02_232)]">
              Magister Fizjoterapii
              <br />
              Finalista Mistrzostw Polski
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3" aria-label="Media społecznościowe">
              <a
                href="https://www.facebook.com/profile.php?id=61554502225830&locale=pl_PL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Jan Chmielewski"
                className="flex size-9 items-center justify-center rounded-full border border-[oklch(0.28_0.025_232)] text-[oklch(0.55_0.02_232)] transition-all hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:shadow-[0_0_12px_oklch(0.65_0.18_210/20%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.11_0.02_232)]"
              >
                <FacebookLogo size={18} weight="fill" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/chmiewski4/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Jan Chmielewski"
                className="flex size-9 items-center justify-center rounded-full border border-[oklch(0.28_0.025_232)] text-[oklch(0.55_0.02_232)] transition-all hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:shadow-[0_0_12px_oklch(0.65_0.18_210/20%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.11_0.02_232)]"
              >
                <InstagramLogo size={18} weight="fill" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Col 2 — Oferta */}
          <div>
            <FooterColumnHeading>Oferta</FooterColumnHeading>
            <ul className="flex flex-col gap-2.5">
              {ofertaLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Col 3 — Kontakt */}
          <div>
            <FooterColumnHeading>Kontakt</FooterColumnHeading>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+48534214398"
                  className="group flex items-start gap-2.5 font-[family-name:var(--font-sans)] text-sm text-[oklch(0.65_0.02_232)] transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.11_0.02_232)]"
                  aria-label="Zadzwoń: +48 534 214 398"
                >
                  <Phone
                    size={16}
                    weight="fill"
                    className="mt-0.5 shrink-0 text-[var(--cyan)]"
                    aria-hidden="true"
                  />
                  <span>+48 534 214 398</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@jantrenerchmielewski.pl"
                  className="group flex items-start gap-2.5 font-[family-name:var(--font-sans)] text-sm text-[oklch(0.65_0.02_232)] transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.11_0.02_232)]"
                  aria-label="Napisz e-mail: kontakt@jantrenerchmielewski.pl"
                >
                  <EnvelopeSimple
                    size={16}
                    weight="fill"
                    className="mt-0.5 shrink-0 text-[var(--cyan)]"
                    aria-hidden="true"
                  />
                  <span className="break-all">
                    kontakt@jantrenerchmielewski.pl
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=3+Maja+18A,+87-140+Chełmża"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2.5 font-[family-name:var(--font-sans)] text-sm text-[oklch(0.65_0.02_232)] transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.11_0.02_232)]"
                  aria-label="Adres: 3 Maja 18A, 87-140 Chełmża — otwórz w Google Maps"
                >
                  <MapPin
                    size={16}
                    weight="fill"
                    className="mt-0.5 shrink-0 text-[var(--cyan)]"
                    aria-hidden="true"
                  />
                  <span>
                    3 Maja 18A
                    <br />
                    87-140 Chełmża
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Informacje */}
          <div>
            <FooterColumnHeading>Informacje</FooterColumnHeading>
            <ul className="flex flex-col gap-2.5">
              {infoLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>
        </div>

        {/* Popularne miasta */}
        <div className="border-t border-[oklch(0.18_0.02_232)] pt-8 pb-10">
          <FooterColumnHeading>Popularne miasta</FooterColumnHeading>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3 lg:grid-cols-5">
            {cityLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-[family-name:var(--font-sans)] text-xs text-[oklch(0.50_0.02_232)] transition-colors hover:text-[var(--cyan)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.11_0.02_232)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="border-t border-[oklch(0.18_0.02_232)] pt-8 pb-10">
          <NewsletterForm />
        </div>

        {/* Separator */}
        <Separator className="bg-[oklch(0.22_0.025_232)]" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[family-name:var(--font-sans)] text-xs text-[oklch(0.48_0.02_232)]">
            &copy; 2026 Jan Chmielewski. Wszystkie prawa zastrzeżone.
          </p>
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-tight text-[oklch(0.43_0.02_232)]">
            Trener Personalny&nbsp;|&nbsp;Dietetyk&nbsp;|&nbsp;Fizjoterapeuta&nbsp;|&nbsp;Coaching Online
          </p>
        </div>
      </Container>

      {/* SEO paragraph — visually hidden but accessible to search engines */}
      <div className="border-t border-[oklch(0.15_0.02_232)] bg-[oklch(0.09_0.02_232)] py-6">
        <Container>
          <p className="font-[family-name:var(--font-sans)] text-xs leading-relaxed text-[oklch(0.38_0.02_232)]">
            Jan Chmielewski — profesjonalny trener personalny i dietetyk online
            z Chełmży. Magister Fizjoterapii, Finalista Mistrzostw Polski w
            kulturystyce. Oferuję indywidualne diety online (199&nbsp;zł), plany
            treningowe (149&nbsp;zł), prowadzenie online z pełnym wsparciem (od
            399&nbsp;zł/msc) oraz treningi personalne w Chełmży i okolicach.
            Obsługuję klientów z Torunia, Bydgoszczy, Warszawy, Krakowa, Gdańska
            i całej Polski. 8 lat doświadczenia, ponad 200 zadowolonych klientów.
            Skontaktuj się: kontakt@jantrenerchmielewski.pl |
            +48&nbsp;534&nbsp;214&nbsp;398.
          </p>
        </Container>
      </div>
    </footer>
  )
}
