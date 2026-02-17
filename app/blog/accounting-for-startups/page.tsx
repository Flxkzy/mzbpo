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
  XCircle,
  TrendingUp,
  DollarSign,
  Users,
  Shield,
  BarChart3,
  Building2,
  ChevronRight,
  BookOpen,
  AlertTriangle,
  Lightbulb,
  Target,
  Rocket,
  FileText,
  Calculator,
  Scale,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Accounting for Startups: When to Hire vs Outsource Your Finances | MZBPO",
  description:
    "Complete guide to startup accounting — entity structure, financial lifecycle, investor-ready reporting, tax strategies, and when to hire vs outsource your finance function.",
  alternates: { canonical: "/blog/accounting-for-startups" },
  openGraph: {
    title: "Accounting for Startups: When to Hire vs Outsource Your Finances | MZBPO",
    description:
      "Complete guide to startup accounting — entity structure, financial lifecycle, investor-ready reporting, tax strategies, and when to hire vs outsource your finance function.",
    url: "https://www.mzbpo.com/blog/accounting-for-startups",
    type: "article",
    publishedTime: "2026-02-12T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Accounting for Startups Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accounting for Startups: When to Hire vs Outsource Your Finances",
    description:
      "Complete guide to startup accounting — entity structure, financial lifecycle, investor-ready reporting, and the hire vs outsource decision framework.",
  },
}

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "startup-accounting-fundamentals", title: "Startup Accounting Fundamentals" },
  { id: "startup-financial-lifecycle", title: "The Startup Financial Lifecycle" },
  { id: "common-startup-mistakes", title: "Common Startup Accounting Mistakes" },
  { id: "investor-ready-reporting", title: "Investor-Ready Financial Reporting" },
  { id: "hire-vs-outsource", title: "Hire vs Outsource Decision Framework" },
  { id: "what-to-look-for", title: "What to Look for in a Provider" },
  { id: "tax-strategies", title: "Tax Strategies for Startups" },
  { id: "conclusion", title: "Conclusion & Key Takeaways" },
]

const relatedPosts = [
  {
    title: "In-House vs Outsourced Accounting: Complete Cost Comparison",
    href: "/blog/in-house-vs-outsourced-accounting",
    description: "A detailed cost analysis of both accounting models to help you decide what's right for your business.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
  },
  {
    title: "How Much Does Outsourced Bookkeeping Cost?",
    href: "/blog/outsourced-bookkeeping-cost",
    description: "A complete pricing guide with cost ranges, ROI calculations, and what to expect.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=250&fit=crop",
  },
  {
    title: "Accounting for SaaS Companies",
    href: "/blog/accounting-for-saas-companies",
    description: "Revenue recognition, metrics, and financial reporting essentials for SaaS businesses.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
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
            {/* Background Pattern */}
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
                <span className="text-white/80">Accounting for Startups</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Industry Guide</span>
              </div>

              {/* Title */}
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Accounting for Startups:{" "}
                <span className="text-brand-teal">When to Hire vs Outsource Your Finances</span>
              </h1>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                From entity formation to investor-ready financials, a comprehensive guide to
                getting your startup accounting right from day one — and knowing exactly when
                to hire in-house vs outsource.
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>MZBPO Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>February 12, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>13 min read</span>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative -mt-8 mb-12 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=820&fit=crop"
                  alt="Startup team working on financial planning and accounting strategy"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
                      Startup finance support?
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      Get a free consultation to discuss your startup accounting needs.
                    </p>
                    <a
                      href="/meeting"
                      className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all"
                    >
                      Book a Call
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-9">
                <div className="prose prose-lg max-w-none font-[var(--font-poppins)]">
                  {/* Introduction */}
                  <section id="introduction" className="scroll-mt-32 mb-12">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Here's a harsh reality: <strong>29% of startups fail because they run out of cash</strong>,
                      not because their product is bad. And behind nearly every cash crisis is a startup
                      that treated accounting as an afterthought — the thing they'd "figure out later"
                      once they had more revenue, more funding, or more time.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The truth is that accounting isn't just about compliance or tax filings. For
                      startups, it's the difference between knowing your runway to the day and
                      discovering you're broke next month. It's the difference between closing your
                      Series A smoothly and losing a deal because your books are a mess.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      In this guide, we'll walk through everything a startup founder needs to know
                      about accounting — from choosing your entity structure and accounting method,
                      through each stage of your financial lifecycle, to the critical decision of when
                      to hire in-house versus outsource your finance function. Whether you're
                      pre-revenue or preparing for a Series B, this guide will help you make
                      informed decisions about your startup's financial foundation.
                    </p>
                  </section>

                  {/* Key Stats Banner */}
                  <div className="bg-gradient-to-r from-brand-navy to-brand-navy/90 rounded-2xl p-8 my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                        29%
                      </div>
                      <div className="text-white/70 text-sm mt-1">
                        of startups fail due to cash problems
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                        $11K+
                      </div>
                      <div className="text-white/70 text-sm mt-1">
                        avg. annual cost of startup bookkeeping
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                        73%
                      </div>
                      <div className="text-white/70 text-sm mt-1">
                        of VC-backed startups outsource finance
                      </div>
                    </div>
                  </div>

                  {/* Startup Accounting Fundamentals */}
                  <section id="startup-accounting-fundamentals" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Startup Accounting Fundamentals
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Before you write a single line of code or pitch a single investor, you need to
                      get four foundational accounting decisions right. These choices will impact
                      everything from your tax liability to your ability to raise capital.
                    </p>

                    {/* Entity Structure */}
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-brand-teal" />
                      1. Choosing Your Entity Structure
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Your entity type determines how you're taxed, how you can raise capital, and
                      your personal liability exposure. Here's how the three most common structures
                      compare for startups:
                    </p>

                    <div className="overflow-x-auto mb-8">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="text-left p-4 font-semibold rounded-tl-xl">Factor</th>
                            <th className="text-left p-4 font-semibold">LLC</th>
                            <th className="text-left p-4 font-semibold">S-Corp</th>
                            <th className="text-left p-4 font-semibold rounded-tr-xl">C-Corp</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="p-4 font-medium text-brand-navy">Taxation</td>
                            <td className="p-4 text-gray-600">Pass-through</td>
                            <td className="p-4 text-gray-600">Pass-through</td>
                            <td className="p-4 text-gray-600">Double taxation</td>
                          </tr>
                          <tr className="border-b border-gray-100 bg-gray-50">
                            <td className="p-4 font-medium text-brand-navy">VC Fundraising</td>
                            <td className="p-4 text-gray-600">Difficult</td>
                            <td className="p-4 text-gray-600">Not possible</td>
                            <td className="p-4 text-gray-600 font-semibold text-brand-teal">Preferred</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-4 font-medium text-brand-navy">Stock Options</td>
                            <td className="p-4 text-gray-600">Complex (units)</td>
                            <td className="p-4 text-gray-600">Limited (100 shareholders)</td>
                            <td className="p-4 text-gray-600 font-semibold text-brand-teal">Full flexibility</td>
                          </tr>
                          <tr className="border-b border-gray-100 bg-gray-50">
                            <td className="p-4 font-medium text-brand-navy">Complexity</td>
                            <td className="p-4 text-gray-600">Low</td>
                            <td className="p-4 text-gray-600">Medium</td>
                            <td className="p-4 text-gray-600">High</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-4 font-medium text-brand-navy">Best For</td>
                            <td className="p-4 text-gray-600">Bootstrapped, small teams</td>
                            <td className="p-4 text-gray-600">Profitable small businesses</td>
                            <td className="p-4 text-gray-600 font-semibold text-brand-teal">VC-backed startups</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 font-medium text-brand-navy rounded-bl-xl">QSBS Eligible</td>
                            <td className="p-4 text-gray-600">No</td>
                            <td className="p-4 text-gray-600">No</td>
                            <td className="p-4 text-gray-600 font-semibold text-brand-teal rounded-br-xl">Yes</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6 my-8">
                      <p className="text-brand-navy font-semibold mb-2">
                        Founder Tip
                      </p>
                      <p className="text-gray-600">
                        If you plan to raise venture capital, incorporate as a <strong>Delaware C-Corp</strong>.
                        Nearly all VCs require it, and converting from an LLC later is expensive and
                        creates tax headaches. Delaware offers well-established business law, a
                        specialized court system (Court of Chancery), and is the standard investors expect.
                      </p>
                    </div>

                    {/* Accounting Method */}
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-brand-teal" />
                      2. Choosing Your Accounting Method
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      You have two choices: cash basis or accrual basis. The right answer depends on
                      your stage and fundraising plans.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">
                          Cash Basis
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Simple — record when money moves</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Good for very early-stage pre-revenue</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Lower accounting costs initially</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>Not GAAP compliant</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>Doesn't reflect true financial position</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-brand-teal/5 rounded-xl p-6 border border-brand-teal/20">
                        <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">
                          Accrual Basis (Recommended)
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>GAAP compliant — investors require it</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Accurate picture of financial health</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Proper revenue recognition (ASC 606)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Required for audits and due diligence</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>More complex, higher cost to maintain</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Chart of Accounts */}
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-brand-teal" />
                      3. Setting Up Your Chart of Accounts
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Your chart of accounts (COA) is the backbone of your financial reporting. A
                      well-structured COA from day one saves hundreds of hours of reclassification
                      work later. Key categories for startups include:
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <DollarSign className="w-4 h-4 text-brand-teal" />
                          </div>
                          <div>
                            <p className="font-semibold text-brand-navy">Revenue Accounts</p>
                            <p className="text-sm text-gray-500">Subscription, services, one-time sales — separate by stream</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <Users className="w-4 h-4 text-brand-teal" />
                          </div>
                          <div>
                            <p className="font-semibold text-brand-navy">Payroll & Contractors</p>
                            <p className="text-sm text-gray-500">Separate W-2 employees from 1099 contractors</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <Zap className="w-4 h-4 text-brand-teal" />
                          </div>
                          <div>
                            <p className="font-semibold text-brand-navy">R&D Expenses</p>
                            <p className="text-sm text-gray-500">Critical for R&D tax credits — track from day one</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <BarChart3 className="w-4 h-4 text-brand-teal" />
                          </div>
                          <div>
                            <p className="font-semibold text-brand-navy">COGS vs OpEx</p>
                            <p className="text-sm text-gray-500">Separate cost of goods sold from operating expenses</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Accounting Software */}
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-brand-teal" />
                      4. Choosing Accounting Software
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The right software depends on your stage and complexity. Here's what we
                      recommend to most startup clients:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <p className="font-semibold text-brand-navy mb-1">Pre-Seed / Seed</p>
                        <p className="text-brand-teal font-bold text-lg mb-2">QuickBooks Online</p>
                        <p className="text-sm text-gray-500">
                          Industry standard, integrates with everything, most accountants know it.
                          Start here.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <p className="font-semibold text-brand-navy mb-1">Series A+</p>
                        <p className="text-brand-teal font-bold text-lg mb-2">QuickBooks or Xero</p>
                        <p className="text-sm text-gray-500">
                          Add AP automation (Bill.com), expense management (Brex/Ramp), and
                          reporting layers.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <p className="font-semibold text-brand-navy mb-1">Series B+ / Pre-IPO</p>
                        <p className="text-brand-teal font-bold text-lg mb-2">NetSuite or Sage Intacct</p>
                        <p className="text-sm text-gray-500">
                          Multi-entity, multi-currency, advanced consolidation, audit-ready
                          reporting.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* The Startup Financial Lifecycle */}
                  <section id="startup-financial-lifecycle" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      The Startup Financial Lifecycle
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Your accounting needs evolve dramatically as your startup grows. Understanding
                      what's required at each stage helps you plan ahead and avoid scrambling when
                      investors or regulators come knocking.
                    </p>

                    {/* Visual Timeline */}
                    <div className="relative mb-12">
                      {/* Timeline Line */}
                      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-teal/20 transform -translate-x-1/2" />

                      {/* Stage 1: Pre-Revenue */}
                      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="md:text-right md:pr-12">
                          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3">
                            <Rocket className="w-3.5 h-3.5" />
                            Stage 1
                          </div>
                          <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-3">
                            Pre-Revenue
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            You're burning cash, building product, and probably handling books in a
                            spreadsheet. This is where most accounting mistakes begin.
                          </p>
                        </div>
                        <div className="md:pl-12">
                          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                            <h4 className="font-semibold text-brand-navy mb-3 text-sm">Key Priorities:</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                              <li>-- Track burn rate weekly</li>
                              <li>-- Separate personal and business finances</li>
                              <li>-- Set up proper expense tracking</li>
                              <li>-- Document R&D spend for tax credits</li>
                              <li>-- File 83(b) elections within 30 days</li>
                            </ul>
                          </div>
                        </div>
                        <div className="hidden md:flex absolute left-1/2 top-6 w-4 h-4 rounded-full bg-red-500 border-4 border-white transform -translate-x-1/2 shadow-md" />
                      </div>

                      {/* Stage 2: Early Revenue */}
                      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="md:text-right md:pr-12 md:order-1 order-1">
                          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                            <h4 className="font-semibold text-brand-navy mb-3 text-sm">Key Priorities:</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                              <li>-- Implement accrual accounting</li>
                              <li>-- Revenue recognition policies (ASC 606)</li>
                              <li>-- Monthly close process</li>
                              <li>-- Deferred revenue tracking</li>
                              <li>-- Sales tax / nexus compliance</li>
                            </ul>
                          </div>
                        </div>
                        <div className="md:pl-12 md:order-2 order-2">
                          <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3">
                            <TrendingUp className="w-3.5 h-3.5" />
                            Stage 2
                          </div>
                          <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-3">
                            Early Revenue
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Revenue is coming in, but it's messy. Revenue recognition, deferred
                            revenue, and tax obligations become real concerns.
                          </p>
                        </div>
                        <div className="hidden md:flex absolute left-1/2 top-6 w-4 h-4 rounded-full bg-yellow-500 border-4 border-white transform -translate-x-1/2 shadow-md" />
                      </div>

                      {/* Stage 3: Growth Stage */}
                      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="md:text-right md:pr-12">
                          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3">
                            <BarChart3 className="w-3.5 h-3.5" />
                            Stage 3
                          </div>
                          <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-3">
                            Growth Stage
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Scaling fast. Headcount is growing, you may be multi-state or
                            international. Finance complexity increases 10x.
                          </p>
                        </div>
                        <div className="md:pl-12">
                          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                            <h4 className="font-semibold text-brand-navy mb-3 text-sm">Key Priorities:</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                              <li>-- Departmental P&L reporting</li>
                              <li>-- Multi-state payroll compliance</li>
                              <li>-- Budget vs. actual variance analysis</li>
                              <li>-- Board reporting packages</li>
                              <li>-- Controller-level financial oversight</li>
                            </ul>
                          </div>
                        </div>
                        <div className="hidden md:flex absolute left-1/2 top-6 w-4 h-4 rounded-full bg-green-500 border-4 border-white transform -translate-x-1/2 shadow-md" />
                      </div>

                      {/* Stage 4: Pre-Exit */}
                      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="md:text-right md:pr-12 md:order-1 order-1">
                          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                            <h4 className="font-semibold text-brand-navy mb-3 text-sm">Key Priorities:</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                              <li>-- GAAP-compliant financials (audit-ready)</li>
                              <li>-- 3-year audited financial statements</li>
                              <li>-- Clean cap table reconciliation</li>
                              <li>-- Tax provision and deferred tax analysis</li>
                              <li>-- SOX-style internal controls (if IPO)</li>
                            </ul>
                          </div>
                        </div>
                        <div className="md:pl-12 md:order-2 order-2">
                          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3">
                            <Target className="w-3.5 h-3.5" />
                            Stage 4
                          </div>
                          <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-3">
                            Pre-Exit / IPO Readiness
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Whether it's an acquisition, merger, or IPO, your financials need to
                            withstand intense scrutiny from buyers and regulators.
                          </p>
                        </div>
                        <div className="hidden md:flex absolute left-1/2 top-6 w-4 h-4 rounded-full bg-purple-500 border-4 border-white transform -translate-x-1/2 shadow-md" />
                      </div>
                    </div>
                  </section>

                  {/* Common Startup Accounting Mistakes */}
                  <section id="common-startup-mistakes" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      5 Common Startup Accounting Mistakes (and How to Avoid Them)
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      We've worked with hundreds of startups at various stages. These are the
                      mistakes we see over and over — and they're all preventable.
                    </p>

                    <div className="space-y-6">
                      {/* Mistake 1 */}
                      <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                              Mistake #1: Mixing Personal and Business Finances
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                              This is the single most common mistake we see. Founders pay for business
                              expenses on personal cards, use personal bank accounts, or loan money to
                              the company without documentation. This creates a nightmare during tax
                              season, can pierce your corporate veil (eliminating liability protection),
                              and makes fundraising due diligence extremely difficult.
                            </p>
                            <div className="bg-white rounded-lg p-4 border border-green-100">
                              <p className="text-sm text-green-700 font-semibold flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" />
                                Fix: Open a dedicated business bank account and credit card on day one. Document every founder loan.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mistake 2 */}
                      <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                              Mistake #2: Not Tracking Expenses From Day One
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                              Many founders don't bother with bookkeeping until they have revenue or
                              raise a round. By then, months (or years) of expenses are untracked.
                              Reconstructing books retroactively costs 3-5x more than keeping them
                              current, and you'll miss deductions and R&D tax credit opportunities.
                            </p>
                            <div className="bg-white rounded-lg p-4 border border-green-100">
                              <p className="text-sm text-green-700 font-semibold flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" />
                                Fix: Start bookkeeping from your incorporation date. Even simple spreadsheet tracking is better than nothing.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mistake 3 */}
                      <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                              Mistake #3: Ignoring Tax Obligations
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                              Startups often forget about sales tax nexus (especially if selling across
                              state lines), payroll tax obligations, 1099 reporting for contractors,
                              and quarterly estimated tax payments. The IRS doesn't care that you're
                              "just a startup" — penalties and interest accrue regardless.
                            </p>
                            <div className="bg-white rounded-lg p-4 border border-green-100">
                              <p className="text-sm text-green-700 font-semibold flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" />
                                Fix: Work with a tax professional from incorporation. Set calendar reminders for all filing deadlines.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mistake 4 */}
                      <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                              Mistake #4: No Financial Projections
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                              Flying blind without financial projections means you can't accurately
                              predict when you'll run out of cash, justify hiring decisions, or build
                              the financial models investors expect. Even if projections are wrong,
                              the exercise of building them forces financial discipline.
                            </p>
                            <div className="bg-white rounded-lg p-4 border border-green-100">
                              <p className="text-sm text-green-700 font-semibold flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" />
                                Fix: Build a 12-month rolling forecast and update it monthly. Start simple — revenue, major expenses, cash.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mistake 5 */}
                      <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                              Mistake #5: Messy Cap Table
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                              Your capitalization table records who owns what in your company. A messy
                              cap table — with informal agreements, missing 409A valuations, or
                              untracked option grants — will kill or severely delay a fundraise or
                              acquisition. Legal and accounting fees to clean up a messy cap table
                              can easily run $50,000+.
                            </p>
                            <div className="bg-white rounded-lg p-4 border border-green-100">
                              <p className="text-sm text-green-700 font-semibold flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" />
                                Fix: Use Carta, Pulley, or AngelList for cap table management. Get 409A valuations before issuing options.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Investor-Ready Financial Reporting */}
                  <section id="investor-ready-reporting" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Investor-Ready Financial Reporting
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      If you plan to raise venture capital, your financial reporting needs to meet a
                      higher standard. VCs conduct thorough due diligence, and messy books are a
                      red flag that can torpedo a deal. Here's exactly what investors expect.
                    </p>

                    {/* What VCs Expect */}
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-brand-teal" />
                      What VCs Expect to See
                    </h3>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-brand-navy text-sm">GAAP-Compliant Financial Statements</p>
                            <p className="text-xs text-gray-500">Income statement, balance sheet, cash flow — accrual basis</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-brand-navy text-sm">Monthly Financial Packages</p>
                            <p className="text-xs text-gray-500">Delivered within 15 days of month-end close</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-brand-navy text-sm">Burn Rate & Runway</p>
                            <p className="text-xs text-gray-500">Net burn, gross burn, and months of runway remaining</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-brand-navy text-sm">Unit Economics</p>
                            <p className="text-xs text-gray-500">CAC, LTV, LTV:CAC ratio, payback period</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-brand-navy text-sm">Revenue Metrics</p>
                            <p className="text-xs text-gray-500">MRR/ARR, growth rate, churn, net revenue retention</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-brand-navy text-sm">Cap Table & Option Pool</p>
                            <p className="text-xs text-gray-500">Fully diluted ownership, option pool size, 409A valuation</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Burn Rate Calculator */}
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-brand-teal" />
                      Understanding Burn Rate & Runway
                    </h3>

                    <div className="bg-gradient-to-r from-brand-navy to-brand-navy/90 rounded-2xl p-8 mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-white font-[family-name:var(--font-syne)] font-bold mb-4">
                            Key Formulas
                          </h4>
                          <div className="space-y-4">
                            <div className="bg-white/10 rounded-xl p-4">
                              <p className="text-brand-teal text-xs font-semibold uppercase tracking-wider mb-1">Gross Burn Rate</p>
                              <p className="text-white font-mono text-sm">Total Monthly Operating Expenses</p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-4">
                              <p className="text-brand-teal text-xs font-semibold uppercase tracking-wider mb-1">Net Burn Rate</p>
                              <p className="text-white font-mono text-sm">Monthly Revenue - Monthly Expenses</p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-4">
                              <p className="text-brand-teal text-xs font-semibold uppercase tracking-wider mb-1">Runway (Months)</p>
                              <p className="text-white font-mono text-sm">Cash Balance / Net Monthly Burn</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-[family-name:var(--font-syne)] font-bold mb-4">
                            Example Calculation
                          </h4>
                          <div className="bg-white/10 rounded-xl p-5">
                            <div className="space-y-3 text-sm">
                              <div className="flex justify-between">
                                <span className="text-white/70">Cash in Bank</span>
                                <span className="text-white font-semibold">$2,000,000</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-white/70">Monthly Revenue</span>
                                <span className="text-white font-semibold">$50,000</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-white/70">Monthly Expenses</span>
                                <span className="text-white font-semibold">$150,000</span>
                              </div>
                              <div className="border-t border-white/20 pt-3 flex justify-between">
                                <span className="text-white/70">Net Burn</span>
                                <span className="text-red-400 font-semibold">-$100,000/mo</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-brand-teal font-semibold">Runway</span>
                                <span className="text-brand-teal font-bold text-lg">20 months</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-white/50 text-xs mt-3">
                            Rule of thumb: Start fundraising when you have 6-9 months of runway left.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Unit Economics */}
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-brand-teal" />
                      Unit Economics Investors Care About
                    </h3>

                    <div className="overflow-x-auto mb-8">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="text-left p-4 font-semibold rounded-tl-xl">Metric</th>
                            <th className="text-left p-4 font-semibold">What It Measures</th>
                            <th className="text-left p-4 font-semibold rounded-tr-xl">Benchmark</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="p-4 font-medium text-brand-navy">CAC</td>
                            <td className="p-4 text-gray-600">Cost to acquire one customer</td>
                            <td className="p-4 text-gray-600">Varies by industry</td>
                          </tr>
                          <tr className="border-b border-gray-100 bg-gray-50">
                            <td className="p-4 font-medium text-brand-navy">LTV</td>
                            <td className="p-4 text-gray-600">Lifetime revenue per customer</td>
                            <td className="p-4 text-gray-600">Higher is better</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-4 font-medium text-brand-navy">LTV:CAC Ratio</td>
                            <td className="p-4 text-gray-600">Return on acquisition spending</td>
                            <td className="p-4 text-brand-teal font-semibold">3:1 or higher</td>
                          </tr>
                          <tr className="border-b border-gray-100 bg-gray-50">
                            <td className="p-4 font-medium text-brand-navy">CAC Payback</td>
                            <td className="p-4 text-gray-600">Months to recoup acquisition cost</td>
                            <td className="p-4 text-brand-teal font-semibold">&lt; 12 months</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-4 font-medium text-brand-navy">Gross Margin</td>
                            <td className="p-4 text-gray-600">Revenue after direct costs</td>
                            <td className="p-4 text-brand-teal font-semibold">70%+ (SaaS)</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 font-medium text-brand-navy rounded-bl-xl">Net Revenue Retention</td>
                            <td className="p-4 text-gray-600">Revenue kept + expanded from existing customers</td>
                            <td className="p-4 text-brand-teal font-semibold rounded-br-xl">110%+</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Hire vs Outsource Decision Framework */}
                  <section id="hire-vs-outsource" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Hire vs Outsource: The Decision Framework
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      This is the core question every startup founder faces: should you hire an
                      in-house accountant or bookkeeper, or outsource your finance function? The
                      answer depends on your stage, budget, and complexity. Let's break it down.
                    </p>

                    {/* Cost Comparison by Stage */}
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-brand-teal" />
                      Cost Comparison by Startup Stage
                    </h3>

                    <div className="overflow-x-auto mb-8">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="text-left p-4 font-semibold rounded-tl-xl">Stage</th>
                            <th className="text-left p-4 font-semibold">Hire In-House</th>
                            <th className="text-left p-4 font-semibold">Outsource</th>
                            <th className="text-left p-4 font-semibold rounded-tr-xl">Savings</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="p-4">
                              <p className="font-medium text-brand-navy">Pre-Seed</p>
                              <p className="text-xs text-gray-500">0-10 employees</p>
                            </td>
                            <td className="p-4 text-gray-600">
                              <p className="font-semibold">$55,000 - $70,000/yr</p>
                              <p className="text-xs text-gray-400">Part-time bookkeeper</p>
                            </td>
                            <td className="p-4">
                              <p className="font-semibold text-brand-teal">$3,600 - $9,600/yr</p>
                              <p className="text-xs text-gray-400">Basic bookkeeping service</p>
                            </td>
                            <td className="p-4 font-bold text-green-600">85-93%</td>
                          </tr>
                          <tr className="border-b border-gray-100 bg-gray-50">
                            <td className="p-4">
                              <p className="font-medium text-brand-navy">Seed</p>
                              <p className="text-xs text-gray-500">10-25 employees</p>
                            </td>
                            <td className="p-4 text-gray-600">
                              <p className="font-semibold">$70,000 - $100,000/yr</p>
                              <p className="text-xs text-gray-400">Full-time bookkeeper</p>
                            </td>
                            <td className="p-4">
                              <p className="font-semibold text-brand-teal">$12,000 - $30,000/yr</p>
                              <p className="text-xs text-gray-400">Full bookkeeping + reporting</p>
                            </td>
                            <td className="p-4 font-bold text-green-600">57-83%</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-4">
                              <p className="font-medium text-brand-navy">Series A</p>
                              <p className="text-xs text-gray-500">25-75 employees</p>
                            </td>
                            <td className="p-4 text-gray-600">
                              <p className="font-semibold">$180,000 - $280,000/yr</p>
                              <p className="text-xs text-gray-400">Bookkeeper + Controller</p>
                            </td>
                            <td className="p-4">
                              <p className="font-semibold text-brand-teal">$36,000 - $72,000/yr</p>
                              <p className="text-xs text-gray-400">Full service + controller</p>
                            </td>
                            <td className="p-4 font-bold text-green-600">60-80%</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 rounded-bl-xl">
                              <p className="font-medium text-brand-navy">Series B+</p>
                              <p className="text-xs text-gray-500">75+ employees</p>
                            </td>
                            <td className="p-4 text-gray-600">
                              <p className="font-semibold">$350,000 - $550,000/yr</p>
                              <p className="text-xs text-gray-400">Full finance team</p>
                            </td>
                            <td className="p-4">
                              <p className="font-semibold text-brand-teal">$72,000 - $180,000/yr</p>
                              <p className="text-xs text-gray-400">Full function + fractional CFO</p>
                            </td>
                            <td className="p-4 font-bold text-green-600 rounded-br-xl">50-79%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Savings Highlight */}
                    <div className="bg-gradient-to-r from-brand-teal/10 to-brand-teal/5 rounded-2xl p-8 border border-brand-teal/20 mb-8">
                      <h4 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">
                        The Startup Math
                      </h4>
                      <p className="text-gray-700 mb-4">
                        For a typical Series A startup that needs bookkeeping, monthly close,
                        financial reporting, and controller-level oversight:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-xl p-5 shadow-sm">
                          <p className="text-sm text-gray-500 mb-1">Hire In-House</p>
                          <p className="text-2xl font-bold text-brand-navy">$180,000 - $280,000/yr</p>
                          <p className="text-xs text-gray-400 mt-1">
                            Salaries + benefits + software + management time
                          </p>
                        </div>
                        <div className="bg-white rounded-xl p-5 shadow-sm border-2 border-brand-teal">
                          <p className="text-sm text-gray-500 mb-1">Outsource to MZBPO</p>
                          <p className="text-2xl font-bold text-brand-teal">$36,000 - $72,000/yr</p>
                          <p className="text-xs text-gray-400 mt-1">All-inclusive, scalable, expert team</p>
                        </div>
                      </div>
                      <p className="text-brand-navy font-semibold mt-4">
                        That's $100,000 - $200,000+ in savings — enough to fund 1-2 additional engineers or extend your runway by months.
                      </p>
                    </div>

                    {/* Decision Matrix */}
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                      <Scale className="w-5 h-5 text-brand-teal" />
                      Decision Matrix
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">
                          Outsource When:
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">You're pre-seed through Series A</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">Cash conservation is critical (it usually is)</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">You need senior expertise but not full-time</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">You want investor-ready financials fast</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">You're preparing for a fundraise</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">Founders want to focus on product, not back-office</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">
                          Consider Hiring When:
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">You're Series B+ with consistent, high volume</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">You have complex inventory or manufacturing</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">You need real-time, on-site support daily</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">You're preparing for IPO and need SOX controls</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">You have highly regulated industry requirements</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">Even then, a hybrid model often makes sense</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6 my-8">
                      <p className="text-brand-navy font-semibold mb-2">
                        The Reality for Most Startups
                      </p>
                      <p className="text-gray-600">
                        For the vast majority of startups — from pre-seed through Series A and often
                        beyond — <strong>outsourcing is the clear winner</strong>. It gives you access
                        to experienced accountants, scalable capacity, and investor-grade reporting
                        at a fraction of the cost. The money you save can be redirected to product
                        development, sales, or extending your runway.
                      </p>
                    </div>
                  </section>

                  {/* What to Look for in a Provider */}
                  <section id="what-to-look-for" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      What to Look for in a Startup Accounting Provider
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Not all outsourced accounting firms are created equal. If you're going to
                      trust someone with your startup's finances, here's what to evaluate:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                        <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-4">
                          <Rocket className="w-5 h-5 text-brand-teal" />
                        </div>
                        <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                          Startup Experience
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          They should understand startup accounting specifically — burn rate tracking,
                          stock-based compensation, convertible notes, SAFEs, revenue recognition for
                          SaaS, and venture-backed company reporting. Generic small business
                          bookkeeping firms often lack this expertise.
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                        <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-4">
                          <TrendingUp className="w-5 h-5 text-brand-teal" />
                        </div>
                        <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                          Fundraising Support
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          The best providers help prepare data rooms, financial models, and due
                          diligence packages. They've been through fundraising cycles before and know
                          what investors ask for. This alone can save weeks during a raise.
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                        <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-4">
                          <BarChart3 className="w-5 h-5 text-brand-teal" />
                        </div>
                        <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                          Scalability
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Can they grow with you? Your provider should be able to handle your books
                          at 10 employees or 500. Look for firms that offer tiered service levels,
                          from basic bookkeeping through controller and CFO services.
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                        <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-4">
                          <Zap className="w-5 h-5 text-brand-teal" />
                        </div>
                        <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                          Tech-Forward Approach
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Modern providers use cloud accounting, automated bank feeds, AP automation,
                          expense management integrations, and real-time dashboards. If they're still
                          emailing spreadsheets, look elsewhere.
                        </p>
                      </div>
                    </div>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6 my-8">
                      <p className="text-brand-navy font-semibold mb-2">
                        Why MZBPO?
                      </p>
                      <p className="text-gray-600">
                        As the outsourcing arm of Muniff Ziauddin and Co. — an independent member
                        of <strong>BKR International</strong>, ranked among the top 10 global
                        accounting associations — MZBPO brings Big 4-caliber processes and
                        internationally aligned standards at a fraction of the cost. Our team has
                        deep experience with VC-backed startups, SaaS businesses, and companies
                        scaling from seed through Series C and beyond.
                      </p>
                    </div>
                  </section>

                  {/* Tax Strategies for Startups */}
                  <section id="tax-strategies" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Tax Strategies Every Startup Should Know
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Startup tax planning is an area where the right strategy can save you
                      hundreds of thousands — or even millions — of dollars. Here are four critical
                      strategies that every startup founder should understand.
                    </p>

                    {/* R&D Tax Credits */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                      <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-brand-teal text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                        R&D Tax Credits
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        If your startup is developing new or improved products, processes, or
                        software, you likely qualify for federal and state R&D tax credits. Startups
                        with less than $5M in gross receipts can apply up to <strong>$500,000 in
                        R&D credits against payroll taxes</strong> (FICA) — even if you have no
                        income tax liability.
                      </p>
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <p className="text-sm text-gray-700">
                          <strong>Qualifying activities include:</strong> Software development, product
                          design, engineering, testing, prototyping, and cloud infrastructure costs
                          related to development. Track these expenses separately in your chart of
                          accounts from day one.
                        </p>
                      </div>
                    </div>

                    {/* QSBS */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                      <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-brand-teal text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                        Qualified Small Business Stock (QSBS) Exclusion
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        Section 1202 of the Internal Revenue Code allows founders and early investors
                        in C-Corps to <strong>exclude up to $10 million (or 10x their basis) in
                        capital gains</strong> from federal taxes when they sell their stock. To
                        qualify:
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600 mb-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>The company must be a C-Corporation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>Gross assets must be under $50M at the time of stock issuance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>Stock must be held for at least 5 years</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>The company must be in an active trade or business (not investing, law, etc.)</span>
                        </li>
                      </ul>
                      <div className="bg-white rounded-lg p-4 border border-brand-teal/20">
                        <p className="text-sm text-brand-navy font-semibold">
                          This is one of the most powerful tax benefits available to startup founders.
                          Make sure your accountant tracks QSBS eligibility from incorporation.
                        </p>
                      </div>
                    </div>

                    {/* Section 83(b) */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                      <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-brand-teal text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                        Section 83(b) Elections
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        When founders receive restricted stock subject to vesting, they can file an
                        83(b) election with the IRS within 30 days of the grant. This lets you pay
                        ordinary income tax on the stock's value at grant date (usually near zero
                        for early-stage startups) rather than at vesting, when the stock could be
                        worth significantly more.
                      </p>
                      <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                        <p className="text-sm text-red-700 font-semibold flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" />
                          Critical: The 30-day deadline is absolute. Missing it cannot be undone and can result in massive tax liability later. This is the most time-sensitive tax filing for founders.
                        </p>
                      </div>
                    </div>

                    {/* State Tax Nexus */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                      <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-brand-teal text-white flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                        State Tax Nexus
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        With remote teams and customers across multiple states, startups often
                        unknowingly create tax nexus — obligations to collect sales tax, file income
                        tax returns, or register as a foreign entity in states where they have
                        employees, contractors, or significant sales.
                      </p>
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <p className="text-sm text-gray-700">
                          <strong>Key triggers:</strong> Having an employee in a state, storing inventory,
                          exceeding economic nexus thresholds (typically $100K in sales or 200
                          transactions), or having a physical office. After the <em>Wayfair</em> Supreme
                          Court decision, economic nexus applies even without physical presence.
                        </p>
                      </div>
                    </div>

                    {/* Tax Stats Banner */}
                    <div className="bg-gradient-to-r from-brand-navy to-brand-navy/90 rounded-2xl p-8 my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                          $500K
                        </div>
                        <div className="text-white/70 text-sm mt-1">
                          max R&D credit against payroll tax
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                          $10M
                        </div>
                        <div className="text-white/70 text-sm mt-1">
                          QSBS capital gains exclusion per holder
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                          30 days
                        </div>
                        <div className="text-white/70 text-sm mt-1">
                          deadline for 83(b) election filing
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Conclusion */}
                  <section id="conclusion" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Conclusion: Getting Startup Accounting Right
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Startup accounting isn't optional, and it isn't something you can "figure out
                      later." The financial decisions you make in the first months of your company
                      have compounding effects — good or bad — for years to come. The right entity
                      structure, accounting method, financial processes, and tax strategies create a
                      foundation that supports fundraising, growth, and eventually a successful exit.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      For most startups, outsourcing your accounting function is the smartest financial
                      decision you can make. It gives you access to experienced professionals, scalable
                      capacity, and investor-grade reporting at 50-90% less than building an in-house
                      team. The money you save extends your runway and goes directly into building
                      your product and growing your business.
                    </p>

                    {/* Key Takeaways */}
                    <div className="bg-brand-navy rounded-2xl p-8 text-white">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-6">
                        Key Takeaways
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span className="text-white/80 text-sm">
                            Incorporate as a Delaware C-Corp if you plan to raise VC funding
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span className="text-white/80 text-sm">
                            Use accrual accounting from the start for investor readiness
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span className="text-white/80 text-sm">
                            Separate personal and business finances immediately
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span className="text-white/80 text-sm">
                            Track R&D expenses from day one for tax credits
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span className="text-white/80 text-sm">
                            File 83(b) elections within 30 days — no exceptions
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span className="text-white/80 text-sm">
                            Know your burn rate and runway at all times
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span className="text-white/80 text-sm">
                            Outsource accounting pre-seed through Series A (at minimum)
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span className="text-white/80 text-sm">
                            Prepare investor-ready financials before you need them
                          </span>
                        </div>
                      </div>
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
                        member of BKR International — the 5th largest global accounting association.
                        We provide outsourced bookkeeping, controller services, internal audit,
                        payroll, and startup finance support to growing businesses worldwide.
                      </p>
                      <div className="flex gap-4 mt-4">
                        <a
                          href="/services/bookkeeping-accounting"
                          className="text-sm text-brand-teal hover:underline font-medium"
                        >
                          Our Services →
                        </a>
                        <a
                          href="/meeting"
                          className="text-sm text-brand-teal hover:underline font-medium"
                        >
                          Schedule a Call →
                        </a>
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
          headline="Ready to Get Your Startup Accounting Right?"
          bodyText="Get a free consultation to discuss your startup's accounting needs. Our team has deep experience with VC-backed startups at every stage — from pre-seed through Series C and beyond."
          ctaText="Schedule a Free Consultation"
          trackingContentName="Blog CTA - Accounting for Startups"
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
            headline: "Accounting for Startups: When to Hire vs Outsource Your Finances",
            description:
              "Complete guide to startup accounting — entity structure, financial lifecycle, investor-ready reporting, tax strategies, and when to hire vs outsource your finance function.",
            image:
              "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=630&fit=crop",
            datePublished: "2026-02-12T00:00:00.000Z",
            dateModified: "2026-02-12T00:00:00.000Z",
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
              "@id": "https://www.mzbpo.com/blog/accounting-for-startups",
            },
          }),
        }}
      />
    </div>
  )
}
