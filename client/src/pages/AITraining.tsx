import { Link } from "wouter";
import { ArrowRight, CheckSquare, ChevronDown, ChevronUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PHOTOS } from "@/lib/images";
import { useState } from "react";

// Design: Sophisticated dark editorial with warm rose-gold accents
// Sections: FV → 課題提起 → 共感・原因 → 3つの強み → プログラム → 対象・形式 → 講師 → 受講者の声 → FAQ → CTA

const faqs = [
  {
    q: "AIが初めて・PCが苦手な社員でもついていけますか？",
    a: "はい。「まず触ってみる」ところから始め、経理から社長まで全職種が参加した実績があります。",
  },
  {
    q: "情報漏洩が心配です。全社で使わせて大丈夫？",
    a: "安全な運用ルールづくり込みで指導します。「やってはいけないこと」も最初にお伝えします。",
  },
  {
    q: "うちの業界に合う内容になりますか？",
    a: "業界別の実例で個別設計します。美容・建設・福祉・士業などの実績があります。",
  },
  {
    q: "研修後のフォローはありますか？",
    a: "定着支援・質問対応に対応。「やって終わり」にしません。",
  },
  {
    q: "オンラインでも対面でも可能ですか？",
    a: "オンライン・対面・ハイブリッドいずれも対応します。",
  },
  {
    q: "何回・何時間から頼めますか？",
    a: "2時間の単発から、6回以上の伴走型まで柔軟に設計します。",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-foreground/10">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
          {q}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-rose-gold shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-foreground/40 shrink-0" />
        )}
      </button>
      {open && (
        <p className="pb-5 text-sm text-foreground/55 leading-relaxed pl-0" style={{ fontFamily: "var(--font-body)" }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function AITraining() {
  useScrollReveal();

  return (
    <div className="min-h-screen">

      {/* ── Section 01: Hero / FV ── */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={PHOTOS.team.group5}
            alt="AI企業研修"
            className="w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/30" />
        </div>
        <div className="container relative z-10 py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-rose-gold mb-8" style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}>
              AI Corporate Training
            </p>
            <h1
              className="text-3xl lg:text-5xl text-white leading-[1.25] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              「研修は受けた。<br />でも、現場では<br />誰も使っていない」
            </h1>
            <p
              className="text-xl lg:text-2xl text-rose-gold mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ——それを終わらせる、AI企業研修。
            </p>
            <p className="text-sm text-white/70 leading-[2] mb-10 max-w-lg" style={{ fontFamily: "var(--font-body)" }}>
              "知る"で終わらせない。受けた<strong className="text-white">翌日から、あなたの業務がAIで実際に回り出す</strong>まで伴走します。
              美容・建設・福祉・士業——業界別の実例で「自分の仕事にどう使うか」が腹落ちする研修です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact">
                <span
                  className="inline-flex items-center gap-3 px-8 py-4 bg-rose-gold text-white text-sm tracking-[0.1em] uppercase hover:opacity-90 transition-opacity duration-300 cursor-pointer"
                  style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}
                >
                  無料で相談する <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <a
                href="#program"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/40 text-white text-sm tracking-[0.1em] uppercase hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}
              >
                研修プログラムを見る <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            {/* 信頼バッジ */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                "ハウスメーカー様で半年継続研修導入",
                "美容芸術短期大学 登壇",
                "建設業向け研修 実績",
              ].map((badge) => (
                <span
                  key={badge}
                  className="text-[0.65rem] tracking-[0.15em] text-white/50"
                  style={{ fontFamily: "var(--font-sub)" }}
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 02: 課題提起 ── */}
      <section className="py-24 lg:py-32 bg-warm-surface">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="fade-in-up mb-12">
              <p className="section-label mb-4">Problem</p>
              <h2 className="text-2xl lg:text-3xl" style={{ fontFamily: "var(--font-heading)" }}>
                こんな"AI研修あるある"で<br />止まっていませんか？
              </h2>
            </div>
            <div className="space-y-4 stagger-children">
              {[
                "研修を入れたが、現場では結局ChatGPTを少し触って終わり",
                "「便利なのは分かった。でも自分の業務にどう使うかが分からない」で社員が止まる",
                "ツールの説明は受けたが、翌日から使える具体的な手順が残っていない",
                "一部のリテラシーが高い人だけが使い、組織に定着しない",
                "情報漏洩が怖くて、結局全社では使わせられない",
                "法改正や社内資料の最新版管理など、「探す・追う」時間に消耗している",
              ].map((item, i) => (
                <div
                  key={i}
                  className="fade-in-up flex items-start gap-4 p-5 bg-white border border-foreground/5 hover:border-rose-gold/20 transition-colors duration-300"
                >
                  <CheckSquare className="w-4 h-4 text-foreground/20 mt-0.5 shrink-0" />
                  <p className="text-sm text-foreground/70 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="fade-in-up mt-10 p-6 border-l-2 border-rose-gold bg-white">
              <p className="text-sm text-foreground/60 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                ひとつでも当てはまったら、原因は「社員のやる気」でも「AIの性能」でもありません。
              </p>
              <p className="text-base mt-2 font-medium" style={{ fontFamily: "var(--font-heading)" }}>
                研修の設計です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 03: 共感と原因 ── */}
      <section className="dark-section py-24 lg:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center fade-in-up">
            <p className="section-label mb-6" style={{ color: "oklch(0.65 0.08 15)" }}>Why</p>
            <h2 className="text-2xl lg:text-3xl text-white mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              多くの研修は"機能紹介"で終わる。<br />だから現場で使われない。
            </h2>
            <p className="text-sm text-white/60 leading-[2] mb-10" style={{ fontFamily: "var(--font-body)" }}>
              生成AIの機能を一通り説明する研修はたくさんあります。
              でも受講者が本当に超えられない壁は、知識ではなくたった一点——
            </p>
            <div className="py-10 px-8 border border-white/10 mb-10">
              <p className="text-2xl lg:text-3xl text-white" style={{ fontFamily: "var(--font-heading)" }}>
                「で、自分の"今日の仕事"の<br />どこに使うの？」
              </p>
            </div>
            <p className="text-sm text-white/60 leading-[2]" style={{ fontFamily: "var(--font-body)" }}>
              ここを越えさせないまま終わるから、研修は「いい話だった」で消えていきます。<br /><br />
              UNFRAMEの研修は、500回超の実研修から磨いた
              <strong className="text-white">「手を動かして、自分の業務で1つ完成させて帰る」</strong>型。<br />
              だから受けた翌日、現場が動き出します。
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 04: 3つの強み ── */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="mb-16 fade-in-up">
            <p className="section-label mb-4">Strengths</p>
            <h2 className="text-2xl lg:text-3xl" style={{ fontFamily: "var(--font-heading)" }}>
              UNFRAMEのAI研修が、<br />"使われる研修"になる3つの理由
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 stagger-children">
            {[
              {
                num: "01",
                title: '"知る"ではなく、"自分の業務で動かす"まで',
                body: 'ゴール宣言 → まず触らせる → たとえ話で概念理解 → コピペで使えるプロンプト配布 → 手を動かすワーク → 気づきのシェア → 宿題。この黄金フローで、毎回「自分の成果物を1つ」持ち帰ります。聞いて終わりにしません。',
              },
              {
                num: "02",
                title: '業界別の"自分ごと"実例',
                body: '美容・サロン／建設・工事管理／美容福祉／士業・契約書——受講者の業界に合わせた実例で講義します。抽象論ゼロ。最初から「あなたの仕事」の話だから、腹落ちのスピードが違います。',
              },
              {
                num: "03",
                title: '"リテラシー"で終わらず、"自動化・制作"まで到達',
                body: 'Gemini・Gem／NotebookLM／画像生成／スライド・HP制作／スプレッドシート連携の自動化まで。研修後、組織には「回り続ける仕組みと、目に見える成果物」が残ります。',
              },
            ].map((s) => (
              <div key={s.num} className="editorial-card fade-in-up">
                <span className="text-xs text-rose-gold tracking-wider mb-4 block" style={{ fontFamily: "var(--font-sub)" }}>
                  {s.num}
                </span>
                <h3 className="text-lg mb-4 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                  {s.title}
                </h3>
                <p className="text-sm text-foreground/50 leading-[1.9]" style={{ fontFamily: "var(--font-body)" }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 05: プログラム内容 ── */}
      <section id="program" className="py-24 lg:py-32 bg-warm-surface">
        <div className="container">
          <div className="mb-16 fade-in-up">
            <p className="section-label mb-4">Program</p>
            <h2 className="text-2xl lg:text-3xl" style={{ fontFamily: "var(--font-heading)" }}>
              御社のレベルに合わせて設計する、<br />5つのステップ
            </h2>
          </div>
          <div className="space-y-1 stagger-children">
            {[
              {
                step: "STEP 1",
                title: "基礎編",
                content: "AIの全体像と「怖くない」使い方／プロンプトの型",
                goal: "AIへの苦手意識がなくなる",
              },
              {
                step: "STEP 2",
                title: "ツール活用編",
                content: "Gemini・Gem・NotebookLMで日常業務を時短",
                goal: "自分専用AIを1つ作る",
              },
              {
                step: "STEP 3",
                title: "自動化編",
                content: "スプレッドシート連携等で繰り返し業務を仕組み化",
                goal: "定例業務を1つ自動化する",
              },
              {
                step: "STEP 4",
                title: "上級・制作編",
                content: "画像生成・スライド・HP制作・資料作成",
                goal: "提案資料/HPを1つ完成させる",
              },
              {
                step: "STEP 5",
                title: "業務DX定着編",
                content: "各部署の業務にAIを組み込み、組織に定着",
                goal: "チームで使う仕組みを作る",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="fade-in-up grid grid-cols-[auto_1fr_auto] lg:grid-cols-[120px_1fr_auto] items-center gap-6 p-6 bg-white border border-foreground/5 hover:border-rose-gold/20 transition-colors duration-300"
              >
                <div>
                  <p className="text-[0.6rem] tracking-[0.2em] text-rose-gold mb-1" style={{ fontFamily: "var(--font-sub)" }}>
                    {item.step}
                  </p>
                  <p className="text-base font-medium" style={{ fontFamily: "var(--font-heading)" }}>
                    {item.title}
                  </p>
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {item.content}
                </p>
                <div className="hidden lg:block text-right min-w-[180px]">
                  <p className="text-[0.6rem] tracking-[0.15em] text-foreground/30 mb-1" style={{ fontFamily: "var(--font-sub)" }}>
                    この回のゴール
                  </p>
                  <p className="text-xs text-foreground/60" style={{ fontFamily: "var(--font-body)" }}>
                    {item.goal}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="fade-in-up mt-8 p-6 border-l-2 border-rose-gold bg-white">
            <p className="text-sm text-foreground/60 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              <strong className="text-foreground">各回共通のゴール：</strong>その日のうちに、自分の業務で"1つ"完成させて帰る。<br />
              単発の体験会から、全6回の伴走型まで、回数・テーマは御社に合わせて設計します。
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 06: 対象・形式 ── */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="mb-16 fade-in-up">
            <p className="section-label mb-4">For</p>
            <h2 className="text-2xl lg:text-3xl" style={{ fontFamily: "var(--font-heading)" }}>対象・形式</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 stagger-children">
            <div className="fade-in-up editorial-card">
              <span className="text-xs text-rose-gold tracking-wider mb-4 block" style={{ fontFamily: "var(--font-sub)" }}>
                対象
              </span>
              <div className="space-y-3">
                {[
                  "全社員のAIリテラシー底上げ",
                  "部署単位の実務研修",
                  "経営層向けの方針づくり",
                  "業界特化（美容・建設・福祉・士業 など）",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-rose-gold rounded-full mt-2 shrink-0" />
                    <span className="text-sm text-foreground/60 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-in-up editorial-card">
              <span className="text-xs text-rose-gold tracking-wider mb-4 block" style={{ fontFamily: "var(--font-sub)" }}>
                形式
              </span>
              <div className="space-y-3">
                {[
                  "オンライン／対面／ハイブリッド",
                  "単発（2時間〜）〜 全6回の継続伴走型まで",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-rose-gold rounded-full mt-2 shrink-0" />
                    <span className="text-sm text-foreground/60 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-foreground/10">
                <p className="text-xs text-foreground/40 mb-2" style={{ fontFamily: "var(--font-sub)" }}>
                  個人・サロン向け
                </p>
                <p className="text-sm text-foreground/60 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  フリーランス・個人事業主・サロン経営者・セラピスト向けの少人数コースもご用意しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 07: 講師紹介 ── */}
      <section className="dark-section py-24 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="image-reveal fade-in-up order-2 lg:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663045491092/mAJ6yzJwtYgBjF8R6h4Rmz/training-photo_2b279ceb.jpg"
                alt="講師 まり"
                className="w-full aspect-[4/3] object-cover object-center"
              />
            </div>
            <div className="fade-in-up order-1 lg:order-2">
              <p className="section-label mb-6" style={{ color: "oklch(0.65 0.08 15)" }}>Instructor</p>
              <h2 className="text-2xl lg:text-3xl text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                講師｜まり
              </h2>
              <p className="text-xs text-white/40 tracking-wider mb-8" style={{ fontFamily: "var(--font-sub)" }}>
                UNFRAME 代表 / AI未来学院講師
              </p>
              <p className="text-sm text-white/80 leading-[2] mb-6 italic" style={{ fontFamily: "var(--font-body)" }}>
                「ツールを教える人」ではなく、「現場で成果を出している人」が、その使い方を教えます。
              </p>
              <p className="text-sm text-white/60 leading-[2] mb-10" style={{ fontFamily: "var(--font-body)" }}>
                化粧品開発コンサルタント × AI実務家。自ら事業を回しながら、企業・専門学校・サロンへ登壇。
                机上の知識ではなく、<strong className="text-white">今まさに自分のビジネスで使っているAI活用</strong>を、そのまま現場目線で伝えます。
              </p>
              <div>
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-white/30 mb-4" style={{ fontFamily: "var(--font-sub)" }}>
                  登壇・実績（抜粋）
                </p>
                <div className="space-y-3">
                  {[
                    "ハウスメーカー様にて半年間の継続AI研修を担当（基礎〜HP制作・自動化まで）",
                    "美容芸術短期大学にて「美容福祉 × AI」授業を担当",
                    "建設業向けAI研修",
                    "介護業界向けAIシステム導入（GAS・業務自動化）",
                    "美容・サロン・個人事業向けAI／ブランディング講座 多数",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-1 h-1 bg-rose-gold rounded-full mt-2 shrink-0" />
                      <span className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 08: 導入事例・受講者の声 ── */}
      <section className="py-24 lg:py-32 bg-warm-surface">
        <div className="container">
          <div className="mb-16 fade-in-up">
            <p className="section-label mb-4">Case Study</p>
            <h2 className="text-2xl lg:text-3xl" style={{ fontFamily: "var(--font-heading)" }}>
              数字で見る研修の実態<br />
              <span className="text-lg text-foreground/50">ハウスメーカー様・半年継続研修導入</span>
            </h2>
          </div>

          {/* 実績数字 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 stagger-children">
            {[
              { value: "半年間", label: "継続研修を完走" },
              { value: "全職種", label: "経理〜社長まで参加" },
              { value: "500名超", label: "累計セミナー参加者" },
              { value: "自動化まで", label: "到達範囲" },
            ].map((stat) => (
              <div key={stat.label} className="fade-in-up text-center">
                <div className="text-3xl lg:text-4xl text-rose-gold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {stat.value}
                </div>
                <div className="text-xs text-foreground/40 tracking-wider" style={{ fontFamily: "var(--font-sub)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* 受講者の声 */}
          <div className="mb-12 fade-in-up">
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-foreground/30 mb-8" style={{ fontFamily: "var(--font-sub)" }}>
              受講者の声（実コメント）
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {[
              {
                quote: "なんとなくで使っていたAIへの解像度が上がった。プロンプトへの意識で、返信業務がそのまま効率化できると感じました",
                role: "設計",
              },
              {
                quote: "初めてでしたが、とても利便性が良く、業務の時短になると実感しました",
                role: "経理・総務",
              },
              {
                quote: "自分がやっていた仕事に寄り添った内容で、すぐ実践できそう。とても有意義でした",
                role: "アシスタント",
              },
              {
                quote: "お客様とのメッセージ作成が多いので、自分専用AI（Gem）が非常に便利でした",
                role: "設計",
              },
              {
                quote: "HPを自分で作れることが驚きでした。コードまで作れるのはすごい",
                role: "設計",
              },
              {
                quote: "スプレッドシートから読み取ってリマインドを自動化できる。スケジュール管理に早速使います",
                role: "設計",
              },
              {
                quote: "他社の画像からプロンプトを作ると新しいアイデアが生まれる。お客様への提案資料に活かします",
                role: "社長",
              },
              {
                quote: "NotebookLMで要約や資料が簡単に作れる。ただ調べるのでなく、効率よく仕事できるようにしたい",
                role: "アシスタント",
              },
              {
                quote: "カスタム指示はYouTube等で情報過多になり試せずにいた。信頼できる方の説明で、ようやく取り入れられました",
                role: "アシスタント",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="fade-in-up bg-white p-6 border border-foreground/5 hover:border-rose-gold/20 transition-colors duration-300"
              >
                <p className="text-sm text-foreground/65 leading-[1.9] mb-4 italic" style={{ fontFamily: "var(--font-body)" }}>
                  「{v.quote}」
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 09: 料金 ── */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="mb-16 fade-in-up">
            <p className="section-label mb-4">Pricing</p>
            <h2 className="text-2xl lg:text-3xl" style={{ fontFamily: "var(--font-heading)" }}>
              御社に合わせて設計します
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 stagger-children mb-10">
            {[
              { plan: "体験・単発研修", desc: "2時間〜の単発", price: "まずはご相談ください" },
              { plan: "スタンダード", desc: "全3〜6回の伴走型", price: "まずはご相談ください" },
              { plan: "業界特化・カスタム", desc: "御社業務に完全カスタム設計", price: "お見積り" },
            ].map((p) => (
              <div key={p.plan} className="fade-in-up editorial-card">
                <span className="text-xs text-rose-gold tracking-wider mb-4 block" style={{ fontFamily: "var(--font-sub)" }}>
                  {p.plan}
                </span>
                <p className="text-sm text-foreground/50 mb-4 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {p.desc}
                </p>
                <p className="text-base" style={{ fontFamily: "var(--font-heading)" }}>
                  {p.price}
                </p>
              </div>
            ))}
          </div>
          <div className="fade-in-up p-6 border-l-2 border-rose-gold bg-warm-surface">
            <p className="text-xs text-rose-gold tracking-wider mb-2" style={{ fontFamily: "var(--font-sub)" }}>
              💡 助成金の活用サポートあり
            </p>
            <p className="text-sm text-foreground/60 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              人材開発支援助成金等の活用で、実質負担を大きく抑えられる場合があります。申請のサポートも可能です。詳しくはお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 10: FAQ ── */}
      <section className="py-24 lg:py-32 bg-warm-surface">
        <div className="container">
          <div className="mb-16 fade-in-up">
            <p className="section-label mb-4">FAQ</p>
            <h2 className="text-2xl lg:text-3xl" style={{ fontFamily: "var(--font-heading)" }}>よくあるご質問</h2>
          </div>
          <div className="max-w-2xl fade-in-up">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 11: 最後のCTA ── */}
      <section className="dark-section py-24 lg:py-32">
        <div className="container text-center fade-in-up">
          <p className="section-label mb-6" style={{ color: "oklch(0.65 0.08 15)" }}>Contact</p>
          <h2 className="text-2xl lg:text-4xl text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            「研修して終わり」を、<br />もう繰り返さない。
          </h2>
          <p className="text-sm text-white/60 leading-[2] mb-10 max-w-lg mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            まずは無料相談で、<strong className="text-white">御社の業務にAIがどう刺さるか</strong>を一緒に見立てます。
            御社の課題に合わせて、最適な研修プランをご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact">
              <span
                className="inline-flex items-center gap-3 px-10 py-4 bg-rose-gold text-white text-sm tracking-[0.15em] uppercase hover:opacity-90 transition-opacity duration-300 cursor-pointer"
                style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}
              >
                無料で相談する <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
          <p className="text-xs text-white/30" style={{ fontFamily: "var(--font-sub)" }}>
            しつこい営業はしません。まずは「自社で何ができそうか」を知るところから。
          </p>
        </div>
      </section>

    </div>
  );
}
