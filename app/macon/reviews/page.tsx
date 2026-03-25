import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Star, MapPin, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | Tech Medics Macon GA | 4.9 Stars",
  description: "See what real customers say about Tech Medics Macon GA. 90+ five-star Google reviews. Fast service, great prices, and friendly staff at 3742 Eisenhower Pkwy.",
  keywords: ["Tech Medics reviews", "Tech Medics Macon testimonials", "phone repair reviews Macon GA", "best phone shop Macon", "Tech Medics Google reviews"],
  alternates: { canonical: "https://techmedicsmacon.com/macon/reviews" },
  openGraph: {
    title: "Customer Reviews | Tech Medics Macon GA – 4.9 Star Rating",
    description: "90+ five-star Google reviews. See why Macon trusts Tech Medics for fast, affordable device service.",
    url: "https://techmedicsmacon.com/macon/reviews",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://techmedicsmacon.com" },
    { "@type": "ListItem", position: 2, name: "Macon", item: "https://techmedicsmacon.com/macon" },
    { "@type": "ListItem", position: 3, name: "Reviews", item: "https://techmedicsmacon.com/macon/reviews" },
  ],
};

interface Review {
  name: string;
  text: string;
  timeAgo: string;
  badge?: string;
}

const reviews: Review[] = [
  { name: "Thomas J Hofmann", text: "", timeAgo: "2 days ago" },
  { name: "LaCrystal Cystrunk", text: "GREAT SERVICE VERY PROFESSIONAL I RECOMMEND TECH MEDICS GREAT PRICES AS WELL", timeAgo: "1 week ago" },
  { name: "Chris Spinazzola", text: "Very helpful! Even overnighted parts for free", timeAgo: "2 weeks ago", badge: "Local Guide" },
  { name: "TJ Lott", text: "Excellent customer service highly recommend. Never disappoints", timeAgo: "2 weeks ago" },
  { name: "Mack Mane", text: "I loved it 🤞🏽", timeAgo: "2 weeks ago" },
  { name: "Devon Brown", text: "Top tier work every time. I appreciate these good ppl", timeAgo: "2 weeks ago" },
  { name: "Dashunae Martin", text: "Great service fast and very nice", timeAgo: "2 weeks ago" },
  { name: "Transzo", text: "Phone fixed well good business here very fast fixed my phone in 15 min", timeAgo: "3 weeks ago" },
  { name: "Akira Curry", text: "Great service. Great timing. Great communication. Great prices! Highly satisfied with the service!", timeAgo: "3 weeks ago" },
  { name: "Mekelos Buckner", text: "Fast turn around time Great service friendly and knowledgeable", timeAgo: "4 weeks ago" },
  { name: "Carla Wheeler", text: "Great fast & friendly service!! So Professional and would highly recommend anyone who's having trouble with their phone", timeAgo: "4 weeks ago" },
  { name: "Jim Carson", text: "God bless these people! I took an old iPad in to see if there was anything they could do and they went above and beyond.", timeAgo: "5 weeks ago", badge: "Local Guide" },
  { name: "Lashondra Wimberly", text: "If u are in need of screen repair this is most definitely the place to go to they are very professional and friendly and pocket friendly to definitely a 10/10 👌", timeAgo: "5 weeks ago" },
  { name: "marshawn right", text: "Definitely the best MacBook repair store in Macon. They've fixed my iPhone 15 pro max and MacBook! Phone was same day and my Mac took less than 2 days. Very satisfied", timeAgo: "5 weeks ago" },
  { name: "Jaylin Colbert", text: "Excellent service! They helped me quickly resolve issues with my iPhone and explained everything clearly.", timeAgo: "6 weeks ago" },
  { name: "Mari L", text: "Extremely nice, and super affordable gets your phone done in under 30 mins!!", timeAgo: "7 weeks ago" },
  { name: "Shon Holden", text: "Great customer service and very fast pace", timeAgo: "7 weeks ago" },
  { name: "Tiarra Johnson", text: "I had a great experience the customer service was a 10/10 they were very kind and polite any questions that I had they answered.", timeAgo: "7 weeks ago" },
  { name: "India Randalll", text: "Great customer service and very fast and reasonable..", timeAgo: "9 weeks ago" },
  { name: "Love N Faith", text: "Always Very fast, friendly and affordable. I was having a very hectic day and they definitely made it better in a matter of minutes.", timeAgo: "9 weeks ago", badge: "Local Guide" },
  { name: "Melgotti 4L", text: "Amazing service! Real life savers! Very affordable. Thought iPhone was a total loss and they got me squared away quick.", timeAgo: "10 weeks ago" },
  { name: "Lekaii Fountain", text: "Does a great job and very fast!! Love it", timeAgo: "10 weeks ago" },
  { name: "Jaalyn Ford", text: "Excellent customer service, fixed phone in a quick and timely manner.", timeAgo: "10 weeks ago" },
  { name: "Tommaalicia Ponder", text: "Very professional, fast, and great price.", timeAgo: "10 weeks ago" },
  { name: "Merio Exum", text: "Best Place To Get Your Phone Serviced, Fast, Affordable, & Reliable!! HIGHLY RECOMMENDED!! Also They Sell Accessories!", timeAgo: "10 weeks ago" },
  { name: "Cherrie Fed", text: "I sincerely apologize for the delay in posting this review. My grandson was experiencing difficulties with his iPhone, and they took care of it right away.", timeAgo: "11 weeks ago" },
  { name: "Sandreka Williams", text: "The best in town and let's not forget to mention how wonderful the staff are. 10 minutes or less I had a brand new phone. Definitely recommend 10/10", timeAgo: "11 weeks ago" },
  { name: "Dame Elizabeth Taylor", text: "Service was excellent and the prices you can't beat!!", timeAgo: "11 weeks ago", badge: "Local Guide" },
  { name: "Justin Dunlap", text: "Good customer service", timeAgo: "11 weeks ago" },
  { name: "Bunn1 Threatt", text: "Good business...Good people's", timeAgo: "12 weeks ago" },
  { name: "Nick Hazelton", text: "Great service. Knowledgeable and friendly. I almost can't wait for my phone to break again.", timeAgo: "13 weeks ago", badge: "Local Guide" },
  { name: "Fanando Smith", text: "Amazing fast Top tier service #1 in Macon Ga", timeAgo: "14 weeks ago" },
  { name: "Yardi Imvu", text: "Great prices and customer service 10/10", timeAgo: "15 weeks ago" },
  { name: "The Weekly Show", text: "Quick, Friendly professional. Would use them again for any repair I would need", timeAgo: "15 weeks ago" },
  { name: "Mar Har", text: "Very great service", timeAgo: "17 weeks ago" },
  { name: "Clovese Smith", text: "Highly recommend, Affordable and fixed my phone within 10-15 minutes. Come and check Tech Medics out if you have any Phone repair issues.", timeAgo: "18 weeks ago" },
  { name: "Christina Martin", text: "These guys truly impressed me with professional service and care above and beyond. The first thing I noticed was how welcoming they were.", timeAgo: "18 weeks ago" },
  { name: "GODS CHILD", text: "All the staff are amazing they really go above and beyond ‼️", timeAgo: "19 weeks ago" },
  { name: "Shemeka Moore", text: "They got me right I love it", timeAgo: "20 weeks ago" },
  { name: "Timetria Wright", text: "Great service quick and very friendly would definitely recommend to anyone", timeAgo: "20 weeks ago" },
  { name: "Quan DaKing", text: "They very fast same day less than 30 minutes provides very great service!!!", timeAgo: "20 weeks ago" },
  { name: "Tavaries Heard", text: "They are the best. The service was quick and the customer service was second to none!!! If you need your phone repaired this is the place to go to.", timeAgo: "20 weeks ago", badge: "Local Guide" },
  { name: "Thatboi Keymani", text: "Great customer service", timeAgo: "22 weeks ago" },
  { name: "nyzire", text: "Amazing and quick service, most definitely will be returning if anything comes up!!", timeAgo: "22 weeks ago" },
  { name: "Aunjalaye", text: "Great service, great prices, and timely service!", timeAgo: "22 weeks ago" },
  { name: "luhhh 5ıve", text: "Good work an good communication love his work my little brother locked my phone up but in under 30 minutes it was unlocked when I took it to tech medics", timeAgo: "24 weeks ago" },
  { name: "LaDarrien Palmer", text: "Very helpful and professional with their work. I highly recommend them fr.", timeAgo: "30 weeks ago" },
  { name: "Bottled_Air", text: "Excellent service very professional and reliable service was fast and efficient", timeAgo: "31 weeks ago" },
  { name: "Tiffiny Waller", text: "Very professional and fast Service. I am a forever customer!!!", timeAgo: "32 weeks ago" },
  { name: "T. McKenzie", text: "Nikki & Adam were amazing! Genuine people with great customer service. Fixed my iPhone screen in less than 20 minutes.", timeAgo: "33 weeks ago" },
  { name: "Tora Cole", text: "My grandson iPad got stuck in some funky mode, I reached out to the technicians of Tech Medics. We had the iPad back within 24hrs. They were professional and very prompt.", timeAgo: "34 weeks ago" },
  { name: "Katrese Knight", text: "Great service, fast and very friendly! 10/10", timeAgo: "35 weeks ago" },
  { name: "Shaterrkia Winfield", text: "Tech Medics was reasonable and fast so if you need anything fixed from phone to computer just pull up they got you", timeAgo: "35 weeks ago" },
  { name: "Jaumya Marion", text: "OMG! I love this place! Great customer service with wonderful prices! My phone was a mess and the owner was able to fix it right up.", timeAgo: "36 weeks ago" },
  { name: "Kalayiah Cox", text: "Good job very quick and fast", timeAgo: "38 weeks ago" },
  { name: "Alejandra Harris", text: "Tech Medics went above and beyond when repairing my phone! From the moment I walked in, I was greeted with professionalism and friendliness.", timeAgo: "39 weeks ago", badge: "Local Guide" },
  { name: "Brittany McCrary", text: "All I Can Say Is I HIGHLY RECOMMEND‼️ They Did A FANTASTIC Job On My Daughter's Phone. Also They Have GREAT CUSTOMER SERVICE I Will Be Back", timeAgo: "40 weeks ago" },
  { name: "Mason Dorvil", text: "They fixed my iPad", timeAgo: "41 weeks ago" },
  { name: "Jamonica Anthonyq", text: "GREAT CUSTOMER SERVICE!! Affordable prices and deals!! Fast service!! I definitely recommend this business very professional", timeAgo: "45 weeks ago" },
  { name: "Onesti Chandler", text: "I had a great experience at Tech Medics. The process went by quick and the employees were extremely kind and respectful.", timeAgo: "46 weeks ago" },
  { name: "Jessica Davis", text: "Wonderful and fast professional service", timeAgo: "47 weeks ago" },
  { name: "Derricka Brown", text: "Great experience!! Great customer service", timeAgo: "47 weeks ago" },
  { name: "Julasia Fryer", text: "Excellent Service, Fast Pace, Excellent Customer Service and Overall I had a great experience.", timeAgo: "48 weeks ago" },
  { name: "Tomarrow Reed", text: "I went to tech medics and had a wonderful experience with Nikita and Marshawn they replaced my screen with no problem and it was very affordable.", timeAgo: "50 weeks ago" },
  { name: "Niki Lo", text: "EXCELLENT customer service and super fast service. They did a battery replacement for me because my phone wouldn't stay charged.", timeAgo: "51 weeks ago" },
  { name: "Jameka Carey", text: "Great service, fast work, great communication, no problems!", timeAgo: "52 weeks ago" },
  { name: "Lashae Mitchell", text: "Adam was very quick with fixing my iPhone very professional service is extremely recommended.", timeAgo: "52 weeks ago" },
  { name: "Aramis Tucker", text: "Quick and fast…good service", timeAgo: "52 weeks ago" },
  { name: "tiara maxwell", text: "Highly recommend. They fixed my MacBook Pro in just 1 day after being told it would cost $1700 and take weeks to fix at BestBuy. Will definitely come back.", timeAgo: "Feb 2025" },
  { name: "Shaquille Mathis", text: "Outstanding service. I waited for them outside the building before they even opened the doors for business. They were so professional and helpful.", timeAgo: "Feb 2025" },
  { name: "Earnest Vanover", text: "One of the best companies in Macon Ga!! Come through when needed screen fix!!", timeAgo: "Jan 2025" },
  { name: "Jonichia Lopez", text: "I thought my phone was done for after washing it in the washing machine. They got it back working in full force! Great company.", timeAgo: "Jan 2025", badge: "Local Guide" },
  { name: "Lashandra Simmons", text: "Excellent customer service and fast service. Went to have my grandson's iPhone repaired. I have to say they went over and above.", timeAgo: "Jan 2025" },
  { name: "Brandi Howard", text: "Great Customer Service", timeAgo: "Jan 2025", badge: "Local Guide" },
  { name: "Nikea Simmons", text: "The fastest I ever got an iPhone screen fixed, friendly people, great customer service, great communication, and good prices.", timeAgo: "Jan 2025" },
  { name: "Jada Lopez", text: "Super nice people, great service, great prices", timeAgo: "Jan 2025" },
  { name: "Daniel McDowell", text: "Does awesome work. Was able to fix my phone and kids tablet", timeAgo: "Jan 2025" },
  { name: "Adrian Howard", text: "Affordable courteous and very professional!!!", timeAgo: "Jan 2025" },
  { name: "Nachya Kelley", text: "I came here to get my iPhone XR repaired due to a cracked screen and let me say that this repair site is better than all the rest!!! 10/10 highly recommend ‼️", timeAgo: "Nov 2024" },
  { name: "Chakeyla Battle", text: "Stopped by Tech Medics today and received excellent professional service. Only needed a simple screen protector and they took great care.", timeAgo: "Nov 2024" },
  { name: "Raven May", text: "My iPhone screen was on its death bed walked in told them what I needed and they got me right in 30min great staff wonderful personality.", timeAgo: "Oct 2024" },
  { name: "shedrick parker", text: "Great service I'll recommend anyone. No issues after the service thanks", timeAgo: "Oct 2024" },
  { name: "Jada Marion", text: "Great service! Very professional shop to get all new tech accessories and IPhone repairs. Bought a great speaker, phone case, and headphones.", timeAgo: "Sep 2024" },
];

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://techmedicsmacon.com/#business",
  name: "Tech Medics Macon",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: reviews.length.toString(),
    reviewCount: reviews.length.toString(),
  },
  review: reviews.filter(r => r.text).map(r => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody: r.text,
  })),
};

function getInitials(name: string) {
  return name.split(" ").map(n => n[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}

function getColor(name: string) {
  const colors = [
    "bg-blue-600", "bg-emerald-600", "bg-violet-600", "bg-amber-600",
    "bg-rose-600", "bg-cyan-600", "bg-indigo-600", "bg-teal-600",
    "bg-pink-600", "bg-orange-600", "bg-lime-600", "bg-fuchsia-600",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

export default function ReviewsPage() {
  const reviewsWithText = reviews.filter(r => r.text);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-3 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li><Link href="/macon" className="hover:text-primary">Macon</Link></li>
          <li>/</li>
          <li className="text-foreground font-medium">Reviews</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 md:py-28 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-slate-200 mb-6">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{reviews.length}+ Five-Star Google Reviews</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            What Our Customers<br className="hidden md:block" /> Are Saying
          </h1>
          <div className="flex items-center justify-center gap-1.5 mb-4">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-3xl font-bold mb-2">4.9 out of 5</p>
          <p className="text-lg text-slate-300 mb-8">Based on {reviews.length}+ reviews on Google</p>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <a href="https://www.google.com/maps/place/Tech+Medics+Macon" target="_blank" rel="noopener noreferrer">
              Leave Us a Review on Google
            </a>
          </Button>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary text-primary-foreground py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold">4.9★</div>
            <p className="text-sm text-primary-foreground/80">Average Rating</p>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold">{reviews.length}+</div>
            <p className="text-sm text-primary-foreground/80">Google Reviews</p>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold">100%</div>
            <p className="text-sm text-primary-foreground/80">5-Star Reviews</p>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold">#1</div>
            <p className="text-sm text-primary-foreground/80">Rated in Macon</p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">Real Reviews from Real Customers</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Every review below is from a verified Google reviewer</p>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {reviewsWithText.map((r, i) => (
              <Card key={i} className="break-inside-avoid p-6 border-border hover:shadow-lg transition-all hover:-translate-y-0.5 duration-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className={`${getColor(r.name)} w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                    {getInitials(r.name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground text-sm truncate">{r.name}</p>
                    <div className="flex items-center gap-2">
                      {r.badge && (
                        <span className="text-[10px] font-medium text-primary bg-primary/10 px-1.5 py-0.5 rounded">{r.badge}</span>
                      )}
                      <span className="text-xs text-muted-foreground">{r.timeAgo}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map(j => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="h-4 w-4 text-muted-foreground/30 absolute -top-1 -left-1" />
                  <p className="text-muted-foreground text-sm leading-relaxed pl-3">{r.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Visit Tech Medics Macon Today</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">Join {reviews.length}+ happy customers. Walk in or call us anytime during store hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-slate-100 text-lg px-8">
              <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8">
              <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-5 w-5" />Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
