"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, Users, FileCheck, Settings, Sparkles, Briefcase, Shield, ClipboardCheck, Search, FileText, ArrowRight, Check } from "lucide-react"

// ============================================
// TYPES
// ============================================

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  details: {
    tagline: string
    paragraphs: string[]
    bullets: string[]
    cta: string
  }
  image: string
  href?: string
}

interface ServicesSectionProps {
  badgeText?: string
  headline?: React.ReactNode
  subheadline?: string
  services?: Service[]
}

// ============================================
// DEFAULT DATA
// ============================================

const DEFAULT_SERVICES: Service[] = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Bookkeeping and Accounting Outsourcing",
    description: "Professional bookkeeping services with accurate financial records and monthly reporting",
    details: {
      tagline: "Focus on growth. We handle the finance operations.",
      paragraphs: [
        "Our outsourced bookkeeping services manage your books end to end with clean data, tight controls, and reliable monthly closes, without the overhead of an in house finance team.",
        "From daily entries and reconciliations to financial reporting and month end close, we operate as a structured finance system that scales with your transaction volume and complexity.",
      ],
      bullets: [
        "Real time, decision ready financial reporting",
        "Seamless integration with your existing accounting systems",
        "Scalable bookkeeping support based on workload, not headcount",
      ],
      cta: "Get full financial clarity without full time cost.",
    },
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    href: "/services/bookkeeping-accounting",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Payroll Processing Services",
    description: "End to end payroll outsourcing with compliance and timely processing",
    details: {
      tagline: "Accurate, compliant payroll delivered on time, every cycle.",
      paragraphs: [
        "Our payroll outsourcing services take the complexity out of payroll by managing everything from salary calculations and tax deductions to payslip generation and compliance filings.",
        "You get reliable, confidential payroll processing on time, every time.",
      ],
      bullets: [
        "Monthly and biweekly payroll processing cycles",
        "Customized payroll reports and employee summaries",
        "Secure employee payslip distribution",
        "Integration with your accounting and HR systems",
      ],
      cta: "Let us handle the payroll backend so you can focus on your people.",
    },
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    href: "/services/payroll-processing",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Internal Audit and Compliance Services",
    description: "Independent internal audit support to ensure accuracy, compliance, and control",
    details: {
      tagline: "Complete confidence in your numbers, controls, and compliance.",
      paragraphs: [
        "Our internal audit services ensure your books are accurate, compliant, and always ready for external audits and regulatory filings.",
        "By reviewing transactions, testing controls, and monitoring processes on an ongoing basis, we help prevent leakages, detect irregularities early, and reduce fraud risk.",
      ],
      bullets: [
        "Regulatory and statutory compliance assurance",
        "External audit ready financial statements",
        "Tax filing ready and reconciled financials",
        "Detection and prevention of leakages and misstatements",
        "Improved accuracy and reliability of financial records",
        "Early identification of control gaps and weaknesses",
      ],
      cta: "Gain full assurance over your books, controls, and compliance.",
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    href: "/services/internal-audit-compliance",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Back Office Support for Accounting Firms",
    description: "Outsourced accounting support to help accounting firms scale without overhead",
    details: {
      tagline: "Reduce payroll costs. Increase margins. Scale without overhead.",
      paragraphs: [
        "Running an accounting firm should not mean absorbing heavy payroll costs every month. In house teams are expensive, rigid, and difficult to scale.",
        "With our outsourced back office support, you get qualified accounting professionals at a fraction of local costs, allowing you to retain more profits while maintaining full control over delivery and quality.",
      ],
      bullets: [
        "Dedicated offshore team aligned to your firm workflows",
        "Significant reduction in monthly payroll and overhead costs",
        "Scalable staffing without long term hiring commitments",
        "Time zone coverage for faster turnaround and continuity",
        "Work reviewed and supervised by qualified senior accountants",
        "Secure processes with strict data confidentiality",
      ],
      cta: "Build a cost efficient back office and protect your margins.",
    },
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop",
    href: "/services/back-office-support",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "ERP Implementation and Management",
    description: "Expert ERP solutions to streamline your business operations and financial processes",
    details: {
      tagline: "Streamline your operations with the right systems implemented the right way.",
      paragraphs: [
        "We help growing businesses select, implement, and manage ERP systems that align with their workflows, financial structure, and long term goals.",
        "From SAP Business One to Zoho, Odoo, and beyond, we bring both technical and financial expertise to ensure your ERP drives efficiency, not complexity.",
        "We ensure your ERP supports clean data, strong controls, and scalable operations instead of adding complexity as you grow.",
      ],
      bullets: [
        "End to end ERP setup and configuration",
        "Data migration and system integration",
        "Staff training and user onboarding",
        "Ongoing system management and support",
        "ERP platforms including SAP B1, SAP B4 HANA, Odoo, Zoho, and NetSuite",
      ],
      cta: "Build a system that grows with your business.",
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    href: "/services/erp-implementation",
  },
]

// ============================================
// SERVICE CARD
// ============================================

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: Service
  index: number
  isVisible: boolean
}) {
  const num = String(index + 1).padStart(2, "0")
  const CardWrapper = service.href ? Link : "div"
  const wrapperProps = service.href ? { href: service.href } : {}

  return (
    <CardWrapper
      {...(wrapperProps as any)}
      className={`group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-brand-teal/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${100 + index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-100">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
          <span className="text-brand-navy text-xs font-bold font-[var(--font-poppins)]">{num}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="w-10 h-10 rounded-xl bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal mb-4">
          {service.icon}
        </div>

        <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors duration-300 leading-tight">
          {service.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed font-[var(--font-poppins)] mb-5">
          {service.description}
        </p>

        <ul className="space-y-2 mb-6 flex-1">
          {service.details.bullets.slice(0, 3).map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 font-[var(--font-poppins)]">
              <Check className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 text-brand-teal text-sm font-semibold font-[var(--font-poppins)] group-hover:gap-3 transition-all duration-300 mt-auto">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </CardWrapper>
  )
}

// ============================================
// MAIN COMPONENT
// ============================================

export function ServicesSection({
  badgeText = "Our Services",
  headline = (
    <>
      Comprehensive Finance and Accounting Outsourcing Solutions
    </>
  ),
  subheadline = "End to end outsourced bookkeeping, internal audit, and payroll services. One trusted partner for your entire back office.",
  services = DEFAULT_SERVICES,
}: ServicesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 px-4 overflow-hidden font-[var(--font-poppins)] bg-white"
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(232 45% 19%) 0.5px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 text-sm font-medium text-brand-teal mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span className="uppercase tracking-wider text-xs font-semibold">{badgeText}</span>
          </div>

          <h2
            className={`font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-5 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {headline}
          </h2>

          <p
            className={`text-gray-500 text-base md:text-lg leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {subheadline}
          </p>
        </div>

        {/* Card grid - top 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Second row - 2 wider cards */}
        {services.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 mt-6 lg:mt-7">
            {services.slice(3).map((service, index) => (
              <ServiceCard
                key={index + 3}
                service={service}
                index={index + 3}
                isVisible={isVisible}
              />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div
          className={`mt-16 md:mt-20 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="text-gray-400 text-sm mb-6">
            Not sure which service fits? Let us help.
          </p>
          <a
            href="/meeting"
            className="group relative inline-flex items-center gap-2.5 bg-brand-teal text-brand-navy font-semibold text-base px-8 py-4 rounded-full overflow-hidden shadow-lg shadow-brand-teal/20 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--brand-teal)/0.3)] hover:scale-[1.03]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <span className="relative">Get a Free Consultation</span>
            <ArrowRight className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

// ============================================
// EXPORT ICON COMPONENTS FOR USE IN PAGES
// ============================================

export { BookOpen, Users, FileCheck, Settings, Sparkles, Briefcase, Shield, ClipboardCheck, Search, FileText }
