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
 */
function parseCSV(csvText: string): NewsItem[] {
  const lines = csvText.split("\n");
  
  // ヘッダー行をスキップ
  const dataLines = lines.slice(1).filter((line) => line.trim() !== "");

  return dataLines
    .map((line, index) => {
      const columns = parseCSVLine(line);
      
      const [date, category, title, excerpt, content, image, status] = columns;

      // IDを生成（日付とインデックスから）
      const id = `${date.replace(/\./g, "-")}-${index}`;

      return {
        id,
        date: date || "",
        category: (category as NewsItem["category"]) || "info",
        title: title || "",
        excerpt: excerpt || "",
        content: content || "",
        image: image || undefined,
        status: status || "",
      };
    })
    .filter((item) => item.status === "公開"); // 「公開」のみ表示
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
