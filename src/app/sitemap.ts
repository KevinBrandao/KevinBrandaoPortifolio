import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/profile";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/sobre`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/projetos`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/curriculo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/contato`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    ...projects.map((p) => ({
      url: `${siteUrl}/projetos/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
