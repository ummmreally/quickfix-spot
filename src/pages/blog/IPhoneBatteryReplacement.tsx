import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "react-router-dom";

const IPhoneBatteryReplacement = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "iPhone Battery Replacement in Macon: Cost, Time & What to Expect",
    "description": "Complete guide to iPhone battery replacement in Macon GA. Learn about costs, warning signs, and same-day service options.",
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
    "datePublished": "2025-01-12",
    "dateModified": "2025-01-12"
  };

  return (
    <>
      <Helmet>
        <title>iPhone Battery Replacement Macon GA | Same-Day Service Without AppleCare</title>
        <meta name="description" content="iPhone battery replacement in Macon GA from $49. Same-day service, all models supported. Learn warning signs of bad battery and how long replacement takes." />
        <meta name="keywords" content="iPhone battery replacement Macon GA, swollen iPhone battery repair, apple battery replacement without AppleCare, iPhone dying fast, battery health check" />
        <link rel="canonical" href="https://techmedicsmacon.com/blog/iphone-battery-replacement-macon" />
        
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <LocalBusinessSchema 
        pageName="iPhone Battery Replacement in Macon GA"
        pageDescription="Professional iPhone battery replacement service in Macon GA with same-day turnaround"
        serviceType="iPhone Battery Replacement"
      />

      <Navigation />

      <article className="min-h-screen bg-background">
        <header className="py-16 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="text-primary hover:underline mb-4 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              iPhone Battery Replacement in Macon: Cost, Time & What to Expect
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete guide to iPhone battery replacement in Macon GA, including warning signs and same-day service
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Published January 12, 2025 | 7 min read
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">
              How to Know If Your iPhone Battery Needs Replacement
            </h2>
            <p className="text-muted-foreground mb-4">
              Your iPhone will show several warning signs when the battery is failing. Here's what to watch for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Battery Health Below 80%:</strong> Check Settings → Battery → Battery Health. If capacity is under 80%, replacement is recommended</li>
              <li><strong>Unexpected Shutdowns:</strong> Phone turns off at 20-30% battery remaining</li>
              <li><strong>Rapid Battery Drain:</strong> Full charge lasts less than 4-5 hours of normal use</li>
              <li><strong>Phone Gets Hot:</strong> Excessive heat during charging or normal use</li>
              <li><strong>Swollen Battery:</strong> Screen separating from frame or back glass bulging (URGENT - stop using immediately)</li>
              <li><strong>Slow Charging:</strong> Takes 3+ hours to fully charge</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              If you're experiencing any of these symptoms, it's time for a battery replacement. Don't wait until your 
              iPhone becomes unusable or the battery swells to dangerous levels.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Why Is My iPhone Dying Fast Even After Charging?
            </h2>
            <p className="text-muted-foreground mb-6">
              This is the #1 question we hear from customers. If your iPhone dies quickly even after a full charge, 
              the battery has likely degraded significantly. Here's what's happening:
            </p>
            <p className="text-muted-foreground mb-6">
              Lithium-ion batteries (used in all iPhones) degrade over time through charge cycles. Apple rates iPhone 
              batteries for 500 complete charge cycles before capacity drops to 80%. For most users, this happens after 
              2-3 years of daily use. Once capacity drops below 80%, you'll notice dramatic battery drain.
            </p>
            <p className="text-muted-foreground mb-6">
              Other factors that accelerate battery degradation include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Extreme temperatures (leaving phone in hot car or freezing cold)</li>
              <li>Constantly charging to 100% or draining to 0%</li>
              <li>Using cheap third-party chargers</li>
              <li>Running intensive apps continuously (gaming, GPS navigation)</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              iPhone Battery Replacement Cost in Macon GA
            </h2>
            <p className="text-muted-foreground mb-4">
              Battery replacement costs vary by model. Here's our current pricing:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>iPhone 8, 8 Plus, X:</strong> $49</li>
              <li><strong>iPhone XR, XS, XS Max, 11 Series:</strong> $59</li>
              <li><strong>iPhone 12 Series, 13 Series:</strong> $69</li>
              <li><strong>iPhone 14 Series, 15 Series:</strong> $79-89</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Compare this to Apple Store pricing ($89-109) or AppleCare+ service fees ($79). At Tech Medics Macon, 
              you get the same quality battery replacement without paying premium Apple prices.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Same-Day iPhone Battery Replacement in Macon GA
            </h2>
            <p className="text-muted-foreground mb-6">
              We understand you need your iPhone working ASAP. That's why we offer same-day battery replacement service 
              for all iPhone models. Most battery replacements take just 30-45 minutes. Here's our process:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-3">
              <li><strong>Free Diagnostic (5 minutes):</strong> We test your battery health and check for other issues</li>
              <li><strong>Quote & Approval (2 minutes):</strong> We provide upfront pricing with no hidden fees</li>
              <li><strong>Professional Installation (30 minutes):</strong> Certified technician replaces battery</li>
              <li><strong>Quality Testing (10 minutes):</strong> We verify proper charging and battery health</li>
              <li><strong>You're Done!</strong> Walk out with a fully charged iPhone and renewed battery life</li>
            </ol>
            <p className="text-muted-foreground mb-6">
              Walk-ins welcome, or call ahead at (478) 259-6371 to reserve your spot and minimize wait time.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Apple Battery Replacement Without AppleCare in Macon
            </h2>
            <p className="text-muted-foreground mb-6">
              Don't have AppleCare+? No problem. Tech Medics offers affordable battery replacement without requiring 
              any Apple service plan. While Apple charges $89-109 for out-of-warranty battery service, we provide 
              the same quality service for 20-40% less.
            </p>
            <p className="text-muted-foreground mb-6">
              Plus, you don't need an appointment days in advance. Come to our shop near Mercer University and get 
              same-day service without the Apple Store hassle.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Swollen iPhone Battery: What to Do Immediately
            </h2>
            <div className="bg-destructive/10 border-l-4 border-destructive p-6 my-8 rounded">
              <p className="text-muted-foreground mb-4">
                <strong className="text-destructive">WARNING:</strong> A swollen battery is a serious safety hazard. 
                If your iPhone screen is separating from the frame or the back glass is bulging, stop using the device immediately.
              </p>
            </div>
            <p className="text-muted-foreground mb-4">
              Swollen batteries can:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Crack or shatter the screen from internal pressure</li>
              <li>Leak dangerous chemicals</li>
              <li>Catch fire or explode in extreme cases</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              If you notice battery swelling, do NOT continue charging the device. Turn it off and bring it to our 
              shop immediately for emergency battery replacement. We handle swollen batteries safely and dispose of 
              them according to environmental regulations.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              How Long Does an iPhone Battery Replacement Take?
            </h2>
            <p className="text-muted-foreground mb-6">
              Most iPhone battery replacements take 30-45 minutes from start to finish. However, timing can vary based on:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>iPhone Model:</strong> Newer models (14, 15) may take slightly longer due to complex adhesive</li>
              <li><strong>Additional Repairs:</strong> If we discover other issues during diagnostic, we'll inform you before proceeding</li>
              <li><strong>Shop Traffic:</strong> Busy days may add 15-30 minutes wait time</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              You're welcome to wait in our comfortable waiting area, or we can text you when your iPhone is ready 
              if you prefer to run errands nearby.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Battery Replacement Warranty & Quality Guarantee
            </h2>
            <p className="text-muted-foreground mb-6">
              Every iPhone battery replacement at Tech Medics comes with a 1-year warranty against defects. 
              We use only high-quality replacement batteries that meet or exceed Apple's specifications. Your warranty covers:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Battery capacity degradation (if it drops below 80% within 1 year)</li>
              <li>Installation defects</li>
              <li>Charging issues related to battery</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Note: Physical damage, water damage, or using unauthorized chargers may void warranty.
            </p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-12 rounded">
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                Ready to Restore Your iPhone's Battery Life?
              </h3>
              <p className="text-muted-foreground mb-4">
                Visit Tech Medics Macon for same-day iPhone battery replacement. Free diagnostic included with every service.
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

export default IPhoneBatteryReplacement;