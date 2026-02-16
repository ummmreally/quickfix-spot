import type { MetadataRoute } from "next";
import { neighborhoods } from "./data/neighborhoods";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://techmedicsmacon.com";
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/macon`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/macon/iphone`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/macon/ipad`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/macon/macbook`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/macon/screen-repair`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/macon/battery-replacement`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/macon/charging-port-repair`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/macon/water-damage`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/macon/game-console-repair`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/macon/data-recovery`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/macon/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/macon/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/macon/reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/macon/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/macon/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/macon/business`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/macon/education`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/macon/diy-repair`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/warranty-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const neighborhoodPages: MetadataRoute.Sitemap = neighborhoods.map((n) => ({
    url: `${baseUrl}/macon/${n.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: n.slug === "warner-robins" ? 0.8 : 0.7,
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
    "iphone-vs-android-repair-costs-macon",
    "game-console-repair-macon-ga",
    "data-recovery-macon-ga",
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...neighborhoodPages, ...blogPages];
}
