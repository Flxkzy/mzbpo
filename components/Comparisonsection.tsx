"use client"

import { motion } from "framer-motion"
import { X, Check, Sparkles } from "lucide-react"

interface ComparisonItem {
  others: string
  mzbpo: string
}

interface ComparisonSectionProps {
  badgeText?: string
  headline?: string
  subheadline?: string
  items?: ComparisonItem[]
  othersTitle?: string
  mzbpoTitle?: string
}

const DEFAULT_ITEMS: ComparisonItem[] = [
  {
    others: "Junior staff learning on your account",
    mzbpo: "Senior-level expertise from day one",
  },
  {
    others: "High salaries, benefits, and overhead",
    mzbpo: "Fraction of in-house cost",
  },
  {
    others: "One service per vendor",
    mzbpo: "Bookkeeping, audit, and payroll in one place",
  },
  {
    others: "Local or no standards",
    mzbpo: "BKR International methodology",
  },
  {
    others: "Staff turnover disrupts everything",
    mzbpo: "Team-based continuity",
  },
  {
    others: "Slow to scale up or down",
    mzbpo: "Flexible engagement, adjust anytime",
  },
]

export function ComparisonSection({
  badgeText = "Why Switch",
  headline = "Why Companies Choose MZBPO",
  subheadline = "See how we compare to in-house teams, freelancers, and local firms",
  items = DEFAULT_ITEMS,
  othersTitle = "The Others",
  mzbpoTitle = "MZBPO",
}: ComparisonSectionProps) {
  return (
    <section className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 px-4 py-2 text-xs font-semibold text-brand-teal uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4" />
              {badgeText}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-4"
          >
            {headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-brand-navy/60 text-base md:text-lg max-w-2xl mx-auto"
          >
            {subheadline}
          </motion.p>
        </div>

        {/* Comparison Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              
              {/* Others Column */}
              <div className="relative">
                <div className="bg-gray-100 rounded-3xl p-8 h-full border border-gray-200">
                  {/* Column Header */}
                  <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-300">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-gray-600">
                      {othersTitle}
                    </h3>
                  </div>

                  {/* Items */}
                  <div className="space-y-5">
                    {items.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/60"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                          <X className="w-3.5 h-3.5 text-red-500" />
                        </div>
                        <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                          {item.others}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* MZBPO Column */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal/20 to-brand-teal/10 rounded-[28px] blur-xl" />
                
                <div className="relative bg-brand-navy rounded-3xl p-8 h-full border-2 border-brand-teal/30">
                  {/* Column Header */}
                  <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
                    <div className="w-10 h-10 rounded-full bg-brand-teal flex items-center justify-center">
                      <Check className="w-5 h-5 text-brand-navy" />
                    </div>
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white">
                      {mzbpoTitle}
                    </h3>
                  </div>

                  {/* Items */}
                  <div className="space-y-5">
                    {items.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/5"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-teal flex items-center justify-center mt-0.5">
                          <Check className="w-3.5 h-3.5 text-brand-navy" />
                        </div>
                        <p className="text-white/90 text-sm lg:text-base leading-relaxed">
                          {item.mzbpo}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Mobile Layout - Stacked Cards */}
          <div className="md:hidden space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
              >
                {/* Others - Top */}
                <div className="bg-gray-100 p-4 flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-500" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.others}
                  </p>
                </div>
                
                {/* MZBPO - Bottom */}
                <div className="bg-brand-navy p-4 flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-teal flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-brand-navy" />
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {item.mzbpo}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-brand-navy/60 mb-6">
            Ready to make the switch?
          </p>
          <a
            href="/meeting"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-teal text-brand-navy font-semibold text-lg transition-all duration-300 hover:bg-brand-teal/90 hover:scale-105 shadow-lg shadow-brand-teal/25"
          >
            Book a Free Consultation
          </a>
        </motion.div>

      </div>
    </section>
  )
}