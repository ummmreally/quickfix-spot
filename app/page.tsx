import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Shield, Wrench, Star, ExternalLink, CheckCircle2, Award, Cpu, Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import FAQSection from "./components/FAQSection";

export const metadata: Metadata = {
  title: "iPhone Screen Repair Macon GA | iPad & MacBook Repair | Same Day Service",
  description:
    "Expert iPhone screen repair, iPad repair & MacBook repair in Macon GA. Fast 30-minute service. Battery replacements, charging port fixes. Walk-ins welcome at 3742 Eisenhower Pkwy. Call (478) 259-6371",
  alternates: { canonical: "https://techmedicsmacon.com/" },
  openGraph: {
    title: "iPhone Screen Repair Macon GA | Same Day iPad & MacBook Repair",
    description: "Macon's #1 iPhone screen repair experts. Fast iPad & MacBook repairs. 30-minute service, walk-ins welcome. 3742 Eisenhower Parkway.",
    url: "https://techmedicsmacon.com/",
  },
};

const testimonials = [
  { name: "Jessica M.", rating: 5, text: "Cracked my iPhone screen and they fixed it in 20 minutes! Best iPhone repair service in Macon. Professional, fast, and affordable.", date: "2024-03-22", service: "iPhone Screen Repair" },
  { name: "Thomas R.", rating: 5, text: "My iPad Pro screen was shattered. They replaced it same day and it looks brand new. Highly recommend for iPad repair in Macon!", date: "2024-03-19", service: "iPad Screen Replacement" },
  { name: "Karen W.", rating: 5, text: "MacBook Air keyboard wasn't working right. They diagnosed and fixed it quickly. Great MacBook repair shop, very knowledgeable staff.", date: "2024-03-16", service: "MacBook Keyboard Repair" },
  { name: "Brandon C.", rating: 5, text: "My iPhone battery was draining so fast. They replaced it while I waited and now it lasts all day. Best repair experience in Macon!", date: "2024-03-11", service: "iPhone Battery Replacement" },
  { name: "Michelle D.", rating: 5, text: "Dropped my iPad in water and thought it was done for. They recovered it and saved all my data! Amazing water damage repair service.", date: "2024-03-07", service: "iPad Water Damage Repair" },
  { name: "Steven J.", rating: 5, text: "Professional MacBook screen repair. They kept me updated throughout the process and the work is flawless. Will definitely return!", date: "2024-03-03", service: "MacBook Screen Replacement" },
];

const faqs = [
  { question: "How long do repairs take at your Macon location?", answer: "Most iPhone screen repairs take 30 minutes or less. iPad repairs typically take 1-2 hours, and MacBook repairs range from 2-4 hours depending on the service. We offer same-day service for most repairs at our Eisenhower Parkway location." },
  { question: "Do you offer same-day Apple device repair in Macon?", answer: "Yes! We specialize in same-day repairs for iPhone, iPad, and MacBook devices. Most iPhone repairs are completed while you wait. No appointment needed – just walk in during our business hours." },
  { question: "What areas do you serve besides Macon, GA?", answer: "We proudly serve Macon and surrounding areas including Warner Robins, Byron, Forsyth, Perry, and all of Bibb County. We're conveniently located at 3742 Eisenhower Parkway for easy access from anywhere in Central Georgia." },
  { question: "Are your parts genuine Apple parts or third-party?", answer: "We use high-quality replacement parts that meet or exceed OEM specifications. All parts come with a warranty and are tested before installation to ensure quality and performance." },
  { question: "How much do repairs typically cost?", answer: "Prices vary by device and repair type. iPhone screen repairs start around $79, iPad repairs from $99, and MacBook repairs from $299. Call (478) 259-6371 for an exact quote for your specific device and issue." },
  { question: "Do you offer warranties on repairs?", answer: "Yes! All our repairs are backed by a comprehensive warranty. We stand behind our workmanship and the quality of our parts to ensure your device repair lasts." },
  { question: "Can you fix water-damaged devices?", answer: "Yes, we specialize in water damage repair for iPhones, iPads, and MacBooks. Bring your device to us as soon as possible after water exposure for the best chance of recovery." },
  { question: "Do I need an appointment or can I walk in?", answer: "No appointment necessary! We welcome walk-ins Monday-Friday 10am-6pm and Saturday 10am-5pm. For faster service during busy times, you can call ahead at (478) 259-6371." },
];

const comparisonData = [
  { feature: "Warranty Included", diy: false, competitor: true, us: true },
  { feature: "Same-Day Service", diy: false, competitor: false, us: true },
  { feature: "Quality Parts", diy: false, competitor: true, us: true },
  { feature: "Expert Technicians", diy: false, competitor: true, us: true },
  { feature: "No Appointment Needed", diy: true, competitor: false, us: true },
  { feature: "30-Minute Repairs", diy: false, competitor: false, us: true },
  { feature: "Local Support", diy: false, competitor: false, us: true },
  { feature: "Price Match Guarantee", diy: false, competitor: false, us: true },
];

const neighborhoods = [
  { href: "/macon/vineville", name: "Vineville", desc: "Near Mercer University" },
  { href: "/macon/north-macon", name: "North Macon", desc: "The Crossing area" },
  { href: "/macon/downtown", name: "Downtown", desc: "Cherry Street district" },
  { href: "/macon/ingleside", name: "Ingleside", desc: "Wesleyan College area" },
  { href: "/macon/east-macon", name: "East Macon", desc: "River Crossing area" },
  { href: "/macon/south-macon", name: "South Macon", desc: "Macon Mall area" },
  { href: "/macon/rutland", name: "Rutland", desc: "Bass Road area" },
  { href: "/macon/warner-robins", name: "Warner Robins", desc: "20 min via I-75" },
  { href: "/macon/byron", name: "Byron", desc: "Peach County" },
  { href: "/macon/perry", name: "Perry", desc: "Houston County" },
  { href: "/macon/forsyth", name: "Forsyth", desc: "Monroe County" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              iPhone Screen Repair in Macon, GA – Fast, Reliable, Local
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
              Expert iPhone, iPad &amp; MacBook Repair in Macon Georgia
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Most iPhone screen repairs done in 30 minutes or less<br />
              Conveniently located at 3742 Eisenhower Parkway, Macon GA 31206<br />
              Walk-ins welcome – No appointment needed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8 py-6">
                <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-5 w-5" />Get Directions
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
              <div className="glass-card p-4 rounded-xl"><Clock className="h-8 w-8 text-primary mx-auto mb-2" /><p className="font-semibold">30-Min Service</p></div>
              <div className="glass-card p-4 rounded-xl"><Shield className="h-8 w-8 text-primary mx-auto mb-2" /><p className="font-semibold">Warranty Included</p></div>
              <div className="glass-card p-4 rounded-xl"><Wrench className="h-8 w-8 text-primary mx-auto mb-2" /><p className="font-semibold">Expert Techs</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 px-4 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-background border-2 border-primary/20 rounded-full p-3"><CheckCircle2 className="h-6 w-6 text-primary" /></div>
              <p className="text-sm font-semibold text-foreground">High-Quality Parts</p>
              <p className="text-xs text-muted-foreground">OEM &amp; Premium Options</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-background border-2 border-primary/20 rounded-full p-3"><Award className="h-6 w-6 text-primary" /></div>
              <p className="text-sm font-semibold text-foreground">Certified Technicians</p>
              <p className="text-xs text-muted-foreground">Free Counter Diagnostics</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-background border-2 border-primary/20 rounded-full p-3"><Shield className="h-6 w-6 text-primary" /></div>
              <p className="text-sm font-semibold text-foreground">30 Day Warranty</p>
              <p className="text-xs text-muted-foreground">On All Repairs</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-background border-2 border-primary/20 rounded-full p-3"><Cpu className="h-6 w-6 text-primary" /></div>
              <p className="text-sm font-semibold text-foreground">Advanced Equipment</p>
              <p className="text-xs text-muted-foreground">Latest Repair Technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Review Display */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-6 px-4">
        <div className="flex items-center gap-2">
          <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}</div>
          <span className="text-lg font-bold text-foreground">4.9 / 5.0</span>
        </div>
        <p className="text-sm text-muted-foreground">Based on <span className="font-semibold text-foreground">60+ verified reviews</span></p>
        <Button asChild variant="outline" size="sm" className="border-primary/30 hover:bg-primary/5">
          <a href="https://www.google.com/maps/place/Tech+Medics/@32.8407,-83.6324,17z" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            Read Reviews<ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </div>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Professional Apple Device Repair Services in Macon, GA</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">From iPhone screen repair to iPad glass replacement and MacBook logic board fixes – we handle all Apple device repairs in Macon with precision and care</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { href: "/macon/iphone", img: "/images/iphone-screen-repair-macon.webp", alt: "iPhone screen repair Macon GA - cracked screen fix", title: "iPhone Screen Repair Macon GA", items: ["Cracked iPhone screen replacement", "iPhone battery replacement", "Charging port repair", "Water damage repair", "All iPhone models supported"], cta: "iPhone Repair Services →", eager: true },
              { href: "/macon/ipad", img: "/images/ipad-screen-repair-macon.webp", alt: "iPad repair Macon GA - screen and glass repair", title: "iPad Repair Macon GA", items: ["iPad screen replacement", "iPad glass repair", "iPad battery service", "iPad charging issues", "All iPad models serviced"], cta: "iPad Repair Services →" },
              { href: "/macon/macbook", img: "/images/macbook-repair-macon.webp", alt: "MacBook repair Macon GA - screen and logic board repair", title: "MacBook Repair Macon GA", items: ["MacBook screen replacement", "Keyboard repair", "Battery replacement", "Logic board repair", "MacBook Air & Pro supported"], cta: "MacBook Repair Services →" },
            ].map((svc) => (
              <Link key={svc.href} href={svc.href} className="group">
                <div className="glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={svc.img} alt={svc.alt} width="662" height="496" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading={svc.eager ? "eager" : "lazy"} decoding="async" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{svc.title}</h3>
                    <ul className="space-y-2 text-muted-foreground">{svc.items.map((item) => <li key={item}>✓ {item}</li>)}</ul>
                    <Button className="mt-4 w-full" variant="outline">{svc.cta}</Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Why Macon Trusts Us for iPhone Screen Repair &amp; More</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Lightning Fast Service", desc: "Most iPhone screen repairs completed in 30 minutes or less while you wait" },
              { icon: Shield, title: "30-Day Warranty", desc: "All repairs backed by our comprehensive warranty for peace of mind" },
              { icon: MapPin, title: "Macon Local", desc: "Proudly serving Macon, GA at 3742 Eisenhower Parkway since 2010" },
              { icon: Wrench, title: "Expert Technicians", desc: "Certified Apple repair specialists with years of experience" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="glass-card w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><item.icon className="h-8 w-8 text-primary" /></div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Visit Our iPhone Repair Shop in Macon, GA</h2>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" />Address</h3>
                  <p className="text-muted-foreground ml-7">3742 Eisenhower Parkway<br />Macon, GA 31206</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><Clock className="h-5 w-5 text-primary" />Hours</h3>
                  <p className="text-muted-foreground ml-7">Monday - Friday: 10:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 5:00 PM<br />Sunday: Closed</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><Phone className="h-5 w-5 text-primary" />Phone</h3>
                  <p className="text-muted-foreground ml-7">(478) 259-6371</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call Now for iPhone Repair</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2">
                  <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-5 w-5" />Get Directions
                  </a>
                </Button>
              </div>
            </div>
            <a href="https://www.google.com/maps/place/3742+Eisenhower+Pkwy,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer" className="block bg-muted rounded-lg overflow-hidden h-96 shadow-lg relative group">
              <img src="/images/map-location.png" alt="Map showing Tech Medics location at 3742 Eisenhower Parkway, Macon GA 31206" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs text-muted-foreground shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">Open in Google Maps →</div>
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Macon&apos;s Premier iPhone Screen Repair &amp; Apple Device Service Center</h2>
            <p className="text-muted-foreground mb-4">When you need fast, reliable <strong>iPhone screen repair in Macon, GA</strong>, Tech Medics is your trusted local solution. Located conveniently at 3742 Eisenhower Parkway in Macon, Georgia, we specialize in same-day Apple device repairs including iPhone screen replacement, iPad repair, and MacBook service.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Expert iPhone Repair Services in Macon</h3>
            <p className="text-muted-foreground mb-4">Our certified technicians handle all types of <strong>iPhone repairs in Macon</strong>, from cracked screen replacements to battery issues, charging port problems, and water damage recovery. We service all iPhone models including the latest iPhone 15, iPhone 14, iPhone 13, and older generations. Most <strong>iPhone screen repairs in Macon GA</strong> are completed in 30 minutes or less.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Complete iPad &amp; MacBook Repair in Macon, Georgia</h3>
            <p className="text-muted-foreground mb-4">Beyond iPhone repair, we&apos;re your full-service Apple repair shop in Macon. Our <strong>iPad repair services in Macon</strong> include screen replacement, glass repair, and battery service. For <strong>MacBook repair in Macon GA</strong>, we handle everything from screen replacement and keyboard repairs to logic board diagnostics and battery replacement.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Why Choose Tech Medics for iPhone Screen Repair in Macon?</h3>
            <p className="text-muted-foreground mb-4">As Macon&apos;s most trusted Apple repair center, we combine fast turnaround times with quality workmanship. Walk-ins are always welcome – no appointment necessary. Every repair is backed by our warranty, and we use high-quality replacement parts.</p>
            <p className="text-muted-foreground"><strong>Serving Macon, GA and surrounding areas</strong> including Warner Robins, Byron, Forsyth, and all of Bibb County with professional Apple device repair services since 2010.</p>
          </article>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Why Choose Us for iPhone, iPad &amp; MacBook Repair in Macon?</h2>
          <p className="text-center text-muted-foreground mb-12">Compare your repair options and see the Tech Medics difference</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-bold text-foreground">Feature</th>
                  <th className="text-center p-4 font-bold text-muted-foreground">DIY Repair</th>
                  <th className="text-center p-4 font-bold text-muted-foreground">Other Shops</th>
                  <th className="text-center p-4 font-bold text-primary-foreground bg-primary">Tech Medics</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.feature} className="border-b border-border last:border-0">
                    <td className="p-4 font-medium text-foreground">{row.feature}</td>
                    <td className="p-4 text-center">{row.diy ? <Check className="h-5 w-5 text-green-600 mx-auto" /> : <X className="h-5 w-5 text-muted-foreground mx-auto" />}</td>
                    <td className="p-4 text-center">{row.competitor ? <Check className="h-5 w-5 text-green-600 mx-auto" /> : <X className="h-5 w-5 text-muted-foreground mx-auto" />}</td>
                    <td className="p-4 text-center bg-primary/5">{row.us ? <Check className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-muted-foreground mx-auto" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection deviceType="iPhone, iPad & MacBook" faqs={faqs} />

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">What Our Customers Say</h2>
          <p className="text-center text-muted-foreground mb-12">Real reviews from satisfied customers in Macon, GA</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="p-6 border-border hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">{[...Array(t.rating)].map((_, j) => <Star key={j} className="h-5 w-5 fill-primary text-primary" />)}</div>
                <p className="text-muted-foreground mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.service}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Links */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">Repair Guides &amp; Resources</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Expert advice on device repair, maintenance tips, and cost guides for Macon GA residents</p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { href: "/blog/iphone-screen-repair-macon-ga", title: "iPhone Screen Repair Guide", desc: "Complete guide to screen repair costs, quality options, and what to expect." },
              { href: "/blog/ipad-screen-repair-macon", title: "iPad Screen Repair Tips", desc: "All iPad models supported - Pro, Air, Mini. Pricing and repair times." },
              { href: "/blog/iphone-battery-replacement-macon", title: "When to Replace Your Battery", desc: "Signs your battery needs replacing, costs, and same-day service info." },
              { href: "/blog/iphone-dying-fast-after-charging", title: "Fixing Fast Battery Drain", desc: "11 proven fixes for iPhone battery draining too fast." },
              { href: "/blog/macbook-repair-macon-ga", title: "MacBook Repair in Macon", desc: "Screen, keyboard, battery, and logic board repair services." },
              { href: "/blog/tech-medics-vs-apple-store-repair", title: "Tech Medics vs Apple Store", desc: "Compare costs, warranty, and turnaround times." },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="glass-card rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-2 text-foreground">{post.title}</h3>
                <p className="text-muted-foreground text-sm">{post.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center"><Link href="/blog" className="text-primary hover:underline font-semibold">View All Repair Guides →</Link></div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">Serving Macon GA &amp; Surrounding Cities</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Conveniently located at 3742 Eisenhower Parkway - serving Macon, Warner Robins, Byron, Perry &amp; Forsyth</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {neighborhoods.map((n) => (
              <Link key={n.href} href={n.href} className="glass-card rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-foreground">{n.name}</h3>
                <p className="text-muted-foreground text-sm">{n.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
