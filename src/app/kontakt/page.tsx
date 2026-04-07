import type { Metadata } from "next";
import { Suspense } from "react";
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  FacebookLogo,
  InstagramLogo,
} from "@phosphor-icons/react/dist/ssr";
import { ContactWizard } from "@/components/contact/ContactWizard";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się z trenerem personalnym Janem Chmielewskim. Formularz kontaktowy, telefon +48 534 214 398, email kontakt@jantrenerchmielewski.pl. Chełmża, Toruń i cała Polska online.",
  alternates: {
    canonical: "https://jantrenerchmielewski.pl/kontakt",
  },
  openGraph: {
    title: "Kontakt — Jan Chmielewski, Trener Personalny",
    description:
      "Napisz do mnie lub zadzwoń. Pomagam osiągać cele fitness od 8 lat.",
    url: "https://jantrenerchmielewski.pl/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <LenisProvider>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Kontakt", url: "/kontakt" },
        ]}
      />
      <Navbar />
      <main>
      <section className="pb-20 pt-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2">
              <p className="text-label mb-4">Kontakt</p>
              <h1 className="text-display-sm mb-4 text-3xl md:text-4xl">
                Skontaktuj się ze mną
              </h1>
              <p className="text-body-lg mb-10 text-muted-foreground">
                Masz pytania? Chętnie odpowiem. Napisz lub zadzwoń — zazwyczaj
                odpowiadam w ciągu 24 godzin.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:kontakt@jantrenerchmielewski.pl"
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <EnvelopeSimple
                      size={22}
                      weight="duotone"
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">
                      kontakt@jantrenerchmielewski.pl
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+48534214398"
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone
                      size={22}
                      weight="duotone"
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefon</p>
                    <p className="font-medium">+48 534 214 398</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin
                      size={22}
                      weight="duotone"
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Trening Personalny
                    </p>
                    <p className="font-medium">3 Maja 18A</p>
                    <p className="text-sm text-muted-foreground">
                      87-140 Chełmża
                    </p>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=61554502225830&locale=pl_PL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-border transition-all hover:border-primary/40 hover:bg-primary/10"
                    aria-label="Facebook"
                  >
                    <FacebookLogo size={22} weight="fill" />
                  </a>
                  <a
                    href="https://www.instagram.com/chmiewski4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-border transition-all hover:border-primary/40 hover:bg-primary/10"
                    aria-label="Instagram"
                  >
                    <InstagramLogo size={22} weight="fill" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Wizard — prominent, high-contrast panel */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border-2 border-primary/30 bg-[oklch(0.13_0.03_220)] p-8 sm:p-10 shadow-[0_0_40px_oklch(0.65_0.18_210/10%),0_0_80px_oklch(0.65_0.18_210/5%)]">
                <Suspense fallback={<div className="flex justify-center py-12"><div className="h-8 w-8 animate-pulse rounded-full bg-muted" /></div>}>
                  <ContactWizard />
                </Suspense>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-16 overflow-hidden rounded-2xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2399.5!2d18.604!3d53.183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47031fbe5e9b5b5d%3A0x2a3a69b8a60a0a4a!2s3+Maja+18A%2C+87-140+Che%C5%82m%C5%BCa!5e0!3m2!1spl!2spl!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja treningu personalnego — 3 Maja 18A, Chełmża"
              className=""
            />
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </LenisProvider>
  );
}
