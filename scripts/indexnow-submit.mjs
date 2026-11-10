#!/usr/bin/env node
/**
 * IndexNow submission helper.
 *
 * Pings IndexNow (Bing, Yandex, Seznam, Naver) with all canonical URLs from
 * the sitemap. Run after each deploy:
 *
 *   node scripts/indexnow-submit.mjs
 *
 * IndexNow does NOT submit to Google. For Google, use Search Console's URL
 * Inspection -> "Request Indexing" on the most important pages, or the
 * (deprecated for general use) Indexing API for job postings/livestreams only.
 *
 * Tip: this script also pings Google's sitemap endpoint, which is harmless
 * and reminds Google to re-fetch the sitemap.
 */

const KEY = "598bbc0d3a1121988294fef187c8957b";
const HOST = "techmedicsmacon.com";
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Failed to fetch sitemap: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function submitIndexNow(urls) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  };
  const res = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  console.log(`IndexNow: HTTP ${res.status} for ${urls.length} URLs`);
  if (res.status >= 400) {
    console.log(await res.text());
  }
}

async function pingGoogleSitemap() {
  // Google deprecated this in 2023 but still accepts it; harmless if ignored.
  const url = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  const res = await fetch(url);
  console.log(`Google sitemap ping: HTTP ${res.status}`);
}

async function pingBingSitemap() {
  const url = `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  const res = await fetch(url);
  console.log(`Bing sitemap ping: HTTP ${res.status}`);
}

(async () => {
  const urls = await fetchSitemapUrls();
  console.log(`Loaded ${urls.length} URLs from sitemap`);
  // IndexNow accepts up to 10,000 URLs per request.
  await submitIndexNow(urls);
  await pingBingSitemap();
  await pingGoogleSitemap();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
