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
  Zap,
  BarChart3,
  TrendingUp,
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
  { id: "ap-process", title: "The AP Process End-to-End" },
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
  { step: 1, name: "Purchase Requisition", detail: "Department requests a purchase. All purchases start with a documented requisition — preventing unauthorized spending.", risk: "Bypassing this step is how unauthorized purchases happen" },
  { step: 2, name: "Purchase Order (PO) Creation", detail: "Finance or procurement issues a formal PO. The PO number becomes the reference point for the entire transaction.", risk: "No PO = no baseline for later matching" },
  { step: 3, name: "Goods/Services Receipt", detail: "The receiving department confirms delivery and quantity against the PO. This creates the Goods Receipt (GR) document.", risk: "Skipping this step is how overpayments and phantom deliveries occur" },
  { step: 4, name: "Invoice Receipt & Capture", detail: "Vendor invoice is received and captured into the AP system. AI-powered OCR can automate data extraction here.", risk: "Manual data entry creates errors and delays" },
  { step: 5, name: "Three-Way Matching", detail: "Invoice is matched against the PO and GR to verify quantities, prices, and terms. Discrepancies trigger a hold.", risk: "Failure to match is the #1 cause of AP fraud losses" },
  { step: 6, name: "Approval Routing", detail: "Approved invoices route to appropriate stakeholders based on amount, department, or vendor type.", risk: "Manual routing causes delays and approval bottlenecks" },
  { step: 7, name: "Payment Scheduling", detail: "Approved invoices are scheduled for payment on or just before due date to maximize DPO without incurring late fees.", risk: "Paying early loses float; paying late incurs penalties" },
  { step: 8, name: "Payment Execution", detail: "Payment is made via ACH, wire, check, or virtual card. Dual authorization controls apply above a threshold.", risk: "Single-person payment control is a major fraud vulnerability" },
  { step: 9, name: "Reconciliation", detail: "All payments are reconciled against bank statements and the general ledger. Vendor statements reconciled quarterly.", risk: "Failure to reconcile allows errors and fraud to hide indefinitely" },
]

const fraudTypes = [
  {
    type: "Vendor Fraud",
    description: "Fraudulent vendors set up in the system with invoices submitted for goods/services never delivered.",
    redFlags: ["New vendor with no verifiable business presence", "Vendor address matches employee address", "Invoices for unusually round amounts"],
    prevention: ["Vendor verification process before setup", "Regular vendor master file audits", "Segregate vendor setup from payment approval"],
  },
  {
    type: "Invoice Fraud (External)",
    description: "External fraudsters send fake invoices mimicking real vendors, or intercept invoice emails and change bank details.",
    redFlags: ["Payment details change request via email", "Duplicate invoice numbers", "Invoice domain slightly different from real vendor"],
    prevention: ["Call vendor to verify bank detail changes (never reply to the email)", "Verify all new bank details via known phone numbers", "Enable dual approval for payment detail changes"],
  },
  {
    type: "Employee AP Fraud",
    description: "Internal staff create fictitious vendors, split invoices to stay under approval thresholds, or approve payments to controlled accounts.",
    redFlags: ["Invoices just below approval thresholds (invoice splitting)", "Payments to vendors with no business footprint", "Same employee consistently approving own expenses"],
    prevention: ["Segregation of duties (approver ≠ payer ≠ record-keeper)", "Regular AP audits by someone outside the AP team", "Automated duplicate detection"],
  },
  {
    type: "Check Fraud",
    description: "Physical checks intercepted, altered, or duplicated. Still the highest-fraud payment method.",
    redFlags: ["Checks clearing to unfamiliar payees", "Duplicate check numbers", "Checks cashing to different account than payee"],
    prevention: ["Switch from checks to ACH/virtual cards", "Positive Pay with your bank", "Regular check register reconciliation"],
  },
]

const automationAreas = [
  { area: "Invoice Capture & Data Extraction", tool: "OCR + AI (Vic.ai, Stampli, SAP Concur)", timeSaving: "80% reduction in data entry time", detail: "AI reads invoice PDFs and emails, extracts vendor, amount, date, line items, and PO reference automatically." },
  { area: "Three-Way Matching", tool: "Built into AP software + ERP", timeSaving: "From hours to seconds", detail: "Software automatically matches invoice to PO and GR. Only exceptions need human review." },
  { area: "Approval Routing", tool: "Workflow tools (Bill.com, Stampli, SAP)", timeSaving: "Eliminates email chains and manual routing", detail: "Rule-based routing sends invoices to the right approver automatically based on amount, vendor, or department." },
  { area: "Duplicate Detection", tool: "Built into all major AP platforms", timeSaving: "Prevents duplicate payment losses ($50K–$500K/year for mid-market)", detail: "AI flags invoices with matching vendor + amount + date combinations before payment." },
  { area: "Payment Scheduling", tool: "AP automation + banking integration", timeSaving: "Eliminate manual payment calendars", detail: "System automatically schedules payments to maximize DPO without triggering late fees." },
  { area: "Vendor Communication", tool: "Vendor portals (Ariba, Coupa, Bill.com)", timeSaving: "60% reduction in vendor inquiry handling", detail: "Vendors check invoice status, submit invoices, and update banking details via self-service portal." },
]

const keyMetrics = [
  { metric: "Days Payable Outstanding (DPO)", formula: "(Accounts Payable / COGS) × Days", target: "45–60 days", note: "Higher = better use of cash float" },
  { metric: "Cost Per Invoice Processed", formula: "Total AP Costs / Invoices Processed", target: "< $5 per invoice", note: "Industry avg: $8–$12; automated: $2–$4" },
  { metric: "Invoice Processing Time", formula: "Days from receipt to payment approval", target: "< 3 business days", note: "Manual avg: 10–14 days" },
  { metric: "Error Rate", formula: "Invoices with errors / Total invoices", target: "< 1%", note: "Manual processes: 3–5% error rate" },
  { metric: "Early Payment Discount Capture", formula: "Discounts captured / Discounts available", target: "> 80%", note: "2/10 Net 30 = 36% annualized ROI" },
  { metric: "Duplicate Payment Rate", formula: "Duplicate payments / Total payments", target: "< 0.1%", note: "0.1–0.5% of invoices are duplicates industry-wide" },
]

const commonMistakes = [
  { mistake: "Paying invoices early", impact: "Losing cash float unnecessarily. Even 10 days early on $1M/month in payables is significant." },
  { mistake: "No vendor master cleanup", impact: "Duplicate vendors, outdated banking info, and compliance risk. Audit at least annually." },
  { mistake: "Approving invoices without POs", impact: "Opens door to unauthorized spending and makes three-way matching impossible." },
  { mistake: "Single person controlling AP end-to-end", impact: "The #1 setup for internal fraud. Requires detection controls when segregation isn't possible." },
  { mistake: "Not capturing early payment discounts", impact: "2/10 Net 30 discounts represent ~36% annualized return. Many businesses miss them due to slow approvals." },
  { mistake: "Ignoring vendor statement reconciliation", impact: "Missed credits, duplicate invoices, and pricing errors accumulate undetected." },
]

const faqItems = [
  { question: "What is accounts payable best practice for invoice approval?", answer: "Best practice is a documented approval matrix based on dollar thresholds and vendor type, with automated routing and dual approval for payments above $10,000. Approvers should not be the same person who set up the vendor or will make the payment." },
  { question: "How common is AP fraud?", answer: "According to the ACFE, billing schemes account for 27% of all occupational fraud cases, with a median loss of $100,000. AP fraud is one of the most common and preventable forms of financial crime." },
  { question: "What is three-way matching in accounts payable?", answer: "Three-way matching compares: (1) the Purchase Order (what you agreed to buy), (2) the Goods Receipt (what you actually received), and (3) the Vendor Invoice (what you're being asked to pay). All three must match within tolerance before an invoice is approved." },
  { question: "Should I outsource accounts payable?", answer: "Outsourcing AP makes sense when: you process more than 100 invoices/month, you lack segregation of duties, you've experienced AP errors or fraud, or your team spends more than 20% of time on AP tasks. Outsourced AP combined with automation can reduce costs by 50–70%." },
  { question: "What's the best software for AP automation?", answer: "Top options include Bill.com (best for SMBs), Stampli (best UX with AI), Vic.ai (highest automation rate), and SAP Concur or Coupa for enterprise. The best choice depends on your invoice volume, accounting software, and team size." },
]

const relatedPosts = [
  {
    title: "Cash Flow Management Guide for Growing Businesses",
    href: "/blog/cash-flow-management-guide",
    description: "Master cash flow forecasting, gap analysis, and working capital optimization.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
  },
  {
    title: "Xero vs QuickBooks vs Sage: Which Software in 2026?",
    href: "/blog/xero-vs-quickbooks-vs-sage",
    description: "Side-by-side comparison of the three most popular accounting platforms.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
  },
  {
    title: "Internal Controls for Small Business",
    href: "/blog/internal-controls-small-business",
    description: "Essential controls every growing business needs to prevent fraud.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
  },
]

export default function AccountsPayableBestPracticesPage() {
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
                <span className="text-white/80">Accounts Payable Best Practices</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Operations Guide</span>
              </div>
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Accounts Payable Best Practices:{" "}
                <span className="text-brand-teal">Automation & Fraud Prevention</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                AP fraud costs businesses an average of $100,000 per incident — and most are preventable. Learn
                best practices for AP automation, three-way matching, vendor controls, and fraud prevention that
                protect your business and optimize cash flow.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>MZBPO Team</span></div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>March 15, 2026</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative -mt-8 mb-12 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=820&fit=crop"
                  alt="Accounts payable best practices guide"
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
                      Outsourced AP Services
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      End-to-end AP management with AI-powered automation, fraud controls, and monthly reconciliation.
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
                      Accounts payable is the gateway through which money leaves your business. Every payment
                      passes through your AP process — which means every weakness in that process is a vulnerability
                      to fraud, error, and cash flow inefficiency.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Yet AP is often treated as a back-office clerical function. The businesses that take AP
                      seriously outperform peers in cost control, cash flow, and fraud resilience.
                    </p>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-6 text-center">AP by the Numbers</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                          { stat: "$100K", label: "Median loss per AP fraud incident (ACFE)" },
                          { stat: "27%", label: "Of all occupational fraud is billing/AP fraud" },
                          { stat: "80%", label: "Of AP fraud prevented by basic segregation of duties" },
                          { stat: "70%", label: "Cost reduction possible with AP automation" },
                        ].map((s, i) => (
                          <div key={i}>
                            <div className="text-2xl font-bold text-white font-[family-name:var(--font-syne)]">{s.stat}</div>
                            <div className="text-white/70 text-xs mt-1">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* AP Process */}
                  <section id="ap-process" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      The AP Process End-to-End
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      A well-documented AP process is the foundation of everything else. If your AP process isn&apos;t
                      written down and followed consistently, controls and automation won&apos;t be effective.
                    </p>
                    <div className="space-y-3">
                      {apProcessSteps.map((step) => (
                        <div key={step.step} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="flex gap-4">
                            <div className="w-8 h-8 bg-brand-teal text-brand-navy rounded-full flex items-center justify-center font-bold text-sm shrink-0">{step.step}</div>
                            <div className="flex-1">
                              <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-1">{step.name}</h3>
                              <p className="text-gray-600 text-sm mb-2">{step.detail}</p>
                              <p className="text-red-600 text-xs bg-red-50 rounded px-2 py-1 inline-block">⚠ Risk: {step.risk}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Three-Way Match */}
                  <section id="three-way-match" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Three-Way Matching: Your #1 AP Control
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Three-way matching is the single most effective accounts payable control. It compares three
                      documents that must agree before payment is authorized:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {[
                        { doc: "Purchase Order", icon: "📋", desc: "What you agreed to buy — quantity, price, terms" },
                        { doc: "Goods Receipt", icon: "📦", desc: "What you actually received — verified by receiving department" },
                        { doc: "Vendor Invoice", icon: "🧾", desc: "What the vendor is charging — must match PO and GR" },
                      ].map((d, i) => (
                        <div key={i} className="bg-brand-teal/5 border border-brand-teal/20 rounded-xl p-5 text-center">
                          <div className="text-3xl mb-3">{d.icon}</div>
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">{d.doc}</h3>
                          <p className="text-gray-600 text-sm">{d.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">When documents don&apos;t match:</p>
                      <ul className="space-y-2">
                        {["Price discrepancy: Hold invoice, contact vendor to issue credit note or corrected invoice", "Quantity discrepancy: Hold invoice, investigate with receiving team, request partial credit", "PO not found: Do not pay. Investigate source of invoice before any action", "Vendor not in system: Do not pay. Run vendor verification before setup"].map((item, i) => (
                          <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  {/* Fraud Prevention */}
                  <section id="fraud-prevention" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      AP Fraud: Types & Prevention
                    </h2>
                    <div className="space-y-6">
                      {fraudTypes.map((fraud, i) => (
                        <div key={i} className="border border-red-100 rounded-2xl overflow-hidden">
                          <div className="bg-red-700 text-white p-4">
                            <h3 className="font-[family-name:var(--font-syne)] font-bold">{fraud.type}</h3>
                            <p className="text-red-200 text-sm mt-1">{fraud.description}</p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 bg-red-50">
                            <div>
                              <p className="font-semibold text-brand-navy text-sm mb-2">🚩 Red Flags:</p>
                              <ul className="space-y-1">
                                {fraud.redFlags.map((flag, j) => (
                                  <li key={j} className="text-gray-700 text-xs flex items-start gap-2"><span className="mt-0.5">•</span> {flag}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="font-semibold text-brand-navy text-sm mb-2">✓ Prevention:</p>
                              <ul className="space-y-1">
                                {fraud.prevention.map((prev, j) => (
                                  <li key={j} className="text-gray-700 text-xs flex items-start gap-2"><CheckCircle2 className="w-3 h-3 text-brand-teal mt-0.5 shrink-0" /> {prev}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Automation */}
                  <section id="automation" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      AP Automation: What to Automate
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      AP automation doesn&apos;t just save time — it reduces fraud risk, eliminates errors, and
                      frees your team for higher-value work.
                    </p>
                    <div className="space-y-4">
                      {automationAreas.map((area, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                            <div>
                              <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">{area.area}</h3>
                              <p className="text-brand-teal text-xs font-medium mt-1">Tool: {area.tool}</p>
                            </div>
                            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">{area.timeSaving}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{area.detail}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Vendor Management */}
                  <section id="vendor-management" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Vendor Management Best Practices
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { title: "Vendor Onboarding", practices: ["Require W-9 (US) or equivalent tax documentation", "Verify business registration and banking details independently", "Separate vendor setup from invoice approval roles", "Set up in accounting system only after full verification", "Document who approved each vendor and when"] },
                        { title: "Vendor Master Maintenance", practices: ["Audit vendor master list at least annually", "Deactivate vendors with no activity for 12+ months", "Verify bank detail change requests via known phone number — never email", "Check for duplicate vendors (same ABN/EIN with different names)", "Review all employee-owned vendor registrations"] },
                        { title: "Vendor Performance", practices: ["Reconcile vendor statements quarterly", "Track and dispute pricing errors immediately", "Monitor invoice cycle time by vendor", "Flag vendors with unusually high error or dispute rates", "Build preferred vendor lists for key categories"] },
                        { title: "Strategic Vendor Relations", practices: ["Negotiate payment terms upfront — ask for Net 45 or Net 60", "Ask for early payment discount terms (2/10 Net 30)", "Consolidate vendors where possible for better terms", "Review contract pricing annually", "Maintain backup vendors for critical suppliers"] },
                      ].map((section, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">{section.title}</h3>
                          <ul className="space-y-2">
                            {section.practices.map((p, j) => (
                              <li key={j} className="text-gray-600 text-sm flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" /> {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Payment Optimization */}
                  <section id="payment-optimization" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Payment Optimization
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      When you pay is as important as what you pay. Strategic payment timing directly impacts your
                      cash flow and working capital position.
                    </p>
                    <div className="space-y-4">
                      {[
                        { title: "Pay on the due date, not early", detail: "Unless you're capturing an early payment discount, paying before the due date depletes your cash unnecessarily.", impact: "High" },
                        { title: "Capture every early payment discount", detail: "A 2/10 Net 30 discount represents a 36% annualized return. Automate your approval process to enable capture.", impact: "Very High" },
                        { title: "Move from checks to ACH or virtual cards", detail: "Checks are the highest-fraud, lowest-rebate payment method. Virtual cards earn 1–2% rebates and have built-in controls.", impact: "High" },
                        { title: "Batch payments strategically", detail: "Run payment batches on specific days (e.g., Tuesdays and Thursdays) to maintain control and visibility.", impact: "Medium" },
                        { title: "Require dual authorization above thresholds", detail: "Any payment above a threshold (commonly $5,000–$25,000) should require two authorized signatories.", impact: "Very High" },
                      ].map((s, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="flex justify-between items-start gap-3 mb-2">
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">{s.title}</h3>
                            <span className={`text-xs px-2 py-1 rounded-full font-semibold shrink-0 ${s.impact === "Very High" ? "bg-red-100 text-red-700" : s.impact === "High" ? "bg-orange-100 text-orange-700" : "bg-yellow-100 text-yellow-700"}`}>{s.impact} Impact</span>
                          </div>
                          <p className="text-gray-600 text-sm">{s.detail}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Key Metrics */}
                  <section id="key-metrics" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      AP Metrics That Matter
                    </h2>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="text-left p-4 font-semibold">Metric</th>
                            <th className="text-left p-4 font-semibold">How to Calculate</th>
                            <th className="text-left p-4 font-semibold">Target</th>
                            <th className="text-left p-4 font-semibold">Note</th>
                          </tr>
                        </thead>
                        <tbody>
                          {keyMetrics.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="p-4 font-medium text-brand-navy">{row.metric}</td>
                              <td className="p-4 text-gray-500 font-mono text-xs">{row.formula}</td>
                              <td className="p-4"><span className="bg-brand-teal/10 text-brand-teal px-2 py-1 rounded-full text-xs font-semibold">{row.target}</span></td>
                              <td className="p-4 text-gray-600 text-xs">{row.note}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Common Mistakes */}
                  <section id="common-mistakes" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Costly AP Mistakes to Avoid
                    </h2>
                    <div className="space-y-4">
                      {commonMistakes.map((item, i) => (
                        <div key={i} className="bg-red-50 border border-red-100 rounded-xl p-5">
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-1 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-red-500" /> {item.mistake}
                          </h3>
                          <p className="text-gray-600 text-sm">{item.impact}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Outsourcing */}
                  <section id="outsourcing" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      When to Outsource AP
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      For many growing businesses, outsourcing AP management — combined with automation tools — is
                      the most cost-effective path to strong AP controls and performance.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {["Your team is too small for proper segregation of duties", "You process more than 100 invoices per month", "AP errors, duplicate payments, or fraud have occurred", "Your cost per invoice is above $8–$10", "Month-end close is delayed by AP reconciliation", "Your AP team spends more time on vendor calls than approvals"].map((sign, i) => (
                        <div key={i} className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl p-4">
                          <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                          <p className="text-gray-700 text-sm">{sign}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-3">MZBPO Accounts Payable Services</h3>
                      <p className="text-white/70 font-[var(--font-poppins)] mb-4">
                        Our outsourced AP team handles end-to-end accounts payable: invoice capture and coding,
                        three-way matching, approval routing, payment scheduling, vendor management, and monthly
                        reconciliation — using AI-powered tools that reduce cost per invoice by up to 70%.
                      </p>
                      <Link href="/meeting" className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all">
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
