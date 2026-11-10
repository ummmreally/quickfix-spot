import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import FAQSection from "../../components/FAQSection";

export const metadata: Metadata = {
  title: "Console HDMI Port Repair & Stick Drift Fix Macon GA | PS5, Xbox, Switch | (478) 259-6371",
  description: "Expert console HDMI port repair & controller stick drift fix in Macon GA. PS5 HDMI no signal fix, Xbox Series X HDMI repair, Joy-Con drift, DualSense drift, Elite controller repair. Micro-soldering specialists at 3742 Eisenhower Pkwy. Call (478) 259-6371.",
  keywords: [
    "HDMI port repair Macon GA",
    "PS5 HDMI repair Macon",
    "Xbox HDMI port fix Macon GA",
    "controller stick drift repair Macon",
    "Joy-Con drift fix Macon GA",
    "PS5 no signal fix Macon",
    "Xbox Series X HDMI repair Macon",
    "DualSense stick drift repair Macon GA",
    "Xbox Elite controller repair Macon",
    "console HDMI port replacement Macon Georgia",
    "Nintendo Switch Joy-Con repair Macon",
    "PS5 controller drift fix Macon GA",
    "game console micro-soldering Macon",
    "stick drift repair near me Macon",
    "HDMI port replacement PS5 Xbox Macon GA",
  ],
  alternates: { canonical: "https://techmedicsmacon.com/macon/console-hdmi-stick-drift/" },
  openGraph: {
    title: "Console HDMI Port Repair & Stick Drift Fix Macon GA | Tech Medics",
    description: "PS5 HDMI port repair, Xbox HDMI fix, Joy-Con drift, DualSense drift & Elite controller stick drift repair in Macon GA. Micro-soldering experts. Same-day service available.",
    url: "https://techmedicsmacon.com/macon/console-hdmi-stick-drift/",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Console HDMI Port Repair and Stick Drift Fix in Macon GA - Tech Medics" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Console HDMI Port Repair & Stick Drift Fix Macon GA",
    description: "Expert PS5/Xbox HDMI repair & controller stick drift fix in Macon GA. Micro-soldering specialists. Call (478) 259-6371.",
    images: ["/og-image.webp"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://techmedicsmacon.com" },
    { "@type": "ListItem", position: 2, name: "Macon", item: "https://techmedicsmacon.com/macon" },
    { "@type": "ListItem", position: 3, name: "Game Console Repair", item: "https://techmedicsmacon.com/macon/game-console-repair" },
    { "@type": "ListItem", position: 4, name: "HDMI Port & Stick Drift Repair", item: "https://techmedicsmacon.com/macon/console-hdmi-stick-drift" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://techmedicsmacon.com/macon/console-hdmi-stick-drift#service",
  serviceType: "Console HDMI Port Repair and Controller Stick Drift Fix",
  name: "Console HDMI Port Repair & Stick Drift Fix in Macon GA",
  description: "Professional HDMI port micro-soldering repair for PS5, Xbox Series X/S, and PS4 consoles, plus analog stick drift repair for DualSense, Joy-Con, Xbox Elite, and Pro controllers in Macon, Georgia.",
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "HDMI & Stick Drift Repair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "PS5 HDMI Port Repair", description: "Micro-soldering replacement of damaged PS5 HDMI ports to restore video output" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Xbox Series X HDMI Port Repair", description: "HDMI connector replacement for Xbox Series X and Series S consoles" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Joy-Con Drift Repair", description: "Analog stick module replacement to fix Nintendo Switch Joy-Con drift" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "DualSense Stick Drift Repair", description: "PS5 DualSense controller analog stick replacement for drift issues" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Xbox Controller Stick Drift Repair", description: "Xbox Series and Elite controller thumbstick drift repair" } },
    ],
  },
};

const faqData = [
  { question: "How much does PS5 HDMI port repair cost in Macon?", answer: "PS5 HDMI port repair pricing depends on the extent of damage to the connector and surrounding traces. Call (478) 259-6371 for a free quote. Our repair is a fraction of buying a new PS5 and includes a 30-day warranty." },
  { question: "Can you fix an Xbox Series X with no video output?", answer: "Yes. No video output on Xbox Series X is almost always a damaged HDMI port. We use precision micro-soldering to desolder the broken port and install a brand-new HDMI connector. Most Xbox HDMI repairs are completed in 1-2 days." },
  { question: "What causes Joy-Con drift on Nintendo Switch?", answer: "Joy-Con drift is caused by wear on the analog stick's internal contact pads and graphite sensors. Dust and debris can also contribute. We replace the entire analog stick module for a permanent fix, typically completed in under an hour." },
  { question: "Can you fix DualSense stick drift on PS5 controllers?", answer: "Absolutely. PS5 DualSense stick drift is one of our most common controller repairs. We replace the analog stick potentiometer with an upgraded module for longer-lasting performance." },
  { question: "Do you repair Xbox Elite controller stick drift?", answer: "Yes, we repair all Xbox controllers including the Elite Series 2, standard Xbox Series X/S controllers, and Xbox One controllers. Stick drift, bumper replacement, and trigger repair are all available." },
  { question: "How long does HDMI port repair take?", answer: "HDMI port repair typically takes 1-2 business days. The repair involves precision micro-soldering — desoldering the damaged port and carefully installing a new connector without damaging surrounding components. We test thoroughly before returning your console." },
  { question: "Is it worth repairing a console HDMI port vs buying a new console?", answer: "Absolutely. HDMI port repair typically costs a fraction of a new console. A PS5 costs $499 and an Xbox Series X costs $499 — HDMI repair saves you hundreds of dollars and preserves all your saved game data." },
  { question: "Can stick drift come back after repair?", answer: "We replace the entire analog stick module (not just clean it), which provides a long-lasting fix. All stick drift repairs come with our 30-day warranty. If drift returns within 30 days, we'll fix it free of charge." },
  { question: "Do you fix Steam Deck stick drift?", answer: "Yes! We repair Steam Deck analog stick drift, buttons, and other hardware issues. The Steam Deck uses hall-effect capable thumbstick modules and we carry replacement parts in stock." },
  { question: "Where is your console repair shop in Macon?", answer: "We're located at 3742 Eisenhower Parkway, Macon, GA 31206. Walk-ins welcome Monday-Friday 10am-6pm and Saturday 10am-5pm. We serve all of Central Georgia including Warner Robins, Byron, Perry, and Forsyth." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };

const testimonials = [
  { name: "Marcus T.", rating: 5, text: "PS5 had zero video output for weeks. Tech Medics replaced the HDMI port with micro-soldering and it's back to 4K gaming. Saved me from buying a whole new PS5!", service: "PS5 HDMI Port Repair" },
  { name: "Danielle S.", rating: 5, text: "Both my Switch Joy-Cons were drifting so bad I couldn't play anything. Fixed in less than an hour and the drift is completely gone. Amazing service.", service: "Joy-Con Drift Repair" },
  { name: "Chris A.", rating: 5, text: "My DualSense controller had awful stick drift after only 6 months. They replaced the analog module and it feels brand new. Way cheaper than buying another $70 controller.", service: "DualSense Stick Drift Fix" },
  { name: "Jake R.", rating: 5, text: "Xbox Series X HDMI port got bent when my kid tripped over the cable. Tech Medics soldered a new port and the picture is crystal clear again. Highly recommend.", service: "Xbox Series X HDMI Repair" },
  { name: "Tyler B.", rating: 5, text: "Brought in my Xbox Elite Series 2 with stick drift on both thumbsticks. They fixed both and the controller feels better than new. Great price and fast turnaround.", service: "Xbox Elite Controller Repair" },
  { name: "Sarah M.", rating: 5, text: "My son's Switch Lite had terrible drift. They had it fixed same day and he was back to playing that evening. These guys know their stuff!", service: "Switch Lite Stick Drift Fix" },
];

const hdmiRepairs = [
  { console: "PS5 / PS5 Slim", symptoms: "No video output, flickering screen, purple/green artifacts, HDMI handshake failures, blank screen with audio", icon: "🎮" },
  { console: "Xbox Series X", symptoms: "No signal to TV, intermittent display, bent HDMI pins, loose HDMI port, display cutting in and out", icon: "🟩" },
  { console: "Xbox Series S", symptoms: "No video output, HDMI port physically damaged, display drops during gameplay", icon: "⬜" },
  { console: "PS4 / PS4 Pro", symptoms: "No display, white light of death (WLOD), blinking blue light with no video, HDMI port broken", icon: "🕹️" },
  { console: "Xbox One / One X", symptoms: "No signal, bent or pushed-in HDMI connector, intermittent video loss", icon: "🎯" },
];

const stickDriftRepairs = [
  { controller: "PS5 DualSense", issues: "Left/right stick drift, phantom inputs, character moves on its own, camera spinning, aiming issues in FPS games", icon: "🎮" },
  { controller: "Nintendo Switch Joy-Con", issues: "Joy-Con drift, cursor moving without input, menu scrolling on its own, character walking without touching stick", icon: "🔴" },
  { controller: "Switch Pro Controller", issues: "Analog stick drift, unresponsive stick, inconsistent movement registration", icon: "🟢" },
  { controller: "Xbox Series Controller", issues: "Thumbstick drift, stick not centering, diagonal pull, aim wobble in shooters", icon: "🟩" },
  { controller: "Xbox Elite Series 2", issues: "Stick drift on one or both thumbsticks, bumper failure, trigger issues, grip peeling", icon: "⚡" },
  { controller: "Steam Deck", issues: "Thumbstick drift, dead zones, inconsistent input registration, stick click not working", icon: "🎲" },
];

export default function ConsoleHdmiStickDriftPage() {
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
          <li><Link href="/macon/game-console-repair" className="hover:text-primary">Game Console Repair</Link></li>
          <li>/</li>
          <li className="text-foreground font-medium">HDMI Port &amp; Stick Drift Repair</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Console HDMI Port Repair &amp; Stick Drift Fix in Macon, GA</h1>
              <p className="text-xl text-muted-foreground mb-4">No video from your PS5 or Xbox? Controller drifting during gameplay? Tech Medics specializes in <strong>HDMI port micro-soldering</strong> and <strong>analog stick drift repair</strong> for all major consoles and controllers.</p>
              <p className="text-lg text-muted-foreground mb-8">Walk in to <strong>3742 Eisenhower Parkway</strong> &ndash; no appointment needed. Save hundreds vs. replacing your console or controller.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2">
                  <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-secondary/50 p-8 md:p-12">
              <div className="text-center space-y-6">
                <div className="text-6xl">🔧</div>
                <p className="text-2xl font-bold text-foreground">HDMI Port &bull; Stick Drift</p>
                <p className="text-muted-foreground">Micro-Soldering &amp; Controller Specialists</p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-3xl font-bold text-primary">500+</p>
                    <p className="text-sm text-muted-foreground">HDMI Ports Repaired</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">1000+</p>
                    <p className="text-sm text-muted-foreground">Controllers Fixed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HDMI Port Repair Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Console HDMI Port Repair in Macon, GA</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">Console powers on but no picture on your TV? A damaged HDMI port is the #1 cause. Our micro-soldering technicians replace broken HDMI connectors on every major console.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hdmiRepairs.map((r) => (
              <article key={r.console} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{r.console} HDMI Repair</h3>
                <p className="text-sm text-muted-foreground mb-3"><strong>Common symptoms:</strong></p>
                <p className="text-muted-foreground text-sm">{r.symptoms}</p>
              </article>
            ))}
            <article className="bg-primary/5 border border-primary/20 rounded-lg p-6 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-3 text-foreground">How We Fix HDMI Ports</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />Diagnose the HDMI port under magnification</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />Desolder damaged connector with precision tools</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />Inspect &amp; repair traces and pads if needed</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />Solder brand-new OEM-spec HDMI port</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />Full video output test at multiple resolutions</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />30-day warranty on parts &amp; labor</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Stick Drift Repair Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Controller Stick Drift Repair in Macon, GA</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">Character moving on its own? Camera spinning randomly? Aiming impossible in shooters? Stick drift is the most common controller problem &ndash; and we fix them all.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stickDriftRepairs.map((r) => (
              <article key={r.controller} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{r.controller} Drift Fix</h3>
                <p className="text-sm text-muted-foreground mb-3"><strong>Symptoms:</strong></p>
                <p className="text-muted-foreground text-sm">{r.issues}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Repair vs Replace */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Repair vs. Replace: Why Fixing Makes Sense</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">HDMI Port Repair Saves Hundreds</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="text-muted-foreground">New PS5 Console</span>
                  <span className="font-bold text-destructive line-through">$499</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="text-muted-foreground">New Xbox Series X</span>
                  <span className="font-bold text-destructive line-through">$499</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-foreground">HDMI Port Repair</span>
                  <span className="font-bold text-primary">Call for Quote</span>
                </div>
                <p className="text-sm text-muted-foreground pt-2">Plus you keep all your save data, settings, and digital library intact.</p>
              </div>
            </Card>
            <Card className="p-8 border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Controller Fix vs. New Controller</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="text-muted-foreground">New DualSense</span>
                  <span className="font-bold text-destructive line-through">$70</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="text-muted-foreground">New Xbox Elite Series 2</span>
                  <span className="font-bold text-destructive line-through">$180</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="text-muted-foreground">New Joy-Con Pair</span>
                  <span className="font-bold text-destructive line-through">$80</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-foreground">Stick Drift Repair</span>
                  <span className="font-bold text-primary">Call for Quote</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Why Macon Gamers Choose Tech Medics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: "Micro-Soldering", desc: "Professional-grade soldering station for precision HDMI port replacement" },
              { stat: "Same-Day*", desc: "Many controller drift repairs completed same day. *HDMI repairs typically 1-2 days." },
              { stat: "30-Day Warranty", desc: "Every HDMI and stick drift repair backed by our comprehensive warranty" },
              { stat: "All Brands", desc: "PS5, Xbox, Nintendo Switch, Steam Deck — every major console and controller" },
            ].map((s) => (
              <div key={s.stat} className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">{s.stat}</div>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">HDMI &amp; Stick Drift Repair Reviews</h2>
          <p className="text-center text-muted-foreground mb-12">Real reviews from console and controller repair customers in Macon, GA</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <FAQSection deviceType="Console HDMI & Controller" faqs={faqData} />

      {/* SEO Long-Form Content */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Console HDMI Port Repair &amp; Controller Stick Drift Fix in Macon, Georgia</h2>
            <p className="text-muted-foreground mb-4">If your <strong>PS5 or Xbox has no video output</strong>, a broken HDMI port is almost certainly the cause. And if your <strong>controller character moves on its own</strong>, analog stick drift needs a hardware fix &ndash; not a software reset. Tech Medics in Macon, GA specializes in both of these extremely common gaming repairs.</p>

            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">PS5 HDMI Port Repair in Macon, GA</h3>
            <p className="text-muted-foreground mb-4">The <strong>PlayStation 5 HDMI port</strong> is a surface-mounted connector soldered directly to the motherboard. When bent pins, a pulled cable, or accidental damage breaks the port, the console powers on but sends no signal to the TV. Replacing a <strong>PS5 HDMI port</strong> requires micro-soldering &ndash; carefully desoldering the damaged connector, inspecting the solder pads for lifted traces, and installing a brand-new HDMI port. At Tech Medics, our technicians have the precision equipment and experience to complete this repair reliably. We test at 1080p and 4K before returning your console.</p>

            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Xbox Series X &amp; Series S HDMI Repair in Macon</h3>
            <p className="text-muted-foreground mb-4"><strong>Xbox Series X HDMI port damage</strong> presents the same symptoms &ndash; power light comes on, but the TV shows no signal. The HDMI connector on Xbox consoles is equally delicate and requires the same micro-soldering process. We repair <strong>Xbox Series X, Xbox Series S, Xbox One, and Xbox One X</strong> HDMI ports at our Macon shop. This is one of our most requested repairs, and we carry replacement HDMI connectors in stock for fast turnaround.</p>

            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Joy-Con Drift Repair &ndash; Nintendo Switch</h3>
            <p className="text-muted-foreground mb-4"><strong>Joy-Con drift</strong> is arguably the most widespread controller defect in gaming history. The Nintendo Switch analog stick uses a potentiometer-based sensor that wears down over time, causing phantom inputs. Your character walks without you touching the stick, menus scroll on their own, and aiming becomes impossible. We replace the entire <strong>Joy-Con analog stick module</strong> &ndash; not just clean it &ndash; for a lasting fix. This repair applies to <strong>Switch, Switch OLED, and Switch Lite</strong> models.</p>

            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">DualSense &amp; Xbox Controller Stick Drift Repair</h3>
            <p className="text-muted-foreground mb-4">The <strong>PS5 DualSense controller</strong> and <strong>Xbox Series controller</strong> both use Alps-style analog stick potentiometers that can develop drift within months of use. Symptoms include aim wobble in FPS games, characters pulling to one side, and inconsistent camera movement. We desolder the faulty potentiometer and replace it with a fresh module, restoring precise analog input. This same process applies to the <strong>Xbox Elite Series 2 controller</strong>, which is especially frustrating given its premium price point.</p>

            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Steam Deck Stick Drift Repair</h3>
            <p className="text-muted-foreground mb-4">The <strong>Steam Deck</strong> by Valve uses hall-effect capable thumbstick modules, but drift can still occur. Whether your Steam Deck stick is drifting, has dead zones, or the click function has stopped working, we carry replacement modules and can repair it at our Macon shop.</p>

            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Serving All of Central Georgia</h3>
            <p className="text-muted-foreground mb-4">Our console and controller repair shop at <strong>3742 Eisenhower Parkway, Macon, GA 31206</strong> serves gamers across <strong>Macon, Warner Robins, Byron, Perry, Forsyth, Bibb County, Houston County</strong>, and surrounding areas. Walk in Monday&ndash;Friday 10am&ndash;6pm or Saturday 10am&ndash;5pm. No appointment needed. Call <strong>(478) 259-6371</strong> for a free quote on your HDMI port or stick drift repair today.</p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">HDMI Problems or Stick Drift? We Fix Both.</h2>
          <p className="text-xl text-muted-foreground mb-8">Walk in to 3742 Eisenhower Parkway, Macon, GA 31206 &ndash; no appointment needed.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"><a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a></Button>
            <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8"><a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a></Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">Related Repair Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/macon/game-console-repair" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">Game Console Repair</h3><p className="text-muted-foreground">All console repairs &ndash; disc drives, overheating &amp; more</p></Link>
            <Link href="/macon/iphone" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">iPhone Repair</h3><p className="text-muted-foreground">Screen, battery, charging port &amp; more</p></Link>
            <Link href="/macon/data-recovery" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">Data Recovery</h3><p className="text-muted-foreground">Recover data from damaged devices</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
