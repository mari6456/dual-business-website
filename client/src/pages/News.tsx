// Design: Minimal editorial — off-white background, sparse layout, strong typographic hierarchy
import { Link } from "wouter";
import { newsData, NEWS_CATEGORIES } from "@/lib/newsData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// ニュースを公開するには newsData.ts に記事を追加してください
// 現在公開中の記事: yamano-lecture など
const PUBLISHED_IDS = ["2026-04-reborn-beauty-summit", "2026-05-yamano-lecture"];

export default function News() {
  useScrollReveal();

  const publishedNews = newsData.filter((item) => PUBLISHED_IDS.includes(item.id));

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 border-b border-border/30">
        <div className="container">
          <div className="fade-in-up">
            <p className="section-label mb-4">News</p>
            <h1 className="text-4xl lg:text-6xl" style={{ fontFamily: "var(--font-heading)" }}>
              最新情報
            </h1>
          </div>
        </div>
      </section>

      {publishedNews.length === 0 ? (
        /* COMING SOON */
        <section className="py-32">
          <div className="container text-center">
            <div className="fade-in-up">
              <h2
                className="text-5xl lg:text-7xl mb-8 text-foreground/20"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                COMING SOON
              </h2>
              <p className="text-base text-foreground/50 max-w-xl mx-auto leading-relaxed">
                最新のお知らせ、活動報告、メディア掲載情報を準備中です。
              </p>
            </div>
          </div>
        </section>
      ) : (
        /* ニュース一覧 */
        <section className="py-16">
          <div className="container">
            <div className="space-y-0">
              {publishedNews.map((item, i) => (
                <Link key={item.id} href={`/news/${item.id}`}>
                  <article
                    className="fade-in-up group flex flex-col md:flex-row gap-6 py-10 border-b border-border/30 hover:bg-warm-surface/50 transition-colors duration-200 cursor-pointer px-2 -mx-2 rounded-sm"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {item.image && (
                      <div className="md:w-48 lg:w-56 flex-shrink-0">
                        <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <time className="text-xs text-foreground/40 font-mono">{item.date}</time>
                        <span className="text-xs px-2 py-0.5 bg-foreground/5 rounded-full text-foreground/60">
                          {NEWS_CATEGORIES[item.category]}
                        </span>
                      </div>
                      <h2
                        className="text-lg lg:text-xl font-medium mb-2 group-hover:text-primary transition-colors leading-snug"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.title}
                      </h2>
                      <p className="text-sm text-foreground/60 leading-relaxed line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
