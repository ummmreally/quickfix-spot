import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CheckCircle2, Clock, Shield, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Business iPhone & MacBook Repair Macon GA | Tech Medics for Companies",
  description: "Professional business device repair in Macon GA. Same-day iPhone, iPad & MacBook service. Volume discounts, on-site support. Call (478) 259-6371.",
  keywords: ["business phone repair Macon", "corporate device repair", "bulk iPhone repair", "business MacBook repair", "enterprise IT support Macon"],
  alternates: { canonical: "https://techmedicsmacon.com/macon/business" },
  openGraph: {
    title: "Business Device Repair Solutions | Tech Medics Macon GA",
    description: "Professional Apple device repair for Macon businesses. Same-day service, volume discounts, on-site support.",
    url: "https://techmedicsmacon.com/macon/business",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Device Repair Services",
  description: "Professional Apple device repair and support services for Macon businesses including same-day repairs, on-site support, and volume discounts",
  provider: { "@type": "LocalBusiness", "@id": "https://techmedicsmacon.com/#business", name: "Tech Medics Macon" },
  areaServed: { "@type": "City", name: "Macon", containedIn: { "@type": "State", name: "Georgia" } },
  serviceType: "Business Device Repair",
};

export default function BusinessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Business Device Solutions</h1>
          <p className="text-xl text-muted-foreground mb-8">Keep your business running smoothly with professional Apple device repair and support services in Macon, GA</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
            <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Get a Business Quote</a>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Trusted by Macon Businesses</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">At Tech Medics, we understand that your business depends on technology. When devices fail, productivity stops. That&apos;s why we provide fast, reliable repair services specifically designed for businesses in the Macon area. From retail stores to professional offices, we keep your Apple devices running at peak performance.</p>
            <p className="text-lg text-foreground leading-relaxed">With over a decade of experience in Apple repairs, our certified technicians handle everything from iPhones and iPads to MacBooks and iMacs. We offer flexible service options including in-store repairs, on-site visits, and pickup/delivery services to fit your business schedule.</p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <Clock className="h-8 w-8 text-primary" />, title: "Same-Day Repairs", desc: "Minimize downtime with our rapid repair services. Most repairs completed within 30 minutes." },
              { icon: <Shield className="h-8 w-8 text-primary" />, title: "Quality Guaranteed", desc: "All business repairs come with our comprehensive warranty and highest quality parts." },
              { icon: <Wrench className="h-8 w-8 text-primary" />, title: "On-Site Support", desc: "We offer on-site device assessment and pickup services for Macon-area businesses." },
              { icon: <CheckCircle2 className="h-8 w-8 text-primary" />, title: "Volume Discounts", desc: "Special pricing packages available for multiple devices and ongoing maintenance needs." },
            ].map((b) => (
              <Card key={b.title} className="border-2">
                <CardHeader><div className="mb-4">{b.icon}</div><CardTitle className="text-xl">{b.title}</CardTitle></CardHeader>
                <CardContent><CardDescription className="text-base">{b.desc}</CardDescription></CardContent>
              </Card>
            ))}
          </div>

          {/* What We Fix */}
          <div className="bg-secondary/30 rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">What We Fix for Businesses</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Common Business Repairs</h3>
                <ul className="space-y-3 text-foreground">
                  {["Cracked screens on iPhones and iPads", "MacBook battery replacement and upgrades", "Water damage recovery and data retrieval", "Device performance optimization", "Charging port and speaker repairs"].map((item) => (
                    <li key={item} className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Business Services</h3>
                <ul className="space-y-3 text-foreground">
                  {["Fleet device management and maintenance", "Bulk repair discounts for multiple devices", "Priority service for urgent business needs", "Scheduled maintenance programs", "Invoice billing for accounting departments"].map((item) => (
                    <li key={item} className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Partner with Tech Medics?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Contact us today to discuss custom solutions for your business. We&apos;ll create a repair and maintenance plan tailored to your needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"><a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a></Button>
              <Button size="lg" variant="outline" asChild className="border-2 text-lg px-8"><a href="mailto:Support@MyTechMedics.com">Email Us</a></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
