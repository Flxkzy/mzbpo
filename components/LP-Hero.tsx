"use client"

import React from "react"
import { motion } from "framer-motion"
import { Star, ArrowRight } from "lucide-react"
import Link from "next/link"

// ============================================
// PROPS INTERFACE
// ============================================

interface HeroSectionProps {
  // Eyebrow / Badge
  eyebrow?: string
  
  // Star rating section
  showStars?: boolean
  starsSubtext?: string
  
  // Main headline (supports JSX for highlighting)
  headline?: React.ReactNode
  
  // Subheadline
  subheadline?: string
  
  // Primary CTA
  primaryCtaText?: string
  primaryCtaLink?: string
  
  // Below CTA text
  ctaSubtext?: string
  
  // VSL Section
  vslTitle?: string
  vslVideoUrl?: string
  showVsl?: boolean
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function HeroSection({
  // Eyebrow defaults
  eyebrow = "From a QCR-Rated Audit Firm | Serving Saudi Businesses Remotely",
  
  // Stars defaults
  showStars = true,
  starsSubtext = "Trusted by growing businesses across Saudi Arabia, UAE and UK",
  
  // Headline default (bookkeeping)
  headline = (
    <>
      Reduce Your Accounting Costs by{" "}
      <span className="text-[rgba(98,198,161,1)]">Up to 50%</span>
      <br className="hidden sm:block" />
      While Staying Compliant with Saudi VAT and IFRS
    </>
  ),
  
  // Subheadline default
  subheadline = "Get clean, reliable financial reports every month without building an expensive in house finance team.",
  
  // Primary CTA defaults
  primaryCtaText = "Schedule A Call",
  primaryCtaLink = "/meeting",
  
  // CTA subtext
  ctaSubtext = "Confidential. No obligation.",
  
  // VSL defaults
  vslTitle = "See How Saudi Companies Handle Accounting Without In House Teams",
  vslVideoUrl = "https://www.youtube.com/embed/MKXORaRiSqo",
  showVsl = true,
}: HeroSectionProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
  }

  return (
    <section className="relative w-full flex flex-col items-center justify-start pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 md:px-6 overflow-hidden text-white">
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Eyebrow */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-3">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[rgba(98,198,161,0.1)] border border-[rgba(98,198,161,0.3)] text-white text-xs sm:text-sm font-sans font-semibold tracking-wide">
            {eyebrow}
          </span>
        </motion.div>

        {/* Stars Section */}
        {showStars && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0.05}
            className="flex flex-col items-center gap-1.5 mb-4"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="font-sans text-xs sm:text-sm text-gray-400">
              {starsSubtext}
            </p>
          </motion.div>
        )}

        {/* Main Headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.1}
          className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] max-w-4xl mx-auto"
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.15}
          className="mt-4 font-sans text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          {subheadline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.2}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <Link href={primaryCtaLink}>
            <button className="group relative inline-flex items-center justify-center font-sans px-8 py-4 text-base sm:text-lg font-semibold text-[#232763] transition-all duration-200 bg-[rgba(98,198,161,1)] hover:bg-[rgba(120,210,175,1)] rounded-full hover:scale-[1.02] focus:outline-none shadow-lg shadow-[rgba(98,198,161,0.25)]">
              {primaryCtaText}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
          <p className="font-sans text-xs text-gray-400">
            {ctaSubtext}
          </p>
        </motion.div>

        {/* VSL Section */}
        {showVsl && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0.25}
            className="mt-8 sm:mt-10 w-full max-w-4xl relative"
          >
            <div className="bg-white rounded-2xl p-2 md:p-3 border-4 border-[rgba(98,198,161,1)] shadow-2xl">
              <div className="text-center mb-3 mt-1 px-2">
                <h3 className="font-[family-name:var(--font-syne)] text-sm sm:text-lg md:text-xl font-semibold text-[#232763]">
                  {vslTitle}
                </h3>
              </div>

              <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-inner">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={vslVideoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}