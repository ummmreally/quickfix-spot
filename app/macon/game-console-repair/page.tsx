import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import FAQSection from "../../components/FAQSection";

export const metadata: Metadata = {
  title: "Game Console Repair Macon GA | PS5, Xbox, Nintendo Switch | (478) 259-6371",
  description: "Expert game console repair in Macon GA – PS5, Xbox Series X/S, Nintendo Switch, PS4 & more. HDMI port repair, disc drive fix, overheating & controller drift. Tech Medics at 3742 Eisenhower Pkwy. Call (478) 259-6371.",
  keywords: ["game console repair Macon GA", "PS5 repair Macon", "Xbox repair Macon GA", "Nintendo Switch repair Macon", "PS4 repair Macon", "HDMI port repair Macon GA", "Xbox Series X repair Macon", "Nintendo Switch Joy-Con drift fix Macon", "game console fix near me", "PlayStation repair Macon Georgia"],
  alternates: { canonical: "https://techmedicsmacon.com/macon/game-console-repair" },
  openGraph: {
    title: "Game Console Repair Macon GA | PS5, Xbox, Nintendo Switch Fix",
    description: "Expert game console repair in Macon GA. PS5, Xbox, Nintendo Switch & more. HDMI port, disc drive, overheating fixes. Same-day service.",
    url: "https://techmedicsmacon.com/macon/game-console-repair",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://techmedicsmacon.com" },
    { "@type": "ListItem", position: 2, name: "Macon", item: "https://techmedicsmacon.com/macon" },
    { "@type": "ListItem", position: 3, name: "Game Console Repair", item: "https://techmedicsmacon.com/macon/game-console-repair" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://techmedicsmacon.com/macon/game-console-repair#service",
  serviceType: "Game Console Repair",
  name: "Game Console Repair Service in Macon GA",
  description: "Professional game console repair for PlayStation, Xbox, and Nintendo Switch in Macon, Georgia. HDMI port repair, disc drive fix, overheating solutions, and more.",
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
  { question: "What game consoles do you repair in Macon?", answer: "We repair PlayStation 5, PlayStation 4, Xbox Series X, Xbox Series S, Xbox One, Nintendo Switch, Nintendo Switch OLED, and Nintendo Switch Lite. We also service older consoles on a case-by-case basis." },
  { question: "How much does game console repair cost?", answer: "Repair costs vary by console and issue. HDMI port repairs typically start at $99-$149, disc drive repairs from $79, and Joy-Con drift fixes from $39 per controller. Call (478) 259-6371 for an exact quote." },
  { question: "Can you fix HDMI port issues on PS5 and Xbox?", answer: "Yes! HDMI port repair is one of our most common console repairs. We use micro-soldering to replace damaged HDMI ports on PS5, PS4, Xbox Series X/S, and Xbox One consoles." },
  { question: "Can you fix Nintendo Switch Joy-Con drift?", answer: "Absolutely. Joy-Con drift is extremely common and we fix it regularly. We replace the analog stick module for a permanent fix, typically in under an hour." },
  { question: "How long does game console repair take?", answer: "Most console repairs take 1-3 days depending on the issue and parts availability. Simple repairs like Joy-Con drift can often be done same-day. We'll give you an estimated timeline during diagnosis." },
  { question: "Do I need an appointment for console repair?", answer: "No appointment needed. Walk in during business hours (Mon-Fri 10-6, Sat 10-5) and drop off your console. We'll diagnose the issue, provide a quote, and get started." },
  { question: "Is there a warranty on console repairs?", answer: "Yes, all game console repairs come with our 30-day warranty covering parts and labor. If the same issue reoccurs, we'll fix it free of charge." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };

const testimonials = [
  { name: "Tyler R.", rating: 5, text: "PS5 had no video output – HDMI port was damaged. Tech Medics soldered a new one and it works perfectly. Way cheaper than buying a new PS5!", service: "PS5 HDMI Port Repair" },
  { name: "Brandon K.", rating: 5, text: "Both my Joy-Cons had terrible drift. They fixed both in about an hour and now they're perfect. Great price and fast service.", service: "Nintendo Switch Joy-Con Repair" },
  { name: "Jason W.", rating: 5, text: "Xbox Series X wouldn't read discs anymore. They replaced the disc drive and it's back to normal. Friendly staff and reasonable pricing.", service: "Xbox Series X Disc Drive Repair" },
];

export default function GameConsoleRepairPage() {
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
          <li className="text-foreground font-medium">Game Console Repair</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Game Console Repair in Macon, GA</h1>
              <p className="text-xl text-muted-foreground mb-8">PS5, Xbox, or Nintendo Switch not working? Tech Medics fixes all major game consoles at 3742 Eisenhower Parkway. HDMI port repair, disc drive fixes, overheating solutions, Joy-Con drift &ndash; we handle it all. Don&apos;t buy a new console &ndash; let us fix yours.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call for Free Quote</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2">
                  <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-secondary/50 p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎮</div>
                <p className="text-2xl font-bold text-foreground">PS5 &bull; Xbox &bull; Switch</p>
                <p className="text-muted-foreground mt-2">All Major Consoles Repaired</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consoles We Repair */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Consoles We Repair</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">PlayStation</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>&#8226; PlayStation 5 (PS5)</li>
                <li>&#8226; PlayStation 4 Pro / Slim</li>
                <li>&#8226; PlayStation 4 (PS4)</li>
                <li>&#8226; HDMI port repair</li>
                <li>&#8226; Disc drive replacement</li>
                <li>&#8226; Overheating / thermal paste</li>
                <li>&#8226; Power supply issues</li>
              </ul>
            </article>
            <article className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Xbox</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>&#8226; Xbox Series X</li>
                <li>&#8226; Xbox Series S</li>
                <li>&#8226; Xbox One / One S / One X</li>
                <li>&#8226; HDMI port repair</li>
                <li>&#8226; Disc drive replacement</li>
                <li>&#8226; Overheating fixes</li>
                <li>&#8226; Controller repair</li>
              </ul>
            </article>
            <article className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Nintendo</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>&#8226; Nintendo Switch OLED</li>
                <li>&#8226; Nintendo Switch</li>
                <li>&#8226; Nintendo Switch Lite</li>
                <li>&#8226; Joy-Con drift repair</li>
                <li>&#8226; Screen replacement</li>
                <li>&#8226; Charging port repair</li>
                <li>&#8226; Rail connector repair</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Common Repairs */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Common Console Repairs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "HDMI Port Repair", desc: "No video output? Bent or broken HDMI port? We use micro-soldering to replace damaged HDMI connectors on PS5, PS4, Xbox Series X/S, and Xbox One." },
              { title: "Disc Drive Repair", desc: "Console won't read discs, making grinding noises, or ejecting randomly? We repair and replace disc drives for PlayStation and Xbox consoles." },
              { title: "Joy-Con Drift Fix", desc: "Nintendo Switch Joy-Cons drifting or registering phantom inputs? We replace the analog stick module for a permanent fix." },
              { title: "Overheating Repair", desc: "Console shutting down from heat? We clean internal fans, replace thermal paste, and fix cooling system issues to prevent overheating." },
              { title: "Power Issues", desc: "Console won't turn on or keeps shutting off? We diagnose and repair power supply, motherboard, and electrical issues." },
              { title: "Controller Repair", desc: "Stick drift, broken bumpers, unresponsive buttons, or charging issues on controllers. We fix PS5, Xbox, and Pro controllers." },
            ].map((s) => (
              <article key={s.title} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Why Choose Tech Medics for Console Repair?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: "Expert", desc: "Experienced technicians with micro-soldering capabilities" },
              { stat: "All Brands", desc: "PlayStation, Xbox, and Nintendo consoles repaired" },
              { stat: "Warranty", desc: "30-day warranty on all console repairs" },
              { stat: "Fair Price", desc: "Save hundreds vs. buying a replacement console" },
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
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">What Our Customers Say</h2>
          <p className="text-center text-muted-foreground mb-12">Real reviews from console repair customers in Macon, GA</p>
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
      <FAQSection deviceType="Game Console" faqs={faqData} />

      {/* SEO Content */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Game Console Repair in Macon, Georgia</h2>
            <p className="text-muted-foreground mb-4">Looking for <strong>game console repair in Macon, GA</strong>? Tech Medics is your local expert for PlayStation, Xbox, and Nintendo Switch repairs. Don&apos;t throw away a $500 console when the fix might cost a fraction of the replacement price. Our skilled technicians use micro-soldering and professional tools to repair consoles that other shops can&apos;t.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">PS5 &amp; Xbox HDMI Port Repair in Macon</h3>
            <p className="text-muted-foreground mb-4">One of the most common console issues is a damaged <strong>HDMI port</strong> &ndash; your console powers on but there&apos;s no video output. This is usually caused by a bent or broken HDMI connector. At Tech Medics, we use precision micro-soldering to replace the HDMI port, restoring full video output. Our <strong>PS5 HDMI repair</strong> and <strong>Xbox HDMI repair in Macon</strong> saves you hundreds compared to buying a new console.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Nintendo Switch Repair in Macon</h3>
            <p className="text-muted-foreground mb-4"><strong>Joy-Con drift</strong> is the most common Nintendo Switch issue &ndash; and we fix it daily. We also handle Switch screen replacements, charging port repairs, rail connector fixes, and more. Whether you have a <strong>Switch, Switch OLED, or Switch Lite</strong>, Tech Medics in Macon can get your gaming back on track.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Serving Macon &amp; Central Georgia Gamers</h3>
            <p className="text-muted-foreground mb-4">Our console repair shop at <strong>3742 Eisenhower Parkway</strong> serves gamers across Macon, Warner Robins, Byron, Perry, and Forsyth. Walk-ins welcome Monday-Friday 10am-6pm and Saturday 10am-5pm. Call <strong>(478) 259-6371</strong> for a free quote.</p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Console Broken? Get It Fixed in Macon</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">Other Repair Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/macon/iphone" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">iPhone Repair</h3><p className="text-muted-foreground">Screen, battery &amp; more from $79</p></Link>
            <Link href="/macon/ipad" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">iPad Repair</h3><p className="text-muted-foreground">Screen &amp; battery repair for all models</p></Link>
            <Link href="/macon/data-recovery" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">Data Recovery</h3><p className="text-muted-foreground">Recover data from damaged devices</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
