import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";

const FastIPhoneRepair = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Same-Day iPhone Repair in Macon GA | Fast, Professional Service",
    "description": "Need fast iPhone repair in Macon GA? Tech Medics offers same-day screen repair, battery replacement, and more. Most repairs done in 30-60 minutes.",
    "author": { "@type": "Organization", "name": "Tech Medics Macon" },
    "publisher": { "@type": "Organization", "name": "Tech Medics Macon", "logo": { "@type": "ImageObject", "url": "https://techmedicsmacon.com/logo.png" } },
    "datePublished": "2025-01-22",
    "dateModified": "2025-01-22"
  };

  return (
    <>
      <Helmet>
        <title>Same-Day iPhone Repair Macon GA | 30-60 Min Service | Tech Medics</title>
        <meta name="description" content="Fast iPhone repair in Macon GA. Same-day screen replacement, battery service. Most repairs 30-60 minutes. Walk-ins welcome. Near Mercer." />
        <meta name="keywords" content="same-day iPhone repair, fast iPhone repair Macon, quick phone repair, iPhone repair while you wait, emergency iPhone repair" />
        <link rel="canonical" href="https://techmedicsmacon.com/blog/same-day-iphone-repair-macon" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <LocalBusinessSchema pageName="Same-Day iPhone Repair" pageDescription="Fast same-day iPhone repair service in Macon GA" serviceType="Same-Day iPhone Repair" />
      <Navigation />

      <article className="min-h-screen bg-background">
        <header className="py-16 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="text-primary hover:underline mb-4 inline-block">← Back to Blog</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Same-Day iPhone Repair in Macon GA</h1>
            <p className="text-xl text-muted-foreground">Professional repairs in 30-60 minutes. Walk-ins welcome.</p>
            <div className="mt-4 text-sm text-muted-foreground">Published January 22, 2025 | 6 min read</div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">Repair Time by Service</h2>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Screen replacement:</strong> 45-60 minutes</li>
              <li><strong>Battery replacement:</strong> 30-40 minutes</li>
              <li><strong>Charging port:</strong> 50-70 minutes</li>
              <li><strong>Back glass:</strong> 35-45 minutes</li>
              <li><strong>Camera:</strong> 30-40 minutes</li>
              <li><strong>Water damage:</strong> 2-4 hours</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Walk-In Service Process</h2>
            <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-3">
              <li><strong>Walk in:</strong> No appointment needed</li>
              <li><strong>Free diagnostic:</strong> 5-10 minutes</li>
              <li><strong>Get quote:</strong> Upfront pricing</li>
              <li><strong>Repair:</strong> 30-75 minutes typical</li>
              <li><strong>Quality test:</strong> We verify everything works</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Why We're Faster</h2>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Parts in stock for all iPhone models</li>
              <li>10+ years combined experience</li>
              <li>Efficient repair process</li>
              <li>Multiple technicians available</li>
              <li>Located conveniently in Macon</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Best Times to Visit</h2>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Fastest:</strong> Weekday mornings (10am-12pm)</li>
              <li><strong>Good:</strong> Tuesday-Thursday afternoons (2-4pm)</li>
              <li><strong>Busiest:</strong> Friday 4-6pm & Saturday 11am-2pm</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Call Ahead Benefits</h2>
            <p className="text-muted-foreground mb-4">While walk-ins are welcome, calling helps:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Confirm parts availability</li>
              <li>Get accurate wait time</li>
              <li>Technician ready when you arrive</li>
              <li>Avoid busy periods</li>
            </ul>
            <p className="text-muted-foreground mb-6"><strong>Call: (478) 259-6371</strong></p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">What to Bring</h2>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Your iPhone</li>
              <li>Passcode (for testing)</li>
              <li>Photo ID</li>
            </ul>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-12 rounded">
              <h3 className="text-2xl font-bold mb-3 text-foreground">Get Same-Day iPhone Repair</h3>
              <p className="text-muted-foreground mb-4">Fast, professional iPhone repair in Macon. Walk-ins welcome Monday-Saturday.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+14782596371" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center">Call (478) 259-6371</a>
                <Link to="/macon/contact" className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-center">Get Directions</Link>
              </div>
            </div>

            <RelatedArticles articles={[
              {
                title: "Best iPhone Screen Repair Macon GA",
                description: "Everything you need to know about iPhone screen repair including costs and quality options.",
                link: "/blog/iphone-screen-repair-macon-ga",
                readTime: "8 min read"
              },
              {
                title: "iPhone Repair Near Mercer University",
                description: "Fast iPhone repair services convenient to Mercer students and faculty.",
                link: "/blog/mercer-university-iphone-repair",
                readTime: "5 min read"
              },
              {
                title: "How to Choose a Phone Repair Shop",
                description: "Key factors to consider when selecting an iPhone repair shop in Macon.",
                link: "/blog/choose-phone-repair-shop-macon",
                readTime: "6 min read"
              }
            ]} />
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

export default FastIPhoneRepair;
