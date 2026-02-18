import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import FAQSection from "../../components/FAQSection";

export const metadata: Metadata = {
  title: "Screen Repair Macon GA | iPhone, iPad & MacBook | Same-Day Service | (478) 259-6371",
  description: "Cracked screen? Tech Medics Macon fixes iPhone, iPad & MacBook screens same-day. 30-minute service, no appointment needed. Walk-ins at 3742 Eisenhower Pkwy. Call (478) 259-6371.",
  keywords: ["screen repair Macon GA", "cracked screen repair Macon", "phone screen repair near me", "screen replacement Macon GA", "broken screen fix Macon", "iPhone screen repair Macon", "iPad screen repair Macon", "MacBook screen repair Macon", "same day screen repair Macon", "cheap screen repair Macon GA"],
  alternates: { canonical: "https://techmedicsmacon.com/macon/screen-repair" },
  openGraph: {
    title: "Screen Repair Macon GA | iPhone, iPad & MacBook Screens Fixed Same-Day",
    description: "Macon's #1 screen repair shop. iPhone, iPad & MacBook screens repaired same-day. 30-min service, walk-ins welcome.",
    url: "https://techmedicsmacon.com/macon/screen-repair",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://techmedicsmacon.com" },
    { "@type": "ListItem", position: 2, name: "Macon", item: "https://techmedicsmacon.com/macon" },
    { "@type": "ListItem", position: 3, name: "Screen Repair", item: "https://techmedicsmacon.com/macon/screen-repair" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://techmedicsmacon.com/macon/screen-repair#service",
  serviceType: "Screen Repair",
  name: "Screen Repair Service in Macon GA",
  description: "Professional screen repair for iPhone, iPad, and MacBook devices in Macon, Georgia. Same-day cracked screen replacement.",
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
    "@type": "OfferCatalog", name: "Screen Repair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Screen Repair" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "79", priceCurrency: "USD", unitText: "starting at" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPad Screen Repair" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "99", priceCurrency: "USD", unitText: "starting at" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Screen Repair" }, priceSpecification: { "@type": "UnitPriceSpecification", price: "299", priceCurrency: "USD", unitText: "starting at" } },
    ],
  },
};

const faqData = [
  { question: "How much does screen repair cost in Macon, GA?", answer: "iPhone screen repair starts at $79, iPad screen repair starts at $99, and MacBook screen repair starts at $299. Call (478) 259-6371 for an instant quote for your specific model." },
  { question: "How long does screen repair take?", answer: "Most iPhone screen repairs are completed in 30 minutes. iPad screens typically take 45-60 minutes. MacBook screen replacements take 1-2 hours depending on the model." },
  { question: "Do you use quality replacement screens?", answer: "Yes! We use premium OEM-equivalent screens that match Apple's specifications for color accuracy, brightness, and touch sensitivity. Every screen comes with a 30-day warranty." },
  { question: "Can you fix a completely shattered screen?", answer: "Absolutely. Whether your screen has a small crack or is completely shattered, we can replace it. We've repaired thousands of cracked screens in Macon." },
  { question: "Do I need an appointment for screen repair?", answer: "No appointment needed. Walk into our shop at 3742 Eisenhower Parkway during business hours (Mon-Fri 10-6, Sat 10-5) and we'll get started right away." },
  { question: "Will screen repair void my Apple warranty?", answer: "Our repairs use high-quality parts and are performed by certified technicians. We provide our own 30-day warranty on all screen repairs covering both parts and labor." },
  { question: "Can you fix touch screen issues without replacing the screen?", answer: "Sometimes touch issues are caused by software problems, which we can diagnose for free. If the digitizer is damaged, a screen replacement will fix all touch responsiveness issues." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };


const testimonials = [
  { name: "Marcus D.", rating: 5, text: "Dropped my iPhone 15 face-down on the parking lot. They had the screen replaced in 25 minutes and it looks brand new. Saved me hundreds compared to Apple!", service: "iPhone 15 Screen Repair" },
  { name: "Angela W.", rating: 5, text: "My daughter cracked her iPad screen. Tech Medics fixed it same day for way less than I expected. Great service and very friendly.", service: "iPad Screen Repair" },
  { name: "David L.", rating: 5, text: "MacBook Pro screen cracked in my bag. They replaced the Retina display and it's perfect. Best repair shop in Macon hands down.", service: "MacBook Pro Screen Repair" },
];

export default function ScreenRepairPage() {
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
          <li className="text-foreground font-medium">Screen Repair</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Cracked Screen Repair in Macon, GA</h1>
              <p className="text-xl text-muted-foreground mb-8">Broken iPhone, iPad, or MacBook screen? We fix cracked screens same-day at 3742 Eisenhower Parkway. No appointment needed &ndash; most iPhone screens repaired in 30 minutes. Quality parts, expert technicians, and a 30-day warranty on every repair.</p>
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
              <img src="/images/iphone-screen-repair-macon.webp" alt="Cracked screen repair service for iPhone iPad and MacBook in Macon GA" width="800" height="600" className="w-full h-auto" loading="eager" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Devices We Fix */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Screen Repair for Every Apple Device</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Whether it&apos;s a hairline crack or a completely shattered display, we restore your screen to like-new condition</p>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/macon/iphone" className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow group">
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">iPhone Screen Repair</h3>
              <p className="text-muted-foreground mb-4">All models from iPhone 8 through iPhone 16 Pro Max. OLED and LCD replacements available. Most repairs done in 30 minutes.</p>
              <p className="text-primary font-bold text-lg">Call for Quote</p>
            </Link>
            <Link href="/macon/ipad" className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow group">
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">iPad Screen Repair</h3>
              <p className="text-muted-foreground mb-4">iPad, iPad Mini, iPad Air, and iPad Pro screen replacement. Glass and digitizer repair for all generations.</p>
              <p className="text-primary font-bold text-lg">Call for Quote</p>
            </Link>
            <Link href="/macon/macbook" className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow group">
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">MacBook Screen Repair</h3>
              <p className="text-muted-foreground mb-4">Retina display replacement for MacBook Air and MacBook Pro. Intel and Apple Silicon models supported.</p>
              <p className="text-primary font-bold text-lg">Call for Quote</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Types of Screen Damage */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Types of Screen Damage We Repair</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Cracked Glass", desc: "The most common damage from drops or impacts. We replace the entire glass assembly for a seamless finish." },
              { title: "Shattered Screen", desc: "Completely broken or spider-webbed screens. Even if pieces are missing, we can replace the full display." },
              { title: "LCD / OLED Damage", desc: "Black spots, lines, or discoloration on the display. We replace the full LCD or OLED panel for perfect visuals." },
              { title: "Touch Not Responding", desc: "Screen won't register touches or has ghost touches. A new digitizer restores full touch functionality." },
              { title: "Screen Lifting", desc: "Screen pulling away from the frame, often caused by a swollen battery. We fix both the screen and battery." },
              { title: "Water Damage Display", desc: "Water spots, flickering, or dim areas after liquid exposure. Screen replacement plus water damage treatment." },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Affordable Screen Repair Pricing</h2>
          <p className="text-xl text-muted-foreground mb-8">We offer competitive pricing for all screen repairs. Every repair includes a 30-day warranty and expert service.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Why Choose Tech Medics for Screen Repair?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: "30 Min", desc: "Most iPhone screen repairs completed in 30 minutes or less" },
              { stat: "$79+", desc: "Screen repair starting at just $79 – up to 50% less than Apple" },
              { stat: "Warranty", desc: "Every screen repair backed by our 30-day parts & labor warranty" },
              { stat: "Walk-In", desc: "No appointment needed – walk in during business hours" },
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
          <p className="text-center text-muted-foreground mb-12">Real reviews from screen repair customers in Macon, GA</p>
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

      {/* How It Works */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">How Screen Repair Works</h2>
          <p className="text-center text-muted-foreground mb-12">Getting your cracked screen fixed is quick and easy</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Walk In or Call", desc: "Visit us at 3742 Eisenhower Parkway or call (478) 259-6371. No appointment needed." },
              { step: "2", title: "Free Diagnosis", desc: "We inspect your device and provide an exact repair quote with no hidden fees." },
              { step: "3", title: "Expert Repair", desc: "Our certified technicians replace your screen using premium quality parts." },
              { step: "4", title: "Quality Check", desc: "Every repair is thoroughly tested. Leave with a perfect screen and 30-day warranty." },
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

      {/* FAQ */}
      <FAQSection deviceType="Screen Repair" faqs={faqData} />

      {/* SEO Content */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Macon&apos;s Best Screen Repair Shop</h2>
            <p className="text-muted-foreground mb-4">Looking for <strong>screen repair near me in Macon, GA</strong>? Tech Medics is the highest-rated screen repair shop in Central Georgia. We fix <strong>cracked iPhone screens</strong>, <strong>broken iPad glass</strong>, and <strong>damaged MacBook displays</strong> &ndash; all same-day with no appointment required.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Same-Day Cracked Screen Repair in Macon</h3>
            <p className="text-muted-foreground mb-4">A cracked screen doesn&apos;t just look bad &ndash; it can cut your fingers, let in dust and moisture, and eventually cause your device to stop working entirely. Don&apos;t wait. Our <strong>screen repair service in Macon</strong> gets your device back to perfect condition the same day you walk in. We stock screens for all major iPhone models (iPhone 8 through iPhone 16 Pro Max), all iPad generations, and MacBook Air and Pro models.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Quality Screen Replacements at Affordable Prices</h3>
            <p className="text-muted-foreground mb-4">Unlike chain repair stores, Tech Medics offers <strong>transparent screen repair pricing</strong> that&apos;s 30-50% less than Apple Store costs. Our <strong>iPhone screen repair in Macon</strong> starts at just $79, and every repair includes a 30-day warranty on parts and labor. We use premium OEM-equivalent screens with excellent color accuracy, brightness, and touch sensitivity.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Serving All of Macon &amp; Central Georgia</h3>
            <p className="text-muted-foreground mb-4">Our screen repair shop at <strong>3742 Eisenhower Parkway</strong> serves all of Macon including <strong>Vineville, North Macon, Downtown, Ingleside, East Macon, South Macon</strong>, and nearby cities like <strong>Warner Robins, Byron, Perry, and Forsyth</strong>. Walk-ins welcome Monday-Friday 10am-6pm and Saturday 10am-5pm.</p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Cracked Screen? Get It Fixed Today in Macon</h2>
          <p className="text-xl text-muted-foreground mb-8">Walk in to 3742 Eisenhower Parkway, Macon, GA 31206 &ndash; no appointment needed. Or call for a free quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"><a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a></Button>
            <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8"><a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a></Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">Related Repair Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/macon/iphone" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">iPhone Repair</h3><p className="text-muted-foreground">Complete iPhone repair services in Macon</p></Link>
            <Link href="/macon/ipad" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">iPad Repair</h3><p className="text-muted-foreground">iPad screen &amp; battery repair for all models</p></Link>
            <Link href="/macon/macbook" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">MacBook Repair</h3><p className="text-muted-foreground">MacBook screen, keyboard &amp; battery service</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
