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
  Zap,
  RefreshCw,
  BarChart3,
  TrendingUp,
  Target,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Accounts Payable Best Practices: Automation & Fraud Prevention (2026)",
  description:
    "Master accounts payable management with proven best practices for 2026. Covers AP automation, fraud prevention, vendor management, payment optimization, three-way matching, and when to outsource your AP function.",
  alternates: { canonical: "/blog/accounts-payable-best-practices" },
  openGraph: {
    title: "Accounts Payable Best Practices: Automation & Fraud Prevention (2026) | MZBPO",
    description:
      "Complete guide to accounts payable best practices — automation, fraud prevention, vendor management, payment optimization, and AP metrics that matter.",
    url: "https://www.mzbpo.com/blog/accounts-payable-best-practices",
    type: "article",
    publishedTime: "2026-03-15T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Accounts Payable Best Practices Guide",
      },
    ],
  },
}

const tableOfContents = [
  { id: "introduction", title: "Why AP Management Matters" },
  { id: "ap-process", title: "The AP Process: End-to-End" },
  { id: "three-way-match", title: "Three-Way Matching" },
  { id: "fraud-prevention", title: "AP Fraud: Types & Prevention" },
  { id: "automation", title: "AP Automation: What to Automate" },
  { id: "vendor-management", title: "Vendor Management Best Practices" },
  { id: "payment-optimization", title: "Payment Optimization" },
  { id: "key-metrics", title: "AP Metrics That Matter" },
  { id: "common-mistakes", title: "Costly AP Mistakes to Avoid" },
  { id: "outsourcing", title: "When to Outsource AP" },
]

const apProcessSteps = [
  {
    step: 1,
    name: "Purchase Requisition",
    detail: "Department requests a purchase. In a controlled AP process, all purchases start with a documented requisition — preventing unauthorized spending.",
    risk: "Bypassing this step is how unauthorized purchases happen",
  },
  {
    step: 2,
    name: "Purchase Order (PO) Creation",
    detail: "Finance or procurement issues a formal PO. The PO number becomes the reference point for the entire transaction.",
    risk: "No PO = no baseline for later matching",
  },
  {
    step: 3,
    name: "Goods/Services Receipt",
    detail: "The receiving department confirms delivery and quantity against the PO. This creates the Goods Receipt (GR) document.",
    risk: "Skipping this step is how overpayments and phantom deliveries occur",
  },
  {
    step: 4,
    name: "Invoice Receipt & Capture",
    detail: "Vendor invoice is received (email, mail, or portal) and captured into the AP system. AI-powered OCR can automate data extraction here.",
    risk: "Manual data entry creates errors and delays",
  },
  {
    step: 5,
    name: "Three-Way Matching",
    detail: "Invoice is matched against the PO and GR to verify quantities, prices, and terms. Any discrepancy triggers a hold for resolution.",
    risk: "Failure to match is the #1 cause of AP fraud losses",
  },
  {
    step: 6,
    name: "Approval Routing",
    detail: "Approved invoices route to appropriate stakeholders based on amount, department, or vendor type. Approval limits and escalation rules apply.",
    risk: "Manual routing causes delays and approval bottlenecks",
  },
  {
    step: 7,
    name: "Payment Scheduling",
    detail: "Approved invoices are scheduled for payment at the optimal time — on or just before due date to maximize DPO without incurring late fees.",
    risk: "Paying early loses float; paying late incurs penalties",
  },
  {
    step: 8,
    name: "Payment Execution",
    detail: "Payment is made via ACH, wire, check, or virtual card. Dual authorization controls should apply to payments above a threshold.",
    risk: "Single-person payment control is a major fraud vulnerability",
  },
  {
    step: 9,
    name: "Reconciliation",
    detail: "All payments are reconciled against bank statements and the general ledger. Vendor statements are reconciled quarterly.",
    risk: "Failure to reconcile allows errors and fraud to hide indefinitely",
  },
]

const fraudTypes = [
  {
    type: "Vendor Fraud",
    description: "Fraudulent vendors are set up in the system and invoices submitted for goods/services never delivered.",
    redFlags: ["New vendor with no verifiable business presence", "Vendor address matches employee address", "Invoice for unusually round amounts"],
    prevention: ["Vendor verification process before setup", "Regular vendor master file audits", "Segregate vendor setup from payment approval"],
  },
  {
    type: "Invoice Fraud (External)",
    description: "External fraudsters send fake invoices mimicking real vendors, or intercept legitimate invoice emails and change bank details.",
    redFlags: ["Payment details change request via email", "Duplicate invoice numbers", "Invoice domain slightly different from real vendor"],
    prevention: ["Call vendor to verify bank detail changes (never reply to the email)", "Verify all new bank details via known phone numbers", "Enable dual approval for payment detail changes"],
  },
  {
    type: "Employee AP Fraud",
    description: "Internal staff create fictitious vendors, split invoices to stay under approval thresholds, or approve payments to controlled accounts.",
    redFlags: ["Invoices just below approval thresholds (invoice splitting)", "Payments to vendors with no other business footprint", "Same employee consistently approving own submitted expenses"],
    prevention: ["Segregation of duties (approver ≠ payer ≠ record-keeper)", "Regular AP audits by someone outside the AP team", "Automated duplicate detection"],
  },
  {
    type: "Check Fraud",
    description: "Physical checks intercepted, altered, or duplicated. Still the highest-fraud payment method despite being older.",
    redFlags: ["Checks clearing to unfamiliar payees", "Duplicate check numbers", "Checks cashing to different account than payee"],
    prevention: ["Switch from checks to ACH/virtual cards", "Positive Pay with your bank", "Regular check register reconciliation"],
  },
]

const automationAreas = [
  {
    area: "Invoice Capture & Data Extraction",
    tool: "OCR + AI (Vic.ai, Stampli, SAP Concur)",
    timeSaving: "80% reduction in data entry time",
    detail: "AI reads invoice PDFs and emails, extracts vendor, amount, date, line items, and PO reference automatically.",
  },
  {
    area: "Three-Way Matching",
    tool: "Built into AP software + ERP",
    timeSaving: "From hours to seconds",
    detail: "Software automatically matches invoice to PO and GR. Only exceptions need human review.",
  },
  {
    area: "Approval Routing",
    tool: "Workflow tools (Bill.com, Stampli, SAP)",
    timeSaving: "Eliminates email chains and manual routing",
    detail: "Rule-based routing sends invoices to the right approver automatically based on amount, vendor, or department.",
  },
  {
    area: "Duplicate Detection",
    tool: "Built into all major AP platforms",
    timeSaving: "Prevents duplicate payment losses (average: $50K–$500K/year for mid-market)",
    detail: "AI flags invoices with matching vendor + amount + date combinations before payment.",
  },
  {
    area: "Payment Scheduling",
    tool: "AP automation + banking integration",
    timeSaving: "Eliminate manual payment calendars",
    detail: "System automatically schedules payments to maximize DPO without triggering late fees.",
  },
  {
    area: "Vendor Communication",
    tool: "Vendor portals (Ariba, Coupa, Bill.com)",
    timeSaving: "60% reduction in AP team's vendor inquiry handling",
    detail: "Vendors check invoice status, submit invoices, and update banking details via self-service portal.",
  },
]

const keyMetrics = [
  { metric: "Days Payable Outstanding (DPO)", formula: "(Accounts Payable / COGS) × Days", target: "45–60 days", note: "Higher = better use of cash float" },
  { metric: "Cost Per Invoice Processed", formula: "Total AP Costs / Invoices Processed", target: "< $5 per invoice", note: "Industry avg: $8–$12; automated: $2–$4" },
  { metric: "Invoice Processing Time", formula: "Days from receipt to payment approval", target: "< 3 business days", note: "Manual avg: 10–14 days" },
  { metric: "Error Rate", formula: "Invoices with errors / Total invoices", target: "< 1%", note: "Manual processes: 3–5% error rate" },
  { metric: "Early Payment Discount Capture", formula: "Discounts captured / Discounts available", target: "> 80%", note: "2/10 Net 30 = 36% annualized ROI" },
  { metric: "Duplicate Payment Rate", formula: "Duplicate payments / Total payments", target: "< 0.1%", note: "Industry studies: 0.1–0.5% of invoices are duplicates" },
]

const commonMistakes = [
  { mistake: "Paying invoices early", impact: "Losing cash float unnecessarily. Even 10 days early on $1M/month in payables is significant." },
  { mistake: "No vendor master cleanup", impact: "Duplicate vendors, outdated banking info, and compliance risk. Audit at least annually." },
  { mistake: "Approving invoices without POs", impact: "Opens door to unauthorized spending and makes three-way matching impossible." },
  { mistake: "Single person controlling AP end-to-end", impact: "The #1 setup for internal fraud. Requires detection controls when segregation isn't possible." },
  { mistake: "Not capturing early payment discounts", impact: "2/10 Net 30 discounts represent ~36% annualized return. Many businesses miss them due to slow approval processes." },
  { mistake: "Ignoring vendor statement reconciliation", impact: "Missed credits, duplicate invoices, and pricing errors accumulate undetected." },
]

const faqItems = [
  {
    question: "What is accounts payable best practice for invoice approval?",
    answer:
      "Best practice is a documented approval matrix based on dollar thresholds and vendor type, with automated routing and dual approval for payments above $10,000 (or a threshold appropriate for your business). Approvers should not be the same person who set up the vendor or will make the payment.",
  },
  {
    question: "How common is AP fraud?",
    answer:
      "According to the ACFE, billing schemes (including AP fraud) account for 27% of all occupational fraud cases, with a median loss of $100,000. Businesses without dedicated AP controls lose significantly more on average. AP fraud is one of the most common and preventable forms of financial crime.",
  },
  {
    question: "What is three-way matching in accounts payable?",
    answer:
      "Three-way matching compares three documents: (1) the Purchase Order (what you agreed to buy), (2) the Goods Receipt (what you actually received), and (3) the Vendor Invoice (what you're being asked to pay). All three must match within tolerance before an invoice is approved for payment.",
  },
  {
    question: "Should I outsource accounts payable?",
    answer:
      "Outsourcing AP makes sense when: you process more than 100 invoices/month, you lack segregation of duties with a small team, you're dealing with AP errors or fraud risk, or your team is spending more than 20% of time on AP tasks. Outsourced AP combined with automation can reduce costs by 50–70%.",
  },
  {
    question: "What's the best software for AP automation?",
    answer:
      "Top options include Bill.com (best for SMBs), Stampli (best UX with AI), Vic.ai (highest automation rate), and SAP Concur or Coupa for enterprise. The best choice depends on your invoice volume, ERP/accounting software, and team size.",
  },
]

export default function AccountsPayableBestPracticesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-orange-950 via-red-950 to-slate-900 text-white pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-orange-500/20 border border-orange-400/30 text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
                Operations Guide
              </span>
              <span className="bg-red-500/20 border border-red-400/30 text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                Fraud Prevention
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Accounts Payable Best Practices:{" "}
              <span className="text-orange-400">Automation & Fraud Prevention</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              AP fraud costs businesses an average of $100,000 per incident — and most are preventable. Learn
              the best practices for AP process management, automation, vendor controls, and fraud prevention
              that protect your business and optimize cash flow.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> March 15, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 14 min read
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" /> MZBPO Editorial Team
              </span>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-red-700 text-white py-8 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "$100K", label: "Median loss per AP fraud incident (ACFE)" },
              { stat: "27%", label: "Of all occupational fraud is billing/AP fraud" },
              { stat: "80%", label: "Of AP fraud prevented by basic segregation of duties" },
              { stat: "70%", label: "Cost reduction possible with AP automation" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-2xl font-black mb-1">{s.stat}</p>
                <p className="text-red-200 text-xs">{s.label}</p>
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
                      className="block text-sm text-slate-600 hover:text-orange-600 transition-colors py-1 border-l-2 border-transparent hover:border-orange-500 pl-3"
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
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Why AP Management Is More Than Paying Bills</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Accounts payable is the gateway through which money leaves your business. Every payment you make
                  passes through your AP process — which means every weakness in that process is a vulnerability to
                  fraud, error, and cash flow inefficiency.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Yet AP is often treated as a back-office clerical function. The businesses that take AP seriously
                  outperform peers in cost control, cash flow, and fraud resilience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { icon: <Shield className="w-6 h-6 text-red-600" />, title: "Fraud Prevention", desc: "Strong AP controls reduce fraud risk by up to 80%" },
                    { icon: <DollarSign className="w-6 h-6 text-emerald-600" />, title: "Cash Flow Optimization", desc: "Strategic payment timing improves DPO and cash position" },
                    { icon: <Zap className="w-6 h-6 text-orange-600" />, title: "Operational Efficiency", desc: "Automation cuts cost-per-invoice by 60–70%" },
                  ].map((card, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-center">
                      <div className="flex justify-center mb-3">{card.icon}</div>
                      <h3 className="font-bold text-slate-900 mb-2 text-sm">{card.title}</h3>
                      <p className="text-slate-600 text-xs">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AP Process */}
              <div id="ap-process" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">The AP Process End-to-End</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  A well-documented AP process is the foundation of everything else. If your AP process isn&apos;t
                  written down and followed consistently, controls and automation won&apos;t be effective.
                </p>
                <div className="space-y-3">
                  {apProcessSteps.map((step) => (
                    <div key={step.step} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-900 mb-1">{step.name}</h3>
                          <p className="text-slate-600 text-sm mb-2">{step.detail}</p>
                          <p className="text-red-600 text-xs bg-red-50 rounded px-2 py-1 inline-block">
                            ⚠ Risk: {step.risk}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Three-Way Match */}
              <div id="three-way-match" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Three-Way Matching: Your #1 AP Control</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Three-way matching is the single most effective accounts payable control. It compares three
                  documents that must agree before payment is authorized:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {[
                    { doc: "Purchase Order", icon: "📋", desc: "What you agreed to buy — quantity, price, terms", color: "blue" },
                    { doc: "Goods Receipt", icon: "📦", desc: "What you actually received — verified by receiving department", color: "emerald" },
                    { doc: "Vendor Invoice", icon: "🧾", desc: "What the vendor is charging — must match PO and GR", color: "orange" },
                  ].map((d, i) => (
                    <div key={i} className={`bg-${d.color}-50 border border-${d.color}-200 rounded-xl p-5 text-center`}>
                      <div className="text-3xl mb-3">{d.icon}</div>
                      <h3 className={`font-bold text-${d.color}-800 mb-2`}>{d.doc}</h3>
                      <p className={`text-${d.color}-700 text-sm`}>{d.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h3 className="font-bold text-amber-900 mb-2">What to do when documents don&apos;t match:</h3>
                  <ul className="space-y-2">
                    {[
                      "Price discrepancy: Hold invoice, contact vendor to issue credit note or corrected invoice",
                      "Quantity discrepancy: Hold invoice, investigate with receiving team, request partial credit",
                      "PO not found: Do not pay. Investigate source of invoice before any action",
                      "Vendor not in system: Do not pay. Run vendor verification before setup",
                    ].map((item, i) => (
                      <li key={i} className="text-amber-800 text-sm flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Fraud Prevention */}
              <div id="fraud-prevention" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">AP Fraud: Types & Prevention</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  AP fraud is the most common and costly form of business financial crime. Understanding the most
                  common schemes is the first step to preventing them.
                </p>
                <div className="space-y-6">
                  {fraudTypes.map((fraud, i) => (
                    <div key={i} className="border border-red-200 rounded-2xl overflow-hidden">
                      <div className="bg-red-700 text-white p-4">
                        <h3 className="font-bold">{fraud.type}</h3>
                        <p className="text-red-200 text-sm mt-1">{fraud.description}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 bg-red-50">
                        <div>
                          <p className="font-semibold text-red-900 text-sm mb-2">🚩 Red Flags:</p>
                          <ul className="space-y-1">
                            {fraud.redFlags.map((flag, j) => (
                              <li key={j} className="text-red-700 text-xs flex items-start gap-2">
                                <span className="mt-0.5">•</span> {flag}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-emerald-900 text-sm mb-2">✓ Prevention:</p>
                          <ul className="space-y-1">
                            {fraud.prevention.map((prev, j) => (
                              <li key={j} className="text-emerald-700 text-xs flex items-start gap-2">
                                <CheckCircle2 className="w-3 h-3 mt-0.5 shrink-0" /> {prev}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Automation */}
              <div id="automation" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">AP Automation: What to Automate</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  AP automation doesn&apos;t just save time — it reduces fraud risk, eliminates errors, and frees
                  your team for higher-value work. Here are the highest-ROI areas to automate:
                </p>
                <div className="space-y-4">
                  {automationAreas.map((area, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-bold text-slate-900">{area.area}</h3>
                          <p className="text-orange-600 text-xs font-medium mt-1">Tool: {area.tool}</p>
                        </div>
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold">
                          {area.timeSaving}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm">{area.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vendor Management */}
              <div id="vendor-management" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Vendor Management Best Practices</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Vendor Onboarding",
                      practices: [
                        "Require W-9 (US) or equivalent tax documentation",
                        "Verify business registration and banking details independently",
                        "Separate vendor setup from invoice approval roles",
                        "Set up in accounting system only after full verification",
                        "Document who approved each vendor and when",
                      ],
                    },
                    {
                      title: "Vendor Master Maintenance",
                      practices: [
                        "Audit vendor master list at least annually",
                        "Deactivate vendors with no activity for 12+ months",
                        "Verify bank detail change requests via known phone number — never email",
                        "Check for duplicate vendors (same ABN/EIN with different names)",
                        "Review all employee-owned vendor registrations",
                      ],
                    },
                    {
                      title: "Vendor Performance",
                      practices: [
                        "Reconcile vendor statements quarterly",
                        "Track and dispute pricing errors immediately",
                        "Monitor invoice cycle time by vendor",
                        "Flag vendors with unusually high error or dispute rates",
                        "Build preferred vendor lists for key categories",
                      ],
                    },
                    {
                      title: "Strategic Vendor Relations",
                      practices: [
                        "Negotiate payment terms upfront — ask for Net 45 or Net 60",
                        "Ask for early payment discount terms (2/10 Net 30)",
                        "Consolidate vendors where possible for better terms",
                        "Review contract pricing annually",
                        "Maintain backup vendors for critical suppliers",
                      ],
                    },
                  ].map((section, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <h3 className="font-bold text-slate-900 mb-4">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.practices.map((p, j) => (
                          <li key={j} className="text-slate-600 text-sm flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Optimization */}
              <div id="payment-optimization" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Payment Optimization</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  When you pay is as important as what you pay. Strategic payment timing directly impacts your cash
                  flow and working capital position.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Pay on the due date, not early",
                      detail: "Unless you're capturing an early payment discount, paying before the due date depletes your cash unnecessarily. For a business paying $500K/month, paying 10 days early is equivalent to giving your vendors a free $165K loan.",
                      impact: "High",
                    },
                    {
                      title: "Capture every early payment discount",
                      detail: "A 2/10 Net 30 discount (2% discount for paying within 10 days) represents a 36% annualized return. This is one of the highest-return investments available to any business. Automate your approval process to enable capture.",
                      impact: "Very High",
                    },
                    {
                      title: "Move from checks to ACH or virtual cards",
                      detail: "Checks are the highest-fraud, lowest-rebate payment method. Virtual cards earn 1–2% rebates and have built-in controls. ACH is faster, trackable, and eliminates check fraud risk entirely.",
                      impact: "High",
                    },
                    {
                      title: "Batch payments strategically",
                      detail: "Run payment batches on specific days (e.g., Tuesdays and Thursdays) to maintain control and visibility. Ad-hoc payments outside the batch cycle should require additional approval.",
                      impact: "Medium",
                    },
                    {
                      title: "Require dual authorization above thresholds",
                      detail: "Any payment above a threshold (commonly $5,000–$25,000 depending on business size) should require two authorized signatories. This is the most effective single fraud control.",
                      impact: "Very High",
                    },
                  ].map((s, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                      <div className="flex justify-between items-start gap-3 mb-2">
                        <h3 className="font-bold text-slate-900">{s.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full font-semibold shrink-0 ${
                          s.impact === "Very High" ? "bg-red-100 text-red-700" :
                          s.impact === "High" ? "bg-orange-100 text-orange-700" :
                          "bg-yellow-100 text-yellow-700"
                        }`}>
                          {s.impact} Impact
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm">{s.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Metrics */}
              <div id="key-metrics" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">AP Metrics That Matter</h2>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-orange-900 text-white">
                        <th className="text-left p-4 font-semibold">Metric</th>
                        <th className="text-left p-4 font-semibold">How to Calculate</th>
                        <th className="text-left p-4 font-semibold">Target</th>
                        <th className="text-left p-4 font-semibold">Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {keyMetrics.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="p-4 font-medium text-slate-800">{row.metric}</td>
                          <td className="p-4 text-slate-500 font-mono text-xs">{row.formula}</td>
                          <td className="p-4">
                            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-semibold">
                              {row.target}
                            </span>
                          </td>
                          <td className="p-4 text-slate-600 text-xs">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Common Mistakes */}
              <div id="common-mistakes" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Costly AP Mistakes to Avoid</h2>
                <div className="space-y-4">
                  {commonMistakes.map((item, i) => (
                    <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h3 className="font-bold text-red-800 mb-1 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" /> {item.mistake}
                      </h3>
                      <p className="text-red-700 text-sm">{item.impact}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outsourcing */}
              <div id="outsourcing" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">When to Outsource AP</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  For many growing businesses, outsourcing AP management — combined with automation tools — is the
                  most cost-effective path to strong AP controls and performance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {[
                    "Your team is too small for proper segregation of duties",
                    "You process more than 100 invoices per month",
                    "AP errors, duplicate payments, or fraud have occurred",
                    "Your cost per invoice is above $8–$10",
                    "Month-end close is delayed by AP reconciliation",
                    "Your AP team spends more time on vendor calls than approvals",
                  ].map((sign, i) => (
                    <div key={i} className="flex items-start gap-3 bg-orange-50 border border-orange-200 rounded-xl p-4">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
                      <p className="text-orange-800 text-sm">{sign}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-orange-900 text-white rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-3">MZBPO Accounts Payable Services</h3>
                  <p className="text-orange-100 mb-4">
                    Our outsourced AP team handles end-to-end accounts payable: invoice capture and coding,
                    three-way matching, approval routing, payment scheduling, vendor management, and monthly
                    reconciliation — using AI-powered tools that reduce your cost per invoice by up to 70%.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-orange-700 font-semibold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors"
                  >
                    Get an AP Assessment <ArrowRight className="w-4 h-4" />
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

              {/* Related Posts */}
              <div className="border-t border-slate-200 pt-10">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Cash Flow Management Guide for Growing Businesses",
                      href: "/blog/cash-flow-management-guide",
                      tag: "Finance",
                    },
                    {
                      title: "AI in Accounting: How Automation is Changing Outsourced Services",
                      href: "/blog/ai-in-accounting",
                      tag: "Technology",
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
                      className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-orange-300 hover:bg-orange-50 transition-all"
                    >
                      <span className="text-xs text-orange-600 font-semibold uppercase tracking-wide">{post.tag}</span>
                      <p className="font-semibold text-slate-900 mt-1 group-hover:text-orange-700 transition-colors text-sm">
                        {post.title}
                      </p>
                      <ChevronRight className="w-4 h-4 text-orange-500 mt-2" />
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
