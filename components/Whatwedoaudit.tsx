"use client"

import { 
  FileSearch, 
  ShieldCheck, 
  FileText, 
  ClipboardList, 
  AlertCircle,
  CheckCircle2,
  ArrowRight
} from "lucide-react"

interface Deliverable {
  icon: React.ReactNode
  title: string
  description: string
  includes: string[]
}

const deliverables: Deliverable[] = [
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
    description: "We don't just document controls. We test them against Saudi regulatory requirements.",
    includes: [
      "Control design assessment",
      "Operating effectiveness testing",
      "Gap identification and reporting",
      "Remediation recommendations"
    ]
  },
  {
    icon: <AlertCircle className="w-6 h-6" />,
    title: "ZATCA Compliance",
    description: "Make sure your processes meet Zakat, Tax and Customs Authority standards.",
    includes: [
      "VAT control verification",
      "Regulatory compliance assessment",
      "Documentation completeness review",
      "Pre-review preparation support"
    ]
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Independent Reporting",
    description: "Clear reports on where you stand. What's working. What needs attention.",
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
      "Pre-audit testing",
      "External auditor liaison"
    ]
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Ongoing Oversight",
    description: "Continuous monitoring so gaps don't have time to compound.",
    includes: [
      "Quarterly testing cycles",
      "Continuous monitoring",
      "Real time issue escalation",
      "Regular status updates"
    ]
  },
]

export function WhatWeDoAudit() {
  return (
    <section className="py-20 md:py-28 px-4 font-[var(--font-poppins)]" style={{ backgroundColor: "hsl(0 0% 96%)" }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-semibold uppercase tracking-wider mb-4">
            What's Included
          </span>
          
          <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
            Everything You Need for
            <span className="block text-brand-teal">Independent Internal Audit</span>
          </h2>
          
          <p className="mt-4 text-base md:text-lg text-brand-navy/60 max-w-2xl mx-auto">
            We plug into your business as your internal audit function. Here's exactly what you get.
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
              Senior Level Expertise Without the Senior Level Salary
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              You get a complete internal audit function backed by BKR International standards. 
              All without hiring a full time team or building internal capabilities from scratch.
            </p>
            <a
              href="/meeting"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-teal text-brand-navy font-semibold transition-all duration-300 hover:bg-brand-teal/90"
            >
              See How It Works for Your Business
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}