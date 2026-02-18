import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Phone Accessories & Device Repair Macon GA | Tech Medics | (478) 259-6371",
  description: "Tech Medics Macon – phone accessories, cases, chargers, screen protectors & expert iPhone, iPad, MacBook repair. Conveniently located on Eisenhower Parkway. Walk-ins welcome. Call (478) 259-6371.",
  keywords: ["phone accessories Macon GA", "phone cases Macon", "screen protectors Macon GA", "chargers Macon", "iPhone repair Macon", "device repair Macon GA", "Tech Medics Macon"],
  alternates: { canonical: "https://techmedicsmacon.com/macon" },
  openGraph: {
    title: "Phone Accessories & Device Repair | Tech Medics Macon GA",
    description: "Quality phone accessories & expert device repair on Eisenhower Parkway in Macon, GA. Walk-ins welcome!",
    url: "https://techmedicsmacon.com/macon",
  },
};

export default function MaconLandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Phone Accessories &amp; More</h1>
            <p className="text-xl text-muted-foreground mb-8">
              CONVENIENTLY LOCATED ON EISENHOWER. WE CARRY MAJOR BRAND ACCESSORIES. COME IN TODAY!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                <a href="tel:(478)259-6371" data-track="phone-cta" data-location="macon-hero">
                  <Phone className="mr-2 h-5 w-5" />Call Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8">
                <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer" data-track="directions-cta" data-location="macon-hero">
                  <MapPin className="mr-2 h-5 w-5" />Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section id="accessories" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Quality Accessories For All Your Devices</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We carry screen protectors, cases, speakers, chargers, and more from major brands. Visit our store to see our full selection.
          </p>
        </div>
      </section>

      {/* Device Repair Services */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Device Repair Services</h2>
          <p className="text-center text-muted-foreground mb-12">Expert repair for all your devices &ndash; <Link href="/macon/services" className="text-primary hover:underline">view all services</Link></p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/macon/iphone" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="text-xl font-bold mb-2 text-foreground">iPhone Repair</h3>
              <p className="text-muted-foreground text-sm">Affordable screen repair, battery replacement &amp; more</p>
            </Link>
            <Link href="/macon/ipad" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="text-xl font-bold mb-2 text-foreground">iPad Repair</h3>
              <p className="text-muted-foreground text-sm">Screen replacement for all iPad models</p>
            </Link>
            <Link href="/macon/macbook" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="text-xl font-bold mb-2 text-foreground">MacBook Repair</h3>
              <p className="text-muted-foreground text-sm">Screen, keyboard &amp; battery service</p>
            </Link>
            <Link href="/macon/game-console-repair" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="text-xl font-bold mb-2 text-foreground">Game Console Repair</h3>
              <p className="text-muted-foreground text-sm">PS5, Xbox, Nintendo Switch &ndash; HDMI, disc drive &amp; more</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Repair by Issue */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Repair by Issue</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Link href="/macon/screen-repair" className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-foreground">Screen Repair</h3>
              <p className="text-primary text-sm font-semibold">From $79</p>
            </Link>
            <Link href="/macon/battery-replacement" className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-foreground">Battery Replacement</h3>
              <p className="text-primary text-sm font-semibold">From $59</p>
            </Link>
            <Link href="/macon/charging-port-repair" className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-foreground">Charging Port</h3>
              <p className="text-primary text-sm font-semibold">From $69</p>
            </Link>
            <Link href="/macon/water-damage" className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-foreground">Water Damage</h3>
              <p className="text-primary text-sm font-semibold">Call ASAP</p>
            </Link>
            <Link href="/macon/data-recovery" className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-foreground">Data Recovery</h3>
              <p className="text-primary text-sm font-semibold">From $79</p>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/macon/pricing" className="text-primary hover:underline font-semibold">View Full Pricing &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Visit Us Today</h2>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-muted-foreground">3742 Eisenhower Parkway<br />Macon, GA 31206</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday – Friday: 10:00 AM – 6:00 PM</p>
                    <p>Saturday: 10:00 AM – 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">(478) 259-6371</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call Now</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2">
                  <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-5 w-5" />Get Directions
                  </a>
                </Button>
              </div>
            </div>
            <a href="https://www.google.com/maps/place/3742+Eisenhower+Pkwy,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer" className="block bg-muted rounded-lg overflow-hidden h-96 shadow-lg relative group">
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
              <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs text-muted-foreground shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Open in Google Maps →
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
