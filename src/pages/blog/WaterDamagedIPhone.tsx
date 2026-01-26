import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "react-router-dom";

const WaterDamagedIPhone = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Water Damaged iPhone? Complete Repair Guide for Macon Residents",
    "description": "Expert guide on water damaged iPhone repair in Macon, GA. Learn immediate steps, repair costs, and why professional service matters.",
    "image": "https://techmedicsmacon.com/logo.png",
    "author": { "@id": "https://techmedicsmacon.com/#business" },
    "publisher": { "@id": "https://techmedicsmacon.com/#business" },
    "datePublished": "2025-01-16",
    "dateModified": "2025-01-16"
  };

  return (
    <>
      <Helmet>
        <title>Water Damaged iPhone Repair Macon GA | Tech Medics Expert Service</title>
        <meta name="description" content="Professional water damaged iPhone repair in Macon, GA. 24-hour turnaround, free diagnostics. Learn what to do immediately after water exposure." />
        <meta name="keywords" content="water damaged iphone repair macon, iphone water damage macon ga, wet iphone repair, liquid damage repair macon" />
        <link rel="canonical" href="https://techmedicsmacon.com/blog/water-damaged-iphone-repair" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <LocalBusinessSchema 
        pageName="Water Damaged iPhone Repair Guide" 
        pageDescription="Expert guide on water damaged iPhone repair in Macon, GA"
        serviceType="iPhone Water Damage Repair"
      />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <Link to="/blog" className="text-primary hover:underline mb-6 inline-block">
            ← Back to Blog
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Water Damaged iPhone? Complete Repair Guide for Macon Residents
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert steps to save your water-damaged iPhone and professional repair options in Macon, GA
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Immediate Actions (First 5 Minutes Are Critical)</h2>
            
            <div className="bg-destructive/10 border-l-4 border-destructive p-6 mb-6">
              <h3 className="text-xl font-bold text-destructive mb-2">⚠️ DO NOT Do These Things:</h3>
              <ul className="list-disc pl-6 text-foreground">
                <li>Don't turn on your iPhone if it's off</li>
                <li>Don't plug it in to charge</li>
                <li>Don't press buttons repeatedly</li>
                <li>Don't shake or blow into ports</li>
                <li>Don't use a hair dryer (heat damages components)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-foreground">✅ DO These Steps Immediately:</h3>
            <ol className="list-decimal pl-6 space-y-3 mb-8">
              <li><strong>Power off immediately</strong> - Hold side button and volume button to slide to power off</li>
              <li><strong>Remove case and SIM card</strong> - Allow better air circulation</li>
              <li><strong>Dry the exterior</strong> - Use a soft, lint-free cloth</li>
              <li><strong>Position upright</strong> - Lightning port facing down to drain water</li>
              <li><strong>Call Tech Medics Macon</strong> - (478) 259-6371 for emergency service</li>
            </ol>

            <h2 className="text-3xl font-bold mb-4 text-foreground">Understanding Water Damage Severity</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-border">
                <thead className="bg-secondary">
                  <tr>
                    <th className="border border-border p-3 text-left">Exposure Type</th>
                    <th className="border border-border p-3 text-left">Risk Level</th>
                    <th className="border border-border p-3 text-left">Recovery Chance</th>
                    <th className="border border-border p-3 text-left">Action Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">Light splash (clean water)</td>
                    <td className="border border-border p-3 text-yellow-600">Low</td>
                    <td className="border border-border p-3">95%+</td>
                    <td className="border border-border p-3">Dry thoroughly, monitor</td>
                  </tr>
                  <tr className="bg-secondary/30">
                    <td className="border border-border p-3">Brief submersion (&lt;30 sec)</td>
                    <td className="border border-border p-3 text-orange-600">Medium</td>
                    <td className="border border-border p-3">80-90%</td>
                    <td className="border border-border p-3">Professional cleaning within 24hrs</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Full submersion (&gt;1 min)</td>
                    <td className="border border-border p-3 text-red-600">High</td>
                    <td className="border border-border p-3">60-80%</td>
                    <td className="border border-border p-3">Immediate professional service</td>
                  </tr>
                  <tr className="bg-secondary/30">
                    <td className="border border-border p-3">Saltwater/chlorine exposure</td>
                    <td className="border border-border p-3 text-red-600">Critical</td>
                    <td className="border border-border p-3">40-70%</td>
                    <td className="border border-border p-3">Emergency repair (same day)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-foreground">Why Professional Water Damage Repair?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-secondary/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-foreground">DIY "Rice Method"</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>❌ Rice doesn't absorb internal moisture</li>
                  <li>❌ Corrosion continues spreading</li>
                  <li>❌ Dust particles enter device</li>
                  <li>❌ Success rate: ~30%</li>
                  <li>❌ No component cleaning</li>
                </ul>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg border-2 border-primary">
                <h3 className="text-xl font-bold mb-3 text-foreground">Tech Medics Professional Service</h3>
                <ul className="space-y-2 text-foreground">
                  <li>✅ Ultrasonic cleaning bath</li>
                  <li>✅ Corrosion removal</li>
                  <li>✅ Component-level repair</li>
                  <li>✅ Success rate: ~85%</li>
                  <li>✅ 90-day warranty included</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-bold mb-4">Emergency Water Damage Service in Macon</h2>
              <p className="text-lg mb-4">
                Dropped your iPhone in water? Every minute counts! Tech Medics offers same-day emergency water damage repair service.
              </p>
              <ul className="space-y-2 mb-6">
                <li>✓ Free diagnostic in 15 minutes</li>
                <li>✓ Professional ultrasonic cleaning</li>
                <li>✓ Most repairs completed same day</li>
                <li>✓ 90-day warranty on all water damage repairs</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:4782596371" className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-bold text-center hover:opacity-90 transition-opacity">
                  Call Now: (478) 259-6371
                </a>
                <Link to="/macon/contact" className="bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-bold text-center hover:bg-primary-foreground hover:text-primary transition-colors">
                  Visit Our Macon Location
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

export default WaterDamagedIPhone;