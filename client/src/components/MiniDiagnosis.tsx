import { useMemo, useState } from "react";
import { Link } from "wouter";

type DiagnosisKind = "ai" | "cosmetics";

type Option = {
  label: string;
  value: string;
};

type Question = {
  title: string;
  options: Option[];
};

type DiagnosisResult = {
  title: string;
  description: string;
  inquiryType: string;
};

const diagnosisContent: Record<
  DiagnosisKind,
  {
    label: string;
    heading: string;
    lead: string;
    questions: Question[];
  }
> = {
  ai: {
    label: "AI Plan Diagnosis",
    heading: "3つの質問でわかる、AI活用プラン診断",
    lead: "いまの活用状況と課題から、御社に合う研修・支援の入口を整理します。",
    questions: [
      {
        title: "現在、社内でAIをどの程度使っていますか？",
        options: [
          { label: "まだほとんど使っていない", value: "not-started" },
          { label: "一部の社員が個人で使っている", value: "individual" },
          { label: "部署やチームで使い始めている", value: "team" },
          { label: "全社展開・仕組み化を進めたい", value: "company" },
        ],
      },
      {
        title: "いちばん解決したい課題は何ですか？",
        options: [
          { label: "AIの基本と安全な使い方を知りたい", value: "basics" },
          { label: "日々の業務を効率化したい", value: "efficiency" },
          { label: "研修後も現場で使われる状態にしたい", value: "adoption" },
          { label: "社内ルールや活用方針を整えたい", value: "rules" },
        ],
      },
      {
        title: "希望する進め方に近いものは？",
        options: [
          { label: "まずは短時間の研修から試したい", value: "trial" },
          { label: "複数回の研修で定着させたい", value: "series" },
          { label: "自社向けに内容を設計してほしい", value: "custom" },
          { label: "研修と実装を継続的に伴走してほしい", value: "advisory" },
        ],
      },
    ],
  },
  cosmetics: {
    label: "Beauty Development Diagnosis",
    heading: "3つの質問でわかる、化粧品開発プラン診断",
    lead: "現在の準備状況から、最初に整理することと相談の進め方をご案内します。",
    questions: [
      {
        title: "化粧品づくりは、いまどの段階ですか？",
        options: [
          { label: "アイデアはあるが、まだ曖昧", value: "idea" },
          { label: "ターゲットや商品像を考えている", value: "concept" },
          { label: "OEMを探している・提案を受けている", value: "oem" },
          { label: "既存ブランドを改善・拡張したい", value: "existing" },
        ],
      },
      {
        title: "特に相談したいことは何ですか？",
        options: [
          { label: "ブランドコンセプト・ターゲット", value: "branding" },
          { label: "商品企画・処方・OEM選定", value: "product" },
          { label: "容器・パッケージ・見せ方", value: "package" },
          { label: "企画から発売までまとめて相談したい", value: "integrated" },
        ],
      },
      {
        title: "発売希望時期に近いものは？",
        options: [
          { label: "できるだけ早く進めたい", value: "soon" },
          { label: "6か月〜1年以内を考えている", value: "within-year" },
          { label: "1年以上かけて検討したい", value: "long-term" },
          { label: "時期も含めて相談したい", value: "undecided" },
        ],
      },
    ],
  },
};

function getResult(kind: DiagnosisKind, answers: string[]): DiagnosisResult {
  if (kind === "ai") {
    if (answers[0] === "not-started" || answers[1] === "basics") {
      return {
        title: "AI活用の土台づくり研修",
        description: "まずは安全な使い方と、自分の業務で一つ成果物を作る体験から始めるのがおすすめです。",
        inquiryType: "ai-training",
      };
    }
    if (answers[1] === "rules") {
      return {
        title: "AI活用方針・安全運用設計",
        description: "研修とあわせて、社内ルールや利用範囲を整理すると全社展開を進めやすくなります。",
        inquiryType: "ai-consulting",
      };
    }
    if (answers[2] === "advisory") {
      return {
        title: "AI顧問・継続伴走支援",
        description: "研修だけで終わらせず、実際の業務への実装と社内定着を継続して支援するプランが合っています。",
        inquiryType: "ai-consulting",
      };
    }
    return {
      title: "実務定着型AI研修",
      description: "御社の業務を題材にした複数回の研修で、現場で使い続けられる状態をつくるのがおすすめです。",
      inquiryType: "ai-training",
    };
  }

  if (answers[0] === "idea") {
    return {
      title: "ブランド構想整理からの伴走",
      description: "すぐにOEMを探す前に、誰に何を届ける商品かを整理すると、開発のやり直しを減らせます。",
      inquiryType: "cosmetics-brand",
    };
  }
  if (answers[0] === "oem" || answers[1] === "product") {
    return {
      title: "商品企画・OEM選定支援",
      description: "商品仕様・予算・ロットを整理し、条件に合うOEM候補の検討と開発進行を支援します。",
      inquiryType: "cosmetics-oem",
    };
  }
  if (answers[1] === "branding") {
    return {
      title: "ブランド設計・コンセプト開発",
      description: "ターゲットと提供価値を言葉にし、商品・価格・販売方法まで一貫したブランド設計をつくります。",
      inquiryType: "cosmetics-brand",
    };
  }
  return {
    title: "ブランド・商品開発一貫支援",
    description: "ブランド設計からOEM連携、容器・パッケージ、発売準備までを一つの計画にまとめて進めます。",
    inquiryType: "cosmetics-brand",
  };
}

export default function MiniDiagnosis({ kind }: { kind: DiagnosisKind }) {
  const content = diagnosisContent[kind];
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const complete = answers.length === content.questions.length;
  const result = useMemo(() => (complete ? getResult(kind, answers) : null), [answers, complete, kind]);

  const selectAnswer = (value: string) => {
    const nextAnswers = answers.slice(0, current);
    nextAnswers[current] = value;
    setAnswers(nextAnswers);
    if (current < content.questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const reset = () => {
    setAnswers([]);
    setCurrent(0);
  };

  const contactHref = useMemo(() => {
    if (!result) return "/contact";
    const answerSummary = content.questions
      .map((question, index) => {
        const selected = question.options.find((option) => option.value === answers[index]);
        return `${index + 1}. ${question.title}\n${selected?.label ?? ""}`;
      })
      .join("\n\n");
    const diagnosis = `【プラン診断結果】\nおすすめ：${result.title}\n\n${answerSummary}\n\n【相談したいこと】\n`;
    const params = new URLSearchParams({
      inquiryType: result.inquiryType,
      diagnosis,
      source: kind === "ai" ? "AI活用プラン診断" : "化粧品開発プラン診断",
    });
    return `/contact?${params.toString()}`;
  }, [answers, content.questions, kind, result]);

  return (
    <section id={`${kind}-diagnosis`} className="py-24 lg:py-32 bg-warm-surface">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 fade-in-up">
            <p className="section-label mb-5">{content.label}</p>
            <h2 className="text-2xl lg:text-4xl mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              {content.heading}
            </h2>
            <p className="text-sm text-foreground/65 leading-[1.9]">{content.lead}</p>
          </div>

          <div className="fade-in-up bg-white border border-foreground/15 p-6 md:p-10 lg:p-12">
            {!complete && (
              <>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[0.65rem] tracking-[0.18em] uppercase text-foreground/55" style={{ fontFamily: "var(--font-sub)" }}>
                    Question {current + 1} / {content.questions.length}
                  </span>
                  <div className="flex gap-2" aria-hidden="true">
                    {content.questions.map((_, index) => (
                      <span key={index} className={`h-1 w-8 ${index <= current ? "bg-charcoal" : "bg-silent-silver"}`} />
                    ))}
                  </div>
                </div>

                <h3 className="text-xl lg:text-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-heading)" }}>
                  {content.questions[current].title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {content.questions[current].options.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => selectAnswer(option.value)}
                      className="min-h-16 px-5 py-4 border border-foreground/15 text-left text-sm text-foreground/80 leading-relaxed hover:border-charcoal hover:bg-warm-surface focus-visible:ring-2 focus-visible:ring-charcoal transition-colors"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                {current > 0 && (
                  <button
                    type="button"
                    onClick={() => setCurrent(current - 1)}
                    className="mt-7 text-xs tracking-[0.12em] text-foreground/55 underline underline-offset-4"
                  >
                    前の質問に戻る
                  </button>
                )}
              </>
            )}

            {complete && result && (
              <div aria-live="polite">
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-foreground/55 mb-5" style={{ fontFamily: "var(--font-sub)" }}>
                  Diagnosis Result
                </p>
                <p className="text-sm text-foreground/60 mb-3">あなたに合う相談プラン</p>
                <h3 className="text-2xl lg:text-3xl mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                  {result.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-[1.9] mb-9 max-w-2xl">{result.description}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={contactHref}>
                    <span className="inline-flex w-full sm:w-auto justify-center px-8 py-4 bg-charcoal text-white text-sm tracking-[0.1em] hover:bg-charcoal/90 transition-colors cursor-pointer">
                      診断結果を引き継いで相談する
                    </span>
                  </Link>
                  <button
                    type="button"
                    onClick={reset}
                    className="px-8 py-4 border border-foreground/20 text-sm text-foreground/65 hover:border-charcoal transition-colors"
                  >
                    もう一度診断する
                  </button>
                </div>
                <p className="text-xs text-foreground/45 mt-5 leading-relaxed">
                  回答内容は問い合わせフォームに自動で入ります。送信前に自由に編集できます。
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
