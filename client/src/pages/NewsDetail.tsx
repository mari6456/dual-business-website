import { Link, useParams, useLocation } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { newsData, NEWS_CATEGORIES } from "@/lib/newsData";

export default function NewsDetail() {
  useScrollReveal();
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();

  const article = newsData.find((item) => item.id === id);
  const currentIndex = newsData.findIndex((item) => item.id === id);
  const prevArticle = currentIndex > 0 ? newsData[currentIndex - 1] : null;
  const nextArticle = currentIndex < newsData.length - 1 ? newsData[currentIndex + 1] : null;

  if (!article) {
    return (
      <div className="min-h-screen pt-40">
        <div className="container text-center">
          <h1 className="text-3xl mb-6" style={{ fontFamily: "var(--font-heading)" }}>記事が見つかりません</h1>
          <Link href="/news">
            <span className="inline-flex items-center gap-2 text-sm text-rose-gold cursor-pointer">
              <ArrowLeft className="w-4 h-4" /> ニュース一覧に戻る
            </span>
          </Link>
        </div>
      </div>
    );
  }

  const categoryLabel = article.category === "cosmetics" ? "Beauty" : article.category === "ai" ? "AI" : article.category === "media" ? "Media" : article.category === "event" ? "Event" : "Info";

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 border-b border-[oklch(0.92_0.005_80)]">
        <div className="container max-w-3xl mx-auto">
          <Link href="/news">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-foreground/40 hover:text-rose-gold transition-colors duration-300 mb-8 cursor-pointer" style={{ fontFamily: "var(--font-sub)" }}>
              <ArrowLeft className="w-3.5 h-3.5" /> Back to News
            </span>
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs text-foreground/30" style={{ fontFamily: "var(--font-sub)" }}>{article.date}</span>
            <span className="text-[0.6rem] tracking-[0.15em] uppercase text-rose-gold" style={{ fontFamily: "var(--font-sub)" }}>{categoryLabel}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl leading-tight" style={{ fontFamily: "var(--font-heading)" }}>{article.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container max-w-3xl mx-auto">
          <div className="text-base text-foreground/70 leading-[2.2] fade-in-up">
            {article.content.split("\n").map((paragraph, i) => (
              <p key={i} className="mb-6">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-[oklch(0.92_0.005_80)] py-12">
        <div className="container max-w-3xl mx-auto">
          <div className="flex justify-between items-center">
            {prevArticle ? (
              <Link href={`/news/${prevArticle.id}`}>
                <span className="group inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-foreground/40 hover:text-rose-gold transition-colors duration-300 cursor-pointer" style={{ fontFamily: "var(--font-sub)" }}>
                  <ArrowLeft className="w-3.5 h-3.5" /> Prev
                </span>
              </Link>
            ) : <span />}
            {nextArticle ? (
              <Link href={`/news/${nextArticle.id}`}>
                <span className="group inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-foreground/40 hover:text-rose-gold transition-colors duration-300 cursor-pointer" style={{ fontFamily: "var(--font-sub)" }}>
                  Next <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ) : <span />}
          </div>
        </div>
      </section>
    </div>
  );
}
