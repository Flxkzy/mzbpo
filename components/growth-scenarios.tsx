"use client"

import Image from "next/image"

const scenarios = [
  {
    category: "Expanding Teams",
    question: "We keep running out of cash. How do I know if we can afford three more hires?",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    alt: "Expanding Teams",
  },
  {
    category: "Securing Capital",
    question: "Investors want financial projections. How do I model different growth scenarios?",
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
    question: "We want to sell in two years. What financial foundation do we need to build now?",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
    alt: "Exit Strategy",
  },
]

export function GrowthScenarios() {
  return (
    <section className="w-full py-12 md:py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Main Header Section */}
        <div className="max-w-4xl mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6 text-white">
            Whether you're scaling from 2 to 20 people or preparing for your exit—
            <span style={{ color: "hsl(158 47% 58%)" }}> we work for growing businesses.</span>
          </h2>
          <p
            className="text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl font-light"
            style={{ color: "hsl(0 0% 90%)" }}
          >
            Your ambition to build something significant matters more than your current size. We work with growth-minded
            businesses at every stage.
          </p>
        </div>

        <h3
          className="text-xl md:text-2xl font-bold mb-8 md:mb-12 text-white border-b pb-4"
          style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
        >
          Growth scenarios we support:
        </h3>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-16 md:gap-y-24">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="flex flex-col justify-between h-full pl-4 md:pl-6 pb-4 group"
              style={{ borderLeft: `2px solid hsl(158 47% 58%)` }}
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "hsl(158 47% 58%)" }}>
                  {scenario.category}
                </div>
                <p className="text-lg md:text-xl font-medium leading-snug mb-6 md:mb-8 text-white">
                  "{scenario.question}"
                </p>
              </div>

              {/* Image Area */}
              <div className="relative mt-4 self-end w-[85%] md:w-[75%] aspect-[4/3]">
                {/* Curved Arc Decoration */}
                <div
                  className="absolute -top-3 -left-3 w-full h-full pointer-events-none opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:-translate-y-1"
                  style={{
                    borderTopLeftRadius: "80px",
                    borderTop: `12px solid hsl(158 47% 58%)`,
                    borderLeft: `12px solid hsl(158 47% 58%)`,
                    zIndex: 0,
                  }}
                />

                {/* Image Container */}
                <div
                  className="relative w-full h-full overflow-hidden shadow-2xl"
                  style={{
                    borderTopLeftRadius: "70px",
                    backgroundColor: "hsl(232 45% 19%)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    zIndex: 10,
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

        {/* Bottom Summary Section */}
        <div
          className="mt-16 md:mt-24 max-w-3xl mx-auto text-center p-6 md:p-8 rounded-xl backdrop-blur-sm"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <p className="text-base md:text-lg lg:text-xl font-medium text-white leading-relaxed">
            These complex questions require expertise that the average bookkeeping firm can't provide. We've helped
            companies navigate everything from raising capital to valuations to international expansion.
          </p>
          {/* Decorative underline */}
          <div className="mt-6 w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "hsl(158 47% 58%)" }} />
        </div>
      </div>
    </section>
  )
}
