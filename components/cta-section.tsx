"use client"

import Link from "next/link"

export function CTASection() {
  const trackLead = () => {
    window.fbq?.("track", "Lead", {
      content_name: "CTA Section - Schedule a conversation",
    })
  }

  return (
    <section
      className="relative w-full overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "hsl(232 45% 19%)" }}
    >
      {/* Subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-15 mix-blend-overlay">
        <svg className="h-full w-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        {/* Heading – Syne */}
        <h2 className="mt-6 font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-brand-white leading-tight">
          Get clarity, control, and a finance system
          <span className="block mt-2 text-brand-teal">that scales with your business.</span>
        </h2>

        {/* Body – Poppins */}
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/80 font-[var(--font-poppins)]">
          Whether you are growing fast, managing complexity, or preparing for audits, we help you replace fragmented
          accounting with clean data, strong controls, and reliable reporting.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/meeting"
            onClick={trackLead}
            className="
              inline-flex items-center justify-center
              rounded-full px-8 py-4
              text-sm font-semibold tracking-wide
              font-[var(--font-poppins)]
              bg-brand-teal text-brand-navy
              transition-all duration-300
              hover:bg-brand-teal/90 hover:-translate-y-0.5
            "
          >
            Schedule a conversation
          </Link>
        </div>
      </div>
    </section>
  )
}
