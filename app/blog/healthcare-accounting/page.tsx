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
  Shield,
  AlertTriangle,
  FileText,
  Building2,
  Users,
  BarChart3,
  Zap,
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
  { id: "unique-challenges", title: "Unique Accounting Challenges in Healthcare" },
  { id: "revenue-cycle", title: "Revenue Cycle Management" },
  { id: "compliance", title: "HIPAA & Financial Compliance" },
  { id: "chart-of-accounts", title: "Healthcare Chart of Accounts" },
  { id: "key-metrics", title: "Key Financial Metrics for Healthcare" },
  { id: "common-mistakes", title: "Most Costly Accounting Mistakes" },
  { id: "outsourcing", title: "Benefits of Outsourcing Healthcare Accounting" },
  { id: "choosing-partner", title: "Choosing the Right Accounting Partner" },
  { id: "conclusion", title: "Getting Started" },
]

const uniqueChallenges = [
  {
    title: "Insurance Reimbursement Complexity",
    desc: "Healthcare providers deal with dozens of payers — Medicare, Medicaid, private insurers — each with different reimbursement rates, claim formats, and timelines. Reconciling these accurately is a full-time job.",
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    color: "blue",
  },
  {
    title: "Revenue Recognition Timing",
    desc: "Revenue from a patient visit may be billed immediately but collected weeks or months later — and often partially. Tracking expected vs. actual reimbursements is complex under accrual accounting.",
    icon: <DollarSign className="w-6 h-6 text-emerald-600" />,
    color: "emerald",
  },
  {
    title: "HIPAA Financial Compliance",
    desc: "Financial records tied to patient data are subject to HIPAA. Your accounting systems, cloud storage, and any third-party bookkeepers must handle this data under strict compliance protocols.",
    icon: <Shield className="w-6 h-6 text-purple-600" />,
    color: "purple",
  },
  {
    title: "High Accounts Receivable (A/R)",
    desc: "Healthcare A/R is notoriously high. Industry average DSO (days sales outstanding) is 40–70 days. Poor A/R management is the #1 cause of cash flow problems in medical practices.",
    icon: <BarChart3 className="w-6 h-6 text-red-600" />,
    color: "red",
  },
  {
    title: "Contractual Adjustments",
    desc: "Insurance contracts require providers to write off portions of billed charges (contractual adjustments). These must be recorded accurately or your books will show inflated revenue.",
    icon: <AlertTriangle className="w-6 h-6 text-orange-600" />,
    color: "orange",
  },
  {
    title: "Multi-Provider Practices",
    desc: "Group practices and multi-location clinics need cost accounting by provider, department, or location — adding layers of complexity absent from most other business accounting.",
    icon: <Users className="w-6 h-6 text-teal-600" />,
    color: "teal",
  },
]

const revenueSteps = [
  { step: "Patient Registration", detail: "Verify insurance eligibility before the appointment. Errors here cause claim denials later." },
  { step: "Charge Capture", detail: "Document all services rendered using CPT codes. Incomplete charge capture = lost revenue." },
  { step: "Claims Submission", detail: "Submit clean claims to payers within required timelines (typically 90–180 days)." },
  { step: "Payment Posting", detail: "Record insurance payments and patient payments against the correct accounts." },
  { step: "Denial Management", detail: "Review denied claims, identify patterns, resubmit or appeal. Up to 30% of initial claims are denied." },
  { step: "Patient Billing", detail: "Bill patients for their portion (copay, deductible, coinsurance) after insurance pays." },
  { step: "A/R Follow-Up", detail: "Aggressively follow up on aged accounts. Claims over 120 days have a sharply reduced collection rate." },
  { step: "Reconciliation", detail: "Monthly reconciliation of all payer payments to expected reimbursements — essential for accurate books." },
]

const keyMetrics = [
  {
    metric: "Days in Accounts Receivable (DSO)",
    formula: "(Total A/R / Monthly Charges) × 30",
    target: "< 40 days",
    benchmark: "Industry average: 40–70 days",
  },
  {
    metric: "Net Collection Rate",
    formula: "(Payments Collected / (Charges - Contractual Adjustments)) × 100",
    target: "> 95%",
    benchmark: "World-class practices: 97–99%",
  },
  {
    metric: "Claim Denial Rate",
    formula: "(Denied Claims / Total Claims Submitted) × 100",
    target: "< 5%",
    benchmark: "US average: 9–12%",
  },
  {
    metric: "Cost per Claim",
    formula: "Total Billing Costs / Total Claims Processed",
    target: "< $7 per claim",
    benchmark: "Industry range: $7–$12",
  },
  {
    metric: "Revenue per Visit",
    formula: "Net Collections / Total Visits",
    target: "Varies by specialty",
    benchmark: "Compare vs. your payer mix and specialty benchmarks",
  },
  {
    metric: "Overhead Ratio",
    formula: "(Total Operating Expenses / Gross Revenue) × 100",
    target: "< 60% for most practices",
    benchmark: "Primary care: 55–65%; Specialists: 40–55%",
  },
]

const outsourcingBenefits = [
  {
    title: "HIPAA-Compliant Handling",
    desc: "Professional accounting firms with healthcare experience have compliant systems for handling PHI-adjacent financial data.",
  },
  {
    title: "Accurate Contractual Adjustment Posting",
    desc: "Experienced healthcare bookkeepers understand payer contracts and post adjustments correctly — preventing overstated revenue.",
  },
  {
    title: "Faster Month-End Close",
    desc: "Most in-house healthcare practices close books 15–20 days after month-end. Outsourced teams typically deliver in 5–7 days.",
  },
  {
    title: "Revenue Cycle Support",
    desc: "Outsourced accounting teams can identify billing patterns that cause denials or underpayments, supporting revenue recovery.",
  },
  {
    title: "Cost Savings",
    desc: "Healthcare accountants command salaries of $65,000–$90,000+ in the US. Outsourced services cost $800–$3,000/month for equivalent or better coverage.",
  },
  {
    title: "Scalability",
    desc: "Whether you add a provider, open a new location, or expand services, your outsourced team scales without hiring delays.",
  },
]

const commonMistakes = [
  {
    mistake: "Confusing gross charges with net revenue",
    consequence: "Books show inflated income; tax and business decisions based on wrong numbers",
    fix: "Always record net expected reimbursement, not gross charges",
  },
  {
    mistake: "Not reconciling insurance payments monthly",
    consequence: "Underpayments go undetected; payers know most practices don't audit",
    fix: "Reconcile every ERA/EOB against contracted rates monthly",
  },
  {
    mistake: "Writing off denials without appealing",
    consequence: "30–40% of denials are successfully overturned on appeal — lost money",
    fix: "Implement a denial management process with 60-day follow-up",
  },
  {
    mistake: "Mixing personal and practice finances",
    consequence: "Creates tax risk, compliance issues, and inaccurate profitability reporting",
    fix: "Maintain separate accounts; pay yourself a documented salary",
  },
  {
    mistake: "No provider-level profitability tracking",
    consequence: "Can't identify underperforming providers or high-cost service lines",
    fix: "Implement cost allocation by provider and department",
  },
]

const faqItems = [
  {
    question: "Do healthcare businesses need a specialized accountant?",
    answer:
      "Strongly recommended. Healthcare accounting has unique complexities — revenue recognition, insurance reimbursements, contractual adjustments, and HIPAA considerations — that general accountants may handle incorrectly. Mistakes cost more than the specialist's fee.",
  },
  {
    question: "Is outsourced bookkeeping HIPAA compliant?",
    answer:
      "It can be, with the right partner. Your outsourced accountant must sign a Business Associate Agreement (BAA) and have documented HIPAA-compliant data handling procedures. Always verify compliance before engaging any third-party financial service.",
  },
  {
    question: "What's the difference between medical billing and medical accounting?",
    answer:
      "Medical billing is the process of submitting and following up on claims to get paid. Medical accounting records and analyzes those financial transactions in your books, tracks revenue vs. expenses, produces financial statements, and ensures tax compliance.",
  },
  {
    question: "How do I track revenue when insurance payments come weeks later?",
    answer:
      "Use accrual accounting and record revenue at the time of service at the net expected reimbursement amount. When payments arrive, reconcile against the expected amount. The difference (underpayments, overpayments) is adjusted accordingly.",
  },
  {
    question: "What software is best for healthcare accounting?",
    answer:
      "Most practices use a combination of a practice management/billing system (e.g., Kareo, Athenahealth, DrChrono) integrated with an accounting platform (Xero or QuickBooks). The integration between these systems is crucial for accurate financial reporting.",
  },
]

export default function HealthcareAccountingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-teal-950 via-cyan-950 to-slate-900 text-white pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-teal-500/20 border border-teal-400/30 text-teal-300 px-3 py-1 rounded-full text-sm font-medium">
                Industry Guide
              </span>
              <span className="bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                Healthcare
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Healthcare Accounting:{" "}
              <span className="text-teal-400">Compliance, Billing & Outsourcing Guide</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Healthcare accounting is uniquely complex. Insurance reimbursements, HIPAA compliance, contractual
              adjustments, and revenue cycle management demand specialist knowledge. Here&apos;s everything you need
              to know.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> March 9, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 16 min read
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" /> MZBPO Editorial Team
              </span>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-teal-700 text-white py-8 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { stat: "$43B+", label: "Healthcare accounting outsourcing market by 2030" },
              { stat: "30%", label: "Average initial claim denial rate in US healthcare" },
              { stat: "40–70", label: "Average days in A/R for medical practices" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-black mb-1">{s.stat}</p>
                <p className="text-teal-200 text-sm">{s.label}</p>
              </div>
            ))}
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
                      className="block text-sm text-slate-600 hover:text-teal-600 transition-colors py-1 border-l-2 border-transparent hover:border-teal-500 pl-3"
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
                  Why Healthcare Accounting Is Different
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Walk into any successful medical practice and you&apos;ll find two operations running in parallel:
                  clinical care and revenue management. Most physicians are trained for one and left to figure out the
                  other on their own.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Healthcare accounting differs from standard business accounting in almost every dimension: revenue
                  isn&apos;t simple (insurance contracts, government reimbursements, patient payments), expenses have
                  unique classifications, and compliance requirements layer on top of standard accounting rules.
                </p>
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <p className="text-teal-900 font-semibold mb-2">Who this guide is for:</p>
                  <ul className="space-y-1">
                    {[
                      "Medical practices (primary care, specialty, dental, mental health)",
                      "Outpatient clinics and urgent care centers",
                      "Healthcare staffing companies",
                      "Medical device and healthcare product businesses",
                      "Healthcare administrators and practice managers",
                    ].map((item, i) => (
                      <li key={i} className="text-teal-800 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Unique Challenges */}
              <div id="unique-challenges" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Unique Accounting Challenges in Healthcare
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {uniqueChallenges.map((challenge, i) => (
                    <div key={i} className={`bg-${challenge.color}-50 border border-${challenge.color}-200 rounded-xl p-6`}>
                      <div className="mb-3">{challenge.icon}</div>
                      <h3 className="font-bold text-slate-900 mb-2">{challenge.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{challenge.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue Cycle */}
              <div id="revenue-cycle" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Revenue Cycle Management: The Financial Backbone
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Revenue Cycle Management (RCM) is the process of tracking patient care episodes from registration
                  through final payment collection. Your financial books are only as accurate as your RCM process.
                </p>
                <div className="space-y-3">
                  {revenueSteps.map((step, i) => (
                    <div key={i} className="flex gap-4 bg-slate-50 rounded-xl p-5 border border-slate-200">
                      <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">{step.step}</h3>
                        <p className="text-slate-600 text-sm">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance */}
              <div id="compliance" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">HIPAA & Financial Compliance</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Financial records that touch patient data fall under HIPAA&apos;s Business Associate rules. Any
                  accountant, bookkeeper, or software system that handles this data must comply.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" /> What Requires Compliance
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "Any record linking patient identity to financial transactions",
                        "Payment records with patient identifiers",
                        "Insurance EOBs and ERAs stored digitally",
                        "Accounting software containing patient-linked data",
                        "Third-party accountants handling the above",
                      ].map((item, i) => (
                        <li key={i} className="text-red-700 text-sm flex items-start gap-2">
                          <span className="text-red-500 mt-0.5 shrink-0">!</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                    <h3 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" /> Compliance Requirements
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "Sign a Business Associate Agreement (BAA) with accountants",
                        "Use HIPAA-compliant cloud storage for financial records",
                        "Ensure data encryption in transit and at rest",
                        "Implement access controls and audit trails",
                        "Train all staff with financial data access",
                      ].map((item, i) => (
                        <li key={i} className="text-emerald-700 text-sm flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Chart of Accounts */}
              <div id="chart-of-accounts" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Healthcare Chart of Accounts</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  A properly structured chart of accounts is the foundation for meaningful financial reporting in a
                  medical practice. Generic business templates will not capture the nuances of healthcare revenue and
                  expenses.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      category: "Revenue Accounts",
                      color: "emerald",
                      items: [
                        "Patient Services Revenue (by payer type)",
                        "Medicare Revenue",
                        "Medicaid Revenue",
                        "Private Insurance Revenue",
                        "Self-Pay / Patient Pay Revenue",
                        "Contractual Adjustments (contra-revenue)",
                        "Bad Debt Expense",
                        "Capitation Revenue (if applicable)",
                      ],
                    },
                    {
                      category: "Expense Accounts",
                      color: "blue",
                      items: [
                        "Clinical Staff Salaries",
                        "Administrative Staff Salaries",
                        "Physician Compensation",
                        "Medical Supplies & Consumables",
                        "Drugs & Pharmaceuticals",
                        "Facility Rent & Occupancy",
                        "Medical Equipment Depreciation",
                        "Malpractice Insurance",
                      ],
                    },
                  ].map((section, i) => (
                    <div key={i} className={`bg-${section.color}-50 border border-${section.color}-200 rounded-xl p-6`}>
                      <h3 className={`font-bold text-${section.color}-800 mb-4`}>{section.category}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item, j) => (
                          <li key={j} className={`text-${section.color}-700 text-sm flex items-center gap-2`}>
                            <span className={`w-1.5 h-1.5 rounded-full bg-${section.color}-500 shrink-0`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Metrics */}
              <div id="key-metrics" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Financial Metrics for Healthcare</h2>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-teal-900 text-white">
                        <th className="text-left p-4 font-semibold">Metric</th>
                        <th className="text-left p-4 font-semibold">Formula</th>
                        <th className="text-left p-4 font-semibold">Target</th>
                        <th className="text-left p-4 font-semibold">Benchmark</th>
                      </tr>
                    </thead>
                    <tbody>
                      {keyMetrics.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="p-4 font-medium text-slate-800">{row.metric}</td>
                          <td className="p-4 text-slate-500 font-mono text-xs">{row.formula}</td>
                          <td className="p-4">
                            <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs font-semibold">
                              {row.target}
                            </span>
                          </td>
                          <td className="p-4 text-slate-600 text-xs">{row.benchmark}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Common Mistakes */}
              <div id="common-mistakes" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Most Costly Accounting Mistakes in Healthcare</h2>
                <div className="space-y-4">
                  {commonMistakes.map((item, i) => (
                    <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-6">
                      <h3 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" /> {item.mistake}
                      </h3>
                      <p className="text-red-700 text-sm mb-3">
                        <strong>Consequence:</strong> {item.consequence}
                      </p>
                      <p className="text-emerald-700 text-sm bg-emerald-50 rounded-lg px-3 py-2">
                        <strong>Fix:</strong> {item.fix}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outsourcing Benefits */}
              <div id="outsourcing" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Benefits of Outsourcing Healthcare Accounting
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  The healthcare accounting outsourcing market is projected to reach <strong>$43B+ by 2030</strong>.
                  Here&apos;s why so many practices are making the shift:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {outsourcingBenefits.map((benefit, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-teal-600" /> {benefit.title}
                      </h3>
                      <p className="text-slate-600 text-sm">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-teal-900 text-white rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-3">MZBPO Healthcare Accounting Services</h3>
                  <p className="text-teal-100 mb-4">
                    Our team specializes in healthcare practice accounting — monthly bookkeeping, revenue
                    reconciliation, payer analysis, and financial reporting designed for medical practices and
                    healthcare businesses. We work within your existing billing system and sign a BAA.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors"
                  >
                    Talk to a Healthcare Accountant <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Choosing a Partner */}
              <div id="choosing-partner" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Choosing the Right Accounting Partner for Your Practice
                </h2>
                <div className="space-y-3">
                  {[
                    { q: "Do they have healthcare industry experience?", why: "Healthcare accounting rules (contractual adjustments, payer mix, RCM integration) require specialist knowledge." },
                    { q: "Will they sign a Business Associate Agreement?", why: "Non-negotiable for HIPAA compliance. Any hesitation is a red flag." },
                    { q: "Do they know your practice management system?", why: "Integration between your PM/EHR and accounting software is critical for accuracy." },
                    { q: "Can they provide revenue cycle analysis?", why: "The best accounting partners don't just record transactions — they identify billing leakage." },
                    { q: "What's their month-end close turnaround?", why: "You need financial reports within 7–10 days of month-end to make timely decisions." },
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                      <h3 className="font-bold text-slate-900 mb-1">{item.q}</h3>
                      <p className="text-slate-600 text-sm">{item.why}</p>
                    </div>
                  ))}
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
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Getting Started</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Healthcare accounting is not an area to cut corners. The financial health of your practice
                  directly impacts patient care, staff stability, and your ability to grow. Getting the right
                  financial infrastructure in place is as important as the right clinical systems.
                </p>
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Next Steps for Your Practice:</h3>
                  <div className="space-y-2">
                    {[
                      "Audit your current A/R aging — anything over 60 days needs immediate attention",
                      "Verify your contractual adjustments are being posted correctly",
                      "Ensure any third-party accountants have signed a BAA",
                      "Review your key metrics (DSO, net collection rate, denial rate) monthly",
                      "Consider outsourcing if you don't have a healthcare-specialist on staff",
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-200 mt-0.5 shrink-0" />
                        <p className="text-teal-100 text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="border-t border-slate-200 pt-10">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Outsourced Accounting for Law Firms: Trust Accounts & Compliance",
                      href: "/blog/outsourced-accounting-law-firms",
                      tag: "Industry Guide",
                    },
                    {
                      title: "Accounting for SaaS Companies: Revenue Recognition",
                      href: "/blog/accounting-for-saas-companies",
                      tag: "Industry Guide",
                    },
                    {
                      title: "Internal Controls for Small Business",
                      href: "/blog/internal-controls-small-business",
                      tag: "Compliance",
                    },
                  ].map((post, i) => (
                    <Link
                      key={i}
                      href={post.href}
                      className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-teal-300 hover:bg-teal-50 transition-all"
                    >
                      <span className="text-xs text-teal-600 font-semibold uppercase tracking-wide">{post.tag}</span>
                      <p className="font-semibold text-slate-900 mt-1 group-hover:text-teal-700 transition-colors text-sm">
                        {post.title}
                      </p>
                      <ChevronRight className="w-4 h-4 text-teal-500 mt-2" />
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
