import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const companyInfo = [
  { label: "会社名", value: "株式会社UNFRAME" },
  { label: "代表者", value: "河原田茉莉" },
  {
    label: "事業内容",
    value: "化粧品・美容ブランドの企画開発支援、AI研修・デジタル活用支援、ブランディング・マーケティング支援",
  },
  { label: "お問い合わせ", value: "info@ai-unframe.jp", href: "mailto:info@ai-unframe.jp" },
];

export default function Company() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container">
          <p className="section-label mb-6">Company</p>
          <h1 className="text-4xl lg:text-6xl mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            会社概要
          </h1>
          <p className="text-base text-foreground/50 max-w-2xl leading-[2]">
            株式会社UNFRAMEは、美容・化粧品領域のブランド開発と、AI・デジタル活用支援を通じて、
            事業と人の可能性を広げるための伴走支援を行っています。
          </p>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-2 fade-in-up">
              <div className="border-t border-foreground/10">
                {companyInfo.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-10 py-7 border-b border-foreground/10"
                  >
                    <dt
                      className="text-xs tracking-[0.18em] uppercase text-foreground/40"
                      style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}
                    >
                      {item.label}
                    </dt>
                    <dd className="text-sm text-foreground/70 leading-[1.9]">
                      {item.href ? (
                        <a href={item.href} className="hover:text-rose-gold transition-colors duration-300">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </div>
            </div>

            <aside className="fade-in-up bg-warm-surface p-8">
              <p
                className="text-[0.65rem] tracking-[0.2em] uppercase text-rose-gold mb-5"
                style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}
              >
                Contact
              </p>
              <h2 className="text-xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                お仕事のご相談
              </h2>
              <p className="text-sm text-foreground/50 leading-[1.9] mb-8">
                化粧品開発、ブランド支援、AI研修に関するご相談は、お問い合わせフォームよりご連絡ください。
              </p>
              <Link href="/contact">
                <span
                  className="inline-flex items-center gap-3 text-sm tracking-[0.12em] uppercase text-foreground hover:text-rose-gold transition-colors duration-300 cursor-pointer"
                  style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}
                >
                  Contact <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
