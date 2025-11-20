import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "react-router-dom";

const MercerUniversityIPhoneRepair = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "iPhone Repair Near Mercer University | Student Discounts Available",
    "description": "Affordable iPhone repair for Mercer University students in Macon GA. Student discounts, fast service, walking distance from campus.",
    "author": { "@type": "Organization", "name": "Tech Medics Macon" },
    "publisher": { 
      "@type": "Organization", 
      "name": "Tech Medics Macon", 
      "logo": { "@type": "ImageObject", "url": "https://techmedicsmacon.com/logo.png" } 
    },
    "datePublished": "2025-01-17",
    "dateModified": "2025-01-17"
  };

  return (
    <>
      <Helmet>
        <title>iPhone Repair Near Mercer University Macon | Student Discounts 2025</title>
        <meta name="description" content="Fast iPhone repair near Mercer University campus. Student discounts on screen repair & batteries. 10 min from Mercer. Walk-ins welcome. Tech Medics (478) 259-6371." />
        <meta name="keywords" content="iPhone repair Mercer University, iPhone repair Macon student discount, Mercer iPhone screen repair, college iPhone repair Macon" />
        <link rel="canonical" href="https://techmedicsmacon.com/blog/iphone-repair-mercer-university-student-discount" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <LocalBusinessSchema 
        pageName="iPhone Repair Near Mercer University" 
        pageDescription="Affordable iPhone repair for Mercer students with student discounts" 
        serviceType="iPhone Repair" 
      />
      <Navigation />

      <article className="min-h-screen bg-background">
        <header className="py-16 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="text-primary hover:underline mb-4 inline-block">← Back to Blog</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">iPhone Repair Near Mercer University | Student Discounts</h1>
            <p className="text-xl text-muted-foreground">Affordable iPhone repairs for Mercer students - just 10 minutes from campus</p>
            <div className="mt-4 text-sm text-muted-foreground">Published January 17, 2025 | 5 min read</div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <section className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Broke your iPhone screen before midterms? Running on a dying battery through finals week? Tech Medics Macon offers fast, affordable iPhone repair specifically for Mercer University students.</p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Student Discount: Show Your Mercer ID</h2>
            <p className="text-muted-foreground mb-6"><strong>Get 15% off all iPhone repairs</strong> with your valid Mercer University student ID. Applies to:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>iPhone screen repair (all models)</li>
              <li>Battery replacement</li>
              <li>Charging port repair</li>
              <li>Camera & speaker repairs</li>
              <li>Water damage recovery</li>
            </ul>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded">
              <p className="text-foreground font-semibold mb-2">Example Student Pricing:</p>
              <ul className="text-muted-foreground space-y-1">
                <li>iPhone 13 screen: <span className="line-through">$139.99</span> → <strong>$119</strong> with student ID</li>
                <li>iPhone 12 battery: <span className="line-through">$79.99</span> → <strong>$68</strong> with student ID</li>
                <li>iPhone 11 screen: <span className="line-through">$79.99</span> → <strong>$68</strong> with student ID</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Location: 10 Minutes From Mercer Campus</h2>
            <p className="text-muted-foreground mb-4"><strong>Address:</strong> 3742 Eisenhower Parkway, Macon, GA 31206</p>
            <p className="text-muted-foreground mb-6">From Mercer University:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>By car:</strong> 10-minute drive via Coleman Ave and Eisenhower Pkwy</li>
              <li><strong>Public transit:</strong> Take Macon Transit Route 5 (Eisenhower line)</li>
              <li><strong>Uber/Lyft:</strong> $8-12 ride, about 3.2 miles from main campus</li>
            </ul>
            <p className="text-muted-foreground mb-6">Drop off your iPhone between classes and pick it up same day. Most repairs done in 30 minutes.</p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Why Mercer Students Choose Tech Medics</h2>
            
            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">1. No Appointment Needed</h3>
            <p className="text-muted-foreground mb-6">Your schedule is packed with classes, studying, and campus activities. We get it. Walk in anytime during business hours - no need to schedule days in advance like Apple Store requires.</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">2. Same-Day Repairs</h3>
            <p className="text-muted-foreground mb-6">Can't afford to be without your iPhone for a week. We complete most repairs in 20-30 minutes while you wait, or drop it off and grab it after your next class.</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">3. Way Cheaper Than Apple</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-secondary/20">
                    <th className="border border-border p-3 text-left">Repair</th>
                    <th className="border border-border p-3 text-left">Apple Store</th>
                    <th className="border border-border p-3 text-left">Tech Medics (Student)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border p-3">iPhone 14 screen</td><td className="border border-border p-3">$329</td><td className="border border-border p-3">$110</td></tr>
                  <tr className="bg-secondary/10"><td className="border border-border p-3">iPhone 13 screen</td><td className="border border-border p-3">$279</td><td className="border border-border p-3">$119</td></tr>
                  <tr><td className="border border-border p-3">iPhone 12 battery</td><td className="border border-border p-3">$89</td><td className="border border-border p-3">$68</td></tr>
                  <tr className="bg-secondary/10"><td className="border border-border p-3">iPhone 11 screen</td><td className="border border-border p-3">$199</td><td className="border border-border p-3">$68</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">4. Payment Plans Available</h3>
            <p className="text-muted-foreground mb-6">We know student budgets are tight. For repairs over $150, we offer payment plans - pay half today, half next month. No interest, no credit check required.</p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Most Common iPhone Issues for College Students</h2>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Cracked Screens</h3>
            <p className="text-muted-foreground mb-6">Walking across campus, dropping your iPhone on brick pathways or in parking lots. We fix cracked iPhone screens daily for Mercer students. From hairline cracks to completely shattered displays.</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Dead Batteries</h3>
            <p className="text-muted-foreground mb-6">Long days of classes, using GPS around campus, streaming lectures. iPhone batteries take a beating. If yours dies before lunch, battery replacement takes 20 minutes and costs $59-$99 (with student discount).</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Water Damage</h3>
            <p className="text-muted-foreground mb-6">Spilled drinks at Starbucks, caught in rain walking to class, pool parties at off-campus housing. We specialize in water damage recovery. Bring it in immediately - the faster we diagnose it, the better chance of saving your iPhone.</p>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Charging Port Issues</h3>
            <p className="text-muted-foreground mb-6">Carrying your iPhone in pockets and backpacks collects lint in the charging port. We clean or replace charging ports in 15 minutes for $29-$79.</p>

            <div className="bg-secondary/20 rounded-lg p-8 my-12">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Hours: Perfect for Student Schedules</h3>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Monday-Friday:</strong> 10:00 AM - 6:00 PM</li>
                <li><strong>Saturday:</strong> 10:00 AM - 5:00 PM</li>
                <li><strong>Sunday:</strong> Closed</li>
              </ul>
              <p className="text-muted-foreground mt-4">Drop off before your first class, pick up after your last. Or wait while we repair - we have WiFi and comfortable seating.</p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">What Mercer Students Are Saying</h2>
            <div className="space-y-6 my-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground mb-2">"Cracked my iPhone screen the week before finals. They fixed it in 25 minutes and gave me a student discount. Saved me so much stress!"</p>
                <p className="text-sm text-muted-foreground">- Emily R., Mercer Junior</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground mb-2">"Way cheaper than Apple Store and way faster. Plus the student discount is clutch when you're on a college budget."</p>
                <p className="text-sm text-muted-foreground">- Marcus T., Mercer Sophomore</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground mb-2">"My iPhone battery died halfway through every day. Got it replaced here between classes. Battery lasts all day now and it only cost $59 with my student ID."</p>
                <p className="text-sm text-muted-foreground">- Sarah K., Mercer Senior</p>
              </div>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-12 rounded">
              <h3 className="text-2xl font-bold mb-3 text-foreground">Get Your iPhone Fixed Today</h3>
              <p className="text-muted-foreground mb-4">Walk in with your Mercer student ID for 15% off all repairs. Most iPhone repairs done same-day.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+14782596371" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center">Call (478) 259-6371</a>
                <a href="https://www.google.com/maps/dir/Mercer+University,+Macon,+GA/3742+Eisenhower+Pkwy,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-center">Get Directions from Mercer</a>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Related Articles for Students</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <Link to="/blog/iphone-battery-replacement-signs-2025" className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-foreground mb-2">Signs Your iPhone Battery Needs Replacement</h4>
                <p className="text-sm text-muted-foreground">Is your battery dying before classes end?</p>
              </Link>
              <Link to="/blog/water-damaged-iphone-repair" className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-foreground mb-2">What to Do If You Drop Your iPhone in Water</h4>
                <p className="text-sm text-muted-foreground">Emergency water damage tips</p>
              </Link>
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

export default MercerUniversityIPhoneRepair;
