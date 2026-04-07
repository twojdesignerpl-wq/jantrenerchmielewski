import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/home/HeroSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { MetamorphosisTeaser } from "@/components/home/MetamorphosisTeaser"
import { CredentialsSection } from "@/components/home/CredentialsSection"
import { PricingOverview } from "@/components/home/PricingOverview"
import { FinalCTA } from "@/components/home/FinalCTA"

export default function HomePage() {
  return (
    <LenisProvider>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <MetamorphosisTeaser />
        <CredentialsSection />
        <PricingOverview />
        <FinalCTA />
      </main>
      <Footer />
    </LenisProvider>
  )
}
