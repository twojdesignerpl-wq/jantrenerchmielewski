"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import {
  List,
  X,
  UserCircle,
  ShoppingBag,
  TrendUp,
  ChartLineUp,
  ChatCircle,
  Article,
  CurrencyCircleDollar,
  Envelope,
  Barbell,
  BowlFood,
  Users,
  MapPin,
} from "@phosphor-icons/react"

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Container } from "@/components/layout/Container"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const ofertaItems = [
  {
    label: "Dieta Online",
    href: "/dieta-online",
    description: "Indywidualny plan żywieniowy dopasowany do Twoich celów",
  },
  {
    label: "Plan Treningowy",
    href: "/plan-treningowy",
    description: "Autorski program ćwiczeń oparty na fizjoterapii",
  },
  {
    label: "Prowadzenie Online",
    href: "/prowadzenie-online",
    description: "Kompleksowa opieka trenera przez cały miesiąc",
  },
  {
    label: "Trening Personalny",
    href: "/trening-personalny-chelmza",
    description: "Treningi stacjonarne w Chełmży i Toruniu",
  },
]

type SimpleNavItem = { label: string; href: string; dropdown?: never }
type DropdownNavItem = {
  label: string
  href?: never
  dropdown: typeof ofertaItems
}
type NavItem = SimpleNavItem | DropdownNavItem

const navItems: NavItem[] = [
  { label: "O Mnie", href: "/o-mnie" },
  { label: "Oferta", dropdown: ofertaItems },
  { label: "Metamorfoza", href: "/metamorfoza" },
  { label: "Efekty", href: "/efekty" },
  { label: "Opinie", href: "/opinie" },
  { label: "Blog", href: "/blog" },
  { label: "Cennik", href: "/cennik" },
  { label: "Kontakt", href: "/kontakt" },
]

/* ------------------------------------------------------------------ */
/*  Shared styles                                                       */
/* ------------------------------------------------------------------ */

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"

/* ------------------------------------------------------------------ */
/*  Sub-components                                                       */
/* ------------------------------------------------------------------ */

function ActiveUnderline() {
  return (
    <span
      className="absolute -bottom-px left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-[var(--cyan)]"
      aria-hidden="true"
    />
  )
}

function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-0.5">
        {navItems.map((item) => {
          /* ---- Dropdown ---- */
          if (item.dropdown) {
            const isActive = item.dropdown.some((d) =>
              pathname.startsWith(d.href)
            )
            return (
              <NavigationMenuItem key="oferta">
                <NavigationMenuTrigger
                  className={cn(
                    "relative bg-transparent px-4 py-2",
                    "font-[family-name:var(--font-sans)] text-[0.938rem] font-medium transition-colors",
                    "hover:bg-transparent hover:text-foreground",
                    "data-popup-open:bg-transparent data-popup-open:text-foreground",
                    "data-open:bg-transparent",
                    isActive
                      ? "text-foreground"
                      : "text-[oklch(0.72_0.01_232)]"
                  )}
                >
                  {item.label}
                  {isActive && <ActiveUnderline />}
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="w-64 p-2">
                    {item.dropdown.map((d) => {
                      const isItemActive = pathname === d.href
                      return (
                        <li key={d.href}>
                          {/*
                           * NavigationMenuLink from @base-ui/react accepts `render` to
                           * replace the default <a> element with a Next.js Link.
                           */}
                          <NavigationMenuLink
                            active={isItemActive}
                            render={
                              <Link
                                href={d.href}
                                className="flex flex-col gap-0.5 rounded-md px-3 py-2.5 transition-colors hover:bg-[var(--surface-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)]"
                              />
                            }
                          >
                            <span className="text-sm font-medium text-foreground">
                              {d.label}
                            </span>
                            <span className="text-xs leading-relaxed text-[oklch(0.55_0.02_232)]">
                              {d.description}
                            </span>
                          </NavigationMenuLink>
                        </li>
                      )
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )
          }

          /* ---- Simple link ---- */
          const isActive = pathname === item.href
          return (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                active={isActive}
                render={
                  <Link
                    href={item.href}
                    className={cn(
                      "relative inline-flex items-center rounded-md px-4 py-2",
                      "font-[family-name:var(--font-sans)] text-[0.938rem] font-medium transition-colors",
                      focusRing,
                      isActive
                        ? "text-foreground"
                        : "text-[oklch(0.72_0.01_232)] hover:text-foreground"
                    )}
                  />
                }
              >
                {item.label}
                {isActive && <ActiveUnderline />}
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

type PhosphorIcon = React.ComponentType<{ size?: number; weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone"; className?: string }>

/** Map of mobile nav icons keyed by href */
const mobileNavIcons: Record<string, PhosphorIcon> = {
  "/o-mnie": UserCircle,
  "/dieta-online": BowlFood,
  "/plan-treningowy": Barbell,
  "/prowadzenie-online": Users,
  "/trening-personalny-chelmza": MapPin,
  "/metamorfoza": TrendUp,
  "/efekty": ChartLineUp,
  "/opinie": ChatCircle,
  "/blog": Article,
  "/cennik": CurrencyCircleDollar,
  "/kontakt": Envelope,
}

function MobileNavLink({
  href,
  label,
  pathname,
  onClose,
}: {
  href: string
  label: string
  pathname: string
  onClose: () => void
}) {
  const isActive = pathname === href
  const Icon = mobileNavIcons[href]
  /*
   * SheetClose = Dialog.Close renders a <button> by default.
   * We replace it with a Next.js <Link> using the render prop so it
   * still registers a close event while navigating.
   */
  return (
    <SheetClose
      render={
        <Link
          href={href}
          onClick={onClose}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg px-4 py-3",
            "font-[family-name:var(--font-sans)] text-sm font-medium transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.14_0.025_232)]",
            isActive
              ? "border-l-2 border-[var(--cyan)] bg-[var(--surface-elevated)] pl-[calc(1rem_-_2px)] text-foreground"
              : "text-[oklch(0.72_0.01_232)] hover:bg-[var(--surface-elevated)] hover:text-foreground"
          )}
        />
      }
    >
      {Icon && (
        <Icon
          size={18}
          weight={isActive ? "fill" : "regular"}
          className={cn(
            "shrink-0 transition-colors",
            isActive ? "text-[var(--cyan)]" : "text-[oklch(0.50_0.02_232)]"
          )}
          aria-hidden="true"
        />
      )}
      {label}
    </SheetClose>
  )
}

/* ------------------------------------------------------------------ */
/*  Navbar                                                              */
/* ------------------------------------------------------------------ */

export function Navbar() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = React.useState(true)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const lastScrollY = React.useRef(0)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = lastScrollY.current

    if (latest < 60) {
      setIsVisible(true)
    } else if (latest > prev + 8) {
      // Scrolling down — hide
      setIsVisible(false)
      setMobileOpen(false)
    } else if (prev > latest + 8) {
      // Scrolling up — show
      setIsVisible(true)
    }

    setIsScrolled(latest > 20)
    lastScrollY.current = latest
  })

  return (
    <motion.header
      role="banner"
      suppressHydrationWarning
      className={cn(
        "fixed top-0 right-0 left-0 z-40",
        "transition-[background-color,border-color,box-shadow] duration-300",
        isScrolled
          ? "border-b border-[oklch(0.28_0.025_232)] bg-[oklch(0.14_0.025_232/85%)] shadow-[0_4px_32px_oklch(0_0_0/30%)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
      animate={{ y: isVisible ? "0%" : "-100%" }}
      transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
    >
      <Container>
        <div className="flex h-18 items-center justify-between gap-6 md:h-20">

          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "group flex shrink-0 items-center gap-3 rounded-md",
              focusRing
            )}
            aria-label="Jan Chmielewski — strona główna"
          >
            <div className="relative size-11 overflow-hidden rounded-full ring-1 ring-[oklch(0.28_0.025_232)] transition-all duration-300 group-hover:ring-[oklch(0.65_0.18_210/50%)] group-hover:shadow-[0_0_16px_oklch(0.65_0.18_210/20%)] md:size-12">
              <Image
                src="/images/logo.png"
                alt="Logo Jan Chmielewski"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                sizes="48px"
                priority
              />
            </div>
            <span
              className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-[var(--cyan)]"
              aria-hidden="true"
            >
              JC
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden md:flex md:flex-1 md:justify-center"
            aria-label="Nawigacja główna"
          >
            <DesktopNav pathname={pathname} />
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:shrink-0">
            <Link
              href="/kontakt"
              className={cn(
                "glow-cyan inline-flex items-center justify-center rounded-full px-7 py-2.5",
                "bg-[var(--cyan)] font-[family-name:var(--font-sans)] text-[0.938rem] font-semibold text-[oklch(0.14_0.025_232)]",
                "transition-all duration-300 hover:scale-[1.04] hover:bg-[var(--cyan-glow)] hover:shadow-[0_0_36px_oklch(0.65_0.18_210/40%)]",
                "active:scale-[0.98]",
                focusRing
              )}
            >
              Zacznij teraz
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              {/*
               * SheetTrigger = Dialog.Trigger = <button>.
               * We keep it as a native button and style it directly.
               */}
              <SheetTrigger
                aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                className={cn(
                  "inline-flex size-10 items-center justify-center rounded-lg transition-colors",
                  "text-foreground hover:bg-[var(--surface-elevated)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
              >
                {mobileOpen ? (
                  <X size={24} weight="bold" aria-hidden="true" />
                ) : (
                  <List size={24} weight="bold" aria-hidden="true" />
                )}
              </SheetTrigger>

              <SheetContent
                side="left"
                id="mobile-nav"
                showCloseButton={false}
                className="flex w-80 flex-col gap-0 border-r border-[oklch(0.28_0.025_232)] bg-[oklch(0.14_0.025_232)] p-0"
              >
                <SheetHeader className="border-b border-[oklch(0.28_0.025_232)] px-4 py-4">
                  <div className="flex items-center justify-between">
                    {/*
                     * SheetTitle = Dialog.Title = <h2>.
                     * render prop replaces <h2> with Next.js Link while keeping
                     * the accessible title role for the dialog.
                     */}
                    <SheetTitle
                      render={
                        <Link
                          href="/"
                          className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)]"
                          onClick={() => setMobileOpen(false)}
                        />
                      }
                    >
                      <div className="relative size-9 overflow-hidden rounded-full ring-1 ring-[oklch(0.28_0.025_232)]">
                        <Image
                          src="/images/logo.png"
                          alt="Logo Jan Chmielewski"
                          fill
                          className="object-cover"
                          sizes="36px"
                          loading="eager"
                          priority
                        />
                      </div>
                      <span className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-foreground">
                        Jan Chmielewski
                      </span>
                    </SheetTitle>

                    {/*
                     * SheetClose = Dialog.Close = <button>.
                     * Styled directly as a native button.
                     */}
                    <SheetClose
                      aria-label="Zamknij menu"
                      className={cn(
                        "inline-flex size-7 items-center justify-center rounded-md transition-colors",
                        "text-[oklch(0.55_0.02_232)] hover:bg-[var(--surface-elevated)] hover:text-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.14_0.025_232)]"
                      )}
                    >
                      <X size={18} weight="bold" aria-hidden="true" />
                    </SheetClose>
                  </div>
                </SheetHeader>

                {/* Mobile links */}
                <nav
                  id="mobile-nav"
                  className="flex flex-1 flex-col overflow-y-auto px-3 py-4"
                  aria-label="Nawigacja mobilna"
                >
                  <div className="flex flex-col gap-0.5">
                    <MobileNavLink
                      href="/o-mnie"
                      label="O Mnie"
                      pathname={pathname}
                      onClose={() => setMobileOpen(false)}
                    />
                  </div>

                  <div className="mt-3 flex flex-col gap-0.5">
                    <p
                      className="text-label mb-1 px-4 py-1"
                      aria-hidden="true"
                    >
                      Oferta
                    </p>
                    {ofertaItems.map((d) => (
                      <MobileNavLink
                        key={d.href}
                        href={d.href}
                        label={d.label}
                        pathname={pathname}
                        onClose={() => setMobileOpen(false)}
                      />
                    ))}
                  </div>

                  <div className="mt-3 flex flex-col gap-0.5">
                    <MobileNavLink
                      href="/metamorfoza"
                      label="Metamorfoza"
                      pathname={pathname}
                      onClose={() => setMobileOpen(false)}
                    />
                    <MobileNavLink
                      href="/efekty"
                      label="Efekty"
                      pathname={pathname}
                      onClose={() => setMobileOpen(false)}
                    />
                    <MobileNavLink
                      href="/opinie"
                      label="Opinie"
                      pathname={pathname}
                      onClose={() => setMobileOpen(false)}
                    />
                    <MobileNavLink
                      href="/blog"
                      label="Blog"
                      pathname={pathname}
                      onClose={() => setMobileOpen(false)}
                    />
                    <MobileNavLink
                      href="/cennik"
                      label="Cennik"
                      pathname={pathname}
                      onClose={() => setMobileOpen(false)}
                    />
                    <MobileNavLink
                      href="/kontakt"
                      label="Kontakt"
                      pathname={pathname}
                      onClose={() => setMobileOpen(false)}
                    />
                  </div>
                </nav>

                {/* Mobile CTA */}
                <div className="border-t border-[oklch(0.28_0.025_232)] px-4 py-4">
                  <SheetClose
                    render={
                      <Link
                        href="/kontakt"
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "glow-cyan flex w-full items-center justify-center rounded-full px-5 py-2.5",
                          "bg-[var(--cyan)] font-[family-name:var(--font-sans)] text-sm font-semibold text-[oklch(0.14_0.025_232)]",
                          "transition-all hover:scale-[1.02] hover:bg-[var(--cyan-glow)] active:scale-[0.98]",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.14_0.025_232)]"
                        )}
                      />
                    }
                  >
                    Zacznij teraz
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </Container>
    </motion.header>
  )
}
