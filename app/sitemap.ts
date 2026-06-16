import type { MetadataRoute } from "next"

const SITE_URL = "https://heetviradiya.codes"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/portfolio", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/resume", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/stack", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
  ]

  return routes.map((route) => ({
    url: `${SITE_URL}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
