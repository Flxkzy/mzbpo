"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { FileCheck, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

interface CaseStudy {
  id: number
  title: string
  companyType: string
  companyName: string
  companyColor: string
  logoImage?: string
  challenge: string
  solution: string
  result: string
  resultAuthor?: string
  resultRole?: string
  metrics: {
    label: string
    value: string
  }[]
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "The Control Gap Discovery",
    companyType: "Manufacturing Company",
    companyName: "Ecommerce Skincare Brand",
    companyColor: "hsl(232 45% 19%)",
    logoImage: "/logo/skincarelogo.svg",
    challenge:
      "Growing rapidly but controls hadn't kept pace. Payments were going out without proper authorization. Expense approvals were rubber stamped. The external auditor flagged multiple control weaknesses.",
    solution:
      "Conducted a comprehensive internal audit across all financial processes. Identified 15 control gaps, implemented proper authorization matrices, established transaction review protocols, and created ongoing monitoring procedures.",
    result:
      "Next external audit came back clean. Zero material control findings. Management now has real time visibility into control effectiveness.",
    resultAuthor: "Ops Lead",
    resultRole: "Finance Operations",
    metrics: [
      { label: "Control gaps fixed", value: "15" },
      { label: "Audit findings", value: "Zero" },
    ],
  },
{
  id: 2,
  title: "The Scaling Without Chaos Story",
  companyType: "Email Marketing Agency",
  companyName: "RHEM COPY",
  companyColor: "hsl(262 52% 60%)",
  logoImage: "/logo/rhemcopy.svg",
  challenge:
    "Client growth was strong, but internally the agency was struggling with inconsistent billing logic, unclear cost tracking, and rising reconciliation issues. Profitability varied month to month despite stable retainers. Leadership lacked clear financial visibility as the team expanded.",
  solution:
    "Performed an internal audit of revenue recognition, client billing workflows, contractor payments, and expense allocations. Traced how retainers, performance fees, and tool costs flowed through the accounting system. Identified timing distortions, misclassifications, and approval gaps affecting reporting accuracy.",
  result:
    "Established structured billing controls, standardized cost attribution, and reconciliation checkpoints. Margin visibility improved and monthly financials became predictable. Management gained confidence to scale operations without financial uncertainty.",
  resultAuthor: "Founder",
  resultRole: "Agency Owner",
  metrics: [
    { label: "Margin Variance", value: "Stabilized" },
    { label: "Financial Visibility", value: "Restored" },
  ],
},
  {
    id: 3,
    title: "The Multi Entity Consolidation",
    companyType: "Multi Entity Services Group",
    companyName: "Multi Entity Services Group",
    companyColor: "hsl(0 0% 20%)",
    logoImage: "/logo/multi.svg",
    challenge:
      "Four entities under one holding company, each with different accounting practices. Intercompany transactions were a mess. Consolidation took weeks and nobody trusted the numbers. External audit was approaching.",
    solution:
      "Entity by entity internal audit. Standardized control frameworks across all entities. Cleaned intercompany balances. Established monthly reconciliation procedures and independent review checkpoints before consolidation.",
    result:
      "External audit completed in half the usual time. Auditors commented on the quality of documentation. CFO now receives consolidated reports they actually trust.",
    resultAuthor: "Finance Manager",
    resultRole: "Operations",
    metrics: [
      { label: "Entities standardized", value: "4" },
      { label: "Audit time cut", value: "50%" },
    ],
  },
]

export function CaseStudiesAudit() {
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (idx: number) => {
    const el = trackRef.current
    if (!el) return
    const target = el.children?.[idx] as HTMLElement | undefined
    if (!target) return
    target.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" })
    setActiveIndex(idx)
  }

  const prev = () => scrollToIndex(Math.max(activeIndex - 1, 0))
  const next = () => scrollToIndex(Math.min(activeIndex + 1, caseStudies.length - 1))

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[]
      if (!children.length) return

      const left = el.scrollLeft
      let bestIdx = 0
      let bestDist = Number.POSITIVE_INFINITY

      for (let i = 0; i < children.length; i++) {
        const dist = Math.abs(children[i].offsetLeft - left)
        if (dist < bestDist) {
          bestDist = dist
          bestIdx = i
        }
      }
      setActiveIndex(bestIdx)
    }

    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className="py-20 md:py-28 px-4 font-[var(--font-poppins)]" style={{ backgroundColor: "hsl(232 45% 19%)" }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <FileCheck className="w-5 h-5 text-brand-teal" />
              <span className="text-sm font-semibold tracking-wide text-brand-teal uppercase">
                Case Studies
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              How We Solve the Problems
              <span className="block text-brand-teal">Keeping You Up at Night</span>
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="w-11 h-11 rounded-full border border-white/20 text-white/80 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-brand-navy disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={activeIndex === caseStudies.length - 1}
              className="w-11 h-11 rounded-full border border-white/20 text-white/80 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-brand-navy disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Next case study"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swipeable Cards Container */}
        <div className="-mx-4 px-4">
          <div
            ref={trackRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
            style={{ 
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch"
            } as React.CSSProperties}
          >
            {caseStudies.map((study) => (
              <article
                key={study.id}
                className="snap-start shrink-0 w-[92%] sm:w-[85%] md:w-full rounded-3xl overflow-hidden bg-white shadow-2xl"
              >
                {/* Card Content */}
                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_280px] min-h-[520px] lg:min-h-[460px]">
                  
                  {/* Left Content */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col">
                    
                    {/* Metrics Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.metrics.map((metric, idx) => (
                        <div 
                          key={idx}
                          className="px-3 py-1.5 rounded-full bg-brand-teal/10 text-brand-navy text-xs font-semibold"
                        >
                          <span className="font-bold">{metric.value}</span> {metric.label}
                        </div>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-brand-navy mb-6">
                      {study.title}
                    </h3>

                    {/* Timeline */}
                    <div className="space-y-5 flex-1">
                      {/* Challenge */}
                      <div className="relative pl-6">
                        <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="text-[11px] font-bold uppercase tracking-wider mb-1 text-red-500">
                          The Challenge
                        </div>
                        <p className="text-sm text-brand-navy/70 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="relative pl-6">
                        <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-blue-400" />
                        <div className="text-[11px] font-bold uppercase tracking-wider mb-1 text-blue-500">
                          What We Did
                        </div>
                        <p className="text-sm text-brand-navy/70 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>

                      {/* Result */}
                      <div className="relative pl-6">
                        <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-brand-teal" />
                        <div className="text-[11px] font-bold uppercase tracking-wider mb-1 text-brand-teal">
                          The Result
                        </div>
                        <p className="text-sm text-brand-navy/90 leading-relaxed font-medium">
                          "{study.result}"
                        </p>
                        {study.resultAuthor && (
                          <span className="block mt-2 text-xs text-brand-navy/50">
                            {study.resultAuthor}, {study.resultRole}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right: Logo Column (Desktop) */}
                  <div className="hidden lg:block relative bg-white border-l border-gray-100">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "radial-gradient(600px 400px at 30% 30%, rgba(15,23,42,0.04) 0%, transparent 60%)",
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        background: `radial-gradient(400px 300px at 50% 40%, ${study.companyColor} 0%, transparent 70%)`,
                      }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="w-full max-w-[200px]">
                        {study.logoImage ? (
                          <div className="relative w-full h-[80px]">
                            <Image
                              src={study.logoImage}
                              alt={`${study.companyName} logo`}
                              fill
                              className="object-contain"
                              sizes="200px"
                            />
                          </div>
                        ) : (
                          <div className="h-[80px] flex items-center justify-center">
                            <span className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy">
                              {study.companyName}
                            </span>
                          </div>
                        )}
                        <p className="mt-3 text-center text-sm font-medium text-brand-navy/60">
                          {study.companyType}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Logo Bar */}
                  <div className="lg:hidden px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {study.logoImage ? (
                        <div className="relative w-[100px] h-[40px]">
                          <Image
                            src={study.logoImage}
                            alt={`${study.companyName} logo`}
                            fill
                            className="object-contain object-left"
                            sizes="100px"
                          />
                        </div>
                      ) : (
                        <span className="font-semibold text-brand-navy text-sm">
                          {study.companyName}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-brand-navy/50">{study.companyType}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Hide scrollbar CSS */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-8 bg-brand-teal" : "w-2 bg-white/25 hover:bg-white/40"
              }`}
              aria-label={`View case study ${index + 1}`}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-white/60 mb-6 max-w-2xl mx-auto">
            Every business has control gaps waiting to be found. The question is whether you find them first, or your auditor does.
          </p>
          <a
            href="/meeting"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-teal text-brand-navy font-semibold transition-all duration-300 hover:bg-brand-teal/90 hover:translate-y-[-2px]"
          >
            Get Your Controls Assessed
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  )
}