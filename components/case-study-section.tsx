"use client"

import type React from "react"
import Image from "next/image"
import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TimelineItem {
  label: string
  content: string
  type: "problem" | "solution" | "result"
}

interface CaseStudy {
  id: number
  title: string
  timeline: TimelineItem[]
  author: string
  role: string
  companyName: string
  companyColor: string
  coverImage: string // kept, not rendered
  logoImage?: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "The rapid growth cash crunch",
    companyName: "Ecommerce Skincare Brand",
    companyColor: "hsl(232 45% 19%)",
    author: "Ops Lead",
    role: "Finance Operations",
    coverImage: "/images/skincarecover.avif",
    logoImage: "/logo/skincarelogo.svg",
    timeline: [
      {
        label: "The Problem",
        content:
          "At $8M monthly revenue, growth pushed payments, inventory, and fulfillment harder than the finance process could handle. The business looked strong on revenue but frequently ran tight on cash because settlements, inventory cycles, and payables were not tracked cleanly.",
        type: "problem",
      },
      {
        label: "What We Built",
        content:
          "Moved reporting to accrual for accurate visibility, cleaned a seven figure reconciliation gap across gateways and invoices, and implemented structured cash tracking tied to inventory cycles and settlement timing.",
        type: "solution",
      },
      {
        label: "The Result",
        content:
          '"We had over a million dollars tied up across gateways and inventory without clarity. Once the numbers were clean, we finally had control."',
        type: "result",
      },
    ],
  },
  {
    id: 2,
    title: "The founder bottleneck",
    companyName: "Digital Agency",
    companyColor: "hsl(158 47% 58%)",
    author: "Founder",
    role: "CEO",
    coverImage: "/images/rhemcover.avif",
    logoImage: "/logo/rhemcopy.svg",
    timeline: [
      {
        label: "The Problem",
        content:
          "At $150K MRR, the founder was still overseeing sales, delivery, and finances. Reporting was inconsistent, margins were unclear by client, and decisions relied on intuition instead of reliable financial data.",
        type: "problem",
      },
      {
        label: "What We Built",
        content:
          "Standardized bookkeeping, cleaned historical data, introduced consistent monthly reporting with client level profitability, and automated financial visibility so performance no longer depended on the founder.",
        type: "solution",
      },
      {
        label: "The Result",
        content:
          '"Once the numbers were clear and consistent, I could finally step back. I knew what was working, what wasn’t, and could scale without feeling blind."',
        type: "result",
      },
    ],
  },
  {
    id: 3,
    title: "The audit readiness gap",
    companyName: "Multi Entity Services Group",
    companyColor: "hsl(0 0% 20%)",
    author: "Finance Manager",
    role: "Operations",
    coverImage: "/images/case-studies/logistix.avif",
    logoImage: "/logo/multi.svg",
    timeline: [
      {
        label: "The Problem",
        content:
          "Across multiple entities, transaction volume grew but records stayed inconsistent and month end close slipped. Each audit cycle became reactive, time consuming, and disruptive to operations.",
        type: "problem",
      },
      {
        label: "What We Built",
        content:
          "Standardized bookkeeping across entities, cleaned historical balances, implemented ongoing internal reviews to detect errors and control gaps, and prepared audit ready financial statements with supporting schedules.",
        type: "solution",
      },
      {
        label: "The Result",
        content:
          '"For the first time, the audit felt routine instead of chaotic. The numbers were clean, questions were answered fast, and we finally trusted the reports."',
        type: "result",
      },
    ],
  },
]

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

export function CaseStudies() {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const slides = useMemo(() => caseStudies, [])
  const total = slides.length

  const scrollToIndex = (idx: number) => {
    const el = trackRef.current
    if (!el) return
    const target = el.children?.[idx] as HTMLElement | undefined
    if (!target) return
    target.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" })
    setActiveIndex(idx)
  }

  const prev = () => scrollToIndex(clamp(activeIndex - 1, 0, total - 1))
  const next = () => scrollToIndex(clamp(activeIndex + 1, 0, total - 1))

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
    <section className="w-full py-12 md:py-20 px-4 md:px-8 font-[var(--font-poppins)]">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 md:mb-10">
          <div className="max-w-2xl">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-brand-teal font-[var(--font-poppins)]">
              Case Studies
            </h4>

            {/* Heading: use required Syne font syntax, reduced size */}
            <h2 className="mt-6 font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl font-bold text-brand-white">
              Here&apos;s how we solve the exact problems keeping you up at night.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="w-11 h-11 rounded-full border border-white/15 text-white/80 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-brand-navy hover:border-white disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={activeIndex === total - 1}
              className="w-11 h-11 rounded-full border border-white/15 text-white/80 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-brand-navy hover:border-white disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Next case study"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="-mx-4 px-4 md:-mx-8 md:px-8">
          <div
            ref={trackRef}
            className="
              flex gap-4 md:gap-6
              overflow-x-auto pb-3
              snap-x snap-mandatory
              scroll-smooth
              [scrollbar-width:none]
            "
            style={{ WebkitOverflowScrolling: "touch" } as any}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {slides.map((study) => (
              <article
                key={study.id}
                className="
                  snap-start shrink-0
                  w-[88%] sm:w-[78%] md:w-[76%] lg:w-[60%] xl:w-[56%]
                  rounded-3xl overflow-hidden
                  bg-white shadow-2xl
                "
              >
                <div className="flex flex-col md:grid md:grid-cols-[1.45fr_1fr] min-h-[460px]">
                  {/* Mobile Logo Header */}
                  <div className="md:hidden relative h-[150px] bg-white border-b border-black/5">
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(700px 420px at 30% 20%, rgba(15,23,42,0.06) 0%, rgba(15,23,42,0.00) 60%)",
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        background: `radial-gradient(520px 320px at 20% 20%, ${study.companyColor} 0%, transparent 70%)`,
                      }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center px-6">
                      <div className="w-full max-w-[240px]">
                        <div className="relative w-full h-[64px]">
                          {study.logoImage ? (
                            <Image
                              src={study.logoImage}
                              alt={`${study.companyName} logo`}
                              fill
                              className="object-contain"
                              sizes="240px"
                              priority={study.id === 1}
                            />
                          ) : (
                            <div className="h-full flex items-center justify-center">
                              <span className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy">
                                {study.companyName}
                              </span>
                            </div>
                          )}
                        </div>
                        <p className="mt-2 text-center text-xs font-medium text-brand-navy/70 font-[var(--font-poppins)]">
                          {study.companyName}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Left content */}
                  <div className="p-6 sm:p-7 md:p-8 lg:p-9 flex flex-col">
                    {/* Title: Syne required syntax, reduced size */}
                    <h3 className="mt-6 font-[family-name:var(--font-syne)] text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy">
                      {study.title}
                    </h3>

                    <div className="mt-6 space-y-5">
                      {study.timeline.map((item, idx) => (
                        <div key={idx} className="relative pl-7">
                          <div
                            className="absolute left-0 top-[7px] w-2.5 h-2.5 rounded-full"
                            style={{
                              backgroundColor: item.type === "result" ? "hsl(158 47% 58%)" : "hsl(0 0% 62%)",
                            }}
                          />
                          <div
                            className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1 font-[var(--font-poppins)]"
                            style={{
                              color: item.type === "result" ? "hsl(158 47% 58%)" : "hsl(0 0% 52%)",
                            }}
                          >
                            {item.label}
                          </div>
                          <p
                            className={`text-sm md:text-[15px] leading-relaxed font-[var(--font-poppins)] ${
                              item.type === "result" ? "font-semibold" : ""
                            }`}
                            style={{ color: "hsl(232 45% 19% / 0.82)" }}
                          >
                            {item.content}
                          </p>

                          {item.type === "result" && (
                            <span className="block mt-2 text-xs md:text-[13px] font-medium text-black/55 font-[var(--font-poppins)]">
                              {study.author}, {study.role}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3" />
                  </div>

                  {/* Desktop Right Logo Column */}
                  <div className="hidden md:block relative bg-white">
                    <div className="absolute inset-0 border-l border-black/5" />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(700px 420px at 30% 20%, rgba(15,23,42,0.06) 0%, rgba(15,23,42,0.00) 60%)",
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        background: `radial-gradient(520px 320px at 20% 20%, ${study.companyColor} 0%, transparent 70%)`,
                      }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-10">
                      <div className="w-full max-w-[260px]">
                        <div className="relative w-full h-[86px]">
                          {study.logoImage ? (
                            <Image
                              src={study.logoImage}
                              alt={`${study.companyName} logo`}
                              fill
                              className="object-contain"
                              sizes="260px"
                              priority={study.id === 1}
                            />
                          ) : (
                            <div className="h-full flex items-center justify-center">
                              <span className="font-[family-name:var(--font-syne)] text-2xl font-bold text-brand-navy">
                                {study.companyName}
                              </span>
                            </div>
                          )}
                        </div>
                        <p className="mt-3 text-center text-sm font-medium text-brand-navy/70 font-[var(--font-poppins)]">
                          {study.companyName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === activeIndex ? "w-7 bg-brand-teal" : "w-2 bg-white/25"}`}
              />
            ))}
          </div>
        </div>

        {/* Footer text */}
        <div className="mt-10 md:mt-12 text-center max-w-2xl mx-auto">
          <p className="text-sm leading-relaxed opacity-90 text-white font-[var(--font-poppins)]">
            When business owners come to us, we transform what accounting can do: showing where cash is going, increasing
            profitability, and catching issues before they become problems.
          </p>
        </div>
      </div>
    </section>
  )
}
