"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "We're not big enough for internal audit. Isn't this for large enterprises?",
    answer: "Internal audit isn't about size—it's about complexity and risk. If you're growing, handling more transactions, and have more people touching finances, you need oversight. The gaps that form at your stage compound quickly. Fixing them now is easier and cheaper than fixing them after your external auditor flags them or ZATCA comes asking questions.",
  },
  {
    question: "We already have an external auditor. Why do we need internal audit too?",
    answer: "External auditors verify your financials once a year—after the fact. They confirm what happened, not what's happening. Internal audit tests your controls throughout the year, catches issues early, and makes sure you're audit-ready before external auditors arrive. They're complementary, not redundant. In fact, strong internal audit makes your external audit faster and cheaper.",
  },
  {
    question: "Can't our finance team handle internal controls?",
    answer: "Your finance team prepares the books. They can't independently audit what they create—that's a conflict of interest and defeats the purpose of controls. Proper internal audit requires independence. We're not preparing your numbers; we're verifying them. That separation is what makes the oversight meaningful.",
  },
  {
    question: "What does this actually cost?",
    answer: "It depends on your transaction volume, number of entities, and complexity. But in most cases, it's significantly less than hiring even one full-time internal auditor—and you get a team of senior-level expertise, not a single hire learning on the job. We'll scope it properly on the intro call and give you a clear number.",
  },
  {
    question: "How long until we're audit-ready?",
    answer: "For most companies, we can complete an initial internal audit and get you to audit-ready status within 6-8 weeks. After that, it's ongoing oversight to maintain that readiness. The first engagement identifies the gaps; the ongoing work makes sure they stay closed.",
  },
  {
    question: "What if you find serious problems?",
    answer: "That's exactly why you hire us—to find problems before someone else does. We report what we find clearly and help you prioritize fixes based on risk. Finding a control gap with us is infinitely better than having your external auditor flag it, ZATCA discover it, or—worst case—finding out through actual financial loss.",
  },
  {
    question: "How is this different from a one-time audit?",
    answer: "A one-time audit gives you a snapshot. But controls degrade, people change, processes evolve. Ongoing internal audit means continuous oversight—quarterly testing, regular reviews, real-time reporting. You're not just audit-ready once; you stay audit-ready.",
  },
  {
    question: "Do you work with companies outside Saudi Arabia?",
    answer: "Yes. We work with companies in Saudi Arabia, UAE, and UK. Our team operates remotely with secure systems, and as a BKR International partner, we apply global audit standards regardless of location.",
  },
]

export function FAQAudit() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
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
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-base md:text-lg text-brand-navy/60 max-w-xl mx-auto">
            Everything you need to know about internal audit for your business.
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
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
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
  )
}