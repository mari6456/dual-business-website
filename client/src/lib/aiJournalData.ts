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
    "id": "2026-09-28-chatgpt-data-export",
    "date": "2026.09.28",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPTのデータをエクスポートする",
    "excerpt": "ChatGPTの「データをエクスポート」では、会話履歴など自分のアカウントデータをZIPで受け取れます。ClaudeやGeminiなど別のAIへ移るときに、これまでの会話から必要な前提や指示を整理し直す材料として使えます。",
    "content": "ChatGPTとの会話に、よく使う指示、仕事の前提、好みの書き方などが蓄積されていると、ClaudeやGeminiなど別のAIへ移る際に、一から説明し直すのは大変です。そんなときに役立つのが、ChatGPTの「データをエクスポート」です。\n\n対象アカウントでは、**ブラウザ版**の「設定」→「データコントロール」→「データをエクスポート」から書き出しを依頼できます。準備ができると、登録しているメールアドレスまたは電話番号へ案内が届き、チャット履歴などのアカウントデータを含むZIPファイルをダウンロードできます。\n![記事内の説明画像](/ai-journal/assets/2026-09-28-chatgpt-data-export-01.png)\n\n\nZIPには個人情報や機密情報が含まれる可能性があるため、気をつけましょう。\n\nエクスポートの到着には最大7日かかる場合があり、ダウンロードリンクは受信から24時間で失効します。削除済みのチャットは復元できません。Business・Enterpriseなど管理対象ワークスペースでは自己操作できない場合があるため、管理者へ確認しましょう。",
    "sources": [
      {
        "label": "Exporting your ChatGPT history and data｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/7260999-how-do-i-export-my-chatgpt-history-and-data"
      },
      {
        "label": "Data controls in ChatGPT｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt"
      }
    ]
  },
  {
    "id": "2026-09-24-chatgpt-flashcards",
    "date": "2026.09.24",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "学習に使える！ChatGPTで復習用フラッシュカードを作れるように",
    "excerpt": "ChatGPTに学びたいテーマや手元のノートを渡すと、対話型のフラッシュカードを作成できるようになりました。研修後の復習や、専門用語の定着にも活用できます。",
    "content": "OpenAIは2026年9月22日、ChatGPTで対話型のフラッシュカードを作れる機能を発表しました。学びたいテーマを伝えるほか、手元のノートをアップロードしてカードへ変換することもできます。\n\nカードをタップすると答えが表示され、「覚えた」「もう一度練習する」を選びながら復習できます。順番をシャッフルして練習することも可能です。作成したカードはライブラリへ自動保存されるため、後日もう一度開いたり、ChatGPTに復習を頼んだりできます。\n\n仕事では、社内研修後の確認問題、業界用語、商品知識、資格学習などに向いています。例えば、「この研修メモから、初心者向けのフラッシュカードを10枚作って。表は質問、裏は短い答えと補足にして」と依頼します。生成後は、答えが元資料と一致しているか、人名・数字・規則などを確認してから使いましょう。\n\nHTMLで高性能なサイトを作ってしまう場合もあるので、その際は、「HTMLではなくフラッシュカードを作って」と指示してみてください。\nこちらは言語を学ぶためにつくったフラッシュカードです。\nちゃんとした発音のサポートもあって、優秀です。\n![535](/ai-journal/assets/2026-09-24-chatgpt-flashcards-01.png)\n発音については、以下の投稿を参考にしてみてください。\n[Xユーザーのまり\\| AI講師さん: 「ChatGPTで発音確認が少し便利に。単語や短いフレーズを尋ねると、音声で聞き、発音の分け方も見られます。 人名・商品名・専門用語の練習に。固有名詞は本人や公式音源でも確認しましょう。対象プラン・地域・端末は公式ノートに明記されていません。 https://t.co/ZUmjJGhfV5」 / X](https://x.com/i/web/status/2099329180450382096)\n\nこの機能は、すべてのChatGPTプランでWeb版とモバイル版から利用できます。ただし、組織の資料や顧客情報を使う場合は、アップロードしてよい情報か、社内ルールと利用中のワークスペース設定を先に確認してください。",
    "sources": [
      {
        "label": "ChatGPT Release Notes｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "2026-09-23-chatgpt検索の出典確認",
    "date": "2026.09.23",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "検索の答えは、出典まで確認。ChatGPT検索を仕事で安全に使うコツ",
    "excerpt": "「最新の制度や市場情報を調べて、社内資料に入れたい」。そんなとき、ChatGPTのウェブ検索は情報の入口として便利です。ただし、回答に出典が付いていても、その内容を確認せずに仕事へ使うのは避けたいところです。",
    "content": "「最新の制度や市場情報を調べて、社内資料に入れたい」。そんなとき、ChatGPTのウェブ検索は情報の入口として便利です。ただし、回答に出典が付いていても、その内容を確認せずに仕事へ使うのは避けたいところです。\n\n今回は新機能の発表ではなく、OpenAIの公式ヘルプで確認できる既存の検索機能を使った「今日のChatGPT活用ヒント」です。ChatGPTは、最新情報が役立つ質問では自動的にウェブを検索する場合があります。\n\n大切なのは、回答を読んで終わりにしないこと。検索を使った回答には引用が含まれる場合があり、引用を選ぶと元のページを開けます。「情報源」が表示されていれば、引用元や関連リンクも確認できます。ChatGPTの説明と元ページの内容を比べ、数字、条件、対象地域、公開日や更新日が一致しているかを見てください。\n\n例えば、新しい補助金を企画書に書く場合。募集期間、対象者、申請条件は変更される可能性があります。「2026年9月時点の公式情報を優先し、募集期間と対象者を表にして。各項目に出典を付けて」と依頼します。その後、実際の公式ページを開いて、表の各項目を一つずつ照合しましょう。出典が古い場合や条件が見つからない場合は、該当箇所を資料に入れず再確認します。\n\n試し方は次の3段階です。\n\n1. 調べたいテーマ、地域、時点、優先する情報源を具体的に伝える。\n2. 回答の引用または「情報源」から元ページを開く。\n3. 公開日・更新日と、重要な主張や数字が本当に書かれているかを確認する。\n\nOpenAIも、検索結果や引用は不完全・古い・誤りを含む場合があると案内しています。重要な判断では、公的機関や発表元などの信頼できる一次情報を優先しましょう。ウェブ検索はFree、Go、Plus、Pro、Business、Enterprise、Eduで利用できますが、プランごとの使用上限や管理されたワークスペースの設定が適用されます。機密性の高い内容を検索に入力する前には、共有してよい情報かも確認してください。",
    "sources": []
  },
  {
    "id": "2026-09-23-chatgpt-search-source-check",
    "date": "2026.09.23",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPT検索は「出典まで確認」で仕事に使う",
    "excerpt": "ChatGPTのウェブ検索は最新情報を探す入口として便利ですが、引用があるだけで正しいとは限りません。仕事で使う前に、元ページの公開日・条件・数字まで確認する方法を紹介します。",
    "content": "ChatGPTのウェブ検索は、制度や市場情報など、最新情報を調べるときに便利です。質問に最新情報が役立つ場合は自動で検索することがあり、手動ではツール一覧から「検索」を選べます。\n\nただし、回答に引用が付いていても、そのまま社内資料へ使うのは避けましょう。OpenAIも、検索結果や引用には不完全・古い・誤った情報が含まれる可能性があると案内しています。\n\n仕事で使うときは、①地域や確認時点、優先する情報源を質問に入れる、②回答の引用や「情報源」から元ページを開く、③公開日・更新日・対象者・数字・条件が実際に書かれているか確認する、の3段階がおすすめです。\n\n例えば補助金を調べるなら、「2026年9月時点の公式情報を優先し、募集期間と対象者を表にして、各項目に出典を付けて」と依頼します。その後、行政や発表元のページを開き、表の内容を一項目ずつ照合します。情報が見つからない項目は資料へ入れず、要確認として残します。\n意外と過去のデータを引っ張ってくること、よくあります。出典元は信頼できたとしても、公開時期も忘れずに確認するようにしましょう。\n\nウェブ検索は無料版、Go、Plus、Pro、Business、Enterprise、Eduで利用できますが、プランの使用上限や管理ワークスペースの設定が適用されます。機密情報を入力する前には、検索に使ってよい内容かも確認しましょう。",
    "sources": [
      {
        "label": "ChatGPT でウェブを検索する｜OpenAI Help Center",
        "url": "https://help.openai.com/ja-jp/articles/9237897-chatgpt-search"
      }
    ]
  }
];
