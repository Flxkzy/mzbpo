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
  Shield,
  AlertTriangle,
  FileText,
  BarChart3,
  Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Healthcare Accounting: Compliance, Billing & Outsourcing Guide (2026)",
  description:
    "Complete guide to healthcare accounting for medical practices, clinics, and healthcare businesses. Covers HIPAA-compliant bookkeeping, medical billing reconciliation, revenue cycle management, and when to outsource your healthcare finance function.",
  alternates: { canonical: "/blog/healthcare-accounting" },
  openGraph: {
    title: "Healthcare Accounting: Compliance, Billing & Outsourcing Guide | MZBPO",
    description:
      "Master healthcare accounting with our guide covering HIPAA compliance, revenue cycle management, medical billing reconciliation, and outsourced bookkeeping for medical practices.",
    url: "https://www.mzbpo.com/blog/healthcare-accounting",
    type: "article",
    publishedTime: "2026-03-09T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Healthcare Accounting Guide",
      },
    ],
  },
}

const tableOfContents = [
  { id: "introduction", title: "Why Healthcare Accounting Is Different" },
  { id: "unique-challenges", title: "Unique Accounting Challenges" },
  { id: "revenue-cycle", title: "Revenue Cycle Management" },
  { id: "compliance", title: "HIPAA & Financial Compliance" },
  { id: "chart-of-accounts", title: "Healthcare Chart of Accounts" },
  { id: "key-metrics", title: "Key Financial Metrics" },
  { id: "common-mistakes", title: "Most Costly Mistakes" },
  { id: "outsourcing", title: "Benefits of Outsourcing" },
  { id: "choosing-partner", title: "Choosing the Right Partner" },
  { id: "conclusion", title: "Getting Started" },
]

const uniqueChallenges = [
  { title: "Insurance Reimbursement Complexity", desc: "Healthcare providers deal with dozens of payers — Medicare, Medicaid, private insurers — each with different reimbursement rates, claim formats, and timelines. Reconciling these accurately is a full-time job.", icon: <FileText className="w-6 h-6 text-brand-teal" /> },
  { title: "Revenue Recognition Timing", desc: "Revenue from a patient visit may be billed immediately but collected weeks or months later — and often partially. Tracking expected vs. actual reimbursements is complex under accrual accounting.", icon: <DollarSign className="w-6 h-6 text-brand-teal" /> },
  { title: "HIPAA Financial Compliance", desc: "Financial records tied to patient data are subject to HIPAA. Your accounting systems, cloud storage, and any third-party bookkeepers must handle this data under strict compliance protocols.", icon: <Shield className="w-6 h-6 text-brand-teal" /> },
  { title: "High Accounts Receivable (A/R)", desc: "Healthcare A/R is notoriously high. Industry average DSO is 40–70 days. Poor A/R management is the #1 cause of cash flow problems in medical practices.", icon: <BarChart3 className="w-6 h-6 text-brand-teal" /> },
  { title: "Contractual Adjustments", desc: "Insurance contracts require providers to write off portions of billed charges (contractual adjustments). These must be recorded accurately or your books will show inflated revenue.", icon: <AlertTriangle className="w-6 h-6 text-brand-teal" /> },
  { title: "Multi-Provider Practices", desc: "Group practices and multi-location clinics need cost accounting by provider, department, or location — adding layers of complexity absent from most other business accounting.", icon: <Users className="w-6 h-6 text-brand-teal" /> },
]

const revenueSteps = [
  { step: 1, name: "Patient Registration", detail: "Verify insurance eligibility before the appointment. Errors here cause claim denials later." },
  { step: 2, name: "Charge Capture", detail: "Document all services rendered using CPT codes. Incomplete charge capture = lost revenue." },
  { step: 3, name: "Claims Submission", detail: "Submit clean claims to payers within required timelines (typically 90–180 days)." },
  { step: 4, name: "Payment Posting", detail: "Record insurance payments and patient payments against the correct accounts." },
  { step: 5, name: "Denial Management", detail: "Review denied claims, identify patterns, resubmit or appeal. Up to 30% of initial claims are denied." },
  { step: 6, name: "Patient Billing", detail: "Bill patients for their portion (copay, deductible, coinsurance) after insurance pays." },
  { step: 7, name: "A/R Follow-Up", detail: "Aggressively follow up on aged accounts. Claims over 120 days have a sharply reduced collection rate." },
  { step: 8, name: "Reconciliation", detail: "Monthly reconciliation of all payer payments to expected reimbursements — essential for accurate books." },
]

const keyMetrics = [
  { metric: "Days in A/R (DSO)", formula: "(Total A/R / Monthly Charges) × 30", target: "< 40 days", benchmark: "Industry average: 40–70 days" },
  { metric: "Net Collection Rate", formula: "(Payments Collected / (Charges − Contractual Adj.)) × 100", target: "> 95%", benchmark: "World-class: 97–99%" },
  { metric: "Claim Denial Rate", formula: "(Denied Claims / Total Claims) × 100", target: "< 5%", benchmark: "US average: 9–12%" },
  { metric: "Cost per Claim", formula: "Total Billing Costs / Total Claims Processed", target: "< $7 per claim", benchmark: "Industry range: $7–$12" },
  { metric: "Revenue per Visit", formula: "Net Collections / Total Visits", target: "Varies by specialty", benchmark: "Compare vs. specialty benchmarks" },
  { metric: "Overhead Ratio", formula: "(Total Operating Expenses / Gross Revenue) × 100", target: "< 60%", benchmark: "Primary care: 55–65%; Specialists: 40–55%" },
]

const commonMistakes = [
  { mistake: "Confusing gross charges with net revenue", consequence: "Books show inflated income; business decisions based on wrong numbers", fix: "Always record net expected reimbursement, not gross charges" },
  { mistake: "Not reconciling insurance payments monthly", consequence: "Underpayments go undetected; payers know most practices don't audit", fix: "Reconcile every ERA/EOB against contracted rates monthly" },
  { mistake: "Writing off denials without appealing", consequence: "30–40% of denials are successfully overturned — lost money", fix: "Implement a denial management process with 60-day follow-up" },
  { mistake: "Mixing personal and practice finances", consequence: "Creates tax risk, compliance issues, and inaccurate profitability reporting", fix: "Maintain separate accounts; pay yourself a documented salary" },
  { mistake: "No provider-level profitability tracking", consequence: "Can't identify underperforming providers or high-cost service lines", fix: "Implement cost allocation by provider and department" },
]

const outsourcingBenefits = [
  { title: "HIPAA-Compliant Handling", desc: "Professional accounting firms with healthcare experience have compliant systems for handling PHI-adjacent financial data." },
  { title: "Accurate Contractual Adjustment Posting", desc: "Experienced healthcare bookkeepers understand payer contracts and post adjustments correctly — preventing overstated revenue." },
  { title: "Faster Month-End Close", desc: "Most in-house practices close books 15–20 days after month-end. Outsourced teams typically deliver in 5–7 days." },
  { title: "Revenue Cycle Support", desc: "Outsourced accounting teams can identify billing patterns that cause denials or underpayments, supporting revenue recovery." },
  { title: "Cost Savings", desc: "Healthcare accountants command salaries of $65,000–$90,000+ in the US. Outsourced services cost $800–$3,000/month for equivalent coverage." },
  { title: "Scalability", desc: "Whether you add a provider, open a new location, or expand services, your outsourced team scales without hiring delays." },
]

const faqItems = [
  { question: "Do healthcare businesses need a specialized accountant?", answer: "Strongly recommended. Healthcare accounting has unique complexities — revenue recognition, insurance reimbursements, contractual adjustments, and HIPAA considerations — that general accountants may handle incorrectly. Mistakes cost more than the specialist's fee." },
  { question: "Is outsourced bookkeeping HIPAA compliant?", answer: "It can be, with the right partner. Your outsourced accountant must sign a Business Associate Agreement (BAA) and have documented HIPAA-compliant data handling procedures. Always verify compliance before engaging any third-party financial service." },
  { question: "What's the difference between medical billing and medical accounting?", answer: "Medical billing is the process of submitting and following up on claims to get paid. Medical accounting records and analyzes those financial transactions in your books, tracks revenue vs. expenses, produces financial statements, and ensures tax compliance." },
  { question: "How do I track revenue when insurance payments come weeks later?", answer: "Use accrual accounting and record revenue at the time of service at the net expected reimbursement amount. When payments arrive, reconcile against the expected amount. The difference (underpayments, overpayments) is adjusted accordingly." },
  { question: "What software is best for healthcare accounting?", answer: "Most practices use a combination of a practice management/billing system (e.g., Kareo, Athenahealth) integrated with an accounting platform (Xero or QuickBooks). The integration between these systems is crucial for accurate financial reporting." },
]

const relatedPosts = [
  {
    title: "Outsourced Accounting for Law Firms: Trust Accounts & Compliance",
    href: "/blog/outsourced-accounting-law-firms",
    description: "Specialized accounting for law firms covering IOLTA, trust accounts, and compliance.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop",
  },
  {
    title: "Accounting for SaaS Companies: Revenue Recognition",
    href: "/blog/accounting-for-saas-companies",
    description: "Navigate ASC 606, key SaaS metrics, and investor-ready financial reporting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
  {
    title: "Internal Controls for Small Business",
    href: "/blog/internal-controls-small-business",
    description: "Essential controls every growing business needs to prevent fraud.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
  },
]

export default function HealthcareAccountingPage() {
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
                <span className="text-white/80">Healthcare Accounting</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Industry Guide</span>
              </div>
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Healthcare Accounting:{" "}
                <span className="text-brand-teal">Compliance, Billing & Outsourcing Guide</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                Healthcare accounting is uniquely complex. Insurance reimbursements, HIPAA compliance, contractual
                adjustments, and revenue cycle management demand specialist knowledge. Here&apos;s everything you need to know.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>MZBPO Team</span></div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>March 9, 2026</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>16 min read</span></div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative -mt-8 mb-12 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=820&fit=crop"
                  alt="Healthcare accounting guide"
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
                        <a key={item.id} href={`#${item.id}`} className="block text-sm text-gray-600 hover:text-brand-teal transition-colors py-1 font-[var(--font-poppins)]">
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="mt-6 bg-brand-navy rounded-2xl p-6">
                    <p className="text-white font-[family-name:var(--font-syne)] font-bold mb-3">
                      Healthcare Accounting Experts
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      HIPAA-compliant bookkeeping, revenue reconciliation, and financial reporting designed for medical practices.
                    </p>
                    <Link href="/meeting" className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all">
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
                      Walk into any successful medical practice and you&apos;ll find two operations running in
                      parallel: clinical care and revenue management. Most physicians are trained for one and left
                      to figure out the other on their own.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Healthcare accounting differs from standard business accounting in almost every dimension:
                      revenue isn&apos;t simple (insurance contracts, government reimbursements, patient payments),
                      expenses have unique classifications, and compliance requirements layer on top of standard
                      accounting rules.
                    </p>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-6 text-center">
                        The Healthcare Accounting Market
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        {[
                          { stat: "$43B+", label: "Healthcare accounting outsourcing market by 2030" },
                          { stat: "30%", label: "Average initial claim denial rate in US healthcare" },
                          { stat: "40–70", label: "Average days in A/R for medical practices" },
                        ].map((s, i) => (
                          <div key={i}>
                            <div className="text-3xl font-bold text-white font-[family-name:var(--font-syne)]">{s.stat}</div>
                            <div className="text-white/70 text-sm mt-1">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Unique Challenges */}
                  <section id="unique-challenges" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Unique Accounting Challenges in Healthcare
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {uniqueChallenges.map((challenge, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                          <div className="mb-3">{challenge.icon}</div>
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">{challenge.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{challenge.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Revenue Cycle */}
                  <section id="revenue-cycle" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Revenue Cycle Management: The Financial Backbone
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Revenue Cycle Management (RCM) is the process of tracking patient care episodes from
                      registration through final payment. Your financial books are only as accurate as your RCM process.
                    </p>
                    <div className="space-y-3">
                      {revenueSteps.map((step) => (
                        <div key={step.step} className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="w-8 h-8 bg-brand-teal text-brand-navy rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-1">{step.name}</h3>
                            <p className="text-gray-600 text-sm">{step.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* HIPAA Compliance */}
                  <section id="compliance" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      HIPAA & Financial Compliance
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Financial records that touch patient data fall under HIPAA&apos;s Business Associate rules.
                      Any accountant, bookkeeper, or software system that handles this data must comply.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-red-500" /> What Requires Compliance
                        </h3>
                        <ul className="space-y-2">
                          {["Any record linking patient identity to financial transactions", "Payment records with patient identifiers", "Insurance EOBs and ERAs stored digitally", "Accounting software containing patient-linked data", "Third-party accountants handling the above"].map((item, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                              <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" /> Compliance Requirements
                        </h3>
                        <ul className="space-y-2">
                          {["Sign a Business Associate Agreement (BAA) with accountants", "Use HIPAA-compliant cloud storage for financial records", "Ensure data encryption in transit and at rest", "Implement access controls and audit trails", "Train all staff with financial data access"].map((item, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Chart of Accounts */}
                  <section id="chart-of-accounts" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Healthcare Chart of Accounts
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      A properly structured chart of accounts is the foundation for meaningful financial reporting
                      in a medical practice. Generic templates won&apos;t capture the nuances of healthcare revenue.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { category: "Revenue Accounts", items: ["Patient Services Revenue (by payer type)", "Medicare Revenue", "Medicaid Revenue", "Private Insurance Revenue", "Self-Pay / Patient Pay Revenue", "Contractual Adjustments (contra-revenue)", "Bad Debt Expense", "Capitation Revenue (if applicable)"] },
                        { category: "Expense Accounts", items: ["Clinical Staff Salaries", "Administrative Staff Salaries", "Physician Compensation", "Medical Supplies & Consumables", "Drugs & Pharmaceuticals", "Facility Rent & Occupancy", "Medical Equipment Depreciation", "Malpractice Insurance"] },
                      ].map((section, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">{section.category}</h3>
                          <ul className="space-y-2">
                            {section.items.map((item, j) => (
                              <li key={j} className="text-gray-600 text-sm flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Key Metrics */}
                  <section id="key-metrics" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Key Financial Metrics for Healthcare
                    </h2>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="text-left p-4 font-semibold">Metric</th>
                            <th className="text-left p-4 font-semibold">Formula</th>
                            <th className="text-left p-4 font-semibold">Target</th>
                            <th className="text-left p-4 font-semibold">Benchmark</th>
                          </tr>
                        </thead>
                        <tbody>
                          {keyMetrics.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="p-4 font-medium text-brand-navy">{row.metric}</td>
                              <td className="p-4 text-gray-500 font-mono text-xs">{row.formula}</td>
                              <td className="p-4"><span className="bg-brand-teal/10 text-brand-teal px-2 py-1 rounded-full text-xs font-semibold">{row.target}</span></td>
                              <td className="p-4 text-gray-600 text-xs">{row.benchmark}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Common Mistakes */}
                  <section id="common-mistakes" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Most Costly Accounting Mistakes in Healthcare
                    </h2>
                    <div className="space-y-4">
                      {commonMistakes.map((item, i) => (
                        <div key={i} className="bg-red-50 border border-red-100 rounded-xl p-6">
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-red-500" /> {item.mistake}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3"><strong>Consequence:</strong> {item.consequence}</p>
                          <p className="text-brand-teal text-sm bg-brand-teal/5 rounded-lg px-3 py-2"><strong>Fix:</strong> {item.fix}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Outsourcing Benefits */}
                  <section id="outsourcing" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Benefits of Outsourcing Healthcare Accounting
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The healthcare accounting outsourcing market is projected to reach <strong>$43B+ by 2030</strong>. Here&apos;s why so many practices are making the shift:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {outsourcingBenefits.map((benefit, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-brand-teal" /> {benefit.title}
                          </h3>
                          <p className="text-gray-600 text-sm">{benefit.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-3">
                        MZBPO Healthcare Accounting Services
                      </h3>
                      <p className="text-white/70 font-[var(--font-poppins)] mb-4">
                        Our team specializes in healthcare practice accounting — monthly bookkeeping, revenue
                        reconciliation, payer analysis, and financial reporting. We work within your existing billing
                        system and sign a BAA.
                      </p>
                      <Link href="/meeting" className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all">
                        Schedule a Call <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </section>

                  {/* Choosing Partner */}
                  <section id="choosing-partner" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Choosing the Right Accounting Partner for Your Practice
                    </h2>
                    <div className="space-y-3">
                      {[
                        { q: "Do they have healthcare industry experience?", why: "Healthcare accounting rules require specialist knowledge most general accountants lack." },
                        { q: "Will they sign a Business Associate Agreement?", why: "Non-negotiable for HIPAA compliance. Any hesitation is a red flag." },
                        { q: "Do they know your practice management system?", why: "Integration between your PM/EHR and accounting software is critical for accuracy." },
                        { q: "Can they provide revenue cycle analysis?", why: "The best accounting partners don't just record transactions — they identify billing leakage." },
                        { q: "What's their month-end close turnaround?", why: "You need financial reports within 7–10 days of month-end to make timely decisions." },
                      ].map((item, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-1">{item.q}</h3>
                          <p className="text-gray-600 text-sm">{item.why}</p>
                        </div>
                      ))}
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
                      Getting Started
                    </h2>
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-3">Next Steps for Your Practice:</p>
                      <ul className="space-y-2">
                        {["Audit your current A/R aging — anything over 60 days needs immediate attention", "Verify your contractual adjustments are being posted correctly", "Ensure any third-party accountants have signed a BAA", "Review your key metrics (DSO, net collection rate, denial rate) monthly", "Consider outsourcing if you don't have a healthcare-specialist on staff"].map((step, i) => (
                          <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" /> {step}
                          </li>
                        ))}
                      </ul>
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
