import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { programs } from "@/content/programs";
import { knowledge } from "@/content/knowledge";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/training", "/consulting", "/organizations", "/knowledge", "/contact", "/privacy", "/terms"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, priority: p === "" ? 1 : 0.7 })),
    ...programs.map((p) => ({ url: `${site.url}/training/${p.slug}`, priority: 0.6 })),
    ...knowledge.map((k) => ({ url: `${site.url}/knowledge/${k.slug}`, lastModified: k.date, priority: 0.5 })),
  ];
}
