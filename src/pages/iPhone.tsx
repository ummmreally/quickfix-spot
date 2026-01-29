import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import iphoneImage from "@/assets/optimized/iphone-screen-repair-macon.webp";
import FAQSection from "@/components/FAQSection";
import TestimonialSection from "@/components/TestimonialSection";
import RepairComparison from "@/components/RepairComparison";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Helmet } from "react-helmet";
import ReviewSchema from "@/components/ReviewSchema";

const iPhone = () => {
  return (
    <div className="min-h-screen bg-background">
      <ReviewSchema />
      <Helmet>
        <title>iPhone Repair Macon GA | Same-Day Screen & Battery Fix</title>
        <meta
          name="description"
          content="Expert iPhone repair in Macon GA. Screen replacement $79+, battery $59+. Most repairs in 30 min. Walk-ins welcome at 3742 Eisenhower Pkwy."
        />
        <meta name="keywords" content="iPhone repair Macon GA, iPhone screen repair, iPhone battery replacement, cracked iPhone screen Macon" />
        <link rel="canonical" href="https://techmedicsmacon.com/macon/iphone" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "iPhone Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Tech Medics Macon",
              "telephone": "(478) 259-6371",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3742 Eisenhower Parkway",
                "addressLocality": "Macon",
                "addressRegion": "GA",
                "postalCode": "31206"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Macon",
              "containedIn": {
                "@type": "State",
                "name": "Georgia"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "iPhone Repair Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "iPhone Screen Repair",
                    "description": "Professional iPhone screen replacement for cracked or damaged displays"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "minPrice": "79.00",
                    "priceCurrency": "USD"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "iPhone Battery Replacement",
                    "description": "Quick iPhone battery replacement for improved performance"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "minPrice": "59.00",
                    "priceCurrency": "USD"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "iPhone Charging Port Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "iPhone Water Damage Repair"
                  }
                }
              ]
            }
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does iPhone screen repair cost in Macon GA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "iPhone screen repair costs start at $79 for older models. iPhone 12-15 screen repairs range from $119-$249 depending on the model. We offer same-day service with warranty included."
                }
              },
              {
                "@type": "Question",
                "name": "How long does iPhone repair take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most iPhone screen and battery repairs are completed in 30-45 minutes while you wait. More complex repairs like water damage or logic board issues may take 1-2 days."
                }
              },
              {
                "@type": "Question",
                "name": "Do you use genuine iPhone parts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We use high-quality OEM-equivalent parts that meet or exceed Apple's standards. All repairs include a warranty for your peace of mind."
                }
              },
              {
                "@type": "Question",
                "name": "Is iPhone repair cheaper than Apple Store?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Our iPhone repairs cost 30-50% less than Apple Store prices. For example, iPhone 13 screen repair is $149 at Tech Medics vs $279 at Apple."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      <LocalBusinessSchema 
        pageName="iPhone Repair Macon GA"
        pageDescription="Expert iPhone screen repair and battery replacement in Macon, GA. Fast 30-minute repairs with no appointment needed."
        serviceType="iPhone Repair"
      />
      
      <Navigation />

      <BreadcrumbNav items={[
        { label: "Macon", href: "/macon" },
        { label: "iPhone Repair" }
      ]} />

      {/* Hero Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                iPhone Screen Repair Near Me in Macon, GA
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Looking for iPhone repair near me? We're located at 3742 Eisenhower Parkway in Macon, GA. Expert iPhone repair services including screen replacements, battery replacements, charging port
                repairs, and more. Fast, reliable service with no appointment needed - most repairs completed in 30
                minutes or less.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="tel:(478)259-6371">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now for Quote
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-2">
                  <a href="/macon/pricing-chart">View Pricing</a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={iphoneImage}
                alt="iPhone screen repair and battery replacement service in Macon GA"
                width="800"
                height="600"
                className="w-full h-auto"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            iPhone Repair Services in Macon, GA
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Screen Repair</h3>
              <p className="text-muted-foreground">
                Cracked or broken iPhone screen? We replace screens for all iPhone models quickly and affordably.
                High-quality parts with warranty included.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Battery Replacement</h3>
              <p className="text-muted-foreground">
                Is your iPhone battery draining fast? We replace iPhone batteries with premium quality parts to restore
                your phone's performance.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Charging Port Repair</h3>
              <p className="text-muted-foreground">
                iPhone not charging properly? We fix charging port issues, replace damaged ports, and ensure reliable
                charging.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Camera Repair</h3>
              <p className="text-muted-foreground">
                Front or back camera not working? We repair and replace iPhone cameras to restore photo quality.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Water Damage Repair</h3>
              <p className="text-muted-foreground">
                Dropped your iPhone in water? We specialize in water damage repair and recovery services.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Speaker & Microphone</h3>
              <p className="text-muted-foreground">
                Audio issues? We repair and replace iPhone speakers and microphones for crystal clear sound.
              </p>
            </article>
          </div>

          <div className="bg-secondary/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Why Choose Tech Medics Macon for iPhone Repair?</h3>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">30 Min</div>
                <p className="text-muted-foreground">Most repairs completed in 30 minutes or less</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">No Appointment</div>
                <p className="text-muted-foreground">Walk-ins welcome, no appointment needed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Warranty</div>
                <p className="text-muted-foreground">All repairs backed by warranty</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Local</div>
                <p className="text-muted-foreground">Conveniently located on Eisenhower Parkway</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <RepairComparison deviceType="iPhone" />

      {/* FAQ Section */}
      <FAQSection
        deviceType="iPhone"
        faqs={[
          {
            question: "How long does iPhone screen repair take in Macon, GA?",
            answer:
              "Most iPhone screen repairs are completed in 30 minutes or less. We offer same-day service with no appointment needed. Simply walk into our Eisenhower Parkway location and we'll get your iPhone fixed quickly.",
          },
          {
            question: "How much does iPhone screen repair cost in Macon?",
            answer:
              "iPhone screen repair costs vary by model. Prices typically range from $79 to $329 depending on your iPhone model. Call us at (478) 259-6371 for an exact quote for your specific iPhone model.",
          },
          {
            question: "Do you repair all iPhone models?",
            answer:
              "Yes! We repair all iPhone models including the latest iPhone 15, 14, 13, 12, 11, XS, XR, X, 8, 7, and older models. We stock parts for all major iPhone models for fast same-day repairs.",
          },
          {
            question: "Is there a warranty on iPhone screen repairs?",
            answer:
              "Yes, all our iPhone screen repairs come with a 30-day warranty covering our workmanship and parts. We stand behind our work and use high-quality replacement parts to ensure your iPhone screen repair lasts.",
          },
          {
            question: "Can you fix my iPhone battery that drains quickly?",
            answer:
              "Absolutely! iPhone battery replacement is one of our most popular services. If your iPhone battery drains fast or won't hold a charge, we can replace it with a new battery in about 30 minutes.",
          },
          {
            question: "Do I need an appointment for iPhone repair in Macon?",
            answer:
              "No appointment necessary! We welcome walk-ins during our business hours Monday-Friday 10am-6pm and Saturday 10am-5pm. Just bring your iPhone to our Macon location at 3742 Eisenhower Parkway.",
          },
          {
            question: "Where can I find iPhone repair near me in Macon, GA?",
            answer:
              "Tech Medics Macon is conveniently located at 3742 Eisenhower Parkway in Macon, GA 31206. We serve all of Macon including Vineville, Ingleside, North Macon, and East Macon. Just search 'iPhone repair near me' and you'll find us!",
          },
          {
            question: "Can you recover data from a broken iPhone?",
            answer:
              "Yes, we offer data recovery services for iPhones with broken screens, water damage, or other issues. Our technicians can often retrieve your photos, contacts, and important data.",
          },
          {
            question: "Do you fix water damaged iPhones?",
            answer:
              "Yes, we specialize in iPhone water damage repair. If you dropped your iPhone in water, bring it to us immediately. The sooner we can diagnose and repair water damage, the better chance of full recovery.",
          },
        ]}
      />

      {/* Testimonials Section */}
      <TestimonialSection
        testimonials={[
          {
            name: "Sarah M.",
            rating: 5,
            text: "Cracked my iPhone 14 screen and they fixed it in 25 minutes! Great service and fair pricing. Highly recommend for iPhone repair in Macon.",
            date: "2024-03-15",
            service: "iPhone Screen Repair",
          },
          {
            name: "James T.",
            rating: 5,
            text: "My iPhone battery was dying so fast. They replaced it while I waited and now it lasts all day again. Fast and professional!",
            date: "2024-03-10",
            service: "iPhone Battery Replacement",
          },
          {
            name: "Emily R.",
            rating: 5,
            text: "Dropped my iPhone in the pool. They saved all my photos and got it working again. Amazing service! Best repair shop in Macon.",
            date: "2024-03-05",
            service: "iPhone Water Damage Repair",
          },
        ]}
      />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Fix Your iPhone?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Visit us at 3742 Eisenhower Parkway, Macon, GA 31206 or call for a free quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
              <a href="tel:(478)259-6371">
                <Phone className="mr-2 h-5 w-5" />
                Call (478) 259-6371
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8">
              <a
                href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Blog Posts Section - Internal Links for SEO */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            iPhone Repair Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link to="/blog/iphone-screen-repair-macon-ga" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-foreground">Screen Repair Complete Guide</h3>
              <p className="text-muted-foreground text-sm">Costs, quality options, and what to expect</p>
            </Link>
            <Link to="/blog/iphone-battery-replacement-macon" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-foreground">Battery Replacement Guide</h3>
              <p className="text-muted-foreground text-sm">Signs, costs, and same-day service</p>
            </Link>
            <Link to="/blog/water-damaged-iphone-repair" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-foreground">Water Damage Repair</h3>
              <p className="text-muted-foreground text-sm">Emergency steps and professional repair</p>
            </Link>
            <Link to="/blog/iphone-dying-fast-after-charging" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-foreground">iPhone Dying Fast?</h3>
              <p className="text-muted-foreground text-sm">11 proven fixes for battery drain</p>
            </Link>
            <Link to="/blog/iphone-not-turning-on-fix" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-foreground">iPhone Won't Turn On</h3>
              <p className="text-muted-foreground text-sm">Troubleshooting and repair options</p>
            </Link>
            <Link to="/blog/iphone-repair-near-me-macon" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-foreground">iPhone Repair Near Me</h3>
              <p className="text-muted-foreground text-sm">Your local Macon repair expert</p>
            </Link>
          </div>
          <div className="text-center">
            <Link to="/blog" className="text-primary hover:underline font-semibold">View All iPhone Repair Guides →</Link>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            Other Apple Device Repair Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link to="/macon/ipad" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-foreground">iPad Repair in Macon</h3>
              <p className="text-muted-foreground">Screen repair, battery replacement & more for all iPad models</p>
            </Link>
            <Link to="/macon/macbook" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-foreground">MacBook Repair in Macon</h3>
              <p className="text-muted-foreground">Expert MacBook repairs for all models including Pro, Air & Retina</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Serving Macon Neighborhoods */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            Serving All Macon Neighborhoods
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <Link to="/macon/downtown" className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
              <span className="font-medium text-foreground">Downtown</span>
            </Link>
            <Link to="/macon/north-macon" className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
              <span className="font-medium text-foreground">North Macon</span>
            </Link>
            <Link to="/macon/vineville" className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
              <span className="font-medium text-foreground">Vineville</span>
            </Link>
            <Link to="/macon/ingleside" className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
              <span className="font-medium text-foreground">Ingleside</span>
            </Link>
            <Link to="/macon/east-macon" className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
              <span className="font-medium text-foreground">East Macon</span>
            </Link>
            <Link to="/macon/south-macon" className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
              <span className="font-medium text-foreground">South Macon</span>
            </Link>
            <Link to="/macon/rutland" className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
              <span className="font-medium text-foreground">Rutland</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Contact</h3>
              <p className="text-muted-foreground mb-2">3742 Eisenhower Parkway</p>
              <p className="text-muted-foreground mb-4">Macon, GA 31206</p>
              <p className="text-muted-foreground">(478) 259-6371</p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Services</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">Home</Link>
                <Link to="/macon/iphone" className="block text-muted-foreground hover:text-primary transition-colors">iPhone Repair</Link>
                <Link to="/macon/ipad" className="block text-muted-foreground hover:text-primary transition-colors">iPad Repair</Link>
                <Link to="/macon/macbook" className="block text-muted-foreground hover:text-primary transition-colors">MacBook Repair</Link>
                <Link to="/blog" className="block text-muted-foreground hover:text-primary transition-colors">Repair Guides</Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Neighborhoods</h3>
              <div className="space-y-2">
                <Link to="/macon/downtown" className="block text-muted-foreground hover:text-primary transition-colors">Downtown Macon</Link>
                <Link to="/macon/north-macon" className="block text-muted-foreground hover:text-primary transition-colors">North Macon</Link>
                <Link to="/macon/vineville" className="block text-muted-foreground hover:text-primary transition-colors">Vineville</Link>
                <Link to="/macon/ingleside" className="block text-muted-foreground hover:text-primary transition-colors">Ingleside</Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">More Areas</h3>
              <div className="space-y-2">
                <Link to="/macon/east-macon" className="block text-muted-foreground hover:text-primary transition-colors">East Macon</Link>
                <Link to="/macon/south-macon" className="block text-muted-foreground hover:text-primary transition-colors">South Macon</Link>
                <Link to="/macon/rutland" className="block text-muted-foreground hover:text-primary transition-colors">Rutland</Link>
                <Link to="/warranty-policy" className="block text-muted-foreground hover:text-primary transition-colors">Warranty Policy</Link>
                <Link to="/privacy" className="block text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              </div>
            </div>
          </div>
          
          <div className="text-center text-muted-foreground border-t border-border pt-6">
            <p>© 2026 Tech Medics Macon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default iPhone;
