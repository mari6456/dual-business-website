import { ArrowUpRight } from "lucide-react";

const articles = [
  { id: "nb431d47f7d93", label: "はじめての方へ", title: "30代後半のスキンケア、何から読む？ 悩み別もくじ", description: "保湿・ハリ・くすみ・ゆらぎなど、気になる悩みから記事を探せます。" },
  { id: "n97a22c26621f", label: "成分の選び方", title: "乾燥・ゆらぎ肌を守る保湿オイル。スクワランの選び方と30代後半の使い方", description: "スクワランの特徴や原料の違い、スキンケアへの取り入れ方を紹介します。" },
  { id: "ne193be74b4ec", label: "化粧品を知る", title: "ハリ・たるみが気になる30代後半へ。エラスチンの働きと、化粧品に期待できること", description: "肌に存在するエラスチンと、化粧品成分としての役割を取り上げます。" },
];

export default function NoteColumns() {
  return <section id="skincare-columns" className="bg-warm-surface py-20 lg:py-24 scroll-mt-24" aria-labelledby="skincare-columns-title">
    <div className="container">
      <p className="section-label mb-4">Skincare Columns</p>
      <h2 id="skincare-columns-title" className="text-2xl lg:text-3xl leading-relaxed mb-6" style={{ fontFamily: "var(--font-heading)" }}>化粧品開発者の視点から、<br className="hidden sm:block"/>スキンケアをひもとく</h2>
      <p className="text-sm leading-[2] text-foreground/70 max-w-2xl mb-10">UNFRAME代表・河原田茉莉が、成分や肌のしくみ、化粧品の選び方をnote「30代後半のためのスキンケアの教科書」で解説しています。</p>
      <div className="grid md:grid-cols-3 gap-6">{articles.map(article => <a key={article.id} href={`https://note.com/skincarelove/n/${article.id}`} target="_blank" rel="noopener noreferrer" className="group flex flex-col border border-foreground/15 bg-white p-7 lg:p-8 hover:border-rose-gold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-gold">
        <p className="text-xs text-rose-gold mb-5">{article.label}</p>
        <h3 className="text-lg leading-relaxed mb-4">{article.title}</h3>
        <p className="text-sm text-foreground/60 leading-[1.9] mb-8">{article.description}</p>
        <span className="mt-auto inline-flex items-center gap-2 text-sm">noteで読む <ArrowUpRight size={16} aria-hidden="true"/><span className="sr-only">（新しいタブで開きます）</span></span>
      </a>)}</div>
      <a href="https://note.com/skincarelove" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm border-b border-foreground/30 pb-2 mt-8">すべてのコラムを見る <ArrowUpRight size={16} aria-hidden="true"/><span className="sr-only">（新しいタブで開きます）</span></a>
    </div>
  </section>;
}
