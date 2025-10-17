import { Button } from "@/components/ui/button";
import { MapPin, Phone, Menu, ArrowLeft } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import macbookImage from "@/assets/macbook-repair.jpg";

const MacBook = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "MacBook Screen Repair & Battery Replacement | Macon GA | MyTechMedics";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MacBook screen repair and battery replacement in Macon, GA. Fast, affordable service with no appointment needed. Expert repairs for all MacBook models. Located on Eisenhower Parkway.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Professional MacBook screen repair and battery replacement in Macon, GA. Fast, affordable service with no appointment needed. Expert repairs for all MacBook models. Located on Eisenhower Parkway.";
      document.head.appendChild(meta);
    }
  }, []);

  const handleCall = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'phone_call',
      event_category: 'engagement',
      event_label: 'Phone Call Click - MacBook Page',
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
              <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="/pricing" className="text-foreground hover:text-primary transition-colors font-medium">
                Quote
              </a>
              <a href="/pricing-chart" className="text-foreground hover:text-primary transition-colors font-medium">
                Price List
              </a>
              <a href="/business" className="text-foreground hover:text-primary transition-colors font-medium">
                Business
              </a>
              <a href="/education" className="text-foreground hover:text-primary transition-colors font-medium">
                Education
              </a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
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
                  <a href="/" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </a>
                  <a href="/pricing" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Quote
                  </a>
                  <a href="/pricing-chart" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Price List
                  </a>
                  <a href="/business" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Business
                  </a>
                  <a href="/education" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Education
                  </a>
                  <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">MacBook Screen Repair & Battery Replacement in Macon, GA</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert MacBook repair services including screen replacements, battery replacements, keyboard repairs, and more. Professional service for all MacBook models including MacBook Air, MacBook Pro, and MacBook Retina.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={handleCall} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now for Quote
                </Button>
                <Button size="lg" variant="outline" asChild className="border-2">
                  <a href="/pricing">
                    View Pricing
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={macbookImage} alt="MacBook screen repair and battery replacement service in Macon GA" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">MacBook Repair Services in Macon, GA</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Screen Repair</h3>
              <p className="text-muted-foreground">
                Cracked or damaged MacBook screen? We replace screens for all MacBook models including Retina displays. High-quality LCD panels with warranty.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Battery Replacement</h3>
              <p className="text-muted-foreground">
                MacBook battery not holding a charge? We replace MacBook batteries to restore your laptop's performance and portability.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Keyboard Repair</h3>
              <p className="text-muted-foreground">
                Sticky or broken keys? We repair and replace MacBook keyboards including butterfly and scissor-switch mechanisms.
              </p>
            </article>

            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Trackpad Repair</h3>
              <p className="text-muted-foreground">
                Trackpad not responding or clicking? We repair and replace MacBook trackpads to restore full functionality.
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
            <h3 className="text-2xl font-bold mb-4 text-foreground">Why Choose MyTechMedics for MacBook Repair?</h3>
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Fix Your MacBook?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Visit us at 3742 Eisenhower Parkway, Macon, GA 31206 or call for a free quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleCall} className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
              <Phone className="mr-2 h-5 w-5" />
              Call (478) 259-6371
            </Button>
            <Button size="lg" variant="outline" className="border-2 text-lg px-8" onClick={() => window.open("https://maps.google.com", "_blank")}>
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

export default MacBook;
