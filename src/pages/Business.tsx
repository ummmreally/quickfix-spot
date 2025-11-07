import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CheckCircle2, Clock, Shield, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";

const Business = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Device Repair Services",
    "description": "Professional Apple device repair and support services for Macon businesses including same-day repairs, on-site support, and volume discounts",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Tech Medics Macon"
    },
    "areaServed": {
      "@type": "City",
      "name": "Macon",
      "containedIn": {
        "@type": "State",
        "name": "Georgia"
      }
    },
    "serviceType": "Business Device Repair"
  };

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
    <>
      <Helmet>
        <title>Business iPhone & MacBook Repair Macon GA | Tech Medics for Companies</title>
        <meta name="description" content="Professional business device repair in Macon GA. Same-day iPhone, iPad & MacBook service. Volume discounts, on-site support. Call (478) 259-6371." />
        <meta name="keywords" content="business phone repair macon, corporate device repair, bulk iPhone repair, business MacBook repair, enterprise IT support macon" />
        <link rel="canonical" href="https://mytechmedics.com/macon/business" />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />

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
    </>
  );
};

export default Business;
