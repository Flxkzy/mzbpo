"use client"

import Link from "next/link"

// ============================================
// TYPES
// ============================================

interface CTASectionProps {
  // Headline (supports JSX for highlighting)
  headline?: React.ReactNode
  highlightedText?: string
  
  // Body text
  bodyText?: string
  
  // CTA button
  ctaText?: string
  ctaLink?: string
  
  // Facebook tracking
  trackingContentName?: string
}

// ============================================
// MAIN COMPONENT
// ============================================

export function CTASection({
  // Headline defaults (bookkeeping)
  headline = "Get clarity, control, and a finance system",
  highlightedText = "that scales with your business.",
  
  // Body text
  bodyText = "Whether you are growing fast, managing complexity, or preparing for audits, we help you replace fragmented accounting with clean data, strong controls, and reliable reporting.",
  
  // CTA defaults
  ctaText = "Schedule a conversation",
  ctaLink = "/meeting",
  
  // Tracking
  trackingContentName = "CTA Section - Schedule a conversation",
}: CTASectionProps) {
  
  const trackLead = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: trackingContentName,
      })
    }
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
          {headline}
          <span className="block mt-2 text-brand-teal">{highlightedText}</span>
        </h2>

        {/* Body – Poppins */}
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/80 font-[var(--font-poppins)]">
          {bodyText}
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href={ctaLink}
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
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  )
}