"use client"

import BoxReveal from "@/components/magicui/box-reveal"

const steps = [
  {
    title: "1. Understand",
    body: "Review your existing bookkeeping setup.",
  },
  {
    title: "2. Organize",
    body: "Clean and structure your books.",
  },
  {
    title: "3. Maintain",
    body: "Keep everything accurate, reconciled, and current.",
  },
]

const BoxRevealDemo = () => {
  return (
    <div className="w-full max-w-xl mx-auto px-4 sm:px-6 md:px-0 pt-6 sm:pt-8 space-y-8 text-brand-white overflow-hidden">
      {steps.map((s) => (
        <div key={s.title} className="space-y-2 sm:space-y-3">
          {/* Heading – Syne */}
          <BoxReveal boxColor={"#68C3AA"} duration={0.5}>
            <p className="font-[family-name:var(--font-syne)] font-bold text-2xl sm:text-3xl leading-tight">
              {s.title}
            </p>
          </BoxReveal>

          {/* Body – Poppins */}
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
