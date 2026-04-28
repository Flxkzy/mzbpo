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
  Home,
  AlertTriangle,
  DollarSign,
  Building2,
  Receipt,
  TrendingUp,
  Key,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Real Estate Accounting: Complete Guide for Investors, Agents & Property Managers (2026)",
  description:
    "Comprehensive real estate accounting guide for 2026. Chart of accounts, depreciation, 1031 exchanges, Schedule E, trust accounts, and the best software for investors, agents, and property managers.",
  alternates: { canonical: "/blog/real-estate-accounting" },
  openGraph: {
    title: "Real Estate Accounting: Investors, Agents & Property Managers (2026) | MZBPO",
    description:
      "How real estate accounting differs, plus practical guidance on depreciation, 1031 exchanges, trust accounts, and software for landlords and property managers.",
    url: "https://www.mzbpo.com/blog/real-estate-accounting",
    type: "article",
    publishedTime: "2026-04-22T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Real Estate Accounting Guide",
      },
    ],
  },
}

const tableOfContents = [
  { id: "introduction", title: "Why Real Estate Accounting Is Unique" },
  { id: "who-needs", title: "Who Needs Real Estate Accounting" },
  { id: "chart-of-accounts", title: "Chart of Accounts Setup" },
  { id: "tax-strategies", title: "Tax Strategies & Deductions" },
  { id: "depreciation", title: "Depreciation & Cost Segregation" },
  { id: "1031", title: "1031 Exchanges Explained" },
  { id: "trust-accounts", title: "Trust & Escrow Accounting" },
  { id: "software", title: "Best Software by Use Case" },
  { id: "outsourcing", title: "When to Outsource" },
]

const userTypes = [
  {
    type: "Real Estate Investors",
    detail: "Buy-and-hold landlords, flippers, BRRRR investors, and short-term rental owners. Need entity-level books, Schedule E, depreciation tracking, and tax planning across portfolios.",
    icon: <Home className="w-5 h-5 text-brand-teal" />,
    pain: "Multiple LLCs, mixed personal/business spending, depreciation confusion",
  },
  {
    type: "Property Managers",
    detail: "Manage rentals on behalf of owners. Trust accounting is non-negotiable — owner funds must never mix with operating funds. Strict state regulations apply.",
    icon: <Building2 className="w-5 h-5 text-brand-teal" />,
    pain: "Trust account compliance, owner statements, monthly distributions, 1099 filings",
  },
  {
    type: "Real Estate Agents & Brokers",
    detail: "Independent contractors with commission-based income. Need self-employment tax planning, deductions tracking, and quarterly estimated tax management.",
    icon: <Key className="w-5 h-5 text-brand-teal" />,
    pain: "Commission timing, marketing deductions, mileage, retirement planning, SE tax",
  },
  {
    type: "Real Estate Developers",
    detail: "Acquire and develop properties for resale or hold. Need percentage-of-completion accounting, capitalized interest tracking, and joint-venture allocations.",
    icon: <TrendingUp className="w-5 h-5 text-brand-teal" />,
    pain: "Capitalized costs, JV partner reporting, lender draws, tax timing on completed units",
  },
]

const chartOfAccounts = [
  { section: "Assets", items: ["Operating cash (per entity)", "Trust / escrow cash (segregated)", "Tenant security deposits", "Prepaid insurance & taxes", "Land (non-depreciable)", "Buildings & improvements", "Accumulated depreciation", "Furniture & appliances"] },
  { section: "Liabilities", items: ["Mortgages payable (per property)", "Tenant security deposits liability", "Accrued property taxes", "Accrued interest", "Owner draws / distributions", "Loans from members"] },
  { section: "Income", items: ["Rental income (by property)", "Late fees & penalties", "Application fees", "Pet fees", "Laundry / vending income", "Capital gains on disposition"] },
  { section: "Expenses", items: ["Property management fees", "Repairs & maintenance", "Capital improvements (capitalized)", "Property taxes", "Insurance", "Utilities", "HOA dues", "Mortgage interest", "Depreciation expense", "Travel & vehicle (audit-trail required)"] },
]

const deductions = [
  { category: "Mortgage Interest", detail: "Fully deductible against rental income. Tracked from your annual 1098.", risk: "Low" },
  { category: "Property Taxes", detail: "Deductible in the year paid. Watch the SALT cap on personal residences only — rental properties are unrestricted.", risk: "Low" },
  { category: "Repairs vs Improvements", detail: "Repairs deductible immediately; improvements must be capitalized and depreciated. The line is often subjective — get it wrong and the IRS will reclassify.", risk: "High" },
  { category: "Depreciation", detail: "Residential: 27.5 years. Commercial: 39 years. Straight-line over the building basis (not land). Often the largest paper deduction.", risk: "Medium" },
  { category: "Travel & Mileage", detail: "Documented trips to inspect, manage, or improve properties. Standard mileage rate $0.70/mi for 2026.", risk: "High" },
  { category: "Home Office", detail: "If you actively manage rentals from a dedicated home space, a home office deduction may apply — though it's risky for passive landlords.", risk: "Medium" },
  { category: "Professional Fees", detail: "Property manager, CPA, attorney, leasing agent, eviction services — all fully deductible.", risk: "Low" },
  { category: "Insurance Premiums", detail: "Property, liability, umbrella, flood — deductible. Mortgage insurance also generally deductible against rental income.", risk: "Low" },
  { category: "QBI Deduction", detail: "Up to 20% deduction on qualified rental income via Section 199A — provided you meet the safe harbor (250+ hours of service per property group).", risk: "Medium" },
]

const costSegPhases = [
  { phase: "Phase 1: 5-Year Property", description: "Carpets, appliances, decorative lighting, removable cabinets, specialty wiring — anything not structural.", typical: "5–8% of building basis" },
  { phase: "Phase 2: 7-Year Property", description: "Office furniture, equipment, certain telecommunications wiring.", typical: "1–3% of building basis" },
  { phase: "Phase 3: 15-Year Land Improvements", description: "Sidewalks, parking lots, landscaping, fencing, signage, retaining walls.", typical: "5–10% of building basis" },
  { phase: "Phase 4: 27.5/39-Year Building", description: "Structural shell, roof, plumbing, HVAC, electrical service — what's left after segregation.", typical: "75–85% of building basis" },
]

const exchange1031Steps = [
  { step: "01", title: "Sell relinquished property", detail: "The clock starts the day of closing. Proceeds must go to a Qualified Intermediary (QI) — not your bank account." },
  { step: "02", title: "Identify replacement within 45 days", detail: "Up to three properties (any value) or unlimited under the 200% rule. Identification must be in writing." },
  { step: "03", title: "Close on replacement within 180 days", detail: "Total of 180 days from sale of the original property. No extensions, even for filing deadlines." },
  { step: "04", title: "Use a Qualified Intermediary throughout", detail: "If you ever touch the proceeds — even briefly — the exchange fails and the entire gain becomes taxable." },
  { step: "05", title: "Maintain equal or greater value & debt", detail: "Replacement property must equal or exceed the relinquished property in both value and debt assumed, or the difference becomes taxable boot." },
]

const trustRules = [
  "Owner funds must be in a separate, dedicated trust/escrow account — not co-mingled with operating cash",
  "Security deposits are typically held in a separate account from owner funds (varies by state)",
  "Three-way reconciliation: book balance = bank balance = sum of owner ledgers",
  "Reconcile monthly without exception — most state real estate commissions audit this",
  "Distribute owner funds on a documented schedule, not whenever cash is needed elsewhere",
  "Maintain individual ledgers per owner and per property",
  "Never advance owner funds against rent that hasn't been collected",
  "Generate compliant monthly owner statements with detail down to the transaction level",
]

const software = [
  { name: "Stessa (free) / Stessa Pro", best: "Buy-and-hold landlords with 1–25 properties", strengths: "Auto-categorization, Schedule E reports, free tier, mobile-first", price: "Free / $20/mo" },
  { name: "REI Hub", best: "Investors with 5+ properties wanting accountant-grade books", strengths: "Property-level P&L, multi-entity, GAAP reporting, accountant collaboration", price: "$15–$95/mo" },
  { name: "Buildium / AppFolio", best: "Property managers with 50+ doors", strengths: "Trust accounting, owner portal, leasing, maintenance, tenant screening", price: "$58–$250+/mo" },
  { name: "Yardi Voyager", best: "Mid-market and enterprise property management", strengths: "Industry standard for institutional portfolios — full accounting + ops + investor reporting", price: "Quote-based" },
  { name: "QuickBooks Online + Class Tracking", best: "Small-to-mid investors and agents who want flexibility", strengths: "Familiar interface, broad accountant support, classes for property-level reporting", price: "$50–$235/mo" },
  { name: "Baselane", best: "DIY landlords wanting banking + bookkeeping bundled", strengths: "Free landlord banking, integrated bookkeeping, rent collection, tax reports", price: "Free / paid add-ons" },
]

const outsourceTriggers = [
  "You own 5+ rental properties and your books are spread across spreadsheets",
  "You're scaling property management past 50 doors and trust account compliance is risky",
  "You missed depreciation, didn't run cost segregation, or aren't tracking basis correctly",
  "You're planning a 1031 exchange and need bonded, audit-trail records",
  "Your tax preparer keeps asking for the same data multiple times each year",
  "You operate across multiple states and aren't sure where you have nexus or filing duties",
  "You're raising capital from passive investors (LP/GP) and need investor-grade reporting",
  "You're a real estate agent paying SE tax with no quarterly planning or retirement strategy",
]

const faqItems = [
  {
    question: "Do I need separate books for each rental property?",
    answer:
      "Yes. Even if you own multiple properties under a single LLC, you should track income and expenses by property. This lets you see which properties are actually profitable, prepare an accurate Schedule E, and substantiate your deductions if audited. Most modern software handles this with classes, properties, or sub-accounts.",
  },
  {
    question: "What's the difference between a repair and an improvement?",
    answer:
      "Repairs maintain the property in its current condition (a leaky faucet, painting, replacing a broken window) and are deductible in the year paid. Improvements add value, prolong useful life, or adapt the property for new use (new roof, HVAC replacement, room addition) and must be capitalized and depreciated over 27.5 or 39 years. The line is often subjective — keep documentation.",
  },
  {
    question: "How does a 1031 exchange actually work?",
    answer:
      "A 1031 exchange lets you defer capital gains tax when you sell investment real estate by reinvesting the proceeds into a 'like-kind' property. You have 45 days from sale to identify the replacement and 180 days total to close. Proceeds must go through a Qualified Intermediary — you can never touch them. Done correctly, you can defer gains indefinitely and effectively eliminate them through step-up at death.",
  },
  {
    question: "What is cost segregation and is it worth it?",
    answer:
      "Cost segregation is an engineering-based study that reclassifies portions of a building from 27.5/39-year depreciation to 5, 7, or 15-year property — often accelerating 20–30% of the building basis. The cost is typically $5,000–$15,000 for a study, and it generally pays back in year one for properties over $750K. Combined with bonus depreciation, it's one of the most powerful real estate tax tools.",
  },
  {
    question: "Do property managers need a special trust account?",
    answer:
      "Yes — every state with a real estate license requires property managers to hold owner funds and tenant security deposits in segregated trust accounts, separate from operating cash. Three-way reconciliation (book balance = bank balance = sum of individual owner ledgers) must be done monthly. Most state real estate commissions audit trust accounts directly.",
  },
  {
    question: "Should agents and investors use QuickBooks or specialized real estate software?",
    answer:
      "Agents with simple commission income often do fine with QuickBooks Self-Employed or even just clean spreadsheets. Investors with 5+ properties benefit from real estate-specific tools (Stessa, REI Hub) that automate Schedule E. Property managers managing other people's money need true property management platforms (Buildium, AppFolio, Yardi) for trust account compliance.",
  },
  {
    question: "How much does outsourced real estate accounting cost?",
    answer:
      "Pricing depends on portfolio size and complexity. Investors with 5–25 doors typically pay $400–$1,500/month for full bookkeeping, owner reports, and tax-ready financials. Property management firms running 100+ doors often run $2,500–$8,000/month for full back-office support including trust account reconciliation. Real estate agents typically pay $200–$600/month for bookkeeping + quarterly tax planning.",
  },
]

const relatedPosts = [
  {
    title: "Small Business Tax Deductions: 75 Write-Offs You Can't Miss",
    href: "/blog/small-business-tax-deductions",
    description: "The most complete list of small business tax deductions for 2026 — including real estate.",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?w=400&h=250&fit=crop",
  },
  {
    title: "Cash Flow Management Guide for Growing Businesses",
    href: "/blog/cash-flow-management-guide",
    description: "Master cash flow forecasting and working capital — critical for landlords and property managers.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
  },
  {
    title: "Virtual CFO Services: When You Need a Fractional CFO",
    href: "/blog/virtual-cfo-services",
    description: "What a virtual CFO does, what they cost, and when real estate operators should consider one.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=250&fit=crop",
  },
]

export default function RealEstateAccountingPage() {
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
              <nav className="flex items-center gap-2 text-sm text-white/60 mb-8 font-[var(--font-poppins)]">
                <Link href="/" className="hover:text-brand-teal transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/blog" className="hover:text-brand-teal transition-colors">Blog</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white/80">Real Estate Accounting</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Industry Guide</span>
              </div>
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Real Estate Accounting:{" "}
                <span className="text-brand-teal">A Complete Guide for Investors, Agents & Property Managers</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                Real estate is one of the most tax-advantaged asset classes in the world — but only if your books
                are set up correctly. This guide covers chart of accounts, depreciation, 1031 exchanges, trust accounting, and the software that makes it all manageable.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>MZBPO Team</span></div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>April 22, 2026</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>15 min read</span></div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative -mt-8 mb-12 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=820&fit=crop"
                  alt="Real estate accounting for investors, agents, and property managers"
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
              {/* Sidebar */}
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
                  <div className="mt-6 bg-brand-navy rounded-2xl p-6">
                    <p className="text-white font-[family-name:var(--font-syne)] font-bold mb-3">
                      Real Estate Accounting Help
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      MZBPO supports investors, property managers, agents, and developers with full bookkeeping, tax-ready financials, and trust account reconciliation.
                    </p>
                    <Link
                      href="/meeting"
                      className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all"
                    >
                      Schedule a Call <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-9">
                <div className="prose prose-lg max-w-none font-[var(--font-poppins)]">

                  {/* Introduction */}
                  <section id="introduction" className="scroll-mt-32 mb-12">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Real estate accounting sits at the intersection of bookkeeping, tax strategy, and asset management.
                      Done well, it&apos;s the difference between paying 35% tax on your portfolio and paying close to zero — legally.
                      Done poorly, it&apos;s an audit waiting to happen.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Whether you&apos;re a single-property landlord or running a 500-door management firm, the principles are
                      similar: separate entities, property-level tracking, depreciation discipline, and clean trust accounting
                      where applicable. The complexity comes from knowing which rules apply to <em>your</em> situation.
                    </p>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8 my-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-6 text-center">
                        Real Estate Accounting By the Numbers
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          { stat: "$4.7T", label: "US residential rental property value" },
                          { stat: "27.5 yr", label: "depreciable life of residential rental" },
                          { stat: "20–30%", label: "of basis often accelerated via cost segregation" },
                        ].map((s, i) => (
                          <div key={i} className="text-center">
                            <div className="text-3xl font-bold text-white font-[family-name:var(--font-syne)]">{s.stat}</div>
                            <div className="text-white/70 text-sm mt-1">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Who Needs */}
                  <section id="who-needs" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Who Needs Real Estate Accounting
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      &quot;Real estate accounting&quot; means very different things depending on what you do in the industry.
                      The four main user types each have distinct needs:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {userTypes.map((u, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="flex items-center gap-3 mb-3">
                            {u.icon}
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">{u.type}</h3>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{u.detail}</p>
                          <p className="text-xs text-brand-teal bg-brand-teal/5 rounded-lg px-3 py-2 font-medium">Common pain: {u.pain}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Chart of Accounts */}
                  <section id="chart-of-accounts" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Chart of Accounts Setup
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      A proper real estate chart of accounts tracks income and expense by property — not just at the
                      entity level. Use class tracking, sub-customers, or property fields depending on your software.
                      Here&apos;s a starting framework:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {chartOfAccounts.map((c, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">{c.section}</h3>
                          <ul className="space-y-1.5">
                            {c.items.map((item, j) => (
                              <li key={j} className="text-gray-600 text-sm flex items-start gap-2">
                                <span className="text-brand-teal mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6 mt-6">
                      <p className="text-brand-navy font-semibold mb-2">Pro tip:</p>
                      <p className="text-gray-600 text-sm">
                        Set up each property as a class or sub-customer from day one. Retrofitting property-level reporting
                        across two years of mixed transactions is one of the most expensive cleanups in our business.
                      </p>
                    </div>
                  </section>

                  {/* Tax Strategies */}
                  <section id="tax-strategies" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Tax Strategies & Key Deductions
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Real estate enjoys some of the most generous deductions in the tax code. Here are the major
                      categories and how aggressive each typically is from an audit standpoint:
                    </p>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="text-left p-4 font-semibold">Deduction</th>
                            <th className="text-left p-4 font-semibold">Detail</th>
                            <th className="text-left p-4 font-semibold">Audit Risk</th>
                          </tr>
                        </thead>
                        <tbody>
                          {deductions.map((d, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="p-4 text-gray-800 font-semibold">{d.category}</td>
                              <td className="p-4 text-gray-600">{d.detail}</td>
                              <td className="p-4">
                                <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                                  d.risk === "High" ? "bg-red-100 text-red-700" :
                                  d.risk === "Medium" ? "bg-orange-100 text-orange-700" :
                                  "bg-green-100 text-green-700"
                                }`}>{d.risk}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Depreciation */}
                  <section id="depreciation" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Depreciation & Cost Segregation
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Depreciation is the tax code&apos;s gift to real estate investors — a non-cash expense that reduces
                      taxable income on profitable properties. The default schedule is 27.5 years (residential) or 39
                      years (commercial), straight-line, on the building portion of basis only.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Cost segregation accelerates this by reclassifying portions of the building into shorter recovery periods:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {costSegPhases.map((p, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="flex items-center gap-3 mb-3">
                            <Receipt className="w-5 h-5 text-brand-teal" />
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">{p.phase}</h3>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{p.description}</p>
                          <p className="text-xs text-brand-teal bg-brand-teal/5 rounded-lg px-3 py-2 font-medium inline-block">{p.typical}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                      <p className="text-gray-700 text-sm">
                        <strong>Watch the recapture:</strong> Depreciation reduces basis. When you eventually sell, the
                        IRS &quot;recaptures&quot; that depreciation at up to 25%. A 1031 exchange (next section) defers it indefinitely.
                      </p>
                    </div>
                  </section>

                  {/* 1031 */}
                  <section id="1031" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      1031 Exchanges Explained
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      A 1031 exchange (also called a like-kind exchange) lets you sell investment property and reinvest
                      the proceeds into another investment property without paying capital gains tax — the gain is deferred,
                      not eliminated, but with proper estate planning the deferral can become permanent.
                    </p>
                    <div className="space-y-4">
                      {exchange1031Steps.map((s) => (
                        <div key={s.step} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="flex items-start gap-4">
                            <span className="text-2xl font-black text-brand-teal/30 shrink-0 w-10">{s.step}</span>
                            <div className="flex-1">
                              <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">{s.title}</h3>
                              <p className="text-gray-600 text-sm">{s.detail}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6 mt-6">
                      <p className="text-brand-navy font-semibold mb-2">Critical accounting note:</p>
                      <p className="text-gray-600 text-sm">
                        The replacement property inherits the carryover basis of the relinquished property — not its purchase
                        price. Your accounting must track this, or you&apos;ll over-depreciate and create problems on your next sale.
                      </p>
                    </div>
                  </section>

                  {/* Trust Accounts */}
                  <section id="trust-accounts" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Trust & Escrow Accounting (For Property Managers)
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Property managers handle other people&apos;s money — owner funds and tenant security deposits — and
                      every state regulates how this money is held. Mishandling trust funds is grounds for license
                      revocation in most jurisdictions.
                    </p>
                    <div className="space-y-3 mb-6">
                      {trustRules.map((r, i) => (
                        <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                          <p className="text-gray-700 text-sm">{r}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                      <p className="text-gray-700 text-sm">
                        <strong>Don&apos;t learn trust accounting on the job.</strong> Hire a bookkeeper or back-office partner
                        who&apos;s done it for at least 50 doors before you. The penalty for guessing is your license.
                      </p>
                    </div>
                  </section>

                  {/* Software */}
                  <section id="software" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Best Software by Use Case
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Real estate software is segmented by user type — a single landlord doesn&apos;t need Yardi, and a
                      property management firm shouldn&apos;t try to run on QuickBooks alone. Here&apos;s the lay of the land:
                    </p>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="text-left p-4 font-semibold">Platform</th>
                            <th className="text-left p-4 font-semibold">Best For</th>
                            <th className="text-left p-4 font-semibold">Strengths</th>
                            <th className="text-left p-4 font-semibold">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {software.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="p-4 text-gray-800 font-semibold">{row.name}</td>
                              <td className="p-4 text-gray-600">{row.best}</td>
                              <td className="p-4 text-gray-600">{row.strengths}</td>
                              <td className="p-4 text-brand-teal font-semibold">{row.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Outsourcing */}
                  <section id="outsourcing" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      When to Outsource Real Estate Accounting
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Most real estate operators try to DIY their books for too long, then face a stressful catch-up when
                      tax season, a refinance, or an investor inquiry hits. Common outsourcing triggers:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {outsourceTriggers.map((t, i) => (
                        <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <DollarSign className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                          <p className="text-gray-700 text-sm">{t}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-3">
                        Talk to MZBPO&apos;s Real Estate Team
                      </h3>
                      <p className="text-white/70 font-[var(--font-poppins)] mb-4">
                        We support investors, property managers, agents, and developers across the US, UK, Canada, and
                        Australia — with property-level books, trust account reconciliation, and tax-ready financials.
                      </p>
                      <Link
                        href="/meeting"
                        className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all"
                      >
                        Schedule a Discovery Call <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </section>

                  {/* FAQ */}
                  <section className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {faqItems.map((faq, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">{faq.question}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Related Posts */}
                  <section className="border-t border-gray-100 pt-10">
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-6">Related Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {relatedPosts.map((post, i) => (
                        <Link key={i} href={post.href} className="group">
                          <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3">
                            <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                          </div>
                          <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy text-sm mb-1 group-hover:text-brand-teal transition-colors">{post.title}</h4>
                          <p className="text-gray-500 text-xs">{post.description}</p>
                        </Link>
                      ))}
                    </div>
                  </section>

                </div>
              </div>
            </div>
          </div>
        </article>

        <CTASection />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
    </div>
  )
}
