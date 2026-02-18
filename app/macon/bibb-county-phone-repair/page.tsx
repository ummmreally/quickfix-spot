import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, Shield, MapPin, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Bibb County Phone Repair | Macon GA | Tech Medics",
  description: "Expert phone repair serving Bibb County GA. iPhone, Samsung, Android repair. Serving all Macon neighborhoods. Call (478) 259-6371.",
  keywords: ["Bibb County phone repair", "Macon phone repair", "Bibb County iPhone repair", "Macon cell phone repair"],
};

export default function BibbCountyPhoneRepairPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Bibb County Phone Repair
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Serving All Macon & Bibb County Neighborhoods
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>3742 Eisenhower Parkway</span>
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
              <h2 className="text-2xl font-bold text-slate-900 mb-4">iPhone & iPad Repair</h2>
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
                  <span>iPad screen repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>MacBook repair available</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Android & Other Devices</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Samsung Galaxy repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Google Pixel repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>All major phone brands</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Water damage recovery</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">Serving All Bibb County Neighborhoods</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div>Downtown Macon</div>
              <div>North Macon</div>
              <div>South Macon</div>
              <div>East Macon</div>
              <div>Vineville</div>
              <div>Ingleside</div>
              <div>Rutland</div>
              <div>College Hill</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Services by Neighborhood</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/macon/[neighborhood]" className="text-blue-600 hover:text-blue-800 font-semibold">
                View All Neighborhoods →
              </Link>
              <Link href="/macon/screen-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                Screen Repair →
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
            Bibb County's #1 Phone Repair
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Located right here in Macon. Walk-ins welcome. Same-day service.
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
