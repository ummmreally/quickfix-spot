import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://techmedicsmacon.com"),
  title: {
    default: "iPhone Screen Repair Macon GA | iPad & MacBook Repair | Tech Medics",
    template: "%s | Tech Medics Macon",
  },
  description:
    "Expert iPhone screen repair, iPad repair & MacBook repair in Macon GA. Fast 30-minute service. Battery replacements, charging port fixes. Walk-ins welcome at 3742 Eisenhower Pkwy. Call (478) 259-6371",
  keywords: [
    "iPhone screen repair Macon GA",
    "iPad repair Macon",
    "MacBook repair Macon GA",
    "iPhone battery replacement Macon",
    "screen repair Macon Georgia",
    "Apple repair Macon",
    "phone repair near me Macon",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techmedicsmacon.com",
    siteName: "Tech Medics Macon",
    title: "iPhone Screen Repair Macon GA | Same Day iPad & MacBook Repair",
    description:
      "Macon's #1 iPhone screen repair experts. Fast iPad & MacBook repairs. 30-minute service, walk-ins welcome. 3742 Eisenhower Parkway.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Tech Medics Macon - iPhone iPad MacBook Repair" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "iPhone Screen Repair Macon GA | Tech Medics",
    description: "Expert iPhone, iPad & MacBook repair in Macon GA. Same-day service.",
    images: ["/og-image.webp"],
  },
  alternates: {
    canonical: "https://techmedicsmacon.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: {},
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MobilePhoneRepairShop"],
  "@id": "https://techmedicsmacon.com/#business",
  name: "Tech Medics Macon",
  description:
    "Expert iPhone, iPad, and MacBook repair in Macon GA. We specialize in screen replacement, battery repair, charging port fixes, and water damage recovery. Same-day service available.",
  image: "https://techmedicsmacon.com/og-image.webp",
  url: "https://techmedicsmacon.com",
  telephone: "+14782596371",
  priceRange: "$$",
  paymentAccepted: ["Cash", "Credit Card", "Debit Card"],
  currenciesAccepted: "USD",
  hasMap: "https://www.google.com/maps/place/3742+Eisenhower+Pkwy,+Macon,+GA+31206",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3742 Eisenhower Pkwy",
    addressLocality: "Macon",
    addressRegion: "GA",
    postalCode: "31206",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 32.816, longitude: -83.708 },
  areaServed: [
    { "@type": "City", name: "Macon", sameAs: "https://en.wikipedia.org/wiki/Macon,_Georgia" },
    { "@type": "City", name: "Warner Robins" },
    { "@type": "City", name: "Byron" },
    { "@type": "City", name: "Forsyth" },
    { "@type": "City", name: "Perry" },
    { "@type": "AdministrativeArea", name: "Bibb County" },
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "17:00" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "60", bestRating: "5" },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jessica M." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Cracked my iPhone screen and they fixed it in 20 minutes! Best iPhone repair service in Macon.",
      datePublished: "2025-11-22",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Thomas R." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "My iPad Pro screen was shattered. They replaced it same day and it looks brand new. Highly recommend for iPad repair in Macon!",
      datePublished: "2025-11-19",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Karen W." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "MacBook Air keyboard wasn't working right. They diagnosed and fixed it quickly. Great MacBook repair shop.",
      datePublished: "2025-11-16",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Brandon C." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "My iPhone battery was draining so fast. They replaced it while I waited and now it lasts all day.",
      datePublished: "2025-11-11",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Michelle D." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Dropped my iPad in water and thought it was done for. They recovered it and saved all my data!",
      datePublished: "2025-11-07",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Apple Device Repair Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "iPhone Repair",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Screen Repair", description: "Same-day cracked iPhone screen replacement for all models" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "79", priceCurrency: "USD", unitText: "starting at" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Battery Replacement", description: "iPhone battery replacement with high-quality cells" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "59", priceCurrency: "USD", unitText: "starting at" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Charging Port Repair", description: "Fix iPhone not charging issues" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "69", priceCurrency: "USD", unitText: "starting at" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Water Damage Repair", description: "Emergency water damage recovery for iPhones" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "iPad Repair",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPad Screen Replacement", description: "iPad screen and glass replacement for all models" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "99", priceCurrency: "USD", unitText: "starting at" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPad Battery Replacement", description: "iPad battery service for all models" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPad Charging Port Repair", description: "Fix iPad charging issues" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "MacBook Repair",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Screen Replacement", description: "MacBook Air and Pro screen replacement" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "299", priceCurrency: "USD", unitText: "starting at" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Battery Replacement", description: "MacBook battery replacement service" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Keyboard Repair", description: "MacBook keyboard repair and replacement" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Logic Board Repair", description: "MacBook logic board diagnostics and repair" } },
        ],
      },
    ],
  },
  sameAs: [
    "https://www.facebook.com/TechMedicsMacon",
    "https://www.google.com/maps/place/3742+Eisenhower+Pkwy,+Macon,+GA+31206",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="min-h-screen bg-background antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
