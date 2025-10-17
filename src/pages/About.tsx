import { Button } from "@/components/ui/button";
import { Phone, Menu, Facebook, Instagram, Twitter, MapPin, Clock, Award, Users, Shield, Wrench, Star, CheckCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { Card, CardContent } from "@/components/ui/card";
const About = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    // SEO Meta Tags for Macon, GA iPhone Screen Repair
    document.title = "About Tech Medics - Macon GA iPhone Screen Repair Experts | 10+ Years Experience";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Tech Medics offers expert iPhone screen repair in Macon, GA with 10+ years experience. Same-day iPad, MacBook & Apple device repair. 30-day warranty. Call (478) 259-6371');
    }

    // Add structured data for local business
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Tech Medics",
      "description": "Expert iPhone screen repair and Apple device repair in Macon, GA",
      "url": "https://www.mytechmedics.com/about",
      "telephone": "+14782596371",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Macon",
        "addressRegion": "GA",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "32.8407",
        "longitude": "-83.6324"
      },
      "priceRange": "$$",
      "image": "https://www.mytechmedics.com/logo.png",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "250"
      }
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const handleCall = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'phone_call',
      event_category: 'engagement',
      event_label: 'Phone Call Click - About Page',
      value: '478-259-6371'
    });
    window.location.href = "tel:478-259-6371";
  };
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <img src={logo} alt="iTech Medics logo" className="h-12 w-auto" />

            <nav className="hidden md:flex items-center gap-8">
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
                  <Button onClick={() => {
                  handleCall();
                  setMobileMenuOpen(false);
                }} className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">About Tech Medics</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Macon's Premier iPhone Screen Repair & Apple Device Specialists
            </p>
            <p className="text-lg text-muted-foreground">
              We're new to the area, not repairs
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1000+</div>
                <p className="text-sm text-muted-foreground">Devices Repaired</p>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <a href="https://www.google.com/search?client=safari&rls=en&q=tech+medics&ie=UTF-8&oe=UTF-8#" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5.0★</div>
                  <p className="text-sm text-muted-foreground">Google Rating</p>
                </a>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">30</div>
                <p className="text-sm text-muted-foreground">Day Warranty</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                With over a decade of experience in Apple repairs, Tech Medics brings expert iPhone screen repair services to Macon, GA. Our journey started with a simple mission: to provide the fastest, most reliable Apple device repairs in Middle Georgia.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                We pride ourselves on delivering exceptional service that exceeds our customers' expectations. Our skilled technicians are proficient in diagnosing and fixing a wide range of issues, from iPhone screen replacements to iPad battery enhancements, ensuring that your device functions like new again.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                We understand the importance of your time and device, which is why we offer same-day service for most repairs without compromising quality. Our commitment to amazing customer service means that we go the extra mile to provide clear communication, personalized solutions, and support every step of the way.
              </p>
            </div>
            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Why Choose Tech Medics?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Certified Experts</h4>
                        <p className="text-sm text-muted-foreground">Certified technicians with 10+ years experience</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Same-Day Service</h4>
                        <p className="text-sm text-muted-foreground">Most iPhone screen repairs done in 30-60 minutes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">30-Day Warranty</h4>
                        <p className="text-sm text-muted-foreground">Full warranty on all parts and labor</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Free Diagnostics</h4>
                        <p className="text-sm text-muted-foreground">Complimentary device inspection and quote</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Price Match Guarantee</h4>
                        <p className="text-sm text-muted-foreground">Best prices in Macon, GA guaranteed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Guarantee */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Our Service Guarantee</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">30-Day Warranty</h3>
                <p className="text-muted-foreground">
                  All iPhone screen repairs and Apple device services come with our comprehensive 30-day parts and labor warranty
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Same-Day Repairs</h3>
                <p className="text-muted-foreground">
                  Most iPhone screen repairs completed within 30-60 minutes. Walk in or schedule your appointment today
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Price Match</h3>
                <p className="text-muted-foreground">
                  Find a lower price in Macon? We'll match it. Quality iPhone screen repair at the best prices guaranteed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">What Our Macon Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
                </div>
                <p className="text-foreground mb-4 italic">
                  "Cracked my iPhone screen at work. Tech Medics had it fixed in under an hour! Best iPhone screen repair in Macon, hands down."
                </p>
                <p className="font-semibold text-foreground">Sarah M.</p>
                <p className="text-sm text-muted-foreground">Macon, GA</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
                </div>
                <p className="text-foreground mb-4 italic">
                  "My MacBook wouldn't turn on. The techs diagnosed and fixed it same day. Professional and affordable Apple repair service."
                </p>
                <p className="font-semibold text-foreground">James T.</p>
                <p className="text-sm text-muted-foreground">Macon, GA</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
                </div>
                <p className="text-foreground mb-4 italic">
                  "My iPad screen was shattered. They replaced it while I waited and explained everything. Great service and fair pricing!"
                </p>
                <p className="font-semibold text-foreground">Emily R.</p>
                <p className="text-sm text-muted-foreground">Macon, GA</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <a href="https://www.google.com/search?client=safari&rls=en&q=tech+medics&ie=UTF-8&oe=UTF-8#" target="_blank" rel="noopener noreferrer">
                Read More Reviews on Google
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Connection */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Proud to Serve Macon, GA</h2>
          <p className="text-lg text-foreground leading-relaxed mb-8">
            As a locally-focused business, we're committed to providing Macon and Middle Georgia with the best iPhone screen repair and Apple device services. We understand the needs of our community and are proud to be your trusted local tech repair experts. From Mercer University students to downtown businesses, we're here to keep Macon connected.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <Card>
              <CardContent className="p-6">
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">Serving Macon</h3>
                <p className="text-muted-foreground">
                  Conveniently located to serve all of Macon, Bibb County, and surrounding Middle Georgia communities
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">Community Partners</h3>
                <p className="text-muted-foreground">
                  Supporting local businesses, schools, and organizations with reliable Apple device repair and bulk service discounts
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Get iPhone Screen Repair in Macon Today</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Call or Text</p>
                      <a href="tel:478-259-6371" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                        (478) 259-6371
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-lg font-semibold text-foreground">Macon, GA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wrench className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:Support@MyTechMedics.com" className="text-lg font-semibold text-foreground hover:text-primary transition-colors break-all">
                        Support@MyTechMedics.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button size="lg" onClick={handleCall} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Phone className="mr-2 h-5 w-5" />
                    Call for iPhone Screen Repair
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="font-medium text-foreground">Monday - Friday</span>
                    <span className="text-muted-foreground">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="font-medium text-foreground">Saturday</span>
                    <span className="text-muted-foreground">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-foreground">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-foreground font-semibold mb-2">Walk-ins Welcome!</p>
                  <p className="text-sm text-muted-foreground">
                    Most iPhone screen repairs completed in 30-60 minutes. No appointment necessary, but scheduling ahead ensures fastest service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Connect With Us</h3>
            <div className="flex justify-center gap-6 mb-6">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="Follow us on Facebook">
                <Facebook className="h-10 w-10" />
              </a>
              <a href="https://www.instagram.com/mytechmedics" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="Follow us on Instagram">
                <Instagram className="h-10 w-10" />
              </a>
              <a href="https://x.com/mytechmedics?s=21&t=1ID_Z1VyN_NdLngw5IqI-Q" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="Follow us on Twitter">
                <Twitter className="h-10 w-10" />
              </a>
            </div>
            <p className="text-muted-foreground">
              Follow us for iPhone repair tips, special offers, and tech news in Macon, GA
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="mb-2 font-medium text-foreground">
            Tech Medics - Expert iPhone Screen Repair in Macon, GA
          </p>
          <p className="mb-4 text-sm">
            Specializing in iPhone, iPad, and MacBook repair with 10+ years experience. Serving Macon, Bibb County, and Middle Georgia.
          </p>
          <p className="text-sm">© 2025 Tech Medics. All rights reserved.</p>
        </div>
      </footer>
    </div>;
};
export default About;