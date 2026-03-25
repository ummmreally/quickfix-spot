import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Star, CheckCircle, Smartphone, Shield, ShoppingBag, Cable, Battery, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "Tech Medics Macon GA | Device Accessories | (478) 259-6371",
  description: "Tech Medics is an independently owned device accessories shop in Macon, GA. iPhone cases, screen protectors, chargers, cables, and more at 3742 Eisenhower Pkwy. Walk-ins welcome.",
  keywords: ["phone accessories Macon GA", "iPhone cases Macon", "screen protectors Macon GA", "phone chargers Macon", "Tech Medics Macon", "device accessories Macon GA", "phone store Macon"],
  alternates: { canonical: "https://techmedicsmacon.com/macon" },
  openGraph: {
    title: "Device Accessories in Macon GA | Tech Medics",
    description: "Independently owned device accessories shop in Macon. Cases, screen protectors, chargers, cables, and more. Walk-ins welcome.",
    url: "https://techmedicsmacon.com/macon",
  },
};

export default function MaconLandingPage() {
  return (
    <>
      {/* Info Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4 text-sm font-medium">
        <span className="inline-flex items-center gap-2 flex-wrap justify-center">
          <Clock className="h-4 w-4 shrink-0" />
          Open Today: Mon–Fri 10 AM – 6 PM · Sat 10 AM – 5 PM · Walk-Ins Welcome
        </span>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 md:py-24 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-slate-300 text-sm font-medium">4.9 stars · 60+ Google Reviews</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Device Accessories<br className="hidden md:block" /> in Macon, GA
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Independently owned shop on Eisenhower Parkway carrying iPhone cases, screen protectors, chargers, cables, and more. Walk in or call us today.
          </p>
          <div className="mb-8 rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-center text-sm text-slate-200 max-w-3xl mx-auto">
            <p className="font-semibold text-white mb-1">Tech Medics Macon</p>
            <p>3742 Eisenhower Parkway, Macon, GA 31206 · (478) 259-6371</p>
            <p>Mon–Fri 10:00 AM – 6:00 PM · Sat 10:00 AM – 5:00 PM · Sun Closed</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:(478)259-6371" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors shadow-lg">
              <Phone className="h-5 w-5" /> Call (478) 259-6371
            </a>
            <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold text-lg px-8 py-4 rounded-lg transition-colors shadow-lg">
              <MapPin className="h-5 w-5" /> Get Directions
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-slate-300 text-sm">
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-400" /> Walk-Ins Welcome</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-400" /> Major-Brand Accessories</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-400" /> Accessory Fitting</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-400" /> Independently Owned</span>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-green-700 text-white py-3 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-sm font-semibold">
          <span>✓ 60+ Five-Star Google Reviews</span>
          <span>✓ Independently Owned in Macon</span>
          <span>✓ Major-Brand Accessories In Store</span>
          <span>✓ Walk-Ins Welcome</span>
        </div>
      </section>

      {/* Accessories Grid */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">Shop Device Accessories</h2>
          <p className="text-center text-muted-foreground mb-10 text-lg">Browse our in-store selection of cases, chargers, screen protectors, and more</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="group bg-card border-2 border-border hover:border-primary rounded-xl p-6 text-center transition-all hover:shadow-lg">
              <Smartphone className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-foreground text-lg">Phone Cases</h3>
              <p className="text-muted-foreground text-sm mt-1">iPhone &amp; iPad</p>
            </div>
            <div className="group bg-card border-2 border-border hover:border-primary rounded-xl p-6 text-center transition-all hover:shadow-lg">
              <Shield className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-foreground text-lg">Screen Protectors</h3>
              <p className="text-muted-foreground text-sm mt-1">Tempered glass &amp; film</p>
            </div>
            <div className="group bg-card border-2 border-border hover:border-primary rounded-xl p-6 text-center transition-all hover:shadow-lg">
              <Cable className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-foreground text-lg">Cables &amp; Adapters</h3>
              <p className="text-muted-foreground text-sm mt-1">Lightning, USB-C, HDMI</p>
            </div>
            <div className="group bg-card border-2 border-border hover:border-primary rounded-xl p-6 text-center transition-all hover:shadow-lg">
              <Battery className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-foreground text-lg">Chargers &amp; Power Banks</h3>
              <p className="text-muted-foreground text-sm mt-1">Wall, car &amp; portable</p>
            </div>
            <div className="group bg-card border-2 border-border hover:border-primary rounded-xl p-6 text-center transition-all hover:shadow-lg">
              <Headphones className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-foreground text-lg">Audio Accessories</h3>
              <p className="text-muted-foreground text-sm mt-1">Earbuds, headphones &amp; mounts</p>
            </div>
            <div className="group bg-card border-2 border-border hover:border-primary rounded-xl p-6 text-center transition-all hover:shadow-lg">
              <ShoppingBag className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-foreground text-lg">More In Store</h3>
              <p className="text-muted-foreground text-sm mt-1">Visit to see the full selection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit Us */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">Why Customers Choose Tech Medics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">In-Store Selection</h3>
              <p className="text-muted-foreground">Browse name-brand phone cases, screen protectors, chargers, and cables. See products in person before you buy.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Accessory Fitting</h3>
              <p className="text-muted-foreground">Not sure what you need? Walk in and our team will help you find the right accessory for your device.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Independent Local Shop</h3>
              <p className="text-muted-foreground">Tech Medics is independently owned and operated in Macon, with transparent contact information and direct local accountability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What To Expect */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">What To Expect When You Visit</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Business Information</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold text-foreground">Business:</span> Tech Medics Macon</p>
                <p><span className="font-semibold text-foreground">Address:</span> 3742 Eisenhower Parkway, Macon, GA 31206</p>
                <p><span className="font-semibold text-foreground">Phone:</span> (478) 259-6371</p>
                <p><span className="font-semibold text-foreground">Ownership:</span> Independently owned and operated</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Store Policies</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Walk-ins welcome during business hours.</p>
                <p>Free accessory fitting and product advice.</p>
                <p>Privacy and policy details are available below.</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-5">
                <Link href="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link>

                <Link href="/macon/contact" className="text-primary hover:underline font-medium">Contact Page</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">Customer Reviews</h2>
          <div className="flex items-center justify-center gap-1 mb-10">
            {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
            <span className="ml-2 text-muted-foreground font-medium">4.9 / 5 on Google</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex gap-1 mb-3">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
              <p className="text-muted-foreground mb-4 italic">&ldquo;Super friendly staff and they had exactly the case I needed for my iPhone. Great local shop!&rdquo;</p>
              <p className="font-semibold text-foreground text-sm">— Jessica M.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex gap-1 mb-3">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
              <p className="text-muted-foreground mb-4 italic">&ldquo;Walked in and got a screen protector installed in minutes. Very knowledgeable team. Highly recommend!&rdquo;</p>
              <p className="font-semibold text-foreground text-sm">— Thomas R.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex gap-1 mb-3">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
              <p className="text-muted-foreground mb-4 italic">&ldquo;Best place in Macon for phone accessories. They helped me pick the right charger and cable for my setup.&rdquo;</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Visit Our Macon Store</h2>
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
                  <a href="https://www.google.com/maps/place/3742+Eisenhower+Pkwy,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-5 w-5" />Get Directions
                  </a>
                </Button>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/place/3742+Eisenhower+Pkwy,+Macon,+GA+31206"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-muted rounded-xl overflow-hidden h-80 shadow-lg relative group"
              aria-label="Get directions to Tech Medics Macon on Google Maps"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/map-location.png"
                alt="Map showing Tech Medics at 3742 Eisenhower Pkwy, Macon GA 31206"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
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
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Need Device Accessories?</h2>
          <p className="text-primary-foreground/80 mb-6">Call ahead, get directions, or walk in during store hours at 3742 Eisenhower Parkway in Macon.</p>
          <a href="tel:(478)259-6371" className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold text-xl px-10 py-4 rounded-lg hover:bg-slate-100 transition-colors shadow-lg">
            <Phone className="h-6 w-6" /> (478) 259-6371
          </a>
          <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/privacy" className="text-primary-foreground/90 hover:text-primary-foreground underline underline-offset-4">Privacy Policy</Link>
          </div>
          <p className="mt-6 text-xs text-primary-foreground/70 max-w-2xl mx-auto">
            Tech Medics is an independently owned business and is not affiliated with Apple Inc. or any device manufacturer.
          </p>
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
