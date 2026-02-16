import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "All Repair Services Macon GA | iPhone, iPad, MacBook, Console & More | (478) 259-6371",
  description: "Complete repair services at Tech Medics Macon GA. iPhone, iPad, MacBook, game console repair, screen replacement, battery swap, charging port fix, water damage recovery & data recovery. Call (478) 259-6371.",
  keywords: ["repair services Macon GA", "phone repair services Macon", "device repair Macon GA", "Tech Medics services", "Apple repair services Macon", "game console repair Macon", "data recovery Macon GA", "screen repair services Macon"],
  alternates: { canonical: "https://techmedicsmacon.com/macon/services" },
  openGraph: {
    title: "All Repair Services | Tech Medics Macon GA",
    description: "iPhone, iPad, MacBook, game console repair & more. Screen, battery, charging port, water damage, data recovery. Same-day service.",
    url: "https://techmedicsmacon.com/macon/services",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://techmedicsmacon.com" },
    { "@type": "ListItem", position: 2, name: "Macon", item: "https://techmedicsmacon.com/macon" },
    { "@type": "ListItem", position: 3, name: "Services", item: "https://techmedicsmacon.com/macon/services" },
  ],
};

const deviceServices = [
  { href: "/macon/iphone", title: "iPhone Repair", desc: "Screen repair, battery replacement, charging port, camera, water damage & more for all iPhone models from iPhone 8 to iPhone 16 Pro Max.", price: "From $59" },
  { href: "/macon/ipad", title: "iPad Repair", desc: "Screen replacement, battery swap, charging port repair, and more for iPad, iPad Mini, iPad Air, and iPad Pro.", price: "From $79" },
  { href: "/macon/macbook", title: "MacBook Repair", desc: "Screen replacement, keyboard repair, battery service, logic board diagnostics & more for MacBook Air and MacBook Pro.", price: "From $149" },
  { href: "/macon/game-console-repair", title: "Game Console Repair", desc: "PS5, Xbox Series X/S, Nintendo Switch repair. HDMI port, disc drive, overheating, Joy-Con drift & controller repair.", price: "Call for quote" },
];

const repairTypeServices = [
  { href: "/macon/screen-repair", title: "Screen Repair", desc: "Cracked, shattered, or unresponsive screens fixed same-day for iPhone, iPad & MacBook. Quality OEM-equivalent parts.", price: "From $79" },
  { href: "/macon/battery-replacement", title: "Battery Replacement", desc: "Fast-draining or swollen batteries replaced same-day. Premium cells that restore original battery life.", price: "From $59" },
  { href: "/macon/charging-port-repair", title: "Charging Port Repair", desc: "Device not charging? Loose cable, slow charging, or dead port – we fix all charging issues.", price: "From $69" },
  { href: "/macon/water-damage", title: "Water Damage Repair", desc: "Dropped in water? Professional ultrasonic cleaning and corrosion removal. Emergency same-day treatment.", price: "Call ASAP" },
  { href: "/macon/data-recovery", title: "Data Recovery", desc: "Recover photos, contacts & files from broken, water-damaged or dead devices. No data, no fee.", price: "From $79" },
];

const additionalServices = [
  "Camera repair & replacement",
  "Speaker & microphone repair",
  "Home button / Face ID repair",
  "Back glass replacement",
  "Software troubleshooting",
  "iOS update assistance",
  "Device diagnostics (free)",
  "Phone accessories & cases",
];

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-3 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li><Link href="/macon" className="hover:text-primary">Macon</Link></li>
          <li>/</li>
          <li className="text-foreground font-medium">All Services</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">All Repair Services in Macon, GA</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">From cracked iPhone screens to broken game consoles, Tech Medics fixes it all. Same-day service, no appointment needed, 30-day warranty on every repair. Located at 3742 Eisenhower Parkway.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call for Free Quote</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2">
              <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Device Repair Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Repair by Device</h2>
          <p className="text-center text-muted-foreground mb-12">Choose your device for detailed repair options and pricing</p>
          <div className="grid md:grid-cols-2 gap-8">
            {deviceServices.map((s) => (
              <Link key={s.href} href={s.href} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow group">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                  <span className="text-primary font-bold whitespace-nowrap ml-4">{s.price}</span>
                </div>
                <p className="text-muted-foreground">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Type Services */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Repair by Issue</h2>
          <p className="text-center text-muted-foreground mb-12">Know what&apos;s wrong? Jump straight to the repair you need</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repairTypeServices.map((s) => (
              <Link key={s.href} href={s.href} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow group">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                  <span className="text-primary font-semibold text-sm whitespace-nowrap ml-4">{s.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Additional Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {additionalServices.map((s) => (
              <div key={s} className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="font-medium text-foreground">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Why Choose Tech Medics Macon?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "30 Min", desc: "Most iPhone repairs completed in 30 minutes or less" },
              { stat: "Walk-In", desc: "No appointment needed – just walk in during business hours" },
              { stat: "Warranty", desc: "30-day warranty on all repairs, parts & labor" },
              { stat: "Save 50%", desc: "Up to 50% less than Apple Store repair prices" },
            ].map((s) => (
              <div key={s.stat} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{s.stat}</div>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Complete Device Repair Services in Macon, Georgia</h2>
            <p className="text-muted-foreground mb-4">Tech Medics Macon is your one-stop shop for <strong>device repair in Macon, GA</strong>. We specialize in Apple devices &ndash; <strong>iPhone repair, iPad repair, and MacBook repair</strong> &ndash; and also offer <strong>game console repair</strong> for PlayStation, Xbox, and Nintendo Switch. Our services include <strong>screen repair, battery replacement, charging port repair, water damage recovery, and data recovery</strong>.</p>
            <p className="text-muted-foreground mb-4">Located at <strong>3742 Eisenhower Parkway in Macon, GA 31206</strong>, we serve all of Macon and surrounding areas including <strong>Warner Robins, Byron, Perry, and Forsyth</strong>. Walk-ins welcome Monday-Friday 10am-6pm and Saturday 10am-5pm. Most repairs completed same-day, many in just 30 minutes.</p>
            <p className="text-muted-foreground mb-4">Every repair comes with a <strong>30-day warranty</strong> on parts and labor. We use premium OEM-equivalent parts and our certified technicians have years of experience. Call <strong>(478) 259-6371</strong> for a free quote on any repair.</p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Need a Repair? Get Started Today</h2>
          <p className="text-xl text-muted-foreground mb-8">Walk in to 3742 Eisenhower Parkway, Macon, GA 31206 or call for a free quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"><a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a></Button>
            <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8"><a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a></Button>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 max-w-2xl mx-auto">
            {["Warner Robins", "Byron", "Perry", "Forsyth"].map((n) => (
              <Link key={n} href={`/macon/${n.toLowerCase().replace(/ /g, "-")}`} className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-shadow"><span className="font-medium text-foreground">{n}</span></Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
