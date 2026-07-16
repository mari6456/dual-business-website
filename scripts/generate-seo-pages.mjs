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
    h1: "自由な生き方を、事業の力に。",
    body: "UNFRAMEは、化粧品開発・ブランド支援・法人AI研修を通じて、想いが事業として動き出すまでを伴走する会社です。美容とAIで、ブランド・事業・人の可能性をひらきます。",
    sections: [
      {
        h2: "化粧品事業",
        text: "ブランド開発・商品企画から市場リサーチ、処方提案、製造まで一貫支援。10ブランド以上、130商品以上の企画開発実績があります。",
      },
      {
        h2: "AI研修・デジタル支援",
        text: "経営者向けAI顧問、法人研修、セミナー開催。累計参加者500名超。文科省認可AIスクール講師が担当します。",
      },
      {
        h2: "実績",
        items: [
          "商品企画開発 130以上",
          "ブランド支援 10以上",
          "セミナー参加者 500名以上",
          "化粧品業界経験 10年以上",
        ],
      },
      {
        h2: "代表 河原田茉莉",
        text: "化粧品開発コンサルタント / ブランドディレクター / AI講座主宰。大手化粧品メーカー2社にて約10年間、商品企画から開発・マーケティング・ブランディングまでを一貫して担当。薬剤師・英国IFPA認定アロマセラピスト・事業構想修士（MPD）。",
      },
    ],
  },
  {
    path: "/about",
    title: "ABOUT｜UNFRAMEの考え方・事業紹介｜株式会社UNFRAME",
    description:
      "株式会社UNFRAMEの考え方と事業紹介。美容・化粧品ブランド支援とAI研修を軸に、事業と人の可能性を広げる伴走支援を行います。",
    h1: "UNFRAMEの考え方・事業紹介",
    body: "UNFRAMEは、美容とAIを軸に、ブランド・事業・人の可能性を広げる伴走型の会社です。自分の枠を超えたとき、人生はもっと自由に広がる。美容とAIを味方にすれば、不可能だと思っていたことも少しずつ可能になる——その道のりを一緒に歩く伴走者です。",
    sections: [
      {
        h2: "化粧品・美容ブランド支援",
        text: "ブランド開発、商品企画、OEM連動、処方提案、製造管理まで。美容の現場と事業の視点をつなぎ、ブランドの芯を形にします。",
      },
      {
        h2: "AI研修・デジタル活用支援",
        text: "AIを知識で終わらせず、日々の業務に使える状態へ。経営者・チーム・現場に合わせた研修と伴走支援を行います。",
      },
      {
        h2: "大切にしている価値観",
        items: [
          "Authenticity（本物であること）— 自分らしさを大切にし、誰かの型にはまらない",
          "Co-Creation（共創）— お客様・仲間と共に「想いをカタチにする」ことを楽しむ",
          "Empowerment（可能性の解放）— 「できない」を「できる」に変える",
          "Sustainability（持続可能性）— 無理をせず、長く続けられる仕組みやライフスタイルを支援する",
          "Wisdom（知の探究）— 学び続け、好奇心で世界を広げる",
        ],
      },
    ],
  },
  {
    path: "/cosmetics",
    title: "化粧品OEM・ブランド開発支援｜株式会社UNFRAME",
    description:
      "化粧品OEM、ブランド開発、商品企画、市場リサーチ、処方提案、製造管理まで一貫支援。化粧品開発経験をもとにブランドの芯を形にします。",
    h1: "化粧品OEM・ブランド開発支援",
    body: "市場リサーチからコンセプト企画、処方提案、製造管理まで、化粧品・美容ブランドの立ち上げを支援します。大手化粧品メーカー2社にて10ブランド以上、130商品以上の企画開発に携わり、独立後は5ブランドを支援、新規ブランド立ち上げ2件を実現しています。",
    sections: [
      {
        h2: "サービス内容",
        items: [
          "ブランド開発・コンセプト企画 — 市場リサーチから、ブランドの世界観・ターゲット・ポジショニングを明確化",
          "商品企画・処方提案 — スキンケア、ヘアケア、ボディケア、フレグランス、健康食品、日焼け止めなど多岐にわたるカテゴリーに対応",
          "OEM連動・製造管理 — 信頼できるOEMパートナーとの連携で、処方開発から製造まで一貫サポート。小ロットから対応可能",
          "マーケティング・ブランディング — 百貨店からドラッグストアまで、流通チャネルに合わせた戦略立案",
        ],
      },
      {
        h2: "対応カテゴリー",
        items: [
          "スキンケア",
          "ヘアケア",
          "ボディケア",
          "フレグランス",
          "健康食品",
          "日焼け止め",
          "アロマセラピー系",
          "メンズ",
        ],
      },
      {
        h2: "開発プロセス",
        text: "ヒアリング（ご要望・ビジョンの共有）→ 市場リサーチ（市場分析・競合調査）→ コンセプト企画（ブランド世界観の構築）→ 処方開発（OEM連携・試作）→ 製造・上市（量産・販売開始）",
      },
      {
        h2: "支援実績",
        text: "化粧品メーカー系企業、広告会社、美容家電メーカー、他業種からの新規参入企業、美容サロン専売ブランドなど。化粧品会社を舞台にしたドラマ作品での商品開発・ブランド企画・業界構造に関する専門監修も担当。",
      },
    ],
  },
  {
    path: "/ai-training",
    title: "法人AI研修・生成AI活用支援｜株式会社UNFRAME",
    description:
      "法人向けAI研修、生成AI活用、業務効率化、AIリテラシー研修を提供。現場で使えるAI活用を、業界や職種に合わせて伴走支援します。",
    h1: "法人AI研修・生成AI活用支援",
    body: "知識で終わらせず、翌日から業務で使える状態を目指す法人向けAI研修を提供します。「AIが怖い」を「明日から使える」に変える実践型プログラムです。AI初心者・PCが苦手な方でも、経理から社長まで全職種が参加できます。",
    sections: [
      {
        h2: "研修の特長",
        items: [
          "自分の業務で動かす実践型 — ツールの説明で終わらせず、受講者自身の業務で使えるプロンプトを自力で書けるように",
          "ツール非依存 — Google Gemini / ChatGPT / Copilot / Claude、どのAIにも通用するリテラシーと伝え方の土台を習得",
          "安全な運用ルールづくり込み — 情報漏洩を防ぐ「入れていい情報・ダメな情報」を最初に指導",
          "業界別の実例で個別設計 — 美容・建設・福祉・士業などの実績",
          "オンライン・対面・ハイブリッド対応、2時間の単発から6回以上の伴走型まで柔軟に設計",
        ],
      },
      {
        h2: "プログラム内容",
        items: [
          "AIの全体像（得意・苦手・ハルシネーションとは）",
          "怖くない使い方の原則（入れていい情報・ダメな情報）",
          "プロンプトの型：役割・背景・条件・出力形式の4点セット",
          "対話で精度を上げる方法",
          "自分専用AI入門（Gem / GPTs / Copilotエージェント）",
          "業務自動化・DX推進・コンテンツ創出などの応用プログラム",
        ],
      },
      {
        h2: "実績",
        items: [
          "累計セミナー参加者 500名超",
          "文科省認可スクール AI未来学院 講師",
          "ハウスメーカー様で半年継続研修導入",
          "経営者向けAI顧問サービス",
        ],
      },
    ],
  },
  {
    path: "/profile",
    title: "代表プロフィール 河原田茉莉｜株式会社UNFRAME",
    description:
      "株式会社UNFRAME代表・河原田茉莉のプロフィール。薬剤師、事業構想修士。化粧品開発、ブランド支援、AI研修を横断して活動しています。",
    h1: "代表プロフィール 河原田茉莉",
    body: "河原田茉莉は、薬剤師・事業構想修士として、化粧品開発、ブランド支援、AI研修を横断して活動しています。大手化粧品メーカー2社にて約10年間、化粧品の商品企画から開発・マーケティング・ブランディングまでを一貫して担当。日本・中国・インド市場、百貨店からドラッグストアまで幅広い流通チャネルを経験しました。",
    sections: [
      {
        h2: "事業領域",
        items: [
          "化粧品OEMコンサルティング・化粧品・美容機器開発",
          "ブランド開発・商品企画・市場リサーチ・処方提案・製造管理",
          "AI経営コーチ・顧問サービス、セミナー・講座・社員研修",
          "デジタル業務効率化サポート・SNS発信・マーケティング支援",
          "オンライン秘書チーム運営",
        ],
      },
      {
        h2: "資格・経歴",
        items: [
          "薬剤師",
          "英国IFPA認定アロマセラピスト",
          "事業構想修士（MPD）修了",
          "文科省認可AIスクール講師",
          "骨格形成美顔矯正 YUIIGIE認定技術者",
          "日本成人病予防協会 健康リズムカウンセラー",
        ],
      },
      {
        h2: "活動",
        text: "肌育研究家として、ソーシャルジェットラグに着目したマイクロバイオームケアブランド「OF」を展開（VOCE掲載）。日本テレビ系ドラマ『告白－25年目の秘密－』のコスメ監修を担当。AI&デジタルセミナー累計参加者500名以上。",
      },
    ],
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
    body: "化粧品開発、ブランド支援、法人AI研修、デジタル活用支援に関するご相談を受け付けています。メール：info@ai-unframe.com",
    sections: [
      {
        h2: "お問い合わせ種別",
        items: [
          "化粧品ブランド開発・商品企画",
          "OEM連動・製造管理",
          "AI顧問サービス",
          "法人向けAI研修",
          "オンライン秘書サービス",
          "その他",
        ],
      },
    ],
  },
  {
    path: "/company",
    title: "会社概要｜株式会社UNFRAME",
    description: "株式会社UNFRAMEの会社概要。代表者、事業内容、お問い合わせ先など、法人情報を掲載しています。",
    h1: "会社概要",
    body: "株式会社UNFRAMEは、化粧品・美容ブランドの企画開発支援、AI研修・デジタル活用支援を行っています。",
    sections: [
      {
        h2: "会社情報",
        items: [
          "会社名：株式会社UNFRAME",
          "代表者：河原田茉莉",
          "所在地：〒220-0004 神奈川県横浜市西区北幸二丁目10番48号 むつみビル3階",
          "事業内容：化粧品・美容ブランドの企画開発支援、AI研修・デジタル活用支援、ブランディング・マーケティング支援",
          "お問い合わせ：info@ai-unframe.com",
        ],
      },
    ],
  },
  {
    path: "/privacy",
    title: "プライバシーポリシー｜株式会社UNFRAME",
    description:
      "株式会社UNFRAMEのプライバシーポリシー。個人情報の取得・利用目的・第三者提供・安全管理措置などの取り扱いについて定めています。",
    h1: "プライバシーポリシー",
    body: "株式会社UNFRAMEにおける個人情報の取り扱いについて定めたものです。取得する個人情報、利用目的、第三者提供、委託、安全管理措置、アクセス解析・Cookie、開示・訂正・利用停止等の請求、お問い合わせ窓口について記載しています。",
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
  return `<div id="root"><main class="seo-fallback" style="max-width: 880px; margin: 96px auto; padding: 0 24px; font-family: 'Noto Sans JP', sans-serif; line-height: 1.9; color: #1f1f1f;"><p style="letter-spacing: .18em; color: #b06f6f; font-size: 12px;">UNFRAME</p><h1 style="font-family: 'Shippori Mincho', serif; font-size: clamp(32px, 6vw, 56px); font-weight: 500; line-height: 1.35;">${escapeHtml(page.h1)}</h1><p>${escapeHtml(page.body)}</p>${sectionsMarkup(page)}</main></div>`;
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
