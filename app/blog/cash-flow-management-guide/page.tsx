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
  AlertTriangle,
  Shield,
  RefreshCw,
  FileText,
  BarChart3,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Cash Flow Management Guide for Growing Businesses (2026)",
  description:
    "Master cash flow management with proven strategies for growing businesses. Learn how to forecast cash flow, fix cash gaps, optimize working capital, and build a financial cushion that lets you scale confidently.",
  alternates: { canonical: "/blog/cash-flow-management-guide" },
  openGraph: {
    title: "Cash Flow Management Guide for Growing Businesses (2026) | MZBPO",
    description:
      "Practical cash flow management strategies: forecasting, gap analysis, working capital optimization, and when to bring in professional support.",
    url: "https://www.mzbpo.com/blog/cash-flow-management-guide",
    type: "article",
    publishedTime: "2026-03-06T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Cash Flow Management Guide for Growing Businesses",
      },
    ],
  },
}

const tableOfContents = [
  { id: "introduction", title: "Why Cash Flow Kills Growing Businesses" },
  { id: "cash-vs-profit", title: "Cash Flow vs. Profit: The Difference" },
  { id: "three-types", title: "The 3 Types of Cash Flow" },
  { id: "forecasting", title: "How to Forecast Cash Flow" },
  { id: "warning-signs", title: "Warning Signs of a Cash Flow Problem" },
  { id: "strategies", title: "10 Strategies to Improve Cash Flow" },
  { id: "working-capital", title: "Working Capital Optimization" },
  { id: "tools", title: "Tools & Software" },
  { id: "outsourcing", title: "When to Get Professional Help" },
  { id: "conclusion", title: "30-Day Action Plan" },
]

const warningSignsData = [
  { sign: "You struggle to pay suppliers on time", severity: "High", impact: "Damages supplier relationships, may lose credit terms" },
  { sign: "You're consistently waiting on customer payments", severity: "High", impact: "Receivables aging beyond 60 days creates serious strain" },
  { sign: "You rely on credit lines to cover payroll", severity: "Critical", impact: "Sign of structural cash flow problem, not a timing issue" },
  { sign: "You turn down new business because of cash", severity: "High", impact: "Growth opportunity cost — losing revenue to fix revenue" },
  { sign: "Your bank balance looks good but you feel broke", severity: "Medium", impact: "Hidden liabilities or accruals you may not be tracking" },
  { sign: "You don't have a 90-day cash flow forecast", severity: "Medium", impact: "Flying blind — problems compound without early warning" },
  { sign: "Your accounts receivable days are over 45", severity: "High", impact: "Money stuck in unpaid invoices instead of working for you" },
]

const strategies = [
  { number: "01", title: "Shorten Your Payment Terms", detail: "Change Net 30 to Net 15 for new clients. Offer a 1-2% early payment discount. The discount costs less than a credit line.", impact: "High" },
  { number: "02", title: "Invoice Immediately", detail: "Invoice on the day of delivery or milestone completion, not at month-end. Each day of delay is a day of your cash sitting idle.", impact: "High" },
  { number: "03", title: "Implement Upfront Deposits", detail: "Require 25–50% deposit before starting work. Standard in professional services, construction, and creative industries.", impact: "Very High" },
  { number: "04", title: "Negotiate Extended Supplier Terms", detail: "Ask your suppliers for Net 45 or Net 60. This increases the gap between when you collect and when you pay.", impact: "High" },
  { number: "05", title: "Chase Overdue Invoices Aggressively", detail: "Set up automated reminders at 7, 14, and 30 days past due. Assign someone to personally call at 30+ days.", impact: "Very High" },
  { number: "06", title: "Build a Cash Reserve", detail: "Target 3 months of operating expenses in a separate business savings account. Fund it gradually — even $500/month matters.", impact: "Medium" },
  { number: "07", title: "Cut Non-Essential Subscriptions", detail: "Review all recurring charges quarterly. Most businesses carry $500–$2,000/month in forgotten or unused SaaS subscriptions.", impact: "Medium" },
  { number: "08", title: "Use a Rolling 13-Week Cash Forecast", detail: "A 13-week (90-day) rolling cash forecast is the gold standard for cash flow visibility. Update it weekly with actuals.", impact: "Very High" },
  { number: "09", title: "Consider Invoice Financing", detail: "Invoice financing lets you borrow against outstanding invoices (typically 70–90% of invoice value). It solves immediate gaps.", impact: "Medium" },
  { number: "10", title: "Separate Business and Personal Finances", detail: "Mixing personal and business accounts is one of the most common causes of cash confusion for small businesses.", impact: "High" },
]

const cashFlowTypes = [
  { type: "Operating Cash Flow", definition: "Cash generated from core business operations — revenue minus operating expenses", formula: "Net Income + Depreciation − Changes in Working Capital", healthy: "Positive and growing. This is the lifeblood of your business.", icon: <TrendingUp className="w-6 h-6 text-brand-teal" /> },
  { type: "Investing Cash Flow", definition: "Cash used for long-term investments — equipment, property, acquisitions", formula: "Proceeds from Asset Sales − Capital Expenditures", healthy: "Often negative for growing businesses (you're investing in growth).", icon: <BarChart3 className="w-6 h-6 text-brand-teal" /> },
  { type: "Financing Cash Flow", definition: "Cash from debt, equity, or returned to owners via dividends or loan repayments", formula: "Proceeds from Borrowing + Equity − Repayments − Dividends", healthy: "Varies. High financing cash flow means you're raising capital or taking on debt.", icon: <DollarSign className="w-6 h-6 text-brand-teal" /> },
]

const forecastingSteps = [
  { step: 1, title: "Start with your opening cash balance", detail: "Pull your exact bank balance as of the forecast start date." },
  { step: 2, title: "List all expected cash inflows", detail: "Include: customer payments (by due date), deposits expected, recurring revenue, any loan proceeds." },
  { step: 3, title: "List all expected cash outflows", detail: "Include: payroll, rent, supplier payments, taxes due, loan repayments, software subscriptions." },
  { step: 4, title: "Calculate weekly net cash flow", detail: "Inflows minus outflows for each week gives you the net change." },
  { step: 5, title: "Project your closing balance each week", detail: "Opening balance + net cash flow = closing balance. This becomes next week's opening balance." },
  { step: 6, title: "Identify gaps before they happen", detail: "Any week where your projected closing balance goes negative is a cash gap you must plan around." },
  { step: 7, title: "Update weekly with actuals", detail: "Compare forecast to actual. The more you do this, the more accurate your forecasting becomes over time." },
]

const faqItems = [
  { question: "What is the biggest cause of cash flow problems in small businesses?", answer: "Slow-paying customers (long accounts receivable days) combined with fixed monthly expenses. A profitable business can still run out of cash if customers take 90 days to pay while suppliers expect payment in 30." },
  { question: "What's a healthy cash flow ratio?", answer: "The operating cash flow ratio (operating cash flow / current liabilities) should be above 1.0. A ratio of 1.5+ is considered strong." },
  { question: "How far ahead should I forecast cash flow?", answer: "At minimum, 13 weeks (90 days) rolling. For larger businesses, a 12-month forecast alongside a 13-week operational forecast gives the best visibility." },
  { question: "Should I use software to manage cash flow?", answer: "Yes. Tools like Float, Dryrun, or Pulse integrate with Xero and QuickBooks to automate cash flow forecasting. Even a well-maintained spreadsheet is better than no forecast." },
  { question: "Can outsourced accounting help with cash flow?", answer: "Absolutely. A professional bookkeeper ensures your books are accurate so your cash flow picture is real. A fractional CFO can build forecasts, identify gaps, and recommend strategies. MZBPO offers both services." },
]

const relatedPosts = [
  {
    title: "Accounts Payable Best Practices: Automation & Fraud Prevention",
    href: "/blog/accounts-payable-best-practices",
    description: "Proven AP management best practices to protect cash flow and prevent fraud.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
  },
  {
    title: "Outsourced Accounting Services in the USA",
    href: "/blog/outsourced-accounting-usa",
    description: "Everything US businesses need to know about outsourced accounting.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
  },
  {
    title: "Signs Your Business Should Outsource Accounting",
    href: "/blog/signs-to-outsource-accounting",
    description: "Key indicators that it's time to bring in professional accounting help.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
  },
]

export default function CashFlowManagementGuidePage() {
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
                <span className="text-white/80">Cash Flow Management Guide</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Finance Guide</span>
              </div>
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Cash Flow Management Guide{" "}
                <span className="text-brand-teal">for Growing Businesses</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                82% of businesses that fail cite cash flow problems as the cause — even when profitable on paper.
                Learn to master cash flow before it masters you.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>MZBPO Team</span></div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>March 6, 2026</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>15 min read</span></div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative -mt-8 mb-12 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&h=820&fit=crop"
                  alt="Cash flow management for growing businesses"
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
                      Cash Flow Support
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      Our team builds 13-week forecasts, monthly reporting, and fractional CFO services so you always know where your cash stands.
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
                      Here&apos;s a scenario that plays out in thousands of businesses every year: Revenue is up 40%.
                      You just landed your biggest client. Your P&L looks great. Then payroll is due Friday and
                      you&apos;re staring at a bank balance that can&apos;t cover it.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      This is the <strong>cash flow paradox</strong> — a business that is growing and profitable
                      can still run out of cash. The faster a business grows, the more acute this problem becomes,
                      because growth requires spending cash before you collect it.
                    </p>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8 my-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-6 text-center">
                        The Cash Flow Crisis in Numbers
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          { stat: "82%", label: "of failed businesses cite cash flow as the primary cause" },
                          { stat: "60%", label: "of small businesses experience cash flow problems each year" },
                          { stat: "$1.1T", label: "in late B2B payments outstanding globally at any time" },
                        ].map((s, i) => (
                          <div key={i} className="text-center">
                            <div className="text-3xl font-bold text-white font-[family-name:var(--font-syne)]">{s.stat}</div>
                            <div className="text-white/70 text-sm mt-1">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Cash vs Profit */}
                  <section id="cash-vs-profit" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Cash Flow vs. Profit: The Critical Difference
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Profit is an accounting concept. Cash flow is reality. You can be profitable and still go bankrupt.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">Profit (Accrual Basis)</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Revenue recognized when earned (even if unpaid)</li>
                          <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Expenses recognized when incurred (even if unpaid)</li>
                          <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Shows long-term business health</li>
                          <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> Does NOT show if you can pay bills today</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">Cash Flow (Cash Basis)</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Only counts money that has actually moved</li>
                          <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Shows your real bank position</li>
                          <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Tells you if you can meet obligations today</li>
                          <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> Doesn&apos;t show long-term profitability</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">Real-world example:</p>
                      <p className="text-gray-600 text-sm">
                        You invoice a client $50,000 in January. On your P&L, you show $50,000 in revenue for January.
                        But the client pays Net 60 — so cash arrives in March. Meanwhile, you pay staff, rent, and
                        suppliers in January and February. You&apos;re profitable on paper but cash-strapped in reality.
                      </p>
                    </div>
                  </section>

                  {/* Three Types */}
                  <section id="three-types" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      The 3 Types of Cash Flow
                    </h2>
                    <div className="space-y-6">
                      {cashFlowTypes.map((type, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                          <div className="flex items-center gap-3 mb-3">
                            {type.icon}
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy text-lg">{type.type}</h3>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{type.definition}</p>
                          <div className="bg-white rounded-lg p-3 mb-3 border border-gray-100">
                            <p className="text-xs text-gray-500 font-mono">{type.formula}</p>
                          </div>
                          <p className="text-brand-teal text-sm font-medium">{type.healthy}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Forecasting */}
                  <section id="forecasting" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      How to Build a 13-Week Cash Flow Forecast
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The 13-week rolling cash flow forecast is the most important financial tool for any growing
                      business. It gives you 90 days of visibility so you can spot gaps before they become crises.
                    </p>
                    <div className="space-y-4">
                      {forecastingSteps.map((step) => (
                        <div key={step.step} className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="w-10 h-10 bg-brand-teal text-brand-navy rounded-xl flex items-center justify-center font-bold text-lg shrink-0">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-1">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Warning Signs */}
                  <section id="warning-signs" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Warning Signs You Have a Cash Flow Problem
                    </h2>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="text-left p-4 font-semibold">Warning Sign</th>
                            <th className="text-left p-4 font-semibold">Severity</th>
                            <th className="text-left p-4 font-semibold">Impact</th>
                          </tr>
                        </thead>
                        <tbody>
                          {warningSignsData.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="p-4 text-gray-700">{row.sign}</td>
                              <td className="p-4">
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                  row.severity === "Critical" ? "bg-red-100 text-red-700" :
                                  row.severity === "High" ? "bg-orange-100 text-orange-700" :
                                  "bg-yellow-100 text-yellow-700"
                                }`}>{row.severity}</span>
                              </td>
                              <td className="p-4 text-gray-600">{row.impact}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Strategies */}
                  <section id="strategies" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      10 Proven Strategies to Improve Cash Flow
                    </h2>
                    <div className="space-y-4">
                      {strategies.map((s) => (
                        <div key={s.number} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="flex items-start gap-4">
                            <span className="text-2xl font-black text-brand-teal/30 shrink-0 w-10">{s.number}</span>
                            <div className="flex-1">
                              <div className="flex items-center justify-between gap-3 mb-2">
                                <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">{s.title}</h3>
                                <span className={`text-xs px-2 py-1 rounded-full font-semibold shrink-0 ${
                                  s.impact === "Very High" ? "bg-red-100 text-red-700" :
                                  s.impact === "High" ? "bg-orange-100 text-orange-700" :
                                  "bg-yellow-100 text-yellow-700"
                                }`}>{s.impact} Impact</span>
                              </div>
                              <p className="text-gray-600 text-sm">{s.detail}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Working Capital */}
                  <section id="working-capital" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Working Capital Optimization
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Working capital = Current Assets − Current Liabilities. Optimizing it is the foundation of good cash flow management.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { title: "Reduce Accounts Receivable Days (DSO)", actions: ["Send invoices immediately on delivery", "Accept credit card and ACH payments", "Offer 2% early payment discounts", "Automate invoice reminders", "Require deposits on large projects"], target: "Target: DSO under 30 days", icon: <FileText className="w-5 h-5 text-brand-teal" /> },
                        { title: "Extend Accounts Payable Days (DPO)", actions: ["Negotiate Net 45 or Net 60 with suppliers", "Use a business credit card (free float)", "Batch payments to optimize timing", "Pay on the due date, not early", "Build strong supplier relationships"], target: "Target: DPO 45–60 days", icon: <DollarSign className="w-5 h-5 text-brand-teal" /> },
                        { title: "Reduce Inventory Days (product businesses)", actions: ["Implement just-in-time ordering", "Identify and liquidate slow-moving stock", "Negotiate supplier consignment arrangements", "Use demand forecasting software", "Review reorder points quarterly"], target: "Target: < 60 days for most industries", icon: <RefreshCw className="w-5 h-5 text-brand-teal" /> },
                        { title: "Build a Cash Reserve", actions: ["Target 3 months of operating expenses", "Open a separate high-yield business savings account", "Automate a fixed monthly transfer", "Treat the reserve as off-limits except emergencies", "Replenish after any drawdown within 90 days"], target: "Target: 3 months of expenses", icon: <Shield className="w-5 h-5 text-brand-teal" /> },
                      ].map((card, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="flex items-center gap-3 mb-4">
                            {card.icon}
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy text-sm">{card.title}</h3>
                          </div>
                          <ul className="space-y-1 mb-4">
                            {card.actions.map((a, j) => (
                              <li key={j} className="text-gray-600 text-sm flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" /> {a}
                              </li>
                            ))}
                          </ul>
                          <p className="text-sm font-semibold text-brand-teal bg-brand-teal/5 rounded-lg px-3 py-2">{card.target}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Tools */}
                  <section id="tools" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Tools & Software for Cash Flow Management
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { tool: "Float", type: "Cash Flow Forecasting", desc: "Integrates with Xero, QuickBooks, and FreeAgent to build automated rolling forecasts.", best: "Small to mid-market businesses" },
                        { tool: "Dryrun", type: "Scenario Planning", desc: "Visual cash flow forecasting with scenario modeling. Great for planning growth or downturns.", best: "Businesses that want visual planning tools" },
                        { tool: "Pulse", type: "Cash Flow Tracking", desc: "Simple cash flow tracking for small businesses. Less feature-rich but very easy to use.", best: "Freelancers and very small businesses" },
                        { tool: "Xero / QuickBooks", type: "Accounting + Cash Flow", desc: "Both platforms have built-in cash flow reporting and bank feed reconciliation.", best: "Any business needing a full accounting solution" },
                      ].map((t, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">{t.tool}</h3>
                            <span className="text-xs bg-brand-teal/10 text-brand-teal px-2 py-1 rounded-full font-medium">{t.type}</span>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{t.desc}</p>
                          <p className="text-xs text-gray-400">Best for: {t.best}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Professional Help */}
                  <section id="outsourcing" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      When to Get Professional Help
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      DIY cash flow management works when your finances are simple. As complexity grows, the cost
                      of mistakes outweighs the cost of professional support.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {[
                        "You don't have a current cash flow forecast",
                        "You've had a cash crisis in the last 12 months",
                        "Revenue is over $500K and growing fast",
                        "You have multiple revenue streams or currencies",
                        "You're planning to raise funding or take on debt",
                        "Your books are more than 30 days behind",
                      ].map((sign, i) => (
                        <div key={i} className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
                          <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                          <p className="text-gray-700 text-sm">{sign}</p>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">Outsourced Bookkeeper</h3>
                        <p className="text-gray-600 text-sm mb-4">Keeps your books up to date, reconciles bank accounts, manages accounts payable/receivable — the foundation for accurate cash flow reporting.</p>
                        <p className="text-brand-teal font-semibold text-sm">Cost: $300–$1,500/month (vs. $50K+ for in-house)</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">Fractional CFO</h3>
                        <p className="text-gray-600 text-sm mb-4">Builds and maintains your cash flow forecast, advises on financing options, manages banking relationships, and provides strategic financial guidance.</p>
                        <p className="text-brand-teal font-semibold text-sm">Cost: $1,500–$5,000/month (vs. $150K+ for full-time)</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-3">
                        MZBPO Cash Flow Services
                      </h3>
                      <p className="text-white/70 font-[var(--font-poppins)] mb-4">
                        Our team provides monthly bookkeeping, cash flow reporting, 13-week forecasting, and
                        fractional CFO advisory — so you always know where your cash stands and where it&apos;s going.
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

                  {/* Action Plan */}
                  <section id="conclusion" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Your 30-Day Cash Flow Action Plan
                    </h2>
                    <div className="space-y-3">
                      {[
                        { week: "Week 1", action: "Pull your last 3 months of bank statements and build a baseline cash position" },
                        { week: "Week 1", action: "Create a simple 13-week cash flow forecast in a spreadsheet or Float" },
                        { week: "Week 2", action: "Review all outstanding invoices — chase anything over 30 days immediately" },
                        { week: "Week 2", action: "Contact your top 3 suppliers to negotiate extended payment terms" },
                        { week: "Week 3", action: "Review all monthly subscriptions and cancel unused ones" },
                        { week: "Week 3", action: "Update your invoice template to Net 15 and add payment methods" },
                        { week: "Week 4", action: "Open a separate business savings account and automate a monthly transfer" },
                        { week: "Ongoing", action: "Update your cash flow forecast every Monday with last week's actuals" },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <span className="text-xs bg-brand-teal text-brand-navy px-2 py-1 rounded-full font-semibold shrink-0 mt-0.5">{item.week}</span>
                          <p className="text-gray-700 text-sm">{item.action}</p>
                        </div>
                      ))}
                    </div>
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
                          <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy text-sm mb-1 group-hover:text-brand-teal transition-colors">{post.title}</h4>
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
