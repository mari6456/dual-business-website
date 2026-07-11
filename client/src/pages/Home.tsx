import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PHOTOS, IMAGES } from "@/lib/images";
import { newsData, NEWS_CATEGORIES } from "@/lib/newsData";

const PUBLISHED_IDS = [
  "2026-07-kokuhaku-cosmetics-supervision",
  "2026-05-yamano-lecture",
  "2026-04-reborn-beauty-summit",
];

function CategoryTags({ categories }: { categories: (keyof typeof NEWS_CATEGORIES)[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((category) => (
        <span key={category} className="text-xs px-2 py-0.5 bg-foreground/5 rounded-full text-foreground/60">
          {NEWS_CATEGORIES[category]}
        </span>
      ))}
    </div>
  );
}

const HERO_SLIDES = [
  { src: PHOTOS.team.laughing, alt: "株式会社UNFRAME チーム" },
  { src: PHOTOS.team.group5, alt: "株式会社UNFRAME AI研修" },
];

export default function Home() {
  useScrollReveal();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Slideshow */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          {HERO_SLIDES.map((slide, index) => (
            <img
              key={index}
              src={slide.src}
              alt={slide.alt}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[1500ms] ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent lg:from-white/80 lg:via-white/40" />
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-8 h-[2px] transition-all duration-500 ${
                index === currentSlide ? "bg-charcoal w-12" : "bg-charcoal/20"
              }`}
              aria-label={`スライド ${index + 1}`}
            />
          ))}
        </div>

        <div className="container relative z-10 pt-24">
          <div className="max-w-2xl w-full min-w-0">
            <p
              className="text-[0.65rem] tracking-normal md:tracking-[0.3em] uppercase text-rose-gold mb-6 leading-relaxed max-w-xs md:max-w-none"
              style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}
            >
              Cosmetics Consultant &middot; Brand Director &middot; AI Instructor
            </p>
            <h1 className="display-text text-4xl md:text-6xl lg:text-7xl text-charcoal mb-6 tracking-normal">
              株式会社UNFRAME
            </h1>
            <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              自分の枠を超えて
              <br />
              自由な生き方をデザインする
            </p>
            <p className="text-sm text-charcoal/50 leading-relaxed w-full max-w-xs sm:max-w-lg mb-10">
              美容とAIの力を通じて、不可能を可能にし、自由な生き方を広げる。
              株式会社UNFRAMEは、その道のりを一緒に歩く伴走者です。
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 w-full max-w-xs sm:max-w-none">
              <Link href="/cosmetics">
                <span className="flex box-border w-full sm:w-auto justify-center items-center gap-3 px-8 py-4 bg-charcoal text-white text-sm tracking-[0.1em] uppercase hover:bg-charcoal/90 transition-colors duration-300 cursor-pointer" style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}>
                  Cosmetics <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/ai-training">
                <span className="flex box-border w-full sm:w-auto justify-center items-center gap-3 px-8 py-4 border border-charcoal text-charcoal text-sm tracking-[0.1em] uppercase hover:bg-charcoal hover:text-white transition-all duration-300 cursor-pointer" style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}>
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
                — 株式会社UNFRAMEは、その道のりを一緒に歩く伴走者です —
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
                <img src={IMAGES.pillarCosmetics} alt="化粧品事業" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/60 mb-3" style={{ fontFamily: "var(--font-sub)" }}>Beauty Business</p>
                  <h3 className="text-2xl lg:text-3xl text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>化粧品事業</h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-4 max-w-md">
                    ブランド開発・商品企画から市場リサーチ、処方提案、製造まで一貫支援。10ブランド以上、130商品以上の企画開発実績。
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-white/80 group-hover:text-rose-gold transition-colors duration-300" style={{ fontFamily: "var(--font-sub)" }}>
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/ai-training">
              <div className="group relative overflow-hidden aspect-[4/3] cursor-pointer fade-in-up">
                <img src={IMAGES.pillarAI} alt="AI研修事業" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/60 mb-3" style={{ fontFamily: "var(--font-sub)" }}>AI & Digital</p>
                  <h3 className="text-2xl lg:text-3xl text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>AI研修・デジタル支援</h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-4 max-w-md">
                    経営者向けAI顧問、法人研修、セミナー開催。累計参加者500名超。文科省認可AIスクール講師。
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-white/80 group-hover:text-rose-gold transition-colors duration-300" style={{ fontFamily: "var(--font-sub)" }}>
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
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

          {(() => {
            const published = newsData.filter((item) => PUBLISHED_IDS.includes(item.id)).slice(0, 3);
            if (published.length === 0) {
              return (
                <div className="text-center py-20 fade-in-up">
                  <p className="text-6xl lg:text-7xl tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "oklch(0.85 0.01 80)" }}>COMING SOON</p>
                </div>
              );
            }
            return (
              <div className="space-y-0">
                {published.map((item, i) => (
                  <Link key={item.id} href={`/news/${item.id}`}>
                    <article
                      className="fade-in-up group flex flex-col md:flex-row gap-6 py-10 border-b border-[oklch(0.92_0.005_80)] hover:bg-warm-surface/50 transition-colors duration-200 cursor-pointer px-2 -mx-2 rounded-sm"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {item.image && (
                        <div className="md:w-48 lg:w-56 flex-shrink-0">
                          <div className="aspect-[4/3] overflow-hidden bg-muted">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-3">
                          <time className="text-xs text-foreground/40 font-mono">{item.date}</time>
                          <CategoryTags categories={item.categories} />
                        </div>
                        <h3
                          className="text-lg lg:text-xl font-medium mb-2 group-hover:text-rose-gold transition-colors leading-snug"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-sm text-foreground/60 leading-relaxed line-clamp-2">
                          {item.excerpt}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* Numbers */}
      <section className="py-24 lg:py-32 bg-warm-surface">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 stagger-children">
            {[
              { number: "130+", label: "商品企画開発", sub: "Products Developed" },
              { number: "10+", label: "ブランド支援", sub: "Brands Supported" },
              { number: "500+", label: "セミナー参加者", sub: "Seminar Participants" },
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
              <p className="section-label mb-6">Representative Profile</p>
              <h2 className="text-3xl lg:text-4xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>kawaharada mari</h2>
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
                  View Representative Profile <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
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
