import { newsData } from "./newsData";

export const SITE_URL = "https://www.unframelife.com";
export const SITE_NAME = "株式会社UNFRAME";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og/unframe-og.jpg`;

export interface SeoConfig {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  fallbackTitle?: string;
  fallbackText?: string;
}

export const pageSeo: Record<string, SeoConfig> = {
  "/": {
    title: "株式会社UNFRAME｜化粧品開発・ブランド支援・法人AI研修",
    description:
      "株式会社UNFRAMEは、化粧品OEM・ブランド開発・商品企画と、法人向けAI研修・デジタル活用支援を提供します。代表は薬剤師・事業構想修士の河原田茉莉。",
    path: "/",
    fallbackTitle: "化粧品開発・ブランド支援・法人AI研修",
    fallbackText:
      "株式会社UNFRAMEは、美容とAIの力を通じて、ブランド・事業・人の可能性を広げる伴走型の会社です。",
  },
  "/about": {
    title: "ABOUT｜UNFRAMEの考え方・事業紹介｜株式会社UNFRAME",
    description:
      "株式会社UNFRAMEの考え方と事業紹介。美容・化粧品ブランド支援とAI研修を軸に、事業と人の可能性を広げる伴走支援を行います。",
    path: "/about",
    fallbackTitle: "UNFRAMEの考え方・事業紹介",
    fallbackText:
      "UNFRAMEは、美容とAIを軸に、ブランド・事業・人の可能性を広げる伴走型の会社です。",
  },
  "/cosmetics": {
    title: "化粧品OEM・ブランド開発支援｜株式会社UNFRAME",
    description:
      "化粧品OEM、ブランド開発、商品企画、市場リサーチ、処方提案、製造管理まで一貫支援。化粧品開発経験をもとにブランドの芯を形にします。",
    path: "/cosmetics",
    fallbackTitle: "化粧品OEM・ブランド開発支援",
    fallbackText:
      "市場リサーチからコンセプト企画、処方提案、製造管理まで、化粧品・美容ブランドの立ち上げを支援します。",
  },
  "/ai-training": {
    title: "法人AI研修・生成AI活用支援｜株式会社UNFRAME",
    description:
      "法人向けAI研修、生成AI活用、業務効率化、AIリテラシー研修を提供。現場で使えるAI活用を、業界や職種に合わせて伴走支援します。",
    path: "/ai-training",
    fallbackTitle: "法人AI研修・生成AI活用支援",
    fallbackText:
      "知識で終わらせず、翌日から業務で使える状態を目指す法人向けAI研修を提供します。",
  },
  "/profile": {
    title: "代表プロフィール 河原田茉莉｜株式会社UNFRAME",
    description:
      "株式会社UNFRAME代表・河原田茉莉のプロフィール。薬剤師、事業構想修士。化粧品開発、ブランド支援、AI研修を横断して活動しています。",
    path: "/profile",
    fallbackTitle: "代表プロフィール 河原田茉莉",
    fallbackText:
      "河原田茉莉は、薬剤師・事業構想修士として、化粧品開発、ブランド支援、AI研修を横断して活動しています。",
  },
  "/news": {
    title: "ニュース｜株式会社UNFRAME",
    description:
      "株式会社UNFRAMEのニュース一覧。美容、化粧品開発、ブランド支援、AI研修、登壇、監修実績などの最新情報を掲載しています。",
    path: "/news",
    fallbackTitle: "ニュース",
    fallbackText:
      "美容、化粧品開発、ブランド支援、AI研修、登壇、監修実績などの最新情報を掲載しています。",
  },
  "/contact": {
    title: "お問い合わせ｜株式会社UNFRAME",
    description:
      "化粧品開発、ブランド支援、法人AI研修、デジタル活用支援に関するご相談・お問い合わせはこちらから。",
    path: "/contact",
    fallbackTitle: "お問い合わせ",
    fallbackText:
      "化粧品開発、ブランド支援、法人AI研修、デジタル活用支援に関するご相談を受け付けています。",
  },
  "/company": {
    title: "会社概要｜株式会社UNFRAME",
    description:
      "株式会社UNFRAMEの会社概要。代表者、事業内容、お問い合わせ先など、法人情報を掲載しています。",
    path: "/company",
    fallbackTitle: "会社概要",
    fallbackText:
      "株式会社UNFRAMEは、化粧品・美容ブランドの企画開発支援、AI研修・デジタル活用支援を行っています。",
  },
};

export function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function normalizePath(path: string) {
  const cleanPath = path.split("?")[0].split("#")[0] || "/";
  if (cleanPath.length > 1 && cleanPath.endsWith("/")) {
    return cleanPath.slice(0, -1);
  }
  return cleanPath;
}

export function getSeoForPath(path: string): SeoConfig {
  const normalizedPath = normalizePath(path);
  const newsMatch = normalizedPath.match(/^\/news\/([^/]+)$/);

  if (newsMatch) {
    const item = newsData.find((news) => news.id === newsMatch[1]);
    if (item) {
      return {
        title: `${item.title}｜${SITE_NAME}`,
        description: item.excerpt,
        path: normalizedPath,
        type: "article",
        image: item.image ? absoluteUrl(item.image) : DEFAULT_OG_IMAGE,
        fallbackTitle: item.title,
        fallbackText: item.excerpt,
      };
    }
  }

  return (
    pageSeo[normalizedPath] ?? {
      title: `ページが見つかりません｜${SITE_NAME}`,
      description: "お探しのページは見つかりませんでした。",
      path: normalizedPath,
      fallbackTitle: "ページが見つかりません",
      fallbackText: "お探しのページは見つかりませんでした。",
    }
  );
}

export function getBaseJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.png`,
      founder: {
        "@type": "Person",
        name: "河原田茉莉",
      },
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

export function getJsonLdForPath(path: string) {
  const seo = getSeoForPath(path);
  const jsonLd = getBaseJsonLd();

  if (normalizePath(path) === "/profile") {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "河原田茉莉",
      url: `${SITE_URL}/profile`,
      jobTitle: "株式会社UNFRAME 代表",
      affiliation: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      knowsAbout: ["化粧品開発", "ブランド開発", "AI研修", "生成AI活用", "薬学"],
      alumniOf: "事業構想大学院大学",
      hasCredential: ["薬剤師", "事業構想修士"],
      sameAs: ["https://www.instagram.com/mari_partner/"],
    } as any);
  }

  const newsMatch = normalizePath(path).match(/^\/news\/([^/]+)$/);
  if (newsMatch) {
    const item = newsData.find((news) => news.id === newsMatch[1]);
    if (item) {
      jsonLd.push({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: item.title,
        description: item.excerpt,
        image: item.image ? absoluteUrl(item.image) : DEFAULT_OG_IMAGE,
        datePublished: item.date.replace(/\./g, "-"),
        dateModified: item.date.replace(/\./g, "-"),
        inLanguage: "ja",
        mainEntityOfPage: absoluteUrl(seo.path),
        author: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/favicon.png`,
          },
        },
      } as any);
    }
  }

  return jsonLd;
}
