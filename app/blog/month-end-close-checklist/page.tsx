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
  Circle,
  AlertTriangle,
  Lightbulb,
  ChevronRight,
  BookOpen,
  FileSpreadsheet,
  Calculator,
  CreditCard,
  Building2,
  Receipt,
  FileCheck,
  BarChart3,
  Users,
  Banknote,
  ClipboardCheck,
  Timer,
  Target,
  TrendingDown,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Month-End Close Checklist: Best Practices for Accurate Reporting (2026)",
  description:
    "A comprehensive month-end close checklist with step-by-step procedures, best practices, and tips to streamline your financial close process. Free downloadable template included.",
  alternates: { canonical: "/blog/month-end-close-checklist" },
  openGraph: {
    title: "Month-End Close Checklist: Best Practices for Accurate Reporting | MZBPO",
    description:
      "A comprehensive month-end close checklist with step-by-step procedures, best practices, and tips to streamline your financial close process.",
    url: "https://www.mzbpo.com/blog/month-end-close-checklist",
    type: "article",
    publishedTime: "2026-02-11T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Month-End Close Checklist and Financial Reporting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Month-End Close Checklist: Best Practices for Accurate Reporting",
    description:
      "A comprehensive month-end close checklist with step-by-step procedures and best practices.",
  },
}

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "what-is-month-end-close", title: "What is Month-End Close?" },
  { id: "pre-close-preparation", title: "Pre-Close Preparation" },
  { id: "the-checklist", title: "The Complete Checklist" },
  { id: "review-and-reporting", title: "Review and Reporting" },
  { id: "common-mistakes", title: "Common Mistakes to Avoid" },
  { id: "speeding-up-close", title: "How to Speed Up Your Close" },
  { id: "conclusion", title: "Conclusion" },
]

const checklistCategories = [
  {
    title: "Cash and Bank Reconciliations",
    icon: Banknote,
    color: "bg-emerald-500",
    items: [
      "Reconcile all bank accounts to GL balances",
      "Investigate and clear all reconciling items over 30 days",
      "Review outstanding checks and void stale-dated items",
      "Reconcile petty cash and replenish if needed",
      "Verify all bank fees are recorded",
      "Confirm wire transfers and ACH payments are recorded",
    ],
  },
  {
    title: "Accounts Receivable",
    icon: Receipt,
    color: "bg-blue-500",
    items: [
      "Review AR aging report for accuracy",
      "Send statements to customers with outstanding balances",
      "Evaluate and record bad debt allowance",
      "Write off uncollectible accounts (with approval)",
      "Reconcile AR sub-ledger to GL",
      "Follow up on large or unusual receivables",
    ],
  },
  {
    title: "Accounts Payable",
    icon: CreditCard,
    color: "bg-purple-500",
    items: [
      "Process and record all vendor invoices received",
      "Accrue for goods/services received but not yet invoiced",
      "Review AP aging for accuracy and duplicates",
      "Reconcile AP sub-ledger to GL",
      "Verify all recurring payments are recorded",
      "Review vendor credits and apply appropriately",
    ],
  },
  {
    title: "Payroll and Employee Expenses",
    icon: Users,
    color: "bg-orange-500",
    items: [
      "Verify all payroll entries are recorded",
      "Accrue unpaid wages and bonuses",
      "Reconcile payroll tax liabilities",
      "Process and record employee expense reports",
      "Review and accrue PTO/vacation liabilities",
      "Reconcile benefits payables (401k, health insurance)",
    ],
  },
  {
    title: "Revenue Recognition",
    icon: TrendingDown,
    color: "bg-teal-500",
    items: [
      "Review and record all revenue for the period",
      "Ensure revenue recognition criteria are met (ASC 606)",
      "Record deferred revenue adjustments",
      "Reconcile billing system to GL",
      "Review and adjust prepaid revenue",
      "Verify multi-element arrangements are properly allocated",
    ],
  },
  {
    title: "Fixed Assets and Depreciation",
    icon: Building2,
    color: "bg-indigo-500",
    items: [
      "Record depreciation expense for the month",
      "Capitalize new asset purchases",
      "Record disposals and calculate gain/loss",
      "Reconcile fixed asset register to GL",
      "Review assets for impairment indicators",
      "Update asset tags and location records",
    ],
  },
  {
    title: "Inventory (if applicable)",
    icon: FileSpreadsheet,
    color: "bg-rose-500",
    items: [
      "Reconcile inventory counts to system",
      "Record cost of goods sold adjustments",
      "Review and adjust obsolete inventory reserves",
      "Verify inventory valuation method consistency",
      "Investigate significant variances",
      "Record intercompany inventory transfers",
    ],
  },
  {
    title: "Accruals and Prepaid Expenses",
    icon: Calculator,
    color: "bg-amber-500",
    items: [
      "Review and adjust prepaid expenses (insurance, rent, etc.)",
      "Accrue interest expense on loans",
      "Accrue professional fees and consulting expenses",
      "Review and adjust deferred rent",
      "Accrue utilities and other operating expenses",
      "Document basis for all significant accruals",
    ],
  },
  {
    title: "Intercompany (if applicable)",
    icon: Building2,
    color: "bg-cyan-500",
    items: [
      "Reconcile intercompany balances",
      "Record intercompany transactions",
      "Eliminate intercompany profits in inventory",
      "Confirm balances with related entities",
      "Document transfer pricing methodology",
      "Prepare intercompany settlement entries",
    ],
  },
  {
    title: "Final Review and Close",
    icon: ClipboardCheck,
    color: "bg-green-500",
    items: [
      "Review trial balance for unusual balances",
      "Verify all journal entries are approved",
      "Run financial statement variance analysis",
      "Prepare flux analysis vs. prior period and budget",
      "Document significant transactions and estimates",
      "Close the period in the accounting system",
    ],
  },
]

const commonMistakes = [
  {
    mistake: "Skipping bank reconciliations",
    impact: "Undetected errors, fraud risk, and cash flow misstatement",
    solution: "Reconcile all accounts monthly, investigate all variances",
  },
  {
    mistake: "Not accruing for unbilled expenses",
    impact: "Understated expenses and overstated profit",
    solution: "Review contracts, POs, and receiving reports for accruals",
  },
  {
    mistake: "Inconsistent cutoff procedures",
    impact: "Revenue/expense timing errors across periods",
    solution: "Establish clear cutoff dates and communicate to all departments",
  },
  {
    mistake: "Inadequate documentation",
    impact: "Audit findings, compliance issues, knowledge loss",
    solution: "Require support for all journal entries over threshold",
  },
  {
    mistake: "Rushing through review",
    impact: "Errors propagate to financial statements",
    solution: "Build review time into the close calendar",
  },
  {
    mistake: "Not standardizing the process",
    impact: "Inconsistent quality, longer close times",
    solution: "Create detailed procedures and checklists (like this one!)",
  },
]

const relatedPosts = [
  {
    title: "In-House vs Outsourced Accounting: Complete Cost Comparison",
    href: "/blog/in-house-vs-outsourced-accounting",
    description: "Compare the true costs and benefits of each accounting model.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
  },
  {
    title: "What is BKR International? How Our Global Network Benefits Your Business",
    href: "/blog/what-is-bkr-international",
    description: "Learn about our membership in a top 10 global accounting association.",
    image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=400&h=250&fit=crop",
  },
  {
    title: "Internal Controls for Small Business: A Fraud Prevention Guide",
    href: "/blog/internal-controls-small-business",
    description: "Essential controls every growing business needs.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
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
                <span className="text-white/80">Month-End Close Checklist</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Bookkeeping</span>
              </div>

              {/* Title */}
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Month-End Close Checklist:{" "}
                <span className="text-brand-teal">Best Practices</span> for Accurate Reporting
              </h1>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                A comprehensive, step-by-step checklist to streamline your monthly close process,
                reduce errors, and deliver accurate financial statements on time.
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>MZBPO Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>February 11, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>15 min read</span>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative -mt-8 mb-12 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=820&fit=crop"
                  alt="Financial dashboard showing month-end close metrics and reports"
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
                      Struggling with closes?
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      Let us handle your month-end close with consistent, on-time delivery.
                    </p>
                    <a
                      href="/meeting"
                      className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all"
                    >
                      Book a Call
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Quick Stats */}
                  <div className="mt-6 bg-brand-teal/10 rounded-2xl p-6 border border-brand-teal/20">
                    <h4 className="font-[family-name:var(--font-syne)] text-sm font-bold text-brand-navy mb-4">
                      Quick Stats
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Checklist Items</span>
                        <span className="font-semibold text-brand-navy">60+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Categories</span>
                        <span className="font-semibold text-brand-navy">10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Target Close</span>
                        <span className="font-semibold text-brand-navy">5-7 days</span>
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
                      The month-end close is one of the most critical processes in any finance
                      function. Done well, it provides accurate, timely financial information that
                      enables confident business decisions. Done poorly, it creates unreliable
                      numbers, delayed reports, and stressed-out teams.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      This guide provides a comprehensive checklist covering every aspect of the
                      month-end close process—from pre-close preparation through final review. Use
                      it as a template to standardize your own close procedures and ensure nothing
                      falls through the cracks.
                    </p>
                  </section>

                  {/* Key Stats Banner */}
                  <div className="bg-gradient-to-r from-brand-navy to-brand-navy/90 rounded-2xl p-8 my-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                          <Timer className="w-6 h-6 text-brand-teal" />
                        </div>
                        <div className="text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                          5-7 Days
                        </div>
                        <div className="text-white/70 text-sm mt-1">Best practice close time</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                          <AlertTriangle className="w-6 h-6 text-brand-teal" />
                        </div>
                        <div className="text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                          55%
                        </div>
                        <div className="text-white/70 text-sm mt-1">
                          Cite lack of standardization as biggest risk
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                          <Target className="w-6 h-6 text-brand-teal" />
                        </div>
                        <div className="text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                          30%
                        </div>
                        <div className="text-white/70 text-sm mt-1">
                          Time saved with standardized checklists
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* What is Month-End Close */}
                  <section id="what-is-month-end-close" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      What is the Month-End Close?
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The month-end close is the process of finalizing all financial transactions
                      for a given month, ensuring accuracy, and preparing financial statements. It
                      involves:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                          <FileCheck className="w-5 h-5 text-brand-teal" />
                          Recording Transactions
                        </h4>
                        <p className="text-sm text-gray-600">
                          Ensuring all revenue, expenses, and other transactions are captured in the
                          correct period.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                          <Calculator className="w-5 h-5 text-brand-teal" />
                          Reconciling Accounts
                        </h4>
                        <p className="text-sm text-gray-600">
                          Verifying that account balances are accurate by comparing to supporting
                          documentation.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                          <FileSpreadsheet className="w-5 h-5 text-brand-teal" />
                          Making Adjustments
                        </h4>
                        <p className="text-sm text-gray-600">
                          Recording accruals, deferrals, and other adjusting entries to reflect
                          economic reality.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-brand-teal" />
                          Preparing Reports
                        </h4>
                        <p className="text-sm text-gray-600">
                          Generating financial statements and management reports for
                          decision-making.
                        </p>
                      </div>
                    </div>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6 my-8">
                      <p className="text-brand-navy font-semibold mb-2">Why It Matters</p>
                      <p className="text-gray-600">
                        A reliable month-end close process gives leadership the accurate, timely
                        financial information they need to make strategic decisions, manage cash
                        flow, meet compliance requirements, and communicate with investors and
                        lenders.
                      </p>
                    </div>
                  </section>

                  {/* Pre-Close Preparation */}
                  <section id="pre-close-preparation" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Pre-Close Preparation (Days -5 to -1)
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      A smooth close starts before month-end. These preparatory tasks help prevent
                      bottlenecks and ensure you're ready to hit the ground running.
                    </p>

                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-brand-teal" />
                          Pre-Close Checklist
                        </h3>
                      </div>
                      <div className="p-6 space-y-4">
                        {[
                          "Review close calendar and confirm deadlines with team",
                          "Send reminders to departments for expense reports and invoices",
                          "Confirm all source systems are current (billing, payroll, etc.)",
                          "Review open items from prior month's close",
                          "Prepare preliminary bank reconciliations",
                          "Verify access to all necessary systems and reports",
                          "Clear any processing backlogs (invoice entry, payment processing)",
                          "Communicate cutoff dates to vendors and customers",
                        ].map((item, idx) => (
                          <label
                            key={idx}
                            className="flex items-start gap-3 cursor-pointer group"
                          >
                            <div className="mt-0.5 w-5 h-5 rounded border-2 border-gray-300 group-hover:border-brand-teal flex items-center justify-center transition-colors">
                              <CheckCircle2 className="w-4 h-4 text-transparent group-hover:text-brand-teal/30" />
                            </div>
                            <span className="text-gray-600">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Timeline Visual */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">
                        Recommended Close Timeline
                      </h4>
                      <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-brand-teal/20" />
                        <div className="space-y-6">
                          {[
                            {
                              day: "Day 1",
                              tasks: "Bank reconciliations, cash posting, AR/AP cutoff",
                            },
                            {
                              day: "Day 2",
                              tasks: "Revenue recognition, inventory counts, payroll entries",
                            },
                            {
                              day: "Day 3",
                              tasks: "Accruals, prepaids, depreciation, intercompany",
                            },
                            {
                              day: "Day 4",
                              tasks: "Trial balance review, variance analysis, adjustments",
                            },
                            {
                              day: "Day 5",
                              tasks:
                                "Final review, financial statement preparation, close period",
                            },
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 pl-2">
                              <div className="w-5 h-5 rounded-full bg-brand-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-white">{idx + 1}</span>
                              </div>
                              <div>
                                <p className="font-semibold text-brand-navy">{item.day}</p>
                                <p className="text-sm text-gray-600">{item.tasks}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* The Complete Checklist */}
                  <section id="the-checklist" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      The Complete Month-End Close Checklist
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Below is a comprehensive checklist organized by category. Not all items will
                      apply to every business—customize this list based on your company's specific
                      needs and complexity.
                    </p>

                    <div className="space-y-6">
                      {checklistCategories.map((category, catIdx) => (
                        <div
                          key={catIdx}
                          className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
                        >
                          <div
                            className={`px-6 py-4 border-b border-gray-200 flex items-center gap-3`}
                          >
                            <div
                              className={`w-10 h-10 rounded-xl ${category.color} flex items-center justify-center`}
                            >
                              <category.icon className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">
                              {category.title}
                            </h3>
                            <span className="ml-auto text-sm text-gray-400">
                              {category.items.length} items
                            </span>
                          </div>
                          <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {category.items.map((item, itemIdx) => (
                                <label
                                  key={itemIdx}
                                  className="flex items-start gap-3 cursor-pointer group"
                                >
                                  <div className="mt-0.5 w-5 h-5 rounded border-2 border-gray-300 group-hover:border-brand-teal flex items-center justify-center transition-colors flex-shrink-0">
                                    <Circle className="w-3 h-3 text-transparent" />
                                  </div>
                                  <span className="text-sm text-gray-600">{item}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Review and Reporting */}
                  <section id="review-and-reporting" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Review and Financial Reporting
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      After completing the transaction processing, these final review steps ensure
                      accuracy before closing the books and generating reports.
                    </p>

                    <div className="relative rounded-2xl overflow-hidden mb-6">
                      <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
                        alt="Financial reporting dashboard with charts and metrics"
                        width={800}
                        height={400}
                        className="w-full object-cover"
                      />
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy flex items-center gap-2">
                          <ClipboardCheck className="w-5 h-5 text-brand-teal" />
                          Final Review Checklist
                        </h3>
                      </div>
                      <div className="p-6 space-y-4">
                        {[
                          "Review trial balance for unusual or unexpected balances",
                          "Perform analytical review (compare to prior period, budget, forecast)",
                          "Investigate all significant variances and document explanations",
                          "Verify all manual journal entries have proper documentation and approval",
                          "Confirm all sub-ledgers reconcile to general ledger",
                          "Review balance sheet accounts for reasonableness",
                          "Check income statement for proper revenue/expense matching",
                          "Verify intercompany accounts eliminate to zero (if applicable)",
                          "Prepare management discussion of financial results",
                          "Generate standard financial reporting package",
                          "Close the accounting period in the system",
                          "Archive supporting documentation",
                        ].map((item, idx) => (
                          <label
                            key={idx}
                            className="flex items-start gap-3 cursor-pointer group"
                          >
                            <div className="mt-0.5 w-5 h-5 rounded border-2 border-gray-300 group-hover:border-brand-teal flex items-center justify-center transition-colors">
                              <Circle className="w-3 h-3 text-transparent" />
                            </div>
                            <span className="text-gray-600">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Variance Analysis Tip */}
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                          <Lightbulb className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-amber-800 mb-2">
                            Pro Tip: Variance Analysis
                          </h4>
                          <p className="text-amber-700 text-sm">
                            For effective variance analysis, compare current month to: (1) prior
                            month, (2) same month last year, and (3) budget. Set materiality
                            thresholds (e.g., $10K or 10%) and require explanations for all
                            variances exceeding the threshold.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Common Mistakes */}
                  <section id="common-mistakes" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Common Mistakes to Avoid
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Even experienced accounting teams make these errors. Being aware of common
                      pitfalls helps you build processes that prevent them.
                    </p>

                    <div className="space-y-4">
                      {commonMistakes.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                        >
                          <div className="p-5">
                            <div className="flex items-start gap-4">
                              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                                <AlertTriangle className="w-5 h-5 text-red-500" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-brand-navy mb-1">
                                  {item.mistake}
                                </h4>
                                <p className="text-sm text-red-600 mb-2">
                                  <strong>Impact:</strong> {item.impact}
                                </p>
                                <p className="text-sm text-gray-600">
                                  <strong className="text-brand-teal">Solution:</strong>{" "}
                                  {item.solution}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Speeding Up Close */}
                  <section id="speeding-up-close" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      How to Speed Up Your Month-End Close
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Best-in-class organizations close their books in 3-5 days. Here's how to
                      reduce your close time without sacrificing accuracy.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-brand-teal/10 to-brand-teal/5 rounded-xl p-6 border border-brand-teal/20">
                        <div className="w-12 h-12 rounded-xl bg-brand-teal/20 flex items-center justify-center mb-4">
                          <Zap className="w-6 h-6 text-brand-teal" />
                        </div>
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                          Automate Repetitive Tasks
                        </h3>
                        <p className="text-sm text-gray-600">
                          Use accounting software features for automatic bank feeds, recurring
                          journal entries, and automated reconciliations. Focus human effort on
                          review and analysis.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-brand-navy/10 to-brand-navy/5 rounded-xl p-6 border border-brand-navy/20">
                        <div className="w-12 h-12 rounded-xl bg-brand-navy/20 flex items-center justify-center mb-4">
                          <Calendar className="w-6 h-6 text-brand-navy" />
                        </div>
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                          Implement Continuous Close
                        </h3>
                        <p className="text-sm text-gray-600">
                          Don't wait until month-end for everything. Reconcile weekly, process
                          transactions daily, and review accounts continuously throughout the
                          month.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-6 border border-purple-200">
                        <div className="w-12 h-12 rounded-xl bg-purple-200 flex items-center justify-center mb-4">
                          <Users className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                          Parallelize Workstreams
                        </h3>
                        <p className="text-sm text-gray-600">
                          Assign different team members to independent tasks that can run
                          simultaneously. Don't create artificial dependencies that force
                          sequential processing.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl p-6 border border-amber-200">
                        <div className="w-12 h-12 rounded-xl bg-amber-200 flex items-center justify-center mb-4">
                          <FileCheck className="w-6 h-6 text-amber-600" />
                        </div>
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                          Standardize and Document
                        </h3>
                        <p className="text-sm text-gray-600">
                          Create detailed procedures for every close task. This enables consistent
                          execution regardless of who performs the work and speeds up training.
                        </p>
                      </div>
                    </div>

                    {/* Additional Tips */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">
                        More Ways to Accelerate Your Close
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Set hard cutoff dates</strong> and enforce them—late expense
                            reports get pushed to next month
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Use materiality thresholds</strong>—don't chase immaterial
                            differences that won't impact decisions
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Pre-calculate accruals</strong> using formulas and estimates
                            rather than waiting for final invoices
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Hold post-mortems</strong> after each close to identify and fix
                            bottlenecks
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Consider outsourcing</strong>—a dedicated team with standardized
                            processes can often close faster than overburdened internal staff
                          </span>
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* Conclusion */}
                  <section id="conclusion" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Conclusion
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      A well-executed month-end close is the foundation of reliable financial
                      reporting. By following a standardized checklist, avoiding common mistakes,
                      and continuously improving your processes, you can achieve faster closes with
                      higher accuracy.
                    </p>

                    <div className="bg-brand-navy rounded-2xl p-8 text-white mb-6">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-4">
                        Key Takeaways
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Standardize</strong>—use a consistent checklist and procedures
                            every month
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Prepare</strong>—start close activities before month-end to
                            avoid bottlenecks
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Reconcile</strong>—verify every balance against supporting
                            documentation
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Review</strong>—analytical procedures catch errors before they
                            hit the statements
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Improve</strong>—continuously refine your process based on
                            lessons learned
                          </span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      If your team struggles with month-end close—whether it's taking too long,
                      producing unreliable numbers, or creating undue stress—consider whether
                      outsourcing could help. At MZBPO, we manage month-end close for businesses of
                      all sizes, delivering consistent, accurate financial statements on a
                      predictable timeline.
                    </p>
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
                        services to growing businesses worldwide.
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
          headline="Want Reliable Month-End Closes Without the Hassle?"
          bodyText="Our outsourced bookkeeping team delivers consistent, accurate monthly closes on a predictable timeline. Focus on your business while we handle the books."
          ctaText="Schedule a Free Consultation"
          trackingContentName="Blog CTA - Month End Close Checklist"
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
            headline: "Month-End Close Checklist: Best Practices for Accurate Reporting",
            description:
              "A comprehensive month-end close checklist with step-by-step procedures, best practices, and tips to streamline your financial close process.",
            image:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
            datePublished: "2026-02-11T00:00:00.000Z",
            dateModified: "2026-02-11T00:00:00.000Z",
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
              "@id": "https://www.mzbpo.com/blog/month-end-close-checklist",
            },
          }),
        }}
      />

      {/* HowTo Schema for the checklist */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Complete a Month-End Close",
            description:
              "A step-by-step guide to completing your month-end financial close accurately and efficiently.",
            step: [
              {
                "@type": "HowToStep",
                name: "Pre-Close Preparation",
                text: "Review close calendar, send reminders for expense reports, and confirm all source systems are current.",
              },
              {
                "@type": "HowToStep",
                name: "Bank Reconciliations",
                text: "Reconcile all bank accounts to GL balances and investigate reconciling items.",
              },
              {
                "@type": "HowToStep",
                name: "Accounts Receivable",
                text: "Review AR aging, send statements, evaluate bad debt allowance, and reconcile sub-ledger to GL.",
              },
              {
                "@type": "HowToStep",
                name: "Accounts Payable",
                text: "Process vendor invoices, accrue for unbilled expenses, and reconcile AP sub-ledger.",
              },
              {
                "@type": "HowToStep",
                name: "Revenue and Accruals",
                text: "Record all revenue, make accrual entries, and adjust prepaids.",
              },
              {
                "@type": "HowToStep",
                name: "Final Review",
                text: "Review trial balance, perform variance analysis, and generate financial statements.",
              },
            ],
          }),
        }}
      />
    </div>
  )
}
