import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, "../dist/public");
const templatePath = path.join(publicDir, "index.html");

const SITE_URL = "https://www.unframelife.com";
const SITE_NAME = "株式会社UNFRAME";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og/unframe-og.jpg`;

// Load the same metadata and news as the rendered site, avoiding stale duplicate copy.
const { build } = await import("esbuild");
const result = await build({entryPoints: [path.resolve(__dirname, "../client/src/lib/seo.ts")], bundle: true, write: false, platform: "node", format: "esm"});
const { pageSeo, getJsonLdForPath } = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString("base64")}`);
const newsResult = await build({entryPoints: [path.resolve(__dirname, "../client/src/lib/newsData.ts")], bundle: true, write: false, platform: "node", format: "esm"});
const { newsData } = await import(`data:text/javascript;base64,${Buffer.from(newsResult.outputFiles[0].text).toString("base64")}`);
const journalResult = await build({entryPoints: [path.resolve(__dirname, "../client/src/lib/aiJournalData.ts")], bundle: true, write: false, platform: "node", format: "esm"});
const { aiJournalData } = await import(`data:text/javascript;base64,${Buffer.from(journalResult.outputFiles[0].text).toString("base64")}`);
const pages = Object.values(pageSeo).map(page => ({...page, h1: page.fallbackTitle ?? page.title, body: page.fallbackText ?? page.description}));

const newsItems = newsData.map(item => ({...item, date: item.date.replaceAll(".", "-"), h1: item.title, body: item.content, description: item.excerpt}));
const journalItems = aiJournalData.map(item => ({...item, date: item.date.replaceAll(".", "-"), h1: item.title, body: item.content, description: item.excerpt}));

const allPages = [
  ...pages.map((page) => ({ ...page, type: "website", image: DEFAULT_OG_IMAGE })),
  ...newsItems.map((item) => ({
    path: `/news/${item.id}`,
    title: `${item.title}｜${SITE_NAME}`,
    description: item.description,
    h1: item.title,
    body: item.description,
    type: "article",
    date: item.date,
    image: item.image ?? DEFAULT_OG_IMAGE,
  })),
  ...journalItems.map((item) => ({
    path: `/ai-journal/${item.id}`,
    title: `${item.title}｜AI Journal｜${SITE_NAME}`,
    description: item.description,
    h1: item.title,
    body: item.description,
    type: "article",
    date: item.date,
    image: item.image ?? DEFAULT_OG_IMAGE,
  })),
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function absoluteUrl(pathname) {
  return `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
}

function removeExistingSeoTags(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/\s*<meta\s+name=["']description["'][^>]*>/gi, "")
    .replace(/\s*<meta\s+name=["']keywords["'][^>]*>/gi, "")
    .replace(/\s*<meta\s+property=["']og:[^"']+["'][^>]*>/gi, "")
    .replace(/\s*<meta\s+name=["']twitter:[^"']+["'][^>]*>/gi, "")
    .replace(/\s*<link\s+rel=["']canonical["'][^>]*>/gi, "");
}

function baseJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.png`,
      founder: { "@type": "Person", name: "河原田茉莉" },
      address: {
        "@type": "PostalAddress",
        postalCode: "220-0004",
        addressRegion: "神奈川県",
        addressLocality: "横浜市西区",
        streetAddress: "北幸二丁目10番48号 むつみビル3階",
        addressCountry: "JP",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@ai-unframe.com",
        contactType: "customer support",
        availableLanguage: ["Japanese"],
      },
      sameAs: ["https://www.instagram.com/mari_partner/"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "ja",
    },
  ];
}

function jsonLdForPage(page) { return getJsonLdForPath(page.path); }

function headTags(page) {
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const url = absoluteUrl(page.path);
  const image = page.image ?? DEFAULT_OG_IMAGE;
  const scripts = jsonLdForPage(page)
    .map(
      (item) =>
        `<script type="application/ld+json" data-seo-json-ld="true">${JSON.stringify(item)}</script>`,
    )
    .join("\n    ");

  return `    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="${page.type ?? "website"}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:locale" content="ja_JP" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />
    <link rel="canonical" href="${url}" />
${scripts}`;
}

function sectionsMarkup(page) {
  let sections = page.sections ?? [];

  // News index: render the article list so crawlers see every headline.
  if (page.path === "/news") {
    sections = [
      ...sections,
      {
        h2: "最新ニュース",
        items: newsItems.map((item) => `${item.date}：${item.title}`),
      },
    ];
  }

  if (page.path === "/ai-journal") {
    sections = [
      ...sections,
      {
        h2: "最新記事",
        items: journalItems.map((item) => `${item.date}：${item.title}`),
      },
    ];
  }

  return sections
    .map((section) => {
      const heading = `<h2 style="font-family: 'Shippori Mincho', serif; font-size: 24px; font-weight: 500; margin-top: 2.5em;">${escapeHtml(section.h2)}</h2>`;
      const text = section.text ? `<p>${escapeHtml(section.text)}</p>` : "";
      const list = section.items
        ? `<ul>${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
        : "";
      return `${heading}${text}${list}`;
    })
    .join("");
}

function fallbackMarkup(page) {
  return `<div id="root"><main class="seo-fallback" style="max-width: 880px; margin: 96px auto; padding: 0 24px; font-family: 'Noto Sans JP', sans-serif; line-height: 1.9; color: #1f1f1f;"><p style="letter-spacing: .18em; color: #b06f6f; font-size: 12px;">UNFRAME</p><h1 style="font-family: 'Shippori Mincho', serif; font-size: clamp(32px, 6vw, 56px); font-weight: 500; line-height: 1.35;">${escapeHtml(page.h1)}</h1><p>${escapeHtml(page.body)}</p>${sectionsMarkup(page)}<nav aria-label="ページ一覧">${pages.map(item => `<p><a href="${item.path}">${escapeHtml(item.h1)}</a></p>`).join("")}</nav></main></div>`;
}

function outputPathForRoute(routePath) {
  if (routePath === "/") return path.join(publicDir, "index.html");
  return path.join(publicDir, routePath, "index.html");
}

function renderPage(template, page) {
  const withoutSeo = removeExistingSeoTags(template);
  return withoutSeo
    .replace(/\s*<\/head>/i, `\n${headTags(page)}\n  </head>`)
    .replace(/<div id="root"><\/div>/, fallbackMarkup(page));
}

function writePage(template, page) {
  const outPath = outputPathForRoute(page.path);
  mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(outPath, renderPage(template, page));
}

function writeSitemap() {
  const buildDate = new Date().toISOString().slice(0, 10);
  const urls = allPages
    .map(
      (page) => `  <url>
    <loc>${absoluteUrl(page.path)}</loc>
    <lastmod>${page.date ?? buildDate}</lastmod>
  </url>`,
    )
    .join("\n");

  writeFileSync(
    path.join(publicDir, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
  );
}

function writeRobots() {
  writeFileSync(
    path.join(publicDir, "robots.txt"),
    `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`,
  );
}

function write404(template) {
  const page = {
    path: "/404",
    title: `ページが見つかりません｜${SITE_NAME}`,
    description: "お探しのページは見つかりませんでした。",
    h1: "ページが見つかりません",
    body: "URLをご確認のうえ、トップページまたは各メニューから目的のページへお進みください。",
    type: "website",
    image: DEFAULT_OG_IMAGE,
  };
  writeFileSync(path.join(publicDir, "404.html"), renderPage(template, page));
}

if (!existsSync(templatePath)) {
  throw new Error(`Vite output was not found: ${templatePath}`);
}

const template = readFileSync(templatePath, "utf8");
allPages.forEach((page) => writePage(template, page));
write404(template);
writeSitemap();
writeRobots();

console.log(`Generated SEO HTML for ${allPages.length} routes, sitemap.xml, robots.txt, and 404.html.`);
