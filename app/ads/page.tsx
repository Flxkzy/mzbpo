"use client"

import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Star,
  CheckCircle2,
  BarChart2,
  Briefcase,
  Lightbulb,
  Shield,
  Clock,
  Eye,
  BookOpen,
  Handshake,
  ChevronDown,
  HelpCircle,
  Award,
  Globe,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"

// ============================================
// SHARED: SECTION LABEL
// ============================================

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 font-[var(--font-poppins)] bg-brand-teal/10 border border-brand-teal/30 text-brand-teal">
      {text}
    </span>
  )
}

// ============================================
// SHARED: CTA BUTTON
// ============================================

function CTAButton({ text = "Schedule A Free Consultation", large = false }: { text?: string; large?: boolean }) {
  return (
    <Link href="/meeting">
      <motion.button
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className={`group inline-flex items-center gap-2 rounded-full font-semibold text-brand-navy bg-brand-teal hover:bg-brand-teal/90 transition-all hover:scale-[1.02] shadow-lg shadow-brand-teal/20 font-[var(--font-poppins)] ${
          large ? "px-12 py-5 text-lg" : "px-8 py-4 text-base"
        }`}
      >
        {text}
        <ArrowRight className={`transition-transform group-hover:translate-x-1 ${large ? "w-5 h-5" : "w-4 h-4"}`} />
      </motion.button>
    </Link>
  )
}

// ============================================
// SECTION 1 — HERO
// ============================================

function Hero() {
  const fade = {
    hidden: { opacity: 0, y: 24 },
    visible: (d = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay: d, ease: "easeOut" },
    }),
  }

  return (
    <section className="relative pt-16 pb-24 px-4 text-center overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-teal/[0.05] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

        {/* Label */}
        <motion.div initial="hidden" animate="visible" variants={fade}>
          <SectionLabel text="Exclusively For Business Owners" />
        </motion.div>

        {/* Stars */}
        <motion.div
          initial="hidden" animate="visible" variants={fade} custom={0.05}
          className="flex flex-col items-center gap-2 mb-4"
        >
          <div className="flex gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="font-[var(--font-poppins)] text-sm text-gray-400">Trusted by businesses all over the world</p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden" animate="visible" variants={fade} custom={0.1}
          className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15]"
        >
          Get A Complete{" "}
          <span className="text-brand-teal">CFO &amp; Accounting Team</span>
          <br className="hidden sm:block" />
          {" "}For{" "}
          <span className="text-brand-teal underline decoration-brand-teal/50 decoration-4 underline-offset-4">
            One Flat Monthly Fee
          </span>
          <br className="hidden sm:block" />
          <span className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
            {" "}To Help Your Business Make Smarter Decisions, Scale Faster, &amp; Save Wasted Revenue
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial="hidden" animate="visible" variants={fade} custom={0.16}
          className="mt-8 font-[var(--font-poppins)] text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-300"
        >
          Stop Managing Your Finances Alone. Plug A Dedicated CFO, Senior Accountants,
          And Bookkeepers Directly Into Your Business. Bookkeeping, Financial Reports,
          Cash Flow Forecasting, Payroll, And Audit-Ready Financials.{" "}
          <span className="text-white font-semibold">All Done For You. Every Single Month.</span>
        </motion.p>

        {/* CTA */}
        <motion.div initial="hidden" animate="visible" variants={fade} custom={0.22} className="mt-10">
          <CTAButton />
          <p className="mt-3 font-[var(--font-poppins)] text-sm text-gray-400">
            No obligation. Confidential. Setup in 48 hours.
          </p>
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          initial="hidden" animate="visible" variants={fade} custom={0.28}
          className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 font-[var(--font-poppins)] text-sm text-gray-400"
        >
          {[
            "Trusted by Businesses All Over the World",
            "BKR International Partner",
            "One Flat Monthly Fee",
            "Setup in 48 Hours",
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 2 — WHAT YOU GET (Feature Grid)
// ============================================

const FEATURES = [
  {
    icon: BarChart2,
    title: "You'll Always Know Your Numbers",
    body: "Every month you get a complete CFO-level financial report: P&L, balance sheet, and cash flow, in plain language. No more guessing where your business stands.",
  },
  {
    icon: Briefcase,
    title: "Your Dedicated CFO & Accounting Team. One Flat Monthly Fee.",
    body: "A senior CFO, accountants, and bookkeepers all personally responsible for your finances. One team. One invoice. No hidden costs.",
  },
  {
    icon: Lightbulb,
    title: "We Actually Help You Make Decisions",
    body: "Your CFO doesn't just report numbers. They tell you what they mean. Can you afford to hire? Should you invest? What does your cash position look like in 90 days? We answer all of it.",
  },
  {
    icon: Shield,
    title: "Audit-Ready Financials. Always.",
    body: "Your books are maintained to IFRS standards year-round. When auditors show up, internal or external, you are ready. No scrambling. No panic.",
  },
  {
    icon: Clock,
    title: "Fast Responses When You Need Them",
    body: "Your dedicated team is always accessible. Ask any financial question and get a real answer from a senior team member fast. No more chasing. No more waiting weeks for a reply.",
  },
  {
    icon: Eye,
    title: "Full Visibility Over Your Cash Flow",
    body: "A rolling cash flow forecast updated every month so you always know how much you can spend, whether you can afford to hire, and exactly how much runway you have.",
  },
]

function WhatYouGet() {
  return (
    <section className="py-20 md:py-28 px-4 font-[var(--font-poppins)]" style={{ backgroundColor: "hsl(0 0% 96%)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel text="What Does MZBPO Do For You?" />
          <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
            Here&apos;s What You Get With MZBPO
          </h2>
          <p className="mt-4 text-base md:text-lg text-brand-navy/60 max-w-2xl mx-auto">
            A complete finance function plugged directly into your business. Here is exactly what you get.
          </p>
        </div>

        {/* 2×3 grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-5 group-hover:bg-brand-teal group-hover:text-brand-navy transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-3 leading-snug">
                  {f.title}
                </h3>
                <p className="text-sm text-brand-navy/60 leading-relaxed">{f.body}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="inline-block rounded-2xl bg-brand-navy p-8 md:p-10 text-center max-w-3xl">
            <h3 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-white mb-3">
              One Team. One Invoice. All Done For You.
            </h3>
            <p className="text-white/70 mb-6 font-[var(--font-poppins)]">
              Senior-level expertise backed by BKR International standards at a fraction of the cost of hiring in-house.
            </p>
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 3 — THE OFFER (Service Breakdown)
// ============================================

const SERVICES = [
  {
    icon: BookOpen,
    title: "Complete Accounting Team",
    items: [
      "Monthly Bookkeeping",
      "Monthly Financial Reports",
      "Payroll Processing",
      "Audit-Ready Financials",
      "Clean, accurate records every month",
    ],
  },
  {
    icon: Briefcase,
    title: "Dedicated CFO Services",
    items: [
      "Dedicated CFO assigned to your business",
      "Monthly CFO Report in plain language",
      "Cash Flow Forecasting",
      "Financial strategy and decision support",
      "Full visibility over your numbers",
    ],
  },
  {
    icon: Handshake,
    title: "BKR International Standards",
    items: [
      "IFRS compliant financials",
      "Senior-level expertise from day one",
      "BKR International partner methodology",
      "Backed by one of the top 5 global accounting associations",
      "Businesses worldwide trust us with their finances",
    ],
  },
]

function TheOffer() {
  return (
    <section className="py-20 md:py-28 px-4 bg-brand-navy">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel text="What Do You Actually Get?" />
          <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Here&apos;s What You&apos;ll Get Access To:
          </h2>
        </div>

        {/* 3-column service cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={i}
                className="rounded-2xl p-8 flex flex-col gap-6 bg-white/[0.04] border border-brand-teal/20 hover:border-brand-teal/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white leading-snug pt-1">
                    {s.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-[var(--font-poppins)] text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Dominant one-liner */}
        <div className="mt-16 text-center">
          <p className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-teal leading-tight">
            All Of It. Done For You.{" "}
            <span className="text-white">One Flat Monthly Fee.</span>
          </p>
        </div>

        <div className="mt-12 text-center">
          <CTAButton />
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
    <section className="py-20 px-4 md:px-6 bg-brand-navy">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <SectionLabel text="Our Credibility" />
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: "hsl(232 45% 19%)" }}>
          {/* Left accent bar */}
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-teal" />

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
                We are the outsourcing arm of Muniff Ziauddin &amp; Co., an independent member of BKR International.
                <br /><br />
                <span className="font-semibold text-brand-teal">
                  BKR International is ranked as the fifth largest global accounting association
                </span>
                , underscoring the scale, credibility, and global standards that back our work.
                <br /><br />
                Our clients benefit from internationally aligned processes, strong governance,
                and professional standards trusted by leading firms worldwide.
              </p>

              {/* Credential chips */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { icon: Shield, label: "QCR-Rated Audit Firm" },
                  { icon: Globe, label: "Global Standards" },
                  { icon: Award, label: "5th Largest Accounting Association" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                  >
                    <Icon className="w-4 h-4 text-brand-teal" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 4 — TESTIMONIALS
// ============================================

const TESTIMONIALS = [
  {
    name: "Operations Director",
    title: "Operations Director",
    company: "Mid-sized Services Company",
    image: "/images/1.avif",
    quote:
      "Replacing our in-house accounting team with MZBPO immediately reduced our overhead while improving accuracy and reporting. We finally have numbers we trust.",
    stat: "50%",
    statLabel: "Reduction in finance team cost",
  },
  {
    name: "Finance Manager",
    title: "Finance Manager",
    company: "Multi-entity Business",
    image: "/images/2.avif",
    quote:
      "Our monthly close used to drag on for weeks. With MZBPO, reporting is structured, timely, and reliable. Management decisions are no longer delayed.",
    stat: "2X",
    statLabel: "Faster month-end close",
  },
  {
    name: "Founder",
    title: "Founder",
    company: "Growing Ecommerce Brand",
    image: "/images/3.avif",
    quote:
      "We discovered payment discrepancies that would have gone unnoticed without their internal checks. That alone justified the engagement.",
  },
  {
    name: "CEO",
    title: "CEO",
    company: "Transaction-heavy Business",
    image: "/images/4.avif",
    quote:
      "MZBPO did not just post entries. They understood our workflows, payment gateways, and bank movements. Everything finally reconciles.",
  },
]

function StarRow() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  )
}

function Testimonials() {
  const [active, setActive] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (autoPlay) {
      timerRef.current = setInterval(() => setActive((p) => (p + 1) % TESTIMONIALS.length), 5000)
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [autoPlay])

  const prev = () => { setAutoPlay(false); setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length) }
  const next = () => { setAutoPlay(false); setActive((p) => (p + 1) % TESTIMONIALS.length) }

  return (
    <section className="py-20 md:py-28 px-4 font-[var(--font-poppins)]" style={{ backgroundColor: "hsl(0 0% 96%)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Quote className="w-5 h-5 text-brand-teal" />
            <span className="text-sm font-semibold tracking-wide text-brand-teal uppercase">
              Does It Actually Work?
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Client Results &amp; Testimonials
          </h2>
          <p className="text-brand-navy/60 text-base md:text-lg max-w-2xl mx-auto">
            Real results from businesses that trust MZBPO with their entire finance function.
          </p>
        </div>

        {/* 2-col layout: featured + stack */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">

          {/* Featured testimonial */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="bg-brand-navy rounded-3xl p-8 md:p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-teal/10 rounded-full blur-2xl" />

                <div className="relative z-10">
                  {TESTIMONIALS[active].stat && (
                    <div className="mb-6">
                      <div className="flex items-baseline gap-3">
                        <span className="font-[family-name:var(--font-syne)] text-5xl md:text-6xl font-bold text-brand-teal">
                          {TESTIMONIALS[active].stat}
                        </span>
                        <span className="text-white/70 text-sm md:text-base">
                          {TESTIMONIALS[active].statLabel}
                        </span>
                      </div>
                      <div className="w-16 h-1 bg-brand-teal/30 rounded-full mt-4" />
                    </div>
                  )}

                  <div className="mb-8">
                    <Quote className="w-10 h-10 text-brand-teal/30 mb-4" />
                    <p className="text-white text-lg md:text-xl leading-relaxed">
                      {TESTIMONIALS[active].quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-brand-teal/30">
                        <Image src={TESTIMONIALS[active].image} alt={TESTIMONIALS[active].name} width={56} height={56} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-brand-teal rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-brand-navy" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{TESTIMONIALS[active].name}</p>
                      <p className="text-white/60 text-sm">{TESTIMONIALS[active].company}</p>
                      <div className="mt-1"><StarRow /></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <div className="absolute -bottom-6 right-6 flex gap-2">
              <button onClick={prev} className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100" aria-label="Previous">
                <ChevronLeft className="w-5 h-5 text-brand-navy" />
              </button>
              <button onClick={next} className="w-12 h-12 rounded-full bg-brand-teal shadow-lg flex items-center justify-center hover:bg-brand-teal/90 transition-colors" aria-label="Next">
                <ChevronRight className="w-5 h-5 text-brand-navy" />
              </button>
            </div>
          </div>

          {/* Card stack */}
          <div className="space-y-4">
            {TESTIMONIALS.map((t, i) => (
              <motion.button
                key={i}
                onClick={() => { setAutoPlay(false); setActive(i) }}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 ${
                  active === i
                    ? "bg-brand-teal/10 border-2 border-brand-teal"
                    : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ${active === i ? "ring-brand-teal" : "ring-gray-200"}`}>
                    <Image src={t.image} alt={t.name} width={48} height={48} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className={`font-semibold text-sm ${active === i ? "text-brand-navy" : "text-brand-navy/80"}`}>{t.name}</p>
                      {t.stat && (
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${active === i ? "bg-brand-teal text-brand-navy" : "bg-gray-200 text-gray-600"}`}>
                          {t.stat}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-brand-navy/50 mb-2">{t.company}</p>
                    <p className={`text-sm line-clamp-2 ${active === i ? "text-brand-navy/80" : "text-brand-navy/60"}`}>
                      &ldquo;{t.quote.slice(0, 80)}...&rdquo;
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAutoPlay(false); setActive(i) }}
              className={`h-2 rounded-full transition-all duration-300 ${active === i ? "w-8 bg-brand-teal" : "w-2 bg-brand-navy/20 hover:bg-brand-navy/40"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 5 — FAQ
// ============================================

const FAQS = [
  {
    q: "How is this different from hiring a full-time CFO or accountant?",
    a: "Hiring a full-time CFO in the UAE costs AED 40,000–60,000 per month before visa, benefits, and overhead. With MZBPO you get a dedicated CFO, senior accountants, and a bookkeeping team for a fraction of that cost, with no hiring risk, no visa fees, and no long-term employment commitments.",
  },
  {
    q: "What does the monthly package include?",
    a: "Everything your business finance function needs: monthly bookkeeping, CFO-level financial reports, cash flow forecasting, payroll processing, and audit-ready financials. One team. One flat monthly fee. All done for you.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on the size and complexity of your business. Book a free consultation and we will give you a custom proposal with transparent pricing and no hidden costs.",
  },
  {
    q: "What industries do you work with?",
    a: "We work with growing businesses across all industries: e-commerce, agencies, medical and healthcare, trading companies, service businesses, and multi-entity groups. If you have a business that needs a proper finance function, we can help.",
  },
  {
    q: "Do I need to fire my current accountant or bookkeeper?",
    a: "Not necessarily. We will assess what you currently have and what gaps exist. In most cases we replace the entire setup because we cover everything they were doing, and significantly more.",
  },
  {
    q: "What if I am planning to scale my business in the next year?",
    a: "That is exactly when you need us most. Scaling without a proper finance team is how businesses make expensive mistakes. We build the financial infrastructure that supports your growth: clean books, proper reporting, cash flow visibility, and a CFO who helps you make the right decisions.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. We do not lock you into long-term contracts. We earn your business every single month.",
  },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-28 px-4 bg-brand-navy font-[var(--font-poppins)]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-brand-teal" />
            <span className="text-sm font-semibold tracking-wide text-brand-teal uppercase">Got Questions?</span>
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            Everything you need to know about our CFO and accounting outsourcing service.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden transition-all duration-300 border ${
                open === i
                  ? "bg-white/[0.06] border-brand-teal/40"
                  : "bg-white/[0.03] border-white/10 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-base md:text-lg text-white">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180 text-brand-teal" : "text-white/40"
                  }`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-[400px]" : "max-h-0"}`}>
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 6 — FINAL CTA
// ============================================

function FinalCTA() {
  return (
    <section className="py-24 px-4 text-center" style={{ backgroundColor: "hsl(0 0% 96%)" }}>
      <div className="max-w-3xl mx-auto">
        <SectionLabel text="Ready to Get Started?" />

        <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight mb-6">
          Stop Running Your Business{" "}
          <span className="text-brand-teal">Without A Real Finance Team.</span>
        </h2>

        <p className="font-[var(--font-poppins)] text-base md:text-lg text-brand-navy/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Businesses all over the world trust MZBPO to run their entire finance function.
          One team. One flat monthly fee. All done for you. Every single month.
        </p>

        {/* Checklist */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 font-[var(--font-poppins)] text-sm text-brand-navy/70">
          {[
            "Setup in 48 hours",
            "Dedicated senior CFO team",
            "No contracts",
            "BKR International backed",
            "IFRS compliant financials",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>

        <CTAButton text="Book Your Free Consultation" large />

        <p className="mt-4 font-[var(--font-poppins)] text-sm text-brand-navy/40">
          No contracts. No obligation. No pressure.
        </p>
      </div>
    </section>
  )
}

// ============================================
// PAGE EXPORT
// ============================================

export default function AdsLandingPage() {
  return (
    <main className="relative min-h-screen bg-brand-navy text-white overflow-x-hidden">
      <link rel="preconnect" href="https://assets.calendly.com" />
      <link rel="preconnect" href="https://calendly.com" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

      {/* Background grid — same as main site */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 pt-20 sm:pt-24 lg:pt-28">
        <Navbar />
        <Hero />
        <WhatYouGet />
        <TheOffer />
        <BKRSection />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  )
}
