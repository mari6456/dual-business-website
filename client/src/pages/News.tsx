import { useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { newsData, NEWS_CATEGORIES, type NewsItem } from "@/lib/newsData";

export default function News() {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredNews = activeCategory === "all"
    ? newsData
    : newsData.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container">
          <p className="section-label mb-6">Latest Updates</p>
          <h1 className="text-4xl lg:text-6xl mb-6" style={{ fontFamily: "var(--font-heading)" }}>News</h1>
          <p className="text-base text-foreground/50 max-w-xl leading-relaxed">最新のお知らせ、活動報告、メディア掲載情報をお届けします。</p>
        </div>
      </section>

      {/* Filter */}
      <section className="border-y border-[oklch(0.92_0.005_80)]">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`text-xs tracking-[0.15em] uppercase px-4 py-2 transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-charcoal text-white"
                  : "text-foreground/40 hover:text-foreground"
              }`}
              style={{ fontFamily: "var(--font-sub)" }}
            >
              All
            </button>
            {Object.entries(NEWS_CATEGORIES).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`text-xs tracking-[0.15em] uppercase px-4 py-2 transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-charcoal text-white"
                    : "text-foreground/40 hover:text-foreground"
                }`}
                style={{ fontFamily: "var(--font-sub)" }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="space-y-0 stagger-children">
            {filteredNews.map((item) => (
              <Link key={item.id} href={`/news/${item.id}`}>
                <div className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-8 border-b border-[oklch(0.92_0.005_80)] cursor-pointer fade-in-up hover:bg-warm-surface/50 transition-colors duration-300 px-4 -mx-4">
                  <div className="flex items-center gap-4 md:gap-8 shrink-0">
                    <span className="text-xs text-foreground/30 w-24" style={{ fontFamily: "var(--font-sub)" }}>{item.date}</span>
                    <span className="text-[0.6rem] tracking-[0.15em] uppercase text-rose-gold w-20" style={{ fontFamily: "var(--font-sub)" }}>
                      {item.category === "cosmetics" ? "Beauty" : item.category === "ai" ? "AI" : item.category === "media" ? "Media" : item.category === "event" ? "Event" : "Info"}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base text-foreground/80 group-hover:text-foreground transition-colors duration-300 mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                    <p className="text-sm text-foreground/40 leading-relaxed line-clamp-2">{item.excerpt}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-foreground/20 group-hover:text-rose-gold transition-colors duration-300 shrink-0 hidden md:block mt-1" />
                </div>
              </Link>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-sm text-foreground/30">該当するニュースはありません。</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
