import { Link } from "wouter";
import MiniDiagnosis from "@/components/MiniDiagnosis";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PHOTOS } from "@/lib/images";
import { ArrowRight, CheckCircle2, ClipboardCheck } from "lucide-react";

const consultationStages = [
  "化粧品を作りたいが、商品アイデアがまだ曖昧",
  "OEM会社の探し方や選び方が分からない",
  "作りたい商品はあるが、予算やロットが分からない",
  "既存ブランドの商品をリニューアルしたい",
  "OEM会社から提案を受けたが、判断できない",
  "商品だけでなく、ブランドや販売方法も一緒に考えたい",
];

const consultationRoutes = [
  {
    label: "Route 01",
    title: "ブランド構想から相談したい",
    description: "アイデアはあるものの、ターゲット・コンセプト・商品像がまだ曖昧な方へ。ブランドの土台から一緒に整理します。",
    examples: "新規参入／新ブランド立ち上げ／既存ブランドの再設計",
    href: "#brand-support",
  },
  {
    label: "Route 02",
    title: "商品開発・OEMから相談したい",
    description: "作りたい商品があり、処方・容器・ロット・予算・OEM選定など、製造に向けた具体化を進めたい方へ。",
    examples: "新商品開発／OEM比較／処方・容器の検討／開発進行",
    href: "#oem-support",
  },
];

const supportAreas = [
  {
    num: "01",
    title: "ブランドの土台をつくる",
    lead: "誰に、どんな価値を届けるかを明確にします。",
    items: ["ターゲット・市場の整理", "ブランドコンセプト", "競合・市場リサーチ", "価格・販売チャネル設計", "商品ラインナップ設計"],
  },
  {
    num: "02",
    title: "商品を具体化する",
    lead: "ブランドの考えを、製造できる商品仕様へ落とし込みます。",
    items: ["商品コンセプト・仕様整理", "成分・処方・使用感の方向性", "OEM候補の選定", "容器・パッケージ検討", "試作・見積もり・製造進行管理"],
  },
  {
    num: "03",
    title: "販売できる形に整える",
    lead: "発売時にブランドの価値が正しく伝わる状態をつくります。",
    items: ["ネーミング・コピー", "ブランド表現の統一", "発売スケジュール", "販売・プロモーション設計", "発売後の商品改善・追加開発"],
  },
];

const process = [
  { step: "01", title: "初回相談", desc: "現在地と、実現したいことを整理" },
  { step: "02", title: "ブランド設計", desc: "ターゲット・市場・販売方法を整理" },
  { step: "03", title: "開発条件の設計", desc: "商品仕様・予算・ロット・時期を整理" },
  { step: "04", title: "OEM候補検討", desc: "条件に合う候補と見積もりを比較" },
  { step: "05", title: "試作・調整", desc: "処方・容器・パッケージを具体化" },
  { step: "06", title: "製造・発売準備", desc: "量産と発売までの進行を管理" },
  { step: "07", title: "発売後支援", desc: "改善・リニューアル・追加商品を検討" },
];

const faqs = [
  {
    q: "商品アイデアがまだ曖昧でも相談できますか？",
    a: "はい。商品名・成分・OEM先が決まっていない段階からご相談いただけます。まず、誰にどんな価値を届けたいかを一緒に整理します。",
  },
  {
    q: "化粧品業界の知識がなくても大丈夫ですか？",
    a: "大丈夫です。専門用語や開発の流れを分かりやすく説明し、判断が必要なポイントを一つずつ整理しながら進めます。",
  },
  {
    q: "OEM会社が決まっていなくても相談できますか？",
    a: "はい。商品仕様・予算・希望ロットなどを整理したうえで、条件に合うOEM候補の検討と連携を支援します。",
  },
  {
    q: "何個から製造できますか？完成までどのくらいかかりますか？",
    a: "最低ロットや期間は、商品カテゴリー・処方・容器・OEMによって異なります。初回相談で希望条件を伺い、実現可能な進め方を整理します。",
  },
  {
    q: "容器やパッケージ、表示確認も相談できますか？",
    a: "はい。ブランド表現と商品仕様をつなぎ、OEMや各専門パートナーと連携しながら発売できる形まで整えます。",
  },
];

const proofTickerItems = [
  "2013年から化粧品業界に従事",
  "200商品以上の企画・開発経験",
  "13ブランド以上の支援経験",
  "日本・中国・インド市場を経験",
  "百貨店からドラッグストアまで対応",
  "商品企画からOEM進行まで伴走",
  "ブランド設計と商品仕様を接続",
  "発売後の改善・追加開発まで支援",
];

const receptionItems = [
  {
    title: "現在地の整理",
    body: "アイデア段階・OEM検討中・既存商品の改善など、いま何が決まっていて何が未定かを整理します。",
  },
  {
    title: "商品化条件の整理",
    body: "カテゴリー、想定価格、ロット、予算、発売時期、販売チャネルを確認し、現実的な進め方に落とします。",
  },
  {
    title: "次のアクション設計",
    body: "ブランド設計から始めるか、OEM比較に進むか、試作条件を詰めるかを切り分けます。",
  },
];

export default function Cosmetics() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero — the existing photography and placement are retained */}
      <section className="relative min-h-[78vh] lg:min-h-[86vh] flex items-end">
        <div className="absolute inset-0">
          <img src={PHOTOS.white.portrait} alt="化粧品のブランド・商品開発支援" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/65 to-transparent" />
        </div>
        <div className="container relative z-10 pb-14 lg:pb-20">
          <div className="max-w-[1020px]">
            <p className="section-label mb-5">Cosmetics Development Reception</p>
            <h1 className="text-[2rem] sm:text-[2.35rem] md:text-[2.65rem] lg:text-[3.45rem] xl:text-[4rem] leading-[1.45] sm:leading-[1.4] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="block">化粧品開発のご相談を</span>
              <span className="hidden sm:block">受け付けています。</span>
              <span className="hidden sm:block">アイデア段階から商品化まで。</span>
              <span className="block sm:hidden">受け付けています。</span>
              <span className="block sm:hidden">アイデア段階から</span>
              <span className="block sm:hidden">商品化まで。</span>
            </h1>
            <p className="text-sm lg:text-base text-foreground/70 max-w-3xl leading-[2] mb-8">
              <span className="block">ブランドの構想整理から、商品企画、OEM選定、処方・容器・製造進行まで。</span>
              <span className="block">UNFRAMEが最初の相談窓口となり、商品化まで伴走します。</span>
            </p>
            <p className="text-sm text-foreground/80 mb-8 border-l-2 border-charcoal pl-4">
              商品名・成分・OEM先が決まっていなくてもご相談いただけます。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact?inquiryType=cosmetics-brand">
                <span className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-charcoal text-white text-sm tracking-[0.1em] hover:bg-charcoal/90 transition-colors cursor-pointer">
                  開発相談を申し込む
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
              <a href="#cosmetics-diagnosis" className="inline-flex justify-center items-center gap-3 px-8 py-4 border border-foreground/25 bg-white/70 text-foreground text-sm tracking-[0.1em] hover:border-charcoal transition-colors">
                3問で現在地を診断する
              </a>
              <a href="#support" className="inline-flex justify-center px-8 py-4 border border-foreground/25 bg-white/70 text-foreground text-sm tracking-[0.1em] hover:border-charcoal transition-colors">
                支援内容を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reception proof ticker */}
      <section className="overflow-hidden border-y border-foreground/15 bg-charcoal text-white">
        <div className="py-7">
          <div className="container mb-5">
            <p className="text-[0.62rem] tracking-[0.22em] uppercase text-white/45" style={{ fontFamily: "var(--font-sub)" }}>
              Development Reception
            </p>
          </div>
          <div className="flex w-max marquee-track gap-3" aria-label="化粧品開発相談受付の支援実績">
            {[...proofTickerItems, ...proofTickerItems].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex min-w-[250px] items-center gap-3 border border-white/10 bg-white/[0.04] px-5 py-4"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-rose-gold" aria-hidden="true" />
                <span className="text-xs leading-relaxed text-white/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="border-y border-foreground/15 bg-white">
        <div className="container py-12 lg:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16 stagger-children">
            {[
              { number: "200+", label: "商品企画・開発", sub: "Products" },
              { number: "13+", label: "ブランド支援", sub: "Brands" },
              { number: "2013–", label: "化粧品業界経験", sub: "Experience" },
            ].map((stat) => (
              <div key={stat.sub} className="fade-in-up text-center">
                <div className="text-3xl lg:text-5xl text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>{stat.number}</div>
                <div className="text-sm text-foreground/80 mb-1">{stat.label}</div>
                <div className="text-[0.6rem] tracking-[0.15em] uppercase text-foreground/45" style={{ fontFamily: "var(--font-sub)" }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reception intake */}
      <section id="reception" className="py-24 lg:py-32 bg-warm-surface scroll-mt-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
            <div className="fade-in-up">
              <p className="section-label mb-5">Reception</p>
              <h2 className="text-2xl lg:text-4xl mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                初回相談では、<br />まだ決まっていないことも含めて整理します。
              </h2>
              <p className="text-sm text-foreground/60 leading-[1.9] mb-8">
                「OEM会社に聞く前に何を決めればいいか」「予算やロットの考え方が分からない」といった段階でも大丈夫です。
                受付では、商品化に向けた優先順位と次の一手を明確にします。
              </p>
              <Link href="/contact?inquiryType=cosmetics-brand">
                <span className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white text-sm tracking-[0.1em] hover:bg-charcoal/90 transition-colors cursor-pointer">
                  受付フォームへ進む
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-1 stagger-children">
              {receptionItems.map((item, index) => (
                <div key={item.title} className="fade-in-up bg-white border border-foreground/10 p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-foreground/15">
                      <ClipboardCheck className="h-5 w-5 text-rose-gold" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[0.62rem] tracking-[0.18em] uppercase text-foreground/40 mb-2" style={{ fontFamily: "var(--font-sub)" }}>
                        Intake {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="text-lg mb-3" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                      <p className="text-sm text-foreground/60 leading-[1.9]">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Starting points */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl mb-14 fade-in-up">
            <p className="section-label mb-5">Your Starting Point</p>
            <h2 className="text-2xl lg:text-4xl mb-5" style={{ fontFamily: "var(--font-heading)" }}>こんな段階から相談できます</h2>
            <p className="text-sm text-foreground/60 leading-[1.9]">完成した企画書は必要ありません。まだ言葉になっていない考えも、最初の相談から一緒に整理します。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-foreground/15 stagger-children">
            {consultationStages.map((item, index) => (
              <div key={item} className="fade-in-up min-h-36 p-6 lg:p-8 border-r border-b border-foreground/15 bg-white">
                <span className="text-[0.65rem] tracking-[0.18em] text-foreground/45 mb-5 block" style={{ fontFamily: "var(--font-sub)" }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-foreground/80 leading-[1.8]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two consultation routes */}
      <section className="pb-24 lg:pb-32">
        <div className="container">
          <div className="max-w-2xl mb-12 fade-in-up">
            <p className="section-label mb-5">Choose Your Route</p>
            <h2 className="text-2xl lg:text-4xl mb-5" style={{ fontFamily: "var(--font-heading)" }}>ご相談は、2つの入口から</h2>
            <p className="text-sm text-foreground/60 leading-[1.9]">どちらか判断できない場合は、プラン診断から現在地を整理できます。</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 stagger-children">
            {consultationRoutes.map((route) => (
              <a key={route.label} href={route.href} className="fade-in-up group bg-white border border-foreground/15 p-7 lg:p-10 hover:border-charcoal transition-colors">
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-foreground/45 mb-7" style={{ fontFamily: "var(--font-sub)" }}>{route.label}</p>
                <h3 className="text-xl lg:text-2xl mb-5 group-hover:underline underline-offset-8" style={{ fontFamily: "var(--font-heading)" }}>{route.title}</h3>
                <p className="text-sm text-foreground/65 leading-[1.9] mb-7">{route.description}</p>
                <p className="text-xs text-foreground/45 leading-relaxed pt-5 border-t border-foreground/10">{route.examples}</p>
              </a>
            ))}
          </div>
          <div className="text-center mt-8 fade-in-up">
            <a href="#cosmetics-diagnosis" className="text-sm text-foreground/70 underline underline-offset-4 hover:text-foreground">どちらか迷う方はプラン診断へ</a>
          </div>
        </div>
      </section>

      {/* Role */}
      <section className="dark-section py-24 lg:py-32">
        <div className="container">
          <div className="max-w-3xl mb-14 fade-in-up">
            <p className="section-label mb-5" style={{ color: "white" }}>Our Role</p>
            <h2 className="text-2xl lg:text-4xl text-white mb-7" style={{ fontFamily: "var(--font-heading)" }}>
              工場を紹介するだけではありません。
            </h2>
            <p className="text-sm text-white/70 leading-[2]">
              誰に、どんな価値を届けるブランドなのかを整理し、その実現に合うOEM・処方・容器・価格・販売チャネルを一つの設計図につなぎます。UNFRAMEは、ブランドとOEMの間に立つ企画・開発パートナーです。
            </p>
            <p className="text-sm text-white/70 leading-[2] mt-6">
              ブランド側の構想とOEM側の実現可能性、その両方を踏まえて商品設計を行います。所属・連携するOEMを含め、処方・容器・ロット・予算などの商品条件に合う製造体制を検討し、商品化までの進行を支援します。
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.35fr_auto_1fr] gap-5 items-stretch fade-in-up">
            <div className="border border-white/20 p-7">
              <p className="text-[0.65rem] tracking-[0.18em] uppercase text-white/45 mb-4" style={{ fontFamily: "var(--font-sub)" }}>Client</p>
              <p className="text-lg text-white" style={{ fontFamily: "var(--font-heading)" }}>お客様の構想・課題</p>
            </div>
            <div className="hidden lg:flex items-center text-white/35 text-sm">TO</div>
            <div className="border border-white/40 bg-white/5 p-7">
              <p className="text-[0.65rem] tracking-[0.18em] uppercase text-white/45 mb-4" style={{ fontFamily: "var(--font-sub)" }}>UNFRAME</p>
              <p className="text-lg text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>ブランドと商品を一つの計画へ</p>
              <p className="text-xs text-white/55 leading-[1.9]">ブランド設計／商品企画／OEM実務／製造体制の検討／販売・発信設計</p>
            </div>
            <div className="hidden lg:flex items-center text-white/35 text-sm">WITH</div>
            <div className="border border-white/20 p-7">
              <p className="text-[0.65rem] tracking-[0.18em] uppercase text-white/45 mb-4" style={{ fontFamily: "var(--font-sub)" }}>Partners</p>
              <p className="text-lg text-white" style={{ fontFamily: "var(--font-heading)" }}>OEM・容器・デザイン・専門家</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="py-24 lg:py-32 bg-warm-surface scroll-mt-20">
        <div className="container">
          <div className="mb-16 fade-in-up">
            <p className="section-label mb-5">Support</p>
            <h2 className="text-2xl lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>構想から発売まで、3つの段階で支援</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 stagger-children">
            {supportAreas.map((area, index) => (
              <article id={index === 0 ? "brand-support" : index === 1 ? "oem-support" : undefined} key={area.num} className="editorial-card fade-in-up scroll-mt-24">
                <span className="text-xs text-foreground/50 tracking-wider mb-6 block" style={{ fontFamily: "var(--font-sub)" }}>{area.num}</span>
                <h3 className="text-xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>{area.title}</h3>
                <p className="text-sm text-foreground/60 leading-[1.8] mb-7">{area.lead}</p>
                <div className="space-y-3 pt-6 border-t border-foreground/10">
                  {area.items.map((item) => (
                    <p key={item} className="text-sm text-foreground/70 leading-relaxed">{item}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Background — existing photo placement retained */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div className="fade-in-up">
              <p className="section-label mb-6">Experience</p>
              <h2 className="text-2xl lg:text-4xl mb-8 leading-[1.4]" style={{ fontFamily: "var(--font-heading)" }}>
                2013年から、200商品以上の<br />企画・開発に携わってきました。
              </h2>
              <p className="text-sm text-foreground/65 leading-[2] mb-6">
                2013年から化粧品業界に携わり、大手化粧品メーカー2社で、日本・中国・インド市場の商品企画・開発・マーケティング・ブランディングを経験。これまでに13ブランド以上、200商品以上の商品企画・開発に関わってきました。
              </p>
              <p className="text-sm text-foreground/65 leading-[2]">
                百貨店からドラッグストアまで、販売チャネルごとに異なる顧客ニーズや価格設計を踏まえ、ブランドと商品を一貫して設計します。
              </p>
            </div>
            <div className="image-reveal fade-in-up">
              <img loading="lazy" src={PHOTOS.white.gallery1} alt="化粧品の商品企画・開発" className="w-full aspect-[4/3] object-cover object-top" />
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-foreground/15 fade-in-up">
            <p className="section-label mb-7">Categories</p>
            <div className="flex flex-wrap gap-3">
              {["スキンケア", "ヘアケア", "ボディケア", "フレグランス", "健康食品", "日焼け止め", "アロマセラピー系", "メンズ"].map((category) => (
                <span key={category} className="px-5 py-3 border border-foreground/15 bg-white text-sm text-foreground/70">{category}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="dark-section py-24 lg:py-32">
        <div className="container">
          <div className="mb-14 fade-in-up">
            <p className="section-label mb-5" style={{ color: "white" }}>Process</p>
            <h2 className="text-2xl lg:text-4xl text-white" style={{ fontFamily: "var(--font-heading)" }}>ご相談から発売まで</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/15 stagger-children">
            {process.map((item) => (
              <div key={item.step} className="fade-in-up min-h-44 p-6 border-r border-b border-white/15">
                <p className="text-xs text-white/45 tracking-wider mb-6" style={{ fontFamily: "var(--font-sub)" }}>{item.step}</p>
                <h3 className="text-lg text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                <p className="text-xs text-white/55 leading-[1.8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MiniDiagnosis kind="cosmetics" />

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            <div className="fade-in-up">
              <p className="section-label mb-5">FAQ</p>
              <h2 className="text-2xl lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>初めての化粧品づくりで<br />よくあるご質問</h2>
            </div>
            <div className="fade-in-up">
              {faqs.map((faq) => (
                <details key={faq.q} className="group border-b border-foreground/15">
                  <summary className="list-none py-6 text-sm text-foreground/85 leading-relaxed cursor-pointer">
                    Q. {faq.q}
                  </summary>
                  <p className="pb-6 text-sm text-foreground/60 leading-[1.9]">A. {faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-warm-surface">
        <div className="container text-center fade-in-up">
          <p className="section-label mb-5">Contact</p>
          <h2 className="text-2xl lg:text-4xl mb-6" style={{ fontFamily: "var(--font-heading)" }}>相談先が分からない状態から、<br />一緒に整理します。</h2>
          <p className="text-sm text-foreground/60 mb-10 max-w-xl mx-auto leading-[1.9]">
            作りたい商品、届けたい相手、現在決まっていることをお聞かせください。決まっていない項目があっても問題ありません。
          </p>
          <Link href="/contact?inquiryType=cosmetics-brand">
            <span className="inline-flex justify-center px-10 py-4 bg-charcoal text-white text-sm tracking-[0.12em] hover:bg-charcoal/90 transition-colors cursor-pointer">化粧品づくりについて相談する</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
