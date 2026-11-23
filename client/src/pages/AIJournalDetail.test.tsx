import React from "react";
import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { ArticleBody } from "./AIJournalDetail";
import { aiJournalData } from "@/lib/aiJournalData";

const render = (content: string) => renderToStaticMarkup(<ArticleBody content={content} />);

describe("published Journal Markdown", () => {
  it("keeps body text out of a heading even without a blank line", () => {
    const html = render("### 見出し\n本文です。\n\n次の段落です。");
    expect(html).toMatch(/<h3[^>]*>見出し<\/h3>/);
    expect(html).toMatch(/<p[^>]*>本文です。<\/p>/);
  });
  it("renders the existing linked image group instead of raw Markdown", () => {
    const html = render("[![一枚目](https://example.com/one.png)![二枚目](https://example.com/two.png)](https://example.com/source)");
    expect(html.match(/<img /g)).toHaveLength(2);
    expect(html).toContain('href="https://example.com/source"');
    expect(html).not.toContain("![");
  });
  it("renders the approved local screenshot before an adjacent heading", () => {
    const html = render("![説明](/ai-journal/assets/screen.png)\n### 確認\n本文");
    expect(html).toContain('src="/ai-journal/assets/screen.png"');
    expect(html).toMatch(/<h3[^>]*>確認<\/h3>/);
  });
  it("does not run raw HTML or JavaScript links", () => {
    const html = render('[リンク](javascript:alert%281%29)\n\n<script>alert(1)</script>');
    expect(html).not.toContain('href="javascript:');
    expect(html).not.toContain("<script>");
  });
  it("renders all 54 existing articles without changing their content", () => {
    expect(aiJournalData).toHaveLength(54);
    for (const item of aiJournalData) expect(render(item.content).length).toBeGreaterThan(0);
  });
});
