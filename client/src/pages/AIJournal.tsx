import { useMemo, useState } from "react";
import { Link } from "wouter";
import {
  AI_JOURNAL_CATEGORIES,
  type AIJournalCategory,
  aiJournalData,
} from "@/lib/aiJournalData";
import { ArrowRight } from "lucide-react";

type Filter = "all" | AIJournalCategory;

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "すべて" },
  { key: "chatgpt", label: "ChatGPT" },
  { key: "google", label: "Google・Gemini" },
  { key: "other-ai", label: "注目AIツール" },
];

export default function AIJournal() {
  const [filter, setFilter] = useState<Filter>("all");
  const items = useMemo(
    () => aiJournalData.filter((item) => filter === "all" || item.category === filter),
    [filter],
  );

  return (
    <main className="min-h-screen pt-20 lg:pt-24">
      <section className="border-b border-border/60 py-20 lg:py-28">
        <div className="container max-w-5xl">
          <p className="section-label mb-5">AI Journal</p>
          <h1 className="text-4xl lg:text-6xl mb-7">仕事に活かす、AIの最新情報</h1>
          <p className="max-w-2xl text-sm lg:text-base text-foreground/65 leading-[2]">
            ChatGPTを中心に、Google・Geminiや注目すべきAIツールの更新を、
            初めて使う方にも分かる言葉で整理します。新しさだけでなく、何が便利で、
            仕事でどう使えるのか、利用時の注意点までお伝えします。
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-5xl">
          <div className="flex flex-wrap gap-2 mb-12" aria-label="記事カテゴリー">
            {filters.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setFilter(item.key)}
                aria-pressed={filter === item.key}
                className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                  filter === item.key
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-white text-foreground/65 hover:border-foreground/40"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {items.length === 0 ? (
            <div className="border-y border-border/50 py-20 text-center">
              <p className="text-2xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                記事を準備しています
              </p>
              <p className="text-sm text-foreground/55 leading-relaxed">
                確認が完了した記事から、順次掲載します。
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {items.map((item) => (
                <Link key={item.id} href={`/ai-journal/${item.id}`}>
                  <article className="group h-full border border-border/60 bg-white transition-colors hover:border-foreground/30">
                    <div className="p-6 lg:p-8">
                      <div className="mb-5 flex flex-wrap items-center gap-3 text-xs text-foreground/45">
                        <time>{item.date}</time>
                        <span className="rounded-full bg-accent px-3 py-1 text-foreground/70">
                          {AI_JOURNAL_CATEGORIES[item.category]}
                        </span>
                      </div>
                      <h2 className="mb-4 text-xl leading-relaxed group-hover:text-[#376f82]">
                        {item.title}
                      </h2>
                      <p className="mb-7 line-clamp-3 text-sm leading-[1.9] text-foreground/60">
                        {item.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm">
                        記事を読む <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
