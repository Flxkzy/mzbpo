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
  AlertTriangle,
  DollarSign,
  RefreshCw,
  FileSearch,
  Layers,
  ShieldCheck,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Catch-Up Bookkeeping: How to Get Your Books Back on Track in 2026",
  description:
    "Behind on bookkeeping? Learn how catch-up bookkeeping works, how much it costs, what's involved, and how to get months — or years — of messy books cleaned up before tax season or an audit.",
  alternates: { canonical: "/blog/catch-up-bookkeeping" },
  openGraph: {
    title: "Catch-Up Bookkeeping: How to Get Your Books Back on Track in 2026 | MZBPO",
    description:
      "A practical guide to catch-up bookkeeping — what it is, what it costs, the step-by-step process, and how to choose a provider who can clean up months or years of backlog fast.",
    url: "https://www.mzbpo.com/blog/catch-up-bookkeeping",
    type: "article",
    publishedTime: "2026-03-22T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Catch-Up Bookkeeping Services Guide",
      },
    ],
  },
}

const tableOfContents = [
  { id: "introduction", title: "Why Businesses Fall Behind" },
  { id: "what-is", title: "What is Catch-Up Bookkeeping?" },
  { id: "vs-cleanup", title: "Catch-Up vs Cleanup vs Forensic" },
  { id: "consequences", title: "What Happens If You Don't Catch Up" },
  { id: "process", title: "The 7-Step Catch-Up Process" },
  { id: "cost", title: "How Much Does Catch-Up Bookkeeping Cost?" },
  { id: "timeline", title: "How Long It Takes" },
  { id: "diy-vs-pro", title: "DIY vs Hiring a Professional" },
  { id: "how-to-choose", title: "How to Choose a Provider" },
  { id: "prevent", title: "How to Prevent Falling Behind Again" },
  { id: "outsourcing", title: "Get Started With MZBPO" },
]

const consequences = [
  {
    consequence: "IRS penalties and interest",
    detail:
      "Late filings and underpaid estimated taxes accrue 5%/month penalties up to 25%, plus interest. The IRS doesn't care that you were 'getting around to it.'",
    severity: "Critical",
  },
  {
    consequence: "Lost tax deductions",
    detail:
      "Without records, you can't claim deductions. Most businesses with messy books overpay tax by $5,000–$25,000 per year — pure money left on the table.",
    severity: "High",
  },
  {
    consequence: "Cash flow blindness",
    detail:
      "If you don't know what you have, what you owe, or what's coming, you can't plan. Cash crises are almost always preceded by months of bookkeeping neglect.",
    severity: "Critical",
  },
  {
    consequence: "Failed loan or fundraise",
    detail:
      "Banks and investors require 12–24 months of clean financials. If yours don't tie out, you'll be passed over — or only offered worse terms.",
    severity: "High",
  },
  {
    consequence: "Missed fraud or theft",
    detail:
      "Embezzlement and vendor fraud are most common in businesses without monthly reconciliations. Catch-up work often surfaces months of undetected losses.",
    severity: "High",
  },
  {
    consequence: "Increased audit risk",
    detail:
      "Inconsistent records, late filings, and round-numbered estimates flag your return for IRS audit. Clean books are your first line of defense.",
    severity: "Medium",
  },
]

const processSteps = [
  {
    step: 1,
    title: "Discovery & Scoping",
    detail:
      "Identify how many months/years are behind, which accounts and platforms are involved, the volume of transactions, and the deadline (usually a tax filing or financing event).",
    icon: <FileSearch className="w-5 h-5 text-brand-teal" />,
    output: "Catch-up scope, fixed-fee quote, target completion date",
  },
  {
    step: 2,
    title: "Document & Access Collection",
    detail:
      "Gather bank/credit card statements, payment processor reports (Stripe, Square, PayPal), payroll reports, vendor invoices, and access to your accounting software.",
    icon: <Layers className="w-5 h-5 text-brand-teal" />,
    output: "Complete document set indexed by month and account",
  },
  {
    step: 3,
    title: "Account Reconstruction",
    detail:
      "Rebuild the chart of accounts if needed, set up bank feeds, and import historical transactions month by month from earliest to latest.",
    icon: <RefreshCw className="w-5 h-5 text-brand-teal" />,
    output: "All accounts mapped, transactions imported into Xero/QuickBooks",
  },
  {
    step: 4,
    title: "Categorization & Coding",
    detail:
      "Categorize every transaction to the correct account using business context. AI-assisted tools speed this up but human judgment is required for ambiguous cases.",
    icon: <CheckCircle2 className="w-5 h-5 text-brand-teal" />,
    output: "All transactions categorized and coded",
  },
  {
    step: 5,
    title: "Bank & Credit Card Reconciliation",
    detail:
      "Match every transaction in the books to the bank/credit card statement, month by month. This is where errors, fraud, and missing entries surface.",
    icon: <ShieldCheck className="w-5 h-5 text-brand-teal" />,
    output: "Every account reconciled to the penny for every month",
  },
  {
    step: 6,
    title: "Adjusting Entries & Cleanup",
    detail:
      "Book missing journal entries, fix duplicates, allocate prepaid expenses, accrue payroll, and apply depreciation. This is where catch-up becomes investor-grade.",
    icon: <RefreshCw className="w-5 h-5 text-brand-teal" />,
    output: "Books closed for each historical period",
  },
  {
    step: 7,
    title: "Financial Statements & Handoff",
    detail:
      "Produce P&L, balance sheet, and cash flow statements for every period. Hand off to your CPA for tax filing and set up a monthly process going forward.",
    icon: <CheckCircle2 className="w-5 h-5 text-brand-teal" />,
    output: "Complete financial statements + monthly process in place",
  },
]

const costData = [
  { volume: "Low (under 100 transactions/month)", scope: "Solo consultant, simple SaaS, side business", monthlyCost: "$300–$500 per month behind" },
  { volume: "Medium (100–500 transactions/month)", scope: "Small business with payroll, multiple revenue streams", monthlyCost: "$500–$1,200 per month behind" },
  { volume: "High (500–2,000 transactions/month)", scope: "E-commerce, multi-location, multi-state", monthlyCost: "$1,200–$2,500 per month behind" },
  { volume: "Very High (2,000+ transactions/month)", scope: "Multi-entity, international, or marketplace seller", monthlyCost: "$2,500–$5,000+ per month behind" },
]

const diyVsPro = [
  { dimension: "Cost", diy: "Your time (often $50–$200/hr opportunity cost)", pro: "$300–$5,000/month behind, fixed fee" },
  { dimension: "Time to Complete", diy: "3–9 months part-time", pro: "2–6 weeks for typical engagement" },
  { dimension: "Accuracy", diy: "Variable — high error rate without training", pro: "Reconciled to the penny, audit-ready" },
  { dimension: "Tax Outcome", diy: "Often miss deductions worth $5K–$25K/yr", pro: "Captures every legitimate deduction" },
  { dimension: "Stress Level", diy: "High — bookkeeping is not why you started the business", pro: "Low — you focus on running the company" },
  { dimension: "Best For", diy: "Solo, simple finances, single platform, < 6 months behind", pro: "Multi-platform, payroll, > 6 months behind, time pressure" },
]

const evaluationCriteria = [
  { criteria: "Fixed-fee, scoped pricing", question: "Will they quote a fixed fee, or is it open-ended hourly?" },
  { criteria: "Catch-up specialty", question: "Is catch-up a core service, or a side gig? Specialists are 2–3× faster." },
  { criteria: "Software fluency", question: "Are they certified in QuickBooks/Xero and your other tools (Shopify, Stripe, etc.)?" },
  { criteria: "Turnaround commitment", question: "Will they commit in writing to a completion date?" },
  { criteria: "Communication cadence", question: "Will they give you weekly status updates without you chasing them?" },
  { criteria: "Cleanup vs catch-up", question: "Do they understand the difference and quote accordingly?" },
  { criteria: "CPA collaboration", question: "Will they coordinate directly with your tax preparer at year-end?" },
  { criteria: "Ongoing support option", question: "Can they roll into monthly bookkeeping after catch-up to keep you current?" },
]

const preventionSteps = [
  { week: "Week 1", action: "Open a dedicated business bank account and credit card if you haven't" },
  { week: "Week 1", action: "Pick an accounting platform (Xero, QuickBooks Online) and connect bank feeds" },
  { week: "Week 2", action: "Set a fixed weekly bookkeeping time slot — same day, same time" },
  { week: "Week 2", action: "Use a receipt-capture app (Dext, Hubdoc) and snap photos in real time" },
  { week: "Week 3", action: "Reconcile every account on the 1st of the following month — non-negotiable" },
  { week: "Week 3", action: "Hire monthly bookkeeping support if reconciliations consistently slip" },
  { week: "Week 4", action: "Review your P&L and cash position monthly with a 30-minute scheduled meeting" },
  { week: "Ongoing", action: "Treat your books like a system, not a chore. Systems don't fall behind." },
]

const faqItems = [
  {
    question: "What is catch-up bookkeeping?",
    answer:
      "Catch-up bookkeeping is the process of recording, categorizing, and reconciling business transactions for past periods that were never properly entered. It typically covers anywhere from 3 months to several years of backlog and produces complete financial statements for those periods.",
  },
  {
    question: "How much does catch-up bookkeeping cost?",
    answer:
      "Most providers charge $300–$2,500 per month of backlog depending on transaction volume and complexity. A typical small business 12 months behind pays $4,000–$12,000 total. Catch-up is almost always quoted as a fixed fee, not hourly, so you have cost certainty going in.",
  },
  {
    question: "How long does catch-up bookkeeping take?",
    answer:
      "For a typical small business that's 6–12 months behind, expect 2–6 weeks of work once documents are gathered. Larger backlogs (24+ months) or multi-entity businesses can take 6–12 weeks. Specialists work faster than generalist bookkeepers.",
  },
  {
    question: "Can I catch up bookkeeping myself?",
    answer:
      "If you're under 6 months behind, have simple finances (one bank account, no payroll), and have all your records organized, DIY is doable with a tool like QuickBooks. Beyond that, the time, accuracy, and tax cost of doing it wrong almost always exceeds the cost of hiring a pro.",
  },
  {
    question: "What's the difference between catch-up bookkeeping and cleanup?",
    answer:
      "Catch-up means recording transactions that were never entered. Cleanup means fixing transactions that were entered incorrectly — duplicates, miscategorizations, broken reconciliations. Most engagements involve both. Forensic accounting is a separate, higher-cost service used to investigate suspected fraud.",
  },
  {
    question: "Will catch-up bookkeeping trigger an IRS audit?",
    answer:
      "No. Filing accurate returns — even late ones — does not increase audit risk. What increases audit risk is filing inconsistent, round-numbered, or implausible returns. Clean catch-up bookkeeping reduces audit risk; sloppy DIY filings increase it.",
  },
  {
    question: "Do I need to file back taxes if I'm behind on bookkeeping?",
    answer:
      "Yes. Once your books are caught up, your CPA can prepare and file any missing returns. The IRS allows you to file up to 6 years of back returns, and doing so is the fastest way to stop penalties from accruing. Catch-up bookkeeping is the prerequisite for back-tax filing.",
  },
  {
    question: "What documents do I need for catch-up bookkeeping?",
    answer:
      "Bank statements, credit card statements, loan statements, payment processor reports (Stripe, Square, PayPal), payroll reports, sales reports from any sales platforms, major vendor invoices, and prior tax returns. A good provider will give you a checklist and help you locate anything missing.",
  },
]

const relatedPosts = [
  {
    title: "How Much Does Outsourced Bookkeeping Cost in 2026?",
    href: "/blog/outsourced-bookkeeping-cost",
    description: "A complete breakdown of pricing models and ROI for outsourced bookkeeping.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=250&fit=crop",
  },
  {
    title: "Month-End Close Checklist: Best Practices",
    href: "/blog/month-end-close-checklist",
    description: "A 60+ item checklist to streamline monthly close and avoid the catch-up cycle.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
  {
    title: "Signs Your Business Should Outsource Accounting",
    href: "/blog/signs-to-outsource-accounting",
    description: "Key indicators that it's time to bring in professional accounting help.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
  },
]

export default function CatchUpBookkeepingPage() {
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
                <span className="text-white/80">Catch-Up Bookkeeping</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Bookkeeping Recovery</span>
              </div>
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Catch-Up Bookkeeping:{" "}
                <span className="text-brand-teal">How to Get Your Books Back on Track</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                Months behind? Years behind? You&apos;re not alone — and it&apos;s fixable. Here&apos;s exactly how
                catch-up bookkeeping works, what it costs, and how to clean up your books fast.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>MZBPO Team</span></div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>March 22, 2026</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>13 min read</span></div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative -mt-8 mb-12 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=820&fit=crop"
                  alt="Catch-up bookkeeping services for small businesses"
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
                      Behind on Books?
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      We catch up months or years of backlog, fast. Fixed-fee quotes, audit-grade output, no judgment.
                    </p>
                    <Link
                      href="/meeting"
                      className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all"
                    >
                      Get a Free Quote <ArrowRight className="w-4 h-4" />
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
                      Almost every business owner we talk to says some version of the same thing: &quot;I know I&apos;m
                      behind. I just keep meaning to deal with it.&quot;
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Maybe you started doing your own bookkeeping and it slipped. Maybe your last bookkeeper left.
                      Maybe you got busy growing the business and never built the system. Whatever the reason — you&apos;re
                      not the first founder to be 6, 12, or 36 months behind, and you won&apos;t be the last.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The good news: catch-up bookkeeping is one of the most well-defined services in the accounting
                      world. With the right partner, you can be fully current — investor-ready, IRS-ready, audit-ready
                      — in a matter of weeks, at a fixed cost.
                    </p>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8 my-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-6 text-center">
                        Catch-Up Bookkeeping by the Numbers
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          { stat: "60%", label: "of small businesses fall behind on bookkeeping at some point" },
                          { stat: "$11K", label: "average annual tax overpayment from poor records" },
                          { stat: "2–6 wk", label: "typical catch-up turnaround for a small business" },
                        ].map((s, i) => (
                          <div key={i} className="text-center">
                            <div className="text-3xl font-bold text-white font-[family-name:var(--font-syne)]">{s.stat}</div>
                            <div className="text-white/70 text-sm mt-1">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* What is */}
                  <section id="what-is" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      What is Catch-Up Bookkeeping?
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Catch-up bookkeeping is the process of recording, categorizing, and reconciling business
                      transactions for past periods that were never properly entered. Output: complete, reconciled
                      financial statements for every month of the catch-up period and a clean handoff to your tax preparer.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The work covers everything that should have been done monthly: bank reconciliations, credit card
                      reconciliations, payroll matching, expense categorization, accruals, and adjusting entries.
                      It typically ends with a fresh start — your books current as of last month-end, with a monthly
                      process going forward.
                    </p>
                  </section>

                  {/* vs Cleanup */}
                  <section id="vs-cleanup" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Catch-Up vs Cleanup vs Forensic
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The terminology gets confusing. Here&apos;s how the three services differ:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">Catch-Up</h3>
                        <p className="text-gray-600 text-sm mb-3">Records transactions that were never entered. Standard rate.</p>
                        <p className="text-xs text-gray-500"><strong>Use when:</strong> You haven&apos;t done bookkeeping for 3+ months.</p>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">Cleanup</h3>
                        <p className="text-gray-600 text-sm mb-3">Fixes transactions that were entered incorrectly. Often higher rate than catch-up.</p>
                        <p className="text-xs text-gray-500"><strong>Use when:</strong> Your books exist but are wrong — duplicates, miscategorizations, broken reconciliations.</p>
                      </div>
                      <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">Forensic</h3>
                        <p className="text-gray-600 text-sm mb-3">Investigates suspected fraud or theft. Premium rate, expert witness work.</p>
                        <p className="text-xs text-gray-500"><strong>Use when:</strong> You suspect embezzlement, vendor fraud, or are involved in litigation.</p>
                      </div>
                    </div>
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">In practice:</p>
                      <p className="text-gray-600 text-sm">
                        Most real engagements are a mix of catch-up AND cleanup. A reputable provider will scope both
                        upfront so there are no surprises.
                      </p>
                    </div>
                  </section>

                  {/* Consequences */}
                  <section id="consequences" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      What Happens If You Don&apos;t Catch Up
                    </h2>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="text-left p-4 font-semibold">Consequence</th>
                            <th className="text-left p-4 font-semibold">Severity</th>
                            <th className="text-left p-4 font-semibold">Detail</th>
                          </tr>
                        </thead>
                        <tbody>
                          {consequences.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="p-4 text-gray-800 font-medium">{row.consequence}</td>
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

                  {/* Process */}
                  <section id="process" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      The 7-Step Catch-Up Bookkeeping Process
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Every reputable catch-up engagement follows roughly the same workflow. Here&apos;s what to expect.
                    </p>
                    <div className="space-y-4">
                      {processSteps.map((step) => (
                        <div key={step.step} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="flex items-start gap-4 mb-3">
                            <div className="w-10 h-10 bg-brand-teal text-brand-navy rounded-xl flex items-center justify-center font-bold text-lg shrink-0">
                              {step.step}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                {step.icon}
                                <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">{step.title}</h3>
                              </div>
                              <p className="text-gray-600 text-sm mb-2">{step.detail}</p>
                              <p className="text-xs text-brand-teal bg-brand-teal/5 rounded-lg px-3 py-1.5 inline-block font-medium">Output: {step.output}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Cost */}
                  <section id="cost" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      How Much Does Catch-Up Bookkeeping Cost?
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Most providers charge per month of backlog, with the rate scaling by transaction volume and complexity.
                      Here are the typical 2026 US benchmarks:
                    </p>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-6">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="text-left p-4 font-semibold">Volume</th>
                            <th className="text-left p-4 font-semibold">Typical Business</th>
                            <th className="text-left p-4 font-semibold">Cost per Month Behind</th>
                          </tr>
                        </thead>
                        <tbody>
                          {costData.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="p-4 text-gray-800 font-semibold">{row.volume}</td>
                              <td className="p-4 text-gray-600">{row.scope}</td>
                              <td className="p-4 text-brand-teal font-semibold">{row.monthlyCost}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">Worked example:</p>
                      <p className="text-gray-600 text-sm">
                        A small e-commerce business 12 months behind, ~300 transactions/month, with payroll and Shopify
                        + Stripe data, would typically pay $8,000–$12,000 fixed fee for full catch-up — and recover
                        $5,000–$15,000 in missed deductions in the same year.
                      </p>
                    </div>
                  </section>

                  {/* Timeline */}
                  <section id="timeline" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      How Long Catch-Up Bookkeeping Takes
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Timeline depends on backlog size, transaction volume, and how quickly you can supply documents.
                      Most catch-up clients hand off to their CPA on schedule for the next tax deadline.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { months: "3–6 months behind", time: "1–3 weeks" },
                        { months: "6–12 months behind", time: "2–6 weeks" },
                        { months: "12–24 months behind", time: "4–8 weeks" },
                        { months: "24+ months behind", time: "8–12+ weeks" },
                      ].map((row, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">{row.months}</p>
                          <p className="font-[family-name:var(--font-syne)] text-2xl font-bold text-brand-navy">{row.time}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* DIY vs Pro */}
                  <section id="diy-vs-pro" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      DIY vs Hiring a Professional
                    </h2>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="text-left p-4 font-semibold">Dimension</th>
                            <th className="text-left p-4 font-semibold">DIY</th>
                            <th className="text-left p-4 font-semibold">Professional</th>
                          </tr>
                        </thead>
                        <tbody>
                          {diyVsPro.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="p-4 text-gray-800 font-semibold">{row.dimension}</td>
                              <td className="p-4 text-gray-600">{row.diy}</td>
                              <td className="p-4 text-gray-600">{row.pro}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* How to Choose */}
                  <section id="how-to-choose" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      How to Choose a Catch-Up Bookkeeping Provider
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Catch-up is high-stakes work — you&apos;re trusting someone with your business&apos;s entire
                      financial history. Run any provider through these 8 questions before signing.
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
                        <strong>Watch out for:</strong> open-ended hourly billing, vague timelines, and providers who
                        won&apos;t scope cleanup separately from catch-up. Both are red flags for budget creep.
                      </p>
                    </div>
                  </section>

                  {/* Prevention */}
                  <section id="prevent" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      How to Prevent Falling Behind Again
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Catch-up is a one-time cost. Falling behind a second time is a choice. Here&apos;s the 30-day
                      system that keeps your books current — every month, without willpower.
                    </p>
                    <div className="space-y-3">
                      {preventionSteps.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <span className="text-xs bg-brand-teal text-brand-navy px-2 py-1 rounded-full font-semibold shrink-0 mt-0.5">{item.week}</span>
                          <p className="text-gray-700 text-sm">{item.action}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Outsourcing */}
                  <section id="outsourcing" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Get Started With MZBPO Catch-Up
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      MZBPO has caught up businesses ranging from solo founders 6 months behind to multi-entity firms
                      4 years behind. Fixed-fee quotes within 24 hours, no judgment about how you got here, and a
                      clear path to a clean monthly process going forward.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      {[
                        { title: "Fixed-Fee Quote", detail: "We scope the work upfront and quote a single, all-in fixed price.", icon: <DollarSign className="w-5 h-5 text-brand-teal" /> },
                        { title: "2–6 Week Turnaround", detail: "Most small businesses are fully caught up within 2–6 weeks of kickoff.", icon: <RefreshCw className="w-5 h-5 text-brand-teal" /> },
                        { title: "Audit-Ready Output", detail: "Reconciled to the penny, ready for your CPA and any lender or investor.", icon: <ShieldCheck className="w-5 h-5 text-brand-teal" /> },
                      ].map((item, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="mb-3">{item.icon}</div>
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2 text-sm">{item.title}</h3>
                          <p className="text-gray-600 text-sm">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-3">
                        Free Catch-Up Assessment
                      </h3>
                      <p className="text-white/70 font-[var(--font-poppins)] mb-4">
                        Tell us how far behind you are. We&apos;ll send you a fixed-fee quote and a target completion
                        date within 24 hours — no obligation.
                      </p>
                      <Link
                        href="/meeting"
                        className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all"
                      >
                        Get a Free Quote <ArrowRight className="w-4 h-4" />
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
