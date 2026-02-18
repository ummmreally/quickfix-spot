import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Star, CheckCircle, Smartphone, Tablet, Laptop, Gamepad2, Zap, Droplets, HardDrive, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "iPhone, iPad & MacBook Repair Macon GA | Same-Day Service | Tech Medics | (478) 259-6371",
  description: "Macon's #1 rated device repair shop. Same-day iPhone screen repair, battery replacement & more. Walk-ins welcome at 3742 Eisenhower Pkwy. 30-day warranty. Call (478) 259-6371.",
  keywords: ["iPhone repair Macon GA", "phone repair Macon", "iPad repair Macon GA", "MacBook repair Macon GA", "same day phone repair Macon", "cracked screen repair Macon", "Tech Medics Macon"],
  alternates: { canonical: "https://techmedicsmacon.com/macon" },
  openGraph: {
    title: "Same-Day iPhone, iPad & MacBook Repair | Tech Medics Macon GA",
    description: "Macon's #1 rated repair shop. Walk-ins welcome, 30-day warranty, no fix no fee.",
    url: "https://techmedicsmacon.com/macon",
  },
};

export default function MaconLandingPage() {
  return (
    <>
      {/* Urgency Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4 text-sm font-medium">
        <span className="inline-flex items-center gap-2 flex-wrap justify-center">
          <Clock className="h-4 w-4 shrink-0" />
          Open Today: Mon–Fri 10AM–6PM · Sat 10AM–5PM · Walk-ins Welcome · Same-Day Repairs Available
        </span>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 md:py-24 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          {/* Star Rating */}
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-slate-300 text-sm font-medium">4.9 stars · 60+ Google Reviews</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Macon&apos;s #1 iPhone, iPad<br className="hidden md:block" /> &amp; MacBook Repair Shop
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Cracked screen? Dead battery? Not charging? We fix it fast — most repairs done in 30 minutes while you wait.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:(478)259-6371" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors shadow-lg">
              <Phone className="h-5 w-5" /> Call (478) 259-6371
            </a>
            <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold text-lg px-8 py-4 rounded-lg transition-colors shadow-lg">
              <MapPin className="h-5 w-5" /> Get Directions
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-slate-300 text-sm">
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-400" /> 30-Day Warranty</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-400" /> No Fix, No Fee</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-400" /> Walk-ins Welcome</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-400" /> Free Diagnosis</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-400" /> All iPhone Models</span>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-green-700 text-white py-3 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-sm font-semibold">
          <span>✓ 60+ Five-Star Google Reviews</span>
          <span>✓ Macon&apos;s Most Trusted Repair Shop</span>
          <span>✓ iPhone 16 Pro Max Ready</span>
          <span>✓ MacBook Air M4 Certified</span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">What Do You Need Fixed?</h2>
          <p className="text-center text-muted-foreground mb-10 text-lg">Tap your device or issue — most repairs done same day</p>

          {/* Device Type Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Link href="/macon/iphone" className="group bg-card border-2 border-border hover:border-primary rounded-xl p-6 text-center transition-all hover:shadow-lg">
              <Smartphone className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-foreground text-lg">iPhone Repair</h3>
              <p className="text-muted-foreground text-sm mt-1">Screen, battery, charging port</p>
            </Link>
            <Link href="/macon/ipad" className="group bg-card border-2 border-border hover:border-primary rounded-xl p-6 text-center transition-all hover:shadow-lg">
              <Tablet className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-foreground text-lg">iPad Repair</h3>
              <p className="text-muted-foreground text-sm mt-1">All models, all issues</p>
            </Link>
            <Link href="/macon/macbook" className="group bg-card border-2 border-border hover:border-primary rounded-xl p-6 text-center transition-all hover:shadow-lg">
              <Laptop className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-foreground text-lg">MacBook Repair</h3>
              <p className="text-muted-foreground text-sm mt-1">Screen, keyboard, battery</p>
            </Link>
            <Link href="/macon/game-console-repair" className="group bg-card border-2 border-border hover:border-primary rounded-xl p-6 text-center transition-all hover:shadow-lg">
              <Gamepad2 className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-foreground text-lg">Game Console</h3>
              <p className="text-muted-foreground text-sm mt-1">PS5, Xbox, Switch</p>
            </Link>
          </div>

          {/* Issue Type Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/macon/screen-repair" className="flex items-center gap-3 bg-secondary/30 hover:bg-secondary/60 rounded-lg p-4 transition-colors">
              <Smartphone className="h-6 w-6 text-primary shrink-0" />
              <div><p className="font-semibold text-foreground">Cracked Screen</p><p className="text-xs text-muted-foreground">Same-day fix</p></div>
            </Link>
            <Link href="/macon/battery-replacement" className="flex items-center gap-3 bg-secondary/30 hover:bg-secondary/60 rounded-lg p-4 transition-colors">
              <Zap className="h-6 w-6 text-primary shrink-0" />
              <div><p className="font-semibold text-foreground">Battery Dying Fast</p><p className="text-xs text-muted-foreground">All models</p></div>
            </Link>
            <Link href="/macon/charging-port-repair" className="flex items-center gap-3 bg-secondary/30 hover:bg-secondary/60 rounded-lg p-4 transition-colors">
              <Zap className="h-6 w-6 text-primary shrink-0" />
              <div><p className="font-semibold text-foreground">Not Charging</p><p className="text-xs text-muted-foreground">Fast turnaround</p></div>
            </Link>
            <Link href="/macon/water-damage" className="flex items-center gap-3 bg-secondary/30 hover:bg-secondary/60 rounded-lg p-4 transition-colors">
              <Droplets className="h-6 w-6 text-primary shrink-0" />
              <div><p className="font-semibold text-foreground">Water Damage</p><p className="text-xs text-muted-foreground">Call us ASAP</p></div>
            </Link>
            <Link href="/macon/data-recovery" className="flex items-center gap-3 bg-secondary/30 hover:bg-secondary/60 rounded-lg p-4 transition-colors">
              <HardDrive className="h-6 w-6 text-primary shrink-0" />
              <div><p className="font-semibold text-foreground">Data Recovery</p><p className="text-xs text-muted-foreground">Free diagnosis</p></div>
            </Link>
            <Link href="/macon/services" className="flex items-center gap-3 bg-primary/10 hover:bg-primary/20 rounded-lg p-4 transition-colors border border-primary/30">
              <Shield className="h-6 w-6 text-primary shrink-0" />
              <div><p className="font-semibold text-primary">View All Services</p><p className="text-xs text-muted-foreground">15+ repair types</p></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">Why Macon Trusts Tech Medics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">30-Minute Repairs</h3>
              <p className="text-muted-foreground">Most iPhone screen and battery repairs are done while you wait. No appointment needed.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">30-Day Warranty</h3>
              <p className="text-muted-foreground">Every repair is backed by our 30-day parts and labor warranty. If it fails, we fix it free.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">No Fix, No Fee</h3>
              <p className="text-muted-foreground">Free diagnosis on every device. If we can&apos;t fix it, you don&apos;t pay a cent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-1 mb-10">
            {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
            <span className="ml-2 text-muted-foreground font-medium">4.9 / 5 on Google</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex gap-1 mb-3">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
              <p className="text-muted-foreground mb-4 italic">&ldquo;Cracked my iPhone screen and they fixed it in 20 minutes! Best iPhone repair service in Macon.&rdquo;</p>
              <p className="font-semibold text-foreground text-sm">— Jessica M.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex gap-1 mb-3">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
              <p className="text-muted-foreground mb-4 italic">&ldquo;My iPad Pro screen was shattered. They replaced it same day and it looks brand new. Highly recommend!&rdquo;</p>
              <p className="font-semibold text-foreground text-sm">— Thomas R.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex gap-1 mb-3">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
              <p className="text-muted-foreground mb-4 italic">&ldquo;My iPhone battery was draining so fast. They replaced it while I waited and now it lasts all day!&rdquo;</p>
              <p className="font-semibold text-foreground text-sm">— Brandon C.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location + CTA */}
      <section id="contact" className="py-16 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Visit Us Today — No Appointment Needed</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">3742 Eisenhower Parkway</p>
                    <p className="text-muted-foreground">Macon, GA 31206 · Easy I-75 access</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Store Hours</p>
                    <p className="text-muted-foreground">Mon–Fri: 10:00 AM – 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM – 5:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">(478) 259-6371</p>
                    <p className="text-muted-foreground">Call or walk in anytime during hours</p>
                  </div>
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
            <a href="https://www.google.com/maps/place/3742+Eisenhower+Pkwy,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer" className="block bg-muted rounded-xl overflow-hidden h-80 shadow-lg relative group">
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

      {/* Final CTA Banner */}
      <section className="py-12 px-4 bg-primary text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Get Your Device Fixed?</h2>
          <p className="text-primary-foreground/80 mb-6">Walk in today or call ahead — we&apos;ll have it ready fast.</p>
          <a href="tel:(478)259-6371" className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold text-xl px-10 py-4 rounded-lg hover:bg-slate-100 transition-colors shadow-lg">
            <Phone className="h-6 w-6" /> (478) 259-6371
          </a>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary text-primary-foreground p-3 shadow-2xl">
        <a href="tel:(478)259-6371" className="flex items-center justify-center gap-2 font-bold text-lg w-full">
          <Phone className="h-5 w-5" /> Call Now — (478) 259-6371
        </a>
      </div>
    </>
  );
}
