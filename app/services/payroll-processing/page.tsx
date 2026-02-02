import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Users, ArrowRight, ShieldCheck, CalendarClock, FileSpreadsheet, Lock } from "lucide-react"

export const metadata: Metadata = {
  title: "Outsourced Payroll Processing Services",
  description:
    "End to end payroll outsourcing with compliance, accurate deductions, and timely processing. Managed payroll services tailored to your business structure.",
  alternates: { canonical: "/services/payroll-processing" },
  openGraph: {
    title: "Outsourced Payroll Processing Services | MZBPO",
    description: "End to end payroll outsourcing with compliance, accurate deductions, and timely processing.",
    url: "https://www.mzbpo.com/services/payroll-processing",
  },
}

const benefits = [
  { icon: <CalendarClock className="w-5 h-5" />, title: "On Time Every Cycle", description: "Monthly and biweekly payroll processed and delivered on schedule without delays or errors." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Full Compliance", description: "Tax deductions, statutory filings, and regulatory compliance handled across all applicable jurisdictions." },
  { icon: <FileSpreadsheet className="w-5 h-5" />, title: "Custom Reporting", description: "Payroll summaries, department breakdowns, cost analysis, and employee reports tailored to your needs." },
  { icon: <Lock className="w-5 h-5" />, title: "Secure and Confidential", description: "Strict data security protocols and confidential handling of all employee compensation data." },
]

const process = [
  { step: "01", title: "Payroll Setup and Configuration", description: "We review your employee structure, compensation components, tax obligations, and reporting requirements to configure your payroll system." },
  { step: "02", title: "Data Collection and Validation", description: "Attendance data, overtime, bonuses, deductions, and adjustments are collected, validated, and processed before each cycle." },
  { step: "03", title: "Processing and Compliance", description: "Salary calculations, tax withholdings, social security contributions, and all statutory deductions are computed and verified." },
  { step: "04", title: "Distribution and Reporting", description: "Payslips are generated and distributed securely. Payroll reports, tax summaries, and journal entries are delivered to your finance team." },
]

const relatedServices = [
  { title: "Bookkeeping and Accounting", href: "/services/bookkeeping-accounting", description: "Clean books and accurate financial reporting." },
  { title: "Internal Audit and Compliance", href: "/services/internal-audit-compliance", description: "Independent audit support for accuracy and control." },
  { title: "Back Office Support", href: "/services/back-office-support", description: "Outsourced accounting support for firms." },
]

export default function PayrollProcessingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero with background image */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop"
              alt=""
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/85 to-brand-navy/40" />
          </div>
          <div className="relative w-full px-6 pt-32 md:pt-40 pb-16 md:pb-20">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-semibold uppercase tracking-wider mb-6">
                <Users className="w-4 h-4" />
                <span>Payroll Processing</span>
              </div>
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Outsourced{" "}
                <span className="text-brand-teal">Payroll Processing</span>{" "}
                Services for Growing Teams
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-10">
                Accurate, compliant payroll delivered on time, every cycle. From salary calculations and tax deductions to payslip generation and compliance filings, we handle the entire payroll backend.
              </p>
              <a
                href="/meeting"
                className="group inline-flex items-center gap-2.5 bg-brand-teal text-brand-navy font-[var(--font-poppins)] font-semibold text-base px-8 py-4 rounded-full shadow-lg shadow-brand-teal/20 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--brand-teal)/0.3)] hover:scale-[1.02]"
              >
                Get a Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-8">
              Why Outsource Payroll to MZBPO
            </h2>
            <div className="space-y-6 text-gray-600 font-[var(--font-poppins)] text-base md:text-lg leading-relaxed">
              <p>
                Payroll is one of the most sensitive and time critical functions in any business. Errors in salary calculations, late tax filings, or compliance gaps can result in penalties, employee dissatisfaction, and reputational risk.
              </p>
              <p>
                Our payroll outsourcing services take the complexity out of payroll by managing everything from salary calculations and tax deductions to payslip generation and compliance filings. Our payroll solutions are tailored to your structure, whether you run a lean team or a large workforce spread across multiple locations.
              </p>
              <p>
                You get reliable, confidential payroll processing on time, every time. We integrate seamlessly with your existing accounting and HR systems, ensuring that payroll data flows cleanly into your financial records and reporting.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy text-center mb-14">
              What You Get with Our Payroll Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="p-7 rounded-2xl bg-white border border-gray-100 shadow-sm font-[var(--font-poppins)]">
                  <div className="w-11 h-11 rounded-xl bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal mb-5">
                    {benefit.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy mb-2">{benefit.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-14 text-center">
              How We Deliver Payroll Processing
            </h2>
            <div className="space-y-8">
              {process.map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center">
                    <span className="text-brand-teal font-bold text-sm font-[var(--font-poppins)]">{step.step}</span>
                  </div>
                  <div className="font-[var(--font-poppins)]">
                    <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          headline="Ready for Hassle Free Payroll?"
          bodyText="Schedule a free consultation and let us show you how outsourced payroll processing can save time, reduce errors, and keep you compliant."
          ctaText="Schedule a Free Consultation"
        />

        {/* Related Services */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-brand-navy mb-8 text-center">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedServices.map((svc, idx) => (
                <Link key={idx} href={svc.href} className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-teal/20 transition-all duration-300">
                  <h3 className="font-[family-name:var(--font-syne)] text-base font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors">{svc.title}</h3>
                  <p className="text-gray-500 text-sm font-[var(--font-poppins)] mb-3">{svc.description}</p>
                  <span className="text-brand-teal text-xs font-semibold font-[var(--font-poppins)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight className="w-3 h-3" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Outsourced Payroll Processing Services", description: "End to end payroll outsourcing with compliance, accurate deductions, and timely processing.", provider: { "@type": "Organization", name: "MZBPO", url: "https://www.mzbpo.com" }, url: "https://www.mzbpo.com/services/payroll-processing" }) }} />
    </div>
  )
}
