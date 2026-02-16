import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import FAQSection from "../../components/FAQSection";

export const metadata: Metadata = {
  title: "Data Recovery Macon GA | iPhone, iPad & MacBook | (478) 259-6371",
  description: "Lost photos, contacts or files? Data recovery in Macon GA for iPhone, iPad & MacBook. Recover data from broken screens, water damage & dead devices. Tech Medics at 3742 Eisenhower Pkwy. Call (478) 259-6371.",
  keywords: ["data recovery Macon GA", "iPhone data recovery Macon", "recover photos broken phone Macon", "data recovery near me", "MacBook data recovery Macon GA", "iPad data recovery Macon", "phone data recovery Macon Georgia", "recover data dead phone Macon", "broken phone data recovery"],
  alternates: { canonical: "https://techmedicsmacon.com/macon/data-recovery" },
  openGraph: {
    title: "Data Recovery Macon GA | iPhone, iPad & MacBook | Recover Lost Files",
    description: "Lost photos or data? Expert data recovery in Macon GA for broken, water-damaged & dead devices. Call now!",
    url: "https://techmedicsmacon.com/macon/data-recovery",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://techmedicsmacon.com" },
    { "@type": "ListItem", position: 2, name: "Macon", item: "https://techmedicsmacon.com/macon" },
    { "@type": "ListItem", position: 3, name: "Data Recovery", item: "https://techmedicsmacon.com/macon/data-recovery" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://techmedicsmacon.com/macon/data-recovery#service",
  serviceType: "Data Recovery",
  name: "Data Recovery Service in Macon GA",
  description: "Professional data recovery for iPhone, iPad, and MacBook in Macon, Georgia. Recover photos, contacts, and files from broken, water-damaged, and dead devices.",
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
  { question: "Can you recover data from a broken iPhone?", answer: "In most cases, yes. Even if your iPhone screen is completely shattered or the phone won't turn on, we can often recover your photos, contacts, messages, and other data. Bring it in for a free assessment." },
  { question: "How much does data recovery cost in Macon?", answer: "Data recovery costs vary depending on the device, type of damage, and complexity. We provide a free diagnosis and quote before starting any work. Basic recovery starts at $79." },
  { question: "Can you recover data from a water damaged device?", answer: "Yes, water damage data recovery is one of our specialties. Even devices that won't power on after water exposure can often have their data recovered through professional techniques." },
  { question: "What types of data can you recover?", answer: "We can recover photos, videos, contacts, text messages, notes, documents, app data, and more from iPhones, iPads, and MacBooks." },
  { question: "How long does data recovery take?", answer: "Simple recovery from a device with a broken screen may take 1-2 hours. More complex cases involving water damage or dead devices can take 2-5 business days." },
  { question: "Is my data kept private and secure?", answer: "Absolutely. We treat all customer data with strict confidentiality. Your files are never shared, copied for our use, or accessed beyond what's needed for recovery. We can also sign an NDA if required." },
  { question: "What if you can't recover my data?", answer: "If we're unable to recover your data, you don't pay for the recovery service. We only charge when we successfully retrieve your files." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };

const testimonials = [
  { name: "Jennifer P.", rating: 5, text: "My iPhone was completely dead after water damage. Tech Medics recovered ALL my photos – 5 years of memories I thought were gone forever. Worth every penny.", service: "iPhone Data Recovery" },
  { name: "Daniel M.", rating: 5, text: "MacBook hard drive failed with years of work documents. They recovered everything. I was in tears. These guys are the real deal.", service: "MacBook Data Recovery" },
  { name: "Amanda C.", rating: 5, text: "Dropped my phone and the screen was totally black. Couldn't access anything. Tech Medics pulled all my contacts, photos, and messages off it. Incredible service.", service: "iPhone Data Recovery" },
];

export default function DataRecoveryPage() {
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
          <li className="text-foreground font-medium">Data Recovery</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Data Recovery in Macon, GA</h1>
              <p className="text-xl text-muted-foreground mb-8">Lost irreplaceable photos, contacts, or important files? Don&apos;t give up. Tech Medics recovers data from broken, water-damaged, and dead iPhones, iPads, and MacBooks. Your memories and files may still be recoverable &ndash; bring your device in for a free assessment.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call for Free Assessment</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2">
                  <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/iphone-repair.jpg" alt="Data recovery service for iPhone iPad and MacBook in Macon GA" width="800" height="600" className="w-full h-auto" loading="eager" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Recover */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">What We Can Recover</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">We recover data from devices that other shops say are beyond help</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Photos & Videos", desc: "Family photos, memories, and videos – often the most irreplaceable data on your device." },
              { title: "Contacts", desc: "Phone numbers, email addresses, and contact information you can't find elsewhere." },
              { title: "Messages", desc: "Text messages, iMessages, and chat history from messaging apps." },
              { title: "Documents & Files", desc: "Work documents, school papers, notes, and important files from your device." },
            ].map((s) => (
              <article key={s.title} className="bg-card border border-border rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Scenarios */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Data Recovery Scenarios We Handle</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Broken / Shattered Screen", desc: "Screen completely destroyed but phone still vibrates or makes sounds? We can access your data by repairing or bypassing the screen." },
              { title: "Water Damaged Device", desc: "Phone fell in water and won't turn on? We use professional techniques to access the storage and recover your files." },
              { title: "Device Won't Turn On", desc: "Completely dead device with no signs of life? Battery, logic board, or other issues may be fixable to access your data." },
              { title: "Forgotten Passcode", desc: "Locked out of your device? In some cases we can help recover data from devices you own but can't access. Proof of ownership required." },
              { title: "Failed Update / Restore", desc: "iOS update went wrong and now your device is stuck? We can often recover data from failed updates without a factory reset." },
              { title: "MacBook Drive Failure", desc: "MacBook won't boot or hard drive clicking? We recover data from failing SSDs and hard drives using professional tools." },
            ].map((s) => (
              <article key={s.title} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">How Data Recovery Works</h2>
          <p className="text-center text-muted-foreground mb-12">Simple process, no data no charge</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Free Assessment", desc: "Bring your device to 3742 Eisenhower Parkway. We assess the damage and determine if recovery is possible – at no charge." },
              { step: "2", title: "Quote & Approval", desc: "We provide an honest assessment of recovery chances and an exact price. No work begins until you approve." },
              { step: "3", title: "Recovery", desc: "Our technicians use professional tools and techniques to extract and recover your data safely and securely." },
              { step: "4", title: "Data Delivery", desc: "Recovered data is transferred to a USB drive, external hard drive, or new device. Your old device is returned to you." },
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

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Why Choose Tech Medics for Data Recovery?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: "Free", desc: "Free assessment and diagnosis – no obligation" },
              { stat: "No Data, No Fee", desc: "You only pay if we successfully recover your data" },
              { stat: "Secure", desc: "Strict data privacy and confidentiality guaranteed" },
              { stat: "Local", desc: "Right here in Macon – no shipping your device away" },
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Data Recovery Success Stories</h2>
          <p className="text-center text-muted-foreground mb-12">Customers who thought their data was lost forever</p>
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
      <FAQSection deviceType="Data Recovery" faqs={faqData} />

      {/* SEO Content */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Professional Data Recovery in Macon, Georgia</h2>
            <p className="text-muted-foreground mb-4">When you lose access to precious photos, important documents, or years of contacts, it can feel devastating. But <strong>data recovery in Macon, GA</strong> is often possible &ndash; even from devices that seem completely dead. At Tech Medics, we specialize in recovering data from broken, water-damaged, and non-functioning Apple devices.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">iPhone &amp; iPad Data Recovery</h3>
            <p className="text-muted-foreground mb-4">Whether your iPhone has a shattered screen, water damage, or simply won&apos;t turn on, our technicians can often access the internal storage and recover your photos, contacts, messages, and files. <strong>iPhone data recovery in Macon</strong> is one of our most requested services &ndash; and we have a high success rate even with severely damaged devices.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">MacBook Data Recovery</h3>
            <p className="text-muted-foreground mb-4">MacBook hard drive or SSD failing? Spilled liquid on your laptop? We use professional data recovery tools to extract files from damaged MacBook drives. Whether it&apos;s a spinning hard drive or a soldered SSD, our <strong>MacBook data recovery service in Macon</strong> can help save your important work files, photos, and documents.</p>
            <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">No Data, No Fee Guarantee</h3>
            <p className="text-muted-foreground mb-4">We believe in honest, transparent service. If we can&apos;t recover your data, you don&apos;t pay for the recovery. Assessment and diagnosis are always free. Visit us at <strong>3742 Eisenhower Parkway</strong> in Macon or call <strong>(478) 259-6371</strong>. We serve Macon, Warner Robins, Byron, Perry, Forsyth, and all of Central Georgia.</p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Lost Important Data? We Can Help</h2>
          <p className="text-xl text-muted-foreground mb-8">Free assessment &ndash; bring your device to 3742 Eisenhower Parkway or call for guidance.</p>
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
            <Link href="/macon/water-damage" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">Water Damage Repair</h3><p className="text-muted-foreground">Recover water-damaged devices</p></Link>
            <Link href="/macon/screen-repair" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">Screen Repair</h3><p className="text-muted-foreground">Fix broken screens from $79</p></Link>
            <Link href="/macon/iphone" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold mb-2 text-foreground">iPhone Repair</h3><p className="text-muted-foreground">Complete iPhone repair services</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
