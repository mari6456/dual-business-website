import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PHOTOS } from "@/lib/images";
import { newsData } from "@/lib/newsData";

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={PHOTOS.white.hero}
            alt="河原田茉莉"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent lg:from-white/80 lg:via-white/40" />
        </div>

        <div className="container relative z-10 pt-24">
          <div className="max-w-2xl">
            <p
              className="text-[0.65rem] tracking-[0.3em] uppercase text-rose-gold mb-6"
              style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}
            >
              Cosmetics Consultant &middot; Brand Director &middot; AI Instructor
            </p>
            <h1 className="display-text text-5xl md:text-7xl lg:text-[5.5rem] text-charcoal mb-6">
              UNFRAME
            </h1>
            <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              自分の枠を超えて
              <br />
              自由な生き方をデザインする
            </p>
            <p className="text-sm text-charcoal/50 leading-relaxed max-w-lg mb-10">
              美容とAIの力を通じて、不可能を可能にし、自由な生き方を広げる。
              私は、その道のりを一緒に歩く伴走者です。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/cosmetics">
                <span className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white text-sm tracking-[0.1em] uppercase hover:bg-charcoal/90 transition-colors duration-300 cursor-pointer" style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}>
                  Cosmetics <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/ai-training">
                <span className="inline-flex items-center gap-3 px-8 py-4 border border-charcoal text-charcoal text-sm tracking-[0.1em] uppercase hover:bg-charcoal hover:text-white transition-all duration-300 cursor-pointer" style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}>
                  AI Training <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-6 border-y border-[oklch(0.92_0.005_80)] overflow-hidden">
        <div className="flex whitespace-nowrap marquee-track">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 px-8">
              {["Skincare", "Haircare", "Branding", "AI Consulting", "Fragrance", "Digital Strategy", "OEM"].map((t) => (
                <span key={t} className="contents">
                  <span className="text-xs tracking-[0.3em] uppercase text-foreground/30" style={{ fontFamily: "var(--font-sub)" }}>{t}</span>
                  <span className="text-rose-gold text-xs">&bull;</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* MVV Section */}
      <section className="py-24 lg:py-36">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="fade-in-up">
              <p className="section-label mb-6">Mission / Vision / Values</p>
              <h2 className="text-4xl lg:text-5xl leading-tight mb-8" style={{ fontFamily: "var(--font-heading)" }}>
                Provide Value
              </h2>
              <p className="text-base text-foreground/60 leading-[2] mb-8">
                自分の枠を超えたとき、人生はもっと自由に広がる。
                美容とAIを味方にすれば、不可能だと思っていたことも少しずつ可能になる。
              </p>
              <div className="accent-line mb-8" />
              <p className="text-sm text-foreground/40 italic leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
                — 私は、その道のりを一緒に歩く伴走者です —
              </p>
            </div>

            <div className="space-y-8 stagger-children">
              {[
                { en: "Authenticity", ja: "本物であること", desc: "自分らしさを大切にし、誰かの型にはまらない" },
                { en: "Co-Creation", ja: "共創", desc: "お客様・仲間と共に「想いをカタチにする」ことを楽しむ" },
                { en: "Empowerment", ja: "可能性の解放", desc: "「できない」を「できる」に変える" },
                { en: "Sustainability", ja: "持続可能性", desc: "無理をせず、長く続けられる仕組みやライフスタイルを支援する" },
                { en: "Wisdom", ja: "知の探究", desc: "学び続け、好奇心で世界を広げる" },
              ].map((value) => (
                <div key={value.en} className="fade-in-up border-l border-rose-gold/30 pl-6 py-2">
                  <h3 className="text-lg mb-1" style={{ fontFamily: "var(--font-display)" }}>{value.en}</h3>
                  <p className="text-xs text-rose-gold tracking-wider mb-2" style={{ fontFamily: "var(--font-sub)" }}>{value.ja}</p>
                  <p className="text-sm text-foreground/50 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two Business Sections */}
      <section className="dark-section py-24 lg:py-36">
        <div className="container">
          <div className="text-center mb-20 fade-in-up">
            <p className="section-label mb-6" style={{ color: "oklch(0.65 0.08 15)" }}>Our Services</p>
            <h2 className="text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>Two Pillars</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            <Link href="/cosmetics">
              <div className="group relative overflow-hidden aspect-[4/3] cursor-pointer fade-in-up">
                <img src={PHOTOS.white.gallery4} alt="化粧品事業" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/60 mb-3" style={{ fontFamily: "var(--font-sub)" }}>Beauty Business</p>
                  <h3 className="text-2xl lg:text-3xl text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>化粧品事業</h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-4 max-w-md">
                    ブランド開発・商品企画から市場リサーチ、処方提案、製造まで一貫支援。10ブランド以上、130商品以上の企画開発実績。
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-white/80 group-hover:text-rose-gold transition-colors duration-300" style={{ fontFamily: "var(--font-sub)" }}>
                    View Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/ai-training">
              <div className="group relative overflow-hidden aspect-[4/3] cursor-pointer fade-in-up">
                <img src={PHOTOS.suit.portrait} alt="AI研修事業" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/60 mb-3" style={{ fontFamily: "var(--font-sub)" }}>AI & Digital</p>
                  <h3 className="text-2xl lg:text-3xl text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>AI研修・デジタル支援</h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-4 max-w-md">
                    経営者向けAI顧問、法人研修、セミナー開催。累計参加者400名超。文科省認可AIスクール講師。
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-white/80 group-hover:text-rose-gold transition-colors duration-300" style={{ fontFamily: "var(--font-sub)" }}>
                    View Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-24 lg:py-32 bg-warm-surface">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 stagger-children">
            {[
              { number: "130+", label: "商品企画開発", sub: "Products Developed" },
              { number: "10+", label: "ブランド支援", sub: "Brands Supported" },
              { number: "400+", label: "セミナー参加者", sub: "Seminar Participants" },
              { number: "10", label: "年の業界経験", sub: "Years Experience" },
            ].map((stat) => (
              <div key={stat.sub} className="text-center fade-in-up">
                <div className="text-4xl lg:text-5xl text-rose-gold mb-2" style={{ fontFamily: "var(--font-display)" }}>{stat.number}</div>
                <div className="text-sm text-foreground/80 mb-1">{stat.label}</div>
                <div className="text-[0.6rem] tracking-[0.15em] uppercase text-foreground/30" style={{ fontFamily: "var(--font-sub)" }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Teaser */}
      <section className="py-24 lg:py-36">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-2 image-reveal fade-in-up">
              <img src={PHOTOS.white.portrait} alt="河原田茉莉" className="w-full aspect-[3/4] object-cover object-top" />
            </div>
            <div className="lg:col-span-3 fade-in-up">
              <p className="section-label mb-6">Profile</p>
              <h2 className="text-3xl lg:text-4xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>河原田 茉莉</h2>
              <p className="text-sm text-rose-gold tracking-wider mb-6" style={{ fontFamily: "var(--font-display)" }}>Mari Kawarada</p>
              <p className="text-sm text-foreground/60 leading-[2] mb-4">
                化粧品開発コンサルタント / ブランドディレクター / AI講座主宰
              </p>
              <p className="text-sm text-foreground/50 leading-[2] mb-8">
                大手化粧品メーカー2社にて約10年間、化粧品の商品企画〜開発〜マーケティング〜ブランディングまでを一貫して担当。
                日本・中国・インド市場、百貨店からドラッグストアまで幅広い流通チャネルを経験し、ブランドの芯を形にする力を培う。
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["薬剤師", "英国IFPA認定アロマセラピスト", "事業構想修士（MPD）"].map((q) => (
                  <span key={q} className="text-[0.65rem] tracking-wider text-foreground/40 border border-foreground/15 px-3 py-1.5" style={{ fontFamily: "var(--font-sub)" }}>{q}</span>
                ))}
              </div>
              <Link href="/profile">
                <span className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-rose-gold hover:text-foreground transition-colors duration-300 cursor-pointer" style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}>
                  View Full Profile <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-24 lg:py-32 border-t border-[oklch(0.92_0.005_80)]">
        <div className="container">
          <div className="flex justify-between items-end mb-16 fade-in-up">
            <div>
              <p className="section-label mb-4">Latest</p>
              <h2 className="text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>News</h2>
            </div>
            <Link href="/news">
              <span className="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-foreground/50 hover:text-rose-gold transition-colors duration-300 cursor-pointer" style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}>
                View All <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          <div className="space-y-0 stagger-children">
            {newsData.slice(0, 4).map((item) => (
              <Link key={item.id} href={`/news/${item.id}`}>
                <div className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 border-b border-[oklch(0.92_0.005_80)] cursor-pointer fade-in-up hover:bg-warm-surface/50 transition-colors duration-300 px-4 -mx-4">
                  <span className="text-xs text-foreground/30 shrink-0 w-24" style={{ fontFamily: "var(--font-sub)" }}>{item.date}</span>
                  <span className="text-[0.6rem] tracking-[0.15em] uppercase text-rose-gold shrink-0 w-24" style={{ fontFamily: "var(--font-sub)" }}>
                    {item.category === "cosmetics" ? "Beauty" : item.category === "ai" ? "AI" : item.category === "media" ? "Media" : "Event"}
                  </span>
                  <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors duration-300 flex-1">{item.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-foreground/20 group-hover:text-rose-gold transition-colors duration-300 shrink-0 hidden md:block" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section py-24 lg:py-36">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto fade-in-up">
            <p className="section-label mb-6" style={{ color: "oklch(0.65 0.08 15)" }}>Get in Touch</p>
            <h2 className="text-3xl lg:text-5xl mb-6" style={{ fontFamily: "var(--font-heading)" }}>お気軽にご相談ください</h2>
            <p className="text-sm text-white/50 leading-[2] mb-10">
              化粧品開発やブランディング、AI研修に関するご質問、ご相談など、どんなことでもお気軽にお問い合わせください。
            </p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-3 px-10 py-4 border border-white/30 text-white text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-charcoal transition-all duration-500 cursor-pointer" style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}>
                Contact Us <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
