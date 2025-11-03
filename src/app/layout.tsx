import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  openGraph: {
    title: "NorthMoving.ca - Trusted GTA Movers | Professional Moving Services",
    description: "Professional moving services in Toronto and GTA. Get a free quote from licensed, insured movers. Residential, commercial, and specialty moving services.",
    url: "https://northmoving.ca",
    siteName: "NorthMoving.ca",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://northmoving.ca/images/slide/moving-truck-team.jpg",
        width: 1200,
        height: 630,
        alt: "NorthMoving.ca Professional Moving Team with Truck in Toronto",
      },
      {
        url: "https://northmoving.ca/images/slide/residential-moving.jpg",
        width: 1200,
        height: 630,
        alt: "Residential Moving Services in Greater Toronto Area",
      },
    ],
    phoneNumbers: ["+1-437-871-9288"],
    emails: ["move@northmoving.ca"],
  },
  twitter: {
    card: "summary_large_image",
    title: "NorthMoving.ca - Trusted GTA Movers | Professional Moving Services",
    description: "Professional moving services in Toronto and GTA. Get a free quote from licensed, insured movers. Residential, commercial, and specialty moving services.",
    images: ["https://northmoving.ca/images/slide/moving-truck-team.jpg"],
    creator: "@northmoving",
    site: "@northmoving",
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
    "image": "https://northmoving.ca/images/slide/moving-truck-team.jpg",
    "telephone": "+1-437-871-9288",
    "email": "move@northmoving.ca",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5 Defries Street",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "postalCode": "M5A 0W7",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.6532",
      "longitude": "-79.3832"
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
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "E-Transfer"],
    "currenciesAccepted": "CAD",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    },
    "sameAs": [
      "https://www.facebook.com/northmoving",
      "https://www.instagram.com/northmoving",
      "https://www.linkedin.com/company/northmoving",
      "https://twitter.com/northmoving"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} antialiased`} style={{minHeight: '100vh'}}>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <Header />
        <main className="min-h-screen" style={{contentVisibility: 'auto'}}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
