import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Star, CheckCircle, Clock, Shield, Wrench, Cpu } from "lucide-react";
import FAQSection from "../../../components/FAQSection";
import { iphoneModels, getIPhoneModel } from "../../../data/iphone-models";

export function generateStaticParams() {
  return iphoneModels.map((m) => ({ model: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ model: string }> }): Promise<Metadata> {
  const { model } = await params;
  const data = getIPhoneModel(model);
  if (!data) return {};
  return {
    title: data.title,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: `https://techmedicsmacon.com/macon/iphone/${data.slug}/` },
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      url: `https://techmedicsmacon.com/macon/iphone/${data.slug}/`,
      images: [{ url: "/images/iphone-screen-repair-macon.webp", width: 800, height: 600, alt: `${data.model} repair service in Macon GA` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.model} Repair Macon GA | Tech Medics`,
      description: data.metaDescription,
      images: ["/images/iphone-screen-repair-macon.webp"],
    },
  };
}

export default async function IPhoneModelPage({ params }: { params: Promise<{ model: string }> }) {
  const { model } = await params;
  const data = getIPhoneModel(model);
  if (!data) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://techmedicsmacon.com" },
      { "@type": "ListItem", position: 2, name: "Macon", item: "https://techmedicsmacon.com/macon" },
      { "@type": "ListItem", position: 3, name: "iPhone Repair", item: "https://techmedicsmacon.com/macon/iphone" },
      { "@type": "ListItem", position: 4, name: `${data.model} Repair`, item: `https://techmedicsmacon.com/macon/iphone/${data.slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://techmedicsmacon.com/macon/iphone/${data.slug}#service`,
    serviceType: `${data.model} Repair`,
    name: `${data.model} Repair Service in Macon GA`,
    description: data.metaDescription,
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
      name: `${data.model} Repair Services`,
      itemListElement: data.repairServices.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `${data.model} ${s.name}`, description: s.description },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const relatedModels = data.relatedModels
    .map((slug) => iphoneModels.find((m) => m.slug === slug))
    .filter(Boolean);

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
          <li><Link href="/macon/iphone" className="hover:text-primary">iPhone Repair</Link></li>
          <li>/</li>
          <li className="text-foreground font-medium">{data.model}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
                <CheckCircle className="h-4 w-4" />
                Apple Genuine Parts Available by Request
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{data.model} Repair in Macon, GA</h1>
              <p className="text-xl text-muted-foreground mb-8">{data.heroText}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2">
                  <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-secondary/50 p-8 md:p-10">
              <div className="text-center space-y-6">
                <div className="text-5xl">📱</div>
                <p className="text-2xl font-bold text-foreground">{data.model}</p>
                <div className="grid grid-cols-2 gap-4">
                  {data.specs.slice(0, 4).map((s) => (
                    <div key={s.label} className="text-left bg-background/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                      <p className="text-sm font-semibold text-foreground">{s.value}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-center gap-1 text-primary">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary" />)}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Macon&apos;s Highest-Rated iPhone Repair</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 px-4 bg-primary/5 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Clock className="h-6 w-6 text-primary" />
              <p className="font-bold text-foreground text-sm">30-Min Repairs</p>
              <p className="text-xs text-muted-foreground">Most screen fixes done fast</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <p className="font-bold text-foreground text-sm">30-Day Warranty</p>
              <p className="text-xs text-muted-foreground">Parts &amp; labor guaranteed</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Wrench className="h-6 w-6 text-primary" />
              <p className="font-bold text-foreground text-sm">Walk-Ins Welcome</p>
              <p className="text-xs text-muted-foreground">No appointment needed</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Cpu className="h-6 w-6 text-primary" />
              <p className="font-bold text-foreground text-sm">iPhone Experts</p>
              <p className="text-xs text-muted-foreground">iPhone-focused expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Common {data.model} Problems We Fix</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">Experiencing any of these issues? Walk into Tech Medics at 3742 Eisenhower Parkway for a free diagnosis.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.commonIssues.map((issue) => (
              <article key={issue.issue} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-foreground">{data.model} {issue.issue}</h3>
                <p className="text-muted-foreground text-sm">{issue.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">{data.model} Repair Services in Macon, GA</h2>
          <p className="text-center text-muted-foreground mb-12">All repairs include free diagnostics and a 30-day warranty on parts &amp; labor</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {data.repairServices.map((service) => (
              <Card key={service.name} className="p-6 border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground">{data.model} {service.name}</h3>
                  <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">{service.time}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="tel:(478)259-6371"><Phone className="mr-2 h-4 w-4" />Call for Quote</a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Device Specs */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">{data.model} Specifications</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden border-border">
              <div className="bg-primary px-6 py-4">
                <h3 className="text-primary-foreground text-xl font-bold">{data.model}</h3>
                <p className="text-primary-foreground/70 text-sm">Released {data.year}</p>
              </div>
              <div className="divide-y divide-border">
                {data.specs.map((spec) => (
                  <div key={spec.label} className="flex items-center justify-between px-6 py-4">
                    <span className="text-muted-foreground font-medium text-sm">{spec.label}</span>
                    <span className="text-foreground font-semibold text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Apple Genuine Parts Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <CheckCircle className="h-5 w-5" />
            Apple Genuine Parts Available
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Apple Genuine Parts Available by Request</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Want an official Apple part for your {data.model} repair? We offer <strong>Apple Genuine Parts by request</strong> for screen replacements and battery swaps. We also carry premium aftermarket parts that match Apple specs at a lower price — you choose what&apos;s right for your budget.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mt-8">
            <Card className="p-6 border-border text-left">
              <h3 className="font-bold text-foreground mb-2">Apple Genuine Parts</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />Official Apple components</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />Verified with Apple diagnostics</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />Available by request</li>
              </ul>
            </Card>
            <Card className="p-6 border-border text-left">
              <h3 className="font-bold text-foreground mb-2">Premium Aftermarket Parts</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />Matches Apple specifications</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />More affordable option</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />30-day warranty included</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection deviceType={data.model} faqs={data.faqs} />

      {/* SEO Long-Form Content */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">{data.model} Repair in Macon, Georgia</h2>
            <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: data.seoContent }} />
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Need {data.model} Repair in Macon?</h2>
          <p className="text-xl text-muted-foreground mb-8">Walk in to 3742 Eisenhower Parkway, Macon, GA 31206 &ndash; no appointment needed. Most repairs done in 30 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"><a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a></Button>
            <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8"><a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a></Button>
          </div>
        </div>
      </section>

      {/* Related Models */}
      {relatedModels.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">Related iPhone Repair Services</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {relatedModels.map((rm) => rm && (
                <Link key={rm.slug} href={`/macon/iphone/${rm.slug}`} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{rm.model} Repair</h3>
                  <p className="text-muted-foreground text-sm">{rm.screenSize} {rm.screenType} &bull; {rm.year}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Models Link */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">We Repair All iPhone Models</h2>
          <p className="text-muted-foreground mb-6">From iPhone 7 to iPhone 16 Pro Max &ndash; every model serviced same-day in Macon, GA.</p>
          <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
            {iphoneModels.map((m) => (
              <Link
                key={m.slug}
                href={`/macon/iphone/${m.slug}`}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${m.slug === data.slug ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-foreground hover:border-primary/50 hover:bg-primary/5"}`}
              >
                {m.model}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/macon/iphone" className="text-primary hover:underline font-semibold">← Back to All iPhone Repair Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
