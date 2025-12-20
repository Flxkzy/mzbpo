"use client"

import { useMemo, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calculator, PieChart, TrendingUp } from "lucide-react"

type VslSectionProps = {
  videoId?: string
  ctaHref?: string
}

export default function VslSection({
  videoId = "dQw4w9WgXcQ",
  ctaHref = "/meeting",
}: VslSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Trigger the entrance animation for the button after mount
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const embedSrc = useMemo(() => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
  }, [videoId])

  // Reusable CTA Component based on your snippet
  const CtaButton = () => (
    <div
      className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700 delay-400 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Primary CTA */}
      <a
        href={ctaHref}
        className="group relative inline-flex items-center gap-2.5 bg-brand-teal text-brand-navy font-sans font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--brand-teal)/0.35)] hover:scale-[1.02]"
      >
        {/* Shine effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        <span className="relative">Schedule my free consultation</span>
        <svg
          className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  )

  return (
    <section className="w-full py-10 lg:py-12 bg-brand-navy">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Copy + Desktop CTA */}
          <div className="flex flex-col gap-4">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-white"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="text-brand-teal italic">Professional</span>{" "}
              Bookkeeping That Gives You Control
            </h2>

            <div className="space-y-4 text-[15px] md:text-base leading-relaxed text-white/80 font-light">
              <p>
                With a proper bookkeeping system in place, a few clicks show you{" "}
                <span className="text-brand-teal font-medium">
                  exactly where your money is going
                </span>
                , how profitable you really are, and what decisions you can safely
                make using numbers you can actually trust.
              </p>

              <p>
                As businesses grow, transactions increase, costs creep up, and
                financial complexity compounds. Without a{" "}
                <span className="text-brand-teal font-medium">
                  clean backend finance system
                </span>
                , founders end up guessing, reacting late, and making expensive
                mistakes.
              </p>

              <p>
                Accurate bookkeeping costs a fraction of what bad decisions cost.
                The best run companies rely on{" "}
                <span className="text-brand-teal font-medium">
                  timely, structured books
                </span>{" "}
                to drive 100 percent of their decisions, from hiring to pricing to
                expansion.
              </p>

              <p>
                It sounds simple, but our clients see the difference consistently:
                <span className="text-brand-teal font-medium">
                  {" "}
                  clearer numbers, lower finance costs, and confidence in every
                  move.
                </span>
              </p>
            </div>

            {/* DESKTOP CTA: Hidden on mobile, visible on large screens */}
            <div className="pt-4 hidden lg:block">
              <CtaButton />
            </div>
          </div>

          {/* RIGHT COLUMN: Video + Mobile CTA */}
          <div className="relative w-full lg:max-w-[560px] lg:justify-self-end flex flex-col gap-8">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-2xl border border-white/10">
              {!isPlaying ? (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 cursor-pointer group w-full h-full block"
                  aria-label="Play video"
                >
                  <img
                    src="/images/vsl.avif"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors" />

                  {/* --- ANIMATION LAYER --- */}
                  
                  {/* Icon 1: Calculator */}
                  <motion.div 
                    className="absolute top-6 left-6 md:top-10 md:left-10 z-20"
                    animate={{ 
                      y: [0, -12, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm p-2.5 md:p-3 rounded-xl shadow-lg border border-white/20">
                      <Calculator className="w-5 h-5 md:w-6 md:h-6 text-brand-navy" />
                    </div>
                  </motion.div>

                  {/* Icon 2: Pie Chart */}
                  <motion.div 
                    className="absolute top-8 right-8 md:top-12 md:right-12 z-20"
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm p-2.5 md:p-3 rounded-full shadow-lg border border-white/20">
                      <PieChart className="w-5 h-5 md:w-6 md:h-6 text-brand-teal" />
                    </div>
                  </motion.div>

                  {/* Icon 3: Trending Up */}
                  <motion.div 
                    className="absolute bottom-16 left-8 md:bottom-20 md:left-12 z-20 hidden sm:block"
                    animate={{ 
                      y: [0, -8, 0],
                    }}
                    transition={{ 
                      duration: 3.5, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <div className="bg-brand-teal/90 backdrop-blur-sm p-2 md:p-2.5 rounded-lg shadow-lg border border-white/20">
                      <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                  </motion.div>

                  {/* --- END ANIMATION LAYER --- */}

                  <div className="absolute inset-0 flex items-center justify-center z-30">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-teal flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-white ml-1"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                </button>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={embedSrc}
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* MOBILE CTA: Visible on mobile, hidden on large screens. Placed strictly below video. */}
            <div className="flex justify-center lg:hidden w-full">
              <CtaButton />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}