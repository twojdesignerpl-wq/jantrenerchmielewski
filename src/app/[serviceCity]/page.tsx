import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  GraduationCap,
  Trophy,
  Star,
  Users,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { cities, services, getCityBySlug } from "@/lib/data/cities";
import {
  LocalBusinessSchema,
  BreadcrumbSchema,
  ServicePageSchema,
} from "@/components/seo/JsonLd";

function parseServiceCity(slug: string) {
  for (const service of services) {
    if (slug.startsWith(service.slugPrefix + "-")) {
      const citySlug = slug.slice(service.slugPrefix.length + 1);
      const city = getCityBySlug(citySlug);
      if (city) return { service, city };
    }
  }
  return null;
}

export function generateStaticParams() {
  const params: { serviceCity: string }[] = [];
  for (const city of cities) {
    for (const service of services) {
      params.push({ serviceCity: `${service.slugPrefix}-${city.slug}` });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceCity: string }>;
}): Promise<Metadata> {
  const { serviceCity } = await params;
  const parsed = parseServiceCity(serviceCity);
  if (!parsed) return {};

  const { service, city } = parsed;
  const title = `${service.title} ${city.name} — Jan Chmielewski`;
  const description = `${service.description} dla mieszkańców ${city.nameDeclension} i okolic. Magister Fizjoterapii, Finalista Mistrzostw Polski. 8 lat doświadczenia, 200+ klientów. ${city.isLocal ? "Treningi stacjonarne i online." : "Prowadzenie w pełni online."}`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://jantrenerchmielewski.pl/${serviceCity}`,
    },
    openGraph: {
      title,
      description,
      url: `https://jantrenerchmielewski.pl/${serviceCity}`,
    },
  };
}

export default async function ServiceCityPage({
  params,
}: {
  params: Promise<{ serviceCity: string }>;
}) {
  const { serviceCity } = await params;
  const parsed = parseServiceCity(serviceCity);
  if (!parsed) notFound();

  const { service, city } = parsed;

  const features = [
    "Indywidualne podejście do każdego klienta",
    "Spersonalizowany plan dopasowany do celów",
    "Wsparcie online 24/7",
    "Cotygodniowe raporty postępów",
    "Korekty i optymalizacja planu",
    "8 lat doświadczenia w branży",
  ];

  const credentials = [
    { icon: GraduationCap, label: "Magister Fizjoterapii" },
    { icon: Trophy, label: "Finalista Mistrzostw Polski" },
    { icon: Star, label: "8 lat doświadczenia" },
    { icon: Users, label: "200+ klientów" },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: `${service.title} ${city.name}`, url: `/${serviceCity}` },
        ]}
      />
      <ServicePageSchema
        name={`${service.title} ${city.name}`}
        description={`${service.description} dla mieszkańców ${city.nameDeclension}`}
        price="149"
        url={`/${serviceCity}`}
      />
      {city.isLocal && <LocalBusinessSchema />}

      <section className="pb-20 pt-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="mb-16 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-label mb-4">
                {service.title} · {city.name}
              </p>
              <h1 className="text-display-sm mb-6 text-3xl md:text-4xl lg:text-5xl">
                {service.title}{" "}
                <span className="text-gradient-cyan">{city.name}</span>
              </h1>
              <p className="text-body-lg mb-8 text-muted-foreground">
                Szukasz {service.titleGenitive.toLowerCase()} w{" "}
                {city.name.endsWith("e") || city.name.endsWith("y")
                  ? ""
                  : "e"}{" "}
                {city.nameDeclension}? Jestem Jan Chmielewski — Magister
                Fizjoterapii i Finalista Mistrzostw Polski w kulturystyce.{" "}
                {city.isLocal
                  ? `Oferuję treningi personalne stacjonarnie w Chełmży (blisko ${city.nameDeclension}) oraz pełne prowadzenie online.`
                  : `Prowadzę klientów z ${city.nameDeclension} w pełni online — indywidualne diety, plany treningowe i kompleksowe prowadzenie.`}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/kontakt"
                  className="glow-cyan inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Skontaktuj się
                  <ArrowRight size={18} weight="bold" />
                </Link>
                <Link
                  href="/cennik"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 font-medium transition-all hover:bg-secondary"
                >
                  Zobacz cennik
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/jan-magister.png"
                alt={`Jan Chmielewski — ${service.title} ${city.name}`}
                width={500}
                height={600}
                className="mx-auto rounded-2xl"
              />
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card px-4 py-3 shadow-lg">
                <p className="text-mono-metric text-xs text-muted-foreground">
                  Klienci z {city.nameDeclension}
                </p>
                <p className="text-lg font-bold text-primary">Online 24/7</p>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {credentials.map((cred) => {
              const Icon = cred.icon;
              return (
                <div
                  key={cred.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4"
                >
                  <Icon
                    size={24}
                    weight="duotone"
                    className="shrink-0 text-primary"
                  />
                  <span className="text-sm font-medium">{cred.label}</span>
                </div>
              );
            })}
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-display-sm mb-8 text-2xl md:text-3xl">
              Co oferuję mieszkańcom {city.nameDeclension}?
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
                >
                  <CheckCircle
                    size={22}
                    weight="fill"
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SEO Content */}
          <div className="rounded-2xl border border-border bg-card/50 p-8 lg:p-12">
            <h2 className="text-display-sm mb-6 text-xl md:text-2xl">
              {service.title} {city.name} — Profesjonalne wsparcie fitness
            </h2>
            <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
              <p>
                Jako profesjonalny {service.title.toLowerCase()} obsługujący
                klientów z {city.nameDeclension} ({city.region}), oferuję
                kompleksowe wsparcie w osiąganiu celów fitness. Moje 8-letnie
                doświadczenie, tytuł Magistra Fizjoterapii oraz status Finalisty
                Mistrzostw Polski w kulturystyce gwarantują najwyższą jakość
                usług.
              </p>
              <p>
                {city.isLocal
                  ? `Dla mieszkańców ${city.nameDeclension} dostępne są zarówno treningi personalne w mojej sali treningowej w Chełmży (3 Maja 18A), jak i pełne prowadzenie online z indywidualną dietą i planem treningowym.`
                  : `Klientów z ${city.nameDeclension} prowadzę w pełni online — otrzymujesz indywidualną dietę, plan treningowy, dostęp 24/7 do konsultacji oraz cotygodniowe raporty postępów. Odległość nie jest przeszkodą w osiąganiu wyników.`}
              </p>
              <p>
                Specjalizuję się w tworzeniu indywidualnych diet odchudzających,
                diet na masę mięśniową, planów treningowych siłowych oraz
                kompleksowym prowadzeniu fitness online. Jako fizjoterapeuta,
                uwzględniam w planach treningowych ewentualne ograniczenia
                zdrowotne i kontuzje.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-display-sm mb-4 text-2xl md:text-3xl">
              Gotowy na zmianę?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
              Skontaktuj się ze mną i zacznijmy Twoją transformację. Pierwsze
              konsultacje są bezpłatne.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/kontakt"
                className="glow-cyan inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Napisz do mnie
                <ArrowRight size={20} weight="bold" />
              </Link>
              <a
                href="tel:+48534214398"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-lg font-medium transition-all hover:bg-secondary"
              >
                Zadzwoń: +48 534 214 398
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
