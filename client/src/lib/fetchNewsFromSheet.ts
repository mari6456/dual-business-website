import type { NewsItem } from "./newsData";

// GoogleスプレッドシートのID
const SHEET_ID = "1hqEwB9pXiUU5O0_CyaXS2YufMl272HJB7NcYKujVK1c";

// CSV形式でスプレッドシートのデータを取得するURL
const SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;

/**
 * GoogleスプレッドシートからニュースデータをCSV形式で取得
 */
export async function fetchNewsFromSheet(): Promise<NewsItem[]> {
  try {
    const response = await fetch(SHEET_CSV_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch sheet: ${response.statusText}`);
    }

    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    console.error("Error fetching news from sheet:", error);
    // エラー時は空配列を返す
    return [];
  }
}

/**
 * CSV文字列をNewsItem配列にパース
 * 列順: ステータス(A), 公開状態(B), Manus公開状態(C), 公開開始日時(D),
 *       カテゴリ(E), タイトル(F), 概要(G), 本文(H), 画像URL(I)
 */
function parseCSV(csvText: string): NewsItem[] {
  const lines = csvText.split("\n");
  
  // ヘッダー行をスキップ
  const dataLines = lines.slice(1).filter((line) => line.trim() !== "");

  return dataLines
    .map((line, index) => {
      const columns = parseCSVLine(line);
      
      // 列インデックス: 0=ステータス, 1=公開状態, 2=Manus公開状態, 3=日付,
      //                  4=カテゴリ, 5=タイトル, 6=概要, 7=本文, 8=画像URL
      const status = columns[1] || "";   // 公開状態（B列）
      const date = columns[3] || "";     // 公開開始日時（D列）
      const category = columns[4] || ""; // カテゴリ（E列）
      const title = columns[5] || "";    // タイトル（F列）
      const excerpt = columns[6] || "";  // 概要（G列）
      const content = columns[7] || "";  // 本文（H列）
      const image = columns[8] || "";    // 画像URL（I列）

      // IDを生成（日付とインデックスから）
      const id = `${date.replace(/\./g, "-")}-${index}`;

      return {
        id,
        date: date,
        category: (category as NewsItem["category"]) || "info",
        title: title,
        excerpt: excerpt,
        content: content,
        image: image || undefined,
        status: status,
      };
    })
    .filter((item) => item.status === "公開") // 「公開」のみ表示
    .sort((a, b) => {
      // 日付降順（新しい順）
      return b.date.localeCompare(a.date);
    });
}

/**
 * CSV行をパース（カンマ区切り、ダブルクォート対応）
 */
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        // エスケープされたダブルクォート
        current += '"';
        i++; // 次の文字をスキップ
      } else {
        // クォートの開始/終了
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      // フィールドの区切り
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  // 最後のフィールドを追加
  result.push(current);

  return result;
}
