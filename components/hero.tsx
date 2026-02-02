// components/Hero.tsx
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const trackLead = (contentName: string) => {
    window.fbq?.("track", "Lead", {
      content_name: contentName,
    })
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
        {/* LEFT CONTENT */}
        <div
          className={`flex-1 max-w-3xl transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main headline - H1 for SEO */}
          <h1
            className={`font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-tight mb-6 transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="block text-brand-white">Outsourced Finance,</span>
            <span className="block mt-1">
              <span className="relative inline-block">
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, hsl(var(--brand-teal)) 0%, #8DDBC8 50%, hsl(var(--brand-teal)) 100%)",
                    backgroundSize: "200% 200%",
                    animation: "gradient-shift 4s ease infinite",
                  }}
                >
                  Accounting & Audit
                </span>
                {/* Animated underline */}
                <svg
                  className="absolute -bottom-1 left-0 w-full h-3"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C40 3 160 3 198 9"
                    stroke="url(#teal-gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{
                      strokeDasharray: 200,
                      strokeDashoffset: isLoaded ? 0 : 200,
                      transition: "stroke-dashoffset 1.2s ease-out 0.6s",
                    }}
                  />
                  <defs>
                    <linearGradient id="teal-gradient" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="hsl(158 47% 58%)" />
                      <stop offset="0.5" stopColor="hsl(158 47% 68%)" />
                      <stop offset="1" stopColor="hsl(158 47% 58%)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </span>
            <span className="block text-brand-white/90 mt-1">Services for Growing Businesses</span>
          </h1>

          {/* Description - using Poppins */}
          <p
            className={`font-sans text-base sm:text-lg text-brand-white/70 leading-relaxed mb-8 max-w-xl transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Professional bookkeeping, internal audit, and payroll outsourcing that scales with your business.{" "}
            <span className="text-brand-white font-medium">Senior level expertise</span> from a BKR International partner,{" "}
            <span className="text-brand-teal font-medium">without building an in house team.</span>
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Primary CTA */}
            <a
              href="/meeting"
              onClick={() => trackLead("Hero CTA - Get a Free Consultation")}
              className="group relative inline-flex items-center gap-2.5 bg-brand-teal text-brand-navy font-sans font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--brand-teal)/0.35)] hover:scale-[1.02]"
            >
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <span className="relative">Get a Free Consultation</span>
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

            {/* Secondary link */}
            <a
              href="#services"
              onClick={() => {
                window.fbq?.("trackCustom", "ServicesAnchorClick", { placement: "Hero" })
              }}
              className="group inline-flex items-center gap-1 font-sans text-xs sm:text-sm font-semibold uppercase tracking-wide text-brand-teal hover:text-brand-teal/80 transition-colors duration-300"
            >
              <span className="relative border-b border-brand-teal pb-0.5 group-hover:border-brand-teal/80">
                Explore Our Services
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL - IMAGE */}
        <div
          className={`flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0 transition-all duration-1000 delay-300 ease-out ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            {/* Image with bounce animation */}
            <div className="relative" style={{ animation: "bounce-gentle 3s ease-in-out infinite" }}>
              <Image
                src="/images/hero.avif"
                alt="Outsourced accounting and finance services illustration"
                width={800}
                height={700}
                className="w-full h-auto rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-white/30 font-sans">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-brand-white/20 flex justify-center pt-1.5">
          <div
            className="w-1 h-2 bg-brand-teal rounded-full"
            style={{ animation: "scroll-bounce 2s ease-in-out infinite" }}
          />
        </div>
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes scroll-bounce {
          0%,
          100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(8px);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  )
}