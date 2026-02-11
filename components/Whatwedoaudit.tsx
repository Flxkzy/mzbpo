"use client"

import { 
  FileSearch, 
  ShieldCheck, 
  FileText, 
  ClipboardList, 
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Calculator,
  PieChart,
  TrendingUp,
  FileSpreadsheet,
  Users,

} from "lucide-react"

// ============================================
// TYPES
// ============================================

interface Deliverable {
  icon: React.ReactNode
  title: string
  description: string
  includes: string[]
}

interface WhatWeDoProps {
  // Header
  badge?: string
  headline?: React.ReactNode
  subheadline?: string
  
  // Deliverables
  deliverables?: Deliverable[]
  
  // Bottom CTA Box
  ctaHeadline?: string
  ctaDescription?: string
  ctaButtonText?: string
  ctaButtonLink?: string
}

// ============================================
// DEFAULT DATA - INTERNAL AUDIT
// ============================================

const AUDIT_DELIVERABLES: Deliverable[] = [
  {
    icon: <FileSearch className="w-6 h-6" />,
    title: "Transaction Reviews",
    description: "We review your transactions before and after execution to catch discrepancies early.",
    includes: [
      "Payment verification and authorization checks",
      "Expense approval testing",
      "Invoice matching and validation",
      "Reconciliation reviews"
    ]
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Control Testing",
    description: "We do not just document controls. We test them against regulatory requirements.",
    includes: [
      "Control design assessment",
      "Operating effectiveness testing",
      "Gap identification and reporting",
      "Remediation recommendations"
    ]
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Independent Reporting",
    description: "Clear reports on where you stand. What is working. What needs attention.",
    includes: [
      "Executive summary with key findings",
      "Detailed gap analysis",
      "Risk rated recommendations",
      "Progress tracking"
    ]
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Audit Readiness",
    description: "Be prepared for external audits without the year end scramble.",
    includes: [
      "Year round preparation",
      "Documentation review",
      "Pre audit testing",
      "External auditor liaison"
    ]
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Ongoing Oversight",
    description: "Continuous monitoring so gaps do not have time to compound.",
    includes: [
      "Quarterly testing cycles",
      "Continuous monitoring",
      "Real time issue escalation",
      "Regular status updates"
    ]
  },
]

// ============================================
// BOOKKEEPING DELIVERABLES
// ============================================

const BOOKKEEPING_DELIVERABLES: Deliverable[] = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Daily Transaction Recording",
    description: "Every transaction recorded accurately, categorized correctly, and posted on time.",
    includes: [
      "Accounts payable and receivable management",
      "Expense categorization and coding",
      "Revenue recognition and tracking",
      "Journal entries and adjustments"
    ]
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Bank Reconciliations",
    description: "Your bank accounts reconciled regularly so nothing slips through the cracks.",
    includes: [
      "Daily or weekly bank reconciliations",
      "Credit card statement matching",
      "Discrepancy identification and resolution",
      "Cash flow tracking"
    ]
  },
  {
    icon: <FileSpreadsheet className="w-6 h-6" />,
    title: "Monthly Financial Statements",
    description: "Clean, accurate reports delivered on schedule so you can make decisions with confidence.",
    includes: [
      "Profit and loss statement",
      "Balance sheet preparation",
      "Cash flow statement",
      "Custom management reports"
    ]
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Month End Close",
    description: "Complete month end process handled end to end, delivered by the 5th every month.",
    includes: [
      "Accruals and prepayments",
      "Depreciation calculations",
      "Account reconciliations",
      "Final review and adjustments"
    ]
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Financial Analysis",
    description: "Insights beyond the numbers so you understand what is actually happening in your business.",
    includes: [
      "Variance analysis and commentary",
      "Budget vs actual reporting",
      "Key metrics and KPI tracking",
      "Trend identification"
    ]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Dedicated Team Support",
    description: "A team that knows your business, your systems, and your preferences.",
    includes: [
      "Assigned senior accountant",
      "Consistent team members",
      "Direct communication channel",
      "Regular check ins and updates"
    ]
  },
]

// ============================================
// MAIN COMPONENT
// ============================================

export function WhatWeDo({
  // Header defaults (Internal Audit)
  badge = "What's Included",
  headline = (
    <>
      Everything You Need for
      <span className="block text-brand-teal">Independent Internal Audit</span>
    </>
  ),
  subheadline = "We plug into your business as your internal audit function. Here is exactly what you get.",
  
  // Deliverables default
  deliverables = AUDIT_DELIVERABLES,
  
  // Bottom CTA defaults
  ctaHeadline = "Senior Level Expertise Without the Senior Level Salary",
  ctaDescription = "You get a complete internal audit function backed by BKR International standards. All without hiring a full time team or building internal capabilities from scratch.",
  ctaButtonText = "See How It Works for Your Business",
  ctaButtonLink = "/meeting",
}: WhatWeDoProps) {
  return (
    <section className="py-20 md:py-28 px-4 font-[var(--font-poppins)]" style={{ backgroundColor: "hsl(0 0% 96%)" }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-semibold uppercase tracking-wider mb-4">
            {badge}
          </span>
          
          <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
            {headline}
          </h2>
          
          <p className="mt-4 text-base md:text-lg text-brand-navy/60 max-w-2xl mx-auto">
            {subheadline}
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border border-gray-100"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-5 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              
              {/* Title */}
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-2">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-brand-navy/60 mb-5 leading-relaxed">
                {item.description}
              </p>
              
              {/* Includes List */}
              <ul className="space-y-2">
                {item.includes.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-brand-navy/70">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Summary Box */}
        <div className="mt-12 rounded-2xl p-8 md:p-10 text-center" style={{ backgroundColor: "hsl(232 45% 19%)" }}>
          <div className="max-w-3xl mx-auto">
            <h3 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-white mb-4">
              {ctaHeadline}
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              {ctaDescription}
            </p>
            <a
              href={ctaButtonLink}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-teal text-brand-navy font-semibold transition-all duration-300 hover:bg-brand-teal/90"
            >
              {ctaButtonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

// ============================================
// EXPORT PRESET CONFIGS
// ============================================

export const AUDIT_CONFIG = {
  badge: "What's Included",
  headline: (
    <>
      Everything You Need for
      <span className="block text-brand-teal">Independent Internal Audit</span>
    </>
  ),
  subheadline: "We plug into your business as your internal audit function. Here is exactly what you get.",
  deliverables: AUDIT_DELIVERABLES,
  ctaHeadline: "Senior Level Expertise Without the Senior Level Salary",
  ctaDescription: "You get a complete internal audit function backed by BKR International standards. All without hiring a full time team or building internal capabilities from scratch.",
  ctaButtonText: "See How It Works for Your Business",
  ctaButtonLink: "/meeting",
}

export const BOOKKEEPING_CONFIG = {
  badge: "What's Included",
  headline: (
    <>
      Everything You Need for
      <span className="block text-brand-teal">Professional Bookkeeping</span>
    </>
  ),
  subheadline: "We become your dedicated finance back office. Here is exactly what you get.",
  deliverables: BOOKKEEPING_DELIVERABLES,
  ctaHeadline: "A Full Finance Team at a Fraction of the Cost",
  ctaDescription: "You get dedicated bookkeeping professionals backed by a QCR rated audit firm and BKR International standards. Same quality as Big Four, 50% less cost, setup in 48 hours.",
  ctaButtonText: "See What You Would Save",
  ctaButtonLink: "/meeting",
}

// Export deliverables for custom usage
export { AUDIT_DELIVERABLES, BOOKKEEPING_DELIVERABLES }