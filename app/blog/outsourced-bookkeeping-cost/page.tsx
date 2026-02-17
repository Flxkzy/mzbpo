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
  HelpCircle,
  Calculator,
  FileText,
  BarChart3,
  Shield,
} from "lucide-react"

export const metadata: Metadata = {
  title: "How Much Does Outsourced Bookkeeping Cost in 2026? Complete Pricing Guide",
  description:
    "Understand outsourced bookkeeping pricing models, cost ranges, and what factors affect your monthly fee. Compare costs and find the right solution for your business budget.",
  alternates: { canonical: "/blog/outsourced-bookkeeping-cost" },
  openGraph: {
    title: "How Much Does Outsourced Bookkeeping Cost in 2026? | MZBPO",
    description:
      "Understand outsourced bookkeeping pricing models, cost ranges, and what factors affect your monthly fee.",
    url: "https://www.mzbpo.com/blog/outsourced-bookkeeping-cost",
    type: "article",
    publishedTime: "2025-12-08T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Outsourced Bookkeeping Cost Guide",
      },
    ],
  },
}

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "pricing-models", title: "Pricing Models Explained" },
  { id: "cost-ranges", title: "Typical Cost Ranges" },
  { id: "cost-factors", title: "What Affects Your Cost" },
  { id: "hidden-costs", title: "Hidden Costs to Watch For" },
  { id: "roi-calculation", title: "Calculating Your ROI" },
  { id: "choosing-provider", title: "Choosing the Right Provider" },
  { id: "conclusion", title: "Conclusion" },
]

const pricingTiers = [
  {
    name: "Basic Bookkeeping",
    priceRange: "$300 - $800/mo",
    description: "Essential bookkeeping for small businesses with straightforward needs",
    features: [
      "Transaction categorization",
      "Bank reconciliations",
      "Monthly financial statements",
      "Basic expense tracking",
    ],
    bestFor: "Startups, freelancers, small businesses under $500K revenue",
  },
  {
    name: "Full-Service Bookkeeping",
    priceRange: "$800 - $2,500/mo",
    description: "Comprehensive bookkeeping with accounts payable/receivable management",
    features: [
      "Everything in Basic",
      "Accounts payable processing",
      "Accounts receivable management",
      "Payroll journal entries",
      "Monthly close with reporting",
      "Accrual-based accounting",
    ],
    bestFor: "Growing businesses $500K - $5M revenue",
  },
  {
    name: "Bookkeeping + Controller",
    priceRange: "$2,500 - $6,000/mo",
    description: "Full bookkeeping with financial oversight and strategic reporting",
    features: [
      "Everything in Full-Service",
      "Controller oversight",
      "Budget vs. actual analysis",
      "Cash flow forecasting",
      "Custom reporting",
      "Internal controls review",
    ],
    bestFor: "Established businesses $5M - $20M revenue",
  },
  {
    name: "Full Finance Function",
    priceRange: "$6,000 - $15,000+/mo",
    description: "Complete outsourced accounting department with CFO-level support",
    features: [
      "Everything in Controller tier",
      "Fractional CFO services",
      "Strategic financial planning",
      "Board/investor reporting",
      "M&A support",
      "Fundraising assistance",
    ],
    bestFor: "Companies $20M+ or with complex needs",
  },
]

const costFactors = [
  {
    icon: FileText,
    factor: "Transaction Volume",
    description:
      "More transactions mean more work. A business processing 50 transactions monthly will pay less than one processing 500.",
    impact: "High",
  },
  {
    icon: Building2,
    factor: "Business Complexity",
    description:
      "Multiple entities, locations, currencies, or revenue streams increase complexity and cost.",
    impact: "High",
  },
  {
    icon: BarChart3,
    factor: "Reporting Requirements",
    description:
      "Custom reports, investor packages, or board presentations require additional time and expertise.",
    impact: "Medium",
  },
  {
    icon: Calculator,
    factor: "Accounting Method",
    description:
      "Accrual accounting requires more adjustments and reconciliations than cash-basis bookkeeping.",
    impact: "Medium",
  },
  {
    icon: Zap,
    factor: "Software Integration",
    description:
      "Using specialized industry software or needing multiple integrations can affect pricing.",
    impact: "Medium",
  },
  {
    icon: Shield,
    factor: "Cleanup Required",
    description:
      "Messy historical books require cleanup before ongoing services can begin, adding one-time costs.",
    impact: "One-time",
  },
]

const relatedPosts = [
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
  {
    title: "What is BKR International?",
    href: "/blog/what-is-bkr-international",
    description: "Learn about our global network and professional standards.",
    image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=400&h=250&fit=crop",
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
                <span className="text-white/80">Outsourced Bookkeeping Cost</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Pricing Guide</span>
              </div>

              {/* Title */}
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                How Much Does{" "}
                <span className="text-brand-teal">Outsourced Bookkeeping</span> Cost in 2026?
              </h1>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                A complete breakdown of pricing models, typical cost ranges, and factors that
                affect what you'll pay. Make informed decisions about your bookkeeping budget.
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>MZBPO Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>December 8, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>10 min read</span>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative -mt-8 mb-12 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1920&h=820&fit=crop"
                  alt="Calculator and financial documents representing bookkeeping costs"
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
                      Get a Custom Quote
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      See exactly what outsourced bookkeeping would cost for your business.
                    </p>
                    <a
                      href="/meeting"
                      className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all"
                    >
                      Get Pricing
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Quick Reference */}
                  <div className="mt-6 bg-brand-teal/10 rounded-2xl p-6 border border-brand-teal/20">
                    <h4 className="font-[family-name:var(--font-syne)] text-sm font-bold text-brand-navy mb-4">
                      Quick Reference
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Basic</span>
                        <span className="font-semibold text-brand-navy">$300-$800/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Full-Service</span>
                        <span className="font-semibold text-brand-navy">$800-$2,500/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">+ Controller</span>
                        <span className="font-semibold text-brand-navy">$2,500-$6,000/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Full Finance</span>
                        <span className="font-semibold text-brand-navy">$6,000-$15,000+/mo</span>
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
                      "How much will this cost?" It's the first question every business owner asks
                      when considering outsourced bookkeeping. The answer, frustratingly, is "it
                      depends"—but this guide will help you understand exactly what it depends on.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Outsourced bookkeeping costs range from as little as $300/month for basic
                      services to $15,000+/month for a full outsourced finance department. Where
                      you fall on this spectrum depends on your transaction volume, complexity,
                      and the level of service you need.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      In this guide, we'll break down the different pricing models, show you
                      typical cost ranges by service tier, and help you understand what factors
                      will affect your specific price. By the end, you'll be able to budget
                      accurately for outsourced bookkeeping and evaluate quotes from providers.
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
                          $300-$2,500
                        </div>
                        <div className="text-white/70 text-sm mt-1">
                          Typical monthly range for SMBs
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-brand-teal" />
                        </div>
                        <div className="text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                          40-60%
                        </div>
                        <div className="text-white/70 text-sm mt-1">
                          Savings vs. in-house bookkeeper
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                          <Users className="w-6 h-6 text-brand-teal" />
                        </div>
                        <div className="text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                          80%
                        </div>
                        <div className="text-white/70 text-sm mt-1">
                          Of small businesses outsource some finance functions
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Models */}
                  <section id="pricing-models" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Pricing Models Explained
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Outsourced bookkeeping providers use several pricing models. Understanding
                      these helps you compare quotes and choose the right fit for your business.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2 flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-brand-teal" />
                          Fixed Monthly Fee
                        </h3>
                        <p className="text-gray-600 mb-3">
                          A set monthly price for a defined scope of services. Most common model
                          for ongoing bookkeeping relationships.
                        </p>
                        <div className="flex gap-4 text-sm">
                          <span className="text-green-600">
                            <strong>Pro:</strong> Predictable budgeting
                          </span>
                          <span className="text-red-600">
                            <strong>Con:</strong> May not flex with volume changes
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2 flex items-center gap-2">
                          <Clock className="w-5 h-5 text-brand-teal" />
                          Hourly Rate
                        </h3>
                        <p className="text-gray-600 mb-3">
                          Pay for actual time spent. Common for project work, cleanup, or
                          variable-scope engagements. Rates typically range from $25-$150/hour.
                        </p>
                        <div className="flex gap-4 text-sm">
                          <span className="text-green-600">
                            <strong>Pro:</strong> Pay only for work done
                          </span>
                          <span className="text-red-600">
                            <strong>Con:</strong> Unpredictable monthly costs
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-brand-teal" />
                          Per-Transaction Pricing
                        </h3>
                        <p className="text-gray-600 mb-3">
                          Charges based on number of transactions processed. Scales with your
                          business volume.
                        </p>
                        <div className="flex gap-4 text-sm">
                          <span className="text-green-600">
                            <strong>Pro:</strong> Scales naturally with growth
                          </span>
                          <span className="text-red-600">
                            <strong>Con:</strong> Costs rise as business grows
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2 flex items-center gap-2">
                          <Users className="w-5 h-5 text-brand-teal" />
                          Full-Time Equivalent (FTE)
                        </h3>
                        <p className="text-gray-600 mb-3">
                          Dedicated resource(s) priced as a fraction of full-time cost. Common for
                          larger engagements needing consistent attention.
                        </p>
                        <div className="flex gap-4 text-sm">
                          <span className="text-green-600">
                            <strong>Pro:</strong> Dedicated attention
                          </span>
                          <span className="text-red-600">
                            <strong>Con:</strong> Higher minimum commitment
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">Our Approach at MZBPO</p>
                      <p className="text-gray-600">
                        We primarily use fixed monthly pricing because it gives you cost certainty
                        and aligns our interests—we're motivated to work efficiently. We re-evaluate
                        pricing quarterly if your business changes significantly. Learn more about
                        our{" "}
                        <Link
                          href="/services/bookkeeping-accounting"
                          className="text-brand-teal hover:underline"
                        >
                          bookkeeping and accounting services
                        </Link>
                        .
                      </p>
                    </div>
                  </section>

                  {/* Cost Ranges */}
                  <section id="cost-ranges" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Typical Cost Ranges by Service Level
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Here's what you can expect to pay at each service tier in 2026. These ranges
                      are based on US market rates and typical small-to-medium business needs.
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
                  </section>

                  {/* Cost Factors */}
                  <section id="cost-factors" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      What Affects Your Cost
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Understanding these factors helps you estimate where you'll fall within the
                      price ranges and negotiate effectively with providers.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {costFactors.map((factor, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                              <factor.icon className="w-6 h-6 text-brand-teal" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">
                                  {factor.factor}
                                </h3>
                                <span
                                  className={`text-xs px-2 py-0.5 rounded-full ${
                                    factor.impact === "High"
                                      ? "bg-red-100 text-red-700"
                                      : factor.impact === "Medium"
                                      ? "bg-amber-100 text-amber-700"
                                      : "bg-blue-100 text-blue-700"
                                  }`}
                                >
                                  {factor.impact} Impact
                                </span>
                              </div>
                              <p className="text-sm text-gray-600">{factor.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Hidden Costs */}
                  <section id="hidden-costs" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Hidden Costs to Watch For
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      When comparing quotes, look beyond the monthly fee. These additional costs
                      can significantly impact your total spend.
                    </p>

                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-6">
                      <h3 className="font-[family-name:var(--font-syne)] font-bold text-amber-800 mb-4 flex items-center gap-2">
                        <HelpCircle className="w-5 h-5" />
                        Questions to Ask Providers
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "Is there a setup or onboarding fee? How much?",
                          "What's included in the monthly fee vs. billed separately?",
                          "Are software costs (QuickBooks, Xero, etc.) included?",
                          "What happens if I exceed the transaction limit?",
                          "Are there charges for phone calls or questions?",
                          "Is year-end close and tax prep support included?",
                          "What's the cost for historical cleanup if my books are messy?",
                          "Are there minimum contract terms or cancellation fees?",
                        ].map((question, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-amber-800">
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <span>{question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                        <h4 className="font-semibold text-red-800 mb-2">Common Add-On Costs</h4>
                        <ul className="text-sm text-red-700 space-y-1">
                          <li>• Onboarding/setup: $500 - $5,000</li>
                          <li>• Software licenses: $20 - $200/mo</li>
                          <li>• Catch-up/cleanup: $50 - $150/hour</li>
                          <li>• Year-end close: $500 - $2,000</li>
                          <li>• Tax prep support: $500 - $3,000</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                        <h4 className="font-semibold text-green-800 mb-2">What Should Be Included</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• All routine monthly tasks</li>
                          <li>• Standard financial statements</li>
                          <li>• Reasonable communication/questions</li>
                          <li>• Bank and credit card reconciliations</li>
                          <li>• Access to your accounting software</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* ROI Calculation */}
                  <section id="roi-calculation" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Calculating Your ROI
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Outsourced bookkeeping isn't just a cost—it's an investment that should
                      deliver returns. Here's how to evaluate the value you're getting.
                    </p>

                    <div className="bg-brand-navy rounded-2xl p-8 text-white mb-6">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-6">
                        Cost Comparison Example
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-white/60 text-sm uppercase tracking-wider mb-4">
                            In-House Bookkeeper
                          </h4>
                          <ul className="space-y-2 text-white/80">
                            <li className="flex justify-between">
                              <span>Salary</span>
                              <span>$50,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Benefits (20%)</span>
                              <span>$10,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Payroll taxes</span>
                              <span>$4,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Software</span>
                              <span>$2,400</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Training</span>
                              <span>$1,500</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Recruiting</span>
                              <span>$5,000</span>
                            </li>
                            <li className="flex justify-between border-t border-white/20 pt-2 mt-2 font-bold">
                              <span>Total Annual Cost</span>
                              <span className="text-red-400">$72,900</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white/60 text-sm uppercase tracking-wider mb-4">
                            Outsourced Bookkeeping
                          </h4>
                          <ul className="space-y-2 text-white/80">
                            <li className="flex justify-between">
                              <span>Monthly fee</span>
                              <span>$1,500 x 12</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Software (often included)</span>
                              <span>$0</span>
                            </li>
                            <li className="flex justify-between">
                              <span>No benefits</span>
                              <span>$0</span>
                            </li>
                            <li className="flex justify-between">
                              <span>No recruiting</span>
                              <span>$0</span>
                            </li>
                            <li className="flex justify-between">
                              <span>No turnover risk</span>
                              <span>$0</span>
                            </li>
                            <li className="flex justify-between border-t border-white/20 pt-2 mt-2 font-bold">
                              <span>Total Annual Cost</span>
                              <span className="text-brand-teal">$18,000</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-white/20 text-center">
                        <p className="text-brand-teal text-2xl font-bold font-[family-name:var(--font-syne)]">
                          Annual Savings: $54,900 (75%)
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      For a detailed comparison of in-house versus outsourced costs, see our
                      complete guide:{" "}
                      <Link
                        href="/blog/in-house-vs-outsourced-accounting"
                        className="text-brand-teal hover:underline"
                      >
                        In-House vs Outsourced Accounting: Complete Cost Comparison
                      </Link>
                      .
                    </p>
                  </section>

                  {/* Choosing Provider */}
                  <section id="choosing-provider" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Choosing the Right Provider
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Price isn't everything. The cheapest option may cost you more in errors,
                      delays, and frustration. Here's what to evaluate beyond the quote.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {[
                        {
                          title: "Experience and Credentials",
                          description:
                            "Look for CPAs, certified bookkeepers, or firms with professional affiliations like BKR International.",
                        },
                        {
                          title: "Industry Knowledge",
                          description:
                            "A provider familiar with your industry will work more efficiently and catch issues others might miss.",
                        },
                        {
                          title: "Technology Stack",
                          description:
                            "Modern providers use cloud software, automation, and integrations to deliver better service.",
                        },
                        {
                          title: "Communication Style",
                          description:
                            "Clear, proactive communication prevents misunderstandings and builds trust.",
                        },
                        {
                          title: "Scalability",
                          description:
                            "Choose a provider that can grow with you—from bookkeeping to controller to CFO services.",
                        },
                        {
                          title: "References",
                          description:
                            "Ask for references from businesses similar to yours in size and complexity.",
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

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">Why Choose MZBPO?</p>
                      <p className="text-gray-600">
                        As the outsourcing arm of a{" "}
                        <Link
                          href="/blog/what-is-bkr-international"
                          className="text-brand-teal hover:underline"
                        >
                          BKR International member firm
                        </Link>
                        , we bring global standards and professional credentials to every
                        engagement. Our services scale from basic bookkeeping to full finance
                        function, and we use a proven{" "}
                        <Link
                          href="/blog/month-end-close-checklist"
                          className="text-brand-teal hover:underline"
                        >
                          month-end close process
                        </Link>{" "}
                        that ensures accuracy and consistency.
                      </p>
                    </div>
                  </section>

                  {/* Conclusion */}
                  <section id="conclusion" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Conclusion
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Outsourced bookkeeping costs vary widely based on your needs, but most
                      small-to-medium businesses can expect to pay between $300-$2,500/month for
                      quality service—significantly less than hiring in-house.
                    </p>

                    <div className="bg-brand-navy rounded-2xl p-8 text-white">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-4">
                        Key Takeaways
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Basic bookkeeping</strong> runs $300-$800/month for simple
                            businesses
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Full-service</strong> with AP/AR typically costs $800-$2,500/month
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Controller-level</strong> oversight adds $2,500-$6,000/month
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Transaction volume</strong> and complexity are the biggest cost
                            drivers
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Watch for hidden costs</strong> like setup fees and software
                            charges
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Don't just compare price</strong>—evaluate credentials,
                            experience, and fit
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
                        services to growing businesses worldwide.
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
          headline="Get a Custom Bookkeeping Quote"
          bodyText="Every business is different. Schedule a free consultation to discuss your specific needs and get accurate pricing for outsourced bookkeeping services."
          ctaText="Get Your Custom Quote"
          trackingContentName="Blog CTA - Outsourced Bookkeeping Cost"
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
            headline: "How Much Does Outsourced Bookkeeping Cost in 2026?",
            description:
              "Understand outsourced bookkeeping pricing models, cost ranges, and what factors affect your monthly fee.",
            image:
              "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&h=630&fit=crop",
            datePublished: "2025-12-08T00:00:00.000Z",
            dateModified: "2025-12-08T00:00:00.000Z",
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
              "@id": "https://www.mzbpo.com/blog/outsourced-bookkeeping-cost",
            },
          }),
        }}
      />
    </div>
  )
}
