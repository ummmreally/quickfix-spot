import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import macbookImage from "@/assets/optimized/macbook-repair-macon.webp";
import FAQSection from "@/components/FAQSection";
import TestimonialSection from "@/components/TestimonialSection";
import RepairComparison from "@/components/RepairComparison";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Helmet } from "react-helmet";
import ReviewSchema from "@/components/ReviewSchema";

const MacBook = () => {
  return (
    <div className="min-h-screen bg-background">
      <ReviewSchema />
      <Helmet>
        <title>MacBook Repair Macon GA | Screen, Keyboard, Battery Fix</title>
        <meta
          name="description"
          content="Expert MacBook repair in Macon GA. Screen replacement, keyboard, battery, logic board repair. MacBook Air & Pro. Same-day service available. (478) 259-6371"
        />
        <meta name="keywords" content="MacBook repair Macon GA, MacBook screen replacement, MacBook keyboard repair, MacBook battery" />
        <link rel="canonical" href="https://techmedicsmacon.com/macon/macbook" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "MacBook Repair",
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
              "name": "MacBook Repair Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "MacBook Screen Replacement",
                    "description": "Professional MacBook screen repair for cracked or damaged displays"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "MacBook Keyboard Repair",
                    "description": "MacBook keyboard replacement and repair service"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "MacBook Battery Replacement"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "MacBook Logic Board Repair"
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
                "name": "How much does MacBook screen repair cost in Macon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "MacBook screen repair costs range from $349-$799 depending on the model. MacBook Air repairs typically cost $349-$449, while MacBook Pro repairs range from $449-$799. This is 30-50% less than Apple Store prices."
                }
              },
              {
                "@type": "Question",
                "name": "Can you repair M1/M2 MacBooks?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we repair all MacBook models including M1, M2, and M3 chip MacBooks. We have specialized tools and training for Apple Silicon MacBook repairs."
                }
              },
              {
                "@type": "Question",
                "name": "How long does MacBook repair take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Simple repairs like battery replacement take 1-2 hours. Screen replacements typically take 2-4 hours. Complex repairs like logic board issues may require 2-5 business days depending on parts availability."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      <LocalBusinessSchema 
        pageName="MacBook Repair Macon GA"
        pageDescription="Expert MacBook screen repair, battery replacement, and keyboard repair in Macon, GA. Same-day service for all MacBook models."
        serviceType="MacBook Repair"
      />
      
      <Navigation />

      <BreadcrumbNav items={[
        { label: "Macon", href: "/macon" },
        { label: "MacBook Repair" }
      ]} />

      {/* Hero Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                MacBook Screen Repair Near Me in Macon, GA
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Looking for MacBook repair near me? We're located at 3742 Eisenhower Parkway in Macon, GA. Expert MacBook repair services including screen replacements, battery replacements, keyboard repairs,
                and more. Professional service for all MacBook models including MacBook Air, MacBook Pro, and MacBook
                Retina.
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
                src={macbookImage}
                alt="MacBook screen repair and battery replacement service in Macon GA"
                width="800"
                height="800"
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
            MacBook Repair Services in Macon, GA
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Screen Repair</h3>
              <p className="text-muted-foreground">
                Cracked or damaged MacBook screen? We replace screens for all MacBook models including Retina displays.
                High-quality LCD panels with warranty.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Battery Replacement</h3>
              <p className="text-muted-foreground">
                MacBook battery not holding a charge? We replace MacBook batteries to restore your laptop's performance
                and portability.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Keyboard Repair</h3>
              <p className="text-muted-foreground">
                Sticky or broken keys? We repair and replace MacBook keyboards including butterfly and scissor-switch
                mechanisms.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Trackpad Repair</h3>
              <p className="text-muted-foreground">
                Trackpad not responding or clicking? We repair and replace MacBook trackpads to restore full
                functionality.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Logic Board Repair</h3>
              <p className="text-muted-foreground">
                MacBook not turning on? We diagnose and repair logic board issues to get your MacBook running again.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Data Recovery</h3>
              <p className="text-muted-foreground">
                Lost data? We offer data recovery services for MacBooks with failed hard drives or SSDs.
              </p>
            </article>
          </div>

          <div className="bg-secondary/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Why Choose Tech Medics Macon for MacBook Repair?</h3>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Expert</div>
                <p className="text-muted-foreground">Certified technicians with MacBook expertise</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Fast</div>
                <p className="text-muted-foreground">Quick turnaround times on most repairs</p>
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

      {/* MacBook Repair Guides Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            MacBook Repair Guides & Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/blog/macbook-screen-cost-macon" className="bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-foreground">MacBook Screen Repair Costs</h3>
              <p className="text-sm text-muted-foreground">Complete guide to MacBook screen replacement pricing in Macon for 2026.</p>
            </Link>
            <Link to="/blog/iphone-battery-replacement-macon" className="bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-foreground">Battery Replacement Guide</h3>
              <p className="text-sm text-muted-foreground">Signs your device battery needs replacement and service expectations.</p>
            </Link>
            <Link to="/blog/water-damaged-iphone-repair" className="bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-foreground">Water Damage Recovery</h3>
              <p className="text-sm text-muted-foreground">What to do if your MacBook gets wet - immediate steps and repair options.</p>
            </Link>
            <Link to="/blog/tech-medics-vs-apple-store-repair" className="bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-foreground">Local Repair vs Apple Store</h3>
              <p className="text-sm text-muted-foreground">Compare Tech Medics Macon service to driving to the Apple Store.</p>
            </Link>
            <Link to="/blog/oem-vs-aftermarket-iphone-screens" className="bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-foreground">OEM vs Aftermarket Parts</h3>
              <p className="text-sm text-muted-foreground">Understanding replacement part quality options for your MacBook.</p>
            </Link>
            <Link to="/blog/same-day-iphone-repair-macon" className="bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-foreground">Same-Day Repair Services</h3>
              <p className="text-sm text-muted-foreground">How we provide fast, same-day device repairs in Macon.</p>
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

      {/* Comparison Section */}
      <RepairComparison deviceType="MacBook" />

      {/* FAQ Section */}
      <FAQSection
        deviceType="MacBook"
        faqs={[
          {
            question: "How long does MacBook screen repair take in Macon, GA?",
            answer:
              "MacBook screen repairs typically take 2-4 hours depending on the model. MacBook Air repairs are usually faster than MacBook Pro Retina displays. We offer same-day service for most models at our Macon location.",
          },
          {
            question: "How much does MacBook screen repair cost?",
            answer:
              "MacBook screen repair costs vary significantly by model and year. Prices range from $299 to $899 depending on whether it's a MacBook Air, Pro, or Retina display. Call (478) 259-6371 for a precise quote for your MacBook.",
          },
          {
            question: "Do you repair all MacBook models?",
            answer:
              "Yes! We repair all MacBook models including MacBook Air (all years), MacBook Pro 13-inch, 15-inch, 16-inch, and MacBook Retina. From 2010 models to the latest M3 MacBooks, we have the expertise.",
          },
          {
            question: "Can you fix MacBook keyboard issues?",
            answer:
              "Absolutely! We repair all MacBook keyboard issues including stuck keys, broken keys, liquid damage, and butterfly keyboard problems. We can replace individual keys or the entire keyboard assembly.",
          },
          {
            question: "My MacBook won't turn on. Can you fix it?",
            answer:
              "Yes, we diagnose and repair MacBooks that won't power on. Common causes include battery issues, logic board problems, or power connection failures. Bring it to our Macon shop for free diagnosis.",
          },
          {
            question: "Do you offer MacBook battery replacement?",
            answer:
              "Yes! MacBook battery replacement is one of our core services. If your MacBook battery won't hold a charge, drains quickly, or causes performance issues, we can install a new genuine battery.",
          },
          {
            question: "Can you upgrade my MacBook's RAM or storage?",
            answer:
              "For older MacBook models with upgradeable RAM and storage, yes! However, newer MacBooks (2016+) have soldered components. We can advise on the best upgrade options for your specific MacBook model.",
          },
          {
            question: "How much does MacBook logic board repair cost?",
            answer:
              "MacBook logic board repair costs vary widely based on the issue and model, typically ranging from $299 to $799. We diagnose the problem first and provide a detailed quote before any logic board work begins.",
          },
          {
            question: "Where can I find MacBook repair near me in Macon, GA?",
            answer:
              "Tech Medics Macon is conveniently located at 3742 Eisenhower Parkway in Macon, GA 31206. We serve Vineville, Ingleside, North Macon, East Macon, and all surrounding areas. Search 'MacBook repair near me' to get directions!",
          },
        ]}
      />

      {/* Testimonials Section */}
      <TestimonialSection
        testimonials={[
          {
            name: "Amanda S.",
            rating: 5,
            text: "My MacBook Pro screen was cracked and they replaced it same day. Looks perfect and works great. Best MacBook repair in Macon!",
            date: "2024-03-20",
            service: "MacBook Pro Screen Repair",
          },
          {
            name: "Robert H.",
            rating: 5,
            text: "MacBook Air keyboard was acting up and they fixed it quickly. Very knowledgeable about the butterfly keyboard issues. Great service!",
            date: "2024-03-14",
            service: "MacBook Keyboard Repair",
          },
          {
            name: "Lisa P.",
            rating: 5,
            text: "Thought my MacBook was dead but they diagnosed and fixed a logic board issue. Saved me from buying a new laptop. Highly recommend!",
            date: "2024-03-09",
            service: "MacBook Logic Board Repair",
          },
        ]}
      />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Fix Your MacBook?</h2>
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

      {/* Related Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            Other Apple Device Repair Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link to="/macon/iphone" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-foreground">iPhone Repair in Macon</h3>
              <p className="text-muted-foreground">Fast iPhone screen & battery repair - 30 minutes or less</p>
            </Link>
            <Link to="/macon/ipad" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-foreground">iPad Repair in Macon</h3>
              <p className="text-muted-foreground">Screen repair, battery replacement & more for all iPad models</p>
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

export default MacBook;
