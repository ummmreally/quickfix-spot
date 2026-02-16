import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, CheckCircle2, Clock } from "lucide-react";
import FAQSection from "../../components/FAQSection";
import { neighborhoods, getNeighborhood } from "../../data/neighborhoods";

export function generateStaticParams() {
  return neighborhoods.map((n) => ({ neighborhood: n.slug }));
}

export function generateMetadata({ params }: { params: { neighborhood: string } }): Metadata {
  const data = getNeighborhood(params.neighborhood);
  if (!data) return {};
  return {
    title: data.title,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: `https://techmedicsmacon.com/macon/${data.slug}` },
    openGraph: { title: data.title, description: data.metaDescription, url: `https://techmedicsmacon.com/macon/${data.slug}` },
  };
}

export default function NeighborhoodPage({ params }: { params: { neighborhood: string } }) {
  const data = getNeighborhood(params.neighborhood);
  if (!data) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-3 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li><Link href="/" className="hover:text-primary">Macon</Link></li>
          <li>/</li>
          <li className="text-foreground font-medium">{data.name} Repair</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              iPhone, iPad &amp; MacBook Repair {data.slug.includes("-") ? "Near" : "in"} {data.name}{data.slug.includes("-") ? ", GA" : " Macon GA"}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">{data.subtitle}</p>
            <p className="text-lg text-muted-foreground mb-8">{data.locationNote}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call Now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8">
                <a href={data.directionsUrl} target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
            {data.name}&apos;s Nearest Expert Apple Repair Shop
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center"><MapPin className="mr-2 h-5 w-5 text-primary" />Serving {data.name}</h3>
                <ul className="space-y-2">
                  {data.landmarks.map((l, i) => (
                    <li key={i} className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" /><span>{l}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center"><Clock className="mr-2 h-5 w-5 text-primary" />Why {data.name} Residents Choose Us</h3>
                <ul className="space-y-2">
                  {data.whyChooseItems.map((item, i) => (
                    <li key={i} className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: data.seoContent }} />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Repair Services for {data.name} Residents</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Expert repair for all Apple devices</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { href: "/macon/iphone", img: "/images/iphone-repair.jpg", title: "iPhone Repair" },
              { href: "/macon/macbook", img: "/images/macbook-repair.jpg", title: "MacBook Repair" },
              { href: "/macon/ipad", img: "/images/ipad-repair.jpg", title: "iPad Repair" },
            ].map((svc) => (
              <Link key={svc.href} href={svc.href} className="block">
                <Card className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={svc.img} alt={`${svc.title} service`} className="w-full h-full object-cover" width="800" height="600" loading="lazy" decoding="async" />
                  </div>
                  <div className="p-6 text-center"><h3 className="text-2xl font-bold text-foreground">{svc.title}</h3></div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={data.faqs} deviceType="Apple Device" />

      {/* CTA */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{data.name} iPhone Repair – Visit Us Today</h2>
          <p className="text-xl text-muted-foreground mb-8">Get your device fixed in 30 minutes at Tech Medics Macon</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"><a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a></Button>
            <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8"><a href={data.directionsUrl} target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
