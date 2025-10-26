import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "react-router-dom";

const WaterDamagedIPhone = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Water Damaged iPhone? Here's What to Do Immediately (Macon GA)",
    "description": "iPhone got wet? Learn emergency steps, rice myths, and professional water damage repair in Macon GA. Fast action saves your device.",
    "author": { "@type": "Organization", "name": "Tech Medics Macon" },
    "publisher": { "@type": "Organization", "name": "Tech Medics Macon", "logo": { "@type": "ImageObject", "url": "https://techmedicsmacon.com/logo.png" } },
    "datePublished": "2025-01-16",
    "dateModified": "2025-01-16"
  };

  return (
    <>
      <Helmet>
        <title>Water Damaged iPhone Repair Macon GA | Emergency Guide | Tech Medics</title>
        <meta name="description" content="iPhone water damage repair in Macon GA. Learn what to do immediately when iPhone gets wet. Professional liquid damage cleaning $149. Same-day service." />
        <meta name="keywords" content="water damaged iPhone, iPhone got wet, liquid damage repair, iPhone in water, iPhone water damage indicator, dry wet iPhone" />
        <link rel="canonical" href="https://techmedicsmacon.com/blog/water-damaged-iphone-repair" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <LocalBusinessSchema pageName="Water Damaged iPhone Repair" pageDescription="Professional iPhone water damage repair service in Macon GA" serviceType="iPhone Water Damage Repair" />
      <Navigation />

      <article className="min-h-screen bg-background">
        <header className="py-16 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="text-primary hover:underline mb-4 inline-block">← Back to Blog</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Water Damaged iPhone? Act Fast!</h1>
            <p className="text-xl text-muted-foreground">Emergency guide for wet iPhones and professional water damage repair in Macon GA</p>
            <div className="mt-4 text-sm text-muted-foreground">Published January 16, 2025 | 9 min read</div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <section className="prose prose-lg max-w-none">
            <div className="bg-destructive/10 border-l-4 border-destructive p-6 my-8 rounded">
              <h2 className="text-2xl font-bold mb-3 text-destructive">URGENT: Do This NOW</h2>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                <li><strong>Turn off iPhone immediately</strong> (don't wait to save data)</li>
                <li><strong>Remove case and SIM card</strong></li>
                <li><strong>Dry exterior with towel</strong> (don't shake or blow on it)</li>
                <li><strong>Bring to Tech Medics within 24 hours</strong> for professional cleaning</li>
              </ol>
              <p className="text-muted-foreground mt-4"><strong>Every minute counts!</strong> Water damage repair success drops dramatically after 48 hours.</p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">What NOT to Do (Common Mistakes)</h2>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>❌ Don't use rice:</strong> Rice doesn't effectively absorb water and can get stuck in ports</li>
              <li><strong>❌ Don't use hair dryer:</strong> Heat can damage internal components</li>
              <li><strong>❌ Don't charge your iPhone:</strong> Can cause short circuit and permanent damage</li>
              <li><strong>❌ Don't turn it on to "check if it works":</strong> Power + water = disaster</li>
              <li><strong>❌ Don't shake or tap it:</strong> Spreads water to undamaged areas</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Understanding iPhone Water Resistance</h2>
            <p className="text-muted-foreground mb-6">Many people believe newer iPhones are "waterproof." They're not. Here's the truth:</p>
            
            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">IP Ratings Explained</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>iPhone 15/14/13/12 series: IP68</strong> – Can survive 30 min in 6 meters of water (lab conditions only)</li>
              <li><strong>iPhone 11 Pro/XS: IP68</strong> – 30 min in 4 meters</li>
              <li><strong>iPhone 11/XR: IP67</strong> – 30 min in 1 meter</li>
              <li><strong>iPhone X and older: IP67 or not rated</strong></li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Why "Water Resistant" ≠ "Waterproof"</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Water resistance degrades over time with normal wear</li>
              <li>Drops can crack seals even without visible damage</li>
              <li>Saltwater, chlorine, soap break down seals faster</li>
              <li>Hot liquids (coffee, tea) damage faster than cold water</li>
              <li>Apple warranty does NOT cover water damage on any iPhone</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Timeline: How Water Damages Your iPhone</h2>
            <p className="text-muted-foreground mb-6">Understanding the damage progression helps you act quickly:</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">0-2 Hours: Short Circuit Risk</h3>
            <p className="text-muted-foreground mb-6">Water creates electrical shorts if power is on. This can instantly kill components. <strong>This is why turning off immediately is critical.</strong></p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">2-24 Hours: Water Spreads</h3>
            <p className="text-muted-foreground mb-6">Water continues seeping into hard-to-reach areas: under chips, into connectors, behind screens.</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">24-72 Hours: Corrosion Begins</h3>
            <p className="text-muted-foreground mb-6">Oxidation and corrosion start on circuit boards and connectors. This is the point of no return for many devices.</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">1 Week+: Extensive Damage</h3>
            <p className="text-muted-foreground mb-6">Corrosion spreads extensively. Repair becomes extremely difficult or impossible.</p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">DIY Water Damage First Aid</h2>
            <p className="text-muted-foreground mb-6">While you're preparing to bring your iPhone to our shop:</p>
            <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-3">
              <li><strong>Power off immediately:</strong> Hold power button, slide to power off</li>
              <li><strong>Remove everything:</strong> Case, SIM card tray, screen protector</li>
              <li><strong>Dry visible water:</strong> Use soft cloth or paper towel, gentle pats only</li>
              <li><strong>Position upright:</strong> Stand iPhone upright to let water drain from ports</li>
              <li><strong>Place in silica gel packets (if available):</strong> Better than rice for moisture absorption</li>
              <li><strong>DO NOT charge or turn on</strong> – resist the urge!</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Professional Water Damage Repair Process</h2>
            <p className="text-muted-foreground mb-6">Tech Medics uses professional-grade equipment and techniques:</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Step 1: Immediate Disassembly (10 minutes)</h3>
            <p className="text-muted-foreground mb-6">We open your iPhone and disconnect the battery to prevent further short circuits.</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Step 2: Ultrasonic Cleaning (30-60 minutes)</h3>
            <p className="text-muted-foreground mb-6">We use ultrasonic baths with specialized solution to remove all water, mineral deposits, and corrosion.</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Step 3: Component Inspection (30 minutes)</h3>
            <p className="text-muted-foreground mb-6">Each component is tested: battery, screen, cameras, buttons, ports, logic board.</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Step 4: Micro-Soldering Repair (If Needed)</h3>
            <p className="text-muted-foreground mb-6">If corrosion damaged logic board components, we perform precision micro-soldering repairs.</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Step 5: Reassembly & Testing (30 minutes)</h3>
            <p className="text-muted-foreground mb-6">We reassemble and thoroughly test all functions before returning your iPhone.</p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Water Damage Repair Pricing</h2>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Basic liquid damage cleaning:</strong> $149 (if caught early, no component damage)</li>
              <li><strong>Cleaning + component replacement:</strong> $199-349 (if battery, charging port, or screen damaged)</li>
              <li><strong>Logic board repair:</strong> $249-499 (if corrosion damaged motherboard)</li>
            </ul>
            <p className="text-muted-foreground mb-6">We offer <strong>free diagnostics</strong> to assess damage and provide honest repair estimate. No charge if unrepairable.</p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Success Rates by Timing</h2>
            <p className="text-muted-foreground mb-4">Based on our repair data:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Within 24 hours:</strong> 80-90% success rate</li>
              <li><strong>24-48 hours:</strong> 60-70% success rate</li>
              <li><strong>2-7 days:</strong> 30-40% success rate</li>
              <li><strong>1+ week:</strong> 10-20% success rate (severe corrosion)</li>
            </ul>
            <p className="text-muted-foreground mb-6"><strong>Bottom line:</strong> The faster you act, the better your chances.</p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Check iPhone Water Damage Indicators</h2>
            <p className="text-muted-foreground mb-6">iPhones have Liquid Contact Indicators (LCI) that change color when exposed to water:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Location:</strong> Inside SIM card tray (shine light to see)</li>
              <li><strong>Normal color:</strong> White or silver</li>
              <li><strong>Water exposed:</strong> Red or pink</li>
            </ul>
            <p className="text-muted-foreground mb-6">Red LCI means Apple won't cover under warranty, but we can still repair!</p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-12 rounded">
              <h3 className="text-2xl font-bold mb-3 text-foreground">iPhone Got Wet? Bring It to Us NOW</h3>
              <p className="text-muted-foreground mb-4">Same-day water damage cleaning at Tech Medics Macon. Free diagnostics, honest assessment.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+14782596371" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center">Emergency: (478) 259-6371</a>
                <Link to="/macon/contact" className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-center">Get Directions</Link>
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

export default WaterDamagedIPhone;
