import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ipadImage from "@/assets/optimized/ipad-screen-repair-macon.webp";
import FAQSection from "@/components/FAQSection";
import TestimonialSection from "@/components/TestimonialSection";
import RepairComparison from "@/components/RepairComparison";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Helmet } from "react-helmet";
import ReviewSchema from "@/components/ReviewSchema";

const iPad = () => {
  return (
    <div className="min-h-screen bg-background">
      <ReviewSchema />
      <Helmet>
        <title>iPad Repair Macon GA | Screen & Battery Replacement</title>
        <meta
          name="description"
          content="Professional iPad repair in Macon GA. Screen replacement, battery service, charging port repair. Same-day service. All iPad models. Call (478) 259-6371"
        />
        <meta name="keywords" content="iPad repair Macon GA, iPad screen replacement, iPad battery, iPad charging port repair" />
        <link rel="canonical" href="https://techmedicsmacon.com/macon/ipad" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "iPad Repair",
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
              "name": "iPad Repair Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "iPad Screen Replacement",
                    "description": "Expert iPad screen and glass repair for all models"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "iPad Battery Replacement",
                    "description": "Professional iPad battery replacement service"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "iPad Charging Port Repair"
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
                "name": "How much does iPad screen repair cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "iPad screen repair costs vary by model. iPad Air and standard iPad repairs typically range from $149-$249, while iPad Pro repairs range from $299-$499 depending on size and model year."
                }
              },
              {
                "@type": "Question",
                "name": "Can you repair iPad Pro screens?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we repair all iPad Pro models including 11-inch and 12.9-inch versions. We handle both cracked glass and LCD display issues with high-quality replacement parts."
                }
              },
              {
                "@type": "Question",
                "name": "How long does iPad repair take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most iPad screen repairs take 1-2 hours. Battery replacements and charging port repairs are typically completed the same day. More complex repairs may require 1-2 business days."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      <LocalBusinessSchema 
        pageName="iPad Repair Macon GA"
        pageDescription="Expert iPad screen repair and battery replacement in Macon, GA. Fast service for all iPad models with no appointment needed."
        serviceType="iPad Repair"
      />
      
      <Navigation />

      <BreadcrumbNav items={[
        { label: "Macon", href: "/macon" },
        { label: "iPad Repair" }
      ]} />

      {/* Hero Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                iPad Screen Repair Near Me in Macon, GA
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Looking for iPad repair near me? We're located at 3742 Eisenhower Parkway in Macon, GA. Expert iPad repair services including screen replacements, battery replacements, charging port repairs,
                and more. Fast, reliable service with no appointment needed - most repairs completed in 30 minutes or
                less.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="tel:(478)259-6371">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now for Quote
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={ipadImage}
                alt="iPad screen repair and battery replacement service in Macon GA"
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
            iPad Repair Services in Macon, GA
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Screen Repair</h3>
              <p className="text-muted-foreground">
                Cracked or broken iPad screen? We replace screens for all iPad models quickly and affordably.
                High-quality parts with warranty included.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Battery Replacement</h3>
              <p className="text-muted-foreground">
                Is your iPad battery draining fast or not holding a charge? We replace iPad batteries with premium
                quality parts.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Charging Port Repair</h3>
              <p className="text-muted-foreground">
                iPad not charging properly? We fix charging port issues, replace damaged ports, and ensure reliable
                charging.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Home Button Repair</h3>
              <p className="text-muted-foreground">
                Home button not responding? We repair and replace iPad home buttons for all models.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Water Damage Repair</h3>
              <p className="text-muted-foreground">
                Dropped your iPad in water? We specialize in water damage repair and recovery services.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Speaker & Audio Repair</h3>
              <p className="text-muted-foreground">
                Audio issues? We repair and replace iPad speakers for crystal clear sound quality.
              </p>
            </article>
          </div>

          <div className="bg-secondary/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Why Choose Tech Medics Macon for iPad Repair?</h3>
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

      {/* iPad Repair Guides Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            iPad Repair Guides & Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/blog/ipad-screen-repair-macon" className="bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-foreground">iPad Screen Repair Guide</h3>
              <p className="text-sm text-muted-foreground">Everything you need to know about iPad screen replacement costs and options in Macon.</p>
            </Link>
            <Link to="/blog/iphone-battery-replacement-macon" className="bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-foreground">Battery Replacement Tips</h3>
              <p className="text-sm text-muted-foreground">Signs your device battery needs replacement and what to expect from the service.</p>
            </Link>
            <Link to="/blog/water-damaged-iphone-repair" className="bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-foreground">Water Damage Recovery</h3>
              <p className="text-sm text-muted-foreground">What to do if your iPad gets wet - steps to maximize recovery chances.</p>
            </Link>
            <Link to="/blog/oem-vs-aftermarket-iphone-screens" className="bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-foreground">OEM vs Aftermarket Parts</h3>
              <p className="text-sm text-muted-foreground">Understanding the difference between replacement part quality options.</p>
            </Link>
            <Link to="/blog/tech-medics-vs-apple-store-repair" className="bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-foreground">Local Repair vs Apple Store</h3>
              <p className="text-sm text-muted-foreground">Compare repair options: local Tech Medics Macon vs driving to the Apple Store.</p>
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
      <RepairComparison deviceType="iPad" />

      {/* FAQ Section */}
      <FAQSection
        deviceType="iPad"
        faqs={[
          {
            question: "How long does iPad screen repair take in Macon, GA?",
            answer:
              "Most iPad screen repairs are completed within 1-2 hours depending on the model. iPad Air and iPad Mini repairs are typically faster. We offer same-day service at our Macon location on Eisenhower Parkway.",
          },
          {
            question: "How much does iPad screen repair cost?",
            answer:
              "iPad screen repair costs vary by model and generation. Prices typically range from $99 to $399. Call (478) 259-6371 for an exact quote based on your specific iPad model.",
          },
          {
            question: "Do you repair all iPad models?",
            answer:
              "Yes! We repair all iPad models including iPad Pro, iPad Air, iPad Mini, and standard iPad generations. From the newest models to older iPads, we have the parts and expertise for quality repairs.",
          },
          {
            question: "Is iPad glass replacement different from screen replacement?",
            answer:
              "Yes, some iPads have the glass digitizer separate from the LCD. We can replace just the glass if the LCD is intact, which may be more affordable. We'll diagnose your iPad and recommend the best repair option.",
          },
          {
            question: "Can you fix my iPad that won't charge?",
            answer:
              "Absolutely! iPad charging issues are common and we can repair or replace charging ports. We also fix related issues like damaged lightning connectors and charging circuit problems.",
          },
          {
            question: "Do you offer iPad battery replacement in Macon?",
            answer:
              "Yes, we replace iPad batteries for all models. If your iPad battery drains quickly, won't hold a charge, or causes the device to shut down unexpectedly, we can install a new battery.",
          },
          {
            question: "How do I know if my iPad needs screen replacement?",
            answer:
              "Signs you need iPad screen repair include: cracked or shattered glass, display not responding to touch, black spots or lines on screen, or LCD damage. Bring it to our Macon shop for free diagnosis.",
          },
          {
            question: "Is there a warranty on iPad repairs?",
            answer:
              "Yes, all our iPad repairs are backed by a warranty. We use quality replacement parts and stand behind our workmanship to ensure your iPad repair lasts.",
          },
          {
            question: "Where can I find iPad repair near me in Macon, GA?",
            answer:
              "Tech Medics Macon is located at 3742 Eisenhower Parkway in Macon, GA 31206. We're easily accessible from Vineville, Ingleside, North Macon, and East Macon. Search 'iPad repair near me' to find directions!",
          },
        ]}
      />

      {/* Testimonials Section */}
      <TestimonialSection
        testimonials={[
          {
            name: "Michael B.",
            rating: 5,
            text: "Dropped my iPad Pro and the screen shattered. They had it fixed the same day and it looks brand new. Great iPad repair service in Macon!",
            date: "2024-03-18",
            service: "iPad Screen Repair",
          },
          {
            name: "Jennifer L.",
            rating: 5,
            text: "My iPad wasn't charging and I thought I'd need a new one. They fixed the charging port quickly and saved me hundreds of dollars!",
            date: "2024-03-12",
            service: "iPad Charging Port Repair",
          },
          {
            name: "David K.",
            rating: 5,
            text: "Fast, professional iPad repair. They explained everything clearly and had my iPad Air fixed in about an hour. Highly recommend!",
            date: "2024-03-08",
            service: "iPad Air Screen Replacement",
          },
        ]}
      />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Fix Your iPad?</h2>
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
            <Link to="/macon/macbook" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-foreground">MacBook Repair in Macon</h3>
              <p className="text-muted-foreground">Expert MacBook repairs for all models including Pro, Air & Retina</p>
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

export default iPad;
