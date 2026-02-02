"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { X, Check, Sparkles, ArrowRight } from "lucide-react"

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

function ComparisonRow({
  item,
  index,
  isVisible,
}: {
  item: ComparisonItem
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={`group grid grid-cols-[1fr_auto_1fr] items-stretch transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${150 + index * 80}ms` }}
    >
      {/* Others side */}
      <div className="relative flex items-center gap-4 py-5 sm:py-6 px-5 sm:px-8 bg-white/[0.03] group-hover:bg-red-500/[0.04] transition-colors duration-500 rounded-l-2xl">
        {/* Strikethrough line that animates on hover */}
        <div className="absolute inset-x-6 top-1/2 h-[1px] bg-red-400/0 group-hover:bg-red-400/40 transition-all duration-700 scale-x-0 group-hover:scale-x-100 origin-left" />

        <div className="relative flex-shrink-0 w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:bg-red-500/20 group-hover:border-red-500/30 transition-all duration-300">
          <X className="w-3.5 h-3.5 text-red-400" />
        </div>
        <p className="relative text-white/50 text-sm lg:text-[15px] leading-relaxed font-[var(--font-poppins)] group-hover:text-white/30 transition-colors duration-500">
          {item.others}
        </p>
      </div>

      {/* Center divider with arrow */}
      <div className="relative flex items-center justify-center w-12 sm:w-16">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-teal/5 to-transparent" />
        <div className="w-8 h-8 rounded-full bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center group-hover:bg-brand-teal/20 group-hover:border-brand-teal/40 group-hover:scale-110 transition-all duration-500">
          <ArrowRight className="w-3.5 h-3.5 text-brand-teal transition-transform duration-500 group-hover:translate-x-0.5" />
        </div>
      </div>

      {/* MZBPO side */}
      <div className="relative flex items-center gap-4 py-5 sm:py-6 px-5 sm:px-8 bg-brand-teal/[0.04] group-hover:bg-brand-teal/[0.08] transition-colors duration-500 rounded-r-2xl overflow-hidden">
        {/* Glow on hover */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-brand-teal/0 group-hover:bg-brand-teal/10 rounded-full blur-3xl transition-all duration-700 pointer-events-none" />

        <div className="relative flex-shrink-0 w-7 h-7 rounded-lg bg-brand-teal/15 border border-brand-teal/25 flex items-center justify-center group-hover:bg-brand-teal/25 group-hover:border-brand-teal/40 transition-all duration-300">
          <Check className="w-3.5 h-3.5 text-brand-teal" />
        </div>
        <p className="relative text-white/90 text-sm lg:text-[15px] leading-relaxed font-[var(--font-poppins)] font-medium group-hover:text-white transition-colors duration-500">
          {item.mzbpo}
        </p>
      </div>
    </div>
  )
}

function MobileComparisonCard({
  item,
  index,
  isVisible,
}: {
  item: ComparisonItem
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${100 + index * 100}ms` }}
    >
      {/* Subtle outer glow */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/[0.08] to-brand-teal/[0.08] pointer-events-none" />

      <div className="relative bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-white/[0.06] overflow-hidden">
        {/* "Old way" */}
        <div className="relative flex items-start gap-3 px-5 py-4 border-b border-white/[0.06]">
          <div className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-md bg-red-500/10 border border-red-500/20 flex items-center justify-center">
            <X className="w-3 h-3 text-red-400" />
          </div>
          <p className="text-white/40 text-sm leading-relaxed font-[var(--font-poppins)] line-through decoration-red-400/30">
            {item.others}
          </p>
        </div>

        {/* "MZBPO way" */}
        <div className="relative flex items-start gap-3 px-5 py-4 bg-brand-teal/[0.04]">
          {/* Left accent bar */}
          <div className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-brand-teal to-brand-teal/40" />

          <div className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-md bg-brand-teal/15 border border-brand-teal/25 flex items-center justify-center">
            <Check className="w-3 h-3 text-brand-teal" />
          </div>
          <p className="text-white/90 text-sm leading-relaxed font-[var(--font-poppins)] font-medium">
            {item.mzbpo}
          </p>
        </div>
      </div>
    </div>
  )
}

export function ComparisonSection({
  badgeText = "Why Switch",
  headline = "Why Companies Choose MZBPO",
  subheadline = "See how we compare to in-house teams, freelancers, and local firms",
  items = DEFAULT_ITEMS,
  othersTitle = "The Others",
  mzbpoTitle = "MZBPO",
}: ComparisonSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      style={{ backgroundColor: "hsl(232 45% 15%)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-teal/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-teal/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <div
            className={`inline-flex items-center gap-2 rounded-full bg-brand-teal/10 border border-brand-teal/20 px-4 py-2 text-xs font-semibold text-brand-teal uppercase tracking-wider mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {badgeText}
          </div>

          <h2
            className={`font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {headline}
          </h2>

          <p
            className={`text-white/50 text-base md:text-lg max-w-2xl mx-auto font-[var(--font-poppins)] transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {subheadline}
          </p>
        </div>

        {/* Desktop: Unified comparison table */}
        <div className="hidden md:block">
          {/* Column headers */}
          <div
            className={`grid grid-cols-[1fr_auto_1fr] items-center mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex items-center gap-3 px-8">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <X className="w-4 h-4 text-red-400" />
              </div>
              <span className="font-[family-name:var(--font-syne)] text-base font-bold text-white/40 uppercase tracking-wider">
                {othersTitle}
              </span>
            </div>

            <div className="w-12 sm:w-16" />

            <div className="flex items-center gap-3 px-8">
              <div className="w-8 h-8 rounded-lg bg-brand-teal/15 border border-brand-teal/25 flex items-center justify-center">
                <Check className="w-4 h-4 text-brand-teal" />
              </div>
              <span className="font-[family-name:var(--font-syne)] text-base font-bold text-brand-teal uppercase tracking-wider">
                {mzbpoTitle}
              </span>
            </div>
          </div>

          {/* Separator */}
          <div
            className={`h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-2 transition-all duration-700 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: "120ms" }}
          />

          {/* Rows */}
          <div className="space-y-2">
            {items.map((item, index) => (
              <ComparisonRow
                key={index}
                item={item}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Mobile: Stacked cards */}
        <div className="md:hidden space-y-3">
          {items.map((item, index) => (
            <MobileComparisonCard
              key={index}
              item={item}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-14 md:mt-20 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <p className="text-white/40 text-sm font-[var(--font-poppins)] mb-6">
            Ready to make the switch?
          </p>
          <a
            href="/meeting"
            className="group relative inline-flex items-center gap-2.5 bg-brand-teal text-brand-navy font-[var(--font-poppins)] font-semibold text-base px-8 py-4 rounded-full overflow-hidden shadow-lg shadow-brand-teal/20 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--brand-teal)/0.3)] hover:scale-[1.03]"
          >
            {/* Shine sweep */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <span className="relative">Book a Free Consultation</span>
            <ArrowRight className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
