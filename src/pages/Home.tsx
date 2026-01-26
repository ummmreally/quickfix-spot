import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Shield, Wrench } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import iphoneImage from "@/assets/optimized/iphone-screen-repair-macon.webp";
import macbookImage from "@/assets/optimized/macbook-repair-macon.webp";
import ipadImage from "@/assets/optimized/ipad-screen-repair-macon.webp";
import FAQSection from "@/components/FAQSection";
import TestimonialSection from "@/components/TestimonialSection";
import RepairComparison from "@/components/RepairComparison";
import Navigation from "@/components/Navigation";
import ReviewSchema from "@/components/ReviewSchema";
import TrustBadges from "@/components/TrustBadges";
import CompactReviewDisplay from "@/components/CompactReviewDisplay";
import HoursDisplay from "@/components/HoursDisplay";

const Home = () => {

  return (
    <>
      <ReviewSchema />
      <Helmet>
        <title>iPhone Screen Repair Macon GA | iPad & MacBook Repair | Same Day Service</title>
        <meta
          name="description"
          content="Expert iPhone screen repair, iPad repair & MacBook repair in Macon GA. Fast 30-minute service. Battery replacements, charging port fixes. Walk-ins welcome at 3742 Eisenhower Pkwy. Call (478) 259-6371"
        />
        <meta
          name="keywords"
          content="iPhone screen repair Macon GA, iPad repair Macon, MacBook repair Macon GA, iPhone battery replacement Macon, screen repair Macon Georgia, Apple repair Macon"
        />
        <link rel="canonical" href="https://techmedicsmacon.com/" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://techmedicsmacon.com/"
              }
            ]
          })}
        </script>
        
        <meta property="og:title" content="iPhone Screen Repair Macon GA | Same Day iPad & MacBook Repair" />
        <meta
          property="og:description"
          content="Macon's #1 iPhone screen repair experts. Fast iPad & MacBook repairs. 30-minute service, walk-ins welcome. 3742 Eisenhower Parkway."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Tech Medics",
            image: "https://techmedicsmacon.com/logo.png",
            description:
              "Professional iPhone screen repair, iPad repair, and MacBook repair services in Macon, GA. Fast same-day service with warranty.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "3742 Eisenhower Parkway",
              addressLocality: "Macon",
              addressRegion: "GA",
              postalCode: "31206",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "32.8407",
              longitude: "-83.6324",
            },
            telephone: "+14782596371",
            priceRange: "$$",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "10:00",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "10:00",
                closes: "17:00",
              },
            ],
            areaServed: {
              "@type": "City",
              name: "Macon",
              containedIn: {
                "@type": "State",
                name: "Georgia",
              },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Repair Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "iPhone Screen Repair Macon GA",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "iPad Repair Macon GA",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "MacBook Repair Macon GA",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                iPhone Screen Repair in Macon, GA – Fast, Reliable, Local
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
                Expert iPhone, iPad & MacBook Repair in Macon Georgia
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                🚀 Most iPhone screen repairs done in 30 minutes or less
                <br />
                📍 Conveniently located at 3742 Eisenhower Parkway, Macon GA 31206
                <br />
                🛠️ Walk-ins welcome – No appointment needed
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
                >
                  <a 
                    href="tel:(478)259-6371"
                    data-track="phone-cta"
                    data-location="home-hero"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call (478) 259-6371
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 text-lg px-8 py-6">
                  <a
                    href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="directions-cta"
                    data-location="home-hero"
                  >
                    <MapPin className="mr-2 h-5 w-5" />
                    Get Directions
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-border">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">30-Min Service</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-border">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">Warranty Included</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-border">
                  <Wrench className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">Expert Techs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadges />

        {/* Review Display */}
        <CompactReviewDisplay />

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                Professional Apple Device Repair Services in Macon, GA
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From iPhone screen repair to iPad glass replacement and MacBook logic board fixes – we handle all Apple
                device repairs in Macon with precision and care
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* iPhone Repair */}
              <a href="/macon/iphone" className="group">
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={iphoneImage}
                      alt="iPhone screen repair Macon GA - cracked screen fix"
                      width="800"
                      height="600"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      fetchPriority="high"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">iPhone Screen Repair Macon GA</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✓ Cracked iPhone screen replacement</li>
                      <li>✓ iPhone battery replacement</li>
                      <li>✓ Charging port repair</li>
                      <li>✓ Water damage repair</li>
                      <li>✓ All iPhone models supported</li>
                    </ul>
                    <Button className="mt-4 w-full" variant="outline">
                      iPhone Repair Services →
                    </Button>
                  </div>
                </div>
              </a>

              {/* iPad Repair */}
              <a href="/macon/ipad" className="group">
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={ipadImage}
                      alt="iPad repair Macon GA - screen and glass repair"
                      width="800"
                      height="600"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">iPad Repair Macon GA</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✓ iPad screen replacement</li>
                      <li>✓ iPad glass repair</li>
                      <li>✓ iPad battery service</li>
                      <li>✓ iPad charging issues</li>
                      <li>✓ All iPad models serviced</li>
                    </ul>
                    <Button className="mt-4 w-full" variant="outline">
                      iPad Repair Services →
                    </Button>
                  </div>
                </div>
              </a>

              {/* MacBook Repair */}
              <a href="/macon/macbook" className="group">
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={macbookImage}
                      alt="MacBook repair Macon GA - screen and logic board repair"
                      width="800"
                      height="800"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">MacBook Repair Macon GA</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✓ MacBook screen replacement</li>
                      <li>✓ Keyboard repair</li>
                      <li>✓ Battery replacement</li>
                      <li>✓ Logic board repair</li>
                      <li>✓ MacBook Air & Pro supported</li>
                    </ul>
                    <Button className="mt-4 w-full" variant="outline">
                      MacBook Repair Services →
                    </Button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Why Macon Trusts Us for iPhone Screen Repair & More
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Lightning Fast Service</h3>
                <p className="text-muted-foreground">
                  Most iPhone screen repairs completed in 30 minutes or less while you wait
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Warranty Protected</h3>
                <p className="text-muted-foreground">
                  All repairs backed by our comprehensive warranty for peace of mind
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Macon Local</h3>
                <p className="text-muted-foreground">Proudly serving Macon, GA at 3742 Eisenhower Parkway since 2010</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Expert Technicians</h3>
                <p className="text-muted-foreground">Certified Apple repair specialists with years of experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Visit Our iPhone Repair Shop in Macon, GA
                </h2>
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Address
                    </h3>
                    <p className="text-muted-foreground ml-7">
                      3742 Eisenhower Parkway
                      <br />
                      Macon, GA 31206
                    </p>
                  </div>
                  <HoursDisplay />
                  <div>
                    <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      Phone
                    </h3>
                    <p className="text-muted-foreground ml-7">(478) 259-6371</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a 
                      href="tel:(478)259-6371"
                      data-track="phone-cta"
                      data-location="home-location"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now for iPhone Repair
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2">
                    <a
                      href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-track="directions-cta"
                      data-location="home-location"
                    >
                      <MapPin className="mr-2 h-5 w-5" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-muted rounded-lg overflow-hidden h-96 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.8373937877726!2d-83.68656332397183!3d32.78909817359875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5d0d4e3c8c8c3%3A0x5e3c3c3c3c3c3c3c!2s3742%20Eisenhower%20Pkwy%2C%20Macon%2C%20GA%2031206!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tech Medics iPhone repair shop location - 3742 Eisenhower Parkway, Macon GA 31206"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-20 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Macon's Premier iPhone Screen Repair & Apple Device Service Center
              </h2>
              <p className="text-muted-foreground mb-4">
                When you need fast, reliable <strong>iPhone screen repair in Macon, GA</strong>, Tech Medics is your
                trusted local solution. Located conveniently at 3742 Eisenhower Parkway in Macon, Georgia, we specialize
                in same-day Apple device repairs including iPhone screen replacement, iPad repair, and MacBook service.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">Expert iPhone Repair Services in Macon</h3>
              <p className="text-muted-foreground mb-4">
                Our certified technicians handle all types of <strong>iPhone repairs in Macon</strong>, from cracked
                screen replacements to battery issues, charging port problems, and water damage recovery. We service all
                iPhone models including the latest iPhone 15, iPhone 14, iPhone 13, and older generations. Most{" "}
                <strong>iPhone screen repairs in Macon GA</strong> are completed in 30 minutes or less.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">
                Complete iPad & MacBook Repair in Macon, Georgia
              </h3>
              <p className="text-muted-foreground mb-4">
                Beyond iPhone repair, we're your full-service Apple repair shop in Macon. Our{" "}
                <strong>iPad repair services in Macon</strong> include screen replacement, glass repair, and battery
                service. For <strong>MacBook repair in Macon GA</strong>, we handle everything from screen replacement
                and keyboard repairs to logic board diagnostics and battery replacement.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-foreground mt-8">
                Why Choose Tech Medics for iPhone Screen Repair in Macon?
              </h3>
              <p className="text-muted-foreground mb-4">
                As Macon's most trusted Apple repair center, we combine fast turnaround times with quality workmanship.
                Walk-ins are always welcome – no appointment necessary. Every repair is backed by our warranty, and we
                use high-quality replacement parts. Whether you need a quick{" "}
                <strong>iPhone screen replacement in Macon</strong> or complex MacBook logic board repair, our
                experienced team delivers reliable results.
              </p>
              <p className="text-muted-foreground">
                <strong>Serving Macon, GA and surrounding areas</strong> including Warner Robins, Byron, Forsyth, and
                all of Bibb County with professional Apple device repair services since 2010.
              </p>
            </article>
          </div>
        </section>

        {/* Comparison Section */}
        <RepairComparison deviceType="iPhone, iPad & MacBook" />

        {/* FAQ Section */}
        <FAQSection
          deviceType="iPhone, iPad & MacBook"
          faqs={[
            {
              question: "How long do repairs take at your Macon location?",
              answer:
                "Most iPhone screen repairs take 30 minutes or less. iPad repairs typically take 1-2 hours, and MacBook repairs range from 2-4 hours depending on the service. We offer same-day service for most repairs at our Eisenhower Parkway location.",
            },
            {
              question: "Do you offer same-day Apple device repair in Macon?",
              answer:
                "Yes! We specialize in same-day repairs for iPhone, iPad, and MacBook devices. Most iPhone repairs are completed while you wait. No appointment needed – just walk in during our business hours.",
            },
            {
              question: "What areas do you serve besides Macon, GA?",
              answer:
                "We proudly serve Macon and surrounding areas including Warner Robins, Byron, Forsyth, Perry, and all of Bibb County. We're conveniently located at 3742 Eisenhower Parkway for easy access from anywhere in Central Georgia.",
            },
            {
              question: "Are your parts genuine Apple parts or third-party?",
              answer:
                "We use high-quality replacement parts that meet or exceed OEM specifications. All parts come with a warranty and are tested before installation to ensure quality and performance.",
            },
            {
              question: "How much do repairs typically cost?",
              answer:
                "Prices vary by device and repair type. iPhone screen repairs start around $79, iPad repairs from $99, and MacBook repairs from $299. Call (478) 259-6371 for an exact quote for your specific device and issue.",
            },
            {
              question: "Do you offer warranties on repairs?",
              answer:
                "Yes! All our repairs are backed by a comprehensive warranty. We stand behind our workmanship and the quality of our parts to ensure your device repair lasts.",
            },
            {
              question: "Can you fix water-damaged devices?",
              answer:
                "Yes, we specialize in water damage repair for iPhones, iPads, and MacBooks. Bring your device to us as soon as possible after water exposure for the best chance of recovery.",
            },
            {
              question: "Do I need an appointment or can I walk in?",
              answer:
                "No appointment necessary! We welcome walk-ins Monday-Friday 10am-6pm and Saturday 10am-5pm. For faster service during busy times, you can call ahead at (478) 259-6371.",
            },
          ]}
        />

        {/* Testimonials Section */}
        <TestimonialSection
          testimonials={[
            {
              name: "Jessica M.",
              rating: 5,
              text: "Cracked my iPhone screen and they fixed it in 20 minutes! Best iPhone repair service in Macon. Professional, fast, and affordable.",
              date: "2024-03-22",
              service: "iPhone Screen Repair",
            },
            {
              name: "Thomas R.",
              rating: 5,
              text: "My iPad Pro screen was shattered. They replaced it same day and it looks brand new. Highly recommend for iPad repair in Macon!",
              date: "2024-03-19",
              service: "iPad Screen Replacement",
            },
            {
              name: "Karen W.",
              rating: 5,
              text: "MacBook Air keyboard wasn't working right. They diagnosed and fixed it quickly. Great MacBook repair shop, very knowledgeable staff.",
              date: "2024-03-16",
              service: "MacBook Keyboard Repair",
            },
            {
              name: "Brandon C.",
              rating: 5,
              text: "My iPhone battery was draining so fast. They replaced it while I waited and now it lasts all day. Best repair experience in Macon!",
              date: "2024-03-11",
              service: "iPhone Battery Replacement",
            },
            {
              name: "Michelle D.",
              rating: 5,
              text: "Dropped my iPad in water and thought it was done for. They recovered it and saved all my data! Amazing water damage repair service.",
              date: "2024-03-07",
              service: "iPad Water Damage Repair",
            },
            {
              name: "Steven J.",
              rating: 5,
              text: "Professional MacBook screen repair. They kept me updated throughout the process and the work is flawless. Will definitely return!",
              date: "2024-03-03",
              service: "MacBook Screen Replacement",
            },
          ]}
        />

        {/* Blog & Resources Section - Internal Links for SEO */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              iPhone Repair Guides & Resources
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Expert advice on device repair, maintenance tips, and cost guides for Macon GA residents
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Link to="/blog/iphone-screen-repair-macon-ga" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-2 text-foreground">iPhone Screen Repair Guide 2026</h3>
                <p className="text-muted-foreground text-sm">Complete guide to screen repair costs, quality options, and what to expect.</p>
              </Link>
              <Link to="/blog/iphone-battery-replacement-macon" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-2 text-foreground">iPhone Battery Replacement</h3>
                <p className="text-muted-foreground text-sm">Signs your battery needs replacing, costs, and same-day service info.</p>
              </Link>
              <Link to="/blog/same-day-iphone-repair-macon" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-2 text-foreground">Same-Day iPhone Repair</h3>
                <p className="text-muted-foreground text-sm">Fast repair options and what can be fixed while you wait.</p>
              </Link>
              <Link to="/blog/ipad-screen-repair-macon" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-2 text-foreground">iPad Screen Repair Services</h3>
                <p className="text-muted-foreground text-sm">All iPad models supported - Pro, Air, Mini. Pricing and repair times.</p>
              </Link>
              <Link to="/blog/macbook-repair-macon-ga" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-2 text-foreground">MacBook Repair in Macon</h3>
                <p className="text-muted-foreground text-sm">Screen, keyboard, battery, and logic board repair services.</p>
              </Link>
              <Link to="/blog/tech-medics-vs-apple-store-repair" className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-2 text-foreground">Tech Medics vs Apple Store</h3>
                <p className="text-muted-foreground text-sm">Compare costs, warranty, and turnaround times.</p>
              </Link>
            </div>

            <div className="text-center">
              <Link to="/blog" className="text-primary hover:underline font-semibold">
                View All Repair Guides →
              </Link>
            </div>
          </div>
        </section>

        {/* Neighborhoods Served Section - Internal Links for SEO */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Serving All Macon GA Neighborhoods
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Conveniently located at 3742 Eisenhower Parkway - quick access from anywhere in Macon
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/macon/vineville" className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-foreground">Vineville</h3>
                <p className="text-muted-foreground text-sm">Near Mercer University</p>
              </Link>
              <Link to="/macon/north-macon" className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-foreground">North Macon</h3>
                <p className="text-muted-foreground text-sm">The Crossing area</p>
              </Link>
              <Link to="/macon/downtown" className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-foreground">Downtown</h3>
                <p className="text-muted-foreground text-sm">Cherry Street district</p>
              </Link>
              <Link to="/macon/ingleside" className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-foreground">Ingleside</h3>
                <p className="text-muted-foreground text-sm">Wesleyan College area</p>
              </Link>
              <Link to="/macon/east-macon" className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-foreground">East Macon</h3>
                <p className="text-muted-foreground text-sm">River Crossing area</p>
              </Link>
              <Link to="/macon/south-macon" className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-foreground">South Macon</h3>
                <p className="text-muted-foreground text-sm">Macon Mall area</p>
              </Link>
              <Link to="/macon/rutland" className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-foreground">Rutland</h3>
                <p className="text-muted-foreground text-sm">Bass Road area</p>
              </Link>
              <Link to="/macon/contact" className="bg-primary/10 border border-primary rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary">Contact Us</h3>
                <p className="text-muted-foreground text-sm">Get directions</p>
              </Link>
            </div>
          </div>
        </section>
        </main>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-border bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-foreground">Contact</h3>
                <p className="text-muted-foreground mb-2">3742 Eisenhower Parkway</p>
                <p className="text-muted-foreground mb-4">Macon, GA 31206</p>
                <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="tel:(478)259-6371">
                    <Phone className="mr-2 h-4 w-4" />
                    (478) 259-6371
                  </a>
                </Button>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4 text-foreground">Hours</h3>
                <HoursDisplay />
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
                <div className="space-y-2">
                  <Link to="/macon/about" className="block text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                  <Link to="/privacy" className="block text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                  <Link to="/blog" className="block text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                  <a href="tel:(478)259-6371" className="block text-muted-foreground hover:text-primary transition-colors">
                    Call for Quote
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center text-muted-foreground border-t border-border pt-6">
              <p>© 2026 Tech Medics Macon - iPhone Screen Repair Macon GA | iPad Repair | MacBook Repair</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
