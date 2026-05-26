import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { fetchNewsFromSheet } from "@/lib/fetchNewsFromSheet";
import type { NewsItem } from "@/lib/newsData";
import { ArrowRight } from "lucide-react";

const CATEGORY_LABELS: Record<string, string> = {
  ai: "AI",
  cosmetics: "コスメ",
  media: "メディア",
  event: "イベント",
  info: "お知らせ",
  other: "その他",
};

const CATEGORY_COLORS: Record<string, string> = {
  ai: "bg-blue-50 text-blue-700",
  cosmetics: "bg-rose-50 text-rose-700",
  media: "bg-amber-50 text-amber-700",
  event: "bg-emerald-50 text-emerald-700",
  info: "bg-gray-50 text-gray-700",
  other: "bg-purple-50 text-purple-700",
};

export default function News() {
  useScrollReveal();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNewsFromSheet().then((items) => {
      setNews(items);
      setLoading(false);
    });
  }, []);

  // 公開ニュースがない場合はCOMING SOON
  if (!loading && news.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <section className="py-32">
          <div className="container text-center">
            <div className="fade-in-up">
              <p className="section-label mb-6">News</p>
              <h1 className="text-5xl lg:text-7xl mb-8" style={{ fontFamily: "var(--font-heading)" }}>
                COMING SOON
              </h1>
              <p className="text-base text-foreground/50 max-w-xl mx-auto leading-relaxed">
                最新のお知らせ、活動報告、メディア掲載情報を準備中です。
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-foreground/5">
        <div className="container">
          <div className="fade-in-up">
            <p className="section-label mb-6">News</p>
            <h1 className="text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-heading)" }}>
              Latest News
            </h1>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-20">
        <div className="container">
          {loading ? (
            <div className="text-center py-20 text-foreground/40">読み込み中...</div>
          ) : (
            <div className="space-y-0">
              {news.map((item, i) => (
                <Link key={item.id} href={`/news/${item.id}`}>
                  <article
                    className="fade-in-up group border-b border-foreground/10 py-8 cursor-pointer hover:bg-foreground/[0.02] transition-colors -mx-4 px-4"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                      {/* サムネイル */}
                      {item.image && (
                        <div className="w-full md:w-48 h-32 flex-shrink-0 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      {/* テキスト */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-3">
                          <time className="text-xs text-foreground/40 font-mono">{item.date}</time>
                          <span className={`text-xs px-2 py-0.5 rounded-sm font-medium ${CATEGORY_COLORS[item.category] || CATEGORY_COLORS.info}`}>
                            {CATEGORY_LABELS[item.category] || item.category}
                          </span>
                        </div>
                        <h2 className="text-base lg:text-lg font-medium mb-2 group-hover:text-rose-gold transition-colors leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                          {item.title}
                        </h2>
                        <p className="text-sm text-foreground/50 leading-relaxed line-clamp-2">{item.excerpt}</p>
                      </div>
                      {/* 矢印 */}
                      <div className="hidden md:flex items-center self-center">
                        <ArrowRight className="w-4 h-4 text-foreground/20 group-hover:text-rose-gold group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
