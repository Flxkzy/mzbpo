import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Accounting Insights and Best Practices",
  description:
    "Expert insights on outsourced accounting, bookkeeping best practices, internal audit, payroll, and financial management for growing businesses.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Accounting Insights and Best Practices | MZBPO",
    description:
      "Expert insights on outsourced accounting, bookkeeping best practices, internal audit, payroll, and financial management for growing businesses.",
    url: "https://www.mzbpo.com/blog",
  },
}

const featuredPost = {
  title: "10 Signs Your Business Should Outsource Accounting in 2026",
  excerpt:
    "Growing businesses reach a tipping point where DIY accounting becomes dangerous. Discover the key indicators that it's time to bring in professional help and how outsourcing can transform your financial operations.",
  href: "/blog/signs-to-outsource-accounting",
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
  category: "Strategy",
  date: "February 17, 2026",
  readTime: "11 min read",
}

const posts = [
  // New posts - Country Guides
  {
    title: "Outsourced Accounting Services in the USA: Complete Guide 2026",
    excerpt:
      "Everything US businesses need to know about outsourced accounting: costs, compliance, GAAP requirements, and how to choose the right provider.",
    href: "/blog/outsourced-accounting-usa",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    category: "Country Guide",
    date: "January 5, 2026",
    readTime: "14 min read",
  },
  {
    title: "Outsourced Bookkeeping Services in the UK: Pricing, Benefits & How to Choose",
    excerpt:
      "Navigate UK bookkeeping outsourcing with confidence. Covers MTD compliance, HMRC requirements, GBP pricing, and provider selection.",
    href: "/blog/outsourced-bookkeeping-uk",
    image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=600&h=400&fit=crop",
    category: "Country Guide",
    date: "January 14, 2026",
    readTime: "13 min read",
  },
  {
    title: "Bookkeeping Outsourcing for Australian Businesses: Complete Guide",
    excerpt:
      "A comprehensive guide for Australian businesses considering outsourced bookkeeping. Covers BAS, GST, superannuation, and ATO compliance.",
    href: "/blog/bookkeeping-outsourcing-australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&h=400&fit=crop",
    category: "Country Guide",
    date: "January 22, 2026",
    readTime: "12 min read",
  },
  {
    title: "How to Choose an Outsourced Accounting Firm in Canada",
    excerpt:
      "Navigate Canadian accounting outsourcing with CRA compliance, GST/HST filings, provincial differences, and bilingual considerations covered.",
    href: "/blog/outsourced-accounting-canada",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&h=400&fit=crop",
    category: "Country Guide",
    date: "January 30, 2026",
    readTime: "12 min read",
  },
  // New posts - Industry Guides
  {
    title: "Bookkeeping for Ecommerce: Managing Multi-Channel Finances",
    excerpt:
      "Master ecommerce accounting across Shopify, Amazon, and more. Covers inventory methods, sales tax nexus, and multi-channel reconciliation.",
    href: "/blog/bookkeeping-for-ecommerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    category: "Industry Guide",
    date: "February 3, 2026",
    readTime: "14 min read",
  },
  {
    title: "Accounting for SaaS Companies: Revenue Recognition & Key Metrics",
    excerpt:
      "Navigate ASC 606 revenue recognition, track the right SaaS metrics, and build investor-ready financial reporting for your software company.",
    href: "/blog/accounting-for-saas-companies",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Industry Guide",
    date: "February 6, 2026",
    readTime: "13 min read",
  },
  {
    title: "Outsourced Accounting for Law Firms: Trust Accounts & Compliance",
    excerpt:
      "Specialized accounting guidance for law firms covering IOLTA management, trust account compliance, and legal-specific financial reporting.",
    href: "/blog/outsourced-accounting-law-firms",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    category: "Industry Guide",
    date: "February 9, 2026",
    readTime: "12 min read",
  },
  {
    title: "Accounting for Startups: When to Hire vs Outsource Your Finances",
    excerpt:
      "From entity selection to investor-ready financials, learn what startups need at every stage and when outsourcing makes more sense than hiring.",
    href: "/blog/accounting-for-startups",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
    category: "Industry Guide",
    date: "February 12, 2026",
    readTime: "13 min read",
  },
  // New posts - Evergreen
  {
    title: "GAAP vs IFRS: Key Differences Every International Business Should Know",
    excerpt:
      "A comprehensive comparison of US GAAP and IFRS standards, covering revenue recognition, inventory, leases, and which countries use what.",
    href: "/blog/gaap-vs-ifrs",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop",
    category: "Accounting Standards",
    date: "February 14, 2026",
    readTime: "15 min read",
  },
  // Existing posts
  {
    title: "In-House vs Outsourced Accounting: Complete Cost Comparison",
    excerpt:
      "A detailed analysis comparing the true costs of building an in-house accounting team versus partnering with an outsourced provider.",
    href: "/blog/in-house-vs-outsourced-accounting",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
    category: "Accounting Insights",
    date: "October 15, 2025",
    readTime: "12 min read",
  },
  {
    title: "How Much Does Outsourced Bookkeeping Cost in 2026?",
    excerpt:
      "A complete breakdown of pricing models, typical cost ranges, and what factors affect your monthly fee. Includes ROI calculator.",
    href: "/blog/outsourced-bookkeeping-cost",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&h=400&fit=crop",
    category: "Pricing",
    date: "December 8, 2025",
    readTime: "10 min read",
  },
  {
    title: "What is BKR International? How Our Global Network Benefits Your Business",
    excerpt:
      "Discover how MZBPO's membership in one of the world's top 10 accounting associations translates into better standards and credibility.",
    href: "/blog/what-is-bkr-international",
    image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=600&h=400&fit=crop",
    category: "About MZBPO",
    date: "November 3, 2025",
    readTime: "8 min read",
  },
  {
    title: "Month-End Close Checklist: Best Practices for Accurate Reporting",
    excerpt:
      "A comprehensive 60+ item checklist to streamline your monthly close process, reduce errors, and deliver accurate financial statements on time.",
    href: "/blog/month-end-close-checklist",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Bookkeeping",
    date: "November 20, 2025",
    readTime: "15 min read",
  },
  {
    title: "Internal Controls for Small Business: A Fraud Prevention Guide",
    excerpt:
      "Essential internal controls every small business needs to prevent fraud, protect assets, and ensure accurate financial reporting.",
    href: "/blog/internal-controls-small-business",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    category: "Internal Audit",
    date: "December 22, 2025",
    readTime: "12 min read",
  },
  {
    title: "SAP Business One vs Odoo vs NetSuite: ERP Comparison for SMBs",
    excerpt:
      "Comparing the top ERP platforms for small and medium businesses. Features, pricing, and implementation considerations for 2026.",
    href: "/blog/erp-comparison-sap-odoo-netsuite",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "ERP",
    date: "February 19, 2026",
    readTime: "15 min read",
  },
  {
    title: "The True Cost of Payroll Errors (and How to Avoid Them)",
    excerpt:
      "Payroll mistakes cost more than you think. Learn the hidden costs, IRS penalties, and proven steps to prevent common payroll errors.",
    href: "/blog/payroll-errors-cost",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    category: "Payroll",
    date: "February 21, 2026",
    readTime: "7 min read",
  },
]

const categories = [
  { name: "All Posts", count: 18, active: true },
  { name: "Country Guide", count: 4 },
  { name: "Industry Guide", count: 4 },
  { name: "Accounting Standards", count: 1 },
  { name: "Accounting Insights", count: 1 },
  { name: "Strategy", count: 1 },
  { name: "Pricing", count: 1 },
  { name: "Bookkeeping", count: 1 },
  { name: "Internal Audit", count: 1 },
  { name: "About MZBPO", count: 1 },
  { name: "ERP", count: 1 },
  { name: "Payroll", count: 1 },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-navy">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative max-w-6xl mx-auto px-6 pt-32 md:pt-40 pb-16 md:pb-20">
            <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4" />
              <span>MZBPO Blog</span>
            </div>
            <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Accounting Insights for{" "}
              <span className="text-brand-teal">Growing Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-2xl">
              Expert guidance on outsourced accounting, bookkeeping best practices, internal audit,
              payroll, and financial management.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <Link
              href={featuredPost.href}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-teal text-brand-navy text-xs font-semibold px-3 py-1.5 rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-500 font-[var(--font-poppins)] mb-4">
                  <span className="text-brand-teal font-medium">{featuredPost.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-4 group-hover:text-brand-teal transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 font-[var(--font-poppins)] leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-brand-teal font-semibold font-[var(--font-poppins)] group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Categories and Posts */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  className={`px-4 py-2 rounded-full text-sm font-medium font-[var(--font-poppins)] transition-all ${
                    cat.active
                      ? "bg-brand-navy text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.name}
                  <span className="ml-2 text-xs opacity-60">({cat.count})</span>
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, idx) => (
                <Link
                  key={idx}
                  href={post.href}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-brand-navy text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-400 font-[var(--font-poppins)] mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-[var(--font-poppins)] mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="text-brand-teal text-sm font-semibold font-[var(--font-poppins)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-4">
              Get Accounting Insights Delivered
            </h2>
            <p className="text-gray-600 font-[var(--font-poppins)] mb-8">
              Subscribe to receive our latest articles on outsourced accounting, bookkeeping best
              practices, and financial management tips for growing businesses.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent font-[var(--font-poppins)]"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-brand-teal text-brand-navy font-semibold rounded-full hover:shadow-lg transition-all font-[var(--font-poppins)]"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-4 font-[var(--font-poppins)]">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
