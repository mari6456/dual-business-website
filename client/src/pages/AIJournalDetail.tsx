import { useEffect } from "react";
import { Streamdown } from "streamdown";
import { Link, useLocation } from "wouter";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { AI_JOURNAL_CATEGORIES, aiJournalData } from "@/lib/aiJournalData";

export function ArticleBody({ content }: { content: string }) {
  return (
    <Streamdown
      className="space-y-6"
      parseIncompleteMarkdown={false}
      controls={false}
      rehypePlugins={[]}
      skipHtml
      components={{
        h2: ({ children }) => <h2 className="pt-8 text-2xl">{children}</h2>,
        h3: ({ children }) => <h3 className="pt-5 text-xl">{children}</h3>,
        p: ({ children }) => <p className="text-sm lg:text-base text-foreground/75 leading-[2]">{children}</p>,
        ul: ({ children }) => <ul className="list-disc space-y-2 pl-6 text-sm lg:text-base text-foreground/75 leading-[1.9]">{children}</ul>,
        img: ({ src, alt }) => src ? <img src={src} alt={alt || "記事内の説明画像"} className="my-8 block h-auto w-full rounded-2xl border border-border/50 object-contain" loading="lazy" referrerPolicy="no-referrer" /> : <span>{alt || "画像を表示できません"}</span>,
        a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#376f82] underline underline-offset-4">{children}</a>,
      }}
    >
      {content}
    </Streamdown>
  );
}

export default function AIJournalDetail({ id }: { id?: string }) {
  const [, setLocation] = useLocation();
  const item = aiJournalData.find((article) => article.id === id);

  useEffect(() => {
    if (!item) setLocation("/ai-journal");
    window.scrollTo(0, 0);
  }, [item, setLocation]);

  if (!item) return null;

  return (
    <main className="min-h-screen pt-20 lg:pt-24">
      <article className="container max-w-3xl py-12 lg:py-20">
        <Link href="/ai-journal">
          <span className="mb-10 inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> AI Journalへ戻る
          </span>
        </Link>

        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-foreground/45">
          <time>{item.date}</time>
          <span className="rounded-full bg-accent px-3 py-1 text-foreground/70">
            {AI_JOURNAL_CATEGORIES[item.category]}
          </span>
          <span>{item.product}</span>
        </div>
        <h1 className="mb-8 text-3xl leading-[1.45] lg:text-5xl">{item.title}</h1>
        <p className="mb-10 border-l-2 border-[#8fddf3] pl-5 text-base leading-[2] text-foreground/65">
          {item.excerpt}
        </p>

        <ArticleBody content={item.content} />

        {item.sources.length > 0 && (
          <section className="mt-14 border-t border-border/60 pt-8">
            <h2 className="mb-5 text-lg">公式情報</h2>
            <ul className="space-y-3">
              {item.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2 text-sm text-[#376f82] underline underline-offset-4"
                  >
                    {source.label}<ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-16 border-t border-border/60 pt-9">
          <p className="mb-5 text-sm leading-[1.9] text-foreground/60">
            AIを業務でどう活かすか、組織や仕事に合わせた研修・伴走支援も行っています。
          </p>
          <Link href="/ai-training">
            <span className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm">
              AI・デジタル事業を見る
            </span>
          </Link>
        </div>
      </article>
    </main>
  );
}
