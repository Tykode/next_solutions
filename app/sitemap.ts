import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://next-solutions.fr";

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/caisses", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/logiciels", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/tpe", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/balances", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/rendez-vous", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/rejoindre", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/cgu", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/cgv", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
