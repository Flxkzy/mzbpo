import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { FileCheck, ArrowRight, ShieldCheck, AlertTriangle, FileSearch, ClipboardCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Internal Audit and Compliance Services",
  description:
    "Independent internal audit services to ensure accuracy, regulatory compliance, and financial control. Audit ready books and proactive risk detection for growing businesses.",
  alternates: { canonical: "/services/internal-audit-compliance" },
  openGraph: {
    title: "Internal Audit and Compliance Services | MZBPO",
    description: "Independent internal audit services to ensure accuracy, regulatory compliance, and financial control.",
    url: "https://www.mzbpo.com/services/internal-audit-compliance",
  },
}

const benefits = [
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Regulatory Compliance Assurance", description: "Stay compliant with statutory requirements, tax regulations, and industry specific reporting standards across all jurisdictions." },
  { icon: <AlertTriangle className="w-5 h-5" />, title: "Early Risk Detection", description: "Identify control gaps, process weaknesses, and irregularities before they become costly problems or audit findings." },
  { icon: <FileSearch className="w-5 h-5" />, title: "Audit Ready Financial Statements", description: "Maintain clean, reconciled, and properly documented financials that are ready for external audit at any time." },
  { icon: <ClipboardCheck className="w-5 h-5" />, title: "Leakage Prevention", description: "Detect and prevent financial leakages, misstatements, and unauthorized transactions through systematic review processes." },
]

const process = [
  { step: "01", title: "Risk Assessment and Planning", description: "We assess your organizational risk profile, identify high risk areas, and develop a structured internal audit plan aligned with your business objectives." },
  { step: "02", title: "Transaction Testing and Controls Review", description: "We test transactions, review internal controls, verify approvals and authorizations, and assess the effectiveness of your existing processes." },
  { step: "03", title: "Findings and Recommendations", description: "Detailed audit reports with prioritized findings, root cause analysis, and actionable recommendations to strengthen controls and close gaps." },
  { step: "04", title: "Ongoing Monitoring and Support", description: "Continuous monitoring of key controls and processes to ensure sustained compliance, with regular reviews and reporting to management." },
]

const relatedServices = [
  { title: "Bookkeeping and Accounting", href: "/services/bookkeeping-accounting", description: "Clean books and accurate financial reporting." },
  { title: "Payroll Processing", href: "/services/payroll-processing", description: "Managed payroll with compliance and timely processing." },
  { title: "ERP Implementation", href: "/services/erp-implementation", description: "Streamline operations with the right systems." },
]

export default function InternalAuditCompliancePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero with background image */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop"
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
                <FileCheck className="w-4 h-4" />
                <span>Internal Audit and Compliance</span>
              </div>
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                <span className="text-brand-teal">Internal Audit</span> and Compliance Services for Financial Control
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-10">
                Complete confidence in your numbers, controls, and compliance. Independent audit support that ensures your books are accurate, compliant, and always ready for external review.
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
              Why Businesses Need Outsourced Internal Audit
            </h2>
            <div className="space-y-6 text-gray-600 font-[var(--font-poppins)] text-base md:text-lg leading-relaxed">
              <p>
                Internal audit is not just about ticking boxes before the annual audit. It is a continuous process of monitoring controls, testing transactions, and verifying that your financial processes are working as intended. Without it, errors accumulate, leakages go undetected, and regulatory gaps widen until they become costly problems.
              </p>
              <p>
                Our internal audit services ensure your books are accurate, compliant, and always ready for external audits and regulatory filings. By reviewing transactions, testing controls, and monitoring processes on an ongoing basis, we help prevent leakages, detect irregularities early, and reduce fraud risk.
              </p>
              <p>
                As a BKR International affiliated firm, we apply internationally recognized audit methodologies and professional standards. Our audit teams bring the independence and objectivity that internal reviews require, combined with the deep financial expertise needed to identify meaningful risks and control weaknesses.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy text-center mb-14">
              What Our Internal Audit Services Deliver
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
              How We Deliver Internal Audit Services
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
          headline="Ready for Audit Confidence?"
          bodyText="Schedule a free consultation and let us show you how independent internal audit support can strengthen your controls and keep you compliant."
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Internal Audit and Compliance Services", description: "Independent internal audit services to ensure accuracy, regulatory compliance, and financial control.", provider: { "@type": "Organization", name: "MZBPO", url: "https://www.mzbpo.com" }, url: "https://www.mzbpo.com/services/internal-audit-compliance" }) }} />
    </div>
  )
}
