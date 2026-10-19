import { MetadataRoute } from "next";
import { servicesData } from "@/data/servicesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vishwavedhikaayurveda.com";
  const lastModified = new Date();

  // Core Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/treatment-gallery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Dynamic Service Pages
  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(servicesData).map(
    (slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    })
  );

  return [...staticRoutes, ...serviceRoutes];
}
