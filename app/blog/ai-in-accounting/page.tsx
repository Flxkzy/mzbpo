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
  Zap,
  BarChart3,
  Shield,
  TrendingUp,
  RefreshCw,
  DollarSign,
  Star,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI in Accounting: How Automation is Changing Outsourced Services in 2026",
  description:
    "Explore how artificial intelligence is transforming accounting and bookkeeping in 2026 — from automated transaction coding and anomaly detection to AI-powered forecasting and what it means for businesses using outsourced accounting services.",
  alternates: { canonical: "/blog/ai-in-accounting" },
  openGraph: {
    title: "AI in Accounting: How Automation is Changing Outsourced Services in 2026 | MZBPO",
    description:
      "How AI is reshaping bookkeeping, compliance, forecasting, and outsourced accounting services — and what smart businesses are doing to stay ahead.",
    url: "https://www.mzbpo.com/blog/ai-in-accounting",
    type: "article",
    publishedTime: "2026-03-12T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "AI in Accounting 2026",
      },
    ],
  },
}

const tableOfContents = [
  { id: "introduction", title: "The AI Accounting Revolution" },
  { id: "what-ai-does", title: "What AI Actually Does in Accounting" },
  { id: "automation-areas", title: "6 Areas Transformed by AI" },
  { id: "tools", title: "AI Accounting Tools in 2026" },
  { id: "benefits", title: "Quantified Benefits for Businesses" },
  { id: "limitations", title: "What AI Cannot Replace" },
  { id: "outsourced-accounting", title: "AI + Outsourced Accounting" },
  { id: "implementation", title: "How to Implement AI" },
  { id: "future", title: "The Future: 2027 and Beyond" },
  { id: "conclusion", title: "What Businesses Should Do Now" },
]

const automationAreas = [
  { area: "Transaction Coding & Categorization", before: "Manual data entry — bookkeeper reviews each transaction and assigns codes", after: "AI learns from historical patterns and auto-codes 85–95% of transactions correctly", timeSaving: "70–80% reduction in time", accuracy: "Error rates drop to < 2%", icon: <RefreshCw className="w-6 h-6 text-brand-teal" /> },
  { area: "Bank Reconciliation", before: "Manual matching of transactions to bank statements — tedious and error-prone", after: "AI matches and reconciles in minutes; flags anomalies for human review", timeSaving: "90% faster reconciliation", accuracy: "Catches discrepancies missed by manual review", icon: <BarChart3 className="w-6 h-6 text-brand-teal" /> },
  { area: "Anomaly Detection & Fraud Prevention", before: "Auditors manually review transactions looking for unusual patterns", after: "AI monitors every transaction in real time, flagging statistical outliers immediately", timeSaving: "Continuous monitoring (vs. monthly/quarterly reviews)", accuracy: "Detects fraud patterns humans typically miss", icon: <Shield className="w-6 h-6 text-brand-teal" /> },
  { area: "Accounts Payable Automation", before: "Manual invoice receipt, data entry, approval routing, and payment scheduling", after: "AI extracts invoice data, matches to POs, routes for approval, schedules payments", timeSaving: "80% reduction in AP processing time", accuracy: "Near-elimination of duplicate payments", icon: <DollarSign className="w-6 h-6 text-brand-teal" /> },
  { area: "Financial Forecasting", before: "Accountants build manual models in Excel, updated monthly or quarterly", after: "AI analyzes historical patterns + external data to produce rolling forecasts updated daily", timeSaving: "Continuous, real-time forecasts", accuracy: "20–35% improvement in forecast accuracy", icon: <TrendingUp className="w-6 h-6 text-brand-teal" /> },
  { area: "Tax Compliance", before: "Accountants manually research rates, deadlines, and requirements across jurisdictions", after: "AI monitors regulatory changes, applies correct rates, and flags compliance risks automatically", timeSaving: "Significant reduction in compliance research time", accuracy: "Reduced risk of penalties from missed rule changes", icon: <CheckCircle2 className="w-6 h-6 text-brand-teal" /> },
]

const aiTools = [
  { tool: "Xero + AI Features", category: "Accounting Platform", capabilities: ["Auto-categorization of transactions", "Smart bank reconciliation", "Invoice auto-fill", "Cash flow predictions"], bestFor: "SMBs and mid-market on Xero" },
  { tool: "QuickBooks AI", category: "Accounting Platform", capabilities: ["Auto-categorization", "Receipt capture and extraction", "Cash flow insights", "Anomaly alerts"], bestFor: "US-based businesses on QuickBooks" },
  { tool: "Vic.ai", category: "AP Automation", capabilities: ["100% autonomous invoice processing", "Learns approval patterns", "Continuous accuracy improvement", "PO matching"], bestFor: "Mid-market with high invoice volumes" },
  { tool: "Botkeeper", category: "AI Bookkeeping", capabilities: ["Automated bookkeeping with human oversight", "Machine learning categorization", "Reconciliation automation", "Real-time reporting"], bestFor: "Accounting firms and outsourced services" },
  { tool: "Planful / Pigment", category: "FP&A / Forecasting", capabilities: ["AI-driven financial planning", "Scenario modeling", "Driver-based forecasting", "Board-ready reporting"], bestFor: "Mid-market to enterprise planning" },
  { tool: "Stampli", category: "AP Automation", capabilities: ["Billy the Bot™ for AP", "Context-aware coding suggestions", "Collaborative approvals", "Vendor management"], bestFor: "Businesses wanting intuitive AP automation" },
]

const quantifiedBenefits = [
  { metric: "Cost Reduction", value: "40–60%", context: "Reduction in accounting costs for businesses using AI-augmented outsourced services vs. in-house" },
  { metric: "Month-End Close", value: "5–7 Days", context: "vs. industry average of 15–20 days for manual processes" },
  { metric: "Reconciliation Time", value: "90% Faster", context: "Bank reconciliation automated from hours to minutes" },
  { metric: "Error Rate", value: "< 1%", context: "Transaction coding accuracy in mature AI systems vs. 5–8% for manual entry" },
  { metric: "Fraud Detection", value: "3x Better", context: "AI detects financial fraud patterns at 3x the rate of manual audits" },
  { metric: "Forecast Accuracy", value: "+30%", context: "AI-driven cash flow forecasts outperform manual Excel models by up to 35%" },
]

const aiLimitations = [
  { limitation: "Strategic Financial Judgment", detail: "AI can analyze data, but cannot assess whether an acquisition makes strategic sense, advise on complex deal structures, or understand your business model nuances." },
  { limitation: "Relationship Management", detail: "Negotiating with banks, managing investor communications, and navigating complex vendor relationships require human judgment and interpersonal skills." },
  { limitation: "Novel Compliance Situations", detail: "When regulations are new or ambiguous, AI applies existing patterns. A human accountant can reason about intent and make defensible judgment calls." },
  { limitation: "Complex Revenue Recognition", detail: "Highly complex ASC 606/IFRS 15 scenarios — multi-element arrangements, variable consideration, licensing — require expert human judgment." },
  { limitation: "Cross-Border Tax Strategy", detail: "International tax planning, transfer pricing, and treaty benefits require strategic thinking far beyond current AI capabilities." },
]

const implementationSteps = [
  { step: 1, title: "Audit Your Current Process", detail: "Map your financial workflows end-to-end. Identify the highest-volume, most repetitive tasks — these are the best AI automation targets." },
  { step: 2, title: "Ensure Clean Data", detail: "AI is only as good as the data it trains on. Ensure your chart of accounts is organized and historical bookkeeping is reasonably clean before deploying AI." },
  { step: 3, title: "Start with Your Accounting Platform's Native AI", detail: "Xero and QuickBooks already have significant AI built in. Enable and train these features before adding third-party tools." },
  { step: 4, title: "Add Specialized AI Tools", detail: "Once your core platform is optimized, add specialized tools for high-value areas: AP automation if you have high invoice volumes, or FP&A tools if forecasting is a priority." },
  { step: 5, title: "Establish a Human Review Process", detail: "AI should augment, not replace, human oversight. Define clear rules for what AI handles autonomously vs. what escalates to human review." },
  { step: 6, title: "Measure and Iterate", detail: "Track accuracy rates, time savings, and cost metrics. The AI models improve over time as they learn from your corrections and data." },
]

const faqItems = [
  { question: "Will AI replace accountants and bookkeepers?", answer: "No — but it's fundamentally changing the role. AI handles routine transaction processing, freeing accountants to focus on analysis, strategy, and advisory work. The accountants who adopt AI will outcompete those who don't. The profession is evolving, not disappearing." },
  { question: "Is AI accounting software secure?", answer: "Leading AI accounting platforms use bank-level encryption, SOC 2 Type II compliance, and multi-factor authentication. Check for SOC 2 certification, data residency policies, and breach notification procedures before selecting a platform." },
  { question: "How accurate is AI transaction coding?", answer: "Mature AI systems achieve 85–97% auto-coding accuracy after a training period of 3–6 months. The accuracy depends on the consistency of your historical data and the complexity of your transactions." },
  { question: "Do I need AI tools if I use outsourced accounting?", answer: "The best outsourced accounting firms already use AI tools internally to deliver faster, more accurate services at lower cost. Ask your provider what AI tools they use and how it benefits your engagement." },
  { question: "What's the ROI of AI accounting tools?", answer: "For most mid-sized businesses, AI accounting tools deliver ROI within 3–6 months through time savings alone. Entry-level tools start at $50–$200/month." },
]

const relatedPosts = [
  {
    title: "Xero vs QuickBooks vs Sage: Which Software in 2026?",
    href: "/blog/xero-vs-quickbooks-vs-sage",
    description: "Side-by-side comparison of the three most popular accounting platforms.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
  },
  {
    title: "Accounts Payable Best Practices: Automation & Fraud Prevention",
    href: "/blog/accounts-payable-best-practices",
    description: "Proven best practices for AP automation and fraud prevention.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
  },
  {
    title: "Outsourced Accounting Services in the USA",
    href: "/blog/outsourced-accounting-usa",
    description: "Everything US businesses need to know about outsourced accounting.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
  },
]

export default function AIInAccountingPage() {
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
                <span className="text-white/80">AI in Accounting</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Technology</span>
              </div>
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                AI in Accounting:{" "}
                <span className="text-brand-teal">How Automation is Changing Outsourced Services</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                Artificial intelligence is not coming to accounting — it&apos;s already here. Transaction coding,
                reconciliation, fraud detection, and cash flow forecasting are being transformed right now. Here&apos;s
                what it means for your business.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>MZBPO Team</span></div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>March 12, 2026</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>13 min read</span></div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative -mt-8 mb-12 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=820&fit=crop"
                  alt="AI in accounting 2026"
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
                        <a key={item.id} href={`#${item.id}`} className="block text-sm text-gray-600 hover:text-brand-teal transition-colors py-1 font-[var(--font-poppins)]">
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="mt-6 bg-brand-navy rounded-2xl p-6">
                    <p className="text-white font-[family-name:var(--font-syne)] font-bold mb-3">
                      AI-Powered Accounting
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      MZBPO uses leading AI tools to deliver faster, more accurate bookkeeping at lower cost than in-house finance.
                    </p>
                    <Link href="/meeting" className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all">
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
                      Three years ago, &quot;AI in accounting&quot; meant auto-categorizing transactions with basic
                      machine learning. In 2026, AI accounting systems are autonomously processing invoices, detecting
                      fraud in real time, generating rolling cash flow forecasts, and closing books in days instead
                      of weeks.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The question is no longer whether AI will change accounting — it&apos;s whether your business
                      will benefit from it or fall behind competitors who do.
                    </p>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-6 text-center">The AI Accounting Market in Numbers</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                          { stat: "$9.8B", label: "AI in accounting market by 2027" },
                          { stat: "80%", label: "Accounting tasks automatable by AI" },
                          { stat: "68%", label: "Of CFOs say AI is their top tech priority" },
                          { stat: "60%", label: "Faster close for top AI adopters" },
                        ].map((s, i) => (
                          <div key={i}>
                            <div className="text-2xl font-bold text-white font-[family-name:var(--font-syne)]">{s.stat}</div>
                            <div className="text-white/70 text-xs mt-1">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* What AI Does */}
                  <section id="what-ai-does" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      What AI Actually Does in Accounting
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Modern accounting AI uses several techniques: machine learning (pattern recognition),
                      natural language processing (reading documents), and large language models (reasoning about
                      complex accounting scenarios).
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { type: "Machine Learning", desc: "Learns your transaction patterns and chart of accounts to auto-code new transactions with increasing accuracy over time.", examples: "Transaction categorization, anomaly detection" },
                        { type: "OCR + NLP", desc: "Reads and extracts structured data from invoices, receipts, and financial documents — eliminating manual data entry.", examples: "AP automation, receipt capture" },
                        { type: "Predictive Analytics", desc: "Analyzes historical financial patterns alongside external data to generate accurate cash flow forecasts.", examples: "Cash flow forecasting, revenue prediction" },
                        { type: "Generative AI", desc: "Summarizes financial reports in plain English, generates variance explanations, and answers complex accounting questions.", examples: "Financial narrative generation, Q&A on reports" },
                      ].map((card, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">{card.type}</h3>
                          <p className="text-gray-600 text-sm mb-2">{card.desc}</p>
                          <p className="text-xs text-brand-teal font-medium">Examples: {card.examples}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 6 Areas */}
                  <section id="automation-areas" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      6 Areas of Accounting Being Transformed by AI
                    </h2>
                    <div className="space-y-6">
                      {automationAreas.map((area, i) => (
                        <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                          <div className="flex items-center gap-3 mb-4">
                            {area.icon}
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy text-xl">{area.area}</h3>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-red-50 rounded-lg p-4">
                              <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-1">Before AI</p>
                              <p className="text-gray-700 text-sm">{area.before}</p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4">
                              <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">With AI</p>
                              <p className="text-gray-700 text-sm">{area.after}</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            <span className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 font-medium text-gray-700">⚡ {area.timeSaving}</span>
                            <span className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 font-medium text-gray-700">✓ {area.accuracy}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Tools */}
                  <section id="tools" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      AI Accounting Tools in 2026
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {aiTools.map((tool, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy">{tool.tool}</h3>
                            <span className="text-xs bg-brand-teal/10 text-brand-teal px-2 py-1 rounded-full">{tool.category}</span>
                          </div>
                          <ul className="space-y-1 mb-3">
                            {tool.capabilities.map((cap, j) => (
                              <li key={j} className="text-gray-600 text-sm flex items-center gap-2">
                                <Zap className="w-3 h-3 text-brand-teal shrink-0" /> {cap}
                              </li>
                            ))}
                          </ul>
                          <p className="text-xs text-gray-400">Best for: {tool.bestFor}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Quantified Benefits */}
                  <section id="benefits" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Quantified Benefits for Businesses
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {quantifiedBenefits.map((b, i) => (
                        <div key={i} className="bg-brand-teal/5 border border-brand-teal/20 rounded-xl p-5 text-center">
                          <p className="text-3xl font-black text-brand-teal font-[family-name:var(--font-syne)] mb-1">{b.value}</p>
                          <p className="font-semibold text-brand-navy text-sm mb-2">{b.metric}</p>
                          <p className="text-gray-600 text-xs">{b.context}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Limitations */}
                  <section id="limitations" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      What AI Cannot Replace
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      AI is transformative, but it has real limitations. The smartest companies use AI to amplify
                      their human accountants, not replace them entirely.
                    </p>
                    <div className="space-y-4">
                      {aiLimitations.map((limit, i) => (
                        <div key={i} className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-500" /> {limit.limitation}
                          </h3>
                          <p className="text-gray-600 text-sm">{limit.detail}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* AI + Outsourced */}
                  <section id="outsourced-accounting" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      AI + Outsourced Accounting: The Winning Model
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The most effective financial operations in 2026 combine AI-powered automation with expert human
                      accountants. Here&apos;s what the model looks like in practice:
                    </p>
                    <div className="space-y-4 mb-8">
                      {[
                        { layer: "AI Automation Layer", color: "brand-teal", handles: ["Transaction coding (85–97% accuracy)", "Bank reconciliation", "Invoice data extraction", "Anomaly flagging", "Rolling cash flow updates"] },
                        { layer: "Human Expertise Layer", color: "blue-600", handles: ["Review and approve AI-flagged items", "Complex revenue recognition judgments", "Strategic financial advice", "Tax planning and compliance", "Financial analysis and reporting narrative"] },
                      ].map((layer, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">{layer.layer}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {layer.handles.map((h, j) => (
                              <div key={j} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                                <p className="text-gray-600 text-sm">{h}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8">
                      <h3 className="text-white font-[family-name:var(--font-syne)] text-xl font-bold mb-3">How MZBPO Uses AI to Serve Clients</h3>
                      <p className="text-white/70 font-[var(--font-poppins)] mb-4">
                        We use industry-leading AI tools — integrated with Xero and QuickBooks — to deliver faster,
                        more accurate bookkeeping. AI handles repetitive tasks; our certified accountants focus on
                        accuracy, compliance, and strategic insights.
                      </p>
                      <Link href="/meeting" className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all">
                        Schedule a Call <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </section>

                  {/* Implementation */}
                  <section id="implementation" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      How to Implement AI in Your Finance Function
                    </h2>
                    <div className="space-y-4">
                      {implementationSteps.map((step) => (
                        <div key={step.step} className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                          <div className="w-10 h-10 bg-brand-teal text-brand-navy rounded-xl flex items-center justify-center font-bold text-lg shrink-0">{step.step}</div>
                          <div>
                            <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-1">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Future */}
                  <section id="future" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      The Future: 2027 and Beyond
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {[
                        { trend: "Continuous Audit", desc: "AI will monitor 100% of transactions in real time, making annual external audits faster and spot audits more feasible for smaller businesses." },
                        { trend: "Autonomous Close", desc: "Some accounting firms are targeting a 1-day month-end close using fully automated reconciliation and AI-generated statements." },
                        { trend: "Predictive Tax Optimization", desc: "AI will proactively identify tax saving opportunities throughout the year, not just at year-end." },
                        { trend: "Natural Language Financial Queries", desc: "Business owners will ask: 'What's my cash position if my top 3 clients pay late this month?' and get instant answers." },
                      ].map((trend, i) => (
                        <div key={i} className="bg-brand-teal/5 border border-brand-teal/20 rounded-xl p-5">
                          <h3 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-2">{trend.trend}</h3>
                          <p className="text-gray-600 text-sm">{trend.desc}</p>
                        </div>
                      ))}
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

                  {/* Conclusion */}
                  <section id="conclusion" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      What Businesses Should Do Now
                    </h2>
                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6">
                      <p className="text-brand-navy font-semibold mb-3">Action Items for 2026:</p>
                      <ul className="space-y-2">
                        {["Enable and train your accounting platform's native AI features (Xero/QBO)", "Evaluate one AI-specialized tool for your highest-volume pain point", "Ask your outsourced accounting partner what AI tools they use and how they benefit you", "Review your month-end close time — if it's over 10 days, AI automation is likely the fix", "Build a human oversight process for AI-flagged exceptions"].map((action, i) => (
                          <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" /> {action}
                          </li>
                        ))}
                      </ul>
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
