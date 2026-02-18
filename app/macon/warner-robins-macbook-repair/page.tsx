import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, Shield, MapPin, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "MacBook Repair Warner Robins GA | Screen, Battery, Keyboard | Tech Medics",
  description: "Expert MacBook repair near Warner Robins & Robins AFB. Screen, battery, keyboard, trackpad. Same-day service. Call (478) 259-6371. Just 20 min via I-75.",
  keywords: ["MacBook repair Warner Robins", "MacBook screen repair Robins AFB", "MacBook battery Warner Robins", "laptop repair Houston County"],
  openGraph: {
    title: "MacBook Repair Warner Robins GA | Tech Medics Macon",
    description: "Fast MacBook repair near Warner Robins & Robins AFB. Screen, battery, keyboard repair. Call (478) 259-6371.",
    type: "website",
  },
};

export default function WarnerRobinsMacBookRepairPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Tech Medics - MacBook Repair Warner Robins GA",
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
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "32.8407",
              "longitude": "-83.6324"
            },
            "areaServed": ["Warner Robins", "Robins AFB", "Houston County", "Centerville", "Bonaire"],
            "priceRange": "$$"
          })
        }}
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              MacBook Repair Near Warner Robins GA
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Serving Warner Robins, Robins AFB & Houston County
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>20 Minutes via I-75</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>Expert Service</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>Certified Technicians</span>
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

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">MacBook Screen Repair</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Cracked LCD replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Retina display repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Display cable issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>All MacBook models: Air & Pro</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Other MacBook Services</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Battery replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Keyboard repair & replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Trackpad replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Logic board repair & data recovery</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Directions from Warner Robins</h2>
            <div className="prose max-w-none text-slate-700">
              <p className="text-lg mb-4">
                Tech Medics is located at <strong>3742 Eisenhower Parkway, Macon, GA</strong> — just 20 minutes from Warner Robins via I-75 North.
              </p>
              <a
                href="https://www.google.com/maps/dir/Warner+Robins,+GA/3742+Eisenhower+Parkway,+Macon,+GA+31206"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold"
              >
                Get Directions →
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/macon/warner-robins-iphone-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                iPhone Repair Warner Robins →
              </Link>
              <Link href="/macon/warner-robins-ipad-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                iPad Repair Warner Robins →
              </Link>
              <Link href="/macon/houston-county-phone-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                Houston County Repair →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Fix Your MacBook?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Drive up from Warner Robins today. Expert service guaranteed.
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
