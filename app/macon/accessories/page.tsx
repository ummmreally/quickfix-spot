import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Package, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessories - Coming Soon | Tech Medics Macon",
  description: "Phone and tablet accessories coming soon to Tech Medics Macon. Cases, chargers, screen protectors, and more for iPhone, iPad, and MacBook.",
  robots: "noindex, nofollow",
};

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="bg-white rounded-2xl shadow-xl p-12 md:p-16">
            <div className="mb-8">
              <Package className="h-24 w-24 text-primary mx-auto mb-6" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Online Ordering Coming Soon
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Visit Tech Medics in store now for high-quality accessories for your iPhone, iPad, and MacBook. Stay tuned for updates!
            </p>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What We'll Offer:</h2>
              <ul className="text-left max-w-md mx-auto space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Premium cases and screen protectors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Charging cables and adapters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Speakers and wireless earbuds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Power banks and portable chargers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Car mounts and stands</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>And much more!</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Need a Repair Instead?</h3>
              <p className="text-slate-600 mb-6">
                While we prepare our accessories store, we're still here for all your device repair needs!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/macon/services" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View Repair Services
                </Link>
                <a 
                  href="tel:(478)259-6371" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (478) 259-6371
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
