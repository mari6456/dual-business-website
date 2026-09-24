import NoteColumns from "@/components/NoteColumns";
import { BEAUTY_CATEGORIES } from "@/lib/beautyExperience";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PHOTOS, IMAGES } from "@/lib/images";

const businesses = {
  cosmetics: {
    label: "Beauty & Cosmetics", title: "美容・化粧品事業",
    lead: "ブランドの構想を、商品と事業のかたちに。",
    description: "化粧品ブランドの立ち上げから、既存ブランドの商品開発まで。商品企画、ブランドづくり、OEMパートナーとの開発進行を支援します。",
    image: IMAGES.pillarCosmetics,
    areas: [
      ["ブランド戦略・コンセプト設計", "届けたい相手と商品の価値を整理し、ブランドの方向性と商品構成を考えます。"],
      ["商品企画・開発ディレクション", "商品コンセプトや使用感・香りの方向性を整理し、試作評価と開発の進行を支援します。"],
      ["OEM連携・製造進行支援", "商品仕様や予算、希望条件をもとに、OEM候補の検討とパートナーとの調整を支援します。"],
      ["ブランド表現・マーケティング支援", "商品の魅力とブランドの世界観を整理し、販売チャネルに合わせた伝え方を考えます。"],
    ],
    scope: "UNFRAMEは企画・開発ディレクションを担い、処方開発・製造はOEMパートナーと連携して進めます。担当範囲は案件ごとに確認します。",
    lp: "/lp/cosmetics-development", lpLabel: "化粧品開発サービスの詳細", inquiry: "cosmetics-brand",
    detail: "商品化までの流れ、相談内容に合わせた支援、よくあるご質問をご案内しています。",
  },
  ai: {
    label: "AI & Digital", title: "AI・デジタル事業",
    lead: "AIを、日々の仕事で使える力に。",
    description: "法人向け研修、経営者向けAI顧問、デジタル活用支援。業務や課題に合わせて、AIの理解から実務での活用まで伴走します。",
    image: PHOTOS.team.group5,
    areas: [
      ["法人向けAI研修", "AIの基礎から実務での使い方まで。業界・職種・経験に合わせたプログラムで、受講者自身の業務を題材に学びます。"],
      ["経営者向けAI顧問", "事業や日々の業務でAIをどう活かすか。経営者の課題を整理し、活用の方向性や取り組む順番を一緒に考えます。"],
      ["業務改善・デジタル活用支援", "日々の業務を整理し、AIやデジタルツールを使える場面を検討。現場に合った活用方法と運用を支援します。"],
    ],
    scope: "取り扱う情報や利用環境を確認し、安全な入力と出力の確認を含めて支援します。対象業務・設定作業・継続支援の範囲は、ご相談のうえ個別に決定します。",
    lp: "/lp/ai-training", lpLabel: "法人AI研修の詳しいプログラム", inquiry: "ai-consulting",
    detail: "研修の特徴、プログラム、開催形式など、社内研修を検討するための詳しい情報をご覧いただけます。",
  },
};

export default function BusinessPage({ kind }: { kind: keyof typeof businesses }) {
  const b = businesses[kind];
  return <main className="pt-28 lg:pt-36">
    <section className="container pb-20 lg:pb-28">
      <p className="section-label mb-6">{b.label}</p>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div><h1 className="text-3xl lg:text-5xl leading-tight mb-8" style={{fontFamily:"var(--font-heading)"}}>{b.title}</h1>
          <h2 className="text-xl lg:text-2xl leading-relaxed mb-6">{b.lead}</h2>
          <p className="text-foreground/70 leading-[2]">{b.description}</p>
          <a href="#business-support" className="inline-flex gap-3 items-center mt-8 border-b border-foreground/30 pb-2">支援内容を見る <ArrowRight size={16}/></a>
        </div>
        <img src={b.image} alt={kind === "cosmetics" ? "美容・化粧品事業" : "UNFRAMEのAI研修"} className="w-full aspect-[4/3] object-cover"/>
      </div>
    </section>
    <section id="business-support" className="bg-warm-surface py-20 scroll-mt-24"><div className="container">
      <p className="section-label mb-4">Our Services</p><h2 className="text-3xl mb-10">支援領域</h2>
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">{b.areas.map(([title,body], i)=><article key={title} className="border-t border-foreground/20 pt-6"><p className="text-rose-gold text-sm mb-4">0{i+1}</p><h3 className="text-xl mb-4">{title}</h3><p className="text-sm leading-[2] text-foreground/70">{body}</p></article>)}</div>
      <div className="border-l-2 border-rose-gold pl-6 mt-12"><h3 className="mb-3">支援体制・担当範囲</h3><p className="text-sm leading-[2] text-foreground/70">{b.scope}</p></div>
    </div></section>
    {kind === "cosmetics" && <section className="container pt-20"><p className="section-label mb-4">Experience</p><h2 className="text-3xl mb-6">企画・開発の経験分野</h2><p className="text-foreground/70 leading-[2] mb-8">代表・河原田茉莉は、化粧品開発13年以上・200商品超の設計に従事。企画・開発に携わってきたカテゴリー・分野をご紹介します。</p><ul className="flex flex-wrap gap-3">{BEAUTY_CATEGORIES.map(category => <li key={category} className="border border-foreground/20 px-4 py-3 text-sm">{category}</li>)}</ul></section>}
    <section className="container py-20"><div className="grid md:grid-cols-2 gap-12">
      <div><p className="section-label mb-4">Works</p><h2 className="text-3xl mb-5">支援・活動の実績</h2><p className="text-sm leading-[2] text-foreground/70 mb-6">監修や講義など、担当した内容をご紹介します。</p><Link href={`/works?category=${kind === "ai" ? "ai" : "beauty"}`} className="inline-flex items-center gap-3 border-b pb-2">実績・事例を見る <ArrowRight size={16}/></Link></div>
      <div className="border border-foreground/15 p-8"><p className="section-label mb-4">Service Guide</p><h2 className="text-xl mb-5">{b.lpLabel}</h2><p className="text-sm leading-[2] text-foreground/70 mb-6">{b.detail}</p><Link href={b.lp} className="inline-flex items-center gap-3 text-rose-gold">詳しく見る <ArrowRight size={16}/></Link></div>
    </div></section>
    {kind === "cosmetics" && <NoteColumns />}
    <section className="container py-20"><h2 className="text-3xl mb-10">ご相談から支援開始まで</h2><ol className="grid md:grid-cols-3 gap-8">{[["お問い合わせ","ご検討内容や現在の状況を、分かる範囲でお知らせください。"],["内容・範囲の確認","ご要望、時期、予算を伺い、担当範囲と進め方を確認します。"],["ご提案・支援開始","支援内容とお見積もりに合意したうえで、具体的な企画・実施に進みます。"]].map(([title,body],i)=><li key={title} className="border-t pt-6"><p className="text-rose-gold mb-3">0{i+1}</p><h3 className="text-lg mb-3">{title}</h3><p className="text-sm text-foreground/70 leading-[2]">{body}</p></li>)}</ol></section>
    <section className="dark-section py-20"><div className="container text-center"><h2 className="text-2xl lg:text-3xl mb-6">ご要望に合わせて、支援の進め方を考えます。</h2><p className="text-sm text-white/70 leading-[2] mb-8">まずは、ご相談内容と希望する支援範囲をお知らせください。</p><Link href={`/contact?inquiryType=${b.inquiry}&source=${kind}-business`} className="inline-flex items-center gap-3 px-8 py-4 border border-white/50 hover:bg-white hover:text-charcoal">{b.title}について相談する <ArrowRight size={16}/></Link></div></section>
  </main>;
}
