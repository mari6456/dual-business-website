import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const defaultVault = "/Users/mari/Library/Mobile Documents/iCloud~md~obsidian/Documents/iCloud-Obsidian";
const vaultRoot = process.env.OBSIDIAN_VAULT_PATH || defaultVault;
const journalRoot = path.join(vaultRoot, "UNFRAME/20_AI_Journal/10_記事");
const aismileyRoot = path.join(vaultRoot, "UNFRAME/30_Projects/90_AiSmiley/10_ChatGPTニュース");
const outputFile = path.join(projectRoot, "client/src/lib/aiJournalData.ts");
const publicImageRoot = path.join(projectRoot, "client/public/ai-journal/assets");

const categoryMap = {
  chatgpt: "chatgpt",
  google: "google",
  "other-ai": "other-ai",
};

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { data: {}, body: markdown };
  const data = {};
  for (const line of match[1].split("\n")) {
    const field = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!field) continue;
    data[field[1]] = field[2].replace(/^['"]|['"]$/g, "").trim();
  }
  return { data, body: markdown.slice(match[0].length) };
}

function section(body, heading) {
  const marker = `## ${heading}`;
  const start = body.indexOf(marker);
  if (start === -1) return "";
  const contentStart = body.indexOf("\n", start + marker.length);
  if (contentStart === -1) return "";
  const nextHeading = body.indexOf("\n## ", contentStart + 1);
  return body.slice(contentStart + 1, nextHeading === -1 ? undefined : nextHeading).trim();
}

function resolveVaultImage(imageTarget) {
  const requested = imageTarget.trim();
  const direct = path.resolve(vaultRoot, requested);
  const vaultPrefix = `${path.resolve(vaultRoot)}${path.sep}`;
  if (direct.startsWith(vaultPrefix) && existsSync(direct)) return direct;

  // Obsidian allows filename-only embeds and resolves them anywhere in the Vault.
  // Mirror that behavior only when the filename identifies exactly one file.
  if (requested !== path.basename(requested)) return null;
  const matches = readdirSync(vaultRoot, { withFileTypes: true, recursive: true })
    .filter((entry) => entry.isFile() && entry.name === requested)
    .map((entry) => path.join(entry.parentPath, entry.name));
  if (matches.length > 1) {
    throw new Error(`HP本文内の画像名がVault内で重複しています: ${requested}`);
  }
  return matches[0] || null;
}

function publishInlineImages(markdown, slug) {
  let imageIndex = 0;
  return markdown.replace(/!\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_match, vaultRelativePath, label) => {
    const source = resolveVaultImage(vaultRelativePath);
    if (!source) {
      throw new Error(`HP本文内の画像が見つかりません: ${vaultRelativePath}`);
    }
    imageIndex += 1;
    const extension = path.extname(source).toLowerCase() || ".png";
    const fileName = `${slug}-${String(imageIndex).padStart(2, "0")}${extension}`;
    mkdirSync(publicImageRoot, { recursive: true });
    copyFileSync(source, path.join(publicImageRoot, fileName));
    const alt = label?.trim() || "記事内の説明画像";
    return `![${alt}](/ai-journal/assets/${fileName})`;
  }).trim();
}

function titleFrom(body, fallback) {
  return body.match(/^#\s+(.+)$/m)?.[1].trim() || fallback;
}

function slugFrom(file, value) {
  const raw = value || path.basename(file, ".md");
  return raw
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[^a-z0-9ぁ-んァ-ン一-龠ー]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 100);
}

function parseSources(text) {
  return [...text.matchAll(/^-\s*\[([^\]]+)\]\((https?:\/\/[^)]+)\)/gm)].map((match) => ({
    label: match[1].trim(),
    url: match[2].trim(),
  }));
}

function collectMarkdown(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true, recursive: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => path.join(entry.parentPath, entry.name));
}

const items = [];
for (const file of [...collectMarkdown(journalRoot), ...collectMarkdown(aismileyRoot)]) {
  const markdown = readFileSync(file, "utf8");
  if (!/^(?:> )?- \[[xX]\] (?:🌐 )?HP(?:で|へ)公開する\s*$/m.test(markdown)) continue;
  const { data, body } = parseFrontmatter(markdown);
  const category = categoryMap[data.news_category] || (file.startsWith(aismileyRoot) ? "chatgpt" : undefined);
  if (!category) throw new Error(`Invalid news_category in ${file}`);
  const slug = slugFrom(file, data.site_id);
  const rawDate = data.date || data.created || path.basename(file).match(/^\d{4}-\d{2}-\d{2}/)?.[0];
  const date = rawDate?.replaceAll("-", ".");
  const title = titleFrom(body, data.title);
  // 記事上部のcover_imageは渡さず、HP掲載本文の中へ明示した説明画像だけを公開する。
  const content = publishInlineImages(section(body, "HP掲載本文") || section(body, "本編記事"), slug);
  const excerpt = section(body, "要約") || content.split(/\n\s*\n/).find((block) => block && !block.startsWith("!") && !block.startsWith("#"))?.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").slice(0, 160);
  if (!slug || !date || !title || !excerpt || !content) {
    throw new Error(`Approved AI Journal note is missing required fields: ${file}`);
  }
  items.push({
    id: slug,
    date,
    category,
    product: data.product || (category === "chatgpt" ? "ChatGPT" : category === "google" ? "Google・Gemini" : "AIツール"),
    title,
    excerpt,
    content,
    sources: parseSources(section(body, "公式情報")),
  });
}

items.sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id));

const source = `export type AIJournalCategory = "chatgpt" | "google" | "other-ai";

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
export const aiJournalData: AIJournalItem[] = ${JSON.stringify(items, null, 2)};
`;

writeFileSync(outputFile, source);
console.log(JSON.stringify({ scannedRoot: journalRoot, publishedArticles: items.length, outputFile }, null, 2));
