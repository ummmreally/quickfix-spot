import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import FAQSection from "../../components/FAQSection";

export const metadata: Metadata = {
  title: "Charging Port Repair Macon GA | iPhone, iPad & MacBook | Same-Day Service | (478) 259-6371",
  description: "iPhone, iPad or MacBook not charging? Charging port repair in Macon GA. Same-day fix for loose ports, slow charging & more. Tech Medics at 3742 Eisenhower Pkwy. Call (478) 259-6371.",
  keywords: ["charging port repair Macon GA", "iPhone not charging fix Macon", "charging port replacement Macon", "phone not charging repair near me", "iPhone charging port repair Macon", "iPad charging port fix Macon", "MacBook charging port repair Macon GA", "lightning port repair Macon", "USB-C port repair Macon"],
  alternates: { canonical: "https://techmedicsmacon.com/macon/charging-port-repair" },
  openGraph: {
    title: "Charging Port Repair Macon GA | iPhone, iPad & MacBook | Same-Day $69+",
    description: "Device not charging? Expert charging port repair in Macon GA. Same-day service, walk-ins welcome.",
    url: "https://techmedicsmacon.com/macon/charging-port-repair",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://techmedicsmacon.com" },
    { "@type": "ListItem", position: 2, name: "Macon", item: "https://techmedicsmacon.com/macon" },
    { "@type": "ListItem", position: 3, name: "Charging Port Repair", item: "https://techmedicsmacon.com/macon/charging-port-repair" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://techmedicsmacon.com/macon/charging-port-repair#service",
  serviceType: "Charging Port Repair",
  name: "Charging Port Repair Service in Macon GA",
  description: "Professional charging port repair and replacement for iPhone, iPad, and MacBook in Macon, Georgia. Same-day service available.",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://techmedicsmacon.com/#business",
    name: "Tech Medics Macon",
    telephone: "(478) 259-6371",
    address: { "@type": "PostalAddress", streetAddress: "3742 Eisenhower Parkway", addressLocality: "Macon", addressRegion: "GA", postalCode: "31206", addressCountry: "US" },
  },
  areaServed: [
    { "@type": "City", name: "Macon", containedIn: { "@type": "State", name: "Georgia" } },
    { "@type": "City", name: "Warner Robins" },
    { "@type": "City", name: "Byron" },
    { "@type": "City", name: "Perry" },
    { "@type": "City", name: "Forsyth" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog", name: "Charging Port Repair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Charging Port Repair" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "69", priceCurrency: "USD", unitText: "starting at" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPad Charging Port Repair" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "89", priceCurrency: "USD", unitText: "starting at" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Charging Port Repair" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "129", priceCurrency: "USD", unitText: "starting at" } },
    ],
  },
};

const faqData = [
  { question: "How do I know if my charging port is broken?", answer: "Common signs include: cable falls out easily or feels loose, device only charges at certain angles, charging is very slow, device won't charge at all, or you see lint/debris in the port. We offer free diagnostics to determine the issue." },
  { question: "How much does charging port repair cost in Macon?", answer: "We offer competitive pricing for all charging port repairs. Call (478) 259-6371 for a free quote for your specific model." },
  { question: "Can you just clean the charging port instead of replacing it?", answer: "Yes! Sometimes the issue is just lint, dust, or debris blocking the connection. We'll clean the port first (included in our free diagnosis) and only recommend replacement if the port is actually damaged." },
  { question: "How long does charging port repair take?", answer: "iPhone charging port repairs take 30-45 minutes. iPad repairs take about 60 minutes. MacBook port repairs may take 1-3 hours depending on the model and issue." },
  { question: "Will I lose my data during charging port repair?", answer: "No. Charging port repair does not affect your data, photos, or apps. Your device will be exactly as you left it." },
  { question: "My iPhone only charges wirelessly – is the port broken?", answer: "If your iPhone charges wirelessly but not with a cable, the charging port is likely damaged or clogged. Bring it in for a free diagnosis and we'll determine the exact issue." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };


const testimonials = [
  { name: "Christina M.", rating: 5, text: "My iPhone 14 would only charge if I held the cable at a weird angle. They replaced the charging port in 40 minutes and now it works perfectly. So relieved!", service: "iPhone Charging Port Repair" },
  { name: "Kevin B.", rating: 5, text: "Thought my iPad was dead but it was just the charging port. Tech Medics fixed it same day and saved me from buying a new one. Great price too.", service: "iPad Charging Port Repair" },
  { name: "Lisa G.", rating: 5, text: "MacBook Pro wouldn't charge at all. They diagnosed it quickly and had it fixed within 2 hours. Professional service and fair pricing.", service: "MacBook Charging Port Repair" },
];

export default function ChargingPortRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-3 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li><Link href="/macon" className="hover:text-primary">Macon</Link></li>
          <li>/</li>
          <li className="text-foreground font-medium">Charging Port Repair</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Charging Port Repair in Macon, GA</h1>
              <p className="text-xl text-muted-foreground mb-8">iPhone, iPad, or MacBook not charging? Don&apos;t replace your device &ndash; let us fix the charging port. Same-day repair at 3742 Eisenhower Parkway. We fix loose ports, slow charging, and devices that won&apos;t charge at all.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call for Free Quote</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2">
                  <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/iphone-repair.jpg" alt="Charging port repair service for iPhone iPad and MacBook in Macon GA" width="800" height="600" className="w-full h-auto" loading="eager" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Charging Problems We Fix</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Most charging issues can be fixed quickly and affordably &ndash; no device replacement needed</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Device Won't Charge", desc: "Plug in the cable and nothing happens? Could be a damaged port, broken pins, or corrosion. We diagnose and fix the exact issue." },
              { title: "Loose Cable Connection", desc: "Cable falls out or only charges at certain angles? The port pins are likely worn or bent. We replace the entire charging assembly." },
              { title: "Slow Charging", desc: "Device takes hours to charge? Could be a partially damaged port, dirty contacts, or a failing battery. Free diagnosis included." },
              { title: "Intermittent Charging", desc: "Charges sometimes but not always? Loose internal connections or corroded pins. We repair or replace the port for reliable charging." },
              { title: "Lint & Debris Buildup", desc: "Pocket lint and dust can block the connection. We professionally clean the port – often solving the issue without parts replacement." },
              { title: "Water Damage to Port", desc: "Liquid exposure can corrode charging pins. We clean corrosion and replace damaged components to restore charging." },
            ].map((s) => (
              <article key={s.title} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Affordable Charging Port Repair Pricing</h2>
          <p className="text-xl text-muted-foreground mb-8">We offer competitive pricing for all charging port repairs. Every repair includes a 30-day warranty and expert service.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call for Free Quote</a>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">How Charging Port Repair Works</h2>
          <p className="text-center text-muted-foreground mb-12">Simple, fast, and hassle-free</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Bring It In", desc: "Walk in to 3742 Eisenhower Parkway or call (478) 259-6371. No appointment needed." },
              { step: "2", title: "Free Diagnosis", desc: "We inspect the port, test with known-good cables, and determine if it needs cleaning or replacement." },
              { step: "3", title: "Quick Repair", desc: "Port cleaning or full replacement performed by our certified technicians using quality parts." },
              { step: "4", title: "Test & Go", desc: "We test charging thoroughly before handoff. You leave with a working device and 30-day warranty." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">{s.step}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">What Our Customers Say</h2>
          <p className="text-center text-muted-foreground mb-12">Real reviews from charging port repair customers</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="p-6 border-border hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">{[...Array(t.rating)].map((_, j) => <Star key={j} className="h-5 w-5 fill-primary text-primary" />)}</div>
                <p className="text-muted-foreground mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="border-t border-border pt-4"><p className="font-semibold text-foreground">{t.name}</p><p className="text-sm text-muted-foreground">{t.service}</p></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection deviceType="Charging Port" faqs={faqData} />

      {/* SEO Content */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Charging Port Repair Experts in Macon, GA</h2>
            <p className="text-muted-foreground mb-4">Is your <strong>iPhone not charging in Macon, GA</strong>? Before you panic and buy a new phone, bring it to Tech Medics. In most cases, a <strong>charging port repair</strong> is all you need &ndash; and it costs a fraction of a new device. We fix charging issues for all Apple devices including iPhones, iPads, and MacBooks.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Common Causes of Charging Problems</h3>
            <p className="text-muted-foreground mb-4">The most common cause of charging issues is actually lint and debris buildup in the port from being in your pocket. Our technicians will inspect and clean your port for free during diagnosis. If the port itself is damaged &ndash; bent pins, corrosion, or a cracked connector &ndash; we replace the entire charging assembly with quality parts. <strong>iPhone charging port repair in Macon</strong> starts at just $69.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Lightning, USB-C &amp; MagSafe Repairs</h3>
            <p className="text-muted-foreground mb-4">Whether your device uses Lightning (older iPhones/iPads), USB-C (iPhone 15/16, newer iPads, MacBooks), or MagSafe (MacBook chargers), we repair them all. We stock parts for every Apple connector type and can fix any charging-related issue same-day at our Macon location.</p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Device Not Charging? We Can Fix It Today</h2>
          <p className="text-xl text-muted-foreground mb-8">Walk in to 3742 Eisenhower Parkway, Macon, GA 31206 &ndash; no appointment needed.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"><a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a></Button>
            <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8"><a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a></Button>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">Related Repair Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/macon/battery-replacement" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">Battery Replacement</h3><p className="text-muted-foreground">Battery dying fast? We can help</p></Link>
            <Link href="/macon/screen-repair" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">Screen Repair</h3><p className="text-muted-foreground">Cracked screen fixed same-day</p></Link>
            <Link href="/macon/water-damage" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">Water Damage Repair</h3><p className="text-muted-foreground">Liquid damage recovery for all devices</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
