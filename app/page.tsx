import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Shield, Wrench, Star, ExternalLink, CheckCircle2, Award, Cpu, Check, X, ArrowRight, Smartphone, Tablet, Laptop, Gamepad2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import FAQSection from "./components/FAQSection";
import HeroCarousel from "./components/HeroCarousel";

export const metadata: Metadata = {
  title: "iPhone Screen Repair Macon GA | iPad & MacBook Repair | 30 Min Same-Day Service | (478) 259-6371",
  description:
    "Macon GA's top-rated iPhone, iPad & MacBook repair shop in 2026. Cracked screen fix from $79, battery swap $59+. iPhone 16e, 16 Pro Max, iPad Pro M4, MacBook Air M4 – all models. 30-min service, walk-ins welcome at 3742 Eisenhower Pkwy. Call (478) 259-6371.",
  keywords: [
    "iPhone screen repair Macon GA", "iPhone repair Macon", "iPad repair Macon GA", "MacBook repair Macon GA",
    "phone repair Macon GA", "cracked screen repair Macon", "iPhone battery replacement Macon",
    "screen repair near me Macon", "Apple repair Macon Georgia", "same day phone repair Macon",
    "iPhone 16e repair Macon", "iPhone 16 Pro Max repair Macon GA", "iPad Pro M4 screen repair Macon",
    "MacBook Air M4 repair Macon", "MacBook Pro M4 repair Macon GA", "laptop repair Macon GA",
    "phone repair near me", "best phone repair Macon 2026",
  ],
  alternates: { canonical: "https://techmedicsmacon.com/" },
  openGraph: {
    title: "iPhone Screen Repair Macon GA | Same-Day iPad & MacBook Repair from $79",
    description: "Macon's highest-rated Apple repair shop. iPhone 16e to MacBook M4 – every model, every fix. 30-minute service, walk-ins welcome.",
    url: "https://techmedicsmacon.com/",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Tech Medics Macon - iPhone iPad MacBook Repair" }],
  },
};

const testimonials = [
  { name: "Jessica M.", rating: 5, text: "Cracked my iPhone 16 screen and they had it fixed in 20 minutes flat! Hands down the best iPhone repair in Macon. Fast, fair pricing, and they even put on a free screen protector.", date: "2026-01-15", service: "iPhone 16 Screen Repair" },
  { name: "Thomas R.", rating: 5, text: "My iPad Pro M4 screen was completely shattered. They had the exact part in stock and replaced it same day. Looks brand new — can't even tell it was broken.", date: "2026-01-08", service: "iPad Pro M4 Screen Replacement" },
  { name: "Karen W.", rating: 5, text: "MacBook Air M3 keyboard stopped working after a coffee spill. They cleaned it, replaced the keyboard, and had it back to me the same afternoon. Incredible turnaround.", date: "2025-12-22", service: "MacBook Keyboard Repair" },
  { name: "Brandon C.", rating: 5, text: "iPhone 15 battery was dying by noon every day. They swapped it in 25 minutes and my phone lasts all day again. Way cheaper than the Apple Store too.", date: "2025-12-14", service: "iPhone Battery Replacement" },
  { name: "Michelle D.", rating: 5, text: "My daughter dropped her iPad in the bathtub. Tech Medics recovered it and saved every photo. I thought it was a goner — these guys are miracle workers.", date: "2025-11-30", service: "iPad Water Damage Repair" },
  { name: "Steven J.", rating: 5, text: "Had my MacBook Pro 14-inch screen replaced here. They texted me updates the whole time and the repair is flawless. Already sent two coworkers their way.", date: "2025-11-18", service: "MacBook Pro Screen Replacement" },
];

const faqs = [
  { question: "How long do repairs take at your Macon location?", answer: "Most iPhone screen repairs — including the iPhone 16e and 16 Pro Max — take 30 minutes or less. iPad repairs typically take 1-2 hours, and MacBook repairs (Air M4, Pro M4) range from 2-4 hours depending on the service. We offer same-day service for most repairs at our Eisenhower Parkway location." },
  { question: "Do you offer same-day Apple device repair in Macon?", answer: "Yes! We specialize in same-day repairs for iPhone, iPad, and MacBook devices in 2026. Most iPhone repairs are completed while you wait — no appointment needed. Walk in any time during business hours." },
  { question: "What areas do you serve besides Macon, GA?", answer: "We serve all of Central Georgia: Macon, Warner Robins, Byron, Forsyth, Perry, Bibb County, Houston County, and Peach County. Located at 3742 Eisenhower Parkway with easy I-75 access from anywhere in the region." },
  { question: "Are your parts genuine Apple parts or third-party?", answer: "We use premium-grade replacement parts that meet or exceed OEM specifications. For 2026 models like the iPhone 16e and iPad Pro M4, we stock both OEM-equivalent and aftermarket options so you can choose the best fit for your budget. All parts come with a 30-day warranty." },
  { question: "How much do repairs typically cost in 2026?", answer: "iPhone screen repairs start at $79 (older models) up to $329 (iPhone 16 Pro Max). iPad screen replacement from $99. MacBook repairs from $299. We're typically 30-50% less than Apple Store pricing. Call (478) 259-6371 for an exact quote." },
  { question: "Do you offer warranties on repairs?", answer: "Every repair comes with our 30-day comprehensive warranty covering both parts and labor. If anything goes wrong with a repair we performed, bring it back and we'll make it right at no extra charge." },
  { question: "Can you fix water-damaged iPhones and iPads?", answer: "Yes — water damage repair is one of our specialties. We use ultrasonic cleaning and micro-soldering to recover devices other shops turn away. The sooner you bring it in after water exposure, the better the chances of full recovery." },
  { question: "Do I need an appointment or can I walk in?", answer: "No appointment needed! Walk-ins welcome Monday-Friday 10am-6pm and Saturday 10am-5pm. During busy periods you can call ahead at (478) 259-6371, but most customers are in and out in under an hour." },
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
  { href: "/macon/south-macon", name: "South Macon", desc: "Bloomfield & Macon Mall area" },
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://techmedicsmacon.com" },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hidden H1 for SEO (carousel has visual headings) */}
      <h1 className="sr-only">iPhone, iPad &amp; MacBook Repair in Macon, GA — Tech Medics</h1>

      {/* Hero Carousel - Mobilesentrix style */}
      <HeroCarousel />

      {/* Promotional Banners - Mobilesentrix style row */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Quality Standards Banner */}
            <div className="flex items-center gap-6 bg-gradient-to-r from-slate-50 to-white rounded-xl p-6 border border-border hover:shadow-md transition-shadow">
              <div className="shrink-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-muted-foreground">Discover Our</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Quality Standards</h3>
                <p className="text-sm text-muted-foreground mt-1">Premium parts that meet or exceed OEM specifications</p>
                <Link href="/macon/apple-genuine-parts" className="text-primary text-sm font-semibold mt-2 inline-flex items-center gap-1 hover:underline">
                  Learn more <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="bg-primary/10 rounded-lg p-3"><Shield className="h-8 w-8 text-primary" /></div>
                <div className="bg-primary/10 rounded-lg p-3"><Award className="h-8 w-8 text-primary" /></div>
              </div>
            </div>

            {/* Tech / Warranty Banner */}
            <div className="flex items-center gap-6 bg-gradient-to-r from-primary/5 to-white rounded-xl p-6 border border-border hover:shadow-md transition-shadow">
              <div className="shrink-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-black text-primary">30</span>
                  <span className="text-xs font-bold text-muted-foreground uppercase leading-tight">Day<br/>Warranty</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Unmatched Quality &amp; Reliability</h3>
                <p className="text-sm text-muted-foreground mt-1">Every repair backed by our parts &amp; labor warranty</p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="bg-primary/10 rounded-lg p-3"><Wrench className="h-8 w-8 text-primary" /></div>
                <div className="bg-primary/10 rounded-lg p-3"><Cpu className="h-8 w-8 text-primary" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges - compact row */}
      <section className="py-6 px-4 border-y border-border bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="bg-background border border-primary/20 rounded-full p-2.5"><CheckCircle2 className="h-5 w-5 text-primary" /></div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">High-Quality Parts</p>
                <p className="text-xs text-muted-foreground">OEM &amp; Premium Options</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="bg-background border border-primary/20 rounded-full p-2.5"><Award className="h-5 w-5 text-primary" /></div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Expert Technicians</p>
                <p className="text-xs text-muted-foreground">Free Diagnostics</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="bg-background border border-primary/20 rounded-full p-2.5"><Shield className="h-5 w-5 text-primary" /></div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">30-Day Warranty</p>
                <p className="text-xs text-muted-foreground">Parts &amp; Labor</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="bg-background border border-primary/20 rounded-full p-2.5"><Clock className="h-5 w-5 text-primary" /></div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">30-Min Service</p>
                <p className="text-xs text-muted-foreground">Walk-Ins Welcome</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Badge - inline */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-5 px-4 bg-white">
        <div className="flex items-center gap-2">
          <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}</div>
          <span className="text-lg font-bold text-foreground">4.9 / 5.0</span>
        </div>
        <p className="text-sm text-muted-foreground">Based on <span className="font-semibold text-foreground">100+ verified reviews</span></p>
        <Button asChild variant="outline" size="sm" className="border-primary/30 hover:bg-primary/5">
          <a href="https://www.google.com/maps/place/Tech+Medics/@32.8407,-83.6324,17z" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            Read Reviews<ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </div>

      {/* Services Grid - clean card layout */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Apple Device Repair Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Every Apple device, every fix — same-day turnaround in Macon, GA</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: "/macon/iphone", icon: Smartphone, img: "/images/iphone-screen-repair-macon.webp", alt: "iPhone screen repair Macon GA - cracked screen fix", title: "iPhone Repair", price: "from $79", items: ["iPhone 16e / 16 Pro Max screen fix", "Battery replacement from $59", "Charging port & speaker repair", "Water damage recovery", "Every iPhone model since iPhone 7"], cta: "View iPhone Pricing" },
              { href: "/macon/ipad", icon: Tablet, img: "/images/ipad-screen-repair-macon.webp", alt: "iPad repair Macon GA - screen and glass repair", title: "iPad Repair", price: "from $99", items: ["iPad Pro M4 & iPad Air M3 repair", "Screen & digitizer replacement", "Battery service from $89", "Charging port fix", "All iPad generations supported"], cta: "View iPad Pricing" },
              { href: "/macon/macbook", icon: Laptop, img: "/images/macbook-repair-macon.webp", alt: "MacBook repair Macon GA - screen and logic board repair", title: "MacBook Repair", price: "from $299", items: ["MacBook Air M4 & Pro M4 service", "Retina display replacement", "Keyboard & trackpad repair", "Battery & logic board fix", "Intel + Apple Silicon models"], cta: "View MacBook Pricing" },
            ].map((svc) => (
              <Link key={svc.href} href={svc.href} className="group">
                <div className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-secondary to-white">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet={`${svc.img.replace(".webp", "")}-480.webp 480w, ${svc.img.replace(".webp", "")}-662.webp 662w, ${svc.img} 760w`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                      />
                      <img
                        src={svc.img}
                        alt={svc.alt}
                        width="662"
                        height="496"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">{svc.title}</h3>
                      <span className="text-sm font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{svc.price}</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground mb-4">{svc.items.map((item) => <li key={item} className="flex items-start gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />{item}</li>)}</ul>
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                      {svc.cta} <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional service links - horizontal row like Mobilesentrix categories */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "/macon/game-console-repair", icon: Gamepad2, title: "Game Console Repair", desc: "PS5, Xbox, Nintendo Switch" },
              { href: "/macon/screen-repair", icon: Smartphone, title: "Screen Repair", desc: "All devices, all models" },
              { href: "/macon/battery-replacement", icon: Cpu, title: "Battery Replacement", desc: "iPhone, iPad & MacBook" },
              { href: "/macon/water-damage", icon: Shield, title: "Water Damage Recovery", desc: "Ultrasonic cleaning & repair" },
            ].map((svc) => (
              <Link key={svc.href} href={svc.href} className="group flex items-center gap-3 bg-white rounded-xl border border-border p-4 hover:shadow-md hover:border-primary/30 transition-all">
                <div className="bg-primary/10 rounded-lg p-2.5 shrink-0 group-hover:bg-primary/20 transition-colors">
                  <svc.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">{svc.title}</h3>
                  <p className="text-xs text-muted-foreground">{svc.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - clean grid */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">Why Macon Trusts Tech Medics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "30-Minute Turnaround", desc: "Walk in, get repaired, walk out. Most iPhone screen fixes done before your coffee gets cold" },
              { icon: Shield, title: "30-Day Warranty", desc: "Every repair backed by our parts & labor warranty — if it's not right, we'll fix it free" },
              { icon: MapPin, title: "Independently Owned", desc: "Independent local shop serving Central GA from 3742 Eisenhower Parkway since 2024" },
              { icon: Wrench, title: "2026-Model Ready", desc: "iPhone 16e, iPad Pro M4, MacBook M4 — we stock parts for the latest devices on day one" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-border p-6 text-center hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"><item.icon className="h-7 w-7 text-primary" /></div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Visit Our Repair Shop</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-lg p-2 shrink-0"><MapPin className="h-5 w-5 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-sm text-muted-foreground">3742 Eisenhower Parkway<br />Macon, GA 31206</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-lg p-2 shrink-0"><Clock className="h-5 w-5 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Hours</h3>
                    <p className="text-sm text-muted-foreground">Mon-Fri: 10AM - 6PM<br />Saturday: 10AM - 5PM<br />Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-lg p-2 shrink-0"><Phone className="h-5 w-5 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-sm text-muted-foreground">(478) 259-6371</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call Now</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-5 w-5" />Get Directions
                  </a>
                </Button>
              </div>
            </div>
            <a href="https://www.google.com/maps/place/3742+Eisenhower+Pkwy,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer" className="block bg-muted rounded-xl overflow-hidden h-80 md:h-96 shadow-lg relative group">
              <img src="/images/map-location.png" alt="Map showing Tech Medics location at 3742 Eisenhower Parkway, Macon GA 31206" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs text-muted-foreground shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">Open in Google Maps →</div>
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Macon&apos;s Top-Rated Apple Repair Shop — Updated for 2026</h2>
            <p className="text-muted-foreground mb-4">Looking for <strong>iPhone screen repair in Macon, GA</strong> that&apos;s fast, affordable, and done right? Tech Medics at <strong>3742 Eisenhower Parkway</strong> is Central Georgia&apos;s highest-rated Apple repair shop with 100+ five-star reviews. We&apos;ve been fixing Apple devices since 2010, and in 2026 we&apos;re stocking parts for every new model the day it drops — including the <strong>iPhone 16e</strong>, <strong>iPad Pro M4</strong>, and <strong>MacBook Air M4</strong>.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">iPhone Repair Services — Every Model Through 2026</h3>
            <p className="text-muted-foreground mb-4">We handle every <strong>iPhone repair in Macon</strong>: <strong>cracked screen replacements</strong> from $79, <strong>battery swaps</strong> from $59, <strong>charging port repairs</strong> from $69, and <strong>water damage recovery</strong> using ultrasonic cleaning. Whether you have an <strong>iPhone 16e, iPhone 16 Pro Max, iPhone 15, iPhone 14</strong>, or any older generation, most <strong>iPhone screen repairs</strong> are finished in 30 minutes while you wait — no appointment needed.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">iPad Repair — Pro M4, Air M3 &amp; Every Generation</h3>
            <p className="text-muted-foreground mb-4">Need <strong>iPad repair in Macon GA</strong>? We service the latest <strong>iPad Pro M4</strong> (11&rdquo; and 13&rdquo;), <strong>iPad Air M3</strong>, <strong>iPad Mini</strong> (6th &amp; 7th gen), and every standard iPad. <strong>Screen replacement</strong> starts at $99, and we also handle <strong>battery replacements</strong>, <strong>charging port repairs</strong>, and <strong>digitizer fixes</strong>. Same-day turnaround on most iPad repairs.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">MacBook Repair — M4, M3, M2, M1 &amp; Intel</h3>
            <p className="text-muted-foreground mb-4">For <strong>MacBook repair in Macon GA</strong>, we cover it all: <strong>Retina display replacement</strong> from $299, <strong>keyboard repair</strong>, <strong>battery replacement</strong>, and <strong>component-level logic board diagnostics</strong>. We service the newest <strong>MacBook Air M4</strong>, <strong>MacBook Pro M4 Pro/Max</strong> (14&rdquo; and 16&rdquo;), plus every M3, M2, M1, and Intel model still in circulation.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Why Macon Chooses Tech Medics in 2026</h3>
            <p className="text-muted-foreground mb-4">After 15+ years and thousands of repairs, we&apos;ve built our reputation on <strong>speed, transparency, and quality</strong>. Walk-ins are always welcome — <strong>no appointment necessary</strong>. Every repair is backed by our <strong>30-day parts &amp; labor warranty</strong>. We use premium replacement parts and our pricing runs <strong>30-50% below Apple Store rates</strong>. Plus, we price-match any local competitor.</p>
            <p className="text-muted-foreground"><strong>Serving all of Central Georgia</strong>: <strong>Macon, Warner Robins, Byron, Forsyth, Perry</strong>, Bibb County, Houston County, and beyond. Right on Eisenhower Parkway with easy I-75 access.</p>
          </article>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">Why Choose Us?</h2>
          <p className="text-center text-muted-foreground mb-10">Compare your repair options and see the Tech Medics difference</p>
          <div className="overflow-x-auto max-w-3xl mx-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden border border-border">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-bold text-foreground">Feature</th>
                  <th className="text-center p-4 font-bold text-muted-foreground">DIY</th>
                  <th className="text-center p-4 font-bold text-muted-foreground">Other Shops</th>
                  <th className="text-center p-4 font-bold text-primary-foreground bg-primary">Tech Medics</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.feature} className="border-b border-border last:border-0">
                    <td className="p-4 font-medium text-foreground text-sm">{row.feature}</td>
                    <td className="p-4 text-center">{row.diy ? <Check className="h-5 w-5 text-green-600 mx-auto" /> : <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />}</td>
                    <td className="p-4 text-center">{row.competitor ? <Check className="h-5 w-5 text-green-600 mx-auto" /> : <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />}</td>
                    <td className="p-4 text-center bg-primary/5">{row.us ? <Check className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />}</td>
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">What Our Customers Say</h2>
          <p className="text-center text-muted-foreground mb-10">Recent reviews from real Macon customers</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="p-6 border-border hover:shadow-md transition-shadow bg-white">
                <div className="flex items-center gap-1 mb-3">{[...Array(t.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}</div>
                <p className="text-muted-foreground text-sm mb-4 italic leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="border-t border-border pt-3">
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.service}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Links */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">Repair Guides &amp; Resources</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">Expert advice on device repair, maintenance tips, and cost guides</p>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              { href: "/blog/iphone-screen-repair-macon-ga", title: "iPhone Screen Repair Guide", desc: "Complete guide to screen repair costs, quality options, and what to expect." },
              { href: "/blog/ipad-screen-repair-macon", title: "iPad Screen Repair Tips", desc: "All iPad models supported - Pro, Air, Mini. Pricing and repair times." },
              { href: "/blog/iphone-battery-replacement-macon", title: "When to Replace Your Battery", desc: "Signs your battery needs replacing, costs, and same-day service info." },
              { href: "/blog/iphone-dying-fast-after-charging", title: "Fixing Fast Battery Drain", desc: "11 proven fixes for iPhone battery draining too fast." },
              { href: "/blog/macbook-repair-macon-ga", title: "MacBook Repair in Macon", desc: "Screen, keyboard, battery, and logic board repair services." },
              { href: "/blog/tech-medics-vs-apple-store-repair", title: "Tech Medics vs Apple Store", desc: "Compare costs, warranty, and turnaround times." },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="bg-white rounded-xl border border-border p-5 hover:shadow-md hover:border-primary/30 transition-all group">
                <h3 className="font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground text-sm">{post.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center"><Link href="/blog" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">View All Repair Guides <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">Serving Macon GA &amp; Surrounding Cities</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">Conveniently located at 3742 Eisenhower Parkway - easy I-75 access from anywhere in Central GA</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {neighborhoods.map((n) => (
              <Link key={n.href} href={n.href} className="bg-white rounded-xl border border-border p-4 text-center hover:shadow-md hover:border-primary/30 transition-all">
                <h3 className="font-bold text-foreground text-sm">{n.name}</h3>
                <p className="text-muted-foreground text-xs">{n.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
