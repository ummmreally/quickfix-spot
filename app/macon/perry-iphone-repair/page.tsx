import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, Shield, MapPin, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "iPhone Repair Perry GA | Near Georgia National Fairgrounds | Tech Medics",
  description: "Expert iPhone repair near Perry GA. Affordable screen & battery service. 25-min drive via I-75. Call (478) 259-6371.",
  keywords: ["iPhone repair Perry GA", "phone repair Perry Georgia", "iPhone screen Perry", "cell phone repair Houston County"],
};

export default function PerryIPhoneRepairPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              iPhone Repair Near Perry GA
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Serving Perry & Southern Houston County
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>25 Minutes via I-75</span>
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
                  <span>Affordable screen replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>All iPhone models 8 through 16</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Same-day service available</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Other iPhone Services</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Fast battery replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Charging port & camera repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Water damage recovery</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Directions from Perry</h2>
            <p className="text-lg text-slate-700 mb-4">
              Tech Medics is at <strong>3742 Eisenhower Parkway, Macon</strong> — just 25 minutes north via I-75.
            </p>
            <a
              href="https://www.google.com/maps/dir/Perry,+GA/3742+Eisenhower+Parkway,+Macon,+GA+31206"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Get Directions →
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/macon/houston-county-phone-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                Houston County Phone Repair →
              </Link>
              <Link href="/macon/byron-iphone-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                Byron iPhone Repair →
              </Link>
              <Link href="/macon/warner-robins-iphone-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                Warner Robins iPhone Repair →
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
            Drive up from Perry today. Fast, affordable repair.
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
