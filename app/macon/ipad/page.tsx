import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import FAQSection from "../../components/FAQSection";

export const metadata: Metadata = {
  title: "iPad Repair Macon GA | Screen Replacement & Battery Fix",
  description: "Expert iPad repair in Macon GA. Screen replacement for all iPad models – Pro, Air, Mini. Battery replacement, charging port repair. Walk-ins welcome. Call (478) 259-6371.",
  keywords: ["iPad repair Macon GA", "iPad screen repair", "iPad screen replacement Macon", "iPad battery replacement"],
  alternates: { canonical: "https://techmedicsmacon.com/macon/ipad" },
  openGraph: { title: "iPad Repair Macon GA | Screen Replacement & Battery Fix", url: "https://techmedicsmacon.com/macon/ipad" },
};

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service", serviceType: "iPad Repair",
  provider: { "@type": "LocalBusiness", name: "Tech Medics Macon", telephone: "(478) 259-6371", address: { "@type": "PostalAddress", streetAddress: "3742 Eisenhower Parkway", addressLocality: "Macon", addressRegion: "GA", postalCode: "31206" } },
  hasOfferCatalog: { "@type": "OfferCatalog", name: "iPad Repair Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPad Screen Replacement" }, priceSpecification: { "@type": "PriceSpecification", minPrice: "99.00", priceCurrency: "USD" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPad Battery Replacement" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPad Charging Port Repair" } },
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

export default function IPadPage() {
  return (
    <>
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

      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Fix Your iPad?</h2>
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
            <Link href="/macon/macbook" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">MacBook Repair in Macon</h3><p className="text-muted-foreground">Expert MacBook repairs for all models including Pro, Air &amp; Retina</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
