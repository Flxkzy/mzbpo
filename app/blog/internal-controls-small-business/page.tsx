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
  Shield,
  AlertTriangle,
  Lock,
  Eye,
  FileCheck,
  Users,
  CreditCard,
  Banknote,
  Key,
  ClipboardList,
  UserCheck,
  FileSearch,
  Wallet,
  Building2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Internal Controls for Small Business: A Fraud Prevention Guide (2026)",
  description:
    "Essential internal controls every small business needs to prevent fraud, protect assets, and ensure accurate financial reporting. Practical checklist included.",
  alternates: { canonical: "/blog/internal-controls-small-business" },
  openGraph: {
    title: "Internal Controls for Small Business: A Fraud Prevention Guide | MZBPO",
    description:
      "Essential internal controls every small business needs to prevent fraud and protect assets.",
    url: "https://www.mzbpo.com/blog/internal-controls-small-business",
    type: "article",
    publishedTime: "2025-12-22T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Internal Controls and Fraud Prevention for Small Business",
      },
    ],
  },
}

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "what-are-internal-controls", title: "What Are Internal Controls?" },
  { id: "why-small-business-vulnerable", title: "Why Small Businesses Are Vulnerable" },
  { id: "essential-controls", title: "Essential Controls Checklist" },
  { id: "segregation-of-duties", title: "Segregation of Duties" },
  { id: "cash-controls", title: "Cash and Banking Controls" },
  { id: "ap-controls", title: "Accounts Payable Controls" },
  { id: "technology-controls", title: "Technology and Access Controls" },
  { id: "monitoring", title: "Monitoring and Review" },
  { id: "conclusion", title: "Conclusion" },
]

const fraudStats = [
  { value: "$150K", label: "Median loss for small businesses", icon: Wallet },
  { value: "42%", label: "Of fraud caused by lack of controls", icon: AlertTriangle },
  { value: "18 mo", label: "Average time to detect fraud", icon: Clock },
  { value: "5%", label: "Of revenue lost to fraud annually", icon: Building2 },
]

const essentialControls = [
  {
    category: "Segregation of Duties",
    icon: Users,
    color: "bg-blue-500",
    controls: [
      "No single person handles a transaction from start to finish",
      "Separate who authorizes, records, and reconciles transactions",
      "Different people open mail, deposit checks, and record receipts",
      "Rotate responsibilities periodically",
    ],
  },
  {
    category: "Cash and Banking",
    icon: Banknote,
    color: "bg-green-500",
    controls: [
      "Require dual signatures on checks over a threshold",
      "Reconcile bank statements monthly by someone independent",
      "Review bank statements for unauthorized transactions",
      "Limit access to check stock and online banking",
    ],
  },
  {
    category: "Accounts Payable",
    icon: CreditCard,
    color: "bg-purple-500",
    controls: [
      "Verify new vendors before adding to the system",
      "Match invoices to POs and receiving reports",
      "Require approval for all payments",
      "Review vendor master file changes regularly",
    ],
  },
  {
    category: "Accounts Receivable",
    icon: FileCheck,
    color: "bg-amber-500",
    controls: [
      "Someone independent of AR opens mail and lists checks",
      "Deposit funds promptly",
      "Review aging reports regularly",
      "Investigate write-offs and adjustments",
    ],
  },
  {
    category: "Payroll",
    icon: UserCheck,
    color: "bg-rose-500",
    controls: [
      "Verify new employees and pay rate changes",
      "Review payroll register before processing",
      "Compare payroll to budget/prior periods",
      "Audit ghost employees periodically",
    ],
  },
  {
    category: "Technology Access",
    icon: Lock,
    color: "bg-indigo-500",
    controls: [
      "Use unique logins for all users",
      "Require strong passwords and MFA",
      "Limit system access based on job function",
      "Promptly revoke access for departing employees",
    ],
  },
]

const redFlags = [
  "Employee living beyond their means",
  "Reluctance to take vacation or share duties",
  "Unusual vendor relationships",
  "Missing documentation or gaps in records",
  "Customer complaints about billing or payments",
  "Unexplained adjustments or write-offs",
  "Inventory shrinkage without explanation",
  "Employee working unusual hours alone",
]

const relatedPosts = [
  {
    title: "Month-End Close Checklist: Best Practices",
    href: "/blog/month-end-close-checklist",
    description: "A comprehensive checklist to ensure accuracy in your monthly close.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
  {
    title: "In-House vs Outsourced Accounting",
    href: "/blog/in-house-vs-outsourced-accounting",
    description: "Compare costs and benefits of each accounting model.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
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
                <span className="text-white/80">Internal Controls</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Internal Audit</span>
              </div>

              {/* Title */}
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Internal Controls for Small Business:{" "}
                <span className="text-brand-teal">A Fraud Prevention Guide</span>
              </h1>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                Essential controls every growing business needs to prevent fraud, protect assets,
                and ensure accurate financial reporting. Practical checklist included.
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>MZBPO Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>December 22, 2025</span>
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
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=820&fit=crop"
                  alt="Business security and internal controls concept"
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
                      Need an Internal Audit?
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      Our team can assess your controls and identify gaps.
                    </p>
                    <Link
                      href="/services/internal-audit-compliance"
                      className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
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
                      Every year, small businesses lose billions of dollars to fraud. Unlike large
                      corporations with dedicated compliance teams, small businesses often lack the
                      resources to implement comprehensive fraud prevention programs—making them
                      prime targets.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The good news? You don't need an army of auditors to protect your business.
                      By implementing a handful of essential internal controls, you can
                      significantly reduce your fraud risk and catch problems before they become
                      catastrophic.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      This guide covers the internal controls every small business should have in
                      place, organized by area. Use it as a checklist to evaluate your current
                      controls and identify gaps that need attention.
                    </p>
                  </section>

                  {/* Fraud Stats Banner */}
                  <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-2xl p-8 my-12">
                    <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-6 text-center">
                      The Cost of Weak Controls
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {fraudStats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/10 flex items-center justify-center">
                            <stat.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-3xl font-bold text-white font-[family-name:var(--font-syne)]">
                            {stat.value}
                          </div>
                          <div className="text-white/70 text-sm mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <p className="text-white/60 text-xs text-center mt-6">
                      Source: Association of Certified Fraud Examiners, 2024 Report to the Nations
                    </p>
                  </div>

                  {/* What Are Internal Controls */}
                  <section id="what-are-internal-controls" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      What Are Internal Controls?
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Internal controls are the policies, procedures, and practices an organization
                      implements to:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <div className="flex items-center gap-3 mb-2">
                          <Shield className="w-5 h-5 text-brand-teal" />
                          <h4 className="font-semibold text-brand-navy">Prevent Fraud</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Make it difficult for dishonest actors to steal or misuse company assets.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <div className="flex items-center gap-3 mb-2">
                          <Eye className="w-5 h-5 text-brand-teal" />
                          <h4 className="font-semibold text-brand-navy">Detect Problems</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Identify errors, irregularities, and fraud quickly when they occur.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <div className="flex items-center gap-3 mb-2">
                          <FileCheck className="w-5 h-5 text-brand-teal" />
                          <h4 className="font-semibold text-brand-navy">Ensure Accuracy</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Produce reliable financial information for decision-making.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <div className="flex items-center gap-3 mb-2">
                          <ClipboardList className="w-5 h-5 text-brand-teal" />
                          <h4 className="font-semibold text-brand-navy">Maintain Compliance</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Meet legal, regulatory, and contractual obligations.
                        </p>
                      </div>
                    </div>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">Remember</p>
                      <p className="text-gray-600">
                        Controls aren't about distrusting your employees—they're about creating an
                        environment where honest people stay honest and dishonest actors are deterred
                        or caught quickly. Good controls protect everyone, including your employees.
                      </p>
                    </div>
                  </section>

                  {/* Why Small Businesses Are Vulnerable */}
                  <section id="why-small-business-vulnerable" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Why Small Businesses Are Especially Vulnerable
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Small businesses face unique challenges that increase their fraud risk:
                    </p>

                    <div className="space-y-4 mb-6">
                      {[
                        {
                          title: "Limited Staff",
                          description:
                            "With fewer employees, proper segregation of duties is difficult. One person often handles multiple functions that should be separated.",
                        },
                        {
                          title: "Trust-Based Culture",
                          description:
                            "Small business owners often trust long-term employees implicitly, reducing oversight and creating opportunity for fraud.",
                        },
                        {
                          title: "Owner Distraction",
                          description:
                            "Owners wear many hats and may not have time to review financials carefully or implement formal controls.",
                        },
                        {
                          title: "Lack of Expertise",
                          description:
                            "Without dedicated accounting or internal audit staff, control weaknesses go unidentified.",
                        },
                        {
                          title: "Informal Processes",
                          description:
                            "Procedures exist in people's heads rather than documented policies, leading to inconsistency and gaps.",
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border border-red-100"
                        >
                          <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-brand-navy">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      The result? According to the ACFE, small businesses (under 100 employees)
                      experience higher median fraud losses than larger organizations—even though
                      they can least afford it.
                    </p>
                  </section>

                  {/* Essential Controls Checklist */}
                  <section id="essential-controls" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Essential Controls Checklist
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Here are the fundamental internal controls every small business should
                      implement, organized by area. Use this as a checklist to assess your current
                      state.
                    </p>

                    <div className="space-y-6">
                      {essentialControls.map((section, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
                        >
                          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-xl ${section.color} flex items-center justify-center`}
                            >
                              <section.icon className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">
                              {section.category}
                            </h3>
                          </div>
                          <div className="p-6">
                            <div className="space-y-3">
                              {section.controls.map((control, cIdx) => (
                                <label
                                  key={cIdx}
                                  className="flex items-start gap-3 cursor-pointer group"
                                >
                                  <div className="mt-0.5 w-5 h-5 rounded border-2 border-gray-300 group-hover:border-brand-teal flex items-center justify-center transition-colors flex-shrink-0">
                                    <CheckCircle2 className="w-4 h-4 text-transparent group-hover:text-brand-teal/30" />
                                  </div>
                                  <span className="text-gray-600">{control}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Segregation of Duties Deep Dive */}
                  <section id="segregation-of-duties" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Segregation of Duties: The Foundation
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Segregation of duties (SOD) is the most important internal control concept.
                      The principle is simple: no single person should control all aspects of a
                      transaction.
                    </p>

                    <div className="relative rounded-2xl overflow-hidden mb-6">
                      <Image
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
                        alt="Team collaboration representing segregation of duties"
                        width={800}
                        height={400}
                        className="w-full object-cover"
                      />
                    </div>

                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-4">
                      The Three Key Functions to Separate
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-100 flex items-center justify-center">
                          <Key className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-brand-navy mb-2">Authorization</h4>
                        <p className="text-sm text-gray-600">Approving transactions</p>
                      </div>
                      <div className="bg-green-50 rounded-xl p-5 border border-green-100 text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-green-100 flex items-center justify-center">
                          <FileCheck className="w-6 h-6 text-green-600" />
                        </div>
                        <h4 className="font-semibold text-brand-navy mb-2">Recording</h4>
                        <p className="text-sm text-gray-600">Entering into the books</p>
                      </div>
                      <div className="bg-purple-50 rounded-xl p-5 border border-purple-100 text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-purple-100 flex items-center justify-center">
                          <Banknote className="w-6 h-6 text-purple-600" />
                        </div>
                        <h4 className="font-semibold text-brand-navy mb-2">Custody</h4>
                        <p className="text-sm text-gray-600">Handling assets</p>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                      <h4 className="font-semibold text-amber-800 mb-2">
                        When You Can't Fully Segregate
                      </h4>
                      <p className="text-amber-700 text-sm mb-3">
                        Many small businesses can't achieve perfect segregation with limited staff.
                        Compensating controls include:
                      </p>
                      <ul className="text-sm text-amber-700 space-y-1">
                        <li>• Owner/manager review of all transactions and reports</li>
                        <li>• Surprise audits and spot checks</li>
                        <li>• Mandatory vacations (someone else covers the role)</li>
                        <li>• Outsourcing certain functions to third parties</li>
                        <li>• Using software with audit trails and alerts</li>
                      </ul>
                    </div>
                  </section>

                  {/* Cash Controls */}
                  <section id="cash-controls" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Cash and Banking Controls
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Cash is the asset most vulnerable to theft. Strong controls around cash
                      handling and bank accounts are essential.
                    </p>

                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy flex items-center gap-2">
                          <Banknote className="w-5 h-5 text-brand-teal" />
                          Cash and Banking Controls Checklist
                        </h3>
                      </div>
                      <div className="p-6 space-y-4">
                        {[
                          "Bank statements are reconciled monthly by someone who doesn't handle cash",
                          "Owner/manager reviews bank statements directly (not just summaries)",
                          "Dual signatures required for checks over a threshold (e.g., $5,000)",
                          "Check stock is secured; voided checks are retained",
                          "Online banking access is limited with appropriate controls",
                          "Positive pay or similar fraud prevention is enabled",
                          "Cash receipts are deposited daily or next business day",
                          "Petty cash has clear policies and is reconciled regularly",
                          "Wire transfers require dual authorization",
                          "Bank accounts are reconciled to the general ledger",
                        ].map((item, idx) => (
                          <label
                            key={idx}
                            className="flex items-start gap-3 cursor-pointer group"
                          >
                            <div className="mt-0.5 w-5 h-5 rounded border-2 border-gray-300 group-hover:border-brand-teal flex items-center justify-center transition-colors">
                              <CheckCircle2 className="w-4 h-4 text-transparent group-hover:text-brand-teal/30" />
                            </div>
                            <span className="text-gray-600">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-2">Pro Tip</p>
                      <p className="text-gray-600">
                        The owner should receive bank statements at home (or digitally) and review
                        them personally before handing off to the bookkeeper. This single control
                        catches many fraud schemes early. Also see our{" "}
                        <Link
                          href="/blog/month-end-close-checklist"
                          className="text-brand-teal hover:underline"
                        >
                          month-end close checklist
                        </Link>{" "}
                        for reconciliation best practices.
                      </p>
                    </div>
                  </section>

                  {/* AP Controls */}
                  <section id="ap-controls" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Accounts Payable Controls
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      AP fraud (fake vendors, duplicate payments, kickbacks) is one of the most
                      common schemes. These controls help prevent it.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-3 flex items-center gap-2">
                          <UserCheck className="w-5 h-5 text-brand-teal" />
                          Vendor Management
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                          <li>• Verify new vendors independently before setup</li>
                          <li>• Obtain W-9s before first payment</li>
                          <li>• Review vendor master file quarterly</li>
                          <li>• Look for vendors with employee addresses/phones</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-3 flex items-center gap-2">
                          <FileSearch className="w-5 h-5 text-brand-teal" />
                          Invoice Processing
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                          <li>• Three-way match: PO, receiving, invoice</li>
                          <li>• Require approval before payment</li>
                          <li>• Mark invoices "paid" to prevent duplicates</li>
                          <li>• Review unusual or round-dollar invoices</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                      <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Red Flags in Accounts Payable
                      </h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Vendors with P.O. Box addresses only</li>
                        <li>• Sequential invoice numbers from different vendors</li>
                        <li>• Vendor address or bank account matches employee data</li>
                        <li>• Invoices just below approval thresholds</li>
                        <li>• Rush payment requests bypassing normal process</li>
                      </ul>
                    </div>
                  </section>

                  {/* Technology Controls */}
                  <section id="technology-controls" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Technology and Access Controls
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Your accounting and business systems should have controls that limit access
                      and create audit trails.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-4">
                          <Lock className="w-6 h-6 text-brand-teal" />
                        </div>
                        <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">
                          Access Management
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                          <li>• Unique login credentials for each user</li>
                          <li>• Strong password requirements</li>
                          <li>• Multi-factor authentication (MFA)</li>
                          <li>• Role-based access (least privilege)</li>
                          <li>• Prompt termination of departing employee access</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-4">
                          <Eye className="w-6 h-6 text-brand-teal" />
                        </div>
                        <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-3">
                          Monitoring and Audit Trails
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                          <li>• Enable system audit logs</li>
                          <li>• Review logs for unusual activity</li>
                          <li>• Set up alerts for sensitive transactions</li>
                          <li>• Backup data regularly and securely</li>
                          <li>• Retain records per legal requirements</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Monitoring */}
                  <section id="monitoring" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Monitoring and Review
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Controls are only effective if they're actually followed. Regular monitoring
                      ensures controls are working and helps detect problems.
                    </p>

                    <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
                      <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">
                        Warning Signs of Fraud
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {redFlags.map((flag, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                            <span>{flag}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-brand-navy rounded-2xl p-8 text-white">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-4">
                        Regular Monitoring Activities
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Monthly:</strong> Review bank reconciliations, unusual
                            transactions, aged receivables/payables
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Quarterly:</strong> Review vendor master file, user access
                            rights, budget variances
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Annually:</strong> Conduct surprise audits, review all controls,
                            update policies
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Ongoing:</strong> Encourage employees to report concerns, watch
                            for red flags
                          </span>
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* Conclusion */}
                  <section id="conclusion" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Conclusion
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Implementing internal controls isn't about creating bureaucracy or signaling
                      distrust—it's about protecting your business, your employees, and your
                      financial health. Start with the basics: segregation of duties, bank
                      reconciliations by someone independent, and management review of key
                      transactions.
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                      <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">
                        Getting Started: Priority Actions
                      </h3>
                      <ol className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-brand-teal text-white text-sm flex items-center justify-center flex-shrink-0">
                            1
                          </span>
                          <span className="text-gray-600">
                            Ensure owner/manager reviews bank statements personally every month
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-brand-teal text-white text-sm flex items-center justify-center flex-shrink-0">
                            2
                          </span>
                          <span className="text-gray-600">
                            Separate cash handling from bookkeeping (even if it's just reviews)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-brand-teal text-white text-sm flex items-center justify-center flex-shrink-0">
                            3
                          </span>
                          <span className="text-gray-600">
                            Require approval for all vendor additions and payments over a threshold
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-brand-teal text-white text-sm flex items-center justify-center flex-shrink-0">
                            4
                          </span>
                          <span className="text-gray-600">
                            Enable audit trails and access controls in your accounting software
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-brand-teal text-white text-sm flex items-center justify-center flex-shrink-0">
                            5
                          </span>
                          <span className="text-gray-600">
                            Consider{" "}
                            <Link
                              href="/services/internal-audit-compliance"
                              className="text-brand-teal hover:underline"
                            >
                              periodic internal audits
                            </Link>{" "}
                            to assess and strengthen controls
                          </span>
                        </li>
                      </ol>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      Need help assessing your controls or implementing improvements? Our{" "}
                      <Link
                        href="/services/internal-audit-compliance"
                        className="text-brand-teal hover:underline"
                      >
                        internal audit and compliance services
                      </Link>{" "}
                      can identify gaps and help you build a control environment appropriate for
                      your business size and risk profile.
                    </p>
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
                          href="/services/internal-audit-compliance"
                          className="text-sm text-brand-teal hover:underline font-medium"
                        >
                          Internal Audit Services →
                        </Link>
                        <Link
                          href="/meeting"
                          className="text-sm text-brand-teal hover:underline font-medium"
                        >
                          Schedule a Call →
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
          headline="Concerned About Your Internal Controls?"
          bodyText="Our internal audit team can assess your current controls, identify gaps, and recommend practical improvements tailored to your business size and risk profile."
          ctaText="Request a Controls Assessment"
          trackingContentName="Blog CTA - Internal Controls Small Business"
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
            headline: "Internal Controls for Small Business: A Fraud Prevention Guide",
            description:
              "Essential internal controls every small business needs to prevent fraud, protect assets, and ensure accurate financial reporting.",
            image:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop",
            datePublished: "2025-12-22T00:00:00.000Z",
            dateModified: "2025-12-22T00:00:00.000Z",
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
              "@id": "https://www.mzbpo.com/blog/internal-controls-small-business",
            },
          }),
        }}
      />
    </div>
  )
}
