import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AITraining() {
  useScrollReveal();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <section className="py-32">
        <div className="container text-center">
          <div className="fade-in-up">
            <p className="section-label mb-6">AI Training</p>
            <h1 className="text-5xl lg:text-7xl mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              COMING SOON
            </h1>
            <p className="text-base text-foreground/50 max-w-xl mx-auto leading-relaxed">
              AI研修・セミナー・経営コーチングに関する情報を準備中です。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
