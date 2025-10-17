import { Button } from "@/components/ui/button";
import { MapPin, Phone, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import ipadImage from "@/assets/ipad-repair.jpg";
import FAQSection from "@/components/FAQSection";
import TestimonialSection from "@/components/TestimonialSection";
import RepairComparison from "@/components/RepairComparison";

const iPad = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "iPad Screen Repair & Battery Replacement | Macon GA | MyTechMedics";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional iPad screen repair and battery replacement in Macon, GA. Fast, affordable service with no appointment needed. 30 minutes or less. Located on Eisenhower Parkway.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Professional iPad screen repair and battery replacement in Macon, GA. Fast, affordable service with no appointment needed. 30 minutes or less. Located on Eisenhower Parkway.";
      document.head.appendChild(meta);
    }
  }, []);

  const handleCall = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'phone_call',
      event_category: 'engagement',
      event_label: 'Phone Call Click - iPad Page',
      value: '478-259-6371'
    });
    window.location.href = "tel:478-259-6371";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <img src={logo} alt="iTech Medics logo" className="h-12 w-auto" />

            <nav className="hidden md:flex items-center gap-8">
              <a href="/macon" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="/macon/pricing-chart" className="text-foreground hover:text-primary transition-colors font-medium">
                Price List
              </a>
              <a href="/macon/business" className="text-foreground hover:text-primary transition-colors font-medium">
                Business
              </a>
              <a href="/macon/education" className="text-foreground hover:text-primary transition-colors font-medium">
                Education
              </a>
              <a href="/macon/about" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
              <Button onClick={handleCall} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Phone className="mr-2 h-4 w-4" />
                (478) 259-6371
              </Button>
            </nav>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <a href="/macon" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </a>
                  <a href="/macon/pricing-chart" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Price List
                  </a>
                  <a href="/macon/business" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Business
                  </a>
                  <a href="/macon/education" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Education
                  </a>
                  <a href="/macon/about" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                    About
                  </a>
                  <Button onClick={() => { handleCall(); setMobileMenuOpen(false); }} className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    (478) 259-6371
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">iPad Screen Repair & Battery Replacement in Macon, GA</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert iPad repair services including screen replacements, battery replacements, charging port repairs, and more. Fast, reliable service with no appointment needed - most repairs completed in 30 minutes or less.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={handleCall} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now for Quote
                </Button>
                <Button size="lg" variant="outline" asChild className="border-2">
                  <a href="/macon/pricing-chart">
                    View Pricing
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={ipadImage} alt="iPad screen repair and battery replacement service in Macon GA" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">iPad Repair Services in Macon, GA</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Screen Repair</h3>
              <p className="text-muted-foreground">
                Cracked or broken iPad screen? We replace screens for all iPad models quickly and affordably. High-quality parts with warranty included.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Battery Replacement</h3>
              <p className="text-muted-foreground">
                Is your iPad battery draining fast or not holding a charge? We replace iPad batteries with premium quality parts.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Charging Port Repair</h3>
              <p className="text-muted-foreground">
                iPad not charging properly? We fix charging port issues, replace damaged ports, and ensure reliable charging.
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
            answer: "Most iPad screen repairs are completed within 1-2 hours depending on the model. iPad Air and iPad Mini repairs are typically faster. We offer same-day service at our Macon location on Eisenhower Parkway."
          },
          {
            question: "How much does iPad screen repair cost?",
            answer: "iPad screen repair costs vary by model and generation. Prices typically range from $99 to $399. Call (478) 259-6371 for an exact quote based on your specific iPad model."
          },
          {
            question: "Do you repair all iPad models?",
            answer: "Yes! We repair all iPad models including iPad Pro, iPad Air, iPad Mini, and standard iPad generations. From the newest models to older iPads, we have the parts and expertise for quality repairs."
          },
          {
            question: "Is iPad glass replacement different from screen replacement?",
            answer: "Yes, some iPads have the glass digitizer separate from the LCD. We can replace just the glass if the LCD is intact, which may be more affordable. We'll diagnose your iPad and recommend the best repair option."
          },
          {
            question: "Can you fix my iPad that won't charge?",
            answer: "Absolutely! iPad charging issues are common and we can repair or replace charging ports. We also fix related issues like damaged lightning connectors and charging circuit problems."
          },
          {
            question: "Do you offer iPad battery replacement in Macon?",
            answer: "Yes, we replace iPad batteries for all models. If your iPad battery drains quickly, won't hold a charge, or causes the device to shut down unexpectedly, we can install a new battery."
          },
          {
            question: "How do I know if my iPad needs screen replacement?",
            answer: "Signs you need iPad screen repair include: cracked or shattered glass, display not responding to touch, black spots or lines on screen, or LCD damage. Bring it to our Macon shop for free diagnosis."
          },
          {
            question: "Is there a warranty on iPad repairs?",
            answer: "Yes, all our iPad repairs are backed by a warranty. We use quality replacement parts and stand behind our workmanship to ensure your iPad repair lasts."
          }
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
            service: "iPad Screen Repair"
          },
          {
            name: "Jennifer L.",
            rating: 5,
            text: "My iPad wasn't charging and I thought I'd need a new one. They fixed the charging port quickly and saved me hundreds of dollars!",
            date: "2024-03-12",
            service: "iPad Charging Port Repair"
          },
          {
            name: "David K.",
            rating: 5,
            text: "Fast, professional iPad repair. They explained everything clearly and had my iPad Air fixed in about an hour. Highly recommend!",
            date: "2024-03-08",
            service: "iPad Air Screen Replacement"
          }
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
            <Button size="lg" onClick={handleCall} className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
              <Phone className="mr-2 h-5 w-5" />
              Call (478) 259-6371
            </Button>
            <Button size="lg" variant="outline" className="border-2 text-lg px-8" onClick={() => window.open("https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206", "_blank")}>
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2024 MyTechMedics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default iPad;
