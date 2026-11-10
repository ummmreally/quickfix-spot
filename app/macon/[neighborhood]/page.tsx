import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, CheckCircle2, Clock } from "lucide-react";
import FAQSection from "../../components/FAQSection";
import { neighborhoods, getNeighborhood } from "../../data/neighborhoods";
import { getNeighborhoodRich } from "../../data/neighborhoods-rich";

export function generateStaticParams() {
  return neighborhoods.map((n) => ({ neighborhood: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ neighborhood: string }> }): Promise<Metadata> {
  const { neighborhood } = await params;
  const data = getNeighborhood(neighborhood);
  if (!data) return {};
  return {
    title: data.title,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: `https://techmedicsmacon.com/macon/${data.slug}/` },
    openGraph: { title: data.title, description: data.metaDescription, url: `https://techmedicsmacon.com/macon/${data.slug}/` },
  };
}

export default async function NeighborhoodPage({ params }: { params: Promise<{ neighborhood: string }> }) {
  const { neighborhood } = await params;
  const data = getNeighborhood(neighborhood);
  if (!data) notFound();
  const rich = getNeighborhoodRich(neighborhood);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://techmedicsmacon.com" },
      { "@type": "ListItem", position: 2, name: "Macon", item: "https://techmedicsmacon.com/macon" },
      {
        "@type": "ListItem",
        position: 3,
        name: `${data.name} Repair`,
        item: `https://techmedicsmacon.com/macon/${data.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://techmedicsmacon.com/macon/${data.slug}#service`,
    serviceType: "Apple Device Repair",
    name: `iPhone, iPad & MacBook Repair for ${data.name}`,
    description: data.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://techmedicsmacon.com/#business",
      name: "Tech Medics Macon",
      telephone: "(478) 259-6371",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3742 Eisenhower Parkway",
        addressLocality: "Macon",
        addressRegion: "GA",
        postalCode: "31206",
        addressCountry: "US",
      },
    },
    areaServed: data.areaServed.map((a) => ({ "@type": "Place", name: a })),
  };

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-3 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li><Link href="/macon" className="hover:text-primary">Macon</Link></li>
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

      {/* Rich intro - unique per neighborhood */}
      {rich && (
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {rich.intro.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-6">
                {p}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Details (landmarks + why choose) */}
      <section className="py-16 px-4 bg-secondary/20">
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
          {!rich && (
            <div className="prose prose-lg max-w-4xl mx-auto">
              <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: data.seoContent }} />
            </div>
          )}
        </div>
      </section>

      {/* Rich local issues */}
      {rich && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Repairs We See Most Often from {data.name} Customers
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Different neighborhoods send us different repair patterns. Here&apos;s what {data.name} brings in most.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {rich.localIssues.map((issue) => (
                <article key={issue.title} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{issue.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{issue.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Repair Services for {data.name} Residents</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">iPhone 16e, iPad Pro M4, MacBook Air M4 &amp; every older model — all serviced same-day</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { href: "/macon/iphone", img: "/images/iphone-repair.jpg", title: "iPhone Repair", desc: "Screen & battery repair" },
              { href: "/macon/macbook", img: "/images/macbook-repair.jpg", title: "MacBook Repair", desc: "Screen & keyboard repair" },
              { href: "/macon/ipad", img: "/images/ipad-repair.jpg", title: "iPad Repair", desc: "Screen & battery service" },
            ].map((svc) => (
              <Link key={svc.href} href={svc.href} className="block">
                <Card className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={svc.img} alt={`${svc.title} service`} className="w-full h-full object-cover" width="800" height="600" loading="lazy" decoding="async" />
                  </div>
                  <div className="p-6 text-center"><h3 className="text-2xl font-bold text-foreground">{svc.title}</h3>{svc.desc && <p className="text-sm text-muted-foreground mt-1">{svc.desc}</p>}</div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rich local context */}
      {rich && (
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              About Apple Repair in {data.name}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{rich.localContext}</p>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FAQSection faqs={data.faqs} deviceType="Apple Device" />

      {/* Rich related links */}
      {rich && (
        <section className="py-12 px-4 bg-secondary/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Related Pages</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
              {rich.relatedLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block bg-card border border-border rounded-lg p-4 text-center text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{data.name} iPhone Repair – Visit Us Today</h2>
          <p className="text-xl text-muted-foreground mb-8">iPhone 16e to MacBook M4 — most repairs done in 30 minutes. Walk-ins welcome, no appointment needed.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"><a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a></Button>
            <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8"><a href={data.directionsUrl} target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
