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
  HardHat,
  AlertTriangle,
  DollarSign,
  Hammer,
  ClipboardList,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Construction Accounting: Job Costing, WIP Reports & Compliance Guide (2026)",
  description:
    "Complete construction accounting guide for 2026. Job costing, work-in-progress (WIP) reporting, percentage of completion, retainage, prevailing wage, and the best software for contractors and construction firms.",
  alternates: { canonical: "/blog/construction-accounting" },
  openGraph: {
    title: "Construction Accounting: Job Costing, WIP & Compliance Guide (2026) | MZBPO",
    description:
      "How construction accounting differs, what job costing and WIP reports actually look like, plus compliance and software recommendations for contractors.",
    url: "https://www.mzbpo.com/blog/construction-accounting",
    type: "article",
    publishedTime: "2026-04-15T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Construction Accounting Guide for Contractors",
      },
    ],
  },
}

const tableOfContents = [
  { id: "introduction", title: "Why Construction Accounting Is Different" },
  { id: "methods", title: "Accounting Methods Explained" },
  { id: "job-costing", title: "Job Costing: The Foundation" },
  { id: "wip", title: "Work-in-Progress (WIP) Reporting" },
  { id: "retainage", title: "Retainage, Change Orders & Billings" },
  { id: "compliance", title: "Construction-Specific Compliance" },
  { id: "pitfalls", title: "8 Common Pitfalls to Avoid" },
  { id: "software", title: "Best Software for Contractors" },
  { id: "outsourcing", title: "When to Outsource" },
]

const accountingMethods = [
  {
    method: "Cash Basis",
    revenue: "Recognized when cash is received",
    bestFor: "Small contractors under $25M average revenue",
    icon: <DollarSign className="w-5 h-5 text-brand-teal" />,
    note: "Simple, but distorts profitability on long projects.",
  },
  {
    method: "Accrual Basis",
    revenue: "Recognized when earned, regardless of payment",
    bestFor: "Mid-size contractors and any firm with material AR/AP",
    icon: <ClipboardList className="w-5 h-5 text-brand-teal" />,
    note: "More accurate but still struggles with multi-year jobs.",
  },
  {
    method: "Percentage of Completion (POC)",
    revenue: "Recognized as the project progresses (cost-to-cost ratio)",
    bestFor: "GAAP-compliant contractors, projects over 12 months, bonding requirements",
    icon: <TrendingUp className="w-5 h-5 text-brand-teal" />,
    note: "The default for serious construction firms — required by ASC 606 in most cases.",
  },
  {
    method: "Completed Contract",
    revenue: "Recognized only when the project is finished",
    bestFor: "Short-duration jobs, residential builds, tax-only filings under $25M",
    icon: <Hammer className="w-5 h-5 text-brand-teal" />,
    note: "Allowed for tax under the small contractor exception, but rarely used for GAAP.",
  },
]

const jobCostingComponents = [
  { code: "01", category: "Direct Labor", detail: "Wages, payroll taxes, benefits, and burden for crews working on the job. Tracked by employee, by day, by job code.", example: "$24/hr × 1.32 burden = $31.68 fully-loaded labor rate" },
  { code: "02", category: "Direct Materials", detail: "Lumber, concrete, steel, fixtures, equipment — anything physically going into the project. Tracked by PO and delivery ticket.", example: "Tied to vendor invoices and job ticket numbers" },
  { code: "03", category: "Subcontractor Costs", detail: "Payments to subs (electrical, plumbing, HVAC, etc.). Each sub typically has a contract per job, plus 1099 tracking and certificate of insurance verification.", example: "Subcontract value $48K, paid in 4 progress draws" },
  { code: "04", category: "Equipment Costs", detail: "Owned and rented equipment hours allocated to the job. Internal rates often differ from market rental rates.", example: "Excavator: 32 hours × $185/hr internal rate = $5,920" },
  { code: "05", category: "Other Direct Costs", detail: "Permits, dumpster fees, temporary utilities, project-specific insurance, travel, lodging.", example: "Building permit $2,400, port-a-potty $190/mo" },
  { code: "06", category: "Indirect / Overhead", detail: "Foreman supervision, project management, field office costs allocated based on labor hours, revenue, or another driver.", example: "Allocated at 8.5% of direct cost" },
]

const wipExample = [
  { col: "Contract Value", val: "$1,200,000" },
  { col: "Estimated Total Cost", val: "$960,000" },
  { col: "Costs Incurred to Date", val: "$432,000" },
  { col: "Percent Complete (cost-to-cost)", val: "45.0%" },
  { col: "Earned Revenue", val: "$540,000" },
  { col: "Billings to Date", val: "$510,000" },
  { col: "Underbilling (CIE)", val: "$30,000" },
  { col: "Estimated Gross Profit", val: "$240,000 (20%)" },
]

const compliance = [
  {
    area: "Prevailing Wage / Davis-Bacon",
    detail: "Federal and many state-funded projects require minimum hourly wages by trade and locality. Certified payroll (WH-347) must be filed weekly.",
  },
  {
    area: "Sales & Use Tax on Materials",
    detail: "Tax rules differ by state — sometimes the contractor is the consumer, sometimes the customer. Resale certificates and tax-paid materials must be tracked job-by-job.",
  },
  {
    area: "1099 Compliance for Subcontractors",
    detail: "Any sub paid $600+ requires a 1099-NEC. W-9s and certificates of insurance must be on file before a check is cut.",
  },
  {
    area: "Multi-State Income Tax (Apportionment)",
    detail: "Contractors working across state lines owe income tax in each state based on payroll, property, and sales factors. Nexus rules trigger fast.",
  },
  {
    area: "Sales Tax Nexus on Out-of-State Jobs",
    detail: "Materials delivered out of state may create economic nexus. Wayfair v. South Dakota changed the game for traveling contractors.",
  },
  {
    area: "Workers' Comp Audits",
    detail: "Carriers reclassify employees and subs annually. Misclassification on certificates of insurance triggers retroactive premium adjustments.",
  },
]

const pitfalls = [
  { number: "01", title: "Mixing job costs across projects", detail: "Charging materials or labor to the wrong job code destroys margin reporting. Most common cause: lazy timecard coding." },
  { number: "02", title: "Ignoring underbillings and overbillings", detail: "If you don't reconcile billings to earned revenue, you can't tell if you're financing the project for your customer or the other way around." },
  { number: "03", title: "Treating retainage as receivable instead of separating it", detail: "Retainage held by GCs ages differently than normal AR. Mixing them masks collection problems." },
  { number: "04", title: "No estimate-to-actual variance review", detail: "Without comparing estimated vs actual cost weekly, you only learn you lost money on a job after it's finished." },
  { number: "05", title: "Misclassifying 1099 vs W-2 workers", detail: "The IRS, state DOLs, and OSHA all police this. Misclassification penalties can wipe out a quarter of profit overnight." },
  { number: "06", title: "Skipping the WIP schedule", detail: "Bonding companies, lenders, and the IRS all expect WIP. Submitting a balance sheet without it screams amateur." },
  { number: "07", title: "Letting equipment costs sit in overhead", detail: "Equipment-heavy contractors who don't allocate equipment time to jobs end up underpricing equipment-heavy work." },
  { number: "08", title: "No bonding-grade financials", detail: "If you ever need a surety bond, your books need reviewed or audited financials with WIP. Most contractors discover this too late." },
]

const software = [
  { name: "QuickBooks Online + Knowify / Buildertrend", best: "Small to mid-size general contractors, residential", strengths: "Familiar interface, easy onboarding, strong third-party integrations", price: "$50–$300/mo" },
  { name: "Sage 100 Contractor / Sage 300 CRE", best: "Mid-size to large GCs, specialty trades", strengths: "Industry standard for serious construction firms — full job costing, equipment, payroll", price: "$1,500–$5,000+/mo" },
  { name: "Foundation Software", best: "Mid-size contractors needing certified payroll, AIA billing", strengths: "Built for construction from day one, strong payroll and union reporting", price: "Quote-based, mid-market" },
  { name: "Procore (with QBO/Sage)", best: "Project management + accounting integration", strengths: "Best-in-class PM tool — pairs with accounting software for true field-to-finance flow", price: "Quote-based" },
  { name: "Buildertrend", best: "Residential remodelers and home builders", strengths: "Customer-facing portal, scheduling, job costing, simple QBO sync", price: "$199–$599/mo" },
  { name: "CMiC / Viewpoint Vista", best: "Enterprise contractors over $100M revenue", strengths: "ERP-grade — handles multi-entity, multi-currency, complex job structures", price: "Enterprise pricing" },
]

const outsourceTriggers = [
  "Revenue is growing past $5M and your in-house bookkeeper can't keep up with WIP",
  "Bonding agent or lender keeps asking for cleaner financials",
  "You haven't done a real estimate-to-actual review in 90+ days",
  "Sales tax exposure across multiple states is unclear",
  "Job costing is inconsistent — different PMs use different categories",
  "Year-end audit or review is a fire drill every January",
  "You want to acquire another contractor (or be acquired)",
  "You're switching from QuickBooks to Sage or Foundation and need help with the cutover",
]

const faqItems = [
  {
    question: "What's the difference between construction accounting and regular accounting?",
    answer:
      "Construction accounting tracks revenue and cost at the project level rather than just the company level. It uses job costing, work-in-progress (WIP) schedules, and percentage-of-completion revenue recognition because most construction contracts span months or years and have unique billing structures (retainage, change orders, progress draws).",
  },
  {
    question: "Do contractors have to use percentage of completion?",
    answer:
      "For tax purposes, contractors with average gross receipts under $30M (2026 threshold, indexed) can use the cash, accrual, or completed contract method. Above that, percentage of completion is generally required. For GAAP financials — which bonding companies and lenders expect — ASC 606 effectively requires POC for long-term contracts.",
  },
  {
    question: "What is a WIP schedule and why do bonding companies want it?",
    answer:
      "A work-in-progress schedule lists every open job with contract value, estimated cost, costs incurred to date, percent complete, earned revenue, and billings. Bonding companies use it to assess your capacity, profitability trends, and over/under billing exposure. Without WIP, you'll struggle to get bonded for jobs over $1M.",
  },
  {
    question: "How is retainage handled in construction accounting?",
    answer:
      "Retainage (typically 5–10% withheld until project completion) should be tracked as a separate receivable account, not blended with regular AR. It ages on a different timeline — sometimes 6–18 months — and lenders look at retainage separately when assessing collectibility.",
  },
  {
    question: "How much does outsourced construction accounting cost?",
    answer:
      "Outsourced construction bookkeeping typically runs $1,500–$5,000/month for small to mid-size contractors, depending on transaction volume, number of jobs, and payroll complexity. Full controller-level service with WIP reporting and bonding-grade financials is usually $3,500–$8,000/month.",
  },
  {
    question: "Should I use QuickBooks or a construction-specific platform?",
    answer:
      "QuickBooks Online plus a job-costing add-on (Knowify, Buildertrend) works well for contractors under $5–10M with simple project structures. Above that — or if you handle certified payroll, complex equipment costing, or AIA billing — a construction-specific platform like Sage 100 Contractor or Foundation pays for itself within a year.",
  },
  {
    question: "What's the biggest accounting mistake construction firms make?",
    answer:
      "Not running a weekly estimate-to-actual variance review. Without it, you only find out you lost money on a job when you close it out — by which point it's too late to renegotiate change orders, push for productivity, or salvage margin. Real-time job cost visibility is the single highest-ROI process change for most contractors.",
  },
]

const relatedPosts = [
  {
    title: "Cash Flow Management Guide for Growing Businesses",
    href: "/blog/cash-flow-management-guide",
    description: "Master cash flow forecasting, fix gaps, and optimize working capital — critical for contractors.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
  },
  {
    title: "Accounts Payable Best Practices: Automation & Fraud Prevention",
    href: "/blog/accounts-payable-best-practices",
    description: "AP automation, three-way matching, vendor controls, and fraud prevention for construction firms.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
  },
  {
    title: "Virtual CFO Services: When You Need a Fractional CFO",
    href: "/blog/virtual-cfo-services",
    description: "What a virtual CFO does, what they cost, and when contractors should consider one.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=250&fit=crop",
  },
]

export default function ConstructionAccountingPage() {
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
                <span className="text-white/80">Construction Accounting</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Industry Guide</span>
              </div>
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Construction Accounting:{" "}
                <span className="text-brand-teal">Job Costing, WIP Reports & Compliance</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                Construction is one of the only industries where you can be profitable on paper and bankrupt in cash.
                This guide covers job costing, WIP reporting, retainage, and the compliance traps that catch contractors off guard.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>MZBPO Team</span></div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>April 15, 2026</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative -mt-8 mb-12 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=820&fit=crop"
                  alt="Construction accounting and job costing for contractors"
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
                      Construction Accounting Help
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      MZBPO supports general contractors, specialty trades, and home builders with job costing, WIP, and bonding-grade financials.
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
                      Construction accounting is the most operationally complex form of accounting outside of banking.
                      Long project cycles, retainage, change orders, multi-state payroll, and bonding requirements
                      all converge into a financial system that simply cannot be run with off-the-shelf bookkeeping.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The good news: once you set up the right framework — job costing, WIP, and the right software —
                      construction accounting becomes a powerful management tool, not a quarterly fire drill. The
                      contractors who win in this market are the ones who treat finance as a daily operational discipline.
                    </p>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8 my-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-6 text-center">
                        Construction Accounting By the Numbers
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          { stat: "$1.6T", label: "annual US construction spending" },
                          { stat: "60%", label: "of contractor failures tied to financial mismanagement" },
                          { stat: "20%", label: "of bid-vs-actual cost variance is industry-typical (and avoidable)" },
                        ].map((s, i) => (
                          <div key={i} className="text-center">
                            <div className="text-3xl font-bold text-white font-[family-name:var(--font-syne)]">{s.stat}</div>
                            <div className="text-white/70 text-sm mt-1">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Methods */}
                  <section id="methods" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Accounting Methods Explained
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Most construction firms run two parallel methods — one for tax (often cash or completed contract)
                      and one for financials (POC under GAAP). Picking the wrong one costs real money in tax timing,
                      bonding capacity, and reporting accuracy.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {accountingMethods.map((m, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="flex items-center gap-3 mb-3">
                            {m.icon}
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">{m.method}</h3>
                          </div>
                          <p className="text-gray-700 text-sm font-medium mb-2">{m.revenue}</p>
                          <p className="text-gray-600 text-xs mb-2"><strong>Best for:</strong> {m.bestFor}</p>
                          <p className="text-gray-500 text-xs italic">{m.note}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Job Costing */}
                  <section id="job-costing" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Job Costing: The Foundation
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Job costing is the practice of capturing every dollar of cost — labor, materials, subs,
                      equipment, overhead — at the project level. Done right, it answers four questions every PM
                      should know weekly: <em>Are we on budget? On schedule? Profitable? At risk?</em>
                    </p>
                    <div className="space-y-4">
                      {jobCostingComponents.map((c) => (
                        <div key={c.code} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="flex items-start gap-4">
                            <span className="text-2xl font-black text-brand-teal/30 shrink-0 w-10">{c.code}</span>
                            <div className="flex-1">
                              <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">{c.category}</h3>
                              <p className="text-gray-600 text-sm mb-2">{c.detail}</p>
                              <p className="text-xs text-brand-teal bg-brand-teal/5 rounded-lg px-3 py-2 font-medium inline-block">{c.example}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* WIP */}
                  <section id="wip" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Work-in-Progress (WIP) Reporting
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The WIP schedule is the single most important report in construction accounting. It reconciles
                      what you&apos;ve earned against what you&apos;ve billed, surfaces over- and under-billings, and is the
                      first thing a bonding agent or lender will ask for.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Here&apos;s a simplified single-job WIP using the cost-to-cost method:
                    </p>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="text-left p-4 font-semibold">Line Item</th>
                            <th className="text-right p-4 font-semibold">Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {wipExample.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="p-4 text-gray-800 font-semibold">{row.col}</td>
                              <td className="p-4 text-brand-teal font-semibold text-right">{row.val}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6 mt-6">
                      <p className="text-brand-navy font-semibold mb-2">Reading the result:</p>
                      <p className="text-gray-600 text-sm">
                        The job has earned $540K but only billed $510K — a $30K underbilling. That means the contractor
                        is effectively financing the customer for $30K. Repeated across 10 jobs, that&apos;s $300K of
                        working capital tied up. WIP makes that invisible problem visible.
                      </p>
                    </div>
                  </section>

                  {/* Retainage */}
                  <section id="retainage" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Retainage, Change Orders & Progress Billings
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Three construction-specific billing concepts trip up generalist bookkeepers more than any others:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">Retainage</h3>
                        <p className="text-gray-600 text-sm">
                          5–10% withheld by the customer (often a GC or owner) until project completion. Track in
                          a separate <strong>Retainage Receivable</strong> account — never bury it in regular AR.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">Change Orders</h3>
                        <p className="text-gray-600 text-sm">
                          Modifications to the original contract scope. Approved change orders update both contract
                          value and estimated cost — unapproved ones become disputed work and need separate tracking.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">AIA Progress Billing</h3>
                        <p className="text-gray-600 text-sm">
                          The G702/G703 schedule of values format used on most commercial jobs. Each line tracks
                          completion percentage and prior/current draw — and ties directly into your WIP report.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Compliance */}
                  <section id="compliance" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Construction-Specific Compliance
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Six compliance areas where contractors regularly get burned:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {compliance.map((c, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="flex items-center gap-3 mb-3">
                            <HardHat className="w-5 h-5 text-brand-teal" />
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">{c.area}</h3>
                          </div>
                          <p className="text-gray-600 text-sm">{c.detail}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Pitfalls */}
                  <section id="pitfalls" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      8 Common Pitfalls to Avoid
                    </h2>
                    <div className="space-y-4">
                      {pitfalls.map((p) => (
                        <div key={p.number} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="flex items-start gap-4">
                            <span className="text-2xl font-black text-brand-teal/30 shrink-0 w-10">{p.number}</span>
                            <div className="flex-1">
                              <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">{p.title}</h3>
                              <p className="text-gray-600 text-sm">{p.detail}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 mt-6 flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                      <p className="text-gray-700 text-sm">
                        <strong>The biggest one:</strong> No estimate-to-actual review. If you&apos;re only finding out a
                        job lost money at closeout, your accounting system is reactive — not a management tool.
                      </p>
                    </div>
                  </section>

                  {/* Software */}
                  <section id="software" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Best Software for Contractors
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The right platform depends on size, project mix, and whether you need certified payroll. Here&apos;s the landscape in 2026:
                    </p>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="text-left p-4 font-semibold">Platform</th>
                            <th className="text-left p-4 font-semibold">Best For</th>
                            <th className="text-left p-4 font-semibold">Strengths</th>
                            <th className="text-left p-4 font-semibold">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {software.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="p-4 text-gray-800 font-semibold">{row.name}</td>
                              <td className="p-4 text-gray-600">{row.best}</td>
                              <td className="p-4 text-gray-600">{row.strengths}</td>
                              <td className="p-4 text-brand-teal font-semibold">{row.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Outsourcing */}
                  <section id="outsourcing" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      When to Outsource Construction Accounting
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Most contractors hit the outsourcing decision twice: first when they outgrow a part-time
                      bookkeeper, then again when the controller they hired can&apos;t produce bonding-grade financials.
                      Common signals:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {outsourceTriggers.map((t, i) => (
                        <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                          <p className="text-gray-700 text-sm">{t}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-3">
                        Talk to MZBPO&apos;s Construction Team
                      </h3>
                      <p className="text-white/70 font-[var(--font-poppins)] mb-4">
                        We support general contractors, specialty trades, and home builders across the US, UK, and
                        Australia — with full job costing, certified payroll, WIP reporting, and audit-ready financials.
                      </p>
                      <Link
                        href="/meeting"
                        className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all"
                      >
                        Schedule a Discovery Call <ArrowRight className="w-4 h-4" />
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
