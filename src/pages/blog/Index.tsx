import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface BlogPost {
  title: string;
  description: string;
  slug: string;
  category: string;
  date: string;
  keywords: string[];
}

const blogPosts: BlogPost[] = [
  {
    title: "Spring iPhone Maintenance Tips for Macon GA 2025",
    description: "Essential spring maintenance tips for iPhone, iPad, and MacBook in Macon GA. Combat humidity, pollen, and temperature changes with expert advice from Tech Medics.",
    slug: "spring-maintenance-macon-2025",
    category: "Seasonal Tips",
    date: "2025-03-01",
    keywords: ["spring iPhone maintenance", "device care Macon GA", "humidity protection"]
  },
  {
    title: "iPhone vs Android Repair Costs: Complete Macon GA Guide 2025",
    description: "Comprehensive cost comparison of iPhone vs Android repairs in Macon GA. Compare screen, battery, and charging port repair pricing to make informed decisions.",
    slug: "iphone-vs-android-repair-costs-macon",
    category: "Comparison Guide",
    date: "2025-03-15",
    keywords: ["iPhone vs Android repair", "repair cost comparison", "Macon phone repair"]
  },
  {
    title: "7 Signs Your iPhone Battery Needs Replacement in 2025",
    description: "Is your iPhone battery dying fast? Learn the 7 warning signs you need a battery replacement, costs in Macon GA, and what to expect during repair.",
    slug: "iphone-battery-replacement-signs-2025",
    category: "Battery & Performance",
    date: "2025-11-03",
    keywords: ["iPhone battery replacement", "battery health", "Macon GA battery repair"]
  },
  {
    title: "Why Is My iPhone Dying So Fast? 11 Proven Fixes for 2025",
    description: "iPhone battery draining fast? Learn 11 expert solutions to fix rapid battery drain, when to replace your battery, and how to maximize battery life.",
    slug: "iphone-dying-fast-after-charging",
    category: "Battery & Performance",
    date: "2025-11-03",
    keywords: ["iPhone dying fast", "battery drain", "iPhone battery tips"]
  },
  {
    title: "iPhone Repair Near Mercer University | Student Discounts Available",
    description: "Fast, affordable iPhone repair for Mercer University students in Macon GA. 10% student discount, same-day screen & battery repair. Walk-ins welcome.",
    slug: "iphone-repair-mercer-university-student-discount",
    category: "iPhone Repair",
    date: "2025-11-03",
    keywords: ["Mercer University iPhone repair", "student discount repair", "Macon student phone repair"]
  },
  {
    title: "Swollen iPhone Battery? Emergency Replacement in Macon GA",
    description: "Swollen iPhone battery is dangerous. Learn warning signs, what NOT to do, and get same-day emergency battery replacement in Macon GA.",
    slug: "swollen-iphone-battery-replacement-macon",
    category: "Battery & Performance",
    date: "2025-11-03",
    keywords: ["swollen iPhone battery", "emergency battery replacement", "dangerous battery"]
  },
  {
    title: "MacBook Screen Repair Cost Macon GA: Complete 2025 Price Guide",
    description: "Complete MacBook screen repair pricing in Macon GA. Compare Tech Medics vs Apple Store costs for Air, Pro, M-Series. Save $100-300.",
    slug: "macbook-screen-repair-cost-macon",
    category: "MacBook Repair",
    date: "2025-11-03",
    keywords: ["MacBook screen repair cost", "MacBook Pro screen price", "Macon MacBook repair"]
  },
  {
    title: "Winter Device Prep Guide for Macon GA (January 2025)",
    description: "Keep your iPhone, iPad, and MacBook performing through winter in Macon GA. Learn cold-weather battery care, moisture protection, and maintenance tips for January 2025.",
    slug: "winter-device-prep-macon-2025",
    category: "Seasonal Tips",
    date: "2025-01-05",
    keywords: ["winter iPhone tips", "cold weather battery", "Macon GA devices"]
  },
  {
    title: "Repair & Share Drive in Macon GA: Tech Medics Joins the Cause",
    description: "Join Tech Medics Macon at the Repair & Share Drive with QuackedScreens.com. Donate broken devices, get discounted repairs, and support families in need.",
    slug: "repair-share-drive-macon",
    category: "Community",
    date: "2025-10-22",
    keywords: ["repair and share drive", "device donation", "QuackedScreens"]
  },
  {
    title: "Holiday iPhone Repair Checklist for Macon GA (2025)",
    description: "Prepare your iPhone for the holidays in Macon GA. Learn proactive maintenance tips, emergency repair advice, and how to avoid device downtime.",
    slug: "holiday-iphone-repair-checklist-macon-2025",
    category: "Seasonal Tips",
    date: "2025-10-20",
    keywords: ["holiday iPhone repair", "travel phone prep", "Tech Medics Macon"]
  },
  {
    title: "Same-Day iPhone Repair in Macon GA | Fast, Professional Service",
    description: "Need fast iPhone repair? Tech Medics offers same-day screen repair, battery replacement, and more. Most repairs done in 30-60 minutes.",
    slug: "same-day-iphone-repair-macon",
    category: "iPhone Repair",
    date: "2025-01-22",
    keywords: ["same-day iPhone repair", "fast iPhone repair Macon", "quick phone repair"]
  },
  {
    title: "How Much Does iPhone Screen Repair Cost in Macon GA? 2025 Prices",
    description: "Complete iPhone screen repair pricing guide for Macon GA. Compare costs, quality options, and save money on cracked screen repair.",
    slug: "iphone-screen-repair-cost-macon",
    category: "iPhone Repair",
    date: "2025-01-20",
    keywords: ["iPhone screen repair cost", "cracked iPhone screen price", "iPhone 15 screen cost"]
  },
  {
    title: "iPhone Repair Near Me in Macon GA: Your Local Expert",
    description: "Searching 'iPhone repair near me'? Tech Medics in Macon offers same-day screen repair, battery replacement, and charging port fixes.",
    slug: "iphone-repair-near-me-macon",
    category: "iPhone Repair",
    date: "2025-01-18",
    keywords: ["iPhone repair near me", "phone repair near me", "iPhone repair Macon GA"]
  },
  {
    title: "Water Damaged iPhone? Here's What to Do Immediately",
    description: "iPhone got wet? Learn emergency steps, rice myths, and professional water damage repair in Macon GA. Fast action saves your device.",
    slug: "water-damaged-iphone-repair",
    category: "Troubleshooting",
    date: "2025-01-16",
    keywords: ["water damaged iPhone", "iPhone got wet", "liquid damage repair"]
  },
  {
    title: "Best iPhone Screen Repair in Macon GA: Complete Guide 2025",
    description: "Everything you need to know about iPhone screen repair in Macon GA, including costs, same-day service, and how to choose the best repair shop.",
    slug: "iphone-screen-repair-macon-ga",
    category: "iPhone Repair",
    date: "2025-01-15",
    keywords: ["iPhone screen repair Macon GA", "cracked iPhone screen", "same-day repair"]
  },
  {
    title: "iPhone Battery Replacement in Macon: Cost, Time & What to Expect",
    description: "Complete guide to iPhone battery replacement in Macon GA. Learn about costs, warning signs, and same-day service options.",
    slug: "iphone-battery-replacement-macon",
    category: "Battery & Performance",
    date: "2025-01-12",
    keywords: ["iPhone battery replacement", "swollen battery", "battery health"]
  },
  {
    title: "MacBook Repair in Macon GA: Screen, Keyboard & More",
    description: "Expert MacBook repair services in Macon GA. We fix screens, keyboards, liquid damage, and boot issues. Same-day service available.",
    slug: "macbook-repair-macon-ga",
    category: "MacBook Repair",
    date: "2025-01-10",
    keywords: ["MacBook screen repair", "MacBook won't turn on", "liquid damage repair"]
  },
  {
    title: "iPad Screen Replacement & Repair Services in Macon GA",
    description: "Professional iPad screen repair and charging port fixes in Macon. Same-day service, warranty included, all iPad models supported.",
    slug: "ipad-screen-repair-macon",
    category: "iPad Repair",
    date: "2025-01-08",
    keywords: ["iPad screen replacement", "iPad won't charge", "iPad repair cost"]
  },
  {
    title: "OEM vs Aftermarket iPhone Screens: What's the Difference?",
    description: "Learn the key differences between OEM and aftermarket iPhone screens, including quality, cost, and which option is right for you.",
    slug: "oem-vs-aftermarket-iphone-screens",
    category: "Educational",
    date: "2025-01-05",
    keywords: ["OEM screens", "aftermarket screens", "iPhone screen quality"]
  },
  {
    title: "Tech Medics vs Apple Store: Which iPhone Repair is Better?",
    description: "Comparing Tech Medics and Apple Store repairs: costs, warranty, turnaround time, and why local repair shops are often the better choice.",
    slug: "tech-medics-vs-apple-store-repair",
    category: "Brand Authority",
    date: "2025-01-03",
    keywords: ["Apple Store alternative", "third-party repair", "affordable iPhone repair"]
  },
  {
    title: "iPhone Not Turning On? Here's What to Do (Macon GA)",
    description: "Troubleshooting guide for iPhones that won't turn on. Learn common causes, DIY fixes, and when to visit our Macon repair shop.",
    slug: "iphone-not-turning-on-fix",
    category: "Troubleshooting",
    date: "2025-01-01",
    keywords: ["iPhone black screen", "iPhone won't power on", "dead iPhone"]
  },
  {
    title: "How to Choose a Reliable Phone Repair Shop in Macon GA",
    description: "Expert tips for selecting the best phone repair shop in Macon. Learn what to look for in reviews, warranties, and technician qualifications.",
    slug: "choose-phone-repair-shop-macon",
    category: "Educational",
    date: "2024-12-28",
    keywords: ["reliable repair shop", "phone repair reviews", "certified technicians"]
  }
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Phone Repair Blog | Tech Medics Macon GA - iPhone, iPad, MacBook Tips</title>
        <meta name="description" content="Expert advice on iPhone, iPad, and MacBook repair in Macon GA. Learn about screen replacement, battery issues, repair costs, and choosing the right repair service." />
        <meta name="keywords" content="iPhone repair blog, MacBook repair tips, iPad repair guide, phone repair Macon GA, device repair advice" />
        <link rel="canonical" href="https://techmedicsmacon.com/blog" />
        
        <meta property="og:title" content="Phone Repair Blog | Tech Medics Macon GA" />
        <meta property="og:description" content="Expert advice on iPhone, iPad, and MacBook repair in Macon GA." />
        <meta property="og:url" content="https://techmedicsmacon.com/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Tech Repair Tips & Guides
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert advice on iPhone, iPad, and MacBook repair in Macon GA. Learn about costs, 
                troubleshooting, and how to keep your devices running smoothly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-border">
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-primary">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground ml-4">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-3 text-foreground hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-4">
                      {post.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.keywords.slice(0, 3).map((keyword, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-2 py-1 bg-secondary/50 text-secondary-foreground rounded"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Need Device Repair in Macon GA?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Same-day iPhone, iPad, and MacBook repair services. Visit our shop or call for a free quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+14782596371"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Call (478) 259-6371
              </a>
              <Link 
                to="/macon/contact"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary/20 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Tech Medics Macon. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link to="/macon/about" className="hover:text-primary">About</Link>
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/macon/contact" className="hover:text-primary">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Blog;