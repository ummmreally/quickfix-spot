import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, GraduationCap, Users, DollarSign, Laptop } from "lucide-react";

export const metadata: Metadata = {
  title: "School & Student Device Repair Macon GA | Educational Discounts | Tech Medics",
  description: "iPad & MacBook repair for schools in Macon GA. Student discounts, bulk repairs, educational pricing. Serving K-12 & colleges. Call (478) 259-6371.",
  keywords: ["school iPad repair Macon", "student device repair", "educational technology support", "Mercer University repair", "school MacBook repair Macon"],
  alternates: { canonical: "https://techmedicsmacon.com/macon/education" },
  openGraph: {
    title: "Education Technology Support | Tech Medics Macon GA",
    description: "Professional repair services for schools, teachers, and students in Macon, GA. Educational pricing available.",
    url: "https://techmedicsmacon.com/macon/education",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Education Technology Support",
  description: "Professional Apple device repair services for schools, teachers, and students in Macon with educational pricing and bulk repair programs",
  provider: { "@type": "LocalBusiness", "@id": "https://techmedicsmacon.com/#business", name: "Tech Medics Macon" },
  areaServed: { "@type": "City", name: "Macon", containedIn: { "@type": "State", name: "Georgia" } },
  serviceType: "Educational Device Repair",
};

export default function EducationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Education Technology Support</h1>
          <p className="text-xl text-muted-foreground mb-8">Professional repair services for schools, teachers, and students throughout the Macon area</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
            <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Contact Us for Schools</a>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Supporting Education in Macon</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">Technology plays a crucial role in modern education. When school-issued devices break, it can disrupt learning and create frustration for students, teachers, and administrators. Tech Medics is proud to support educational institutions across Macon with specialized repair services for Apple devices used in classrooms.</p>
            <p className="text-lg text-foreground leading-relaxed">From elementary schools to universities, we provide fast, affordable repairs for iPads, MacBooks, and other Apple technology that students depend on. Our team understands the unique needs of educational environments and works efficiently to minimize device downtime and keep students learning.</p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <GraduationCap className="h-8 w-8 text-primary" />, title: "Student-First Service", desc: "We understand the importance of keeping students connected to their learning tools." },
              { icon: <DollarSign className="h-8 w-8 text-primary" />, title: "Educational Pricing", desc: "Special discounted rates for schools, teachers, and educational institutions in Macon." },
              { icon: <Laptop className="h-8 w-8 text-primary" />, title: "Device Management", desc: "Comprehensive support for school-issued iPads, MacBooks, and other Apple devices." },
              { icon: <Users className="h-8 w-8 text-primary" />, title: "Bulk Repairs", desc: "Efficient handling of multiple devices with streamlined drop-off and pickup services." },
            ].map((b) => (
              <Card key={b.title} className="border-2">
                <CardHeader><div className="mb-4">{b.icon}</div><CardTitle className="text-xl">{b.title}</CardTitle></CardHeader>
                <CardContent><CardDescription className="text-base">{b.desc}</CardDescription></CardContent>
              </Card>
            ))}
          </div>

          {/* Who We Serve */}
          <div className="bg-secondary/30 rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <GraduationCap className="h-8 w-8 text-primary" />, title: "K-12 Schools", desc: "Public and private schools throughout Macon and surrounding counties. We handle classroom device repairs for students and teachers." },
                { icon: <Laptop className="h-8 w-8 text-primary" />, title: "Colleges & Universities", desc: "Higher education institutions needing reliable repair services for student and faculty Apple devices." },
                { icon: <Users className="h-8 w-8 text-primary" />, title: "Students & Teachers", desc: "Individual students and educators with personal devices used for educational purposes receive special pricing." },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">Educational Device Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardHeader><CardTitle className="text-2xl">Common Repairs</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-foreground">
                    {["iPad screen replacement and digitizer repair", "MacBook keyboard and trackpad replacement", "Battery replacement for all Apple devices", "Charging port and cable repairs", "Camera and microphone fixes", "Water damage assessment and recovery", "Software troubleshooting and updates"].map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardHeader><CardTitle className="text-2xl">School Programs</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-foreground">
                    {["Bulk device repair with volume pricing", "Scheduled maintenance visits", "Summer device refresh programs", "Emergency same-day repair service", "Device protection accessories and cases", "Purchase order and invoice billing", "Loaner devices available for schools"].map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-secondary/30 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Partner with Tech Medics</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Let&apos;s discuss how we can support your school&apos;s technology needs. Contact us to learn about our educational pricing and service programs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"><a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a></Button>
              <Button size="lg" variant="outline" asChild className="border-2 text-lg px-8"><a href="mailto:Support@MyTechMedics.com">Email for Quote</a></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
