import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import NeighborhoodBusinessSchema from "@/components/NeighborhoodBusinessSchema";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ServiceCard from "@/components/ServiceCard";
import FAQSection from "@/components/FAQSection";
import TestimonialSection from "@/components/TestimonialSection";
import iphoneImage from "@/assets/iphone-repair.jpg";
import macbookImage from "@/assets/macbook-repair.jpg";
import ipadImage from "@/assets/ipad-repair.jpg";

const SouthMacon = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Macon", href: "/macon" },
    { label: "South Macon Repair", href: "/macon/south-macon" }
  ];

  const landmarks = [
    "Near Macon Mall",
    "Close to Zebulon Road",
    "Serving South Bibb County",
    "Near Pio Nono Avenue"
  ];

  const testimonials = [
    {
      name: "Michael S.",
      rating: 5,
      text: "Best repair shop in South Macon! Fixed my iPhone screen perfectly.",
      date: "2024-01-20",
      service: "iPhone Screen Repair"
    },
    {
      name: "Amanda W.",
      rating: 5,
      text: "Close to Macon Mall and super fast service. Will definitely be back!",
      date: "2024-01-18",
      service: "iPad Repair"
    },
    {
      name: "David P.",
      rating: 5,
      text: "Great prices and excellent customer service in South Macon.",
      date: "2024-01-12",
      service: "MacBook Battery"
    }
  ];

  const faqs = [
    {
      question: "Do you serve South Macon and the Macon Mall area?",
      answer: "Yes! We're conveniently located with easy access from South Macon and the Macon Mall area. We provide fast iPhone, iPad, and MacBook repair services to all South Macon residents. Most repairs completed in 30 minutes or less."
    },
    {
      question: "Where can I find iPhone repair near me in South Macon GA?",
      answer: "Tech Medics Macon is located at 3742 Eisenhower Parkway, easily accessible from Zebulon Road and Pio Nono Avenue. We serve all South Macon neighborhoods. Call (478) 259-6371 for directions."
    },
    {
      question: "What types of repairs do you do in South Macon?",
      answer: "We repair all Apple devices including iPhone screen replacement, battery replacement, charging port repair, iPad screen and battery service, and MacBook repairs. Most repairs are completed same-day."
    },
    {
      question: "How much does iPhone screen repair cost in South Macon?",
      answer: "iPhone screen repair starts at $89 for older models and varies by model. iPhone 15/16 series screens range from $199-349. We offer competitive pricing - often 30-40% less than Apple Store. Call for exact pricing on your model."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>iPhone, iPad & MacBook Repair South Macon GA | Near Macon Mall</title>
        <meta name="description" content="Expert iPhone, iPad & MacBook repair in South Macon near Macon Mall. Same-day service on Zebulon Road and Pio Nono. Lifetime warranty. Call (478) 259-6371." />
        <meta name="keywords" content="iPhone repair south macon, macon mall phone repair, iPad repair zebulon road, MacBook repair pio nono, apple repair south macon ga" />
        <link rel="canonical" href="https://techmedicsmacon.com/macon/south-macon" />
        <meta property="og:title" content="iPhone iPad MacBook Repair South Macon GA | Near Macon Mall" />
        <meta property="og:description" content="Expert Apple repair in South Macon near Macon Mall. Fast service." />
        <meta property="og:url" content="https://techmedicsmacon.com/macon/south-macon" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <NeighborhoodBusinessSchema 
        neighborhoodName="South Macon"
        pageDescription="Professional iPhone, iPad, and MacBook repair serving South Macon, Macon Mall, Zebulon Road, South Bibb County, and Pio Nono Avenue areas"
        landmarks={landmarks}
        areaServed={["South Macon", "Macon Mall", "Zebulon Road", "South Bibb County", "Pio Nono Avenue"]}
      />
      <BreadcrumbNav items={breadcrumbItems} />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                South Macon iPhone, iPad & MacBook Repair Near Me
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                SERVING SOUTH MACON, MACON MALL & PIO NONO AREA
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Located at 3742 Eisenhower Parkway - Quick access from Zebulon Road
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

        {/* Serving South Macon Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Proudly Serving the South Macon Community
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
                    Fast South Macon Repairs
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
                      <span>Lifetime warranty on parts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Quality guaranteed</span>
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
              South Macon Device Repair Services
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Expert repair for all Apple devices in South Macon
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard title="iPhone Repair" image={iphoneImage} link="/macon/iphone" />
              <ServiceCard title="MacBook Repair" image={macbookImage} link="/macon/macbook" />
              <ServiceCard title="iPad Repair" image={ipadImage} link="/macon/ipad" />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialSection testimonials={testimonials} />

        {/* FAQ Section */}
        <FAQSection faqs={faqs} deviceType="Apple Device" />

        {/* CTA Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Visit Us Today from South Macon
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Convenient location from Macon Mall and all South Macon areas
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
              © 2026 Tech Medics Macon. All rights reserved. |{" "}
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

export default SouthMacon;
