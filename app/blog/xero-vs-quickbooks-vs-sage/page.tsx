import type { Metadata } from "next"
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
  DollarSign,
  TrendingUp,
  Shield,
  AlertTriangle,
  Target,
  Star,
  XCircle,
  BarChart3,
  Globe,
  Zap,
  Users,
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
  { id: "international", title: "International & Multi-Currency Support" },
  { id: "outsourced-accounting", title: "Software + Outsourced Accounting" },
  { id: "conclusion", title: "Verdict & Recommendation" },
]

const quickComparison = [
  {
    feature: "Best For",
    xero: "Small-mid business, international",
    qbo: "US-based small business",
    sage: "Mid-market, manufacturing",
  },
  {
    feature: "Starting Price/mo",
    xero: "$15 (Starter)",
    qbo: "$35 (Simple Start)",
    sage: "$10 (Sage Accounting Start)",
  },
  {
    feature: "Users",
    xero: "Unlimited on all plans",
    qbo: "1–25 depending on plan",
    sage: "1–unlimited depending on plan",
  },
  {
    feature: "Multi-Currency",
    xero: "Yes (Premium+)",
    qbo: "Yes (Plus+)",
    sage: "Yes (all plans)",
  },
  {
    feature: "Inventory Management",
    xero: "Yes",
    qbo: "Yes (Plus+)",
    sage: "Yes (advanced)",
  },
  {
    feature: "Payroll",
    xero: "Add-on (Gusto integration)",
    qbo: "Built-in (add-on cost)",
    sage: "Built-in (Sage HR)",
  },
  {
    feature: "Bank Feeds",
    xero: "Automatic",
    qbo: "Automatic",
    sage: "Automatic",
  },
  {
    feature: "Integrations",
    xero: "1,000+",
    qbo: "750+",
    sage: "200+",
  },
  {
    feature: "Mobile App",
    xero: "Excellent",
    qbo: "Excellent",
    sage: "Good",
  },
  {
    feature: "Customer Support",
    xero: "Email/chat (no phone)",
    qbo: "Phone + chat",
    sage: "Phone + chat",
  },
]

const xeroProsCons = {
  pros: [
    "Unlimited users on every plan — huge value for teams",
    "Best multi-currency support (160+ currencies)",
    "Clean, intuitive UI loved by accountants worldwide",
    "Strong ecosystem in UK, Australia, New Zealand, Canada",
    "1,000+ app integrations including Shopify, Stripe, HubSpot",
    "Excellent bank reconciliation workflow",
    "Real-time collaboration with your accountant",
  ],
  cons: [
    "No phone support — only email and chat",
    "Starter plan has invoice and bill limits",
    "Payroll requires third-party app (Gusto, etc.)",
    "Slightly steeper learning curve for US users",
    "Reporting less powerful than Sage for large businesses",
  ],
}

const qboProsCons = {
  pros: [
    "Most popular accounting software in the US — accountants know it",
    "Built-in payroll (US only)",
    "Strong tax preparation features and TurboTax integration",
    "Excellent phone support",
    "750+ integrations",
    "Best-in-class mileage tracking and receipt capture",
    "Time tracking built in (Plus and above)",
  ],
  cons: [
    "Price increases have been significant — often cheapest option becomes mid-range",
    "User limits per plan can be restrictive",
    "Performance can lag with large data sets",
    "US-centric — international features are secondary",
    "Frequent feature removals and plan reshuffling",
  ],
}

const sageProsCons = {
  pros: [
    "Most powerful for manufacturing, construction, distribution",
    "Strong inventory and job costing features",
    "Excellent compliance tools for regulated industries",
    "Multi-currency on all plans",
    "Sage HR and payroll ecosystem is deeply integrated",
    "Good for mid-market businesses needing more than basic accounting",
  ],
  cons: [
    "UI is less modern than Xero or QBO",
    "Smaller integration ecosystem",
    "Less intuitive for non-accountants",
    "Customer support quality can vary by region",
    "Less brand recognition in the US market",
  ],
}

const byBusinessType = [
  {
    type: "Freelancers & Sole Traders",
    winner: "Xero Starter or QBO Simple Start",
    reason: "Low cost, easy invoicing, bank feeds. Xero wins for international freelancers.",
  },
  {
    type: "Small Business (1–10 employees)",
    winner: "QuickBooks Online (US) / Xero (International)",
    reason: "QBO dominates the US market with better payroll. Xero is superior for UK, AU, CA.",
  },
  {
    type: "Ecommerce Businesses",
    winner: "Xero",
    reason: "Best Shopify, WooCommerce, and Amazon integrations. Multi-currency is essential.",
  },
  {
    type: "SaaS & Tech Companies",
    winner: "Xero",
    reason: "Cleaner revenue recognition workflow, better for recurring billing via Stripe.",
  },
  {
    type: "Professional Services (Law, Consulting)",
    winner: "QuickBooks Online",
    reason: "Best time tracking, project profitability, and billing features.",
  },
  {
    type: "Manufacturing & Distribution",
    winner: "Sage",
    reason: "Advanced inventory, bill of materials, and job costing that QBO and Xero lack.",
  },
  {
    type: "Mid-Market ($5M–$50M revenue)",
    winner: "Sage or Xero Premium",
    reason: "Both handle complexity. Sage for product businesses; Xero for service businesses.",
  },
  {
    type: "International / Multi-Country",
    winner: "Xero",
    reason: "160+ currencies, strong presence in 190+ countries, IFRS-friendly.",
  },
]

const faqItems = [
  {
    question: "Is Xero better than QuickBooks?",
    answer:
      "It depends on your location and needs. Xero is better for international businesses, unlimited users, and ecommerce. QuickBooks is better for US-based businesses needing built-in payroll and tax tools.",
  },
  {
    question: "Can I switch from QuickBooks to Xero?",
    answer:
      "Yes. Xero has a dedicated migration tool that imports your chart of accounts, customers, suppliers, and open transactions from QuickBooks. Most migrations take 1–3 days with professional help.",
  },
  {
    question: "Which is cheapest — Xero, QuickBooks, or Sage?",
    answer:
      "Sage Accounting Start ($10/mo) is the cheapest entry point. However, Xero's value proposition is strongest once you factor in unlimited users. QuickBooks has the highest total cost of ownership at mid-tier plans.",
  },
  {
    question: "Does it matter which software my outsourced accountant uses?",
    answer:
      "Somewhat. Most professional accounting firms work with all three, but many specialize. MZBPO works with Xero, QuickBooks, and Sage — we adapt to your preferred platform.",
  },
  {
    question: "Which accounting software is best for international businesses?",
    answer:
      "Xero is the clear winner for international businesses. It supports 160+ currencies, is widely used across UK, AU, CA, and NZ, and integrates best with global payment and ecommerce platforms.",
  },
]

export default function XeroVsQuickbooksVsSagePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-blue-500/20 border border-blue-400/30 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                Software Comparison
              </span>
              <span className="bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium">
                2026 Edition
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Xero vs QuickBooks vs Sage:{" "}
              <span className="text-blue-400">Which Accounting Software in 2026?</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              A data-driven, side-by-side comparison of the three most popular accounting platforms — with expert
              guidance on which one fits your business size, industry, and location.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> March 3, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 14 min read
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" /> MZBPO Editorial Team
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar TOC */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-slate-600 hover:text-blue-600 transition-colors py-1 border-l-2 border-transparent hover:border-blue-500 pl-3"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-3 prose-slate max-w-none">
              {/* Introduction */}
              <div id="introduction" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  The Accounting Software Question Every Business Owner Asks
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Xero, QuickBooks Online, and Sage collectively serve over{" "}
                  <strong>40 million businesses worldwide</strong>. They&apos;re all cloud-based, all widely supported
                  by accountants, and all capable of handling the core needs of a growing business. So how do you
                  choose?
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  The answer depends on where you&apos;re based, your industry, your team size, and how complex your
                  finances are. In this guide, we break down each platform honestly — including the pricing they
                  don&apos;t always advertise upfront.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <p className="text-blue-900 font-semibold mb-2">Our stance:</p>
                  <p className="text-blue-800">
                    There is no single &quot;best&quot; accounting software. But there is a best choice for your
                    specific situation. This guide will help you find it.
                  </p>
                </div>
              </div>

              {/* Quick Comparison */}
              <div id="quick-comparison" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Quick Comparison at a Glance</h2>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="text-left p-4 font-semibold">Feature</th>
                        <th className="text-left p-4 font-semibold text-blue-300">Xero</th>
                        <th className="text-left p-4 font-semibold text-green-300">QuickBooks Online</th>
                        <th className="text-left p-4 font-semibold text-purple-300">Sage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quickComparison.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="p-4 font-medium text-slate-700">{row.feature}</td>
                          <td className="p-4 text-slate-600">{row.xero}</td>
                          <td className="p-4 text-slate-600">{row.qbo}</td>
                          <td className="p-4 text-slate-600">{row.sage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Xero Review */}
              <div id="xero-review" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Xero: Full Review</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Founded in New Zealand in 2006, Xero has grown to serve <strong>3.9 million subscribers</strong>{" "}
                  globally and is the dominant accounting platform in the UK, Australia, and New Zealand. Its
                  standout feature: <strong>unlimited users on every plan</strong>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                    <h3 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" /> Pros
                    </h3>
                    <ul className="space-y-2">
                      {xeroProsCons.pros.map((pro, i) => (
                        <li key={i} className="text-emerald-700 text-sm flex items-start gap-2">
                          <span className="text-emerald-500 mt-0.5">✓</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5" /> Cons
                    </h3>
                    <ul className="space-y-2">
                      {xeroProsCons.cons.map((con, i) => (
                        <li key={i} className="text-red-700 text-sm flex items-start gap-2">
                          <span className="text-red-500 mt-0.5">✗</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-900 text-white rounded-xl p-6">
                  <p className="font-semibold mb-1">Best for:</p>
                  <p className="text-blue-200">
                    International businesses, ecommerce, SaaS companies, UK/AU/NZ/CA-based businesses, and any company
                    that needs multiple users without paying per seat.
                  </p>
                </div>
              </div>

              {/* QuickBooks Review */}
              <div id="quickbooks-review" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">QuickBooks Online: Full Review</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  QuickBooks Online is the <strong>most widely used accounting software in the United States</strong>,
                  with over 7 million subscribers. Built for small and mid-sized US businesses, it excels at payroll,
                  tax, and local accounting requirements.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                    <h3 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" /> Pros
                    </h3>
                    <ul className="space-y-2">
                      {qboProsCons.pros.map((pro, i) => (
                        <li key={i} className="text-emerald-700 text-sm flex items-start gap-2">
                          <span className="text-emerald-500 mt-0.5">✓</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5" /> Cons
                    </h3>
                    <ul className="space-y-2">
                      {qboProsCons.cons.map((con, i) => (
                        <li key={i} className="text-red-700 text-sm flex items-start gap-2">
                          <span className="text-red-500 mt-0.5">✗</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-green-900 text-white rounded-xl p-6">
                  <p className="font-semibold mb-1">Best for:</p>
                  <p className="text-green-200">
                    US-based small businesses, professional services firms, businesses needing built-in payroll, and
                    anyone whose accountant already works in QuickBooks.
                  </p>
                </div>
              </div>

              {/* Sage Review */}
              <div id="sage-review" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Sage: Full Review</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Sage has been around since 1981 and has evolved into a comprehensive suite that goes beyond basic
                  bookkeeping. Sage Accounting is their SMB product, while <strong>Sage Intacct</strong> and{" "}
                  <strong>Sage 300</strong> serve mid-market and enterprise needs. Sage is particularly powerful for
                  <strong> product-based businesses</strong>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                    <h3 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" /> Pros
                    </h3>
                    <ul className="space-y-2">
                      {sageProsCons.pros.map((pro, i) => (
                        <li key={i} className="text-emerald-700 text-sm flex items-start gap-2">
                          <span className="text-emerald-500 mt-0.5">✓</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5" /> Cons
                    </h3>
                    <ul className="space-y-2">
                      {sageProsCons.cons.map((con, i) => (
                        <li key={i} className="text-red-700 text-sm flex items-start gap-2">
                          <span className="text-red-500 mt-0.5">✗</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-purple-900 text-white rounded-xl p-6">
                  <p className="font-semibold mb-1">Best for:</p>
                  <p className="text-purple-200">
                    Manufacturing, construction, distribution, and mid-market businesses that need advanced inventory,
                    job costing, and compliance features.
                  </p>
                </div>
              </div>

              {/* Pricing */}
              <div id="pricing-breakdown" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Pricing Breakdown 2026</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Xero Pricing */}
                  <div className="border-2 border-blue-200 rounded-2xl overflow-hidden">
                    <div className="bg-blue-600 text-white p-4 text-center">
                      <h3 className="text-xl font-bold">Xero</h3>
                    </div>
                    <div className="p-5 space-y-3">
                      {[
                        { plan: "Starter", price: "$15/mo", note: "20 invoices, 5 bills" },
                        { plan: "Standard", price: "$42/mo", note: "Unlimited invoices/bills" },
                        { plan: "Premium", price: "$54/mo", note: "+ Multi-currency" },
                        { plan: "Ultimate", price: "$78/mo", note: "+ Analytics, expenses" },
                      ].map((p, i) => (
                        <div key={i} className="flex justify-between items-start border-b border-slate-100 pb-2">
                          <div>
                            <p className="font-semibold text-slate-800 text-sm">{p.plan}</p>
                            <p className="text-slate-500 text-xs">{p.note}</p>
                          </div>
                          <span className="font-bold text-blue-600">{p.price}</span>
                        </div>
                      ))}
                      <p className="text-xs text-slate-500 pt-1">All plans include unlimited users</p>
                    </div>
                  </div>
                  {/* QBO Pricing */}
                  <div className="border-2 border-green-200 rounded-2xl overflow-hidden">
                    <div className="bg-green-600 text-white p-4 text-center">
                      <h3 className="text-xl font-bold">QuickBooks Online</h3>
                    </div>
                    <div className="p-5 space-y-3">
                      {[
                        { plan: "Simple Start", price: "$35/mo", note: "1 user" },
                        { plan: "Essentials", price: "$65/mo", note: "3 users" },
                        { plan: "Plus", price: "$99/mo", note: "5 users + inventory" },
                        { plan: "Advanced", price: "$235/mo", note: "25 users + analytics" },
                      ].map((p, i) => (
                        <div key={i} className="flex justify-between items-start border-b border-slate-100 pb-2">
                          <div>
                            <p className="font-semibold text-slate-800 text-sm">{p.plan}</p>
                            <p className="text-slate-500 text-xs">{p.note}</p>
                          </div>
                          <span className="font-bold text-green-600">{p.price}</span>
                        </div>
                      ))}
                      <p className="text-xs text-slate-500 pt-1">Payroll is an additional add-on cost</p>
                    </div>
                  </div>
                  {/* Sage Pricing */}
                  <div className="border-2 border-purple-200 rounded-2xl overflow-hidden">
                    <div className="bg-purple-600 text-white p-4 text-center">
                      <h3 className="text-xl font-bold">Sage Accounting</h3>
                    </div>
                    <div className="p-5 space-y-3">
                      {[
                        { plan: "Start", price: "$10/mo", note: "1 user, invoicing" },
                        { plan: "Standard", price: "$25/mo", note: "1 user, full accounting" },
                        { plan: "Plus", price: "$33/mo", note: "Unlimited users" },
                        { plan: "Sage Intacct", price: "Custom", note: "Mid-market/enterprise" },
                      ].map((p, i) => (
                        <div key={i} className="flex justify-between items-start border-b border-slate-100 pb-2">
                          <div>
                            <p className="font-semibold text-slate-800 text-sm">{p.plan}</p>
                            <p className="text-slate-500 text-xs">{p.note}</p>
                          </div>
                          <span className="font-bold text-purple-600">{p.price}</span>
                        </div>
                      ))}
                      <p className="text-xs text-slate-500 pt-1">Multi-currency included on all plans</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* By Business Type */}
              <div id="by-business-type" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Best Choice by Business Type</h2>
                <div className="space-y-4">
                  {byBusinessType.map((item, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                        <h3 className="font-bold text-slate-900">{item.type}</h3>
                        <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full font-medium">
                          {item.winner}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm">{item.reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* International */}
              <div id="international" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">International & Multi-Currency Support</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  If your business operates across borders — or if you&apos;re an international business looking for
                  outsourced accounting services — currency and compliance support is non-negotiable.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      platform: "Xero",
                      color: "blue",
                      rating: "★★★★★",
                      details: [
                        "160+ currencies",
                        "190+ countries",
                        "IFRS-friendly reporting",
                        "Strong in UK, AU, NZ, CA",
                        "Multi-currency on Premium+",
                      ],
                    },
                    {
                      platform: "QuickBooks Online",
                      color: "green",
                      rating: "★★★☆☆",
                      details: [
                        "Multi-currency on Plus+",
                        "US-first design",
                        "Limited global presence",
                        "Better for US than international",
                        "GAAP-focused reporting",
                      ],
                    },
                    {
                      platform: "Sage",
                      color: "purple",
                      rating: "★★★★☆",
                      details: [
                        "Multi-currency on all plans",
                        "Strong in UK and Europe",
                        "IFRS and GAAP support",
                        "Good for regulated industries",
                        "Sage Intacct for global operations",
                      ],
                    },
                  ].map((p, i) => (
                    <div
                      key={i}
                      className={`border-2 border-${p.color}-200 rounded-xl p-5`}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold text-slate-900">{p.platform}</h3>
                        <span className="text-yellow-500 text-sm">{p.rating}</span>
                      </div>
                      <ul className="space-y-2">
                        {p.details.map((d, j) => (
                          <li key={j} className="text-slate-600 text-sm flex items-center gap-2">
                            <Globe className="w-3 h-3 text-slate-400" /> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outsourced Accounting */}
              <div id="outsourced-accounting" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Software + Outsourced Accounting: The Winning Combination
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Choosing the right software is only half the equation. The other half is having a skilled team
                  actually managing your books, interpreting your reports, and keeping you compliant.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {[
                    {
                      icon: <DollarSign className="w-6 h-6 text-emerald-600" />,
                      title: "Cost Savings",
                      desc: "Outsourced bookkeeping + software subscription is typically 60–70% cheaper than a full-time in-house accountant in the US or UK.",
                    },
                    {
                      icon: <Shield className="w-6 h-6 text-blue-600" />,
                      title: "Compliance Confidence",
                      desc: "Professional accountants keep your books audit-ready and ensure you meet tax deadlines in every jurisdiction.",
                    },
                    {
                      icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
                      title: "Real-Time Insights",
                      desc: "Cloud accounting + expert analysis means you get accurate financial reports when you need them, not at year-end.",
                    },
                    {
                      icon: <Zap className="w-6 h-6 text-orange-600" />,
                      title: "Scalability",
                      desc: "As your business grows, your outsourced team scales with you. No hiring, no training, no overhead.",
                    },
                  ].map((card, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <div className="mb-3">{card.icon}</div>
                      <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
                      <p className="text-slate-600 text-sm">{card.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-3">MZBPO works with all three platforms</h3>
                  <p className="text-blue-100 mb-4">
                    Whether you&apos;re on Xero, QuickBooks, or Sage, our team of certified accountants can manage
                    your books, handle payroll, and deliver CFO-level insights — at a fraction of the cost of
                    in-house finance.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    Talk to an Accountant <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* FAQ */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqItems.map((faq, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conclusion */}
              <div id="conclusion" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Verdict & Recommendation</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    {
                      platform: "Choose Xero if...",
                      color: "blue",
                      points: [
                        "You operate internationally or plan to",
                        "You need unlimited users",
                        "You run an ecommerce or SaaS business",
                        "You're based in UK, AU, NZ, or CA",
                      ],
                    },
                    {
                      platform: "Choose QuickBooks if...",
                      color: "green",
                      points: [
                        "You're a US-based small business",
                        "You need built-in payroll",
                        "Your accountant already uses QBO",
                        "You're in professional services",
                      ],
                    },
                    {
                      platform: "Choose Sage if...",
                      color: "purple",
                      points: [
                        "You're in manufacturing or distribution",
                        "You need advanced inventory & job costing",
                        "You're scaling to mid-market",
                        "You need deep HR/payroll integration",
                      ],
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`border-2 border-${item.color}-200 rounded-xl p-5`}
                    >
                      <h3 className={`font-bold text-${item.color}-700 mb-3`}>{item.platform}</h3>
                      <ul className="space-y-2">
                        {item.points.map((p, j) => (
                          <li key={j} className="text-slate-600 text-sm flex items-start gap-2">
                            <CheckCircle2 className={`w-4 h-4 text-${item.color}-500 mt-0.5 shrink-0`} /> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Whichever platform you choose, pair it with professional accounting support to get the most out of
                  it. Software automates data entry — accountants provide the strategy.
                </p>
              </div>

              {/* Related Posts */}
              <div className="border-t border-slate-200 pt-10">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Outsourced Accounting Services in the USA",
                      href: "/blog/outsourced-accounting-usa",
                      tag: "Guide",
                    },
                    {
                      title: "Cash Flow Management for Growing Businesses",
                      href: "/blog/cash-flow-management-guide",
                      tag: "Finance",
                    },
                    {
                      title: "Accounts Payable Best Practices",
                      href: "/blog/accounts-payable-best-practices",
                      tag: "Operations",
                    },
                  ].map((post, i) => (
                    <Link
                      key={i}
                      href={post.href}
                      className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                    >
                      <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">{post.tag}</span>
                      <p className="font-semibold text-slate-900 mt-1 group-hover:text-blue-700 transition-colors text-sm">
                        {post.title}
                      </p>
                      <ChevronRight className="w-4 h-4 text-blue-500 mt-2" />
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />

      {/* FAQ Schema */}
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
    </>
  )
}
