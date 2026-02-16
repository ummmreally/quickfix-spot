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

const Byron = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Macon", href: "/macon" },
    { label: "Byron Repair", href: "/macon/byron" }
  ];

  const landmarks = [
    "Near Byron GA off I-75 Exit 149",
    "Serving Peach County residents",
    "Close to Georgia National Fairgrounds",
    "Minutes from Byron via I-75 North"
  ];

  const localFAQs = [
    {
      question: "How far is Tech Medics from Byron GA?",
      answer: "Tech Medics Macon is at 3742 Eisenhower Parkway in Macon, approximately 20 minutes from Byron via I-75 North. We're the nearest professional Apple repair shop for Byron and Peach County residents."
    },
    {
      question: "Do you repair iPhones for Byron GA residents?",
      answer: "Yes! We serve Byron, Fort Valley, and all of Peach County with expert iPhone screen repair, battery replacement, iPad repair, and MacBook service. Most iPhone repairs completed in 30 minutes. Call (478) 259-6371."
    },
    {
      question: "What is the cheapest iPhone screen repair near Byron GA?",
      answer: "Tech Medics Macon offers iPhone screen repairs starting at just $79 — significantly less than Apple Store or chain repair shops. We're just 20 minutes from Byron and use high-quality parts backed by our warranty."
    },
    {
      question: "Can you fix a MacBook near Byron Georgia?",
      answer: "Yes! We handle all MacBook repairs including screen replacement, keyboard repair, battery service, and logic board diagnostics. MacBook repairs start at $299. Byron residents can visit us at 3742 Eisenhower Parkway in Macon."
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
        <title>iPhone, iPad & MacBook Repair Near Byron GA | Tech Medics Macon</title>
        <meta name="description" content="Expert iPhone, iPad & MacBook repair near Byron GA. 20 min from Peach County via I-75. Screen repair from $79. Same-day service. Call (478) 259-6371." />
        <meta name="keywords" content="iPhone repair Byron GA, phone repair near Byron Georgia, iPad repair Peach County, MacBook repair Byron, screen repair near Byron GA" />
        <link rel="canonical" href="https://techmedicsmacon.com/macon/byron" />
        <meta property="og:title" content="iPhone iPad MacBook Repair Near Byron GA | Tech Medics" />
        <meta property="og:description" content="Expert Apple repair near Byron GA. 20 min drive. Screen repair from $79, same-day service." />
        <meta property="og:url" content="https://techmedicsmacon.com/macon/byron" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <NeighborhoodBusinessSchema 
        neighborhoodName="Byron"
        pageDescription="Professional iPhone, iPad, and MacBook repair serving Byron, Fort Valley, and Peach County near Macon GA"
        landmarks={landmarks}
        areaServed={["Byron", "Fort Valley", "Peach County"]}
      />
      <BreadcrumbNav items={breadcrumbItems} />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                iPhone, iPad & MacBook Repair Near Byron, GA
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                SERVING BYRON, FORT VALLEY & PEACH COUNTY
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Located at 3742 Eisenhower Parkway, Macon – Just 20 minutes from Byron via I-75
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                  <a href="tel:(478)259-6371">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8">
                  <a href="https://www.google.com/maps/dir/Byron,+GA/3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-5 w-5" />
                    Get Directions from Byron
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Serving Byron Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Byron's Nearest Expert Apple Repair Shop
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    Serving Byron & Peach County
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
                    Why Byron Residents Choose Us
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>iPhone screen repair in 30 minutes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Walk-ins welcome – no appointment needed</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Affordable prices starting at $79</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Quick drive from Byron via I-75</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-4xl mx-auto">
              <p className="text-muted-foreground">
                Need <strong>iPhone repair near Byron, GA</strong>? Tech Medics Macon is the closest professional Apple repair shop for Byron, Fort Valley, and Peach County. We specialize in <strong>iPhone screen repair, iPad screen replacement, MacBook repair</strong>, battery replacements, and charging port fixes. Just take I-75 North for about 20 minutes to our shop at 3742 Eisenhower Parkway in Macon. Most repairs are done in 30 minutes or less.
              </p>
              <p className="text-muted-foreground mt-4">
                We serve residents near the <strong>Georgia National Fairgrounds</strong>, Fort Valley, and the entire Peach County area. Our prices beat chain repair stores, and every repair comes with a warranty. Don't ship your device away – get it fixed the same day at Tech Medics.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              Repair Services for Byron Residents
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Expert repair for all Apple devices – serving Byron & Peach County
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
              Byron iPhone Repair – Just 20 Minutes Away
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Drive up from Byron and get your device fixed while you wait
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                <a href="tel:(478)259-6371">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (478) 259-6371
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8">
                <a href="https://www.google.com/maps/dir/Byron,+GA/3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
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

export default Byron;
