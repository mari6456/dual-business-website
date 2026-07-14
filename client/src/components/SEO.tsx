import { useEffect } from "react";
import { useLocation } from "wouter";
import { DEFAULT_OG_IMAGE, absoluteUrl, getJsonLdForPath, getSeoForPath } from "@/lib/seo";

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);
  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
}

export default function SEO() {
  const [location] = useLocation();

  useEffect(() => {
    const seo = getSeoForPath(location);
    const canonicalUrl = absoluteUrl(seo.path);
    const image = seo.image ?? DEFAULT_OG_IMAGE;

    document.title = seo.title;

    upsertMeta('meta[name="description"]', { name: "description", content: seo.description });
    upsertMeta('meta[name="author"]', { name: "author", content: "株式会社UNFRAME" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: seo.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: seo.description });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: seo.type ?? "website" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: image });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "株式会社UNFRAME" });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: "ja_JP" });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: seo.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: seo.description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });
    upsertLink('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl });

    document.head.querySelectorAll('script[data-seo-json-ld="true"]').forEach((element) => element.remove());
    getJsonLdForPath(location).forEach((jsonLd) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoJsonLd = "true";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    });
  }, [location]);

  return null;
}
