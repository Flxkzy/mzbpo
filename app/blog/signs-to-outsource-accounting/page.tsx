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
  AlertTriangle,
  TrendingUp,
  DollarSign,
  Users,
  Shield,
  BarChart3,
  ChevronRight,
  BookOpen,
  Target,
  Briefcase,
  FileWarning,
  Rocket,
  UserMinus,
  LineChart,
  Landmark,
  Settings,
  Wallet,
  Scale,
} from "lucide-react"

export const metadata: Metadata = {
  title: "10 Signs Your Business Should Outsource Accounting in 2026",
  description:
    "Discover the top 10 warning signs that it's time to outsource your accounting. From compliance issues to rapid growth, learn when outsourcing bookkeeping makes sense for your business.",
  alternates: { canonical: "/blog/signs-to-outsource-accounting" },
  openGraph: {
    title: "10 Signs Your Business Should Outsource Accounting in 2026 | MZBPO",
    description:
      "Discover the top 10 warning signs that it's time to outsource your accounting. From compliance issues to rapid growth, learn when outsourcing bookkeeping makes sense for your business.",
    url: "https://www.mzbpo.com/blog/signs-to-outsource-accounting",
    type: "article",
    publishedTime: "2026-02-17T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Business professional reviewing financial reports - signs to outsource accounting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "10 Signs Your Business Should Outsource Accounting in 2026",
    description:
      "Discover the top 10 warning signs that it's time to outsource your accounting. Learn when outsourcing bookkeeping makes sense.",
  },
}

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "sign-1-time", title: "#1: Too Much Time on Books" },
  { id: "sign-2-behind", title: "#2: Books Are Always Behind" },
  { id: "sign-3-compliance", title: "#3: Compliance Issues" },
  { id: "sign-4-growing", title: "#4: Growing Rapidly" },
  { id: "sign-5-accountant-left", title: "#5: Your Accountant Left" },
  { id: "sign-6-insights", title: "#6: Need Better Insights" },
  { id: "sign-7-fundraising", title: "#7: Preparing for Fundraising" },
  { id: "sign-8-complex", title: "#8: Complex Requirements" },
  { id: "sign-9-cost", title: "#9: Paying Too Much" },
  { id: "sign-10-scale", title: "#10: Scale Without Headcount" },
  { id: "what-to-do-next", title: "What to Do Next" },
  { id: "conclusion", title: "Conclusion" },
]

const relatedPosts = [
  {
    title: "In-House vs Outsourced Accounting: Complete Cost Comparison",
    href: "/blog/in-house-vs-outsourced-accounting",
    description: "A detailed side-by-side analysis of both accounting models with real cost data.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
  },
  {
    title: "How Much Does Outsourced Bookkeeping Cost?",
    href: "/blog/outsourced-bookkeeping-cost",
    description: "A complete pricing guide with cost ranges and ROI calculations for outsourced bookkeeping.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=250&fit=crop",
  },
  {
    title: "Accounting for Startups: The Essential Guide",
    href: "/blog/accounting-for-startups",
    description: "Everything startup founders need to know about setting up their accounting function.",
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
            {/* Background Pattern */}
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
                <span className="text-white/80">Signs to Outsource Accounting</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <Target className="w-4 h-4" />
                <span>Strategy</span>
              </div>

              {/* Title */}
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                10 Signs Your Business Should{" "}
                <span className="text-brand-teal">Outsource Accounting</span> in 2026
              </h1>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                Every growing business reaches a tipping point where handling accounting in-house
                starts holding you back. Here are the warning signs you should not ignore.
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>MZBPO Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>February 17, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>11 min read</span>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative -mt-8 mb-12 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=820&fit=crop"
                  alt="Business professional analyzing financial documents and considering outsourced accounting"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
                      Recognizing these signs?
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      Talk to our team about how outsourcing can solve your accounting challenges.
                    </p>
                    <a
                      href="/meeting"
                      className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all"
                    >
                      Book a Call
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-9">
                <div className="prose prose-lg max-w-none font-[var(--font-poppins)]">
                  {/* Introduction */}
                  <section id="introduction" className="scroll-mt-32 mb-12">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      When you started your business, handling the books yourself made sense. Maybe
                      you used QuickBooks, hired a part-time bookkeeper, or just handed receipts to
                      your CPA at tax time. But as your business grows, that approach starts to
                      crack. Decisions get made on stale data. Tax deadlines sneak up. Errors
                      multiply. And you find yourself spending Sunday nights reconciling bank
                      statements instead of planning your next move.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The question is not <em>whether</em> your business will outgrow its accounting
                      setup. It is <em>when</em>. The businesses that recognize the tipping point
                      early gain a competitive advantage: cleaner financials, faster insights, lower
                      costs, and leadership time freed up for growth.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Below are the 10 most common warning signs that it is time to outsource your
                      accounting function. If you recognize three or more of these in your own
                      business, it is time to have a serious conversation about change.
                    </p>
                  </section>

                  {/* Key Stats Banner */}
                  <div className="bg-gradient-to-r from-brand-navy to-brand-navy/90 rounded-2xl p-8 my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                        37%
                      </div>
                      <div className="text-white/70 text-sm mt-1">
                        of businesses now outsource accounting
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                        $50K+
                      </div>
                      <div className="text-white/70 text-sm mt-1">
                        average annual savings per firm
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                        10%
                      </div>
                      <div className="text-white/70 text-sm mt-1">
                        decline in US accounting workforce
                      </div>
                    </div>
                  </div>

                  {/* Sign #1 */}
                  <section id="sign-1-time" className="scroll-mt-32 mb-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-brand-teal" />
                      </div>
                      <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy">
                        Sign #1: You&apos;re Spending Too Much Time on Books
                      </h2>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      As a business owner or CEO, your time is your most valuable asset. If you are
                      spending five, ten, or twenty hours a week on accounting tasks -- categorizing
                      transactions, chasing invoices, reconciling accounts, preparing reports -- you
                      are effectively paying yourself a bookkeeper&apos;s wage for CEO-level time.
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                      <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">
                        The CEO Time Cost Calculator
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                          <p className="text-sm text-gray-500 mb-1">10 hrs/week on books</p>
                          <p className="text-2xl font-bold text-brand-navy">520 hrs/year</p>
                          <p className="text-xs text-gray-400 mt-1">Lost to accounting tasks</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                          <p className="text-sm text-gray-500 mb-1">At $200/hr CEO value</p>
                          <p className="text-2xl font-bold text-red-500">$104,000</p>
                          <p className="text-xs text-gray-400 mt-1">Opportunity cost per year</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm text-center border-2 border-brand-teal">
                          <p className="text-sm text-gray-500 mb-1">Outsourcing cost</p>
                          <p className="text-2xl font-bold text-brand-teal">$18,000 - $36,000</p>
                          <p className="text-xs text-gray-400 mt-1">Professional bookkeeping</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      The math is simple. Every hour you spend on books is an hour you are not
                      spending on sales, product development, client relationships, or strategic
                      planning. Outsourcing your accounting frees you to focus on activities that
                      actually grow revenue.
                    </p>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6 my-6">
                      <p className="text-brand-navy font-semibold mb-2">
                        Quick test:
                      </p>
                      <p className="text-gray-600">
                        Track your time for one week. If you or other non-finance leaders are spending
                        more than 5 hours per week on accounting tasks, you are past the tipping
                        point.
                      </p>
                    </div>
                  </section>

                  {/* Sign #2 */}
                  <section id="sign-2-behind" className="scroll-mt-32 mb-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                        <FileWarning className="w-6 h-6 text-brand-teal" />
                      </div>
                      <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy">
                        Sign #2: Your Books Are Always Behind
                      </h2>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      It is the 25th of the month and you still do not have last month&apos;s
                      financials. Sound familiar? When your month-end close drags on for weeks, you
                      are making business decisions based on outdated or incomplete data. That is
                      like driving by looking in the rearview mirror.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                        <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5" />
                          When Books Are Behind, You Cannot:
                        </h4>
                        <ul className="space-y-2 text-sm text-red-700">
                          <li>&#8226; Know your real-time profitability</li>
                          <li>&#8226; Manage cash flow effectively</li>
                          <li>&#8226; Spot problems before they escalate</li>
                          <li>&#8226; Make informed hiring or spending decisions</li>
                          <li>&#8226; Respond quickly to lender or investor requests</li>
                          <li>&#8226; File taxes accurately and on time</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                        <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          With Outsourced Accounting, You Get:
                        </h4>
                        <ul className="space-y-2 text-sm text-green-700">
                          <li>&#8226; Month-end close within 5-10 business days</li>
                          <li>&#8226; Real-time dashboards and reporting</li>
                          <li>&#8226; Timely P&L, balance sheet, and cash flow</li>
                          <li>&#8226; Proactive alerts on anomalies</li>
                          <li>&#8226; Always-current books for any request</li>
                          <li>&#8226; On-time compliance and filings</li>
                        </ul>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      Professional outsourced accounting providers use standardized workflows and
                      checklists to ensure your books are closed consistently and on time every
                      single month. No more guesswork, no more waiting.
                    </p>
                  </section>

                  {/* Sign #3 */}
                  <section id="sign-3-compliance" className="scroll-mt-32 mb-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-brand-teal" />
                      </div>
                      <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy">
                        Sign #3: You&apos;ve Had Compliance Issues or Penalties
                      </h2>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      A late sales tax filing here, a payroll penalty there, an unexpected notice
                      from the IRS. If you have experienced any compliance failures -- even minor
                      ones -- it is a clear signal that your current accounting setup is not keeping
                      up. Penalties are expensive, but the real cost is the risk to your business
                      reputation and the stress of dealing with regulatory bodies.
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                      <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">
                        Common Compliance Failures That Signal Trouble:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-4 h-4 text-red-500" />
                          </div>
                          <div>
                            <p className="font-semibold text-brand-navy">Late Tax Filings</p>
                            <p className="text-sm text-gray-500">Sales tax, income tax, 1099s missed</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-4 h-4 text-red-500" />
                          </div>
                          <div>
                            <p className="font-semibold text-brand-navy">Payroll Penalties</p>
                            <p className="text-sm text-gray-500">Late deposits, incorrect withholdings</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-4 h-4 text-red-500" />
                          </div>
                          <div>
                            <p className="font-semibold text-brand-navy">Audit Findings</p>
                            <p className="text-sm text-gray-500">Material misstatements, weak controls</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-4 h-4 text-red-500" />
                          </div>
                          <div>
                            <p className="font-semibold text-brand-navy">Regulatory Notices</p>
                            <p className="text-sm text-gray-500">State or federal letters, back-taxes owed</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6 my-6">
                      <p className="text-brand-navy font-semibold mb-2">
                        Why outsourcing helps:
                      </p>
                      <p className="text-gray-600">
                        Professional accounting firms build compliance calendars, automated reminders,
                        and multi-layer review processes into their workflows. At MZBPO, compliance
                        tracking is standard -- not an afterthought. As the outsourcing arm of a BKR
                        International member firm, we apply internationally aligned standards to every
                        engagement.
                      </p>
                    </div>
                  </section>

                  {/* Sign #4 */}
                  <section id="sign-4-growing" className="scroll-mt-32 mb-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                        <Rocket className="w-6 h-6 text-brand-teal" />
                      </div>
                      <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy">
                        Sign #4: You&apos;re Growing Rapidly
                      </h2>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      Rapid growth is exciting, but it puts enormous strain on your accounting
                      function. Transaction volumes explode. New revenue streams emerge. You open
                      new locations, enter new markets, or add entities. What worked when you had
                      50 transactions a month falls apart at 500 or 5,000.
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                      <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">
                        Growth-Stage Accounting Challenges:
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <TrendingUp className="w-4 h-4 text-brand-teal" />
                          </div>
                          <div>
                            <p className="font-semibold text-brand-navy">Volume Explosion</p>
                            <p className="text-sm text-gray-500">
                              More transactions, more invoices, more reconciliations. Your bookkeeper who
                              handled 200 transactions a month cannot keep up with 2,000.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-4 h-4 text-brand-teal" />
                          </div>
                          <div>
                            <p className="font-semibold text-brand-navy">Entity Complexity</p>
                            <p className="text-sm text-gray-500">
                              New subsidiaries, LLCs, or international entities require intercompany
                              accounting, consolidation, and multi-currency handling.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <BarChart3 className="w-4 h-4 text-brand-teal" />
                          </div>
                          <div>
                            <p className="font-semibold text-brand-navy">Reporting Demands</p>
                            <p className="text-sm text-gray-500">
                              Investors, lenders, and board members want more sophisticated reporting --
                              departmental P&Ls, KPI dashboards, variance analysis.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      Outsourced accounting providers are built to scale. Need to double your
                      transaction processing capacity? It happens without you posting a job listing,
                      interviewing candidates, or onboarding new hires. You simply adjust the scope
                      of your engagement.
                    </p>
                  </section>

                  {/* Sign #5 */}
                  <section id="sign-5-accountant-left" className="scroll-mt-32 mb-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                        <UserMinus className="w-6 h-6 text-brand-teal" />
                      </div>
                      <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy">
                        Sign #5: Your Accountant Left (or Might Leave)
                      </h2>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      If your entire accounting function depends on a single person, you have a
                      critical single point of failure. When that person takes vacation, gets sick,
                      or resigns, your financial operations grind to a halt. And in today&apos;s
                      market, losing an accountant is not just inconvenient -- it is increasingly
                      common.
                    </p>

                    <div className="bg-gradient-to-r from-brand-navy to-brand-navy/90 rounded-2xl p-8 my-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                            340,000
                          </div>
                          <div className="text-white/70 text-sm mt-2">
                            accountants and auditors left the US profession between 2020 and 2025
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                            67%
                          </div>
                          <div className="text-white/70 text-sm mt-2">
                            of CPA firms report difficulty finding qualified candidates
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      The US accounting profession has experienced a roughly 10% decline in its
                      workforce. Fewer students are choosing accounting as a career, and experienced
                      professionals are retiring faster than they can be replaced. This talent
                      shortage means longer hiring timelines, higher salaries, and greater turnover
                      risk.
                    </p>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6 my-6">
                      <p className="text-brand-navy font-semibold mb-2">
                        The outsourcing advantage:
                      </p>
                      <p className="text-gray-600">
                        When you outsource, you never have a single point of failure. Your engagement
                        is backed by a team with documented processes, cross-trained staff, and
                        built-in continuity. If one team member leaves, the work continues without
                        interruption. Your institutional knowledge lives in systems, not in one
                        person&apos;s head.
                      </p>
                    </div>
                  </section>

                  {/* Sign #6 */}
                  <section id="sign-6-insights" className="scroll-mt-32 mb-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                        <LineChart className="w-6 h-6 text-brand-teal" />
                      </div>
                      <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy">
                        Sign #6: You Need Better Financial Insights
                      </h2>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      There is a fundamental difference between having your books done and having
                      financial intelligence. Many in-house bookkeepers are excellent at data entry
                      and reconciliation but do not provide the analysis, forecasting, and strategic
                      insight that growing businesses need.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-3">Basic Bookkeeping</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-0.5">&#9679;</span>
                            <span>Transaction recording</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-0.5">&#9679;</span>
                            <span>Bank reconciliation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-0.5">&#9679;</span>
                            <span>Standard financial statements</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-0.5">&#9679;</span>
                            <span>Historical data</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-brand-teal/5 rounded-xl p-5 border border-brand-teal/20">
                        <h4 className="font-semibold text-brand-navy mb-3">Strategic Finance (Outsourced)</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span>Cash flow forecasting and projections</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span>Budget vs actual variance analysis</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span>KPI tracking and trend analysis</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span>Scenario modeling and what-if analysis</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span>Profitability analysis by segment</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span>Working capital optimization</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      Outsourced accounting providers bring the expertise of controllers and CFOs
                      who have worked across dozens of businesses and industries. They see patterns,
                      flag risks, and identify opportunities that a single in-house bookkeeper
                      simply cannot match.
                    </p>
                  </section>

                  {/* Sign #7 */}
                  <section id="sign-7-fundraising" className="scroll-mt-32 mb-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                        <Landmark className="w-6 h-6 text-brand-teal" />
                      </div>
                      <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy">
                        Sign #7: You&apos;re Preparing for Fundraising or Exit
                      </h2>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      Whether you are raising a Series A, seeking a bank loan, or preparing your
                      business for sale, investors and acquirers will scrutinize your financials
                      like never before. Messy books, unclear revenue recognition, missing
                      documentation, or inconsistent reporting can kill a deal or drastically reduce
                      your valuation.
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                      <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">
                        What Investors and Acquirers Look For:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-sm text-gray-700">GAAP-compliant financial statements</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-sm text-gray-700">Clean audit trail and documentation</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-sm text-gray-700">Accurate revenue recognition</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-sm text-gray-700">Historical trend consistency</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-sm text-gray-700">Reliable forecasts and projections</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-sm text-gray-700">Strong internal controls</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6 my-6">
                      <p className="text-brand-navy font-semibold mb-2">
                        Why this matters:
                      </p>
                      <p className="text-gray-600">
                        Due diligence teams will request months of detailed financial data, often with
                        tight turnaround times. If your books are messy or incomplete, you will either
                        lose the deal, accept a lower valuation, or spend a fortune on last-minute
                        cleanup. Outsourcing ensures your financials are always investor-ready.
                      </p>
                    </div>
                  </section>

                  {/* Sign #8 */}
                  <section id="sign-8-complex" className="scroll-mt-32 mb-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                        <Settings className="w-6 h-6 text-brand-teal" />
                      </div>
                      <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy">
                        Sign #8: Your Industry Has Complex Requirements
                      </h2>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      Some industries have accounting requirements that go well beyond basic
                      bookkeeping. If your business deals with trust accounts, complex revenue
                      recognition (like SaaS or construction), inventory costing, multi-location
                      consolidation, or regulatory reporting, you need specialists -- not generalists.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-3">Real Estate &amp; Law</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>&#8226; Trust account management</li>
                          <li>&#8226; Escrow reconciliation</li>
                          <li>&#8226; IOLTA compliance</li>
                          <li>&#8226; Property-level accounting</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-3">SaaS &amp; Tech</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>&#8226; ASC 606 revenue recognition</li>
                          <li>&#8226; Deferred revenue tracking</li>
                          <li>&#8226; MRR/ARR calculations</li>
                          <li>&#8226; Customer cohort analysis</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-3">E-Commerce &amp; Retail</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>&#8226; Multi-channel inventory</li>
                          <li>&#8226; COGS and margin analysis</li>
                          <li>&#8226; Sales tax nexus tracking</li>
                          <li>&#8226; Returns and chargebacks</li>
                        </ul>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      Outsourced providers who work across many clients in your industry bring
                      ready-made expertise and proven processes. They have already solved the
                      problems you are encountering for the first time. This is especially valuable
                      compared to training a general bookkeeper on your industry&apos;s unique
                      requirements.
                    </p>
                  </section>

                  {/* Sign #9 */}
                  <section id="sign-9-cost" className="scroll-mt-32 mb-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                        <Wallet className="w-6 h-6 text-brand-teal" />
                      </div>
                      <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy">
                        Sign #9: You&apos;re Paying Too Much for In-House
                      </h2>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      Many businesses do not fully understand the true cost of their in-house
                      accounting function. Salary is just the beginning. When you factor in
                      benefits, payroll taxes, software licenses, training, office space, equipment,
                      management time, and recruiting costs, the real number is often 1.4x to 1.7x
                      the base salary.
                    </p>

                    {/* Cost Comparison */}
                    <div className="overflow-x-auto mb-6">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-brand-navy text-white">
                            <th className="text-left p-4 font-semibold rounded-tl-xl">Cost Component</th>
                            <th className="text-left p-4 font-semibold">In-House (Annual)</th>
                            <th className="text-left p-4 font-semibold rounded-tr-xl">Outsourced (Annual)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="p-4 font-medium text-brand-navy">Base Compensation</td>
                            <td className="p-4 text-gray-600">$55,000 - $75,000</td>
                            <td className="p-4 text-gray-600" rowSpan={7}>
                              <div className="bg-brand-teal/10 rounded-xl p-4 border border-brand-teal/20">
                                <p className="text-2xl font-bold text-brand-teal mb-1">$18,000 - $48,000</p>
                                <p className="text-xs text-gray-500">All-inclusive pricing, no hidden costs</p>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100 bg-gray-50">
                            <td className="p-4 font-medium text-brand-navy">Benefits &amp; Taxes</td>
                            <td className="p-4 text-gray-600">$11,000 - $22,500</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-4 font-medium text-brand-navy">Software Licenses</td>
                            <td className="p-4 text-gray-600">$2,000 - $5,000</td>
                          </tr>
                          <tr className="border-b border-gray-100 bg-gray-50">
                            <td className="p-4 font-medium text-brand-navy">Training &amp; Development</td>
                            <td className="p-4 text-gray-600">$1,500 - $3,000</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-4 font-medium text-brand-navy">Office Space &amp; Equipment</td>
                            <td className="p-4 text-gray-600">$5,000 - $12,000</td>
                          </tr>
                          <tr className="border-b border-gray-100 bg-gray-50">
                            <td className="p-4 font-medium text-brand-navy">Recruiting Costs (Amortized)</td>
                            <td className="p-4 text-gray-600">$3,000 - $8,000</td>
                          </tr>
                          <tr className="bg-brand-navy/5">
                            <td className="p-4 font-bold text-brand-navy rounded-bl-xl">Total Annual Cost</td>
                            <td className="p-4 font-bold text-red-500">$77,500 - $125,500</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-gradient-to-r from-brand-teal/10 to-brand-teal/5 rounded-2xl p-8 border border-brand-teal/20">
                      <h4 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">
                        Potential Savings
                      </h4>
                      <p className="text-gray-700 mb-4">
                        For a mid-size business replacing one full-time bookkeeper with outsourced
                        accounting services:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                          <p className="text-sm text-gray-500 mb-1">In-House Cost</p>
                          <p className="text-xl font-bold text-brand-navy">$77K - $126K/yr</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm text-center border-2 border-brand-teal">
                          <p className="text-sm text-gray-500 mb-1">Outsourced Cost</p>
                          <p className="text-xl font-bold text-brand-teal">$18K - $48K/yr</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                          <p className="text-sm text-gray-500 mb-1">You Save</p>
                          <p className="text-xl font-bold text-green-600">$29K - $108K/yr</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Sign #10 */}
                  <section id="sign-10-scale" className="scroll-mt-32 mb-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                        <Scale className="w-6 h-6 text-brand-teal" />
                      </div>
                      <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy">
                        Sign #10: You Want to Scale Without Adding Headcount
                      </h2>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      Every new in-house hire comes with management overhead, onboarding time,
                      office politics, and fixed costs that do not go away during slow periods.
                      If your goal is to scale your business efficiently -- keeping your team lean
                      and focused on core competencies -- outsourcing back-office functions like
                      accounting is one of the most effective strategies.
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                      <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">
                        Outsourcing as a Scaling Strategy:
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-brand-navy">Elastic Capacity</p>
                            <p className="text-sm text-gray-500">
                              Scale up during busy seasons (tax time, year-end, fundraising) and scale
                              back when things are quieter. No hiring or layoffs required.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-brand-navy">Variable Cost Model</p>
                            <p className="text-sm text-gray-500">
                              Convert fixed salary costs into variable operating expenses that
                              flex with your business volume.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-brand-navy">Lean Operations</p>
                            <p className="text-sm text-gray-500">
                              Keep your headcount focused on revenue-generating roles while the
                              back office runs smoothly in the background.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-brand-navy">Instant Expertise</p>
                            <p className="text-sm text-gray-500">
                              Need multi-entity consolidation or international accounting? Access
                              specialized skills without a months-long recruiting process.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      Many of the fastest-growing companies in the world use outsourcing as a
                      competitive advantage. It is not about cutting corners -- it is about
                      deploying your resources where they create the most value.
                    </p>
                  </section>

                  {/* Self-Assessment Checklist */}
                  <div className="bg-brand-navy rounded-2xl p-8 text-white my-12">
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-3">
                      Self-Assessment: Should You Outsource?
                    </h3>
                    <p className="text-white/70 text-sm mb-6">
                      Check every statement that applies to your business. If you check 3 or more,
                      it is time to seriously explore outsourcing.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="mt-1 w-4 h-4 rounded border-white/30"
                        />
                        <span className="text-white/80 text-sm">
                          I spend more than 5 hours/week on accounting tasks
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="mt-1 w-4 h-4 rounded border-white/30"
                        />
                        <span className="text-white/80 text-sm">
                          Our month-end close takes more than 15 business days
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="mt-1 w-4 h-4 rounded border-white/30"
                        />
                        <span className="text-white/80 text-sm">
                          We have received a tax penalty or compliance notice
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="mt-1 w-4 h-4 rounded border-white/30"
                        />
                        <span className="text-white/80 text-sm">
                          Our revenue has grown 30%+ in the last 12 months
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="mt-1 w-4 h-4 rounded border-white/30"
                        />
                        <span className="text-white/80 text-sm">
                          Only one person understands our full accounting process
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="mt-1 w-4 h-4 rounded border-white/30"
                        />
                        <span className="text-white/80 text-sm">
                          We lack forecasting, budgeting, or variance analysis
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="mt-1 w-4 h-4 rounded border-white/30"
                        />
                        <span className="text-white/80 text-sm">
                          We are planning to raise capital or sell the business
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="mt-1 w-4 h-4 rounded border-white/30"
                        />
                        <span className="text-white/80 text-sm">
                          Our industry has specialized accounting requirements
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="mt-1 w-4 h-4 rounded border-white/30"
                        />
                        <span className="text-white/80 text-sm">
                          Our total in-house accounting cost exceeds $75,000/year
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="mt-1 w-4 h-4 rounded border-white/30"
                        />
                        <span className="text-white/80 text-sm">
                          We want to grow without proportionally growing headcount
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* What to Do Next */}
                  <section id="what-to-do-next" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      What to Do Next: Evaluating Outsourcing Providers
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      If you recognized yourself in several of the signs above, the next step is to
                      evaluate potential outsourcing partners. Not all providers are created equal,
                      and choosing the right one is critical to a successful transition.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-brand-teal font-bold font-[family-name:var(--font-syne)]">1</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-brand-navy mb-1">Audit Your Current State</h4>
                            <p className="text-sm text-gray-600">
                              Document your current processes, pain points, transaction volumes, and
                              total costs. This gives you a baseline for comparison and helps providers
                              scope their proposals accurately.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-brand-teal font-bold font-[family-name:var(--font-syne)]">2</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-brand-navy mb-1">Define Your Requirements</h4>
                            <p className="text-sm text-gray-600">
                              What do you need? Basic bookkeeping? Full-service accounting with
                              controller oversight? CFO advisory? Be specific about deliverables,
                              reporting frequency, and turnaround times.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-brand-teal font-bold font-[family-name:var(--font-syne)]">3</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-brand-navy mb-1">Evaluate Providers Carefully</h4>
                            <p className="text-sm text-gray-600">
                              Look for industry experience, professional certifications, technology
                              stack, team depth, communication processes, and references from similar
                              businesses. Ask about their transition process and timeline.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-brand-teal font-bold font-[family-name:var(--font-syne)]">4</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-brand-navy mb-1">Plan the Transition</h4>
                            <p className="text-sm text-gray-600">
                              A good provider will create a structured onboarding plan with clear
                              milestones. Expect a 30-60 day transition period where you run parallel
                              processes before fully cutting over.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                      <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">
                        Key Questions to Ask Potential Providers:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-brand-teal flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-600">What is your onboarding process and timeline?</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-brand-teal flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-600">How many team members will work on my account?</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-brand-teal flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-600">What technology and software do you use?</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-brand-teal flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-600">How do you handle data security and confidentiality?</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-brand-teal flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-600">Can you provide references from my industry?</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-brand-teal flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-600">What happens if I need to scale up or down?</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-brand-teal flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-600">What professional affiliations or certifications do you hold?</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-brand-teal flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-600">What is your average month-end close timeline?</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Conclusion */}
                  <section id="conclusion" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Conclusion: Do Not Wait Until It Breaks
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      The businesses that thrive are the ones that recognize when their systems
                      need to evolve. Outgrowing your accounting setup is not a failure -- it is a
                      sign of success. The failure is ignoring the warning signs and waiting until
                      a missed deadline, a compliance penalty, or a failed audit forces your hand.
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      Outsourcing your accounting is not about giving up control. It is about
                      gaining better control through professional processes, deeper expertise, and
                      reliable systems. It is about freeing your time and your team to focus on
                      what you do best: growing your business.
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-8">
                      If you recognized three or more of the signs in this article, the time to act
                      is now. Start with a conversation. A good outsourcing partner will help you
                      assess your situation honestly and determine whether outsourcing is truly the
                      right move for your business.
                    </p>

                    <div className="bg-gradient-to-r from-brand-teal/10 to-brand-teal/5 rounded-2xl p-8 border border-brand-teal/20">
                      <h4 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-3">
                        Ready to Explore Your Options?
                      </h4>
                      <p className="text-gray-600 mb-4">
                        At MZBPO, we are the outsourcing arm of Muniff Ziauddin and Co., a BKR
                        International member firm. We bring global standards, deep expertise, and
                        a proven process to every engagement. Schedule a free consultation to
                        discuss your accounting challenges and see if outsourcing is right for you.
                      </p>
                      <a
                        href="/meeting"
                        className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold text-sm px-6 py-3 rounded-full hover:shadow-lg transition-all"
                      >
                        Schedule a Free Consultation
                        <ArrowRight className="w-4 h-4" />
                      </a>
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
                        member of BKR International -- the 5th largest global accounting association.
                        We provide outsourced bookkeeping, internal audit, payroll, and finance
                        services to growing businesses worldwide.
                      </p>
                      <div className="flex gap-4 mt-4">
                        <a
                          href="/services/bookkeeping-accounting"
                          className="text-sm text-brand-teal hover:underline font-medium"
                        >
                          Our Services &rarr;
                        </a>
                        <a
                          href="/meeting"
                          className="text-sm text-brand-teal hover:underline font-medium"
                        >
                          Schedule a Call &rarr;
                        </a>
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
          headline="See the Signs? Let's Talk."
          bodyText="Get a free consultation to discuss your accounting challenges. We'll help you determine if outsourcing is the right move and show you exactly how the transition works."
          ctaText="Schedule a Free Consultation"
          trackingContentName="Blog CTA - Signs to Outsource Accounting"
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
            headline: "10 Signs Your Business Should Outsource Accounting in 2026",
            description:
              "Discover the top 10 warning signs that it's time to outsource your accounting. From compliance issues to rapid growth, learn when outsourcing bookkeeping makes sense for your business.",
            image:
              "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop",
            datePublished: "2026-02-17T00:00:00.000Z",
            dateModified: "2026-02-17T00:00:00.000Z",
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
              "@id": "https://www.mzbpo.com/blog/signs-to-outsource-accounting",
            },
          }),
        }}
      />
    </div>
  )
}
