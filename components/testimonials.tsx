"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  quote: string
  stat?: string
  statDescription?: string
  rating?: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Operations Director",
    role: "Operations Director",
    company: "Mid-sized Services Company",
    image: "/images/1.avif",
    quote:
      "Replacing our in house accounting team with MZBPO immediately reduced our overhead while improving accuracy and reporting. We finally have numbers we trust.",
    stat: "50%",
    statDescription: "Reduction in finance team cost",
    rating: 5,
  },
  {
    id: 2,
    name: "Finance Manager",
    role: "Finance Manager",
    company: "Multi-entity Business",
    image: "/images/2.avif",
    quote:
      "Our monthly close used to drag on for weeks. With MZBPO, reporting is structured, timely, and reliable. Management decisions are no longer delayed.",
    stat: "2X",
    statDescription: "Faster month end close",
    rating: 5,
  },
  {
    id: 3,
    name: "Founder",
    role: "Founder",
    company: "Growing Ecommerce Brand",
    image: "/images/3.avif",
    quote:
      "We discovered payment discrepancies that would have gone unnoticed without their internal checks. That alone justified the engagement.",
    rating: 5,
  },
  {
    id: 4,
    name: "CEO",
    role: "CEO",
    company: "Transaction-heavy Business",
    image: "/images/4.avif",
    quote:
      "MZBPO did not just post entries. They understood our workflows, payment gateways, and bank movements. Everything finally reconciles.",
    rating: 5,
  },
]

// Star Rating Component
function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isAutoPlaying])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false)
    setActiveIndex(index)
  }

  return (
    <section className="py-20 md:py-28 px-4 bg-white font-[var(--font-poppins)]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Quote className="w-5 h-5 text-brand-teal" />
            <span className="text-sm font-semibold tracking-wide text-brand-teal uppercase">
              Client Testimonials
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            What Our Clients Say About Our Outsourced Accounting Services
          </h2>

          <p className="text-brand-navy/60 text-base md:text-lg max-w-2xl mx-auto">
            Real results from businesses that trust MZBPO for their finance and accounting outsourcing needs
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Left: Featured Testimonial */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="bg-brand-navy rounded-3xl p-8 md:p-10 relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-teal/10 rounded-full blur-2xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Stat if available */}
                  {testimonials[activeIndex].stat && (
                    <div className="mb-6">
                      <div className="flex items-baseline gap-3">
                        <span className="font-[family-name:var(--font-syne)] text-5xl md:text-6xl font-bold text-brand-teal">
                          {testimonials[activeIndex].stat}
                        </span>
                        <span className="text-white/70 text-sm md:text-base">
                          {testimonials[activeIndex].statDescription}
                        </span>
                      </div>
                      <div className="w-16 h-1 bg-brand-teal/30 rounded-full mt-4" />
                    </div>
                  )}

                  {/* Quote */}
                  <div className="mb-8">
                    <Quote className="w-10 h-10 text-brand-teal/30 mb-4" />
                    <p className="text-white text-lg md:text-xl leading-relaxed">
                      {testimonials[activeIndex].quote}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-brand-teal/30">
                        <img
                          src={testimonials[activeIndex].image}
                          alt={testimonials[activeIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-brand-teal rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-brand-navy" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonials[activeIndex].name}</p>
                      <p className="text-white/60 text-sm">{testimonials[activeIndex].company}</p>
                      <div className="mt-1">
                        <StarRating rating={testimonials[activeIndex].rating} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute -bottom-6 right-6 flex gap-2">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-brand-navy" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-brand-teal shadow-lg flex items-center justify-center hover:bg-brand-teal/90 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-brand-navy" />
              </button>
            </div>
          </div>

          {/* Right: Testimonial Cards Stack */}
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                onClick={() => handleDotClick(index)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-brand-teal/10 border-2 border-brand-teal"
                    : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ${
                    activeIndex === index ? "ring-brand-teal" : "ring-gray-200"
                  }`}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className={`font-semibold text-sm ${
                        activeIndex === index ? "text-brand-navy" : "text-brand-navy/80"
                      }`}>
                        {testimonial.name}
                      </p>
                      {testimonial.stat && (
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          activeIndex === index 
                            ? "bg-brand-teal text-brand-navy" 
                            : "bg-gray-200 text-gray-600"
                        }`}>
                          {testimonial.stat}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-brand-navy/50 mb-2">{testimonial.company}</p>
                    <p className={`text-sm line-clamp-2 ${
                      activeIndex === index ? "text-brand-navy/80" : "text-brand-navy/60"
                    }`}>
                      "{testimonial.quote.slice(0, 80)}..."
                    </p>
                  </div>

                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? "w-8 bg-brand-teal" 
                  : "w-2 bg-brand-navy/20 hover:bg-brand-navy/40"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>



      </div>
    </section>
  )
}