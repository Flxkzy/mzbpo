"use client"

import { useState, useRef, useEffect } from "react"
import { Quote, Shield, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  quote: string
  highlight?: string
  highlightLabel?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "CFO",
    role: "Chief Financial Officer",
    company: "Trading Company",
    image: "/images/1.avif",
    quote:
      "Before MZBPO, our external audit was always a scramble. Now we walk in prepared. Their independent reviews caught discrepancies we never would have found internally.",
    highlight: "Zero",
    highlightLabel: "Material findings in last audit",
  },
  {
    id: 2,
    name: "Managing Director",
    role: "Managing Director",
    company: "Services Group",
    image: "/images/2.avif",
    quote:
      "We had no idea how many control gaps existed until they conducted a full internal audit. The clarity we gained was worth every dirham.",
    highlight: "12",
    highlightLabel: "Control gaps identified and fixed",
  },
  {
    id: 3,
    name: "Finance Director",
    role: "Finance Director",
    company: "Services Company",
    image: "/images/3.avif",
    quote:
      "FTA sent a review request and for the first time, we were ready. Documentation was complete, controls were tested, and we passed without issues.",
    highlight: "100%",
    highlightLabel: "FTA compliance achieved",
  },
  {
    id: 4,
    name: "CEO",
    role: "Chief Executive Officer",
    company: "Holding Company",
    image: "/images/4.avif",
    quote:
      "Having an independent team test our controls gives me confidence that the numbers I see are accurate. I no longer second guess the reports.",
    highlight: "Full",
    highlightLabel: "Confidence in financials",
  },
]

export function TestimonialsAuditUAE() {
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
  const next = () => scrollToIndex(Math.min(activeIndex + 1, testimonials.length - 1))

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
    <section className="py-20 md:py-28 px-4 font-[var(--font-poppins)]" style={{ backgroundColor: "hsl(232 45% 15%)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-brand-teal" />
              <span className="text-sm font-semibold tracking-wide text-brand-teal uppercase">
                Client Results
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Results That Stand Up to
              <span className="block text-brand-teal">Any Scrutiny</span>
            </h2>

            <p className="mt-4 text-base md:text-lg text-white/60 max-w-xl">
              Real outcomes from companies that needed independent audit oversight.
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="w-11 h-11 rounded-full border border-white/20 text-white/80 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-brand-navy disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={activeIndex === testimonials.length - 1}
              className="w-11 h-11 rounded-full border border-white/20 text-white/80 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-brand-navy disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swipeable Testimonials */}
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
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="snap-start shrink-0 w-[92%] sm:w-[85%] md:w-[calc(50%-12px)] lg:w-[calc(50%-12px)]"
              >
                <div
                  className="h-full rounded-2xl p-6 sm:p-8 flex flex-col"
                  style={{ backgroundColor: "hsl(232 45% 19%)" }}
                >
                  {/* Highlight Stat */}
                  {testimonial.highlight && (
                    <div className="mb-6 p-4 rounded-xl bg-brand-teal/10 border border-brand-teal/20">
                      <div className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-bold text-brand-teal mb-1">
                        {testimonial.highlight}
                      </div>
                      <p className="text-sm text-white/60">
                        {testimonial.highlightLabel}
                      </p>
                    </div>
                  )}

                  {/* Quote */}
                  <div className="flex-1">
                    <Quote className="w-8 h-8 text-brand-teal/30 mb-4" />
                    <blockquote className="text-base sm:text-lg text-white/90 leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-brand-teal/30 flex-shrink-0">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-white/50">{testimonial.role}</p>
                      <p className="text-sm text-brand-teal">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
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
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-8 bg-brand-teal" : "w-2 bg-white/25 hover:bg-white/40"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10">
          <div className="flex items-center gap-2 text-white/60">
            <CheckCircle className="w-5 h-5 text-brand-teal" />
            <span className="text-sm">Independent verification</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <CheckCircle className="w-5 h-5 text-brand-teal" />
            <span className="text-sm">BKR International standards</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <CheckCircle className="w-5 h-5 text-brand-teal" />
            <span className="text-sm">UAE regulatory compliance</span>
          </div>
        </div>

      </div>
    </section>
  )
}
