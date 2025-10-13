import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "NorthMoving.ca - Trusted GTA Movers | Professional Moving Services Toronto",
    template: "%s | NorthMoving.ca"
  },
  description: "Professional moving services in Toronto and GTA. Get a free quote from licensed, insured movers. Residential, commercial, and specialty moving services. Stress-free moving experience guaranteed.",
  keywords: "movers Toronto, moving companies GTA, professional movers, residential moving, commercial moving, Toronto moving services, GTA movers, licensed movers",
  authors: [{ name: "NorthMoving.ca" }],
  creator: "NorthMoving.ca",
  publisher: "NorthMoving.ca",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://northmoving.ca"),
  alternates: {
    canonical: "https://northmoving.ca",
  },
  openGraph: {
    title: "NorthMoving.ca - Trusted GTA Movers | Professional Moving Services",
    description: "Professional moving services in Toronto and GTA. Get a free quote from licensed, insured movers.",
    url: "https://northmoving.ca",
    siteName: "NorthMoving.ca",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NorthMoving.ca - Trusted GTA Movers",
    description: "Professional moving services in Toronto and GTA. Get a free quote from licensed, insured movers.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "NorthMoving.ca",
    "description": "Professional moving services in Toronto and Greater Toronto Area. Licensed, insured, and experienced movers.",
    "url": "https://northmoving.ca",
    "logo": "https://northmoving.ca/logo.png",
          "telephone": "+1-437-871-2382",
    "email": "info@northmoving.ca",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Toronto"
      },
      {
        "@type": "City", 
        "name": "Mississauga"
      },
      {
        "@type": "City",
        "name": "Brampton"
      },
      {
        "@type": "City",
        "name": "Markham"
      },
      {
        "@type": "City",
        "name": "Vaughan"
      },
      {
        "@type": "City",
        "name": "Richmond Hill"
      }
    ],
    "serviceType": [
      "Residential Moving",
      "Commercial Moving", 
      "Packing Services",
      "Specialty Moving",
      "Furniture Transportation",
      "Manpower Services"
    ],
    "hasCredential": "Licensed and Insured",
    "openingHours": "Mo-Su 08:00-20:00",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
