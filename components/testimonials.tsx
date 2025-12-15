"use client"
import { useState } from "react"
import { Star, ChevronRight } from "lucide-react"
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
    name: "David Callahan",
    role: "Marketing Director",
    company: "Spotify",
    image: "/professional-man.jpg",
    quote:
      "We needed a modern, high-converting website, and the Bravio team delivered beyond expectations. Their design and SEO expertise helped us increase conversion rate by 800% in just two weeks. Highly recommend!",
    stat: "8X",
    statDescription: "Increase in conversion rate",
    companyLogo: "spotify",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "Google",
    image: "/professional-woman-diverse.png",
    quote:
      "From branding to website design, every detail was meticulously handled. The team's expertise helped us launch faster, and the results have been phenomenal!",
    stat: "2X",
    statDescription: "Increase in lead generation",
    companyLogo: "google",
  },
  {
    id: 3,
    name: "Tom Becker",
    role: "Founder",
    company: "PulseCare",
    image: "/startup-founder.png",
    quote:
      "Their animation work took our product videos to the next level. The team truly understands user experience and storytelling.",
  },
  {
    id: 4,
    name: "Sarah Michel",
    role: "Marketing Director",
    company: "Google",
    image: "/business-executive.png",
    quote:
      "The team nailed our MVP design with a fast turnaround and incredible attention to detail. The final product felt polished and professional.",
  },
]

export function Testimonials() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "hsl(0 0% 96%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 mb-2">
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
          <h2 className="text-4xl md:text-5xl font-bold font-sans leading-tight" style={{ color: "hsl(232 45% 19%)" }}>
            Results that speaks volume
          </h2>
          <p className="text-2xl font-medium" style={{ color: "hsl(158 47% 58%)" }}>
            Read success stories
          </p>
          <p className="text-base max-w-xl mx-auto" style={{ color: "hsl(232 45% 19% / 0.7)" }}>
            Find out how our happy clients are raving about us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {/* Left Large Card - 8X stat */}
          <Card
            className="group relative overflow-hidden border-0 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: "hsl(232 45% 19%)" }}
            onMouseEnter={() => setHoveredCard(testimonials[0].id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-8 space-y-6 min-h-[400px] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-6xl font-bold font-sans text-white">{testimonials[0].stat}</div>
                <p className="text-base font-medium text-white/80">{testimonials[0].statDescription}</p>
              </div>

              <div className="space-y-4">
                <div className="text-3xl font-serif leading-none" style={{ color: "hsl(158 47% 58%)" }}>
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
                    <p className="text-xs text-white/60">
                      {testimonials[0].role}, {testimonials[0].company}
                    </p>
                  </div>
                </div>
                {testimonials[0].companyLogo && (
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <span className="text-xs font-bold" style={{ color: "hsl(232 45% 19%)" }}>
                      S
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* Right Column - Stacked Cards */}
          <div className="flex flex-col gap-4">
            {/* Top Right - 2X stat card */}
            <Card
              className="group relative overflow-hidden border-0 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: "hsl(232 45% 19%)" }}
              onMouseEnter={() => setHoveredCard(testimonials[1].id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="p-6 space-y-4">
                <div className="flex items-baseline gap-3">
                  <div className="text-4xl font-bold font-sans text-white">{testimonials[1].stat}</div>
                  <p className="text-sm font-medium text-white/80">{testimonials[1].statDescription}</p>
                </div>

                <div className="space-y-3">
                  <div className="text-2xl font-serif leading-none" style={{ color: "hsl(158 47% 58%)" }}>
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
                      <p className="text-xs text-white/60">
                        {testimonials[1].role}, {testimonials[1].company}
                      </p>
                    </div>
                  </div>
                  {testimonials[1].companyLogo && (
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <span className="text-xs font-bold" style={{ color: "hsl(232 45% 19%)" }}>
                        G
                      </span>
                    </div>
                  )}
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
                <div className="p-5 space-y-3 min-h-[220px] flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-2xl font-serif leading-none text-white">"</div>
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
                      <p className="text-xs text-white/80">
                        {testimonials[2].role}, {testimonials[2].company}
                      </p>
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
                <div className="p-5 space-y-3 min-h-[220px] flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-2xl font-serif leading-none" style={{ color: "hsl(158 47% 58%)" }}>
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
                      <p className="text-xs text-white/60">
                        {testimonials[3].role}, {testimonials[3].company}
                      </p>
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
