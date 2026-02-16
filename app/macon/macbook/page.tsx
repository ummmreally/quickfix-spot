import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import FAQSection from "../../components/FAQSection";

export const metadata: Metadata = {
  title: "MacBook Repair Macon GA | Screen, Keyboard & Battery Service",
  description: "Expert MacBook repair in Macon GA. Screen replacement, keyboard repair, battery service, logic board diagnostics. MacBook Air & Pro. Call (478) 259-6371.",
  keywords: ["MacBook repair Macon GA", "MacBook screen replacement", "MacBook keyboard repair", "MacBook battery replacement Macon"],
  alternates: { canonical: "https://techmedicsmacon.com/macon/macbook" },
  openGraph: { title: "MacBook Repair Macon GA | Screen, Keyboard & Battery Service", url: "https://techmedicsmacon.com/macon/macbook" },
};

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service", serviceType: "MacBook Repair",
  provider: { "@type": "LocalBusiness", name: "Tech Medics Macon", telephone: "(478) 259-6371", address: { "@type": "PostalAddress", streetAddress: "3742 Eisenhower Parkway", addressLocality: "Macon", addressRegion: "GA", postalCode: "31206" } },
  hasOfferCatalog: { "@type": "OfferCatalog", name: "MacBook Repair Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Screen Replacement" }, priceSpecification: { "@type": "PriceSpecification", minPrice: "299.00", priceCurrency: "USD" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Battery Replacement" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Keyboard Repair" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Logic Board Repair" } },
  ]},
};

const faqs = [
  { question: "How much does MacBook screen repair cost in Macon GA?", answer: "MacBook screen repair starts at $299 for MacBook Air models. MacBook Pro screen replacements range from $399-$699 depending on the model and year. Call (478) 259-6371 for an exact quote." },
  { question: "Can you fix MacBook keyboard issues?", answer: "Yes! We repair butterfly and Magic Keyboard issues including sticky keys, unresponsive keys, and complete keyboard replacements for all MacBook models." },
  { question: "How long does MacBook repair take?", answer: "Most MacBook repairs take 2-4 hours. Screen replacements and battery swaps are often same-day. Logic board repairs may take 1-3 business days." },
  { question: "Do you repair MacBook Air and MacBook Pro?", answer: "Yes! We repair all MacBook models including MacBook Air (M1, M2, M3), MacBook Pro (13\", 14\", 16\"), and older Intel models." },
  { question: "Can you fix a MacBook that won't turn on?", answer: "Yes! We diagnose and repair MacBooks that won't power on, including logic board issues, battery failures, and power connector problems." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };

export default function MacBookPage() {
  return (
    <>
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
              <p className="text-xl text-muted-foreground mb-8">Expert MacBook repair for Air &amp; Pro models. Screen replacement, keyboard repair, battery service, logic board diagnostics, and more. Fast turnaround at 3742 Eisenhower Parkway.</p>
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

      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Fix Your MacBook?</h2>
          <p className="text-xl text-muted-foreground mb-8">Visit us at 3742 Eisenhower Parkway, Macon, GA 31206</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"><a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a></Button>
            <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8"><a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a></Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">Other Apple Device Repair Services</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link href="/macon/iphone" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">iPhone Repair in Macon</h3><p className="text-muted-foreground">Screen repair, battery replacement &amp; more for all iPhone models</p></Link>
            <Link href="/macon/ipad" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">iPad Repair in Macon</h3><p className="text-muted-foreground">Screen replacement, glass repair &amp; battery service for all iPads</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
