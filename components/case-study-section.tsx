"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

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
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "The rapid growth crisis",
    companyName: "Facktor",
    companyColor: "hsl(232 45% 19%)",
    author: "Jay Boyer",
    role: "General Partner",
    timeline: [
      {
        label: "The Problem",
        content:
          "Rapid growth from 5 to 50 people created dangerous cash flow cycles—looked profitable on paper but repeatedly came close to running out of cash.",
        type: "problem",
      },
      {
        label: "What We Built",
        content:
          "Switched from cash to accrual accounting for true visibility, worked through $1M invoice backlog, and provided CFO modeling for cash planning.",
        type: "solution",
      },
      {
        label: "The Result",
        content:
          '"The growth almost killed us multiple times. We had an additional million dollars in invoices that weren\'t coming in and the CFO team was there with strategies."',
        type: "result",
      },
    ],
  },
  {
    id: 2,
    title: "The founder bottleneck",
    companyName: "ScaleUp",
    companyColor: "hsl(158 47% 58%)",
    author: "Sarah Jenkins",
    role: "CEO",
    timeline: [
      {
        label: "The Problem",
        content:
          "Business owner was handling all sales and operations. The financial numbers were opaque, and the founder was becoming the bottleneck for scaling.",
        type: "problem",
      },
      {
        label: "What We Built",
        content:
          "Streamlined bookkeeping, established clear KPIs for securing capital, and automated reporting. Rebuilt marketing funnels to remove founder dependency.",
        type: "solution",
      },
      {
        label: "The Result",
        content:
          '"Pilot helped secure $2M in non-dilutive capital and built data models that allowed us to secure financing. The relief of knowing the financial house is sorted."',
        type: "result",
      },
    ],
  },
  {
    id: 3,
    title: "Inventory nightmare",
    companyName: "Logistix",
    companyColor: "hsl(0 0% 90%)",
    author: "Mike Ross",
    role: "Founder",
    timeline: [
      {
        label: "The Problem",
        content:
          "Seasonal demand spikes led to massive overstocking in Q1 and stockouts in Q4. Cash was tied up in warehouse inventory.",
        type: "problem",
      },
      {
        label: "What We Built",
        content:
          "Implemented inventory forecasting models based on historical sales data. Negotiated better payment terms with suppliers.",
        type: "solution",
      },
      {
        label: "The Result",
        content:
          '"We reduced holding costs by 35% in the first six months. The cash freed up allowed us to launch two new product lines."',
        type: "result",
      },
    ],
  },
]

export function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const totalSlides = caseStudies.length

  const updateSlider = (index: number) => {
    setCurrentIndex(index)
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      updateSlider(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < totalSlides - 1) {
      updateSlider(currentIndex + 1)
    }
  }

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const swipeThreshold = 50
    const diff = touchStartX.current - touchEndX.current

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0 && currentIndex < totalSlides - 1) {
        handleNext()
      } else if (diff < 0 && currentIndex > 0) {
        handlePrev()
      }
    }
  }

  return (
    <section className="w-full py-12 md:py-24 px-4 md:px-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
          <div className="max-w-xl">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "hsl(158 47% 58%)" }}>
              Case Studies
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
              Here&apos;s how we solve the exact problems keeping you up at night.
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-[hsl(232,45%,19%)] hover:border-white disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === totalSlides - 1}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-[hsl(232,45%,19%)] hover:border-white disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next case study"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="w-full overflow-visible -mx-4 px-4 md:mx-0 md:px-0">
          <div
            ref={trackRef}
            className="flex gap-4 md:gap-8 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 16}px))` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="w-full shrink-0 flex flex-col bg-white rounded-xl overflow-hidden shadow-2xl"
              >
                <div
                  className="w-full h-48 md:hidden relative overflow-hidden group"
                  style={{ backgroundColor: "hsl(0 0% 90%)" }}
                >
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${study.companyColor} 0%, ${study.companyColor} 100%)`,
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-3xl font-bold drop-shadow-md"
                      style={{
                        color: study.id === 3 ? "hsl(232 45% 19%)" : "white",
                      }}
                    >
                      {study.companyName}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row min-h-[400px] md:min-h-[500px]">
                  {/* Content Side */}
                  <div className="flex-1 p-6 md:p-10 flex flex-col relative">
                    {/* Vertical Timeline Line */}
                    <div
                      className="absolute left-[28px] top-[100px] bottom-[80px] md:left-[40px] md:top-[110px] md:bottom-[100px] w-px z-0"
                      style={{ backgroundColor: "hsl(0 0% 90%)" }}
                    />

                    <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8" style={{ color: "hsl(232 45% 19%)" }}>
                      {study.title}
                    </h3>

                    {/* Timeline Items */}
                    {study.timeline.map((item, idx) => (
                      <div key={idx} className="relative pl-6 md:pl-8 mb-5 md:mb-6 z-10">
                        <div
                          className="absolute left-[-5px] top-[6px] w-2.5 h-2.5 rounded-full border-2 border-white"
                          style={{
                            backgroundColor: item.type === "result" ? "hsl(158 47% 58%)" : "hsl(0 0% 62%)",
                          }}
                        />
                        <div
                          className="text-[10px] font-bold uppercase tracking-wider mb-1.5"
                          style={{
                            color: item.type === "result" ? "hsl(158 47% 58%)" : "hsl(0 0% 62%)",
                          }}
                        >
                          {item.label}
                        </div>
                        <p
                          className={`text-sm md:text-base leading-relaxed ${item.type === "result" ? "font-semibold italic" : ""}`}
                          style={{ color: "hsl(232 45% 19% / 0.8)" }}
                        >
                          {item.content}
                        </p>
                        {item.type === "result" && (
                          <span className="block mt-2 text-xs font-medium" style={{ color: "hsl(0 0% 62%)" }}>
                            - {study.author}, {study.role}
                          </span>
                        )}
                      </div>
                    ))}

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 mt-auto pt-6">
                      <button
                        className="w-full px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 hover:shadow-lg"
                        style={{
                          backgroundColor: "hsl(158 47% 58%)",
                          color: "hsl(232 45% 19%)",
                        }}
                      >
                        Read Story
                      </button>
                      <button
                        className="w-full px-6 py-3 rounded-full border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                        style={{
                          borderColor: "hsl(232 45% 19% / 0.2)",
                          color: "hsl(232 45% 19%)",
                          backgroundColor: "transparent",
                        }}
                      >
                        <Play className="w-3 h-3 fill-current" />
                        Watch Video
                      </button>
                    </div>
                  </div>

                  {/* Company Logo Side - desktop only */}
                  <div
                    className="hidden md:block w-full md:w-[40%] relative overflow-hidden group"
                    style={{ backgroundColor: "hsl(0 0% 90%)" }}
                  >
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${study.companyColor} 0%, ${study.companyColor} 100%)`,
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="text-3xl font-bold drop-shadow-md"
                        style={{
                          color: study.id === 3 ? "hsl(232 45% 19%)" : "white",
                        }}
                      >
                        {study.companyName}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-12 md:mt-16 text-center max-w-2xl mx-auto">
          <p className="text-sm leading-relaxed opacity-90 text-white">
            When business owners come to us, we transform what accounting can do: showing where cash is going,
            increasing profitability, and catching issues before they become problems.
          </p>
        </div>
      </div>
    </section>
  )
}
