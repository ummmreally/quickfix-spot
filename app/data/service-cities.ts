export interface ServiceCityData {
  slug: string;
  city: string;
  county: string;
  state: string;
  zip: string;
  driveMinutes: number;
  driveDirection: "north" | "south" | "east" | "west";
  exitNumber: string;
  highway: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  subtitle: string;
  /** Two short paragraphs about the local area & why we serve it. ~150 words combined, unique to this city. */
  intro: string[];
  /** Local landmarks/neighborhoods this page covers. */
  landmarks: string[];
  /** Issues that come up specifically for residents of this city. ~120 words, unique. */
  localIssues: { title: string; description: string }[];
  /** Step-by-step driving directions paragraph. */
  directions: string;
  /** Long-form unique paragraph mentioning local context (employers, schools, events). ~150 words. */
  localContext: string;
  /** Per-city FAQs (3-4 each). */
  faqs: { question: string; answer: string }[];
  /** Related internal links shown at the bottom. */
  relatedLinks: { label: string; href: string }[];
}

export const serviceCities: ServiceCityData[] = [
  {
    slug: "byron-iphone-repair",
    city: "Byron",
    county: "Peach County",
    state: "GA",
    zip: "31008",
    driveMinutes: 20,
    driveDirection: "north",
    exitNumber: "Exit 149",
    highway: "I-75",
    title: "iPhone Repair Byron GA | Peach County | Tech Medics Macon",
    metaDescription:
      "Trusted iPhone repair for Byron GA & Peach County residents. 20 min from Byron Outlets via I-75 Exit 149. Screen, battery & water damage. Call (478) 259-6371.",
    keywords: [
      "iPhone repair Byron GA",
      "phone repair Peach County",
      "iPhone screen Byron 31008",
      "Tanger Outlets phone repair",
      "iPhone repair near Fort Valley",
    ],
    h1: "iPhone Repair for Byron, GA Residents",
    subtitle: "Serving Byron, Fort Valley, Powersville & all of Peach County (31008)",
    intro: [
      "Byron sits right at the gateway between Peach and Houston counties, and the closest dedicated iPhone repair shop with same-day screen and battery service is Tech Medics in Macon — a straight 20-minute shot up I-75. We see Byron customers almost every day, from Tanger Outlets shoppers who cracked a screen on the food-court floor to Fort Valley State students whose batteries gave up the morning of finals.",
      "Because Byron's main employers (Frito-Lay, Blue Bird, Robins AFB contractors) keep people on the move, we deliberately built our service around fast turnarounds. Most iPhone screen replacements for Byron customers are finished in 30 minutes — quicker than the drive home.",
    ],
    landmarks: [
      "Tanger Outlets Byron (I-75 Exit 149)",
      "Byron Plantation & Old Clinchfield corridor",
      "Fort Valley State University area (15 min west via GA-49)",
      "Lake Tobesofkee (popular weekend drop-zone for cracked screens)",
      "Peach County Schools — student discount with valid ID",
    ],
    localIssues: [
      {
        title: "Water Damage from Lake Tobesofkee Weekends",
        description:
          "Boating, paddle-boarding, and pool drops at the Lake Tobesofkee rec area are the #1 reason Byron customers walk in. We open the device within 30 minutes of arrival, perform an ultrasonic clean, and salvage data whenever the logic board isn't shorted.",
      },
      {
        title: "Heat-Damaged Batteries from Long I-75 Commutes",
        description:
          "Many Byron residents commute to Macon, Warner Robins, or Atlanta. iPhones left mounted on dashboards in summer heat see accelerated battery wear — we replace the cell in about 30 minutes with a premium part.",
      },
      {
        title: "Cracked Screens After Tanger Outlets Trips",
        description:
          "The polished tile floors at the Byron outlets are unforgiving. We carry replacement screens for every iPhone from the 7 through the 16 Pro Max in stock for walk-in repairs.",
      },
    ],
    directions:
      "From Byron, take I-75 North to Exit 164 (Eisenhower Parkway). Turn left at the top of the exit ramp and we are 0.4 miles down on the right at 3742 Eisenhower Parkway, in the strip with Aaron's and Citi Trends. Free parking out front and walk-ins are always welcome — no appointment needed.",
    localContext:
      "Byron's population of roughly 5,000 swells significantly when Tanger Outlets, the Big Peach Music Festival, and Lake Tobesofkee events are in town. We've intentionally kept our pricing transparent for Byron customers because the next-nearest authorized-style repair option is over 45 minutes away in Warner Robins or 90 minutes in Atlanta. Whether you're a Fort Valley State student, a Frito-Lay shift worker, or just someone who dropped their iPhone at the outlets, the round trip from Byron to Tech Medics and back — including the repair — typically takes less than 90 minutes. We also handle iPad and MacBook repair for Peach County residents in the same visit.",
    faqs: [
      {
        question: "How long is the drive from Byron to Tech Medics in Macon?",
        answer:
          "About 20 minutes via I-75 North to Exit 164 (Eisenhower Parkway). It's the most direct route — no surface streets through downtown Macon.",
      },
      {
        question: "Do you repair iPhones for Fort Valley State students?",
        answer:
          "Yes. We extend our 10% student discount to Fort Valley State students with a valid ID, in addition to Mercer and Wesleyan students. Bring your student ID at check-in.",
      },
      {
        question: "Can you fix a water-damaged iPhone from Lake Tobesofkee?",
        answer:
          "In most cases, yes — if you bring it in promptly and resist the urge to charge it first. We perform ultrasonic cleaning, micro-soldering, and data recovery for water-damaged iPhones brought in from the lake area.",
      },
      {
        question: "Do I need an appointment to come in from Byron?",
        answer:
          "No — we're a walk-in shop. We recommend calling (478) 259-6371 before you leave Byron only if you want us to confirm we have a screen in stock for an older or rare model.",
      },
    ],
    relatedLinks: [
      { label: "Peach County Phone Repair", href: "/macon/peach-county-phone-repair" },
      { label: "Perry iPhone Repair", href: "/macon/perry-iphone-repair" },
      { label: "Warner Robins iPhone Repair", href: "/macon/warner-robins-iphone-repair" },
      { label: "iPhone 15 Repair", href: "/macon/iphone/iphone-15-repair" },
      { label: "Water Damage Repair", href: "/macon/water-damage" },
      { label: "Battery Replacement", href: "/macon/battery-replacement" },
    ],
  },

  {
    slug: "perry-iphone-repair",
    city: "Perry",
    county: "Houston County",
    state: "GA",
    zip: "31069",
    driveMinutes: 25,
    driveDirection: "north",
    exitNumber: "Exit 135",
    highway: "I-75",
    title: "iPhone Repair Perry GA | Houston County | Tech Medics Macon",
    metaDescription:
      "iPhone repair for Perry GA & southern Houston County. 25 min from Georgia National Fairgrounds via I-75 Exit 135. Same-day screen & battery. Call (478) 259-6371.",
    keywords: [
      "iPhone repair Perry GA",
      "phone repair Perry Georgia 31069",
      "iPhone screen Houston County",
      "Georgia National Fairgrounds repair",
      "iPhone repair near Centerville GA",
    ],
    h1: "iPhone Repair for Perry, GA Residents",
    subtitle: "Serving Perry, Houston Lake, Bonaire & Centerville (31069 / 31093)",
    intro: [
      "Perry residents looking for fast, affordable iPhone repair drive about 25 minutes north on I-75 to reach Tech Medics. We are the closest dedicated Apple-focused repair shop with same-day screen and battery service — every other option from Perry is either an hour to Atlanta or a multi-day mail-in.",
      "We work on a steady stream of Perry customers, especially during Georgia National Fair week each October and during the Atlanta Motorsports Park events at the fairgrounds. Concrete pavilions, packed crowds, and cell-phones-as-cameras add up to a lot of cracked screens — and we keep extra stock in October to absorb the spike.",
    ],
    landmarks: [
      "Georgia National Fairgrounds & Agricenter (Exit 135)",
      "Houston Lake Country Club / Houston Lake area",
      "Perry High School & Westfield School",
      "Robins AFB commuter corridor (US-41)",
      "Downtown Perry historic district",
    ],
    localIssues: [
      {
        title: "Cracked Screens After Fairgrounds Events",
        description:
          "The Georgia National Fair, Mossy Oak Properties events, and livestock shows all generate a wave of dropped phones. We pre-stock iPhone 14, 15, and 16 screens before Fair week so Perry walk-ins don't wait.",
      },
      {
        title: "Battery Drain from Robins AFB Commutes",
        description:
          "Perry-to-Robins commuters running CarPlay plus navigation plus hotspot are hard on batteries. We see early-life battery replacement requests on 2-year-old iPhones from this corridor often. Premium-cell replacement in ~30 minutes.",
      },
      {
        title: "Charging Port Failures from Truck/Vehicle Mounts",
        description:
          "Vibration from work trucks and tractors loosens Lightning and USB-C connectors faster than typical use. We clean or replace the charging port and confirm fast-charge functionality before you leave.",
      },
    ],
    directions:
      "From Perry, head north on I-75 toward Macon, then take Exit 164 (Eisenhower Parkway). At the top of the ramp, turn left (west) and Tech Medics is just past the Mercer University Drive intersection on the right, at 3742 Eisenhower Parkway. Plan on roughly 25 minutes door-to-door with normal traffic.",
    localContext:
      "Perry's population of about 19,000 makes it the largest city in southern Houston County, and the combination of fairground tourism, Robins AFB contractors, and Perry Senior High students keeps device-repair demand steady year-round. Because Apple does not have a brick-and-mortar location closer than Atlanta or Augusta, Perry customers who want hands-on, same-day iPhone service rely on shops like Tech Medics. We treat the Perry market seriously — we stock parts for every iPhone model from the 7 to the 16 Pro Max, offer a 30-day warranty on parts and labor, and can also handle iPad and MacBook repairs in the same visit so a single trip to Macon covers a household's devices.",
    faqs: [
      {
        question: "Is Tech Medics worth the drive from Perry?",
        answer:
          "For same-day repair, yes. The next-closest Apple-experienced shops are an hour-plus to Atlanta, and Apple Stores are even further. From Perry, the door-to-door drive is about 25 minutes, and most screen repairs finish in 30 minutes — so a typical visit is under 90 minutes total.",
      },
      {
        question: "Do you stock screens for the older iPhones still common in Perry?",
        answer:
          "Yes. We stock iPhone 8, X, XR, 11, 12, 13 screens regularly, and we can also repair iPhone 7 and SE models. Call ahead at (478) 259-6371 only if you have a particularly rare model.",
      },
      {
        question: "Can you fix iPhones for the Georgia National Fairgrounds vendors?",
        answer:
          "Yes — Fair-week is one of our busiest times. We've handled emergency repairs for vendors, exhibitors, and performers. Call first during Fair week and we'll prioritize the part you need.",
      },
      {
        question: "Do you offer warranty on repairs done for Perry customers?",
        answer:
          "Every repair includes a 30-day warranty on parts and labor regardless of where you live. If anything related to the repair fails within 30 days, bring the device back and we'll make it right.",
      },
    ],
    relatedLinks: [
      { label: "Houston County Phone Repair", href: "/macon/houston-county-phone-repair" },
      { label: "Warner Robins iPhone Repair", href: "/macon/warner-robins-iphone-repair" },
      { label: "Byron iPhone Repair", href: "/macon/byron-iphone-repair" },
      { label: "iPhone 14 Repair", href: "/macon/iphone/iphone-14-repair" },
      { label: "Charging Port Repair", href: "/macon/charging-port-repair" },
      { label: "Battery Replacement", href: "/macon/battery-replacement" },
    ],
  },

  {
    slug: "forsyth-iphone-repair",
    city: "Forsyth",
    county: "Monroe County",
    state: "GA",
    zip: "31029",
    driveMinutes: 25,
    driveDirection: "south",
    exitNumber: "Exit 187",
    highway: "I-75",
    title: "iPhone Repair Forsyth GA | Monroe County | Tech Medics Macon",
    metaDescription:
      "iPhone repair for Forsyth GA & Monroe County. 25 min south on I-75 from Exit 187. Same-day screen, battery & water damage repair. Call (478) 259-6371.",
    keywords: [
      "iPhone repair Forsyth GA",
      "phone repair Monroe County 31029",
      "iPhone screen Juliette GA",
      "iPhone repair near Tift College",
      "phone repair High Falls State Park",
    ],
    h1: "iPhone Repair for Forsyth, GA Residents",
    subtitle: "Serving Forsyth, Juliette, Bolingbroke & all of Monroe County (31029)",
    intro: [
      "Forsyth is the closest Monroe County town to Macon, and Tech Medics is the closest dedicated Apple-focused repair shop with same-day service — about a 25-minute trip south on I-75. We see Forsyth customers regularly, including a steady flow of weekend visitors from High Falls State Park and Juliette who drop their phones during day trips.",
      "Because Forsyth is also home to the Georgia Public Safety Training Center and Mary Persons High, we work on a mix of duty-issued and personal iPhones. Time on the device is critical for first responders and students, so we prioritize 30-minute screen turnarounds whenever possible.",
    ],
    landmarks: [
      "Historic downtown Forsyth & courthouse square",
      "Tift College / Mercer-Tift Forsyth campus",
      "Georgia Public Safety Training Center (GPSTC)",
      "High Falls State Park (popular cracked-screen origin point)",
      "Juliette / Whistle Stop Cafe area",
    ],
    localIssues: [
      {
        title: "Water Damage from High Falls State Park",
        description:
          "Slips on the wet rocks at High Falls bring in several Forsyth-area iPhones each summer. We use ultrasonic cleaning and component-level repair to recover devices — the sooner you arrive without trying to charge it, the better the outcome.",
      },
      {
        title: "Screen Cracks from Daily I-75 Commutes",
        description:
          "Forsyth-to-Macon and Forsyth-to-Atlanta commuters keep iPhones in cup holders that catch every speed bump. We replace the full OLED assembly in about 30 minutes with premium parts and re-calibrate True Tone.",
      },
      {
        title: "Battery Failures on Older iPhones",
        description:
          "Many Monroe County customers hold onto iPhones for 4+ years. iPhone XR, 11, and 12 battery replacements are some of our most frequent Forsyth jobs — we stock these cells continuously.",
      },
    ],
    directions:
      "From Forsyth, take I-75 South toward Macon. Stay on I-75 for roughly 22 miles to Exit 164 (Eisenhower Parkway). Turn right at the top of the ramp and Tech Medics is just under a half-mile down on the right at 3742 Eisenhower Parkway. The drive is almost entirely highway and runs about 25 minutes outside of rush hour.",
    localContext:
      "Monroe County's population sits near 28,000 with Forsyth as the county seat. The community is split between long-time residents, GPSTC trainees, Mercer-Tift commuters, and Atlanta-bound professionals who chose Forsyth for its quieter pace. That mix means we see every kind of iPhone repair from Forsyth — a brand-new iPhone 16 Pro Max with a cracked back glass, an iPhone XR that just won't hold a charge, an iPhone 11 with a swollen battery, and the occasional water-damaged iPhone fished out of High Falls. We stock parts for all of these and run the same 30-day warranty on parts and labor we offer Macon walk-ins. If you need iPad or MacBook repair as well, we can typically handle multiple devices in a single Forsyth-to-Macon trip.",
    faqs: [
      {
        question: "How long does the drive from Forsyth to Tech Medics take?",
        answer:
          "About 25 minutes via I-75 South to Exit 164 (Eisenhower Parkway). The entire route is highway, so timing is predictable outside of rush hour.",
      },
      {
        question: "Do you work on iPhones for GPSTC trainees and Mary Persons students?",
        answer:
          "Yes — we serve both groups regularly. We can prioritize repairs for first responders on duty if you call ahead, and we offer a student discount with a valid ID.",
      },
      {
        question: "Can you fix an iPhone that went in the water at High Falls?",
        answer:
          "Often, yes. Bring it in powered off and do not attempt to charge it. We perform ultrasonic cleaning and component-level diagnostics. Successful recovery is far more likely within the first 48 hours.",
      },
      {
        question: "Are there closer repair shops in Forsyth itself?",
        answer:
          "There are a couple of general-purpose phone repair options closer, but for Apple-specific repair with same-day stock for the latest iPhone models, Tech Medics in Macon is the closest dedicated option.",
      },
    ],
    relatedLinks: [
      { label: "Monroe County Phone Repair", href: "/macon/monroe-county-phone-repair" },
      { label: "Bibb County Phone Repair", href: "/macon/bibb-county-phone-repair" },
      { label: "Water Damage Repair", href: "/macon/water-damage" },
      { label: "iPhone 11 Repair", href: "/macon/iphone/iphone-11-repair" },
      { label: "Battery Replacement", href: "/macon/battery-replacement" },
      { label: "Screen Repair", href: "/macon/screen-repair" },
    ],
  },
];

export function getServiceCity(slug: string): ServiceCityData | undefined {
  return serviceCities.find((c) => c.slug === slug);
}
