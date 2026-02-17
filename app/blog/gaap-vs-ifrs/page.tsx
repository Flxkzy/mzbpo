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
  Globe,
  Scale,
  FileText,
  Building2,
  AlertTriangle,
  TrendingUp,
  Users,
  Landmark,
  BarChart3,
  ShieldCheck,
  ArrowLeftRight,
  MapPin,
  BookMarked,
} from "lucide-react"

export const metadata: Metadata = {
  title: "GAAP vs IFRS: Key Differences Every International Business Should Know",
  description:
    "Understand the critical differences between US GAAP and IFRS accounting standards. Compare revenue recognition, inventory valuation, lease accounting, and more for global businesses.",
  alternates: { canonical: "/blog/gaap-vs-ifrs" },
  openGraph: {
    title: "GAAP vs IFRS: Key Differences Every International Business Should Know | MZBPO",
    description:
      "Understand the critical differences between US GAAP and IFRS accounting standards. Compare revenue recognition, inventory valuation, lease accounting, and more.",
    url: "https://www.mzbpo.com/blog/gaap-vs-ifrs",
    type: "article",
    publishedTime: "2026-02-14T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "GAAP vs IFRS Accounting Standards Comparison",
      },
    ],
  },
}

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "what-is-gaap", title: "What is US GAAP?" },
  { id: "what-is-ifrs", title: "What is IFRS?" },
  { id: "key-differences", title: "Key Differences Comparison" },
  { id: "countries", title: "Which Countries Use What?" },
  { id: "financial-reporting-impact", title: "Impact on Financial Reporting" },
  { id: "convergence-efforts", title: "Convergence Efforts" },
  { id: "outsourced-accounting", title: "What This Means for Outsourced Accounting" },
  { id: "conclusion", title: "Conclusion" },
]

const keyDifferences = [
  {
    area: "Revenue Recognition",
    gaap: "ASC 606: Five-step model with extensive industry-specific guidance and detailed implementation rules",
    ifrs: "IFRS 15: Same five-step model but with fewer industry-specific guidelines, more reliance on principles",
    impact: "May lead to different timing of revenue recognition in certain industries",
  },
  {
    area: "Inventory Valuation",
    gaap: "LIFO (Last-In, First-Out), FIFO, and weighted average methods all permitted",
    ifrs: "LIFO is prohibited. Only FIFO and weighted average methods are allowed",
    impact: "Companies using LIFO under GAAP must switch methods if adopting IFRS, potentially increasing tax liability",
  },
  {
    area: "Development Costs",
    gaap: "Research and development costs are generally expensed as incurred (with limited exceptions for software)",
    ifrs: "Research costs expensed, but development costs must be capitalized when specific criteria are met",
    impact: "IFRS may show higher assets and lower expenses during development phases",
  },
  {
    area: "Lease Accounting",
    gaap: "ASC 842: Distinguishes between operating and finance leases on both balance sheet and income statement",
    ifrs: "IFRS 16: Single lessee model treating nearly all leases as finance leases on the balance sheet",
    impact: "IFRS typically results in higher reported assets and liabilities for lessees",
  },
  {
    area: "Financial Statement Presentation",
    gaap: "Specific formats required. Extraordinary items were historically reported separately (now eliminated)",
    ifrs: "More flexibility in presentation. Requires a statement of changes in equity as a primary statement",
    impact: "Financial statements may look different in structure and line-item detail",
  },
  {
    area: "Impairment of Assets",
    gaap: "Two-step test: first check if carrying value exceeds undiscounted cash flows, then measure impairment at fair value. Reversal of impairment losses is prohibited",
    ifrs: "One-step test: compare carrying amount to recoverable amount (higher of fair value less costs to sell and value in use). Reversal of impairment losses is allowed (except for goodwill)",
    impact: "IFRS can show asset value recovery; GAAP impairments are permanent, leading to potentially more conservative balance sheets",
  },
  {
    area: "Fair Value Measurement",
    gaap: "ASC 820: Detailed three-level fair value hierarchy with extensive disclosure requirements",
    ifrs: "IFRS 13: Similar three-level hierarchy but with some differences in application guidance for non-financial assets",
    impact: "Generally similar outcomes but with differences in measurement for certain asset classes",
  },
  {
    area: "Intangible Assets",
    gaap: "Internally generated intangible assets generally cannot be capitalized (except certain software costs)",
    ifrs: "Internally generated intangible assets can be capitalized if recognition criteria are met",
    impact: "IFRS balance sheets may report higher intangible asset values",
  },
  {
    area: "Contingent Liabilities",
    gaap: "Recognized when loss is probable (>75% likelihood) and amount is estimable",
    ifrs: "Recognized when loss is probable (>50% likelihood) and amount can be reliably estimated",
    impact: "IFRS results in earlier recognition of contingent liabilities due to lower probability threshold",
  },
  {
    area: "Component Depreciation",
    gaap: "Permitted but not required; rarely used in practice",
    ifrs: "Required for significant components of property, plant, and equipment",
    impact: "IFRS may result in different depreciation patterns and timing of asset replacement",
  },
]

const countryStandards = [
  {
    country: "United States",
    flag: "US",
    standard: "US GAAP",
    details: "Mandatory for SEC-registered companies. IFRS permitted for foreign private issuers.",
    governing: "FASB (Financial Accounting Standards Board)",
  },
  {
    country: "United Kingdom",
    flag: "UK",
    standard: "UK GAAP (FRS 102) + IFRS",
    details: "FRS 102 for private companies. IFRS mandatory for listed companies on London Stock Exchange.",
    governing: "FRC (Financial Reporting Council)",
  },
  {
    country: "Australia",
    flag: "AU",
    standard: "AASB (IFRS-aligned)",
    details: "Australian Accounting Standards Board issues standards fully converged with IFRS.",
    governing: "AASB (Australian Accounting Standards Board)",
  },
  {
    country: "Canada",
    flag: "CA",
    standard: "ASPE + IFRS",
    details: "ASPE (Accounting Standards for Private Enterprises) for private companies. IFRS mandatory for publicly accountable enterprises.",
    governing: "AcSB (Accounting Standards Board of Canada)",
  },
  {
    country: "European Union",
    flag: "EU",
    standard: "IFRS for listed",
    details: "IFRS mandatory for consolidated statements of listed companies since 2005. National GAAP may apply for private companies.",
    governing: "EFRAG (European Financial Reporting Advisory Group)",
  },
  {
    country: "Japan",
    flag: "JP",
    standard: "J-GAAP + IFRS optional",
    details: "Japanese GAAP is primary standard. IFRS voluntary adoption permitted for listed companies since 2010.",
    governing: "ASBJ (Accounting Standards Board of Japan)",
  },
  {
    country: "India",
    flag: "IN",
    standard: "Ind AS (IFRS-converged)",
    details: "Indian Accounting Standards converged with IFRS, mandatory for listed and large companies.",
    governing: "MCA / ICAI (Institute of Chartered Accountants of India)",
  },
  {
    country: "China",
    flag: "CN",
    standard: "ASBE (substantially converged with IFRS)",
    details: "Chinese Accounting Standards substantially converged with IFRS since 2007, with some modifications.",
    governing: "MOF (Ministry of Finance)",
  },
]

const relatedPosts = [
  {
    title: "Outsourced Accounting for USA Businesses: Complete Guide",
    href: "/blog/outsourced-accounting-usa",
    description: "Everything US businesses need to know about outsourcing their accounting functions.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
  },
  {
    title: "Outsourced Bookkeeping UK: A Comprehensive Guide",
    href: "/blog/outsourced-bookkeeping-uk",
    description: "How UK businesses can benefit from professional outsourced bookkeeping services.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
  {
    title: "Bookkeeping Outsourcing Australia: Complete Guide",
    href: "/blog/bookkeeping-outsourcing-australia",
    description: "A practical guide for Australian businesses considering outsourced bookkeeping.",
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
                <span className="text-white/80">GAAP vs IFRS</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Accounting Standards</span>
              </div>

              {/* Title */}
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                GAAP vs IFRS:{" "}
                <span className="text-brand-teal">Key Differences</span> Every International Business Should Know
              </h1>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                A comprehensive comparison of the world's two major accounting frameworks. Understand how
                revenue recognition, inventory valuation, lease accounting, and more differ between US GAAP
                and IFRS to make informed decisions for your global business.
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>MZBPO Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>February 14, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>15 min read</span>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative -mt-8 mb-12 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1920&h=820&fit=crop"
                  alt="Global accounting standards comparison - GAAP vs IFRS"
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
                      Need Multi-Standard Expertise?
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      Our team handles both GAAP and IFRS reporting for international businesses.
                    </p>
                    <a
                      href="/meeting"
                      className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all"
                    >
                      Book a Consultation
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Quick Reference */}
                  <div className="mt-6 bg-brand-teal/10 rounded-2xl p-6 border border-brand-teal/20">
                    <h4 className="font-[family-name:var(--font-syne)] text-sm font-bold text-brand-navy mb-4">
                      At a Glance
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">GAAP Countries</span>
                        <span className="font-semibold text-brand-navy">USA (primarily)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">IFRS Countries</span>
                        <span className="font-semibold text-brand-navy">140+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">GAAP Approach</span>
                        <span className="font-semibold text-brand-navy">Rules-based</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">IFRS Approach</span>
                        <span className="font-semibold text-brand-navy">Principles-based</span>
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
                      If your business operates across borders, reports to international investors, or is
                      considering expansion into new markets, understanding the differences between US GAAP
                      and IFRS is not optional--it is essential. These two frameworks govern how companies
                      record transactions, prepare financial statements, and communicate financial
                      performance to stakeholders around the world.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      US Generally Accepted Accounting Principles (GAAP) and International Financial
                      Reporting Standards (IFRS) are the two dominant accounting frameworks globally.
                      While they share the same fundamental objective--providing transparent, comparable
                      financial information--their approaches, rules, and requirements can differ
                      significantly. These differences affect everything from how you recognize revenue
                      to how you value inventory, account for leases, and present your financial
                      statements.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      For international businesses, the choice between GAAP and IFRS--or the need to
                      report under both--has real consequences. It affects your tax obligations, your
                      ability to attract foreign investors, your merger and acquisition strategy, and
                      even your day-to-day bookkeeping processes. Getting it wrong can lead to
                      restatements, regulatory penalties, and lost credibility.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      In this guide, we break down the key differences between GAAP and IFRS, explain
                      which countries use which standard, and explore what this means for businesses
                      that outsource their accounting functions. Whether you are a CFO navigating
                      multi-jurisdictional reporting or a business owner expanding internationally,
                      this article will give you the clarity you need.
                    </p>
                  </section>

                  {/* Key Stats Banner */}
                  <div className="bg-gradient-to-r from-brand-navy to-brand-navy/90 rounded-2xl p-8 my-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                          <Globe className="w-6 h-6 text-brand-teal" />
                        </div>
                        <div className="text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                          140+
                        </div>
                        <div className="text-white/70 text-sm mt-1">
                          Countries require or permit IFRS
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                          <FileText className="w-6 h-6 text-brand-teal" />
                        </div>
                        <div className="text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                          2,000+
                        </div>
                        <div className="text-white/70 text-sm mt-1">
                          Pages in US GAAP codification
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                          <Scale className="w-6 h-6 text-brand-teal" />
                        </div>
                        <div className="text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                          ~50%
                        </div>
                        <div className="text-white/70 text-sm mt-1">
                          Of Fortune 500 have IFRS exposure
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* What is US GAAP? */}
                  <section id="what-is-gaap" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      What is US GAAP?
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      US Generally Accepted Accounting Principles (GAAP) is the accounting standard
                      framework used primarily in the United States. It is governed by the Financial
                      Accounting Standards Board (FASB), an independent, private-sector organization
                      recognized by the Securities and Exchange Commission (SEC) as the designated
                      accounting standard setter for public companies in the US.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      GAAP is characterized as a <strong>rules-based system</strong>, meaning it provides
                      highly detailed, specific guidance for a wide range of accounting scenarios. The
                      FASB Accounting Standards Codification (ASC) contains thousands of pages of
                      standards, interpretations, and implementation guidance organized into roughly 90
                      topics.
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                      <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4 flex items-center gap-2">
                        <Landmark className="w-5 h-5 text-brand-teal" />
                        Key Characteristics of US GAAP
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            title: "Rules-Based Approach",
                            desc: "Provides specific, detailed rules for nearly every type of transaction. Less room for professional judgment.",
                          },
                          {
                            title: "Governed by FASB",
                            desc: "The Financial Accounting Standards Board issues Accounting Standards Updates (ASUs) and maintains the ASC.",
                          },
                          {
                            title: "SEC Oversight",
                            desc: "The Securities and Exchange Commission has authority over financial reporting for US public companies.",
                          },
                          {
                            title: "Industry-Specific Guidance",
                            desc: "Extensive industry-specific standards for sectors like banking, insurance, healthcare, and real estate.",
                          },
                          {
                            title: "Historical Cost Emphasis",
                            desc: "Generally favors historical cost measurement, though fair value is used in specific circumstances.",
                          },
                          {
                            title: "Comprehensive Disclosure",
                            desc: "Requires extensive footnotes and supplementary information alongside financial statements.",
                          },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-semibold text-brand-navy text-sm">{item.title}</p>
                              <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6 mb-6">
                      <p className="text-brand-navy font-semibold mb-2">Who Must Use GAAP?</p>
                      <p className="text-gray-600">
                        All companies publicly traded on US stock exchanges must file financial statements
                        prepared in accordance with US GAAP. Many private companies, lenders, and
                        regulatory bodies also require or prefer GAAP-compliant financials. The SEC
                        currently allows foreign private issuers to file using IFRS as issued by the
                        IASB, but domestic filers must use GAAP.
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      The rules-based nature of GAAP means accountants have very specific instructions
                      for most situations, which reduces ambiguity but can create complexity. Some
                      critics argue that this approach leads to "bright-line" rules that companies can
                      technically follow while violating the spirit of the standard. However, supporters
                      maintain that the detailed guidance promotes consistency and comparability across
                      companies.
                    </p>
                  </section>

                  {/* What is IFRS? */}
                  <section id="what-is-ifrs" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      What is IFRS?
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      International Financial Reporting Standards (IFRS) are a set of accounting
                      standards developed and maintained by the International Accounting Standards
                      Board (IASB), headquartered in London. IFRS was designed to be a single set of
                      high-quality, global accounting standards that would enable financial statements
                      to be comparable across international boundaries.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Unlike GAAP, IFRS takes a <strong>principles-based approach</strong>. Rather than
                      prescribing detailed rules for every scenario, IFRS sets out broad principles and
                      objectives, relying on professional judgment to apply these principles to specific
                      transactions. This results in a more concise set of standards but requires
                      greater expertise and judgment from preparers.
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                      <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-brand-teal" />
                        Key Characteristics of IFRS
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            title: "Principles-Based Approach",
                            desc: "Sets broad principles rather than detailed rules. Requires professional judgment in application.",
                          },
                          {
                            title: "Governed by IASB",
                            desc: "The International Accounting Standards Board develops and approves IFRS standards.",
                          },
                          {
                            title: "Global Adoption",
                            desc: "Required or permitted in over 140 countries and jurisdictions worldwide.",
                          },
                          {
                            title: "Less Industry-Specific",
                            desc: "Minimal industry-specific guidance. Same principles apply across all sectors.",
                          },
                          {
                            title: "Fair Value Orientation",
                            desc: "Greater emphasis on fair value measurement, particularly for investment property and biological assets.",
                          },
                          {
                            title: "Conceptual Framework",
                            desc: "Strong conceptual framework that guides standard-setting and fills gaps where no specific standard exists.",
                          },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-semibold text-brand-navy text-sm">{item.title}</p>
                              <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6 mb-6">
                      <p className="text-brand-navy font-semibold mb-2">The IFRS Foundation</p>
                      <p className="text-gray-600">
                        The IFRS Foundation oversees the IASB and is committed to developing a single set
                        of globally accepted accounting standards. In recent years, the foundation has also
                        established the International Sustainability Standards Board (ISSB) to develop
                        sustainability-related disclosure standards, further expanding its influence on
                        global corporate reporting.
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      IFRS currently consists of 17 IFRS standards (IFRS 1 through IFRS 17) along with
                      older International Accounting Standards (IAS 1 through IAS 41) that remain in
                      effect. The total body of standards is considerably shorter than US GAAP, though
                      it is supplemented by interpretations from the IFRS Interpretations Committee.
                    </p>

                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                      <h3 className="font-[family-name:var(--font-syne)] font-bold text-amber-800 mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Important Distinction: IFRS vs Local Adaptations
                      </h3>
                      <p className="text-amber-800 text-sm">
                        Many countries adopt IFRS but with local modifications or "carve-outs." For
                        example, the EU endorses IFRS but has historically carved out parts of IAS 39.
                        India's Ind AS is converged with but not identical to IFRS. When working across
                        jurisdictions, it is critical to understand whether a country uses "full IFRS
                        as issued by the IASB" or a locally modified version.
                      </p>
                    </div>
                  </section>

                  {/* Key Differences Comparison */}
                  <section id="key-differences" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Key Differences: GAAP vs IFRS Comparison
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      While GAAP and IFRS share the same fundamental goals, they differ in many specific
                      areas. The following comprehensive comparison covers the most significant
                      differences that affect international businesses.
                    </p>

                    {/* Comparison Table */}
                    <div className="overflow-x-auto mb-8">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="px-4 py-3 text-left text-sm font-[family-name:var(--font-syne)] font-bold rounded-tl-xl">
                              Area
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-[family-name:var(--font-syne)] font-bold">
                              US GAAP
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-[family-name:var(--font-syne)] font-bold">
                              IFRS
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-[family-name:var(--font-syne)] font-bold rounded-tr-xl">
                              Business Impact
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {keyDifferences.map((diff, idx) => (
                            <tr
                              key={idx}
                              className={`border-b border-gray-100 ${
                                idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                              }`}
                            >
                              <td className="px-4 py-4 text-sm font-semibold text-brand-navy align-top">
                                {diff.area}
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-600 align-top">
                                {diff.gaap}
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-600 align-top">
                                {diff.ifrs}
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 italic align-top">
                                {diff.impact}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Deep Dive Cards */}
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">
                      Deep Dive: Critical Differences Explained
                    </h3>

                    {/* Inventory - LIFO */}
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6">
                      <h4 className="font-[family-name:var(--font-syne)] font-bold text-red-800 mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        LIFO Inventory: The Biggest Single Difference
                      </h4>
                      <p className="text-red-800 text-sm mb-3">
                        The prohibition of LIFO (Last-In, First-Out) under IFRS is perhaps the most
                        consequential practical difference for US companies considering IFRS adoption.
                        In the US, many companies--particularly in manufacturing, retail, and oil and
                        gas--use LIFO because it matches recent costs against current revenues and
                        provides tax benefits during inflationary periods.
                      </p>
                      <p className="text-red-800 text-sm mb-3">
                        If these companies were required to switch to IFRS, they would need to restate
                        their inventory values using FIFO or weighted average, potentially resulting in:
                      </p>
                      <ul className="space-y-1 text-red-800 text-sm">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>Higher reported inventory values on the balance sheet</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>Higher reported profits (and therefore higher tax obligations)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>Significant LIFO reserve liquidation--potentially billions of dollars for large companies</span>
                        </li>
                      </ul>
                    </div>

                    {/* Development Costs */}
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
                      <h4 className="font-[family-name:var(--font-syne)] font-bold text-blue-800 mb-3 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Development Costs: Expense vs. Capitalize
                      </h4>
                      <p className="text-blue-800 text-sm mb-3">
                        Under US GAAP, most research and development costs are expensed immediately,
                        which reduces reported earnings in the period incurred. Under IFRS (IAS 38),
                        development costs must be capitalized once a project meets six specific criteria:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <div className="flex items-start gap-2 text-blue-800">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>Technical feasibility is established</span>
                        </div>
                        <div className="flex items-start gap-2 text-blue-800">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>Intent to complete and use/sell the asset</span>
                        </div>
                        <div className="flex items-start gap-2 text-blue-800">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>Ability to use or sell the asset</span>
                        </div>
                        <div className="flex items-start gap-2 text-blue-800">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>Probable future economic benefits</span>
                        </div>
                        <div className="flex items-start gap-2 text-blue-800">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>Adequate resources to complete development</span>
                        </div>
                        <div className="flex items-start gap-2 text-blue-800">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>Ability to reliably measure expenditure</span>
                        </div>
                      </div>
                      <p className="text-blue-800 text-sm mt-3">
                        This means the same R&D project could show as an expense under GAAP but as an
                        intangible asset under IFRS, fundamentally changing how the company's financial
                        position appears to investors.
                      </p>
                    </div>

                    {/* Lease Accounting */}
                    <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-6">
                      <h4 className="font-[family-name:var(--font-syne)] font-bold text-purple-800 mb-3 flex items-center gap-2">
                        <Building2 className="w-5 h-5" />
                        Lease Accounting: Two Models vs. One
                      </h4>
                      <p className="text-purple-800 text-sm mb-3">
                        Both GAAP (ASC 842) and IFRS (IFRS 16) require lessees to recognize most leases
                        on the balance sheet. However, they differ in income statement treatment:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white rounded-xl p-4">
                          <p className="font-semibold text-purple-800 mb-2">US GAAP (ASC 842)</p>
                          <ul className="text-sm text-purple-700 space-y-1">
                            <li>- Two lease types: operating and finance</li>
                            <li>- Operating: single straight-line expense</li>
                            <li>- Finance: front-loaded interest + depreciation</li>
                            <li>- Classification affects income statement pattern</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-xl p-4">
                          <p className="font-semibold text-purple-800 mb-2">IFRS (IFRS 16)</p>
                          <ul className="text-sm text-purple-700 space-y-1">
                            <li>- Single model for nearly all leases</li>
                            <li>- All treated similarly to finance leases</li>
                            <li>- Front-loaded expense pattern for all</li>
                            <li>- Higher EBITDA (lease payments excluded)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Impairment */}
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                      <h4 className="font-[family-name:var(--font-syne)] font-bold text-green-800 mb-3 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5" />
                        Asset Impairment: Reversible vs. Permanent
                      </h4>
                      <p className="text-green-800 text-sm mb-3">
                        One of the most significant differences affects how companies recover from
                        asset write-downs. Under IFRS, if conditions improve after an impairment loss
                        is recognized, companies can reverse the impairment (except for goodwill). Under
                        US GAAP, once an asset is written down, the impairment is permanent and cannot
                        be reversed.
                      </p>
                      <p className="text-green-800 text-sm">
                        This means that during economic recoveries, IFRS-reporting companies may show
                        improving asset values while their GAAP counterparts carry permanently reduced
                        book values--even if the underlying asset has clearly recovered its worth.
                      </p>
                    </div>
                  </section>

                  {/* Which Countries Use What? */}
                  <section id="countries" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Which Countries Use What?
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Understanding the global landscape of accounting standards is critical for
                      international businesses. Here is a detailed breakdown of the major economies
                      and their accounting frameworks.
                    </p>

                    {/* Country Standards Table */}
                    <div className="overflow-x-auto mb-8">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="px-4 py-3 text-left text-sm font-[family-name:var(--font-syne)] font-bold rounded-tl-xl">
                              Country/Region
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-[family-name:var(--font-syne)] font-bold">
                              Primary Standard
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-[family-name:var(--font-syne)] font-bold">
                              Details
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-[family-name:var(--font-syne)] font-bold rounded-tr-xl">
                              Governing Body
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {countryStandards.map((country, idx) => (
                            <tr
                              key={idx}
                              className={`border-b border-gray-100 ${
                                idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                              }`}
                            >
                              <td className="px-4 py-4 text-sm font-semibold text-brand-navy align-top">
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4 text-brand-teal flex-shrink-0" />
                                  {country.country}
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm align-top">
                                <span className="inline-block bg-brand-teal/10 text-brand-navy font-semibold px-3 py-1 rounded-full text-xs">
                                  {country.standard}
                                </span>
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-600 align-top">
                                {country.details}
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 align-top">
                                {country.governing}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Regional Callouts */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                        <h4 className="font-[family-name:var(--font-syne)] font-semibold text-blue-800 mb-2">
                          Americas
                        </h4>
                        <p className="text-sm text-blue-700">
                          The US remains the largest economy using its own GAAP. Canada, Brazil, Mexico,
                          Chile, and Argentina have all adopted IFRS for public companies, making the
                          US increasingly isolated in its use of a separate standard.
                        </p>
                      </div>
                      <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                        <h4 className="font-[family-name:var(--font-syne)] font-semibold text-green-800 mb-2">
                          Europe, Middle East & Africa
                        </h4>
                        <p className="text-sm text-green-700">
                          IFRS is mandatory for all listed companies in the EU since 2005. The UK
                          maintains its own UK GAAP (FRS 102) for smaller companies but requires IFRS
                          for listed entities. Most Middle Eastern and African nations have adopted IFRS.
                        </p>
                      </div>
                      <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                        <h4 className="font-[family-name:var(--font-syne)] font-semibold text-purple-800 mb-2">
                          Asia-Pacific
                        </h4>
                        <p className="text-sm text-purple-700">
                          Australia, New Zealand, and Hong Kong use IFRS-aligned standards. Japan
                          permits voluntary IFRS adoption. India uses converged (but not identical)
                          standards. China has substantially converged with IFRS but retains differences.
                        </p>
                      </div>
                    </div>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">What This Means for Your Business</p>
                      <p className="text-gray-600">
                        If you operate in multiple countries or have subsidiaries, investors, or customers
                        in different jurisdictions, you may need to prepare financial statements under
                        multiple frameworks or at minimum understand how your numbers translate between
                        standards. A US parent company with a UK subsidiary, for example, will need to
                        convert IFRS-reported subsidiary results to GAAP for consolidated reporting.
                      </p>
                    </div>
                  </section>

                  {/* Impact on Financial Reporting */}
                  <section id="financial-reporting-impact" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Impact on Financial Reporting
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      The same business transaction can produce different financial results depending
                      on whether it is reported under GAAP or IFRS. These differences are not merely
                      academic--they affect real business metrics that investors, lenders, and
                      stakeholders use to evaluate performance.
                    </p>

                    {/* Example Scenario 1 */}
                    <div className="bg-brand-navy rounded-2xl p-8 text-white mb-8">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-6 flex items-center gap-2">
                        <BarChart3 className="w-6 h-6 text-brand-teal" />
                        Scenario: Manufacturing Company with $50M Revenue
                      </h3>
                      <p className="text-white/70 text-sm mb-6">
                        Consider a manufacturing company with $50 million in revenue, significant
                        inventory, an active R&D program, and several operating leases. Here is how
                        key metrics might differ:
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-white/20">
                              <th className="px-4 py-3 text-left text-white/60 font-semibold">Metric</th>
                              <th className="px-4 py-3 text-left text-white/60 font-semibold">Under GAAP</th>
                              <th className="px-4 py-3 text-left text-white/60 font-semibold">Under IFRS</th>
                              <th className="px-4 py-3 text-left text-white/60 font-semibold">Why Different</th>
                            </tr>
                          </thead>
                          <tbody className="text-white/80">
                            <tr className="border-b border-white/10">
                              <td className="px-4 py-3 font-semibold">COGS</td>
                              <td className="px-4 py-3">$32M (LIFO)</td>
                              <td className="px-4 py-3">$30M (FIFO)</td>
                              <td className="px-4 py-3 text-white/60">LIFO matches recent higher costs to revenue</td>
                            </tr>
                            <tr className="border-b border-white/10">
                              <td className="px-4 py-3 font-semibold">Gross Profit</td>
                              <td className="px-4 py-3">$18M</td>
                              <td className="px-4 py-3">$20M</td>
                              <td className="px-4 py-3 text-white/60">Lower COGS under FIFO</td>
                            </tr>
                            <tr className="border-b border-white/10">
                              <td className="px-4 py-3 font-semibold">R&D Expense</td>
                              <td className="px-4 py-3">$3M (all expensed)</td>
                              <td className="px-4 py-3">$1.5M (50% capitalized)</td>
                              <td className="px-4 py-3 text-white/60">Development costs capitalized under IFRS</td>
                            </tr>
                            <tr className="border-b border-white/10">
                              <td className="px-4 py-3 font-semibold">Total Assets</td>
                              <td className="px-4 py-3">$85M</td>
                              <td className="px-4 py-3">$92M</td>
                              <td className="px-4 py-3 text-white/60">Higher inventory + capitalized dev costs + lease ROU</td>
                            </tr>
                            <tr className="border-b border-white/10">
                              <td className="px-4 py-3 font-semibold">EBITDA</td>
                              <td className="px-4 py-3">$8M</td>
                              <td className="px-4 py-3">$11.5M</td>
                              <td className="px-4 py-3 text-white/60">Lower COGS + capitalized R&D + lease treatment</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-semibold">Inventory Value</td>
                              <td className="px-4 py-3">$12M</td>
                              <td className="px-4 py-3">$15M</td>
                              <td className="px-4 py-3 text-white/60">LIFO reserve eliminated under IFRS</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-6 pt-4 border-t border-white/20">
                        <p className="text-brand-teal text-sm font-semibold">
                          Key takeaway: The same company looks significantly more profitable and asset-rich
                          under IFRS than under GAAP--even though nothing about the business itself has changed.
                        </p>
                      </div>
                    </div>

                    {/* Example Scenario 2 */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                      <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4 flex items-center gap-2">
                        <ArrowLeftRight className="w-5 h-5 text-brand-teal" />
                        Scenario: Asset Impairment and Recovery
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        A company owns equipment originally valued at $10 million. Economic conditions
                        cause its recoverable value to drop to $6 million, then recover to $9 million
                        over three years.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-xl p-4 border border-gray-200">
                          <p className="font-semibold text-brand-navy mb-2">Under GAAP</p>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li>Year 1: Write down to $6M (loss of $4M)</li>
                            <li>Year 2: No change (reversal prohibited)</li>
                            <li>Year 3: Carrying value remains $6M</li>
                            <li className="font-semibold text-red-600">Total reported value: $6M</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-gray-200">
                          <p className="font-semibold text-brand-navy mb-2">Under IFRS</p>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li>Year 1: Write down to $6M (loss of $4M)</li>
                            <li>Year 2: Partial reversal possible</li>
                            <li>Year 3: Reverse to $9M (gain of $3M)</li>
                            <li className="font-semibold text-green-600">Total reported value: $9M</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy">
                        Why These Differences Matter
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            title: "Investor Comparisons",
                            desc: "Investors comparing a US company (GAAP) with a European competitor (IFRS) may draw incorrect conclusions without adjusting for standard differences.",
                          },
                          {
                            title: "Loan Covenants",
                            desc: "Debt-to-equity ratios, EBITDA coverage, and other covenant metrics differ under each framework, potentially triggering or avoiding covenant violations.",
                          },
                          {
                            title: "M&A Valuation",
                            desc: "Acquirers must understand target company financials under both standards to arrive at accurate valuations and avoid overpaying or underbidding.",
                          },
                          {
                            title: "Tax Planning",
                            desc: "Different accounting treatments can affect deferred tax assets and liabilities, with real cash flow implications across jurisdictions.",
                          },
                        ].map((item, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                            <h4 className="font-semibold text-brand-navy mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Convergence Efforts */}
                  <section id="convergence-efforts" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Convergence Efforts: Closing the Gap
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Since 2002, the FASB and IASB have worked together under a formal convergence
                      program to reduce differences between GAAP and IFRS. This cooperation has
                      produced several joint standards and significantly narrowed the gap in key areas,
                      though full convergence remains elusive.
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                      <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">
                        Areas of Successful Convergence
                      </h3>
                      <div className="space-y-3">
                        {[
                          {
                            area: "Revenue Recognition",
                            detail: "ASC 606 (GAAP) and IFRS 15 share the same five-step framework, the most significant joint project completed.",
                            year: "2014",
                          },
                          {
                            area: "Lease Accounting",
                            detail: "ASC 842 (GAAP) and IFRS 16 both bring leases onto the balance sheet, though with different income statement models.",
                            year: "2016",
                          },
                          {
                            area: "Fair Value Measurement",
                            detail: "ASC 820 (GAAP) and IFRS 13 provide substantially similar guidance on fair value hierarchy and disclosure.",
                            year: "2011",
                          },
                          {
                            area: "Business Combinations",
                            detail: "ASC 805 (GAAP) and IFRS 3 both require the acquisition method and are largely aligned.",
                            year: "2008",
                          },
                          {
                            area: "Consolidation",
                            detail: "Both frameworks use a control-based model, though specific guidance differs in some areas.",
                            year: "2011",
                          },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100"
                          >
                            <span className="bg-brand-teal/10 text-brand-navy font-semibold text-xs px-3 py-1 rounded-full whitespace-nowrap">
                              {item.year}
                            </span>
                            <div>
                              <p className="font-semibold text-brand-navy text-sm">{item.area}</p>
                              <p className="text-sm text-gray-600">{item.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-6">
                      <h3 className="font-[family-name:var(--font-syne)] font-bold text-amber-800 mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Remaining Significant Differences
                      </h3>
                      <p className="text-amber-800 text-sm mb-3">
                        Despite convergence efforts, these areas remain materially different and are
                        unlikely to converge in the near future:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          "Inventory valuation (LIFO prohibition under IFRS)",
                          "Development cost capitalization",
                          "Impairment reversal",
                          "Component depreciation requirements",
                          "Contingent liability thresholds",
                          "Revaluation of property, plant and equipment",
                          "Presentation of extraordinary items",
                          "Government grant accounting",
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-amber-800 text-sm">
                            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      The pace of formal convergence has slowed since the completion of the revenue
                      and leases projects. Both boards have shifted focus to their own agendas, though
                      they continue to coordinate on certain topics. The SEC's decision to not mandate
                      IFRS adoption for US companies (a possibility that was actively debated from
                      2008-2012) means the two systems will coexist for the foreseeable future.
                    </p>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">Looking Ahead</p>
                      <p className="text-gray-600">
                        While full convergence is unlikely, the trend is toward greater alignment. New
                        standards issued by either board increasingly consider the other's framework.
                        For businesses, this means the gap is gradually narrowing, but understanding
                        both standards will remain important for international operations for years
                        to come.
                      </p>
                    </div>
                  </section>

                  {/* What This Means for Outsourced Accounting */}
                  <section id="outsourced-accounting" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      What This Means for Outsourced Accounting
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      For businesses that outsource their accounting and finance functions, the GAAP
                      vs IFRS landscape creates both challenges and opportunities. Choosing the right
                      outsourcing partner with multi-standard expertise can be the difference between
                      seamless international reporting and costly errors.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2 flex items-center gap-2">
                          <BookMarked className="w-5 h-5 text-brand-teal" />
                          Multi-Standard Expertise is Non-Negotiable
                        </h3>
                        <p className="text-gray-600 mb-3">
                          If your business operates in multiple countries, your outsourced accounting
                          provider must be fluent in the relevant standards for each jurisdiction. This
                          goes beyond knowing the rules--it requires understanding how transactions
                          translate between frameworks and how to prepare consolidated financial
                          statements that comply with the parent company's reporting requirements.
                        </p>
                        <p className="text-gray-600">
                          A provider who only knows US GAAP may miss critical differences when processing
                          transactions for a UK or Australian subsidiary, potentially leading to
                          restatements and compliance issues.
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2 flex items-center gap-2">
                          <Globe className="w-5 h-5 text-brand-teal" />
                          Why the BKR International Network Matters
                        </h3>
                        <p className="text-gray-600 mb-3">
                          As the outsourcing arm of a{" "}
                          <Link
                            href="/blog/what-is-bkr-international"
                            className="text-brand-teal hover:underline"
                          >
                            BKR International member firm
                          </Link>
                          , MZBPO has access to accounting professionals in over 80 countries who
                          understand local accounting standards and their relationship to IFRS. This
                          global network means:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            "Access to local GAAP expertise in any jurisdiction",
                            "Seamless IFRS-to-GAAP and GAAP-to-IFRS conversions",
                            "Understanding of local regulatory requirements",
                            "Consistent quality standards across all member firms",
                            "Single point of contact for multi-country reporting",
                            "Cross-border tax and transfer pricing knowledge",
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2 flex items-center gap-2">
                          <Users className="w-5 h-5 text-brand-teal" />
                          Choosing the Right Provider
                        </h3>
                        <p className="text-gray-600 mb-3">
                          When evaluating outsourced accounting providers for multi-standard reporting,
                          consider these critical factors:
                        </p>
                        <div className="space-y-3">
                          {[
                            {
                              question: "Do they have staff qualified in both GAAP and IFRS?",
                              why: "Look for CPAs (US), ACCAs (UK), CAs (Australia/Canada), or equivalent credentials.",
                            },
                            {
                              question: "Can they handle standard conversions and reconciliations?",
                              why: "Converting between frameworks requires deep knowledge of both and experience with conversion adjustments.",
                            },
                            {
                              question: "Do they have a global network or presence?",
                              why: "A provider with international reach can coordinate multi-country reporting more effectively.",
                            },
                            {
                              question: "What technology do they use for multi-standard reporting?",
                              why: "Modern cloud accounting platforms can maintain parallel books and automate standard-specific adjustments.",
                            },
                            {
                              question: "Can they provide references from similar international clients?",
                              why: "Ask for case studies or references from companies with similar multi-jurisdictional needs.",
                            },
                          ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200">
                              <p className="font-semibold text-brand-navy text-sm">{item.question}</p>
                              <p className="text-xs text-gray-500 mt-1">{item.why}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">How MZBPO Can Help</p>
                      <p className="text-gray-600">
                        MZBPO provides{" "}
                        <Link
                          href="/blog/outsourced-accounting-usa"
                          className="text-brand-teal hover:underline"
                        >
                          outsourced accounting for US businesses
                        </Link>
                        ,{" "}
                        <Link
                          href="/blog/outsourced-bookkeeping-uk"
                          className="text-brand-teal hover:underline"
                        >
                          bookkeeping for UK companies
                        </Link>
                        , and{" "}
                        <Link
                          href="/blog/bookkeeping-outsourcing-australia"
                          className="text-brand-teal hover:underline"
                        >
                          bookkeeping services for Australian businesses
                        </Link>
                        --all from a single, coordinated team backed by the BKR International network.
                        Our professionals are trained in both GAAP and IFRS, and we handle the
                        complexity of multi-standard reporting so you can focus on growing your business.
                      </p>
                    </div>
                  </section>

                  {/* Conclusion */}
                  <section id="conclusion" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Conclusion
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The differences between GAAP and IFRS are more than technicalities--they have
                      real-world consequences for how your business reports its financial position,
                      how investors evaluate your performance, and how you comply with regulations
                      across jurisdictions. As businesses become increasingly global, the ability
                      to navigate both frameworks is a competitive advantage.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      While convergence efforts have narrowed the gap in areas like revenue
                      recognition and lease accounting, fundamental differences remain in inventory
                      valuation, development costs, asset impairment, and more. These differences
                      will persist for the foreseeable future, making multi-standard literacy an
                      essential capability for any international business.
                    </p>

                    <div className="bg-brand-navy rounded-2xl p-8 text-white">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-4">
                        Key Takeaways
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>GAAP is rules-based; IFRS is principles-based</strong>--this
                            fundamental philosophical difference drives most specific variations
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>LIFO inventory is the biggest practical difference</strong>--prohibited
                            under IFRS, widely used under GAAP, with significant tax implications
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>The same transaction produces different numbers</strong>--identical
                            businesses can look very different in profitability, assets, and key ratios
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>140+ countries use IFRS</strong>--the US is increasingly isolated in
                            maintaining a separate standard, making IFRS knowledge essential for global business
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Convergence is incomplete</strong>--some areas have aligned (revenue,
                            leases) but others (inventory, impairment, development costs) remain different
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Your accounting provider must understand both</strong>--outsourcing to
                            a firm with multi-standard expertise and a global network like BKR International
                            ensures accurate, compliant reporting
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Due diligence matters</strong>--cross-border M&A, international
                            fundraising, and multi-country operations all require careful attention to
                            standard differences
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
                        member of BKR International--the 5th largest global accounting association.
                        We provide outsourced bookkeeping, accounting, internal audit, payroll, and
                        finance services to growing businesses worldwide, with expertise in both
                        GAAP and IFRS reporting frameworks.
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
                          Book a Consultation →
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
          headline="Need Multi-Standard Accounting Expertise?"
          bodyText="Whether you report under GAAP, IFRS, or both, our team has the expertise to handle your international accounting needs. As a BKR International member firm, we deliver accurate, compliant financial reporting across jurisdictions."
          ctaText="Schedule a Consultation"
          trackingContentName="Blog CTA - GAAP vs IFRS"
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
            headline: "GAAP vs IFRS: Key Differences Every International Business Should Know",
            description:
              "Understand the critical differences between US GAAP and IFRS accounting standards. Compare revenue recognition, inventory valuation, lease accounting, and more for global businesses.",
            image:
              "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&h=630&fit=crop",
            datePublished: "2026-02-14T00:00:00.000Z",
            dateModified: "2026-02-14T00:00:00.000Z",
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
              "@id": "https://www.mzbpo.com/blog/gaap-vs-ifrs",
            },
          }),
        }}
      />
    </div>
  )
}
