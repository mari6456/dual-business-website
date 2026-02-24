import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PHOTOS } from "@/lib/images";

export default function AITraining() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] lg:h-[80vh] flex items-end">
        <div className="absolute inset-0">
          <img src={PHOTOS.team.group5} alt="AI研修事業" className="w-full h-full object-cover object-[center_30%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
        </div>
        <div className="container relative z-10 pb-16 lg:pb-24">
          <p className="section-label mb-4">AI & Digital</p>
          <h1 className="text-4xl lg:text-6xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>AI研修・デジタル支援</h1>
          <p className="text-base text-foreground/60 max-w-xl leading-relaxed">経営者向けAI顧問、法人研修、セミナー開催。AIの力で、ビジネスの可能性を広げます。</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <p className="section-label mb-6">Philosophy</p>
              <h2 className="text-3xl lg:text-4xl mb-8" style={{ fontFamily: "var(--font-heading)" }}>AIを「味方」にする</h2>
              <p className="text-sm text-foreground/60 leading-[2] mb-6">
                AIは難しいものではなく、私たちの可能性を広げてくれる「味方」です。美容業界で培った実践的な視点と、AIの専門知識を組み合わせ、すぐに使える実践的なAI活用法をお伝えします。
              </p>
              <p className="text-sm text-foreground/60 leading-[2]">
                SNS発信や業務効率化のサポート（Instagram・LINE・UTAGE・決済導入など）から、ビジネス塾講師・体験会・ローンチ集客の導線設計まで、幅広く対応いたします。
              </p>
            </div>
            <div className="image-reveal fade-in-up">
              <img src={PHOTOS.suit.gallery5} alt="AI研修" className="w-full aspect-[4/3] object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Numbers */}
      <section className="py-20 bg-warm-surface">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {[
              { label: "累計セミナー参加者", value: "400名超" },
              { label: "文科省認可AIスクール", value: "講師" },
              { label: "IMSI AI×ブランディング講座", value: "主宰" },
              { label: "介護業界AI支援", value: "実施中" },
            ].map((a) => (
              <div key={a.label} className="text-center fade-in-up">
                <div className="text-2xl lg:text-3xl text-rose-gold mb-2" style={{ fontFamily: "var(--font-display)" }}>{a.value}</div>
                <div className="text-xs text-foreground/40 tracking-wider" style={{ fontFamily: "var(--font-sub)" }}>{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="mb-16 fade-in-up">
            <p className="section-label mb-4">Services</p>
            <h2 className="text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>サービス内容</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 stagger-children">
            {[
              { num: "01", title: "経営者向けAI顧問サービス", desc: "経営者の方に向けた、AIの導入・活用に関する個別顧問サービス。ビジネスの課題に合わせたAI戦略をご提案します。" },
              { num: "02", title: "法人向けAI研修", desc: "企業の社員向けAI研修プログラム。基礎から実践まで、組織全体のAIリテラシー向上を支援します。" },
              { num: "03", title: "AI×ブランディング講座", desc: "AIを活用したブランディング手法を学ぶ講座。セラピスト・美容業界の方に特化した内容もご用意。" },
              { num: "04", title: "オンライン秘書サービス", desc: "オンライン秘書チームを運営し、デザイン・事務作業・システム化まで幅広く対応できる体制を構築。" },
            ].map((s) => (
              <div key={s.num} className="editorial-card fade-in-up">
                <span className="text-xs text-rose-gold tracking-wider mb-4 block" style={{ fontFamily: "var(--font-sub)" }}>{s.num}</span>
                <h3 className="text-xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
                <p className="text-sm text-foreground/50 leading-[1.8]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section - COMING SOON */}
      <section className="py-24 lg:py-32 bg-warm-surface">
        <div className="container text-center">
          <div className="fade-in-up">
            <p className="section-label mb-4">Activity</p>
            <h2 className="text-3xl lg:text-4xl mb-8" style={{ fontFamily: "var(--font-heading)" }}>活動の様子</h2>
            <div className="py-16">
              <p className="text-5xl lg:text-6xl text-foreground/20 mb-4" style={{ fontFamily: "var(--font-heading)" }}>COMING SOON</p>
              <p className="text-sm text-foreground/40">AI研修・セミナーの活動情報を準備中です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="dark-section py-24 lg:py-32">
        <div className="container">
          <div className="mb-16 fade-in-up">
            <p className="section-label mb-4" style={{ color: "oklch(0.65 0.08 15)" }}>Details</p>
            <h2 className="text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>具体的な支援内容</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 stagger-children">
            <div className="fade-in-up">
              <h3 className="text-xl text-white/90 mb-6" style={{ fontFamily: "var(--font-heading)" }}>AI研修・セミナー</h3>
              <div className="space-y-4">
                {["経営者向けAI顧問サービス（月額制）", "法人向けAI研修（カスタマイズ対応）", "AI&デジタルセミナー（単発・連続講座）", "文科省認可スクール「未来AI学院」講師", "IMSI「AI×ブランディング講座」主宰"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-rose-gold rounded-full mt-2 shrink-0" />
                    <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-in-up">
              <h3 className="text-xl text-white/90 mb-6" style={{ fontFamily: "var(--font-heading)" }}>オンライン秘書・デジタル支援</h3>
              <div className="space-y-4">
                {["SNS発信サポート（Instagram・LINE）", "業務効率化（UTAGE・決済導入など）", "デザイン・事務作業・システム化", "ビジネス塾講師・体験会運営", "ローンチ集客の導線設計", "介護業界向けAI×マーケティング支援"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-rose-gold rounded-full mt-2 shrink-0" />
                    <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="mb-16 fade-in-up">
            <p className="section-label mb-4">For You</p>
            <h2 className="text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>こんな方におすすめ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {[
              { title: "経営者・事業主", desc: "AIを経営に取り入れたいが、何から始めればいいかわからない方" },
              { title: "美容・サロン業界", desc: "AIを活用してブランディングや集客を強化したい美容業界の方" },
              { title: "企業の人事・研修担当", desc: "社員のAIリテラシーを向上させたい企業の担当者の方" },
            ].map((t) => (
              <div key={t.title} className="fade-in-up border-t border-foreground/10 pt-6">
                <h3 className="text-lg mb-3" style={{ fontFamily: "var(--font-heading)" }}>{t.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-warm-surface">
        <div className="container text-center fade-in-up">
          <h2 className="text-3xl lg:text-4xl mb-6" style={{ fontFamily: "var(--font-heading)" }}>AI研修のご相談</h2>
          <p className="text-sm text-foreground/50 mb-10 max-w-lg mx-auto leading-relaxed">企業研修、セミナー、AI顧問サービスなど、お気軽にご相談ください。</p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-3 px-10 py-4 bg-charcoal text-white text-sm tracking-[0.15em] uppercase hover:bg-charcoal/90 transition-colors duration-300 cursor-pointer" style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}>Contact <ArrowRight className="w-4 h-4" /></span>
          </Link>
        </div>
      </section>
    </div>
  );
}
