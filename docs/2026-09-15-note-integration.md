# UNFRAME × note 連携

更新日：2026-09-15

## 今回の反映

- noteプロフィール：河原田茉莉・株式会社UNFRAMEとの関係、13年以上・200商品超、HPリンクを掲載。プロフィールは各記事下にも表示。
- 固定の悩み別もくじ：元の本文と47件の埋め込みを維持し、末尾に著者紹介・化粧品事業への計測用リンクを追記。
- HP /cosmetics：記事カード3本とnote一覧へのリンク。
- HP /profile：実績表記とコラム欄へのリンク。
- HP /：代表紹介の実績表記を更新。
- 代表紹介の検索説明も更新。

## 掲載記事

1. [悩み別もくじ](https://note.com/skincarelove/n/nb431d47f7d93)
2. [スクワランの選び方](https://note.com/skincarelove/n/n97a22c26621f)
3. [エラスチンの働きと、化粧品に期待できること](https://note.com/skincarelove/n/ne193be74b4ec)

記事カードの紹介文はテーマを説明するもの。記事の研究・効果に関する記述全体の検証は今回の範囲外。

## 今後の記事末尾に使う文章

**化粧品の商品企画・開発について**
株式会社UNFRAMEの事業紹介・ご相談はこちら。

リンク先：
https://www.unframelife.com/cosmetics?utm_source=note&utm_medium=referral&utm_campaign=skincarelove&utm_content=ARTICLE_ID_footer

ARTICLE_IDを、そのnote記事のID（nから始まる文字列）に置き換える。
既存全記事の本文への一括追記や、自動投稿の設定変更は行っていない。共通プロフィールのHPリンクは各記事に反映済み。

## 計測

固定記事のリンクはutm_source=note、utm_medium=referral、utm_campaign=skincarelove、utm_content=nb431d47f7d93_footer。
プロフィールは140文字上限のため、通常のHP URLを使用。
HPにはGA4タグ G-8TXBVPD749 が既存設置されている。
GA4管理画面での実データ受信・問い合わせ完了イベントの確認は未実施。リンク設置を効果測定完了とは扱わない。

## 公開・検証

本番：https://www.unframelife.com/cosmetics#skincare-columns
Vercel：dpl_DPJBA1a4huXWZDCPorZcuvndfVwk / READY / production
型チェック・本番ビルド成功。既存の大きなJSチャンク警告あり。
noteプロフィール・固定記事は公開画面で反映確認。
HPのPC表示、代表紹介からコラムへの移動を確認。
問い合わせの実送信は行っていない。
