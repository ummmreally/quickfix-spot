import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Menu, CheckCircle2, Clock, Shield, Wrench } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Business = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCall = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "phone_call",
      event_category: "engagement",
      event_label: "Phone Call Click",
      value: "478-259-6371",
    });
    window.location.href = "tel:(478)259-6371";
  };

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Same-Day Repairs",
      description: "Minimize downtime with our rapid repair services. Most repairs completed within 30 minutes.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Quality Guaranteed",
      description: "All business repairs come with our comprehensive warranty and highest quality parts.",
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "On-Site Support",
      description: "We offer on-site device assessment and pickup services for Macon-area businesses.",
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
      title: "Volume Discounts",
      description: "Special pricing packages available for multiple devices and ongoing maintenance needs.",
    },
  ];

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
              <a href="/macon/business" className="text-primary font-medium">
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
                  <a
                    href="/macon/business"
                    className="text-primary font-medium text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Business
                  </a>
                  <a
                    href="/macon/education"
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Education
                  </a>
                  <a
                    href="/macon/about"
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Business Device Solutions</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Keep your business running smoothly with professional Apple device repair and support services in Macon,
              GA
            </p>
            <Button
              size="lg"
              onClick={handleCall}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get a Business Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Trusted by Macon Businesses</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              At Tech Medics, we understand that your business depends on technology. When devices fail, productivity
              stops. That's why we provide fast, reliable repair services specifically designed for businesses in the
              Macon area. From retail stores to professional offices, we keep your Apple devices running at peak
              performance.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              With over a decade of experience in Apple repairs, our certified technicians handle everything from
              iPhones and iPads to MacBooks and iMacs. We offer flexible service options including in-store repairs,
              on-site visits, and pickup/delivery services to fit your business schedule.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services Section */}
          <div className="bg-secondary/30 rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">
              What We Fix for Businesses
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Common Business Repairs</h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cracked screens on iPhones and iPads</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>MacBook battery replacement and upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Water damage recovery and data retrieval</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Device performance optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Charging port and speaker repairs</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Business Services</h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fleet device management and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Bulk repair discounts for multiple devices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Priority service for urgent business needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Scheduled maintenance programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Invoice billing for accounting departments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Partner with Tech Medics?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss custom solutions for your business. We'll create a repair and maintenance plan
              tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleCall}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (478) 259-6371
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 text-lg px-8">
                <a href="mailto:Support@MyTechMedics.com">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>
            © 2025. All rights reserved. |{" "}
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Business;
