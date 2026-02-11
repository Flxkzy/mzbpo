// app/internal-audit/page.tsx (or pages/internal-audit.tsx)
"use client"

import Navbar from "@/components/Navbar"
import HeroSection from "@/components/LP-Hero"
import ClientShowcase from "@/components/ClientsShowcase"
import { WhatWeDo, AUDIT_CONFIG } from "@/components/Whatwedoaudit"
import { CaseStudiesAudit } from "@/components/demos/Casestudiesaudit"
import { TestimonialsAudit } from "@/components/demos/Testimonialsaudit"
import Footer from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { FAQAudit } from "@/components/Faqaudit"

import Image from "next/image"
import Link from "next/link"
import { Element } from "react-scroll"


// ============================================
// INTERNAL AUDIT PAGE DATA
// ============================================

// Problems/Scenarios for Internal Audit
const INTERNAL_AUDIT_SCENARIOS = [
  {
    category: "The Control Gap",
    question: "Payments go out without proper sign-off. Expenses get approved without verification. We know there are gaps—we just don't know where.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    alt: "Control Gap",
  },
  {
    category: "The Audit Scramble",
    question: "Every time external auditors show up, we're scrambling. Pulling reports at 10pm. Explaining transactions nobody remembers.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    alt: "Audit Scramble",
  },
  {
    category: "The ZATCA Question",
    question: "ZATCA sent a review request. Are we actually compliant? Or have we just been hoping we are?",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    alt: "ZATCA Compliance",
  },
  {
    category: "The Trust Problem",
    question: "I look at our financials and I'm not 100% sure I can trust them. Not because of fraud—just because nobody's checking.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
    alt: "Trust Problem",
  },
]

// Process steps for Internal Audit
const INTERNAL_AUDIT_STEPS = [
  {
    title: "1. Understand",
    body: "Assess your current control environment and identify risk areas.",
  },
  {
    title: "2. Diagnose",
    body: "Conduct a full internal audit—test transactions, review controls, document gaps.",
  },
  {
    title: "3. Implement",
    body: "Fix the gaps and build a testing schedule that keeps you compliant.",
  },
  {
    title: "4. Monitor",
    body: "Ongoing oversight so you're always audit-ready—not just once a year.",
  },
]

// ============================================
// PAGE COMPONENT
// ============================================

export default function InternalAuditPage() {
  return (
    <main className="relative min-h-screen bg-brand-navy text-white overflow-x-hidden">
      {/* Background Grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 pt-20 sm:pt-24 lg:pt-28">
        <Navbar />

        {/* ============================================ */}
        {/* HERO - Internal Audit Version */}
        {/* ============================================ */}
        <section className="mt-6">
          <HeroSection
            eyebrow="Exclusively For Businesses..."
            starsSubtext="Trusted by leading companies across Saudi Arabia, UAE and UK"
            headline={
              <>
                Get <span className="text-[rgba(98,198,161,1)]">Independent Internal Audit, Control Testing, & Compliance Oversight</span> For Your Business, So Every Riyal Is Accounted For and You're Always Ready for External Audits or ZATCA Reviews
              </>
            }
            subheadline="Stop Relying On Your Finance Team To Audit Themselves. Get Independent Oversight From Senior-Level Experts (Backed By BKR International, The World's 5th Largest Accounting Association)"
            primaryCtaText="Schedule A Call"
            primaryCtaLink="/meeting"
            showVsl={false}
          />
        </section>

        {/* ============================================ */}
        {/* SOCIAL PROOF - Internal Audit Version */}
        {/* ============================================ */}
        <ClientShowcase
          logoSectionLabel="Trusted By"
          logoSectionTitle="Companies we've supported"
          badgeText="BKR International Partner"
          headline="Backed by"
          highlightedText="global standards"
          subheadline="Independent internal audit services for growing Saudi companies. Backed by BKR International, the world's 5th largest accounting association."
          stats={[
            { value: 100, suffix: "%", label: "Audit-Ready Rate" },
            { value: 80, suffix: "+", label: "Countries via BKR Network" },
          ]}
          services={[
            { label: "Transaction Reviews" },
            { label: "Control Testing" },
            { label: "ZATCA Compliance" },
            { label: "Independent Reporting" },
          ]}
        />

        {/* ============================================ */}
        {/* WHAT WE DO - Internal Audit Deliverables */}
        {/* ============================================ */}
        <WhatWeDo {...AUDIT_CONFIG} />

        {/* ============================================ */}
        {/* BKR INTERNATIONAL SECTION - More Prominent for Audit */}
        {/* ============================================ */}
        <section id="about" className="py-20 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-navy shadow-2xl">
              {/* Decorative Gradient Bar */}
              <div className="absolute top-0 left-0 w-2 h-full bg-teal"></div>

              <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
                {/* Logo Area */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-start border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-10">
                  <Image
                    src="/logo/bkrr.png"
                    width={400}
                    height={200}
                    className="w-44 md:w-52 h-auto object-contain"
                    alt="BKR International"
                  />
                </div>

                {/* Text Area */}
                <div className="w-full md:w-2/3 font-[var(--font-poppins)]">
                  <p className="mt-6 font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl font-bold text-brand-white mb-4">
                    Backed by Global Standards and Proven Methodology
                  </p>

                  <p className="text-base md:text-lg text-gray-300 font-[var(--font-poppins)] leading-relaxed">
                    As an independent partner of{" "}
                    <span className="font-semibold text-brand-teal">
                      BKR International—the world's 5th largest global accounting association
                    </span>
                    —we bring international audit standards to your Saudi business.
                    <br /><br />
                    This means you get audit methodologies used by firms worldwide, quality standards that meet international benchmarks, and the same caliber of internal audit oversight that large enterprises have—scaled for your needs.
                    <br /><br />
                    You're not getting a freelancer or a small local firm figuring it out as they go. You're getting proven methodology, global standards, and senior-level expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* PROBLEMS/SCENARIOS - Internal Audit Version */}
        {/* ============================================ */}

        {/* ============================================ */}
        {/* CASE STUDIES - Internal Audit Version (New Design) */}
        {/* ============================================ */}
        <section id="case-studies">
          <CaseStudiesAudit />
        </section>

        {/* ============================================ */}
        {/* TESTIMONIALS - Internal Audit Version (New Design) */}
        {/* ============================================ */}
        <section id="testimonials">
          <TestimonialsAudit />
        </section>

        <FAQAudit/>

        {/* ============================================ */}
        {/* FINAL CTA - Internal Audit Version */}
        {/* ============================================ */}
        <CTASection
          headline="Get confidence in your numbers."
          highlightedText="Be ready for any audit."
          bodyText="Whether you're preparing for external audits, ZATCA reviews, or just want to know your controls are working—we help you replace uncertainty with independent oversight and clear reporting."
          ctaText="Schedule a consultation"
          ctaLink="/meeting"
          trackingContentName="CTA Section - Internal Audit Consultation"
        />

        {/* FOOTER */}
        <Footer />
      </div>
    </main>
  )
}