import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, Shield, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "iPhone & iPad Back Glass Repair Macon GA | Cracked Back Replacement | Tech Medics",
  description: "Expert iPhone & iPad back glass repair in Macon. Cracked or shattered back panel replacement. Same-day service. Call (478) 259-6371.",
  keywords: ["iPhone back glass repair Macon", "cracked iPhone back", "iPad back glass replacement", "broken back panel Macon"],
};

export default function BackGlassRepairPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              iPhone & iPad Back Glass Repair Macon GA
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Cracked Back Panel Replacement • Same-Day Service
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
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

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Replace Your Back Glass?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Prevent Further Damage</h3>
                    <p className="text-slate-600">Cracks can spread and expose internal components to dust and moisture</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Restore Wireless Charging</h3>
                    <p className="text-slate-600">Damaged back glass can interfere with wireless charging functionality</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Improve Resale Value</h3>
                    <p className="text-slate-600">A phone with a cracked back is worth significantly less at trade-in</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Avoid Cuts & Injuries</h3>
                    <p className="text-slate-600">Sharp glass edges can cut your hands or damage pockets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">iPhone Back Glass Repair</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>iPhone 8, 8 Plus, X, XS, XR, 11, 12, 13, 14, 15, 16</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>All color options available</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Wireless charging fully functional after repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Camera lens protection included</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">iPad Back Cover Repair</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>iPad Pro, Air, and standard models</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Dented or bent housing repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Same-day service available</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>All sensors and features preserved</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-4">Back Glass Repair vs. Apple Store</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">50% Less</div>
                <p className="text-blue-100">Our prices vs. Apple Store for most models</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Same Day</div>
                <p className="text-blue-100">No appointment needed. Walk-ins welcome.</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Lifetime</div>
                <p className="text-blue-100">Warranty on all parts and labor</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Is back glass repair worth it?
                </h3>
                <p className="text-slate-700">
                  Yes! Repairing your back glass prevents further damage, maintains your phone's water resistance, and preserves resale value. It's much more affordable than buying a new phone.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  How long does back glass repair take?
                </h3>
                <p className="text-slate-700">
                  Most iPhone back glass repairs take 2-4 hours. We'll give you an accurate time estimate when you drop off your device.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Will my wireless charging still work?
                </h3>
                <p className="text-slate-700">
                  Yes! We ensure all wireless charging and NFC features work perfectly after back glass replacement.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/macon/screen-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                Screen Repair →
              </Link>
              <Link href="/macon/camera-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                Camera Repair →
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
            Fix Your Cracked Back Glass Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Walk-ins welcome at 3742 Eisenhower Parkway. Same-day service available.
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
