"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import Script from "next/script"

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "How is this different from hiring a local bookkeeping firm?",
    answer: "Local firms charge premium rates, often $8,000 to $15,000 a month, and you typically get junior staff doing the actual work. With MZBPO, you get senior level accountants from a QCR rated audit firm at about 50% less cost. Same accuracy, same standards, better value. Plus, we are backed by BKR International, so you get global methodology applied to your books.",
  },
  {
    question: "What about hiring an in house bookkeeper instead?",
    answer: "In house means salaries, benefits, training costs, and the constant risk of turnover. When your bookkeeper quits, you start over. With MZBPO, you get a dedicated team, not a single point of failure. No hiring headaches, no training overhead, and continuity even if one team member moves on. Most clients find it costs significantly less than a single full time hire.",
  },
  {
    question: "How fast can you get started?",
    answer: "We can have a dedicated bookkeeping team working on your books within 48 hours. We will review your current setup, understand your systems and workflows, and start processing transactions right away. No lengthy onboarding, no months of ramp up time.",
  },
  {
    question: "What accounting software do you work with?",
    answer: "We work with all major platforms including QuickBooks, Xero, Zoho Books, Odoo, SAP Business One, NetSuite, and more. If you are using spreadsheets or need to migrate to a proper system, we can help with that too. We adapt to your tools, not the other way around.",
  },
  {
    question: "How do you handle confidentiality and data security?",
    answer: "We take security seriously. All team members sign NDAs, we use encrypted systems for data transfer, and access is strictly controlled. As part of a QCR rated audit firm, we follow the same confidentiality protocols used for audit clients. Your financial data is handled with the same care as our largest enterprise clients.",
  },
  {
    question: "What if we have a complex multi entity structure?",
    answer: "Complex structures are actually where we add the most value. We handle multi entity consolidations, intercompany transactions, and multi currency accounting regularly. Our team has experience with holding companies, subsidiaries, and businesses operating across multiple regions. The more complex your setup, the more you benefit from senior level expertise.",
  },
  {
    question: "Will we have a dedicated team or get passed around?",
    answer: "You get a dedicated team assigned to your account. The same people work on your books every month, so they understand your business, your vendors, your patterns. No explaining things repeatedly to new faces. Your team is supervised by senior accountants who review all work before it reaches you.",
  },
  {
    question: "What reports will we receive and how often?",
    answer: "At minimum, you get monthly financial statements including profit and loss, balance sheet, and cash flow. We can also provide weekly transaction summaries, aged receivables and payables, custom management reports, and any other reporting your business needs. Reports are delivered on a schedule we agree on, typically by the 5th of each month for the prior month.",
  },
  {
    question: "What happens during month end close?",
    answer: "We handle the entire month end process. That includes posting final entries, completing reconciliations, reviewing for errors, making adjustments, and preparing your financial statements. You do not need to chase us or wonder where things stand. We close on schedule and send you clean, accurate reports you can rely on.",
  },
  {
    question: "Can you help us get audit ready?",
    answer: "Absolutely. Clean, well organized books are the foundation of audit readiness. We maintain proper documentation, ensure transactions are properly categorized, and keep reconciliations current. When your external auditors arrive, everything they need is already in order. Many clients find their audit process becomes significantly faster and cheaper after working with us.",
  },
]

// Generate FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
}

export function FAQBookkeeping() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      {/* FAQ Schema for SEO */}
      <Script
        id="faq-bookkeeping-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section className="py-20 md:py-28 px-4 bg-white font-[var(--font-poppins)]">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-brand-teal" />
              <span className="text-sm font-semibold tracking-wide text-brand-teal uppercase">
                FAQ
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
              Frequently Asked Questions About Outsourced Bookkeeping
            </h2>

            <p className="mt-4 text-base md:text-lg text-brand-navy/60 max-w-xl mx-auto">
              Everything you need to know about our bookkeeping and accounting outsourcing services.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`rounded-xl overflow-hidden transition-all duration-300 border ${
                  openIndex === index 
                    ? "bg-gray-50 border-brand-teal/30" 
                    : "bg-gray-50/50 border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-bookkeeping-answer-${index}`}
                >
                  <span className="font-semibold text-base md:text-lg text-brand-navy">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                      openIndex === index 
                        ? "text-brand-teal rotate-180" 
                        : "text-brand-navy/40"
                    }`}
                  />
                </button>
                
                {/* Answer */}
                <div 
                  id={`faq-bookkeeping-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-brand-navy/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}