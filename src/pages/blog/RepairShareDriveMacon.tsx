import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "react-router-dom";

const RepairShareDriveMacon = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Repair & Share Drive in Macon GA: Tech Medics Joins the Cause",
    "description": "Learn how Tech Medics Macon is supporting the Repair & Share Drive hosted by QuackedScreens.com. Donate devices, recycle responsibly, and give back to Bibb County.",
    "author": { "@id": "https://techmedicsmacon.com/#business" },
    "publisher": { "@id": "https://techmedicsmacon.com/#business" },
    "datePublished": "2025-10-22",
    "dateModified": "2025-10-22"
  };

  return (
    <>
      <Helmet>
        <title>Repair & Share Drive Macon GA | Tech Medics Supports QuackedScreens</title>
        <meta name="description" content="Join Tech Medics Macon at the Repair & Share Drive with QuackedScreens.com. Donate broken devices, get discounted repairs, and support families in need." />
        <meta name="keywords" content="repair and share drive, QuackedScreens Macon, device donation Macon GA, electronics recycling Macon, Tech Medics community" />
        <link rel="canonical" href="https://techmedicsmacon.com/blog/repair-share-drive-macon" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <LocalBusinessSchema
        pageName="Repair & Share Drive in Macon GA"
        pageDescription="Support the Repair & Share community device donation event with Tech Medics and QuackedScreens.com"
        serviceType="Community Electronics Repair"
      />

      <Navigation />

      <article className="min-h-screen bg-background">
        <header className="py-16 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="text-primary hover:underline mb-4 inline-block">← Back to Blog</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Repair & Share Drive in Macon GA: Tech Medics Joins the Cause</h1>
            <p className="text-xl text-muted-foreground">Give your unused tech a second life and support families across Bibb County this holiday season.</p>
            <div className="mt-4 text-sm text-muted-foreground">Published October 22, 2025 | 8 min read</div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <section className="prose prose-lg max-w-none">
            <p className="text-muted-foreground">QuackedScreens.com has launched its annual <strong>Repair & Share Drive</strong>, a community initiative that collects broken or gently used phones, tablets, and laptops for repair and redistribution to local families. Tech Medics Macon is proud to participate again in 2025 by offering diagnostic support, discounted parts, and drop-off assistance so every donated device reaches a student, senior, or veteran who needs it.</p>

            <h2 className="text-3xl font-bold text-foreground">Event Details</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Drop-off dates:</strong> October 22 – November 16, 2025</li>
              <li><strong>Primary location:</strong> QuackedScreens Community Hub, 112 Riverside Dr, Macon, GA</li>
              <li><strong>Tech Medics satellite drop-off:</strong> 3742 Eisenhower Parkway (our service counter)</li>
              <li><strong>Accepted devices:</strong> iPhones, Android phones, iPads, Chromebooks, laptops (2015+), Apple Watches, AirPods</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12">How Tech Medics is Helping</h2>
            <p className="text-muted-foreground">To make sure every donation is truly usable, Tech Medics is providing:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Free diagnostics:</strong> We test each device for power, charging, and screen functionality.</li>
              <li><strong>50% off parts:</strong> Donated devices that need new batteries, screens, or ports get parts at half price.</li>
              <li><strong>Same-day triage:</strong> We promise 24-hour turnaround on simple fixes to keep donations moving.</li>
              <li><strong>Data wiping:</strong> Secure erase service following NIST standards to protect previous owners.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12">Why "Repair & Share" Matters</h2>
            <p className="text-muted-foreground">Bibb County still faces a digital divide—many families rely on a single smartphone for schoolwork, telehealth, and job applications. Last year the event placed 187 refurbished devices into households across Macon. With more partners involved this fall, the goal is to surpass 250 devices before the winter break.</p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-12 rounded">
              <h3 className="text-2xl font-bold text-foreground mb-3">How to Participate</h3>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                <li>Gather unused phones, tablets, or laptops (2015 or newer).</li>
                <li>Remove SIM cards and sign out of iCloud/Google accounts.</li>
                <li>Factory reset if possible (we can help if the device won’t boot).</li>
                <li>Drop off at Tech Medics or QuackedScreens during business hours.</li>
                <li>Pick up a donation receipt for tax purposes (provided by the Repair & Share team).</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-foreground">Exclusive Repair Incentives</h2>
            <p className="text-muted-foreground">Bring in a donation and unlock limited-time Tech Medics perks (valid through November 30, 2025):</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>20% off any iPhone or iPad screen repair</li>
              <li>Free tempered-glass screen protector with battery replacement</li>
              <li>$15 off diagnostics for liquid-damaged devices</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12">Volunteer & Sponsorship Opportunities</h2>
            <p className="text-muted-foreground">Looking to dig deeper? The Repair & Share Drive still needs volunteers to log donations, perform basic cleaning, and assemble care kits that include chargers and cases. Businesses in Macon can sponsor a family for $100, covering the cost of refurbishment and accessories.</p>

            <p className="text-muted-foreground">Visit <a href="https://quackedscreens.com/repair-share" target="_blank" rel="noopener noreferrer" className="text-primary underline">QuackedScreens.com</a> for the full volunteer calendar, or swing by Tech Medics to sign up. We coordinate volunteer shifts for Saturdays and after-work timeslots.</p>

            <div className="bg-secondary/30 border-l-4 border-secondary p-6 my-12 rounded">
              <h3 className="text-2xl font-bold text-foreground mb-3">Success Stories from 2024</h3>
              <p className="text-muted-foreground">• <strong>Macon Charter Academy:</strong> Received 42 working Chromebooks for grade-level reading programs.</p>
              <p className="text-muted-foreground">• <strong>Navicent Health patients:</strong> Loaner tablets enabled virtual visits for long-term care families.</p>
              <p className="text-muted-foreground">• <strong>Workforce development:</strong> Repaired smartphones helped 29 job seekers stay connected to employers.</p>
            </div>

            <h2 className="text-3xl font-bold text-foreground">Need Your Own Device Repaired?</h2>
            <p className="text-muted-foreground">If you’re donating a replacement device because your current phone is cracked or slow, Tech Medics has you covered. We offer:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Same-day screen repairs with lifetime warranty</li>
              <li>Battery replacements completed in under 45 minutes</li>
              <li>Charging port repair, water damage cleanup, and data recovery</li>
            </ul>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-12 rounded">
              <h3 className="text-2xl font-bold text-foreground mb-3">Join the Repair & Share Drive Today</h3>
              <p className="text-muted-foreground mb-4">Drop off donations at Tech Medics Macon (3742 Eisenhower Pkwy) or QuackedScreens Community Hub. Let’s make sure every family in Middle Georgia has the tech they need for school, work, and connection.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+14782596371" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center">Call Tech Medics</a>
                <Link to="/macon/contact" className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-center">Plan Your Drop-Off</Link>
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

export default RepairShareDriveMacon;
