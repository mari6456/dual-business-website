/*
Design Philosophy: Minimal Luxe × Asymmetric Dynamism
AI Training Page: Modern, tech-forward design with professional elegance
*/

import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ArrowRight,
  Brain,
  Target,
  Users,
  TrendingUp,
  CheckCircle,
  BookOpen,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function AITraining() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[var(--color-slate-gray)] to-[var(--color-charcoal)] text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[var(--color-champagne-gold)]/20 rounded-full">
                <Brain className="w-4 h-4 text-[var(--color-champagne-gold)]" />
                <span className="text-sm font-medium text-[var(--color-champagne-gold)]">
                  AI Corporate Training
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-normal leading-tight">
                AI企業研修
              </h1>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
                企業の未来を創るAI人材を育成。
                <br />
                基礎から応用まで、実践的なカリキュラムで、
                <br />
                貴社のDX推進を強力にサポートします。
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[var(--color-champagne-gold)] hover:bg-[var(--color-champagne-gold)]/90 text-[var(--color-deep-brown)] font-medium px-8 py-6 text-base group"
                >
                  研修のお問い合わせ
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/0p5mkv0GULHpasONZwD5nb/sandbox/TlsTcu2wf2p8gq4ZYtN9HO-img-2_1771134224000_na1fn_aGVyby1haS10cmFpbmluZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMHA1bWt2MEdVTEhwYXNPTlp3RDVuYi9zYW5kYm94L1Rsc1RjdTJ3ZjJwOGdxNFpZdE45SE8taW1nLTJfMTc3MTEzNDIyNDAwMF9uYTFmbl9hR1Z5YnkxaGFTMTBjbUZwYm1sdVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=D7K1zvmF0TF-wjCn~ElV1J1036TsJRnCA1c0EoTyRV8HxpyvnwOkSOZkho27ExAYB8bluIlCrqUM8mTjWGF~7n7NLC1zbSSOjEr8tNPPjyUWQxO6o-ZyyFm1VH0F4~DCx121UllcRqATdNrMBRT4KfrJ9b0fwgMZxDn4rqGXRnQdDs7TDba8QSH636r5JyraFMuH-YziV85dnmUtKQ7NXUh9pQzY6xMEsI9zXp05H35d6d6Zn4XXiK1rFQjHCpQDCH2bYBtTUytYY4BG2miPFJFLjAWzIOY89cT2Y77DkCjR5qBoPLw9eRw7RfJ0QT~SzhvFcsEm1FMGkH1Z~AzcKw__"
                alt="AI corporate training"
                className="w-full h-auto rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-normal mb-6">
              研修プログラム
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              貴社のニーズに合わせた、実践的なAI研修プログラム
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "基礎コース",
                duration: "2日間",
                target: "AI初学者・経営層",
                description:
                  "AIの基本概念から、ビジネスへの応用方法まで、わかりやすく解説。AIリテラシーを身につけます。",
                topics: [
                  "AIとは何か",
                  "機械学習の基礎",
                  "AI活用事例",
                  "ビジネスへの応用",
                ],
              },
              {
                title: "応用コース",
                duration: "5日間",
                target: "エンジニア・データ分析担当者",
                description:
                  "実際のデータを使った演習を通じて、AIモデルの構築から評価まで、実践的なスキルを習得します。",
                topics: [
                  "データ前処理",
                  "モデル構築",
                  "評価・最適化",
                  "実装演習",
                ],
              },
              {
                title: "カスタマイズ研修",
                duration: "要相談",
                target: "全社員",
                description:
                  "貴社の業界や課題に特化したカリキュラムを設計。実際の業務に直結する研修を提供します。",
                topics: [
                  "業界特化型カリキュラム",
                  "実務課題解決",
                  "社内データ活用",
                  "継続サポート",
                ],
              },
            ].map((program, index) => (
              <div key={index} className="luxury-card fade-in-up h-full">
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-normal mb-3">
                    {program.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{program.target}</span>
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-[var(--color-champagne-gold)]">
                    主なトピック
                  </h4>
                  <ul className="space-y-2">
                    {program.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[var(--color-champagne-gold)] flex-shrink-0" />
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-normal mb-6">
              研修の特徴
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              実践的で効果的な学習体験を提供します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Target,
                title: "実践的アプローチ",
                description:
                  "理論だけでなく、実際のビジネス課題を題材にした演習を豊富に用意。学んだ知識をすぐに業務に活かせます。",
              },
              {
                icon: Users,
                title: "経験豊富な講師陣",
                description:
                  "AI分野の第一線で活躍する専門家が直接指導。最新のトレンドと実務経験に基づいた質の高い研修を提供します。",
              },
              {
                icon: TrendingUp,
                title: "充実したサポート体制",
                description:
                  "研修後もフォローアップを実施。質問対応や追加資料の提供など、継続的な学習をサポートします。",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center space-y-4 fade-in-up p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-champagne-gold)]/10 mb-4">
                  <feature.icon className="w-8 h-8 text-[var(--color-champagne-gold)]" />
                </div>
                <h3 className="text-xl lg:text-2xl font-normal">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-normal mb-6">
              導入事例
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              10,000名以上の受講者実績。多くの企業のDX推進をサポートしてきました。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="luxury-card fade-in-up">
              <div className="mb-6">
                <div className="text-sm text-[var(--color-champagne-gold)] mb-2">
                  製造業 / 従業員500名
                </div>
                <h3 className="text-2xl font-normal mb-4">
                  AI活用による生産性向上
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                全社員を対象にAI基礎研修を実施。その後、エンジニアチームには応用コースを提供し、実際の製造ラインにAIを導入。生産性が30%向上しました。
              </p>
              <div className="flex items-center space-x-2 text-sm font-medium text-[var(--color-champagne-gold)]">
                <TrendingUp className="w-4 h-4" />
                <span>生産性30%向上</span>
              </div>
            </div>

            <div className="luxury-card fade-in-up lg:mt-12">
              <div className="mb-6">
                <div className="text-sm text-[var(--color-champagne-gold)] mb-2">
                  小売業 / 従業員1,000名
                </div>
                <h3 className="text-2xl font-normal mb-4">
                  データドリブン経営への転換
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                経営層向けAI研修を実施し、データ活用の重要性を共有。その後、データ分析チームを立ち上げ、売上予測や在庫最適化に成功しました。
              </p>
              <div className="flex items-center space-x-2 text-sm font-medium text-[var(--color-champagne-gold)]">
                <TrendingUp className="w-4 h-4" />
                <span>在庫コスト20%削減</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/0p5mkv0GULHpasONZwD5nb/sandbox/TlsTcu2wf2p8gq4ZYtN9HO-img-4_1771134230000_na1fn_YWktaW5ub3ZhdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMHA1bWt2MEdVTEhwYXNPTlp3RDVuYi9zYW5kYm94L1Rsc1RjdTJ3ZjJwOGdxNFpZdE45SE8taW1nLTRfMTc3MTEzNDIzMDAwMF9uYTFmbl9ZV2t0YVc1dWIzWmhkR2x2YmcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VkbiJPlePQoLZgEk79nQ0YIy97a~V0fq3FN3KelNO99KxBGsgKTSkg7hnLDKswfDGDIGEBUx4eIR62wPYR0Rv~mXBoO5GNfOcRO1IxfRQRZyfSDcvq0rpHjjqTvnSjvir3VsvuDp2YgWdgg-0qde9NRJGPHbSVJrfrlG0yytR~2EMo5ppExcYTVyJ8C~NZ5NLBWxMu0lYB20qsMH-WwTaLPb41HBWvFf8BOmy~e7xpj2swyDLXgrZZz2pHD-vSkiEq8h5KRfDoJi9wsZSoyaHTVvewrbYMtjbVK3Pm0-jDRNB2xj3skYq8cJBu~3X5HySHADwpF1UEM8nzmxg1v2DA__"
              alt="AI Innovation"
              className="max-w-2xl mx-auto rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[var(--color-champagne-gold)] to-[var(--color-warm-gray)]">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-normal text-[var(--color-deep-brown)]">
              AI研修のお問い合わせはこちら
            </h2>
            <p className="text-lg text-[var(--color-deep-brown)]/80 leading-relaxed">
              貴社のDX推進をサポートします。
              <br />
              まずはお気軽にご相談ください。
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[var(--color-deep-brown)] hover:bg-[var(--color-deep-brown)]/90 text-white font-medium px-12 py-6 text-lg group"
              >
                お問い合わせ
                <ArrowRight className="ml-2 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
