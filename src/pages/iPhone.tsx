import { Button } from "@/components/ui/button";
import { MapPin, Phone, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import iphoneImage from "@/assets/iphone-repair.jpg";
import FAQSection from "@/components/FAQSection";
import TestimonialSection from "@/components/TestimonialSection";
import RepairComparison from "@/components/RepairComparison";

const iPhone = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "iPhone Screen Repair & Battery Replacement | Macon GA | MyTechMedics";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional iPhone screen repair and battery replacement in Macon, GA. Fast, affordable service with no appointment needed. 30 minutes or less. Located on Eisenhower Parkway.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Professional iPhone screen repair and battery replacement in Macon, GA. Fast, affordable service with no appointment needed. 30 minutes or less. Located on Eisenhower Parkway.";
      document.head.appendChild(meta);
    }
  }, []);



  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <img src={logo} alt="iTech Medics logo" className="h-12 w-auto" />

            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="/macon" className="text-foreground hover:text-primary transition-colors font-medium">
                Macon
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
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="tel:(478)259-6371">
                  <Phone className="mr-2 h-4 w-4" />
                  (478) 259-6371
                </a>
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
                  <a href="/" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </a>
                  <a href="/macon" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Macon
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
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                    <a href="tel:(478)259-6371">
                      <Phone className="mr-2 h-4 w-4" />
                      (478) 259-6371
                    </a>
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">iPhone Screen Repair & Battery Replacement in Macon, GA</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert iPhone repair services including screen replacements, battery replacements, charging port repairs, and more. Fast, reliable service with no appointment needed - most repairs completed in 30 minutes or less.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="tel:(478)259-6371">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now for Quote
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-2">
                  <a href="/macon/pricing-chart">
                    View Pricing
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={iphoneImage} alt="iPhone screen repair and battery replacement service in Macon GA" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">iPhone Repair Services in Macon, GA</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Screen Repair</h3>
              <p className="text-muted-foreground">
                Cracked or broken iPhone screen? We replace screens for all iPhone models quickly and affordably. High-quality parts with warranty included.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Battery Replacement</h3>
              <p className="text-muted-foreground">
                Is your iPhone battery draining fast? We replace iPhone batteries with premium quality parts to restore your phone's performance.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Charging Port Repair</h3>
              <p className="text-muted-foreground">
                iPhone not charging properly? We fix charging port issues, replace damaged ports, and ensure reliable charging.
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
            <h3 className="text-2xl font-bold mb-4 text-foreground">Why Choose MyTechMedics for iPhone Repair?</h3>
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
            answer: "Most iPhone screen repairs are completed in 30 minutes or less. We offer same-day service with no appointment needed. Simply walk into our Eisenhower Parkway location and we'll get your iPhone fixed quickly."
          },
          {
            question: "How much does iPhone screen repair cost in Macon?",
            answer: "iPhone screen repair costs vary by model. Prices typically range from $79 to $329 depending on your iPhone model. Call us at (478) 259-6371 for an exact quote for your specific iPhone model."
          },
          {
            question: "Do you repair all iPhone models?",
            answer: "Yes! We repair all iPhone models including the latest iPhone 15, 14, 13, 12, 11, XS, XR, X, 8, 7, and older models. We stock parts for all major iPhone models for fast same-day repairs."
          },
          {
            question: "Is there a warranty on iPhone screen repairs?",
            answer: "Yes, all our iPhone screen repairs come with a warranty. We stand behind our work and use high-quality replacement parts to ensure your iPhone screen repair lasts."
          },
          {
            question: "Can you fix my iPhone battery that drains quickly?",
            answer: "Absolutely! iPhone battery replacement is one of our most popular services. If your iPhone battery drains fast or won't hold a charge, we can replace it with a new battery in about 30 minutes."
          },
          {
            question: "Do I need an appointment for iPhone repair in Macon?",
            answer: "No appointment necessary! We welcome walk-ins during our business hours Monday-Friday 10am-6pm and Saturday 10am-5pm. Just bring your iPhone to our Macon location at 3742 Eisenhower Parkway."
          },
          {
            question: "Can you recover data from a broken iPhone?",
            answer: "Yes, we offer data recovery services for iPhones with broken screens, water damage, or other issues. Our technicians can often retrieve your photos, contacts, and important data."
          },
          {
            question: "Do you fix water damaged iPhones?",
            answer: "Yes, we specialize in iPhone water damage repair. If you dropped your iPhone in water, bring it to us immediately. The sooner we can diagnose and repair water damage, the better chance of full recovery."
          }
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
            service: "iPhone Screen Repair"
          },
          {
            name: "James T.",
            rating: 5,
            text: "My iPhone battery was dying so fast. They replaced it while I waited and now it lasts all day again. Fast and professional!",
            date: "2024-03-10",
            service: "iPhone Battery Replacement"
          },
          {
            name: "Emily R.",
            rating: 5,
            text: "Dropped my iPhone in the pool. They saved all my photos and got it working again. Amazing service! Best repair shop in Macon.",
            date: "2024-03-05",
            service: "iPhone Water Damage Repair"
          }
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
              <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-5 w-5" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2024 MyTechMedics. All rights reserved. | <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></p>
        </div>
      </footer>
    </div>
  );
};

export default iPhone;
