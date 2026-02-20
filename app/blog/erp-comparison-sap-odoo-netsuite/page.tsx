import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import {
  ArrowRight,
  Clock,
  Calendar,
  CheckCircle2,
  XCircle,
  ChevronRight,
  BookOpen,
  DollarSign,
  TrendingUp,
  Building2,
  Users,
  Zap,
  BarChart3,
  Shield,
  AlertTriangle,
  Target,
  Layers,
  Settings,
  Globe,
  Star,
  Package,
} from "lucide-react"

export const metadata: Metadata = {
  title: "SAP Business One vs Odoo vs NetSuite: ERP Comparison for SMBs 2026",
  description:
    "In-depth ERP comparison for small and mid-sized businesses. Compare SAP Business One, Odoo, and NetSuite on features, pricing, implementation, and which is right for your business.",
  alternates: { canonical: "/blog/erp-comparison-sap-odoo-netsuite" },
  openGraph: {
    title: "SAP Business One vs Odoo vs NetSuite: ERP Comparison for SMBs | MZBPO",
    description:
      "In-depth ERP comparison for SMBs. Compare SAP Business One, Odoo, and NetSuite on features, pricing, and implementation to find the right fit.",
    url: "https://www.mzbpo.com/blog/erp-comparison-sap-odoo-netsuite",
    type: "article",
    publishedTime: "2026-02-19T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "ERP Comparison for SMBs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAP Business One vs Odoo vs NetSuite: ERP Comparison for SMBs 2026",
    description:
      "Compare the top three ERP platforms for SMBs — features, pricing, implementation costs, and which suits your business stage.",
  },
}

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "what-is-erp", title: "What Is an ERP and Do You Need One?" },
  { id: "sap-business-one", title: "SAP Business One: Overview & Review" },
  { id: "odoo", title: "Odoo: Overview & Review" },
  { id: "netsuite", title: "NetSuite: Overview & Review" },
  { id: "comparison-table", title: "Side-by-Side Comparison" },
  { id: "pricing", title: "Pricing Breakdown" },
  { id: "which-to-choose", title: "Which ERP Should You Choose?" },
  { id: "implementation", title: "Implementation: What to Expect" },
  { id: "conclusion", title: "Conclusion & Recommendations" },
]

const relatedPosts = [
  {
    title: "Accounting for SaaS Companies: Revenue Recognition & Key Metrics",
    href: "/blog/accounting-for-saas-companies",
    description: "Navigate ASC 606, track SaaS metrics, and build investor-ready financial reporting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
  {
    title: "In-House vs Outsourced Accounting: Complete Cost Comparison",
    href: "/blog/in-house-vs-outsourced-accounting",
    description: "A detailed analysis comparing the true costs of in-house vs outsourced accounting.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
  },
  {
    title: "GAAP vs IFRS: Key Differences Every International Business Should Know",
    href: "/blog/gaap-vs-ifrs",
    description: "A comprehensive comparison of US GAAP and IFRS for international businesses.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=250&fit=crop",
  },
]

export default function BlogPost() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <article>
          {/* Hero */}
          <header className="relative overflow-hidden bg-brand-navy">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            <div className="relative max-w-4xl mx-auto px-6 pt-32 md:pt-40 pb-16 md:pb-20">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-white/60 mb-8 font-[var(--font-poppins)]">
                <Link href="/" className="hover:text-brand-teal transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/blog" className="hover:text-brand-teal transition-colors">Blog</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white/40">ERP Comparison</span>
              </nav>

              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <Settings className="w-4 h-4" />
                <span>ERP</span>
              </div>

              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                SAP Business One vs Odoo vs NetSuite:{" "}
                <span className="text-brand-teal">ERP Comparison for SMBs 2026</span>
              </h1>

              <p className="text-lg text-white/70 font-[var(--font-poppins)] leading-relaxed mb-8 max-w-3xl">
                Choosing the wrong ERP can cost your business $200,000+ in failed implementations and lost productivity. This in-depth comparison covers features, real pricing, implementation realities, and a clear framework for which platform fits your business stage.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-teal" />
                  February 19, 2026
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-teal" />
                  15 min read
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-brand-teal" />
                  MZBPO Editorial Team
                </span>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="relative h-64 md:h-96 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=600&fit=crop"
              alt="ERP Comparison for SMBs"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Table of Contents */}
              <aside className="lg:col-span-1">
                <div className="sticky top-8 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4 text-sm uppercase tracking-wider">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 hover:text-brand-teal transition-colors font-[var(--font-poppins)] py-1 border-l-2 border-transparent hover:border-brand-teal pl-3"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Article Body */}
              <div className="lg:col-span-3 prose-custom">

                {/* Introduction */}
                <section id="introduction" className="mb-12">
                  <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                    Introduction
                  </h2>
                  <p className="text-gray-700 font-[var(--font-poppins)] leading-relaxed mb-4">
                    Enterprise Resource Planning (ERP) software promises to unify your accounting, inventory, HR, CRM, and operations into a single platform. For small and mid-sized businesses (SMBs) generating between $5M and $100M in annual revenue, the right ERP can transform operational efficiency. The wrong one can paralyze growth.
                  </p>
                  <p className="text-gray-700 font-[var(--font-poppins)] leading-relaxed mb-4">
                    Three platforms dominate the SMB ERP market in 2026: <strong>SAP Business One</strong>, <strong>Odoo</strong>, and <strong>Oracle NetSuite</strong>. Each has a distinct philosophy, cost structure, and ideal customer profile. This guide cuts through the vendor marketing to give you an honest, data-driven comparison.
                  </p>
                  <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-2xl p-6 mb-6">
                    <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-brand-teal" />
                      Quick Verdict
                    </h3>
                    <ul className="space-y-2 text-sm font-[var(--font-poppins)]">
                      <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" /><span><strong>SAP Business One</strong> — Best for established manufacturers and distributors ($10M–$100M revenue) needing deep supply chain and production functionality.</span></li>
                      <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" /><span><strong>Odoo</strong> — Best for growing SMBs ($1M–$30M) wanting a modular, lower-cost system they can expand over time.</span></li>
                      <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" /><span><strong>NetSuite</strong> — Best for fast-growing, multi-entity companies ($5M–$500M+) requiring real-time global financial consolidation.</span></li>
                    </ul>
                  </div>
                </section>

                {/* What Is an ERP */}
                <section id="what-is-erp" className="mb-12">
                  <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                    What Is an ERP and Do You Need One?
                  </h2>
                  <p className="text-gray-700 font-[var(--font-poppins)] leading-relaxed mb-4">
                    An ERP integrates core business functions — finance, accounting, procurement, inventory, HR, CRM, and project management — into a single database. Instead of maintaining separate systems that don't talk to each other, you get one source of truth.
                  </p>
                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">Signs You're Ready for an ERP</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      { icon: AlertTriangle, text: "You're managing data in 5+ disconnected systems" },
                      { icon: Clock, text: "Month-end close takes more than 10 business days" },
                      { icon: Package, text: "Inventory errors are causing stockouts or overstock" },
                      { icon: Globe, text: "You operate in multiple countries or currencies" },
                      { icon: TrendingUp, text: "Revenue has crossed $5M and is growing fast" },
                      { icon: Users, text: "You have 20+ employees across multiple departments" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                        <item.icon className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                        <span className="text-gray-700 text-sm font-[var(--font-poppins)]">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700 font-[var(--font-poppins)] leading-relaxed">
                    If three or more of these apply, you're likely past the threshold where QuickBooks or Xero can serve your needs. An ERP investment, while significant, typically delivers ROI within 2–3 years through reduced manual work, fewer errors, and better decision-making.
                  </p>
                </section>

                {/* SAP Business One */}
                <section id="sap-business-one" className="mb-12">
                  <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                    SAP Business One: Overview & Review
                  </h2>
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop"
                      alt="SAP Business One ERP"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 to-transparent flex items-center p-8">
                      <div>
                        <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-white mb-1">SAP Business One</h3>
                        <p className="text-white/70 text-sm font-[var(--font-poppins)]">Enterprise-grade ERP built for SMBs</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 font-[var(--font-poppins)] leading-relaxed mb-4">
                    SAP Business One (SAP B1) is SAP's dedicated SMB product, separate from their enterprise SAP S/4HANA suite. Launched in 2002 and deployed in 70,000+ companies across 170 countries, it's one of the most mature SMB ERP platforms available.
                  </p>

                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">Core Strengths</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      { title: "Manufacturing & Production", desc: "Bill of materials, production orders, MRP planning — best-in-class for discrete and process manufacturing." },
                      { title: "Supply Chain Management", desc: "Sophisticated procurement, warehouse management, and multi-location inventory tracking." },
                      { title: "Financial Management", desc: "Full GAAP/IFRS compliance, multi-currency, consolidation across subsidiaries." },
                      { title: "Partner Ecosystem", desc: "1,000+ certified SAP partners globally provide implementation and local support in every major market." },
                      { title: "SAP HANA Integration", desc: "Real-time analytics and reporting powered by in-memory computing when deployed on HANA." },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 border border-gray-100 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                        <div>
                          <span className="font-semibold text-brand-navy font-[family-name:var(--font-syne)] text-sm">{item.title}: </span>
                          <span className="text-gray-600 text-sm font-[var(--font-poppins)]">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">Limitations</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      "UI feels dated compared to cloud-native competitors — learning curve is steep",
                      "Heavy reliance on implementation partners means quality varies significantly",
                      "Add-on modules from partners can get expensive quickly",
                      "Not ideal for pure service businesses (professional services, agencies)",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                        <span className="text-gray-600 text-sm font-[var(--font-poppins)]">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                    <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">Best For</h4>
                    <p className="text-gray-700 text-sm font-[var(--font-poppins)]">Manufacturing, wholesale distribution, and retail businesses with $10M–$100M revenue that need deep inventory and production management. Particularly strong for companies in the Middle East, Europe, and Asia-Pacific where SAP's partner network is robust.</p>
                  </div>
                </section>

                {/* Odoo */}
                <section id="odoo" className="mb-12">
                  <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                    Odoo: Overview & Review
                  </h2>
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop"
                      alt="Odoo ERP platform"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 to-transparent flex items-center p-8">
                      <div>
                        <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-white mb-1">Odoo</h3>
                        <p className="text-white/70 text-sm font-[var(--font-poppins)]">Open-source modular ERP for growing businesses</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 font-[var(--font-poppins)] leading-relaxed mb-4">
                    Odoo started as an open-source project (OpenERP) and has evolved into a full-featured, modular business suite used by 12+ million users in 2026. Its unique selling point is flexibility — you can start with just accounting or CRM and add modules as you grow without re-platforming.
                  </p>

                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">Core Strengths</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      { title: "Modular Architecture", desc: "Start with 1–2 modules and add more over time. No need to implement everything at once." },
                      { title: "Modern UI/UX", desc: "Clean, intuitive interface that reduces training time dramatically vs SAP B1." },
                      { title: "All-in-One Suite", desc: "80+ modules covering accounting, CRM, ecommerce, HR, project management, manufacturing, and more." },
                      { title: "Flexible Pricing", desc: "Community (free, open-source), Standard, and Custom plans — most cost-effective at entry level." },
                      { title: "Active Community", desc: "Massive open-source ecosystem with thousands of community modules and integrations." },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 border border-gray-100 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                        <div>
                          <span className="font-semibold text-brand-navy font-[family-name:var(--font-syne)] text-sm">{item.title}: </span>
                          <span className="text-gray-600 text-sm font-[var(--font-poppins)]">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">Limitations</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      "Heavy customization can lead to upgrade challenges — community modules don't always migrate cleanly",
                      "Financial reporting is less sophisticated than SAP B1 or NetSuite out-of-the-box",
                      "Support quality varies widely depending on implementation partner",
                      "Not ideal for complex multi-entity consolidation at scale",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                        <span className="text-gray-600 text-sm font-[var(--font-poppins)]">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                    <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">Best For</h4>
                    <p className="text-gray-700 text-sm font-[var(--font-poppins)]">Growing SMBs in the $1M–$30M revenue range, especially ecommerce, retail, and service businesses that want an affordable all-in-one platform. Also great for companies that need CRM + accounting integration without paying enterprise prices.</p>
                  </div>
                </section>

                {/* NetSuite */}
                <section id="netsuite" className="mb-12">
                  <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                    NetSuite: Overview & Review
                  </h2>
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop"
                      alt="NetSuite cloud ERP"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 to-transparent flex items-center p-8">
                      <div>
                        <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-white mb-1">Oracle NetSuite</h3>
                        <p className="text-white/70 text-sm font-[var(--font-poppins)]">Cloud-native ERP for fast-growth companies</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 font-[var(--font-poppins)] leading-relaxed mb-4">
                    Oracle NetSuite is the world's most widely deployed cloud ERP, used by 40,000+ companies across 219 countries. Acquired by Oracle in 2016, it's purpose-built for companies that need real-time financial visibility across multiple entities, currencies, and geographies.
                  </p>

                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">Core Strengths</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      { title: "Financial Management", desc: "Best-in-class multi-entity consolidation, revenue recognition (ASC 606/IFRS 15), and real-time reporting across all subsidiaries." },
                      { title: "Scalability", desc: "Grows from 5 to 5,000+ users without re-platforming. Trusted by companies from startup to IPO stage." },
                      { title: "SuiteSuccess", desc: "Pre-configured industry editions (SaaS, manufacturing, retail, nonprofit) reduce implementation time." },
                      { title: "Native Cloud", desc: "No on-premise servers required. Automatic updates included — always on the latest version." },
                      { title: "Global Compliance", desc: "Built-in tax engines for 100+ countries, multi-language support, and local GAAP/IFRS compliance." },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 border border-gray-100 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                        <div>
                          <span className="font-semibold text-brand-navy font-[family-name:var(--font-syne)] text-sm">{item.title}: </span>
                          <span className="text-gray-600 text-sm font-[var(--font-poppins)]">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">Limitations</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      "Most expensive of the three — annual contracts can run $50,000–$250,000+",
                      "Limited customization vs open-source alternatives",
                      "Annual price increases are common (5–10% year-over-year)",
                      "Customer support quality has been inconsistent per user reviews",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                        <span className="text-gray-600 text-sm font-[var(--font-poppins)]">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6">
                    <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">Best For</h4>
                    <p className="text-gray-700 text-sm font-[var(--font-poppins)]">Fast-growing companies ($5M–$500M+), SaaS businesses, multi-entity groups, and businesses preparing for IPO or acquisition. Particularly strong for companies with complex revenue recognition requirements (subscriptions, milestones).</p>
                  </div>
                </section>

                {/* Comparison Table */}
                <section id="comparison-table" className="mb-12">
                  <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                    Side-by-Side Comparison
                  </h2>
                  <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
                    <table className="w-full text-sm font-[var(--font-poppins)]">
                      <thead>
                        <tr className="bg-brand-navy text-white">
                          <th className="text-left p-4 font-semibold">Feature</th>
                          <th className="text-center p-4 font-semibold">SAP B1</th>
                          <th className="text-center p-4 font-semibold">Odoo</th>
                          <th className="text-center p-4 font-semibold">NetSuite</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Deployment", "On-premise / Cloud", "Cloud / On-premise", "Cloud only"],
                          ["Min. Revenue", "$5M+", "$500K+", "$2M+"],
                          ["Accounting", "★★★★☆", "★★★☆☆", "★★★★★"],
                          ["Manufacturing", "★★★★★", "★★★★☆", "★★★☆☆"],
                          ["CRM", "★★★☆☆", "★★★★★", "★★★★☆"],
                          ["E-Commerce", "★★☆☆☆", "★★★★★", "★★★★☆"],
                          ["Multi-Entity", "★★★★☆", "★★★☆☆", "★★★★★"],
                          ["Mobile App", "★★★☆☆", "★★★★☆", "★★★★☆"],
                          ["Customization", "★★★★☆", "★★★★★", "★★★☆☆"],
                          ["Ease of Use", "★★★☆☆", "★★★★★", "★★★★☆"],
                          ["Global Compliance", "★★★★☆", "★★★☆☆", "★★★★★"],
                          ["Total Cost", "Medium-High", "Low-Medium", "High"],
                        ].map(([feature, sap, odoo, netsuite], i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="p-4 font-medium text-brand-navy">{feature}</td>
                            <td className="p-4 text-center text-gray-700">{sap}</td>
                            <td className="p-4 text-center text-gray-700">{odoo}</td>
                            <td className="p-4 text-center text-gray-700">{netsuite}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Pricing */}
                <section id="pricing" className="mb-12">
                  <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                    Pricing Breakdown (2026)
                  </h2>
                  <p className="text-gray-700 font-[var(--font-poppins)] leading-relaxed mb-6">
                    ERP vendors rarely publish list prices, and the true cost includes licensing, implementation, customization, training, and ongoing support. Here's a realistic breakdown:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        name: "SAP Business One",
                        color: "blue",
                        license: "$1,400–$3,300/user/year",
                        implementation: "$30,000–$150,000",
                        annual: "$40,000–$200,000",
                        notes: "Perpetual license also available. Varies significantly by partner.",
                      },
                      {
                        name: "Odoo",
                        color: "green",
                        license: "$0 (Community) / $384–$960/user/year (Enterprise)",
                        implementation: "$5,000–$80,000",
                        annual: "$10,000–$120,000",
                        notes: "Community edition is free but requires technical resources to maintain.",
                      },
                      {
                        name: "NetSuite",
                        color: "purple",
                        license: "$1,000–$2,000/user/year (base)",
                        implementation: "$25,000–$200,000",
                        annual: "$50,000–$300,000+",
                        notes: "Platform fee + user licenses + module fees. Negotiable for multi-year deals.",
                      },
                    ].map((plan) => (
                      <div key={plan.name} className="border border-gray-200 rounded-2xl p-6">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">{plan.name}</h3>
                        <div className="space-y-3 text-sm font-[var(--font-poppins)]">
                          <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">License</p>
                            <p className="text-gray-700 font-medium">{plan.license}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Implementation</p>
                            <p className="text-gray-700 font-medium">{plan.implementation}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Total Year 1 Cost</p>
                            <p className="text-brand-navy font-bold text-base">{plan.annual}</p>
                          </div>
                          <p className="text-gray-500 text-xs border-t border-gray-100 pt-3">{plan.notes}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">Hidden Costs to Budget For</h4>
                        <ul className="space-y-1 text-sm text-gray-700 font-[var(--font-poppins)]">
                          <li>• Data migration from legacy systems: $5,000–$50,000</li>
                          <li>• Staff training: $2,000–$20,000</li>
                          <li>• Custom integrations (e.g., Salesforce, Shopify): $5,000–$30,000</li>
                          <li>• Annual maintenance/support contracts: 15–22% of license cost</li>
                          <li>• Ongoing IT/admin resources (especially for on-premise deployments)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Which to Choose */}
                <section id="which-to-choose" className="mb-12">
                  <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                    Which ERP Should You Choose?
                  </h2>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Choose SAP Business One if…",
                        icon: Building2,
                        color: "blue",
                        points: [
                          "You're in manufacturing, distribution, or wholesale ($10M–$100M revenue)",
                          "You need deep MRP, production scheduling, and multi-warehouse management",
                          "You want a battle-tested system with a large local partner network",
                          "You're in the Middle East, Southeast Asia, or Central/Eastern Europe",
                          "You have 20–200 users and a dedicated IT team",
                        ],
                      },
                      {
                        title: "Choose Odoo if…",
                        icon: Zap,
                        color: "green",
                        points: [
                          "You're an SMB with $1M–$30M revenue looking for value",
                          "You need an all-in-one platform (CRM + accounting + ecommerce + HR)",
                          "You want to start with 1–2 modules and add more gradually",
                          "You have a technical team comfortable with open-source customization",
                          "Budget is a major constraint and you want low entry cost",
                        ],
                      },
                      {
                        title: "Choose NetSuite if…",
                        icon: TrendingUp,
                        color: "purple",
                        points: [
                          "You're growing fast and plan to scale from $5M to $100M+",
                          "You operate in multiple countries with complex consolidation needs",
                          "You're a SaaS business with subscription revenue recognition requirements",
                          "You're preparing for investor due diligence, IPO, or acquisition",
                          "You want a fully cloud-native system with no infrastructure overhead",
                        ],
                      },
                    ].map((option) => (
                      <div key={option.title} className="border border-gray-100 rounded-2xl p-6">
                        <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                          <option.icon className="w-5 h-5 text-brand-teal" />
                          {option.title}
                        </h3>
                        <ul className="space-y-2">
                          {option.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700 font-[var(--font-poppins)]">
                              <CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Implementation */}
                <section id="implementation" className="mb-12">
                  <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                    Implementation: What to Expect
                  </h2>
                  <p className="text-gray-700 font-[var(--font-poppins)] leading-relaxed mb-6">
                    ERP implementation failures are common — Gartner estimates 55–75% of ERP projects exceed budget or timeline. Here's a realistic view of what to expect:
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
                    <table className="w-full text-sm font-[var(--font-poppins)]">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left p-4 font-semibold text-brand-navy">Metric</th>
                          <th className="text-center p-4 font-semibold text-brand-navy">SAP B1</th>
                          <th className="text-center p-4 font-semibold text-brand-navy">Odoo</th>
                          <th className="text-center p-4 font-semibold text-brand-navy">NetSuite</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Typical Timeline", "3–9 months", "2–6 months", "3–9 months"],
                          ["Go-Live Success Rate", "~65%", "~70%", "~68%"],
                          ["Key Risk", "Partner dependency", "Customization debt", "Scope creep"],
                          ["Training Time", "2–4 weeks", "1–2 weeks", "2–3 weeks"],
                          ["Data Migration", "Moderate complexity", "Moderate complexity", "High complexity"],
                        ].map(([metric, sap, odoo, netsuite], i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="p-4 font-medium text-brand-navy">{metric}</td>
                            <td className="p-4 text-center text-gray-700">{sap}</td>
                            <td className="p-4 text-center text-gray-700">{odoo}</td>
                            <td className="p-4 text-center text-gray-700">{netsuite}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">Keys to a Successful ERP Implementation</h3>
                  <div className="space-y-3">
                    {[
                      { num: "01", title: "Define scope before you sign anything", desc: "Document every process that needs to be in the ERP before vendor discussions. Scope creep is the #1 cause of budget overruns." },
                      { num: "02", title: "Clean your data first", desc: "Data migration accounts for 30–40% of implementation effort. Audit and clean your master data (customers, vendors, products) before migration." },
                      { num: "03", title: "Assign an internal champion", desc: "Successful implementations have a dedicated internal project manager who owns the relationship with the implementation partner." },
                      { num: "04", title: "Don't over-customize", desc: "Every customization adds implementation cost and maintenance burden. Accept standard functionality wherever possible." },
                      { num: "05", title: "Plan for 3 months of parallel running", desc: "Keep your old system running alongside the new ERP for at least one full financial reporting cycle." },
                    ].map((item) => (
                      <div key={item.num} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                        <span className="font-[family-name:var(--font-syne)] text-2xl font-bold text-brand-teal/30 leading-none shrink-0">{item.num}</span>
                        <div>
                          <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy text-sm mb-1">{item.title}</h4>
                          <p className="text-gray-600 text-sm font-[var(--font-poppins)]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="mb-12">
                  <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                    Conclusion & Recommendations
                  </h2>
                  <p className="text-gray-700 font-[var(--font-poppins)] leading-relaxed mb-4">
                    There's no universally "best" ERP — only the best fit for your specific business stage, industry, and budget. Here's our final recommendation matrix:
                  </p>
                  <div className="bg-brand-navy/5 border border-brand-navy/10 rounded-2xl p-6 mb-6">
                    <ul className="space-y-3 text-sm font-[var(--font-poppins)]">
                      <li className="flex items-start gap-3"><Target className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" /><span><strong>Revenue $1M–$10M, tight budget:</strong> Start with Odoo Community or Standard. You can grow into it.</span></li>
                      <li className="flex items-start gap-3"><Target className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" /><span><strong>Revenue $10M–$50M, manufacturing/distribution:</strong> SAP Business One with a certified regional partner.</span></li>
                      <li className="flex items-start gap-3"><Target className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" /><span><strong>Revenue $5M–$100M+, fast growth/SaaS/multi-entity:</strong> NetSuite — the scalability and financial depth justify the premium.</span></li>
                      <li className="flex items-start gap-3"><Target className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" /><span><strong>Revenue $5M–$30M, ecommerce/retail:</strong> Odoo Enterprise for seamless ecommerce + accounting integration.</span></li>
                    </ul>
                  </div>
                  <p className="text-gray-700 font-[var(--font-poppins)] leading-relaxed">
                    Before committing to any platform, run a structured selection process: define requirements, shortlist 2–3 vendors, conduct demos with your real data, and check references from companies in your industry and revenue range. An independent ERP consultant can save you from a costly mismatch.
                  </p>
                  <p className="text-gray-700 font-[var(--font-poppins)] leading-relaxed mt-4">
                    MZBPO's outsourced accounting team works with all three platforms and can help you assess readiness, manage the financial transition, and ensure your chart of accounts and reporting structures are optimized for your chosen ERP.
                  </p>
                </section>

                {/* Related Posts */}
                <section className="mb-12">
                  <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-brand-navy mb-6">
                    Related Articles
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((post) => (
                      <Link
                        key={post.href}
                        href={post.href}
                        className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <div className="p-4">
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy text-sm mb-2 group-hover:text-brand-teal transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-500 text-xs font-[var(--font-poppins)] line-clamp-2">{post.description}</p>
                          <span className="inline-flex items-center gap-1 text-brand-teal text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                            Read more <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </article>
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
