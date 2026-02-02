import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Briefcase, ArrowRight, TrendingDown, Globe, Scaling, UserCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Back Office Support for Accounting Firms",
  description:
    "Outsourced accounting back office support to help accounting firms reduce overhead, increase margins, and scale without long term hiring commitments.",
  alternates: { canonical: "/services/back-office-support" },
  openGraph: {
    title: "Back Office Support for Accounting Firms | MZBPO",
    description: "Outsourced accounting back office support to help accounting firms reduce overhead and scale.",
    url: "https://www.mzbpo.com/services/back-office-support",
  },
}

const benefits = [
  { icon: <TrendingDown className="w-5 h-5" />, title: "Significant Cost Reduction", description: "Reduce monthly payroll and overhead costs by up to 50 percent while maintaining full control over quality and delivery standards." },
  { icon: <Scaling className="w-5 h-5" />, title: "Scalable Staffing", description: "Add or reduce capacity based on workload and client demand without long term hiring commitments or redundancy costs." },
  { icon: <Globe className="w-5 h-5" />, title: "Time Zone Coverage", description: "Extended operational hours with offshore teams working during your off-hours, enabling faster turnaround and round the clock continuity." },
  { icon: <UserCheck className="w-5 h-5" />, title: "Senior Supervised Work", description: "All work is reviewed and supervised by qualified senior accountants, ensuring accuracy and adherence to professional standards." },
]

const process = [
  { step: "01", title: "Workflow Analysis", description: "We study your firm current workflows, client types, software stack, and capacity requirements to design a support model that fits." },
  { step: "02", title: "Team Assembly and Training", description: "We assemble a dedicated offshore team with the right qualifications and train them on your specific processes, tools, and quality standards." },
  { step: "03", title: "Integrated Operations", description: "Your offshore team operates as an extension of your firm, handling assigned tasks through your existing systems with full supervision and quality control." },
  { step: "04", title: "Ongoing Optimization", description: "Regular performance reviews, process improvements, and capacity adjustments to ensure the engagement continues to deliver value as your firm grows." },
]

const relatedServices = [
  { title: "Bookkeeping and Accounting", href: "/services/bookkeeping-accounting", description: "Clean books and accurate financial reporting." },
  { title: "Payroll Processing", href: "/services/payroll-processing", description: "Managed payroll with compliance and timely processing." },
  { title: "ERP Implementation", href: "/services/erp-implementation", description: "Streamline operations with the right systems." },
]

export default function BackOfficeSupportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero with background image */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
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
                <Briefcase className="w-4 h-4" />
                <span>Back Office Support</span>
              </div>
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                <span className="text-brand-teal">Back Office Support</span>{" "}
                for Accounting Firms
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-10">
                Reduce payroll costs, increase margins, and scale your accounting firm without the overhead of expanding your in-house team. Qualified offshore professionals working under your supervision.
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
              Why Accounting Firms Outsource Their Back Office to MZBPO
            </h2>
            <div className="space-y-6 text-gray-600 font-[var(--font-poppins)] text-base md:text-lg leading-relaxed">
              <p>
                Running an accounting firm should not mean absorbing heavy payroll costs every month. In house teams are expensive, rigid, and difficult to scale. When client work fluctuates, you are either overstaffed and overpaying, or understaffed and missing deadlines.
              </p>
              <p>
                With our outsourced back office support, you get qualified accounting professionals at a fraction of local costs, allowing you to retain more profits while maintaining full control over delivery and quality. Your offshore team works on your systems, follows your processes, and operates under the supervision of your senior staff.
              </p>
              <p>
                We are not a staffing agency placing generic resources. We are the outsourcing arm of a BKR International member firm, which means your back office team comes with accounting expertise, professional standards, and the ability to handle complex work including bookkeeping, tax preparation, audit support, and financial reporting.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy text-center mb-14">
              What You Get with Our Back Office Support
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
              How We Set Up Your Back Office Team
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
          headline="Ready to Scale Your Firm Without the Overhead?"
          bodyText="Schedule a free consultation and let us show you how outsourced back office support can protect your margins while increasing your capacity."
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Back Office Support for Accounting Firms", description: "Outsourced accounting back office support to help firms reduce overhead and scale.", provider: { "@type": "Organization", name: "MZBPO", url: "https://www.mzbpo.com" }, url: "https://www.mzbpo.com/services/back-office-support" }) }} />
    </div>
  )
}
