import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Settings, ArrowRight, Database, GraduationCap, Wrench, Layers } from "lucide-react"

export const metadata: Metadata = {
  title: "ERP Implementation and Management Services",
  description:
    "Expert ERP implementation and management services including SAP Business One, Odoo, Zoho, and NetSuite. End to end setup, data migration, training, and ongoing support.",
  alternates: { canonical: "/services/erp-implementation" },
  openGraph: {
    title: "ERP Implementation and Management Services | MZBPO",
    description: "Expert ERP implementation and management services including SAP Business One, Odoo, Zoho, and NetSuite.",
    url: "https://www.mzbpo.com/services/erp-implementation",
  },
}

const benefits = [
  { icon: <Layers className="w-5 h-5" />, title: "End to End Implementation", description: "Complete ERP setup from requirements analysis and system configuration to testing, go live, and post implementation support." },
  { icon: <Database className="w-5 h-5" />, title: "Data Migration and Integration", description: "Clean migration of historical data from legacy systems with full validation, and integration with your existing tools and workflows." },
  { icon: <GraduationCap className="w-5 h-5" />, title: "Staff Training and Onboarding", description: "Comprehensive training programs for your team to ensure adoption, with documentation and ongoing support for new users." },
  { icon: <Wrench className="w-5 h-5" />, title: "Ongoing Management and Support", description: "Post implementation system management, performance optimization, updates, and technical support to keep your ERP running smoothly." },
]

const platforms = [
  { name: "SAP Business One", description: "Enterprise grade ERP for mid sized businesses with comprehensive financials, inventory, and operations management." },
  { name: "SAP S/4HANA", description: "Next generation intelligent ERP suite built on in-memory computing for real time analytics and process automation." },
  { name: "Odoo", description: "Modular, open source ERP with integrated apps for accounting, inventory, CRM, manufacturing, and human resources." },
  { name: "Zoho", description: "Cloud based business suite with finance, HR, inventory, and project management tools designed for growing businesses." },
  { name: "NetSuite", description: "Cloud native ERP platform with unified financials, CRM, and e-commerce capabilities for global operations." },
]

const process = [
  { step: "01", title: "Requirements and Platform Selection", description: "We analyze your business processes, financial structure, and growth plans to recommend the right ERP platform and configuration." },
  { step: "02", title: "Configuration and Customization", description: "System setup, chart of accounts mapping, workflow configuration, user roles, and custom reports tailored to your specific requirements." },
  { step: "03", title: "Data Migration and Testing", description: "Historical data is cleaned, validated, and migrated. Comprehensive testing ensures everything works correctly before go live." },
  { step: "04", title: "Training, Go Live, and Support", description: "Staff training, supervised go live with parallel processing, and ongoing technical support to ensure a smooth transition and sustained performance." },
]

const relatedServices = [
  { title: "Bookkeeping and Accounting", href: "/services/bookkeeping-accounting", description: "Clean books and accurate financial reporting." },
  { title: "Internal Audit and Compliance", href: "/services/internal-audit-compliance", description: "Independent audit support for accuracy and control." },
  { title: "Back Office Support", href: "/services/back-office-support", description: "Outsourced accounting support for firms." },
]

export default function ERPImplementationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero with background image */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop"
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
                <Settings className="w-4 h-4" />
                <span>ERP Implementation</span>
              </div>
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                <span className="text-brand-teal">ERP Implementation</span>{" "}
                and Management Services
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-10">
                Streamline your operations with the right ERP system implemented the right way. From SAP Business One to Odoo and NetSuite, we bring both technical and financial expertise to every implementation.
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
              Why Choose MZBPO for ERP Implementation
            </h2>
            <div className="space-y-6 text-gray-600 font-[var(--font-poppins)] text-base md:text-lg leading-relaxed">
              <p>
                Most ERP implementations fail not because of the technology, but because of poor planning, inadequate understanding of business processes, and a disconnect between the technical team and the finance function. The result is a system that adds complexity instead of removing it.
              </p>
              <p>
                We are different because we bring both technical and financial expertise to every engagement. As the outsourcing arm of a BKR International member firm, we understand how financial data needs to flow through an ERP system. We configure your chart of accounts, reporting structures, and control workflows from the perspective of accountants who know what clean data and strong controls actually look like in practice.
              </p>
              <p>
                We help growing businesses select, implement, and manage ERP systems that align with their workflows, financial structure, and long term goals. We ensure your ERP supports clean data, strong controls, and scalable operations instead of adding complexity as you grow.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy text-center mb-14">
              What You Get with Our ERP Services
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

        {/* Platforms */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-14 text-center">
              ERP Platforms We Implement
            </h2>
            <div className="space-y-4">
              {platforms.map((platform, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100"
                >
                  <div className="flex-shrink-0">
                    <span className="font-[family-name:var(--font-syne)] text-base font-bold text-brand-teal">{platform.name}</span>
                  </div>
                  <div className="hidden sm:block w-px h-8 bg-gray-200 flex-shrink-0" />
                  <p className="text-gray-500 text-sm font-[var(--font-poppins)] leading-relaxed">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-14 text-center">
              Our ERP Implementation Process
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
          headline="Ready to Streamline Your Operations?"
          bodyText="Schedule a free consultation and let us help you select, implement, and manage the right ERP system for your business."
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "ERP Implementation and Management Services", description: "Expert ERP implementation and management services including SAP Business One, Odoo, Zoho, and NetSuite.", provider: { "@type": "Organization", name: "MZBPO", url: "https://www.mzbpo.com" }, url: "https://www.mzbpo.com/services/erp-implementation" }) }} />
    </div>
  )
}
