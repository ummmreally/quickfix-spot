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

const Perry = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Macon", href: "/macon" },
    { label: "Perry Repair", href: "/macon/perry" }
  ];

  const landmarks = [
    "Serving Perry GA and Houston County",
    "Near Georgia National Fairgrounds & Agricenter",
    "Close to Perry Parkway shopping area",
    "Easy access via I-75 North to Macon"
  ];

  const localFAQs = [
    {
      question: "Where can I get my iPhone fixed near Perry GA?",
      answer: "Tech Medics Macon at 3742 Eisenhower Parkway is just 25 minutes from Perry via I-75 North. We're the closest expert iPhone, iPad, and MacBook repair shop for Perry and southern Houston County residents."
    },
    {
      question: "How much does iPhone screen repair cost near Perry GA?",
      answer: "iPhone screen repairs start at just $79 at Tech Medics Macon. We offer the most affordable Apple device repair near Perry. Battery replacements start at $59 and iPad repairs from $99. Call (478) 259-6371 for an exact quote."
    },
    {
      question: "Do you offer same-day repair for Perry GA customers?",
      answer: "Yes! Most iPhone repairs are completed in 30 minutes while you wait. Perry residents can drive up I-75, drop off their device, and have it fixed the same day. No appointment needed — walk-ins always welcome."
    },
    {
      question: "Can you fix iPads and MacBooks for Perry residents?",
      answer: "Absolutely! We repair all Apple devices including iPads (screen replacement, battery, charging port) and MacBooks (screen, keyboard, battery, logic board). We serve Perry, Warner Robins, and all of Houston County."
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
        <title>iPhone, iPad & MacBook Repair Near Perry GA | Tech Medics Macon</title>
        <meta name="description" content="Expert iPhone, iPad & MacBook repair near Perry GA. 25 min via I-75. Screen repair from $79, batteries from $59. Same-day service. Call (478) 259-6371." />
        <meta name="keywords" content="iPhone repair Perry GA, phone repair near Perry Georgia, iPad repair Perry, MacBook repair Houston County south, screen repair Perry GA" />
        <link rel="canonical" href="https://techmedicsmacon.com/macon/perry" />
        <meta property="og:title" content="iPhone iPad MacBook Repair Near Perry GA | Tech Medics" />
        <meta property="og:description" content="Expert Apple repair near Perry GA. Screen repair from $79. 25 min via I-75. Same-day service." />
        <meta property="og:url" content="https://techmedicsmacon.com/macon/perry" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <NeighborhoodBusinessSchema 
        neighborhoodName="Perry"
        pageDescription="Professional iPhone, iPad, and MacBook repair serving Perry and southern Houston County near Macon GA"
        landmarks={landmarks}
        areaServed={["Perry", "Houston County", "Cochran"]}
      />
      <BreadcrumbNav items={breadcrumbItems} />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                iPhone, iPad & MacBook Repair Near Perry, GA
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                SERVING PERRY & SOUTHERN HOUSTON COUNTY
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Located at 3742 Eisenhower Parkway, Macon – Just 25 minutes from Perry via I-75
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                  <a href="tel:(478)259-6371">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8">
                  <a href="https://www.google.com/maps/dir/Perry,+GA/3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-5 w-5" />
                    Get Directions from Perry
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Serving Perry Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Perry's Nearest Expert Apple Repair Shop
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    Serving Perry & Houston County
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
                    Why Perry Residents Choose Us
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
                      <span>Screen repair starting at $79</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Easy 25-minute drive via I-75 North</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-4xl mx-auto">
              <p className="text-muted-foreground">
                Searching for <strong>iPhone repair near Perry, GA</strong>? Tech Medics Macon is the top-rated Apple device repair shop for Perry and southern Houston County. We handle <strong>iPhone screen repair, iPad screen replacement, MacBook repair</strong>, battery replacements, charging port fixes, and water damage recovery. Just a quick 25-minute drive up I-75 from Perry to our shop at 3742 Eisenhower Parkway.
              </p>
              <p className="text-muted-foreground mt-4">
                Whether you're attending an event at the <strong>Georgia National Fairgrounds</strong> or live in Perry year-round, Tech Medics provides the fastest and most affordable Apple device repair in the area. Most repairs completed in 30 minutes while you wait.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              Repair Services for Perry Residents
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Expert repair for all Apple devices – serving Perry & Houston County
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
              Perry iPhone Repair – Just 25 Minutes Away
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Drive up from Perry and get your device fixed while you wait
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                <a href="tel:(478)259-6371">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (478) 259-6371
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8">
                <a href="https://www.google.com/maps/dir/Perry,+GA/3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
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

export default Perry;
