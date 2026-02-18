import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, Shield, MapPin, CheckCircle2, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Houston County Phone Repair | Warner Robins, Centerville, Perry | Tech Medics",
  description: "Expert phone repair serving Houston County GA. iPhone, Samsung, Google Pixel repair. Serving Warner Robins, Centerville, Perry. Call (478) 259-6371.",
  keywords: ["Houston County phone repair", "Warner Robins cell phone repair", "Centerville phone repair", "Perry phone repair GA", "Bonaire phone repair"],
};

export default function HoustonCountyPhoneRepairPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Tech Medics - Houston County Phone Repair",
            "image": "https://techmedics-macon.com/og-image.webp",
            "telephone": "(478) 259-6371",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3742 Eisenhower Parkway",
              "addressLocality": "Macon",
              "addressRegion": "GA",
              "postalCode": "31206",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "County",
              "name": "Houston County, Georgia"
            },
            "priceRange": "$$"
          })
        }}
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Houston County Phone Repair
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Serving Warner Robins, Centerville, Perry, Bonaire & All of Houston County
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>20-25 Minutes via I-75</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>Lifetime Warranty</span>
              </div>
            </div>
            <a
              href="tel:4782596371"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (478) 259-6371
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <Smartphone className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">iPhone Repair</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Affordable iPhone screen repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Fast battery replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>All models 8 through 16</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <Smartphone className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Samsung Repair</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Galaxy S & Note series</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Screen & battery service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Charging port repair</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <Smartphone className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Other Devices</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Google Pixel repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>iPad & tablet repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>MacBook repair</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">Serving All Houston County Communities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h3 className="font-bold text-xl mb-2">Warner Robins</h3>
                <p className="text-blue-100">20 min via I-75 North</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Centerville</h3>
                <p className="text-blue-100">22 min via I-75 North</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Perry</h3>
                <p className="text-blue-100">25 min via I-75 South</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Bonaire</h3>
                <p className="text-blue-100">20 min via I-75 North</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Do you serve all of Houston County?
                </h3>
                <p className="text-slate-700">
                  Yes! We proudly serve Warner Robins, Centerville, Perry, Bonaire, and all Houston County communities. We're just 20-25 minutes from anywhere in the county via I-75.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  How much does phone repair cost in Houston County?
                </h3>
                <p className="text-slate-700">
                  We offer competitive pricing for iPhone, Samsung, and Android repairs. Call (478) 259-6371 for a free quote.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Do you offer same-day repair for Houston County residents?
                </h3>
                <p className="text-slate-700">
                  Yes! Most phone screen repairs are completed in 30 minutes while you wait. No appointment needed—just drive up from anywhere in Houston County.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Houston County Services by City</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/macon/warner-robins-iphone-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                Warner Robins iPhone Repair →
              </Link>
              <Link href="/macon/warner-robins-ipad-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                Warner Robins iPad Repair →
              </Link>
              <Link href="/macon/warner-robins-macbook-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                Warner Robins MacBook Repair →
              </Link>
              <Link href="/macon/perry-iphone-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                Perry iPhone Repair →
              </Link>
              <Link href="/macon/screen-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                All Screen Repair →
              </Link>
              <Link href="/macon/battery-replacement" className="text-blue-600 hover:text-blue-800 font-semibold">
                Battery Replacement →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Houston County's Trusted Phone Repair
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Serving Warner Robins, Centerville, Perry & beyond. Fast, affordable, guaranteed.
          </p>
          <a
            href="tel:4782596371"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call (478) 259-6371
          </a>
        </div>
      </section>
    </main>
  );
}
