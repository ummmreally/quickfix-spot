import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "react-router-dom";

const IPhoneRepairNearMe = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "iPhone Repair Near Me in Macon GA: Fast, Affordable & Trusted",
    "description": "Looking for iPhone repair near me in Macon GA? Tech Medics offers same-day screen repair, battery replacement, and more.",
    "author": { "@id": "https://techmedicsmacon.com/#business" },
    "publisher": { "@id": "https://techmedicsmacon.com/#business" },
    "datePublished": "2025-01-18",
    "dateModified": "2025-01-18"
  };

  return (
    <>
      <Helmet>
        <title>iPhone Repair Near Me Macon GA | Same-Day Service | Tech Medics</title>
        <meta name="description" content="Searching 'iPhone repair near me'? Tech Medics in Macon GA offers same-day iPhone screen repair, battery replacement, charging port fixes. Near Mercer University." />
        <meta name="keywords" content="iPhone repair near me, iPhone repair Macon GA, iPhone screen repair near me, phone repair near me, cell phone repair Macon" />
        <link rel="canonical" href="https://techmedicsmacon.com/blog/iphone-repair-near-me-macon" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <LocalBusinessSchema pageName="iPhone Repair Near Me in Macon GA" pageDescription="Local iPhone repair service in Macon GA" serviceType="iPhone Repair Services" />
      <Navigation />

      <article className="min-h-screen bg-background">
        <header className="py-16 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="text-primary hover:underline mb-4 inline-block">← Back to Blog</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">iPhone Repair Near Me in Macon GA</h1>
            <p className="text-xl text-muted-foreground">Fast, affordable iPhone repair. Same-day service, walk-ins welcome.</p>
            <div className="mt-4 text-sm text-muted-foreground">Published January 18, 2025 | 9 min read</div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">Why Choose Local iPhone Repair?</h2>
            <p className="text-muted-foreground mb-6">When searching "iPhone repair near me" in Macon GA, local repair offers significant advantages:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Same-day service:</strong> Most repairs in 30-60 minutes</li>
              <li><strong>No appointments:</strong> Walk in anytime</li>
              <li><strong>30-50% cheaper:</strong> Save vs Apple Store pricing</li>
              <li><strong>Convenient:</strong> Near Mercer University</li>
              <li><strong>Personal service:</strong> Work with your technician</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Most Common iPhone Repairs</h2>
            <p className="text-muted-foreground mb-6">Here are the repairs we handle daily at Tech Medics Macon:</p>
            
            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">iPhone Screen Repair</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Cost: $149-$349 depending on model</li>
              <li>Time: 30-60 minutes</li>
              <li>Warranty: Lifetime against defects</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Battery Replacement</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Cost: $49-$89</li>
              <li>Time: 30-45 minutes</li>
              <li>Warranty: 1 year</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Charging Port Repair</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Cost: $69-$99</li>
              <li>Time: 45-60 minutes</li>
              <li>Warranty: 90 days</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">How to Find the Best iPhone Repair Near You</h2>
            <p className="text-muted-foreground mb-6">Not all repair shops are equal. Look for:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Google Reviews:</strong> 4.5+ stars with recent reviews</li>
              <li><strong>Warranty:</strong> Lifetime on screens, 1 year on batteries</li>
              <li><strong>Transparent pricing:</strong> Prices listed online</li>
              <li><strong>Experience:</strong> 5+ years in business</li>
              <li><strong>Free diagnostics:</strong> No hidden fees</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Tech Medics Location & Hours</h2>
            <p className="text-muted-foreground mb-4">We're located at <strong>3742 Eisenhower Parkway, Macon, GA 31206</strong></p>
            <p className="text-muted-foreground mb-4"><strong>Hours:</strong></p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Monday-Friday: 10am-6pm</li>
              <li>Saturday: 10am-5pm</li>
              <li>Sunday: Closed</li>
            </ul>
            <p className="text-muted-foreground mb-6">Easy to reach from Mercer University (5 min), Downtown Macon (10 min), Vineville (7 min).</p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">iPhone Repair Near Me: Pricing Comparison</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-secondary/20">
                    <th className="border border-border p-3 text-left">Repair</th>
                    <th className="border border-border p-3 text-left">Tech Medics</th>
                    <th className="border border-border p-3 text-left">Apple Store</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border p-3">iPhone 15 Screen</td><td className="border border-border p-3 font-semibold text-primary">$299</td><td className="border border-border p-3">$379</td></tr>
                  <tr className="bg-secondary/10"><td className="border border-border p-3">iPhone 14 Screen</td><td className="border border-border p-3 font-semibold text-primary">$249</td><td className="border border-border p-3">$329</td></tr>
                  <tr><td className="border border-border p-3">Battery</td><td className="border border-border p-3 font-semibold text-primary">$49-89</td><td className="border border-border p-3">$89-109</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-12 rounded">
              <h3 className="text-2xl font-bold mb-3 text-foreground">Visit Tech Medics Today</h3>
              <p className="text-muted-foreground mb-4">Same-day iPhone repair in Macon GA. Walk-ins welcome, free diagnostics.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+14782596371" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center">Call (478) 259-6371</a>
                <Link to="/macon/iphone" className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-center">View Services</Link>
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

export default IPhoneRepairNearMe;
