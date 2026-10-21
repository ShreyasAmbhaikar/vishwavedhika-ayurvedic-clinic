import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Applebot",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "CCBot",
          "Meta-ExternalAgent",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://vishwavedhikaayurveda.com/sitemap.xml",
    host: "https://vishwavedhikaayurveda.com",
  };
}
