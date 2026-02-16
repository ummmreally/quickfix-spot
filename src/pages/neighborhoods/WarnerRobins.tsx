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

const WarnerRobins = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Macon", href: "/macon" },
    { label: "Warner Robins Repair", href: "/macon/warner-robins" }
  ];

  const landmarks = [
    "Near Robins Air Force Base",
    "Serving Houston County residents",
    "Close to Houston Lake Road area",
    "Minutes from Warner Robins via I-75"
  ];

  const localFAQs = [
    {
      question: "How far is Tech Medics from Warner Robins GA?",
      answer: "Tech Medics Macon is located at 3742 Eisenhower Parkway in Macon, just a quick 20-minute drive from Warner Robins via I-75 North. We're the closest expert Apple repair shop serving Warner Robins and Houston County."
    },
    {
      question: "Do you offer iPhone repair for Warner Robins and Robins AFB personnel?",
      answer: "Yes! We proudly serve Warner Robins residents, Robins Air Force Base military personnel, and all of Houston County. We offer fast same-day iPhone, iPad, and MacBook repairs. Military personnel receive special pricing — call (478) 259-6371 for details."
    },
    {
      question: "What Apple repair services do you offer near Warner Robins?",
      answer: "We offer complete iPhone screen repair, iPhone battery replacement, iPad screen replacement, MacBook screen and keyboard repair, charging port fixes, and water damage recovery. Most iPhone repairs are done in 30 minutes while you wait."
    },
    {
      question: "Is it worth driving from Warner Robins to Macon for phone repair?",
      answer: "Absolutely! Tech Medics offers faster turnaround (30 minutes vs hours), lower prices than big-box stores, and expert technicians. The short 20-minute drive saves you money and gets your device back faster than shipping it off or visiting a chain store."
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
        <title>iPhone, iPad & MacBook Repair Near Warner Robins GA | Tech Medics Macon</title>
        <meta name="description" content="Expert iPhone, iPad & MacBook repair near Warner Robins GA. Just 20 min from Robins AFB via I-75. Same-day screen & battery repair. Call (478) 259-6371." />
        <meta name="keywords" content="iPhone repair Warner Robins GA, phone repair near Robins AFB, iPad repair Warner Robins, MacBook repair Houston County, screen repair Warner Robins Georgia" />
        <link rel="canonical" href="https://techmedicsmacon.com/macon/warner-robins" />
        <meta property="og:title" content="iPhone iPad MacBook Repair Near Warner Robins GA | Tech Medics" />
        <meta property="og:description" content="Expert Apple repair near Warner Robins GA. 20 min from Robins AFB. Same-day service for iPhone, iPad & MacBook." />
        <meta property="og:url" content="https://techmedicsmacon.com/macon/warner-robins" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <NeighborhoodBusinessSchema 
        neighborhoodName="Warner Robins"
        pageDescription="Professional iPhone, iPad, and MacBook repair serving Warner Robins, Robins Air Force Base, Houston County, and Centerville areas near Macon GA"
        landmarks={landmarks}
        areaServed={["Warner Robins", "Robins Air Force Base", "Houston County", "Centerville", "Bonaire"]}
      />
      <BreadcrumbNav items={breadcrumbItems} />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                iPhone, iPad & MacBook Repair Near Warner Robins, GA
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                SERVING WARNER ROBINS, ROBINS AFB & HOUSTON COUNTY
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Located at 3742 Eisenhower Parkway, Macon – Just 20 minutes from Warner Robins via I-75
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                  <a href="tel:(478)259-6371">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8">
                  <a href="https://www.google.com/maps/dir/Warner+Robins,+GA/3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-5 w-5" />
                    Get Directions from Warner Robins
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Serving Warner Robins Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Warner Robins' Closest Expert Apple Repair Shop
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    Serving Warner Robins & Nearby Areas
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
                    Why Warner Robins Residents Choose Us
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>30-minute iPhone screen repairs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>No appointment needed – walk-ins welcome</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Lower prices than big-box and chain stores</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Easy 20-minute drive via I-75 North</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-4xl mx-auto">
              <p className="text-muted-foreground">
                Looking for <strong>iPhone repair near Warner Robins, GA</strong>? Tech Medics Macon is the top-rated Apple device repair shop serving Warner Robins, Robins Air Force Base, Centerville, Bonaire, and all of Houston County. Our expert technicians specialize in <strong>iPhone screen repair, iPad screen replacement, MacBook repair</strong>, battery replacements, charging port fixes, and water damage recovery. We're just a quick 20-minute drive up I-75 from Warner Robins, and most repairs are completed in 30 minutes or less while you wait.
              </p>
              <p className="text-muted-foreground mt-4">
                Whether you're military personnel stationed at <strong>Robins AFB</strong>, a Warner Robins resident, or visiting Houston County, we provide the fastest and most affordable Apple device repair in the area. Skip the long wait at chain stores – get your iPhone, iPad, or MacBook fixed today at Tech Medics Macon.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              Repair Services for Warner Robins Residents
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Expert repair for all Apple devices – serving Warner Robins & Houston County
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
              Warner Robins iPhone Repair – Just 20 Minutes Away
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Drive up from Warner Robins and get your device fixed in 30 minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                <a href="tel:(478)259-6371">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (478) 259-6371
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8">
                <a href="https://www.google.com/maps/dir/Warner+Robins,+GA/3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
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

export default WarnerRobins;
