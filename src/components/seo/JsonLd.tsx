interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Jan Chmielewski",
        jobTitle: "Trener Personalny",
        description:
          "Magister Fizjoterapii, Finalista Mistrzostw Polski w kulturystyce. Profesjonalny trener personalny i dietetyk z 8-letnim doświadczeniem.",
        url: "https://jantrenerchmielewski.pl",
        image: "https://jantrenerchmielewski.pl/images/jan-hero.png",
        telephone: "+48534214398",
        email: "kontakt@jantrenerchmielewski.pl",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3 Maja 18A",
          addressLocality: "Chełmża",
          postalCode: "87-140",
          addressCountry: "PL",
        },
        sameAs: [
          "https://www.facebook.com/profile.php?id=61554502225830",
          "https://www.instagram.com/chmiewski4/",
        ],
        knowsAbout: [
          "Trening personalny",
          "Dietetyka sportowa",
          "Fizjoterapia",
          "Kulturystyka",
          "Planowanie treningowe",
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "degree",
            name: "Magister Fizjoterapii",
          },
        ],
      }}
    />
  );
}

export function LocalBusinessSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://jantrenerchmielewski.pl/#business",
        name: "Jan Chmielewski — Trener Personalny",
        description:
          "Profesjonalny trener personalny i dietetyk online. Indywidualne diety, plany treningowe i prowadzenie online dla klientów z całej Polski. Trening personalny w Chełmży.",
        url: "https://jantrenerchmielewski.pl",
        telephone: "+48534214398",
        email: "kontakt@jantrenerchmielewski.pl",
        image: "https://jantrenerchmielewski.pl/images/jan-hero.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3 Maja 18A",
          addressLocality: "Chełmża",
          postalCode: "87-140",
          addressRegion: "kujawsko-pomorskie",
          addressCountry: "PL",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 53.1833,
          longitude: 18.6,
        },
        areaServed: [
          { "@type": "City", name: "Chełmża" },
          { "@type": "City", name: "Toruń" },
          { "@type": "Country", name: "Polska" },
        ],
        priceRange: "149 zł - 3699 zł",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "07:00",
          closes: "21:00",
        },
        sameAs: [
          "https://www.facebook.com/profile.php?id=61554502225830",
          "https://www.instagram.com/chmiewski4/",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Usługi fitness i dietetyczne",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Dieta 4-tygodniowa",
                description:
                  "Spersonalizowany plan żywieniowy dopasowany do potrzeb i celów.",
              },
              price: "199",
              priceCurrency: "PLN",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Plan Treningowy 8-tygodniowy",
                description:
                  "Pełny program treningowy dostosowany do poziomu zaawansowania.",
              },
              price: "149",
              priceCurrency: "PLN",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Prowadzenie Online",
                description:
                  "Kompleksowe wsparcie - dieta + plan treningowy + stały kontakt.",
              },
              price: "399",
              priceCurrency: "PLN",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Trening Personalny",
                description:
                  "Indywidualne treningi w Chełmży z profesjonalnym trenerem.",
              },
              price: "149",
              priceCurrency: "PLN",
            },
          ],
        },
      }}
    />
  );
}

export function ServicePageSchema({
  name,
  description,
  price,
  url,
}: {
  name: string;
  description: string;
  price: string;
  url: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        provider: {
          "@type": "Person",
          name: "Jan Chmielewski",
          url: "https://jantrenerchmielewski.pl",
        },
        areaServed: {
          "@type": "Country",
          name: "Polska",
        },
        offers: {
          "@type": "Offer",
          price,
          priceCurrency: "PLN",
          url: `https://jantrenerchmielewski.pl${url}`,
        },
      }}
    />
  );
}

export function FAQSchema({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: questions.map((q) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: q.answer,
          },
        })),
      }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `https://jantrenerchmielewski.pl${item.url}`,
        })),
      }}
    />
  );
}
