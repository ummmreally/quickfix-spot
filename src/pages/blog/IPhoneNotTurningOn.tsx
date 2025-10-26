import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "react-router-dom";

const IPhoneNotTurningOn = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "iPhone Not Turning On? Here's What to Do (Macon GA)",
    "description": "Troubleshooting guide for iPhones that won't turn on. Learn common causes, DIY fixes, and when to visit our Macon repair shop.",
    "author": { "@type": "Organization", "name": "Tech Medics Macon" },
    "publisher": { "@type": "Organization", "name": "Tech Medics Macon", "logo": { "@type": "ImageObject", "url": "https://techmedicsmacon.com/logo.png" } },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01"
  };

  return (
    <>
      <Helmet>
        <title>iPhone Not Turning On? Troubleshooting Guide | Tech Medics Macon</title>
        <meta name="description" content="iPhone won't turn on or stuck on black screen? Learn why and how to fix it. Free diagnostics in Macon GA. Dead battery, water damage, and more solutions." />
        <meta name="keywords" content="iPhone not turning on, iPhone black screen, iPhone won't power on, dead iPhone fix, iPhone frozen black screen" />
        <link rel="canonical" href="https://techmedicsmacon.com/blog/iphone-not-turning-on-fix" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <LocalBusinessSchema pageName="iPhone Not Turning On Troubleshooting" pageDescription="Troubleshooting guide for iPhone power issues" serviceType="iPhone Repair Services" />
      <Navigation />

      <article className="min-h-screen bg-background">
        <header className="py-16 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="text-primary hover:underline mb-4 inline-block">← Back to Blog</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">iPhone Not Turning On? Here's What to Do</h1>
            <p className="text-xl text-muted-foreground">Complete troubleshooting guide for iPhones that won't power on or are stuck on black screen</p>
            <div className="mt-4 text-sm text-muted-foreground">Published January 1, 2025 | 7 min read</div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">Step 1: Force Restart Your iPhone</h2>
            <p className="text-muted-foreground mb-6">Before panicking, try a force restart. This fixes 60% of "iPhone won't turn on" issues:</p>
            
            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">iPhone 8 and Newer (Including 15, 14, 13, 12, 11, X, XR, XS)</h3>
            <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Press and quickly release Volume Up button</li>
              <li>Press and quickly release Volume Down button</li>
              <li>Press and hold Side button until Apple logo appears (10-15 seconds)</li>
            </ol>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">iPhone 7 and 7 Plus</h3>
            <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Press and hold Volume Down + Side button simultaneously</li>
              <li>Keep holding for 10-15 seconds until Apple logo appears</li>
            </ol>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">iPhone 6s and Older</h3>
            <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Press and hold Home + Power button simultaneously</li>
              <li>Keep holding for 10-15 seconds until Apple logo appears</li>
            </ol>

            <p className="text-muted-foreground mb-6"><strong>If this works:</strong> Your iPhone had a software crash. No repair needed!</p>
            <p className="text-muted-foreground mb-6"><strong>If it doesn't work:</strong> Continue to Step 2.</p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Step 2: Charge Your iPhone</h2>
            <p className="text-muted-foreground mb-6">Dead battery is the #1 cause of iPhones not turning on. But here's the catch: completely dead iPhones may not show charging indicator for 15-30 minutes.</p>
            <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-3">
              <li><strong>Use original Apple charger or certified alternative:</strong> Cheap chargers may not provide enough power</li>
              <li><strong>Plug directly into wall outlet:</strong> Not computer USB (too weak)</li>
              <li><strong>Let it charge for 30 minutes:</strong> Even if you see no charging symbol</li>
              <li><strong>Try force restart again:</strong> After 30 minutes of charging</li>
            </ol>

            <p className="text-muted-foreground mb-6"><strong>Still nothing?</strong> Your charging port may be blocked or damaged. Proceed to Step 3.</p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Step 3: Check Charging Port</h2>
            <p className="text-muted-foreground mb-6">Lint and debris often pack into Lightning ports, preventing charging:</p>
            <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-3">
              <li><strong>Shine flashlight into charging port:</strong> Look for lint, dust, or debris</li>
              <li><strong>Gently clean with wooden toothpick:</strong> DO NOT use metal (risks short circuit)</li>
              <li><strong>Blow out with compressed air:</strong> Clear remaining particles</li>
              <li><strong>Try charging again:</strong> Use different cable if available</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Common Causes of iPhone Not Turning On</h2>
            <p className="text-muted-foreground mb-6">If basic troubleshooting fails, your iPhone likely has one of these hardware issues:</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">1. Dead/Faulty Battery (Most Common)</h3>
            <p className="text-muted-foreground mb-4"><strong>Symptoms:</strong></p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>iPhone worked fine, then suddenly died</li>
              <li>Won't turn on even after charging</li>
              <li>Previously shut down at 20-30% battery</li>
            </ul>
            <p className="text-muted-foreground mb-6"><strong>Solution:</strong> Battery replacement ($49-89, takes 30-45 minutes)</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">2. Damaged Charging Port</h3>
            <p className="text-muted-foreground mb-4"><strong>Symptoms:</strong></p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>Cable doesn't click into place</li>
              <li>Must hold cable at angle to charge</li>
              <li>Intermittent charging connection</li>
            </ul>
            <p className="text-muted-foreground mb-6"><strong>Solution:</strong> Charging port replacement ($69-99, takes 45-60 minutes)</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">3. Water/Liquid Damage</h3>
            <p className="text-muted-foreground mb-4"><strong>Symptoms:</strong></p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>iPhone got wet recently (even "water resistant" models)</li>
              <li>Stopped working after liquid exposure</li>
              <li>Corrosion visible in ports</li>
            </ul>
            <p className="text-muted-foreground mb-6"><strong>Solution:</strong> Liquid damage cleaning and repair ($149-299, may take 1-2 days)</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">4. Display Issues (iPhone Actually On)</h3>
            <p className="text-muted-foreground mb-4"><strong>Symptoms:</strong></p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>Screen is black but you hear notifications</li>
              <li>Siri responds when you press home/side button</li>
              <li>Phone vibrates but nothing on screen</li>
            </ul>
            <p className="text-muted-foreground mb-6"><strong>Solution:</strong> Screen replacement ($149-349 depending on model)</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">5. Logic Board Failure</h3>
            <p className="text-muted-foreground mb-4"><strong>Symptoms:</strong></p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>iPhone completely unresponsive</li>
              <li>No heat, vibration, or signs of life</li>
              <li>Happened after drop or impact</li>
            </ul>
            <p className="text-muted-foreground mb-6"><strong>Solution:</strong> Logic board repair ($149-399, complex repair requiring micro-soldering)</p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">When to Visit Tech Medics Macon</h2>
            <p className="text-muted-foreground mb-6">If DIY troubleshooting doesn't work, bring your iPhone to our shop for <strong>FREE diagnostics</strong>. We'll:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Test battery, charging port, and logic board</li>
              <li>Provide honest assessment of issue and repair cost</li>
              <li>Offer same-day repair for most issues</li>
              <li>Give you options (repair vs replace) with our recommendation</li>
            </ul>
            <p className="text-muted-foreground mb-6">Walk-ins welcome Monday-Saturday. Located at 3742 Eisenhower Parkway, Macon GA 31206.</p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Prevention Tips</h2>
            <p className="text-muted-foreground mb-6">Reduce risk of your iPhone not turning on:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Replace battery when health drops below 80%</li>
              <li>Clean charging port monthly</li>
              <li>Use quality charging cables and adapters</li>
              <li>Avoid extreme temperatures</li>
              <li>Update iOS regularly for bug fixes</li>
            </ul>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-12 rounded">
              <h3 className="text-2xl font-bold mb-3 text-foreground">iPhone Won't Turn On? We Can Help</h3>
              <p className="text-muted-foreground mb-4">Free diagnostics at Tech Medics Macon. We'll identify the problem and provide honest repair options.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+14782596371" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center">Call (478) 259-6371</a>
                <Link to="/macon/iphone" className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-center">iPhone Repair Services</Link>
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

export default IPhoneNotTurningOn;
