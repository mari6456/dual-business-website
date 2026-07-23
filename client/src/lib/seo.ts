import { newsData } from "./newsData";

export const SITE_URL = "https://www.unframelife.com";
export const SITE_NAME = "株式会社UNFRAME";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og/unframe-og.jpg`;

const cosmeticsDevelopmentFaqs = [
  {
    question: "商品アイデアがまだ曖昧でも相談できますか？",
    answer:
      "はい。商品名・成分・OEM先が決まっていない段階からご相談いただけます。まず、誰にどんな価値を届けたいかを一緒に整理します。",
  },
  {
    question: "化粧品業界の知識がなくても大丈夫ですか？",
    answer:
      "大丈夫です。専門用語や開発の流れを分かりやすく説明し、判断が必要なポイントを一つずつ整理しながら進めます。",
  },
  {
    question: "OEM会社が決まっていなくても相談できますか？",
    answer:
      "はい。商品仕様・予算・希望ロットなどを整理したうえで、条件に合うOEM候補の検討と連携を支援します。",
  },
  {
    question: "何個から製造できますか？完成までどのくらいかかりますか？",
    answer:
      "最低ロットや期間は、商品カテゴリー・処方・容器・OEMによって異なります。初回相談で希望条件を伺い、実現可能な進め方を整理します。",
  },
  {
    question: "容器やパッケージ、表示確認も相談できますか？",
    answer:
      "はい。ブランド表現と商品仕様をつなぎ、OEMや各専門パートナーと連携しながら発売できる形まで整えます。",
  },
];

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
    fallbackTitle: "自由な生き方を、事業の力に。",
    fallbackText:
      "UNFRAMEは、化粧品開発・ブランド支援・法人AI研修を通じて、想いが事業として動き出すまでを伴走する会社です。",
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
    title: "化粧品開発相談受付・OEM/ブランド開発支援｜株式会社UNFRAME",
    description:
      "化粧品開発の初回相談を受付中。商品アイデアの整理、ブランド設計、OEM選定、処方・容器・製造進行まで、アイデア段階から商品化まで伴走します。",
    path: "/cosmetics",
    fallbackTitle: "化粧品開発相談受付・OEM/ブランド開発支援",
    fallbackText:
      "商品アイデアの整理からOEM選定、処方・容器・製造進行まで、化粧品・美容ブランドの商品化を支援します。",
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
  "/privacy": {
    title: "プライバシーポリシー｜株式会社UNFRAME",
    description:
      "株式会社UNFRAMEのプライバシーポリシー。個人情報の取得・利用目的・第三者提供・安全管理措置などの取り扱いについて定めています。",
    path: "/privacy",
    fallbackTitle: "プライバシーポリシー",
    fallbackText: "株式会社UNFRAMEにおける個人情報の取り扱いについて定めたものです。",
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

  if (normalizePath(path) === "/cosmetics") {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "化粧品開発相談受付・OEM/ブランド開発支援",
      serviceType: "化粧品開発支援",
      url: `${SITE_URL}/cosmetics`,
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      areaServed: {
        "@type": "Country",
        name: "Japan",
      },
      description:
        "化粧品開発の初回相談受付。商品アイデアの整理、ブランド設計、OEM選定、処方・容器・製造進行まで、アイデア段階から商品化まで伴走します。",
      offers: {
        "@type": "Offer",
        url: `${SITE_URL}/contact?inquiryType=cosmetics-brand`,
        priceCurrency: "JPY",
        description: "相談内容・支援範囲に応じて個別見積り。初回相談から受付。",
      },
    } as any);

    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: cosmeticsDevelopmentFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
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
