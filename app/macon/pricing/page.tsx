import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Repair Pricing Macon GA | iPhone, iPad, MacBook & Console Costs | (478) 259-6371",
  description: "Transparent repair pricing at Tech Medics Macon GA. iPhone screen from $79, battery $59+, iPad from $79, MacBook from $149, console repair available. No hidden fees. Call (478) 259-6371.",
  keywords: ["repair pricing Macon GA", "iPhone repair cost Macon", "screen repair price Macon GA", "battery replacement cost Macon", "MacBook repair cost Macon", "iPad repair price Macon GA", "phone repair prices near me", "how much does screen repair cost Macon"],
  alternates: { canonical: "https://techmedicsmacon.com/macon/pricing" },
  openGraph: {
    title: "Repair Pricing | Tech Medics Macon GA – Transparent Costs",
    description: "See our transparent repair prices. iPhone screen from $79, battery $59+. Up to 50% less than Apple Store. No hidden fees.",
    url: "https://techmedicsmacon.com/macon/pricing",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://techmedicsmacon.com" },
    { "@type": "ListItem", position: 2, name: "Macon", item: "https://techmedicsmacon.com/macon" },
    { "@type": "ListItem", position: 3, name: "Pricing", item: "https://techmedicsmacon.com/macon/pricing" },
  ],
};

const iphonePricing = [
  { model: "iPhone 8 / SE", screen: "$79", battery: "$59", chargingPort: "$69" },
  { model: "iPhone X / XR / XS", screen: "$99", battery: "$69", chargingPort: "$79" },
  { model: "iPhone 11", screen: "$109", battery: "$69", chargingPort: "$79" },
  { model: "iPhone 12 / Mini", screen: "$119", battery: "$79", chargingPort: "$89" },
  { model: "iPhone 13 / Mini", screen: "$149", battery: "$79", chargingPort: "$89" },
  { model: "iPhone 14", screen: "$179", battery: "$89", chargingPort: "$99" },
  { model: "iPhone 14 Pro / Max", screen: "$229", battery: "$89", chargingPort: "$99" },
  { model: "iPhone 15", screen: "$199", battery: "$89", chargingPort: "$99" },
  { model: "iPhone 15 Pro / Max", screen: "$279", battery: "$99", chargingPort: "$109" },
  { model: "iPhone 16", screen: "$249", battery: "$99", chargingPort: "$109" },
  { model: "iPhone 16 Pro / Max", screen: "$329", battery: "$109", chargingPort: "$119" },
  { model: "iPhone 16e", screen: "$199", battery: "$89", chargingPort: "$99" },
];

const ipadPricing = [
  { model: "iPad (Standard)", screen: "$99", battery: "$79", chargingPort: "$89" },
  { model: "iPad Mini", screen: "$119", battery: "$89", chargingPort: "$99" },
  { model: "iPad Air", screen: "$149", battery: "$99", chargingPort: "$99" },
  { model: "iPad Pro 11\"", screen: "$249", battery: "$119", chargingPort: "$119" },
  { model: "iPad Pro 12.9\"", screen: "$349", battery: "$119", chargingPort: "$119" },
];

const macbookPricing = [
  { model: "MacBook Air (Intel)", screen: "$299", battery: "$149" },
  { model: "MacBook Air M1", screen: "$349", battery: "$179" },
  { model: "MacBook Air M2/M3", screen: "$399", battery: "$199" },
  { model: "MacBook Pro 13\" (Intel)", screen: "$349", battery: "$179" },
  { model: "MacBook Pro 13\" M1/M2", screen: "$399", battery: "$199" },
  { model: "MacBook Pro 14\"", screen: "$499", battery: "$249" },
  { model: "MacBook Pro 16\"", screen: "$599-$699", battery: "$299-$349" },
];

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-3 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li><Link href="/macon" className="hover:text-primary">Macon</Link></li>
          <li>/</li>
          <li className="text-foreground font-medium">Pricing</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Transparent Repair Pricing in Macon, GA</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">No hidden fees, no surprises. See our prices upfront &ndash; always 30-50% less than Apple Store. Every repair includes a 30-day warranty on parts and labor.</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call for Exact Quote</a>
          </Button>
        </div>
      </section>

      {/* iPhone Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">iPhone Repair Pricing</h2>
          <p className="text-center text-muted-foreground mb-8">All iPhone models serviced &ndash; <Link href="/macon/iphone" className="text-primary hover:underline">view full iPhone repair details</Link></p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b border-border bg-primary text-primary-foreground">
                  <th className="text-left p-4 font-bold">iPhone Model</th>
                  <th className="text-center p-4 font-bold">Screen Repair</th>
                  <th className="text-center p-4 font-bold">Battery</th>
                  <th className="text-center p-4 font-bold">Charging Port</th>
                </tr>
              </thead>
              <tbody>
                {iphonePricing.map((row) => (
                  <tr key={row.model} className="border-b border-border last:border-0 hover:bg-secondary/30">
                    <td className="p-4 font-semibold text-foreground">{row.model}</td>
                    <td className="p-4 text-center text-foreground font-medium">{row.screen}</td>
                    <td className="p-4 text-center text-foreground">{row.battery}</td>
                    <td className="p-4 text-center text-foreground">{row.chargingPort}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* iPad Pricing */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">iPad Repair Pricing</h2>
          <p className="text-center text-muted-foreground mb-8">All iPad models serviced &ndash; <Link href="/macon/ipad" className="text-primary hover:underline">view full iPad repair details</Link></p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b border-border bg-primary text-primary-foreground">
                  <th className="text-left p-4 font-bold">iPad Model</th>
                  <th className="text-center p-4 font-bold">Screen Repair</th>
                  <th className="text-center p-4 font-bold">Battery</th>
                  <th className="text-center p-4 font-bold">Charging Port</th>
                </tr>
              </thead>
              <tbody>
                {ipadPricing.map((row) => (
                  <tr key={row.model} className="border-b border-border last:border-0 hover:bg-secondary/30">
                    <td className="p-4 font-semibold text-foreground">{row.model}</td>
                    <td className="p-4 text-center text-foreground font-medium">{row.screen}</td>
                    <td className="p-4 text-center text-foreground">{row.battery}</td>
                    <td className="p-4 text-center text-foreground">{row.chargingPort}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MacBook Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">MacBook Repair Pricing</h2>
          <p className="text-center text-muted-foreground mb-8">All MacBook models serviced &ndash; <Link href="/macon/macbook" className="text-primary hover:underline">view full MacBook repair details</Link></p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b border-border bg-primary text-primary-foreground">
                  <th className="text-left p-4 font-bold">MacBook Model</th>
                  <th className="text-center p-4 font-bold">Screen Repair</th>
                  <th className="text-center p-4 font-bold">Battery</th>
                </tr>
              </thead>
              <tbody>
                {macbookPricing.map((row) => (
                  <tr key={row.model} className="border-b border-border last:border-0 hover:bg-secondary/30">
                    <td className="p-4 font-semibold text-foreground">{row.model}</td>
                    <td className="p-4 text-center text-foreground font-medium">{row.screen}</td>
                    <td className="p-4 text-center text-foreground">{row.battery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Other Services Pricing */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Other Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/macon/water-damage" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-foreground">Water Damage Repair</h3>
              <p className="text-muted-foreground text-sm mb-2">Ultrasonic cleaning &amp; component repair</p>
              <p className="text-primary font-bold">From $79 &ndash; Call for quote</p>
            </Link>
            <Link href="/macon/data-recovery" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-foreground">Data Recovery</h3>
              <p className="text-muted-foreground text-sm mb-2">Recover photos, files &amp; contacts</p>
              <p className="text-primary font-bold">From $79 &ndash; No data, no fee</p>
            </Link>
            <Link href="/macon/game-console-repair" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-foreground">Game Console Repair</h3>
              <p className="text-muted-foreground text-sm mb-2">PS5, Xbox, Nintendo Switch</p>
              <p className="text-primary font-bold">Call for quote</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Price Match */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Price Match Guarantee</h2>
          <p className="text-xl text-muted-foreground mb-4">Found a lower price at a local competitor for the same repair? We&apos;ll match it. Tech Medics is committed to offering the best value for device repair in Macon, GA.</p>
          <p className="text-muted-foreground mb-8">Our prices are already 30-50% less than Apple Store, and we back every repair with a 30-day warranty on parts and labor.</p>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Affordable Device Repair Pricing in Macon, GA</h2>
            <p className="text-muted-foreground mb-4">Wondering <strong>how much does phone repair cost in Macon</strong>? At Tech Medics, we believe in <strong>transparent pricing</strong> &ndash; no hidden fees, no surprise charges. Our prices are listed right here so you know exactly what to expect before you walk in. We&apos;re consistently 30-50% less expensive than Apple Store repair costs.</p>
            <p className="text-muted-foreground mb-4">Whether you need <strong>iPhone screen repair in Macon</strong> starting at $79, <strong>iPad battery replacement</strong> from $79, or <strong>MacBook screen replacement</strong> from $299, we offer the best value in Central Georgia. Every repair includes a 30-day warranty and is performed by certified technicians using premium parts.</p>
            <p className="text-muted-foreground mb-4">Prices shown are estimates and may vary based on specific model and condition. Call <strong>(478) 259-6371</strong> for an exact quote. We&apos;re located at <strong>3742 Eisenhower Parkway, Macon, GA 31206</strong> and serve all of Macon plus Warner Robins, Byron, Perry, and Forsyth.</p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Get Your Device Fixed?</h2>
          <p className="text-xl text-muted-foreground mb-8">Call for an exact quote or walk in &ndash; no appointment needed.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"><a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a></Button>
            <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8"><a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
