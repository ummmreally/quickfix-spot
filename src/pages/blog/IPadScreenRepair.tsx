import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "react-router-dom";

const IPadScreenRepair = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "iPad Screen Replacement & Repair Services in Macon GA",
    "description": "Professional iPad screen repair and charging port fixes in Macon. Same-day service, warranty included, all iPad models supported.",
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
    "datePublished": "2025-01-08",
    "dateModified": "2025-01-08"
  };

  return (
    <>
      <Helmet>
        <title>iPad Screen Repair Macon GA | All Models | Same-Day Service</title>
        <meta name="description" content="iPad screen replacement in Macon GA from $99. Cracked screen, charging port, battery issues. All iPad models: Pro, Air, Mini. Same-day repair available." />
        <meta name="keywords" content="iPad screen repair Macon GA, iPad screen replacement, cracked iPad screen, iPad won't charge, iPad battery replacement, iPad repair near me" />
        <link rel="canonical" href="https://techmedicsmacon.com/blog/ipad-screen-repair-macon" />
        
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <LocalBusinessSchema 
        pageName="iPad Screen Repair in Macon GA"
        pageDescription="Professional iPad screen repair service in Macon GA with same-day turnaround"
        serviceType="iPad Screen Repair"
      />

      <Navigation />

      <article className="min-h-screen bg-background">
        <header className="py-16 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="text-primary hover:underline mb-4 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              iPad Screen Replacement & Repair Services in Macon GA
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional iPad screen repair, charging port fixes, and battery replacement in Macon GA
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Published January 8, 2025 | 8 min read
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">
              iPad Screen Repair Cost in Macon GA
            </h2>
            <p className="text-muted-foreground mb-6">
              Cracked your iPad screen? We offer affordable same-day iPad screen replacement for all models. Here's our pricing breakdown:
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">iPad (Standard Models)</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>iPad 10th Gen (2022):</strong> $199</li>
              <li><strong>iPad 9th Gen (2021):</strong> $179</li>
              <li><strong>iPad 8th Gen (2020):</strong> $169</li>
              <li><strong>iPad 7th Gen (2019) & older:</strong> $149-159</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">iPad Air Models</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>iPad Air 5 (2022, M1):</strong> $249</li>
              <li><strong>iPad Air 4 (2020):</strong> $229</li>
              <li><strong>iPad Air 3 (2019):</strong> $199</li>
              <li><strong>iPad Air 2 & 1:</strong> $149-179</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">iPad Pro Models</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>iPad Pro 12.9" (M2, 2022):</strong> $449</li>
              <li><strong>iPad Pro 11" (M2, 2022):</strong> $349</li>
              <li><strong>iPad Pro 12.9" (M1, 2021):</strong> $399</li>
              <li><strong>iPad Pro 11" (M1, 2021):</strong> $299</li>
              <li><strong>Older iPad Pro models:</strong> $249-349</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">iPad Mini Models</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>iPad Mini 6 (2021):</strong> $199</li>
              <li><strong>iPad Mini 5 (2019):</strong> $179</li>
              <li><strong>iPad Mini 4 & older:</strong> $149-169</li>
            </ul>

            <p className="text-muted-foreground mb-6">
              All screen repairs include lifetime warranty against defects and same-day service (most repairs completed in 1-2 hours).
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Common iPad Repair Issues We Fix
            </h2>
            <p className="text-muted-foreground mb-6">
              Beyond screen replacement, we handle all common iPad problems:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Cracked or shattered screen:</strong> Glass replacement with LCD intact or full display replacement</li>
              <li><strong>iPad won't charge:</strong> Charging port cleaning, repair, or replacement ($69-99)</li>
              <li><strong>Battery draining fast:</strong> Battery replacement to restore battery life ($89-149)</li>
              <li><strong>iPad won't turn on:</strong> Diagnostic and repair for power issues ($Free diagnostic)</li>
              <li><strong>Home button not working:</strong> Home button repair or Touch ID replacement ($79-129)</li>
              <li><strong>Back camera or front camera issues:</strong> Camera replacement ($89-149)</li>
              <li><strong>Speaker or microphone problems:</strong> Audio component replacement ($79-129)</li>
              <li><strong>Water damage:</strong> Liquid damage cleaning and repair ($149-299)</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              iPad Won't Charge: Common Causes & Fixes
            </h2>
            <p className="text-muted-foreground mb-6">
              "My iPad won't charge" is one of the most common problems we see. Here's how to diagnose the issue:
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Step 1: Check the Basics</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Try a different cable:</strong> Lightning or USB-C cables wear out and stop working</li>
              <li><strong>Test different power adapter:</strong> Wall chargers can fail over time</li>
              <li><strong>Check different outlet:</strong> Rule out electrical outlet issues</li>
              <li><strong>Inspect charging port:</strong> Look for lint, debris, or bent pins inside port</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Step 2: Clean the Charging Port</h3>
            <p className="text-muted-foreground mb-6">
              Often, charging issues are caused by lint and debris packed into the Lightning or USB-C port. Here's what to do:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-3">
              <li>Turn off your iPad completely</li>
              <li>Use a wooden toothpick (NOT metal) to gently remove lint from the charging port</li>
              <li>Blow compressed air into the port to clear remaining debris</li>
              <li>Try charging again</li>
            </ol>
            <p className="text-muted-foreground mb-6">
              If this doesn't work, the charging port may be damaged and need professional repair ($69-99).
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Step 3: Force Restart Your iPad</h3>
            <p className="text-muted-foreground mb-6">
              Sometimes, iOS software crashes prevent charging. Try a force restart:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>iPad with Face ID:</strong> Press volume up, then volume down, then hold power button until Apple logo appears</li>
              <li><strong>iPad with Home button:</strong> Hold Home + Power buttons simultaneously for 10 seconds until Apple logo appears</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">When to Visit Tech Medics</h3>
            <p className="text-muted-foreground mb-6">
              If none of the above fixes work, bring your iPad to our Macon shop for free diagnostics. Common professional repairs include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Charging port replacement:</strong> $69-99 (takes 1-2 hours)</li>
              <li><strong>Battery replacement:</strong> $89-149 if battery is completely dead</li>
              <li><strong>Logic board repair:</strong> $149-299 for more complex issues</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              iPad Battery Replacement in Macon GA
            </h2>
            <p className="text-muted-foreground mb-6">
              iPad batteries typically last 3-5 years before showing signs of degradation. You should consider battery replacement if:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>iPad shuts down unexpectedly at 20-40% battery</li>
              <li>Battery drains in 2-3 hours of light use (should last 8-10 hours)</li>
              <li>iPad only works when plugged in</li>
              <li>Battery is swollen (screen separating from frame)</li>
              <li>iPad gets extremely hot during use or charging</li>
            </ul>
            
            <p className="text-muted-foreground mb-4">
              Battery replacement pricing by model:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>iPad (standard models):</strong> $89-109</li>
              <li><strong>iPad Air models:</strong> $99-129</li>
              <li><strong>iPad Pro models:</strong> $129-149</li>
              <li><strong>iPad Mini models:</strong> $89-109</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              All battery replacements include 1-year warranty and same-day service (typically 1-2 hours).
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              iPad Screen Repair vs. Replacement: What's the Difference?
            </h2>
            <p className="text-muted-foreground mb-6">
              When your iPad screen is damaged, we have two repair options depending on the extent of damage:
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Glass-Only Repair (Digitizer Replacement)</h3>
            <p className="text-muted-foreground mb-6">
              If only the glass (digitizer) is cracked but the LCD display underneath still shows a perfect picture, we can replace just the glass:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Cost:</strong> 20-30% cheaper than full screen replacement</li>
              <li><strong>Time:</strong> 2-3 hours</li>
              <li><strong>When it works:</strong> Cracked glass but display shows normally, touch still responsive in most areas</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Full Screen Replacement (LCD + Digitizer)</h3>
            <p className="text-muted-foreground mb-6">
              If the LCD display is damaged (lines, discoloration, black spots, or completely black screen), you need full screen replacement:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Cost:</strong> See pricing section above by model</li>
              <li><strong>Time:</strong> 1-2 hours</li>
              <li><strong>When necessary:</strong> Display not working, severe impact damage, or water damage to screen</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              We'll inspect your iPad during free diagnostics and recommend the most cost-effective repair option.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              iPad Pro Screen Repair: Why It's More Expensive
            </h2>
            <p className="text-muted-foreground mb-6">
              iPad Pro screens cost significantly more than standard iPad screens. Here's why:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>ProMotion technology:</strong> 120Hz refresh rate displays cost more to manufacture</li>
              <li><strong>Larger screen sizes:</strong> 11" and 12.9" displays require more materials</li>
              <li><strong>Laminated displays:</strong> iPad Pro uses fully laminated screens (glass fused to LCD) for better image quality</li>
              <li><strong>True Tone & P3 color:</strong> Advanced display technology adds to replacement cost</li>
              <li><strong>Complexity:</strong> iPad Pro is more difficult to repair due to thin design and adhesive</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Despite higher costs, our iPad Pro repairs are still 40-50% cheaper than Apple Store pricing. Apple charges $649-$799 for out-of-warranty iPad Pro screen replacement.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Same-Day iPad Repair Near Mercer University
            </h2>
            <p className="text-muted-foreground mb-6">
              We're conveniently located near Mercer University at 3742 Eisenhower Parkway, making us the go-to iPad repair shop for students, faculty, and Macon residents. Here's what makes us different:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Same-day service:</strong> Most repairs done in 1-2 hours</li>
              <li><strong>Walk-ins welcome:</strong> No appointment necessary</li>
              <li><strong>Free diagnostics:</strong> We'll test your iPad and provide upfront pricing</li>
              <li><strong>Student discounts:</strong> 10% off for Mercer students with valid ID</li>
              <li><strong>Lifetime warranty:</strong> Screen repairs covered for defects</li>
              <li><strong>All iPad models:</strong> From iPad 2 to latest iPad Pro</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Should You Repair or Replace Your iPad?
            </h2>
            <p className="text-muted-foreground mb-6">
              This is a common question. Here's our honest advice:
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Repair Makes Sense If:</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Your iPad is less than 5 years old</li>
              <li>Only the screen or battery needs repair (single issue)</li>
              <li>Repair cost is less than 50% of replacement cost</li>
              <li>iPad still runs the latest iPadOS smoothly</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Consider Replacement If:</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>iPad is 6+ years old and very slow</li>
              <li>Multiple issues (screen + battery + charging port + logic board)</li>
              <li>iPad no longer receives iPadOS updates</li>
              <li>Repair cost exceeds 60% of new iPad cost</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              We'll always provide honest advice about whether repair or replacement makes more financial sense. Our goal is to help you make the best decision, not just sell you a repair.
            </p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-12 rounded">
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                Get Your iPad Fixed Today
              </h3>
              <p className="text-muted-foreground mb-4">
                Visit Tech Medics Macon for same-day iPad repair. Free diagnostic and honest pricing. Walk-ins welcome!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+14782596371"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
                >
                  Call (478) 259-6371
                </a>
                <Link 
                  to="/macon/ipad"
                  className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-center"
                >
                  View iPad Services
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

export default IPadScreenRepair;
