import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ipadImage from "@/assets/ipad-screen-repair-macon.jpg";
import FAQSection from "@/components/FAQSection";
import TestimonialSection from "@/components/TestimonialSection";
import RepairComparison from "@/components/RepairComparison";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const iPad = () => {
  useEffect(() => {
    document.title = "iPad Repair Macon GA | BEST Service | iPad Screen Repair Near Me | NO APPOINTMENT Needed | Vineville, Ingleside, North Macon, East Macon | iPad Battery Replacement | (478) 259-6371";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Looking for iPad repair near me in Macon? BEST iPad screen repair & battery replacement. NO appointment needed, FAST service. All iPad models including iPad Pro, Air & Mini. Located on Eisenhower Parkway serving Vineville, Ingleside, North & East Macon.",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Looking for iPad repair near me in Macon? BEST iPad screen repair & battery replacement. NO appointment needed, FAST service. All iPad models including iPad Pro, Air & Mini. Located on Eisenhower Parkway serving Vineville, Ingleside, North & East Macon.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
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
                <Button size="lg" variant="outline" asChild className="border-2">
                  <a href="/macon/pricing-chart">View Pricing</a>
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
            <h3 className="text-2xl font-bold mb-4 text-foreground">Why Choose MyTechMedics for iPad Repair?</h3>
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
              "MyTechMedics is located at 3742 Eisenhower Parkway in Macon, GA 31206. We're easily accessible from Vineville, Ingleside, North Macon, and East Macon. Search 'iPad repair near me' to find directions!",
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
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>
            © 2024 MyTechMedics. All rights reserved. |{" "}
            <Link to="/macon/about" className="hover:text-primary transition-colors">
              About
            </Link>
            {" | "}
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default iPad;
