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
import iphoneImage from "@/assets/iphone-repair.jpg";
import macbookImage from "@/assets/macbook-repair.jpg";
import ipadImage from "@/assets/ipad-repair.jpg";

const Forsyth = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Macon", href: "/macon" },
    { label: "Forsyth Repair", href: "/macon/forsyth" }
  ];

  const landmarks = [
    "Serving Forsyth GA and Monroe County",
    "Near Forsyth town square and historic district",
    "Close to Tift College Drive area",
    "Easy access via I-75 South to Macon"
  ];

  const localFAQs = [
    {
      question: "How far is Tech Medics from Forsyth GA?",
      answer: "Tech Medics Macon is at 3742 Eisenhower Parkway in Macon, approximately 25 minutes from Forsyth via I-75 South. We're the closest professional Apple repair shop for Forsyth and Monroe County residents."
    },
    {
      question: "Do you repair iPhones and iPads for Forsyth GA residents?",
      answer: "Yes! We serve Forsyth, Juliette, and all of Monroe County with expert iPhone screen repair, battery replacement, iPad repair, and MacBook service. Most iPhone repairs are completed in 30 minutes. Call (478) 259-6371."
    },
    {
      question: "What Apple devices can you repair near Forsyth GA?",
      answer: "We repair all Apple devices: iPhones (screen, battery, charging port, water damage), iPads (screen replacement, battery, charging), and MacBooks (screen, keyboard, battery, logic board). Forsyth residents can visit us at 3742 Eisenhower Parkway in Macon."
    },
    {
      question: "Is same-day iPhone repair available for Forsyth customers?",
      answer: "Yes! Most iPhone screen repairs take just 30 minutes. Forsyth residents can drive down to Macon, get their device fixed while they wait, and be back home in under 2 hours total. No appointment necessary."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": localFAQs.map(faq => ({
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
        <title>iPhone, iPad & MacBook Repair Near Forsyth GA | Tech Medics Macon</title>
        <meta name="description" content="Expert iPhone, iPad & MacBook repair near Forsyth GA. 25 min via I-75. Screen repair from $79, same-day service. Serving Monroe County. Call (478) 259-6371." />
        <meta name="keywords" content="iPhone repair Forsyth GA, phone repair near Forsyth Georgia, iPad repair Monroe County, MacBook repair Forsyth, screen repair Forsyth GA" />
        <link rel="canonical" href="https://techmedicsmacon.com/macon/forsyth" />
        <meta property="og:title" content="iPhone iPad MacBook Repair Near Forsyth GA | Tech Medics" />
        <meta property="og:description" content="Expert Apple repair near Forsyth GA. 25 min drive. Screen repair from $79, same-day service." />
        <meta property="og:url" content="https://techmedicsmacon.com/macon/forsyth" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <NeighborhoodBusinessSchema 
        neighborhoodName="Forsyth"
        pageDescription="Professional iPhone, iPad, and MacBook repair serving Forsyth and Monroe County near Macon GA"
        landmarks={landmarks}
        areaServed={["Forsyth", "Juliette", "Monroe County"]}
      />
      <BreadcrumbNav items={breadcrumbItems} />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                iPhone, iPad & MacBook Repair Near Forsyth, GA
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                SERVING FORSYTH & MONROE COUNTY
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Located at 3742 Eisenhower Parkway, Macon – Just 25 minutes from Forsyth via I-75
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                  <a href="tel:(478)259-6371">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8">
                  <a href="https://www.google.com/maps/dir/Forsyth,+GA/3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-5 w-5" />
                    Get Directions from Forsyth
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Serving Forsyth Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Forsyth's Nearest Expert Apple Repair Shop
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    Serving Forsyth & Monroe County
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
                    Why Forsyth Residents Choose Us
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>30-minute iPhone screen repairs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Walk-ins welcome – no appointment needed</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Affordable prices with warranty included</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Easy 25-minute drive via I-75 South</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-4xl mx-auto">
              <p className="text-muted-foreground">
                Looking for <strong>iPhone repair near Forsyth, GA</strong>? Tech Medics Macon is the top-rated Apple device repair shop for Forsyth, Juliette, and Monroe County. We specialize in <strong>iPhone screen repair, iPad screen replacement, MacBook repair</strong>, battery replacements, charging port fixes, and water damage recovery. Just take I-75 South for about 25 minutes to our shop at 3742 Eisenhower Parkway in Macon.
              </p>
              <p className="text-muted-foreground mt-4">
                Forsyth residents trust Tech Medics for fast, affordable Apple device repair. No need to drive to Atlanta — get expert service right here in Central Georgia. Most repairs are completed in 30 minutes while you wait, and every repair includes our warranty.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              Repair Services for Forsyth Residents
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Expert repair for all Apple devices – serving Forsyth & Monroe County
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
              Forsyth iPhone Repair – Just 25 Minutes Away
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Drive down from Forsyth and get your device fixed while you wait
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                <a href="tel:(478)259-6371">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (478) 259-6371
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8">
                <a href="https://www.google.com/maps/dir/Forsyth,+GA/3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
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

export default Forsyth;
