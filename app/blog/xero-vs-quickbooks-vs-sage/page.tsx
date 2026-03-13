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
  Globe,
  Zap,
  XCircle,
  TrendingUp,
  Shield,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Xero vs QuickBooks vs Sage: Which Accounting Software in 2026?",
  description:
    "Compare Xero, QuickBooks Online, and Sage for your business in 2026. Detailed breakdown of pricing, features, integrations, and which is best for small, mid-market, and international businesses.",
  alternates: { canonical: "/blog/xero-vs-quickbooks-vs-sage" },
  openGraph: {
    title: "Xero vs QuickBooks vs Sage: Which Accounting Software in 2026? | MZBPO",
    description:
      "Compare Xero, QuickBooks Online, and Sage for your business. Pricing, features, pros & cons, and expert recommendations for every business size.",
    url: "https://www.mzbpo.com/blog/xero-vs-quickbooks-vs-sage",
    type: "article",
    publishedTime: "2026-03-03T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Xero vs QuickBooks vs Sage Comparison 2026",
      },
    ],
  },
}

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "quick-comparison", title: "Quick Comparison at a Glance" },
  { id: "xero-review", title: "Xero: Full Review" },
  { id: "quickbooks-review", title: "QuickBooks Online: Full Review" },
  { id: "sage-review", title: "Sage: Full Review" },
  { id: "pricing-breakdown", title: "Pricing Breakdown 2026" },
  { id: "by-business-type", title: "Best Choice by Business Type" },
  { id: "international", title: "International & Multi-Currency" },
  { id: "outsourced-accounting", title: "Software + Outsourced Accounting" },
  { id: "conclusion", title: "Verdict & Recommendation" },
]

const quickComparison = [
  { feature: "Best For", xero: "Small-mid business, international", qbo: "US-based small business", sage: "Mid-market, manufacturing" },
  { feature: "Starting Price/mo", xero: "$15 (Starter)", qbo: "$35 (Simple Start)", sage: "$10 (Sage Start)" },
  { feature: "Users", xero: "Unlimited on all plans", qbo: "1–25 depending on plan", sage: "1–unlimited by plan" },
  { feature: "Multi-Currency", xero: "Yes (Premium+)", qbo: "Yes (Plus+)", sage: "Yes (all plans)" },
  { feature: "Inventory", xero: "Yes", qbo: "Yes (Plus+)", sage: "Yes (advanced)" },
  { feature: "Payroll", xero: "Add-on (Gusto)", qbo: "Built-in (extra cost)", sage: "Built-in (Sage HR)" },
  { feature: "Integrations", xero: "1,000+", qbo: "750+", sage: "200+" },
  { feature: "Mobile App", xero: "Excellent", qbo: "Excellent", sage: "Good" },
  { feature: "Support", xero: "Email/chat only", qbo: "Phone + chat", sage: "Phone + chat" },
]

const xeroProsCons = {
  pros: [
    "Unlimited users on every plan — huge value for teams",
    "Best multi-currency support (160+ currencies)",
    "Clean, intuitive UI loved by accountants worldwide",
    "Strong ecosystem in UK, Australia, NZ, Canada",
    "1,000+ app integrations including Shopify, Stripe, HubSpot",
    "Excellent bank reconciliation workflow",
  ],
  cons: [
    "No phone support — only email and chat",
    "Starter plan has invoice and bill limits",
    "Payroll requires third-party app (Gusto, etc.)",
    "Slightly steeper learning curve for US users",
  ],
}

const qboProsCons = {
  pros: [
    "Most popular accounting software in the US",
    "Built-in payroll (US only)",
    "Strong tax prep features and TurboTax integration",
    "Excellent phone support",
    "Best-in-class mileage tracking and receipt capture",
  ],
  cons: [
    "Significant price increases in recent years",
    "User limits per plan can be restrictive",
    "Performance can lag with large data sets",
    "US-centric — international features are secondary",
  ],
}

const sageProsCons = {
  pros: [
    "Most powerful for manufacturing, construction, distribution",
    "Advanced inventory and job costing features",
    "Excellent compliance tools for regulated industries",
    "Multi-currency included on all plans",
    "Sage HR and payroll ecosystem is deeply integrated",
  ],
  cons: [
    "UI is less modern than Xero or QBO",
    "Smaller integration ecosystem",
    "Less intuitive for non-accountants",
    "Less brand recognition in the US market",
  ],
}

const byBusinessType = [
  { type: "Freelancers & Sole Traders", winner: "Xero Starter or QBO Simple Start", reason: "Low cost, easy invoicing, bank feeds. Xero wins for international freelancers." },
  { type: "Small Business (US)", winner: "QuickBooks Online", reason: "Dominates the US market with better payroll and tax integration." },
  { type: "Small Business (UK/AU/CA)", winner: "Xero", reason: "Dominant platform in these markets with strongest local compliance support." },
  { type: "Ecommerce Businesses", winner: "Xero", reason: "Best Shopify, WooCommerce, and Amazon integrations. Multi-currency is essential." },
  { type: "SaaS & Tech Companies", winner: "Xero", reason: "Cleaner revenue recognition workflow, better for recurring billing via Stripe." },
  { type: "Professional Services", winner: "QuickBooks Online", reason: "Best time tracking, project profitability, and billing features." },
  { type: "Manufacturing & Distribution", winner: "Sage", reason: "Advanced inventory, bill of materials, and job costing that QBO and Xero lack." },
  { type: "International / Multi-Country", winner: "Xero", reason: "160+ currencies, strong presence in 190+ countries, IFRS-friendly." },
]

const faqItems = [
  {
    question: "Is Xero better than QuickBooks?",
    answer: "It depends on your location and needs. Xero is better for international businesses, unlimited users, and ecommerce. QuickBooks is better for US-based businesses needing built-in payroll and tax tools.",
  },
  {
    question: "Can I switch from QuickBooks to Xero?",
    answer: "Yes. Xero has a dedicated migration tool that imports your chart of accounts, customers, suppliers, and open transactions. Most migrations take 1–3 days with professional help.",
  },
  {
    question: "Which is cheapest — Xero, QuickBooks, or Sage?",
    answer: "Sage Accounting Start ($10/mo) is the cheapest entry point. However, Xero's value is strongest once you factor in unlimited users. QuickBooks has the highest total cost at mid-tier plans.",
  },
  {
    question: "Does it matter which software my outsourced accountant uses?",
    answer: "Somewhat. Most professional accounting firms work with all three. MZBPO works with Xero, QuickBooks, and Sage — we adapt to your preferred platform.",
  },
  {
    question: "Which software is best for international businesses?",
    answer: "Xero is the clear winner. It supports 160+ currencies, is widely used across UK, AU, CA, and NZ, and integrates best with global payment and ecommerce platforms.",
  },
]

const relatedPosts = [
  {
    title: "Cash Flow Management Guide for Growing Businesses",
    href: "/blog/cash-flow-management-guide",
    description: "Master cash flow forecasting, gap analysis, and working capital optimization.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
  },
  {
    title: "AI in Accounting: How Automation is Changing Outsourced Services",
    href: "/blog/ai-in-accounting",
    description: "How AI is transforming bookkeeping, reconciliation, and financial forecasting.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
  },
  {
    title: "Outsourced Accounting Services in the USA",
    href: "/blog/outsourced-accounting-usa",
    description: "Everything US businesses need to know about outsourced accounting.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
  },
]

export default function XeroVsQuickbooksVsSagePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <article>
          {/* Hero */}
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
              <nav className="flex items-center gap-2 text-sm text-white/60 mb-8 font-[var(--font-poppins)]">
                <Link href="/" className="hover:text-brand-teal transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/blog" className="hover:text-brand-teal transition-colors">Blog</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white/80">Xero vs QuickBooks vs Sage</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Software Comparison</span>
              </div>
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Xero vs QuickBooks vs Sage:{" "}
                <span className="text-brand-teal">Which Accounting Software in 2026?</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                A data-driven, side-by-side comparison of the three most popular accounting platforms — with expert
                guidance on which one fits your business size, industry, and location.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>MZBPO Team</span></div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>March 3, 2026</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative -mt-8 mb-12 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=820&fit=crop"
                  alt="Xero vs QuickBooks vs Sage comparison"
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
              {/* Sidebar */}
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
                  <div className="mt-6 bg-brand-navy rounded-2xl p-6">
                    <p className="text-white font-[family-name:var(--font-syne)] font-bold mb-3">
                      Not Sure Which Platform?
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      Our team works with Xero, QuickBooks, and Sage. We&apos;ll help you choose and manage your books on any platform.
                    </p>
                    <Link
                      href="/meeting"
                      className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all"
                    >
                      Schedule a Call <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-9">
                <div className="prose prose-lg max-w-none font-[var(--font-poppins)]">

                  {/* Introduction */}
                  <section id="introduction" className="scroll-mt-32 mb-12">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Xero, QuickBooks Online, and Sage collectively serve over <strong>40 million businesses worldwide</strong>.
                      They&apos;re all cloud-based, widely supported by accountants, and capable of handling core
                      financial needs. So how do you choose?
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The answer depends on where you&apos;re based, your industry, your team size, and how complex
                      your finances are. In this guide we break down each platform honestly — including the pricing
                      they don&apos;t always advertise upfront.
                    </p>
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">Our stance:</p>
                      <p className="text-gray-600">
                        There is no single &quot;best&quot; accounting software — only the best choice for your
                        specific situation. This guide will help you find it.
                      </p>
                    </div>
                  </section>

                  {/* Quick Comparison */}
                  <section id="quick-comparison" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Quick Comparison at a Glance
                    </h2>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="text-left p-4 font-semibold">Feature</th>
                            <th className="text-left p-4 font-semibold text-brand-teal">Xero</th>
                            <th className="text-left p-4 font-semibold text-green-300">QuickBooks</th>
                            <th className="text-left p-4 font-semibold text-purple-300">Sage</th>
                          </tr>
                        </thead>
                        <tbody>
                          {quickComparison.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="p-4 font-medium text-brand-navy">{row.feature}</td>
                              <td className="p-4 text-gray-600">{row.xero}</td>
                              <td className="p-4 text-gray-600">{row.qbo}</td>
                              <td className="p-4 text-gray-600">{row.sage}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Xero Review */}
                  <section id="xero-review" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Xero: Full Review
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Founded in New Zealand in 2006, Xero serves <strong>3.9 million subscribers</strong> globally
                      and dominates accounting in the UK, Australia, and New Zealand. Its standout feature:
                      <strong> unlimited users on every plan</strong>.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" /> Pros
                        </h3>
                        <ul className="space-y-2">
                          {xeroProsCons.pros.map((pro, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4 flex items-center gap-2">
                          <XCircle className="w-5 h-5 text-red-500" /> Cons
                        </h3>
                        <ul className="space-y-2">
                          {xeroProsCons.cons.map((con, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-1">Best for:</p>
                      <p className="text-gray-600 text-sm">
                        International businesses, ecommerce, SaaS, UK/AU/NZ/CA-based businesses, and any company
                        needing multiple users without paying per seat.
                      </p>
                    </div>
                  </section>

                  {/* QuickBooks Review */}
                  <section id="quickbooks-review" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      QuickBooks Online: Full Review
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      QuickBooks Online is the <strong>most widely used accounting software in the United States</strong>,
                      with over 7 million subscribers. Built for US small and mid-sized businesses, it excels at
                      payroll, tax, and local accounting requirements.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" /> Pros
                        </h3>
                        <ul className="space-y-2">
                          {qboProsCons.pros.map((pro, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4 flex items-center gap-2">
                          <XCircle className="w-5 h-5 text-red-500" /> Cons
                        </h3>
                        <ul className="space-y-2">
                          {qboProsCons.cons.map((con, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-1">Best for:</p>
                      <p className="text-gray-600 text-sm">
                        US-based small businesses, professional services, businesses needing built-in payroll, and
                        anyone whose accountant already works in QuickBooks.
                      </p>
                    </div>
                  </section>

                  {/* Sage Review */}
                  <section id="sage-review" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Sage: Full Review
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Sage has been around since 1981 and evolved into a comprehensive suite. Sage Accounting serves
                      SMBs, while <strong>Sage Intacct</strong> and <strong>Sage 300</strong> serve mid-market and
                      enterprise. Sage is particularly powerful for <strong>product-based businesses</strong>.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" /> Pros
                        </h3>
                        <ul className="space-y-2">
                          {sageProsCons.pros.map((pro, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4 flex items-center gap-2">
                          <XCircle className="w-5 h-5 text-red-500" /> Cons
                        </h3>
                        <ul className="space-y-2">
                          {sageProsCons.cons.map((con, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-1">Best for:</p>
                      <p className="text-gray-600 text-sm">
                        Manufacturing, construction, distribution, and mid-market businesses needing advanced
                        inventory, job costing, and compliance features.
                      </p>
                    </div>
                  </section>

                  {/* Pricing */}
                  <section id="pricing-breakdown" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Pricing Breakdown 2026
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          name: "Xero",
                          plans: [
                            { plan: "Starter", price: "$15/mo", note: "20 invoices, 5 bills" },
                            { plan: "Standard", price: "$42/mo", note: "Unlimited invoices/bills" },
                            { plan: "Premium", price: "$54/mo", note: "+ Multi-currency" },
                            { plan: "Ultimate", price: "$78/mo", note: "+ Analytics, expenses" },
                          ],
                          note: "All plans include unlimited users",
                        },
                        {
                          name: "QuickBooks Online",
                          plans: [
                            { plan: "Simple Start", price: "$35/mo", note: "1 user" },
                            { plan: "Essentials", price: "$65/mo", note: "3 users" },
                            { plan: "Plus", price: "$99/mo", note: "5 users + inventory" },
                            { plan: "Advanced", price: "$235/mo", note: "25 users + analytics" },
                          ],
                          note: "Payroll is an additional add-on cost",
                        },
                        {
                          name: "Sage Accounting",
                          plans: [
                            { plan: "Start", price: "$10/mo", note: "1 user, invoicing" },
                            { plan: "Standard", price: "$25/mo", note: "1 user, full accounting" },
                            { plan: "Plus", price: "$33/mo", note: "Unlimited users" },
                            { plan: "Sage Intacct", price: "Custom", note: "Mid-market/enterprise" },
                          ],
                          note: "Multi-currency included on all plans",
                        },
                      ].map((platform, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
                          <div className="bg-brand-navy text-white p-4 text-center">
                            <h3 className="font-[family-name:var(--font-syne)] font-bold">{platform.name}</h3>
                          </div>
                          <div className="p-5 space-y-3">
                            {platform.plans.map((p, j) => (
                              <div key={j} className="flex justify-between items-start border-b border-gray-100 pb-2">
                                <div>
                                  <p className="font-semibold text-brand-navy text-sm">{p.plan}</p>
                                  <p className="text-gray-500 text-xs">{p.note}</p>
                                </div>
                                <span className="font-bold text-brand-teal text-sm">{p.price}</span>
                              </div>
                            ))}
                            <p className="text-xs text-gray-400 pt-1">{platform.note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* By Business Type */}
                  <section id="by-business-type" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Best Choice by Business Type
                    </h2>
                    <div className="space-y-4">
                      {byBusinessType.map((item, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">{item.type}</h3>
                            <span className="bg-brand-teal text-brand-navy text-xs font-semibold px-3 py-1 rounded-full">
                              {item.winner}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm">{item.reason}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* International */}
                  <section id="international" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      International & Multi-Currency Support
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      If your business operates across borders, currency and compliance support is non-negotiable.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { platform: "Xero", rating: "★★★★★", details: ["160+ currencies", "190+ countries", "IFRS-friendly", "Strong in UK, AU, NZ, CA", "Multi-currency on Premium+"] },
                        { platform: "QuickBooks Online", rating: "★★★☆☆", details: ["Multi-currency on Plus+", "US-first design", "Limited global presence", "GAAP-focused reporting", "Better for US than international"] },
                        { platform: "Sage", rating: "★★★★☆", details: ["Multi-currency on all plans", "Strong in UK & Europe", "IFRS and GAAP support", "Good for regulated industries", "Sage Intacct for global ops"] },
                      ].map((p, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="flex justify-between items-center mb-3">
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">{p.platform}</h3>
                            <span className="text-yellow-500 text-sm">{p.rating}</span>
                          </div>
                          <ul className="space-y-2">
                            {p.details.map((d, j) => (
                              <li key={j} className="text-gray-600 text-sm flex items-center gap-2">
                                <Globe className="w-3 h-3 text-brand-teal shrink-0" /> {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Outsourced Accounting */}
                  <section id="outsourced-accounting" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Software + Outsourced Accounting: The Winning Combination
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Choosing the right software is only half the equation. The other half is having a skilled team
                      actually managing your books, interpreting reports, and keeping you compliant.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {[
                        { icon: <DollarSign className="w-6 h-6 text-brand-teal" />, title: "Cost Savings", desc: "Outsourced bookkeeping + software is typically 60–70% cheaper than a full-time in-house accountant in the US or UK." },
                        { icon: <Shield className="w-6 h-6 text-brand-teal" />, title: "Compliance Confidence", desc: "Professional accountants keep your books audit-ready and ensure you meet tax deadlines in every jurisdiction." },
                        { icon: <TrendingUp className="w-6 h-6 text-brand-teal" />, title: "Real-Time Insights", desc: "Cloud accounting + expert analysis means accurate financial reports when you need them, not at year-end." },
                        { icon: <Zap className="w-6 h-6 text-brand-teal" />, title: "Scalability", desc: "As your business grows, your outsourced team scales with you. No hiring, no training, no overhead." },
                      ].map((card, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="mb-3">{card.icon}</div>
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">{card.title}</h3>
                          <p className="text-gray-600 text-sm">{card.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-3">
                        MZBPO works with all three platforms
                      </h3>
                      <p className="text-white/70 font-[var(--font-poppins)] mb-4">
                        Whether you&apos;re on Xero, QuickBooks, or Sage, our certified accountants manage your
                        books, handle payroll, and deliver CFO-level insights — at a fraction of the cost of
                        in-house finance.
                      </p>
                      <Link
                        href="/meeting"
                        className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all"
                      >
                        Schedule a Call <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </section>

                  {/* FAQ */}
                  <section className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {faqItems.map((faq, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">{faq.question}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Conclusion */}
                  <section id="conclusion" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Verdict & Recommendation
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      {[
                        { platform: "Choose Xero if…", points: ["You operate internationally", "You need unlimited users", "You run ecommerce or SaaS", "You're based in UK, AU, NZ, CA"] },
                        { platform: "Choose QuickBooks if…", points: ["You're a US-based small business", "You need built-in payroll", "Your accountant uses QBO", "You're in professional services"] },
                        { platform: "Choose Sage if…", points: ["You're in manufacturing", "You need advanced inventory", "You're scaling to mid-market", "You need deep HR/payroll integration"] },
                      ].map((item, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">{item.platform}</h3>
                          <ul className="space-y-2">
                            {item.points.map((p, j) => (
                              <li key={j} className="text-gray-600 text-sm flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" /> {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Whichever platform you choose, pair it with professional accounting support to get the most
                      out of it. Software automates data entry — accountants provide the strategy.
                    </p>
                  </section>

                  {/* Related Posts */}
                  <section className="border-t border-gray-100 pt-10">
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-6">Related Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {relatedPosts.map((post, i) => (
                        <Link key={i} href={post.href} className="group">
                          <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3">
                            <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                          </div>
                          <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy text-sm mb-1 group-hover:text-brand-teal transition-colors">
                            {post.title}
                          </h4>
                          <p className="text-gray-500 text-xs">{post.description}</p>
                        </Link>
                      ))}
                    </div>
                  </section>

                </div>
              </div>
            </div>
          </div>
        </article>

        <CTASection />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
    </div>
  )
}
