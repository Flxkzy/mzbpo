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
  AlertTriangle,
  Target,
  BarChart3,
  Shield,
  Zap,
  RefreshCw,
  FileText,
  PieChart,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Cash Flow Management Guide for Growing Businesses (2026)",
  description:
    "Master cash flow management with proven strategies for growing businesses. Learn how to forecast cash flow, fix cash gaps, optimize working capital, and build a financial cushion that lets you scale confidently.",
  alternates: { canonical: "/blog/cash-flow-management-guide" },
  openGraph: {
    title: "Cash Flow Management Guide for Growing Businesses (2026) | MZBPO",
    description:
      "Practical cash flow management strategies for growing businesses: forecasting, gap analysis, working capital optimization, and when to bring in professional support.",
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
  { id: "cash-vs-profit", title: "Cash Flow vs. Profit: The Critical Difference" },
  { id: "three-types", title: "The 3 Types of Cash Flow" },
  { id: "forecasting", title: "How to Forecast Cash Flow (Step-by-Step)" },
  { id: "warning-signs", title: "Warning Signs You Have a Cash Flow Problem" },
  { id: "strategies", title: "10 Strategies to Improve Cash Flow" },
  { id: "working-capital", title: "Working Capital Optimization" },
  { id: "tools", title: "Tools & Software for Cash Flow Management" },
  { id: "outsourcing", title: "When to Get Professional Help" },
  { id: "conclusion", title: "Action Plan" },
]

const warningSignsData = [
  {
    sign: "You struggle to pay suppliers on time",
    severity: "High",
    impact: "Damages supplier relationships, may lose credit terms",
  },
  {
    sign: "You're consistently waiting on customer payments",
    severity: "High",
    impact: "Receivables aging beyond 60 days creates serious strain",
  },
  {
    sign: "You rely on credit lines to cover payroll",
    severity: "Critical",
    impact: "Sign of structural cash flow problem, not a timing issue",
  },
  {
    sign: "You turn down new business because of cash",
    severity: "High",
    impact: "Growth opportunity cost — losing revenue to fix revenue",
  },
  {
    sign: "Your bank balance looks good but you feel broke",
    severity: "Medium",
    impact: "Hidden liabilities or accruals you may not be tracking",
  },
  {
    sign: "You don't have a 90-day cash flow forecast",
    severity: "Medium",
    impact: "Flying blind — problems compound without early warning",
  },
  {
    sign: "Your accounts receivable days are over 45",
    severity: "High",
    impact: "Money stuck in unpaid invoices instead of working for you",
  },
]

const strategies = [
  {
    number: "01",
    title: "Shorten Your Payment Terms",
    detail:
      "Change Net 30 to Net 15 for new clients. Offer a 1-2% early payment discount. The discount costs less than a credit line.",
    impact: "High",
  },
  {
    number: "02",
    title: "Invoice Immediately",
    detail:
      "Invoice on the day of delivery or milestone completion, not at month-end. Each day of delay is a day of your cash sitting idle.",
    impact: "High",
  },
  {
    number: "03",
    title: "Implement Upfront Deposits",
    detail:
      "Require 25–50% deposit before starting work. This is standard in professional services, construction, and creative industries.",
    impact: "Very High",
  },
  {
    number: "04",
    title: "Negotiate Extended Supplier Terms",
    detail:
      "Ask your suppliers for Net 45 or Net 60. This increases the gap between when you collect and when you pay — widening your cash runway.",
    impact: "High",
  },
  {
    number: "05",
    title: "Chase Overdue Invoices Aggressively",
    detail:
      "Set up automated reminders at 7, 14, and 30 days past due. Assign someone to personally call at 30+ days. Most late payers pay when asked directly.",
    impact: "Very High",
  },
  {
    number: "06",
    title: "Build a Cash Reserve",
    detail:
      "Target 3 months of operating expenses in a separate business savings account. Fund it gradually — even $500/month matters.",
    impact: "Medium",
  },
  {
    number: "07",
    title: "Cut Non-Essential Subscriptions",
    detail:
      "Review all recurring charges quarterly. Most businesses carry $500–$2,000/month in forgotten or unused SaaS subscriptions.",
    impact: "Medium",
  },
  {
    number: "08",
    title: "Use a Rolling 13-Week Cash Forecast",
    detail:
      "A 13-week (90-day) rolling cash forecast is the gold standard for cash flow visibility. Update it weekly with actuals.",
    impact: "Very High",
  },
  {
    number: "09",
    title: "Consider Invoice Financing",
    detail:
      "Invoice financing lets you borrow against outstanding invoices (typically 70–90% of invoice value). It's expensive but solves immediate gaps.",
    impact: "Medium",
  },
  {
    number: "10",
    title: "Separate Business and Personal Finances",
    detail:
      "Mixing personal and business accounts is one of the most common causes of cash confusion for small businesses. Separate immediately.",
    impact: "High",
  },
]

const cashFlowTypes = [
  {
    type: "Operating Cash Flow",
    definition: "Cash generated from core business operations — revenue minus operating expenses",
    formula: "Net Income + Depreciation - Changes in Working Capital",
    healthy: "Positive and growing. This is the lifeblood of your business.",
    icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
    color: "emerald",
  },
  {
    type: "Investing Cash Flow",
    definition: "Cash used for long-term investments — equipment, property, acquisitions",
    formula: "Proceeds from Asset Sales - Capital Expenditures",
    healthy: "Often negative for growing businesses (you're investing in growth).",
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    color: "blue",
  },
  {
    type: "Financing Cash Flow",
    definition: "Cash from debt, equity, or returned to owners via dividends or loan repayments",
    formula: "Proceeds from Borrowing + Equity - Repayments - Dividends",
    healthy: "Varies. High financing cash flow means you're raising capital or taking on debt.",
    icon: <DollarSign className="w-6 h-6 text-purple-600" />,
    color: "purple",
  },
]

const forecastingSteps = [
  {
    step: 1,
    title: "Start with your opening cash balance",
    detail: "Pull your exact bank balance as of the forecast start date.",
  },
  {
    step: 2,
    title: "List all expected cash inflows",
    detail:
      "Include: customer payments (by due date, not invoice date), deposits expected, recurring revenue, any loan proceeds.",
  },
  {
    step: 3,
    title: "List all expected cash outflows",
    detail:
      "Include: payroll, rent, supplier payments, taxes due, loan repayments, software subscriptions, one-time expenses.",
  },
  {
    step: 4,
    title: "Calculate weekly net cash flow",
    detail: "Inflows minus outflows for each week gives you the net change.",
  },
  {
    step: 5,
    title: "Project your closing balance each week",
    detail: "Opening balance + net cash flow = closing balance. This becomes next week's opening balance.",
  },
  {
    step: 6,
    title: "Identify gaps before they happen",
    detail:
      "Any week where your projected closing balance goes negative (or below your minimum threshold) is a cash gap you must plan around.",
  },
  {
    step: 7,
    title: "Update weekly with actuals",
    detail:
      "Compare forecast to actual. The more you do this, the more accurate your forecasting gets over time.",
  },
]

const faqItems = [
  {
    question: "What is the biggest cause of cash flow problems in small businesses?",
    answer:
      "Slow-paying customers (long accounts receivable days) combined with fixed monthly expenses is the most common cause. A profitable business can still run out of cash if customers take 90 days to pay while suppliers expect payment in 30.",
  },
  {
    question: "What's a healthy cash flow ratio?",
    answer:
      "The operating cash flow ratio (operating cash flow / current liabilities) should be above 1.0, meaning your operations generate enough cash to cover what you owe in the short term. A ratio of 1.5+ is considered strong.",
  },
  {
    question: "How far ahead should I forecast cash flow?",
    answer:
      "At minimum, 13 weeks (90 days) rolling. For larger businesses, a 12-month cash flow forecast alongside a 13-week operational forecast gives the best visibility.",
  },
  {
    question: "Should I use software to manage cash flow?",
    answer:
      "Yes. Tools like Float, Dryrun, or Pulse integrate with Xero and QuickBooks to automate cash flow forecasting. Even a well-maintained spreadsheet is better than no forecast at all.",
  },
  {
    question: "Can outsourced accounting help with cash flow?",
    answer:
      "Absolutely. A professional bookkeeper ensures your books are accurate so your cash flow picture is real. A fractional CFO can build forecasts, identify gaps, and recommend strategies. MZBPO offers both services.",
  },
]

export default function CashFlowManagementGuidePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-900 text-white pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium">
                Finance Guide
              </span>
              <span className="bg-yellow-500/20 border border-yellow-400/30 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                Critical for Growth
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Cash Flow Management Guide{" "}
              <span className="text-emerald-400">for Growing Businesses</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              82% of small businesses that fail cite cash flow problems as the cause — yet most are profitable on
              paper. Learn to master cash flow before it masters you.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> March 6, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 15 min read
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" /> MZBPO Editorial Team
              </span>
            </div>
          </div>
        </section>

        {/* Key Stat Banner */}
        <section className="bg-red-600 text-white py-4 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-semibold">
              ⚠️ 82% of failed businesses cite cash flow problems as the primary cause — even when they were
              profitable on paper.
            </p>
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
                      className="block text-sm text-slate-600 hover:text-emerald-600 transition-colors py-1 border-l-2 border-transparent hover:border-emerald-500 pl-3"
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
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Cash Flow Kills Growing Businesses</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Here&apos;s a scenario that plays out in thousands of businesses every year: Revenue is up 40%.
                  You just landed your biggest client. Your P&L looks great. Then payroll is due Friday and
                  you&apos;re staring at a bank balance that can&apos;t cover it.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  This is the <strong>cash flow paradox</strong> — a business that is growing and profitable can still
                  run out of cash. The faster a business grows, the more acute this problem becomes, because growth
                  requires spending cash before you collect it.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {[
                    { stat: "82%", label: "of failed businesses cite cash flow as the primary cause" },
                    { stat: "60%", label: "of small businesses experience cash flow problems each year" },
                    { stat: "$1.1T", label: "in late B2B payments outstanding globally at any given time" },
                  ].map((s, i) => (
                    <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-5 text-center">
                      <p className="text-3xl font-bold text-red-600 mb-1">{s.stat}</p>
                      <p className="text-red-800 text-sm">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cash vs Profit */}
              <div id="cash-vs-profit" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Cash Flow vs. Profit: The Critical Difference
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Profit is an accounting concept. Cash flow is reality. You can be profitable and still go bankrupt.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                    <h3 className="font-bold text-emerald-800 mb-4">Profit (Accrual Basis)</h3>
                    <ul className="space-y-2 text-emerald-700 text-sm">
                      <li>✓ Revenue recognized when earned (even if unpaid)</li>
                      <li>✓ Expenses recognized when incurred (even if unpaid)</li>
                      <li>✓ Includes non-cash items like depreciation</li>
                      <li>✓ Shows long-term business health</li>
                      <li>✗ Does NOT show if you can pay bills today</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="font-bold text-blue-800 mb-4">Cash Flow (Cash Basis)</h3>
                    <ul className="space-y-2 text-blue-700 text-sm">
                      <li>✓ Only counts money that has actually moved</li>
                      <li>✓ Shows your real bank position</li>
                      <li>✓ Tells you if you can meet obligations today</li>
                      <li>✓ Essential for operational decision-making</li>
                      <li>✗ Doesn&apos;t show long-term profitability</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
                  <p className="text-amber-900 font-semibold mb-2">Real-world example:</p>
                  <p className="text-amber-800 text-sm">
                    You invoice a client $50,000 in January. On your P&L, you show $50,000 in revenue for January.
                    But the client pays Net 60 — so cash arrives in March. Meanwhile, you pay staff, rent, and
                    suppliers in January and February. You&apos;re profitable on paper but cash-strapped in reality.
                  </p>
                </div>
              </div>

              {/* Three Types */}
              <div id="three-types" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">The 3 Types of Cash Flow</h2>
                <div className="space-y-6">
                  {cashFlowTypes.map((type, i) => (
                    <div key={i} className={`bg-${type.color}-50 border border-${type.color}-200 rounded-2xl p-6`}>
                      <div className="flex items-start gap-4">
                        <div className={`bg-${type.color}-100 rounded-xl p-3`}>{type.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-900 text-lg mb-2">{type.type}</h3>
                          <p className="text-slate-600 text-sm mb-3">{type.definition}</p>
                          <div className="bg-white rounded-lg p-3 mb-3">
                            <p className="text-xs text-slate-500 font-mono">{type.formula}</p>
                          </div>
                          <p className={`text-${type.color}-700 text-sm font-medium`}>{type.healthy}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Forecasting */}
              <div id="forecasting" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  How to Build a 13-Week Cash Flow Forecast
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  The 13-week rolling cash flow forecast is the most important financial tool for any growing
                  business. It gives you 90 days of visibility so you can spot gaps before they become crises.
                </p>
                <div className="space-y-4">
                  {forecastingSteps.map((step) => (
                    <div key={step.step} className="flex gap-4 bg-slate-50 rounded-xl p-5 border border-slate-200">
                      <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                        <p className="text-slate-600 text-sm">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warning Signs */}
              <div id="warning-signs" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Warning Signs You Have a Cash Flow Problem</h2>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="text-left p-4 font-semibold">Warning Sign</th>
                        <th className="text-left p-4 font-semibold">Severity</th>
                        <th className="text-left p-4 font-semibold">Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      {warningSignsData.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="p-4 text-slate-700">{row.sign}</td>
                          <td className="p-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                row.severity === "Critical"
                                  ? "bg-red-100 text-red-700"
                                  : row.severity === "High"
                                  ? "bg-orange-100 text-orange-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }`}
                            >
                              {row.severity}
                            </span>
                          </td>
                          <td className="p-4 text-slate-600">{row.impact}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Strategies */}
              <div id="strategies" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  10 Proven Strategies to Improve Cash Flow
                </h2>
                <div className="space-y-4">
                  {strategies.map((s) => (
                    <div key={s.number} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <div className="flex items-start gap-4">
                        <span className="text-2xl font-black text-emerald-200 shrink-0 w-10">{s.number}</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-3 mb-2">
                            <h3 className="font-bold text-slate-900">{s.title}</h3>
                            <span
                              className={`text-xs px-2 py-1 rounded-full font-semibold shrink-0 ${
                                s.impact === "Very High"
                                  ? "bg-red-100 text-red-700"
                                  : s.impact === "High"
                                  ? "bg-orange-100 text-orange-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }`}
                            >
                              {s.impact} Impact
                            </span>
                          </div>
                          <p className="text-slate-600 text-sm">{s.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Capital */}
              <div id="working-capital" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Working Capital Optimization</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Working capital = Current Assets − Current Liabilities. It measures your ability to fund
                  day-to-day operations without borrowing. Optimizing it is the foundation of good cash flow.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Reduce Accounts Receivable Days (DSO)",
                      actions: [
                        "Send invoices immediately on delivery",
                        "Accept credit card and ACH payments",
                        "Offer 2% early payment discounts",
                        "Automate invoice reminders",
                        "Require deposits on large projects",
                      ],
                      target: "Target: DSO under 30 days",
                      icon: <FileText className="w-6 h-6 text-blue-600" />,
                    },
                    {
                      title: "Extend Accounts Payable Days (DPO)",
                      actions: [
                        "Negotiate Net 45 or Net 60 with suppliers",
                        "Use a business credit card (free float)",
                        "Batch payments to optimize timing",
                        "Pay on the due date, not early",
                        "Build strong supplier relationships for flexibility",
                      ],
                      target: "Target: DPO 45–60 days",
                      icon: <DollarSign className="w-6 h-6 text-purple-600" />,
                    },
                    {
                      title: "Reduce Inventory Days (for product businesses)",
                      actions: [
                        "Implement just-in-time ordering",
                        "Identify and liquidate slow-moving stock",
                        "Negotiate supplier consignment arrangements",
                        "Use demand forecasting software",
                        "Review reorder points quarterly",
                      ],
                      target: "Target: < 60 days for most industries",
                      icon: <RefreshCw className="w-6 h-6 text-emerald-600" />,
                    },
                    {
                      title: "Build a Cash Reserve",
                      actions: [
                        "Target 3 months of operating expenses",
                        "Open a separate high-yield business savings account",
                        "Automate a fixed transfer each month",
                        "Treat the reserve as off-limits except for emergencies",
                        "Replenish after any drawdown within 90 days",
                      ],
                      target: "Target: 3 months of expenses",
                      icon: <Shield className="w-6 h-6 text-amber-600" />,
                    },
                  ].map((card, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <div className="flex items-center gap-3 mb-4">
                        {card.icon}
                        <h3 className="font-bold text-slate-900">{card.title}</h3>
                      </div>
                      <ul className="space-y-1 mb-4">
                        {card.actions.map((a, j) => (
                          <li key={j} className="text-slate-600 text-sm flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> {a}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm font-semibold text-emerald-700 bg-emerald-50 rounded-lg px-3 py-2">
                        {card.target}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div id="tools" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Tools & Software for Cash Flow Management
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      tool: "Float",
                      type: "Cash Flow Forecasting",
                      desc: "Integrates with Xero, QuickBooks, and FreeAgent to build automated rolling forecasts.",
                      best: "Small to mid-market businesses",
                    },
                    {
                      tool: "Dryrun",
                      type: "Scenario Planning",
                      desc: "Visual cash flow forecasting with scenario modeling. Great for planning growth or downturns.",
                      best: "Businesses that want visual planning tools",
                    },
                    {
                      tool: "Pulse",
                      type: "Cash Flow Tracking",
                      desc: "Simple cash flow tracking for small businesses. Less feature-rich but very easy to use.",
                      best: "Freelancers and very small businesses",
                    },
                    {
                      tool: "Xero / QuickBooks",
                      type: "Accounting + Cash Flow",
                      desc: "Both platforms have built-in cash flow reporting and bank feed reconciliation.",
                      best: "Any business needing a full accounting solution",
                    },
                  ].map((t, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-slate-900">{t.tool}</h3>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{t.type}</span>
                      </div>
                      <p className="text-slate-600 text-sm mb-2">{t.desc}</p>
                      <p className="text-xs text-slate-500">Best for: {t.best}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Help */}
              <div id="outsourcing" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">When to Get Professional Help</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  DIY cash flow management works when your finances are simple. As complexity grows, the cost of
                  mistakes outweighs the cost of professional support.
                </p>
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white mb-6">
                  <h3 className="text-xl font-bold mb-4">Signs you need professional cash flow support:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "You don't have a current cash flow forecast",
                      "You've had a cash crisis in the last 12 months",
                      "Revenue is over $500K and growing fast",
                      "You have multiple revenue streams or currencies",
                      "You're planning to raise funding or take on debt",
                      "Your books are more than 30 days behind",
                    ].map((sign, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-300 shrink-0" />
                        <p className="text-emerald-100 text-sm">{sign}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-3">Outsourced Bookkeeper</h3>
                    <p className="text-slate-600 text-sm mb-4">
                      Keeps your books up to date, reconciles bank accounts, manages accounts payable/receivable. The
                      foundation for accurate cash flow reporting.
                    </p>
                    <p className="text-emerald-700 font-semibold text-sm">
                      Cost: $300–$1,500/month (vs. $50K+ for in-house)
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-3">Fractional CFO</h3>
                    <p className="text-slate-600 text-sm mb-4">
                      Builds and maintains your cash flow forecast, advises on financing options, manages banking
                      relationships, and provides strategic financial guidance.
                    </p>
                    <p className="text-emerald-700 font-semibold text-sm">
                      Cost: $1,500–$5,000/month (vs. $150K+ for full-time)
                    </p>
                  </div>
                </div>
                <div className="mt-6 bg-emerald-900 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-3">MZBPO Cash Flow Services</h3>
                  <p className="text-emerald-100 mb-4">
                    Our team provides monthly bookkeeping, cash flow reporting, 13-week forecasting, and fractional
                    CFO advisory — so you always know where your cash stands and where it&apos;s going.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-emerald-700 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
                  >
                    Get a Free Consultation <ArrowRight className="w-4 h-4" />
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

              {/* Action Plan */}
              <div id="conclusion" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Your 30-Day Cash Flow Action Plan</h2>
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
                    <div key={i} className="flex gap-4 items-start bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <span className="text-xs bg-emerald-600 text-white px-2 py-1 rounded-full font-semibold shrink-0 mt-0.5">
                        {item.week}
                      </span>
                      <p className="text-slate-700 text-sm">{item.action}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Posts */}
              <div className="border-t border-slate-200 pt-10">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Accounts Payable Best Practices: Automation & Fraud Prevention",
                      href: "/blog/accounts-payable-best-practices",
                      tag: "Operations",
                    },
                    {
                      title: "Outsourced Accounting Services in the USA",
                      href: "/blog/outsourced-accounting-usa",
                      tag: "Guide",
                    },
                    {
                      title: "Signs Your Business Should Outsource Accounting",
                      href: "/blog/signs-to-outsource-accounting",
                      tag: "Strategy",
                    },
                  ].map((post, i) => (
                    <Link
                      key={i}
                      href={post.href}
                      className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all"
                    >
                      <span className="text-xs text-emerald-600 font-semibold uppercase tracking-wide">{post.tag}</span>
                      <p className="font-semibold text-slate-900 mt-1 group-hover:text-emerald-700 transition-colors text-sm">
                        {post.title}
                      </p>
                      <ChevronRight className="w-4 h-4 text-emerald-500 mt-2" />
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
