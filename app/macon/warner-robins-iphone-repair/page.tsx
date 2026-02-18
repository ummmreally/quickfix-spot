import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, Shield, MapPin, Star, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "iPhone Repair Warner Robins GA | Near Robins AFB | Tech Medics",
  description: "Expert iPhone repair near Warner Robins & Robins AFB. Fast, affordable service. 30-min repairs. Call (478) 259-6371. Just 20 min via I-75.",
  keywords: ["iPhone repair Warner Robins", "iPhone screen repair Robins AFB", "iPhone battery Warner Robins", "phone repair Houston County"],
  openGraph: {
    title: "iPhone Repair Warner Robins GA | Tech Medics Macon",
    description: "Fast iPhone repair near Warner Robins & Robins AFB. Screen, battery, charging port. 30-min service. Call (478) 259-6371.",
    type: "website",
  },
};

export default function WarnerRobinsIPhoneRepairPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Tech Medics - iPhone Repair Warner Robins GA",
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
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "847"
            }
          })
        }}
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              iPhone Repair Near Warner Robins GA
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
                <span>30-Minute Repairs</span>
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

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">iPhone Screen Repair</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Cracked screen replacement - from <strong>$79</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>LCD & OLED display repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Touch screen not responding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Dead pixels & display lines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>All iPhone models: 8, X, 11, 12, 13, 14, 15, 16</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Other iPhone Services</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Affordable battery replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Charging port repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Camera replacement (front & rear)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Back glass repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Water damage repair & data recovery</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Warner Robins Chooses Tech Medics</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">20 min</div>
                <p className="text-blue-100">Quick drive from Warner Robins via I-75 North</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">30 min</div>
                <p className="text-blue-100">Most iPhone repairs completed while you wait</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9★</div>
                <p className="text-blue-100">Average rating from 847+ happy customers</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Directions from Warner Robins</h2>
            <div className="prose max-w-none text-slate-700">
              <p className="text-lg mb-4">
                <strong>From Warner Robins to Tech Medics Macon:</strong>
              </p>
              <ol className="space-y-2 text-lg">
                <li>Take I-75 North from Warner Robins</li>
                <li>Take Exit 167 for Eisenhower Parkway</li>
                <li>Turn right onto Eisenhower Parkway</li>
                <li>Tech Medics is at 3742 Eisenhower Parkway on your right</li>
              </ol>
              <p className="mt-4 text-lg">
                <strong>Total drive time: Approximately 20 minutes</strong>
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

          <div className="bg-slate-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  How far is Tech Medics from Warner Robins?
                </h3>
                <p className="text-slate-700">
                  Tech Medics is located at 3742 Eisenhower Parkway in Macon, just a 20-minute drive from Warner Robins via I-75 North. We're easily accessible from Robins AFB, Centerville, and all of Houston County.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Do you offer same-day iPhone repair for Warner Robins residents?
                </h3>
                <p className="text-slate-700">
                  Yes! Most iPhone screen repairs are completed in just 30 minutes while you wait. No appointment needed—just drive up from Warner Robins and we'll get you fixed fast.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  How much does iPhone screen repair cost near Warner Robins?
                </h3>
                <p className="text-slate-700">
                  We offer competitive pricing for all iPhone models. Call (478) 259-6371 for a free quote on your specific repair.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Do you serve Robins Air Force Base personnel?
                </h3>
                <p className="text-slate-700">
                  Absolutely! We proudly serve Robins AFB military personnel and their families. We offer quality iPhone repair at affordable prices with fast turnaround times.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Serving Warner Robins & Surrounding Areas</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/macon/warner-robins-ipad-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                iPad Repair Warner Robins →
              </Link>
              <Link href="/macon/warner-robins-macbook-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                MacBook Repair Warner Robins →
              </Link>
              <Link href="/macon/houston-county-phone-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                Houston County Phone Repair →
              </Link>
              <Link href="/macon/screen-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                All Screen Repair Services →
              </Link>
              <Link href="/macon/battery-replacement" className="text-blue-600 hover:text-blue-800 font-semibold">
                Battery Replacement →
              </Link>
              <Link href="/macon/water-damage" className="text-blue-600 hover:text-blue-800 font-semibold">
                Water Damage Repair →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Fix Your iPhone?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Drive up from Warner Robins today. Most repairs done in 30 minutes.
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
