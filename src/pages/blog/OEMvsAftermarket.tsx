import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "react-router-dom";

const OEMvsAftermarket = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "OEM vs Aftermarket iPhone Screens: Complete 2025 Comparison Guide",
    "description": "Detailed comparison of OEM and aftermarket iPhone screens. Learn quality differences, pricing, and what Tech Medics Macon recommends.",
    "image": "https://techmedicsmacon.com/logo.png",
    "author": { "@id": "https://techmedicsmacon.com/#business" },
    "publisher": { "@id": "https://techmedicsmacon.com/#business" },
    "datePublished": "2025-01-05",
    "dateModified": "2025-01-05"
  };

  return (
    <>
      <Helmet>
        <title>OEM vs Aftermarket iPhone Screens | Macon GA Expert Comparison 2025</title>
        <meta name="description" content="OEM vs aftermarket iPhone screen comparison. Learn quality differences, pricing, True Tone compatibility. Expert advice from Tech Medics Macon." />
        <meta name="keywords" content="oem vs aftermarket iphone screen, oem iphone screen macon, aftermarket iphone screen quality, iphone screen replacement parts macon" />
        <link rel="canonical" href="https://techmedicsmacon.com/blog/oem-vs-aftermarket-iphone-screens" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <LocalBusinessSchema 
        pageName="OEM vs Aftermarket iPhone Screens Guide" 
        pageDescription="Complete comparison guide for OEM and aftermarket iPhone screens in Macon, GA"
        serviceType="iPhone Screen Repair"
      />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <Link to="/blog" className="text-primary hover:underline mb-6 inline-block">
            ← Back to Blog
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              OEM vs Aftermarket iPhone Screens: Complete 2025 Comparison Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about iPhone screen quality, pricing, and which option is right for you in Macon, GA
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Understanding iPhone Screen Types</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary/10 border-2 border-primary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-foreground">OEM (Original)</h3>
                <p className="text-sm text-muted-foreground mb-4">Manufactured by Apple or Apple-certified factories</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ True Tone works</li>
                  <li>✓ Face ID compatible</li>
                  <li>✓ Perfect color accuracy</li>
                  <li>✓ Oleophobic coating</li>
                  <li>✓ Highest quality</li>
                </ul>
                <p className="mt-4 font-bold text-primary">Price: $$$</p>
              </div>
              
              <div className="bg-secondary/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-foreground">High-Quality Aftermarket</h3>
                <p className="text-sm text-muted-foreground mb-4">Premium third-party OLED/LCD screens</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ True Tone (with reprogramming)</li>
                  <li>✓ Face ID compatible</li>
                  <li>✓ Good color accuracy</li>
                  <li>✓ Oleophobic coating</li>
                  <li>✓ Great value</li>
                </ul>
                <p className="mt-4 font-bold text-foreground">Price: $$</p>
              </div>
              
              <div className="bg-destructive/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-foreground">Budget Aftermarket</h3>
                <p className="text-sm text-muted-foreground mb-4">Economy third-party LCD screens</p>
                <ul className="space-y-2 text-sm">
                  <li>✗ No True Tone</li>
                  <li>⚠️ Face ID may not work</li>
                  <li>✗ Color shift issues</li>
                  <li>✗ No coating</li>
                  <li>✗ Shorter lifespan</li>
                </ul>
                <p className="mt-4 font-bold text-destructive">Price: $</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-foreground">What is True Tone and Why Does It Matter?</h2>
            
            <div className="bg-secondary/20 p-6 rounded-lg mb-8">
              <p className="mb-4">
                <strong>True Tone</strong> is Apple's technology that automatically adjusts your iPhone's display color and intensity to match the ambient lighting in your environment.
              </p>
              
              <p className="text-sm font-semibold text-foreground">
                💡 Tech Medics can reprogram True Tone on high-quality aftermarket screens using professional tools, so you don't lose this feature!
              </p>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-bold mb-4">Get Expert Screen Replacement in Macon</h2>
              <p className="text-lg mb-4">
                Not sure which screen type is right for you? Our technicians will help you choose the perfect option based on your budget, usage, and iPhone model.
              </p>
              <ul className="space-y-2 mb-6">
                <li>✓ Free consultation on screen options</li>
                <li>✓ Transparent pricing - no surprises</li>
                <li>✓ 30-minute repairs for most models</li>
                <li>✓ True Tone reprogramming included</li>
                <li>✓ Industry-leading warranties</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:4782596371" className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-bold text-center hover:opacity-90 transition-opacity">
                  Call for Quote: (478) 259-6371
                </a>
                <Link to="/macon/iphone" className="bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-bold text-center hover:bg-primary-foreground hover:text-primary transition-colors">
                  View iPhone Repair Pricing
                </Link>
              </div>
            </div>
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

export default OEMvsAftermarket;