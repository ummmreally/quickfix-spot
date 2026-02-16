import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, GraduationCap, Users, DollarSign, Laptop } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";

const Education = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Education Technology Support",
    "description": "Professional Apple device repair services for schools, teachers, and students in Macon with educational pricing and bulk repair programs",
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
    "serviceType": "Educational Device Repair"
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
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Student-First Service",
      description: "We understand the importance of keeping students connected to their learning tools.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Educational Pricing",
      description: "Special discounted rates for schools, teachers, and educational institutions in Macon.",
    },
    {
      icon: <Laptop className="h-8 w-8 text-primary" />,
      title: "Device Management",
      description: "Comprehensive support for school-issued iPads, MacBooks, and other Apple devices.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Bulk Repairs",
      description: "Efficient handling of multiple devices with streamlined drop-off and pickup services.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>School & Student Device Repair Macon GA | Educational Discounts | Tech Medics</title>
        <meta name="description" content="iPad & MacBook repair for schools in Macon GA. Student discounts, bulk repairs, educational pricing. Serving K-12 & colleges. Call (478) 259-6371." />
        <meta name="keywords" content="school iPad repair macon, student device repair, educational technology support, Mercer University repair, school MacBook repair macon" />
        <link rel="canonical" href="https://techmedicsmacon.com/macon/education" />
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Education Technology Support</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional repair services for schools, teachers, and students throughout the Macon area
            </p>
            <Button
              size="lg"
              onClick={handleCall}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us for Schools
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Supporting Education in Macon</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Technology plays a crucial role in modern education. When school-issued devices break, it can disrupt
              learning and create frustration for students, teachers, and administrators. Tech Medics is proud to
              support educational institutions across Macon with specialized repair services for Apple devices used in
              classrooms.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              From elementary schools to universities, we provide fast, affordable repairs for iPads, MacBooks, and
              other Apple technology that students depend on. Our team understands the unique needs of educational
              environments and works efficiently to minimize device downtime and keep students learning.
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

          {/* Who We Serve */}
          <div className="bg-secondary/30 rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">K-12 Schools</h3>
                <p className="text-muted-foreground">
                  Public and private schools throughout Macon and surrounding counties. We handle classroom device
                  repairs for students and teachers.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Laptop className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Colleges & Universities</h3>
                <p className="text-muted-foreground">
                  Higher education institutions needing reliable repair services for student and faculty Apple devices.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Students & Teachers</h3>
                <p className="text-muted-foreground">
                  Individual students and educators with personal devices used for educational purposes receive special
                  pricing.
                </p>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">
              Educational Device Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Common Repairs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-foreground">
                    <li>• iPad screen replacement and digitizer repair</li>
                    <li>• MacBook keyboard and trackpad replacement</li>
                    <li>• Battery replacement for all Apple devices</li>
                    <li>• Charging port and cable repairs</li>
                    <li>• Camera and microphone fixes</li>
                    <li>• Water damage assessment and recovery</li>
                    <li>• Software troubleshooting and updates</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">School Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-foreground">
                    <li>• Bulk device repair with volume pricing</li>
                    <li>• Scheduled maintenance visits</li>
                    <li>• Summer device refresh programs</li>
                    <li>• Emergency same-day repair service</li>
                    <li>• Device protection accessories and cases</li>
                    <li>• Purchase order and invoice billing</li>
                    <li>• Loaner devices available for schools</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-secondary/30 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Partner with Tech Medics</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can support your school's technology needs. Contact us to learn about our educational
              pricing and service programs.
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
                <a href="mailto:Support@MyTechMedics.com">Email for Quote</a>
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

export default Education;
