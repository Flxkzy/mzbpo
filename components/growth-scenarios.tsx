"use client"

import Image from "next/image"

// ============================================
// TYPES
// ============================================

interface Scenario {
  category: string
  question: string
  image: string
  alt: string
}

interface GrowthScenariosProps {
  // Header
  headline?: React.ReactNode
  subheadline?: string
  
  // Section subheading
  sectionTitle?: string
  
  // Scenarios array
  scenarios?: Scenario[]
  
  // Bottom summary
  summaryText?: string
}

// ============================================
// DEFAULT DATA - BOOKKEEPING
// ============================================

const DEFAULT_SCENARIOS: Scenario[] = [
  {
    category: "Expanding Teams",
    question: "We're growing fast, but cash feels tight. Can we afford to hire without breaking cash flow?",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    alt: "Expanding Teams",
  },
  {
    category: "Securing Capital",
    question: "Investors want clean numbers. Are our books and reports strong enough to raise capital?",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    alt: "Securing Capital",
  },
  {
    category: "Optimizing for Profitability",
    question: "Revenue is up 40% but profits aren't. Where are we bleeding money?",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    alt: "Profitability",
  },
  {
    category: "Planning Your Exit",
    question: "We want to sell in two years. Are our books clean enough for due diligence?",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
    alt: "Exit Strategy",
  },
]

// ============================================
// MAIN COMPONENT
// ============================================

export function GrowthScenarios({
  // Header defaults (bookkeeping)
  headline = (
    <>
      Whether you're handling hundreds of transactions or thousands,
      <span style={{ color: "hsl(158 47% 58%)" }}> we support scalable businesses.</span>
    </>
  ),
  subheadline = "As volume increases, clarity shouldn't disappear. We structure your finance so growth doesn't break reporting, controls, or visibility.",
  
  // Section title
  sectionTitle = "Growth scenarios we support",
  
  // Scenarios
  scenarios = DEFAULT_SCENARIOS,
  
  // Summary
  summaryText = "These questions can't be answered with basic bookkeeping. They require clean data, strong controls, and a finance system that holds up as you grow. That's exactly what we build for our clients.",
}: GrowthScenariosProps) {
  return (
    <section className="w-full py-12 md:py-24 px-4 md:px-8 font-[var(--font-poppins)]">
      <div className="container mx-auto max-w-6xl">
        {/* Main Header */}
        <div className="max-w-4xl mb-12 md:mb-20">
          <h2 className="mt-6 font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl font-bold text-brand-white">
            {headline}
          </h2>

          <p
            className="mt-4 text-base md:text-lg leading-relaxed max-w-2xl font-[var(--font-poppins)]"
            style={{ color: "hsl(0 0% 90%)" }}
          >
            {subheadline}
          </p>
        </div>

        {/* Subheading */}
        <h3
          className="mt-6 font-[family-name:var(--font-syne)] text-xl md:text-2xl font-bold mb-8 md:mb-12 text-white border-b pb-4"
          style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
        >
          {sectionTitle}
        </h3>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-16 md:gap-y-24">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="flex flex-col justify-between h-full pl-4 md:pl-6 pb-4 group"
              style={{ borderLeft: `2px solid hsl(158 47% 58%)` }}
            >
              <div>
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-3 font-[var(--font-poppins)]"
                  style={{ color: "hsl(158 47% 58%)" }}
                >
                  {scenario.category}
                </div>

                <p className="text-lg md:text-xl font-medium leading-snug mb-6 md:mb-8 text-white font-[var(--font-poppins)]">
                  "{scenario.question}"
                </p>
              </div>

              {/* Image */}
              <div className="relative mt-4 self-end w-[85%] md:w-[75%] aspect-[4/3]">
                <div
                  className="absolute -top-3 -left-3 w-full h-full pointer-events-none opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:-translate-y-1"
                  style={{
                    borderTopLeftRadius: "80px",
                    borderTop: `12px solid hsl(158 47% 58%)`,
                    borderLeft: `12px solid hsl(158 47% 58%)`,
                  }}
                />

                <div
                  className="relative w-full h-full overflow-hidden shadow-2xl"
                  style={{
                    borderTopLeftRadius: "70px",
                    backgroundColor: "hsl(232 45% 19%)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Image
                    src={scenario.image || "/placeholder.svg"}
                    alt={scenario.alt}
                    fill
                    className="object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom summary */}
        <div
          className="mt-16 md:mt-24 max-w-3xl mx-auto text-center p-6 md:p-8 rounded-xl backdrop-blur-sm font-[var(--font-poppins)]"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <p className="text-base md:text-lg font-medium text-white leading-relaxed">
            {summaryText}
          </p>

          <div className="mt-6 w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "hsl(158 47% 58%)" }} />
        </div>
      </div>
    </section>
  )
}