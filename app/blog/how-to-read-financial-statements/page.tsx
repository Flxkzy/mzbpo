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
  ChevronRight,
  BookOpen,
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Scale,
  Activity,
  FileText,
} from "lucide-react"

export const metadata: Metadata = {
  title: "How to Read Financial Statements: A Complete Guide for Business Owners",
  description:
    "Learn how to read and understand the three core financial statements — income statement, balance sheet, and cash flow statement. With real examples, key ratios, and red flags to watch for.",
  alternates: { canonical: "/blog/how-to-read-financial-statements" },
  openGraph: {
    title: "How to Read Financial Statements: A Complete Guide for Business Owners | MZBPO",
    description:
      "A plain-English guide to reading the income statement, balance sheet, and cash flow statement — with examples, ratios, and red flags.",
    url: "https://www.mzbpo.com/blog/how-to-read-financial-statements",
    type: "article",
    publishedTime: "2025-12-14T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "How to Read Financial Statements Guide",
      },
    ],
  },
}

const tableOfContents = [
  { id: "introduction", title: "Why Every Owner Should Read Their Financials" },
  { id: "the-three", title: "The Three Core Financial Statements" },
  { id: "income-statement", title: "1. The Income Statement (P&L)" },
  { id: "balance-sheet", title: "2. The Balance Sheet" },
  { id: "cash-flow", title: "3. The Cash Flow Statement" },
  { id: "how-they-connect", title: "How the Three Statements Connect" },
  { id: "ratios", title: "10 Ratios Every Owner Should Track" },
  { id: "red-flags", title: "Red Flags in Financial Statements" },
  { id: "month-end-review", title: "Your Monthly Review Routine" },
  { id: "outsourcing", title: "When to Get Help" },
]

const incomeStatementLines = [
  { line: "Revenue (Sales)", description: "Total money earned from selling products or services. Top line.", example: "$1,000,000" },
  { line: "Cost of Goods Sold (COGS)", description: "Direct cost to deliver what you sold — materials, labor, fulfillment.", example: "$400,000" },
  { line: "Gross Profit", description: "Revenue − COGS. The money left after delivering the product.", example: "$600,000" },
  { line: "Operating Expenses (OpEx)", description: "Sales, marketing, rent, salaries, software, admin.", example: "$420,000" },
  { line: "Operating Income (EBIT)", description: "Gross profit − OpEx. Earnings from core operations.", example: "$180,000" },
  { line: "Interest & Taxes", description: "Loan interest expense, income taxes owed.", example: "$50,000" },
  { line: "Net Income", description: "The bottom line. What's left after everything.", example: "$130,000" },
]

const balanceSheetSections = [
  {
    title: "Assets",
    description: "What the business owns",
    color: "green",
    items: [
      { line: "Cash & equivalents", note: "Bank accounts, money market, short-term holdings" },
      { line: "Accounts receivable (AR)", note: "Money customers owe you" },
      { line: "Inventory", note: "Stock on hand" },
      { line: "Property & equipment", note: "Long-term physical assets" },
      { line: "Intangible assets", note: "Software, IP, goodwill" },
    ],
  },
  {
    title: "Liabilities",
    description: "What the business owes",
    color: "red",
    items: [
      { line: "Accounts payable (AP)", note: "Money you owe suppliers" },
      { line: "Accrued expenses", note: "Wages, taxes earned but unpaid" },
      { line: "Short-term debt", note: "Loans/credit due within 12 months" },
      { line: "Long-term debt", note: "Loans/notes due beyond 12 months" },
      { line: "Deferred revenue", note: "Cash received before delivering service" },
    ],
  },
  {
    title: "Equity",
    description: "Owners' stake in the business",
    color: "blue",
    items: [
      { line: "Owner contributions / paid-in capital", note: "Money invested by owners" },
      { line: "Retained earnings", note: "Cumulative net income kept in business" },
      { line: "Distributions / dividends", note: "Money paid out to owners" },
    ],
  },
]

const cashFlowSections = [
  { type: "Operating Activities", description: "Cash from running the business — collecting from customers, paying suppliers, payroll.", icon: <Activity className="w-5 h-5 text-brand-teal" />, healthy: "Should be positive and growing" },
  { type: "Investing Activities", description: "Cash used for long-term investments — equipment, property, acquisitions.", icon: <TrendingUp className="w-5 h-5 text-brand-teal" />, healthy: "Often negative for growing businesses" },
  { type: "Financing Activities", description: "Cash from raising capital, borrowing, paying back debt, distributions to owners.", icon: <DollarSign className="w-5 h-5 text-brand-teal" />, healthy: "Varies — depends on capital strategy" },
]

const ratios = [
  { number: "01", name: "Gross Margin", formula: "Gross Profit / Revenue", what: "What % of every dollar is left after delivering the product/service.", target: "Industry-specific. SaaS 75%+, services 50%+, retail 25–40%." },
  { number: "02", name: "Net Margin", formula: "Net Income / Revenue", what: "What % of every dollar becomes profit.", target: "10%+ is healthy for most businesses." },
  { number: "03", name: "Current Ratio", formula: "Current Assets / Current Liabilities", what: "Can you pay your short-term bills?", target: "1.5–3.0 is healthy. Below 1.0 is danger zone." },
  { number: "04", name: "Quick Ratio (Acid Test)", formula: "(Cash + AR) / Current Liabilities", what: "Stricter version — excludes inventory.", target: "1.0+ is healthy." },
  { number: "05", name: "Debt-to-Equity", formula: "Total Liabilities / Equity", what: "How leveraged the business is.", target: "Below 2.0 for most industries." },
  { number: "06", name: "Days Sales Outstanding (DSO)", formula: "(AR / Revenue) × 365", what: "Average days to collect from customers.", target: "Under 45 days." },
  { number: "07", name: "Days Payable Outstanding (DPO)", formula: "(AP / COGS) × 365", what: "Average days you take to pay suppliers.", target: "30–60 days, longer = better cash flow." },
  { number: "08", name: "Inventory Turnover", formula: "COGS / Average Inventory", what: "How often inventory cycles per year.", target: "Higher is better. Industry-specific." },
  { number: "09", name: "Operating Cash Flow Ratio", formula: "Operating Cash Flow / Current Liabilities", what: "Cash-based ability to pay short-term bills.", target: "1.0+ is strong." },
  { number: "10", name: "Return on Equity (ROE)", formula: "Net Income / Equity", what: "How efficiently equity generates profit.", target: "15%+ is strong." },
]

const redFlags = [
  {
    flag: "Revenue grows but cash falls",
    detail: "Strong sign of receivables building up — customers are taking longer to pay, or your revenue recognition is ahead of cash collection.",
    severity: "High",
  },
  {
    flag: "Net income positive, operating cash flow negative",
    detail: "The classic 'profitable on paper, broke in reality' pattern. Common in fast-growth or service businesses with payment timing issues.",
    severity: "High",
  },
  {
    flag: "Accounts receivable growing faster than sales",
    detail: "Either you're extending credit to weaker customers, or your collections process is breaking down.",
    severity: "High",
  },
  {
    flag: "Inventory growing faster than sales",
    detail: "You may be sitting on dead stock or have overestimated demand. Check turnover and aging.",
    severity: "Medium",
  },
  {
    flag: "Sudden change in margins",
    detail: "A 5+ percentage point drop in gross or net margin without explanation usually signals pricing erosion, cost inflation, or accounting error.",
    severity: "High",
  },
  {
    flag: "Increasing reliance on credit lines",
    detail: "If you keep tapping your line of credit to make payroll, you have a structural cash flow problem, not a timing one.",
    severity: "Critical",
  },
  {
    flag: "Owner distributions exceed net income",
    detail: "You're pulling out more than the business earns. This depletes retained earnings and can put the business at risk.",
    severity: "High",
  },
  {
    flag: "Goodwill or intangibles ballooning",
    detail: "Often the leftover from past acquisitions. Look for impairment risk — assets that should be written down.",
    severity: "Medium",
  },
]

const monthlyRoutine = [
  { step: 1, title: "Pull all three statements (last 3 months side-by-side)", detail: "Trends matter more than any single month. Always compare to prior periods." },
  { step: 2, title: "Read the income statement top to bottom", detail: "Revenue → margins → operating expenses → net income. Note anything unusual." },
  { step: 3, title: "Check the balance sheet for changes", detail: "Compare to last month: cash, AR, AP, inventory, debt. Big swings need explanation." },
  { step: 4, title: "Review cash flow from operations", detail: "Is operating cash flow positive? Is it growing? Does it match net income?" },
  { step: 5, title: "Calculate 5 key ratios", detail: "Gross margin, net margin, current ratio, DSO, operating cash flow ratio. Track them monthly." },
  { step: 6, title: "Compare actuals to budget", detail: "Variance analysis tells you which assumptions held and which broke." },
  { step: 7, title: "Write a one-paragraph summary", detail: "Force yourself to explain the numbers in plain English. If you can't, you don't actually understand them." },
]

const faqItems = [
  {
    question: "What are the three main financial statements?",
    answer:
      "The income statement (also called P&L or profit and loss statement), the balance sheet, and the cash flow statement. The income statement shows performance over a period, the balance sheet shows position at a point in time, and the cash flow statement shows actual cash movement.",
  },
  {
    question: "Which financial statement is the most important?",
    answer:
      "All three together tell the full story, but the cash flow statement is often the most overlooked and the most important for survival. A business can be profitable on paper (good income statement) but still go bankrupt if it runs out of cash.",
  },
  {
    question: "How often should I review my financial statements?",
    answer:
      "Monthly at minimum. Most growing businesses benefit from monthly close reporting with quarterly deep dives. If your books aren't closed within 15 days of month-end, that's a sign you need stronger bookkeeping support.",
  },
  {
    question: "What's the difference between cash basis and accrual basis financials?",
    answer:
      "Cash basis recognizes revenue when cash is received and expenses when paid. Accrual recognizes revenue when earned and expenses when incurred, regardless of cash. Most growing businesses ($1M+) should use accrual basis — it gives a more accurate picture of operations.",
  },
  {
    question: "How do I know if my financial statements are accurate?",
    answer:
      "Three checks: (1) Bank reconciliations match — your books match the bank statement. (2) Balance sheet balances — assets = liabilities + equity. (3) Net income flows correctly into retained earnings. If any of these don't tie out, your books need cleanup.",
  },
  {
    question: "Should I use accounting software or hire a bookkeeper?",
    answer:
      "Both. Modern accounting software (QuickBooks, Xero) handles transactions and basic reporting. A bookkeeper ensures accuracy, handles reconciliations, and produces clean monthly statements. Software without a bookkeeper often results in beautiful-looking but inaccurate reports.",
  },
  {
    question: "What's a good profit margin for a small business?",
    answer:
      "It depends heavily on industry. SaaS gross margins of 75%+ are normal, professional services 50%+, retail 25–40%, restaurants 5–15%. Net margins of 10%+ are considered healthy across most industries. Compare your margins to industry benchmarks rather than absolute numbers.",
  },
]

const relatedPosts = [
  {
    title: "Cash Flow Management Guide for Growing Businesses",
    href: "/blog/cash-flow-management-guide",
    description: "Master cash flow with proven strategies, forecasting, and working capital optimization.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
  },
  {
    title: "Month-End Close Checklist: Best Practices",
    href: "/blog/month-end-close-checklist",
    description: "A 60+ item checklist to streamline monthly close and deliver accurate statements on time.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
  {
    title: "Virtual CFO Services: When You Need One",
    href: "/blog/virtual-cfo-services",
    description: "What a virtual CFO does, what they cost, and when your business needs one.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=250&fit=crop",
  },
]

export default function HowToReadFinancialStatementsPage() {
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
                <span className="text-white/80">How to Read Financial Statements</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Finance Fundamentals</span>
              </div>
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                How to Read Financial Statements:{" "}
                <span className="text-brand-teal">A Complete Guide for Business Owners</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                The income statement, balance sheet, and cash flow statement tell you everything about your business —
                if you know how to read them. This guide will get you there in 15 minutes.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>MZBPO Team</span></div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>December 14, 2025</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>15 min read</span></div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative -mt-8 mb-12 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1920&h=820&fit=crop"
                  alt="How to read financial statements for business owners"
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
                      Get Investor-Grade Financials
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      Our team produces monthly financial statements ready for boards, investors, and lenders.
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
                      Most founders and small business owners can describe their business in detail — what they sell,
                      who their customers are, why they win deals — but freeze the moment a balance sheet hits their inbox.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      That gap is expensive. The owners who can read their own financials make better pricing decisions,
                      catch problems earlier, raise capital more easily, and rarely get blindsided by cash crunches.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      This guide walks through every line of the three core statements, the 10 ratios that actually
                      matter, the red flags to spot, and how to build a 30-minute monthly review routine.
                    </p>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8 my-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-6 text-center">
                        Why Financial Literacy Matters
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          { stat: "40%", label: "of small business owners admit they don't fully understand their financials" },
                          { stat: "3×", label: "more likely to grow if owners review monthly statements" },
                          { stat: "82%", label: "of failed businesses cite cash flow — visible in the cash flow statement" },
                        ].map((s, i) => (
                          <div key={i} className="text-center">
                            <div className="text-3xl font-bold text-white font-[family-name:var(--font-syne)]">{s.stat}</div>
                            <div className="text-white/70 text-sm mt-1">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* The Three */}
                  <section id="the-three" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      The Three Core Financial Statements
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Every business — from a one-person consultancy to a Fortune 500 — produces the same three statements. Each tells a different story.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <div className="flex items-center gap-2 mb-3"><FileText className="w-5 h-5 text-brand-teal" /><h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">Income Statement</h3></div>
                        <p className="text-gray-600 text-sm mb-3"><strong>Question:</strong> Did we make money?</p>
                        <p className="text-xs text-gray-500">Period: a span of time (month, quarter, year)</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <div className="flex items-center gap-2 mb-3"><Scale className="w-5 h-5 text-brand-teal" /><h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">Balance Sheet</h3></div>
                        <p className="text-gray-600 text-sm mb-3"><strong>Question:</strong> What do we own and owe?</p>
                        <p className="text-xs text-gray-500">Snapshot: a single point in time</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <div className="flex items-center gap-2 mb-3"><Activity className="w-5 h-5 text-brand-teal" /><h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">Cash Flow</h3></div>
                        <p className="text-gray-600 text-sm mb-3"><strong>Question:</strong> Where did our cash go?</p>
                        <p className="text-xs text-gray-500">Period: a span of time, cash basis</p>
                      </div>
                    </div>
                  </section>

                  {/* Income Statement */}
                  <section id="income-statement" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      1. The Income Statement (P&L)
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Also called the Profit &amp; Loss statement (P&amp;L). It answers a simple question: did the
                      business make a profit during a specific period? It runs top-to-bottom from revenue to net income,
                      subtracting costs at each stage.
                    </p>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-6">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="text-left p-4 font-semibold">Line Item</th>
                            <th className="text-left p-4 font-semibold">What It Means</th>
                            <th className="text-right p-4 font-semibold">Example</th>
                          </tr>
                        </thead>
                        <tbody>
                          {incomeStatementLines.map((row, i) => {
                            const isSubtotal = ["Gross Profit", "Operating Income (EBIT)", "Net Income"].includes(row.line)
                            return (
                              <tr key={i} className={isSubtotal ? "bg-brand-teal/10 font-bold" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                <td className="p-4 text-gray-800">{row.line}</td>
                                <td className="p-4 text-gray-600">{row.description}</td>
                                <td className="p-4 text-right font-mono text-brand-navy">{row.example}</td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">How to read it:</p>
                      <p className="text-gray-600 text-sm">
                        Look at three things: (1) is revenue growing month-over-month? (2) is gross margin steady or
                        improving? (3) is net income positive and trending up? Most owners stop at revenue — but margins
                        and net income are what actually determine business health.
                      </p>
                    </div>
                  </section>

                  {/* Balance Sheet */}
                  <section id="balance-sheet" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      2. The Balance Sheet
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The balance sheet is a snapshot of what your business owns (assets), what it owes (liabilities),
                      and what&apos;s left for the owners (equity). The fundamental equation:
                    </p>
                    <div className="bg-gray-900 rounded-xl p-6 mb-6 text-center">
                      <p className="text-white text-xl font-mono">
                        <span className="text-brand-teal">Assets</span> = <span className="text-orange-400">Liabilities</span> + <span className="text-blue-400">Equity</span>
                      </p>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      It&apos;s called a balance sheet because the two sides must always balance. If they don&apos;t,
                      something is broken in your books.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {balanceSheetSections.map((section, i) => (
                        <div key={i} className={`rounded-xl p-5 border ${
                          section.color === "green" ? "bg-green-50 border-green-100" :
                          section.color === "red" ? "bg-red-50 border-red-100" :
                          "bg-blue-50 border-blue-100"
                        }`}>
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-1">{section.title}</h3>
                          <p className="text-xs text-gray-500 mb-4">{section.description}</p>
                          <ul className="space-y-2">
                            {section.items.map((item, j) => (
                              <li key={j}>
                                <p className="text-sm text-gray-800 font-medium">{item.line}</p>
                                <p className="text-xs text-gray-500">{item.note}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">How to read it:</p>
                      <p className="text-gray-600 text-sm">
                        Compare to last month and last year. Watch for: cash trending the wrong direction, AR
                        ballooning (slow collections), AP spiking (you&apos;re stretching suppliers), debt growing
                        faster than equity. The balance sheet tells you the long-term shape of the business.
                      </p>
                    </div>
                  </section>

                  {/* Cash Flow */}
                  <section id="cash-flow" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      3. The Cash Flow Statement
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The most underrated of the three. It explains what actually happened to your cash during the
                      period — broken into three buckets:
                    </p>
                    <div className="space-y-4 mb-6">
                      {cashFlowSections.map((s, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="flex items-center gap-3 mb-3">
                            {s.icon}
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">{s.type}</h3>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{s.description}</p>
                          <p className="text-xs text-brand-teal font-medium">Healthy pattern: {s.healthy}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">The most important comparison:</p>
                      <p className="text-gray-600 text-sm">
                        Net income vs. cash flow from operations. If they diverge significantly, dig in. A profitable
                        business with negative operating cash flow is the #1 pattern that precedes financial distress.
                      </p>
                    </div>
                  </section>

                  {/* How They Connect */}
                  <section id="how-they-connect" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      How the Three Statements Connect
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The three statements aren&apos;t independent — they&apos;re tightly linked. Understanding the
                      connections is what separates someone who can read financials from someone who just stares at them.
                    </p>
                    <div className="space-y-4">
                      {[
                        { from: "Income Statement", to: "Balance Sheet", connection: "Net income flows into Retained Earnings (equity)." },
                        { from: "Income Statement", to: "Cash Flow Statement", connection: "Net income is the starting point of cash flow from operations." },
                        { from: "Balance Sheet", to: "Cash Flow Statement", connection: "Changes in AR, AP, inventory adjust operating cash flow." },
                        { from: "Balance Sheet (Cash)", to: "Cash Flow Statement (Ending Balance)", connection: "Cash on the balance sheet = ending cash on the cash flow statement." },
                      ].map((c, i) => (
                        <div key={i} className="flex flex-wrap items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <span className="text-xs bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full font-semibold">{c.from}</span>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                          <span className="text-xs bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full font-semibold">{c.to}</span>
                          <p className="text-gray-600 text-sm w-full md:w-auto md:flex-1">{c.connection}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Ratios */}
                  <section id="ratios" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      10 Ratios Every Business Owner Should Track
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Raw numbers tell you size. Ratios tell you health. Track these 10 monthly and you&apos;ll spot
                      problems before they become crises.
                    </p>
                    <div className="space-y-4">
                      {ratios.map((r) => (
                        <div key={r.number} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="flex items-start gap-4">
                            <span className="text-2xl font-black text-brand-teal/30 shrink-0 w-10">{r.number}</span>
                            <div className="flex-1">
                              <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">{r.name}</h3>
                              <div className="bg-white rounded-lg p-2 mb-2 border border-gray-100 inline-block">
                                <p className="text-xs text-gray-500 font-mono">{r.formula}</p>
                              </div>
                              <p className="text-gray-600 text-sm mb-2">{r.what}</p>
                              <p className="text-xs text-brand-teal font-medium">Target: {r.target}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Red Flags */}
                  <section id="red-flags" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Red Flags to Watch in Financial Statements
                    </h2>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="text-left p-4 font-semibold">Red Flag</th>
                            <th className="text-left p-4 font-semibold">Severity</th>
                            <th className="text-left p-4 font-semibold">What It Signals</th>
                          </tr>
                        </thead>
                        <tbody>
                          {redFlags.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="p-4 text-gray-800 font-medium">{row.flag}</td>
                              <td className="p-4">
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                  row.severity === "Critical" ? "bg-red-100 text-red-700" :
                                  row.severity === "High" ? "bg-orange-100 text-orange-700" :
                                  "bg-yellow-100 text-yellow-700"
                                }`}>{row.severity}</span>
                              </td>
                              <td className="p-4 text-gray-600">{row.detail}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Monthly Review */}
                  <section id="month-end-review" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Your 30-Minute Monthly Review Routine
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      You don&apos;t need to be a CPA to stay on top of your numbers. Block 30 minutes the same day each month
                      and walk through this routine.
                    </p>
                    <div className="space-y-4">
                      {monthlyRoutine.map((step) => (
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

                  {/* Outsourcing */}
                  <section id="outsourcing" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      When to Get Help
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Reading financial statements is a learnable skill. Producing accurate ones every month is harder
                      than it looks — and the cost of bad data compounds fast.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {[
                        "Your books are more than 30 days behind",
                        "You can't tie out your bank balance to your statements",
                        "Your balance sheet doesn't actually balance",
                        "You're preparing for a fundraise, audit, or sale",
                        "You're spending more time on bookkeeping than on the business",
                        "Your accountant is rebuilding your books at year-end",
                      ].map((sign, i) => (
                        <div key={i} className="flex items-start gap-3 bg-orange-50 border border-orange-100 rounded-xl p-4">
                          <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                          <p className="text-gray-700 text-sm">{sign}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-3">
                        MZBPO Monthly Reporting Service
                      </h3>
                      <p className="text-white/70 font-[var(--font-poppins)] mb-4">
                        We close your books, produce all three statements with a plain-English summary, and deliver
                        them by the 10th of every month. Investor-grade output, senior-led review.
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
