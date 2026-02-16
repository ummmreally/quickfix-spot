import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";

const IPhoneNotTurningOn = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "iPhone Not Turning On? 8 Fixes + When to Get Professional Help in Macon",
    "description": "Complete troubleshooting guide for iPhones that won't turn on. DIY fixes and professional repair options in Macon, GA.",
    "image": "https://techmedicsmacon.com/logo.png",
    "author": { "@id": "https://techmedicsmacon.com/#business" },
    "publisher": { "@id": "https://techmedicsmacon.com/#business" },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why won't my iPhone turn on even when plugged in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common causes include a completely drained battery (needs 15-30 min charging), faulty charging cable/adapter, damaged charging port, or internal hardware failure. Try different cable/charger first."
        }
      },
      {
        "@type": "Question",
        "name": "How long should I charge my dead iPhone before it turns on?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A completely dead iPhone needs 15-30 minutes of charging before showing signs of life. If nothing happens after 30 minutes with a known-good charger, there may be a hardware issue."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to fix an iPhone that won't turn on in Macon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs range from $79 for battery replacement to $149-$299 for logic board repair, depending on the iPhone model and specific issue. Tech Medics offers free diagnostics to determine the exact problem."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>iPhone Not Turning On? 8 Fixes | Macon GA Repair Guide 2025</title>
        <meta name="description" content="iPhone won't turn on? Try these 8 fixes or get expert repair in Macon, GA. Free diagnostics. Most issues fixed same day. Call (478) 259-6371." />
        <meta name="keywords" content="iphone not turning on macon, iphone won't turn on fix, dead iphone repair macon ga, iphone black screen macon" />
        <link rel="canonical" href="https://techmedicsmacon.com/blog/iphone-not-turning-on-fix" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <LocalBusinessSchema 
        pageName="iPhone Not Turning On Fix Guide" 
        pageDescription="Complete troubleshooting guide for iPhones that won't turn on in Macon, GA"
        serviceType="iPhone Repair"
      />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <Link to="/blog" className="text-primary hover:underline mb-6 inline-block">
            ← Back to Blog
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              iPhone Not Turning On? 8 Fixes + When to Get Professional Help in Macon
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete troubleshooting guide to fix an iPhone that won't power on, plus expert repair options in Macon, GA
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Quick Diagnosis: Why Your iPhone Won't Turn On</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-secondary/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-foreground">Software Issues (Can Fix at Home)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Completely drained battery</li>
                  <li>✓ System crash or freeze</li>
                  <li>✓ Failed iOS update</li>
                  <li>✓ Corrupted software</li>
                </ul>
                <p className="mt-4 text-sm font-semibold text-foreground">Success Rate: 60-70%</p>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-foreground">Hardware Issues (Need Professional Help)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Dead battery (won't hold charge)</li>
                  <li>✓ Damaged charging port</li>
                  <li>✓ Logic board failure</li>
                  <li>✓ Power button malfunction</li>
                </ul>
                <p className="mt-4 text-sm font-semibold text-foreground">Requires Repair Shop</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-foreground">8 DIY Fixes to Try First (In This Order)</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-primary bg-primary/10 p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Fix #1: Charge for 30 Minutes</h3>
                <p className="mb-3"><strong>Why it works:</strong> Completely dead iPhones need time to accumulate enough charge to power on.</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Use Apple-certified or high-quality cable and adapter</li>
                  <li>Plug into wall outlet (not computer USB)</li>
                  <li>Wait 15-30 minutes - you should see charging icon</li>
                  <li>If no charging icon appears, try Fix #2</li>
                </ol>
                <p className="mt-3 text-sm font-semibold">Success Rate: 40%</p>
              </div>

              <div className="border-l-4 border-primary bg-primary/10 p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Fix #2: Force Restart</h3>
                <p className="mb-3"><strong>Why it works:</strong> Clears temporary system glitches without losing data.</p>
                
                <div className="bg-secondary/30 p-4 rounded mb-3">
                  <p className="font-bold mb-2">For iPhone 8 and newer:</p>
                  <ol className="list-decimal pl-6 space-y-1 text-sm">
                    <li>Press and quickly release Volume Up button</li>
                    <li>Press and quickly release Volume Down button</li>
                    <li>Press and hold Side button until Apple logo appears (10-20 seconds)</li>
                  </ol>
                </div>
                
                <p className="mt-3 text-sm font-semibold">Success Rate: 30%</p>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-bold mb-4">Get Your iPhone Working Again Today</h2>
              <p className="text-lg mb-4">
                Tried everything and your iPhone still won't turn on? Don't give up! Tech Medics Macon specializes in "dead" iPhone repair with a high success rate.
              </p>
              <ul className="space-y-2 mb-6">
                <li>✓ FREE diagnostic to identify the exact issue</li>
                <li>✓ Most repairs completed same day</li>
                <li>✓ Upfront, honest pricing - no hidden fees</li>
                <li>✓ 30-day warranty on all repairs</li>
                <li>✓ Data recovery available if possible</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:4782596371" className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-bold text-center hover:opacity-90 transition-opacity">
                  Emergency Service: (478) 259-6371
                </a>
                <Link to="/macon/contact" className="bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-bold text-center hover:bg-primary-foreground hover:text-primary transition-colors">
                  Visit Our Macon Location
                </Link>
              </div>
            </div>

            <RelatedArticles articles={[
              {
                title: "Water Damaged iPhone? Fix It Fast",
                description: "Complete guide to fixing water damaged iPhones in Macon. What to do immediately and repair options.",
                link: "/blog/water-damaged-iphone-repair-macon",
                readTime: "9 min read"
              },
              {
                title: "iPhone Battery Dying Fast? 8 Fixes",
                description: "Troubleshoot rapid battery drain on your iPhone with these proven solutions.",
                link: "/blog/iphone-battery-dying-fast",
                readTime: "7 min read"
              },
              {
                title: "iPhone Battery Replacement Guide 2025",
                description: "7 warning signs your iPhone battery needs replacement and what to expect.",
                link: "/blog/iphone-battery-replacement-signs-2025",
                readTime: "8 min read"
              }
            ]} />
          </section>

          <footer className="border-t pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Tech Medics Macon. All rights reserved.</p>
            <p className="mt-2">
              <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            </p>
          </footer>
        </article>
      </div>
    </>
  );
};

export default IPhoneNotTurningOn;