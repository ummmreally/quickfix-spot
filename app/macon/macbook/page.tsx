import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star, Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import FAQSection from "../../components/FAQSection";

export const metadata: Metadata = {
  title: "MacBook Repair Macon GA | Screen & Keyboard Fix $299+ | (478) 259-6371",
  description: "Macon GA's top MacBook repair shop – 2026 models ready. MacBook Air M4, Pro M4 Pro/Max screen replacement from $299, keyboard repair, battery service. Same-day turnaround at 3742 Eisenhower Pkwy. Call (478) 259-6371.",
  keywords: ["MacBook repair Macon GA", "MacBook screen repair Macon", "MacBook screen replacement Macon GA", "MacBook keyboard repair Macon", "MacBook battery replacement Macon GA", "MacBook Air M4 repair Macon", "MacBook Pro M4 repair Macon", "MacBook logic board repair Macon", "MacBook repair near me Macon", "MacBook not turning on Macon", "laptop repair Macon GA", "Apple laptop repair Macon", "MacBook M4 M3 M2 repair Macon", "best MacBook repair Macon Georgia 2026", "same day MacBook repair Macon GA"],
  alternates: { canonical: "https://techmedicsmacon.com/macon/macbook" },
  openGraph: {
    title: "MacBook Repair Macon GA | Screen, Keyboard & Battery Fix from $299",
    description: "Macon's #1 MacBook repair shop. Screen replacement $299+, keyboard repair, battery service. MacBook Air & Pro. Same-day service.",
    url: "https://techmedicsmacon.com/macon/macbook",
    images: [{ url: "/images/macbook-repair-macon.webp", width: 800, height: 600, alt: "MacBook repair service in Macon GA" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://techmedicsmacon.com" },
    { "@type": "ListItem", position: 2, name: "Macon", item: "https://techmedicsmacon.com" },
    { "@type": "ListItem", position: 3, name: "MacBook Repair", item: "https://techmedicsmacon.com/macon/macbook" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://techmedicsmacon.com/macon/macbook#service",
  serviceType: "MacBook Repair",
  name: "MacBook Repair Service in Macon GA",
  description: "Professional MacBook screen replacement, keyboard repair, battery service, and logic board diagnostics. MacBook Air M4, Pro M4 Pro/Max, and all older models serviced same-day in Macon, Georgia.",
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
  hasOfferCatalog: { "@type": "OfferCatalog", name: "MacBook Repair Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Screen Replacement", description: "MacBook Air M4, Pro M4 Pro/Max, and all older model Retina screen replacement" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "299", priceCurrency: "USD", unitText: "starting at" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Battery Replacement", description: "MacBook battery replacement for swollen or dying batteries" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Keyboard Repair", description: "Butterfly and Magic Keyboard repair and replacement" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Logic Board Repair", description: "Component-level logic board diagnostics and repair" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook SSD Upgrade", description: "SSD and storage upgrades for compatible MacBook models" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Trackpad Repair", description: "Trackpad and port repair for MacBook Air and Pro" } },
  ]},
};

const faqs = [
  { question: "How much does MacBook screen repair cost in Macon GA?", answer: "MacBook Air screen repair starts at $299 (Intel) up to $499 for the MacBook Air M4. MacBook Pro screen replacements range from $399-$699 depending on model and size. Call (478) 259-6371 for an exact quote." },
  { question: "Can you fix MacBook keyboard issues?", answer: "Yes! We repair butterfly and Magic Keyboard issues including sticky keys, liquid damage, and complete keyboard replacements. We service the latest MacBook Air M4 and MacBook Pro M4 keyboards as well as all older models." },
  { question: "How long does MacBook repair take?", answer: "Most MacBook screen and battery repairs are same-day. Apple Silicon models (M1-M4) typically take 2-4 hours. Logic board component-level repair may take 1-3 business days depending on complexity." },
  { question: "Do you repair the new MacBook Air M4 and MacBook Pro M4?", answer: "Yes! We stock parts for every 2026 MacBook model: MacBook Air M4 (13\" and 15\"), MacBook Pro M4, M4 Pro, and M4 Max (14\" and 16\"), plus all M3, M2, M1, and Intel models." },
  { question: "Can you fix a MacBook that won't turn on?", answer: "Absolutely. We diagnose dead MacBooks using component-level board diagnostics. Common causes include liquid damage, failed power ICs, dead batteries, and corroded connectors — we fix them all." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };

const pricingData = [
  { model: "MacBook Air (Intel)", screen: "$299", battery: "$149", keyboard: "$199", time: "2-4 hrs" },
  { model: "MacBook Air M1", screen: "$349", battery: "$169", keyboard: "$229", time: "2-4 hrs" },
  { model: "MacBook Air M2", screen: "$399", battery: "$179", keyboard: "$249", time: "2-4 hrs" },
  { model: "MacBook Air M3", screen: "$449", battery: "$189", keyboard: "$269", time: "Same day" },
  { model: "MacBook Air M4", screen: "$499", battery: "$199", keyboard: "$289", time: "Same day" },
  { model: 'MacBook Pro 13" (Intel)', screen: "$399", battery: "$179", keyboard: "$249", time: "2-4 hrs" },
  { model: 'MacBook Pro 13" M1/M2', screen: "$449", battery: "$189", keyboard: "$269", time: "Same day" },
  { model: 'MacBook Pro 14" (M3/M4)', screen: "$549", battery: "$199", keyboard: "$299", time: "Same day" },
  { model: 'MacBook Pro 16" (M3/M4)', screen: "$699", battery: "$219", keyboard: "$349", time: "1-2 days" },
];

const comparisonData = [
  { feature: "Warranty Included", diy: false, competitor: true, us: true },
  { feature: "Same-Day Service", diy: false, competitor: false, us: true },
  { feature: "Quality Parts", diy: false, competitor: true, us: true },
  { feature: "Expert Technicians", diy: false, competitor: true, us: true },
  { feature: "No Appointment Needed", diy: true, competitor: false, us: true },
  { feature: "M1/M2/M3/M4 Expertise", diy: false, competitor: false, us: true },
  { feature: "Component-Level Repair", diy: false, competitor: false, us: true },
  { feature: "Free Diagnosis", diy: false, competitor: false, us: true },
];

export default function MacBookPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-3 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-primary">Home</Link></li><li>/</li>
          <li><Link href="/macon/macbook" className="hover:text-primary">Macon</Link></li><li>/</li>
          <li className="text-foreground font-medium">MacBook Repair</li>
        </ol>
      </nav>

      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">MacBook Repair in Macon, GA</h1>
              <p className="text-xl text-muted-foreground mb-8">MacBook Air M4, Pro M4 Pro/Max &amp; every older model — Retina display replacement from $299, keyboard repair, battery service, logic board diagnostics. Same-day turnaround at 3742 Eisenhower Parkway.</p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call Now for Quote</a>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/macbook-repair-macon.webp" alt="MacBook repair and screen replacement service in Macon GA" width="800" height="600" className="w-full h-auto" loading="eager" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">MacBook Repair Services in Macon, GA</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Screen Replacement", desc: "Cracked or damaged MacBook display? We replace Retina and non-Retina screens for all MacBook Air and Pro models." },
              { title: "Keyboard Repair", desc: "Sticky, unresponsive, or broken keys? We fix butterfly keyboard issues and replace full keyboard assemblies." },
              { title: "Battery Replacement", desc: "MacBook battery swelling or not holding charge? We replace batteries for all models to restore portable performance." },
              { title: "Logic Board Repair", desc: "MacBook not turning on or experiencing random shutdowns? We diagnose and repair logic board issues at component level." },
              { title: "SSD & Storage Upgrades", desc: "Need more storage or faster performance? We upgrade SSDs and storage in compatible MacBook models." },
              { title: "Trackpad & Port Repair", desc: "Trackpad not clicking or ports not working? We repair and replace trackpads, USB-C ports, and other components." },
            ].map(s => (
              <article key={s.title} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
          <div className="bg-secondary/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">MacBook Models We Service</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {["MacBook Air M3", "MacBook Air M2", "MacBook Air M1", "MacBook Pro 16\"", "MacBook Pro 14\"", "MacBook Pro 13\"", "Intel MacBooks", "Older Models"].map(m => (
                <div key={m} className="bg-card border border-border rounded-lg p-3 text-center"><span className="font-medium text-foreground">{m}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection deviceType="MacBook" faqs={faqs} />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">What Our Customers Say</h2>
          <p className="text-center text-muted-foreground mb-12">Real reviews from MacBook repair customers</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Karen W.", text: "MacBook Air keyboard wasn't working right. They diagnosed and fixed it quickly. Great MacBook repair shop!", service: "MacBook Keyboard" },
              { name: "Steven J.", text: "Professional MacBook screen repair. They kept me updated throughout the process and the work is flawless.", service: "MacBook Screen" },
              { name: "David L.", text: "My MacBook Pro wouldn't turn on. They fixed a logic board issue and saved all my files. Excellent service!", service: "Logic Board Repair" },
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">MacBook Repair Cost in Macon, GA – Transparent Pricing</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">How much does MacBook screen repair cost? See our prices below – save 30-50% vs Apple Store. Call <a href="tel:(478)259-6371" className="text-primary font-semibold">(478) 259-6371</a> for an exact quote.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b border-border bg-primary text-primary-foreground">
                  <th className="text-left p-4 font-bold">MacBook Model</th>
                  <th className="text-center p-4 font-bold">Screen Repair</th>
                  <th className="text-center p-4 font-bold">Battery</th>
                  <th className="text-center p-4 font-bold">Keyboard</th>
                  <th className="text-center p-4 font-bold">Repair Time</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row) => (
                  <tr key={row.model} className="border-b border-border last:border-0 hover:bg-secondary/30">
                    <td className="p-4 font-semibold text-foreground">{row.model}</td>
                    <td className="p-4 text-center text-foreground font-medium">{row.screen}</td>
                    <td className="p-4 text-center text-foreground">{row.battery}</td>
                    <td className="p-4 text-center text-foreground">{row.keyboard}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">*Prices are estimates and may vary. Logic board repair quoted on diagnosis. All repairs include a 30-day warranty.</p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Why Choose Us for MacBook Repair in Macon?</h2>
          <p className="text-center text-muted-foreground mb-12">Compare your MacBook repair options and see the Tech Medics difference</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">How MacBook Repair Works at Tech Medics Macon</h2>
          <p className="text-center text-muted-foreground mb-12">Getting your MacBook fixed in Macon is straightforward – no appointment needed</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Bring It In", desc: "Visit us at 3742 Eisenhower Parkway in Macon, GA or call (478) 259-6371 for a quote. Walk-ins always welcome." },
              { step: "2", title: "Free Diagnosis", desc: "Our certified technicians run full diagnostics on your MacBook and provide an exact repair quote – no hidden fees or surprises." },
              { step: "3", title: "Expert Repair", desc: "Our technicians repair your MacBook using high-quality parts and precision tools. Most repairs are same-day or next-day." },
              { step: "4", title: "Quality Tested", desc: "Every MacBook repair is thoroughly tested – display, keyboard, trackpad, battery, and all ports verified. 30-day warranty included." },
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
            <h2 className="text-3xl font-bold mb-6 text-foreground">Macon&apos;s Most Trusted MacBook Repair Shop</h2>
            <p className="text-muted-foreground mb-4">Looking for <strong>MacBook repair near me in Macon, GA</strong>? Tech Medics Macon is Central Georgia&apos;s premier MacBook repair shop, offering expert <strong>MacBook screen replacement</strong>, <strong>keyboard repair</strong>, <strong>battery replacement</strong>, and <strong>logic board diagnostics</strong> for all MacBook Air and MacBook Pro models.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">MacBook Screen Repair in Macon GA – Air &amp; Pro Models</h3>
            <p className="text-muted-foreground mb-4">A cracked or damaged <strong>MacBook screen</strong> doesn&apos;t mean you need a new laptop. Our <strong>MacBook screen replacement service in Macon</strong> covers all models from older Intel MacBooks to the latest <strong>MacBook Air M3</strong> and <strong>MacBook Pro 14&rdquo; and 16&rdquo;</strong>. We replace Retina displays with high-quality panels that match Apple&apos;s specifications. <strong>MacBook screen repair costs in Macon</strong> start at $299 – that&apos;s 30-50% less than Apple Store pricing.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">MacBook Keyboard Repair in Macon – Butterfly &amp; Magic Keyboard</h3>
            <p className="text-muted-foreground mb-4">Sticky keys, unresponsive keys, or double-typing? <strong>MacBook keyboard problems</strong> are one of the most common issues we fix. Whether you have a butterfly keyboard MacBook or a newer Magic Keyboard model, our technicians perform full <strong>MacBook keyboard repair and replacement in Macon GA</strong>. We also fix trackpad issues, USB-C port problems, and speaker malfunctions.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">MacBook Battery &amp; Logic Board Repair in Macon</h3>
            <p className="text-muted-foreground mb-4">If your <strong>MacBook battery is swelling</strong>, draining fast, or your MacBook won&apos;t turn on, we can help. Our <strong>MacBook battery replacement service in Macon</strong> restores portable performance for all models. For more complex issues, we offer <strong>component-level logic board repair</strong> – diagnosing and fixing power issues, random shutdowns, and no-boot problems that other shops can&apos;t handle.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Save Money on MacBook Repair in Macon vs Apple Store</h3>
            <p className="text-muted-foreground mb-4">Don&apos;t drive to Atlanta for the Apple Store. Tech Medics in Macon offers the same quality <strong>MacBook repair at significantly lower prices</strong>, with faster turnaround. Every repair comes with a warranty. We proudly serve all of <strong>Macon, Warner Robins, Byron, Perry, Forsyth</strong>, and surrounding Central Georgia communities.</p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Need MacBook Repair in Macon GA? Get It Fixed Today</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">MacBook Repair Guides &amp; Resources</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { href: "/blog/macbook-repair-macon-ga", title: "MacBook Repair Complete Guide", desc: "Everything you need to know about MacBook repairs in Macon" },
              { href: "/blog/macbook-screen-repair-cost-macon", title: "MacBook Screen Repair Costs", desc: "Detailed pricing breakdown for all MacBook models" },
              { href: "/blog/tech-medics-vs-apple-store-repair", title: "Tech Medics vs Apple Store", desc: "Compare costs, warranty, and turnaround times" },
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
            <Link href="/macon/ipad" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">iPad Repair in Macon</h3><p className="text-muted-foreground">Screen replacement from $99, glass repair &amp; battery service for all iPads</p></Link>
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
