import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PHOTOS } from "@/lib/images";
import { newsData, NEWS_CATEGORIES } from "@/lib/newsData";

export default function Cosmetics() {
  useScrollReveal();

  // 化粧品関連のニュースをフィルタリング（cosmetics + media）
  const cosmeticsNews = newsData.filter((n) => n.category === "cosmetics" || n.category === "media");

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] lg:h-[80vh] flex items-end">
        <div className="absolute inset-0">
          <img src={PHOTOS.white.hero} alt="化粧品事業" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
        </div>
        <div className="container relative z-10 pb-16 lg:pb-24">
          <p className="section-label mb-4">Beauty Business</p>
          <h1 className="text-4xl lg:text-6xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>化粧品事業</h1>
          <p className="text-base text-foreground/60 max-w-xl leading-relaxed">ブランドの芯を形にする力。市場リサーチからコンセプト企画、処方提案、製造まで一貫支援。</p>
        </div>
      </section>

      {/* Career */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="fade-in-up">
              <p className="section-label mb-6">Background</p>
              <h2 className="text-3xl lg:text-4xl mb-8" style={{ fontFamily: "var(--font-heading)" }}>10年以上の<br />化粧品業界経験</h2>
              <p className="text-sm text-foreground/60 leading-[2] mb-6">
                大手化粧品メーカー2社にて、10ブランド以上、130商品以上の企画開発に携わりました。日本・中国・インド市場、百貨店からドラッグストアまで幅広い流通チャネルを担当し、ブランドの芯を形にする力を培いました。
              </p>
              <p className="text-sm text-foreground/60 leading-[2]">
                独立後は5ブランドを支援し、新商品開発に20品以上携わるとともに、新規ブランド立ち上げ2件を実現しています。
              </p>
            </div>
            <div className="image-reveal fade-in-up">
              <img src={PHOTOS.white.gallery1} alt="化粧品開発" className="w-full aspect-[4/3] object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-warm-surface">
        <div className="container">
          <div className="mb-16 fade-in-up">
            <p className="section-label mb-4">Services</p>
            <h2 className="text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>サービス内容</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 stagger-children">
            {[
              { num: "01", title: "ブランド開発・コンセプト企画", desc: "市場リサーチから始まり、ブランドの世界観・ターゲット・ポジショニングを明確化。ブランドの芯を形にします。" },
              { num: "02", title: "商品企画・処方提案", desc: "スキンケア、ヘアケア、ボディケア、フレグランス、健康食品、日焼け止めなど多岐にわたるカテゴリーに対応。" },
              { num: "03", title: "OEM連動・製造管理", desc: "信頼できるOEMパートナーとの連携で、処方開発から製造まで一貫してサポート。小ロットから対応可能。" },
              { num: "04", title: "マーケティング・ブランディング", desc: "百貨店からドラッグストアまで、流通チャネルに合わせた戦略立案とブランディング支援。" },
            ].map((s) => (
              <div key={s.num} className="editorial-card fade-in-up bg-white">
                <span className="text-xs text-rose-gold tracking-wider mb-4 block" style={{ fontFamily: "var(--font-sub)" }}>{s.num}</span>
                <h3 className="text-xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
                <p className="text-sm text-foreground/50 leading-[1.8]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News from Cosmetics category */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="mb-16 fade-in-up">
            <p className="section-label mb-4">Activity</p>
            <h2 className="text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>活動の様子</h2>
          </div>
          <div className="space-y-0 stagger-children">
            {cosmeticsNews.map((news) => (
              <Link key={news.id} href={`/news/${news.id}`}>
                <div className="fade-in-up flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-foreground/10 group cursor-pointer hover:bg-warm-surface/50 transition-colors duration-300 px-4 -mx-4">
                  <div className="flex items-start md:items-center gap-4 md:gap-6 flex-1">
                    <span className="text-xs text-foreground/30 tracking-wider shrink-0 pt-1 md:pt-0" style={{ fontFamily: "var(--font-sub)" }}>{news.date}</span>
                    <span className="text-[0.6rem] tracking-[0.15em] uppercase text-rose-gold border border-rose-gold/30 px-2 py-0.5 shrink-0" style={{ fontFamily: "var(--font-sub)" }}>
                      {NEWS_CATEGORIES[news.category]}
                    </span>
                    <h3 className="text-sm text-foreground/70 group-hover:text-foreground transition-colors duration-300 leading-relaxed" style={{ fontFamily: "var(--font-heading)" }}>
                      {news.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-foreground/20 group-hover:text-rose-gold transition-colors duration-300 shrink-0 mt-2 md:mt-0 ml-auto md:ml-4" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center fade-in-up">
            <Link href="/news">
              <span className="inline-flex items-center gap-2 text-sm text-foreground/40 hover:text-rose-gold transition-colors duration-300 tracking-wider cursor-pointer" style={{ fontFamily: "var(--font-sub)" }}>
                すべてのニュースを見る <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 lg:py-32 bg-warm-surface">
        <div className="container">
          <div className="mb-16 fade-in-up">
            <p className="section-label mb-4">Categories</p>
            <h2 className="text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>対応カテゴリー</h2>
          </div>
          <div className="flex flex-wrap gap-4 stagger-children">
            {["スキンケア", "ヘアケア", "ボディケア", "フレグランス", "健康食品", "日焼け止め", "アロマセラピー系", "メンズ"].map((cat) => (
              <span key={cat} className="fade-in-up px-6 py-3 border border-foreground/10 bg-white text-sm text-foreground/60 hover:border-rose-gold hover:text-rose-gold transition-all duration-300">{cat}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="dark-section py-24 lg:py-32">
        <div className="container">
          <div className="mb-16 fade-in-up">
            <p className="section-label mb-4" style={{ color: "oklch(0.65 0.08 15)" }}>Process</p>
            <h2 className="text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>開発プロセス</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 stagger-children">
            {[
              { step: "01", title: "ヒアリング", desc: "ご要望・ビジョンの共有" },
              { step: "02", title: "市場リサーチ", desc: "市場分析・競合調査" },
              { step: "03", title: "コンセプト企画", desc: "ブランド世界観の構築" },
              { step: "04", title: "処方開発", desc: "OEM連携・試作" },
              { step: "05", title: "製造・上市", desc: "量産・販売開始" },
            ].map((p) => (
              <div key={p.step} className="fade-in-up text-center">
                <div className="text-3xl text-rose-gold mb-4" style={{ fontFamily: "var(--font-display)" }}>{p.step}</div>
                <h4 className="text-base text-white/90 mb-2" style={{ fontFamily: "var(--font-heading)" }}>{p.title}</h4>
                <p className="text-xs text-white/40">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="mb-16 fade-in-up">
            <p className="section-label mb-4">Clients</p>
            <h2 className="text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>支援実績</h2>
          </div>
          <div className="space-y-0 stagger-children">
            {[
              { name: "化粧品メーカー系企業", category: "ヘアケア・スキンケア" },
              { name: "広告会社", category: "美容ブランド" },
              { name: "美容家電メーカー", category: "美容家電" },
              { name: "他業種からの新規参入企業", category: "他業種からの参入" },
              { name: "美容サロン専売ブランド", category: "サロン専売品" },
            ].map((b) => (
              <div key={b.name} className="fade-in-up flex items-center justify-between py-5 border-b border-foreground/10">
                <span className="text-base text-foreground/80" style={{ fontFamily: "var(--font-heading)" }}>{b.name}</span>
                <span className="text-xs text-foreground/30 tracking-wider" style={{ fontFamily: "var(--font-sub)" }}>{b.category}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-foreground/40 mt-8 fade-in-up">
            ※ 化粧品会社を舞台にしたドラマ作品において、商品開発・ブランド企画・業界構造に関する専門監修もサポート
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-warm-surface">
        <div className="container text-center fade-in-up">
          <h2 className="text-3xl lg:text-4xl mb-6" style={{ fontFamily: "var(--font-heading)" }}>化粧品開発のご相談</h2>
          <p className="text-sm text-foreground/50 mb-10 max-w-lg mx-auto leading-relaxed">新規ブランドの立ち上げから既存ブランドの商品開発まで、お気軽にご相談ください。</p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-3 px-10 py-4 bg-charcoal text-white text-sm tracking-[0.15em] uppercase hover:bg-charcoal/90 transition-colors duration-300 cursor-pointer" style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}>Contact <ArrowRight className="w-4 h-4" /></span>
          </Link>
        </div>
      </section>
    </div>
  );
}
