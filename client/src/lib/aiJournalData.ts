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
    "id": "2026-10-14-chatgpt-college-planner",
    "date": "2026.10.14",
    "category": "chatgpt",
    "product": "ChatGPT College Planner",
    "title": "進学準備を1つの計画に。ChatGPT College Planner",
    "excerpt": "OpenAIは、米国の高校生向けに、大学出願の要件・締切・タスク・学費支援の手続きを1つの計画で管理する「College Planner」をChatGPT for Teensへ近日追加すると発表しました。",
    "content": "OpenAIは2026年10月7日、ChatGPT for Teensに「College Planner」を近日追加すると発表しました。複数の大学を検討する学生が、学校ごとの出願要件、締切、やること、学費支援の手続きを1つの計画にまとめ、進捗や残りの作業を確認できる機能です。\n\n基本の使い方は、①候補校を登録、②出願要件と締切を整理、③奨学金・学費支援・手数料免除などの条件を確認、④進捗を更新しながら残りの作業を見る、という流れです。複数校の出願を一覧で管理する、提出期限の見落としを防ぐ、申請書類や学校への質問を整理する、といった活用が想定されています。途中で要件の意味や着手方法をChatGPTへ質問することもできます。\n\nただし、最初の提供対象は、米国で4年制大学への進学を検討する高校10〜12年生です。発表時点では「近日提供」で、日本での提供時期や対応校は案内されていません。OpenAIは今後、対象国や2年制大学、専門・技術教育機関などへ広げる計画を示しています。\n\nCollege Plannerは、出願作業を整理するための支援ツールです。進学先そのものを決めてもらうのではなく、本人の希望、家族や学校の進路指導、大学の最新公式情報と照らして判断することが大切です。締切・費用・出願条件は変更される可能性があるため、最終確認は必ず各大学や公的機関の公式案内で行いましょう。",
    "sources": [
      {
        "label": "10代の学び、将来の計画、AIの未来づくりを支援｜OpenAI",
        "url": "https://openai.com/ja-JP/index/teens-learn-and-plan/"
      },
      {
        "label": "ChatGPT Release Notes｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "2026-10-13-codex-cloud",
    "date": "2026.10.13",
    "category": "chatgpt",
    "product": "Codex Cloud",
    "title": "PCを閉じても作業が続く。Codex Cloud",
    "excerpt": "Codex Cloudは、OpenAIが管理するクラウド環境でコーディング作業を進め、PCを閉じた後もタスクを継続できる仕組みです。",
    "content": "OpenAIは2026年9月29日、Codex Cloudを案内しました。Codex Cloudは、リポジトリ、ツール、依存関係、アクセス設定をまとめた再利用可能なクラウド環境で、コーディング作業をOpenAI管理のコンピューター上で進める仕組みです。環境を一度準備すると、デスクトップ、Web、モバイルからタスクを開始・継続でき、手元のPCがスリープしてもクラウドタスクは進みます。\n\n基本の流れは、①対象リポジトリを接続、②必要なツールや依存関係、ネットワークアクセスを設定、③環境をテストして公開、④修正・テスト・レビューなどのタスクを開始、⑤完了結果と変更内容を確認、です。時間のかかるテストや複数ファイルの修正を任せ、移動中にスマートフォンから進捗を見る、といった使い方ができます。\n\n対象は、展開対象となっているPlus、すべてのPro、Business、Enterprise、Healthcare、Educationです。FreeとGoには含まれず、管理ワークスペースでは管理者設定にも左右されます。環境の作成と公開はデスクトップまたはWebで行います。開始時点では標準環境に別途VM料金はありませんが、モデル利用はCodexの通常の上限やクレジット・課金対象です。\n\nクラウド環境にはコードや認証情報を扱う設定が含まれるため、必要なリポジトリだけを接続し、シークレットとネットワークアクセスは最小限にします。完了した変更はそのまま採用せず、差分、テスト結果、権限設定を人が確認してから反映しましょう。",
    "sources": [
      {
        "label": "ChatGPT Release Notes｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Using Codex Cloud｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/20001545-using-codex-cloud"
      },
      {
        "label": "ChatGPT プランで Codex を使う｜OpenAI Help Center",
        "url": "https://help.openai.com/ja-jp/articles/11369540-using-codex-with-your-chatgpt-plan"
      }
    ]
  },
  {
    "id": "2026-10-10-codex-faster-steering",
    "date": "2026.10.10",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "待たずに方向転換。Codexの「Steer」が高速化",
    "excerpt": "Codexで作業中に追加指示を送る「Steer」の反映が高速化。完了を待たず、方針修正や不足情報の追加がしやすくなりました。",
    "content": "OpenAIは2026年10月8日、ChatGPTデスクトップアプリのCodexで、実行中の作業へ追加指示を反映する「Steer」を高速化すると発表しました。Codexが長い作業を進めている途中でも、完了を待たずに「この方針はやめて」「この条件も加えて」「先にこの資料を確認して」と伝え、現在の実行へ反映しやすくなります。\n\n似た操作に「Queue」がありますが、役割は異なります。Steerは進行中の実行へ指示を加え、Queueは現在の作業が終わった後の次の実行として保存します。デスクトップアプリでは「設定」→「一般」→「フォローアップの動作」から既定値を選べます。Codex CLIでは、作業中にEnterでSteer、TabでQueueを使います。\n\nただし、Steerで追加した指示が、すでに終わった処理まで自動で巻き戻すとは限りません。重要な変更は反映結果と差分を確認してください。高速化はデスクトップで段階的に提供されており、利用できる時期は環境によって異なります。",
    "sources": [
      {
        "label": "ChatGPT Release Notes｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Using Codex with your ChatGPT plan｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan"
      }
    ]
  },
  {
    "id": "2026-10-09-chatgpt-gpt6-intelligent-ui",
    "date": "2026.10.09",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "GPT-6で回答が「画面」に。ChatGPTのIntelligent UIとは",
    "excerpt": "ChatGPTにGPT-6とIntelligent UIが登場。質問に合わせて、文章だけでなく比較表、図解、その場で使える計算ツールなどを自動で組み合わせるようになりました。",
    "content": "OpenAIは2026年10月7日、ChatGPTへGPT-6と「Intelligent UI」を導入すると発表しました。Intelligent UIは、質問に合わせて文章、画像、比較表、図解、操作できるツールなどを組み合わせ、回答に適した画面を自動で作る仕組みです。内容によっては、従来どおり文章だけで回答します。\n\nたとえば「3つの料金プランを比較して」と頼むと横並びの比較表、「この仕組みを初心者向けに説明して」と頼むと図解、「4人で割り勘したい」と頼むと会話内で使える計算ツール、といった形が考えられます。\n①目的を具体的に伝える、\n②GPT-6が回答形式を選ぶ、\n③比較表・図解・ツールで内容を確認する、\n④不足があれば条件を足して追加質問する、の順で試せます。\n\nGPT-6は、回答を続けて考えたりツールを使ったりしている途中でも、先に読める部分から表示し、追加の結果を同じ回答へ反映できます。ただし、見やすい表示になっても内容が必ず正しいとは限りません。金額、契約条件、制度、医療・法律など重要な情報は、元の資料や公式情報と照合してください。\n\n出力条件まで出さなくてよくなる、ついに、人は承認を超えて、「何を何のためにするのか」目的さえ伝えるだけでよい、状態になりますね。\n進化ですね。\nここまでくると、今度は何をするのか、さえ人は与えずに、「これやってみたら？」「これやると売り上げ伸びるよ？」という提案までしてきてくれる様になるはずです。\nさて、その時に人に求められるものとは、、、、、\n\n提供はPlus、Pro、Business、Enterpriseで世界的に始まり、FreeとGoには翌日から拡大すると案内されています。Plus、Pro、Business、EnterpriseではGPT-6 Sol、FreeとGoではGPT-6 Lunaを使用します。Intelligent UIはInstantからExtra Highまでの推論設定に対応しますが、Proの推論オプションで使われるGPT-6 Astraは対象外です。また、WorkとCodexで使われるモデルは今回の発表では変更されません。",
    "sources": [
      {
        "label": "ChatGPT Release Notes｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "2026-10-07-chatgpt-ads-manager-japan",
    "date": "2026.10.07",
    "category": "chatgpt",
    "product": "ChatGPT Ads",
    "title": "日本でも利用可能に。ChatGPT Ads Managerで広告を始める",
    "excerpt": "OpenAIの広告管理画面「Ads Manager Beta」が日本の事業者にもセルフサービスで提供されています。Webサイトから広告案を作る流れと、会話文脈・プライバシーに関する注意点を整理します。",
    "content": "OpenAIの「Ads Manager Beta」が、日本に拠点を置く事業者もセルフサービスで利用できるようになっています。WebサイトのURLを入力すると広告案が作られ、内容を確認・修正してキャンペーン設定へ進めます。\n\n始め方は、\n① ads.openai.comへOpenAIアカウントでログイン\n[ChatGPT で広告掲載 \\| OpenAI Ads](https://ads.openai.com/ja-JP)\n![521](/ai-journal/assets/2026-10-07-chatgpt-ads-manager-japan-01.png)\n②WebサイトのURLを入れて広告案を確認\n![473](/ai-journal/assets/2026-10-07-chatgpt-ads-manager-japan-02.png)\n③目的・予算・配信国などを設定\n![473](/ai-journal/assets/2026-10-07-chatgpt-ads-manager-japan-03.png)\n④広告主情報と支払い方法を登録し、審査後に配信、という流れです。\n\n広告は条件を満たすFree・Go利用者の回答末尾に「スポンサー」と明示して表示され、ChatGPTの回答とは分けられます。Plus、Pro、Business、Enterprise、Eduは広告表示の対象外です。\n\n注意したいのは、検索広告のようなキーワードだけではなく、現在の会話の文脈や意図も広告選択に使われる点です。広告のパーソナライズが有効な場合は、過去のチャットやMemoryも関連性の判断に利用されることがあります。ただし、広告主へ会話、履歴、Memory、氏名やメールアドレスが渡るわけではなく、広告主が受け取るのは表示数やクリック数などの集計情報です。\n\n広告は有料掲載であり、OpenAIの推奨を意味しません。回答への広告の影響はないと案内されていますが、会話内容に沿って広告が出ることへの違和感や誤認リスクは残ります。利用者は広告の理由確認、非表示、報告、パーソナライズ停止、広告データ削除が可能です。広告主側も、生成された広告文、リンク先、予算、配信地域、審査状況を確認してから開始しましょう。Betaのため仕様や配信量、費用は変動する可能性があります。",
    "sources": [
      {
        "label": "Ads Manager Availability｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/20001245-ads-manager-availability"
      },
      {
        "label": "Ads Manager Account Setup｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/20001213-ads-manager-account-setup"
      },
      {
        "label": "Ads in ChatGPT｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/20001047-ads-in-chatgpt"
      },
      {
        "label": "Our approach to advertising and expanding access to ChatGPT｜OpenAI",
        "url": "https://openai.com/index/our-approach-to-advertising-and-expanding-access/"
      }
    ]
  },
  {
    "id": "2026-10-06-chatgpt-space",
    "date": "2026.10.06",
    "category": "chatgpt",
    "product": "ChatGPT Space",
    "title": "ページ・ファイルを一か所に。ChatGPT Spaceで仕事を整理",
    "excerpt": "ChatGPT Spaceは、ページやファイルをまとめ、ChatGPTと編集しながら整理・共有できる新しい仕事場所です。Libraryに代わる機能ですが、チャットや指示を管理するProjectsとは別に使います。",
    "content": "OpenAIは2026年10月1日、ChatGPTの「Space」を発表しました。Spaceは、ページ、アップロードしたファイル、関連する仕事を一か所にまとめる場所です。対象アカウントではLibraryに代わって表示されますが、チャット、ファイル、プロジェクト指示をまとめる従来のProjectsはそのまま別に残ります。\n\n企画書、議事録、調査まとめなどを「Page」という編集可能な文書として作り、文章を直接直したり、ChatGPTに要約・比較・表やグラフの追加を頼んだりできます。ページの下にサブページを置いて、概要と資料を階層で整理することも可能です。\n\n試すときは、\n①「〇〇というSpaceを作って」と依頼する、\n②そのSpaceにPageやファイルを追加する、\n③ChatGPTと内容を編集する、\n④必要な相手へ閲覧または編集権限を設定して共有する、の順です。\n\n作成・編集の対象はChatGPT Pro、Business、Enterpriseで、Web版とデスクトップアプリに対応します。モバイルではページの検索・閲覧・共有はできますが、編集には対応していません。段階提供のため、対象プランでもまだ表示されない場合があります。\n\n共有前には内容と権限を確認しましょう。個人のMemoryや非公開チャット自体は共有されませんが、ChatGPTがそこからページへ書き込んだ情報は閲覧者から見えるようになります。ページへアップロードしたファイルも、そのページの権限に従います。",
    "sources": [
      {
        "label": "ChatGPT Release Notes｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Getting started with Space in ChatGPT｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/20001549-getting-started-with-space-in-chatgpt"
      },
      {
        "label": "ChatGPT Space: sharing, data, and controls｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/20001544-chatgpt-space-sharing-data-and-controls"
      }
    ]
  },
  {
    "id": "2026-10-05-chatgpt-finances-free-go",
    "date": "2026.10.05",
    "category": "chatgpt",
    "product": "ChatGPT Finances",
    "title": "米国でFree・Goへ拡大。ChatGPT Financesで支出を整理",
    "excerpt": "米国のChatGPT Free・Goでも、金融口座をつないで支出や定期購入を確認できる「Finances」が利用可能に。家計を一か所で整理し、データをもとに質問できます。",
    "content": "OpenAIは2026年10月2日、米国のChatGPT Free・Goユーザーにも「Finances」の提供を拡大しました。Web・iOS・Androidで利用でき、Plus・Proを含む対象ユーザーは、Plaid経由で金融口座を接続し、支出、請求、サブスクリプション、資産状況、投資などを一か所で確認できます。\n\nたとえば「今月は何に多く使った？」「契約中のサブスクは？」「次の支払いは？」と質問すると、接続したデータをもとに整理できます。\n\n2026年10月5日時点では米国向けで、日本での提供は案内されていません。\n\n### 便利だからこそ考えたいリスク\n\nまず、Financesは金融機関から共有されたデータと同期時点をもとに整理します。未取得の口座や取引、反映待ちがあれば表示が不完全になり、振替、カード支払い、返金、保留中の取引などを支出として重複計上する場合もあります。AIの分類や説明を、そのまま正しい明細だと思い込まないことが大切です。\n\n次に、支出、資産、請求、投資、信用情報が一か所へ集まるため、便利になるほど扱う情報の機微性も高くなります。必要な口座だけを接続し、カード番号、CVV・CVC、暗証番号などを会話やファイルへ直接入力しないようにします。\n\n接続解除後も、すべてが即時に消えるわけではありません。OpenAIとPlaidの接続データは30日以内に削除されますが、過去の会話とFinancial memoriesは別途削除が必要です。\n\n### 私の考え\n\n今後日本に導入されるまでに間生えたいのはリスク。ChatGPTが勝手が中を見れる＝自分が意図していないことが作為的に見えるようにするリスクも出てくる。見やすく整理された結果を「正しい判断」だと過信することはとっても危険です。\nChatGPTは送金、支払い、取引、口座設定の変更はできず、金融・税務・法務の専門家でもありません。まずは確認と整理に限定し、重要な判断前には金融機関の明細や専門家でも確認する。接続する口座を最小限にする。この二つを基本にすると、便利さと安全性のバランスを取りやすくなります。",
    "sources": [
      {
        "label": "ChatGPT Release Notes｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Finances in ChatGPT｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/20001222-finances-in-chatgpt"
      },
      {
        "label": "Customer Responsibilities in Safeguarding Financial Data｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/12429613-customer-responsibilities-in-safeguarding-financial-data.pdf"
      }
    ]
  },
  {
    "id": "2026-10-04-dotのai秘書体験-確認用下書き",
    "date": "2026.10.04",
    "category": "chatgpt",
    "product": "dot",
    "title": "AI秘書を試して感じた仕事を整理する価値",
    "excerpt": "私が「モコ」と名づけたAIアシスタントのdotを試したところ、接続した情報から日程の食い違いに気づき、優先すべきことを提案してくれました。許可したObsidianの関連メモから未チェック項目を発見し、実際に未完了であることも確認しました。",
    "content": "### dotsを体験してみたら、すごいことが起きていた\nAIとのチャットをいくつも動かしていると、「今何してたっけ？」となることがあります。私も、途中の仕事や未完了のチャットの管理を手伝ってほしいと感じていました。\nOpenAIが2026年9月29日に発表した、ChatGPTの「dots」という新しい機能、もう試しましたか？\n私はその子に「モコ」と名付けました。\n[![dots活用術｜営業・経理・個人事業主…職種ごとの任せ方21選 |  まるお｜AIエージェント×コンテンツマーケ｜AI特許取得｜慶應AI卒｜元日テレAI責任者｜1年で2億 (@Maruo_0314) on X](https://pbs.twimg.com/media/HTnH5aQbcAAUOjM?format=webp&name=medium)![dots活用術｜営業・経理・個人事業主…職種ごとの任せ方21選 |  まるお｜AIエージェント×コンテンツマーケ｜AI特許取得｜慶應AI卒｜元日テレAI責任者｜1年で2億 (@Maruo_0314) on X](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wRKagcP8pWCHJAGPSQeTBQWQyUi9A7jlBmvXN4m8BA&s=10)](https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fx.com%2Fi%2Farticle%2F2105943320832950429&ved=0CBgQjRxqFwoTCICa1ZqoopcDFQAAAAAdAAAAABBo&opi=89978449)\n今回、私が「モコ」と名づけたAIアシスタントのdotに、接続したメール、カレンダー、資料を確認してもらいました。日程の食い違いに気づき、その後、私の依頼で日程表も修正。今優先したいことまで整理して提案してくれました。\nさらに、許可したMacのObsidianの関連メモを読み、期限が近い未チェック項目も見つけてくれました。\n\n### 感じたことと確認したいこと\n「本当に秘書と思えるレベルがきた！」というのが、今回の感想です。状況を踏まえて自分から提案してくれるところに、主体性を感じました。\n実は主体性がない、と評価されていたdots。私は最初に、あえて主体性を持ち、私の業務改善と発展のために改善を提案してほしいと指示しました。",
    "sources": [
      {
        "label": "Introducing dots｜OpenAI",
        "url": "https://openai.com/index/introducing-dots/"
      },
      {
        "label": "ChatGPT Release Notes｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "2026-10-04-chatgpt-shopping-try-on",
    "date": "2026.10.04",
    "category": "chatgpt",
    "product": "ChatGPT Shopping",
    "title": "似合うかを購入前に確認。ChatGPTで服・小物をバーチャル試着",
    "excerpt": "ChatGPTで衣類やアクセサリーを選ぶ際、セルフィーから試着イメージを作れる機能が登場。参照写真の管理や候補商品の保存もでき、購入前の比較をまとめやすくなりました。",
    "content": "OpenAIは2026年10月1日、ChatGPTのショッピングに、衣類やアクセサリーのバーチャル試着を追加しました。対象の商品候補に表示される「試着」ボタンを選び、セルフィーを撮影またはアップロードすると、ChatGPT Imagesが着用イメージを生成します。\n\n実は、ChatGPTには「ショッピングアシスタント」という機能があります。これは、欲しいもの、予算、好み、用途などを伝えると、条件に合う商品を探し、比較を手伝ってくれる機能です。たとえば「5万円以内で、軽くてパソコンが入る仕事用バッグを探して」と依頼すると、条件を確認しながら候補を絞り込み、商品画像、価格、特徴、販売サイトへのリンクなどを見比べられます。\n![記事内の説明画像](/ai-journal/assets/2026-10-04-chatgpt-shopping-try-on-01.png)\n\nすでにチャット内に商品が表示されている場合は、気になる商品を1つ以上選び、「リサーチ」を選択します。そこから候補同士を比較したり、似た条件の代替商品を探したりできます。途中で「もう少し軽いもの」「このブランドは除外して」などと条件を足し、調査の方向を調整することも可能です。\n\nバーチャル試着は、この商品探しと比較の進化です。①希望・予算・好みを伝えて商品を探す、②画像・価格・特徴・販売サイトを比較する、③必要に応じて「リサーチ」で比較や代替品の調査を深める、④商品候補の「試着」を選ぶ、⑤自分の写真を撮影または追加し、生成画像と実際の商品情報を見比べる、の順です。気になる商品はお気に入りやフォルダへ保存できるため、候補が増えてもLibraryで整理できます。\n\n![294](/ai-journal/assets/2026-10-04-chatgpt-shopping-try-on-02.png)![253](/ai-journal/assets/2026-10-04-chatgpt-shopping-try-on-03.png)\n\n試着に使う参照写真は次回以降も再利用されます。変更・削除は「設定」→「パーソナライズ」→「参照写真」から行えます。機能はWeb・モバイルで案内されていますが、公式情報では対象プラン・地域の詳細は明記されていません。\n\n生成画像は、本人の見た目や商品の色・形を正確に再現するとは限らず、サイズやフィット感も保証しません。購入前には販売元の寸法、素材、商品画像、返品条件を確認し、顔写真を保存したくない場合は使用後に参照写真を削除しましょう。",
    "sources": [
      {
        "label": "ChatGPT Release Notes｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "ChatGPTでショッピングリサーチを使う｜OpenAI Help Center",
        "url": "https://help.openai.com/ja-jp/articles/12911370-using-shopping-research-in-chatgpt"
      },
      {
        "label": "Shopping with ChatGPT Search｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/11128490-shopping-with-chatgpt-search"
      },
      {
        "label": "ChatGPT Searchでのショッピング｜OpenAI Help Center",
        "url": "https://help.openai.com/ja-jp/articles/11128490-shopping-with-chatgpt-search"
      },
      {
        "label": "Using Library to manage files in ChatGPT｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/20001052-using-library-to-manage-files-in-chatgpt"
      }
    ]
  },
  {
    "id": "2026-10-02-gpt-6-1-sol",
    "date": "2026.10.02",
    "category": "chatgpt",
    "product": "ChatGPT Work・Codex",
    "title": "GPT-6.1 Sol、WorkとCodexで提供開始",
    "excerpt": "OpenAIがGPT-6.1 SolをChatGPT WorkとCodexへ提供開始。複雑な資料の理解や複数工程の業務、コード作業が強化されました。通常のChatではまだ使えません。",
    "content": "OpenAIは2026年9月29日、GPT-6 Solを改良した「GPT-6.1 Sol」を発表しました。ChatGPT WorkとCodexで、Plus、Pro、Business、Enterprise、Eduへ段階的に提供されます。通常のChatには、現時点では提供されていません。\n\nGPT-6.1 Solは、複雑なPDFや文書の理解、複数の手順を伴う業務、パソコン操作、コード作成・修正などでGPT-6 Solより改善したと案内されています。仕事では、資料を読み込んで要点と確認事項を整理する、作業手順を組み立てて成果物を作る、コードを調べて修正案と検証結果をまとめる、といった場面で試せます。\n\n使うときは、\n①WorkまたはCodexを開く、\n②モデル選択にGPT-6.1 Solがあれば選ぶ、\n③目的・資料・守る条件・完成形を伝える、\n④出典、数値、ファイル、実行結果を人が確認する、の順です。\n表示されない場合は、プラン、段階提供、アプリの更新、ワークスペースのモデル権限を確認してください。\n\n高性能になっても、回答や操作結果が常に正しいとは限りません。外部送信、削除、公開、金銭や契約に関わる操作は、実行前後に内容と対象を確認しましょう。モデルの評価結果は実運用と条件が異なる場合があります。",
    "sources": [
      {
        "label": "Introducing GPT-6.1 Sol｜OpenAI",
        "url": "https://openai.com/index/introducing-gpt-6-1-sol/"
      },
      {
        "label": "ChatGPT Release Notes｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "ChatGPT Work and Codex｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex"
      }
    ]
  },
  {
    "id": "2026-09-30-chatgpt-archive-vs-delete",
    "date": "2026.09.30",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "今日のChatGPT活用ヒント：チャットは「アーカイブ」と「削除」を使い分ける",
    "excerpt": "ChatGPTの会話を消さずに整理したいときは「アーカイブ」が便利です。検索や復元ができるアーカイブと、元に戻せない削除の違い、Library内ファイルの注意点を整理します。",
    "content": "ChatGPTのサイドバーに会話が増えると、必要な仕事のチャットを探しにくくなります。そんなときは、すぐ削除せずに「アーカイブ」を使うと安全です。\n\nアーカイブは、会話を通常のサイドバーから隠して整理する機能です。内容はアカウントに残り、検索結果にも表示されます。戻したい場合は「設定」→「データコントロール」→「アーカイブ済みのチャット」から解除できます。\n一方、削除したチャットは画面からすぐ消え、復元できません。OpenAIのシステムからは原則30日以内に削除予定となりますが、法的・安全上の例外があります。\n\n![記事内の説明画像](/ai-journal/assets/2026-09-30-chatgpt-archive-vs-delete-01.png)\n\nまずは、完了した案件や一時的に見えなくしたい会話を一つ選び、会話名の「…」から「アーカイブ」を試してみましょう。保管中の議事メモ、参考にしたいプロンプト、後で再利用する調査はアーカイブ、不要と判断できるテスト会話は削除、という分け方が実用的です。\n\n注意したいのは、アーカイブしても保存期間は変わらず、削除したチャットは戻せないことです。また、チャットを削除してもLibraryへ別に保存されたファイルは残る場合があります。ファイルも消したいときはLibrary側を確認してください。画面名は端末や提供状況により少し異なる場合があります。",
    "sources": [
      {
        "label": "Deleting and archiving chats in ChatGPT｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/8809935-deleting-and-archiving-chats-in-chatgpt"
      },
      {
        "label": "Finding your chats, projects, and files in ChatGPT｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/10056348-finding-your-chats-projects-and-files-in-chatgpt"
      },
      {
        "label": "Chat and file retention in ChatGPT｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/8983778-how-do-i-opt-out-of-my-data-being-used-to-train-future-models"
      }
    ]
  },
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
    "id": "2026-09-25-chatgpt-voice-plugins",
    "date": "2026.09.25",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPTの音声会話でプラグインを使えるように",
    "excerpt": "ChatGPTの音声会話「Live」で、接続済みのプラグインやアプリを声で使えるようになりました。結果は文字でも確認でき、予定確認や資料探しを会話のまま進められます。",
    "content": "OpenAIは2026年9月23日、ChatGPTの音声会話「Live」で、アカウントに利用可能なプラグインや接続済みアプリを使えるようにしたと発表しました。Web、iOS、Androidに対応し、声で依頼しながら結果をチャットの文字でも確認できます。\n\nこれにより、画面を細かく操作しにくい移動中や作業中でも、「明日の予定を確認して」「接続した保存先から○○の資料を探して」のように頼みやすくなります。Liveはウェブ検索にも対応しているため、最新情報を調べ、結果を文字で見直す使い方もできます。\n\n試すときは、\n①使いたいプラグインやアプリを事前に接続\n②ChatGPTのWeb版またはモバイル版でVoiceを開始\n③Liveに声で依頼し、表示された結果を文字で確認\nの3段階です。利用できるプラグインや操作は、プラン、地域、アプリのバージョン、ワークスペース設定によって異なります。\n\n注意したいのは操作承認です。送信や更新など承認が必要な操作では、画面上の確認を求められます。口頭だけでは承認できません。また、接続先の権限や利用上限はそのまま適用されます。重要な予定、資料、外部送信の内容は、実行前後に画面で必ず確認しましょう。\n\nちなみに、LIVEモードで会話すると、待っている間も少し優しい気持ちになれます。\n例えば「カレンダーの予定を削除して」と伝えると、音声で「ちょっと待ってね」「あっ少しつまずいたからもう一度確認するね」と言ってくれるので、テキストで見るより、「大丈夫だよ」「よろしく」とつい私も声をかけてしまい、\nなんだかほっこり優しい時間が流れました。\nAIにあたたかさを感じた、そんな体験でした。",
    "sources": [
      {
        "label": "ChatGPT Release Notes｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "ChatGPT Voice｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/20001274-chatgpt-voice"
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
