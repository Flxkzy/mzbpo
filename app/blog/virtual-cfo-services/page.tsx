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
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Target,
  BarChart3,
  Users,
  Briefcase,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Virtual CFO Services: When Your Business Needs a Fractional CFO (2026)",
  description:
    "Complete guide to virtual CFO and fractional CFO services in 2026. Learn what a virtual CFO does, how much they cost, when to hire one, and how to choose the right fractional CFO for your business.",
  alternates: { canonical: "/blog/virtual-cfo-services" },
  openGraph: {
    title: "Virtual CFO Services: When Your Business Needs a Fractional CFO (2026) | MZBPO",
    description:
      "What a virtual CFO actually does, what they cost, the signs you need one, and how to evaluate a fractional CFO partner.",
    url: "https://www.mzbpo.com/blog/virtual-cfo-services",
    type: "article",
    publishedTime: "2026-04-08T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Virtual CFO Services Guide",
      },
    ],
  },
}

const tableOfContents = [
  { id: "introduction", title: "Why Virtual CFOs Exist" },
  { id: "what-is", title: "What is a Virtual CFO?" },
  { id: "vs-controller", title: "Virtual CFO vs Controller vs Bookkeeper" },
  { id: "responsibilities", title: "What a Virtual CFO Actually Does" },
  { id: "signs", title: "10 Signs You Need a Virtual CFO" },
  { id: "cost", title: "How Much Does a Virtual CFO Cost?" },
  { id: "engagement", title: "Engagement Models Explained" },
  { id: "vs-full-time", title: "Virtual CFO vs Full-Time CFO" },
  { id: "how-to-choose", title: "How to Choose a Virtual CFO" },
  { id: "outsourcing", title: "Get Started With MZBPO" },
]

const responsibilities = [
  { area: "Financial Strategy", detail: "Long-term financial planning, profitability analysis, capital allocation, growth strategy alignment with finance.", icon: <Target className="w-5 h-5 text-brand-teal" /> },
  { area: "Cash Flow Management", detail: "13-week rolling forecasts, working capital optimization, scenario planning for upturns and downturns.", icon: <DollarSign className="w-5 h-5 text-brand-teal" /> },
  { area: "Budgeting & Forecasting", detail: "Annual budgets, quarterly reforecasts, variance analysis, departmental P&L ownership.", icon: <BarChart3 className="w-5 h-5 text-brand-teal" /> },
  { area: "Investor & Board Reporting", detail: "Monthly investor updates, board decks, KPI dashboards, fundraising prep, lender communications.", icon: <Briefcase className="w-5 h-5 text-brand-teal" /> },
  { area: "M&A and Capital Raising", detail: "Due diligence prep, deal modeling, term sheet review, debt and equity raise support.", icon: <TrendingUp className="w-5 h-5 text-brand-teal" /> },
  { area: "Pricing & Unit Economics", detail: "Margin analysis, price modeling, customer profitability, contribution margin by SKU/service.", icon: <Users className="w-5 h-5 text-brand-teal" /> },
]

const signs = [
  { number: "01", title: "Revenue is over $1M but you have no financial strategy", detail: "You're growing but flying blind. A virtual CFO turns ad-hoc decisions into a coherent plan.", urgency: "High" },
  { number: "02", title: "You're raising capital or talking to lenders", detail: "Investors and banks expect clean books, projections, and a CFO-grade story. A bookkeeper can't deliver this.", urgency: "Critical" },
  { number: "03", title: "You don't know your true unit economics", detail: "If you can't answer \"how much do we make per customer/order/project,\" you can't scale profitably.", urgency: "High" },
  { number: "04", title: "Cash flow surprises you regularly", detail: "Profitable months that end with empty bank accounts mean you need rolling cash forecasting and CFO oversight.", urgency: "Critical" },
  { number: "05", title: "You're considering an acquisition (or being acquired)", detail: "Deal modeling, due diligence, and post-merger integration are CFO-level work — period.", urgency: "Critical" },
  { number: "06", title: "Margins are shrinking and you don't know why", detail: "When margin compression hits, a virtual CFO pinpoints the cause: pricing, cost mix, customer mix, or process leakage.", urgency: "High" },
  { number: "07", title: "You're expanding to new markets or products", detail: "Geographic or product expansion needs financial modeling, ROI analysis, and capital planning.", urgency: "Medium" },
  { number: "08", title: "Your board or investors are asking harder questions", detail: "If you're getting pushback on financials in board meetings, you need someone to own the answers.", urgency: "High" },
  { number: "09", title: "You're considering hiring a full-time CFO", detail: "A virtual CFO at 1/4 the cost lets you test the function and the relationship before committing.", urgency: "Medium" },
  { number: "10", title: "You spend more time on finance than running the business", detail: "If you're the de facto CFO and you don't want to be, that's the entire reason this role exists.", urgency: "High" },
]

const costData = [
  { stage: "Early-Stage / Startup", revenue: "Under $1M", scope: "Monthly close oversight, basic forecasting, fundraising prep", hours: "10–20 hrs/month", cost: "$1,500–$3,000/month" },
  { stage: "Growth Stage", revenue: "$1M–$10M", scope: "Full financial planning, KPI reporting, board prep, cash management", hours: "20–40 hrs/month", cost: "$3,000–$7,500/month" },
  { stage: "Scale Stage", revenue: "$10M–$50M", scope: "Strategic finance leadership, M&A support, capital raising, multi-entity oversight", hours: "40–80 hrs/month", cost: "$7,500–$15,000/month" },
  { stage: "Project-Based", revenue: "Any", scope: "Specific project: fundraise, audit prep, system implementation, exit prep", hours: "Variable", cost: "$10K–$50K per project" },
]

const vsTable = [
  { dimension: "Average Salary (US, 2026)", virtual: "$36K–$120K/year", fullTime: "$220K–$450K base + bonus + equity" },
  { dimension: "True Total Cost", virtual: "$36K–$180K", fullTime: "$320K–$600K (loaded)" },
  { dimension: "Time to Onboard", virtual: "1–2 weeks", fullTime: "3–9 months search + onboarding" },
  { dimension: "Bench / Coverage", virtual: "Firm provides backup", fullTime: "Single point of failure" },
  { dimension: "Industry Experience", virtual: "Often spans 50+ companies", fullTime: "Limited to past 1–3 employers" },
  { dimension: "Tools & Templates", virtual: "Comes with proven playbook", fullTime: "Builds from scratch" },
  { dimension: "Right For", virtual: "$1M–$50M, pre-IPO, growth-stage", fullTime: "$50M+, IPO-bound, complex multi-entity" },
]

const engagementModels = [
  { model: "Monthly Retainer", description: "Fixed monthly fee for an agreed scope of hours and deliverables. Most popular for ongoing partnerships.", best: "Businesses needing consistent monthly support" },
  { model: "Project-Based", description: "Defined deliverable with a fixed price — e.g., fundraise prep, audit prep, ERP implementation, exit readiness.", best: "Specific one-time financial events" },
  { model: "Fractional / Part-Time", description: "Set days per week or month, embedded in your team. Closer to a part-time hire than an external advisor.", best: "Mid-market firms wanting integrated leadership" },
  { model: "Advisory / Hourly", description: "On-demand strategic advice billed hourly. Used for sporadic decisions or board-level questions.", best: "Founders wanting a sounding board" },
]

const evaluationCriteria = [
  { criteria: "Industry Experience", question: "Have they worked with companies in your industry, stage, and revenue band?" },
  { criteria: "Strategic vs Tactical Mix", question: "Are they actually strategic, or really just a senior accountant with a fancy title?" },
  { criteria: "Toolkit & Templates", question: "Do they bring proven dashboards, models, and playbooks — or build from scratch on your dime?" },
  { criteria: "Communication Style", question: "Do they explain finance in plain English to non-finance founders?" },
  { criteria: "Bench Strength", question: "If your CFO is on vacation or leaves, who covers? A firm gives you continuity." },
  { criteria: "Investor Network", question: "If you're raising, can they introduce you to relevant lenders, VCs, or PE?" },
  { criteria: "References", question: "Can they connect you with 2–3 current clients in your stage and industry?" },
  { criteria: "Pricing Transparency", question: "Is the scope and pricing clearly defined, or full of vague hourly creep?" },
]

const faqItems = [
  {
    question: "What's the difference between a virtual CFO and a fractional CFO?",
    answer:
      "The terms are used interchangeably most of the time. \"Virtual\" emphasizes remote/cloud-based delivery; \"fractional\" emphasizes part-time. Both describe a senior finance leader who works with multiple companies and isn't on your full-time payroll.",
  },
  {
    question: "How much does a virtual CFO cost in 2026?",
    answer:
      "Most virtual CFOs charge $1,500–$15,000 per month depending on company size and scope. Early-stage startups typically pay $1,500–$3,000/month, growth-stage companies $3,000–$7,500/month, and mid-market firms $7,500–$15,000/month. Project-based work ranges from $10K–$50K.",
  },
  {
    question: "When should I hire a full-time CFO instead of a virtual one?",
    answer:
      "Generally when revenue exceeds $50M, you have multi-entity or international operations, you're preparing for an IPO, or you need a CFO embedded in daily executive decision-making. Below that, a virtual CFO is more cost-effective and often more experienced.",
  },
  {
    question: "Do I still need a bookkeeper if I have a virtual CFO?",
    answer:
      "Yes. A virtual CFO is a strategic role — they don't enter transactions, reconcile bank accounts, or close the books. You still need a bookkeeper or controller to produce the data the CFO works with. Most firms (including MZBPO) bundle bookkeeping and CFO services together.",
  },
  {
    question: "How quickly can a virtual CFO start working?",
    answer:
      "Most engagements start within 1–2 weeks: a discovery call, a scoping session, and access to your accounting system and key documents. Compare that to 3–9 months to recruit and onboard a full-time CFO.",
  },
  {
    question: "What's the ROI of a virtual CFO?",
    answer:
      "It varies by business, but most clients see 3–10× ROI in year one through better cash management, margin improvement, smarter capital decisions, and successful fundraising. The biggest returns come from avoiding bad decisions — a single avoided mistake often pays for years of fees.",
  },
  {
    question: "Will a virtual CFO replace my accountant or CPA?",
    answer:
      "No. Your CPA handles tax filings; your virtual CFO handles strategic financial leadership. They work together — the CFO ensures the books are CFO-grade so your CPA can file efficiently, and consults on tax strategy where relevant.",
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
    title: "In-House vs Outsourced Accounting: Cost Comparison",
    href: "/blog/in-house-vs-outsourced-accounting",
    description: "A detailed analysis of building an in-house team vs partnering with a provider.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
  },
  {
    title: "Accounting for Startups: When to Hire vs Outsource",
    href: "/blog/accounting-for-startups",
    description: "From entity selection to investor-ready financials — what startups need at every stage.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
  },
]

export default function VirtualCfoServicesPage() {
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
                <span className="text-white/80">Virtual CFO Services</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span>CFO Services</span>
              </div>
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Virtual CFO Services:{" "}
                <span className="text-brand-teal">When Your Business Needs a Fractional CFO</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                A full-time CFO costs $400K+ loaded. A virtual CFO delivers 80% of the value at 20% of the cost.
                Here&apos;s exactly what they do, what they charge, and when you actually need one.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>MZBPO Team</span></div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>April 8, 2026</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative -mt-8 mb-12 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&h=820&fit=crop"
                  alt="Virtual CFO services for growing businesses"
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
                      Talk to a Virtual CFO
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      MZBPO offers fractional CFO services starting at $2,500/month — including bookkeeping, reporting, and strategic advisory.
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
                      Most businesses between $1M and $50M in revenue have the same problem: they&apos;ve outgrown
                      their bookkeeper but can&apos;t justify a full-time CFO. The virtual CFO model exists to fill exactly that gap.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Hiring a full-time CFO in the US costs an average of $320,000–$600,000 per year fully loaded.
                      A virtual CFO with the same caliber of experience runs $36,000–$180,000 — and gives you exposure
                      to a finance professional who&apos;s seen 50+ businesses solve the exact problems you&apos;re solving now.
                    </p>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8 my-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-6 text-center">
                        Virtual CFO By the Numbers
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          { stat: "70%", label: "lower cost than a full-time CFO" },
                          { stat: "1–2 wk", label: "typical onboarding time" },
                          { stat: "$2.4B", label: "global fractional CFO market in 2026" },
                        ].map((s, i) => (
                          <div key={i} className="text-center">
                            <div className="text-3xl font-bold text-white font-[family-name:var(--font-syne)]">{s.stat}</div>
                            <div className="text-white/70 text-sm mt-1">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* What is a Virtual CFO */}
                  <section id="what-is" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      What is a Virtual CFO?
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      A virtual CFO is a senior finance executive who works with your business remotely on a part-time
                      or fractional basis. They typically come from a Big 4 background, prior CFO seats, or a mix of
                      operating and advisory roles — and they bring the same strategic judgment as a full-time CFO,
                      shared across multiple companies.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The role is strategic, not transactional. A virtual CFO does not enter invoices, reconcile your
                      bank account, or process payroll — those belong to your bookkeeper or controller. Instead, the
                      CFO turns financial data into business decisions: where to invest, where to cut, when to raise
                      capital, what to charge, when to hire.
                    </p>
                  </section>

                  {/* vs Controller */}
                  <section id="vs-controller" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Virtual CFO vs Controller vs Bookkeeper
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      These three roles get conflated constantly. Here&apos;s the layered way to think about it:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">Bookkeeper</h3>
                        <p className="text-gray-600 text-sm mb-3">
                          Records transactions, reconciles accounts, manages AR/AP, runs payroll. Tactical, daily/weekly work.
                        </p>
                        <p className="text-xs font-semibold text-brand-teal">$300–$1,500/month</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">Controller</h3>
                        <p className="text-gray-600 text-sm mb-3">
                          Owns the close, ensures GAAP-compliant reporting, manages bookkeepers, handles audits. Operational.
                        </p>
                        <p className="text-xs font-semibold text-brand-teal">$1,500–$5,000/month</p>
                      </div>
                      <div className="bg-brand-teal/10 rounded-xl p-5 border border-brand-teal/30">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">Virtual CFO</h3>
                        <p className="text-gray-600 text-sm mb-3">
                          Sets financial strategy, runs forecasting, prepares investors/board, advises CEO. Strategic.
                        </p>
                        <p className="text-xs font-semibold text-brand-teal">$2,500–$15,000/month</p>
                      </div>
                    </div>
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">Key insight:</p>
                      <p className="text-gray-600 text-sm">
                        A virtual CFO is most effective when you also have a clean bookkeeping function underneath
                        them. Garbage in, garbage out — even the best CFO can&apos;t make decisions on broken books.
                      </p>
                    </div>
                  </section>

                  {/* Responsibilities */}
                  <section id="responsibilities" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      What a Virtual CFO Actually Does
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {responsibilities.map((r, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="flex items-center gap-3 mb-3">
                            {r.icon}
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">{r.area}</h3>
                          </div>
                          <p className="text-gray-600 text-sm">{r.detail}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Signs */}
                  <section id="signs" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      10 Signs You Need a Virtual CFO
                    </h2>
                    <div className="space-y-4">
                      {signs.map((s) => (
                        <div key={s.number} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="flex items-start gap-4">
                            <span className="text-2xl font-black text-brand-teal/30 shrink-0 w-10">{s.number}</span>
                            <div className="flex-1">
                              <div className="flex items-center justify-between gap-3 mb-2">
                                <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">{s.title}</h3>
                                <span className={`text-xs px-2 py-1 rounded-full font-semibold shrink-0 ${
                                  s.urgency === "Critical" ? "bg-red-100 text-red-700" :
                                  s.urgency === "High" ? "bg-orange-100 text-orange-700" :
                                  "bg-yellow-100 text-yellow-700"
                                }`}>{s.urgency}</span>
                              </div>
                              <p className="text-gray-600 text-sm">{s.detail}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Cost */}
                  <section id="cost" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      How Much Does a Virtual CFO Cost in 2026?
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Virtual CFO pricing is driven by company size, complexity, and engagement scope. Here are the
                      benchmarks we see across the US market in 2026.
                    </p>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="text-left p-4 font-semibold">Stage</th>
                            <th className="text-left p-4 font-semibold">Revenue</th>
                            <th className="text-left p-4 font-semibold">Typical Scope</th>
                            <th className="text-left p-4 font-semibold">Hours</th>
                            <th className="text-left p-4 font-semibold">Cost</th>
                          </tr>
                        </thead>
                        <tbody>
                          {costData.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="p-4 text-gray-800 font-semibold">{row.stage}</td>
                              <td className="p-4 text-gray-600">{row.revenue}</td>
                              <td className="p-4 text-gray-600">{row.scope}</td>
                              <td className="p-4 text-gray-600">{row.hours}</td>
                              <td className="p-4 text-brand-teal font-semibold">{row.cost}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Engagement Models */}
                  <section id="engagement" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Engagement Models Explained
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {engagementModels.map((m, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">{m.model}</h3>
                          <p className="text-gray-600 text-sm mb-3">{m.description}</p>
                          <p className="text-xs text-brand-teal bg-brand-teal/5 rounded-lg px-3 py-2 font-medium">Best for: {m.best}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* vs Full-Time */}
                  <section id="vs-full-time" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Virtual CFO vs Full-Time CFO: Side-by-Side
                    </h2>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="text-left p-4 font-semibold">Dimension</th>
                            <th className="text-left p-4 font-semibold">Virtual CFO</th>
                            <th className="text-left p-4 font-semibold">Full-Time CFO</th>
                          </tr>
                        </thead>
                        <tbody>
                          {vsTable.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="p-4 text-gray-800 font-semibold">{row.dimension}</td>
                              <td className="p-4 text-gray-600">{row.virtual}</td>
                              <td className="p-4 text-gray-600">{row.fullTime}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* How to Choose */}
                  <section id="how-to-choose" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      How to Choose a Virtual CFO (Evaluation Checklist)
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The virtual CFO market is crowded — and quality varies enormously. Run prospective providers through these 8 questions before you sign anything.
                    </p>
                    <div className="space-y-3">
                      {evaluationCriteria.map((c, i) => (
                        <div key={i} className="flex gap-4 items-start bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal mt-1 shrink-0" />
                          <div>
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy text-sm mb-1">{c.criteria}</h3>
                            <p className="text-gray-600 text-sm">{c.question}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 mt-6 flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                      <p className="text-gray-700 text-sm">
                        <strong>Watch out for:</strong> &quot;CFO services&quot; that are really just senior bookkeeping with strategic-sounding names. Ask for a sample board deck or 13-week forecast before you sign.
                      </p>
                    </div>
                  </section>

                  {/* Outsourcing CTA */}
                  <section id="outsourcing" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Get Started With a Virtual CFO
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      MZBPO offers fully integrated virtual CFO services — bookkeeping, reporting, forecasting, and
                      strategic advisory — through a senior-led team backed by BKR International. Most clients are
                      onboarded inside 2 weeks, with their first CFO deliverable in week 3.
                    </p>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-3">
                        Schedule a Free Discovery Call
                      </h3>
                      <p className="text-white/70 font-[var(--font-poppins)] mb-4">
                        30 minutes. We&apos;ll review your finances, identify the highest-impact opportunities, and
                        recommend whether a virtual CFO is right for your stage — even if it&apos;s not us.
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
