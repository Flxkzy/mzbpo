"use client"

import type React from "react"
import { useState } from "react"
import { BookOpen, Users, FileCheck, Settings, Sparkles, Briefcase } from "lucide-react"

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
      tagline: "Focus on growth. We handle the finance operations.",
      paragraphs: [
        "We manage your books end to end with clean data, tight controls, and reliable monthly closes without the overhead of an in-house team.",
        "From daily entries and reconciliations to reporting and month-end close, we operate as a structured finance system that scales with your transaction volume and complexity.",
      ],
      bullets: [
        "Real-time, decision-ready reporting",
        "Seamless integration with your existing systems",
        "Scalable support based on workload, not headcount",
      ],
      cta: "Get full financial clarity without full-time cost.",
    },
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Payroll Processing",
    description: "End to end payroll management with compliance and timely processing.",
    details: {
      tagline: "Accurate, compliant payroll delivered on time, every cycle.",
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
  title: "Internal Audit & Compliance",
  description: "Continuous internal audit support to ensure accuracy, compliance, and control",
  details: {
    tagline: "Complete confidence in your numbers, controls, and compliance.",
    paragraphs: [
      "Our internal audit support ensures your books are accurate, compliant, and always ready for external audits and tax filings.",
      "By reviewing transactions, controls, and processes on an ongoing basis, we help prevent leakages, detect irregularities early, and reduce fraud risk.",
    ],
    bullets: [
      "Regulatory and statutory compliance assurance",
      "External audit ready financial statements",
      "Tax filing ready and reconciled financials",
      "Detection and prevention of leakages and misstatements",
      "Improved accuracy and reliability of books of accounts",
      "Early identification of frauds, weaknesses, and control gaps",
    ],
    cta: "Gain full assurance over your books, controls, and compliance.",
  },
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
},
{
  icon: <Briefcase className="w-6 h-6" />,
  title: "Back Office Support for Accounting Firms",
  description: "Lower your payroll burden without compromising quality or control",
  details: {
    tagline: "Reduce payroll stress. Increase margins. Scale without overhead.",
    paragraphs: [
      "Running an accounting firm shouldn’t mean absorbing heavy payroll costs every month. In-house teams are expensive, rigid, and difficult to scale.",
      "With our Pakistan-based back office, you get qualified accounting professionals at a fraction of local costs, allowing you to retain more profits while maintaining full control over delivery and quality.",
    ],
    bullets: [
      "Dedicated offshore team aligned to your firm’s workflows",
      "Significant reduction in monthly payroll and overhead costs",
      "Scalable staffing without long term hiring commitments",
      "Time zone coverage for faster turnaround and continuity",
      "Work reviewed and supervised by qualified senior accountants",
      "Secure processes with strict data confidentiality",
    ],
    cta: "Build a cost efficient back office and protect your margins.",
  },
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  },

]

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    // Default body = Poppins
    <section className="py-16 px-4 bg-gray-50 font-[var(--font-poppins)]">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl p-6 md:p-12 lg:p-16 shadow-2xl" style={{ backgroundColor: "hsl(232 45% 19%)" }}>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8 md:mb-12">
            <div className="space-y-4 lg:max-w-2xl">
              <div
                className="inline-flex items-center gap-2 text-sm font-medium font-[var(--font-poppins)]"
                style={{ color: "hsl(158 47% 58%)" }}
              >
                <Sparkles className="w-4 h-4" />
                <span>Services</span>
              </div>

              {/* Heading = Syne */}
              <h2 className="mt-6 font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-brand-white">
                Clear finance services, built to scale with your business.
              </h2>

              {/* Body = Poppins */}
              <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed uppercase tracking-wide font-[var(--font-poppins)]">
                Bookkeeping and accounting outsourcing designed to keep your data clean, your close reliable, and your operations ready for growth.
              </p>
            </div>
          </div>

          {/* Tabs = Poppins */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-3 mb-8 md:mb-12 font-[var(--font-poppins)]">
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

          <div className="rounded-3xl p-6 md:p-8 lg:p-12 transition-all duration-500" style={{ backgroundColor: "hsl(232 45% 15%)" }}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="space-y-4 md:space-y-6">
                <div className="inline-flex items-center gap-2" style={{ color: "hsl(158 47% 58%)" }}>
                  {services[activeTab].icon}
                </div>

                {/* Heading = Syne */}
                <h3 className="mt-6 font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-brand-white">
                  {services[activeTab].title}
                </h3>

                {/* Body = Poppins */}
                <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed uppercase tracking-wide font-[var(--font-poppins)]">
                  {services[activeTab].details.tagline}
                </p>

                <div className="space-y-4 pt-4 font-[var(--font-poppins)]">
                  {services[activeTab].details.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="text-sm md:text-base text-white/70 leading-relaxed font-[var(--font-poppins)]">
                      {paragraph}
                    </p>
                  ))}

                  <ul className="space-y-3 pt-4 font-[var(--font-poppins)]">
                    {services[activeTab].details.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-white/80 font-[var(--font-poppins)]">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "hsl(158 47% 58%)" }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm md:text-base text-white/90 font-semibold pt-4 italic font-[var(--font-poppins)]">
                    {services[activeTab].details.cta}
                  </p>
                </div>
              </div>

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
