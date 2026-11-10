import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://techmedicsmacon.com"),
  title: {
    default: "iPhone, iPad & MacBook Repair Macon GA | Tech Medics | (478) 259-6371",
    template: "%s | Tech Medics Macon",
  },
  description:
    "Macon GA's top-rated Apple repair shop in 2026. iPhone 16e, iPad Pro M4, MacBook Air M4 – every model serviced. 30-minute screen repair, battery swap, charging port fix. Walk-ins welcome at 3742 Eisenhower Pkwy. Call (478) 259-6371",
  keywords: [
    "iPhone repair near me",
    "iPhone screen repair Macon GA",
    "iPad repair Macon",
    "MacBook repair Macon GA",
    "iPhone battery replacement Macon",
    "screen repair Macon Georgia",
    "Apple repair Macon",
    "phone repair near me Macon",
    "cell phone repair Macon GA",
    "phone repair Macon GA",
    "iPhone 16e repair Macon",
    "MacBook Air M4 repair Macon GA",
    "genuine Apple parts repair Macon",
    "game console repair Macon GA",
    "PS5 repair Macon GA",
    "Xbox repair Macon GA",
    "PlayStation 5 repair Macon",
    "Xbox Series X repair Macon",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techmedicsmacon.com",
    siteName: "Tech Medics Macon",
    title: "iPhone, iPad & MacBook Repair Macon GA | Tech Medics",
    description:
      "Macon's highest-rated Apple repair shop. iPhone 16e to MacBook M4 – every model, every fix. 30-minute service, walk-ins welcome.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Tech Medics Macon - iPhone iPad MacBook Repair" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "iPhone Screen Repair Macon GA | Tech Medics",
    description: "Expert iPhone, iPad & MacBook repair in Macon GA. Same-day service.",
    images: ["/og-image.webp"],
  },
  alternates: {
    canonical: "https://techmedicsmacon.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  // Paste site verification codes here if not verified via DNS:
  // verification: {
  //   google: "GOOGLE_SEARCH_CONSOLE_CODE",           // from search.google.com/search-console
  //   other: { "msvalidate.01": "BING_WEBMASTER_CODE" }, // from bing.com/webmasters
  // },
  verification: {},
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://techmedicsmacon.com/#website",
  name: "Tech Medics Macon",
  url: "https://techmedicsmacon.com",
  description: "Expert iPhone, iPad, and MacBook repair in Macon GA. Same-day service, walk-ins welcome.",
  publisher: { "@id": "https://techmedicsmacon.com/#business" },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://techmedicsmacon.com/?s={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: [
    "iPhone Repair Macon GA",
    "iPad Repair Macon GA",
    "MacBook Repair Macon GA",
    "iMac Repair Macon GA",
    "Blog",
    "Contact",
  ],
  url: [
    "https://techmedicsmacon.com/macon/iphone/",
    "https://techmedicsmacon.com/macon/ipad/",
    "https://techmedicsmacon.com/macon/macbook/",
    "https://techmedicsmacon.com/macon/imac/",
    "https://techmedicsmacon.com/blog/",
    "https://techmedicsmacon.com/macon/contact/",
  ],
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
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "100", bestRating: "5" },
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
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Tyler R." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "PS5 had no video output — HDMI port was damaged. Tech Medics micro-soldered a new one and it works perfectly at 4K. Way cheaper than buying a new PS5!",
      datePublished: "2026-03-10",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jason W." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Xbox Series X HDMI port was bent and had no signal. They replaced it and it's back to 4K gaming. Great Xbox repair shop in Macon!",
      datePublished: "2026-04-05",
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
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Screen Repair", description: "Same-day cracked iPhone screen replacement for all models" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Battery Replacement", description: "iPhone battery replacement with high-quality cells" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Charging Port Repair", description: "Fix iPhone not charging issues" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Water Damage Repair", description: "Emergency water damage recovery for iPhones" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "iPad Repair",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPad Screen Replacement", description: "iPad screen and glass replacement for all models" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPad Battery Replacement", description: "iPad battery service for all models" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPad Charging Port Repair", description: "Fix iPad charging issues" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "MacBook Repair",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Screen Replacement", description: "MacBook Air and Pro screen replacement" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Battery Replacement", description: "MacBook battery replacement service" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Keyboard Repair", description: "MacBook keyboard repair and replacement" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Logic Board Repair", description: "MacBook logic board diagnostics and repair" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "iMac Repair",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "iMac Screen Replacement", description: "iMac display replacement for 21.5, 24, and 27 inch models" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "iMac SSD Upgrade", description: "SSD upgrades to speed up slow iMacs" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "iMac Logic Board Repair", description: "iMac logic board and power supply diagnostics and repair" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Game Console Repair",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "PS5 Repair", description: "PlayStation 5 HDMI port repair, disc drive replacement, overheating fix, and DualSense controller repair in Macon GA" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Xbox Repair", description: "Xbox Series X and Xbox One HDMI port repair, disc drive fix, overheating repair, and controller stick drift repair in Macon GA" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nintendo Switch Repair", description: "Nintendo Switch Joy-Con drift repair, screen replacement, and charging port repair in Macon GA" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Console HDMI Port Repair", description: "Precision micro-soldering HDMI port repair for PS5, Xbox, and PS4 consoles" } },
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
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://scripts.clarity.ms" />
      </head>
      <body className="min-h-screen bg-background antialiased">
        {/* GTM: loads on first interaction (pointerdown fires before click) with 3s fallback */}
        <Script
          id="gtm-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var loaded=false;
                function loadGTM(){
                  if(loaded)return;loaded=true;
                  window.dataLayer=window.dataLayer||[];
                  window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                  var f=document.getElementsByTagName('script')[0],
                  j=document.createElement('script');j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id=GTM-TJ82LBSH';
                  f.parentNode.insertBefore(j,f);
                }
                ['pointerdown','touchstart','scroll','keydown'].forEach(function(e){
                  window.addEventListener(e,loadGTM,{once:true,passive:true});
                });
                setTimeout(loadGTM,3000);
              })();
            `,
          }}
        />
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TJ82LBSH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Google Ads gtag.js - direct load for reliable conversion tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11028235321"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11028235321');
            `,
          }}
        />
        {/* Click-to-call conversion: fires on pointerdown for reliability (before navigation) */}
        <Script
          id="click-to-call-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('pointerdown', function(e) {
                var link = e.target.closest('a[href^="tel:"]');
                if (link && typeof gtag === 'function') {
                  gtag('event', 'conversion', {
                    send_to: 'AW-11028235321/UYk9CMmqhoocELmI1oop',
                    transport_type: 'beacon'
                  });
                }
              });
            `,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
