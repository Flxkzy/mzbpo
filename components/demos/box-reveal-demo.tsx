"use client"

import BoxReveal from "@/components/magicui/box-reveal"

// ============================================
// TYPES
// ============================================

interface Step {
  title: string
  body: string
}

interface BoxRevealDemoProps {
  steps?: Step[]
}

// ============================================
// DEFAULT DATA - GENERAL (ALL SERVICES)
// ============================================

const DEFAULT_STEPS: Step[] = [
  {
    title: "1. Understand",
    body: "We assess your current finance operations, identify pain points, and understand your accounting and compliance requirements.",
  },
  {
    title: "2. Diagnose",
    body: "Our team identifies gaps, inefficiencies, and risks in your financial processes, then recommends the right outsourcing solution.",
  },
  {
    title: "3. Implement",
    body: "We set up accounting processes, internal controls, and reporting systems tailored to your business needs.",
  },
  {
    title: "4. Support",
    body: "Ongoing outsourced finance support to keep your books accurate, compliant, and audit ready year round.",
  },
]

// ============================================
// MAIN COMPONENT
// ============================================

const BoxRevealDemo = ({ steps = DEFAULT_STEPS }: BoxRevealDemoProps) => {
  return (
    <div className="w-full max-w-xl mx-auto px-4 sm:px-6 md:px-0 pt-6 sm:pt-8 space-y-8 text-brand-white overflow-hidden">
      {steps.map((s) => (
        <div key={s.title} className="space-y-2 sm:space-y-3">
          {/* Heading - Syne */}
          <BoxReveal boxColor={"#68C3AA"} duration={0.5}>
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-2xl sm:text-3xl leading-tight">
              {s.title}
            </h3>
          </BoxReveal>

          {/* Body - Poppins */}
          <BoxReveal boxColor={"#68C3AA"} duration={0.5}>
            <p className="font-[var(--font-poppins)] text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
              {s.body}
            </p>
          </BoxReveal>
        </div>
      ))}
    </div>
  )
}

export default BoxRevealDemo