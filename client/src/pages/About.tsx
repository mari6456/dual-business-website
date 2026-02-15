/*
Design Philosophy: Minimal Luxe × Asymmetric Dynamism
About Page: Professional, trustworthy design showcasing company information
*/

import { Building2, Users, Award, Target } from "lucide-react";
import { useEffect, useRef } from "react";

export default function About() {
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
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl lg:text-7xl font-normal leading-tight">
              会社情報
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              美とテクノロジーで、未来を創造する。
              <br />
              私たちは、化粧品開発とAI研修を通じて、
              <br />
              お客様のビジネスに新たな価値を創出します。
            </p>
          </div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-normal mb-6">
                企業理念
              </h2>
            </div>

            <div className="space-y-12">
              <div className="luxury-card fade-in-up">
                <div className="flex items-start space-x-4 mb-6">
                  <Target className="w-8 h-8 text-[var(--color-champagne-gold)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-normal mb-4">ミッション</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      私たちは、化粧品開発とAI研修という2つの領域で、革新的なソリューションを提供します。美の追求と最先端テクノロジーの融合により、お客様のビジネスに新たな価値を創出し、持続可能な成長を支援します。
                    </p>
                  </div>
                </div>
              </div>

              <div className="luxury-card fade-in-up">
                <div className="flex items-start space-x-4 mb-6">
                  <Award className="w-8 h-8 text-[var(--color-champagne-gold)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-normal mb-4">ビジョン</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      美とテクノロジーの力で、人々の生活をより豊かにし、企業の未来を創造する。化粧品業界とAI分野において、信頼されるパートナーとして、お客様と共に成長し続けます。
                    </p>
                  </div>
                </div>
              </div>

              <div className="luxury-card fade-in-up">
                <div className="flex items-start space-x-4 mb-6">
                  <Users className="w-8 h-8 text-[var(--color-champagne-gold)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-normal mb-4">バリュー</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <span className="text-[var(--color-champagne-gold)] font-bold mt-1">
                          •
                        </span>
                        <span>
                          <strong className="text-foreground">革新性:</strong>{" "}
                          常に最新のトレンドと技術を取り入れ、革新的なソリューションを提供します
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[var(--color-champagne-gold)] font-bold mt-1">
                          •
                        </span>
                        <span>
                          <strong className="text-foreground">品質:</strong>{" "}
                          妥協のない品質管理と、細部へのこだわりで、最高の成果を追求します
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[var(--color-champagne-gold)] font-bold mt-1">
                          •
                        </span>
                        <span>
                          <strong className="text-foreground">信頼:</strong>{" "}
                          透明性のあるコミュニケーションと、確実な実行で、お客様の信頼に応えます
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[var(--color-champagne-gold)] font-bold mt-1">
                          •
                        </span>
                        <span>
                          <strong className="text-foreground">成長:</strong>{" "}
                          お客様と共に成長し、長期的なパートナーシップを築きます
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-normal mb-6">
                会社概要
              </h2>
            </div>

            <div className="luxury-card fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center space-y-2">
                  <Building2 className="w-12 h-12 text-[var(--color-champagne-gold)] mx-auto mb-4" />
                  <div className="text-3xl font-bold text-[var(--color-champagne-gold)]">
                    2015
                  </div>
                  <div className="text-sm text-muted-foreground">設立年</div>
                </div>
                <div className="text-center space-y-2">
                  <Users className="w-12 h-12 text-[var(--color-champagne-gold)] mx-auto mb-4" />
                  <div className="text-3xl font-bold text-[var(--color-champagne-gold)]">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground">従業員数</div>
                </div>
                <div className="text-center space-y-2">
                  <Award className="w-12 h-12 text-[var(--color-champagne-gold)] mx-auto mb-4" />
                  <div className="text-3xl font-bold text-[var(--color-champagne-gold)]">
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    プロジェクト実績
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-base">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-border">
                  <div className="font-medium text-muted-foreground">
                    会社名
                  </div>
                  <div className="md:col-span-2">株式会社Dual Business</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-border">
                  <div className="font-medium text-muted-foreground">
                    設立年月日
                  </div>
                  <div className="md:col-span-2">2015年4月1日</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-border">
                  <div className="font-medium text-muted-foreground">
                    代表者
                  </div>
                  <div className="md:col-span-2">代表取締役 山田太郎</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-border">
                  <div className="font-medium text-muted-foreground">
                    資本金
                  </div>
                  <div className="md:col-span-2">5,000万円</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-border">
                  <div className="font-medium text-muted-foreground">
                    所在地
                  </div>
                  <div className="md:col-span-2">
                    〒150-0001
                    <br />
                    東京都渋谷区神宮前1-2-3 ビューティービル5F
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-border">
                  <div className="font-medium text-muted-foreground">
                    事業内容
                  </div>
                  <div className="md:col-span-2">
                    <ul className="space-y-2">
                      <li>• 化粧品の開発・企画</li>
                      <li>• 化粧品ブランディング支援</li>
                      <li>• OEM連動サービス</li>
                      <li>• AI企業研修プログラムの提供</li>
                      <li>• DXコンサルティング</li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                  <div className="font-medium text-muted-foreground">
                    取引銀行
                  </div>
                  <div className="md:col-span-2">
                    三菱UFJ銀行 渋谷支店
                    <br />
                    みずほ銀行 表参道支店
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-normal mb-6">沿革</h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  year: "2015年",
                  events: [
                    "4月 - 株式会社Dual Business設立",
                    "10月 - 化粧品開発事業を開始",
                  ],
                },
                {
                  year: "2017年",
                  events: [
                    "3月 - OEM連動サービスを開始",
                    "9月 - 開発実績100件突破",
                  ],
                },
                {
                  year: "2019年",
                  events: [
                    "1月 - AI企業研修事業を開始",
                    "7月 - 研修受講者1,000名突破",
                  ],
                },
                {
                  year: "2021年",
                  events: [
                    "4月 - 新オフィスへ移転",
                    "11月 - 開発実績300件突破",
                  ],
                },
                {
                  year: "2023年",
                  events: [
                    "2月 - 研修受講者5,000名突破",
                    "8月 - DXコンサルティング事業を開始",
                  ],
                },
                {
                  year: "2025年",
                  events: [
                    "3月 - 開発実績500件突破",
                    "10月 - 研修受講者10,000名突破",
                  ],
                },
              ].map((item, index) => (
                <div key={index} className="fade-in-up">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-24 text-xl font-medium text-[var(--color-champagne-gold)]">
                      {item.year}
                    </div>
                    <div className="flex-1 space-y-2">
                      {item.events.map((event, idx) => (
                        <div
                          key={idx}
                          className="text-muted-foreground leading-relaxed"
                        >
                          {event}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-normal mb-6">
                アクセス
              </h2>
            </div>

            <div className="luxury-card fade-in-up">
              <h3 className="text-2xl font-normal mb-6">本社所在地</h3>
              <div className="space-y-4 mb-8">
                <p className="text-lg">
                  〒150-0001
                  <br />
                  東京都渋谷区神宮前1-2-3 ビューティービル5F
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">電車でお越しの方:</strong>
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>• JR山手線「原宿駅」徒歩5分</li>
                    <li>• 東京メトロ千代田線・副都心線「明治神宮前駅」徒歩3分</li>
                  </ul>
                </div>
              </div>

              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">
                  Google Maps（地図は実装時に表示されます）
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
