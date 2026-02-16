import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Star, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Reviews & Testimonials | Tech Medics Macon GA | 4.9 Stars | (478) 259-6371",
  description: "Read real customer reviews for Tech Medics Macon GA. 4.9-star rating for iPhone, iPad, MacBook & game console repair. See why Macon trusts us for device repair.",
  keywords: ["Tech Medics reviews", "phone repair reviews Macon GA", "iPhone repair reviews Macon", "best phone repair shop Macon", "Tech Medics Macon testimonials", "device repair reviews Macon Georgia"],
  alternates: { canonical: "https://techmedicsmacon.com/macon/reviews" },
  openGraph: {
    title: "Customer Reviews | Tech Medics Macon GA – 4.9 Star Rating",
    description: "Read real reviews from satisfied customers. 4.9 stars for iPhone, iPad, MacBook & console repair in Macon GA.",
    url: "https://techmedicsmacon.com/macon/reviews",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://techmedicsmacon.com" },
    { "@type": "ListItem", position: 2, name: "Macon", item: "https://techmedicsmacon.com/macon" },
    { "@type": "ListItem", position: 3, name: "Reviews", item: "https://techmedicsmacon.com/macon/reviews" },
  ],
};

const reviews = [
  { name: "Sarah M.", rating: 5, text: "Cracked my iPhone 16 screen at work and they fixed it in 25 minutes. Screen looks perfect — can't even tell it was broken. Best iPhone repair in Macon.", service: "iPhone 16 Screen Repair", date: "January 2026" },
  { name: "James T.", rating: 5, text: "My iPhone 15 battery was dying by lunch every day. They swapped it in 30 minutes and now it lasts all day. Way cheaper than Apple.", service: "iPhone Battery Replacement", date: "January 2026" },
  { name: "Emily R.", rating: 5, text: "Dropped my iPhone in the pool and thought it was done. Tech Medics recovered it and saved all my photos. Miracle workers!", service: "iPhone Water Damage Repair", date: "December 2025" },
  { name: "Marcus D.", rating: 5, text: "Dropped my iPhone 15 face-down on the parking lot. They had the screen replaced in 25 minutes and it looks brand new. Saved me hundreds compared to Apple!", service: "iPhone 15 Screen Repair", date: "December 2025" },
  { name: "Angela W.", rating: 5, text: "My daughter cracked her iPad screen. Tech Medics fixed it same day for way less than I expected. Great service and very friendly.", service: "iPad Screen Repair", date: "November 2025" },
  { name: "David L.", rating: 5, text: "MacBook Pro screen cracked in my bag. They replaced the Retina display and it's perfect. Best repair shop in Macon hands down.", service: "MacBook Pro Screen Repair", date: "November 2025" },
  { name: "Tyler R.", rating: 5, text: "PS5 had no video output – HDMI port was damaged. Tech Medics soldered a new one and it works perfectly. Way cheaper than buying a new PS5!", service: "PS5 HDMI Port Repair", date: "October 2025" },
  { name: "Patricia K.", rating: 5, text: "My MacBook Air wouldn't hold a charge for more than an hour. New battery installed same day and it's back to lasting 10+ hours. Lifesaver!", service: "MacBook Air Battery", date: "October 2025" },
  { name: "Christina M.", rating: 5, text: "My iPhone 14 would only charge if I held the cable at a weird angle. They replaced the charging port in 40 minutes and now it works perfectly.", service: "iPhone Charging Port", date: "September 2025" },
  { name: "Brandon K.", rating: 5, text: "Both my Joy-Cons had terrible drift. They fixed both in about an hour and now they're perfect. Great price and fast service.", service: "Switch Joy-Con Repair", date: "September 2025" },
  { name: "Jennifer P.", rating: 5, text: "My iPhone was completely dead after water damage. Tech Medics recovered ALL my photos – 5 years of memories I thought were gone forever. Worth every penny.", service: "iPhone Data Recovery", date: "August 2025" },
  { name: "Michael S.", rating: 5, text: "Spilled coffee all over my MacBook Pro. They cleaned it up, replaced a couple of damaged components, and it works perfectly now. Saved me thousands.", service: "MacBook Water Damage", date: "August 2025" },
  { name: "Robert H.", rating: 5, text: "My daughter's iPad battery was swollen and the screen was lifting. They replaced it safely within the hour. Very professional and affordable.", service: "iPad Battery Replacement", date: "July 2025" },
  { name: "Kevin B.", rating: 5, text: "Thought my iPad was dead but it was just the charging port. Tech Medics fixed it same day and saved me from buying a new one. Great price too.", service: "iPad Charging Port", date: "July 2025" },
  { name: "Lisa G.", rating: 5, text: "MacBook Pro wouldn't charge at all. They diagnosed it quickly and had it fixed within 2 hours. Professional service and fair pricing.", service: "MacBook Charging Port", date: "June 2025" },
  { name: "Daniel M.", rating: 5, text: "MacBook hard drive failed with years of work documents. They recovered everything. I was in tears. These guys are the real deal.", service: "MacBook Data Recovery", date: "June 2025" },
  { name: "Amanda C.", rating: 5, text: "Dropped my phone and the screen was totally black. Couldn't access anything. Tech Medics pulled all my contacts, photos, and messages off it.", service: "iPhone Data Recovery", date: "May 2025" },
  { name: "Jason W.", rating: 5, text: "Xbox Series X wouldn't read discs anymore. They replaced the disc drive and it's back to normal. Friendly staff and reasonable pricing.", service: "Xbox Disc Drive Repair", date: "May 2025" },
];

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://techmedicsmacon.com/#business",
  name: "Tech Medics Macon",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: reviews.length.toString(),
    reviewCount: reviews.length.toString(),
  },
  review: reviews.map(r => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: r.rating.toString(), bestRating: "5" },
    reviewBody: r.text,
  })),
};

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-3 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li><Link href="/macon" className="hover:text-primary">Macon</Link></li>
          <li>/</li>
          <li className="text-foreground font-medium">Reviews</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Customer Reviews &amp; Testimonials</h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-8 w-8 fill-primary text-primary" />)}
          </div>
          <p className="text-2xl font-bold text-foreground mb-2">4.9 out of 5 Stars</p>
          <p className="text-xl text-muted-foreground mb-8">Based on customer reviews &ndash; Macon&apos;s highest-rated device repair shop</p>
          <Button asChild size="lg" variant="outline" className="border-2">
            <a href="https://www.google.com/maps/place/Tech+Medics+Macon" target="_blank" rel="noopener noreferrer">Leave Us a Review on Google</a>
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: "4.9★", desc: "Average Rating" },
              { stat: "1000+", desc: "Devices Repaired" },
              { stat: "30 Min", desc: "Average Repair Time" },
              { stat: "98%", desc: "Customer Satisfaction" },
            ].map((s) => (
              <div key={s.stat} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{s.stat}</div>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">What Our Customers Say</h2>
          <p className="text-center text-muted-foreground mb-12">Real reviews from real customers in Macon, GA</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <Card key={i} className="p-6 border-border hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">{[...Array(r.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}</div>
                  <span className="text-xs text-muted-foreground">{r.date}</span>
                </div>
                <p className="text-muted-foreground mb-4 italic text-sm">&ldquo;{r.text}&rdquo;</p>
                <div className="border-t border-border pt-3">
                  <p className="font-semibold text-foreground text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.service}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Customers Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Why Macon Chooses Tech Medics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Fast Service", desc: "Most iPhone repairs completed in 30 minutes. Walk-ins welcome, no appointment needed." },
              { title: "Fair Pricing", desc: "30-50% less than Apple Store. Transparent pricing with no hidden fees or surprise charges." },
              { title: "Quality Parts", desc: "Premium OEM-equivalent parts that match Apple specifications for performance and longevity." },
              { title: "Expert Technicians", desc: "Certified, experienced technicians who have repaired thousands of devices." },
              { title: "30-Day Warranty", desc: "Every repair backed by our 30-day warranty on parts and labor. Peace of mind guaranteed." },
              { title: "Local & Trusted", desc: "Locally owned and operated in Macon. We're your neighbors and we care about our community." },
            ].map((s) => (
              <article key={s.title} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Join Our Happy Customers</h2>
          <p className="text-xl text-muted-foreground mb-8">Experience the repair service Macon trusts most. Walk in or call today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"><a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a></Button>
            <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8"><a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
