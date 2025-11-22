import { Button } from "@/components/ui/button";
import { MapPin, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import HoursDisplay from "@/components/HoursDisplay";
import CompactReviewDisplay from "@/components/CompactReviewDisplay";
const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Logo Header */}
      <header className="py-8 px-4">
        <div className="max-w-7xl mx-auto flex justify-center relative">
          <Link 
            to="/" 
            className="absolute left-0 top-0 p-2 hover:bg-secondary/50 rounded-full transition-colors"
            aria-label="Go to home page"
          >
            <Home className="h-6 w-6 text-primary" />
          </Link>
          <img 
            src={logo} 
            alt="Tech Medics Macon GA - Phone accessories and device repair services" 
            width="947"
            height="349"
            className="h-12 w-auto"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Phone Accessories &amp; More</h1>
            <p className="text-xl text-muted-foreground mb-8">
              CONVENIENTLY LOCATED ON EISENHOWER. WE CARRY MAJOR BRAND ACCESSORIES. COME IN TODAY!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                <a href="tel:(478)259-6371">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
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
        </div>
      </section>

      {/* Reviews Section */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto">
          <CompactReviewDisplay />
        </div>
      </section>


      {/* Accessories Section */}
      <section id="accessories" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Quality Accessories For All Your Devices
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We carry screen protectors, cases, speakers, chargers, and more from major brands. Visit our store to see our full selection.
          </p>
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
                  <HoursDisplay />
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
                  <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-5 w-5" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-muted rounded-lg overflow-hidden h-96 shadow-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.8373937877726!2d-83.68656332397183!3d32.78909817359875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5d0d4e3c8c8c3%3A0x5e3c3c3c3c3c3c3c!2s3742%20Eisenhower%20Pkwy%2C%20Macon%2C%20GA%2031206!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Tech Medics location - 3742 Eisenhower Parkway, Macon GA 31206" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Contact</h3>
              <p className="text-muted-foreground mb-2">3742 Eisenhower Parkway</p>
              <p className="text-muted-foreground mb-4">Macon, GA 31206</p>
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="tel:(478)259-6371">
                  <Phone className="mr-2 h-4 w-4" />
                  (478) 259-6371
                </a>
              </Button>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Hours</h3>
              <HoursDisplay />
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link to="/blog" className="block text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
                <a href="tel:(478)259-6371" className="block text-muted-foreground hover:text-primary transition-colors">
                  Call for Quote
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center text-muted-foreground border-t border-border pt-6">
            <p>© 2024 MyTechMedics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;