import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, Shield, Camera, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "iPhone & iPad Camera Repair Macon GA | Front & Rear Camera | Tech Medics",
  description: "Expert iPhone & iPad camera repair in Macon. Front & rear camera replacement. Blurry photos, black screen, focus issues. Same-day service. Call (478) 259-6371.",
  keywords: ["iPhone camera repair Macon", "iPad camera replacement", "phone camera fix Macon", "blurry camera repair"],
};

export default function CameraRepairPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Camera className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              iPhone & iPad Camera Repair Macon GA
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Front & Rear Camera Replacement • Same-Day Service
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Camera Issues We Fix</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Blurry or Out-of-Focus Photos</h3>
                    <p className="text-slate-600">Camera won't focus or produces blurry images</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Black Screen or No Image</h3>
                    <p className="text-slate-600">Camera app shows black screen or won't open</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Cracked Camera Lens</h3>
                    <p className="text-slate-600">Glass cover over camera is cracked or shattered</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Flash Not Working</h3>
                    <p className="text-slate-600">Camera flash won't turn on or is dim</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Spots or Lines in Photos</h3>
                    <p className="text-slate-600">Strange artifacts appearing in camera view</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Selfie Camera Issues</h3>
                    <p className="text-slate-600">Front-facing camera not working properly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">iPhone Camera Repair</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Rear camera replacement (main, wide, telephoto)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Front camera (FaceTime) replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Camera lens glass replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>All models: iPhone 8 through iPhone 16</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">iPad Camera Repair</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Rear camera replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Front camera replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>All iPad models: Air, Pro, Mini</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Same-day service available</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Tech Medics for Camera Repair?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">Original Quality Parts</h3>
                <p className="text-slate-700">We use high-quality camera modules that match or exceed original specifications</p>
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">Expert Technicians</h3>
                <p className="text-slate-700">Our certified techs have repaired thousands of iPhone and iPad cameras</p>
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">Lifetime Warranty</h3>
                <p className="text-slate-700">All camera repairs backed by our lifetime parts and labor warranty</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  How long does camera repair take?
                </h3>
                <p className="text-slate-700">
                  Most iPhone and iPad camera repairs are completed the same day, often within 1-2 hours depending on the model and issue.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Will camera repair affect Face ID or other features?
                </h3>
                <p className="text-slate-700">
                  No. We carefully preserve all existing components. Face ID, True Tone, and all other features will continue to work normally after camera replacement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  How much does iPhone camera repair cost?
                </h3>
                <p className="text-slate-700">
                  Camera repair prices vary by model. Call (478) 259-6371 for an exact quote for your specific iPhone or iPad model.
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
              <Link href="/macon/back-glass-repair" className="text-blue-600 hover:text-blue-800 font-semibold">
                Back Glass Repair →
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
            Get Your Camera Fixed Today
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
