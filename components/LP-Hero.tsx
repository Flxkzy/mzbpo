"use client"

import React from "react"
import { motion } from "framer-motion"
import { Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    }),
  }

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start pt-12 pb-24 px-4 md:px-6 overflow-hidden text-white">
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">

        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-4">
          <span className="inline-block py-1 px-3 rounded-full bg-[rgba(98,198,161,0.1)] border border-[rgba(98,198,161,0.3)] text-white text-xs sm:text-sm font-sans font-semibold tracking-wide">
            From a QCR-Rated Firm and Independent Member of BKR International
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.1}
          className="flex gap-1 mb-6"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
          ))}
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.2}
          className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight max-w-4xl mx-auto"
        >
          Reduce Your Accounting Costs By <span className="text-[rgba(98,198,161,1)]">Up To 50%</span> While Getting Clear, Reliable Financial Reports Every Month
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.3}
          className="mt-6 font-sans text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          So you always know your numbers and make smarter decisions with confidence.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.4}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <Link href="/meeting" className="w-full sm:w-auto">
            <button className="group relative inline-flex items-center justify-center w-full sm:w-auto font-sans px-5 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-base md:px-8 md:py-4 md:text-lg font-semibold text-[#232763] transition-all duration-200 bg-[rgba(98,198,161,0.9)] hover:bg-[rgba(98,198,161,1)] rounded-full md:rounded-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgba(98,198,161,1)] focus:ring-offset-transparent">
              Book Your Free Finance Systems Health Check
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.5}
          className="mt-16 w-full max-w-4xl relative"
        >
          <div className="bg-white rounded-2xl p-2 md:p-4 border-4 border-[rgba(98,198,161,1)] shadow-2xl">
            <div className="text-center mb-4 mt-2">
              <h3 className="font-[family-name:var(--font-syne)] text-xl sm:text-2xl md:text-3xl font-semibold text-[#232763] underline decoration-[rgba(98,198,161,1)] decoration-4 underline-offset-4">
                See How The Process Works:
              </h3>
            </div>

            <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-inner">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/MKXORaRiSqo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
