"use client"
import { useState } from "react"
import { Card } from "@/components/ui/card"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  quote: string
  stat?: string
  statDescription?: string
  companyLogo?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Operations Director",
    role: "Operations Director",
    company: "Mid-sized Services Company",
    image: "/images/1.avif",
    quote:
      "Replacing our in-house accounting team with MZBPO immediately reduced our overhead while improving accuracy and reporting. We finally have numbers we trust.",
    stat: "50%",
    statDescription: "Reduction in finance team cost",
  },
  {
    id: 2,
    name: "Finance Manager",
    role: "Finance Manager",
    company: "Multi-entity Business",
    image: "/images/2.avif",
    quote:
      "Our monthly close used to drag on for weeks. With MZBPO, reporting is structured, timely, and reliable. Management decisions are no longer delayed.",
    stat: "2X",
    statDescription: "Faster month-end close",
  },
  {
    id: 3,
    name: "Founder",
    role: "Founder",
    company: "Growing Ecommerce Brand",
    image: "/images/3.avif",
    quote:
      "We discovered payment discrepancies that would have gone unnoticed without their internal checks. That alone justified the engagement.",
  },
  {
    id: 4,
    name: "CEO",
    role: "CEO",
    company: "Transaction-heavy Business",
    image: "/images/4.avif",
    quote:
      "MZBPO didn’t just post entries. They understood our workflows, payment gateways, and bank movements. Everything finally reconciles.",
  },
]

export function Testimonials() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 font-[var(--font-poppins)]" style={{ backgroundColor: "hsl(0 0% 96%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 mb-2 font-[var(--font-poppins)]">
            <span className="text-lg font-semibold" style={{ color: "hsl(158 47% 58%)" }}>
              [
            </span>
            <span className="text-sm font-medium tracking-wide" style={{ color: "hsl(232 45% 19%)" }}>
              Testimonials
            </span>
            <span className="text-lg font-semibold" style={{ color: "hsl(158 47% 58%)" }}>
              ]
            </span>
          </div>

          {/* Heading: Syne required syntax (smaller than your main hero style) */}
          <h2 className="mt-6 font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
            Results that stand up to scrutiny
          </h2>

          <p
            className="text-base max-w-2xl mx-auto font-[var(--font-poppins)]"
            style={{ color: "hsl(232 45% 19% / 0.7)" }}
          >
            Read real outcomes from businesses that needed clarity, control, and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {/* Left Large Card - metric led */}
          <Card
            className="group relative overflow-hidden border-0 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: "hsl(232 45% 19%)" }}
            onMouseEnter={() => setHoveredCard(testimonials[0].id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-8 space-y-6 min-h-[400px] flex flex-col justify-between font-[var(--font-poppins)]">
              <div className="space-y-3">
                <div className="text-6xl font-bold text-white font-[family-name:var(--font-syne)]">
                  {testimonials[0].stat}
                </div>
                <p className="text-base font-medium text-white/80">{testimonials[0].statDescription}</p>
              </div>

              <div className="space-y-4">
                <div className="text-3xl leading-none" style={{ color: "hsl(158 47% 58%)" }}>
                  "
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(158 47% 58%)" }}>
                  {testimonials[0].quote}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20">
                    <img
                      src={testimonials[0].image || "/placeholder.svg"}
                      alt={testimonials[0].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-white">{testimonials[0].name}</p>
                    <p className="text-xs text-white/60">{testimonials[0].company}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Right Column - Stacked Cards */}
          <div className="flex flex-col gap-4">
            {/* Top Right - metric card */}
            <Card
              className="group relative overflow-hidden border-0 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: "hsl(232 45% 19%)" }}
              onMouseEnter={() => setHoveredCard(testimonials[1].id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="p-6 space-y-4 font-[var(--font-poppins)]">
                <div className="flex items-baseline gap-3">
                  <div className="text-4xl font-bold text-white font-[family-name:var(--font-syne)]">
                    {testimonials[1].stat}
                  </div>
                  <p className="text-sm font-medium text-white/80">{testimonials[1].statDescription}</p>
                </div>

                <div className="space-y-3">
                  <div className="text-2xl leading-none" style={{ color: "hsl(158 47% 58%)" }}>
                    "
                  </div>
                  <p className="text-sm leading-relaxed text-white/90">{testimonials[1].quote}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/20">
                      <img
                        src={testimonials[1].image || "/placeholder.svg"}
                        alt={testimonials[1].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-white">{testimonials[1].name}</p>
                      <p className="text-xs text-white/60">{testimonials[1].company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Bottom Right - Two smaller cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Teal card */}
              <Card
                className="group relative overflow-hidden border-0 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: "hsl(158 47% 58%)" }}
                onMouseEnter={() => setHoveredCard(testimonials[2].id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="p-5 space-y-3 min-h-[220px] flex flex-col justify-between font-[var(--font-poppins)]">
                  <div className="space-y-2">
                    <div className="text-2xl leading-none text-white">"</div>
                    <p className="text-sm leading-relaxed text-white">{testimonials[2].quote}</p>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/30">
                      <img
                        src={testimonials[2].image || "/placeholder.svg"}
                        alt={testimonials[2].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-xs text-white">{testimonials[2].name}</p>
                      <p className="text-xs text-white/80">{testimonials[2].company}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Navy card */}
              <Card
                className="group relative overflow-hidden border-0 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: "hsl(232 45% 19%)" }}
                onMouseEnter={() => setHoveredCard(testimonials[3].id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="p-5 space-y-3 min-h-[220px] flex flex-col justify-between font-[var(--font-poppins)]">
                  <div className="space-y-2">
                    <div className="text-2xl leading-none" style={{ color: "hsl(158 47% 58%)" }}>
                      "
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "hsl(158 47% 58%)" }}>
                      {testimonials[3].quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/20">
                      <img
                        src={testimonials[3].image || "/placeholder.svg"}
                        alt={testimonials[3].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-xs text-white">{testimonials[3].name}</p>
                      <p className="text-xs text-white/60">{testimonials[3].company}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
