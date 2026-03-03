"use client"

import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Star,
  CheckCircle2,
  Quote,
  BookOpen,
  Calculator,
  FileSpreadsheet,
  PieChart,
  TrendingUp,
  Users,
  ChevronDown,
  HelpCircle,
  Shield,
  Award,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

// ============================================
// LP STICKY HEADER
// ============================================

function LPHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d1240]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Image
          src="/logo/mzbp.png"
          alt="MZBPO"
          width={140}
          height={48}
          className="h-9 sm:h-10 w-auto object-contain"
          priority
        />
        <Link href="/meeting">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-[rgba(98,198,161,1)] text-[#232763] font-semibold rounded-full text-sm hover:bg-[rgba(120,210,175,1)] transition-colors font-[var(--font-poppins)]">
            Schedule a Call <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </header>
  )
}

// ============================================
// HERO SECTION
// ============================================

function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
  }

  return (
    <section className="relative pt-28 sm:pt-32 pb-20 px-4 text-center overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[rgba(98,198,161,0.06)] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Eyebrow Badge */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <span className="inline-block py-2 px-5 rounded-full bg-[rgba(98,198,161,0.1)] border border-[rgba(98,198,161,0.3)] text-white text-xs sm:text-sm font-semibold tracking-wide font-[var(--font-poppins)]">
            Exclusively For Businesses Overpaying For Accounting
          </span>
        </motion.div>

        {/* Stars */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.05}
          className="flex flex-col items-center gap-2 mt-6 mb-2"
        >
          <div className="flex gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="font-[var(--font-poppins)] text-sm sm:text-base text-gray-400">
            Trusted by 300+ businesses worldwide
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.1}
          className="mt-6 font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] max-w-4xl mx-auto"
        >
          Get{" "}
          <span className="text-[rgba(98,198,161,1)]">
            Professional Bookkeeping, Monthly Reporting, and Audit-Ready Financials
          </span>{" "}
          For Your Business — So Every Dollar Is Accounted For and You Never Scramble at Month-End Again
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.15}
          className="mt-8 font-[var(--font-poppins)] text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Stop overpaying local firms or dealing with constant staff turnover. Get dedicated
          bookkeeping professionals from senior-level experts —{" "}
          <span className="text-[rgba(98,198,161,1)] font-semibold">
            backed by BKR International, the world&apos;s 5th largest accounting association
          </span>{" "}
          — at a significantly more cost-efficient delivery model.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.2}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <Link href="/meeting">
            <motion.button
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="group relative inline-flex items-center justify-center font-[var(--font-poppins)] px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold text-[#232763] bg-[rgba(98,198,161,1)] hover:bg-[rgba(120,210,175,1)] rounded-full hover:scale-[1.02] transition-all duration-200 focus:outline-none shadow-lg shadow-[rgba(98,198,161,0.25)]"
            >
              Schedule a Free Strategy Call
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
          <p className="font-[var(--font-poppins)] text-sm text-gray-400">
            No obligation. Confidential. Setup in 48 hours.
          </p>
        </motion.div>

        {/* VSL Video */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.25}
          className="mt-14 w-full max-w-4xl"
        >
          <div className="bg-white rounded-2xl p-3 md:p-4 border-4 border-[rgba(98,198,161,1)] shadow-2xl">
            <div className="text-center mb-4 mt-2 px-2">
              <h3 className="font-[family-name:var(--font-syne)] text-base sm:text-xl md:text-2xl font-semibold text-[#232763]">
                See How Smart Businesses Handle Their Books Without The Overhead
              </h3>
            </div>
            <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-inner">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/MKXORaRiSqo"
                title="MZBPO — Outsourced Bookkeeping for Growing Businesses"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        {/* Trust badges below VSL */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.3}
          className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 font-[var(--font-poppins)] text-sm text-gray-400"
        >
          {[
            "300+ Businesses Served",
            "92% Satisfaction Rate",
            "Setup in 48 Hours",
            "BKR International Member",
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[rgba(98,198,161,1)] flex-shrink-0" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// CLIENT LOGOS
// ============================================

const LOGOS = [
  { name: "Dunkin", src: "/logo/d.png" },
  { name: "KFC", src: "/logo/k.png" },
  { name: "Khaadi", src: "/logo/kh.png" },
  { name: "WWF", src: "/logo/wwf.png" },
  { name: "Red Crescent", src: "/logo/r.png" },
  { name: "Unilever", src: "/logo/uni.png" },
  { name: "Penny Appeal", src: "/logo/penny.png" },
  { name: "FAW", src: "/logo/faw.png" },
]

function ClientLogos() {
  return (
    <section className="py-12 bg-white/5 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-500 mb-8 font-[var(--font-poppins)]">
          Companies we&apos;ve worked with
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {LOGOS.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={120}
              height={60}
              className="h-10 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity grayscale invert"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// WHAT YOU GET
// ============================================

const DELIVERABLES = [
  {
    icon: BookOpen,
    title: "Daily Transaction Recording",
    description: "Every transaction recorded accurately, categorized correctly, and posted on time.",
    includes: [
      "Accounts payable and receivable management",
      "Expense categorization and coding",
      "Revenue recognition and tracking",
      "Journal entries and adjustments",
    ],
  },
  {
    icon: Calculator,
    title: "Bank Reconciliations",
    description: "Your bank accounts reconciled regularly so nothing slips through the cracks.",
    includes: [
      "Daily or weekly bank reconciliations",
      "Credit card statement matching",
      "Discrepancy identification and resolution",
      "Cash flow tracking",
    ],
  },
  {
    icon: FileSpreadsheet,
    title: "Monthly Financial Statements",
    description: "Clean, accurate reports delivered on schedule so you can make decisions with confidence.",
    includes: [
      "Profit and loss statement",
      "Balance sheet preparation",
      "Cash flow statement",
      "Custom management reports",
    ],
  },
  {
    icon: PieChart,
    title: "Month-End Close",
    description: "Complete month-end process handled end to end, delivered by the 5th every month.",
    includes: [
      "Accruals and prepayments",
      "Depreciation calculations",
      "Account reconciliations",
      "Final review and adjustments",
    ],
  },
  {
    icon: TrendingUp,
    title: "Financial Analysis",
    description: "Insights beyond the numbers so you understand what is actually happening in your business.",
    includes: [
      "Variance analysis and commentary",
      "Budget vs actual reporting",
      "Key metrics and KPI tracking",
      "Trend identification",
    ],
  },
  {
    icon: Users,
    title: "Dedicated Team Support",
    description: "A team that knows your business, your systems, and your preferences.",
    includes: [
      "Assigned senior accountant",
      "Consistent team members",
      "Direct communication channel",
      "Regular check-ins and updates",
    ],
  },
]

function WhatYouGet() {
  return (
    <section className="py-20 md:py-28 px-4 font-[var(--font-poppins)]" style={{ backgroundColor: "hsl(0 0% 96%)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#232763]/10 text-[#232763] text-xs font-semibold uppercase tracking-wider mb-4">
            Here&apos;s What You Get With MZBPO
          </span>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#232763] leading-tight">
            Everything You Need for
            <span className="block text-[rgba(98,198,161,1)]">Professional Bookkeeping</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#232763]/60 max-w-2xl mx-auto">
            We become your dedicated finance back office. Here is exactly what you get.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DELIVERABLES.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-[rgba(98,198,161,0.1)] flex items-center justify-center text-[rgba(98,198,161,1)] mb-5 group-hover:bg-[rgba(98,198,161,1)] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-[#232763] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#232763]/60 mb-5 leading-relaxed">{item.description}</p>
                <ul className="space-y-2">
                  {item.includes.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#232763]/70">
                      <CheckCircle2 className="w-4 h-4 text-[rgba(98,198,161,1)] flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA box */}
        <div className="mt-12 rounded-2xl p-8 md:p-10 text-center bg-[#232763]">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-white mb-4">
              A Full Finance Team at a Fraction of the Cost
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              You get dedicated bookkeeping professionals backed by a QCR-rated audit firm and BKR
              International standards. Same quality as Big Four, 50% less cost, setup in 48 hours.
            </p>
            <Link href="/meeting">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[rgba(98,198,161,1)] text-[#232763] font-semibold transition-all hover:bg-[rgba(120,210,175,1)]">
                See What You Would Save <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// BKR SECTION
// ============================================

function BKRSection() {
  return (
    <section className="py-20 px-4 bg-[#0d1240]">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(98,198,161,0.1)] border border-[rgba(98,198,161,0.3)] text-[rgba(98,198,161,1)] text-xs font-semibold uppercase tracking-wider font-[var(--font-poppins)]">
            <Award className="w-4 h-4" />
            Our Credibility
          </span>
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-[#1a2060] shadow-2xl">
          {/* Left accent bar */}
          <div className="absolute top-0 left-0 w-2 h-full bg-[rgba(98,198,161,1)]" />

          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
            {/* Logo */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-10">
              <Image
                src="/logo/bkrr.png"
                width={400}
                height={200}
                className="w-44 md:w-52 h-auto object-contain"
                alt="BKR International"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-2/3 font-[var(--font-poppins)]">
              <p className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Backed by global standards and proven credibility.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                We are the outsourcing arm of Muniff Ziauddin & Co., an independent member of BKR
                International.
                <br />
                <br />
                <span className="font-semibold text-[rgba(98,198,161,1)]">
                  BKR International is ranked as the fifth largest global accounting association
                </span>
                , underscoring the scale, credibility, and global standards that back our work.
                <br />
                <br />
                Our clients benefit from internationally aligned processes, strong governance, and
                professional standards trusted by leading firms worldwide.
              </p>

              {/* Credential chips */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { icon: Shield, label: "QCR-Rated Audit Firm" },
                  { icon: Globe, label: "Global Standards" },
                  { icon: Award, label: "5th Largest Accounting Association" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                  >
                    <Icon className="w-4 h-4 text-[rgba(98,198,161,1)]" />
                    {label}
                  </div>
                ))}
              </div>

              {/* CTA inside BKR section */}
              <div className="mt-8">
                <Link href="/meeting">
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[rgba(98,198,161,1)] text-[#232763] font-semibold text-sm transition-all hover:bg-[rgba(120,210,175,1)] font-[var(--font-poppins)]">
                    Schedule a Call <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// TESTIMONIALS
// ============================================

const TESTIMONIALS = [
  {
    id: 1,
    name: "Operations Director",
    company: "Mid-sized Services Company",
    image: "/images/1.avif",
    quote:
      "Replacing our in-house accounting team with MZBPO immediately reduced our overhead while improving accuracy and reporting. We finally have numbers we trust.",
    stat: "50%",
    statDescription: "Reduction in finance team cost",
    rating: 5,
  },
  {
    id: 2,
    name: "Finance Manager",
    company: "Multi-entity Business",
    image: "/images/2.avif",
    quote:
      "Our monthly close used to drag on for weeks. With MZBPO, reporting is structured, timely, and reliable. Management decisions are no longer delayed.",
    stat: "2X",
    statDescription: "Faster month-end close",
    rating: 5,
  },
  {
    id: 3,
    name: "Founder",
    company: "Growing Ecommerce Brand",
    image: "/images/3.avif",
    quote:
      "We discovered payment discrepancies that would have gone unnoticed without their internal checks. That alone justified the engagement.",
    rating: 5,
  },
  {
    id: 4,
    name: "CEO",
    company: "Transaction-heavy Business",
    image: "/images/4.avif",
    quote:
      "MZBPO did not just post entries. They understood our workflows, payment gateways, and bank movements. Everything finally reconciles.",
    rating: 5,
  },
]

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

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
      }, 5000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isAutoPlaying])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  return (
    <section className="py-20 md:py-28 px-4 bg-white font-[var(--font-poppins)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Quote className="w-5 h-5 text-[rgba(98,198,161,1)]" />
            <span className="text-sm font-semibold tracking-wide text-[rgba(98,198,161,1)] uppercase">
              Client Interviews &amp; Testimonials
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#232763] mb-4">
            Real Results From Businesses That Trust MZBPO
          </h2>
          <p className="text-[#232763]/60 text-base md:text-lg max-w-2xl mx-auto">
            Hear directly from finance leaders and founders who made the switch to outsourced bookkeeping.
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
                className="bg-[#232763] rounded-3xl p-8 md:p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(98,198,161,0.05)] rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[rgba(98,198,161,0.1)] rounded-full blur-2xl" />

                <div className="relative z-10">
                  {TESTIMONIALS[activeIndex].stat && (
                    <div className="mb-6">
                      <div className="flex items-baseline gap-3">
                        <span className="font-[family-name:var(--font-syne)] text-5xl md:text-6xl font-bold text-[rgba(98,198,161,1)]">
                          {TESTIMONIALS[activeIndex].stat}
                        </span>
                        <span className="text-white/70 text-sm md:text-base">
                          {TESTIMONIALS[activeIndex].statDescription}
                        </span>
                      </div>
                      <div className="w-16 h-1 bg-[rgba(98,198,161,0.3)] rounded-full mt-4" />
                    </div>
                  )}

                  <div className="mb-8">
                    <Quote className="w-10 h-10 text-[rgba(98,198,161,0.3)] mb-4" />
                    <p className="text-white text-lg md:text-xl leading-relaxed">
                      {TESTIMONIALS[activeIndex].quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[rgba(98,198,161,0.3)]">
                        <Image
                          src={TESTIMONIALS[activeIndex].image}
                          alt={TESTIMONIALS[activeIndex].name}
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[rgba(98,198,161,1)] rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#232763]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{TESTIMONIALS[activeIndex].name}</p>
                      <p className="text-white/60 text-sm">{TESTIMONIALS[activeIndex].company}</p>
                      <div className="mt-1">
                        <StarRating rating={TESTIMONIALS[activeIndex].rating} />
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
                <ChevronLeft className="w-5 h-5 text-[#232763]" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-[rgba(98,198,161,1)] shadow-lg flex items-center justify-center hover:bg-[rgba(120,210,175,1)] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-[#232763]" />
              </button>
            </div>
          </div>

          {/* Right: Testimonial Cards */}
          <div className="space-y-4">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setActiveIndex(index)
                }}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[rgba(98,198,161,0.1)] border-2 border-[rgba(98,198,161,1)]"
                    : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ${
                      activeIndex === index ? "ring-[rgba(98,198,161,1)]" : "ring-gray-200"
                    }`}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p
                        className={`font-semibold text-sm ${
                          activeIndex === index ? "text-[#232763]" : "text-[#232763]/80"
                        }`}
                      >
                        {testimonial.name}
                      </p>
                      {testimonial.stat && (
                        <span
                          className={`text-xs font-bold px-2 py-1 rounded-full ${
                            activeIndex === index
                              ? "bg-[rgba(98,198,161,1)] text-[#232763]"
                              : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {testimonial.stat}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#232763]/50 mb-2">{testimonial.company}</p>
                    <p
                      className={`text-sm line-clamp-2 ${
                        activeIndex === index ? "text-[#232763]/80" : "text-[#232763]/60"
                      }`}
                    >
                      &ldquo;{testimonial.quote.slice(0, 80)}...&rdquo;
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false)
                setActiveIndex(index)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-[rgba(98,198,161,1)]"
                  : "w-2 bg-[#232763]/20 hover:bg-[#232763]/40"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// FAQ
// ============================================

const FAQS = [
  {
    question: "How is this different from hiring a local bookkeeping firm?",
    answer:
      "Local firms charge premium rates, often $8,000 to $15,000 a month, and you typically get junior staff doing the actual work. With MZBPO, you get senior-level accountants from a QCR-rated audit firm at about 50% less cost. Same accuracy, same standards, better value. Plus, we are backed by BKR International, so you get global methodology applied to your books.",
  },
  {
    question: "What about hiring an in-house bookkeeper instead?",
    answer:
      "In-house means salaries, benefits, training costs, and the constant risk of turnover. When your bookkeeper quits, you start over. With MZBPO, you get a dedicated team — not a single point of failure. No hiring headaches, no training overhead, and continuity even if one team member moves on. Most clients find it costs significantly less than a single full-time hire.",
  },
  {
    question: "How fast can you get started?",
    answer:
      "We can have a dedicated bookkeeping team working on your books within 48 hours. We will review your current setup, understand your systems and workflows, and start processing transactions right away. No lengthy onboarding, no months of ramp-up time.",
  },
  {
    question: "What accounting software do you work with?",
    answer:
      "We work with all major platforms including QuickBooks, Xero, Zoho Books, Odoo, SAP Business One, NetSuite, and more. If you are using spreadsheets or need to migrate to a proper system, we can help with that too. We adapt to your tools, not the other way around.",
  },
  {
    question: "How do you handle confidentiality and data security?",
    answer:
      "We take security seriously. All team members sign NDAs, we use encrypted systems for data transfer, and access is strictly controlled. As part of a QCR-rated audit firm, we follow the same confidentiality protocols used for audit clients. Your financial data is handled with the same care as our largest enterprise clients.",
  },
  {
    question: "Will we have a dedicated team or get passed around?",
    answer:
      "You get a dedicated team assigned to your account. The same people work on your books every month, so they understand your business, your vendors, your patterns. No explaining things repeatedly to new faces. Your team is supervised by senior accountants who review all work before it reaches you.",
  },
  {
    question: "What reports will we receive and how often?",
    answer:
      "At minimum, you get monthly financial statements including profit and loss, balance sheet, and cash flow. We can also provide weekly transaction summaries, aged receivables and payables, custom management reports, and any other reporting your business needs. Reports are delivered by the 5th of each month for the prior month.",
  },
  {
    question: "Can you help us get audit-ready?",
    answer:
      "Absolutely. Clean, well-organized books are the foundation of audit readiness. We maintain proper documentation, ensure transactions are properly categorized, and keep reconciliations current. When your external auditors arrive, everything they need is already in order. Many clients find their audit process becomes significantly faster and cheaper after working with us.",
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-28 px-4 bg-white font-[var(--font-poppins)]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-[rgba(98,198,161,1)]" />
            <span className="text-sm font-semibold tracking-wide text-[rgba(98,198,161,1)] uppercase">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#232763] leading-tight">
            Everything You Need to Know
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#232763]/60 max-w-xl mx-auto">
            Common questions about our outsourced bookkeeping and accounting services.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 border ${
                openIndex === index
                  ? "bg-gray-50 border-[rgba(98,198,161,0.3)]"
                  : "bg-gray-50/50 border-gray-200 hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-base md:text-lg text-[#232763]">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? "text-[rgba(98,198,161,1)] rotate-180" : "text-[#232763]/40"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-[#232763]/70 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// FINAL CTA SECTION
// ============================================

function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-[#232763]">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[rgba(98,198,161,0.15)] border border-[rgba(98,198,161,0.3)] text-[rgba(98,198,161,1)] text-xs font-semibold uppercase tracking-wider mb-6 font-[var(--font-poppins)]">
          Ready to Get Started?
        </span>

        <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Stop Working With Accountants Who{" "}
          <span className="text-[rgba(98,198,161,1)]">Don&apos;t Understand Your Business</span>
        </h2>

        <p className="font-[var(--font-poppins)] text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Get a dedicated team of senior-level bookkeeping professionals — backed by BKR International —
          working on your books within 48 hours. No contracts. No overhead. Just clean financials you can
          actually rely on.
        </p>

        {/* Checklist */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 font-[var(--font-poppins)] text-sm text-white/80">
          {[
            "Setup in 48 hours",
            "Dedicated senior team",
            "50% less than local firms",
            "BKR International backed",
            "Month-end close by the 5th",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[rgba(98,198,161,1)] flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>

        <Link href="/meeting">
          <motion.button
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="group inline-flex items-center gap-2 px-12 py-5 bg-[rgba(98,198,161,1)] hover:bg-[rgba(120,210,175,1)] text-[#232763] font-semibold text-lg rounded-full transition-all hover:scale-[1.02] shadow-lg shadow-[rgba(98,198,161,0.25)] font-[var(--font-poppins)]"
          >
            Schedule Your Free Strategy Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>

        <p className="mt-4 font-[var(--font-poppins)] text-sm text-white/40">
          Confidential. No obligation. No pressure.
        </p>
      </div>
    </section>
  )
}

// ============================================
// MINIMAL LP FOOTER
// ============================================

function LPFooter() {
  return (
    <footer className="bg-[#0d1240] border-t border-white/10 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <Image
            src="/logo/mzbp.png"
            alt="MZBPO"
            width={130}
            height={44}
            className="h-9 w-auto object-contain"
          />
          <div className="h-6 w-px bg-white/20" />
          <Image
            src="/logo/bkr.png"
            alt="BKR International"
            width={100}
            height={40}
            className="h-6 w-auto object-contain opacity-70"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm font-[var(--font-poppins)] text-white/40">
          <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">
            Privacy Policy
          </Link>
          <span className="hidden sm:block">·</span>
          <a href="mailto:operations@mzbpo.com" className="hover:text-white/70 transition-colors">
            operations@mzbpo.com
          </a>
          <span className="hidden sm:block">·</span>
          <span>© 2026 MZBPO. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// PAGE EXPORT
// ============================================

export default function MZBPOLandingPage() {
  return (
    <main className="relative min-h-screen bg-[#0d1240] text-white overflow-x-hidden">
      <link rel="preconnect" href="https://assets.calendly.com" />
      <link rel="preconnect" href="https://calendly.com" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10">
        <LPHeader />
        <Hero />
        <ClientLogos />
        <WhatYouGet />
        <BKRSection />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <LPFooter />
      </div>
    </main>
  )
}
