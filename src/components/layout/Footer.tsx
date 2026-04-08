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
  { label: "Opinie", href: "/opinie" },
  { label: "Cennik", href: "/cennik" },
  { label: "Blog", href: "/blog" },
  { label: "Polityka Prywatności", href: "/polityka-prywatnosci" },
]

/* ------------------------------------------------------------------ */
/*  Sub-components                                                      */
/* ------------------------------------------------------------------ */

function FooterColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-label mb-4 text-[oklch(0.55_0.02_240)]">{children}</h3>
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
        className="group inline-flex items-center gap-1.5 font-[family-name:var(--font-sans)] text-sm text-[oklch(0.65_0.02_240)] transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.08_0.02_240)]"
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
      className="mt-auto bg-[oklch(0.08_0.02_240)]"
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
              className="group inline-flex items-center gap-3 self-start rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.08_0.02_240)]"
              aria-label="Jan Chmielewski — strona główna"
            >
              <div className="relative size-10 overflow-hidden rounded-full ring-1 ring-[oklch(0.25_0.02_240)] transition-shadow group-hover:ring-[oklch(0.65_0.18_210/50%)]">
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

            <p className="font-[family-name:var(--font-sans)] text-sm leading-relaxed text-[oklch(0.65_0.02_240)]">
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
                className="flex size-9 items-center justify-center rounded-full border border-[oklch(0.25_0.02_240)] text-[oklch(0.55_0.02_240)] transition-all hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:shadow-[0_0_12px_oklch(0.65_0.18_210/20%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.08_0.02_240)]"
              >
                <FacebookLogo size={18} weight="fill" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/chmiewski4/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Jan Chmielewski"
                className="flex size-9 items-center justify-center rounded-full border border-[oklch(0.25_0.02_240)] text-[oklch(0.55_0.02_240)] transition-all hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:shadow-[0_0_12px_oklch(0.65_0.18_210/20%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.08_0.02_240)]"
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
                  className="group flex items-start gap-2.5 font-[family-name:var(--font-sans)] text-sm text-[oklch(0.65_0.02_240)] transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.08_0.02_240)]"
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
                  className="group flex items-start gap-2.5 font-[family-name:var(--font-sans)] text-sm text-[oklch(0.65_0.02_240)] transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.08_0.02_240)]"
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
                  className="group flex items-start gap-2.5 font-[family-name:var(--font-sans)] text-sm text-[oklch(0.65_0.02_240)] transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.08_0.02_240)]"
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

        {/* Separator */}
        <Separator className="bg-[oklch(0.20_0.02_240)]" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[family-name:var(--font-sans)] text-xs text-[oklch(0.45_0.02_240)]">
            &copy; 2026 Jan Chmielewski. Wszystkie prawa zastrzeżone.
          </p>
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-tight text-[oklch(0.40_0.02_240)]">
            Trener Personalny&nbsp;|&nbsp;Dietetyk&nbsp;|&nbsp;Fizjoterapeuta&nbsp;|&nbsp;Coaching Online
          </p>
        </div>
      </Container>

      {/* SEO paragraph — visually hidden but accessible to search engines */}
      <div className="border-t border-[oklch(0.13_0.02_240)] bg-[oklch(0.06_0.02_240)] py-6">
        <Container>
          <p className="font-[family-name:var(--font-sans)] text-xs leading-relaxed text-[oklch(0.35_0.02_240)]">
            Jan Chmielewski — certyfikowany trener personalny i dietetyk online z
            8-letnim doświadczeniem. Magister Fizjoterapii, Finalista Mistrzostw
            Polski w kulturystyce. Specjalizuje się w indywidualnych dietach
            online, planach treningowych dopasowanych do celów klienta,
            prowadzeniu online oraz treningach personalnych w Chełmży i Toruniu.
            Kompleksowa opieka nad sylwetką, regeneracją i zdrowiem. Ponad 200
            zadowolonych klientów z całej Polski. Umów się na bezpłatną
            konsultację i zacznij transformację już dziś.
          </p>
        </Container>
      </div>
    </footer>
  )
}
