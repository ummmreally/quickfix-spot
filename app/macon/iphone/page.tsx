import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Check, X, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import FAQSection from "../../components/FAQSection";

export const metadata: Metadata = {
  title: "iPhone Repair Macon GA | Same-Day Screen & Battery Fix",
  description: "Expert iPhone repair in Macon GA. Screen replacement $79+, battery $59+. Most repairs in 30 min. Walk-ins welcome at 3742 Eisenhower Pkwy.",
  keywords: ["iPhone repair Macon GA", "iPhone screen repair", "iPhone battery replacement", "cracked iPhone screen Macon"],
  alternates: { canonical: "https://techmedicsmacon.com/macon/iphone" },
  openGraph: { title: "iPhone Repair Macon GA | Same-Day Screen & Battery Fix", url: "https://techmedicsmacon.com/macon/iphone" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "iPhone Repair",
  provider: { "@type": "LocalBusiness", name: "Tech Medics Macon", telephone: "(478) 259-6371", address: { "@type": "PostalAddress", streetAddress: "3742 Eisenhower Parkway", addressLocality: "Macon", addressRegion: "GA", postalCode: "31206" } },
  areaServed: { "@type": "City", name: "Macon", containedIn: { "@type": "State", name: "Georgia" } },
  hasOfferCatalog: {
    "@type": "OfferCatalog", name: "iPhone Repair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Screen Repair" }, priceSpecification: { "@type": "PriceSpecification", minPrice: "79.00", priceCurrency: "USD" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Battery Replacement" }, priceSpecification: { "@type": "PriceSpecification", minPrice: "59.00", priceCurrency: "USD" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Charging Port Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Water Damage Repair" } },
    ],
  },
};

const faqData = [
  { question: "How long does iPhone screen repair take in Macon, GA?", answer: "Most iPhone screen repairs are completed in 30 minutes or less. We offer same-day service with no appointment needed. Simply walk into our Eisenhower Parkway location and we'll get your iPhone fixed quickly." },
  { question: "How much does iPhone screen repair cost in Macon?", answer: "iPhone screen repair costs vary by model. Prices typically range from $79 to $329 depending on your iPhone model. Call us at (478) 259-6371 for an exact quote for your specific iPhone model." },
  { question: "Do you repair all iPhone models?", answer: "Yes! We repair all iPhone models including the latest iPhone 15, 14, 13, 12, 11, XS, XR, X, 8, 7, and older models. We stock parts for all major iPhone models for fast same-day repairs." },
  { question: "Is there a warranty on iPhone screen repairs?", answer: "Yes, all our iPhone screen repairs come with a 30-day warranty covering our workmanship and parts." },
  { question: "Can you fix my iPhone battery that drains quickly?", answer: "Absolutely! iPhone battery replacement is one of our most popular services. If your iPhone battery drains fast or won't hold a charge, we can replace it with a new battery in about 30 minutes." },
  { question: "Do I need an appointment for iPhone repair in Macon?", answer: "No appointment necessary! We welcome walk-ins during our business hours Monday-Friday 10am-6pm and Saturday 10am-5pm." },
  { question: "Where can I find iPhone repair near me in Macon, GA?", answer: "Tech Medics Macon is conveniently located at 3742 Eisenhower Parkway in Macon, GA 31206. We serve all of Macon including Vineville, Ingleside, North Macon, and East Macon." },
  { question: "Do you fix water damaged iPhones?", answer: "Yes, we specialize in iPhone water damage repair. If you dropped your iPhone in water, bring it to us immediately for the best chance of full recovery." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };

const testimonials = [
  { name: "Sarah M.", rating: 5, text: "Cracked my iPhone 14 screen and they fixed it in 25 minutes! Great service and fair pricing.", service: "iPhone Screen Repair" },
  { name: "James T.", rating: 5, text: "My iPhone battery was dying so fast. They replaced it while I waited and now it lasts all day again.", service: "iPhone Battery Replacement" },
  { name: "Emily R.", rating: 5, text: "Dropped my iPhone in the pool. They saved all my photos and got it working again. Amazing service!", service: "iPhone Water Damage Repair" },
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
              <p className="text-xl text-muted-foreground mb-8">Looking for iPhone repair near me? We&apos;re located at 3742 Eisenhower Parkway in Macon, GA. Expert iPhone repair services including screen replacements, battery replacements, charging port repairs, and more. Fast, reliable service with no appointment needed - most repairs completed in 30 minutes or less.</p>
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

      {/* CTA */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Fix Your iPhone?</h2>
          <p className="text-xl text-muted-foreground mb-8">Visit us at 3742 Eisenhower Parkway, Macon, GA 31206 or call for a free quote</p>
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
