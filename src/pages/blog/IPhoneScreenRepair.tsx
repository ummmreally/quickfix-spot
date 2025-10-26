import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "react-router-dom";

const IPhoneScreenRepair = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best iPhone Screen Repair in Macon GA: Complete Guide 2025",
    "description": "Everything you need to know about iPhone screen repair in Macon GA, including costs, same-day service, and how to choose the best repair shop.",
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
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15"
  };

  return (
    <>
      <Helmet>
        <title>Best iPhone Screen Repair in Macon GA | Same-Day Service | Tech Medics</title>
        <meta name="description" content="Need iPhone screen repair in Macon GA? Get same-day service, affordable pricing, and lifetime warranty. Serving Mercer University area. iPhone 15, 14, 13 Pro Max supported." />
        <meta name="keywords" content="iPhone screen repair Macon GA, cracked iPhone screen, iPhone 15 screen replacement, same-day iPhone repair, affordable iPhone repair near Mercer University, where to fix iPhone screen Macon" />
        <link rel="canonical" href="https://techmedicsmacon.com/blog/iphone-screen-repair-macon-ga" />
        
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <LocalBusinessSchema 
        pageName="iPhone Screen Repair in Macon GA"
        pageDescription="Professional iPhone screen repair service in Macon GA with same-day turnaround"
        serviceType="iPhone Screen Repair"
      />

      <Navigation />

      <article className="min-h-screen bg-background">
        <header className="py-16 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="text-primary hover:underline mb-4 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Best iPhone Screen Repair in Macon GA: Complete Guide 2025
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about getting your cracked iPhone screen fixed in Macon, GA
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Published January 15, 2025 | 8 min read
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">
              Why Choose Tech Medics for iPhone Screen Repair in Macon GA?
            </h2>
            <p className="text-muted-foreground mb-6">
              When your iPhone screen cracks, you need fast, affordable, and reliable repair service. At Tech Medics Macon, 
              we specialize in same-day iPhone screen replacement for all models, including the latest iPhone 15, 15 Pro, 
              and 15 Pro Max. Located near Mercer University, we're your local alternative to expensive Apple Store repairs.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              iPhone Screen Repair Cost in Macon GA
            </h2>
            <p className="text-muted-foreground mb-4">
              One of the most common questions we get is: "How much does an iPhone 15 Pro Max screen repair cost?" 
              The answer depends on your model and the type of screen replacement you choose:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>LCD Screens (iPhone 11 and older):</strong> $89 - $149</li>
              <li><strong>OLED Screens (iPhone 12-14 series):</strong> $149 - $279</li>
              <li><strong>iPhone 15 Series Screens:</strong> $199 - $349</li>
              <li><strong>Premium Quality Screens:</strong> Add $30-50 for higher quality displays</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Compare this to Apple Store prices which can range from $279 to $379+ (without AppleCare+). 
              At Tech Medics, we offer the same quality repair at 30-40% less cost.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Same-Day iPhone Screen Replacement Near Mercer University
            </h2>
            <p className="text-muted-foreground mb-6">
              We understand you can't be without your iPhone for long. That's why we offer same-day screen replacement 
              for most models. Our typical repair time is 30-60 minutes, so you can drop off your device and pick it 
              up the same day. We're conveniently located near Mercer University, making us the go-to repair shop 
              for students, faculty, and Macon residents.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              What to Do If Your iPhone Screen is Cracked
            </h2>
            <p className="text-muted-foreground mb-4">
              If you've dropped your iPhone and cracked the screen, here's what you should do immediately:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-3">
              <li><strong>Assess the damage:</strong> Is it just the glass, or is the display malfunctioning?</li>
              <li><strong>Protect the screen:</strong> Apply clear tape to prevent glass shards from falling out</li>
              <li><strong>Backup your data:</strong> In case the screen stops responding completely</li>
              <li><strong>Get a quote:</strong> Call us at (478) 259-6371 for instant pricing</li>
              <li><strong>Book same-day repair:</strong> Visit our shop for quick turnaround</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Is It Worth Fixing a Cracked iPhone Screen or Replacing the Phone?
            </h2>
            <p className="text-muted-foreground mb-6">
              This is a common dilemma. Here's our honest recommendation: if your iPhone is less than 3 years old 
              and the only issue is a cracked screen, repair is absolutely worth it. A screen replacement costs 
              $150-350, while a new iPhone costs $700-1,200+. Even if you have an older model like iPhone 11 or 12, 
              screen repair can extend your device's life by 1-2 years.
            </p>
            <p className="text-muted-foreground mb-6">
              However, if your iPhone has multiple issues (bad battery, water damage, broken cameras) AND it's 
              4+ years old, upgrading might make more financial sense. We'll always give you honest advice about 
              whether repair or replacement is the better option.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              How to Tell If Your iPhone Screen is Original or Aftermarket
            </h2>
            <p className="text-muted-foreground mb-4">
              Not all replacement screens are created equal. Here's how to check screen quality:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>True Tone feature:</strong> If True Tone stops working after repair, it's likely an aftermarket screen</li>
              <li><strong>Color accuracy:</strong> Original screens have perfect color reproduction</li>
              <li><strong>Touch sensitivity:</strong> Aftermarket screens may have slightly delayed touch response</li>
              <li><strong>3D Touch (older models):</strong> Some cheap screens lose 3D Touch functionality</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              At Tech Medics, we offer both premium OEM-quality screens and high-quality aftermarket options. 
              We'll explain the differences so you can choose what fits your budget and needs.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              iPhone Screen Repair Near Me: Why Location Matters
            </h2>
            <p className="text-muted-foreground mb-6">
              When searching for "iPhone screen repair near me" in Macon GA, proximity matters for convenience. 
              We're located at 3742 Eisenhower Parkway, easily accessible from:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Mercer University (5 minutes)</li>
              <li>Downtown Macon (10 minutes)</li>
              <li>Vineville neighborhood (7 minutes)</li>
              <li>North Macon (15 minutes)</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              No appointment necessary – walk-ins welcome! We also offer free diagnostics to assess your screen damage.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Warranty & Quality Guarantee
            </h2>
            <p className="text-muted-foreground mb-6">
              Every iPhone screen repair at Tech Medics comes with a lifetime warranty against defects. 
              If you experience any issues with your new screen due to manufacturing defects or installation errors, 
              we'll fix it free of charge. This warranty covers:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Screen defects (dead pixels, discoloration)</li>
              <li>Touch sensitivity issues</li>
              <li>Installation problems (loose connections)</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Note: Physical damage after repair (drops, cracks) is not covered by warranty.
            </p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-12 rounded">
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                Ready to Fix Your Cracked iPhone Screen?
              </h3>
              <p className="text-muted-foreground mb-4">
                Visit Tech Medics Macon for same-day iPhone screen repair. Walk-ins welcome, or call ahead for faster service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+14782596371"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
                >
                  Call (478) 259-6371
                </a>
                <Link 
                  to="/macon/iphone"
                  className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-center"
                >
                  View iPhone Services
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

export default IPhoneScreenRepair;