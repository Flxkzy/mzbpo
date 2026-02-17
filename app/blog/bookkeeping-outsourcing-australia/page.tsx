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
  User,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  DollarSign,
  TrendingUp,
  Building2,
  Users,
  Zap,
  Globe,
  Shield,
  FileText,
  BarChart3,
  Calculator,
  MapPin,
  AlertTriangle,
  Landmark,
  HardHat,
  Leaf,
  Briefcase,
  ShoppingBag,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Bookkeeping Outsourcing for Australian Businesses: Complete Guide",
  description:
    "Complete guide to outsourcing bookkeeping for Australian businesses. Covers BAS, GST, PAYG, superannuation, STP compliance, AUD pricing, and choosing the right offshore provider.",
  alternates: { canonical: "/blog/bookkeeping-outsourcing-australia" },
  openGraph: {
    title: "Bookkeeping Outsourcing for Australian Businesses: Complete Guide | MZBPO",
    description:
      "Complete guide to outsourcing bookkeeping for Australian businesses. Covers BAS, GST, PAYG, superannuation, STP compliance, and AUD pricing.",
    url: "https://www.mzbpo.com/blog/bookkeeping-outsourcing-australia",
    type: "article",
    publishedTime: "2026-01-22T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Bookkeeping Outsourcing for Australian Businesses Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookkeeping Outsourcing for Australian Businesses: Complete Guide",
    description:
      "Complete guide to outsourcing bookkeeping for Australian businesses. BAS, GST, PAYG, superannuation, STP compliance, and AUD pricing.",
    images: [
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&h=630&fit=crop",
    ],
  },
}

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "why-outsourcing", title: "Why Australian Businesses Are Outsourcing" },
  { id: "compliance-requirements", title: "Australian Compliance Requirements" },
  { id: "pricing", title: "Pricing for Australian Businesses" },
  { id: "ato-compliance", title: "ATO Compliance and Lodgement" },
  { id: "choosing-provider", title: "Choosing a Provider" },
  { id: "time-zone-advantages", title: "Time Zone Advantages" },
  { id: "industries", title: "Industries Benefiting in Australia" },
  { id: "conclusion", title: "Conclusion" },
]

const pricingTiers = [
  {
    name: "Basic Bookkeeping",
    priceRange: "A$400 - A$900/mo",
    description: "Essential bookkeeping for small Australian businesses with straightforward BAS obligations",
    features: [
      "Transaction categorization (GST coded)",
      "Bank reconciliations",
      "Monthly financial statements",
      "Basic BAS preparation support",
      "Expense tracking with GST classification",
    ],
    bestFor: "Sole traders, micro-businesses under A$500K revenue",
  },
  {
    name: "Full-Service Bookkeeping",
    priceRange: "A$900 - A$2,800/mo",
    description: "Comprehensive bookkeeping with BAS lodgement, AP/AR, and payroll journal support",
    features: [
      "Everything in Basic",
      "Accounts payable & receivable management",
      "BAS preparation and lodgement support",
      "Payroll journal entries (STP aligned)",
      "Monthly close with reporting",
      "Superannuation tracking",
    ],
    bestFor: "Growing SMEs A$500K - A$5M revenue",
  },
  {
    name: "Bookkeeping + Controller",
    priceRange: "A$2,800 - A$7,000/mo",
    description: "Full bookkeeping with financial oversight, AASB-compliant reporting, and strategic analysis",
    features: [
      "Everything in Full-Service",
      "Controller oversight & review",
      "Budget vs. actual analysis",
      "Cash flow forecasting (AUD)",
      "Custom management reporting",
      "Internal controls review",
      "AASB-compliant financial statements",
    ],
    bestFor: "Established businesses A$5M - A$30M revenue",
  },
  {
    name: "Full Finance Function",
    priceRange: "A$7,000 - A$18,000+/mo",
    description: "Complete outsourced accounting department with CFO-level support for Australian operations",
    features: [
      "Everything in Controller tier",
      "Fractional CFO services",
      "Strategic financial planning",
      "Board and investor reporting",
      "Tax planning coordination with your tax agent",
      "Multi-entity consolidation",
      "R&D tax incentive tracking",
    ],
    bestFor: "Companies A$30M+ or with complex multi-entity structures",
  },
]

const relatedPosts = [
  {
    title: "How Much Does Outsourced Bookkeeping Cost in 2026?",
    href: "/blog/outsourced-bookkeeping-cost",
    description: "Complete pricing guide for outsourced bookkeeping services globally.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=250&fit=crop",
  },
  {
    title: "In-House vs Outsourced Accounting: Complete Cost Comparison",
    href: "/blog/in-house-vs-outsourced-accounting",
    description: "Compare the true costs of in-house teams versus outsourcing.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
  },
  {
    title: "Month-End Close Checklist: Best Practices",
    href: "/blog/month-end-close-checklist",
    description: "Streamline your monthly close process with this comprehensive guide.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
]

export default function BlogPost() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <article>
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
                <Link href="/" className="hover:text-brand-teal transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/blog" className="hover:text-brand-teal transition-colors">
                  Blog
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white/80">Bookkeeping Outsourcing Australia</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <Globe className="w-4 h-4" />
                <span>Country Guide</span>
              </div>

              {/* Title */}
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Bookkeeping Outsourcing for{" "}
                <span className="text-brand-teal">Australian Businesses</span>: Complete Guide
              </h1>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                Everything Australian businesses need to know about outsourcing bookkeeping—from BAS
                and GST compliance to AUD pricing, ATO requirements, and choosing the right offshore
                provider.
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>MZBPO Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>January 22, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>12 min read</span>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative -mt-8 mb-12 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1920&h=820&fit=crop"
                  alt="Sydney Opera House and harbour representing Australian business landscape"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>

          {/* Content Layout */}
          <div className="max-w-7xl mx-auto px-6 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Table of Contents - Sidebar */}
              <aside className="lg:col-span-3">
                <div className="lg:sticky lg:top-32">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="font-[family-name:var(--font-syne)] text-sm font-bold text-brand-navy uppercase tracking-wider mb-4">
                      Table of Contents
                    </h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="block text-sm text-gray-600 hover:text-brand-teal transition-colors py-1 font-[var(--font-poppins)]"
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Quick CTA */}
                  <div className="mt-6 bg-brand-navy rounded-2xl p-6">
                    <p className="text-white font-[family-name:var(--font-syne)] font-bold mb-3">
                      Serving Australian Businesses
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      Get a custom quote for BAS-ready bookkeeping outsourcing tailored to your
                      Australian operations.
                    </p>
                    <a
                      href="/meeting"
                      className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all"
                    >
                      Get AUD Pricing
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Quick Reference - AUD Pricing */}
                  <div className="mt-6 bg-brand-teal/10 rounded-2xl p-6 border border-brand-teal/20">
                    <h4 className="font-[family-name:var(--font-syne)] text-sm font-bold text-brand-navy mb-4">
                      AUD Pricing Guide
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Basic</span>
                        <span className="font-semibold text-brand-navy">A$400-$900/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Full-Service</span>
                        <span className="font-semibold text-brand-navy">A$900-$2,800/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">+ Controller</span>
                        <span className="font-semibold text-brand-navy">A$2,800-$7,000/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Full Finance</span>
                        <span className="font-semibold text-brand-navy">A$7,000-$18,000+/mo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-9">
                <div className="prose prose-lg max-w-none font-[var(--font-poppins)]">
                  {/* Introduction */}
                  <section id="introduction" className="scroll-mt-32 mb-12">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Australia's bookkeeping outsourcing market has surged in recent years, driven by
                      a persistent skills shortage, rising local wages, and the unique compliance
                      demands of the Australian Taxation Office (ATO). For Australian business owners,
                      outsourcing bookkeeping is no longer a cost-cutting measure—it's a strategic
                      decision that unlocks better compliance, faster reporting, and access to
                      qualified professionals at a fraction of local hiring costs.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Unlike other markets, Australian bookkeeping carries specific regulatory
                      requirements: Business Activity Statements (BAS), Goods and Services Tax (GST)
                      coding, Pay As You Go (PAYG) withholding, compulsory superannuation, and Single
                      Touch Payroll (STP) compliance. Any outsourcing provider serving Australian
                      clients must understand these obligations inside and out.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      This guide covers everything you need to evaluate, select, and manage an
                      outsourced bookkeeping provider for your Australian business—including AUD
                      pricing, compliance requirements, time zone considerations, and industry-specific
                      needs.
                    </p>
                  </section>

                  {/* Key Stats Banner */}
                  <div className="bg-gradient-to-r from-brand-navy to-brand-navy/90 rounded-2xl p-8 my-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                          <DollarSign className="w-6 h-6 text-brand-teal" />
                        </div>
                        <div className="text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                          40-65%
                        </div>
                        <div className="text-white/70 text-sm mt-1">
                          Cost savings vs. local Australian hire
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-brand-teal" />
                        </div>
                        <div className="text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                          A$75K+
                        </div>
                        <div className="text-white/70 text-sm mt-1">
                          Average local bookkeeper salary (incl. super)
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                          <Users className="w-6 h-6 text-brand-teal" />
                        </div>
                        <div className="text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                          2.4M+
                        </div>
                        <div className="text-white/70 text-sm mt-1">
                          Active small businesses in Australia
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Why Outsourcing */}
                  <section id="why-outsourcing" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Why Australian Businesses Are Outsourcing Bookkeeping
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The decision to outsource bookkeeping in Australia is driven by a unique
                      combination of market forces that make local hiring increasingly difficult and
                      expensive.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2 flex items-center gap-2">
                          <Users className="w-5 h-5 text-brand-teal" />
                          Acute Talent Shortage
                        </h3>
                        <p className="text-gray-600 mb-3">
                          Australia faces a chronic shortage of qualified bookkeepers and accountants.
                          The Australian Bureau of Statistics consistently lists accounting
                          professionals on the skills shortage list, and competition for experienced
                          bookkeepers—especially those with Xero or MYOB expertise—has driven salaries
                          well above A$65,000 per year for mid-level roles.
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2 flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-brand-teal" />
                          Rising Local Costs
                        </h3>
                        <p className="text-gray-600 mb-3">
                          The true cost of an in-house bookkeeper in Australia extends far beyond
                          salary. When you factor in the 11.5% superannuation guarantee, workers'
                          compensation insurance, leave entitlements (4 weeks annual + personal leave),
                          payroll tax (state-dependent), and office overhead, the total cost can exceed
                          A$90,000-A$110,000 per year.
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-brand-teal" />
                          AUD Exchange Rate Advantage
                        </h3>
                        <p className="text-gray-600 mb-3">
                          The Australian dollar's position against currencies in major outsourcing
                          destinations creates significant purchasing power. A bookkeeper that costs
                          A$75,000+ locally can be engaged through an offshore provider for
                          A$15,000-A$35,000 annually—without sacrificing quality or compliance
                          knowledge.
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-brand-teal" />
                          Cloud Accounting Adoption
                        </h3>
                        <p className="text-gray-600 mb-3">
                          Australia leads the world in cloud accounting adoption, with Xero
                          headquartered in the region. Over 80% of Australian SMEs now use cloud
                          platforms like Xero, MYOB, or QuickBooks Online, making remote bookkeeping
                          seamless. Your outsourced team accesses the same software, in real time, from
                          anywhere in the world.
                        </p>
                      </div>
                    </div>

                    {/* Cost Comparison Table */}
                    <div className="bg-brand-navy rounded-2xl p-8 text-white mb-6">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-6">
                        In-House vs. Outsourced: Australian Cost Comparison
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-white/60 text-sm uppercase tracking-wider mb-4">
                            In-House Bookkeeper (Australia)
                          </h4>
                          <ul className="space-y-2 text-white/80">
                            <li className="flex justify-between">
                              <span>Base salary</span>
                              <span>A$65,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Superannuation (11.5%)</span>
                              <span>A$7,475</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Workers' comp insurance</span>
                              <span>A$1,300</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Leave entitlements</span>
                              <span>A$8,500</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Payroll tax (varies by state)</span>
                              <span>A$3,500</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Software & equipment</span>
                              <span>A$3,600</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Training & CPD</span>
                              <span>A$2,000</span>
                            </li>
                            <li className="flex justify-between border-t border-white/20 pt-2 mt-2 font-bold">
                              <span>Total Annual Cost</span>
                              <span className="text-red-400">A$91,375</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white/60 text-sm uppercase tracking-wider mb-4">
                            Outsourced Bookkeeping
                          </h4>
                          <ul className="space-y-2 text-white/80">
                            <li className="flex justify-between">
                              <span>Monthly fee (full-service)</span>
                              <span>A$1,800 x 12</span>
                            </li>
                            <li className="flex justify-between">
                              <span>No superannuation</span>
                              <span>A$0</span>
                            </li>
                            <li className="flex justify-between">
                              <span>No workers' comp</span>
                              <span>A$0</span>
                            </li>
                            <li className="flex justify-between">
                              <span>No leave entitlements</span>
                              <span>A$0</span>
                            </li>
                            <li className="flex justify-between">
                              <span>No payroll tax</span>
                              <span>A$0</span>
                            </li>
                            <li className="flex justify-between">
                              <span>No recruitment costs</span>
                              <span>A$0</span>
                            </li>
                            <li className="flex justify-between border-t border-white/20 pt-2 mt-2 font-bold">
                              <span>Total Annual Cost</span>
                              <span className="text-brand-teal">A$21,600</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-white/20 text-center">
                        <p className="text-brand-teal text-2xl font-bold font-[family-name:var(--font-syne)]">
                          Annual Savings: A$69,775 (76%)
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Compliance Requirements */}
                  <section id="compliance-requirements" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Australian Compliance Requirements Your Provider Must Know
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Australian bookkeeping is governed by a complex regulatory framework. Any
                      outsourcing provider must demonstrate thorough knowledge of these requirements to
                      keep your business compliant with the ATO.
                    </p>

                    <div className="space-y-6 mb-8">
                      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6 md:p-8">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                              <FileText className="w-6 h-6 text-brand-teal" />
                            </div>
                            <div>
                              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-2">
                                Business Activity Statements (BAS)
                              </h3>
                              <p className="text-gray-600 mb-4">
                                Every GST-registered business must lodge BAS—either monthly, quarterly,
                                or annually. Your outsourced bookkeeper must correctly code all
                                transactions for GST (10%), GST-free, input-taxed, and out-of-scope
                                supplies. Errors in BAS lodgement can trigger ATO audits and penalties
                                of up to 75% of the shortfall amount.
                              </p>
                              <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-sm font-semibold text-brand-navy mb-2">BAS includes reporting on:</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                  <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                                    GST collected and paid
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                                    PAYG income tax instalments
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                                    PAYG withholding from employees
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                                    Fringe Benefits Tax (FBT) instalments
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                                    Luxury Car Tax and Wine Equalisation Tax (if applicable)
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6 md:p-8">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                              <Calculator className="w-6 h-6 text-brand-teal" />
                            </div>
                            <div>
                              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-2">
                                GST (Goods and Services Tax)
                              </h3>
                              <p className="text-gray-600 mb-4">
                                Australia's 10% GST applies to most goods and services. Your bookkeeper
                                must correctly classify every transaction—distinguishing between
                                GST-inclusive, GST-exclusive, GST-free (fresh food, medical, education),
                                and input-taxed (financial supplies, residential rent) items. Incorrect
                                GST classification is one of the most common BAS errors the ATO
                                identifies.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6 md:p-8">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                              <DollarSign className="w-6 h-6 text-brand-teal" />
                            </div>
                            <div>
                              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-2">
                                PAYG Withholding
                              </h3>
                              <p className="text-gray-600 mb-4">
                                Employers must withhold tax from employee wages and report these amounts
                                on their BAS. Your outsourced bookkeeper needs to ensure PAYG
                                withholding amounts align with ATO tax tables, are correctly reported on
                                BAS, and reconcile with Single Touch Payroll submissions. Failure to
                                withhold and remit PAYG can result in director penalty notices.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6 md:p-8">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                              <Shield className="w-6 h-6 text-brand-teal" />
                            </div>
                            <div>
                              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-2">
                                Superannuation
                              </h3>
                              <p className="text-gray-600 mb-4">
                                The Superannuation Guarantee (SG) requires employers to contribute 11.5%
                                of an employee's ordinary time earnings to their nominated super fund
                                (rising to 12% from 1 July 2025). Contributions must be paid at least
                                quarterly by the 28th day after the quarter ends. Late payments incur
                                the Superannuation Guarantee Charge (SGC), which includes a
                                non-deductible administration fee and interest.
                              </p>
                              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                                <p className="text-amber-800 text-sm flex items-start gap-2">
                                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                  <span>
                                    <strong>Important:</strong> Super must be paid to the correct fund by
                                    the quarterly deadline. Your bookkeeper should track due dates and
                                    ensure your payroll system calculates SG on all ordinary time
                                    earnings—including commissions, bonuses, and allowances in many cases.
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6 md:p-8">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                              <Zap className="w-6 h-6 text-brand-teal" />
                            </div>
                            <div>
                              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-2">
                                Single Touch Payroll (STP)
                              </h3>
                              <p className="text-gray-600 mb-4">
                                STP Phase 2 is now mandatory for all Australian employers. Every pay
                                run must be reported electronically to the ATO, including gross wages,
                                PAYG withholding, superannuation, and detailed breakdowns of allowances,
                                deductions, and overtime. Your outsourced bookkeeper must ensure your
                                payroll software is STP Phase 2 compliant and that each pay event is
                                reported correctly and on time.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Compliance Tip Box */}
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">Compliance Tip</p>
                      <p className="text-gray-600">
                        When evaluating an outsourcing provider for Australian bookkeeping, ask them
                        to walk you through how they handle a quarterly BAS lodgement from start to
                        finish. Their answer will quickly reveal whether they truly understand
                        Australian compliance or are generalising from other markets. At MZBPO, our
                        team is specifically trained in Australian tax codes, BAS requirements, and
                        STP reporting.
                      </p>
                    </div>
                  </section>

                  {/* Pricing Section */}
                  <section id="pricing" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Pricing for Australian Businesses (AUD)
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Pricing for outsourced bookkeeping in Australia varies based on service level,
                      transaction volume, and compliance complexity. Here are typical AUD price ranges
                      you can expect from quality providers in 2026.
                    </p>

                    <div className="space-y-6">
                      {pricingTiers.map((tier, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                        >
                          <div className="p-6 md:p-8">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                              <div>
                                <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy">
                                  {tier.name}
                                </h3>
                                <p className="text-gray-500 text-sm">{tier.description}</p>
                              </div>
                              <div className="text-2xl md:text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)] whitespace-nowrap">
                                {tier.priceRange}
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                              {tier.features.map((feature, fIdx) => (
                                <div
                                  key={fIdx}
                                  className="flex items-center gap-2 text-sm text-gray-600"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                            <div className="pt-4 border-t border-gray-100">
                              <p className="text-sm">
                                <strong className="text-brand-navy">Best for:</strong>{" "}
                                <span className="text-gray-600">{tier.bestFor}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Pricing Note */}
                    <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">
                        What Affects Your AUD Price?
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            factor: "Number of transactions per month",
                            impact: "High",
                          },
                          {
                            factor: "BAS lodgement frequency (monthly vs quarterly)",
                            impact: "Medium",
                          },
                          {
                            factor: "Number of employees (payroll complexity)",
                            impact: "High",
                          },
                          {
                            factor: "Multi-entity or multi-state operations",
                            impact: "High",
                          },
                          {
                            factor: "Industry-specific requirements (e.g., trust accounting)",
                            impact: "Medium",
                          },
                          {
                            factor: "Reporting complexity (management vs statutory)",
                            impact: "Medium",
                          },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">{item.factor}</span>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                item.impact === "High"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-amber-100 text-amber-700"
                              }`}
                            >
                              {item.impact} Impact
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mt-6">
                      For a broader comparison of outsourced bookkeeping pricing across markets, see
                      our complete guide:{" "}
                      <Link
                        href="/blog/outsourced-bookkeeping-cost"
                        className="text-brand-teal hover:underline"
                      >
                        How Much Does Outsourced Bookkeeping Cost in 2026?
                      </Link>
                    </p>
                  </section>

                  {/* ATO Compliance */}
                  <section id="ato-compliance" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      ATO Compliance and Lodgement
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Understanding the regulatory framework around who can lodge and report to the ATO
                      on your behalf is critical when outsourcing offshore.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white rounded-2xl border border-gray-200 p-6">
                        <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-4">
                          <Landmark className="w-6 h-6 text-brand-teal" />
                        </div>
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                          Tax Agent Requirements
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          Only registered Tax Agents with the Tax Practitioners Board (TPB) can
                          prepare and lodge income tax returns on behalf of clients. Your outsourced
                          bookkeeping provider can prepare the underlying data and reports, but final
                          tax lodgement must go through a registered Australian tax agent.
                        </p>
                        <div className="bg-brand-teal/5 rounded-lg p-3">
                          <p className="text-sm text-brand-navy font-medium">
                            MZBPO works directly with your registered tax agent to ensure seamless
                            data handover at year-end.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl border border-gray-200 p-6">
                        <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-4">
                          <FileText className="w-6 h-6 text-brand-teal" />
                        </div>
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                          BAS Agent Registration
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          To lodge BAS on behalf of a client for a fee, a person or entity must be a
                          registered BAS Agent with the TPB. Many outsourcing providers prepare BAS
                          for review and lodgement by the client's registered BAS or tax agent. This
                          is a fully compliant model used by thousands of Australian businesses.
                        </p>
                        <div className="bg-brand-teal/5 rounded-lg p-3">
                          <p className="text-sm text-brand-navy font-medium">
                            We prepare BAS-ready data packages that your BAS Agent can review and
                            lodge with confidence.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ATO Deadlines Table */}
                    <div className="bg-brand-navy rounded-2xl p-8 text-white">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-6">
                        Key ATO Reporting Deadlines
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-white/20">
                              <th className="text-left py-3 text-white/60 font-medium">Obligation</th>
                              <th className="text-left py-3 text-white/60 font-medium">Frequency</th>
                              <th className="text-left py-3 text-white/60 font-medium">Due Date</th>
                            </tr>
                          </thead>
                          <tbody className="text-white/80">
                            <tr className="border-b border-white/10">
                              <td className="py-3">Monthly BAS</td>
                              <td className="py-3">Monthly</td>
                              <td className="py-3">21st of the following month</td>
                            </tr>
                            <tr className="border-b border-white/10">
                              <td className="py-3">Quarterly BAS</td>
                              <td className="py-3">Quarterly</td>
                              <td className="py-3">28th after quarter end (28 Feb, 28 Apr, 28 Jul, 28 Oct)</td>
                            </tr>
                            <tr className="border-b border-white/10">
                              <td className="py-3">STP Finalisation</td>
                              <td className="py-3">Annual</td>
                              <td className="py-3">14 July each year</td>
                            </tr>
                            <tr className="border-b border-white/10">
                              <td className="py-3">Superannuation Guarantee</td>
                              <td className="py-3">Quarterly</td>
                              <td className="py-3">28th after quarter end</td>
                            </tr>
                            <tr className="border-b border-white/10">
                              <td className="py-3">PAYG Withholding Summary</td>
                              <td className="py-3">Annual</td>
                              <td className="py-3">14 August (if not using STP)</td>
                            </tr>
                            <tr>
                              <td className="py-3">TPAR (Taxable Payments Annual Report)</td>
                              <td className="py-3">Annual</td>
                              <td className="py-3">28 August</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Warning Box */}
                    <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-6">
                      <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Penalty Warning
                      </h4>
                      <p className="text-red-700 text-sm">
                        Late BAS lodgement penalties start at A$313 per 28-day period, up to a maximum
                        of A$1,565 per statement. For medium and large entities, penalties are
                        significantly higher. Superannuation Guarantee Charge for late payment includes
                        the SG shortfall amount, interest of 10% per annum, and a A$20 per-employee
                        per-quarter administration fee—and is not tax-deductible.
                      </p>
                    </div>
                  </section>

                  {/* Choosing a Provider */}
                  <section id="choosing-provider" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Choosing a Provider for Australian Operations
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Not all outsourcing providers are equipped to handle Australian bookkeeping. Here
                      are the critical criteria to evaluate when shortlisting providers.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {[
                        {
                          title: "CPA Australia / CA ANZ Qualifications",
                          description:
                            "Look for staff qualified or working towards CPA Australia, Chartered Accountants Australia and New Zealand (CA ANZ), or IPA qualifications. These credentials indicate familiarity with Australian standards.",
                        },
                        {
                          title: "AASB Knowledge",
                          description:
                            "Australian Accounting Standards Board (AASB) standards apply to all Australian financial reporting. Your provider should be fluent in AASB standards, not just IFRS or US GAAP.",
                        },
                        {
                          title: "ATO Compliance Experience",
                          description:
                            "Ask for specific examples of BAS preparation, GST coding, STP reporting, and superannuation tracking they've done for Australian clients. Generic bookkeeping experience isn't enough.",
                        },
                        {
                          title: "Xero / MYOB Proficiency",
                          description:
                            "Over 80% of Australian SMEs use Xero or MYOB. Your provider must be certified in these platforms, including add-ons like Dext (Receipt Bank), ApprovalMax, and Employmenthero.",
                        },
                        {
                          title: "Data Security & Privacy",
                          description:
                            "Australian Privacy Act and APPs (Australian Privacy Principles) apply. Ensure your provider has data handling policies compliant with Australian privacy law, including data residency awareness.",
                        },
                        {
                          title: "BKR or Global Network Membership",
                          description:
                            "Providers affiliated with global accounting networks like BKR International adhere to professional standards and quality control frameworks that protect your interests.",
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 rounded-xl p-5 border border-gray-100"
                        >
                          <h4 className="font-semibold text-brand-navy mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      ))}
                    </div>

                    {/* Evaluation Checklist */}
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-6">
                      <h3 className="font-[family-name:var(--font-syne)] font-bold text-amber-800 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" />
                        Provider Evaluation Checklist for Australian Businesses
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "Can they explain the difference between GST-free and input-taxed supplies?",
                          "Do they understand the Superannuation Guarantee Charge implications?",
                          "Can they prepare BAS with correct W1, W2, 1A, and 1B labels?",
                          "Are they familiar with STP Phase 2 disaggregation requirements?",
                          "Do they have experience with your industry's specific ATO reporting (e.g., TPAR)?",
                          "Can they handle state-based obligations like payroll tax thresholds?",
                          "Do they understand the difference between contractors and employees under ATO rules?",
                          "What is their process for year-end financial statement preparation?",
                        ].map((question, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-amber-800">
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <span>{question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">Why Choose MZBPO for Australian Bookkeeping?</p>
                      <p className="text-gray-600">
                        As the outsourcing arm of a{" "}
                        <Link
                          href="/blog/what-is-bkr-international"
                          className="text-brand-teal hover:underline"
                        >
                          BKR International member firm
                        </Link>
                        , MZBPO brings global standards with deep Australian compliance knowledge. Our
                        team is trained in Xero, MYOB, and QuickBooks Online, and we prepare BAS-ready
                        data packages, STP-aligned payroll journals, and AASB-compliant financial
                        statements for Australian businesses of all sizes.
                      </p>
                    </div>
                  </section>

                  {/* Time Zone Advantages */}
                  <section id="time-zone-advantages" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Time Zone Advantages of Offshore Outsourcing
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      One of the most underrated benefits of outsourcing bookkeeping from Australia is
                      the time zone differential. When managed well, it creates a powerful "follow the
                      sun" workflow that gives you faster turnaround than a local team.
                    </p>

                    <div className="bg-gradient-to-r from-brand-navy to-brand-navy/90 rounded-2xl p-8 mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                            <Clock className="w-6 h-6 text-brand-teal" />
                          </div>
                          <div className="text-xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                            Overnight Processing
                          </div>
                          <div className="text-white/70 text-sm mt-2">
                            Submit transactions at end of your day. Wake up to reconciled books, coded
                            expenses, and reports ready for review.
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                            <Zap className="w-6 h-6 text-brand-teal" />
                          </div>
                          <div className="text-xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                            Same-Day Turnaround
                          </div>
                          <div className="text-white/70 text-sm mt-2">
                            Urgent requests submitted in the Australian morning can be completed during
                            your provider's working day and ready before your next morning.
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                            <Users className="w-6 h-6 text-brand-teal" />
                          </div>
                          <div className="text-xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                            Overlap Hours
                          </div>
                          <div className="text-white/70 text-sm mt-2">
                            Most offshore locations share 2-5 hours of overlap with AEST/AEDT,
                            providing time for real-time communication and meetings.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                        <h4 className="font-semibold text-green-800 mb-2">How It Works in Practice</h4>
                        <ul className="text-sm text-green-700 space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>5:00 PM AEST: Your team submits invoices, receipts, and queries</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>6:00 PM - 2:00 AM AEST: Offshore team processes and reconciles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>8:00 AM AEST: You arrive to updated books, reports, and query responses</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                        <h4 className="font-semibold text-blue-800 mb-2">Month-End Acceleration</h4>
                        <ul className="text-sm text-blue-700 space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>Close Day 1: Bank recs and accruals completed overnight</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>Close Day 2: Draft financials ready for morning review</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>Close Day 3: Final statements issued—halving typical close times</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mt-6">
                      For a comprehensive month-end process, see our{" "}
                      <Link
                        href="/blog/month-end-close-checklist"
                        className="text-brand-teal hover:underline"
                      >
                        Month-End Close Checklist: Best Practices
                      </Link>
                      .
                    </p>
                  </section>

                  {/* Industries */}
                  <section id="industries" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Industries Benefiting From Bookkeeping Outsourcing in Australia
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      While outsourced bookkeeping benefits businesses across all sectors, certain
                      Australian industries see particularly strong returns due to their specific
                      compliance needs and operational complexity.
                    </p>

                    <div className="space-y-4">
                      <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <HardHat className="w-6 h-6 text-brand-teal" />
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                              Mining Services & Resources
                            </h3>
                            <p className="text-gray-600 text-sm">
                              Complex multi-site operations, FIFO workforce payroll, equipment
                              depreciation schedules, fuel tax credits, and project-based cost tracking.
                              Mining services companies often need TPAR (Taxable Payments Annual Report)
                              lodgement for contractor payments, which requires meticulous record-keeping
                              throughout the year.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <Leaf className="w-6 h-6 text-brand-teal" />
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                              Agriculture & Agribusiness
                            </h3>
                            <p className="text-gray-600 text-sm">
                              Seasonal revenue patterns, livestock and produce accounting, fuel tax
                              credits, drought and disaster relief tracking, and GST-free food supply
                              classifications. Agricultural businesses also benefit from the Farm
                              Management Deposits scheme, which requires careful bookkeeping to claim
                              correctly.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-6 h-6 text-brand-teal" />
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                              Professional Services
                            </h3>
                            <p className="text-gray-600 text-sm">
                              Law firms, engineering consultancies, IT companies, and architectural
                              practices with trust accounting requirements, WIP tracking, time-based
                              billing reconciliation, and contractor vs employee classification. These
                              businesses also commonly require TPAR lodgement and detailed project
                              profitability reporting.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <ShoppingBag className="w-6 h-6 text-brand-teal" />
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                              Retail & E-Commerce
                            </h3>
                            <p className="text-gray-600 text-sm">
                              High transaction volumes, inventory management, multi-channel sales
                              reconciliation (Shopify, Amazon AU, eBay), GST on mixed supplies, and
                              gift card/layby accounting. Retail businesses processing hundreds or
                              thousands of daily transactions benefit enormously from outsourced
                              bookkeeping efficiency.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <Building2 className="w-6 h-6 text-brand-teal" />
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">
                              Construction & Trades
                            </h3>
                            <p className="text-gray-600 text-sm">
                              Progress billing, retention tracking, subcontractor payments (TPAR
                              required), workers' compensation calculations, and project cost
                              allocation. Construction businesses face some of the highest compliance
                              burdens in Australia, including state-based security of payment acts and
                              contractor payment reporting to the ATO.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Industry Stats Banner */}
                    <div className="mt-8 bg-gradient-to-r from-brand-navy to-brand-navy/90 rounded-2xl p-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                            67%
                          </div>
                          <div className="text-white/70 text-sm mt-1">
                            Of Australian SMEs cite compliance as a top concern
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                            11+ hrs
                          </div>
                          <div className="text-white/70 text-sm mt-1">
                            Average weekly time owners spend on bookkeeping
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                            A$12B+
                          </div>
                          <div className="text-white/70 text-sm mt-1">
                            Annual Australian accounting services market
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Conclusion */}
                  <section id="conclusion" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Conclusion
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Outsourcing bookkeeping for your Australian business is a proven strategy to
                      reduce costs, improve compliance, and free up time to focus on growth. However,
                      the unique requirements of the Australian tax system mean you can't just choose
                      any provider—you need one with deep knowledge of BAS, GST, PAYG, superannuation,
                      and STP requirements.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The right outsourcing partner will function as an extension of your team,
                      delivering BAS-ready data, AASB-compliant financials, and proactive insights
                      that help you make better business decisions. With potential savings of 40-65%
                      compared to local hires and the added benefit of overnight processing, the case
                      for outsourcing is compelling for businesses of all sizes.
                    </p>

                    <div className="bg-brand-navy rounded-2xl p-8 text-white">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-4">
                        Key Takeaways
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Cost savings of 40-65%</strong> compared to hiring a local
                            Australian bookkeeper when factoring in super, leave, and overheads
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Australian compliance is non-negotiable</strong>—your provider must
                            understand BAS, GST coding, PAYG, superannuation, and STP Phase 2
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>AUD pricing ranges</strong> from A$400/month for basic bookkeeping
                            to A$18,000+/month for a full finance function
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>ATO lodgement rules matter</strong>—ensure your provider works with
                            your registered Tax Agent or BAS Agent for compliant lodgement
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Time zone differences are an advantage</strong>—overnight
                            processing means faster month-end closes and same-day turnaround
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Look for CPA/CA ANZ qualifications</strong>, Xero/MYOB
                            proficiency, and membership in global networks like BKR International
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Industry-specific needs vary</strong>—mining, agriculture,
                            construction, and professional services each have unique Australian
                            compliance requirements
                          </span>
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>

                {/* Author Box */}
                <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-brand-teal">MZ</span>
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy">
                        About MZBPO
                      </h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        MZBPO is the outsourcing arm of Muniff Ziauddin and Co., an independent
                        member of BKR International—the 5th largest global accounting association.
                        We provide outsourced bookkeeping, internal audit, payroll, and finance
                        services to growing businesses worldwide, with specialist expertise in
                        Australian compliance requirements.
                      </p>
                      <div className="flex gap-4 mt-4">
                        <Link
                          href="/services/bookkeeping-accounting"
                          className="text-sm text-brand-teal hover:underline font-medium"
                        >
                          Our Services →
                        </Link>
                        <Link
                          href="/meeting"
                          className="text-sm text-brand-teal hover:underline font-medium"
                        >
                          Get a Quote →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <CTASection
          headline="Ready to Outsource Your Australian Bookkeeping?"
          bodyText="Schedule a free consultation to discuss your BAS, GST, and compliance needs. Get a custom AUD quote tailored to your Australian business operations."
          ctaText="Get Your Custom AUD Quote"
          trackingContentName="Blog CTA - Bookkeeping Outsourcing Australia"
        />

        {/* Related Posts */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-10 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post, idx) => (
                <Link
                  key={idx}
                  href={post.href}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-[var(--font-poppins)] mb-4">
                      {post.description}
                    </p>
                    <span className="text-brand-teal text-sm font-semibold font-[var(--font-poppins)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bookkeeping Outsourcing for Australian Businesses: Complete Guide",
            description:
              "Complete guide to outsourcing bookkeeping for Australian businesses. Covers BAS, GST, PAYG, superannuation, STP compliance, AUD pricing, and choosing the right offshore provider.",
            image:
              "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&h=630&fit=crop",
            datePublished: "2026-01-22T00:00:00.000Z",
            dateModified: "2026-01-22T00:00:00.000Z",
            author: {
              "@type": "Organization",
              name: "MZBPO",
              url: "https://www.mzbpo.com",
            },
            publisher: {
              "@type": "Organization",
              name: "MZBPO",
              logo: {
                "@type": "ImageObject",
                url: "https://www.mzbpo.com/logo/logo.webp",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.mzbpo.com/blog/bookkeeping-outsourcing-australia",
            },
          }),
        }}
      />
    </div>
  )
}
