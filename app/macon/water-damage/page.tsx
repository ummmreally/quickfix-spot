import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import FAQSection from "../../components/FAQSection";

export const metadata: Metadata = {
  title: "Water Damage Repair Macon GA | iPhone, iPad & MacBook | (478) 259-6371",
  description: "Dropped your device in water? Emergency water damage repair in Macon GA for iPhone, iPad & MacBook. Ultrasonic cleaning, data recovery & same-day service. Tech Medics at 3742 Eisenhower Pkwy. Call (478) 259-6371.",
  keywords: ["water damage repair Macon GA", "iPhone water damage repair Macon", "phone dropped in water fix Macon", "water damaged phone repair near me", "iPad water damage repair Macon", "MacBook water damage repair Macon GA", "liquid damage repair Macon", "phone fell in toilet fix Macon"],
  alternates: { canonical: "https://techmedicsmacon.com/macon/water-damage" },
  openGraph: {
    title: "Water Damage Repair Macon GA | Emergency iPhone, iPad & MacBook Recovery",
    description: "Dropped your device in water? Emergency water damage repair in Macon GA. Ultrasonic cleaning & data recovery. Call now!",
    url: "https://techmedicsmacon.com/macon/water-damage",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://techmedicsmacon.com" },
    { "@type": "ListItem", position: 2, name: "Macon", item: "https://techmedicsmacon.com/macon" },
    { "@type": "ListItem", position: 3, name: "Water Damage Repair", item: "https://techmedicsmacon.com/macon/water-damage" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://techmedicsmacon.com/macon/water-damage#service",
  serviceType: "Water Damage Repair",
  name: "Water Damage Repair Service in Macon GA",
  description: "Emergency water damage repair for iPhone, iPad, and MacBook in Macon, Georgia. Ultrasonic cleaning, corrosion removal, and data recovery.",
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
};

const faqData = [
  { question: "What should I do immediately after dropping my device in water?", answer: "1) Remove it from water immediately. 2) Power it OFF – do NOT try to turn it on or charge it. 3) Remove the case and SIM card. 4) Gently shake out excess water. 5) Do NOT use rice – this is a myth. 6) Bring it to Tech Medics as soon as possible for professional treatment." },
  { question: "Can you fix a water damaged iPhone?", answer: "In many cases, yes. The sooner you bring it in, the better the chances. We use professional ultrasonic cleaning to remove corrosion and water residue from internal components. Success rates are highest when the device is brought in within 24-48 hours of exposure." },
  { question: "How much does water damage repair cost in Macon?", answer: "Water damage repair costs vary depending on the extent of damage and components affected. Diagnosis is free, and we'll give you an exact quote before starting any work. Basic water damage treatment starts at $79." },
  { question: "Should I put my phone in rice after water damage?", answer: "No! Rice does NOT work and can actually make things worse by introducing starch dust into your device. The best thing to do is power it off, keep it dry, and bring it to Tech Medics immediately for professional treatment." },
  { question: "Can you recover data from a water damaged device?", answer: "In many cases, yes. Even if the device itself can't be fully repaired, we can often recover photos, contacts, and other data from water damaged iPhones, iPads, and MacBooks. Ask about our data recovery services." },
  { question: "How long does water damage repair take?", answer: "Water damage repair typically takes 24-72 hours. The device needs to be thoroughly cleaned, dried, and tested. We'll keep you updated throughout the process and return your device as quickly as possible." },
  { question: "Is water damage covered by Apple warranty?", answer: "No, Apple's warranty does not cover liquid damage. However, Tech Medics can repair water damaged devices at a fraction of Apple's out-of-warranty replacement cost." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };

const testimonials = [
  { name: "Emily R.", rating: 5, text: "Dropped my iPhone in the pool and thought it was done for. Tech Medics recovered it and saved all my photos. Miracle workers! Can't thank them enough.", service: "iPhone Water Damage Repair" },
  { name: "Michael S.", rating: 5, text: "Spilled coffee all over my MacBook Pro. They cleaned it up, replaced a couple of damaged components, and it works perfectly now. Saved me thousands.", service: "MacBook Water Damage Repair" },
  { name: "Sarah J.", rating: 5, text: "My kid dropped my iPad in the bathtub. Brought it to Tech Medics the same day and they were able to save it. Screen works, everything works. Amazing.", service: "iPad Water Damage Repair" },
];

export default function WaterDamagePage() {
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
          <li className="text-foreground font-medium">Water Damage Repair</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Water Damage Repair in Macon, GA</h1>
              <p className="text-xl text-muted-foreground mb-4">Dropped your iPhone in the pool? Spilled coffee on your MacBook? <strong>Don&apos;t panic &ndash; bring it to Tech Medics immediately.</strong> We use professional ultrasonic cleaning to remove water, corrosion, and contaminants from your device&apos;s internal components.</p>
              <p className="text-lg text-primary font-semibold mb-8">Time is critical &ndash; the sooner you bring it in, the better the chances of full recovery.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call Now &ndash; Emergency</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2">
                  <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/iphone-repair.jpg" alt="Water damage repair service for iPhone iPad and MacBook in Macon GA" width="800" height="600" className="w-full h-auto" loading="eager" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Steps */}
      <section className="py-20 px-4 bg-red-50 dark:bg-red-950/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Dropped Your Device in Water? Do This NOW</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Follow these emergency steps immediately &ndash; then bring it to Tech Medics</p>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: "1", title: "Remove It", desc: "Get it out of the water immediately. Every second counts." },
              { step: "2", title: "Power OFF", desc: "Turn it off NOW. Do NOT try to charge it or use it." },
              { step: "3", title: "Remove Case", desc: "Take off the case and remove the SIM card tray." },
              { step: "4", title: "Shake Gently", desc: "Gently shake out excess water from ports and openings." },
              { step: "5", title: "Skip the Rice", desc: "Rice is a MYTH. It doesn't help and can cause more damage." },
              { step: "6", title: "Bring It In", desc: "Get to Tech Medics ASAP for professional treatment." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3">{s.step}</div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Treat */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Types of Liquid Damage We Repair</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Pool & Ocean Water", desc: "Chlorine and salt water are especially corrosive. We clean all mineral deposits and corrosion from internal components." },
              { title: "Toilet & Sink Drops", desc: "The most common water damage scenario. Quick treatment usually results in full recovery." },
              { title: "Rain & Puddle Exposure", desc: "Even brief rain exposure can cause internal damage. Don't assume your device is fine – bring it in for inspection." },
              { title: "Coffee & Beverage Spills", desc: "Sugary drinks are especially damaging due to sticky residue. Professional cleaning removes all contaminants." },
              { title: "Washing Machine", desc: "Full submersion in soapy water. Challenging but we've saved many devices from the washing machine." },
              { title: "Condensation & Humidity", desc: "Moisture buildup from humid environments or temperature changes. Can cause slow corrosion over time." },
            ].map((s) => (
              <article key={s.title} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Our Water Damage Repair Process</h2>
          <p className="text-center text-muted-foreground mb-12">Professional treatment that gives your device the best chance of recovery</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Inspection", desc: "We open your device, inspect all components for water and corrosion damage, and assess the extent of exposure." },
              { step: "2", title: "Ultrasonic Cleaning", desc: "Professional ultrasonic cleaning removes all water, minerals, corrosion, and contaminants from circuit boards and components." },
              { step: "3", title: "Component Repair", desc: "Damaged components are repaired or replaced. This may include connectors, ICs, or other parts affected by corrosion." },
              { step: "4", title: "Testing", desc: "Thorough testing of all functions – screen, touch, charging, cameras, speakers, microphone, Wi-Fi, and cellular." },
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

      {/* Devices */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Water Damage Repair for All Apple Devices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/macon/iphone" className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow group">
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">iPhone Water Damage</h3>
              <p className="text-muted-foreground mb-4">All iPhone models. Even &ldquo;water resistant&rdquo; iPhones can suffer internal damage. Professional cleaning and component repair.</p>
            </Link>
            <Link href="/macon/ipad" className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow group">
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">iPad Water Damage</h3>
              <p className="text-muted-foreground mb-4">iPad, iPad Mini, iPad Air, and iPad Pro water damage recovery. Thorough internal cleaning and component repair.</p>
            </Link>
            <Link href="/macon/macbook" className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow group">
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">MacBook Water Damage</h3>
              <p className="text-muted-foreground mb-4">MacBook Air and Pro liquid spill repair. Keyboard, logic board, and component-level cleaning and repair.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Water Damage Recovery Success Stories</h2>
          <p className="text-center text-muted-foreground mb-12">Real customers whose devices we&apos;ve saved from water damage</p>
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
      <FAQSection deviceType="Water Damage" faqs={faqData} />

      {/* SEO Content */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Water Damage Repair Experts in Macon, GA</h2>
            <p className="text-muted-foreground mb-4"><strong>Water damage repair in Macon, GA</strong> is one of our specialties at Tech Medics. We&apos;ve recovered hundreds of devices that other shops said were beyond repair. Using professional ultrasonic cleaning equipment and micro-soldering techniques, we remove corrosion and restore functionality to water-damaged iPhones, iPads, and MacBooks.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Why Rice Doesn&apos;t Work</h3>
            <p className="text-muted-foreground mb-4">The &ldquo;put it in rice&rdquo; myth is one of the most damaging pieces of tech advice out there. Rice does NOT absorb moisture from inside your device. It simply wastes precious time while corrosion continues to eat away at your device&apos;s components. Worse, rice dust and starch can get into your ports and cause additional problems. <strong>Professional water damage treatment</strong> is the only reliable solution.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Time Is Critical</h3>
            <p className="text-muted-foreground mb-4">The #1 factor in <strong>water damage recovery success</strong> is how quickly you get professional treatment. Corrosion starts forming within hours of water exposure. The sooner you bring your device to Tech Medics at <strong>3742 Eisenhower Parkway in Macon</strong>, the better your chances of full recovery. We serve all of Macon, Warner Robins, Byron, Perry, and Forsyth.</p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Water Damaged Device? Call Us Now</h2>
          <p className="text-xl text-muted-foreground mb-8">Every minute counts. Bring your device to 3742 Eisenhower Parkway or call for emergency guidance.</p>
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
            <Link href="/macon/screen-repair" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">Screen Repair</h3><p className="text-muted-foreground">Cracked screen fixed same-day from $79</p></Link>
            <Link href="/macon/data-recovery" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">Data Recovery</h3><p className="text-muted-foreground">Recover photos &amp; data from damaged devices</p></Link>
            <Link href="/macon/charging-port-repair" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">Charging Port Repair</h3><p className="text-muted-foreground">Fix water-corroded charging ports</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
