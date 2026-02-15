import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PHOTOS } from "@/lib/images";

export default function Profile() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-2 fade-in-up">
              <div className="image-reveal">
                <img src={PHOTOS.white.portrait} alt="河原田茉莉" className="w-full aspect-[3/4] object-cover object-top" />
              </div>
            </div>
            <div className="lg:col-span-3 fade-in-up">
              <p className="section-label mb-6">Profile</p>
              <h1 className="text-4xl lg:text-5xl mb-3" style={{ fontFamily: "var(--font-heading)" }}>河原田 茉莉</h1>
              <p className="text-lg text-rose-gold mb-8" style={{ fontFamily: "var(--font-display)" }}>Mari Kawarada</p>
              <div className="accent-line mb-8" />
              <p className="text-base text-foreground/70 leading-[2] mb-6">
                化粧品開発コンサルタント / ブランドディレクター / AI講座主宰
              </p>
              <p className="text-sm text-foreground/50 leading-[2] mb-4">
                福岡県出身。薬剤師。事業構想修士（MPD）修了。
              </p>
              <p className="text-sm text-foreground/50 leading-[2]">
                2歳の娘と愛犬と4人暮らし。美容サロン「jas+mine」運営。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="py-24 lg:py-32 bg-warm-surface">
        <div className="container">
          <div className="mb-16 fade-in-up">
            <p className="section-label mb-4">Career</p>
            <h2 className="text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>経歴</h2>
          </div>
          <div className="max-w-3xl">
            <div className="space-y-12 stagger-children">
              <div className="fade-in-up border-l-2 border-rose-gold/30 pl-8">
                <p className="text-xs text-rose-gold tracking-wider mb-2" style={{ fontFamily: "var(--font-sub)" }}>Corporate Career</p>
                <h3 className="text-xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>株式会社コーセー・エキップ</h3>
                <p className="text-sm text-foreground/60 leading-[2]">
                  約10年間、化粧品の商品企画〜開発〜マーケティング〜ブランディングまでを一貫して担当。日本・中国・インド市場、百貨店からドラッグストアまで幅広い流通チャネルを担当し、ブランドの芯を形にする力を培う。10ブランド以上、130商品以上の企画開発に携わる。
                </p>
              </div>

              <div className="fade-in-up border-l-2 border-rose-gold/30 pl-8">
                <p className="text-xs text-rose-gold tracking-wider mb-2" style={{ fontFamily: "var(--font-sub)" }}>Categories</p>
                <h3 className="text-xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>担当カテゴリー</h3>
                <p className="text-sm text-foreground/60 leading-[2]">
                  スキンケア、ヘアケア、ボディケア、フレグランス、健康食品、日焼け止め、アロマセラピー系、メンズなど多岐にわたるカテゴリーを経験。
                </p>
              </div>

              <div className="fade-in-up border-l-2 border-rose-gold/30 pl-8">
                <p className="text-xs text-rose-gold tracking-wider mb-2" style={{ fontFamily: "var(--font-sub)" }}>Independent</p>
                <h3 className="text-xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>独立後の活動</h3>
                <p className="text-sm text-foreground/60 leading-[2] mb-4">
                  独立後、5ブランドを支援（ヘアケア・スキンケア・美容家電・他業種からの参入・美容サロン専売）。新商品開発に20品以上携わり、新規ブランド立ち上げ2件を実現。市場リサーチ〜コンセプト企画・処方提案〜製造まで一貫支援。
                </p>
                <p className="text-sm text-foreground/60 leading-[2]">
                  支援先：コスメフェリーチェ（株）・（株）ナハト・（株）FURUNO・ハナサク（株）
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Activities */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="fade-in-up">
              <p className="section-label mb-6">AI & Digital</p>
              <h2 className="text-3xl lg:text-4xl mb-8" style={{ fontFamily: "var(--font-heading)" }}>AI・デジタル活動</h2>
              <div className="space-y-4">
                {[
                  "AI&デジタルセミナー 累計参加者数400名超え",
                  "文科省認可AIスクール講師",
                  "IMSI「AI×ブランディング講座」主宰",
                  "オンライン秘書チーム運営",
                  "介護業界（支援事業者）でのAI×マーケティング支援",
                  "SNS発信や業務効率化サポート",
                  "ビジネス塾講師・体験会・ローンチ集客の導線設計",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-rose-gold rounded-full mt-2 shrink-0" />
                    <span className="text-sm text-foreground/60 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="image-reveal fade-in-up">
              <img src={PHOTOS.suit.gallery1} alt="AI活動" className="w-full aspect-[4/3] object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-24 lg:py-32 bg-warm-surface">
        <div className="container">
          <div className="mb-16 fade-in-up">
            <p className="section-label mb-4">Qualifications</p>
            <h2 className="text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>資格・活動</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {[
              "薬剤師",
              "英国IFPA認定アロマセラピスト",
              "骨格形成美顔矯正 YUIIGIE認定技術者",
              "事業構想修士（MPD）修了",
              "文科省認可AIスクール講師",
              "美容サロン「jas+mine」運営",
            ].map((q) => (
              <div key={q} className="fade-in-up border border-foreground/10 bg-white px-6 py-5">
                <span className="text-sm text-foreground/70">{q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="mb-16 fade-in-up">
            <p className="section-label mb-4">Gallery</p>
            <h2 className="text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>活動の記録</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 stagger-children">
            {[
              PHOTOS.white.hero,
              PHOTOS.suit.gallery2,
              PHOTOS.white.gallery5,
              PHOTOS.suit.gallery4,
              PHOTOS.suit.gallery7,
              PHOTOS.white.gallery6,
              PHOTOS.suit.gallery8,
              PHOTOS.extra.img1,
            ].map((src, i) => (
              <div key={i} className="image-reveal fade-in-up overflow-hidden">
                <img src={src} alt={`活動写真 ${i + 1}`} className="w-full aspect-square object-cover object-top hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section py-24 lg:py-32">
        <div className="container text-center fade-in-up">
          <h2 className="text-3xl lg:text-4xl mb-6" style={{ fontFamily: "var(--font-heading)" }}>お仕事のご依頼・ご相談</h2>
          <p className="text-sm text-white/50 mb-10 max-w-lg mx-auto leading-relaxed">化粧品開発、ブランディング、AI研修など、お気軽にお問い合わせください。</p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-3 px-10 py-4 border border-white/30 text-white text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-charcoal transition-all duration-500 cursor-pointer" style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}>Contact <ArrowRight className="w-4 h-4" /></span>
          </Link>
        </div>
      </section>
    </div>
  );
}
