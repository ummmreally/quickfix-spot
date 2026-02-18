import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, Shield, MapPin, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Monroe County Phone Repair | Forsyth, Juliette GA | Tech Medics",
  description: "Expert phone repair serving Monroe County GA. iPhone, Samsung, Android repair. Serving Forsyth, Juliette. Call (478) 259-6371.",
  keywords: ["Monroe County phone repair", "Forsyth phone repair", "Juliette phone repair", "Monroe County iPhone repair"],
};

export default function MonroeCountyPhoneRepairPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Monroe County Phone Repair
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Serving Forsyth, Juliette & All of Monroe County
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>25 Minutes via I-75</span>
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
                  <span>All phone repairs</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Directions from Monroe County</h2>
            <p className="text-lg text-slate-700 mb-4">
              Tech Medics is at <strong>3742 Eisenhower Parkway, Macon</strong> — just 25 minutes from Forsyth via I-75 South.
            </p>
            <a
              href="https://www.google.com/maps/dir/Forsyth,+GA/3742+Eisenhower+Parkway,+Macon,+GA+31206"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Get Directions from Forsyth →
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/macon/forsyth-iphone-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                Forsyth iPhone Repair →
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
            Monroe County's Trusted Phone Repair
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Serving Forsyth, Juliette & all of Monroe County. Fast, affordable, guaranteed.
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
