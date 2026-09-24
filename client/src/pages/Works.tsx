import { Link, useSearch } from "wouter";
import { newsData } from "@/lib/newsData";
const cases = [
 { id: "2026-07-kokuhaku-cosmetics-supervision", title: "ドラマ作品のコスメ監修", role: "コスメ監修", text: "化粧品開発の専門知見をもとに、劇中の化粧品まわりの表現に協力しました。" },
 { id: "2026-05-yamano-lecture", title: "美容福祉とAIをつなぐ特別授業", role: "講義・AI活用体験", text: "山野美容芸術短期大学で、美容福祉とAIをテーマに90分の特別授業を実施。化粧品開発の知見とAIによる感覚の言語化を紹介しました。" },
 { id: "2026-04-reborn-beauty-summit", title: "化粧品開発とAIをテーマにした講演", role: "オンラインサミット登壇", text: "Beauty & Mind Synergy Summit 2026にて、自分に合う化粧品を選ぶ考え方と、AIを活用した感覚の整理について紹介しました。" },
];
export default function Works() {
 const category = new URLSearchParams(useSearch()).get("category");
 const selected = category === "beauty" || category === "ai" ? category : null;
 return <main className="container pt-32 lg:pt-40 pb-24"><p className="section-label mb-6">Works</p><h1 className="text-4xl lg:text-5xl mb-8">実績・事例</h1><p className="max-w-2xl text-foreground/70 leading-[2] mb-10">美容・化粧品とAIの専門性を活かした、監修・講義・登壇の実績をご紹介します。</p>
 <nav aria-label="実績の分野" className="flex flex-wrap gap-3 mb-12">{[["","すべて"],["beauty","美容・化粧品"],["ai","AI・デジタル"]].map(([key,label])=><Link key={key} href={key ? `/works?category=${key}` : "/works"} aria-current={(selected ?? "")===key ? "page" : undefined} className={`px-5 py-3 border text-sm ${(selected ?? "")===key ? "bg-charcoal text-white" : "border-foreground/20"}`}>{label}</Link>)}</nav>
 <div className="space-y-12">{cases.map(c=>{const n=newsData.find(n=>n.id===c.id);if(!n || selected && !n.categories.includes(selected))return null; return <article key={c.id} className="grid md:grid-cols-[1fr_2fr] gap-8 border-t border-foreground/20 pt-8"><div>{n.image ? <img src={n.image} alt={c.title} className="w-full aspect-[4/3] object-contain bg-warm-surface" loading="lazy"/> : <div className="aspect-[4/3] bg-warm-surface flex items-center justify-center text-rose-gold text-xl">Beauty & AI</div>}</div><div><p className="text-xs text-foreground/60 mb-4">{n.date} ／ {c.role}</p><h2 className="text-2xl mb-5">{c.title}</h2><p className="text-foreground/70 leading-[2] mb-6">{c.text}</p><Link href={`/news/${c.id}`} className="border-b pb-2 text-sm">実施内容・活動報告を読む →</Link></div></article>;})}</div>
 <div className="mt-20 p-8 lg:p-12 bg-warm-surface"><h2 className="text-2xl mb-5">近いテーマでのご相談はこちら</h2><div className="flex flex-wrap gap-6"><Link href="/contact?inquiryType=cosmetics-brand">美容・化粧品のご相談 →</Link><Link href="/contact?inquiryType=ai-training">AI研修・講義のご相談 →</Link></div></div></main>;
}
