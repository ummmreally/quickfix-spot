import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, Shield, CheckCircle2, Keyboard } from "lucide-react";

export const metadata: Metadata = {
  title: "MacBook Keyboard & Trackpad Repair Macon GA | Tech Medics",
  description: "Expert MacBook keyboard and trackpad repair in Macon. Sticky keys, broken trackpad, liquid spills. All MacBook models. Same-day service. Call (478) 259-6371.",
  keywords: ["MacBook keyboard repair Macon", "MacBook trackpad repair", "sticky keys MacBook", "laptop keyboard replacement Macon"],
};

export default function MacBookKeyboardRepairPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Keyboard className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              MacBook Keyboard & Trackpad Repair Macon GA
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Expert Repair for All MacBook Models • Same-Day Service
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>Same-Day Service</span>
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

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Keyboard & Trackpad Issues</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-bold text-xl text-slate-900 mb-3">Keyboard Issues</h3>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Sticky or Unresponsive Keys</h4>
                    <p className="text-slate-600">Keys sticking, repeating, or not registering</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Liquid Damage</h4>
                    <p className="text-slate-600">Coffee, water, or other spills on keyboard</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Broken or Missing Keys</h4>
                    <p className="text-slate-600">Individual keys damaged or fallen off</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Butterfly Keyboard Issues</h4>
                    <p className="text-slate-600">2015-2019 MacBook keyboard problems</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-xl text-slate-900 mb-3">Trackpad Issues</h3>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Trackpad Not Clicking</h4>
                    <p className="text-slate-600">Physical click not working properly</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Cursor Jumping or Erratic</h4>
                    <p className="text-slate-600">Trackpad causing cursor to jump around</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Trackpad Not Responding</h4>
                    <p className="text-slate-600">Touch or gestures not working</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Swollen Trackpad</h4>
                    <p className="text-slate-600">Trackpad raised due to battery swelling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">MacBook Keyboard Repair</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Complete keyboard replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Individual key repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Butterfly keyboard replacement (2015-2019)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Magic Keyboard (2020+) service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Liquid damage keyboard cleaning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">MacBook Trackpad Repair</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Force Touch trackpad replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Trackpad click mechanism repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Trackpad cable replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>All MacBook Air & Pro models</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Haptic feedback restoration</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">We Service All MacBook Models</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h3 className="font-bold text-xl mb-2">MacBook Air</h3>
                <p className="text-blue-100">2010 - 2024 models (Intel & M1/M2/M3)</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">MacBook Pro 13"</h3>
                <p className="text-blue-100">2012 - 2024 models (Intel & Apple Silicon)</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">MacBook Pro 15"/16"</h3>
                <p className="text-blue-100">2012 - 2024 models</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">MacBook (12")</h3>
                <p className="text-blue-100">2015 - 2019 Retina models</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  How much does MacBook keyboard repair cost?
                </h3>
                <p className="text-slate-700">
                  Costs vary by model and extent of damage. Call (478) 259-6371 for a free quote on your specific MacBook model.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Can you fix MacBook butterfly keyboard issues?
                </h3>
                <p className="text-slate-700">
                  Yes! We specialize in repairing the notorious butterfly keyboards (2015-2019 models). We can replace the entire keyboard assembly with improved components.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  How long does keyboard/trackpad repair take?
                </h3>
                <p className="text-slate-700">
                  Most repairs are completed same-day, typically within 2-4 hours. Complex repairs or liquid damage may take 1-2 days for thorough cleaning and testing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  What if my MacBook had a liquid spill?
                </h3>
                <p className="text-slate-700">
                  Bring it in immediately! We offer liquid damage cleaning and repair services. The sooner we can clean the keyboard and internal components, the better the chance of full recovery.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/macon/macbook" className="text-blue-600 hover:text-blue-800 font-semibold">
                All MacBook Repairs →
              </Link>
              <Link href="/macon/battery-replacement" className="text-blue-600 hover:text-blue-800 font-semibold">
                MacBook Battery Replacement →
              </Link>
              <Link href="/macon/water-damage" className="text-blue-600 hover:text-blue-800 font-semibold">
                Liquid Damage Repair →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fix Your MacBook Keyboard or Trackpad Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Walk-ins welcome at 3742 Eisenhower Parkway. Expert service guaranteed.
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
