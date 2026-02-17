import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mzbpo.com"

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-02-17"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/meeting`,
      lastModified: new Date("2026-02-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2025-10-15"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/services/bookkeeping-accounting`,
      lastModified: new Date("2026-02-17"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/payroll-processing`,
      lastModified: new Date("2026-02-17"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/internal-audit-compliance`,
      lastModified: new Date("2026-02-17"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/back-office-support`,
      lastModified: new Date("2026-02-17"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/erp-implementation`,
      lastModified: new Date("2026-02-17"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Blog hub
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-02-17"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Existing blog posts (randomized dates)
    {
      url: `${baseUrl}/blog/in-house-vs-outsourced-accounting`,
      lastModified: new Date("2025-10-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/what-is-bkr-international`,
      lastModified: new Date("2025-11-03"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/month-end-close-checklist`,
      lastModified: new Date("2025-11-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/outsourced-bookkeeping-cost`,
      lastModified: new Date("2025-12-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/internal-controls-small-business`,
      lastModified: new Date("2025-12-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // New blog posts - Country guides
    {
      url: `${baseUrl}/blog/outsourced-accounting-usa`,
      lastModified: new Date("2026-01-05"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/outsourced-bookkeeping-uk`,
      lastModified: new Date("2026-01-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/bookkeeping-outsourcing-australia`,
      lastModified: new Date("2026-01-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/outsourced-accounting-canada`,
      lastModified: new Date("2026-01-30"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // New blog posts - Industry guides
    {
      url: `${baseUrl}/blog/bookkeeping-for-ecommerce`,
      lastModified: new Date("2026-02-03"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/accounting-for-saas-companies`,
      lastModified: new Date("2026-02-06"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/outsourced-accounting-law-firms`,
      lastModified: new Date("2026-02-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/accounting-for-startups`,
      lastModified: new Date("2026-02-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // New blog posts - Evergreen
    {
      url: `${baseUrl}/blog/gaap-vs-ifrs`,
      lastModified: new Date("2026-02-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/signs-to-outsource-accounting`,
      lastModified: new Date("2026-02-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
