import { Button } from "@/components/ui/button";
import { MapPin, Phone, Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import iphoneImage from "@/assets/iphone-repair.jpg";
import macbookImage from "@/assets/macbook-repair.jpg";
import ipadImage from "@/assets/ipad-repair.jpg";
import logo from "@/assets/logo.png";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <img src={logo} alt="Tech Medics logo" className="h-12 w-auto" />

            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="/macon" className="text-foreground hover:text-primary transition-colors font-medium">
                Macon
              </a>
              <a
                href="/macon/pricing-chart"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Price List
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                  Services
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border-border z-50">
                  <DropdownMenuItem asChild>
                    <a href="/macon/business" className="cursor-pointer">Business</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/macon/education" className="cursor-pointer">Education</a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <a href="/macon/vineville" className="cursor-pointer">Vineville</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/macon/ingleside" className="cursor-pointer">Ingleside</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/macon/north-macon" className="cursor-pointer">North Macon</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/macon/downtown" className="cursor-pointer">Downtown</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/macon/east-macon" className="cursor-pointer">East Macon</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/macon/south-macon" className="cursor-pointer">South Macon</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/macon/rutland" className="cursor-pointer">Rutland</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="/macon/diy-repair" className="text-foreground hover:text-primary transition-colors font-medium">
                DIY Repair
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
                  <a
                    href="/"
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="/macon"
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Macon
                  </a>
                  <a
                    href="/macon/pricing-chart"
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Price List
                  </a>
                  <div className="border-t border-border pt-2">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Services</p>
                    <a
                      href="/macon/business"
                      className="text-foreground hover:text-primary transition-colors font-medium text-lg block mb-3"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Business
                    </a>
                    <a
                      href="/macon/education"
                      className="text-foreground hover:text-primary transition-colors font-medium text-lg block mb-3"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Education
                    </a>
                    <p className="text-sm font-semibold text-muted-foreground mb-2 mt-4">Neighborhoods</p>
                    <a
                      href="/macon/vineville"
                      className="text-foreground hover:text-primary transition-colors font-medium block mb-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Vineville
                    </a>
                    <a
                      href="/macon/ingleside"
                      className="text-foreground hover:text-primary transition-colors font-medium block mb-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Ingleside
                    </a>
                    <a
                      href="/macon/north-macon"
                      className="text-foreground hover:text-primary transition-colors font-medium block mb-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      North Macon
                    </a>
                    <a
                      href="/macon/downtown"
                      className="text-foreground hover:text-primary transition-colors font-medium block mb-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Downtown
                    </a>
                    <a
                      href="/macon/east-macon"
                      className="text-foreground hover:text-primary transition-colors font-medium block mb-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      East Macon
                    </a>
                    <a
                      href="/macon/south-macon"
                      className="text-foreground hover:text-primary transition-colors font-medium block mb-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      South Macon
                    </a>
                    <a
                      href="/macon/rutland"
                      className="text-foreground hover:text-primary transition-colors font-medium block mb-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Rutland
                    </a>
                  </div>
                  <a
                    href="/macon/diy-repair"
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    DIY Repair
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
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Apple Accessories &amp; More</h1>
            <p className="text-xl text-muted-foreground mb-8">
              CONVENIENTLY LOCATED ON EISENHOWER. 30 MINUTES OR LESS. NO APPOINTMENT NEEDED
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                <a href="tel:(478)259-6371">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
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
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
            WE CARRY SCREEN PROTECTORS  CASES SPEAKERS CHARGERS 
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            WE CARRY SCREEN PROTECTORS  CASES SPEAKERS CHARGERS 
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard title="iPhone" image={iphoneImage} link="/macon/iphone" />
            <ServiceCard title="MacBook" image={macbookImage} link="/macon/macbook" />
            <ServiceCard title="iPad" image={ipadImage} link="/macon/ipad" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Visit Us Today</h2>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>

                  <p className="text-muted-foreground">
                    3742 Eisenhower Parkway
                    <br />
                    Macon, GA 31206
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Hours</h3>
                  <p className="text-muted-foreground">
                    Mon-Fri: 10am - 6pm
                    <br />
                    Sat: 10am - 5pm
                    <br />
                    Sun: Closed
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">(478) 259-6371</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="tel:(478)259-6371">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2">
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

            <div className="bg-muted rounded-lg overflow-hidden h-96 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.8373937877726!2d-83.68656332397183!3d32.78909817359875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5d0d4e3c8c8c3%3A0x5e3c3c3c3c3c3c3c!2s3742%20Eisenhower%20Pkwy%2C%20Macon%2C%20GA%2031206!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tech Medics location - 3742 Eisenhower Parkway, Macon GA 31206"
              />
            </div>
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
export default Index;
