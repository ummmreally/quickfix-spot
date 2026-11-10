import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Shield, CheckCircle, AlertTriangle, Smartphone } from "lucide-react";
import FAQSection from "../../components/FAQSection";

export const metadata: Metadata = {
  title: "Genuine Apple Parts Available | iPhone Repair Macon GA | Tech Medics",
  description:
    "Genuine Apple Parts are available upon request for eligible iPhone display repairs at Tech Medics Macon. Ask about availability and pricing for your model. Call (478) 259-6371.",
  keywords: [
    "genuine Apple parts Macon GA",
    "genuine Apple parts iPhone repair",
    "Apple genuine parts repair Macon",
    "iPhone screen repair genuine parts Macon",
    "iPhone battery genuine Apple Macon GA",
    "authentic Apple parts repair Macon Georgia",
    "GAPP repair provider Macon",
  ],
  alternates: { canonical: "https://techmedicsmacon.com/macon/apple-genuine-parts/" },
  openGraph: {
    title: "Genuine Apple Parts Available | Tech Medics Macon",
    description:
      "Genuine Apple Parts are available upon request for eligible iPhone display repairs at Tech Medics Macon.",
    url: "https://techmedicsmacon.com/macon/apple-genuine-parts/",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://techmedicsmacon.com" },
    { "@type": "ListItem", position: 2, name: "Macon", item: "https://techmedicsmacon.com/macon" },
    { "@type": "ListItem", position: 3, name: "Genuine Apple Parts", item: "https://techmedicsmacon.com/macon/apple-genuine-parts" },
  ],
};

const faqData = [
  {
    question: "Is Tech Medics an Apple Authorized Service Provider?",
    answer:
      "No — Tech Medics is an independent repair provider. We are not affiliated with, authorized by, or endorsed by Apple Inc. Upon request, we use Genuine Apple Parts purchased from Apple for eligible iPhone display repairs, subject to availability.",
  },
  {
    question: "What are Genuine Apple Parts?",
    answer:
      "Genuine Apple Parts are authentic components manufactured by or for Apple. When used in a repair, your iPhone's Settings > General > About screen will show a \"Genuine\" status indicator for the repaired component, confirming the part's authenticity.",
  },
  {
    question: "Which repairs use Genuine Apple Parts?",
    answer:
      "Genuine Apple Parts are available upon request for eligible iPhone display (screen) repairs. For other repairs such as battery replacement, charging port, or camera repair, we use high-quality aftermarket parts that meet or exceed OEM specifications. Ask us about current Genuine Apple Parts availability for your specific model.",
  },
  {
    question: "How can I verify a Genuine Apple Part was used in my repair?",
    answer:
      "After a display repair with Genuine Apple Parts, go to Settings > General > About > Display on your iPhone. You'll see a Repair Record showing Type: Display and Status: Genuine with a green checkmark.",
  },
  {
    question: "Do you also offer aftermarket parts?",
    answer:
      "Yes — we offer both Genuine Apple Parts and high-quality aftermarket options. Aftermarket parts are often more affordable while still providing excellent performance. We'll discuss your options and help you choose what's best for your budget and needs.",
  },
  {
    question: "Does using Genuine Apple Parts preserve my iPhone warranty?",
    answer:
      "Using Genuine Apple Parts helps maintain your iPhone's full functionality. However, as an independent repair provider, our repairs are covered by our own 30-day parts and labor warranty. For questions about your Apple warranty status, contact Apple directly.",
  },
  {
    question: "How much do repairs with Genuine Apple Parts cost?",
    answer:
      "Pricing varies by model and repair type. Call (478) 259-6371 for a free quote. Genuine Apple Parts repairs may cost more than aftermarket options, but you get the assurance of authentic Apple components.",
  },
];

export default function AppleGenuinePartsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            Independent Repair Provider
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Genuine Apple Parts<br />Available Upon Request
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Upon request, Tech Medics Macon uses Genuine Apple Parts purchased from Apple for eligible iPhone display repairs. Ask us about availability and pricing for your model.
          </p>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tech Medics is an independent repair provider. We are not affiliated with, authorized by, or endorsed by Apple Inc.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="tel:(478)259-6371">
                <Phone className="mr-2 h-5 w-5" />Call (478) 259-6371
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2">
              <Link href="/macon/iphone">
                <Smartphone className="mr-2 h-5 w-5" />View iPhone Repairs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Apple Genuine Parts Gallery — Images 8, 9 (Hero-quality visuals) */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/apple-genuine-part-8.png"
                alt="Genuine Apple Parts — Genuine Parts, Genuine Performance. Features like Multi-Touch, High brightness, Color accuracy, True-Tone, and Night Shift. Only with Genuine Apple Parts."
                width={670}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/apple-genuine-part-9.png"
                alt="Unlock Long-Lasting Quality with Genuine Apple Parts — Enjoy optimal brightness, true color accuracy, and touch responsiveness."
                width={670}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Genuine Matters */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Why Genuine Matters</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Only repairs with Genuine Apple Parts ensure your iPhone is restored to Apple&apos;s performance standards. Non-genuine parts risk issues like dim displays and reduced touch response.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-border border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <h3 className="text-2xl font-bold text-foreground">Genuine Apple Parts</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Full Multi-Touch sensitivity and responsiveness",
                  "Accurate color reproduction and True-Tone support",
                  "Maximum brightness and Night Shift compatibility",
                  "\"Genuine\" indicator in Settings > General > About",
                  "Seamless iOS integration — no error messages",
                  "Parts that meet Apple's quality and safety standards",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-8 border-border">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-yellow-500" />
                <h3 className="text-2xl font-bold text-foreground">Non-Genuine Parts</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Reduced touch sensitivity or dead spots",
                  "Dimmer display with inaccurate colors",
                  "No True-Tone or Night Shift support",
                  "\"Unknown Part\" warning in Settings",
                  "Potential compatibility issues with iOS updates",
                  "May not meet Apple's safety standards for batteries",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery — Part 2 (Genuine Mark verification) */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Look for the Genuine Mark on Your iPhone</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            After a repair with Genuine Apple Parts, your iPhone&apos;s display will show a &ldquo;Genuine&rdquo; indicator in Settings &gt; General &gt; About, confirming authentic parts and processes were used.
          </p>
          <div className="max-w-lg mx-auto rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/apple-genuine-part-2.png"
              alt="Look for the Genuine Mark on Your iPhone — Settings screen showing Display repair record with Genuine status indicator"
              width={670}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Image Gallery — Parts 3, 4, 5 */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Authenticity, Quality &amp; Protection</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose quality. Choose safety. Protect your iPhone with parts that meet Apple&apos;s standards.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/apple-genuine-part-3.png"
                alt="Authenticity Matters: Keep Your iPhone Safe — Don't compromise on safety. With genuine Apple parts, you're assured of quality repairs and peace of mind."
                width={670}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/apple-genuine-part-4.png"
                alt="Trust the Experts, Protect Your Device — Repairs with genuine Apple display parts ensure your iPhone's performance stays as intended."
                width={670}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/apple-genuine-part-5.png"
                alt="Why Settle for Less? Demand Apple Quality — Only Apple Genuine Parts guarantee compatibility and lasting performance."
                width={670}
                height={1000}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery — Parts 6, 7 (Display-focused) */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Genuine Display Repairs</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Preserve your device&apos;s display quality, touch sensitivity, and battery life with genuine parts that are seamlessly integrated with iOS.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/apple-genuine-part-6.png"
                alt="Genuine Display Repairs: Because Your iPhone Deserves the Best — Preserve display quality, touch sensitivity, and battery life with genuine parts."
                width={670}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/apple-genuine-part-7.png"
                alt="Genuine Display Repairs — Say no to compatibility issues and ensure your iPhone's performance with Genuine Apple Parts."
                width={670}
                height={1000}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Independent Provider Disclosure */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border-border">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Independent Repair Provider</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Tech Medics (Anartwork LLC) is an <strong>independent repair provider</strong>. We are not a representative of Apple Inc., nor an Apple Authorized Service Provider. We do not imply any authorization, certification, or affiliation with Apple.
              </p>
              <p>
                Upon request, we use <strong>Genuine Apple Parts purchased from Apple</strong> for eligible iPhone display repairs through the Genuine Apple Parts program, subject to availability. These parts are sourced through Apple&apos;s authorized distribution channels.
              </p>
              <p>
                For other repair types (battery, charging port, camera, etc.), we use high-quality aftermarket parts that meet or exceed OEM specifications. All repairs &mdash; whether using genuine or aftermarket parts &mdash; include our 30-day parts and labor warranty.
              </p>
              <p>
                Apple, iPhone, and Genuine Apple Parts are trademarks of Apple Inc., registered in the U.S. and other countries.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground mb-12">Common questions about Genuine Apple Parts repairs at Tech Medics Macon</p>
          <FAQSection faqs={faqData} deviceType="iPhone" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready for a Genuine Apple Parts Repair?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Call us or walk in to our Macon shop. We&apos;ll discuss your repair options &mdash; genuine or aftermarket &mdash; and get your iPhone fixed same-day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="tel:(478)259-6371">
                <Phone className="mr-2 h-5 w-5" />Call (478) 259-6371
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2">
              <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-5 w-5" />Get Directions
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            3742 Eisenhower Parkway, Macon, GA 31206 &bull; Mon&ndash;Fri 10am&ndash;6pm &bull; Sat 10am&ndash;5pm
          </p>
        </div>
      </section>
    </>
  );
}
