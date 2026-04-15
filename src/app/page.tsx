import type { Metadata } from "next";
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/home/HeroSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { MetamorphosisTeaser } from "@/components/home/MetamorphosisTeaser"
import { CredentialsSection } from "@/components/home/CredentialsSection"
import { TestimonialCarousel } from "@/components/shared/TestimonialCarousel"
import { PricingOverview } from "@/components/home/PricingOverview"
import { FinalCTA } from "@/components/home/FinalCTA"

export const metadata: Metadata = {
  title: "Jan Chmielewski — Trener Personalny | Diety i Plany Treningowe Online",
  description:
    "Profesjonalny trener personalny — indywidualne diety online od 199 zł, rozpiski treningowe i prowadzenie online. Magister Fizjoterapii, Finalista Mistrzostw Polski w kulturystyce. 200+ klientów. Chełmża, Toruń i cała Polska.",
  alternates: {
    canonical: "https://jantrenerchmielewski.pl",
  },
};

export default function HomePage() {
  return (
    <LenisProvider>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <MetamorphosisTeaser />
        <CredentialsSection />
        <div className="py-24 sm:py-32">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <TestimonialCarousel />
          </div>
        </div>
        <PricingOverview />
        <FinalCTA />
      </main>
      <Footer />
    </LenisProvider>
  )
}
