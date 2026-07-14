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

const pages = [
  {
    path: "/",
    title: "株式会社UNFRAME｜化粧品開発・ブランド支援・法人AI研修",
    description:
      "株式会社UNFRAMEは、化粧品OEM・ブランド開発・商品企画と、法人向けAI研修・デジタル活用支援を提供します。代表は薬剤師・事業構想修士の河原田茉莉。",
    h1: "自由な生き方を、事業の力に変える。",
    body: "UNFRAMEは、化粧品開発・ブランド支援・法人AI研修を通じて、想いが事業として動き出すまでを伴走する会社です。",
  },
  {
    path: "/about",
    title: "ABOUT｜UNFRAMEの考え方・事業紹介｜株式会社UNFRAME",
    description:
      "株式会社UNFRAMEの考え方と事業紹介。美容・化粧品ブランド支援とAI研修を軸に、事業と人の可能性を広げる伴走支援を行います。",
    h1: "UNFRAMEの考え方・事業紹介",
    body: "UNFRAMEは、美容とAIを軸に、ブランド・事業・人の可能性を広げる伴走型の会社です。",
  },
  {
    path: "/cosmetics",
    title: "化粧品OEM・ブランド開発支援｜株式会社UNFRAME",
    description:
      "化粧品OEM、ブランド開発、商品企画、市場リサーチ、処方提案、製造管理まで一貫支援。化粧品開発経験をもとにブランドの芯を形にします。",
    h1: "化粧品OEM・ブランド開発支援",
    body: "市場リサーチからコンセプト企画、処方提案、製造管理まで、化粧品・美容ブランドの立ち上げを支援します。",
  },
  {
    path: "/ai-training",
    title: "法人AI研修・生成AI活用支援｜株式会社UNFRAME",
    description:
      "法人向けAI研修、生成AI活用、業務効率化、AIリテラシー研修を提供。現場で使えるAI活用を、業界や職種に合わせて伴走支援します。",
    h1: "法人AI研修・生成AI活用支援",
    body: "知識で終わらせず、翌日から業務で使える状態を目指す法人向けAI研修を提供します。",
  },
  {
    path: "/profile",
    title: "代表プロフィール 河原田茉莉｜株式会社UNFRAME",
    description:
      "株式会社UNFRAME代表・河原田茉莉のプロフィール。薬剤師、事業構想修士。化粧品開発、ブランド支援、AI研修を横断して活動しています。",
    h1: "代表プロフィール 河原田茉莉",
    body: "河原田茉莉は、薬剤師・事業構想修士として、化粧品開発、ブランド支援、AI研修を横断して活動しています。",
  },
  {
    path: "/news",
    title: "ニュース｜株式会社UNFRAME",
    description:
      "株式会社UNFRAMEのニュース一覧。美容、化粧品開発、ブランド支援、AI研修、登壇、監修実績などの最新情報を掲載しています。",
    h1: "ニュース",
    body: "美容、化粧品開発、ブランド支援、AI研修、登壇、監修実績などの最新情報を掲載しています。",
  },
  {
    path: "/contact",
    title: "お問い合わせ｜株式会社UNFRAME",
    description: "化粧品開発、ブランド支援、法人AI研修、デジタル活用支援に関するご相談・お問い合わせはこちらから。",
    h1: "お問い合わせ",
    body: "化粧品開発、ブランド支援、法人AI研修、デジタル活用支援に関するご相談を受け付けています。",
  },
  {
    path: "/company",
    title: "会社概要｜株式会社UNFRAME",
    description: "株式会社UNFRAMEの会社概要。代表者、事業内容、お問い合わせ先など、法人情報を掲載しています。",
    h1: "会社概要",
    body: "株式会社UNFRAMEは、化粧品・美容ブランドの企画開発支援、AI研修・デジタル活用支援を行っています。",
  },
];

const newsItems = [
  {
    id: "2026-07-kokuhaku-cosmetics-supervision",
    date: "2026-07-11",
    title: "日本テレビ系ドラマ『告白－25年目の秘密－』のコスメ監修を担当しました",
    description:
      "2026年7月11日に初回放送を迎えた日本テレビ系ドラマ『告白－25年目の秘密－』にて、株式会社UNFRAME代表・河原田茉莉がコスメ監修を担当しました。",
    image: `${SITE_URL}/images/news/kokuhaku-logo.jpg`,
  },
  {
    id: "2026-05-yamano-lecture",
    date: "2026-05-21",
    title: "山野美容芸術短期大学にて「美容福祉×AI」をテーマに特別授業を実施",
    description:
      "「ボーダレス・ビューティ 制約を可能性に変える、美容福祉とAIの未来」をテーマに90分の特別授業を実施。回答者34名中32名が「美容福祉の見え方が変わった」と回答。",
  },
  {
    id: "2026-04-reborn-beauty-summit",
    date: "2026-04-14",
    title: "「Beauty & Mind Synergy Summit 2026」に登壇",
    description:
      "化粧品開発の知見とAIを活かし、\"化粧品迷子\"を卒業する方法を紹介。13年以上の化粧品開発経験をもとに、自分に合う化粧品を選ぶための考え方と「美の設計図AI」を解説しました。",
  },
  {
    id: "2025-12-imsi-branding",
    date: "2025-12-15",
    title: "IMSI「AI×ブランディング講座」開講のお知らせ",
    description: "創立30周年を迎える自然療法スクールにて、セラピスト向け「AI×ブランディング講座」を主宰します。",
  },
  {
    id: "2025-11-branding-lecture-1500",
    date: "2025-11-07",
    title: "社員数1500名の企業にてブランディング講演に登壇",
    description:
      "大手企業にてブランディングをテーマに2時間の講演・対談を実施。起業家としての経験を踏まえ、コーポレートブランディングとセルフブランディングについてお話ししました。",
  },
  {
    id: "2025-11-innovator-talk",
    date: "2025-11-01",
    title: "企業でのイノベータ対談に登壇",
    description: "イノベータ対談に登壇。市場の変化のスピードが上がっている今こそ大切な要素について語りました。",
  },
  {
    id: "2025-11-mirai-ai",
    date: "2025-11-01",
    title: "文科省認可スクール「未来AI学院」講師就任",
    description: "文科省認可スクール「未来AI学院」の立ち上げサポート・講師として参画しました。",
  },
  {
    id: "2025-10-of-brand-debut",
    date: "2025-10-15",
    title: "自社ブランド「OF」がデビュー ― ソーシャルジェットラグに着目したスキンケア",
    description:
      "昨年から準備していたスキンケアブランド「OF」がついにデビュー。SNS時代の肌ストレスに着目し、マイクロバイオーム（皮膚常在菌）にフォーカスした美容液です。",
  },
  {
    id: "2025-10-new-brand",
    date: "2025-10-05",
    title: "新規ヘアケアブランドの立ち上げ支援",
    description:
      "新たにヘアケアブランドの立ち上げを支援。市場リサーチからコンセプト企画、処方提案、製造まで一貫してサポートしています。",
  },
  {
    id: "2025-09-care-ai",
    date: "2025-09-15",
    title: "介護業界向けAI×マーケティング支援を開始",
    description: "介護業界（支援事業者）向けに、AI×マーケティング支援サービスを開始しました。",
  },
];

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
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@ai-unframe.jp",
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

function jsonLdForPage(page) {
  const jsonLd = baseJsonLd();

  if (page.path === "/profile") {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "河原田茉莉",
      url: `${SITE_URL}/profile`,
      jobTitle: "株式会社UNFRAME 代表",
      affiliation: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      knowsAbout: ["化粧品開発", "ブランド開発", "AI研修", "生成AI活用", "薬学"],
      alumniOf: "事業構想大学院大学",
      hasCredential: ["薬剤師", "事業構想修士"],
      sameAs: ["https://www.instagram.com/mari_partner/"],
    });
  }

  if (page.type === "article") {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: page.h1,
      description: page.description,
      image: page.image,
      datePublished: page.date,
      dateModified: page.date,
      inLanguage: "ja",
      mainEntityOfPage: absoluteUrl(page.path),
      author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` },
      },
    });
  }

  return jsonLd;
}

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

function fallbackMarkup(page) {
  return `<div id="root"><main class="seo-fallback" style="max-width: 880px; margin: 96px auto; padding: 0 24px; font-family: 'Noto Sans JP', sans-serif; line-height: 1.9; color: #1f1f1f;"><p style="letter-spacing: .18em; color: #b06f6f; font-size: 12px;">UNFRAME</p><h1 style="font-family: 'Shippori Mincho', serif; font-size: clamp(32px, 6vw, 56px); font-weight: 500; line-height: 1.35;">${escapeHtml(page.h1)}</h1><p>${escapeHtml(page.body)}</p></main></div>`;
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
  const urls = allPages
    .map(
      (page) => `  <url>
    <loc>${absoluteUrl(page.path)}</loc>
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
