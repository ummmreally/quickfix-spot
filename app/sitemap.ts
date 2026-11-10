import type { MetadataRoute } from "next";
import { neighborhoods } from "./data/neighborhoods";
import { neighborhoodsRich } from "./data/neighborhoods-rich";
import { iphoneModels } from "./data/iphone-models";

export const dynamic = "force-static";

// Real, honest lastModified dates per page. When you meaningfully update a page,
// bump its date here. Google ignores uniform `now` timestamps; honest per-page
// dates are a real freshness signal.
const LASTMOD = {
  home: "2026-05-24",
  maconHub: "2026-05-24",
  // Service hubs
  iphoneHub: "2026-04-15",
  ipadHub: "2026-03-10",
  macbookHub: "2026-03-10",
  imacHub: "2026-07-07",
  // Services
  screenRepair: "2026-03-10",
  batteryReplacement: "2026-03-10",
  chargingPort: "2026-03-10",
  waterDamage: "2026-03-10",
  gameConsole: "2026-07-07",
  consoleHdmi: "2026-07-07",
  ps5Repair: "2026-07-07",
  xboxRepair: "2026-07-07",
  dataRecovery: "2026-02-15",
  cameraRepair: "2026-02-15",
  backGlass: "2026-02-15",
  buttonRepair: "2026-02-15",
  macbookKeyboard: "2026-02-15",
  // City pages — REWRITTEN today
  byron: "2026-05-24",
  perry: "2026-05-24",
  forsyth: "2026-05-24",
  warnerRobinsIphone: "2026-04-01",
  warnerRobinsIpad: "2026-03-15",
  warnerRobinsMac: "2026-03-15",
  // Counties
  houstonCounty: "2026-04-01",
  peachCounty: "2026-03-15",
  monroeCounty: "2026-03-15",
  bibbCounty: "2026-04-01",
  // Other
  services: "2026-02-15",
  reviews: "2026-03-15",
  contact: "2026-01-15",
  about: "2026-01-15",
  accessories: "2026-01-15",
  business: "2026-01-15",
  education: "2026-01-15",
  diy: "2026-01-15",
  afterpay: "2026-02-15",
  walkIn: "2026-01-15",
  warranty: "2026-01-15",
  freeDiagnostic: "2026-02-15",
  tradeIn: "2026-01-15",
  appleGenuine: "2026-04-01",
  pricingChart: "2026-04-15",
  blogIndex: "2026-05-01",
  privacy: "2025-11-01",
  warrantyPolicy: "2025-11-01",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://techmedicsmacon.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: LASTMOD.home, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/macon/`, lastModified: LASTMOD.maconHub, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/macon/iphone/`, lastModified: LASTMOD.iphoneHub, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/macon/ipad/`, lastModified: LASTMOD.ipadHub, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/macon/macbook/`, lastModified: LASTMOD.macbookHub, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/macon/imac/`, lastModified: LASTMOD.imacHub, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/macon/screen-repair/`, lastModified: LASTMOD.screenRepair, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/macon/battery-replacement/`, lastModified: LASTMOD.batteryReplacement, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/macon/charging-port-repair/`, lastModified: LASTMOD.chargingPort, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/macon/water-damage/`, lastModified: LASTMOD.waterDamage, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/macon/game-console-repair/`, lastModified: LASTMOD.gameConsole, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/macon/console-hdmi-stick-drift/`, lastModified: LASTMOD.consoleHdmi, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/macon/ps5-repair/`, lastModified: LASTMOD.ps5Repair, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/macon/xbox-repair/`, lastModified: LASTMOD.xboxRepair, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/macon/data-recovery/`, lastModified: LASTMOD.dataRecovery, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/macon/camera-repair/`, lastModified: LASTMOD.cameraRepair, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/macon/back-glass-repair/`, lastModified: LASTMOD.backGlass, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/macon/button-repair/`, lastModified: LASTMOD.buttonRepair, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/macon/macbook-keyboard-repair/`, lastModified: LASTMOD.macbookKeyboard, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/macon/warner-robins-iphone-repair/`, lastModified: LASTMOD.warnerRobinsIphone, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/macon/warner-robins-ipad-repair/`, lastModified: LASTMOD.warnerRobinsIpad, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/macon/warner-robins-macbook-repair/`, lastModified: LASTMOD.warnerRobinsMac, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/macon/byron-iphone-repair/`, lastModified: LASTMOD.byron, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/macon/perry-iphone-repair/`, lastModified: LASTMOD.perry, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/macon/forsyth-iphone-repair/`, lastModified: LASTMOD.forsyth, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/macon/houston-county-phone-repair/`, lastModified: LASTMOD.houstonCounty, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/macon/peach-county-phone-repair/`, lastModified: LASTMOD.peachCounty, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/macon/monroe-county-phone-repair/`, lastModified: LASTMOD.monroeCounty, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/macon/bibb-county-phone-repair/`, lastModified: LASTMOD.bibbCounty, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/macon/services/`, lastModified: LASTMOD.services, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/macon/reviews/`, lastModified: LASTMOD.reviews, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/macon/contact/`, lastModified: LASTMOD.contact, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/macon/about/`, lastModified: LASTMOD.about, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/macon/accessories/`, lastModified: LASTMOD.accessories, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/macon/business/`, lastModified: LASTMOD.business, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/macon/education/`, lastModified: LASTMOD.education, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/macon/diy-repair/`, lastModified: LASTMOD.diy, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/macon/afterpay/`, lastModified: LASTMOD.afterpay, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/macon/walk-in/`, lastModified: LASTMOD.walkIn, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/macon/warranty/`, lastModified: LASTMOD.warranty, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/macon/free-diagnostic/`, lastModified: LASTMOD.freeDiagnostic, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/macon/trade-in/`, lastModified: LASTMOD.tradeIn, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/macon/apple-genuine-parts/`, lastModified: LASTMOD.appleGenuine, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/macon/pricing-chart/`, lastModified: LASTMOD.pricingChart, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog/`, lastModified: LASTMOD.blogIndex, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/privacy/`, lastModified: LASTMOD.privacy, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/warranty-policy/`, lastModified: LASTMOD.warrantyPolicy, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Neighborhood pages: rewritten ones get today's date; legacy ones keep an older date.
  const neighborhoodPages: MetadataRoute.Sitemap = neighborhoods.map((n) => ({
    url: `${baseUrl}/macon/${n.slug}/`,
    lastModified: neighborhoodsRich[n.slug] ? "2026-05-24" : "2026-03-01",
    changeFrequency: "monthly" as const,
    priority: n.slug === "warner-robins" ? 0.85 : neighborhoodsRich[n.slug] ? 0.75 : 0.7,
  }));

  const blogSlugs = [
    "iphone-screen-repair-macon-ga",
    "iphone-battery-replacement-macon",
    "tech-medics-vs-apple-store-repair",
    "macbook-repair-macon-ga",
    "ipad-screen-repair-macon",
    "oem-vs-aftermarket-iphone-screens",
    "iphone-not-turning-on-fix",
    "choose-phone-repair-shop-macon",
    "water-damaged-iphone-repair",
    "iphone-screen-repair-cost-macon",
    "iphone-repair-near-me-macon",
    "same-day-iphone-repair-macon",
    "iphone-dying-fast-after-charging",
    "swollen-iphone-battery-replacement-macon",
    "macbook-screen-repair-cost-macon",
    "game-console-repair-macon-ga",
    "ps5-repair-macon-ga",
    "xbox-repair-macon-ga",
    "data-recovery-macon-ga",
    "iphone-repair-warner-robins-ga",
    "iphone-screen-repair-vs-replacement",
    "macbook-battery-issues-swelling-macon",
    "water-damage-phone-repair-cost-houston-county",
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}/`,
    lastModified: "2026-04-15",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Newer iPhone models get newer lastmod; older models stay stable
  const iphoneModelPages: MetadataRoute.Sitemap = iphoneModels.map((m) => {
    const lastModified =
      m.year >= 2024 ? "2026-04-15" : m.year >= 2022 ? "2026-03-01" : m.year >= 2020 ? "2026-02-01" : "2025-12-01";
    return {
      url: `${baseUrl}/macon/iphone/${m.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: m.year >= 2023 ? 0.9 : 0.85,
    };
  });

  return [...staticPages, ...neighborhoodPages, ...iphoneModelPages, ...blogPages];
}
