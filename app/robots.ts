import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/LP", "/internal-audit"],
      },
    ],
    sitemap: "https://www.mzbpo.com/sitemap.xml",
  }
}
