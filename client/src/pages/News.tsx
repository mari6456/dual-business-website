import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function News() {
  useScrollReveal();

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Coming Soon */}
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
