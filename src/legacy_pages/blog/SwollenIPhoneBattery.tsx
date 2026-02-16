import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "react-router-dom";

const SwollenIPhoneBattery = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Swollen iPhone Battery? Here's What to Do in Macon GA [2025]",
    "description": "Swollen iPhone battery is dangerous. Learn warning signs and get emergency battery replacement in Macon GA. Same-day service at Tech Medics.",
    "author": { "@id": "https://techmedicsmacon.com/#business" },
    "publisher": { "@id": "https://techmedicsmacon.com/#business" },
    "datePublished": "2025-01-18",
    "dateModified": "2025-01-18"
  };

  return (
    <>
      <Helmet>
        <title>Swollen iPhone Battery Replacement Macon GA | Emergency Service 2025</title>
        <meta name="description" content="Swollen iPhone battery is a fire hazard. Get emergency replacement in Macon GA today. Same-day service. Tech Medics 3742 Eisenhower Pkwy. (478) 259-6371." />
        <meta name="keywords" content="swollen iPhone battery Macon, iPhone battery replacement emergency, bulging iPhone battery Macon GA, iPhone battery fire hazard" />
        <link rel="canonical" href="https://techmedicsmacon.com/blog/swollen-iphone-battery-replacement-macon" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <LocalBusinessSchema 
        pageName="Swollen iPhone Battery Emergency" 
        pageDescription="Emergency swollen iPhone battery replacement in Macon GA" 
        serviceType="iPhone Battery Replacement" 
      />
      <Navigation />

      <article className="min-h-screen bg-background">
        <header className="py-16 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="text-primary hover:underline mb-4 inline-block">← Back to Blog</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Swollen iPhone Battery? Don't Wait - Here's What to Do</h1>
            <p className="text-xl text-muted-foreground">Swollen batteries are fire hazards requiring immediate professional attention</p>
            <div className="mt-4 text-sm text-muted-foreground">Published January 18, 2025 | 5 min read</div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <section className="prose prose-lg max-w-none">
            <div className="bg-red-500/10 border-l-4 border-red-500 p-6 my-8 rounded">
              <p className="text-foreground font-bold mb-2">⚠️ SAFETY WARNING</p>
              <p className="text-muted-foreground">A swollen iPhone battery is a fire and explosion hazard. DO NOT charge it, use it, or attempt to fix it yourself. Bring it to a professional immediately.</p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">What Is a Swollen iPhone Battery?</h2>
            <p className="text-muted-foreground mb-6">iPhone batteries are lithium-ion cells that can swell when they degrade. The battery expands with gas, causing visible bulging. This is a chemical reaction indicating battery failure and potential fire risk.</p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Warning Signs of Swollen Battery</h2>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Screen separating from frame</strong> - Gap between screen and body</li>
              <li><strong>iPhone case won't close</strong> - Phone is thicker than before</li>
              <li><strong>Screen popping up</strong> - Screen lifts at corners</li>
              <li><strong>Back panel bulging</strong> - Visible bump on back of iPhone</li>
              <li><strong>Can't lay flat</strong> - iPhone rocks when placed on table</li>
              <li><strong>Hissing sound</strong> - Battery releasing gas (STOP USING IMMEDIATELY)</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">What Causes iPhone Batteries to Swell?</h2>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Age:</strong> Batteries over 2-3 years old are prone to swelling</li>
              <li><strong>Overcharging:</strong> Leaving iPhone plugged in 24/7</li>
              <li><strong>Heat exposure:</strong> Leaving iPhone in hot cars (common in Macon summers)</li>
              <li><strong>Physical damage:</strong> Drops or impacts damaging battery</li>
              <li><strong>Manufacturing defects:</strong> Rare but can affect newer iPhones</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">What NOT to Do</h2>
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 my-8">
              <ul className="space-y-3 text-muted-foreground">
                <li>❌ <strong>Do NOT charge it</strong> - Charging increases fire risk</li>
                <li>❌ <strong>Do NOT use it</strong> - Turn it off immediately</li>
                <li>❌ <strong>Do NOT puncture battery</strong> - Can cause instant fire</li>
                <li>❌ <strong>Do NOT try DIY repair</strong> - Extremely dangerous</li>
                <li>❌ <strong>Do NOT mail it</strong> - Airlines ban swollen batteries</li>
                <li>❌ <strong>Do NOT put in freezer</strong> - Can cause battery rupture</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">What TO Do: Emergency Steps</h2>
            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded">
              <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                <li><strong>Power off iPhone immediately</strong> - Hold power + volume down for 5 seconds</li>
                <li><strong>Don't charge</strong> - Unplug if connected</li>
                <li><strong>Keep away from flammable materials</strong> - Place on non-flammable surface</li>
                <li><strong>Don't store in pocket/bag</strong> - Risk of puncture</li>
                <li><strong>Bring to professional TODAY</strong> - Same-day replacement available in Macon</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Emergency Battery Replacement in Macon</h2>
            <p className="text-muted-foreground mb-6">Tech Medics offers same-day emergency swollen battery replacement at 3742 Eisenhower Parkway:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Call ahead for priority service:</strong> (478) 259-6371</li>
              <li><strong>Repair time:</strong> 30-45 minutes</li>
              <li><strong>Safe disposal:</strong> We properly dispose of hazardous battery</li>
              <li><strong>Full diagnostic:</strong> Check for any damage from swelling</li>
              <li><strong>Warranty included:</strong> New battery guaranteed</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Cost of Swollen Battery Replacement</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-secondary/20">
                    <th className="border border-border p-3 text-left">iPhone Model</th>
                    <th className="border border-border p-3 text-left">Battery Replacement</th>
                    <th className="border border-border p-3 text-left">If Screen Damaged</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border p-3">iPhone 15/14/13</td><td className="border border-border p-3">$79-$99</td><td className="border border-border p-3">+$179-$229</td></tr>
                  <tr className="bg-secondary/10"><td className="border border-border p-3">iPhone 12/11/XR</td><td className="border border-border p-3">$59-$69</td><td className="border border-border p-3">+$129-$179</td></tr>
                  <tr><td className="border border-border p-3">iPhone X/8/7</td><td className="border border-border p-3">$49-$59</td><td className="border border-border p-3">+$99-$149</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mb-6"><em>Note: If swelling damaged your screen, we can repair both same-day.</em></p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Can Swollen Batteries Be Prevented?</h2>
            <p className="text-muted-foreground mb-4">Yes! Follow these tips to extend battery life and prevent swelling:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Don't overcharge:</strong> Unplug at 100% or use optimized charging</li>
              <li><strong>Avoid extreme heat:</strong> Don't leave iPhone in hot cars (especially Macon summers)</li>
              <li><strong>Use quality chargers:</strong> Avoid cheap gas station cables</li>
              <li><strong>Replace aging batteries:</strong> Get battery replaced at 80% health</li>
              <li><strong>Avoid deep discharges:</strong> Charge before hitting 20%</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Real Cases in Macon</h2>
            <div className="bg-secondary/20 rounded-lg p-6 my-8">
              <p className="text-muted-foreground mb-4">Last month alone, we replaced 14 swollen batteries at our Macon location. Common scenarios:</p>
              <ul className="text-muted-foreground space-y-2">
                <li>• <strong>iPhone 11:</strong> Left in car during 95°F summer day - battery swelled within hours</li>
                <li>• <strong>iPhone X:</strong> 4 years old, kept plugged in overnight every night - gradual swelling</li>
                <li>• <strong>iPhone 8:</strong> Dropped multiple times - impact damaged battery causing swelling</li>
              </ul>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-12 rounded">
              <h3 className="text-2xl font-bold mb-3 text-foreground">Emergency Swollen Battery Service</h3>
              <p className="text-muted-foreground mb-4">Have a swollen iPhone battery? Don't wait. Call ahead for emergency priority service. We'll get you in today.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+14782596371" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center">Emergency: (478) 259-6371</a>
                <Link to="/macon/iphone" className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-center">iPhone Battery Services</Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Frequently Asked Questions</h2>
            
            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Can a swollen battery explode?</h3>
            <p className="text-muted-foreground mb-6">Yes, though rare. Swollen batteries can catch fire or explode if punctured, overcharged, or exposed to high heat. This is why immediate replacement is critical.</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Will Apple replace swollen batteries for free?</h3>
            <p className="text-muted-foreground mb-6">Only if iPhone is under warranty and swelling wasn't caused by damage. Otherwise, Apple charges $89-$99 and requires 5-7 day mail-in service. We offer same-day replacement for similar or lower prices.</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Is it safe to drive with swollen iPhone battery?</h3>
            <p className="text-muted-foreground mb-6">Yes, but power it off and don't charge it. Don't leave it in hot car. Bring it to Tech Medics at 3742 Eisenhower Parkway today for safe replacement.</p>
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

export default SwollenIPhoneBattery;
