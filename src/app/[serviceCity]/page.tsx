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
  NumberCircleOne,
  NumberCircleTwo,
  NumberCircleThree,
  UserFocus,
} from "@phosphor-icons/react/dist/ssr";
import { cities, services, getCityBySlug } from "@/lib/data/cities";
import { serviceContent } from "@/lib/data/service-content";
import {
  LocalBusinessSchema,
  BreadcrumbSchema,
  ServicePageSchema,
  FAQSchema,
  HowToSchema,
} from "@/components/seo/JsonLd";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { RelatedServices } from "@/components/shared/RelatedServices";

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
  const content = serviceContent[service.slugPrefix];
  const priceStr = content ? ` — ${content.price}` : "";

  const title = `${service.title} ${city.name}${priceStr} | Jan Chmielewski`;
  const description = `${service.description} dla mieszkańców ${city.nameDeclension} i okolic. Magister Fizjoterapii, Finalista Mistrzostw Polski w kulturystyce. 8 lat doświadczenia, 200+ klientów. ${city.isLocal ? "Treningi stacjonarne i online." : "Prowadzenie w pełni online."}`;

  return {
    title,
    description,
    keywords: [
      `${service.title.toLowerCase()} ${city.name}`,
      `trener personalny ${city.name}`,
      `dieta online ${city.name}`,
      `plan treningowy ${city.name}`,
      service.title.toLowerCase(),
      "Jan Chmielewski",
    ],
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
  const content = serviceContent[service.slugPrefix];

  const credentials = [
    { icon: GraduationCap, label: "Magister Fizjoterapii" },
    { icon: Trophy, label: "Finalista Mistrzostw Polski" },
    { icon: Star, label: "8 lat doświadczenia" },
    { icon: Users, label: "200+ klientów" },
  ];

  const stepIcons = [NumberCircleOne, NumberCircleTwo, NumberCircleThree];

  // Sibling services for internal linking
  const siblingServices = services.filter(
    (s) => s.slugPrefix !== service.slugPrefix
  );

  // Blog article related to the current service
  const serviceBlogMap: Record<string, string> = {
    "trener-personalny": "/blog/trener-personalny-chelmza-dlaczego-warto",
    "dietetyk-online": "/blog/dieta-online-kompletny-przewodnik",
    "plan-treningowy-online": "/blog/plan-treningowy-online-przewodnik",
    "dieta-online": "/blog/prowadzenie-online-co-to-jest",
  };
  const relatedBlogHref = serviceBlogMap[service.slugPrefix] ?? "/blog";

  return (
    <>
      {/* Schemas */}
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: `${service.title} ${city.name}`, url: `/${serviceCity}` },
        ]}
      />
      <ServicePageSchema
        name={`${service.title} ${city.name}`}
        description={`${service.description} dla mieszkańców ${city.nameDeclension}`}
        price={content?.price.replace(/[^\d]/g, "") || "149"}
        url={`/${serviceCity}`}
      />
      {content && (
        <HowToSchema
          name={`Jak zamówić ${service.title.toLowerCase()} ${city.nameLocative}`}
          description={`Proces zamawiania usługi ${service.titleGenitive.toLowerCase()} dla mieszkańców ${city.nameDeclension}`}
          steps={content.processSteps.map((s) => ({
            name: s.title,
            text: s.description,
          }))}
        />
      )}
      {content && (
        <FAQSchema
          questions={content.faqItems.map((f) => ({
            question: f.question,
            answer: f.answer,
          }))}
        />
      )}
      {city.isLocal && <LocalBusinessSchema />}

      <section className="pb-20 pt-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ===== HERO ===== */}
          <div className="mb-16 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-label mb-4">
                {service.title} · {city.name}
                {city.isLocal && " · Stacjonarnie + Online"}
              </p>
              <h1 className="text-display-sm mb-6 text-3xl md:text-4xl lg:text-5xl">
                {service.title}{" "}
                <span className="text-gradient-cyan">{city.name}</span>
              </h1>
              <p className="text-body-lg mb-4 text-muted-foreground">
                Szukasz {service.titleGenitive.toLowerCase()}{" "}
                {city.nameLocative}? Jestem Jan Chmielewski — Magister
                Fizjoterapii i Finalista Mistrzostw Polski w kulturystyce.{" "}
                {city.isLocal
                  ? `Oferuję treningi personalne stacjonarnie w Chełmży${city.distanceFromChelmza ? ` (${city.distanceFromChelmza} z ${city.nameDeclension})` : ""} oraz pełne prowadzenie online.`
                  : `Prowadzę klientów z ${city.nameDeclension} w pełni online — indywidualne diety, plany treningowe i kompleksowe prowadzenie.`}
              </p>
              {city.fitnessContext && (
                <p className="mb-8 text-sm text-muted-foreground/80">
                  {city.fitnessContext}
                </p>
              )}

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/kontakt"
                  className="glow-cyan inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Skontaktuj się
                  <ArrowRight size={18} weight="bold" />
                </Link>
                <Link
                  href={content?.servicePageHref || "/cennik"}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 font-medium transition-all hover:bg-secondary"
                >
                  Szczegóły oferty
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
                  {content?.price || "od 149 zł"}
                  {content?.priceLabel ? ` ${content.priceLabel}` : ""}
                </p>
                <p className="text-lg font-bold text-primary">
                  {city.isLocal ? "Stacjonarnie + Online" : "Online 24/7"}
                </p>
              </div>
            </div>
          </div>

          {/* ===== CREDENTIALS ===== */}
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

          {/* ===== TRUST BADGES ===== */}
          <TrustBadges className="mb-16" />

          {/* ===== SERVICE-SPECIFIC FEATURES ===== */}
          {content && (
            <div className="mb-20">
              <h2 className="text-display-sm mb-8 text-2xl md:text-3xl">
                Co oferuję mieszkańcom {city.nameDeclension}?
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {content.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-border bg-card p-6"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <CheckCircle
                        size={20}
                        weight="fill"
                        className="shrink-0 text-primary"
                      />
                      <h3 className="font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== PROCESS STEPS ===== */}
          {content && (
            <div className="mb-20">
              <h2 className="text-display-sm mb-8 text-2xl md:text-3xl">
                Jak to działa?
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {content.processSteps.map((step, i) => {
                  const StepIcon = stepIcons[i] || NumberCircleOne;
                  return (
                    <div
                      key={step.step}
                      className="rounded-xl border border-border bg-card p-6"
                    >
                      <StepIcon
                        size={40}
                        weight="duotone"
                        className="mb-4 text-primary"
                      />
                      <h3 className="mb-2 text-lg font-semibold">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ===== TARGET AUDIENCE ===== */}
          {content && (
            <div className="mb-20">
              <h2 className="text-display-sm mb-8 text-2xl md:text-3xl">
                Dla kogo jest ta usługa?
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {content.targetAudience.map((audience) => (
                  <div
                    key={audience.title}
                    className="flex gap-4 rounded-xl border border-border bg-card p-6"
                  >
                    <UserFocus
                      size={28}
                      weight="duotone"
                      className="mt-1 shrink-0 text-primary"
                    />
                    <div>
                      <h3 className="mb-1 font-semibold">{audience.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {audience.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== CITY-SPECIFIC SEO CONTENT ===== */}
          <div className="mb-20 rounded-2xl border border-border bg-card/50 p-8 lg:p-12">
            <h2 className="text-display-sm mb-6 text-xl md:text-2xl">
              Profesjonalny {service.title} dla mieszkańców{" "}
              {city.nameDeclension}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Jako profesjonalny {service.title.toLowerCase()} obsługujący
                klientów z {city.nameDeclension} ({city.voivodeship}), oferuję
                kompleksowe wsparcie w osiąganiu celów fitness. Moje 8-letnie
                doświadczenie, tytuł Magistra Fizjoterapii oraz status Finalisty
                Mistrzostw Polski w kulturystyce gwarantują najwyższą jakość
                usług.
              </p>
              <p>
                {city.isLocal
                  ? `Dla mieszkańców ${city.nameDeclension} dostępne są zarówno treningi personalne w mojej sali treningowej w Chełmży (3 Maja 18A)${city.distanceFromChelmza ? ` — zaledwie ${city.distanceFromChelmza} z centrum ${city.nameDeclension}` : ""}, jak i pełne prowadzenie online z indywidualną dietą i planem treningowym.`
                  : `Klientów z ${city.nameDeclension} (${city.population} mieszkańców) prowadzę w pełni online — otrzymujesz indywidualną dietę, plan treningowy, dostęp 24/7 do konsultacji oraz cotygodniowe raporty postępów. Odległość nie jest przeszkodą w osiąganiu wyników.`}
              </p>
              <p>
                Mieszkając {city.nameLocative}, nie musisz szukać lokalnego
                trenera ani dojeżdżać do większych ośrodków. Cały proces
                współpracy odbywa się online — od konsultacji wstępnej, przez
                przygotowanie indywidualnego planu, po cotygodniową analizę
                postępów. Jestem dostępny dla moich klientów z{" "}
                {city.nameDeclension} 7 dni w tygodniu przez aplikację i
                wiadomości.
              </p>
              {city.fitnessContext && <p>{city.fitnessContext}</p>}
              {content && <p>{content.methodology}</p>}
              {content && <p>{content.resultsTimeline}</p>}
              <p>
                Wybierając {service.title.toLowerCase()} online zamiast
                lokalnych usług, zyskujesz dostęp do wiedzy medycznej i
                sportowej wypracowanej przez lata pracy z klientami z całej
                Polski. Tytuł Magistra Fizjoterapii sprawia, że każdy plan
                treningowy i dietetyczny jest bezpieczny, oparty na anatomii i
                fizjologii — nie na popularnych schematach z internetu. Twoje
                wyniki są dla mnie priorytetem niezależnie od tego, czy jesteś{" "}
                {city.nameLocative}, czy w innym miejscu Polski.
              </p>
            </div>
          </div>

          {/* ===== FAQ ===== */}
          {content && content.faqItems.length > 0 && (
            <div className="mb-20">
              <h2 className="text-display-sm mb-8 text-2xl md:text-3xl">
                Najczęściej zadawane pytania
              </h2>
              <div className="space-y-4">
                {content.faqItems.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-border bg-card"
                  >
                    <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-medium">
                      {faq.question}
                      <ArrowRight
                        size={16}
                        className="shrink-0 rotate-90 transition-transform group-open:rotate-[270deg]"
                      />
                    </summary>
                    <div className="px-6 pb-4 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* ===== INTERNAL LINKS ===== */}
          <div className="mb-20">
            <h2 className="text-display-sm mb-6 text-xl md:text-2xl">
              Inne usługi {city.nameLocative}
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {siblingServices.map((s) => (
                <Link
                  key={s.slugPrefix}
                  href={`/${s.slugPrefix}-${city.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                >
                  <div>
                    <p className="font-semibold group-hover:text-primary">
                      {s.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {s.description.slice(0, 60)}...
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="ml-auto shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                  />
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              {content && (
                <Link
                  href={content.servicePageHref}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Dowiedz się więcej o {service.title.toLowerCase()} →
                </Link>
              )}
              <Link
                href={relatedBlogHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Przeczytaj artykuł na blogu →
              </Link>
              <Link
                href="/cennik"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Cennik →
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Kontakt →
              </Link>
            </div>
          </div>

          {/* ===== DLACZEGO JAN CHMIELEWSKI ===== */}
          <div className="mb-20 rounded-2xl border border-primary/20 bg-card/60 p-8 lg:p-12">
            <h2 className="text-display-sm mb-8 text-2xl md:text-3xl">
              Dlaczego Jan Chmielewski?
            </h2>
            <ul className="space-y-4">
              {[
                {
                  icon: GraduationCap,
                  text: "Magister Fizjoterapii — kwalifikacje medyczne gwarantujące bezpieczny i skuteczny trening",
                },
                {
                  icon: Trophy,
                  text: "Finalista Mistrzostw Polski w kulturystyce — praktyczne doświadczenie sportowe na najwyższym poziomie",
                },
                {
                  icon: Users,
                  text: "200+ zadowolonych klientów z całej Polski — sprawdzone metody i realne wyniki",
                },
                {
                  icon: Star,
                  text: "8 lat doświadczenia — setki indywidualnych programów treningowych i dietetycznych",
                },
                {
                  icon: CheckCircle,
                  text: "Pełne prowadzenie online lub plan dostosowany do Twoich celów — zawsze indywidualne podejście",
                },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4">
                  <Icon
                    size={24}
                    weight="duotone"
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== CTA ===== */}
          <div className="mb-20 text-center">
            <h2 className="text-display-sm mb-4 text-2xl md:text-3xl">
              Gotowy na zmianę?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
              Skontaktuj się ze mną i zacznijmy Twoją transformację. Pierwsza
              konsultacja jest bezpłatna.
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

          {/* ===== RELATED SERVICES ===== */}
          <RelatedServices
            currentService={service.slugPrefix}
            currentCity={city.slug}
          />
        </div>
      </section>
    </>
  );
}
