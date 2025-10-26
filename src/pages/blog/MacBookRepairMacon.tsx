import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "react-router-dom";

const MacBookRepairMacon = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "MacBook Repair in Macon GA: Screen, Keyboard & More",
    "description": "Expert MacBook repair services in Macon GA. We fix screens, keyboards, liquid damage, and boot issues. Same-day service available.",
    "author": {
      "@type": "Organization",
      "name": "Tech Medics Macon"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tech Medics Macon",
      "logo": {
        "@type": "ImageObject",
        "url": "https://techmedicsmacon.com/logo.png"
      }
    },
    "datePublished": "2025-01-10",
    "dateModified": "2025-01-10"
  };

  return (
    <>
      <Helmet>
        <title>MacBook Repair Macon GA | Screen, Keyboard, Battery | Same-Day Service</title>
        <meta name="description" content="MacBook repair in Macon GA from $89. Screen replacement, keyboard fixes, battery upgrades, liquid damage repair. All MacBook models supported. Same-day service." />
        <meta name="keywords" content="MacBook repair Macon GA, MacBook screen replacement, MacBook won't turn on, MacBook keyboard repair, liquid damage MacBook, MacBook battery replacement" />
        <link rel="canonical" href="https://techmedicsmacon.com/blog/macbook-repair-macon-ga" />
        
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <LocalBusinessSchema 
        pageName="MacBook Repair in Macon GA"
        pageDescription="Professional MacBook repair service in Macon GA with same-day turnaround"
        serviceType="MacBook Repair"
      />

      <Navigation />

      <article className="min-h-screen bg-background">
        <header className="py-16 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="text-primary hover:underline mb-4 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              MacBook Repair in Macon GA: Screen, Keyboard & More
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert MacBook repair services in Macon including screen replacement, keyboard fixes, and liquid damage recovery
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Published January 10, 2025 | 9 min read
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">
              Common MacBook Problems We Fix in Macon GA
            </h2>
            <p className="text-muted-foreground mb-6">
              MacBooks are reliable, but they're not immune to hardware issues. Here are the most common MacBook repairs we handle at Tech Medics Macon:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Cracked or damaged screens:</strong> Whether from drops or pressure, we replace MacBook screens same-day</li>
              <li><strong>Keyboard malfunctions:</strong> Sticky keys, non-responsive keys, or complete keyboard failure</li>
              <li><strong>MacBook won't turn on:</strong> Dead battery, logic board issues, or power problems</li>
              <li><strong>Liquid damage:</strong> Spilled coffee, water, or other liquids on your MacBook</li>
              <li><strong>Battery not charging:</strong> Battery won't hold charge or MacBook shuts down unexpectedly</li>
              <li><strong>Slow performance:</strong> MacBook running slow, needs SSD upgrade or RAM increase</li>
              <li><strong>Trackpad not working:</strong> Unresponsive or erratic trackpad behavior</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              MacBook Screen Replacement Cost in Macon GA
            </h2>
            <p className="text-muted-foreground mb-4">
              MacBook screen replacements vary by model and screen size. Here's our current pricing:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>MacBook Air 13" (M1/M2/M3):</strong> $349-449</li>
              <li><strong>MacBook Pro 13" (M1/M2):</strong> $399-499</li>
              <li><strong>MacBook Pro 14" (M1 Pro/M2 Pro):</strong> $499-599</li>
              <li><strong>MacBook Pro 16" (M1 Pro/Max/M2):</strong> $599-749</li>
              <li><strong>Older Intel MacBooks:</strong> $299-499 depending on model</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Compare this to Apple Store pricing which starts at $499 for Air models and can exceed $800 for Pro models. We offer 30-40% savings while maintaining quality.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              MacBook Keyboard Repair & Replacement
            </h2>
            <p className="text-muted-foreground mb-6">
              MacBook keyboards, especially the butterfly keyboard models (2015-2019), are notorious for issues. If you have sticky keys, repeating keys, or non-responsive keys, we can help:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Individual key replacement:</strong> $49-79 for single key fixes</li>
              <li><strong>Full keyboard replacement:</strong> $199-349 depending on model</li>
              <li><strong>Butterfly keyboard fixes:</strong> Special cleaning and repair for problematic butterfly keyboards</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              The butterfly keyboard issues affected MacBook Pro 2016-2019 and MacBook Air 2018-2019. If your MacBook falls in this range and has keyboard problems, we have extensive experience fixing these notorious keyboards.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              MacBook Won't Turn On: Troubleshooting Guide
            </h2>
            <p className="text-muted-foreground mb-6">
              If your MacBook won't power on, here's a systematic approach to diagnose the problem:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-3">
              <li><strong>Check the power adapter:</strong> Make sure the MagSafe or USB-C charger is plugged in and showing a light. Try a different outlet.</li>
              <li><strong>Reset SMC (System Management Controller):</strong> For Intel Macs, this often fixes power issues. For M1/M2/M3 Macs, simply shut down and restart.</li>
              <li><strong>Check for signs of life:</strong> Do you hear fan noise? See any lights? These indicate partial power.</li>
              <li><strong>Inspect for liquid damage:</strong> Check for corrosion around ports or keyboard.</li>
              <li><strong>Test with external display:</strong> Connect to external monitor to rule out screen issues.</li>
            </ol>
            <p className="text-muted-foreground mb-6">
              If none of these steps work, bring your MacBook to Tech Medics for free diagnostics. Common causes include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Dead battery (most common, easy fix)</li>
              <li>Faulty charging port or MagSafe connector</li>
              <li>Logic board failure (more complex, but often repairable)</li>
              <li>Liquid damage causing short circuits</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              MacBook Liquid Damage Repair in Macon GA
            </h2>
            <div className="bg-destructive/10 border-l-4 border-destructive p-6 my-8 rounded">
              <p className="text-muted-foreground mb-4">
                <strong className="text-destructive">URGENT:</strong> If you spilled liquid on your MacBook, turn it off IMMEDIATELY and bring it to our shop. Every minute counts in preventing permanent damage.
              </p>
            </div>
            <p className="text-muted-foreground mb-6">
              Liquid damage is one of the most time-sensitive repairs. Here's what happens when liquid enters your MacBook:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Immediate damage:</strong> Liquid creates short circuits, potentially frying components</li>
              <li><strong>Corrosion (24-72 hours):</strong> Liquid causes oxidation and corrosion that spreads</li>
              <li><strong>Permanent damage (1 week+):</strong> Corrosion becomes extensive, making repair impossible or extremely expensive</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Our liquid damage recovery process:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-3">
              <li><strong>Immediate disassembly:</strong> We open your MacBook and disconnect the battery within minutes</li>
              <li><strong>Ultrasonic cleaning:</strong> Professional cleaning removes all liquid residue</li>
              <li><strong>Component inspection:</strong> We test each component for functionality</li>
              <li><strong>Micro-soldering repair:</strong> If needed, we repair or replace damaged logic board components</li>
              <li><strong>Reassembly & testing:</strong> Thorough testing before returning to you</li>
            </ol>
            <p className="text-muted-foreground mb-6">
              Liquid damage repair costs $149-499 depending on extent of damage. We offer free diagnostics to assess the damage first.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              MacBook Battery Replacement & Upgrade Options
            </h2>
            <p className="text-muted-foreground mb-6">
              MacBook batteries degrade over time. You should consider battery replacement if:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Battery health is below 80% (check in System Settings → Battery)</li>
              <li>MacBook only works when plugged in</li>
              <li>Battery drains quickly (less than 3-4 hours on full charge)</li>
              <li>Battery is swollen (URGENT - stop using immediately)</li>
              <li>"Service Battery" warning appears in menu bar</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Battery replacement pricing by model:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>MacBook Air (all models):</strong> $129-179</li>
              <li><strong>MacBook Pro 13":</strong> $149-199</li>
              <li><strong>MacBook Pro 14" & 16":</strong> $199-249</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              All battery replacements include 1-year warranty and same-day service.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              MacBook Performance Upgrades: SSD & RAM
            </h2>
            <p className="text-muted-foreground mb-6">
              Is your MacBook running slow? Before buying a new one, consider performance upgrades:
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">SSD Upgrades</h3>
            <p className="text-muted-foreground mb-6">
              Upgrading to a larger or faster SSD can dramatically improve your MacBook's performance. We offer:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>256GB → 512GB:</strong> $199 (includes data transfer)</li>
              <li><strong>256GB → 1TB:</strong> $299 (includes data transfer)</li>
              <li><strong>512GB → 1TB:</strong> $249 (includes data transfer)</li>
              <li><strong>1TB → 2TB:</strong> $399 (includes data transfer)</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Note: M1/M2/M3 MacBooks have soldered storage that cannot be upgraded. SSD upgrades only work on 2015-2019 Intel MacBooks.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">RAM Upgrades (Intel MacBooks Only)</h3>
            <p className="text-muted-foreground mb-6">
              More RAM means better multitasking and faster performance:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>8GB → 16GB:</strong> $99-149</li>
              <li><strong>16GB → 32GB:</strong> $199-249 (only for compatible models)</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Unfortunately, M1/M2/M3 MacBooks have soldered RAM that cannot be upgraded. RAM upgrades only work on 2015-2019 Intel MacBooks.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Same-Day MacBook Repair in Macon GA
            </h2>
            <p className="text-muted-foreground mb-6">
              We understand how critical your MacBook is for work, school, or personal use. That's why we offer same-day repair for most MacBook issues:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Battery replacement:</strong> 1-2 hours</li>
              <li><strong>Screen replacement:</strong> 2-3 hours</li>
              <li><strong>Keyboard replacement:</strong> 2-4 hours</li>
              <li><strong>Liquid damage cleaning:</strong> 4-6 hours (same-day if you come in morning)</li>
              <li><strong>Simple repairs (charging port, trackpad):</strong> 1-2 hours</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Complex logic board repairs may require 2-3 business days. We'll provide an accurate timeline after free diagnostics.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Why Choose Tech Medics for MacBook Repair in Macon?
            </h2>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Apple-certified equivalent technicians:</strong> 10+ years combined experience</li>
              <li><strong>30-40% cheaper than Apple Store:</strong> No need to drive to Atlanta</li>
              <li><strong>Same-day service:</strong> Most repairs completed within hours</li>
              <li><strong>Free diagnostics:</strong> We'll test your MacBook and provide honest assessment</li>
              <li><strong>Lifetime warranty on screens:</strong> 1-year warranty on batteries and other parts</li>
              <li><strong>Data privacy guaranteed:</strong> We never access your personal files</li>
              <li><strong>All MacBook models supported:</strong> From 2012 models to latest M3 MacBooks</li>
            </ul>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-12 rounded">
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                Get Your MacBook Fixed Today
              </h3>
              <p className="text-muted-foreground mb-4">
                Visit Tech Medics Macon for same-day MacBook repair. Free diagnostic included. Walk-ins welcome!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+14782596371"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
                >
                  Call (478) 259-6371
                </a>
                <Link 
                  to="/macon/macbook"
                  className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-center"
                >
                  View MacBook Services
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>

      <footer className="bg-secondary/20 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Tech Medics Macon. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link to="/macon/about" className="hover:text-primary">About</Link>
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/blog" className="hover:text-primary">Blog</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MacBookRepairMacon;
