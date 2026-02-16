import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Star, Clock, Shield, CheckCircle, Zap, Smartphone, Tablet, Laptop, Gamepad2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Phone Repair Macon GA | Same-Day iPhone, iPad & MacBook Repair | (478) 259-6371",
  description: "Macon's #1 rated device repair shop. iPhone screen repair from $79, 30-minute service, 30-day warranty. Walk-ins welcome at 3742 Eisenhower Pkwy. Call (478) 259-6371 now.",
  keywords: ["phone repair Macon GA", "iPhone repair Macon", "screen repair Macon GA", "iPad repair Macon", "MacBook repair Macon", "phone screen repair near me", "cracked screen repair Macon", "same day phone repair Macon GA"],
  alternates: { canonical: "https://techmedicsmacon.com/macon" },
  openGraph: {
    title: "Phone Repair Macon GA | Same-Day Service | Tech Medics",
    description: "Cracked screen? Dead battery? Walk in and walk out repaired. iPhone screen from $79, most repairs in 30 min. Call (478) 259-6371.",
    url: "https://techmedicsmacon.com/macon",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://techmedicsmacon.com/#business",
  name: "Tech Medics Macon",
  description: "Expert iPhone, iPad, MacBook & game console repair in Macon, GA. Same-day service, walk-ins welcome.",
  url: "https://techmedicsmacon.com",
  telephone: "(478) 259-6371",
  address: { "@type": "PostalAddress", streetAddress: "3742 Eisenhower Parkway", addressLocality: "Macon", addressRegion: "GA", postalCode: "31206", addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: 32.816, longitude: -83.708 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "17:00" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: "150" },
  priceRange: "$$",
  image: "https://techmedicsmacon.com/og-image.webp",
  areaServed: [
    { "@type": "City", name: "Macon" },
    { "@type": "City", name: "Warner Robins" },
    { "@type": "City", name: "Byron" },
    { "@type": "City", name: "Perry" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How long does a phone screen repair take?", acceptedAnswer: { "@type": "Answer", text: "Most iPhone and Samsung screen repairs are completed in 25-30 minutes while you wait. No appointment needed – walk-ins welcome." } },
    { "@type": "Question", name: "How much does iPhone screen repair cost in Macon?", acceptedAnswer: { "@type": "Answer", text: "iPhone screen repair starts at $79 at Tech Medics Macon. Pricing varies by model – iPhone 15 Pro Max from $279, iPhone 14 from $179. All repairs include a 30-day warranty." } },
    { "@type": "Question", name: "Do you offer a warranty on repairs?", acceptedAnswer: { "@type": "Answer", text: "Yes! Every repair at Tech Medics includes a 30-day warranty on parts and labor. If anything goes wrong with the repaired component, we'll fix it free of charge." } },
    { "@type": "Question", name: "Do I need an appointment?", acceptedAnswer: { "@type": "Answer", text: "No appointment needed. We accept walk-ins during business hours: Monday-Friday 10am-6pm, Saturday 10am-5pm. Walk in and most repairs are done while you wait." } },
  ],
};

const reviews = [
  { name: "Sarah M.", text: "Fixed my iPhone 16 screen in 25 minutes. Looks brand new!", rating: 5 },
  { name: "James T.", text: "Battery was dying by lunch every day. Now lasts all day. Way cheaper than Apple.", rating: 5 },
  { name: "Marcus D.", text: "Saved me hundreds compared to Apple Store. Fast and professional.", rating: 5 },
  { name: "Angela W.", text: "Daughter's iPad fixed same day for way less than expected. Great service!", rating: 5 },
  { name: "David L.", text: "MacBook Pro screen replaced perfectly. Best repair shop in Macon.", rating: 5 },
  { name: "Tyler R.", text: "PS5 HDMI port fixed. Way cheaper than buying a new console!", rating: 5 },
];

export default function MaconLandingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section – conversion-focused */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
              <span className="ml-2 text-sm font-semibold text-foreground">4.9 Stars &middot; Macon&apos;s Top-Rated</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-foreground leading-tight">
              Cracked Screen?<br className="hidden sm:block" /> We Fix It in <span className="text-primary">30 Minutes</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              iPhone &middot; iPad &middot; MacBook &middot; Game Consoles
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Walk-ins welcome &middot; No appointment needed &middot; 30-day warranty
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-10 py-7 shadow-lg">
                <a href="tel:(478)259-6371" data-track="phone-cta" data-location="hero">
                  <Phone className="mr-2 h-6 w-6" />Call (478) 259-6371
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 text-xl px-10 py-7">
                <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer" data-track="directions-cta" data-location="hero">
                  <MapPin className="mr-2 h-6 w-6" />Get Directions
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">3742 Eisenhower Parkway, Macon, GA 31206</p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 px-4 border-y border-border bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Zap className="h-8 w-8 text-primary" />
              <p className="font-bold text-foreground">30-Min Repairs</p>
              <p className="text-xs text-muted-foreground">Most repairs while you wait</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <p className="font-bold text-foreground">30-Day Warranty</p>
              <p className="text-xs text-muted-foreground">Parts &amp; labor guaranteed</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Star className="h-8 w-8 text-primary" />
              <p className="font-bold text-foreground">4.9-Star Rated</p>
              <p className="text-xs text-muted-foreground">Macon&apos;s highest rated</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="h-8 w-8 text-primary" />
              <p className="font-bold text-foreground">No Appointment</p>
              <p className="text-xs text-muted-foreground">Walk-ins always welcome</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services + Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">What We Repair</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Transparent pricing &ndash; no hidden fees, no surprises</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center border-2 hover:border-primary transition-colors">
              <Smartphone className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2 text-foreground">iPhone Repair</h3>
              <p className="text-muted-foreground text-sm mb-4">All models &ndash; screen, battery, charging port, water damage</p>
              <p className="text-2xl font-extrabold text-primary mb-1">From $59</p>
              <p className="text-xs text-muted-foreground">Screen from $79 &middot; Battery from $59</p>
            </Card>
            <Card className="p-6 text-center border-2 hover:border-primary transition-colors">
              <Tablet className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2 text-foreground">iPad Repair</h3>
              <p className="text-muted-foreground text-sm mb-4">Screen replacement, battery, charging port for all models</p>
              <p className="text-2xl font-extrabold text-primary mb-1">From $79</p>
              <p className="text-xs text-muted-foreground">Screen from $99 &middot; Battery from $79</p>
            </Card>
            <Card className="p-6 text-center border-2 hover:border-primary transition-colors">
              <Laptop className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2 text-foreground">MacBook Repair</h3>
              <p className="text-muted-foreground text-sm mb-4">Screen, battery, keyboard &ndash; Air &amp; Pro models</p>
              <p className="text-2xl font-extrabold text-primary mb-1">From $149</p>
              <p className="text-xs text-muted-foreground">Screen from $299 &middot; Battery from $149</p>
            </Card>
            <Card className="p-6 text-center border-2 hover:border-primary transition-colors">
              <Gamepad2 className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Console Repair</h3>
              <p className="text-muted-foreground text-sm mb-4">PS5, Xbox, Nintendo Switch &ndash; HDMI, disc drive, drift</p>
              <p className="text-2xl font-extrabold text-primary mb-1">From $39</p>
              <p className="text-xs text-muted-foreground">Joy-Con from $39 &middot; HDMI from $99</p>
            </Card>
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10">
              <a href="tel:(478)259-6371" data-track="phone-cta" data-location="services">
                <Phone className="mr-2 h-5 w-5" />Get a Free Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-extrabold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Walk In or Call</h3>
              <p className="text-muted-foreground">No appointment needed. Walk in during business hours or call (478) 259-6371 for a free quote.</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-extrabold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">We Diagnose &amp; Repair</h3>
              <p className="text-muted-foreground">Free diagnosis. We quote the exact price before starting. Most repairs done in 30 minutes.</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-extrabold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Walk Out Repaired</h3>
              <p className="text-muted-foreground">Your device works like new. Every repair backed by our 30-day warranty on parts &amp; labor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Repairs + Prices */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Popular Repairs &amp; Prices</h2>
          <p className="text-center text-muted-foreground mb-10">30-50% less than Apple Store &ndash; <Link href="/macon/pricing" className="text-primary hover:underline font-semibold">see full pricing</Link></p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-4 font-bold">Repair</th>
                  <th className="text-center p-4 font-bold">Starting Price</th>
                  <th className="text-center p-4 font-bold">Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { repair: "iPhone Screen Repair", price: "$79", time: "25 min" },
                  { repair: "iPhone Battery Replacement", price: "$59", time: "30 min" },
                  { repair: "iPhone Charging Port", price: "$69", time: "40 min" },
                  { repair: "iPad Screen Repair", price: "$99", time: "45 min" },
                  { repair: "MacBook Screen Replacement", price: "$299", time: "1-2 hrs" },
                  { repair: "MacBook Battery", price: "$149", time: "1 hr" },
                  { repair: "Water Damage Repair", price: "$79", time: "1-3 hrs" },
                  { repair: "Game Console (HDMI/Drive)", price: "$79", time: "1-2 hrs" },
                  { repair: "Data Recovery", price: "$79", time: "1-5 days" },
                ].map((r) => (
                  <tr key={r.repair} className="border-b border-border last:border-0 hover:bg-secondary/30">
                    <td className="p-4 font-semibold text-foreground">{r.repair}</td>
                    <td className="p-4 text-center text-primary font-bold text-lg">{r.price}</td>
                    <td className="p-4 text-center text-muted-foreground">{r.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">*Prices vary by model. Call for exact quote.</p>
        </div>
      </section>

      {/* Social Proof – Reviews */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-primary text-primary" />)}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">What Our Customers Say</h2>
            <p className="text-muted-foreground">Real reviews from real Macon customers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <Card key={i} className="p-6 border-border">
                <div className="flex items-center gap-1 mb-3">{[...Array(r.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}</div>
                <p className="text-muted-foreground italic mb-4">&ldquo;{r.text}&rdquo;</p>
                <p className="font-semibold text-foreground text-sm">&mdash; {r.name}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/macon/reviews" className="text-primary hover:underline font-semibold">Read more reviews &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Why Macon Trusts Tech Medics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Transparent Pricing", desc: "We quote the exact price before we start. No hidden fees. Ever." },
              { title: "Premium Parts", desc: "OEM-equivalent parts that match original specs for quality and longevity." },
              { title: "Certified Technicians", desc: "Experienced, trained professionals who've repaired thousands of devices." },
              { title: "Locally Owned", desc: "We live in Macon. Your satisfaction is our reputation and our livelihood." },
              { title: "Same-Day Service", desc: "Most repairs completed in 30 minutes while you wait. Walk out fixed." },
              { title: "30-Day Warranty", desc: "Every repair backed by our warranty. If it's not right, we make it right." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ – improves Google Ads quality score */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">{faq.name}</h3>
                <p className="text-muted-foreground">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location + Hours + Map */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Visit Us Today</h2>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4 items-start">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">3742 Eisenhower Parkway<br />Macon, GA 31206</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday &ndash; Friday: 10:00 AM &ndash; 6:00 PM</p>
                      <p>Saturday: 10:00 AM &ndash; 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone</h3>
                    <a href="tel:(478)259-6371" className="text-primary font-bold text-lg hover:underline">(478) 259-6371</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                  <a href="tel:(478)259-6371" data-track="phone-cta" data-location="contact"><Phone className="mr-2 h-5 w-5" />Call Now</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8">
                  <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer" data-track="directions-cta" data-location="contact">
                    <MapPin className="mr-2 h-5 w-5" />Get Directions
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden h-96 shadow-lg relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5!2d-83.708!3d32.816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQ4JzU3LjYiTiA4M8KwNDInMjguOCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tech Medics Macon location map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-primary-foreground">Don&apos;t Wait &ndash; Get It Fixed Today</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">Walk in or call now. Most repairs completed in 30 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-background hover:bg-background/90 text-primary text-xl px-10 py-7 shadow-lg font-bold">
              <a href="tel:(478)259-6371" data-track="phone-cta" data-location="final-cta">
                <Phone className="mr-2 h-6 w-6" />Call (478) 259-6371
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-xl px-10 py-7">
              <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer" data-track="directions-cta" data-location="final-cta">
                <MapPin className="mr-2 h-6 w-6" />Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
        <a
          href="tel:(478)259-6371"
          className="flex items-center justify-center gap-2 text-primary-foreground font-bold text-lg"
          data-track="phone-cta"
          data-location="sticky-mobile"
        >
          <Phone className="h-5 w-5" />
          Call Now &ndash; (478) 259-6371
        </a>
      </div>
    </>
  );
}
