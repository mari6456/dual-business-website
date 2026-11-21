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
    "id": "2026-11-22-space-plus-rollout",
    "date": "2026.11.22",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPT SpaceがPlusへ。共有相手も利用条件を確認",
    "excerpt": "11月20日から18歳以上のPlusへ世界で順次提供。共有には相手のSpace利用権限も必要です。",
    "content": "Spaceで作った資料を送りたい。でも、相手はリンクを開けるでしょうか。\n\nOpenAIは11月20日、ChatGPT Spaceを世界の18歳以上のPlus利用者へ順次提供すると発表しました。Space自体の初登場ではなく、利用できる人が広がる更新です。\n\nSpaceでは、AIとページやプレゼンテーションを作り、Spaceを使える相手を招いて一緒に編集できます。接続したアプリやツールを使い、ページやスライドを自動更新する設定もできます。\n\n### 使い方\n\n1. サイドバーのSpaceを開きます。Libraryに代わり、ページ・スライド・画像・アップロードしたファイルを扱う場所になります。\n2. たとえば、打ち合わせ用の資料やプロジェクトの計画を作ります。これは仕事での利用例です。\n3. 共有前に、相手がSpaceを利用できるプランと閲覧権限を持っているか確認します。\n\n### 共有の注意点\n\n共有されたページやプレゼンテーションを開くには、閲覧許可と、Spaceを利用できるPlus・Pro・Business・Enterpriseのアカウントでのログインが必要です。Freeでは開けず、一般公開リンクもありません。URLを渡せば誰でも読める、とは考えないでください。\n\nページの作成・編集はWeb、デスクトップアプリ、iOS、Androidで利用できます。段階的な提供なので、自分の画面への反映も確かめましょう。共有する本文や添付に、公開してよい情報だけが入っているかも確認します。",
    "sources": [
      {
        "label": "OpenAI公式",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "2026-11-21-mobile-favorite-tabs",
    "date": "2026.11.21",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPTのスマホ画面が変わる。よく使う機能をタブへ",
    "excerpt": "Codex・Projects・Imagesなどをタブに固定できる新しい画面。対象者へ段階的に提供されます。",
    "content": "スマホでChatGPTを開くたび、使いたい機能を探していませんか。\n\nOpenAIは11月19日、ChatGPTのモバイルアプリの新しい画面を発表しました。dotには専用のタブができ、Codex・Projects・Imagesなど、よく使う機能をタブバーに固定できます。機能の提供条件そのものが、固定によって変わるわけではありません。\n\n### 使い方\n\n1. まず、自分のアカウントに新しい画面が届いているか確認します。\n2. 新しい画面で、よく使う機能をタブバーに固定します。\n3. 次から、そのタブを開いて使います。\n\n使い道としては、企画の資料を扱うProjectsや、画像づくりのImagesをすぐ開ける場所に置く例が考えられます。これは利用例で、作業時間を測った結果ではありません。\n\n![記事内の説明画像](/ai-journal/assets/2026-11-21-mobile-favorite-tabs-01.png)\n### 対象と注意点\n\n提供はdotを利用できる地域の18歳以上のPro利用者から始まり、一部の対象Plus利用者にも届きます。EEA（EUを含む）・英国・スイス・韓国は今回の対象外です。段階的な提供のため、同じプランでも表示が異なる場合があります。\n\n設定に「New ChatGPT design」が表示される場合は、そこで新しい画面のオン・オフを切り替えられます。表示されない設定を無理に探さず、アカウントへの提供状況を確認してください。",
    "sources": [
      {
        "label": "OpenAI公式",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "2026-11-20-live-dictation-text",
    "date": "2026.11.20",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPTの音声入力。話しながら文字を確認",
    "excerpt": "マイクで話す→波形で文字を確認→直して送信。依頼文の下書きやメモに。名前と数字は送る前に見直します。",
    "content": "話し終わってから、入力された文字を確認していませんか。\n\nOpenAIは11月18日、ChatGPTの音声入力で、話している途中の文字を表示できるようにしたと案内しました。これまでは話し終えた後に文字を確認する流れでしたが、新しい表示では途中でも入力内容を見られます。\n\n### 使い方\n\n1. メッセージ入力欄のマイクで話します。\n2. 波形を押すと、話している内容を文字で確認できます。\n3. 文字を見直し、必要な部分を直してから送ります。\n\nたとえば依頼文の下書きや、思いついたアイデアのメモに使えます。音声を文字にする機能なので、ChatGPTと声でやり取りを続ける「音声会話」とは別です。\n\n### 条件と注意点\n\n公式には、従来の10分の録音上限を取り除いたと説明されています。ただし、すべての利用制限がなくなったという意味ではありません。全プランを対象に、iOS・Android・ウェブ・デスクトップへ世界で順次提供されます。表示がまだない場合もあります。\n\n音声の文字起こしには誤りが含まれることがあります。送信前に、名前・数字・日付を確かめてください。機密情報や、相手の許可がない会話は入力しないようにしましょう。",
    "sources": [
      {
        "label": "OpenAI公式 1",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "OpenAI公式 2",
        "url": "https://help.openai.com/ja-jp/articles/12168547-voice-dictation-faq"
      }
    ]
  },
  {
    "id": "2026-11-19-work-gpt62-documents",
    "date": "2026.11.19",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPT WorkにGPT-6.2。資料づくりで確認すること",
    "excerpt": "Workのモデル一覧で確認。元資料を渡し、スライドや文書を作った後は内容を照合します。",
    "content": "新しいGPT-6.2が見当たらない。通常のChatで探していませんか。\n\n### 何が変わったか\n\nOpenAIはChatGPT WorkとCodexへGPT-6.2 AstraとGPT-6.2 Solを順次提供すると案内しています。今回の提供で通常のChatに両モデルが追加されるわけではありません。\n\n公式更新では、Astraは元資料からスライドを作るときのテンプレートへの追従、各スライドの要点を示す見出し、文書修正時の文体合わせを改善したと説明されています。Solは文章・画像・ツールを組み合わせた作業を扱います。これは公式の説明で、筆者の比較実験結果ではありません。\n\n### 使い方\n\n1. デスクトップアプリを使う場合は、メニューの「アップデートを確認」で更新し、再起動します。\n2. Workを開き、モデル選択で利用できるAstraまたはSolを確認します。\n3. 元資料と、望む成果物・条件を伝えます。作成後は内容を読み、修正を依頼できます。\n\n使い道には、元資料からのスライド作成、既存文書の修正があります。\n\n### 条件・注意点\n\n提供対象はPlus、Pro、Business、Enterprise、Eduなどですが、表示は契約・権限・提供状況に左右されます。更新後も表示されない場合があります。新モデルの利用と、Spaceなど成果物を扱う機能の利用条件は別に確認してください。資料中の事実や数字は、完成後も元資料と照合します。",
    "sources": [
      {
        "label": "OpenAI公式 1",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "OpenAI公式 2",
        "url": "https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex"
      }
    ]
  },
  {
    "id": "2026-11-18-clinicians-clinical-search-update",
    "date": "2026.11.18",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "医療従事者向けChatGPTの検索更新。日本向けとは分けて確認",
    "excerpt": "11月16日の検索更新は、米国の資格確認済み医療従事者向け。日本向けの提供とは分けて確認します。",
    "content": "医療向けChatGPTの更新を見て、日本のアカウントでも使えるのか迷いませんか。\n\nOpenAIは11月16日、ChatGPT for Cliniciansの医療情報検索とプラグインの更新を案内しました。医療の根拠を探し、評価し、引用する仕組みの改善です。一般向けChatGPTの全利用者に、同じ機能が一斉に追加されたという発表ではありません。\n\n対象は米国で資格確認を済ませた医療従事者です。公式ヘルプでは、医師、ナースプラクティショナー、フィジシャンアシスタント、薬剤師を挙げています。日本での提供開始は今回確認した案内にはありません。\n\n### 使い方\n1. 自分が利用条件に該当するか、公式ヘルプの提供範囲を確認します。\n2. 対象の利用者は医療上の問いを入力し、回答に付いた出典から元の資料を開きます。\n3. 論文の方法や結果を読み、回答と照合します。有料購読や所属機関の契約が必要な資料もあります。\n\n公式の利用例には、医療文献の確認や、確認を前提とした紹介状の下書きがあります。診療判断を代行するものではなく、判断と情報の検証は医療従事者が担います。今回はサービスの更新紹介であり、診断や治療の助言ではありません。",
    "sources": [
      {
        "label": "OpenAI公式 1",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "OpenAI公式 2",
        "url": "https://help.openai.com/en/articles/20001202-chatgpt-for-clinicians"
      }
    ]
  },
  {
    "id": "2026-11-16-wallet-order-confirmation",
    "date": "2026.11.16",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPT Walletで支払いを承認したあとに見るもの",
    "excerpt": "米国で提供が始まったChatGPT Wallet。販売店・合計を見て支払いを承認し、そのあと販売店の注文確認を見ます。",
    "content": "ホテル代の支払いを承認したら、もう部屋は取れたのでしょうか。\n\nOpenAIが11月13日に発表したChatGPT Walletでは、ChatGPTのdotに商品の候補探しから購入までを頼めます。大事なのは、カードで払う許可を出す場面と、お店が注文を受け付けたと分かる場面を分けることです。\n\n### 使い方\n1. 対象のdotにWalletへのカード追加を頼みます。服の購入やホテルの予約など、必要なものを伝えます。\n2. 支払う前に販売店、商品、合計金額、使うカードを自分で読みます。内容が合っていれば、生体認証などで支払いを承認します。\n3. 承認後は販売店の注文確認を見ます。ホテルなら、支払いを許可した画面だけを見て予約済みと判断しないでください。\n\n今回の提供は米国の18歳以上のChatGPT Pro利用者へ段階的に行われ、対象の米国発行カードと米国の請求先住所が必要です。日本向けの開始案内ではありません。また、エージェントによる購入に対応しないサイトもあります。",
    "sources": [
      {
        "label": "OpenAI公式 1",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "2026-11-14-archive-without-deleting",
    "date": "2026.11.14",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPTの会話を消さずに片づける",
    "excerpt": "あとで読む会話はアーカイブへ。定期タスクの結果が届く会話には注意が必要です。",
    "content": "終わった案件の会話を一覧から外したい。でも、来月また見返すかもしれません。\n\nそんなときは削除ではなく、アーカイブを選べます。会話は通常のサイドバーから消えても、アカウントには残り、検索できます。削除を選んで確定すると、後から会話を復元することはできません。\n\n### 使い方\n\nまず、履歴で片づけたい会話を一つ選びます。タイトルの横の「…」から「アーカイブ」を選びます。たとえば終了した打ち合わせの準備メモなら、必要になったときに検索して読み返せます。来年も使う催しの案内文なら、次の準備を始めるときに会話を一覧へ戻すこともできます。\n![記事内の説明画像](/ai-journal/assets/2026-11-14-archive-without-deleting-01.png)\n\n戻すときは「設定」→「データ コントロール」からアーカイブ済みのチャットを開き、該当の会話のアーカイブを解除します。管理画面の表示名は端末によって異なります。\n\n![記事内の説明画像](/ai-journal/assets/2026-11-14-archive-without-deleting-02.png)\n\n注意したいのは、定期タスクの結果が届く会話です。その会話をアーカイブすると、後の実行でタスクが一時停止する場合があります。今も使うタスクの届け先になっていないか、整理する前に確かめてください。",
    "sources": [
      {
        "label": "OpenAI公式 1",
        "url": "https://help.openai.com/ja-jp/articles/8809935"
      },
      {
        "label": "OpenAI公式 2",
        "url": "https://help.openai.com/en/articles/8809935"
      }
    ]
  },
  {
    "id": "2026-11-11-branch-at-a-message",
    "date": "2026.11.11",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPTで元の会話を残して別案を試す",
    "excerpt": "共通の条件がそろった発言の「…」から新しいチャットに分岐し、別案を頼めます。",
    "content": "社内向けの案内がまとまったあと、お客さま向けの案も試したくなったら、どこから書き直しますか。\n\nChatGPTのウェブ版では、会話の途中の発言から新しいチャットに分岐できます。元の案は残るので、別の条件で相談を続けたいときに使えます。今回の新機能ではなく、既存機能の活用例です。\n\n### 使い方\n会話を分けたいチャットにポインターを合わせ、その他の操作（…）から「新しいチャットに分岐」（Branch in new chat）を選びます。開いた会話で新しい会話を始めることができ、元のチャットもそのまま続けることができます。\n\n![記事内の説明画像](/ai-journal/assets/2026-11-11-branch-at-a-message-01.png)",
    "sources": [
      {
        "label": "OpenAI公式 1",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "2026-11-09-chat-search-by-phrase",
    "date": "2026.11.09",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPTで前の会話を探す",
    "excerpt": "検索欄に、会話で使った会場名や資料名を入れてみてください。アーカイブした会話も探せます。",
    "content": "昨日の会話を開きたいのに、タイトルを思い出せないことはありませんか。\n\nChatGPTのサイドバーにある検索では、会話のタイトルだけでなく、やり取りの中に出てきた言葉でも探せます。今回は、前に相談した会場の案内をもう一度開く場面で使ってみましょう。\n\n### 使い方\n\nまず、相談したときのアカウントとワークスペースを開きます。サイドバーの検索を選び、会話で使った会場名を入力します。資料の修正を頼んだ会話なら、資料名も手がかりです。結果が多い場合は、画面に「チャット」の絞り込みがあれば選び、該当する会話を開いて中身を確かめます。\n\n![記事内の説明画像](/ai-journal/assets/2026-11-09-chat-search-by-phrase-01.png)\n\n履歴の一覧に見えないだけで、消えたとは限りません。アーカイブした会話も検索の対象です。一方、自分で削除した会話は検索から復元できません。ロックした会話も通常の検索には表示されません。公式ヘルプでは、サインインした利用者は全プランでウェブ、iOS、Androidから検索でき、表示される絞り込みは環境によって異なると案内しています。",
    "sources": [
      {
        "label": "OpenAI公式 1",
        "url": "https://help.openai.com/ja-jp/articles/10056348"
      }
    ]
  },
  {
    "id": "2026-11-08-images-edit-background",
    "date": "2026.11.08",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPTで画像の背景だけを変えたいとき",
    "excerpt": "「背景を公園に。上着の柄はそのまま」と頼んでみてください。できた画像は元の服や小物と見比べます。",
    "content": "背景を変えたら、気に入っていた服の柄まで変わっていませんか。\n\n11月4日、OpenAIはChatGPT Images 2.6を発表しました。画像の一部を編集したときに、ほかの細部を以前より保ちやすくなったと説明しています。公式の例は、背景を変える場面で登場人物の服装を保つこと。どの画像でも細部が一致するという意味ではありません。\n\n### 使ってみたところ、、、\n![記事内の説明画像](/ai-journal/assets/2026-11-08-images-edit-background-01.png)\n\n背景以外何も変えずに、変更してくれました。\nプロンプトは「背景変えて」のみ。\nその上で、昼間にしてくれたので、陽の光の当たり方や、リードの緑の色（光が当たっているので彩度があがっている）など、影と日向もいい感じに補正してくれました。\nその他顔含めての変更などは全くありません。\nすごい！！！！！精度かなり上がってますね。",
    "sources": [
      {
        "label": "OpenAI公式 1",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "OpenAI公式 2",
        "url": "https://help.openai.com/en/articles/11084440-images-in-chatgpt"
      }
    ]
  },
  {
    "id": "2026-11-07-chatgpt-sites-preview-before-publish",
    "date": "2026.11.07",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPT Sitesはプレビューで確かめてから公開",
    "excerpt": "ChatGPT Sitesはプレビューで内容を確かめ、会話で修正してから公開へ。既存サイトのデプロイは公開中の版を更新します。",
    "content": "サイトができあがってから、方向性が違うと気づくことありませんか。\n\nChatGPT Sitesには、生成されたサイトをプレビューし、会話で修正してから公開する流れがあります。完成した見た目だけで公開を決めず、確認用の表示と、他の人が見る状態を分けて扱えます。\n\n### 使い方：プレビュー、修正、公開を分ける\n\nウェブ版ではWorkを選び、作りたいウェブサイトと、使う文章・資料・条件を伝えます。生成されたプレビューを確認し、変更したい箇所を会話で伝えます。案内ページなら説明文、資料集なら元資料へのリンクなど、目的に合う内容かを見直します。\n\n確認できたらサイトをデプロイしてURLを作り、実際のページとURLを開いて確認します。新規サイトは初期状態では非公開です。共有する相手は共有設定で選びます。ワークスペースの管理者もアクセスできる場合があります。\n\n既存サイトの変更をデプロイすると、公開中の版が更新されます。公開中の内容を変えずに見直したいときは、まず版を保存し、確認してからデプロイします。\n\nSitesはPlus・Pro、Business・Enterpriseで利用できますが、組織の設定と役割による制限があります。Enterpriseの一般公開は初期状態で無効です。これは確認の手順であり、手戻りや売上の改善を保証するものではありません。",
    "sources": [
      {
        "label": "OpenAI公式 1",
        "url": "https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites"
      }
    ]
  },
  {
    "id": "2026-11-07-chatgpt-saved-reference-photo",
    "date": "2026.11.07",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPTで保存した参照写真を使う",
    "excerpt": "写真を参照用に保存し、別のチャットで「@名前」から呼び出す機能。犬の水彩画などに使い、仕上がりは確認します。",
    "content": "同じ犬の写真を使いたいのに、チャットのたびに添付し直していませんか。\n\n11月4日、OpenAIはChatGPTで写真を参照用に保存し、後のチャットから呼び出す機能を案内しました。英語版の公式ヘルプでは、写真に名前を付け、その名前の前に「@」を置いて使う方法が説明されています。\n\n### 使い方：写真を保存して名前で呼ぶ\n\nまず写真をアップロードし、参照用に保存するよう頼みます。次に名前を決めて保存します。別のチャットでは、入力文に「@」と保存した名前を入れ、作りたい画像を伝えます。公式の例は、犬の写真を保存して水彩画のポートレートを頼むものです。写真を再添付せずに、その写真を参照できます。\n\nたとえば犬の水彩画を作る場面と、同じ写真を使って別の画風を試す場面で、参照元を呼び出せます。ただし、元の写真と生成結果が完全に一致するという保証ではありません。仕上がりの顔や模様は確認します。\n\nよく使う画像は、サイドバーの画像から登録する方法もおすすめです。\n簡単に追加できるので、自分の写真や、ペット、よく使う写真やロゴなどは、ここに入れておくのも管理が便利で良さそうですね！\n![記事内の説明画像](/ai-journal/assets/2026-11-07-chatgpt-saved-reference-photo-01.png)\n\nChatGPT Imagesは全プランのウェブ・iOS・Androidに対応しています。参照写真の保存機能について、確認した案内には個別の地域・プラン条件の詳しい記載がありません。使えない場合に、全アカウントへ提供済みとは判断しないでください。",
    "sources": [
      {
        "label": "OpenAI公式 1",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "OpenAI公式 2",
        "url": "https://help.openai.com/en/articles/11084440-images-in-chatgpt"
      },
      {
        "label": "OpenAI公式 3",
        "url": "https://help.openai.com/ja-jp/articles/11084440-images-in-chatgpt"
      }
    ]
  },
  {
    "id": "2026-11-06-gemini-handwriting-unclear",
    "date": "2026.11.06",
    "category": "google",
    "product": "Gemini",
    "title": "Geminiで手書きメモを読むときの不明欄",
    "excerpt": "Geminiに写真を添えて、読めない字は「不明」と残すよう依頼。日付や品名は原本と見比べます。",
    "content": "手書きメモの文字が読めないとき、もっともらしい言葉で埋めていませんか。\n\n紙のメモを文字にすると、読み取れた箇所と、前後の文から推測した箇所の区別が消えてしまうことがあります。文字起こしを頼むときは、迷った字を残す書き方まで指定できます。たとえば「読めない部分は［不明］と書き、どの行かを示してください」と頼みます。これは読み取り精度の保証ではなく、人が見直すための目印です。\n\n### 使い方：写真と回答を並べて確認する\n\nパソコンでGeminiにログインし、入力欄に依頼を書きます。ファイル追加から手元の写真を選び、送信します。打ち合わせメモなら日付、備品リストなら品名を原本と見比べます。［不明］の箇所だけでなく、読み取れたように見える数字も確認してください。原本でも読めなければ、その箇所は未確認のまま残します。",
    "sources": [
      {
        "label": "Google公式 1",
        "url": "https://support.google.com/gemini/answer/14903178?hl=ja"
      }
    ]
  },
  {
    "id": "2026-11-05-chatgpt-project-writing-style",
    "date": "2026.11.05",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPTの文章が自分らしくないとき。文体のルールを渡す",
    "excerpt": "普段の文体を言葉にして、プロジェクトの指示へ。文章の好みと、その都度変わる事実を分けて確認します。",
    "content": "ChatGPTに文章を頼むたび、いつもの自分の言い方と違うと感じることはありませんか。\n\nChatGPTのプロジェクトでは、関連するチャット、資料、指示をまとめて管理できます。プロジェクトの指示は、そのプロジェクト内にだけ適用され、全体のカスタム指示より優先されます。継続して文章を作るときの文体や回答形式を指定する場所として利用できます。\n\n### 使い方\n\n1. サイドバーで「新しいプロジェクト」を選び、名前を付けます。\n2. その他のオプションから「プロジェクト設定」を開き、指示を追加します。\n3. プロジェクト内のチャットで文章作成を依頼し、出力を確認します。\n![記事内の説明画像](/ai-journal/assets/2026-11-05-chatgpt-project-writing-style-01.png)\n公式ヘルプは、簡潔な回答や箇条書き、不明点への確認質問といった指示例を紹介しています。また、コンテンツ制作でプロジェクト固有の指示を使い、トーンや文体をそろえる用途を挙げています。\n\n### 利用例と注意点\n\n継続して作る記事の下書きや、定期レポートの文章などが利用例です。参考資料を追加することもできますが、アップロード上限はプランによって異なります。プロジェクトと共有機能の利用条件は、プランの提供状況やワークスペース設定にも左右されます。\n\n指示を保存しただけで、文章の正確さや自分らしさが保証されるわけではありません。文体の好みと、その都度変わる事実は分けて確認します。共有プロジェクトではメンバーがチャット・ファイル・指示を扱えるため、個人用の内容を入れる前に共有範囲も確認してください。",
    "sources": [
      {
        "label": "OpenAI公式 1",
        "url": "https://help.openai.com/ja-jp/articles/10169521-projects-in-chatgpt"
      },
      {
        "label": "OpenAI公式 2",
        "url": "https://help.openai.com/en/articles/10169521-projects-in-chatgpt"
      }
    ]
  },
  {
    "id": "2026-11-05-chatgpt-page-sharing-review",
    "date": "2026.11.05",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPTのページ共有。本文・添付・権限を先に確認",
    "excerpt": "非公開チャットそのものは共有されなくても、ページへ書き出した情報は共有相手に見えます。本文、添付、閲覧・編集権限を確認します。",
    "content": "ChatGPTで作ったページを渡すと、過去の会話まで相手に見えるのでしょうか。\n\n公式ヘルプでは、ページの共有によって非公開チャットや自分のメモリそのものへのアクセスが与えられるわけではない、と説明されています。一方、過去の会話などをもとにした情報がページに書かれれば、その部分はページを閲覧できる相手に見えます。\n\n### 使い方\n\n1. 共有するページの本文を読み、渡してよい内容か確認します。\n2. 添付ファイルと、別の場所のファイルへのリンクを区別します。\n3. 共有相手を選び、閲覧または編集の権限を設定します。\n![記事内の説明画像](/ai-journal/assets/2026-11-05-chatgpt-page-sharing-review-01.png)\n\nページにアップロードしたファイルは、そのページの権限に従います。別の場所に保存したファイルへのリンクを貼るだけでは、相手に元ファイルの閲覧権限は付与されません。ただし、内容をページへコピー・要約すれば、その記載部分は読めるようになります。\n\n### 利用例と注意点\n\n企画書のレビューや手順書の共同編集など、渡す内容と相手の権限を確認する場面で使える仕組みです。共有後もアクセスできる人を確認し、権限を変更・取り消せます。\n\n利用にはSpaceへのアクセスが必要です。管理対象ワークスペースでは管理者の共有制限も適用されます。自分の学習設定が相手の設定を一括で制御するわけでもありません。今日は新機能の発表ではなく、共有前に確認する範囲の整理です。",
    "sources": [
      {
        "label": "OpenAI公式 1",
        "url": "https://help.openai.com/en/articles/20001544-chatgpt-space-sharing-data-and-controls"
      },
      {
        "label": "OpenAI公式 2",
        "url": "https://help.openai.com/ja-jp/articles/20001544-chatgpt-space-sharing-data-and-controls"
      },
      {
        "label": "OpenAI公式 3",
        "url": "https://learn.chatgpt.com/docs/space/pages"
      }
    ]
  },
  {
    "id": "2026-11-04-gemini-email-draft-fact-check",
    "date": "2026.11.04",
    "category": "google",
    "product": "Gemini",
    "title": "Geminiのメール下書き。期限・金額・宛先は人が確かめる",
    "excerpt": "メールの文章が整っていても、未定の納期や金額を約束していないか確認する。Geminiの下書きからGmailでの確認までを整理します。",
    "content": "AIにメールの返信を頼むとき、まだ決めていない納期まで書かれていないか気になりませんか。\n\nGeminiはチャット内でメールの下書きを作り、文体や長さを直せます。パソコン版では「Gmailで編集」から作成画面へ移せますが、文章が整っていることと、内容が正しいことは分けて確認する必要があります。\n\n### 使い方\n\n1. 相手に伝える要点と、確認済みの条件を整理します。\n2. Geminiに「返信の下書きだけを作成。未定の期限や金額は補わず、確認事項として分けて」と伝えます。\n3. 下書きの期限・金額・対応できる範囲を、元のメールや資料と照合します。\n4. 「Gmailで編集」で宛先と件名も確かめ、人が送信を判断します。\n\n例えば、日程調整なら確定した候補だけを渡す。見積もりへの返信なら、承認された金額と条件だけを渡します。「丁寧に」だけでなく、何が決まっていて、何が未定かを伝えるための使い分けです。\n\n指示文の例は、次のようにできます。\n\n> 以下の確認済み情報だけで返信の下書きを作ってください。未定の項目は本文で約束せず、確認事項として別に示してください。送信はしないでください。\n\n### 条件・注意点\n\nGmailの下書き機能には、GeminiアプリとGoogle Workspaceの接続が必要です。接続には同じアカウントでのログインやアクティビティ設定などの条件があります。組織で使う場合は許可された範囲で扱ってください。\n\nGoogleも、Geminiが古いメールを参照したり、誤った回答を返したりする可能性を案内しています。指示文を入れるだけで誤りを防げる保証はありません。下書きの作成と、内容の確認・送信を分けて進めましょう。",
    "sources": [
      {
        "label": "Google公式 1",
        "url": "https://support.google.com/gemini/answer/18741629?co=GENIE.Platform%3DDesktop&hl=ja"
      },
      {
        "label": "Google公式 2",
        "url": "https://support.google.com/gemini/answer/18741629?co=GENIE.Platform%3DDesktop&hl=en"
      },
      {
        "label": "Google公式 3",
        "url": "https://support.google.com/gemini/answer/15229592"
      }
    ]
  },
  {
    "id": "2026-11-03-personal-information-protection",
    "date": "2026.11.03",
    "category": "other-ai",
    "product": "AIセキュリティ",
    "title": "情報漏洩の時代に、自分を守るためにやっておきたいこと",
    "excerpt": "情報漏洩のニュースを見て、自分は何をすればいいのか迷ったら。パスワードと認証、登録・共有する情報、AIへの入力、不審な連絡への対応を見直す。研修とQA会の話題をもとに、情報を渡す側・預かる側の両方で今日できることをまとめます。",
    "content": "「情報が漏れたらしい。でも、自分は何をしたらいい？」\n\n最近の研修でも、こうした不安が話題になりました。まず見直して欲しいことを4つにまとめます。\n\n### 1．アカウントの入口を守る\n\n同じパスワードの使い回しをやめ、管理アプリでサービスごとに長く異なるものを作る。対応していればパスキーや多要素認証も設定します。まずは普段使うメールと主要アカウントから。パスキーは自分専用の端末で設定し、復旧方法も確認しておきましょう。\n\n### 2．情報を渡しすぎない、集めすぎない\n\n登録フォームに欄があるからと、任意項目まで全部埋めていませんか。利用目的を確認し、使わなくなったサービスや、本人確認書類・カード情報を預けた先を見直す。共有リンクも「誰が見られるか」を確かめます。\n\n自分がフォームを作る側なら、「あると便利」と「提供に必須」を分ける。何のために集めるか説明できない項目は、減らすことも考えたいです。\n\n### 3．AIに渡す前に、情報を仕分ける\n\n顧客名簿や本人確認書類を、そのままAIへ入れない。仕事では会社が認めた環境とルールを確認し、必要な部分だけ、架空データなどに置き換えて使います。名前を消しただけで特定できなくなるとは限りません。\n\n「学習に使わない」と「保存されない」は別です。保存・共有・接続アプリの権限も確認する。例えば個人向けGeminiでは、アクティビティをオフにした会話にも保持期間があります。\n\n### 4．連絡も画面も、別の経路で確かめる\n\nログインや支払いは、届いたメールのリンクから進まず、公式アプリや自分で登録したブックマークから確認します。送金や機密情報を急に求められたら、一旦止め、以前から知っている連絡先へ。声や顔だけで判断せず、パスワードや認証コードは相手に渡さない。\n\nソフトを入れるときも、検索上位や広告だから公式とは限りません。提供元の正しいサイトや正規ストアから入手を。「人間であることの確認」「エラー修復」を口実に、ターミナルなどへ文字列を貼り付けて実行するよう求める偽画面（ClickFix）にも注意してください。その場の指示には従わず、操作を止めて確認します。\n\nパスキーや多要素認証を設定していても、不審なソフトの実行まで安全になるわけではありません。端末・ブラウザも更新し、認証と端末の両方を守りましょう。\n\n漏洩の通知が来たときも、公式窓口で「何が漏れたか」を確認してから対処を。パスワードなら使い回し先も変更し、カード情報ならカード会社へ相談します。\n\n提供元からの漏洩を、自分だけで防ぎきることはできません。それでも、被害が広がりにくい準備はできます。今日はまず、メールの認証設定と、使い回しているパスワードを一つ見直すところから始めませんか。",
    "sources": [
      {
        "label": "Taiki Watanabeさん：偽広告と偽認証画面の注意喚起",
        "url": "https://x.com/echode_dev/status/2117202696860266749"
      }
    ]
  },
  {
    "id": "2026-11-03-chatgpt-audio-action-notes",
    "date": "2026.11.03",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPTで会議の録音を「次の行動」に整理する",
    "excerpt": "音声ファイルを添付し、決定・未決・次の行動に整理。担当者や数字は原音で確認します。新発表ではなく既存機能の活用ヒントです。",
    "content": "会議を録音したのに、結局「何を決めたか」を探して聞き直していませんか。ChatGPTには音声ファイルを添付し、文字起こしや要約、内容への質問を頼めます。今回は10月6日に案内された音声アップロードを使う活用ヒントです。今日初めて登場した機能ではありません。\n\n録音を短くするだけでなく、「決定事項・未決事項・次の行動」に分けると、会議後の確認に使いやすくなります。取材なら要点と追加で聞くことを整理する、といった使い道もあります。\n\n### 使い方\n\n1. 録音・共有してよい音声を選び、ChatGPTの会話に添付します。\n2. 「決定事項、未決事項、次の行動に分けて。担当者や期限が聞き取れない場合は不明と書いて」と頼みます。\n3. 分からない箇所を追加で質問し、推測で埋めていないか確認します。\n4. 人名・数字・担当者・期限を元の録音と照らし合わせてから共有します。\n\n「要約して」だけで終えるより、後で誰が何を確認するかまで見える形を目指すのが、ここでの使い方の提案です。自動で担当者や締切を決めてもらうものではありません。\n\n### 条件・注意点\n\n対象はChatGPTの有料サブスクリプションとワークスペースで、Freeでは音声アップロードを利用できません。地域、アプリのバージョン、選択モデル、組織の設定で利用可否が異なります。MP3やM4Aなどに対応しますが、動画として認識されるファイルは別扱いです。\n\n文字起こしや話者の識別は誤ることがあります。ChatのGPT-6（即時）では、1録音あたり6分までが案内されています。Work・Codexでは現在、アップロード音声の文字起こしを利用できません。長い録音の分割処理はData Analysisが利用できる場合のベストエフォートで、完了しない場合もあります。機密情報や参加者の発言は、所属先のルールと共有の許可を確認して扱いましょう。",
    "sources": [
      {
        "label": "ChatGPT release notes（10月6日）",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "ファイルと音声のアップロード（日本語）",
        "url": "https://help.openai.com/ja-jp/articles/8555545-uploading-files-and-audio-to-chatgpt"
      },
      {
        "label": "Uploading files and audio（英語）",
        "url": "https://help.openai.com/en/articles/8555545-uploading-files-and-audio-to-chatgpt"
      }
    ]
  },
  {
    "id": "2026-11-02-chatgpt-pro-work-codex-allowance",
    "date": "2026.11.02",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPT ProのWork・Codex利用枠が拡大。まず自分の残量を確認",
    "excerpt": "Pro 100・500のWork・Codex利用枠が従来の2倍に。Pro 200は低い枠が引き上げられ、同じ枠にそろいます。残量を見ながら仕事に合うモデルを選びましょう。",
    "content": "ChatGPTに調査や資料づくりを頼む途中で、利用枠が気になることはありませんか。OpenAIは2026年10月29日、ProのWork・Codexで使える利用枠の拡大を発表しました。今回は新機能の追加ではなく、契約に含まれる利用量の変更です。\n\nPro 100とPro 500は従来の2倍に。Pro 200は、以前から高い利用枠だった人はそのまま、低い枠だった人は2倍になり、同じ水準にそろいます。既存契約には更新日を待たず自動で反映され、契約をやり直す必要はありません。Plusの利用枠は今回変わりません。\n\n### 使い方\n\n1. 「設定」を開きます。\n2. 「利用状況（Usage）」で残量とリセット時刻を確認します。\n3. WorkやCodexで、作業に合うモデル・推論の強さを選びます。\n\n例えば、Workで調査結果を報告書にまとめる、CodexでWebページのコードを修正するといった使い方があります。どちらも以前からできる作業で、利用枠はWorkとCodexで共有します。片方を多く使った日は、もう片方を始める前にも残量を確認すると予定を立てやすくなります。\n\n### 条件・注意点\n\n対象プランはPro 100・200・500ですが、上のとおり変更内容は異なります。利用できるモデルや機能はアカウント・ワークスペースの設定にも左右されます。\n\n利用枠が2倍でも、完成する作業数が2倍になる保証はありません。モデル、入力の量、推論設定、作業の複雑さで消費量が変わるためです。通常のChatの上限やAPIの料金とも区別し、まず自分の画面で確認しましょう。",
    "sources": [
      {
        "label": "ChatGPT release notes（2026年10月29日）｜OpenAI",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "About ChatGPT Pro tiers｜OpenAI",
        "url": "https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers"
      },
      {
        "label": "Managing usage with GPT-6 Astra in Work and Codex｜OpenAI",
        "url": "https://help.openai.com/en/articles/20001516-managing-usage-with-gpt-6-astra-in-work-and-codex"
      },
      {
        "label": "ChatGPT Work and Codex｜OpenAI",
        "url": "https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex"
      }
    ]
  },
  {
    "id": "2026-11-01-chatgpt-mobile-account-switching",
    "date": "2026.11.01",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "スマホでChatGPTのアカウントを切り替える。仕事用と個人用を分けたまま",
    "excerpt": "iOS・Androidへアカウント切り替えが順次提供。仕事用と個人用の履歴や契約を分けたまま、ログアウトの手間を減らせます。",
    "content": "仕事用と個人用のChatGPTをスマホで使い分けるとき、毎回ログアウトする手間を減らせるようになります。OpenAIは2026年10月30日、iOS・Androidアプリへのアカウント切り替え機能の順次提供を発表しました。Webで使えた切り替えが、スマホにも広がる更新です。\n\n同時にログインしておけるのは2アカウントまでで、使用中になるのは1つです。仕事の文章を整えるときは仕事用、旅行の相談は個人用、といった使い分けができます。\n\n### 使い方\n\n1. アプリの「設定」を開きます。\n2. 「アカウント切り替え（Switch account）」を選びます。\n3. 「アカウントを追加（Add account）」から、もう一方へログインします。\n4. 使うアカウントを選び、送信前に使用中のアカウントを確認します。\n\nすでに2つへログインしている場合は、1つからログアウトしてから別のアカウントを追加します。\n\n### 条件・注意点\n\nモバイル版は順次提供のため、まだ項目が表示されない場合があります。公式ヘルプはWeb版について全プラン対応と案内していますが、組織の管理設定で制限される場合があります。\n\n切り替えても履歴・メモリ・ファイル・設定・契約は別々です。有料契約を共有したり、2つのアカウントを統合したりする機能ではありません。通知を開くと別アカウントへ切り替わる場合もあるため、業務情報を送る前には宛先となるアカウントを確かめましょう。\n\nただ、私の画面ではまだ実装されてません。\n順次提供中で、設定に『アカウント切り替え』が表示されない場合は、まだ利用できない可能性があります。",
    "sources": [
      {
        "label": "ChatGPT release notes（2026年10月30日）｜OpenAI",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Using multiple ChatGPT accounts on web and mobile｜OpenAI",
        "url": "https://help.openai.com/en/articles/20001068-using-multiple-chatgpt-accounts-on-web-and-mobile"
      }
    ]
  },
  {
    "id": "2026-10-30-chatgpt-icloud-mail-calendar",
    "date": "2026.10.30",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPTでiCloudメールと予定を確認。接続は別々に",
    "excerpt": "ChatGPTにiCloud MailとiCloud Calendarのプラグインが登場。メールの検索や予定の確認・更新を会話から頼めます。二つは別々に接続し、Appleのアプリ用パスワードは専用フォームに入力します。",
    "content": "OpenAIは2026年10月27日、ChatGPTにiCloud MailとiCloud Calendarのプラグインを追加したと案内しました。iCloudのメールを探す、受信箱の内容を把握する、予定を確認・更新するといった作業を会話から頼めます。![記事内の説明画像](/ai-journal/assets/2026-10-30-chatgpt-icloud-mail-calendar-01.png)\n### メール探しと予定確認を会話から\n\nたとえば「来週の打ち合わせに関するメールを探して」「明日の予定を確認して」と、探す対象や期間を具体的に伝える使い方が考えられます。接続済みの情報をもとに確認できるため、必要なメールや予定を探す手間を減らす助けになります。\n\n### 使い方は4段階\n\n1. ChatGPTの「設定」→「プラグイン」で、使いたいiCloudのサービスを選ぶ。\n![CleanShot 2026-11-03 at 00.51.34.png](app://a08fb1748a4f85574bb24687ee6a72db231c/Users/mari/Library/Mobile%20Documents/iCloud%7Emd%7Eobsidian/Documents/iCloud-Obsidian/UNFRAME/50_Assets/90_Inbox/CleanShot%202026-11-03%20at%2000.51.34.png?1793634737892)\n2. 求められた権限を確認し、Appleのアプリ用パスワードを接続フォームへ入力する。\n3. 対象と期間を指定して、メール検索や予定確認を頼む。\n4. 元のメールや予定と結果を照合し、更新する場合は日時・対象を確認する。\n\niCloud MailとiCloud Calendarは別々に接続します。メール側はiCloudのメールアドレス、予定側はApple Accountの主要メールアドレスを使うため、同じとは限りません。\n\n### 利用条件と注意点\n\n対象プランはChatGPTの全プラン、対応はWeb・デスクトップ・iOSと案内されています。地域やワークスペース設定などによる利用可否は、自分の環境で確認してください。Androidへの提供は今回の案内では確認できません。\n\n通常のAppleパスワードは使わず、アプリ用パスワードも会話欄へ貼らないことが大切です。必要なサービスだけを接続し、予定の変更は元のカレンダーでも確認しましょう。",
    "sources": [
      {
        "label": "OpenAI：ChatGPT release notes（2026年10月27日）",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "OpenAI：Connecting and managing app accounts in ChatGPT",
        "url": "https://help.openai.com/en/articles/20001494-connecting-and-managing-app-accounts-in-chatgpt"
      },
      {
        "label": "OpenAI：Connected apps in ChatGPT",
        "url": "https://help.openai.com/en/articles/11487775-connected-apps-in-chatgpt"
      }
    ]
  },
  {
    "id": "2026-10-29-oracle-ai-workspace-chatgpt",
    "date": "2026.10.29",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "Oracleの業務データをChatGPTへ。AI Workspace構想",
    "excerpt": "OpenAIとOracleが、Oracleの業務アプリやデータをChatGPTにつなぐ「Oracle AI Workspace」の構想を発表しました。財務・購買・計画の情報を横断し、権限と承認の範囲で業務を進める設計です。",
    "content": "OpenAIとOracleは2026年10月27日、Oracleの業務アプリやデータをChatGPTで扱うための「Oracle AI Workspace」を発表しました。Oracleは現在この仕組みを開発しており、プラグインを通じて、必要な情報の検索から承認済みの業務フローまでを一つの会話で進める構想です。\n\n### 財務・購買・計画を一つの会話で横断\n\n想定例は、コストの調査、購買判断の背景確認、月末締めまでに残っている作業の把握です。財務、購買、計画の各アプリに分散した情報をChatGPT上でまとめることで、Oracleの画面やデータに詳しくない担当者でも、必要な情報へたどり着きやすくすることを目指しています。\n\nOpenAIの公式パートナーページには、NetSuite、QuickStart、NetSuite Finance Analyst、Oracle Analyticsなどのプラグインが案内されています。使う場合は、まず自社で承認された対象プラグインと接続範囲を確認し、達成したい仕事を具体的に伝えます。結果は出典、数値、対象期間を人が確認し、承認された操作だけを実行します。\n\n### 利用条件と社内権限を先に確認\n\nOracle AI Workspaceは発表時点で開発中と説明されています。利用できるプラグイン、対象プラン、地域、提供時期は、組織やサービスごとに異なる可能性があります。OpenAIは、各組織の権限と承認に従ってアクセスを管理する設計だと説明しています。\n\n業務データをつなぐ前に、閲覧できる範囲、個人情報や機密情報の扱い、誰が最終承認するかを決めておきましょう。AIの回答だけで経理処理や購買判断を確定せず、元データと社内ルールを人が照合することが重要です。",
    "sources": [
      {
        "label": "OpenAI：OpenAI expands partnership with Oracle to bring its apps to ChatGPT",
        "url": "https://openai.com/index/oracle-apps-in-chatgpt/"
      },
      {
        "label": "OpenAI：OpenAI and Oracle partnership",
        "url": "https://openai.com/business/partners/oracle/"
      }
    ]
  },
  {
    "id": "2026-10-29-human-first-workflow-design",
    "date": "2026.10.29",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "「AIに何ができるか」より、人がやる仕事を先に決める",
    "excerpt": "業務改善を「AIに何をさせるか」から始めると、今の手順へAIを足すだけになりがちです。業務を細かく可視化し、人が担う判断・確認・対話を先に決める考え方を紹介します。",
    "content": "業務にAIを取り入れるとき、どの作業から試せばよいでしょうか。打ち合わせで受けた変更希望を、次の担当者に引き継ぐ場面を例に考えます。\n\nまず、誰が議事録を作り、どこへ保存し、誰に通知するのかを書き出します。続いて、誰が変更内容を確認し、図面へ反映するのかを書き添えます。\n\n### 人が担う仕事を先に残す\n\n次に考えるのは、AIへ任せる作業ではなく、人が外れてはいけない仕事です。たとえば、お客様との対話、変更内容の最終確認、発注の承認などは、人が責任を持つ部分として残します。その上で、記録の整理、通知、転記、確認用一覧の作成などをAIで仕組み化します。\n\n進め方は、次の4段階です。\n\n1. 業務の流れを細かく書き出す\n2. 人が担う判断・対話・承認を決める\n3. それ以外から小さくAIで試す\n4. 実際の結果を人が確認して直す\n\n個人情報や機密情報を扱う場合は、使用するサービス、入力できる情報、保存先、最終確認者を社内ルールとして決めてから試しましょう。",
    "sources": [
      {
        "label": "OpenAI：From experiments to deployments",
        "url": "https://cdn.openai.com/business-guides-and-resources/from-experiments-to-deployments_whitepaper_11-25.pdf"
      },
      {
        "label": "OpenAI：How enterprises are scaling AI",
        "url": "https://openai.com/business/guides-and-resources/how-enterprises-are-scaling-ai/"
      }
    ]
  },
  {
    "id": "2026-10-29-ai-adoption-four-stages",
    "date": "2026.10.29",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "AIを入れても会社が変わらない理由。定着は4段階で考える",
    "excerpt": "社員がChatGPTを使っていても、会社全体の業務改善につながるとは限りません。AI活用の現在地を4段階で捉え、最初の一業務を選んで試し、共有するまでの進め方を整理します。",
    "content": "「ChatGPTを契約したのに、使う人が増えない」「一部の社員だけが便利に使っている」。企業のAI活用では、ツールを導入したことと、仕事の進め方が変わったことを分けて考える必要があります。\n\n独自に、会社のAI定着を次の4段階に整理しています。\n\n1. まだ使っていない、または検索の代わりに試している\n2. 一部の社員が個別に使っている\n3. 議事録や経理など、特定の業務で使っている\n4. 社内ルールを整え、活用例を共有しながら全社で使っている\n\n大切なのは、いきなり4段階目を目指すことではありません。まず現在地を確認し、繰り返し発生する仕事の中から一つを選びます。元になる資料があり、担当者が結果を確認できる業務なら、小さく試しやすくなります。\n\n### 定着へ進む3つの動き\n\n最初の業務を決めたら、実際の仕事で試し、人が内容を確認します。うまくいった指示や手順は、個人のチャットに閉じ込めず、チームで共有します。この「選ぶ→試す→確認する→共有する」の繰り返しが、個人利用を会社の力へ変えていきます。\n\nOpenAIの企業向けガイドでも、目的をそろえること、社員が実務で試せる環境を作ること、成功例を共有すること、ガバナンスを整えることが、組織的なAI活用の要素として示されています。\n\n利用回数だけで定着を判断せず、誰が結果を確認するか、どの情報を入力してよいか、どこへ相談するかまで決めておくことが重要です。\nまた、AIを使う上での会社でのルールを策定することも大切です。",
    "sources": [
      {
        "label": "OpenAI：Staying Ahead in the Age of AI—A Leadership Guide",
        "url": "https://openai.com/business/guides-and-resources/staying-ahead-in-the-age-of-ai/"
      },
      {
        "label": "OpenAI：How enterprises are scaling AI",
        "url": "https://openai.com/business/guides-and-resources/how-enterprises-are-scaling-ai/"
      }
    ]
  },
  {
    "id": "2026-10-28-gpt-6-1-terra-work-codex",
    "date": "2026.10.28",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "GPT-6.1 Terra登場。画面を見ながら仕事を進めるモデル",
    "excerpt": "OpenAIがGPT-6.1 Terraを発表しました。画面や資料を読み取り、フォーム入力や動画編集などのパソコン作業を進めることに重点を置いたモデルです。ChatGPTの通常チャットではなく、ChatGPT WorkとCodexで提供されます。",
    "content": "OpenAIは2026年10月26日、GPT-6.1 Terraを発表しました。細かな画面理解とパソコン操作、自然な文章作成を組み合わせた、仕事向けの高速・高効率モデルです。\n\n### 画面を理解して、次の操作まで進める\n\nGPT-6.1 Terraは、提案書の下書き、技術図面の読み取り、フォーム入力、動画編集など、画面を見ながら複数の手順を進める作業を想定しています。たとえば請求書の内容を読み取り、会計ソフトへ入力するといった、件数の多い定型業務にも使いやすいとOpenAIは説明しています。\n\nOpenAIの社内評価では、旧GPT-5.6 Terraより視覚理解、パソコン操作、事実性、コーディングが改善したとされています。一方、最も複雑なコーディング作業では、GPT-6.1 SolやGPT-6 Astraの方が適している場合があります。\n\n### 使い方は「渡す→任せる→確認する」\n\nChatGPT WorkまたはCodexでGPT-6.1 Terraを選び、対象の画面、資料、ファイルと、達成したい目的を伝えます。作業範囲と完了条件を具体的にすると、途中の判断がぶれにくくなります。結果が出たら、入力内容、数値、宛先、公開範囲を人が確認してから確定します。\n\n利用例は、提案書の整形、図面やフォームの確認、動画の場面整理、請求書の読み取りなどです。繰り返し作業を任せつつ、判断が必要な箇所を人へ戻す使い方が向いています。\n\n### 対象はWorkとCodex。通常チャットとは別\n\nGPT-6.1 Terraは、Plus、Pro、Enterprise、Eduユーザー向けにChatGPT WorkとCodexで提供されています。通常のChatGPTチャット用モデルとしての提供ではありません。ワークスペースの設定によって表示されない場合もあるため、モデル選択画面で確認してください。\n\nパソコン操作を伴うAIは、意図と違う場所へ入力する可能性があります。個人情報や機密情報を含む作業ではアクセス範囲を絞り、送信、公開、削除、決済などの重要操作は必ず人が最終確認しましょう。",
    "sources": [
      {
        "label": "OpenAI：GPT-6.1 Terra",
        "url": "https://openai.com/index/introducing-gpt-6-1-terra/"
      },
      {
        "label": "OpenAI：ChatGPTリリースノート",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "2026-10-27-goodnotes-handwriting-ai",
    "date": "2026.10.27",
    "category": "other-ai",
    "product": "Goodnotes",
    "title": "【イベントレポート】Goodnotesで考えた、AI時代に「手で考える」ということ",
    "excerpt": "Goodnotesのメディアイベントに参加しました。AIがすぐに答えを返してくれる時代に、手書きは思考を深め、他者との納得感をつくり、最後の判断を人に戻すための時間になる。当日、私が特に印象に残ったことをまとめます。",
    "content": "2026年10月27日、東京・代官山で開かれたGoodnotesのメディアイベント「AI時代、いい仕事は手から生まれる。― Where thinking by hand meets AI ―」に招待いただきました。\n\nAIを毎日のように使っている私にとって、今回のテーマはとても身近なものでした。便利になればなるほど、自分で考える前にAIへ聞いてしまう。そのとき、私たちは何を手放しているのか。会場での話を聞きながら、改めて考えさせられました。\n\nGoodnotesの調査では、仕事で生成AIを利用する612人のうち51.0%が、「AIに聞かないと、自分では考え始められなくなった」と「よく感じる」または「ときどき感じる」と回答しています。20代では、その割合が60.9%でした。\n\n![記事内の説明画像](/ai-journal/assets/2026-10-27-goodnotes-handwriting-ai-01.png)\n\n*出典：Goodnotes「AI時代の思考力／創造力 実態調査レポート」p.6（生成AI利用者 n=612、20代 n=138）。自己申告による回答。提供：Goodnotes。*\n\n### AIで広げ、手書きで絞り、最後は人が決める\n\n私がいちばん印象に残ったのは、「AIで広げ、手書きで絞り込み、最後は人が決める」という考え方です。\n\nAIは、短い時間でたくさんの案を出すことが得意です。でも、企業のビジョンや求める人材像のように、正解が一つではないテーマでは、きれいな文章を並べるだけでは、どこか上滑りしてしまうことがあります。そこで、出てきた案にみんなで手書きし、線を引き、言葉を足しながら「やっぱりこれだよね」と決めていく。その過程に、納得感が生まれるという話でした。\n\n私はここに、AI時代の大切な分担があると感じました。AIへ判断を預けるのではなく、考える材料を増やすところはAIに任せ、意味を選ぶところは人が担う。手書きは、その切り替えを助ける方法になりそうです。\n\n### 手書きは、考えを身体へ戻す「手仕事」\n\nもう一つ心に残ったのは、手書きを料理と同じ「手仕事」と捉える話です。AIには身体がありません。人が手を動かし、途中で立ち止まり、書き直す行為には、一直線ではない思考が生まれる余白があります。\n\n情報を残すだけなら、デジタルで一元管理した方が便利です。一方で、誰かに動いてもらいたい場面では、データだけでなく感情や関係性も必要になります。Q&Aで紹介された「情報はデジタルで残し、行動を促すときは一人ひとりに手書きのメモを見せる」という使い分けにも、とても納得しました。\n\n### 調査結果から見えた「手書き→AI」の可能性\n\nGoodnotesの調査では、独創的なアイデアにたどり着いた場面で使った手段は、手書き48.6%、生成AI39.0%でした。\n\n![記事内の説明画像](/ai-journal/assets/2026-10-27-goodnotes-handwriting-ai-02.png)\n\n*出典：Goodnotes「AI時代の思考力／創造力 実態調査レポート」p.8（独創的なアイデアにたどり着いた経験がある人 n=972、複数回答）。提供：Goodnotes。*\n\nまた、手書きとAIの両方を使った人のうち、「まず手書き、その後AI」の人は、独創的なアイデアへ「よくたどり着く」と答えた割合が42.9%。逆の順の18.0%と比べ、約2.4倍でした。\n\n![記事内の説明画像](/ai-journal/assets/2026-10-27-goodnotes-handwriting-ai-03.png)\n\n*出典：Goodnotes「AI時代の思考力／創造力 実態調査レポート」p.11（生成AIと手書きの両方を使っていた人 n=183。内訳：まず手書き→その後AI n=63、まずAI→その後手書き n=61）。「行き来しながら深める」「順序を決めず使い分ける」は回答者数が少ないため参考値。提供：Goodnotes。*\n\nこれは自己申告による調査であり、手書きが創造性を高める因果関係を証明するものではありません。ただ、AIへすぐ聞く前に、まだ言葉になっていない考えを一度自分の手で外へ出してみる。そんな小さな習慣を試す根拠にはなりそうです。\n\n### 順番は一つではない。目的に合わせて往復する\n\n配布資料では「手書きで広げる→AIで検索・整理→AIで発展させる」という流れが提案されていました。一方、トークセッションでは「AIで広げる→手書きで絞る→人が決める」という使い方も紹介されました。\n\n大切なのは、どちらか一つを正解にすることではないと思います。白紙から自分の感覚を探したいときは、まず手で書く。選択肢を増やしたいときはAIに広げてもらう。そして、最後は自分で選び直す。手書きとAIを行き来することが、これからの考え方になるのかもしれません。\n\nGoodnotes AIには、手書き文字、PDF、画像、図表を横断して検索・質問する機能のほか、手書き文字のテキスト変換、対応する音声の文字起こしと要約、手書き数式の認識と計算、メモから画像や図解を作る機能があります。使える機能はプランや環境で異なるため、利用前に確認が必要です。\n\nAIを使うことと、自分で考えることは対立しません。今回のイベントを通して私が感じたのは、手書きは懐かしい方法ではなく、AIへ渡しすぎた思考を自分へ戻すためのインターフェースになり得る、ということでした。",
    "sources": [
      {
        "label": "Goodnotes：AI時代の思考力、手書きを交えた創造力実態調査",
        "url": "https://www.goodnotes.com/jp/survey-based-white-paper"
      },
      {
        "label": "Goodnotes AI",
        "url": "https://jp.goodnotes.com/ai"
      },
      {
        "label": "Goodnotes AIガイド",
        "url": "https://support.goodnotes.com/hc/ja/articles/10779112528399-Goodnotes-AI%E3%82%AC%E3%82%A4%E3%83%89"
      },
      {
        "label": "Goodnotes AI よくある質問",
        "url": "https://support.goodnotes.com/hc/ja/articles/7444477153295-Goodnotes-AI-%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E8%B3%AA%E5%95%8F"
      }
    ]
  },
  {
    "id": "2026-10-27-chatgpt-ads-89-countries",
    "date": "2026.10.27",
    "category": "chatgpt",
    "product": "ChatGPT Ads",
    "title": "ChatGPT広告が世界89か国へ拡大。広告主は10万社超に",
    "excerpt": "ChatGPT広告が26か国追加され、世界89か国へ拡大。広告主は10万社を超えました。広告はFree・Goだけに表示され、回答とは分離されます。",
    "content": "OpenAIは2026年10月21日、ChatGPT Adsの提供地域を26か国追加し、世界89か国へ拡大したと発表しました。開始から約8か月で、10万を超える広告主がキャンペーンを実施したとしています。\n\n広告主は対象地域で、提携する技術パートナーまたはAds Managerから広告を出稿できます。たとえば地域のサービスやEC商品を、利用者が会話で選択肢を比較・検討している場面に届ける活用が考えられます。利用する場合は、①Ads Managerを開く、②自社の地域で利用できるか確認する、③キャンペーン内容を設定する、④公開前に内容を確認し、公開後の結果を測定する、という順で進めます。\n\n利用者側で広告が表示されるのはFreeとGoです。Plus、Pro、Enterpriseは広告なしのままです。OpenAIは、広告を回答とは明確に分離し、広告が回答内容へ影響しないこと、会話を広告主へ開示せず、顧客データを販売しないことを説明しています。\n\n今回の公式発表は追加26か国の全一覧を掲載しておらず、日本での利用可否も本文では明示していません。出稿前にAds Managerの画面で、自社の国・地域、利用できる機能、料金や審査条件を確認してください。\n\n日本で開始の際の記事、使い方はこちら。\n[日本でも利用可能に。ChatGPT Ads Managerで広告を始める｜mari｜仕事に役立つAI Journal](https://note.com/mari6456/n/nced4d88b5226)",
    "sources": [
      {
        "label": "ChatGPT Ads expands to 26 new countries as over 100,000 advertisers have used the platform｜OpenAI",
        "url": "https://openai.com/index/chatgpt-ads-expands-26-new-countries/"
      }
    ]
  },
  {
    "id": "2026-10-26-openai-models-google-cloud",
    "date": "2026.10.26",
    "category": "chatgpt",
    "product": "OpenAI models on Google Cloud",
    "title": "OpenAIモデルをGoogle Cloudで選べるように",
    "excerpt": "OpenAIのGPT-6 Astra、GPT-6.1 Sol、GPT-6 LunaとCodexのワークフローが、Google CloudのModel Gardenから利用できるようになります。まずは一部企業向けのプライベートプレビューです。",
    "content": "OpenAIとGoogle Cloudは2026年10月21日、OpenAIのモデルとCodexのエージェント型ワークフローをGoogle Cloudの「Model Garden」へ提供すると発表しました。企業は、普段使うGoogle Cloudの環境からOpenAIモデルを選び、アクセス管理、監査、データガバナンスと組み合わせて業務アプリやAIエージェントを構築できます。\n\nGoogle Cloud側では、GPT-6 Astra、GPT-6.1 Sol、GPT-6 Lunaを一部の企業顧客向けにプライベートプレビューとして提供開始。Google Cloud Marketplace経由で購入でき、既存のGoogle Cloud利用契約へまとめられる点も案内されています。ChatGPTへGoogle Cloudが追加されたという話ではなく、企業や開発者がクラウド上でAIシステムを作るための選択肢です。\n\n一般提供は今後数週間で予定されています。現時点では誰でもすぐ使える機能ではなく、利用可否、価格、地域、契約条件は組織ごとに確認が必要です。機密情報を扱う場合は、管理者が権限、保存、監査、データ境界を設定し、出力も人が確認しましょう。",
    "sources": [
      {
        "label": "OpenAI models are coming to Google Cloud｜OpenAI",
        "url": "https://openai.com/index/openai-models-google-cloud/"
      },
      {
        "label": "Google Cloud brings OpenAI models to customers｜Google Cloud",
        "url": "https://cloud.google.com/blog/products/ai-machine-learning/google-cloud-brings-openai-models-to-customers"
      },
      {
        "label": "Google CloudがOpenAIモデルを提供開始｜Google Cloud公式ブログ日本語版",
        "url": "https://cloud.google.com/blog/ja/products/ai-machine-learning/google-cloud-brings-openai-models-to-customers"
      }
    ]
  },
  {
    "id": "2026-10-25-openai-decisions-api",
    "date": "2026.10.25",
    "category": "chatgpt",
    "product": "Decisions API",
    "title": "OpenAI Decisions APIでAIアプリの判断を高速化",
    "excerpt": "OpenAIのDecisions APIが一般提供されました。AIアプリの「分類する・振り分ける・次の操作を選ぶ」といった答えが限定された判断を、確率・選択・スコアで高速に返します。",
    "content": "OpenAIは2026年10月22日、Decisions APIの一般提供を開始しました。AIアプリやエージェントが繰り返す「問い合わせをどこへ振り分けるか」「画像に損傷があるか」「次に続行・再試行・確認のどれを選ぶか」といった、答えの範囲が決まった小さな判断に特化したAPIです。GPT-6 Lunaを基盤とし、文章・画像・JSONを材料に、確率・選択・スコアのいずれかを返します。\n\nこれはChatGPTのモデル選択画面でLunaを選んで使う機能ではありません。開発者がアプリから専用の `/v1/decisions` を呼び出し、リクエスト内で `gpt-6-luna` を指定して組み込みます。通常のChatGPTやResponses APIが、内容に応じて自動でDecisions APIへ切り替わるわけではありません。一度組み込めば、利用者がモデルを選ばなくても、設計した場面でアプリ側から自動実行できます。\n\n1回のリクエストで最大400問を扱え、同じ文脈を再利用するプロンプトキャッシュや、GPT-Liveとの連携にも対応しました。たとえば、問い合わせの担当部署分け、商品画像の状態判定、音声案内で確認質問を挟むかどうかの選択などに使えます。\n\n### 大切な注意点\n\nDecisions APIは、自由な文章を作る用途ではなく、あらかじめ答えを限定できる判断向けです。OpenAIは高速化を案内していますが、実際の速度や精度は入力・地域・実装で変わります。重要な契約、採用、医療、安全に関わる判断を自動確定せず、人の確認や低信頼時の保留ルールを設けてください。送信する個人情報や機密情報も必要最小限にし、データ管理条件を確認しましょう。",
    "sources": [
      {
        "label": "Build more responsive apps with the Decisions API｜OpenAI",
        "url": "https://openai.com/index/decisions-api/"
      }
    ]
  },
  {
    "id": "2026-10-24-chatgpt-locked-chats",
    "date": "2026.10.24",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "ChatGPTの会話をロックして履歴・検索から隠す",
    "excerpt": "ChatGPTに「ロックされたチャット」が登場しました。選んだ会話を通常の履歴や検索から隠し、4桁のPINまたは対応端末の認証で開けます。",
    "content": "OpenAIは2026年10月20日、ChatGPTに「ロックされたチャット」を追加しました。選んだ会話を保存したまま、通常のチャット履歴、ピン留め、検索から隠し、4桁のアカウントPINや対応端末の端末認証で開ける機能です。画面共有の前に個人的な相談を隠したい時や、共有端末で企画メモを見られにくくしたい時など、プライバシーを保ちたい場面に役立ちます。\n\n### 使い方\n\n1. 対象の会話で「•••」を開く\n2. 「チャットをロック」を選び、もう一度確認する\n3. 初回は4桁のPINを作成し、以後はPINまたは対応端末の認証で開く\n4. 開く時は「Projects」から「Locked chats」を選ぶ\n\n対応状況は段階展開中です。OpenAIのヘルプではFree、Go、Plus、Pro、Business、Enterprise、Eduが対象で、Web、iOS、Android、新しいmacOS・Windows版ChatGPTアプリで利用できます。項目が表示されない場合は、まだアカウントへ届いていない可能性があります。\n\nただし、Codexの会話（クラウドCodexを含む）、ローカルのWork会話、定期タスクやバックグラウンドタスクに関連する会話などは対象外です。対象外の会話では、機能がアカウントへ提供済みでも「チャットをロック」は表示されません。\n\nまだ私のアカウントでも実装されておらず、対象アカウントや対象チャットなど色々とルールがあるので、実装されたら、ぜひ試してみてください。\n\n### 大切な注意点\n\nロックは会話を通常の一覧から隠す機能で、エンドツーエンド暗号化や別の暗号化保管庫を作る機能ではありません。保存期間や「すべての人のためにモデルを改善する」の設定も変わりません。特に、忘れたPINをリセットすると、ロック中の会話、その中だけに保存されたメモリ、保護されたファイルなどが完全に削除され、復元できません。PINは安全な方法で管理し、共有リンクがある会話はリンクを別途削除してください。",
    "sources": [
      {
        "label": "Using locked chats in ChatGPT｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/20001411-using-locked-chats-in-chatgpt"
      },
      {
        "label": "ChatGPT release notes｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "2026-10-23-codex-php-version-checker",
    "date": "2026.10.23",
    "category": "chatgpt",
    "product": "Codex",
    "title": "CodexでPHPサイトの更新要否を確認",
    "excerpt": "OpenAIが、PHPサイトのバージョンを確認するCodexスキルを公開しました。URLだけ、またはサーバー上のPHP情報から、更新が必要な可能性を調べられます。",
    "content": "OpenAIは2026年10月21日、PHPの重大な脆弱性への対応を公表し、サイト運営者が影響を確認できる「PHP Version Checker」をCodexスキルとして公開しました。OpenAIによると、脆弱性はGPT-5.6 Solを使った調査で発見され、PHPの保守チームが修正とリリースを主導しました。\n\nこのスキルは、サーバーへ入れる場合はローカルのPHPバージョンを、URLしか分からない場合はWeb応答ヘッダーを調べます。自社サイト、制作会社の保守案件、複数サイトの棚卸しに使えます。\n\n### 使い方\n\nOpenAI公式の[PHP Version Checker公開ページ](https://github.com/openai/php2shell-checker)から導入でき、Codexのチャットで使います。\n\n**① スキルをインストールする**\n\nCodexの入力欄に、次の文をコピーして送ります。URL用とサーバー用の2つのスキルを導入する指示です。\n\n```text\n$skill-installer install both skills from https://github.com/openai/php2shell-checker\n```\n\n**② 調べたいサイトを指定する**\n\nインストール後、次の文の `https://example.com` を自分が管理するサイトのURLに置き換えて送ります。\n\n```text\n$phpcheck-url check https://example.com\n```\n\nサーバーへ直接アクセスできる環境では、サーバー用のスキルも使えます。次の文は「サイトで使っているPHPのバージョンを確認して」という指示です。\n\n```text\n$phpcheck-server check the PHP version serving my site\n```\n\n**③ 結果を確認する**\n\n結果は「OK」「POTENTIALLY VULNERABLE（脆弱性の影響を受ける可能性あり）」「UNKNOWN」の3種類です。ただし、UNKNOWNは安全を意味しません。ヘッダーでPHP情報が隠れている場合などは判定できません。また、OKも修正済みを独自に証明するものではないため、アップデート前のバックアップ、互換性確認、公式情報との照合を省かないことが重要です。",
    "sources": [
      {
        "label": "Patch the Planet：重大な脆弱性への対応｜OpenAI",
        "url": "https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/"
      },
      {
        "label": "PHP Version Checker｜OpenAI GitHub",
        "url": "https://github.com/openai/php2shell-checker"
      }
    ]
  },
  {
    "id": "2026-10-22-chatgpt-sites-no-fixed-count-limit",
    "date": "2026.10.22",
    "category": "chatgpt",
    "product": "ChatGPT Sites",
    "title": "ChatGPT Sitesの作成数に固定上限なし",
    "excerpt": "ChatGPT Plus・Proでは、ChatGPT Sitesを作成できる数の固定上限がなくなりました。ただし、利用量とストレージの共有上限は残るため、「完全に無制限」になったわけではありません。",
    "content": "OpenAIは2026年10月15日、ChatGPT Plus・Proで作成できる「ChatGPT Sites」の数について、固定上限をなくしたと案内しました。Sitesは、ChatGPT上でWebサイトや軽量アプリを作成し、プレビュー、公開、共有まで進められる機能です。今回変わったのは作成数の固定上限であり、Sites自体は以前から利用できました。\n\n対象はChatGPT Plus・Proと、対応するBusiness・Enterpriseワークスペースです。ただし、Plus・Proで固定上限がなくなっても、利用量とストレージの共有上限は継続します。新しいSiteを作れない場合は、Sites内に表示される制限メッセージを確認してください。構築・編集はCodexの利用量に含まれます。また、公開前には機密情報、第三者コンテンツ、フォームで取得する個人情報、公開範囲を必ず確認しましょう。",
    "sources": [
      {
        "label": "ChatGPT release notes｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Creating and using ChatGPT Sites｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites"
      }
    ]
  },
  {
    "id": "2026-10-21-codex-composer-predictions",
    "date": "2026.10.21",
    "category": "chatgpt",
    "product": "Codex",
    "title": "Codexの次メッセージ予測を使う",
    "excerpt": "Codexに、会話の流れから次のメッセージを提案する「Composer predictions」がベータで追加されました。Tabで入力欄に反映し、内容を確認・編集してから送信できます。",
    "content": "OpenAIは2026年10月9日、Codexデスクトップアプリに「Composer predictions」をベータで追加しました。Codexの応答後、現在のスレッドの会話をもとに次のメッセージ候補が入力欄へ表示されます。候補はTabキーで取り込めますが、自動送信はされません。自分で確認・編集してから送信します。\n\n試すときは、\n①Codexアプリを最新版にする\n②対応モデルで会話する\n③提案が表示されたらTabを押す\n④内容を確認・編集して送信する、の4段階です。\n追加調査を頼む、表現の修正を依頼する、次の作業へ進む、といった会話の続きに使えます。\n\n対象は18歳以上の個人向けChatGPT Proユーザーで、対応モデルはGPT-6 AstraとGPT-6.1 Solです。候補は毎回表示されるとは限らず、入力中の文章を1語ずつ補完する機能でもありません。予測は現在のスレッド内の文脈を使い、メモリや接続アプリを独自に検索しません。ベータ期間中、候補生成はCodexの利用枠やクレジットを消費しませんが、送信したメッセージには通常の利用条件が適用されます。意図と違う提案は使わず、自分の指示として適切か確認しましょう。",
    "sources": [
      {
        "label": "Composer predictions in Codex｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/20001601-composer-predictions-in-codex"
      },
      {
        "label": "ChatGPT release notes｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "2026-10-20-chatgptのセキュリティ履歴",
    "date": "2026.10.20",
    "category": "chatgpt",
    "product": "ChatGPT",
    "title": "見覚えのないログインを確認。ChatGPTのセキュリティ履歴",
    "excerpt": "ChatGPTへ仕事の相談や資料の下書きを任せる機会が増えるほど、アカウントに「いつ、どこから、どの端末で」アクセスがあったかを確認できることが大切になります。OpenAIは2026年9月25日、ChatGPTへ「セキュリティ履歴」を追加しました。最近のログイン・ログアウト、パスワード変更、MFA（多要素認証）、パスキ",
    "content": "ChatGPTへ仕事の相談や資料の下書きを任せる機会が増えるほど、アカウントに「いつ、どこから、どの端末で」アクセスがあったかを確認できることが大切になります。OpenAIは2026年9月25日、ChatGPTへ「セキュリティ履歴」を追加しました。最近のログイン・ログアウト、パスワード変更、MFA（多要素認証）、パスキー、その他のセキュリティ設定の変更を一覧で確認でき、各イベントには時刻、場所、端末の詳細が表示されます。\n\n### まずは4段階で確認\n\nWeb版ChatGPTで、次の順に開きます。\n\n1. 設定を開く\n2. 「セキュリティとログイン」を選ぶ\n3. 「セキュリティ履歴」を開く\n4. イベントの種類、時刻、場所、端末を見比べる\n\n新しい端末でログインした後、MFAやパスキーを変更した後、身に覚えのない通知が届いた時などに、アカウントの動きを振り返れます。仕事用のChatGPTでは、定期的な確認項目として運用に組み込むと、異変へ早く気づくきっかけになります。\n\n### 1件の表示だけで断定しない\n\n場所や端末の情報は概算だったり、表示されなかったりする場合があります。見覚えのない場所が表示されても、1件だけで不正アクセスと断定せず、自分が利用した時刻、端末、通信環境と照合してください。\n\n心当たりのない操作を見つけた場合は、パスワードを使っているなら変更し、アクティブなセッションを確認して不要な端末からログアウトします。APIを利用している場合は、APIキーと利用状況も確認します。MFAを有効にしても既存のログインは自動では解除されないため、疑わしい時はセッション管理も一緒に行うことが重要です。\n\n### AI活用とアカウント管理はセット\n\n便利な機能を増やすことだけがAI活用ではありません。日々の業務データを扱うなら、誰がアクセスできる状態かを確認し、不要なセッションを残さないことも実務の一部です。履歴の表示内容を過信せず、重要な判断は自社の管理記録や端末情報とも照合しましょう。",
    "sources": [
      {
        "label": "ChatGPT Release Notes｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Keeping your OpenAI account secure｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/8304786-keeping-your-openai-account-secure"
      },
      {
        "label": "Managing active sessions in ChatGPT｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/20001257-managing-active-sessions-in-chatgpt/"
      }
    ]
  },
  {
    "id": "2026-10-19-chatgpt-slides-collaboration",
    "date": "2026.10.19",
    "category": "chatgpt",
    "product": "ChatGPT Slides",
    "title": "ChatGPT Slidesで資料づくりを共同編集",
    "excerpt": "ChatGPTでプレゼン資料を作ることは以前から可能でした。今回のChatGPT Slidesでは、Space上で同じ資料を直接編集し、チームとリアルタイムで共同編集・コメント・発表まで進められます。更新の中心は、作成後もChatGPT内で資料を仕上げられることです。",
    "content": "ChatGPTでプレゼン資料を作ること自体は、以前からできました。従来もWorkへ資料作成を頼んだり、PowerPoint内のChatGPTアドインでスライドを作成・修正したりできました。OpenAIが2026年10月16日に発表した「ChatGPT Slides」の主な更新点は、Space上で同じ資料を直接編集し、チームとリアルタイムで共同編集できることです。\n\n文章、画像、図形、表、グラフを自分で直し、選択した要素の修正をChatGPTへ頼めます。編集権限を持つメンバーは同じ資料を同時に編集し、コメントやメンションで相談できます。たとえば、研修資料の説明文を担当者が直しながら、別のメンバーがグラフを確認し、AIへ文章の短縮を頼む、といった進め方ができます。\n\n使い方は、\n①Workで、Spaceにプレゼンを作るよう頼む、またはSpaceの「作成」からSlideを選ぶ\n②参考資料やテンプレートを追加する、\n③文章・図・グラフを直接編集する、\n④チームへ共有し、コメントや共同編集で仕上げる、の4段階です。\n\n![記事内の説明画像](/ai-journal/assets/2026-10-19-chatgpt-slides-collaboration-01.png)\nChatGPT内でそのまま発表でき、Web版ではPowerPoint、PDF、Google Slidesへ書き出せます。既にPowerPointなどで共同編集している人にとっては、AIへの修正依頼と資料の編集・確認を一か所で進められる点が変化です。\n\n対象はSpaceを利用できるPro、Business、Enterpriseで段階提供中です。Windowsの一部環境では共同編集SlidesではなくPowerPointファイルとして扱われます。生成された文章、数字、図表、レイアウトは、共有・発表前に原資料と照合しましょう。",
    "sources": [
      {
        "label": "ChatGPT release notes｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Creating and collaborating on slides in ChatGPT｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/20001605-creating-and-collaborating-on-slides-in-chatgpt"
      }
    ]
  },
  {
    "id": "2026-10-17-chatgpt-voice-japanese-voices",
    "date": "2026.10.17",
    "category": "chatgpt",
    "product": "ChatGPT Voice",
    "title": "日本語ボイス「ひまり」「りんどう」が追加。ChatGPT Voiceがより自然に",
    "excerpt": "ChatGPT VoiceにGPT-Live-1.1と日本語向けの新しい声「Himari（ひまり）」「Rindō（りんどう）」が追加され、設定から好みの声を選べるようになりました。",
    "content": "OpenAIは2026年10月15日、ChatGPT Voiceへ「GPT-Live-1.1」と軽量版の「GPT-Live-1.1 Quip」を順次提供し、日本語向けの声として「Himari（ひまり）」と「Rindō（りんどう）」を追加しました。言語ごとのアクセントがより自然になり、検索中の案内にも複数の短い表現が使われます。\n\n使い方は、\n①ChatGPTの設定を開く、\n②「Voice（音声）」を選ぶ、\n③声の一覧から「ひまり（女性）」または「りんどう（男性）」を選ぶ、\n④会話を始めて聞き比べる、の4段階です。発音練習、移動中の情報確認、話しながらのアイデア整理など、画面を見続けにくい場面で使えます。\n![記事内の説明画像](/ai-journal/assets/2026-10-17-chatgpt-voice-japanese-voices-01.png)\n\n利用できる声は地域・アカウント・プラン・ワークスペース設定・アプリのバージョンなどで異なり、すぐに表示されない場合があります。LiveはWeb、iOS、AndroidのVoice in Chatで利用できますが、動画や画面共有には対応していません。必要な場合は、対象ユーザーがモバイルアプリのAdvancedを使います。\n\n現状は、ブラウザ版で使用することができます。\nデスクトップ版では、まだ未実装です。\nちなみに、日本語だけでなく、さまざまな言語が追加されています。\n\n![記事内の説明画像](/ai-journal/assets/2026-10-17-chatgpt-voice-japanese-voices-02.png)\n\nVoiceは聞き間違いや事実誤認をすることがあります。日付、時刻、場所、業務上の重要事項は文字表示や一次情報でも確認しましょう。会話後の文字起こしも逐語記録ではないため、正式な議事録として使う場合は原音や記録と照合することが大切です。",
    "sources": [
      {
        "label": "ChatGPT release notes｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "ChatGPT Voice｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/20001274-chatgpt-voice"
      }
    ]
  },
  {
    "id": "2026-10-16-chatgpt-for-word",
    "date": "2026.10.16",
    "category": "chatgpt",
    "product": "ChatGPT for Word",
    "title": "Wordを離れず下書き・要約・推敲。ChatGPT for Word",
    "excerpt": "ChatGPT for Wordは、Microsoft Wordのサイドバーで、開いている文書の下書き、要約、推敲、見出しや書式の調整を手伝う公式アドインです。",
    "content": "OpenAIは2026年9月17日、Microsoft Word内でChatGPTを使える「ChatGPT for Word」を発表しました。Freeを含むすべてのChatGPTプランで利用でき、Wordのサイドバーから、開いている文書について質問したり、選択した文章を書き直したり、メモから初稿を作ったりできます。\n\n使い方は、\n①Microsoft MarketplaceからChatGPTアドインを入れる\n[Microsoft Marketplace](https://marketplace.microsoft.com/ja-jp/)\n[ChatGPT \\| Microsoft Marketplace](https://marketplace.microsoft.com/ja-jp/product/WA200010215)\n②WordのリボンからChatGPTを開いてサインインする\n③文書全体または修正したい範囲を指定する、\n④提案内容を確認して反映する、の4段階です。メモから提案書を作る、長い資料を要約する、用語の不統一を見つける、といった作業をWordから離れず進められます。\n\n組織のMicrosoft 365では、管理者がアドインを許可していないと表示されない場合があります。また、開いている文書は扱えますが、パソコン内の別ファイルを自動で参照することはできません。必要な情報はプロンプトへ貼り付けます。\n\n複雑な表・グラフ・書式は手直しが必要になる場合があります。ChatGPTが事実や数字を誤ったり、残したい表現を変えたりする可能性もあるため、重要な文書はコピーを保存し、事実、数値、引用、変更箇所を確認してから共有しましょう。アドイン内の会話は通常のChatGPT履歴とは別で、メモリやスキルも引き継がれません。",
    "sources": [
      {
        "label": "ChatGPT for Word｜OpenAI Help Center",
        "url": "https://help.openai.com/ja-jp/articles/20001526-chatgpt-for-word"
      },
      {
        "label": "ChatGPT release notes｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ]
  },
  {
    "id": "2026-10-15-chatgpt-security-history",
    "date": "2026.10.15",
    "category": "chatgpt",
    "product": "ChatGPT Security history",
    "title": "見覚えのないログインを確認。ChatGPTのセキュリティ履歴",
    "excerpt": "ChatGPTの「セキュリティ履歴」では、OpenAIアカウントへのログイン・ログアウトやMFA、パスキーなどの変更履歴を確認できます。",
    "content": "OpenAIは2026年9月25日、ChatGPTに「セキュリティ履歴」を追加しました。OpenAIアカウントで最近起きたログイン・ログアウト、パスワード変更、MFA（多要素認証）、パスキー、その他のセキュリティ設定の変更を確認できます。イベントには時刻、場所、端末の詳細が表示されます。\n\n確認方法はWeb版ChatGPTで、\n①設定を開く\n②「セキュリティとログイン」を選ぶ\n③「セキュリティ履歴」を開く\n![記事内の説明画像](/ai-journal/assets/2026-10-15-chatgpt-security-history-01.png)\n④イベントの種類、時刻、場所、端末を見比べる、の4段階です。新しい端末でのログイン後、MFAやパスキーを変更した後、身に覚えのない通知が届いた時などに、アカウントの動きを振り返れます。\n![記事内の説明画像](/ai-journal/assets/2026-10-15-chatgpt-security-history-02.png)\n\nただし、場所や端末の情報は概算だったり、表示されなかったりする場合があります。1件の表示だけで不正アクセスと断定せず、自分の利用時間や端末と照合してください。\n\n心当たりのない操作を見つけた場合は、パスワードを使っているなら変更し、アクティブなセッションを確認して不要な端末からログアウトします。APIを利用している場合は、APIキーと利用状況も確認します。MFAを有効にするだけでは既存のログインは解除されないため、疑わしい時はセッション管理も一緒に行うことが重要です。",
    "sources": [
      {
        "label": "ChatGPT Release Notes｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      },
      {
        "label": "Keeping your OpenAI account secure｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/8304786-keeping-your-openai-account-secure"
      },
      {
        "label": "Managing active sessions in ChatGPT｜OpenAI Help Center",
        "url": "https://help.openai.com/en/articles/20001257-managing-active-sessions-in-chatgpt/"
      }
    ]
  },
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
    "content": "OpenAIは2026年10月2日、米国のChatGPT Free・Goユーザーにも「Finances」の提供を拡大しました。Web・iOS・Androidで利用でき、Plus・Proを含む対象ユーザーは、Plaid経由で金融口座を接続し、支出、請求、サブスクリプション、資産状況、投資などを一か所で確認できます。\n\nたとえば「今月は何に多く使った？」「契約中のサブスクは？」「次の支払いは？」と質問すると、接続したデータをもとに整理できます。\n\n2026年10月5日時点では米国向けで、日本での提供は案内されていません。\n\n### 便利だからこそ考えたいリスク\n\nまず、Financesは金融機関から共有されたデータと同期時点をもとに整理します。未取得の口座や取引、反映待ちがあれば表示が不完全になり、振替、カード支払い、返金、保留中の取引などを支出として重複計上する場合もあります。AIの分類や説明を、そのまま正しい明細だと思い込まないことが大切です。\n\n次に、支出、資産、請求、投資、信用情報が一か所へ集まるため、便利になるほど扱う情報の機微性も高くなります。必要な口座だけを接続し、カード番号、CVV・CVC、暗証番号などを会話やファイルへ直接入力しないようにします。\n\n接続解除後も、すべてが即時に消えるわけではありません。OpenAIとPlaidの接続データは30日以内に削除されますが、過去の会話とFinancial memoriesは別途削除が必要です。\n\n### 私の考え\n\n今後、日本に導入されるまでに考えておきたいのはリスクです。ChatGPTが勝手に口座の中を見られるようになるのではないか、自分が意図していない情報が意図と異なる形で見えるようになるのではないか、という不安も出てきます。見やすく整理された結果を「正しい判断」だと過信することはとっても危険です。\nChatGPTは送金、支払い、取引、口座設定の変更はできず、金融・税務・法務の専門家でもありません。まずは確認と整理に限定し、重要な判断前には金融機関の明細や専門家でも確認する。接続する口座を最小限にする。この二つを基本にすると、便利さと安全性のバランスを取りやすくなります。",
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
