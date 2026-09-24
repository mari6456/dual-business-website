export type AIJournalCategory = "chatgpt" | "google" | "other-ai";

export interface AIJournalSource { label: string; url: string; }
export interface AIJournalItem {
  id: string;
  date: string;
  category: AIJournalCategory;
  product: string;
  title: string;
  excerpt: string;
  content: string;
  sources: AIJournalSource[];
}

export const AI_JOURNAL_CATEGORIES: Record<AIJournalCategory, string> = {
  chatgpt: "ChatGPT",
  google: "Google・Gemini",
  "other-ai": "注目AIツール",
};

// Generated from checked Obsidian notes. Do not edit article data here.
export const aiJournalData: AIJournalItem[] = [
  {
    "id": "2026-09-23-chatgpt検索の出典確認",
    "date": "2026.09.23",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "検索の答えは、出典まで確認。ChatGPT検索を仕事で安全に使うコツ",
    "excerpt": "「最新の制度や市場情報を調べて、社内資料に入れたい」。そんなとき、ChatGPTのウェブ検索は情報の入口として便利です。ただし、回答に出典が付いていても、その内容を確認せずに仕事へ使うのは避けたいところです。",
    "content": "「最新の制度や市場情報を調べて、社内資料に入れたい」。そんなとき、ChatGPTのウェブ検索は情報の入口として便利です。ただし、回答に出典が付いていても、その内容を確認せずに仕事へ使うのは避けたいところです。\n\n今回は新機能の発表ではなく、OpenAIの公式ヘルプで確認できる既存の検索機能を使った「今日のChatGPT活用ヒント」です。ChatGPTは、最新情報が役立つ質問では自動的にウェブを検索する場合があります。\n\n大切なのは、回答を読んで終わりにしないこと。検索を使った回答には引用が含まれる場合があり、引用を選ぶと元のページを開けます。「情報源」が表示されていれば、引用元や関連リンクも確認できます。ChatGPTの説明と元ページの内容を比べ、数字、条件、対象地域、公開日や更新日が一致しているかを見てください。\n\n例えば、新しい補助金を企画書に書く場合。募集期間、対象者、申請条件は変更される可能性があります。「2026年9月時点の公式情報を優先し、募集期間と対象者を表にして。各項目に出典を付けて」と依頼します。その後、実際の公式ページを開いて、表の各項目を一つずつ照合しましょう。出典が古い場合や条件が見つからない場合は、該当箇所を資料に入れず再確認します。\n\n試し方は次の3段階です。\n\n1. 調べたいテーマ、地域、時点、優先する情報源を具体的に伝える。\n2. 回答の引用または「情報源」から元ページを開く。\n3. 公開日・更新日と、重要な主張や数字が本当に書かれているかを確認する。\n\nOpenAIも、検索結果や引用は不完全・古い・誤りを含む場合があると案内しています。重要な判断では、公的機関や発表元などの信頼できる一次情報を優先しましょう。ウェブ検索はFree、Go、Plus、Pro、Business、Enterprise、Eduで利用できますが、プランごとの使用上限や管理されたワークスペースの設定が適用されます。機密性の高い内容を検索に入力する前には、共有してよい情報かも確認してください。",
    "sources": []
  }
];
