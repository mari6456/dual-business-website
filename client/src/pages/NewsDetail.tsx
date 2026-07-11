// Design: Minimal editorial — clean article layout with image gallery support
import { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { newsData, NEWS_CATEGORIES } from "@/lib/newsData";
import { ArrowLeft } from "lucide-react";

interface Props {
  id: string;
}

export default function NewsDetail({ id }: { id?: string }) {
  const [, setLocation] = useLocation();
  const item = newsData.find((n) => n.id === id);

  useEffect(() => {
    if (!item) {
      setLocation("/news");
    }
    window.scrollTo(0, 0);
  }, [item, setLocation]);

  if (!item) return null;

  const paragraphs = item.content.split("\n\n").filter(Boolean);

  return (
    <div className="min-h-screen">
      {/* Back */}
      <div className="container pt-8 pb-0">
        <Link href="/news">
          <span className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            ニュース一覧へ戻る
          </span>
        </Link>
      </div>

      <article className="container py-12 max-w-3xl mx-auto">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <time className="text-xs text-foreground/40 font-mono">{item.date}</time>
          <span className="text-xs px-2 py-0.5 bg-foreground/5 rounded-full text-foreground/60">
            {NEWS_CATEGORIES[item.category]}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-2xl lg:text-4xl font-medium mb-8 leading-snug"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {item.title}
        </h1>

        {/* Main image */}
        {item.image && (
          <div className="mb-10 rounded-sm overflow-hidden bg-muted aspect-[16/9]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Body */}
        <div className="prose prose-neutral max-w-none space-y-5">
          {paragraphs.map((para, i) => {
            if (para.startsWith("■")) {
              // セクションヘッダー
              const lines = para.split("\n");
              return (
                <div key={i} className="mt-10 pt-8 border-t border-border/30">
                  <h2
                    className="text-base font-semibold mb-4 text-foreground/80"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {lines[0]}
                  </h2>
                  {lines.slice(1).map((line, j) => (
                    <p key={j} className="text-sm text-foreground/70 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              );
            }
            if (para.startsWith("「") && para.endsWith("」")) {
              // 引用
              return (
                <blockquote
                  key={i}
                  className="border-l-2 border-primary/40 pl-5 py-1 text-foreground/70 italic text-sm leading-relaxed"
                >
                  {para}
                </blockquote>
              );
            }
            return (
              <p key={i} className="text-sm lg:text-base text-foreground/80 leading-relaxed">
                {para}
              </p>
            );
          })}
        </div>

        {item.source && (
          <div className="mt-10 pt-8 border-t border-border/30">
            <p className="text-xs text-foreground/40 mb-3 uppercase tracking-widest">Related Link</p>
            <a
              href={item.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/70 hover:text-primary transition-colors underline underline-offset-4"
            >
              {item.source.label}
            </a>
          </div>
        )}

        {/* Additional images gallery */}
        {item.images && item.images.length > 1 && (
          <div className="mt-12">
            <p className="text-xs text-foreground/40 mb-4 uppercase tracking-widest">Photo</p>
            <div className="grid grid-cols-2 gap-3">
              {item.images.slice(1).map((src, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                  <img
                    src={src}
                    alt={`${item.title} ${i + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/30 flex items-center justify-between">
          <Link href="/news">
            <span className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              ニュース一覧へ戻る
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-sm text-foreground/50 hover:text-foreground transition-colors cursor-pointer">
              お問い合わせ →
            </span>
          </Link>
        </div>
      </article>
    </div>
  );
}
