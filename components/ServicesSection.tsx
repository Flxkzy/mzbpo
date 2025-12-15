"use client"

import type React from "react"
import { useState } from "react"
import { BookOpen, Users, FileCheck, Settings, Sparkles } from "lucide-react"

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
}

const services: Service[] = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Bookkeeping & Accounting Outsourcing",
    description: "Comprehensive bookkeeping services with accurate financial records and reporting",
    details: {
      tagline: "Focus on growth. We will handle the numbers.",
      paragraphs: [
        "Our outsourced bookkeeping and accounting services give you accurate, timely, and audit ready financials without the overhead of an in house team.",
        "We work as an extension of your business, managing everything from daily entries and reconciliations to financial reporting and month end closings. Whether you are a startup, scaling company, or multi entity operation, our team adapts to your needs using industry standard tools and custom workflows.",
      ],
      bullets: [
        "Real time reporting",
        "Seamless integration with existing systems",
        "Scalable support from 1 to 1000 plus hours per month",
      ],
      cta: "Get full financial clarity without full time cost.",
    },
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Payroll Processing",
    description: "End to end payroll management with compliance and timely processing.",
    details: {
      tagline: "Accurate, compliant, and stress free payroll every single cycle.",
      paragraphs: [
        "We take the complexity out of payroll by managing everything from salary calculations and tax deductions to payslip generation and compliance filings. Our payroll solutions are tailored to your structure, whether you run a lean team or a large workforce.",
        "You get reliable, confidential payroll support on time, every time.",
      ],
      bullets: [
        "Monthly and biweekly payroll cycles",
        "Customized reports and employee summaries",
        "Secure employee payslip distribution",
        "Integration with your accounting systems",
      ],
      cta: "Let us handle the backend so you can focus on your people.",
    },
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Audit Support & Financial Reporting",
    description: "Expert assistance for audits and comprehensive financial reporting",
    details: {
      tagline: "Ongoing financial clarity built for accuracy, trust, and control.",
      paragraphs: [
        "We help businesses stay audit ready year round with structured monthly internal reviews and clean, compliant financial reporting.",
        "Our team works as an extension of yours, identifying red flags, tightening controls, and supporting you through every stage of the audit cycle.",
      ],
      bullets: [
        "Monthly internal audits to detect errors, risks, and fraud",
        "Full audit support and file preparation",
        "Liaison with external auditors or investors",
        "Financial statements including P and L, balance sheet, and cash flow",
        "IFRS or local GAAP compliant reporting",
        "Actionable recommendations to strengthen controls",
      ],
      cta: "Stay ahead with proactive audits and clear financial visibility.",
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "ERP Implementation & Management",
    description: "Seamless ERP solutions to streamline your business operations and financial processes.",
    details: {
      tagline: "Streamline your operations with the right systems implemented the right way.",
      paragraphs: [
        "We help growing businesses select, implement, and manage ERP systems that align with their workflows, financial structure, and long term goals.",
        "From SAP Business One to Zoho, Odoo, and beyond, we bring both technical and financial expertise to ensure your ERP drives efficiency, not complexity.",
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
  },
]

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-16 px-4 bg-gray-50 font-[var(--font-poppins)]">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl p-6 md:p-12 lg:p-16 shadow-2xl" style={{ backgroundColor: "hsl(232 45% 19%)" }}>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8 md:mb-12">
            <div className="space-y-4 lg:max-w-2xl">
              <div className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: "hsl(158 47% 58%)" }}>
                <Sparkles className="w-4 h-4" />
                <span>Services</span>
              </div>

              {/* Headings: Syne */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white font-[var(--font-syne)]">
                Our Services.
              </h2>

              {/* Body: Poppins */}
              <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed uppercase tracking-wide">
                WE ROAR WITH SUCCESS. DELIVERING THE TRIONN. THROUGH VERSATILE DESIGN, BRANDING AND THE LATEST TECH.
              </p>
            </div>
          </div>

          {/* Tabs: Poppins */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-3 mb-8 md:mb-12">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className="group relative px-4 md:px-6 py-3 md:py-3.5 rounded-2xl font-semibold text-sm md:text-base lg:text-lg transition-all duration-300 hover:scale-105 w-full lg:w-auto font-[var(--font-poppins)]"
                style={{
                  backgroundColor: activeTab === index ? "hsl(158 47% 58%)" : "transparent",
                  color: activeTab === index ? "hsl(232 45% 19%)" : "hsl(158 47% 58%)",
                  border: activeTab === index ? "none" : "2px solid hsl(158 47% 58% / 0.3)",
                }}
              >
                <span className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="flex-shrink-0">{service.icon}</span>
                  <span className="text-left truncate">{service.title}</span>
                </span>
              </button>
            ))}
          </div>

          <div
            className="rounded-3xl p-6 md:p-8 lg:p-12 transition-all duration-500"
            style={{ backgroundColor: "hsl(232 45% 15%)" }}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left content */}
              <div className="space-y-4 md:space-y-6">
                <div className="inline-flex items-center gap-2" style={{ color: "hsl(158 47% 58%)" }}>
                  {services[activeTab].icon}
                </div>

                {/* Heading: Syne */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white font-[var(--font-syne)] leading-tight">
                  {services[activeTab].title}
                </h3>

                {/* Tagline: Poppins */}
                <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed uppercase tracking-wide font-[var(--font-poppins)]">
                  {services[activeTab].details.tagline}
                </p>

                <div className="space-y-4 pt-4">
                  {/* Body paragraphs: Poppins */}
                  {services[activeTab].details.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="text-sm md:text-base text-white/70 leading-relaxed font-[var(--font-poppins)]">
                      {paragraph}
                    </p>
                  ))}

                  {/* Bullets: Poppins */}
                  <ul className="space-y-3 pt-4">
                    {services[activeTab].details.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm md:text-base text-white/80 font-[var(--font-poppins)]"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "hsl(158 47% 58%)" }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA line: Poppins */}
                  <p className="text-sm md:text-base text-white/90 font-semibold pt-4 italic font-[var(--font-poppins)]">
                    {services[activeTab].details.cta}
                  </p>
                </div>
              </div>

              {/* Right image */}
              <div className="relative order-first lg:order-last">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square">
                  <img
                    src={services[activeTab].image || "/placeholder.svg"}
                    alt={services[activeTab].title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: "linear-gradient(135deg, hsl(158 47% 58%) 0%, transparent 100%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
