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
  XCircle,
  TrendingUp,
  DollarSign,
  Users,
  Shield,
  BarChart3,
  Building2,
  ChevronRight,
  BookOpen,
} from "lucide-react"

export const metadata: Metadata = {
  title: "In-House vs Outsourced Accounting: Complete Cost Comparison 2026",
  description:
    "Compare in-house accounting vs outsourced accounting services. Detailed cost analysis, pros and cons, and guidance on choosing the right model for your business.",
  alternates: { canonical: "/blog/in-house-vs-outsourced-accounting" },
  openGraph: {
    title: "In-House vs Outsourced Accounting: Complete Cost Comparison 2026 | MZBPO",
    description:
      "Compare in-house accounting vs outsourced accounting services. Detailed cost analysis, pros and cons, and guidance on choosing the right model for your business.",
    url: "https://www.mzbpo.com/blog/in-house-vs-outsourced-accounting",
    type: "article",
    publishedTime: "2025-10-15T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "In-House vs Outsourced Accounting Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "In-House vs Outsourced Accounting: Complete Cost Comparison 2026",
    description:
      "Compare in-house accounting vs outsourced accounting services. Detailed cost analysis and guidance for your business.",
  },
}

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "what-is-in-house-accounting", title: "What is In-House Accounting?" },
  { id: "what-is-outsourced-accounting", title: "What is Outsourced Accounting?" },
  { id: "cost-comparison", title: "Cost Comparison" },
  { id: "pros-and-cons", title: "Pros and Cons" },
  { id: "when-to-choose", title: "When to Choose Each Model" },
  { id: "hybrid-approach", title: "The Hybrid Approach" },
  { id: "conclusion", title: "Conclusion" },
]

const relatedPosts = [
  {
    title: "How Much Does Outsourced Bookkeeping Cost?",
    href: "/blog/outsourced-bookkeeping-cost",
    description: "A complete pricing guide with cost ranges and ROI calculations.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=250&fit=crop",
  },
  {
    title: "Month-End Close Checklist: Best Practices",
    href: "/blog/month-end-close-checklist",
    description: "Streamline your monthly close process with this comprehensive guide.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
  {
    title: "Internal Controls for Small Business",
    href: "/blog/internal-controls-small-business",
    description: "Essential fraud prevention controls every business needs.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
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
                <span className="text-white/80">In-House vs Outsourced Accounting</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Accounting Insights</span>
              </div>

              {/* Title */}
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                In-House vs Outsourced Accounting:{" "}
                <span className="text-brand-teal">Complete Cost Comparison</span>
              </h1>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                A detailed analysis of both accounting models to help you make an informed decision
                for your business. Compare costs, benefits, and find the right fit.
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>MZBPO Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>October 15, 2025</span>
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
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&h=820&fit=crop"
                  alt="Business professional analyzing financial data on multiple screens"
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
                      Need help deciding?
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      Get a free consultation to discuss your accounting needs.
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
                      One of the most significant decisions growing businesses face is how to manage
                      their accounting function. Should you build an in-house team or outsource to a
                      specialized provider? This choice impacts not just your bottom line, but your
                      operational efficiency, financial accuracy, and ability to scale.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      In this comprehensive guide, we'll break down both models with real cost
                      comparisons, analyze the pros and cons of each approach, and help you
                      determine which option makes the most sense for your specific situation.
                    </p>
                  </section>

                  {/* Key Stats Banner */}
                  <div className="bg-gradient-to-r from-brand-navy to-brand-navy/90 rounded-2xl p-8 my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                        37%
                      </div>
                      <div className="text-white/70 text-sm mt-1">
                        of businesses outsource accounting
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                        40-60%
                      </div>
                      <div className="text-white/70 text-sm mt-1">cost savings with outsourcing</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                        10%
                      </div>
                      <div className="text-white/70 text-sm mt-1">
                        drop in US accounting workforce
                      </div>
                    </div>
                  </div>

                  {/* What is In-House Accounting */}
                  <section id="what-is-in-house-accounting" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      What is In-House Accounting?
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      In-house accounting means employing full-time staff to manage your financial
                      operations. This typically includes hiring bookkeepers, staff accountants, a
                      controller, and potentially a CFO, depending on your company size and
                      complexity.
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                      <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">
                        Typical In-House Accounting Team Structure:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <Users className="w-4 h-4 text-brand-teal" />
                          </div>
                          <div>
                            <p className="font-semibold text-brand-navy">Bookkeeper</p>
                            <p className="text-sm text-gray-500">Daily transactions, data entry</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <BarChart3 className="w-4 h-4 text-brand-teal" />
                          </div>
                          <div>
                            <p className="font-semibold text-brand-navy">Staff Accountant</p>
                            <p className="text-sm text-gray-500">Reconciliations, reporting</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <Shield className="w-4 h-4 text-brand-teal" />
                          </div>
                          <div>
                            <p className="font-semibold text-brand-navy">Controller</p>
                            <p className="text-sm text-gray-500">Financial oversight, controls</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                            <TrendingUp className="w-4 h-4 text-brand-teal" />
                          </div>
                          <div>
                            <p className="font-semibold text-brand-navy">CFO</p>
                            <p className="text-sm text-gray-500">Strategy, fundraising, planning</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      Around <strong>60% of small businesses</strong> still use in-house accountants,
                      though this percentage decreases significantly for businesses that have been
                      operating longer and have discovered the benefits of outsourcing.
                    </p>
                  </section>

                  {/* What is Outsourced Accounting */}
                  <section id="what-is-outsourced-accounting" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      What is Outsourced Accounting?
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Outsourced accounting involves partnering with an external firm to handle some
                      or all of your financial operations. This can range from basic bookkeeping to
                      full-service finance department functions including CFO-level strategic
                      support.
                    </p>

                    <div className="relative rounded-2xl overflow-hidden mb-6">
                      <Image
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop"
                        alt="Team collaborating on financial documents remotely"
                        width={800}
                        height={400}
                        className="w-full object-cover"
                      />
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      Modern outsourced accounting providers leverage cloud technology, automated
                      workflows, and trained teams to deliver consistent, high-quality financial
                      management. The best providers bring not just cost savings, but also enhanced
                      expertise, better controls, and scalable capacity.
                    </p>

                    {/* Callout Box */}
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6 my-8">
                      <p className="text-brand-navy font-semibold mb-2">
                        Did you know?
                      </p>
                      <p className="text-gray-600">
                        At MZBPO, we operate as the outsourcing arm of Muniff Ziauddin and Co., a
                        BKR International member firm ranked among the top 10 global accounting
                        associations. This means our clients get internationally aligned processes
                        and professional standards.
                      </p>
                    </div>
                  </section>

                  {/* Cost Comparison */}
                  <section id="cost-comparison" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Cost Comparison: Breaking Down the Numbers
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Let's look at the real costs of each model. These figures are based on US
                      market rates for 2026, though the principles apply globally.
                    </p>

                    {/* In-House Costs Table */}
                    <div className="mb-8">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-brand-teal" />
                        In-House Accounting Costs (Annual)
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-brand-navy text-white">
                              <th className="text-left p-4 font-semibold rounded-tl-xl">Role</th>
                              <th className="text-left p-4 font-semibold">Base Salary</th>
                              <th className="text-left p-4 font-semibold">Benefits (20%)</th>
                              <th className="text-left p-4 font-semibold rounded-tr-xl">
                                Total Cost
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-gray-100">
                              <td className="p-4 font-medium text-brand-navy">Bookkeeper</td>
                              <td className="p-4 text-gray-600">$45,000 - $55,000</td>
                              <td className="p-4 text-gray-600">$9,000 - $11,000</td>
                              <td className="p-4 font-semibold text-brand-navy">
                                $54,000 - $66,000
                              </td>
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50">
                              <td className="p-4 font-medium text-brand-navy">Staff Accountant</td>
                              <td className="p-4 text-gray-600">$55,000 - $70,000</td>
                              <td className="p-4 text-gray-600">$11,000 - $14,000</td>
                              <td className="p-4 font-semibold text-brand-navy">
                                $66,000 - $84,000
                              </td>
                            </tr>
                            <tr className="border-b border-gray-100">
                              <td className="p-4 font-medium text-brand-navy">Controller</td>
                              <td className="p-4 text-gray-600">$90,000 - $130,000</td>
                              <td className="p-4 text-gray-600">$18,000 - $26,000</td>
                              <td className="p-4 font-semibold text-brand-navy">
                                $108,000 - $156,000
                              </td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="p-4 font-medium text-brand-navy rounded-bl-xl">CFO</td>
                              <td className="p-4 text-gray-600">$150,000 - $250,000</td>
                              <td className="p-4 text-gray-600">$30,000 - $50,000</td>
                              <td className="p-4 font-semibold text-brand-navy rounded-br-xl">
                                $180,000 - $300,000
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-sm text-gray-500 mt-3">
                        * Additional costs not shown: office space, equipment, software licenses,
                        training, recruiting fees, and management overhead.
                      </p>
                    </div>

                    {/* Outsourced Costs Table */}
                    <div className="mb-8">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-brand-teal" />
                        Outsourced Accounting Costs (Annual)
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-brand-teal text-brand-navy">
                              <th className="text-left p-4 font-semibold rounded-tl-xl">
                                Service Level
                              </th>
                              <th className="text-left p-4 font-semibold">Monthly</th>
                              <th className="text-left p-4 font-semibold">Annual</th>
                              <th className="text-left p-4 font-semibold rounded-tr-xl">
                                What's Included
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-gray-100">
                              <td className="p-4 font-medium text-brand-navy">Basic Bookkeeping</td>
                              <td className="p-4 text-gray-600">$300 - $800</td>
                              <td className="p-4 font-semibold text-brand-navy">$3,600 - $9,600</td>
                              <td className="p-4 text-gray-600 text-sm">
                                Transaction recording, reconciliations
                              </td>
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50">
                              <td className="p-4 font-medium text-brand-navy">Full Bookkeeping</td>
                              <td className="p-4 text-gray-600">$800 - $2,000</td>
                              <td className="p-4 font-semibold text-brand-navy">
                                $9,600 - $24,000
                              </td>
                              <td className="p-4 text-gray-600 text-sm">
                                + AP/AR, payroll entries, monthly close
                              </td>
                            </tr>
                            <tr className="border-b border-gray-100">
                              <td className="p-4 font-medium text-brand-navy">
                                Bookkeeping + Controller
                              </td>
                              <td className="p-4 text-gray-600">$2,000 - $5,000</td>
                              <td className="p-4 font-semibold text-brand-navy">
                                $24,000 - $60,000
                              </td>
                              <td className="p-4 text-gray-600 text-sm">
                                + Financial reporting, oversight, controls
                              </td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="p-4 font-medium text-brand-navy rounded-bl-xl">
                                Full Finance Function
                              </td>
                              <td className="p-4 text-gray-600">$5,000 - $15,000</td>
                              <td className="p-4 font-semibold text-brand-navy rounded-br-xl">
                                $60,000 - $180,000
                              </td>
                              <td className="p-4 text-gray-600 text-sm">
                                + CFO advisory, forecasting, strategy
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Savings Highlight */}
                    <div className="bg-gradient-to-r from-brand-teal/10 to-brand-teal/5 rounded-2xl p-8 border border-brand-teal/20">
                      <h4 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">
                        The Bottom Line
                      </h4>
                      <p className="text-gray-700 mb-4">
                        For a growing business that needs bookkeeping, monthly reporting, and
                        controller-level oversight:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-xl p-5 shadow-sm">
                          <p className="text-sm text-gray-500 mb-1">In-House Cost</p>
                          <p className="text-2xl font-bold text-brand-navy">$120,000 - $250,000/yr</p>
                          <p className="text-xs text-gray-400 mt-1">
                            Bookkeeper + Staff Accountant + Controller
                          </p>
                        </div>
                        <div className="bg-white rounded-xl p-5 shadow-sm border-2 border-brand-teal">
                          <p className="text-sm text-gray-500 mb-1">Outsourced Cost</p>
                          <p className="text-2xl font-bold text-brand-teal">$24,000 - $60,000/yr</p>
                          <p className="text-xs text-gray-400 mt-1">Full bookkeeping + controller</p>
                        </div>
                      </div>
                      <p className="text-brand-navy font-semibold mt-4">
                        Potential savings: $60,000 - $190,000 annually
                      </p>
                    </div>
                  </section>

                  {/* Pros and Cons */}
                  <section id="pros-and-cons" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Pros and Cons of Each Approach
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      {/* In-House Pros/Cons */}
                      <div>
                        <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">
                          In-House Accounting
                        </h3>
                        <div className="space-y-4">
                          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                            <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5" />
                              Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-green-700">
                              <li>• Direct control over staff and processes</li>
                              <li>• Immediate availability for questions</li>
                              <li>• Deep institutional knowledge over time</li>
                              <li>• Physical presence in the office</li>
                              <li>• Can handle ad-hoc requests quickly</li>
                            </ul>
                          </div>
                          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                            <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                              <XCircle className="w-5 h-5" />
                              Disadvantages
                            </h4>
                            <ul className="space-y-2 text-sm text-red-700">
                              <li>• High fixed costs (salaries, benefits)</li>
                              <li>• Turnover risk and knowledge loss</li>
                              <li>• Training and management overhead</li>
                              <li>• Limited expertise breadth</li>
                              <li>• Difficult to scale up or down</li>
                              <li>• Single point of failure risk</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Outsourced Pros/Cons */}
                      <div>
                        <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">
                          Outsourced Accounting
                        </h3>
                        <div className="space-y-4">
                          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                            <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5" />
                              Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-green-700">
                              <li>• 40-60% lower costs than in-house</li>
                              <li>• Access to senior-level expertise</li>
                              <li>• Scalable based on business needs</li>
                              <li>• No turnover or hiring concerns</li>
                              <li>• Built-in backup and continuity</li>
                              <li>• Best practices and modern tools</li>
                              <li>• Predictable monthly costs</li>
                            </ul>
                          </div>
                          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                            <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                              <XCircle className="w-5 h-5" />
                              Disadvantages
                            </h4>
                            <ul className="space-y-2 text-sm text-red-700">
                              <li>• Less direct control over staff</li>
                              <li>• Communication requires structure</li>
                              <li>• May not be on-site</li>
                              <li>• Initial transition period needed</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* When to Choose */}
                  <section id="when-to-choose" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      When to Choose Each Model
                    </h2>

                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                        <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy mb-4">
                          In-House Accounting Makes Sense When:
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span>
                              You have complex, industry-specific needs that require specialized
                              knowledge (e.g., certain manufacturing or regulated industries)
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span>
                              Your business requires real-time, on-site financial decision support
                              throughout the day
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span>
                              You have sufficient volume to keep a full-time team consistently busy
                              (typically $50M+ revenue)
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span>
                              Budget is not a constraint and you prefer maximum direct control
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-brand-teal/5 rounded-2xl p-6 border border-brand-teal/20">
                        <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy mb-4">
                          Outsourced Accounting Makes Sense When:
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span>
                              You're a growing business ($1M - $50M revenue) that needs professional
                              finance support without the overhead
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span>
                              You want access to senior-level expertise (controller, CFO) without
                              full-time salaries
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span>
                              Your business has variable transaction volumes or seasonal fluctuations
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span>
                              You've experienced turnover issues or are struggling to find qualified
                              accounting talent
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span>
                              You want to focus leadership time on core business rather than
                              managing finance staff
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Hybrid Approach */}
                  <section id="hybrid-approach" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      The Hybrid Approach: Best of Both Worlds
                    </h2>

                    <div className="relative rounded-2xl overflow-hidden mb-6">
                      <Image
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
                        alt="Team meeting with both in-person and remote participants"
                        width={800}
                        height={400}
                        className="w-full object-cover"
                      />
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      Many businesses find that a hybrid model works best. You might keep certain
                      functions in-house while outsourcing others. Common hybrid configurations
                      include:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-2">
                          In-House AP Clerk + Outsourced Bookkeeping
                        </h4>
                        <p className="text-sm text-gray-600">
                          Keep someone local for check runs and vendor relationships while
                          outsourcing the rest of the books.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-2">
                          In-House Controller + Outsourced Staff
                        </h4>
                        <p className="text-sm text-gray-600">
                          Senior oversight stays internal while day-to-day processing is outsourced.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-2">
                          Full Outsourced + Fractional CFO
                        </h4>
                        <p className="text-sm text-gray-600">
                          Entire finance function outsourced with strategic CFO support as needed.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-2">
                          Outsourced Bookkeeping + Internal Audit
                        </h4>
                        <p className="text-sm text-gray-600">
                          Leverage outsourced efficiency with independent audit oversight.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Conclusion */}
                  <section id="conclusion" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Making Your Decision
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The choice between in-house and outsourced accounting isn't one-size-fits-all.
                      The right answer depends on your business size, growth trajectory, budget,
                      industry, and management preferences.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      However, for most growing businesses in the $1M - $50M revenue range,
                      <strong> outsourced accounting delivers significantly better value</strong>:
                      lower costs, access to senior expertise, scalability, and the ability to
                      focus on what you do best—running your business.
                    </p>

                    {/* Final Checklist */}
                    <div className="bg-brand-navy rounded-2xl p-8 text-white">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-6">
                        Questions to Ask Before Deciding:
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="mt-1 w-4 h-4 rounded border-white/30"
                          />
                          <span className="text-white/80">
                            What's our total cost of the current accounting function?
                          </span>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="mt-1 w-4 h-4 rounded border-white/30"
                          />
                          <span className="text-white/80">
                            Are we getting quality financial insights or just data entry?
                          </span>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="mt-1 w-4 h-4 rounded border-white/30"
                          />
                          <span className="text-white/80">
                            How much time does leadership spend managing finance staff?
                          </span>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="mt-1 w-4 h-4 rounded border-white/30"
                          />
                          <span className="text-white/80">
                            What happens if our accountant leaves tomorrow?
                          </span>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="mt-1 w-4 h-4 rounded border-white/30"
                          />
                          <span className="text-white/80">
                            Do we have the controls and oversight we need?
                          </span>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="mt-1 w-4 h-4 rounded border-white/30"
                          />
                          <span className="text-white/80">
                            Can our current setup scale with our growth plans?
                          </span>
                        </label>
                      </div>
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
                        <a
                          href="/services/bookkeeping-accounting"
                          className="text-sm text-brand-teal hover:underline font-medium"
                        >
                          Our Services →
                        </a>
                        <a
                          href="/meeting"
                          className="text-sm text-brand-teal hover:underline font-medium"
                        >
                          Schedule a Call →
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
          headline="Ready to Explore Outsourced Accounting?"
          bodyText="Get a free consultation to discuss your accounting needs and discover how outsourcing could save you time and money while improving your financial operations."
          ctaText="Schedule a Free Consultation"
          trackingContentName="Blog CTA - In-House vs Outsourced"
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
            headline: "In-House vs Outsourced Accounting: Complete Cost Comparison 2026",
            description:
              "Compare in-house accounting vs outsourced accounting services. Detailed cost analysis, pros and cons, and guidance on choosing the right model for your business.",
            image:
              "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=630&fit=crop",
            datePublished: "2025-10-15T00:00:00.000Z",
            dateModified: "2025-10-15T00:00:00.000Z",
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
              "@id": "https://www.mzbpo.com/blog/in-house-vs-outsourced-accounting",
            },
          }),
        }}
      />
    </div>
  )
}
