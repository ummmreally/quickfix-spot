/**
 * Rich, per-neighborhood content that augments the base entries in
 * `neighborhoods.ts`. Keyed by neighborhood slug.
 *
 * Adding an entry here triggers the rich layout in
 * `app/macon/[neighborhood]/page.tsx`. Slugs not present here continue to
 * render the legacy template.
 */

export interface NeighborhoodRichContent {
  /** 1-3 short paragraphs of unique local context. ~150-200 words combined. */
  intro: string[];
  /** Apple-device repair issues that come up specifically from this area. */
  localIssues: { title: string; description: string }[];
  /** Long-form paragraph mentioning local employers, schools, traffic, etc. ~150 words. */
  localContext: string;
  /** Related internal links (cross-link to city-specific or service pages). */
  relatedLinks: { label: string; href: string }[];
}

export const neighborhoodsRich: Record<string, NeighborhoodRichContent> = {
  vineville: {
    intro: [
      "Vineville is one of Macon's most established residential corridors, anchored by Mercer University and the historic Vineville Avenue district. We see Vineville customers nearly every day — Mercer undergrads with cracked iPhone screens, Vineville Baptist families with iPads that need new batteries, and Shirley Hills professionals whose MacBook Air keyboards have given up after a few years of work-from-home use.",
      "From most addresses in Vineville, the drive to our shop on Eisenhower Parkway is under 10 minutes. We're the closest Apple-specific repair option to Mercer's main campus.",
    ],
    localIssues: [
      {
        title: "Cracked iPhone Screens After Mercer Events",
        description:
          "Football tailgates, Stadium Club nights, and graduation week all push our drop-in screen volume up. We pre-stock iPhone 14, 15, and 16 screens before big Mercer dates.",
      },
      {
        title: "MacBook Keyboard Failures in College Hill Households",
        description:
          "MacBooks 3–6 years old in long-term Vineville households frequently develop sticky or unresponsive keys. We replace top cases and individual keycaps depending on damage.",
      },
      {
        title: "Battery Replacement on Older iPhones",
        description:
          "Many Vineville residents keep iPhones for 4+ years. iPhone 11, XR, and 12 battery swaps are some of our most common Vineville jobs.",
      },
    ],
    localContext:
      "Vineville's population skews toward students, faculty, healthcare workers from Atrium Health Navicent, and long-time Macon families. That mix sends a steady stream of repair work our way year-round — Mercer's academic calendar drives the biggest spikes around finals and move-out week. We extend a 10% student discount to anyone with a valid Mercer ID, and we keep iPad parts in stock because Mercer's School of Medicine relies heavily on iPad-based curricula. If you live in Vineville Heights, Bellevue, College Hill, or Shirley Hills, you're inside a 10-minute drive of the shop, and walk-ins are always welcome — no appointment needed.",
    relatedLinks: [
      { label: "iPhone Repair (all models)", href: "/macon/iphone" },
      { label: "MacBook Repair", href: "/macon/macbook" },
      { label: "MacBook Keyboard Repair", href: "/macon/macbook-keyboard-repair" },
      { label: "Battery Replacement", href: "/macon/battery-replacement" },
      { label: "iPad Repair", href: "/macon/ipad" },
      { label: "Pricing Chart", href: "/macon/pricing-chart" },
    ],
  },

  "north-macon": {
    intro: [
      "North Macon — the area around Bass Road, Zebulon Road, Riverside Drive, and The Crossing at Macon — is one of our largest customer bases. We're a straight 10–12 minute drive south on I-75 from most North Macon addresses, and the route is almost entirely highway.",
      "North Macon customers tend to bring in newer, higher-end devices — iPhone 15 and 16 Pro models, MacBook Pro 14\" and 16\", and the latest iPad Pro and Air. We stock parts for all of these in-house.",
    ],
    localIssues: [
      {
        title: "iPhone 15/16 Back Glass Cracks",
        description:
          "Premium iPhones taken to The Crossing for shopping trips and dropped on tile or pavement frequently come back with cracked back glass. We replace the back panel without affecting Face ID or wireless charging.",
      },
      {
        title: "MacBook Pro Battery Swelling",
        description:
          "Long battery life-cycles on intel-era and early M1 MacBook Pros lead to swollen batteries. North Macon customers bring these in for safe replacement before the trackpad fails.",
      },
      {
        title: "iPad Screen Damage from Bass Road Schools",
        description:
          "Stratford Academy and First Presbyterian Day School issue iPads heavily. We handle screen replacement and digitizer repair on iPad Air and iPad Pro models on a same-day basis.",
      },
    ],
    localContext:
      "North Macon's population is one of the wealthiest in Bibb County, and that translates to a higher-than-average mix of brand-new iPhones, MacBook Pros, and Apple Watches walking through our door. We invest in the newer parts inventory specifically because of this customer base — we'd rather stock a 16 Pro Max screen for 6 months and have it ready than tell a North Macon customer to come back next week. Drive time from Bass Road to our shop on Eisenhower Parkway is typically 12–15 minutes during normal traffic, and there's no need to come downtown. The Crossing at Macon, Stratford Academy, First Presbyterian Day School, and the Riverside Drive medical corridor are all inside a 10-minute radius.",
    relatedLinks: [
      { label: "iPhone 16 Pro Max Repair", href: "/macon/iphone/iphone-16-pro-max-repair" },
      { label: "iPhone 15 Repair", href: "/macon/iphone/iphone-15-repair" },
      { label: "MacBook Repair", href: "/macon/macbook" },
      { label: "iPad Repair", href: "/macon/ipad" },
      { label: "Back Glass Repair", href: "/macon/back-glass-repair" },
      { label: "Apple Genuine Parts", href: "/macon/apple-genuine-parts" },
    ],
  },

  downtown: {
    intro: [
      "Downtown Macon — Cherry Street, Mulberry Street, College Street, and the Coleman Hill area — is where a huge share of our drop-in customers come from on weekday lunch breaks. From Cherry Street to our shop at 3742 Eisenhower Parkway is a 7–8 minute drive south on Mercer University Drive and Eisenhower.",
      "Downtown professionals tend to need fast turnarounds — a court hearing at the Bibb County Courthouse, a meeting at the Visit Macon offices, or a shift at Atrium Navicent doesn't pause for a cracked screen. We aim to have downtown customers back at their desks inside an hour.",
    ],
    localIssues: [
      {
        title: "Lunch-Break iPhone Screen Repairs",
        description:
          "Cherry Street office workers drop off iPhones at 12:00 and pick them up at 12:45 most weekdays. We prioritize quick-turnaround screen swaps for downtown walk-ins.",
      },
      {
        title: "iPad Repairs for Navicent Health Staff",
        description:
          "Atrium Health Navicent's clinical staff use iPads heavily. We handle screen replacement, charging port repair, and battery replacement on Apple Care–style same-day timelines.",
      },
      {
        title: "MacBook Liquid Damage from Coffee-Shop Spills",
        description:
          "Cherry Street's coffee scene means MacBooks meet lattes more often than people expect. We perform liquid damage triage and component-level repair when bring-it-in-fast wins.",
      },
    ],
    localContext:
      "Downtown Macon is the legal, medical, and creative heart of central Georgia. Our downtown clientele includes attorneys near the Bibb County Courthouse, doctors and nurses at Atrium Navicent, hospitality workers at the Cherry Street and Mercer Village restaurants, and a steady flow of city/county employees. Because Apple Stores are an hour-plus away in Atlanta or Augusta, downtown professionals lean on us for same-day, in-person device repair. We accept walk-ins all day, support quick consultations by phone at (478) 259-6371, and can typically deliver a finished iPhone screen repair in under an hour even on busy lunch days. Many downtown customers walk over and we drop the device off for them after work — coordinate by phone if you'd like that arrangement.",
    relatedLinks: [
      { label: "iPhone Repair", href: "/macon/iphone" },
      { label: "MacBook Repair", href: "/macon/macbook" },
      { label: "iPad Repair", href: "/macon/ipad" },
      { label: "Screen Repair", href: "/macon/screen-repair" },
      { label: "Free Diagnostic", href: "/macon/free-diagnostic" },
      { label: "Walk-In Repair", href: "/macon/walk-in" },
    ],
  },

  ingleside: {
    intro: [
      "Ingleside is one of Macon's quieter, tree-lined neighborhoods, anchored by Wesleyan College and bordered by the Ingleside Village retail corridor. From most Ingleside addresses, our shop is a 10-minute drive west on Pio Nono and Eisenhower Parkway.",
      "Wesleyan students and faculty form a meaningful share of our Ingleside customer base, and we extend our 10% student discount to anyone with a valid Wesleyan ID.",
    ],
    localIssues: [
      {
        title: "iPhone Screen Repairs for Wesleyan Students",
        description:
          "Cracked screens spike around finals and move-in/move-out weeks. We pre-stock iPhone 13, 14, 15, and 16 series screens before Wesleyan's academic milestones.",
      },
      {
        title: "MacBook Battery Replacements for Long-Term Residents",
        description:
          "Ingleside's many long-term homeowners hold onto MacBooks for years. We see frequent MacBook Air 2018–2020 battery swaps from this area.",
      },
      {
        title: "iPad Repairs for Wesleyan Academic Use",
        description:
          "Wesleyan's small-class academic model relies on iPads in many departments. We handle screen replacement, charging port repair, and battery service on a quick turnaround.",
      },
    ],
    localContext:
      "Ingleside's roughly 3,000 residents include Wesleyan students, longtime homeowners, and young families drawn to the Ingleside Village restaurant scene. Because the neighborhood is residential and quiet, we see a higher share of routine maintenance work — battery replacements, charging port cleanings, screen protector applications — versus the emergency drop-offs we get from busier corridors. We're a 10-minute drive from anywhere in Ingleside, and our shop on Eisenhower Parkway has free parking out front so you're not circling for a spot like you might be at Ingleside Village on a Friday night. Walk-ins are welcome and most screen repairs are finished in 30 minutes while you wait.",
    relatedLinks: [
      { label: "iPhone Repair", href: "/macon/iphone" },
      { label: "Battery Replacement", href: "/macon/battery-replacement" },
      { label: "MacBook Repair", href: "/macon/macbook" },
      { label: "iPad Repair", href: "/macon/ipad" },
      { label: "Charging Port Repair", href: "/macon/charging-port-repair" },
      { label: "Pricing Chart", href: "/macon/pricing-chart" },
    ],
  },

  "east-macon": {
    intro: [
      "East Macon covers everything from the Ocmulgee River east through River Crossing, Fort Hawkins, and out toward Gray Highway. Customers in this area drive about 12 minutes west on Emery Highway and Eisenhower Parkway to reach us.",
      "We see a different repair mix from East Macon than from the more affluent north — more older iPhone models, more out-of-warranty MacBooks, and more devices brought in for second-life repairs rather than upgrades.",
    ],
    localIssues: [
      {
        title: "iPhone 11, XR, and 12 Battery Replacements",
        description:
          "These three models dominate East Macon battery requests. We keep a deep parts inventory and complete most swaps in 30 minutes for $59–$89 depending on model.",
      },
      {
        title: "Charging Port Repair on Work-Site iPhones",
        description:
          "Lightning ports clogged with sawdust, drywall, or jobsite dust are common from East Macon's industrial and construction worker customer base. We clean or replace in under an hour.",
      },
      {
        title: "Cracked Screens with Apple Trade-In Goals",
        description:
          "Many East Macon customers want to repair a cracked screen specifically to qualify for Apple's higher trade-in tier. We offer Apple Genuine Parts by request for trade-in optimization.",
      },
    ],
    localContext:
      "East Macon's economy is anchored by warehouse and logistics work along Gray Highway, healthcare jobs at Atrium Health Navicent, and small businesses around the Ocmulgee Heritage Trail. Our East Macon customers value cost-effective, durable repair more than name-brand parts — though we offer Apple Genuine Parts by request for anyone who specifically wants them. Most East Macon repairs are completed same-day with our standard 30-day warranty on parts and labor, and we accept walk-ins all day. From the Fort Hawkins area, the drive is about 12 minutes; from out past Bowden Golf Course, expect closer to 15.",
    relatedLinks: [
      { label: "iPhone 11 Repair", href: "/macon/iphone/iphone-11-repair" },
      { label: "iPhone XR Repair", href: "/macon/iphone/iphone-xr-repair" },
      { label: "Battery Replacement", href: "/macon/battery-replacement" },
      { label: "Charging Port Repair", href: "/macon/charging-port-repair" },
      { label: "Trade-In", href: "/macon/trade-in" },
      { label: "Apple Genuine Parts", href: "/macon/apple-genuine-parts" },
    ],
  },

  "south-macon": {
    intro: [
      "South Macon is our home turf — our shop is on Eisenhower Parkway itself, less than five minutes from most South Macon addresses. The Macon Mall area, Bloomfield, Pio Nono Avenue, and Anthony Road are all within a quick drive.",
      "Because we're physically inside South Macon, this is also where most of our walk-in foot traffic comes from. There's no closer Apple-focused repair shop south of I-16 in Bibb County.",
    ],
    localIssues: [
      {
        title: "Cracked iPhone Screens from Macon Mall Visits",
        description:
          "The Macon Mall and the Eisenhower Parkway retail corridor are full of polished tile floors. Drops happen and we keep iPhone 8 through 16 Pro Max screens in stock.",
      },
      {
        title: "Same-Day Battery Replacements on Older iPhones",
        description:
          "South Macon residents bring in lots of iPhone 8, X, XR, and 11 devices for battery replacement. Most done in 30 minutes for $59–$79.",
      },
      {
        title: "iPad Repairs for South Bibb County Schools",
        description:
          "Hutchings College & Career Academy, Westside High, and area middle schools issue iPads heavily. We handle district-style repairs on iPad 9th/10th gen and iPad Air.",
      },
    ],
    localContext:
      "South Macon is the most populous quadrant of Bibb County, and its residents account for the largest share of our walk-in foot traffic. Because we're physically on Eisenhower Parkway between Pio Nono and Mercer University Drive, virtually every South Macon address is within a 5–8 minute drive. We invest in keeping older iPhone parts in stock specifically because of the South Macon customer base — many residents keep iPhones for 4–6 years and need long-term parts support. Walk-ins are welcome any time during business hours and there's free parking right out front. If you live in Bloomfield, near the Macon Mall, off Pio Nono, or up toward Anthony Road, you're already practically next door.",
    relatedLinks: [
      { label: "Bloomfield Repair", href: "/macon/bloomfield" },
      { label: "iPhone Repair", href: "/macon/iphone" },
      { label: "iPad Repair", href: "/macon/ipad" },
      { label: "Battery Replacement", href: "/macon/battery-replacement" },
      { label: "Screen Repair", href: "/macon/screen-repair" },
      { label: "Walk-In Repair", href: "/macon/walk-in" },
    ],
  },

  bloomfield: {
    intro: [
      "Bloomfield is the South Macon neighborhood just east of Eisenhower Parkway, between Pio Nono Avenue and Anthony Road. We're physically the closest Apple-focused repair shop to Bloomfield — most addresses are inside a 5-minute drive.",
      "Our Bloomfield customers tend to be longtime South Macon residents and families, so a meaningful share of our Bloomfield repair work is battery replacement on devices people have owned for years.",
    ],
    localIssues: [
      {
        title: "iPhone 8, X, and 11 Battery Replacements",
        description:
          "Bloomfield's older-device customer base means iPhone 8/X/XR/11 battery swaps are our most-frequent local repair. Premium-cell replacement in 30 minutes, $59–$79.",
      },
      {
        title: "Cracked Screens on Family iPhones",
        description:
          "Hand-me-down iPhones for kids and teens lead to a steady stream of cracked screens from Bloomfield households. We stock back to iPhone 7.",
      },
      {
        title: "Charging Port Cleanings",
        description:
          "Lint and pocket debris in Lightning ports prevent charging on older iPhones. We clean the port in under 10 minutes — often free if it's the only fix needed.",
      },
    ],
    localContext:
      "Bloomfield's residential character means our repair mix from this neighborhood leans toward maintenance and extending the life of devices rather than fixing brand-new flagships. We're proud to support that — many Bloomfield iPhones get a second life with a new battery and a fresh screen for under $150 combined, far less than upgrading to a new device. Because we're physically located in South Macon, Bloomfield walk-ins typically take under 5 minutes to reach us by car, and we accept drop-offs whether you have an appointment or not. If you're not sure whether your iPhone is worth repairing, call (478) 259-6371 and we'll give you an honest assessment over the phone first.",
    relatedLinks: [
      { label: "South Macon Repair", href: "/macon/south-macon" },
      { label: "Battery Replacement", href: "/macon/battery-replacement" },
      { label: "iPhone 11 Repair", href: "/macon/iphone/iphone-11-repair" },
      { label: "iPhone 8 Repair", href: "/macon/iphone/iphone-8-repair" },
      { label: "Charging Port Repair", href: "/macon/charging-port-repair" },
      { label: "Pricing Chart", href: "/macon/pricing-chart" },
    ],
  },

  rutland: {
    intro: [
      "Rutland is the suburban-residential community along Bass Road and Hartley Bridge Road on the southern edge of Bibb County. From most Rutland addresses, the drive to Eisenhower Parkway is about 10–12 minutes via I-475 or Hartley Bridge.",
      "We see a steady flow of Rutland customers, including families, retirees, and commuters who work in Macon or Warner Robins but live in Rutland's quieter neighborhoods.",
    ],
    localIssues: [
      {
        title: "iPhone Screen Repair After Bass Road Commutes",
        description:
          "Commuter drops between cars and houses on driveways account for a big share of Rutland cracked-screen jobs. We stock screens for iPhone 11 through 16.",
      },
      {
        title: "MacBook Repairs for Work-From-Home Customers",
        description:
          "Rutland's commuter base includes many remote workers using MacBook Air and Pro for daily work. Keyboard, trackpad, and battery service common.",
      },
      {
        title: "iPad Repairs for Rutland-Area Schools",
        description:
          "Rutland Middle and Rutland High area students use iPads. We handle screen, charging port, and battery service on a same-day basis.",
      },
    ],
    localContext:
      "Rutland's population is around 7,500, and the community is split between long-time residents and Houston County–Bibb County commuters. The drive from any Rutland address to our shop is shorter than driving to Warner Robins, and we're the closest dedicated Apple-focused repair option north of Houston Lake Road. We accept walk-ins all day and most screen repairs are finished in 30 minutes, so a typical Rutland round-trip including the repair is under 90 minutes. Free parking is available out front and there's no appointment required — though if you have an unusually old or rare iPhone model, calling (478) 259-6371 ahead lets us confirm we have the part in stock.",
    relatedLinks: [
      { label: "iPhone Repair", href: "/macon/iphone" },
      { label: "MacBook Repair", href: "/macon/macbook" },
      { label: "iPad Repair", href: "/macon/ipad" },
      { label: "Battery Replacement", href: "/macon/battery-replacement" },
      { label: "Houston County Phone Repair", href: "/macon/houston-county-phone-repair" },
      { label: "Bibb County Phone Repair", href: "/macon/bibb-county-phone-repair" },
    ],
  },

  "warner-robins": {
    intro: [
      "Warner Robins is the largest city in our service area outside of Macon itself, and we treat the market seriously — we stock parts for every recent iPhone, iPad, and MacBook model so Warner Robins customers don't waste a 20-minute drive only to be told to come back tomorrow.",
      "From Robins AFB and most Warner Robins addresses, the drive to Eisenhower Parkway is 20 minutes via I-75 North to Exit 164. The full repair-and-back-home loop usually runs under 90 minutes.",
    ],
    localIssues: [
      {
        title: "iPhone Repairs for Robins AFB Personnel",
        description:
          "Active-duty and civilian Robins AFB personnel make up a notable share of our Warner Robins customers. We work on a quick-turnaround basis and accept walk-ins all day.",
      },
      {
        title: "Cracked Screens from Houston County Schools",
        description:
          "Houston County High, Northside, Warner Robins High, and Veterans High students keep our screen-repair queue full year-round. We pre-stock common models.",
      },
      {
        title: "MacBook Repairs for Defense Contractors",
        description:
          "Warner Robins's defense-contractor workforce uses MacBooks heavily. We handle keyboard, battery, and screen service while maintaining customer privacy.",
      },
    ],
    localContext:
      "Warner Robins's population sits near 80,000, making it the second-largest city in middle Georgia. The combination of Robins Air Force Base, Houston County's school system, the Galleria Mall corridor, and a growing professional class generates substantial demand for Apple-device repair. The closest Apple Stores are over an hour away in Atlanta — which is why a 20-minute drive to a dedicated Macon shop is the most practical option for Warner Robins customers. We offer a 30-day warranty on parts and labor, Apple Genuine Parts by request, and a 10% discount for active-duty military and first responders. If you have a dedicated need (multiple devices, time-sensitive repair, fleet repair for a small business), call (478) 259-6371 in advance and we'll coordinate.",
    relatedLinks: [
      { label: "Warner Robins iPhone Repair", href: "/macon/warner-robins-iphone-repair" },
      { label: "Warner Robins iPad Repair", href: "/macon/warner-robins-ipad-repair" },
      { label: "Warner Robins MacBook Repair", href: "/macon/warner-robins-macbook-repair" },
      { label: "Houston County Phone Repair", href: "/macon/houston-county-phone-repair" },
      { label: "Apple Genuine Parts", href: "/macon/apple-genuine-parts" },
      { label: "Business Repair", href: "/macon/business" },
    ],
  },

  byron: {
    intro: [
      "Byron is the gateway between Peach and Houston counties, anchored by Tanger Outlets, the I-75 Exit 149 corridor, and the Fort Valley State University area to the west. We're the closest Apple-focused repair shop with same-day stock — a straight 20-minute drive north on I-75.",
      "This page focuses on the broader iPhone, iPad, and MacBook repair experience for Byron residents. If you're specifically looking for iPhone repair, our dedicated Byron iPhone repair page goes deeper.",
    ],
    localIssues: [
      {
        title: "Cracked Screens from Tanger Outlets",
        description:
          "Polished outlet-floor drops are a big driver of Byron cracked-screen jobs. We stock iPhone screens back to the 7 and iPad screens for current models.",
      },
      {
        title: "Water Damage from Lake Tobesofkee",
        description:
          "Boating, paddle-boarding, and pool drops at Lake Tobesofkee account for many of our Byron water-damage cases. Bring the device in powered off — don't try to charge it.",
      },
      {
        title: "MacBook Repairs for Fort Valley State Students",
        description:
          "FVSU students bring in MacBooks for keyboard, screen, and battery service. We extend the 10% student discount with a valid FVSU ID.",
      },
    ],
    localContext:
      "Byron's population of roughly 5,000 swells significantly when Tanger Outlets, Big Peach Music Festival, and Lake Tobesofkee events bring traffic into town. We work on every kind of Apple device — not just iPhones — and Byron customers regularly bring in iPads (Fort Valley State curricula), MacBooks (remote workers and students), and Apple Watches alongside their phones. A typical Byron-to-Macon trip including the repair is under 90 minutes door-to-door, and we accept walk-ins so there's no need to schedule. For an iPhone-specific overview with route directions, FAQs, and common iPhone issues we see from Byron, visit our dedicated Byron iPhone repair page.",
    relatedLinks: [
      { label: "Byron iPhone Repair (detailed)", href: "/macon/byron-iphone-repair" },
      { label: "Peach County Phone Repair", href: "/macon/peach-county-phone-repair" },
      { label: "iPad Repair", href: "/macon/ipad" },
      { label: "MacBook Repair", href: "/macon/macbook" },
      { label: "Water Damage Repair", href: "/macon/water-damage" },
      { label: "Apple Genuine Parts", href: "/macon/apple-genuine-parts" },
    ],
  },

  perry: {
    intro: [
      "Perry is the largest city in southern Houston County, home to the Georgia National Fairgrounds and Agricenter and a growing professional class. From most Perry addresses, the drive to Tech Medics is 25 minutes straight up I-75 to Exit 164.",
      "This page covers the broader Apple device repair experience for Perry residents. For an iPhone-specific deep dive with routes, FAQs, and common iPhone issues we see from Perry, visit our dedicated Perry iPhone repair page.",
    ],
    localIssues: [
      {
        title: "Cracked Screens After Georgia National Fair Week",
        description:
          "Each October, Fair week brings a noticeable wave of cracked iPhone screens from Perry customers. We pre-stock parts to absorb the spike.",
      },
      {
        title: "iPad Repairs for Houston County Schools",
        description:
          "Perry High, Westfield, and Houston County Career Academy iPads regularly come in for screen replacement and charging port repair. Same-day on most models.",
      },
      {
        title: "MacBook Service for Robins AFB Commuters",
        description:
          "Many Perry residents commute to Robins AFB and rely on MacBook Air and Pro for personal use. Battery, keyboard, and screen service common.",
      },
    ],
    localContext:
      "Perry's population is roughly 19,000 and growing, with strong school enrollment, fairgrounds tourism, and a Robins AFB commuter base. We treat the Perry market as a primary service area — that means real parts inventory for older iPhone models (still common in Perry), the latest iPhone 16 series screens for newer customers, and iPad and MacBook parts to cover the full Apple lineup. A typical Perry trip is 25 minutes each way; most screen repairs finish in 30 minutes; so plan on under 90 minutes round-trip. Walk-ins are always welcome and our 30-day warranty covers parts and labor regardless of where you live.",
    relatedLinks: [
      { label: "Perry iPhone Repair (detailed)", href: "/macon/perry-iphone-repair" },
      { label: "Houston County Phone Repair", href: "/macon/houston-county-phone-repair" },
      { label: "iPad Repair", href: "/macon/ipad" },
      { label: "MacBook Repair", href: "/macon/macbook" },
      { label: "Warner Robins iPhone Repair", href: "/macon/warner-robins-iphone-repair" },
      { label: "Business Repair", href: "/macon/business" },
    ],
  },

  forsyth: {
    intro: [
      "Forsyth is the closest Monroe County town to Macon, anchored by the historic downtown square, Tift College's former campus, and the Georgia Public Safety Training Center (GPSTC) just south of I-75 Exit 187.",
      "From most Forsyth addresses, our shop is a 25-minute drive south on I-75 to Exit 164 (Eisenhower Parkway). For an iPhone-specific overview, visit our dedicated Forsyth iPhone repair page.",
    ],
    localIssues: [
      {
        title: "Water Damage from High Falls State Park",
        description:
          "Slips on the wet rocks at High Falls send several Forsyth-area iPhones into our shop each summer. Ultrasonic cleaning and component-level work usually recovers them.",
      },
      {
        title: "Repairs for GPSTC Trainees",
        description:
          "Public-safety trainees at GPSTC bring in personal and duty iPhones during multi-week training rotations. We prioritize first-responder turnarounds.",
      },
      {
        title: "MacBook & iPad Repairs for Monroe County Schools",
        description:
          "Mary Persons High, Monroe County Middle, and area schools all use iPads heavily. We service screens, batteries, and charging ports same-day in most cases.",
      },
    ],
    localContext:
      "Monroe County's population is around 28,000 with Forsyth as the county seat. The community mixes long-time Forsyth residents, GPSTC trainees, Mercer-Tift commuters, and Atlanta-bound professionals who chose Forsyth for its quieter pace and quick I-75 access. That diversity means we see every kind of Apple-device repair from Forsyth — brand-new iPhone 16s with cracked back glass alongside iPhone X devices needing a new battery. We stock parts for both ends of the spectrum and run the same 30-day warranty on parts and labor we offer Macon walk-ins. A typical Forsyth trip is 25 minutes each way; plan on under 90 minutes round-trip including a 30-minute screen repair.",
    relatedLinks: [
      { label: "Forsyth iPhone Repair (detailed)", href: "/macon/forsyth-iphone-repair" },
      { label: "Monroe County Phone Repair", href: "/macon/monroe-county-phone-repair" },
      { label: "Water Damage Repair", href: "/macon/water-damage" },
      { label: "iPad Repair", href: "/macon/ipad" },
      { label: "MacBook Repair", href: "/macon/macbook" },
      { label: "iPhone 11 Repair", href: "/macon/iphone/iphone-11-repair" },
    ],
  },
};

export function getNeighborhoodRich(slug: string): NeighborhoodRichContent | undefined {
  return neighborhoodsRich[slug];
}
