import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Menu, CheckCircle2, Clock } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ServiceCard from "@/components/ServiceCard";
import FAQSection from "@/components/FAQSection";
import TestimonialSection from "@/components/TestimonialSection";
import iphoneImage from "@/assets/iphone-repair.jpg";
import macbookImage from "@/assets/macbook-repair.jpg";
import ipadImage from "@/assets/ipad-repair.jpg";
import logo from "@/assets/logo.png";

const Ingleside = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "iPhone, iPad & MacBook Repair Ingleside Macon GA | NEAR WESLEYAN COLLEGE | MyTechMedics | Fast Service in Ingleside Village | (478) 259-6371";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "BEST iPhone, iPad & MacBook repair in Ingleside, Macon GA near Wesleyan College. Serving Ingleside Village neighborhoods. 30 minutes or less. Call (478) 259-6371");
    }
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Macon", href: "/macon" },
    { label: "Ingleside Repair", href: "/macon/ingleside" }
  ];

  const landmarks = [
    "Near Wesleyan College",
    "Close to Ingleside Village",
    "Serving Rivoli Drive area",
    "Near Ingleside Avenue"
  ];

  const localFAQs = [
    {
      question: "Do you serve Ingleside and the Wesleyan College area?",
      answer: "Yes! We're conveniently located just minutes from Ingleside and Wesleyan College. We provide fast iPhone, iPad, and MacBook repair services to all Ingleside residents and students. Most repairs completed in 30 minutes or less."
    },
    {
      question: "Where can I find iPhone repair near me in Ingleside Macon GA?",
      answer: "MyTechMedics is located at 3742 Eisenhower Parkway, just a short drive from Ingleside Village. We serve all Ingleside neighborhoods. Call (478) 259-6371 for directions."
    }
  ];

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://mytechmedics.com/macon/ingleside" />
        <meta property="og:title" content="iPhone iPad MacBook Repair Ingleside Macon GA | Near Wesleyan" />
        <meta property="og:description" content="Expert Apple repair in Ingleside near Wesleyan College. Fast service for Ingleside Village." />
        <meta property="og:url" content="https://mytechmedics.com/macon/ingleside" />
      </Helmet>
      <LocalBusinessSchema 
        pageName="Ingleside iPhone iPad MacBook Repair"
        pageDescription="Professional Apple device repair serving Ingleside neighborhoods near Wesleyan College"
        serviceType="iPhone, iPad & MacBook Repair"
      />
      <BreadcrumbNav items={breadcrumbItems} />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-background sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <img src={logo} alt="MyTechMedics Ingleside Macon repair logo" className="h-12 w-auto" />
              <nav className="hidden md:flex items-center gap-8">
                <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
                <a href="/macon" className="text-foreground hover:text-primary transition-colors font-medium">Macon</a>
                <a href="/macon/pricing-chart" className="text-foreground hover:text-primary transition-colors font-medium">Price List</a>
                <a href="/macon/diy-repair" className="text-foreground hover:text-primary transition-colors font-medium">DIY Repair</a>
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
                <SheetContent side="right" className="w-[300px] bg-background">
                  <nav className="flex flex-col gap-6 mt-8">
                    <a href="/" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>Home</a>
                    <a href="/macon" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>Macon</a>
                    <a href="/macon/pricing-chart" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>Price List</a>
                    <a href="/macon/diy-repair" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>DIY Repair</a>
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Ingleside iPhone, iPad & MacBook Repair Near Me
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                SERVING INGLESIDE, WESLEYAN COLLEGE & INGLESIDE VILLAGE
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Located at 3742 Eisenhower Parkway - Quick access from Ingleside Avenue
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

        {/* Serving Ingleside Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Proudly Serving the Ingleside Community
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    Local Landmarks We Serve
                  </h3>
                  <ul className="space-y-2">
                    {landmarks.map((landmark, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{landmark}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-primary" />
                    Fast Ingleside Repairs
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>30 minutes or less for most repairs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>No appointment needed</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Student discounts for Wesleyan students</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Convenient location from Ingleside Village</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              Ingleside Device Repair Services
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Expert repair for all Apple devices in the Ingleside area
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard title="iPhone Repair" image={iphoneImage} link="/macon/iphone" />
              <ServiceCard title="MacBook Repair" image={macbookImage} link="/macon/macbook" />
              <ServiceCard title="iPad Repair" image={ipadImage} link="/macon/ipad" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={localFAQs} deviceType="Apple Device" />

        {/* CTA Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Visit Us Today from Ingleside
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Quick access from Wesleyan College and all Ingleside neighborhoods
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
            <p>
              © 2024 MyTechMedics. All rights reserved. |{" "}
              <Link to="/macon/about" className="hover:text-primary transition-colors">About</Link>
              {" | "}
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Ingleside;
