/*
Design Philosophy: Minimal Luxe × Asymmetric Dynamism
Home Page: Asymmetric magazine-style layout with generous whitespace
*/

import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Sparkles, Brain, Award, Users } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Home() {
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
      {/* Hero Section - Asymmetric Split */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content (7 columns) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-normal leading-tight">
                  美とテクノロジーで、
                  <br />
                  <span className="text-[var(--color-champagne-gold)]">
                    未来を創造する
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  化粧品開発からAI研修まで、革新的なソリューションを提供します。
                  <br />
                  私たちは、美の追求と最先端テクノロジーの融合により、
                  <br />
                  お客様のビジネスに新たな価値を創出します。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/cosmetics">
                  <Button
                    size="lg"
                    className="bg-[var(--color-champagne-gold)] hover:bg-[var(--color-champagne-gold)]/90 text-[var(--color-deep-brown)] font-medium px-8 py-6 text-base group"
                  >
                    化粧品事業について
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/ai-training">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[var(--color-champagne-gold)] text-foreground hover:bg-[var(--color-champagne-gold)] hover:text-[var(--color-deep-brown)] font-medium px-8 py-6 text-base group"
                  >
                    AI研修について
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Hero Image (5 columns) */}
            <div className="lg:col-span-5">
              <div className="relative">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/0p5mkv0GULHpasONZwD5nb/sandbox/TlsTcu2wf2p8gq4ZYtN9HO-img-1_1771134225000_na1fn_aGVyby1jb3NtZXRpY3M.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMHA1bWt2MEdVTEhwYXNPTlp3RDVuYi9zYW5kYm94L1Rsc1RjdTJ3ZjJwOGdxNFpZdE45SE8taW1nLTFfMTc3MTEzNDIyNTAwMF9uYTFmbl9hR1Z5YnkxamIzTnRaWFJwWTNNLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SemDqvf~yH4U4HF7A1cPMq2-r42qDYI~xWtS27W0QCXBZqOV3SJNgCHvL3gVPYLqKisWgomNZ29loPehrmzbI6iFQUSTDSzvEDUyNhGtpypXkuKNT~Tw8vTElQ-5bg2L2PdtlPPtqDOj1Jd44IBcoxJPHl3HWlqmIyWFU-P3T4-e1CWQ4wlBoLKaMC3GqQY28woOjzyks7A7TJnY9AL~QXIEcc64oiLzBr3CfRLgh7Df9pLfG6SL1~nfEqkv0Nb6X8ecOMlc9LCWjSteKYwA4kSHwGysu2YRn6ID2CU6H4HNpi4Dwg3p2xMjuCgur6HHFYZPusxH2-5irLG9Qiw8Jg__"
                  alt="Luxury cosmetics"
                  className="w-full h-auto rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-champagne-gold)] rounded-lg -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[var(--color-deep-brown)] text-[var(--color-ivory)]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: "500+", label: "開発実績" },
              { number: "200+", label: "取引企業" },
              { number: "10,000+", label: "研修受講者" },
              { number: "98%", label: "満足度" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-[var(--color-champagne-gold)]">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-[var(--color-warm-gray)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Introduction - Asymmetric Cards */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-normal mb-6">
              私たちの事業
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              化粧品開発とAI研修という2つの領域で、
              <br />
              革新的なソリューションを提供しています。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Cosmetics Card */}
            <Link href="/cosmetics">
              <div className="luxury-card group cursor-pointer h-full">
                <div className="aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                  <img
                    src="https://private-us-east-1.manuscdn.com/sessionFile/0p5mkv0GULHpasONZwD5nb/sandbox/TlsTcu2wf2p8gq4ZYtN9HO-img-5_1771134225000_na1fn_YnJhbmQtZXhjZWxsZW5jZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMHA1bWt2MEdVTEhwYXNPTlp3RDVuYi9zYW5kYm94L1Rsc1RjdTJ3ZjJwOGdxNFpZdE45SE8taW1nLTVfMTc3MTEzNDIyNTAwMF9uYTFmbl9ZbkpoYm1RdFpYaGpaV3hzWlc1alpRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dfVwmPt0RSU69bopIAg~IRP~C0efdhubd-KbDqJ9fkpmuuBmO2S9jveGHkynPyNsTnB67hvhJGFxW89Ra~CpRLZvg8UujsZkYua0CuMsf82CzOZJML9PDDC0es2i1DVqzcBE3sDU-BQGqUxc97cfCUPuSPve8kzZuvmeDOFkYDiwS8AVIio-S95wjhTNviSwfbx-pG1uGp47nI0zux3BFGobaGOwz8ISi7xmWTHmh-cWIwODXmRfkct9joRutmkJl8a~uD8JJVzvNczlYhuNO9psotnPXoHji0EDZLcqwwkOZokRPL1NZ7Yr1Nd6y-jsim~kSYaASHzPwwK8d1eR~w__"
                    alt="Cosmetics Development"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start space-x-3 mb-4">
                  <Sparkles className="w-6 h-6 text-[var(--color-champagne-gold)] flex-shrink-0 mt-1" />
                  <h3 className="text-2xl lg:text-3xl font-normal">
                    化粧品事業
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  商品開発・企画からブランディング、OEM連動サービスまで、化粧品ビジネスのあらゆる段階をトータルサポート。お客様のビジョンを形にします。
                </p>
                <div className="flex items-center text-[var(--color-champagne-gold)] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  詳しく見る
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>

            {/* AI Training Card */}
            <Link href="/ai-training">
              <div className="luxury-card group cursor-pointer h-full lg:mt-12">
                <div className="aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                  <img
                    src="https://private-us-east-1.manuscdn.com/sessionFile/0p5mkv0GULHpasONZwD5nb/sandbox/TlsTcu2wf2p8gq4ZYtN9HO-img-2_1771134224000_na1fn_aGVyby1haS10cmFpbmluZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMHA1bWt2MEdVTEhwYXNPTlp3RDVuYi9zYW5kYm94L1Rsc1RjdTJ3ZjJwOGdxNFpZdE45SE8taW1nLTJfMTc3MTEzNDIyNDAwMF9uYTFmbl9hR1Z5YnkxaGFTMTBjbUZwYm1sdVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=D7K1zvmF0TF-wjCn~ElV1J1036TsJRnCA1c0EoTyRV8HxpyvnwOkSOZkho27ExAYB8bluIlCrqUM8mTjWGF~7n7NLC1zbSSOjEr8tNPPjyUWQxO6o-ZyyFm1VH0F4~DCx121UllcRqATdNrMBRT4KfrJ9b0fwgMZxDn4rqGXRnQdDs7TDba8QSH636r5JyraFMuH-YziV85dnmUtKQ7NXUh9pQzY6xMEsI9zXp05H35d6d6Zn4XXiK1rFQjHCpQDCH2bYBtTUytYY4BG2miPFJFLjAWzIOY89cT2Y77DkCjR5qBoPLw9eRw7RfJ0QT~SzhvFcsEm1FMGkH1Z~AzcKw__"
                    alt="AI Corporate Training"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start space-x-3 mb-4">
                  <Brain className="w-6 h-6 text-[var(--color-champagne-gold)] flex-shrink-0 mt-1" />
                  <h3 className="text-2xl lg:text-3xl font-normal">
                    AI企業研修
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  企業の未来を創るAI人材を育成。基礎から応用まで、実践的なカリキュラムで、貴社のDX推進を強力にサポートします。
                </p>
                <div className="flex items-center text-[var(--color-champagne-gold)] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  詳しく見る
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-normal mb-6">
              選ばれる理由
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              私たちは、お客様のビジネスに真の価値を提供するため、
              <br />
              3つの強みを大切にしています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Award,
                title: "豊富な実績",
                description:
                  "500以上の化粧品開発実績と、10,000名以上のAI研修受講者実績。確かな経験に基づくサービスを提供します。",
              },
              {
                icon: Sparkles,
                title: "革新的アプローチ",
                description:
                  "最新のトレンドと技術を取り入れながら、お客様のニーズに合わせたカスタマイズソリューションを実現します。",
              },
              {
                icon: Users,
                title: "充実したサポート",
                description:
                  "プロジェクト開始から完了まで、専任チームが一貫してサポート。安心してお任せいただけます。",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center space-y-4 fade-in-up p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-champagne-gold)]/10 mb-4">
                  <item.icon className="w-8 h-8 text-[var(--color-champagne-gold)]" />
                </div>
                <h3 className="text-xl lg:text-2xl font-normal">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[var(--color-champagne-gold)] to-[var(--color-warm-gray)]">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-normal text-[var(--color-deep-brown)]">
              お気軽にご相談ください
            </h2>
            <p className="text-lg text-[var(--color-deep-brown)]/80 leading-relaxed">
              化粧品開発やAI研修に関するご質問、ご相談など、
              <br />
              どんなことでもお気軽にお問い合わせください。
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
