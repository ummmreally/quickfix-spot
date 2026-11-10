import Link from "next/link";
import { Phone, Clock, Shield, MapPin, CheckCircle2 } from "lucide-react";
import FAQSection from "./FAQSection";
import type { ServiceCityData } from "../data/service-cities";

export default function CityServicePage({ data }: { data: ServiceCityData }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://techmedicsmacon.com" },
      { "@type": "ListItem", position: 2, name: "Macon", item: "https://techmedicsmacon.com/macon" },
      {
        "@type": "ListItem",
        position: 3,
        name: `${data.city} iPhone Repair`,
        item: `https://techmedicsmacon.com/macon/${data.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://techmedicsmacon.com/macon/${data.slug}#service`,
    serviceType: "iPhone Repair",
    name: `iPhone Repair Service for ${data.city}, ${data.state}`,
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
    areaServed: [
      { "@type": "City", name: data.city, containedIn: { "@type": "AdministrativeArea", name: data.county } },
      { "@type": "AdministrativeArea", name: data.county },
    ],
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
          <li className="text-foreground font-medium">{data.city} iPhone Repair</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{data.h1}</h1>
          <p className="text-xl text-muted-foreground mb-6">{data.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2 text-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>
                {data.driveMinutes} min via {data.highway} {data.exitNumber}
              </span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span>30-Minute Screen Repairs</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span>30-Day Warranty</span>
            </div>
          </div>
          <a
            href="tel:(478)259-6371"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call (478) 259-6371
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          {data.intro.map((p, i) => (
            <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-6">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Landmarks */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Areas of {data.city} & {data.county} We Serve
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {data.landmarks.map((l, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Local Issues - unique per city */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            iPhone Problems We See Most Often from {data.city} Customers
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Every city sends us a slightly different mix of repairs. Here&apos;s what {data.city} residents bring in most.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {data.localIssues.map((issue) => (
              <article key={issue.title} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{issue.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{issue.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Directions from {data.city} to Tech Medics
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{data.directions}</p>
          <a
            href={`https://www.google.com/maps/dir/${encodeURIComponent(
              `${data.city}, ${data.state}`
            )}/3742+Eisenhower+Parkway,+Macon,+GA+31206`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
          >
            <MapPin className="w-5 h-5" />
            Open Driving Directions in Google Maps →
          </a>
        </div>
      </section>

      {/* Local Context */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            About iPhone Repair in {data.city}, {data.state}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{data.localContext}</p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection deviceType="iPhone" faqs={data.faqs} />

      {/* Related */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Related Pages</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {data.relatedLinks.map((l) => (
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

      {/* CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Repair Your iPhone? Drive Up from {data.city} Today.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Most screen repairs done in 30 minutes. No appointment needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(478)259-6371"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (478) 259-6371
            </a>
            <a
              href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-foreground/20 text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
