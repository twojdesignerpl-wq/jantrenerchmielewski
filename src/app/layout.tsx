import type { Metadata } from "next";
import { Syne, Outfit, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { WebGLBackgroundLoader } from "@/components/background/WebGLBackgroundLoader";
import "./globals.css";

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jan Chmielewski — Trener Personalny | Dietetyk Online",
    template: "%s | Jan Chmielewski — Trener Personalny",
  },
  description:
    "Profesjonalny trener personalny i dietetyk online. Magister Fizjoterapii, Finalista Mistrzostw Polski w kulturystyce. Indywidualne diety, plany treningowe, prowadzenie online. 8 lat doświadczenia, 200+ zadowolonych klientów. Chełmża, Toruń i cała Polska.",
  keywords: [
    "trener personalny",
    "dietetyk online",
    "plan treningowy",
    "dieta online",
    "prowadzenie online",
    "trener personalny Chełmża",
    "trener personalny Toruń",
    "dietetyk Toruń",
    "kulturystyka",
    "fizjoterapia",
    "Jan Chmielewski",
  ],
  authors: [{ name: "Jan Chmielewski" }],
  creator: "Jan Chmielewski",
  metadataBase: new URL("https://jantrenerchmielewski.pl"),
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://jantrenerchmielewski.pl",
    siteName: "Jan Chmielewski — Trener Personalny",
    title: "Jan Chmielewski — Trener Personalny | Dietetyk Online",
    description:
      "Magister Fizjoterapii, Finalista Mistrzostw Polski. Indywidualne diety, plany treningowe i prowadzenie online. 200+ zadowolonych klientów.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Jan Chmielewski — Trener Personalny",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jan Chmielewski — Trener Personalny | Dietetyk Online",
    description:
      "Magister Fizjoterapii, Finalista Mistrzostw Polski. Indywidualne diety, plany treningowe i prowadzenie online.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://jantrenerchmielewski.pl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${syne.variable} ${outfit.variable} ${geistMono.variable} dark bg-background`}
      suppressHydrationWarning
    >
      <body className="min-h-[100dvh] text-foreground antialiased" suppressHydrationWarning>
        {/* WebGL animated background — fixed behind all content */}
        <WebGLBackgroundLoader />

        <TooltipProvider>
          <div className="relative z-10">
            {children}
          </div>
        </TooltipProvider>

        {/* Grain texture overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-50 bg-grain opacity-[0.03]"
          aria-hidden="true"
        />

        <CustomCursor />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
