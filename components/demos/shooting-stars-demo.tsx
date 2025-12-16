"use client"

import { useEffect, useRef, useState } from "react"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"
import Image from "next/image"

const features = [
  { icon: "/icons/fast.svg", title: "Fast Onboarding", description: "We get your finance function up and running within days.", num: "01" },
  { icon: "/icons/team.svg", title: "Qualified Team", description: "Work with ICAP qualified accountants and ERP experts.", num: "02" },
  { icon: "/icons/safe.svg", title: "Secure & Compliant", description: "Strict confidentiality and robust security protocols.", num: "03" },
  { icon: "/icons/design.svg", title: "ERP Setup & Accuracy", description: "Clean ledgers, mapped workflows, and proper controls.", num: "04" },
  { icon: "/icons/analytics.svg", title: "Audit Ready. Always.", description: "IFRS compliant and audit prepped from Day 1.", num: "05" },
  { icon: "/icons/money.svg", title: "Guaranteed Cost Savings", description: "Cut up to 50% of finance overhead, no compromise.", num: "06" },
  { icon: "/icons/scalable.svg", title: "Scalable Teams", description: "Start with one resource or scale a full finance team.", num: "07" },
  { icon: "/icons/support.svg", title: "Ongoing Support", description: "Reporting, queries, and escalations handled quickly.", num: "08" },
  { icon: "/icons/flexible.svg", title: "Built Around You", description: "Custom workflows and reports for your industry.", num: "09" },
]

function FeatureCard({ feature, index, isVisible }: { feature: typeof features[0]; index: number; isVisible: boolean }) {
  return (
    <div
      className={`group relative flex flex-col p-8 bg-brand-white rounded-3xl border border-white/10 shadow-lg overflow-hidden
        transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-brand-teal/30
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Background Number */}
      <span className="absolute -bottom-4 -right-2 text-[120px] font-bold leading-none text-brand-navy/[0.04] font-[var(--font-poppins)] select-none pointer-events-none transition-all duration-500 group-hover:text-brand-teal/[0.08] group-hover:scale-110">
        {feature.num}
      </span>

      {/* Corner Glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-teal/20 to-transparent rounded-full transform translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />

      {/* Icon */}
      <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-brand-teal/25 to-brand-teal/5 mb-5 transition-all duration-300 group-hover:scale-110 group-hover:from-brand-teal/35 group-hover:to-brand-teal/15 z-10">
        <div className="absolute inset-0 rounded-2xl border-2 border-brand-teal/0 group-hover:border-brand-teal/40 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700" />
        <Image src={feature.icon} width={28} height={28} alt="" className="w-7 h-7 relative z-10" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-2 text-brand-navy group-hover:text-brand-teal transition-colors duration-300 font-[family-name:var(--font-syne)] z-10">
        {feature.title}
      </h3>
      <p className="text-brand-navy/70 leading-relaxed text-sm font-[var(--font-poppins)] z-10">
        {feature.description}
      </p>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-teal to-brand-teal/50 w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl" />
    </div>
  )
}

export function ShootingStarsAndStarsBackgroundDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="mt-20 py-16 md:py-24 rounded-[40px] bg-brand-navy relative flex flex-col items-center w-full px-6 md:px-8 overflow-hidden font-[var(--font-poppins)]"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-teal/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-teal/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-14">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <svg className="w-4 h-4 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm font-medium text-white/90 tracking-wide uppercase font-[var(--font-poppins)]">
            Why Choose Us
          </span>
        </div>

        {/* Headline (Syne required syntax, slightly reduced) */}
        <h2
          className={`mt-6 font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-brand-white mb-5 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Why Businesses Trust{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-brand-teal to-brand-teal/70 bg-clip-text text-transparent">MZBPO</span>
            <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
              <path
                d="M0 6 Q50 0 100 6"
                stroke="hsl(var(--brand-teal))"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 110,
                  strokeDashoffset: visible ? 0 : 110,
                  transition: "stroke-dashoffset 0.8s ease-out 0.5s",
                }}
              />
            </svg>
          </span>
        </h2>

        {/* Subheadline */}
        <p
          className={`text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto font-[var(--font-poppins)] transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Clear reports. Compliant systems. Massive savings, guaranteed.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10 w-full max-w-7xl mx-auto">
        {features.map((f, i) => (
          <FeatureCard key={i} feature={f} index={i} isVisible={visible} />
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  )
}

export default ShootingStarsAndStarsBackgroundDemo
