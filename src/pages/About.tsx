import { Button } from "@/components/ui/button";
import { Phone, Menu, Facebook, Instagram, Twitter } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import logo from "@/assets/logo.png";

const About = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleCall = () => {
    // Track phone call conversion
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'phone_call',
      event_category: 'engagement',
      event_label: 'Phone Call Click',
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
              <a
                href="https://www.mytechmedics.com"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </a>
              <a href="/pricing" className="text-foreground hover:text-primary transition-colors font-medium">
                Quote
              </a>
              <a href="/pricing-chart" className="text-foreground hover:text-primary transition-colors font-medium">
                Price List
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
                  <a
                    href="https://www.mytechmedics.com"
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="/pricing"
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Quote
                  </a>
                  <a
                    href="/pricing-chart"
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Price List
                  </a>
                  <a
                    href="/about"
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </a>
                  <Button
                    onClick={() => {
                      handleCall();
                      setMobileMenuOpen(false);
                    }}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                  >
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
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">About Us</h1>
            <p className="text-xl text-muted-foreground mb-2">
              We're new to the area, not repairs
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              With over a decade of experience in Apple repairs, we pride ourselves on delivering exceptional service that exceeds our customers' expectations. Our skilled technicians are proficient in diagnosing and fixing a wide range of issues, from screen replacements to battery enhancements, ensuring that your device functions like new again.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              We understand the importance of your time and device, which is why we offer quick turnaround times without compromising quality. Our commitment to amazing customer service means that we go the extra mile to provide clear communication, personalized solutions, and support every step of the way. Trust us with your Apple repairs, and experience the difference that years of expertise and a customer-first approach can make.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Social Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Inquire Business with us</h2>
          
          <div className="mb-8">
            <Button
              size="lg"
              onClick={handleCall}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-8 py-6"
            >
              <Phone className="mr-2 h-6 w-6" />
              (478) 259-6371
            </Button>
          </div>

          <div className="mb-8">
            <p className="text-lg text-muted-foreground mb-4">Email us at:</p>
            <a 
              href="mailto:Support@MyTechMedics.com" 
              className="text-primary hover:text-primary/80 text-xl font-medium transition-colors"
            >
              Support@MyTechMedics.com
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-8 w-8" />
            </a>
            <a
              href="https://www.instagram.com/mytechmedics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-8 w-8" />
            </a>
            <a
              href="https://x.com/mytechmedics?s=21&t=1ID_Z1VyN_NdLngw5IqI-Q"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="mb-2">Tech Medics is a leading Apple device repair store, offering fast and reliable services with a focus on customer satisfaction.</p>
          <p>© 2025. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
