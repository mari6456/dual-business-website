import { useScrollReveal } from "@/hooks/useScrollReveal";

const sections = [
  {
    title: "1. 事業者情報",
    body: "株式会社UNFRAME（以下「当社」といいます）は、当社が取得する個人情報の保護について、個人情報の保護に関する法律（個人情報保護法)およびその他の関係法令・ガイドラインを遵守し、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。",
  },
  {
    title: "2. 取得する個人情報",
    body: "当社は、お問い合わせフォームやメール、お名刺の交換、セミナー・研修のお申し込みなどを通じて、氏名、会社名、メールアドレス、電話番号、お問い合わせ内容等の個人情報を取得することがあります。",
  },
  {
    title: "3. 利用目的",
    body: "取得した個人情報は、次の目的の範囲内で利用します。(1) お問い合わせ・ご相談への対応、(2) サービスのご案内・ご提供、(3) セミナー・研修等の運営・連絡、(4) 契約の履行および請求等の事務処理、(5) サービス品質向上のための分析。目的の範囲を超えて利用する場合は、あらかじめご本人の同意を得るものとします。",
  },
  {
    title: "4. 第三者提供",
    body: "当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。",
  },
  {
    title: "5. 委託",
    body: "利用目的の達成に必要な範囲内で、個人情報の取り扱いを外部に委託する場合があります。その際は、委託先に対して必要かつ適切な監督を行います。",
  },
  {
    title: "6. 安全管理措置",
    body: "当社は、個人情報の漏えい、滅失または毀損の防止その他個人情報の安全管理のために、必要かつ適切な措置を講じます。",
  },
  {
    title: "7. アクセス解析・Cookie",
    body: "当サイトでは、サービス向上のためにアクセス解析ツールを利用する場合があります。これらのツールはCookieを使用して匿名のトラフィックデータを収集することがありますが、個人を特定する情報は含まれません。Cookieの利用はブラウザの設定により無効化できます。",
  },
  {
    title: "8. 開示・訂正・利用停止等の請求",
    body: "ご本人からの個人情報の開示、訂正、追加、削除、利用停止等のご請求については、ご本人であることを確認のうえ、法令に従い速やかに対応します。下記の窓口までご連絡ください。",
  },
  {
    title: "9. 本ポリシーの変更",
    body: "本ポリシーの内容は、法令の改正や運用の見直しに応じて、予告なく変更されることがあります。変更後の内容は当サイトに掲載した時点から効力を生じるものとします。",
  },
  {
    title: "10. お問い合わせ窓口",
    body: "個人情報の取り扱いに関するお問い合わせは、株式会社UNFRAME（info@ai-unframe.jp）までご連絡ください。",
  },
];

export default function Privacy() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container">
          <p className="section-label mb-6">Privacy Policy</p>
          <h1 className="text-4xl lg:text-6xl mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            プライバシーポリシー
          </h1>
          <p className="text-base text-foreground/50 max-w-2xl leading-[2]">
            株式会社UNFRAMEにおける個人情報の取り扱いについて定めたものです。
          </p>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="container">
          <div className="max-w-3xl fade-in-up">
            <div className="border-t border-foreground/10">
              {sections.map((section) => (
                <div key={section.title} className="py-8 border-b border-foreground/10">
                  <h2 className="text-base mb-4 text-foreground/80" style={{ fontFamily: "var(--font-heading)" }}>
                    {section.title}
                  </h2>
                  <p className="text-sm text-foreground/60 leading-[2]">{section.body}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-foreground/40 mt-8">制定日：2026年7月16日</p>
          </div>
        </div>
      </section>
    </div>
  );
}
