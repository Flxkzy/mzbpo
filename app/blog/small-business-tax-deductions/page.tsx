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
  AlertTriangle,
  Receipt,
  Building2,
  Car,
  Laptop,
  Plane,
  GraduationCap,
  HeartPulse,
  PiggyBank,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Small Business Tax Deductions: 75 Write-Offs You Can't Miss in 2026",
  description:
    "The most complete list of small business tax deductions for 2026. Learn 75+ legitimate write-offs across home office, vehicle, travel, payroll, retirement, and more — with rules, limits, and IRS compliance tips.",
  alternates: { canonical: "/blog/small-business-tax-deductions" },
  openGraph: {
    title: "Small Business Tax Deductions: 75 Write-Offs You Can't Miss in 2026 | MZBPO",
    description:
      "The most complete list of small business tax deductions for 2026 — 75+ write-offs with IRS rules, limits, and compliance tips so you keep more of what you earn.",
    url: "https://www.mzbpo.com/blog/small-business-tax-deductions",
    type: "article",
    publishedTime: "2025-11-12T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1554224155-1696413565d3?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Small Business Tax Deductions Guide 2026",
      },
    ],
  },
}

const tableOfContents = [
  { id: "introduction", title: "Why Most Small Businesses Overpay on Taxes" },
  { id: "rules", title: "The IRS Rules for Deducting Expenses" },
  { id: "home-office", title: "Home Office & Workspace Deductions" },
  { id: "vehicle", title: "Vehicle & Mileage Deductions" },
  { id: "travel", title: "Travel, Meals & Entertainment" },
  { id: "tech", title: "Technology, Software & Equipment" },
  { id: "payroll", title: "Salaries, Contractors & Benefits" },
  { id: "marketing", title: "Marketing, Advertising & Branding" },
  { id: "professional", title: "Professional Services & Education" },
  { id: "insurance", title: "Insurance, Health & Retirement" },
  { id: "operations", title: "Operations, Office & Misc." },
  { id: "mistakes", title: "5 Costly Deduction Mistakes" },
  { id: "documentation", title: "How to Document Deductions" },
  { id: "outsourcing", title: "When to Get Help" },
]

const homeOfficeDeductions = [
  { item: "Dedicated home office space", note: "Must be used regularly and exclusively for business" },
  { item: "Portion of rent or mortgage interest", note: "Based on % of home used for business" },
  { item: "Utilities (electricity, gas, water)", note: "Pro-rated by office square footage" },
  { item: "Home internet and phone", note: "Business-use percentage only" },
  { item: "Property taxes (proportional)", note: "Allocate based on business sq ft" },
  { item: "Home repairs and maintenance", note: "Direct repairs to office = 100%" },
  { item: "Renter's or homeowner's insurance", note: "Proportional allocation" },
  { item: "Depreciation on home (if owned)", note: "Recapture rules apply on sale" },
]

const vehicleDeductions = [
  { item: "Standard mileage rate", note: "67¢ per business mile (2026 IRS rate)" },
  { item: "Actual vehicle expenses", note: "Gas, repairs, insurance, depreciation" },
  { item: "Parking fees and tolls", note: "Always 100% deductible if business" },
  { item: "Vehicle registration fees", note: "Business-use portion only" },
  { item: "Lease payments", note: "Business-use percentage" },
  { item: "Auto loan interest", note: "Business-use portion" },
  { item: "Section 179 deduction (vehicles)", note: "Up to $30,500 for SUVs over 6,000 lbs" },
]

const travelDeductions = [
  { item: "Airfare and train tickets", note: "100% deductible for business travel" },
  { item: "Hotel and lodging", note: "Reasonable cost, 100% deductible" },
  { item: "Rental cars and rideshare", note: "Business-use only" },
  { item: "Business meals (50% rule)", note: "50% deductible with receipts" },
  { item: "Conference and event tickets", note: "100% if business-related" },
  { item: "Baggage fees and Wi-Fi", note: "100% during business travel" },
  { item: "Tips for service workers", note: "Track and document" },
  { item: "Visa and travel document fees", note: "If required for business trip" },
]

const techDeductions = [
  { item: "Computers, laptops, tablets", note: "Section 179 or depreciation" },
  { item: "Smartphones (business use)", note: "Business-use percentage" },
  { item: "Software subscriptions (SaaS)", note: "Fully deductible operating expense" },
  { item: "Cloud storage and hosting", note: "100% if for business" },
  { item: "Website design and development", note: "Capitalize or expense per IRS rules" },
  { item: "Domain registration and SSL", note: "Annual operating expense" },
  { item: "Office equipment and printers", note: "Section 179 eligible" },
  { item: "Internet service (business)", note: "100% if dedicated business line" },
]

const payrollDeductions = [
  { item: "Employee wages and salaries", note: "Including bonuses and commissions" },
  { item: "Employer payroll taxes", note: "FICA, FUTA, state unemployment" },
  { item: "Independent contractor payments", note: "1099-NEC required if $600+" },
  { item: "Health insurance premiums (employees)", note: "100% deductible to employer" },
  { item: "401(k) and retirement matching", note: "Employer contributions deductible" },
  { item: "Workers' compensation insurance", note: "Required + deductible" },
  { item: "Employee training and education", note: "Job-related courses" },
  { item: "Office snacks and coffee", note: "100% if for employees on premises" },
  { item: "Group term life insurance", note: "Up to $50,000 coverage per employee" },
]

const marketingDeductions = [
  { item: "Google, Meta, LinkedIn ads", note: "100% deductible advertising" },
  { item: "SEO and content marketing", note: "Operating expense" },
  { item: "Logo and brand design", note: "May need to capitalize" },
  { item: "Business cards and printed materials", note: "100% deductible" },
  { item: "Trade show booth and signage", note: "Marketing expense" },
  { item: "Sponsored events and giveaways", note: "Within reasonable limits" },
  { item: "Email marketing platforms", note: "Mailchimp, Klaviyo, etc." },
  { item: "PR agency and influencer fees", note: "Document business purpose" },
]

const professionalDeductions = [
  { item: "Accounting and bookkeeping fees", note: "100% deductible" },
  { item: "Tax preparation fees", note: "Business portion fully deductible" },
  { item: "Legal fees", note: "Business-related only" },
  { item: "Consulting fees", note: "Industry-relevant consultants" },
  { item: "Continuing education", note: "Maintains or improves current skills" },
  { item: "Professional certifications", note: "Required to maintain license" },
  { item: "Industry memberships", note: "Trade and professional associations" },
  { item: "Books, journals, and publications", note: "Business-related only" },
]

const insuranceDeductions = [
  { item: "General liability insurance", note: "100% deductible" },
  { item: "Professional liability (E&O)", note: "100% deductible" },
  { item: "Cyber liability insurance", note: "Increasingly common deduction" },
  { item: "Self-employed health insurance", note: "Up to net SE income (above-the-line)" },
  { item: "HSA contributions", note: "Self-employed or pass-through entities" },
  { item: "Solo 401(k) contributions", note: "Up to $70,000 (2026 limit)" },
  { item: "SEP-IRA contributions", note: "Up to 25% of net SE earnings" },
  { item: "Disability insurance (employee benefit)", note: "Tax treatment varies by structure" },
]

const operationsDeductions = [
  { item: "Office rent (commercial space)", note: "100% deductible" },
  { item: "Office supplies (paper, pens, etc.)", note: "100% deductible operating cost" },
  { item: "Postage and shipping", note: "Including FedEx, UPS, USPS" },
  { item: "Bank fees and credit card processing", note: "Business accounts only" },
  { item: "Loan interest (business loans)", note: "Interest only, not principal" },
  { item: "Business licenses and permits", note: "Annual renewal fees" },
  { item: "Subscriptions and dues", note: "Industry publications, software" },
  { item: "Charitable donations (entity level)", note: "Rules differ by structure" },
  { item: "Bad debt write-offs", note: "Accrual-basis taxpayers only" },
]

const mistakes = [
  {
    mistake: "Mixing personal and business expenses",
    detail:
      "Using your personal credit card for business purchases (or vice versa) makes deductions unverifiable and exposes you to audits. Open dedicated business accounts on day one.",
  },
  {
    mistake: "Skipping receipts for purchases under $75",
    detail:
      "The IRS only requires receipts for expenses over $75, but skipping smaller ones means you'll forget what was business and lose hundreds in deductions over the year.",
  },
  {
    mistake: "Deducting 100% of meals or vehicle use",
    detail:
      "Most business meals are limited to 50%. Most vehicles aren't 100% business — overstating triggers audits and disallowance of the entire deduction.",
  },
  {
    mistake: "Deducting commuting miles",
    detail:
      "Driving from home to a regular workplace is commuting, not business travel — and isn't deductible. Only mileage between business locations or to clients counts.",
  },
  {
    mistake: "Forgetting Section 179 and bonus depreciation",
    detail:
      "Many businesses depreciate equipment over 5–7 years when they could expense it immediately under Section 179 (up to $1.22M in 2026). Talk to your accountant before buying.",
  },
]

const documentationSteps = [
  { step: 1, title: "Use a business bank account and credit card", detail: "Every business expense should originate from a business account — not your personal card." },
  { step: 2, title: "Save digital copies of every receipt", detail: "Apps like Dext, Hubdoc, or even a phone scanner give you IRS-compliant digital records." },
  { step: 3, title: "Categorize transactions weekly", detail: "Don't let receipts pile up. A 30-minute weekly review prevents tax-season chaos." },
  { step: 4, title: "Keep a contemporaneous mileage log", detail: "Note date, destination, purpose, and miles. The IRS expects logs created at the time of travel, not reconstructed at year-end." },
  { step: 5, title: "Document business purpose for meals & travel", detail: "Receipt + who you met with + business reason. \"Lunch\" alone is not enough." },
  { step: 6, title: "Retain records for 7 years", detail: "The IRS audit window is generally 3 years, but extends to 6 for large omissions and 7 for bad debt or worthless securities." },
]

const faqItems = [
  {
    question: "What is the most overlooked tax deduction for small businesses?",
    answer:
      "Home office deduction. Many self-employed people skip it fearing an audit, but it's a legitimate deduction with clear IRS rules. Using the simplified method ($5/sq ft up to 300 sq ft) is low-risk and typically saves $1,000–$1,500 per year.",
  },
  {
    question: "Can I deduct expenses from before my business officially started?",
    answer:
      "Yes. The IRS allows up to $5,000 in start-up costs and $5,000 in organizational costs to be deducted in the first year, with the remainder amortized over 15 years. Track these separately from regular operating expenses.",
  },
  {
    question: "Are business meals 100% or 50% deductible in 2026?",
    answer:
      "Most business meals are 50% deductible. The 100% deduction for restaurant meals (introduced during COVID-19) expired in 2023. Office snacks for employees on premises remain 100% deductible.",
  },
  {
    question: "How much can I deduct for a home office?",
    answer:
      "Two methods: (1) Simplified — $5 per square foot up to 300 sq ft (max $1,500). (2) Regular method — actual percentage of home expenses based on office square footage. The regular method usually yields a larger deduction but requires more documentation.",
  },
  {
    question: "Can I deduct my health insurance as a self-employed person?",
    answer:
      "Yes. Self-employed health insurance (medical, dental, vision, qualified long-term care) is 100% deductible as an above-the-line deduction, limited to your net self-employment earnings. It reduces income tax but not self-employment tax.",
  },
  {
    question: "What's the difference between Section 179 and bonus depreciation?",
    answer:
      "Section 179 lets you immediately expense up to $1.22M of qualifying equipment (2026 limit), but only up to your taxable income. Bonus depreciation (60% in 2026, phasing down) has no income limit but applies after Section 179. Most businesses use both.",
  },
  {
    question: "Should I take the standard mileage rate or actual expenses?",
    answer:
      "Standard mileage (67¢/mile in 2026) is simpler and usually better for fuel-efficient cars driven a lot. Actual expenses can be better for expensive vehicles or low mileage. Once you choose actual expenses on a leased car, you must continue the actual method for that vehicle.",
  },
]

const relatedPosts = [
  {
    title: "Cash Flow Management Guide for Growing Businesses",
    href: "/blog/cash-flow-management-guide",
    description: "Master cash flow with proven strategies, forecasting, and working capital optimization.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
  },
  {
    title: "How Much Does Outsourced Bookkeeping Cost in 2026?",
    href: "/blog/outsourced-bookkeeping-cost",
    description: "A complete breakdown of pricing models and ROI for outsourced bookkeeping.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=250&fit=crop",
  },
  {
    title: "Signs Your Business Should Outsource Accounting",
    href: "/blog/signs-to-outsource-accounting",
    description: "Key indicators that it's time to bring in professional accounting help.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
  },
]

const categoryGroups = [
  { id: "home-office", title: "Home Office & Workspace", icon: <Building2 className="w-5 h-5 text-brand-teal" />, items: homeOfficeDeductions },
  { id: "vehicle", title: "Vehicle & Mileage", icon: <Car className="w-5 h-5 text-brand-teal" />, items: vehicleDeductions },
  { id: "travel", title: "Travel, Meals & Entertainment", icon: <Plane className="w-5 h-5 text-brand-teal" />, items: travelDeductions },
  { id: "tech", title: "Technology, Software & Equipment", icon: <Laptop className="w-5 h-5 text-brand-teal" />, items: techDeductions },
  { id: "payroll", title: "Salaries, Contractors & Benefits", icon: <Receipt className="w-5 h-5 text-brand-teal" />, items: payrollDeductions },
  { id: "marketing", title: "Marketing, Advertising & Branding", icon: <Receipt className="w-5 h-5 text-brand-teal" />, items: marketingDeductions },
  { id: "professional", title: "Professional Services & Education", icon: <GraduationCap className="w-5 h-5 text-brand-teal" />, items: professionalDeductions },
  { id: "insurance", title: "Insurance, Health & Retirement", icon: <HeartPulse className="w-5 h-5 text-brand-teal" />, items: insuranceDeductions },
  { id: "operations", title: "Operations, Office & Misc.", icon: <PiggyBank className="w-5 h-5 text-brand-teal" />, items: operationsDeductions },
]

export default function SmallBusinessTaxDeductionsPage() {
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
                <span className="text-white/80">Small Business Tax Deductions</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Tax Guide</span>
              </div>
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Small Business Tax Deductions:{" "}
                <span className="text-brand-teal">75 Write-Offs You Can&apos;t Miss in 2026</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                The average small business overpays the IRS by $11,000 each year — almost entirely from missed
                deductions. Here&apos;s the most complete, plain-English list of what you can legally write off.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>MZBPO Team</span></div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>November 12, 2025</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>16 min read</span></div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative -mt-8 mb-12 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-1696413565d3?w=1920&h=820&fit=crop"
                  alt="Small business tax deductions guide"
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
                      Tax Season Support
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      Our team finds every deduction you&apos;re entitled to and keeps your books audit-ready year-round.
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
                      Most small businesses leave thousands of dollars on the table every tax season — not because
                      they&apos;re trying to cheat, but because they don&apos;t know what they can deduct.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      A QuickBooks survey found that 1 in 5 self-employed people don&apos;t even bother claiming
                      deductions because they&apos;re afraid of an audit or unsure of the rules. The result: they
                      overpay the IRS by an average of $11,000 a year.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      This guide is the most complete, plain-English list of deductions a US small business or
                      self-employed person can legally claim in 2026 — covering 9 categories, 75+ specific
                      write-offs, IRS rules, and the documentation you need to defend them.
                    </p>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8 my-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-6 text-center">
                        How Much Are Small Businesses Actually Missing?
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          { stat: "$11,000", label: "average annual overpayment per small business" },
                          { stat: "21%", label: "of self-employed people don't claim available deductions" },
                          { stat: "$1.22M", label: "Section 179 limit in 2026 — equipment expensing" },
                        ].map((s, i) => (
                          <div key={i} className="text-center">
                            <div className="text-3xl font-bold text-white font-[family-name:var(--font-syne)]">{s.stat}</div>
                            <div className="text-white/70 text-sm mt-1">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Rules */}
                  <section id="rules" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      The IRS Rules for Deducting a Business Expense
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Before we get to the list, here&apos;s the test every deduction has to pass. The IRS uses
                      one phrase: an expense must be <strong>ordinary and necessary</strong> for your trade or business.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">Ordinary</h3>
                        <p className="text-gray-600 text-sm">
                          Common and accepted in your industry. A graphic designer buying a tablet is ordinary.
                          A graphic designer buying a forklift is not.
                        </p>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">Necessary</h3>
                        <p className="text-gray-600 text-sm">
                          Helpful and appropriate for your business — not strictly &quot;required.&quot; A coffee subscription
                          for the office, a project management tool, business cards: all necessary.
                        </p>
                      </div>
                    </div>
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">The mixed-use rule:</p>
                      <p className="text-gray-600 text-sm">
                        If something is part business / part personal (a phone, a car, your home), only the business
                        portion is deductible. Track the percentage honestly — the IRS expects reasonable documentation.
                      </p>
                    </div>
                  </section>

                  {/* Deduction categories */}
                  {categoryGroups.map((group) => (
                    <section key={group.id} id={group.id} className="scroll-mt-32 mb-12">
                      <div className="flex items-center gap-3 mb-6">
                        {group.icon}
                        <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy">
                          {group.title}
                        </h2>
                      </div>
                      <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-brand-navy text-white">
                              <th className="text-left p-4 font-semibold w-2/5">Deduction</th>
                              <th className="text-left p-4 font-semibold">Rules &amp; Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            {group.items.map((row, i) => (
                              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                <td className="p-4 text-gray-800 font-medium">{row.item}</td>
                                <td className="p-4 text-gray-600">{row.note}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </section>
                  ))}

                  {/* Mistakes */}
                  <section id="mistakes" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      5 Costly Deduction Mistakes Small Businesses Make
                    </h2>
                    <div className="space-y-4">
                      {mistakes.map((m, i) => (
                        <div key={i} className="bg-red-50 border border-red-100 rounded-xl p-5">
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                            <div>
                              <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">{m.mistake}</h3>
                              <p className="text-gray-600 text-sm">{m.detail}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Documentation */}
                  <section id="documentation" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      How to Document Deductions (Audit-Proof Your Records)
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The deduction is only as good as the paper trail behind it. Here&apos;s the documentation
                      system every small business should run year-round — not just at tax time.
                    </p>
                    <div className="space-y-4">
                      {documentationSteps.map((step) => (
                        <div key={step.step} className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="w-10 h-10 bg-brand-teal text-brand-navy rounded-xl flex items-center justify-center font-bold text-lg shrink-0">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-1">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Outsourcing */}
                  <section id="outsourcing" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      When to Stop Doing This Yourself
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Going it alone is fine in year one. But once revenue passes $250K — or your finances cross
                      multiple states, currencies, or entities — the cost of a missed deduction or filing error
                      starts to dwarf the cost of professional help.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {[
                        "Your books are more than 30 days behind",
                        "You're missing 1099 deadlines",
                        "Revenue is $250K+ and growing",
                        "You operate in multiple states or countries",
                        "You haven't done a tax projection mid-year",
                        "You found this list useful but don't have time to apply it",
                      ].map((sign, i) => (
                        <div key={i} className="flex items-start gap-3 bg-orange-50 border border-orange-100 rounded-xl p-4">
                          <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                          <p className="text-gray-700 text-sm">{sign}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-3">
                        MZBPO Year-Round Tax & Bookkeeping
                      </h3>
                      <p className="text-white/70 font-[var(--font-poppins)] mb-4">
                        We keep your books current, capture every legitimate deduction, and hand your CPA a clean
                        file at year-end — saving most clients 10–20× our fee in tax alone.
                      </p>
                      <Link
                        href="/meeting"
                        className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all"
                      >
                        Schedule a Call <ArrowRight className="w-4 h-4" />
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
