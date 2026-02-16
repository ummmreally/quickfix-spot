import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Award, Users, Shield, Wrench, Star, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Tech Medics – Macon GA iPhone Screen Repair Experts | 10+ Years Experience",
  description: "Tech Medics offers expert iPhone screen repair in Macon, GA with 10+ years experience. Same-day iPad, MacBook & Apple device repair. 30-day warranty. Call (478) 259-6371.",
  keywords: ["about Tech Medics Macon", "iPhone repair experts Macon GA", "Apple repair shop Macon", "phone repair experience Macon"],
  alternates: { canonical: "https://techmedicsmacon.com/macon/about" },
  openGraph: {
    title: "About Tech Medics – Macon GA iPhone Screen Repair Experts",
    description: "10+ years experience in Apple device repair. Serving Macon, GA with same-day service and 30-day warranty.",
    url: "https://techmedicsmacon.com/macon/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">About Tech Medics</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">Macon&apos;s Premier iPhone Screen Repair &amp; Apple Device Specialists</p>
            <p className="text-lg text-muted-foreground">We&apos;re new to the area, not repairs</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="text-center border-primary/20"><CardContent className="pt-6"><div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div><p className="text-sm text-muted-foreground">Years Experience</p></CardContent></Card>
            <Card className="text-center border-primary/20"><CardContent className="pt-6"><div className="text-4xl md:text-5xl font-bold text-primary mb-2">1000+</div><p className="text-sm text-muted-foreground">Devices Repaired</p></CardContent></Card>
            <Card className="text-center border-primary/20"><CardContent className="pt-6"><a href="https://www.google.com/search?q=tech+medics+macon" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity"><div className="text-4xl md:text-5xl font-bold text-primary mb-2">5.0★</div><p className="text-sm text-muted-foreground">Google Rating</p></a></CardContent></Card>
            <Card className="text-center border-primary/20"><CardContent className="pt-6"><div className="text-4xl md:text-5xl font-bold text-primary mb-2">30</div><p className="text-sm text-muted-foreground">Day Warranty</p></CardContent></Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-lg text-foreground leading-relaxed mb-6">With over a decade of experience in Apple repairs, Tech Medics brings expert iPhone screen repair services to Macon, GA. Our journey started with a simple mission: to provide the fastest, most reliable Apple device repairs in Middle Georgia.</p>
              <p className="text-lg text-foreground leading-relaxed mb-6">We pride ourselves on delivering exceptional service that exceeds our customers&apos; expectations. Our skilled technicians are proficient in diagnosing and fixing a wide range of issues, from iPhone screen replacements to iPad battery enhancements, ensuring that your device functions like new again.</p>
              <p className="text-lg text-foreground leading-relaxed">We understand the importance of your time and device, which is why we offer same-day service for most repairs without compromising quality. Our commitment to amazing customer service means that we go the extra mile to provide clear communication, personalized solutions, and support every step of the way.</p>
            </div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Why Choose Tech Medics?</h3>
                <div className="space-y-4">
                  {[
                    { title: "Certified Experts", desc: "Certified technicians with 10+ years experience" },
                    { title: "Same-Day Service", desc: "Most iPhone screen repairs done in 30-60 minutes" },
                    { title: "30-Day Warranty", desc: "Full warranty on all parts and labor" },
                    { title: "Free Diagnostics", desc: "Complimentary device inspection and quote" },
                    { title: "Price Match Guarantee", desc: "Best prices in Macon, GA guaranteed" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div><h4 className="font-semibold text-foreground mb-1">{item.title}</h4><p className="text-sm text-muted-foreground">{item.desc}</p></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Our Service Guarantee</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card><CardContent className="p-6 text-center"><Shield className="h-12 w-12 text-primary mx-auto mb-4" /><h3 className="text-xl font-bold mb-3 text-foreground">30-Day Warranty</h3><p className="text-muted-foreground">All iPhone screen repairs and Apple device services come with our comprehensive 30-day parts and labor warranty</p></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><Clock className="h-12 w-12 text-primary mx-auto mb-4" /><h3 className="text-xl font-bold mb-3 text-foreground">Same-Day Repairs</h3><p className="text-muted-foreground">Most iPhone screen repairs completed within 30-60 minutes. Walk in or schedule your appointment today</p></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><Award className="h-12 w-12 text-primary mx-auto mb-4" /><h3 className="text-xl font-bold mb-3 text-foreground">Price Match</h3><p className="text-muted-foreground">Find a lower price in Macon? We&apos;ll match it. Quality iPhone screen repair at the best prices guaranteed</p></CardContent></Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">What Our Macon Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Cracked my iPhone screen at work. Tech Medics had it fixed in under an hour! Best iPhone screen repair in Macon, hands down.", name: "Sarah M.", loc: "Macon, GA" },
              { text: "My MacBook wouldn't turn on. The techs diagnosed and fixed it same day. Professional and affordable Apple repair service.", name: "James T.", loc: "Macon, GA" },
              { text: "My iPad screen was shattered. They replaced it while I waited and explained everything. Great service and fair pricing!", name: "Emily R.", loc: "Macon, GA" },
            ].map((t) => (
              <Card key={t.name}><CardContent className="p-6">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}</div>
                <p className="text-foreground mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.loc}</p>
              </CardContent></Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg"><a href="https://www.google.com/search?q=tech+medics+macon+reviews" target="_blank" rel="noopener noreferrer">Read More Reviews on Google</a></Button>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Proud to Serve Macon, GA</h2>
          <p className="text-lg text-foreground leading-relaxed mb-8">As a locally-focused business, we&apos;re committed to providing Macon and Middle Georgia with the best iPhone screen repair and Apple device services. From Mercer University students to downtown businesses, we&apos;re here to keep Macon connected.</p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <Card><CardContent className="p-6"><MapPin className="h-10 w-10 text-primary mb-4" /><h3 className="text-xl font-bold mb-2 text-foreground">Serving Macon</h3><p className="text-muted-foreground">Conveniently located to serve all of Macon, Bibb County, and surrounding Middle Georgia communities</p></CardContent></Card>
            <Card><CardContent className="p-6"><Users className="h-10 w-10 text-primary mb-4" /><h3 className="text-xl font-bold mb-2 text-foreground">Community Partners</h3><p className="text-muted-foreground">Supporting local businesses, schools, and organizations with reliable Apple device repair and bulk service discounts</p></CardContent></Card>
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Get iPhone Screen Repair in Macon Today</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card><CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3"><Phone className="h-6 w-6 text-primary flex-shrink-0" /><div><p className="text-sm text-muted-foreground">Call or Text</p><a href="tel:(478)259-6371" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">(478) 259-6371</a></div></div>
                <div className="flex items-center gap-3"><MapPin className="h-6 w-6 text-primary flex-shrink-0" /><div><p className="text-sm text-muted-foreground">Location</p><p className="text-lg font-semibold text-foreground">3742 Eisenhower Parkway, Macon, GA 31206</p></div></div>
                <div className="flex items-start gap-3"><Wrench className="h-6 w-6 text-primary flex-shrink-0 mt-1" /><div><p className="text-sm text-muted-foreground">Email</p><a href="mailto:Support@MyTechMedics.com" className="text-lg font-semibold text-foreground hover:text-primary transition-colors break-all">Support@MyTechMedics.com</a></div></div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"><a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call for iPhone Screen Repair</a></Button>
              </div>
            </CardContent></Card>
            <Card><CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border"><span className="font-medium text-foreground">Monday – Friday</span><span className="text-muted-foreground">10:00 AM – 6:00 PM</span></div>
                <div className="flex justify-between items-center py-2 border-b border-border"><span className="font-medium text-foreground">Saturday</span><span className="text-muted-foreground">10:00 AM – 5:00 PM</span></div>
                <div className="flex justify-between items-center py-2"><span className="font-medium text-foreground">Sunday</span><span className="text-muted-foreground">Closed</span></div>
              </div>
              <div className="mt-8 p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm text-foreground font-semibold mb-2">Walk-ins Welcome!</p>
                <p className="text-sm text-muted-foreground">Most iPhone screen repairs completed in 30-60 minutes. No appointment necessary.</p>
              </div>
            </CardContent></Card>
          </div>
        </div>
      </section>
    </>
  );
}
