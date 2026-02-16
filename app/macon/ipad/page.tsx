import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star, Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import FAQSection from "../../components/FAQSection";

export const metadata: Metadata = {
  title: "iPad Repair Macon GA | Screen Replacement $99+ | (478) 259-6371",
  description: "#1 iPad repair in Macon GA. Cracked iPad screen replacement from $99. iPad Pro, Air, Mini – all models. Battery replacement, charging port fix. Same-day service, walk-ins welcome at 3742 Eisenhower Pkwy. Call (478) 259-6371.",
  keywords: ["iPad repair Macon GA", "iPad screen repair Macon", "iPad screen replacement Macon GA", "cracked iPad screen repair Macon", "iPad battery replacement Macon GA", "iPad Pro screen repair Macon", "iPad Air screen replacement Macon", "iPad Mini repair Macon", "iPad charging port repair Macon", "iPad repair near me Macon", "iPad glass repair Macon GA", "same day iPad repair Macon", "best iPad repair Macon Georgia", "tablet repair Macon GA"],
  alternates: { canonical: "https://techmedicsmacon.com/macon/ipad" },
  openGraph: {
    title: "iPad Repair Macon GA | Screen Replacement & Battery Fix from $99",
    description: "Macon's #1 iPad repair shop. Screen replacement $99+, all iPad models serviced. Same-day service, walk-ins welcome.",
    url: "https://techmedicsmacon.com/macon/ipad",
    images: [{ url: "/images/ipad-screen-repair-macon.webp", width: 800, height: 600, alt: "iPad screen repair service in Macon GA" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://techmedicsmacon.com" },
    { "@type": "ListItem", position: 2, name: "Macon", item: "https://techmedicsmacon.com" },
    { "@type": "ListItem", position: 3, name: "iPad Repair", item: "https://techmedicsmacon.com/macon/ipad" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://techmedicsmacon.com/macon/ipad#service",
  serviceType: "iPad Repair",
  name: "iPad Repair Service in Macon GA",
  description: "Professional iPad screen replacement, battery service, charging port repair, and glass repair for all iPad models in Macon, Georgia. Same-day service available.",
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
  hasOfferCatalog: { "@type": "OfferCatalog", name: "iPad Repair Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPad Screen Replacement", description: "iPad screen and glass replacement for all models including iPad Pro, Air, and Mini" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "99", priceCurrency: "USD", unitText: "starting at" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPad Battery Replacement", description: "iPad battery replacement to restore all-day battery life" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPad Charging Port Repair", description: "Fix iPad Lightning and USB-C charging port issues" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPad Glass Repair", description: "Cracked iPad glass replacement for compatible models" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPad Water Damage Recovery", description: "iPad water damage assessment and repair service" } },
  ]},
};

const faqs = [
  { question: "How much does iPad screen repair cost in Macon GA?", answer: "iPad screen repair starts at $99 for older models. iPad Pro and iPad Air repairs range from $149-$399 depending on the model and generation. Call (478) 259-6371 for an exact quote." },
  { question: "How long does iPad screen replacement take?", answer: "Most iPad screen replacements are completed in 1-2 hours. We offer same-day service for all iPad models." },
  { question: "Do you repair all iPad models?", answer: "Yes! We repair all iPad models including iPad Pro (all sizes), iPad Air, iPad Mini, and standard iPad. We stock parts for most models." },
  { question: "Can you fix a cracked iPad screen that still works?", answer: "Yes! Even if your iPad screen is cracked but still functional, we recommend replacing it to prevent further damage and restore touch sensitivity." },
  { question: "Do you replace iPad batteries?", answer: "Yes! If your iPad battery drains quickly or won't hold a charge, we can replace it. iPad battery replacements restore your tablet's performance." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };

const pricingData = [
  { model: "iPad 7th / 8th Gen", screen: "$99", battery: "$89", chargingPort: "$79", time: "1-2 hrs" },
  { model: "iPad 9th Gen", screen: "$119", battery: "$89", chargingPort: "$79", time: "1-2 hrs" },
  { model: "iPad 10th Gen", screen: "$149", battery: "$99", chargingPort: "$89", time: "1-2 hrs" },
  { model: "iPad Air 4 / 5", screen: "$199", battery: "$109", chargingPort: "$89", time: "2 hrs" },
  { model: "iPad Mini 5 / 6", screen: "$179", battery: "$99", chargingPort: "$89", time: "1-2 hrs" },
  { model: 'iPad Pro 11"', screen: "$299", battery: "$129", chargingPort: "$99", time: "2-3 hrs" },
  { model: 'iPad Pro 12.9"', screen: "$399", battery: "$149", chargingPort: "$109", time: "2-3 hrs" },
];

const comparisonData = [
  { feature: "Warranty Included", diy: false, competitor: true, us: true },
  { feature: "Same-Day Service", diy: false, competitor: false, us: true },
  { feature: "Quality Parts", diy: false, competitor: true, us: true },
  { feature: "Expert Technicians", diy: false, competitor: true, us: true },
  { feature: "No Appointment Needed", diy: true, competitor: false, us: true },
  { feature: "All iPad Models", diy: false, competitor: false, us: true },
  { feature: "Local Support", diy: false, competitor: false, us: true },
  { feature: "Free Diagnosis", diy: false, competitor: false, us: true },
];

export default function IPadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-3 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-primary">Home</Link></li><li>/</li>
          <li><Link href="/macon/ipad" className="hover:text-primary">Macon</Link></li><li>/</li>
          <li className="text-foreground font-medium">iPad Repair</li>
        </ol>
      </nav>

      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">iPad Screen Repair &amp; Service in Macon, GA</h1>
              <p className="text-xl text-muted-foreground mb-8">Expert iPad repair for all models – Pro, Air, Mini &amp; standard iPad. Screen replacement, battery service, charging port repair, and more. Same-day service at 3742 Eisenhower Parkway.</p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call Now for Quote</a>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/ipad-screen-repair-macon.webp" alt="iPad screen repair and replacement service in Macon GA" width="800" height="600" className="w-full h-auto" loading="eager" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">iPad Repair Services in Macon, GA</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Screen Replacement", desc: "Cracked or shattered iPad screen? We replace screens and digitizers for all iPad models with high-quality parts." },
              { title: "Glass Repair", desc: "iPad glass cracked but display works? We replace just the glass for a more affordable fix on compatible models." },
              { title: "Battery Replacement", desc: "iPad battery draining fast or not holding charge? We replace iPad batteries to restore all-day performance." },
              { title: "Charging Port Repair", desc: "iPad not charging? We fix and replace Lightning and USB-C charging ports for reliable charging." },
              { title: "Home Button Repair", desc: "Home button not responding? We repair and replace home buttons and Touch ID sensors." },
              { title: "Water Damage Recovery", desc: "iPad exposed to water? We offer professional water damage assessment and recovery services." },
            ].map(s => (
              <article key={s.title} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
          <div className="bg-secondary/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">iPad Models We Service</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {["iPad Pro 12.9\"", "iPad Pro 11\"", "iPad Air", "iPad Mini", "iPad 10th Gen", "iPad 9th Gen", "iPad 8th Gen", "Older Models"].map(m => (
                <div key={m} className="bg-card border border-border rounded-lg p-3 text-center"><span className="font-medium text-foreground">{m}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection deviceType="iPad" faqs={faqs} />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">What Our Customers Say</h2>
          <p className="text-center text-muted-foreground mb-12">Real reviews from iPad repair customers in Macon, GA</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Thomas R.", text: "My iPad Pro screen was shattered. They replaced it same day and it looks brand new!", service: "iPad Screen Replacement" },
              { name: "Michelle D.", text: "Dropped my iPad in water and thought it was done for. They recovered it and saved all my data!", service: "iPad Water Damage" },
              { name: "Lisa K.", text: "iPad battery was dying by noon every day. New battery installed in about an hour. Works perfectly now!", service: "iPad Battery" },
            ].map((t, i) => (
              <Card key={i} className="p-6 border-border hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-primary text-primary" />)}</div>
                <p className="text-muted-foreground mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="border-t border-border pt-4"><p className="font-semibold text-foreground">{t.name}</p><p className="text-sm text-muted-foreground">{t.service}</p></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">iPad Repair Cost in Macon, GA – Transparent Pricing</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">How much does iPad screen repair cost? See our prices below – significantly less than Apple Store pricing. Call <a href="tel:(478)259-6371" className="text-primary font-semibold">(478) 259-6371</a> for an exact quote.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b border-border bg-primary text-primary-foreground">
                  <th className="text-left p-4 font-bold">iPad Model</th>
                  <th className="text-center p-4 font-bold">Screen Repair</th>
                  <th className="text-center p-4 font-bold">Battery</th>
                  <th className="text-center p-4 font-bold">Charging Port</th>
                  <th className="text-center p-4 font-bold">Repair Time</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row) => (
                  <tr key={row.model} className="border-b border-border last:border-0 hover:bg-secondary/30">
                    <td className="p-4 font-semibold text-foreground">{row.model}</td>
                    <td className="p-4 text-center text-foreground font-medium">{row.screen}</td>
                    <td className="p-4 text-center text-foreground">{row.battery}</td>
                    <td className="p-4 text-center text-foreground">{row.chargingPort}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">*Prices are estimates and may vary. Contact us for an exact quote. All repairs include a 30-day warranty.</p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Why Choose Us for iPad Repair in Macon?</h2>
          <p className="text-center text-muted-foreground mb-12">Compare your iPad repair options and see the Tech Medics difference</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
              <thead><tr className="border-b border-border"><th className="text-left p-4 font-bold text-foreground">Feature</th><th className="text-center p-4 font-bold text-muted-foreground">DIY</th><th className="text-center p-4 font-bold text-muted-foreground">Other Shops</th><th className="text-center p-4 font-bold text-primary-foreground bg-primary">Tech Medics</th></tr></thead>
              <tbody>{comparisonData.map((row) => (
                <tr key={row.feature} className="border-b border-border last:border-0">
                  <td className="p-4 font-medium text-foreground">{row.feature}</td>
                  <td className="p-4 text-center">{row.diy ? <Check className="h-5 w-5 text-green-600 mx-auto" /> : <X className="h-5 w-5 text-muted-foreground mx-auto" />}</td>
                  <td className="p-4 text-center">{row.competitor ? <Check className="h-5 w-5 text-green-600 mx-auto" /> : <X className="h-5 w-5 text-muted-foreground mx-auto" />}</td>
                  <td className="p-4 text-center bg-primary/5">{row.us ? <Check className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-muted-foreground mx-auto" />}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">How iPad Repair Works at Tech Medics Macon</h2>
          <p className="text-center text-muted-foreground mb-12">Getting your iPad fixed in Macon is simple – no appointment needed</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Walk In or Call", desc: "Visit us at 3742 Eisenhower Parkway in Macon, GA or call (478) 259-6371 for a quote. Walk-ins always welcome." },
              { step: "2", title: "Free Diagnosis", desc: "Our certified technicians inspect your iPad and provide a free diagnosis with an exact repair quote – no hidden fees." },
              { step: "3", title: "Expert Repair", desc: "Most iPad screen repairs take 1-2 hours. We use precision tools and high-quality replacement parts for every iPad repair." },
              { step: "4", title: "Quality Check", desc: "Every iPad repair is thoroughly tested – touch, display, and all functions. You leave with a 30-day warranty." },
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

      {/* SEO Content Block */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Macon&apos;s Best iPad Repair Service – All Models, Same-Day Fix</h2>
            <p className="text-muted-foreground mb-4">Looking for <strong>iPad repair near me in Macon, GA</strong>? Tech Medics Macon is your trusted local iPad repair expert. We fix <strong>cracked iPad screens</strong>, replace dying batteries, repair charging ports, and recover water-damaged iPads – all at our convenient <strong>3742 Eisenhower Parkway</strong> location.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">iPad Screen Replacement in Macon GA – Pro, Air, Mini &amp; Standard</h3>
            <p className="text-muted-foreground mb-4">We handle <strong>iPad screen replacement for every model</strong> including <strong>iPad Pro 12.9&rdquo;</strong>, <strong>iPad Pro 11&rdquo;</strong>, <strong>iPad Air</strong>, <strong>iPad Mini</strong>, and standard iPad. Our <strong>iPad screen repair in Macon</strong> uses high-quality digitizers and LCD panels that restore your iPad to like-new condition. Whether your iPad screen is cracked, shattered, or has touch issues – we can fix it, often the same day.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">iPad Battery Replacement in Macon – Restore All-Day Power</h3>
            <p className="text-muted-foreground mb-4">If your <strong>iPad battery drains fast</strong>, won&apos;t charge past 80%, or shows signs of swelling, you need an <strong>iPad battery replacement in Macon GA</strong>. Our technicians safely replace iPad batteries for all models, restoring the 10+ hour battery life you expect from your iPad.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Affordable iPad Repair – Save 30-50% vs Apple Store</h3>
            <p className="text-muted-foreground mb-4">Why drive to Atlanta for the Apple Store when Tech Medics in Macon offers the same quality <strong>iPad repair at 30-50% lower prices</strong>? Our <strong>iPad screen repair costs in Macon</strong> start at just $99, and every repair comes with a warranty. We serve all of <strong>Macon, Warner Robins, Byron, Perry, Forsyth</strong>, and surrounding Central Georgia communities.</p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Need iPad Repair in Macon GA? Get It Fixed Today</h2>
          <p className="text-xl text-muted-foreground mb-8">Walk in to 3742 Eisenhower Parkway, Macon, GA 31206 – no appointment needed</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"><a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a></Button>
            <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8"><a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a></Button>
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">iPad Repair Guides &amp; Resources</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { href: "/blog/ipad-screen-repair-macon", title: "iPad Screen Repair Guide", desc: "Complete guide to iPad screen repair costs and what to expect" },
              { href: "/blog/tech-medics-vs-apple-store-repair", title: "Tech Medics vs Apple Store", desc: "Compare costs, warranty, and turnaround times" },
              { href: "/blog/oem-vs-aftermarket-iphone-screens", title: "OEM vs Aftermarket Parts", desc: "Understanding repair part quality and options" },
            ].map((p) => (
              <Link key={p.href} href={p.href} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-2 text-foreground">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center"><Link href="/blog" className="text-primary hover:underline font-semibold">View All Repair Guides →</Link></div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">Other Apple Device Repair Services in Macon</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link href="/macon/iphone" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">iPhone Repair in Macon</h3><p className="text-muted-foreground">Screen repair from $79, battery replacement &amp; more for all iPhone models</p></Link>
            <Link href="/macon/macbook" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">MacBook Repair in Macon</h3><p className="text-muted-foreground">Expert MacBook repairs – screen, keyboard, battery &amp; logic board for Air &amp; Pro</p></Link>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">Serving All Macon Neighborhoods &amp; Nearby Cities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {["Downtown", "North Macon", "Vineville", "Ingleside", "East Macon", "South Macon", "Rutland"].map((n) => (
              <Link key={n} href={`/macon/${n.toLowerCase().replace(/ /g, "-")}`} className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-shadow"><span className="font-medium text-foreground">{n}</span></Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
