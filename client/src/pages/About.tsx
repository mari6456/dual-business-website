import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PHOTOS, IMAGES } from "@/lib/images";

const values = [
  { en: "Authenticity", ja: "本物であること", desc: "誰かの型に合わせるのではなく、その人やブランドが本来持っている魅力を見つめる。" },
  { en: "Co-Creation", ja: "共創", desc: "一方的に答えを渡すのではなく、対話しながら想いを形にする。" },
  { en: "Empowerment", ja: "可能性の解放", desc: "できないと思っていたことを、少しずつできる状態へ変えていく。" },
  { en: "Wisdom", ja: "知の探究", desc: "美容、事業、AI、暮らしを横断しながら、学び続ける力を大切にする。" },
];

const businesses = [
  {
    label: "Beauty Business",
    title: "化粧品・美容ブランド支援",
    desc: "ブランド開発、商品企画、OEM連動、処方提案、製造管理まで。美容の現場と事業の視点をつなぎ、ブランドの芯を形にします。",
    href: "/cosmetics",
    image: IMAGES.pillarCosmetics,
  },
  {
    label: "AI & Digital",
    title: "AI研修・デジタル活用支援",
    desc: "AIを知識で終わらせず、日々の業務に使える状態へ。経営者・チーム・現場に合わせた研修と伴走支援を行います。",
    href: "/ai-training",
    image: PHOTOS.team.group5,
  },
];

export default function About() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[78vh] flex items-end">
        <div className="absolute inset-0">
          <img src={PHOTOS.team.laughing} alt="株式会社UNFRAME" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/10" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
        </div>
        <div className="container relative z-10 pb-20 lg:pb-28 pt-32">
          <div className="max-w-2xl fade-in-up">
            <p className="section-label mb-6">About UNFRAME</p>
            <h1 className="text-4xl lg:text-6xl leading-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              枠を外し、可能性をひらく。
            </h1>
            <p className="text-base text-charcoal/60 leading-[2] max-w-xl">
              株式会社UNFRAMEは、美容とAIを軸に、ブランド・事業・人の可能性を広げる伴走型の会社です。
              自分らしさを起点に、無理なく続く仕組みと表現を一緒に設計します。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="max-w-4xl fade-in-up">
            <p className="section-label mb-6">Philosophy</p>
            <h2 className="text-3xl lg:text-5xl leading-tight mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              自由な生き方を、<br />
              事業の力に変える。
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <p className="text-sm text-foreground/60 leading-[2]">
                UNFRAMEが大切にしているのは、単に売れるものを作ることでも、便利なツールを導入することでもありません。
                その人、その会社、そのブランドが本来持っている感性や強みを見つけ、現実の仕事として動く形に整えることです。
              </p>
              <p className="text-sm text-foreground/60 leading-[2]">
                美容は、感性と信頼を形にする領域。AIは、時間と可能性を広げる領域。
                その2つをつなぐことで、もっと自由で、もっとしなやかな事業のあり方を支援します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-warm-surface">
        <div className="container">
          <div className="mb-16 fade-in-up">
            <p className="section-label mb-4">Values</p>
            <h2 className="text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
              大切にしていること
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {values.map((value) => (
              <div key={value.en} className="fade-in-up bg-white border border-foreground/10 p-8">
                <p className="text-[0.6rem] tracking-[0.2em] uppercase text-rose-gold mb-3" style={{ fontFamily: "var(--font-sub)" }}>
                  {value.en}
                </p>
                <h3 className="text-xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  {value.ja}
                </h3>
                <p className="text-sm text-foreground/50 leading-[1.9]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section py-24 lg:py-32">
        <div className="container">
          <div className="text-center mb-16 fade-in-up">
            <p className="section-label mb-6" style={{ color: "var(--brand-luster)" }}>
              Business
            </p>
            <h2 className="text-3xl lg:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
              2つの事業領域
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 stagger-children">
            {businesses.map((business) => (
              <Link key={business.title} href={business.href}>
                <div className="group relative overflow-hidden aspect-[4/3] cursor-pointer fade-in-up">
                  <img loading="lazy" src={business.image} alt={business.title} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                    <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/60 mb-3" style={{ fontFamily: "var(--font-sub)" }}>
                      {business.label}
                    </p>
                    <h3 className="text-2xl lg:text-3xl text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                      {business.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-[1.9] mb-5 max-w-md">{business.desc}</p>
                    <span className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-white/80 group-hover:text-rose-gold transition-colors duration-300" style={{ fontFamily: "var(--font-sub)" }}>
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center fade-in-up">
            <p className="section-label mb-6">Next Step</p>
            <h2 className="text-3xl lg:text-4xl mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              事業の形を、一緒に整える。
            </h2>
            <p className="text-sm text-foreground/50 leading-[2] mb-10">
              化粧品開発、ブランドづくり、AI研修、デジタル活用など、今の課題や実現したいことに合わせてご相談ください。
            </p>
            <Link href="/contact">
              <span
                className="inline-flex items-center gap-3 px-10 py-4 bg-charcoal text-white text-sm tracking-[0.15em] uppercase hover:bg-charcoal/90 transition-colors duration-300 cursor-pointer"
                style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}
              >
                Contact <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
