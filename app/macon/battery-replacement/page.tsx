import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import FAQSection from "../../components/FAQSection";

export const metadata: Metadata = {
  title: "Battery Replacement Macon GA | iPhone, iPad & MacBook | Same-Day Service | (478) 259-6371",
  description: "iPhone, iPad & MacBook battery replacement in Macon GA. Same-day 30-minute service, no appointment. Fix fast-draining or swollen batteries. Tech Medics at 3742 Eisenhower Pkwy. Call (478) 259-6371.",
  keywords: ["battery replacement Macon GA", "iPhone battery replacement Macon", "iPad battery replacement Macon GA", "MacBook battery replacement Macon", "phone battery repair near me", "battery dying fast fix Macon", "swollen battery replacement Macon", "same day battery replacement Macon GA"],
  alternates: { canonical: "https://techmedicsmacon.com/macon/battery-replacement" },
  openGraph: {
    title: "Battery Replacement Macon GA | iPhone, iPad & MacBook | Same-Day $59+",
    description: "Expert battery replacement in Macon GA. iPhone, iPad & MacBook batteries replaced same-day. 30-min service, walk-ins welcome.",
    url: "https://techmedicsmacon.com/macon/battery-replacement",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://techmedicsmacon.com" },
    { "@type": "ListItem", position: 2, name: "Macon", item: "https://techmedicsmacon.com/macon" },
    { "@type": "ListItem", position: 3, name: "Battery Replacement", item: "https://techmedicsmacon.com/macon/battery-replacement" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://techmedicsmacon.com/macon/battery-replacement#service",
  serviceType: "Battery Replacement",
  name: "Battery Replacement Service in Macon GA",
  description: "Professional battery replacement for iPhone, iPad, and MacBook in Macon, Georgia. Same-day service available.",
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
    "@type": "OfferCatalog", name: "Battery Replacement Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Battery Replacement" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "59", priceCurrency: "USD", unitText: "starting at" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPad Battery Replacement" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "79", priceCurrency: "USD", unitText: "starting at" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Battery Replacement" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "149", priceCurrency: "USD", unitText: "starting at" } },
    ],
  },
};

const faqData = [
  { question: "How do I know if my battery needs replacing?", answer: "Common signs include: battery health below 80% (Settings > Battery > Battery Health on iPhone), phone dying at 20-30%, unexpected shutdowns, excessive heat during normal use, or a visibly swollen battery. We offer free diagnostics to check your battery health." },
  { question: "How much does battery replacement cost in Macon?", answer: "We offer competitive pricing for all battery replacements. Call (478) 259-6371 for a free quote for your specific device model." },
  { question: "How long does battery replacement take?", answer: "iPhone battery replacement takes about 30 minutes. iPad batteries take 45-60 minutes. MacBook battery replacement typically takes 1-2 hours depending on the model." },
  { question: "Will I lose my data during battery replacement?", answer: "No. Battery replacement does not affect your data, photos, apps, or settings. Your device will be exactly as you left it, just with a brand new battery." },
  { question: "What if my battery is swollen?", answer: "A swollen battery is a safety hazard – stop using and charging the device immediately. Bring it to Tech Medics right away for safe removal and replacement. Do not attempt to fix a swollen battery yourself." },
  { question: "How long will the new battery last?", answer: "A new battery should last 2-3 years with normal use, retaining 80%+ of its capacity for approximately 500 charge cycles – the same lifespan as the original battery." },
  { question: "Do you use quality replacement batteries?", answer: "Yes. We use premium batteries that meet or exceed Apple's original specifications. Every battery replacement includes a 30-day warranty on parts and labor." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };


const testimonials = [
  { name: "James T.", rating: 5, text: "My iPhone 15 battery was dying by lunch every day. They swapped it in 30 minutes and now it lasts all day again. Way cheaper than Apple Store too.", service: "iPhone Battery Replacement" },
  { name: "Patricia K.", rating: 5, text: "My MacBook Air wouldn't hold a charge for more than an hour. New battery installed same day and it's back to lasting 10+ hours. Lifesaver!", service: "MacBook Air Battery Replacement" },
  { name: "Robert H.", rating: 5, text: "My daughter's iPad battery was swollen and the screen was lifting. They replaced it safely within the hour. Very professional and affordable.", service: "iPad Battery Replacement" },
];

export default function BatteryReplacementPage() {
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
          <li className="text-foreground font-medium">Battery Replacement</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Battery Replacement in Macon, GA</h1>
              <p className="text-xl text-muted-foreground mb-8">iPhone dying by noon? MacBook won&apos;t hold a charge? We replace batteries for all Apple devices same-day at 3742 Eisenhower Parkway. Most iPhone batteries swapped in 30 minutes. Walk-ins welcome &ndash; no appointment needed.</p>
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
              <img src="/images/iphone-repair.jpg" alt="Battery replacement service for iPhone iPad and MacBook in Macon GA" width="800" height="600" className="w-full h-auto" loading="eager" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Signs You Need a Battery Replacement</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">If you notice any of these symptoms, your battery may need replacing</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Battery Drains Fast", desc: "Phone dies by midday or won't last through normal use. Battery health below 80% means it's time for a replacement." },
              { title: "Unexpected Shutdowns", desc: "Device shuts off randomly at 20-30% battery or during demanding tasks like video calls or navigation." },
              { title: "Swollen Battery", desc: "Screen lifting, case bulging, or device won't sit flat. This is a safety hazard – bring it in immediately." },
              { title: "Excessive Heat", desc: "Device gets unusually hot during normal use or while charging. Overheating can damage internal components." },
              { title: "Slow Charging", desc: "Battery takes much longer to charge than when new, or won't charge past a certain percentage." },
              { title: "Battery Health Warning", desc: "iPhone shows 'Service' in Battery Health settings, or your MacBook shows 'Replace Soon' or 'Service Battery'." },
            ].map((s) => (
              <article key={s.title} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Devices We Service */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Battery Replacement for Every Apple Device</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/macon/iphone" className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow group">
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">iPhone Battery</h3>
              <p className="text-muted-foreground mb-4">All models from iPhone 8 through iPhone 16 Pro Max. Premium cells that restore all-day battery life. 30-minute service.</p>
              <p className="text-primary font-bold text-lg">Call for Quote</p>
            </Link>
            <Link href="/macon/ipad" className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow group">
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">iPad Battery</h3>
              <p className="text-muted-foreground mb-4">iPad, iPad Mini, iPad Air, and iPad Pro battery replacement. Restore tablet performance and runtime.</p>
              <p className="text-primary font-bold text-lg">Call for Quote</p>
            </Link>
            <Link href="/macon/macbook" className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow group">
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">MacBook Battery</h3>
              <p className="text-muted-foreground mb-4">MacBook Air and MacBook Pro battery replacement. Intel and Apple Silicon models. Restore all-day battery life.</p>
              <p className="text-primary font-bold text-lg">Call for Quote</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Affordable Battery Replacement Pricing</h2>
          <p className="text-xl text-muted-foreground mb-8">We offer competitive pricing for all battery replacements. Every repair includes a 30-day warranty and expert service.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call for Free Quote</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Why Choose Tech Medics for Battery Replacement?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: "30 Min", desc: "Most iPhone battery replacements done in 30 minutes" },
              { stat: "Fast", desc: "Quick and affordable battery replacement" },
              { stat: "Premium", desc: "High-quality batteries matching Apple specifications" },
              { stat: "Warranty", desc: "30-day warranty on all battery replacements" },
            ].map((s) => (
              <div key={s.stat} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{s.stat}</div>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">What Our Customers Say</h2>
          <p className="text-center text-muted-foreground mb-12">Real reviews from battery replacement customers in Macon, GA</p>
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
      <FAQSection deviceType="Battery Replacement" faqs={faqData} />

      {/* SEO Content */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Expert Battery Replacement in Macon, Georgia</h2>
            <p className="text-muted-foreground mb-4">Is your <strong>iPhone battery dying fast</strong>? Does your MacBook shut down at 30%? You probably need a <strong>battery replacement in Macon, GA</strong>. At Tech Medics, we replace batteries for all Apple devices &ndash; iPhones, iPads, and MacBooks &ndash; using premium quality cells that restore your device&apos;s original battery life.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">iPhone Battery Replacement in Macon &ndash; Same Day</h3>
            <p className="text-muted-foreground mb-4">Apple recommends replacing your iPhone battery when health drops below 80%. At Tech Medics, <strong>iPhone battery replacement in Macon</strong> starts at just $59 and takes about 30 minutes. We carry batteries for every model from iPhone 8 through iPhone 16 Pro Max. No appointment needed &ndash; walk in and we&apos;ll have your iPhone running like new before you finish your coffee.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Swollen Battery? Don&apos;t Wait</h3>
            <p className="text-muted-foreground mb-4">A <strong>swollen battery</strong> is a serious safety concern. If your screen is lifting, your case is bulging, or your device won&apos;t sit flat, stop using it immediately and bring it to Tech Medics. We safely remove and replace swollen batteries the same day. Don&apos;t risk a fire or explosion &ndash; let our trained technicians handle it.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Save Money vs. Apple Store</h3>
            <p className="text-muted-foreground mb-4">Our <strong>battery replacement prices in Macon</strong> are 30-50% less than the Apple Store, and you don&apos;t have to drive to Atlanta or ship your device. We use premium batteries that match Apple&apos;s specifications, and every replacement comes with a 30-day warranty. Serving all of Macon, Warner Robins, Byron, Perry, and Forsyth.</p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Battery Dying Fast? Get It Replaced Today</h2>
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
            <Link href="/macon/screen-repair" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">Screen Repair</h3><p className="text-muted-foreground">Cracked screen? Fixed same-day</p></Link>
            <Link href="/macon/charging-port-repair" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">Charging Port Repair</h3><p className="text-muted-foreground">Device not charging? We fix it fast</p></Link>
            <Link href="/macon/water-damage" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">Water Damage Repair</h3><p className="text-muted-foreground">Dropped in water? We can save it</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
