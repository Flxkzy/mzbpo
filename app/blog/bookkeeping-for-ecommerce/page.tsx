import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import {
  ArrowRight,
  Clock,
  Calendar,
  User,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  DollarSign,
  TrendingUp,
  Building2,
  ShoppingCart,
  Globe,
  Package,
  BarChart3,
  AlertTriangle,
  Calculator,
  RefreshCw,
  Layers,
  Receipt,
  Target,
  LineChart,
  Landmark,
  ArrowLeftRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Bookkeeping for Ecommerce: Managing Multi-Channel Finances | MZBPO",
  description:
    "Master ecommerce bookkeeping across Amazon, Shopify, eBay, and more. Learn inventory accounting methods, sales tax compliance, multi-channel reconciliation, and when to outsource.",
  alternates: { canonical: "/blog/bookkeeping-for-ecommerce" },
  openGraph: {
    title: "Bookkeeping for Ecommerce: Managing Multi-Channel Finances | MZBPO",
    description:
      "Master ecommerce bookkeeping across Amazon, Shopify, eBay, and more. Learn inventory accounting, sales tax compliance, and multi-channel reconciliation.",
    url: "https://www.mzbpo.com/blog/bookkeeping-for-ecommerce",
    type: "article",
    publishedTime: "2026-02-03T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Bookkeeping for Ecommerce - Managing Multi-Channel Finances",
      },
    ],
  },
}

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "ecommerce-challenges", title: "Ecommerce Accounting Challenges" },
  { id: "essential-tasks", title: "Essential Bookkeeping Tasks" },
  { id: "sales-tax-compliance", title: "Sales Tax Compliance" },
  { id: "multi-channel-reconciliation", title: "Multi-Channel Reconciliation" },
  { id: "inventory-methods", title: "Inventory Accounting Methods" },
  { id: "key-metrics", title: "Key Metrics to Track" },
  { id: "when-to-outsource", title: "When to Outsource" },
  { id: "conclusion", title: "Conclusion" },
]

const relatedPosts = [
  {
    title: "How Much Does Outsourced Bookkeeping Cost in 2026?",
    href: "/blog/outsourced-bookkeeping-cost",
    description: "Understand outsourced bookkeeping pricing models, cost ranges, and what factors affect your monthly fee.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=250&fit=crop",
  },
  {
    title: "Month-End Close Checklist: Best Practices",
    href: "/blog/month-end-close-checklist",
    description: "Streamline your monthly close process with this comprehensive guide.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
  {
    title: "In-House vs Outsourced Accounting: Complete Cost Comparison",
    href: "/blog/in-house-vs-outsourced-accounting",
    description: "Compare the true costs of in-house teams versus outsourcing.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
  },
]

const ecommerceChallenges = [
  {
    icon: Layers,
    title: "Multi-Channel Sales Tracking",
    description:
      "Selling on Amazon, Shopify, eBay, WooCommerce, and your own website means revenue flows in from multiple sources—each with different payout schedules, fee structures, and reporting formats.",
  },
  {
    icon: ArrowLeftRight,
    title: "Payment Gateway Reconciliation",
    description:
      "Stripe, PayPal, Amazon Pay, Square—each processor holds funds, charges fees, and deposits on different schedules. Reconciling them all is a daily puzzle.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Tracking inventory costs across suppliers, warehouses, and fulfillment centers while accounting for shrinkage, damage, and obsolescence requires constant attention.",
  },
  {
    icon: Landmark,
    title: "Sales Tax Nexus",
    description:
      "Economic nexus rules mean you may owe sales tax in dozens of states or countries where you have no physical presence—just enough sales volume to trigger obligations.",
  },
  {
    icon: RefreshCw,
    title: "Returns and Refunds",
    description:
      "Ecommerce return rates average 20-30%. Each return requires reversing revenue, restocking inventory, processing refund fees, and potentially writing off damaged goods.",
  },
  {
    icon: Globe,
    title: "Currency Conversion",
    description:
      "International sales introduce foreign exchange gains and losses, conversion fees, and the complexity of reporting in your home currency.",
  },
]

const inventoryMethods = [
  {
    method: "FIFO (First In, First Out)",
    description: "Oldest inventory costs are assigned to COGS first. Most common for ecommerce.",
    bestFor: "Perishable goods, products with rising costs, most ecommerce businesses",
    pros: ["Matches physical flow of goods", "Higher ending inventory value", "Accepted under both GAAP and IFRS"],
    cons: ["Higher taxable income in inflationary periods", "May not reflect actual costs paid"],
  },
  {
    method: "LIFO (Last In, First Out)",
    description: "Newest inventory costs are assigned to COGS first. Less common but can reduce taxes.",
    bestFor: "Non-perishable goods, businesses in inflationary environments (US only)",
    pros: ["Lower taxable income when costs rise", "Better matches current costs to revenue"],
    cons: ["Not allowed under IFRS", "Understates inventory value", "Requires LIFO reserve tracking"],
  },
  {
    method: "Weighted Average Cost",
    description: "Average cost of all units available is used for COGS. Simplest to maintain.",
    bestFor: "Large volumes of similar items, commodity products, businesses wanting simplicity",
    pros: ["Simple to calculate", "Smooths out price fluctuations", "Accepted under GAAP and IFRS"],
    cons: ["May not reflect actual costs", "Less precise for unique items", "Can mask cost trends"],
  },
]

export default function BlogPost() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <article>
          <header className="relative overflow-hidden bg-brand-navy">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            <div className="relative max-w-4xl mx-auto px-6 pt-32 md:pt-40 pb-16 md:pb-20">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-white/60 mb-8 font-[var(--font-poppins)]">
                <Link href="/" className="hover:text-brand-teal transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/blog" className="hover:text-brand-teal transition-colors">
                  Blog
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white/80">Bookkeeping for Ecommerce</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Industry Guide</span>
              </div>

              {/* Title */}
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Bookkeeping for{" "}
                <span className="text-brand-teal">Ecommerce</span>: Managing Multi-Channel Finances
              </h1>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                A comprehensive guide to managing finances across Amazon, Shopify, eBay, and beyond.
                Master inventory accounting, sales tax compliance, and multi-channel reconciliation
                for your online business.
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>MZBPO Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>February 3, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>14 min read</span>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative -mt-8 mb-12 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=820&fit=crop"
                  alt="Ecommerce bookkeeping and multi-channel finance management"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>

          {/* Content Layout */}
          <div className="max-w-7xl mx-auto px-6 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Table of Contents - Sidebar */}
              <aside className="lg:col-span-3">
                <div className="lg:sticky lg:top-32">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="font-[family-name:var(--font-syne)] text-sm font-bold text-brand-navy uppercase tracking-wider mb-4">
                      Table of Contents
                    </h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="block text-sm text-gray-600 hover:text-brand-teal transition-colors py-1 font-[var(--font-poppins)]"
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Quick CTA */}
                  <div className="mt-6 bg-brand-navy rounded-2xl p-6">
                    <p className="text-white font-[family-name:var(--font-syne)] font-bold mb-3">
                      Ecommerce Bookkeeping Help
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      Let our team handle your multi-channel bookkeeping so you can focus on growing sales.
                    </p>
                    <a
                      href="/meeting"
                      className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all"
                    >
                      Get a Free Consultation
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Quick Reference */}
                  <div className="mt-6 bg-brand-teal/10 rounded-2xl p-6 border border-brand-teal/20">
                    <h4 className="font-[family-name:var(--font-syne)] text-sm font-bold text-brand-navy mb-4">
                      Key Ecommerce Stats
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Avg. return rate</span>
                        <span className="font-semibold text-brand-navy">20-30%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sales tax states</span>
                        <span className="font-semibold text-brand-navy">45+ states</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Marketplace fees</span>
                        <span className="font-semibold text-brand-navy">8-20%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Payment delay</span>
                        <span className="font-semibold text-brand-navy">2-14 days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-9">
                <div className="prose prose-lg max-w-none font-[var(--font-poppins)]">
                  {/* Introduction */}
                  <section id="introduction" className="scroll-mt-32 mb-12">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Running an ecommerce business is exhilarating—until it comes time to reconcile
                      your books. Unlike a traditional brick-and-mortar store with a single POS system,
                      ecommerce sellers juggle multiple sales channels, payment processors, fulfillment
                      partners, and tax jurisdictions simultaneously. And every one of them generates
                      financial data that needs to be tracked, categorized, and reconciled.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Whether you sell on Amazon, Shopify, eBay, WooCommerce, or a combination of
                      platforms, your bookkeeping needs are fundamentally different from a service
                      business or local retailer. Inventory valuation, marketplace fees, payment
                      holds, multi-state sales tax obligations, international currency conversions,
                      and sky-high return rates create a web of complexity that can overwhelm even
                      experienced business owners.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The consequences of getting ecommerce bookkeeping wrong are severe: overpaying
                      taxes, understating profitability, running out of cash despite strong sales,
                      or—worst of all—facing penalties from tax authorities for non-compliance. A
                      2025 survey by the National Small Business Association found that 43% of
                      ecommerce businesses reported spending more than 80 hours per year on financial
                      compliance alone.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      This guide breaks down the unique challenges of ecommerce bookkeeping, the
                      essential tasks you need to perform, and how to build a financial foundation
                      that scales with your business. Whether you handle your own books or plan to
                      outsource, understanding these fundamentals is critical to making informed
                      decisions about your ecommerce finances.
                    </p>
                  </section>

                  {/* Key Stats Banner */}
                  <div className="bg-gradient-to-r from-brand-navy to-brand-navy/90 rounded-2xl p-8 my-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                          <ShoppingCart className="w-6 h-6 text-brand-teal" />
                        </div>
                        <div className="text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                          $6.3T
                        </div>
                        <div className="text-white/70 text-sm mt-1">
                          Global ecommerce sales in 2025
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                          <Layers className="w-6 h-6 text-brand-teal" />
                        </div>
                        <div className="text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                          73%
                        </div>
                        <div className="text-white/70 text-sm mt-1">
                          Sellers use 2+ sales channels
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                          <RefreshCw className="w-6 h-6 text-brand-teal" />
                        </div>
                        <div className="text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                          20-30%
                        </div>
                        <div className="text-white/70 text-sm mt-1">
                          Average ecommerce return rate
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                          <Landmark className="w-6 h-6 text-brand-teal" />
                        </div>
                        <div className="text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                          45+
                        </div>
                        <div className="text-white/70 text-sm mt-1">
                          US states with sales tax nexus
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ecommerce Accounting Challenges */}
                  <section id="ecommerce-challenges" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Ecommerce Accounting Challenges
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Ecommerce bookkeeping isn't just "regular bookkeeping with more transactions."
                      The fundamental nature of selling online introduces challenges that traditional
                      accounting frameworks weren't designed to handle. Here are the six biggest
                      obstacles ecommerce businesses face.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {ecommerceChallenges.map((challenge, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                              <challenge.icon className="w-6 h-6 text-brand-teal" />
                            </div>
                            <div>
                              <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                                {challenge.title}
                              </h3>
                              <p className="text-sm text-gray-600">{challenge.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                      <h3 className="font-[family-name:var(--font-syne)] font-bold text-amber-800 mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        The Compounding Problem
                      </h3>
                      <p className="text-amber-800 text-sm">
                        These challenges don't exist in isolation. A single international sale on
                        Amazon might involve currency conversion, marketplace fees, FBA fulfillment
                        charges, VAT obligations, and a potential return—all of which must be tracked
                        and reconciled. As your business grows, the complexity multiplies exponentially.
                        A seller processing 1,000 orders per month across three channels could easily
                        generate 5,000+ individual financial transactions to reconcile.
                      </p>
                    </div>
                  </section>

                  {/* Essential Bookkeeping Tasks */}
                  <section id="essential-tasks" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Essential Bookkeeping Tasks for Ecommerce
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      To keep your ecommerce finances accurate and actionable, these five bookkeeping
                      tasks must be performed consistently. Skipping any of them creates blind spots
                      that can lead to costly mistakes.
                    </p>

                    {/* Task 1: Daily Transaction Recording */}
                    <div className="mb-8">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                        <Receipt className="w-5 h-5 text-brand-teal" />
                        1. Daily Transaction Recording
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Every sale, refund, fee, and payout must be recorded promptly. In ecommerce,
                        "daily" isn't optional—falling even a few days behind can create an
                        insurmountable backlog that takes hours to untangle.
                      </p>
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-3">What to record daily:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {[
                            "Gross sales by channel",
                            "Marketplace fees and commissions",
                            "Shipping charges collected and paid",
                            "Payment processor fees",
                            "Refunds and chargebacks",
                            "Advertising spend (PPC, social ads)",
                            "Inventory purchases received",
                            "Fulfillment and warehousing costs",
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Task 2: Payment Processor Reconciliation */}
                    <div className="mb-8">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                        <ArrowLeftRight className="w-5 h-5 text-brand-teal" />
                        2. Payment Processor Reconciliation
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Each payment processor (Stripe, PayPal, Amazon Pay, Square) operates on its
                        own settlement schedule. What shows as a sale in your Shopify dashboard may
                        not appear in your bank account for 2-14 days. You need to reconcile the
                        gross sale, fees deducted, and net deposit for every payout.
                      </p>
                      <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
                        <table className="w-full text-sm">
                          <thead className="bg-brand-navy text-white">
                            <tr>
                              <th className="text-left p-4 font-semibold">Processor</th>
                              <th className="text-left p-4 font-semibold">Typical Fees</th>
                              <th className="text-left p-4 font-semibold">Payout Schedule</th>
                              <th className="text-left p-4 font-semibold">Key Notes</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            <tr className="bg-white">
                              <td className="p-4 font-medium text-brand-navy">Stripe</td>
                              <td className="p-4 text-gray-600">2.9% + $0.30</td>
                              <td className="p-4 text-gray-600">2 business days</td>
                              <td className="p-4 text-gray-600">Rolling reserve for new accounts</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="p-4 font-medium text-brand-navy">PayPal</td>
                              <td className="p-4 text-gray-600">2.89% + $0.49</td>
                              <td className="p-4 text-gray-600">Instant to 3 days</td>
                              <td className="p-4 text-gray-600">Holds on new/high-volume sellers</td>
                            </tr>
                            <tr className="bg-white">
                              <td className="p-4 font-medium text-brand-navy">Amazon Pay</td>
                              <td className="p-4 text-gray-600">2.9% + $0.30</td>
                              <td className="p-4 text-gray-600">3-5 business days</td>
                              <td className="p-4 text-gray-600">Reserve requirements may apply</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="p-4 font-medium text-brand-navy">Square</td>
                              <td className="p-4 text-gray-600">2.6% + $0.10</td>
                              <td className="p-4 text-gray-600">1-2 business days</td>
                              <td className="p-4 text-gray-600">Free next-day deposits available</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Task 3: Inventory Cost Tracking */}
                    <div className="mb-8">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                        <Package className="w-5 h-5 text-brand-teal" />
                        3. Inventory Cost Tracking
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Your inventory is likely your largest asset. Tracking its cost accurately
                        is essential for calculating gross profit, managing cash flow, and filing
                        accurate tax returns. You'll need to choose between FIFO, LIFO, or weighted
                        average costing (covered in detail below).
                      </p>
                      <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                        <p className="text-brand-navy font-semibold mb-2">Pro Tip: Landed Cost</p>
                        <p className="text-gray-600">
                          Don't track just the purchase price. Your true inventory cost (landed cost)
                          includes the product price, shipping from supplier, customs duties, import
                          taxes, insurance, and any preparation fees. Failing to include these costs
                          overstates your gross margin and leads to mispriced products.
                        </p>
                      </div>
                    </div>

                    {/* Task 4: COGS Calculation */}
                    <div className="mb-8">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-brand-teal" />
                        4. Cost of Goods Sold (COGS) Calculation
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        COGS is the cornerstone of ecommerce profitability analysis. It's calculated
                        as: Beginning Inventory + Purchases - Ending Inventory = COGS. For ecommerce,
                        COGS should include the product cost, inbound shipping, packaging materials,
                        and any direct labor involved in preparation.
                      </p>
                      <div className="bg-brand-navy rounded-2xl p-6 text-white">
                        <h4 className="font-[family-name:var(--font-syne)] font-bold mb-4">
                          COGS Calculation Example
                        </h4>
                        <div className="space-y-2 text-white/80 text-sm">
                          <div className="flex justify-between">
                            <span>Beginning Inventory (Jan 1)</span>
                            <span>$50,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>+ Purchases During Period</span>
                            <span>$120,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>+ Inbound Freight</span>
                            <span>$8,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>+ Customs & Duties</span>
                            <span>$4,500</span>
                          </div>
                          <div className="flex justify-between">
                            <span>= Goods Available for Sale</span>
                            <span>$182,500</span>
                          </div>
                          <div className="flex justify-between">
                            <span>- Ending Inventory (Jan 31)</span>
                            <span>($62,000)</span>
                          </div>
                          <div className="flex justify-between border-t border-white/20 pt-2 mt-2 font-bold">
                            <span>= Cost of Goods Sold</span>
                            <span className="text-brand-teal">$120,500</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Task 5: Marketplace Fee Tracking */}
                    <div className="mb-8">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-brand-teal" />
                        5. Marketplace Fee Tracking
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Marketplace fees are one of the most underestimated costs in ecommerce.
                        These fees can consume 15-45% of your gross revenue depending on the platform
                        and product category. Tracking them accurately is essential for understanding
                        true profitability by channel.
                      </p>
                      <div className="overflow-x-auto rounded-xl border border-gray-200">
                        <table className="w-full text-sm">
                          <thead className="bg-brand-navy text-white">
                            <tr>
                              <th className="text-left p-4 font-semibold">Marketplace</th>
                              <th className="text-left p-4 font-semibold">Referral Fee</th>
                              <th className="text-left p-4 font-semibold">Fulfillment Fee</th>
                              <th className="text-left p-4 font-semibold">Other Fees</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            <tr className="bg-white">
                              <td className="p-4 font-medium text-brand-navy">Amazon FBA</td>
                              <td className="p-4 text-gray-600">8-15% (category)</td>
                              <td className="p-4 text-gray-600">$3.22-$10+ per unit</td>
                              <td className="p-4 text-gray-600">Storage, removal, advertising</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="p-4 font-medium text-brand-navy">Shopify</td>
                              <td className="p-4 text-gray-600">0% (own store)</td>
                              <td className="p-4 text-gray-600">Self-managed</td>
                              <td className="p-4 text-gray-600">$39-$399/mo + payment fees</td>
                            </tr>
                            <tr className="bg-white">
                              <td className="p-4 font-medium text-brand-navy">eBay</td>
                              <td className="p-4 text-gray-600">10-15% (category)</td>
                              <td className="p-4 text-gray-600">Self-managed</td>
                              <td className="p-4 text-gray-600">Listing fees, promoted listings</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="p-4 font-medium text-brand-navy">Walmart</td>
                              <td className="p-4 text-gray-600">6-20% (category)</td>
                              <td className="p-4 text-gray-600">WFS available</td>
                              <td className="p-4 text-gray-600">No monthly subscription fee</td>
                            </tr>
                            <tr className="bg-white">
                              <td className="p-4 font-medium text-brand-navy">Etsy</td>
                              <td className="p-4 text-gray-600">6.5%</td>
                              <td className="p-4 text-gray-600">Self-managed</td>
                              <td className="p-4 text-gray-600">$0.20 listing + payment fees</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>

                  {/* Sales Tax Compliance */}
                  <section id="sales-tax-compliance" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Sales Tax Compliance for Ecommerce
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Since the 2018 South Dakota v. Wayfair Supreme Court decision, ecommerce
                      sellers can be required to collect sales tax in states where they have no
                      physical presence—just enough sales to trigger "economic nexus." This has
                      turned sales tax into one of the most complex aspects of ecommerce bookkeeping.
                    </p>

                    {/* Economic Nexus Thresholds Table */}
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">
                      US Economic Nexus Thresholds (Selected States)
                    </h3>
                    <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
                      <table className="w-full text-sm">
                        <thead className="bg-brand-navy text-white">
                          <tr>
                            <th className="text-left p-4 font-semibold">State</th>
                            <th className="text-left p-4 font-semibold">Revenue Threshold</th>
                            <th className="text-left p-4 font-semibold">Transaction Threshold</th>
                            <th className="text-left p-4 font-semibold">Notes</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          <tr className="bg-white">
                            <td className="p-4 font-medium text-brand-navy">California</td>
                            <td className="p-4 text-gray-600">$500,000</td>
                            <td className="p-4 text-gray-600">N/A</td>
                            <td className="p-4 text-gray-600">Revenue only threshold</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 font-medium text-brand-navy">Texas</td>
                            <td className="p-4 text-gray-600">$500,000</td>
                            <td className="p-4 text-gray-600">N/A</td>
                            <td className="p-4 text-gray-600">Revenue only threshold</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="p-4 font-medium text-brand-navy">New York</td>
                            <td className="p-4 text-gray-600">$500,000</td>
                            <td className="p-4 text-gray-600">100 transactions</td>
                            <td className="p-4 text-gray-600">Must meet both thresholds</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 font-medium text-brand-navy">Florida</td>
                            <td className="p-4 text-gray-600">$100,000</td>
                            <td className="p-4 text-gray-600">N/A</td>
                            <td className="p-4 text-gray-600">Revenue only threshold</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="p-4 font-medium text-brand-navy">Pennsylvania</td>
                            <td className="p-4 text-gray-600">$100,000</td>
                            <td className="p-4 text-gray-600">N/A</td>
                            <td className="p-4 text-gray-600">Revenue only threshold</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 font-medium text-brand-navy">Washington</td>
                            <td className="p-4 text-gray-600">$100,000</td>
                            <td className="p-4 text-gray-600">N/A</td>
                            <td className="p-4 text-gray-600">B&O tax also applies</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="p-4 font-medium text-brand-navy">Most Other States</td>
                            <td className="p-4 text-gray-600">$100,000</td>
                            <td className="p-4 text-gray-600">200 transactions</td>
                            <td className="p-4 text-gray-600">Either threshold triggers nexus</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* International Tax */}
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">
                      International Tax Obligations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                          <Globe className="w-5 h-5 text-brand-teal" />
                          EU VAT (Value Added Tax)
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          The EU requires VAT registration when selling to consumers. Since July 2021,
                          the One Stop Shop (OSS) simplifies filing across all EU member states.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>- EUR 10,000 threshold for cross-border sales</li>
                          <li>- VAT rates: 17-27% depending on country</li>
                          <li>- OSS for simplified multi-country filing</li>
                          <li>- Import One Stop Shop (IOSS) for goods under EUR 150</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                          <Globe className="w-5 h-5 text-brand-teal" />
                          Australia GST & Canada GST/HST
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Both countries require foreign sellers to collect tax when exceeding
                          thresholds for sales to local consumers.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>- Australia: 10% GST on AUD 75,000+ in sales</li>
                          <li>- Canada: 5% GST + provincial taxes (0-10%)</li>
                          <li>- Canada threshold: CAD 30,000 over 12 months</li>
                          <li>- Marketplace facilitator rules may apply</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">Sales Tax Automation</p>
                      <p className="text-gray-600">
                        With obligations in potentially dozens of jurisdictions, manual sales tax
                        management is impractical for growing ecommerce businesses. Tools like
                        TaxJar, Avalara, and Vertex integrate with major platforms to automatically
                        calculate, collect, and remit sales tax. Budget $50-$500/month depending on
                        your transaction volume. Your bookkeeper should reconcile these systems monthly
                        to ensure accuracy.
                      </p>
                    </div>
                  </section>

                  {/* Multi-Channel Revenue Reconciliation */}
                  <section id="multi-channel-reconciliation" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Multi-Channel Revenue Reconciliation
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      One of the most time-consuming aspects of ecommerce bookkeeping is reconciling
                      revenue across channels. Each platform reports differently, settles on different
                      schedules, and deducts different fees before depositing to your bank account.
                      Without a systematic reconciliation process, you'll never have an accurate
                      picture of your true revenue.
                    </p>

                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">
                      Channel Comparison: Revenue Flow
                    </h3>
                    <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
                      <table className="w-full text-sm">
                        <thead className="bg-brand-navy text-white">
                          <tr>
                            <th className="text-left p-4 font-semibold">Factor</th>
                            <th className="text-left p-4 font-semibold">Amazon FBA</th>
                            <th className="text-left p-4 font-semibold">Shopify</th>
                            <th className="text-left p-4 font-semibold">eBay</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          <tr className="bg-white">
                            <td className="p-4 font-medium text-brand-navy">Settlement</td>
                            <td className="p-4 text-gray-600">Every 14 days</td>
                            <td className="p-4 text-gray-600">2-3 business days</td>
                            <td className="p-4 text-gray-600">2-7 business days</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 font-medium text-brand-navy">Fee deduction</td>
                            <td className="p-4 text-gray-600">Pre-deposit</td>
                            <td className="p-4 text-gray-600">Per-transaction</td>
                            <td className="p-4 text-gray-600">Monthly invoice + per-txn</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="p-4 font-medium text-brand-navy">Refund handling</td>
                            <td className="p-4 text-gray-600">Deducted from next payout</td>
                            <td className="p-4 text-gray-600">Reversed per transaction</td>
                            <td className="p-4 text-gray-600">Deducted from payout</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 font-medium text-brand-navy">Sales tax</td>
                            <td className="p-4 text-gray-600">Marketplace collects</td>
                            <td className="p-4 text-gray-600">Seller responsible</td>
                            <td className="p-4 text-gray-600">Marketplace collects</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="p-4 font-medium text-brand-navy">Reporting</td>
                            <td className="p-4 text-gray-600">Settlement reports</td>
                            <td className="p-4 text-gray-600">Shopify analytics + Stripe</td>
                            <td className="p-4 text-gray-600">Seller Hub reports</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 font-medium text-brand-navy">Total fee impact</td>
                            <td className="p-4 text-gray-600">30-45% of sale price</td>
                            <td className="p-4 text-gray-600">3-5% (payment only)</td>
                            <td className="p-4 text-gray-600">13-18% of sale price</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-6">
                      <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">
                        The Reconciliation Process
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">
                        For each channel and each settlement period, follow this reconciliation flow:
                      </p>
                      <div className="space-y-3">
                        {[
                          "Start with gross sales reported by the platform for the period",
                          "Subtract marketplace fees, referral fees, and fulfillment fees",
                          "Subtract refunds and chargebacks processed during the period",
                          "Account for sales tax collected (should be a pass-through, not revenue)",
                          "Verify the net deposit matches your bank statement",
                          "Investigate and resolve any discrepancies before moving on",
                          "Record adjusting entries for timing differences between periods",
                        ].map((step, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                            <span className="w-6 h-6 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center flex-shrink-0 text-xs font-bold">
                              {idx + 1}
                            </span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                      <h4 className="font-[family-name:var(--font-syne)] font-bold text-amber-800 mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Common Reconciliation Pitfalls
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Recording gross deposits as revenue (ignoring fees deducted before deposit)",
                          "Counting sales tax collected as revenue instead of a liability",
                          "Failing to match refunds to original sale periods for accurate monthly reporting",
                          "Ignoring Amazon reimbursements for lost/damaged FBA inventory",
                          "Not accounting for payment processor holds and reserves",
                        ].map((pitfall, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-amber-800">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>{pitfall}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  {/* Inventory Accounting Methods */}
                  <section id="inventory-methods" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Inventory Accounting Methods
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The inventory costing method you choose directly impacts your reported profits,
                      tax liability, and balance sheet. For ecommerce businesses, this decision is
                      especially important because inventory is typically your largest asset and COGS
                      is your largest expense. Here's how the three main methods compare.
                    </p>

                    <div className="space-y-6 mb-8">
                      {inventoryMethods.map((method, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                        >
                          <div className="p-6 md:p-8">
                            <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-2">
                              {method.method}
                            </h3>
                            <p className="text-gray-600 mb-3">{method.description}</p>
                            <p className="text-sm mb-4">
                              <strong className="text-brand-navy">Best for:</strong>{" "}
                              <span className="text-gray-600">{method.bestFor}</span>
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                                <h4 className="font-semibold text-green-800 text-sm mb-2">Advantages</h4>
                                <ul className="text-sm text-green-700 space-y-1">
                                  {method.pros.map((pro, pIdx) => (
                                    <li key={pIdx} className="flex items-start gap-2">
                                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                      <span>{pro}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                                <h4 className="font-semibold text-red-800 text-sm mb-2">Disadvantages</h4>
                                <ul className="text-sm text-red-700 space-y-1">
                                  {method.cons.map((con, cIdx) => (
                                    <li key={cIdx} className="flex items-start gap-2">
                                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                      <span>{con}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* FIFO vs LIFO vs Weighted Average Example */}
                    <div className="bg-brand-navy rounded-2xl p-8 text-white mb-6">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-4">
                        Impact Comparison: 100 Units Sold
                      </h3>
                      <p className="text-white/70 text-sm mb-6">
                        Assume you purchased inventory in three batches: 50 units at $10, 50 units at $12,
                        and 50 units at $14. You sell 100 units at $25 each.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="text-white/60 text-sm uppercase tracking-wider mb-4">
                            FIFO
                          </h4>
                          <ul className="space-y-2 text-white/80 text-sm">
                            <li className="flex justify-between">
                              <span>Revenue</span>
                              <span>$2,500</span>
                            </li>
                            <li className="flex justify-between">
                              <span>COGS (50x$10 + 50x$12)</span>
                              <span>($1,100)</span>
                            </li>
                            <li className="flex justify-between border-t border-white/20 pt-2 mt-2 font-bold">
                              <span>Gross Profit</span>
                              <span className="text-brand-teal">$1,400</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white/60 text-sm uppercase tracking-wider mb-4">
                            LIFO
                          </h4>
                          <ul className="space-y-2 text-white/80 text-sm">
                            <li className="flex justify-between">
                              <span>Revenue</span>
                              <span>$2,500</span>
                            </li>
                            <li className="flex justify-between">
                              <span>COGS (50x$14 + 50x$12)</span>
                              <span>($1,300)</span>
                            </li>
                            <li className="flex justify-between border-t border-white/20 pt-2 mt-2 font-bold">
                              <span>Gross Profit</span>
                              <span className="text-brand-teal">$1,200</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white/60 text-sm uppercase tracking-wider mb-4">
                            Weighted Avg
                          </h4>
                          <ul className="space-y-2 text-white/80 text-sm">
                            <li className="flex justify-between">
                              <span>Revenue</span>
                              <span>$2,500</span>
                            </li>
                            <li className="flex justify-between">
                              <span>COGS (100x$12 avg)</span>
                              <span>($1,200)</span>
                            </li>
                            <li className="flex justify-between border-t border-white/20 pt-2 mt-2 font-bold">
                              <span>Gross Profit</span>
                              <span className="text-brand-teal">$1,300</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-white/20 text-center">
                        <p className="text-white/70 text-sm">
                          Same sales, same inventory—but gross profit ranges from $1,200 to $1,400
                          depending on the method chosen. This directly impacts your tax bill.
                        </p>
                      </div>
                    </div>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">Important: Consistency Matters</p>
                      <p className="text-gray-600">
                        Once you choose an inventory method, you must apply it consistently. The IRS
                        requires you to file Form 3115 (Application for Change in Accounting Method)
                        if you want to switch. Consult with a qualified accountant before selecting
                        your method, as changing later involves paperwork and potential tax adjustments.
                      </p>
                    </div>
                  </section>

                  {/* Key Metrics */}
                  <section id="key-metrics" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Key Metrics Every Ecommerce Business Should Track
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Your bookkeeping system should produce more than just financial statements.
                      These five metrics provide the insights you need to make smart decisions about
                      pricing, marketing, inventory, and growth.
                    </p>

                    <div className="space-y-6">
                      {/* Metric 1: Gross Margin */}
                      <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <TrendingUp className="w-7 h-7 text-brand-teal" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy mb-1">
                              Gross Margin by Channel & Product
                            </h3>
                            <p className="text-gray-600 text-sm mb-3">
                              Calculate (Revenue - COGS - Channel Fees) / Revenue for each sales
                              channel and product category. This reveals which channels and products
                              are truly profitable after all direct costs.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                                Healthy: 50-70% (DTC Shopify)
                              </span>
                              <span className="bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full">
                                Typical: 20-40% (Amazon FBA)
                              </span>
                              <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full">
                                Warning: Below 15%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Metric 2: Customer Acquisition Cost */}
                      <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <Target className="w-7 h-7 text-brand-teal" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy mb-1">
                              Customer Acquisition Cost (CAC)
                            </h3>
                            <p className="text-gray-600 text-sm mb-3">
                              Total marketing and advertising spend divided by number of new customers
                              acquired. Track this by channel (Facebook ads, Google Shopping, Amazon PPC)
                              to know where your marketing dollars work hardest.
                            </p>
                            <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                              <strong>Formula:</strong> CAC = Total Marketing Spend / New Customers Acquired
                              <br />
                              <strong>Example:</strong> $5,000 ad spend / 200 new customers = $25 CAC
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Metric 3: Customer Lifetime Value */}
                      <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <LineChart className="w-7 h-7 text-brand-teal" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy mb-1">
                              Customer Lifetime Value (LTV)
                            </h3>
                            <p className="text-gray-600 text-sm mb-3">
                              The total revenue you can expect from a customer over their entire
                              relationship with your brand. A healthy business has an LTV:CAC ratio
                              of at least 3:1—meaning each customer generates 3x what you spent to
                              acquire them.
                            </p>
                            <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                              <strong>Formula:</strong> LTV = Avg. Order Value x Purchase Frequency x Customer Lifespan
                              <br />
                              <strong>Example:</strong> $60 AOV x 4 orders/year x 3 years = $720 LTV
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Metric 4: Inventory Turnover */}
                      <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <RefreshCw className="w-7 h-7 text-brand-teal" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy mb-1">
                              Inventory Turnover Ratio
                            </h3>
                            <p className="text-gray-600 text-sm mb-3">
                              How many times your inventory is sold and replaced in a given period.
                              Higher turnover means less capital tied up in inventory and lower
                              storage costs. Low turnover signals overstocking or poor product-market fit.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                                Excellent: 8-12x per year
                              </span>
                              <span className="bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full">
                                Average: 4-8x per year
                              </span>
                              <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full">
                                Slow: Below 4x per year
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Metric 5: Return Rate */}
                      <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <BarChart3 className="w-7 h-7 text-brand-teal" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy mb-1">
                              Return Rate and Cost of Returns
                            </h3>
                            <p className="text-gray-600 text-sm mb-3">
                              Track both the percentage of orders returned and the total financial
                              impact including return shipping, restocking labor, refund processing
                              fees, and inventory write-downs for damaged returns. The true cost of a
                              return is typically 30-65% of the original sale price.
                            </p>
                            <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                              <strong>Industry averages:</strong> Apparel 25-40%, Electronics 15-20%, Home goods 10-15%, Beauty 5-10%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Metrics Stats Banner */}
                    <div className="bg-gradient-to-r from-brand-navy to-brand-navy/90 rounded-2xl p-8 mt-8">
                      <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-white mb-6 text-center">
                        Benchmark: Healthy Ecommerce Financial Profile
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                            40%+
                          </div>
                          <div className="text-white/70 text-xs mt-1">
                            Gross Margin
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                            3:1+
                          </div>
                          <div className="text-white/70 text-xs mt-1">
                            LTV:CAC Ratio
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                            6-8x
                          </div>
                          <div className="text-white/70 text-xs mt-1">
                            Inventory Turnover
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                            &lt;15%
                          </div>
                          <div className="text-white/70 text-xs mt-1">
                            Return Rate
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* When to Outsource */}
                  <section id="when-to-outsource" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      When to Outsource Your Ecommerce Bookkeeping
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Most ecommerce founders start by managing their own books. That works until it
                      doesn't. Here are the signs it's time to bring in professional help—and what to
                      look for in an ecommerce bookkeeping partner.
                    </p>

                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">
                      Signs It's Time to Outsource
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {[
                        {
                          sign: "You're spending 10+ hours/week on bookkeeping",
                          detail: "That's time not spent on product development, marketing, or customer service—activities that directly grow revenue.",
                        },
                        {
                          sign: "Your books are more than 2 months behind",
                          detail: "Outdated financials mean you're making business decisions based on guesswork, not data.",
                        },
                        {
                          sign: "You've received sales tax notices",
                          detail: "Tax authority notices are a clear signal that your compliance has gaps requiring professional attention.",
                        },
                        {
                          sign: "You're expanding to new channels or countries",
                          detail: "Each new platform adds accounting complexity. Professional help ensures you scale without creating a mess.",
                        },
                        {
                          sign: "You can't produce accurate P&L by channel",
                          detail: "If you don't know which channels are profitable, you may be subsidizing losers with winners.",
                        },
                        {
                          sign: "Inventory counts don't match your records",
                          detail: "Persistent discrepancies between physical and book inventory signal systemic tracking issues.",
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 rounded-xl p-5 border border-gray-100"
                        >
                          <h4 className="font-semibold text-brand-navy mb-1 flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                            {item.sign}
                          </h4>
                          <p className="text-sm text-gray-600 ml-7">{item.detail}</p>
                        </div>
                      ))}
                    </div>

                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">
                      What to Look for in an Ecommerce Bookkeeping Provider
                    </h3>
                    <div className="space-y-4 mb-8">
                      {[
                        {
                          title: "Ecommerce-Specific Experience",
                          description:
                            "Not all bookkeepers understand marketplace settlements, inventory costing, or multi-channel reconciliation. Ask specifically about their ecommerce client base.",
                        },
                        {
                          title: "Platform Integrations",
                          description:
                            "Your provider should integrate with Amazon Seller Central, Shopify, your payment processors, and inventory management systems. Manual data entry is a red flag.",
                        },
                        {
                          title: "Sales Tax Expertise",
                          description:
                            "They should understand economic nexus, marketplace facilitator laws, and work with sales tax automation tools like TaxJar or Avalara.",
                        },
                        {
                          title: "Scalable Service Model",
                          description:
                            "As you grow from $500K to $5M in revenue, your accounting needs change dramatically. Choose a provider that can grow with you.",
                        },
                        {
                          title: "Proactive Communication",
                          description:
                            "The best providers don't just record transactions—they flag cash flow concerns, margin erosion, and compliance risks before they become problems.",
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                        >
                          <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      ))}
                    </div>

                    {/* Cost vs Value */}
                    <div className="bg-brand-navy rounded-2xl p-8 text-white mb-6">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-6">
                        Cost vs. Value: Outsourcing Your Ecommerce Bookkeeping
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-white/60 text-sm uppercase tracking-wider mb-4">
                            Doing It Yourself
                          </h4>
                          <ul className="space-y-2 text-white/80 text-sm">
                            <li className="flex justify-between">
                              <span>Your time (10-15 hrs/week x $75/hr)</span>
                              <span>$3,000-$4,500/mo</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Software subscriptions</span>
                              <span>$200-$500/mo</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Tax compliance risk</span>
                              <span>$1,000-$10,000+</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Opportunity cost (lost growth)</span>
                              <span>Incalculable</span>
                            </li>
                            <li className="flex justify-between border-t border-white/20 pt-2 mt-2 font-bold">
                              <span>True Monthly Cost</span>
                              <span className="text-red-400">$3,200-$5,000+</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white/60 text-sm uppercase tracking-wider mb-4">
                            Outsourced Bookkeeping
                          </h4>
                          <ul className="space-y-2 text-white/80 text-sm">
                            <li className="flex justify-between">
                              <span>Monthly bookkeeping fee</span>
                              <span>$800-$2,500/mo</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Software (often included)</span>
                              <span>$0</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Professional compliance</span>
                              <span>Included</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Your time freed for growth</span>
                              <span>10-15 hrs/week</span>
                            </li>
                            <li className="flex justify-between border-t border-white/20 pt-2 mt-2 font-bold">
                              <span>True Monthly Cost</span>
                              <span className="text-brand-teal">$800-$2,500</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">Why Choose MZBPO for Ecommerce Bookkeeping?</p>
                      <p className="text-gray-600">
                        As the outsourcing arm of a{" "}
                        <Link
                          href="/blog/what-is-bkr-international"
                          className="text-brand-teal hover:underline"
                        >
                          BKR International member firm
                        </Link>
                        , we bring global accounting standards to ecommerce bookkeeping. Our team
                        handles multi-channel reconciliation, inventory accounting, and sales tax
                        compliance for ecommerce businesses worldwide. We use a proven{" "}
                        <Link
                          href="/blog/month-end-close-checklist"
                          className="text-brand-teal hover:underline"
                        >
                          month-end close process
                        </Link>{" "}
                        adapted specifically for ecommerce, and our pricing is transparent—see our{" "}
                        <Link
                          href="/blog/outsourced-bookkeeping-cost"
                          className="text-brand-teal hover:underline"
                        >
                          complete pricing guide
                        </Link>
                        .
                      </p>
                    </div>
                  </section>

                  {/* Conclusion */}
                  <section id="conclusion" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Conclusion
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Ecommerce bookkeeping is fundamentally more complex than traditional business
                      accounting. Multi-channel sales, marketplace fees, inventory management, payment
                      processor reconciliation, and multi-jurisdiction tax compliance create a web of
                      financial data that requires systematic, disciplined management.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The good news is that with the right systems, processes, and support, ecommerce
                      bookkeeping becomes a strategic advantage rather than an administrative burden.
                      Accurate, timely financial data enables better pricing decisions, smarter
                      inventory management, more effective marketing spend, and confident tax compliance.
                    </p>

                    <div className="bg-brand-navy rounded-2xl p-8 text-white">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-4">
                        Key Takeaways
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Record transactions daily</strong>—falling behind in ecommerce
                            bookkeeping creates exponential catch-up work
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Reconcile each channel separately</strong>—gross sales, fees,
                            refunds, and net deposits must all match
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Track landed cost, not just purchase price</strong>—including
                            freight, duties, and prep for accurate margins
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Choose your inventory method carefully</strong>—FIFO works best
                            for most ecommerce businesses
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Automate sales tax compliance</strong>—manual tracking across 45+
                            states is impractical and error-prone
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Monitor key metrics</strong>—gross margin by channel, CAC, LTV,
                            inventory turnover, and return rate
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Consider outsourcing when complexity exceeds capacity</strong>—professional
                            bookkeeping typically costs less than DIY when you factor in your time
                          </span>
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>

                {/* Author Box */}
                <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-brand-teal">MZ</span>
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy">
                        About MZBPO
                      </h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        MZBPO is the outsourcing arm of Muniff Ziauddin and Co., an independent
                        member of BKR International—the 5th largest global accounting association.
                        We provide outsourced bookkeeping, internal audit, payroll, and finance
                        services to growing businesses worldwide, including specialized support
                        for ecommerce businesses across multiple platforms and markets.
                      </p>
                      <div className="flex gap-4 mt-4">
                        <Link
                          href="/services/bookkeeping-accounting"
                          className="text-sm text-brand-teal hover:underline font-medium"
                        >
                          Our Services →
                        </Link>
                        <Link
                          href="/meeting"
                          className="text-sm text-brand-teal hover:underline font-medium"
                        >
                          Get a Quote →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <CTASection
          headline="Simplify Your Ecommerce Bookkeeping"
          bodyText="Managing multi-channel finances shouldn't hold back your growth. Schedule a free consultation to learn how MZBPO can handle your ecommerce bookkeeping with accuracy and expertise."
          ctaText="Get Your Free Consultation"
          trackingContentName="Blog CTA - Bookkeeping for Ecommerce"
        />

        {/* Related Posts */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-10 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post, idx) => (
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
                  </div>
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-[var(--font-poppins)] mb-4">
                      {post.description}
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
      </main>
      <Footer />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bookkeeping for Ecommerce: Managing Multi-Channel Finances",
            description:
              "Master ecommerce bookkeeping across Amazon, Shopify, eBay, and more. Learn inventory accounting methods, sales tax compliance, multi-channel reconciliation, and when to outsource.",
            image:
              "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=630&fit=crop",
            datePublished: "2026-02-03T00:00:00.000Z",
            dateModified: "2026-02-03T00:00:00.000Z",
            author: {
              "@type": "Organization",
              name: "MZBPO",
              url: "https://www.mzbpo.com",
            },
            publisher: {
              "@type": "Organization",
              name: "MZBPO",
              logo: {
                "@type": "ImageObject",
                url: "https://www.mzbpo.com/logo/logo.webp",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.mzbpo.com/blog/bookkeeping-for-ecommerce",
            },
          }),
        }}
      />
    </div>
  )
}
