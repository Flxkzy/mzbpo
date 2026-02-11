import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { BookOpen, ArrowRight, BarChart3, Clock, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Outsourced Bookkeeping and Accounting Services",
  description:
    "Professional outsourced bookkeeping and accounting services for growing businesses. Clean books, accurate reporting, and monthly closes without the overhead of an in-house finance team.",
  alternates: { canonical: "/services/bookkeeping-accounting" },
  openGraph: {
    title: "Outsourced Bookkeeping and Accounting Services | MZBPO",
    description:
      "Professional outsourced bookkeeping and accounting services for growing businesses. Clean books, accurate reporting, and monthly closes.",
    url: "https://www.mzbpo.com/services/bookkeeping-accounting",
  },
}

const benefits = [
  { icon: <BarChart3 className="w-5 h-5" />, title: "Decision Ready Reporting", description: "Real time financial reports that give you clarity on revenue, expenses, cash flow, and profitability." },
  { icon: <Clock className="w-5 h-5" />, title: "Reliable Monthly Close", description: "Consistent, on time month end close with reconciled accounts and clean trial balances every cycle." },
  { icon: <Shield className="w-5 h-5" />, title: "Strong Internal Controls", description: "Proper segregation of duties, approval workflows, and audit trails built into every process." },
  { icon: <Users className="w-5 h-5" />, title: "Scalable Without Headcount", description: "Add transaction volume and complexity without hiring. Your finance function scales with your business." },
]

const process = [
  { step: "01", title: "Discovery and Onboarding", description: "We review your current books, chart of accounts, and accounting systems. We align on reporting requirements and timelines." },
  { step: "02", title: "Cleanup and Standardization", description: "We clean historical data, fix misclassifications, reconcile outstanding balances, and standardize your chart of accounts." },
  { step: "03", title: "Ongoing Bookkeeping Operations", description: "Daily transaction recording, bank and credit card reconciliations, accounts payable and receivable management, and payroll entries." },
  { step: "04", title: "Monthly Reporting and Close", description: "Complete month end close with financial statements, variance analysis, and management reports delivered on schedule." },
]

const relatedServices = [
  { title: "Payroll Processing", href: "/services/payroll-processing", description: "Managed payroll with compliance and timely processing." },
  { title: "Internal Audit and Compliance", href: "/services/internal-audit-compliance", description: "Independent audit support for accuracy and control." },
  { title: "ERP Implementation", href: "/services/erp-implementation", description: "Streamline operations with the right systems." },
]

export default function BookkeepingAccountingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero with background image */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=1080&fit=crop"
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
                <BookOpen className="w-4 h-4" />
                <span>Bookkeeping and Accounting</span>
              </div>
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Outsourced Bookkeeping and{" "}
                <span className="text-brand-teal">Accounting Services</span>{" "}
                for Growing Businesses
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-10">
                Clean books, accurate financial reporting, and reliable monthly closes delivered by senior level accountants. Scale your finance operations without the overhead of building an in-house team.
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
              Why Businesses Outsource Their Bookkeeping to MZBPO
            </h2>
            <div className="space-y-6 text-gray-600 font-[var(--font-poppins)] text-base md:text-lg leading-relaxed">
              <p>
                Managing bookkeeping in house is expensive, time consuming, and difficult to scale. Hiring full time accountants means salaries, benefits, training, and the constant risk of turnover disrupting your financial operations. For growing businesses, this overhead does not make sense.
              </p>
              <p>
                Our outsourced bookkeeping services manage your books end to end with clean data, tight controls, and reliable monthly closes. From daily entries and reconciliations to financial reporting and month end close, we operate as a structured finance system that scales with your transaction volume and complexity.
              </p>
              <p>
                As the outsourcing arm of Muniff Ziauddin and Co., a BKR International member firm, we bring internationally aligned processes and professional standards to every engagement. You get the financial clarity of a full in-house finance department at a fraction of the cost.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy text-center mb-14">
              What You Get with Our Bookkeeping Services
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
              How We Deliver Outsourced Bookkeeping
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
          headline="Ready for Clean Books and Clear Numbers?"
          bodyText="Schedule a free consultation and let us show you how outsourced bookkeeping can reduce your finance overhead while improving accuracy and reporting."
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

        {/* Related Articles */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-brand-navy mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Link href="/blog/outsourced-bookkeeping-cost" className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md hover:border-brand-teal/20 transition-all duration-300">
                <h3 className="font-[family-name:var(--font-syne)] text-base font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors">How Much Does Outsourced Bookkeeping Cost?</h3>
                <p className="text-gray-500 text-sm font-[var(--font-poppins)] mb-3">Complete pricing guide with cost ranges and factors.</p>
                <span className="text-brand-teal text-xs font-semibold font-[var(--font-poppins)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read article <ArrowRight className="w-3 h-3" /></span>
              </Link>
              <Link href="/blog/in-house-vs-outsourced-accounting" className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md hover:border-brand-teal/20 transition-all duration-300">
                <h3 className="font-[family-name:var(--font-syne)] text-base font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors">In-House vs Outsourced Accounting</h3>
                <p className="text-gray-500 text-sm font-[var(--font-poppins)] mb-3">Compare costs and benefits of each model.</p>
                <span className="text-brand-teal text-xs font-semibold font-[var(--font-poppins)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read article <ArrowRight className="w-3 h-3" /></span>
              </Link>
              <Link href="/blog/month-end-close-checklist" className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md hover:border-brand-teal/20 transition-all duration-300">
                <h3 className="font-[family-name:var(--font-syne)] text-base font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors">Month-End Close Checklist</h3>
                <p className="text-gray-500 text-sm font-[var(--font-poppins)] mb-3">Best practices for accurate monthly reporting.</p>
                <span className="text-brand-teal text-xs font-semibold font-[var(--font-poppins)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read article <ArrowRight className="w-3 h-3" /></span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Outsourced Bookkeeping and Accounting Services", description: "Professional outsourced bookkeeping and accounting services for growing businesses. Clean books, accurate reporting, and monthly closes.", provider: { "@type": "Organization", name: "MZBPO", url: "https://www.mzbpo.com" }, url: "https://www.mzbpo.com/services/bookkeeping-accounting" }) }} />
    </div>
  )
}
