import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { cn } from "@/lib/utils"
import { serviceContent } from "@/lib/data/service-content"

const SERVICE_DISPLAY_NAMES: Record<string, string> = {
  "trener-personalny": "Trening Personalny",
  "dietetyk-online": "Dietetyk Online",
  "plan-treningowy-online": "Plan Treningowy",
  "dieta-online": "Prowadzenie Online",
}

const SERVICE_SHORT_DESCRIPTIONS: Record<string, string> = {
  "trener-personalny":
    "Indywidualne sesje treningowe z magistrem fizjoterapii. Analiza ruchu, korekta techniki i periodyzacja.",
  "dietetyk-online":
    "Spersonalizowany plan żywieniowy oparty na badaniach i Twoich preferencjach. Wsparcie dietetyczne online.",
  "plan-treningowy-online":
    "Profesjonalny plan treningowy z progresją, periodyzacją i wideo instruktażami do samodzielnego wykonania.",
  "dieta-online":
    "Kompleksowe prowadzenie: trening + dieta + cotygodniowe raporty. Pełna opieka trenera i dietetyka.",
}

interface RelatedServicesProps {
  currentService?: string
  currentCity?: string
  className?: string
}

export function RelatedServices({
  currentService,
  currentCity,
  className,
}: RelatedServicesProps) {
  const serviceKeys = Object.keys(serviceContent).filter(
    (key) => key !== currentService
  )

  const displayedServices = serviceKeys.slice(0, 3)

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
          Może Cię zainteresować
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {displayedServices.map((key) => {
            const service = serviceContent[key]
            const displayName = SERVICE_DISPLAY_NAMES[key] ?? key
            const description = SERVICE_SHORT_DESCRIPTIONS[key] ?? ""

            const href = currentCity
              ? `${service.servicePageHref}/${currentCity}`
              : service.servicePageHref

            return (
              <Link
                key={key}
                href={href}
                className={cn(
                  "group flex flex-col gap-4 rounded-xl border border-border p-6",
                  "transition-all duration-300",
                  "hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-black/15",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
                style={{ backgroundColor: "var(--card)" }}
              >
                <h3 className="font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {displayName}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-2">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--cyan)" }}
                  >
                    {service.price}
                  </span>

                  <span
                    className={cn(
                      "inline-flex items-center gap-1 text-sm font-medium text-primary",
                      "transition-transform group-hover:translate-x-1"
                    )}
                  >
                    Sprawdź
                    <ArrowRight weight="bold" className="size-4" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
