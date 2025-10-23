import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, CheckCircle2, Clock } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ServiceCard from "@/components/ServiceCard";
import FAQSection from "@/components/FAQSection";
import TestimonialSection from "@/components/TestimonialSection";
import iphoneImage from "@/assets/iphone-repair.jpg";
import macbookImage from "@/assets/macbook-repair.jpg";
import ipadImage from "@/assets/ipad-repair.jpg";

const EastMacon = () => {
  useEffect(() => {
    document.title = "iPhone, iPad & MacBook Repair East Macon GA | NEAR SHOPPES AT RIVER CROSSING | MyTechMedics | Fast Service in East Macon | (478) 259-6371";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "BEST iPhone, iPad & MacBook repair in East Macon GA near Shoppes at River Crossing. Serving East Macon neighborhoods. 30 minutes or less. Call (478) 259-6371");
    }
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Macon", href: "/macon" },
    { label: "East Macon Repair", href: "/macon/east-macon" }
  ];

  const landmarks = [
    "Near Shoppes at River Crossing",
    "Close to Riverside Drive",
    "Serving Bloomfield area",
    "Near Gray Highway corridor"
  ];

  const testimonials = [
    {
      name: "Jennifer M.",
      rating: 5,
      text: "Fast service in East Macon! Got my iPhone screen fixed in 25 minutes.",
      date: "2024-01-15",
      service: "iPhone Screen Repair"
    },
    {
      name: "Robert T.",
      rating: 5,
      text: "Convenient location near River Crossing. Great prices and friendly service.",
      date: "2024-01-10",
      service: "iPad Battery Replacement"
    },
    {
      name: "Lisa K.",
      rating: 5,
      text: "They fixed my MacBook same day! Highly recommend to East Macon residents.",
      date: "2024-01-05",
      service: "MacBook Repair"
    }
  ];

  const faqs = [
    {
      question: "Do you serve East Macon and Shoppes at River Crossing area?",
      answer: "Yes! We're conveniently located with easy access from East Macon and the Shoppes at River Crossing. We provide fast iPhone, iPad, and MacBook repair services to all East Macon residents. Most repairs completed in 30 minutes or less."
    },
    {
      question: "Where can I find iPhone repair near me in East Macon GA?",
      answer: "MyTechMedics is located at 3742 Eisenhower Parkway, easily accessible from Riverside Drive and Gray Highway. We serve all East Macon neighborhoods. Call (478) 259-6371 for directions."
    },
    {
      question: "How long does iPhone repair take in East Macon?",
      answer: "Most iPhone repairs are completed in 30 minutes or less. Screen replacements, battery replacements, and charging port repairs are typically same-day service. We serve East Macon with fast, reliable repairs."
    }
  ];

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://mytechmedics.com/macon/east-macon" />
        <meta property="og:title" content="iPhone iPad MacBook Repair East Macon GA | Near River Crossing" />
        <meta property="og:description" content="Expert Apple repair in East Macon near Shoppes at River Crossing. Fast service." />
        <meta property="og:url" content="https://mytechmedics.com/macon/east-macon" />
      </Helmet>
      <LocalBusinessSchema 
        pageName="East Macon iPhone iPad MacBook Repair"
        pageDescription="Professional Apple device repair serving East Macon neighborhoods near Shoppes at River Crossing"
        serviceType="iPhone, iPad & MacBook Repair"
      />
      <BreadcrumbNav items={breadcrumbItems} />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                East Macon iPhone, iPad & MacBook Repair Near Me
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                SERVING EAST MACON, RIVER CROSSING & BLOOMFIELD
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Located at 3742 Eisenhower Parkway - Easy access from Riverside Drive
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

        {/* Serving East Macon Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Proudly Serving the East Macon Community
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
                    Fast East Macon Repairs
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
                      <span>Convenient to shopping and dining</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Free diagnostics</span>
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
              East Macon Device Repair Services
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Expert repair for all Apple devices in East Macon
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
              Visit Us Today from East Macon
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Easily accessible from River Crossing and all East Macon areas
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

export default EastMacon;
