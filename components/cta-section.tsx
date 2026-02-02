"use client"

import { ArrowRight, Mail } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

interface CTASectionProps {
  headline?: string
  highlightedText?: string
  bodyText?: string
  ctaText?: string
  ctaLink?: string
  trackingContentName?: string
}

export function CTASection({
  headline = "Get Started with Professional Accounting Outsourcing",
  highlightedText = "",
  bodyText = "Whether you need outsourced bookkeeping, internal audit services, payroll processing, or comprehensive finance support, we deliver senior level expertise without the in house cost.",
  ctaText = "Schedule a Free Consultation",
  ctaLink = "/meeting",
  trackingContentName = "CTA Section - Free Consultation",
}: CTASectionProps) {
  const trackLead = (contentName: string) => {
    window.fbq?.("track", "Lead", {
      content_name: contentName,
    })
  }

  return (
    <section className="py-20 md:py-28 px-4" style={{ backgroundColor: "hsl(232 45% 19%)" }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline - H2 for SEO */}
        <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          {headline}
          {highlightedText && (
            <>
              <br />
              <span className="text-brand-teal">{highlightedText}</span>
            </>
          )}
        </h2>

        {/* Body */}
        <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 font-[var(--font-poppins)] leading-relaxed">
          {bodyText}
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={ctaLink}
            onClick={() => trackLead(trackingContentName)}
            className="group relative inline-flex items-center gap-2.5 bg-brand-teal text-brand-navy font-sans font-semibold text-base sm:text-lg px-8 py-4 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--brand-teal)/0.35)] hover:scale-[1.02]"
          >
            {/* Shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <span className="relative">{ctaText}</span>
            <ArrowRight className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* WhatsApp Link */}
{/* WhatsApp Link */}
<a
  href="https://wa.me/923235298686"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-white/60 hover:text-brand-teal transition-colors font-[var(--font-poppins)] text-sm"
>
  <FaWhatsapp className="w-4 h-4" />
  <span>Or WhatsApp us directly</span>
</a>
        </div>

        {/* Trust text */}
        <p className="mt-6 text-sm text-white/40 font-[var(--font-poppins)]">
          No obligation. Completely confidential.
        </p>
      </div>
    </section>
  )
}