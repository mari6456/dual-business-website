/*
Design Philosophy: Minimal Luxe × Asymmetric Dynamism
Cosmetics Page: Elegant, refined design emphasizing luxury and craftsmanship
*/

import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ArrowRight,
  Sparkles,
  Palette,
  Package,
  Users,
  CheckCircle,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function Cosmetics() {
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
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[var(--color-ivory)] to-[var(--color-warm-gray)]/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[var(--color-champagne-gold)]/10 rounded-full">
                <Sparkles className="w-4 h-4 text-[var(--color-champagne-gold)]" />
                <span className="text-sm font-medium text-[var(--color-champagne-gold)]">
                  Cosmetics Development
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-normal leading-tight">
                化粧品事業
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                商品開発・企画からブランディング、OEM連動サービスまで。
                <br />
                美を創造し、ブランドを育てる、トータルソリューションを提供します。
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[var(--color-champagne-gold)] hover:bg-[var(--color-champagne-gold)]/90 text-[var(--color-deep-brown)] font-medium px-8 py-6 text-base group"
                >
                  ご相談はこちら
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/0p5mkv0GULHpasONZwD5nb/sandbox/TlsTcu2wf2p8gq4ZYtN9HO-img-1_1771134225000_na1fn_aGVyby1jb3NtZXRpY3M.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMHA1bWt2MEdVTEhwYXNPTlp3RDVuYi9zYW5kYm94L1Rsc1RjdTJ3ZjJwOGdxNFpZdE45SE8taW1nLTFfMTc3MTEzNDIyNTAwMF9uYTFmbl9hR1Z5YnkxamIzTnRaWFJwWTNNLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SemDqvf~yH4U4HF7A1cPMq2-r42qDYI~xWtS27W0QCXBZqOV3SJNgCHvL3gVPYLqKisWgomNZ29loPehrmzbI6iFQUSTDSzvEDUyNhGtpypXkuKNT~Tw8vTElQ-5bg2L2PdtlPPtqDOj1Jd44IBcoxJPHl3HWlqmIyWFU-P3T4-e1CWQ4wlBoLKaMC3GqQY28woOjzyks7A7TJnY9AL~QXIEcc64oiLzBr3CfRLgh7Df9pLfG6SL1~nfEqkv0Nb6X8ecOMlc9LCWjSteKYwA4kSHwGysu2YRn6ID2CU6H4HNpi4Dwg3p2xMjuCgur6HHFYZPusxH2-5irLG9Qiw8Jg__"
                alt="Luxury cosmetics products"
                className="w-full h-auto rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-normal mb-6">
              提供サービス
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              化粧品ビジネスのあらゆる段階をトータルサポート
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                icon: Sparkles,
                title: "商品開発・企画",
                description:
                  "市場調査から処方開発まで、お客様のビジョンを形にします。トレンドを捉えた革新的な製品開発をサポート。",
                features: [
                  "市場調査・トレンド分析",
                  "コンセプト設計",
                  "処方開発",
                  "試作・評価",
                ],
              },
              {
                icon: Palette,
                title: "ブランディング",
                description:
                  "ブランドアイデンティティの確立から、パッケージデザイン、マーケティング戦略まで、一貫したブランド構築を支援。",
                features: [
                  "ブランド戦略立案",
                  "ロゴ・VI開発",
                  "パッケージデザイン",
                  "マーケティング支援",
                ],
              },
              {
                icon: Package,
                title: "OEM連動サービス",
                description:
                  "信頼できるOEMメーカーとのネットワークを活用し、製造から品質管理まで、スムーズな生産体制を構築。",
                features: [
                  "OEMメーカー選定",
                  "製造工程管理",
                  "品質管理",
                  "納期管理",
                ],
              },
              {
                icon: Users,
                title: "OEM提案",
                description:
                  "OEM会社としての豊富な経験を活かし、お客様のニーズに最適な製造ソリューションをご提案します。",
                features: [
                  "製造能力の提供",
                  "コスト最適化",
                  "技術サポート",
                  "柔軟な生産対応",
                ],
              },
            ].map((service, index) => (
              <div key={index} className="luxury-card fade-in-up">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-champagne-gold)]/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-[var(--color-champagne-gold)]" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-normal mt-1">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-[var(--color-champagne-gold)] flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-normal mb-6">
              開発プロセス
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              5つのステップで、お客様の理想を実現します
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "ヒアリング・企画",
                description:
                  "お客様のビジョン、ターゲット、予算などを詳しくヒアリング。最適な企画をご提案します。",
              },
              {
                step: "02",
                title: "処方開発",
                description:
                  "市場調査とトレンド分析に基づき、効果的で安全な処方を開発。試作を重ねて最適化します。",
              },
              {
                step: "03",
                title: "デザイン・パッケージング",
                description:
                  "ブランドイメージに合わせたパッケージデザインを作成。視覚的な魅力と機能性を両立します。",
              },
              {
                step: "04",
                title: "製造・品質管理",
                description:
                  "信頼できるOEMメーカーと連携し、厳格な品質管理のもと製造。安全性を最優先します。",
              },
              {
                step: "05",
                title: "納品・サポート",
                description:
                  "納期通りに納品し、販売後もマーケティング支援やリピート対応など、継続的にサポートします。",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 mb-12 fade-in-up"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[var(--color-champagne-gold)] flex items-center justify-center text-[var(--color-deep-brown)] font-bold text-xl">
                  {process.step}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl lg:text-2xl font-normal mb-3">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Image */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-normal mb-6">
              開発実績
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              500以上の化粧品開発実績。お客様の成功をサポートしてきました。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative overflow-hidden rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/0p5mkv0GULHpasONZwD5nb/sandbox/TlsTcu2wf2p8gq4ZYtN9HO-img-3_1771134233000_na1fn_Y29zbWV0aWNzLXByb2Nlc3M.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMHA1bWt2MEdVTEhwYXNPTlp3RDVuYi9zYW5kYm94L1Rsc1RjdTJ3ZjJwOGdxNFpZdE45SE8taW1nLTNfMTc3MTEzNDIzMzAwMF9uYTFmbl9ZMjl6YldWMGFXTnpMWEJ5YjJObGMzTS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ofnxRTcYOdU~dzcMaLDE-7M4VvQDHksVXeCN-MOhDNTbGXEG3xZPsqpnEMEb~C0gy8v9SUT49g0GTT8wrYQAxsTevOsmx4n6xVG7zmIt66SYttkTmo8uZpY4A-WNnUV5dMoM-BbQ6nvCi4Y0KTr8EjSnC7qPGBeHrNc7lLz-JsvXqIEyoKJD5Fz1a9ke4hM4wycCGONaYseoMGdP1UXy8CP5e3Zaa7GPEtqaYWojUCwc-CYCXgCREosecS7Y098TAc1lQigXaI24ahbu6QgRkLHHq8mEiwjyydJlwxn9tOS-jcyXHmm7i6tEztp7F6Vy2JJK9OJgmWUX2UrnjFqO1g__"
                alt="Cosmetics development process"
                className="w-full h-auto"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.15)] lg:mt-12">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/0p5mkv0GULHpasONZwD5nb/sandbox/TlsTcu2wf2p8gq4ZYtN9HO-img-5_1771134225000_na1fn_YnJhbmQtZXhjZWxsZW5jZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMHA1bWt2MEdVTEhwYXNPTlp3RDVuYi9zYW5kYm94L1Rsc1RjdTJ3ZjJwOGdxNFpZdE45SE8taW1nLTVfMTc3MTEzNDIyNTAwMF9uYTFmbl9ZbkpoYm1RdFpYaGpaV3hzWlc1alpRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dfVwmPt0RSU69bopIAg~IRP~C0efdhubd-KbDqJ9fkpmuuBmO2S9jveGHkynPyNsTnB67hvhJGFxW89Ra~CpRLZvg8UujsZkYua0CuMsf82CzOZJML9PDDC0es2i1DVqzcBE3sDU-BQGqUxc97cfCUPuSPve8kzZuvmeDOFkYDiwS8AVIio-S95wjhTNviSwfbx-pG1uGp47nI0zux3BFGobaGOwz8ISi7xmWTHmh-cWIwODXmRfkct9joRutmkJl8a~uD8JJVzvNczlYhuNO9psotnPXoHji0EDZLcqwwkOZokRPL1NZ7Yr1Nd6y-jsim~kSYaASHzPwwK8d1eR~w__"
                alt="Brand excellence"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[var(--color-champagne-gold)] to-[var(--color-warm-gray)]">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-normal text-[var(--color-deep-brown)]">
              化粧品開発のご相談はこちら
            </h2>
            <p className="text-lg text-[var(--color-deep-brown)]/80 leading-relaxed">
              お客様のビジョンを形にするお手伝いをさせてください。
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
