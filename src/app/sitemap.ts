import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/collections/bukhari`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/collections/muslim`,
      lastModified: new Date(),
    },
    // Add more URLs as needed
  ]
}

