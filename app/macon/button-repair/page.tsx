import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, Shield, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "iPhone Button Repair Macon GA | Volume, Power, Home Button | Tech Medics",
  description: "Expert iPhone button repair in Macon. Home, power, volume button replacement. Stuck, broken, or unresponsive buttons. Same-day service. Call (478) 259-6371.",
  keywords: ["iPhone button repair Macon", "home button repair", "volume button stuck", "power button broken Macon"],
};

export default function ButtonRepairPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              iPhone Button Repair Macon GA
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Home, Power & Volume Button Replacement • Same-Day Service
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Button Issues We Fix</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Home Button Not Working</h3>
                    <p className="text-slate-600">Touch ID or physical button not responding (iPhone 6, 7, 8)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Power Button Stuck or Broken</h3>
                    <p className="text-slate-600">Can't turn on/off phone or take screenshots</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Volume Buttons Not Responding</h3>
                    <p className="text-slate-600">Can't adjust volume or use silent/ring switch</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Buttons Require Hard Press</h3>
                    <p className="text-slate-600">Need to press very hard for button to register</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Intermittent Button Response</h3>
                    <p className="text-slate-600">Buttons work sometimes but not others</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Mute Switch Broken</h3>
                    <p className="text-slate-600">Ring/silent switch won't move or doesn't function</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Home Button Repair</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>iPhone 6, 6s, 7, 8 home button</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Touch ID functionality preserved</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Haptic feedback repair</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Power Button Repair</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Sleep/wake button replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>All iPhone models serviced</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Quick turnaround time</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Volume Button Repair</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Volume up/down buttons</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Mute/ring switch repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Same-day service available</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  How long does button repair take?
                </h3>
                <p className="text-slate-700">
                  Most button repairs take 1-2 hours. Home button repairs on older models may take slightly longer to ensure Touch ID continues to work properly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Will Touch ID still work after home button repair?
                </h3>
                <p className="text-slate-700">
                  We make every effort to preserve Touch ID functionality. However, Apple's security pairing means that in some cases, Touch ID may not work after home button replacement. We'll discuss options with you before proceeding.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Can you fix stuck or jammed buttons?
                </h3>
                <p className="text-slate-700">
                  Yes! We can repair or replace stuck buttons, whether they're jammed due to debris, liquid damage, or mechanical failure.
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
              <Link href="/macon/charging-port-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                Charging Port Repair →
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
            Fix Your iPhone Buttons Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Walk-ins welcome at 3742 Eisenhower Parkway. Most repairs done same day.
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
