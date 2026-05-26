import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { fetchNewsFromSheet } from "@/lib/fetchNewsFromSheet";
import type { NewsItem } from "@/lib/newsData";
import { ArrowLeft } from "lucide-react";

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

export default function NewsDetail() {
  useScrollReveal();
  const [, params] = useRoute("/news/:id");
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!params?.id) return;
    fetchNewsFromSheet().then((items) => {
      const found = items.find((item) => item.id === params.id);
      if (found) {
        setNews(found);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    });
  }, [params?.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-foreground/40">読み込み中...</p>
      </div>
    );
  }

  if (notFound || !news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-foreground/40 mb-4">記事が見つかりませんでした</p>
          <Link href="/news" className="text-sm text-rose-gold hover:underline">
            ニュース一覧へ戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Back */}
      <div className="pt-28 pb-6 border-b border-foreground/5">
        <div className="container">
          <Link href="/news" className="inline-flex items-center gap-2 text-sm text-foreground/40 hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            ニュース一覧へ戻る
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="py-16">
        <div className="container max-w-3xl mx-auto">
          {/* Meta */}
          <div className="fade-in-up mb-8">
            <div className="flex items-center gap-3 mb-6">
              <time className="text-xs text-foreground/40 font-mono">{news.date}</time>
              <span className={`text-xs px-2 py-0.5 rounded-sm font-medium ${CATEGORY_COLORS[news.category] || CATEGORY_COLORS.info}`}>
                {CATEGORY_LABELS[news.category] || news.category}
              </span>
            </div>
            <h1 className="text-2xl lg:text-4xl leading-snug mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              {news.title}
            </h1>
            <p className="text-base text-foreground/60 leading-relaxed border-l-2 border-rose-gold pl-4">
              {news.excerpt}
            </p>
          </div>

          {/* Main Image */}
          {news.image && (
            <div className="fade-in-up mb-12 overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="w-full object-cover max-h-[500px]"
              />
            </div>
          )}

          {/* Body */}
          {news.content && (
            <div className="fade-in-up prose prose-sm max-w-none">
              {news.content.split("\n").map((paragraph, i) => {
                if (paragraph.trim() === "") return <br key={i} />;
                // 見出し行（■で始まる）
                if (paragraph.startsWith("■")) {
                  return (
                    <h2 key={i} className="text-lg font-semibold mt-10 mb-4 text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                      {paragraph}
                    </h2>
                  );
                }
                // 引用（「」で囲まれた発言）
                if (paragraph.startsWith("「") && paragraph.endsWith("」")) {
                  return (
                    <blockquote key={i} className="border-l-2 border-rose-gold pl-4 my-6 text-foreground/70 italic leading-relaxed">
                      {paragraph}
                    </blockquote>
                  );
                }
                // 箇条書き（・で始まる）
                if (paragraph.startsWith("・") || paragraph.startsWith("講義名：") || paragraph.startsWith("実施日：") || paragraph.startsWith("実施先：") || paragraph.startsWith("登壇者：") || paragraph.startsWith("内容：")) {
                  return (
                    <p key={i} className="text-sm text-foreground/70 leading-relaxed pl-2 my-1">
                      {paragraph}
                    </p>
                  );
                }
                return (
                  <p key={i} className="text-base text-foreground/70 leading-[2] mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          )}

          {/* Footer */}
          <div className="fade-in-up mt-16 pt-8 border-t border-foreground/10">
            <div className="flex items-center justify-between">
              <Link href="/news" className="inline-flex items-center gap-2 text-sm text-foreground/40 hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                ニュース一覧へ戻る
              </Link>
              <Link href="/contact" className="text-sm text-rose-gold hover:underline">
                お問い合わせ →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
