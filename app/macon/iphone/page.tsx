import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Check, X, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import FAQSection from "../../components/FAQSection";

export const metadata: Metadata = {
  title: "iPhone Repair Macon GA | Same-Day Screen Fix $79+ | (478) 259-6371",
  description: "Macon GA's top iPhone repair shop – 2026 models ready. iPhone 16e, 16 Pro Max, 15, 14 screen replacement affordable pricing. 30-minute same-day service, no appointment. Walk-ins at 3742 Eisenhower Pkwy. Call (478) 259-6371.",
  keywords: ["iPhone repair Macon GA", "iPhone screen repair Macon", "iPhone screen replacement Macon GA", "cracked iPhone screen repair Macon", "iPhone battery replacement Macon GA", "iPhone charging port repair Macon", "iPhone water damage repair Macon", "iPhone repair near me Macon", "same day iPhone repair Macon GA", "iPhone 16e screen repair Macon", "iPhone 16 Pro Max repair Macon GA", "iPhone 16e repair Macon", "best iPhone repair Macon Georgia 2026", "phone repair Macon GA"],
  alternates: { canonical: "https://techmedicsmacon.com/macon/iphone" },
  openGraph: {
    title: "iPhone Repair Macon GA | Same-Day Screen & Battery Fix Call for quote",
    description: "Macon's #1 iPhone repair shop. Screen replacement $79+, battery $59+. 30-min service, walk-ins welcome. All iPhone models serviced.",
    url: "https://techmedicsmacon.com/macon/iphone",
    images: [{ url: "/images/iphone-screen-repair-macon.webp", width: 800, height: 600, alt: "iPhone screen repair service in Macon GA" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://techmedicsmacon.com" },
    { "@type": "ListItem", position: 2, name: "Macon", item: "https://techmedicsmacon.com" },
    { "@type": "ListItem", position: 3, name: "iPhone Repair", item: "https://techmedicsmacon.com/macon/iphone" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://techmedicsmacon.com/macon/iphone#service",
  serviceType: "iPhone Repair",
  name: "iPhone Repair Service in Macon GA",
  description: "Professional iPhone screen repair, battery replacement, charging port repair, and water damage recovery in Macon, Georgia. iPhone 16e, 16 Pro Max, and all models serviced same-day.",
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
    "@type": "OfferCatalog", name: "iPhone Repair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Screen Repair", description: "Same-day cracked iPhone screen replacement for all models including iPhone 16e, 16 Pro Max, 15, 14" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "79", priceCurrency: "USD", unitText: "starting at" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Battery Replacement", description: "Quick iPhone battery replacement to fix fast-draining or swollen batteries" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "59", priceCurrency: "USD", unitText: "starting at" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Charging Port Repair", description: "Fix iPhone not charging, loose port, or slow charging issues" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "69", priceCurrency: "USD", unitText: "starting at" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Water Damage Repair", description: "Emergency water damage repair and data recovery for all iPhone models" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Camera Repair", description: "Front and rear camera repair and replacement" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Speaker Repair", description: "Fix muffled, quiet, or non-working iPhone speakers" } },
    ],
  },
};

const faqData = [
  { question: "How long does iPhone screen repair take in Macon, GA?", answer: "Most iPhone screen repairs — including the iPhone 16e and 16 Pro Max — are completed in 30 minutes or less. Walk into our Eisenhower Parkway location any time during business hours. No appointment needed." },
  { question: "How much does iPhone screen repair cost in Macon?", answer: "We offer competitive pricing for all iPhone models. Call (478) 259-6371 for a free quote for your specific model." },
  { question: "Do you repair the new iPhone 16e and iPhone 16 Pro Max?", answer: "Yes! We stock parts for every 2026 iPhone model including the iPhone 16e, 16, 16 Plus, 16 Pro, and 16 Pro Max, plus all older generations back to iPhone 7." },
  { question: "Is there a warranty on iPhone screen repairs?", answer: "Every iPhone screen repair comes with our 30-day warranty covering both parts and labor. If anything goes wrong, bring it back and we'll make it right." },
  { question: "Can you fix my iPhone battery that drains quickly?", answer: "Absolutely — battery replacement is our most popular service. If your iPhone dies by noon or shows 'Service' in Battery Health, we can swap it in about 30 minutes. We carry batteries for every model from iPhone 7 through iPhone 16 Pro Max." },
  { question: "Do I need an appointment for iPhone repair in Macon?", answer: "No appointment necessary. Walk-ins welcome Monday-Friday 10am-6pm and Saturday 10am-5pm. Most customers are in and out within 30-45 minutes." },
  { question: "Where can I find iPhone repair near me in Macon, GA?", answer: "Tech Medics is at 3742 Eisenhower Parkway, Macon GA 31206 — right off I-75. We serve all of Macon plus Warner Robins, Byron, Perry, and Forsyth." },
  { question: "Do you fix water damaged iPhones?", answer: "Yes — we use ultrasonic cleaning and micro-soldering to recover water-damaged iPhones that other shops turn away. Bring it in as quickly as possible after water exposure for the best results." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };

const testimonials = [
  { name: "Sarah M.", rating: 5, text: "Cracked my iPhone 16 screen at work and they fixed it in 25 minutes. Screen looks perfect — can't even tell it was broken. Best iPhone repair in Macon.", service: "iPhone 16 Screen Repair" },
  { name: "James T.", rating: 5, text: "My iPhone 15 battery was dying by lunch every day. They swapped it in 30 minutes and now it lasts all day. Way cheaper than Apple.", service: "iPhone Battery Replacement" },
  { name: "Emily R.", rating: 5, text: "Dropped my iPhone in the pool and thought it was done. Tech Medics recovered it and saved all my photos. Miracle workers!", service: "iPhone Water Damage Repair" },
];

const comparisonData = [
  { feature: "Warranty Included", diy: false, competitor: true, us: true },
  { feature: "Same-Day Service", diy: false, competitor: false, us: true },
  { feature: "Quality Parts", diy: false, competitor: true, us: true },
  { feature: "Expert Technicians", diy: false, competitor: true, us: true },
  { feature: "No Appointment Needed", diy: true, competitor: false, us: true },
  { feature: "30-Minute Repairs", diy: false, competitor: false, us: true },
  { feature: "Local Support", diy: false, competitor: false, us: true },
  { feature: "Price Match Guarantee", diy: false, competitor: false, us: true },
];

export default function IPhonePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-3 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li><Link href="/macon/iphone" className="hover:text-primary">Macon</Link></li>
          <li>/</li>
          <li className="text-foreground font-medium">iPhone Repair</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">iPhone Screen Repair Near Me in Macon, GA</h1>
              <p className="text-xl text-muted-foreground mb-8">Looking for iPhone repair near me? We're located at 3742 Eisenhower Parkway in Macon, GA. Expert iPhone repair services including screen replacements, battery replacements, charging port repairs, and more. Fast, reliable service with no appointment needed - most repairs completed in 30 minutes or less.</p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call Now for Quote</a>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/iphone-screen-repair-macon.webp" alt="iPhone screen repair and battery replacement service in Macon GA" width="800" height="600" className="w-full h-auto" loading="eager" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">iPhone Repair Services in Macon, GA</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Screen Repair", desc: "Cracked or broken iPhone screen? We replace screens for all iPhone models quickly and affordably. High-quality parts with warranty included." },
              { title: "Battery Replacement", desc: "Is your iPhone battery draining fast? We replace iPhone batteries with premium quality parts to restore your phone's performance." },
              { title: "Charging Port Repair", desc: "iPhone not charging properly? We fix charging port issues, replace damaged ports, and ensure reliable charging." },
              { title: "Camera Repair", desc: "Front or back camera not working? We repair and replace iPhone cameras to restore photo quality." },
              { title: "Water Damage Repair", desc: "Dropped your iPhone in water? We specialize in water damage repair and recovery services." },
              { title: "Speaker & Microphone", desc: "Audio issues? We repair and replace iPhone speakers and microphones for crystal clear sound." },
            ].map((s) => (
              <article key={s.title} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
          <div className="bg-secondary/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Why Choose Tech Medics Macon for iPhone Repair?</h3>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              {[
                { stat: "30 Min", desc: "Most repairs completed in 30 minutes or less" },
                { stat: "No Appointment", desc: "Walk-ins welcome, no appointment needed" },
                { stat: "Warranty", desc: "All repairs backed by warranty" },
                { stat: "Local", desc: "Conveniently located on Eisenhower Parkway" },
              ].map((s) => (
                <div key={s.stat}><div className="text-3xl font-bold text-primary mb-2">{s.stat}</div><p className="text-muted-foreground">{s.desc}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Why Choose Us for iPhone Repair in Macon?</h2>
          <p className="text-center text-muted-foreground mb-12">Compare your repair options and see the Tech Medics difference</p>
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

      {/* FAQ */}
      <FAQSection deviceType="iPhone" faqs={faqData} />

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">What Our Customers Say</h2>
          <p className="text-center text-muted-foreground mb-12">Real reviews from satisfied customers in Macon, GA</p>
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

      {/* Pricing CTA */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Affordable iPhone Repair Pricing</h2>
          <p className="text-xl text-muted-foreground mb-8">We offer competitive pricing for all iPhone models. Every repair includes a 30-day warranty and expert service.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">How iPhone Repair Works at Tech Medics Macon</h2>
          <p className="text-center text-muted-foreground mb-12">Getting your iPhone fixed in Macon is quick and easy – no appointment needed</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Walk In or Call", desc: "Visit us at 3742 Eisenhower Parkway in Macon, GA or call (478) 259-6371 for a quote. No appointment needed – walk-ins welcome." },
              { step: "2", title: "Free Diagnosis", desc: "Our certified technicians will inspect your iPhone and provide a free diagnosis with an exact repair quote – no hidden fees." },
              { step: "3", title: "Fast Repair", desc: "Most iPhone screen repairs take just 30 minutes. We use high-quality parts and precision tools for a perfect repair every time." },
              { step: "4", title: "Quality Check", desc: "Every iPhone repair is thoroughly tested before handoff. You leave with a working device and a 30-day warranty for peace of mind." },
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
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">The Best iPhone Repair Shop in Macon, Georgia</h2>
            <p className="text-muted-foreground mb-4">Looking for <strong>iPhone repair near me in Macon, GA</strong>? Tech Medics Macon is the highest-rated iPhone repair shop in Central Georgia, specializing in fast, affordable <strong>iPhone screen repair in Macon</strong>. Whether you have a <strong>cracked iPhone screen</strong>, a dying battery, a broken charging port, or water damage, our expert technicians can fix it – usually in 30 minutes or less.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">iPhone Screen Repair in Macon GA – All Models</h3>
            <p className="text-muted-foreground mb-4">We repair every iPhone model from the <strong>iPhone 8</strong> and <strong>iPhone SE</strong> all the way through the latest <strong>iPhone 16 Pro Max</strong>. Our <strong>iPhone screen replacement service in Macon</strong> uses high-quality LCD and OLED displays that match Apple&apos;s specifications. Whether you dropped your iPhone on concrete, sat on it, or it fell out of your car – we&apos;ve seen it all and can fix it. <strong>iPhone screen repair costs in Macon</strong> start at just $79, which is 30-50% less than Apple Store pricing.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">iPhone Battery Replacement in Macon – Same Day</h3>
            <p className="text-muted-foreground mb-4">Is your <strong>iPhone battery dying fast</strong>? If your iPhone won&apos;t hold a charge, shuts off randomly, or shows a &ldquo;Service&rdquo; battery warning, you need an <strong>iPhone battery replacement in Macon GA</strong>. Our technicians replace iPhone batteries in about 30 minutes using premium cells that restore your phone&apos;s all-day battery life. We service all models including <strong>iPhone 13 battery replacement</strong>, <strong>iPhone 14 battery replacement</strong>, and <strong>iPhone 15 battery replacement</strong> in Macon.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Why Macon Residents Choose Tech Medics for iPhone Repair</h3>
            <p className="text-muted-foreground mb-4">Unlike mail-in repair services or the Apple Store in Atlanta, Tech Medics is right here in Macon at <strong>3742 Eisenhower Parkway</strong>. We offer <strong>same-day iPhone repair</strong> with no appointment required. Our certified technicians have repaired thousands of iPhones, and every repair comes with a warranty. We&apos;re proud to serve all of Macon including <strong>Vineville, North Macon, Ingleside, Downtown, East Macon, South Macon</strong>, and nearby cities like <strong>Warner Robins, Byron, Perry, and Forsyth</strong>.</p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Need iPhone Repair in Macon GA? Get It Fixed Today</h2>
          <p className="text-xl text-muted-foreground mb-8">Walk in to 3742 Eisenhower Parkway, Macon, GA 31206 – no appointment needed. Or call for a free quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"><a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a></Button>
            <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8"><a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a></Button>
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">iPhone Repair Guides</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { href: "/blog/iphone-screen-repair-macon-ga", title: "Screen Repair Complete Guide", desc: "Costs, quality options, and what to expect" },
              { href: "/blog/iphone-battery-replacement-macon", title: "Battery Replacement Guide", desc: "Signs, costs, and same-day service" },
              { href: "/blog/water-damaged-iphone-repair", title: "Water Damage Repair", desc: "Emergency steps and professional repair" },
              { href: "/blog/iphone-dying-fast-after-charging", title: "iPhone Dying Fast?", desc: "11 proven fixes for battery drain" },
              { href: "/blog/iphone-not-turning-on-fix", title: "iPhone Won't Turn On", desc: "Troubleshooting and repair options" },
              { href: "/blog/iphone-repair-near-me-macon", title: "iPhone Repair Near Me", desc: "Your local Macon repair expert" },
            ].map((p) => (
              <Link key={p.href} href={p.href} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-2 text-foreground">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center"><Link href="/blog" className="text-primary hover:underline font-semibold">View All iPhone Repair Guides →</Link></div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">Other Apple Device Repair Services</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link href="/macon/ipad" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">iPad Repair in Macon</h3><p className="text-muted-foreground">Screen repair, battery replacement &amp; more for all iPad models</p></Link>
            <Link href="/macon/macbook" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">MacBook Repair in Macon</h3><p className="text-muted-foreground">Expert MacBook repairs for all models including Pro, Air &amp; Retina</p></Link>
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
