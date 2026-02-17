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
  Globe2,
  Building2,
  Users,
  Shield,
  Award,
  MapPin,
  Handshake,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  TrendingUp,
  FileCheck,
  GraduationCap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "What is BKR International? How Our Global Network Benefits Your Business",
  description:
    "Learn about BKR International, one of the world's top 10 accounting associations with 160+ member firms in 80 countries, and how MZBPO's membership delivers global standards to your business.",
  alternates: { canonical: "/blog/what-is-bkr-international" },
  openGraph: {
    title: "What is BKR International? How Our Global Network Benefits Your Business | MZBPO",
    description:
      "Learn about BKR International, one of the world's top 10 accounting associations, and how MZBPO's membership delivers global standards to your business.",
    url: "https://www.mzbpo.com/blog/what-is-bkr-international",
    type: "article",
    publishedTime: "2025-11-03T00:00:00.000Z",
    authors: ["MZBPO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Global business network representing BKR International",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is BKR International? How Our Global Network Benefits Your Business",
    description:
      "Learn about BKR International and how MZBPO's membership delivers global accounting standards to your business.",
  },
}

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "what-is-bkr", title: "What is BKR International?" },
  { id: "global-reach", title: "Global Reach and Scale" },
  { id: "three-pillars", title: "The Three Pillars: Business, Knowledge, Relationships" },
  { id: "client-benefits", title: "How This Benefits You" },
  { id: "mzbpo-connection", title: "MZBPO's Connection to BKR" },
  { id: "quality-standards", title: "Quality and Standards" },
  { id: "conclusion", title: "Conclusion" },
]

const globalStats = [
  { value: "160+", label: "Member Firms", icon: Building2 },
  { value: "500+", label: "Office Locations", icon: MapPin },
  { value: "80+", label: "Countries", icon: Globe2 },
  { value: "Top 10", label: "Global Ranking", icon: Award },
]

const clientBenefits = [
  {
    icon: Shield,
    title: "International Quality Standards",
    description:
      "Your accounting and audit work is performed according to globally recognized professional standards, not just local practices.",
  },
  {
    icon: Users,
    title: "Access to Global Expertise",
    description:
      "Complex questions can be escalated to specialists across the network, giving you access to expertise beyond any single firm.",
  },
  {
    icon: FileCheck,
    title: "Consistent Methodologies",
    description:
      "Whether you operate in one country or twenty, you get consistent processes and reporting frameworks.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Support",
    description:
      "As your business grows internationally, your accounting partner can connect you with trusted firms in new markets.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "BKR's training programs and knowledge sharing ensure our team stays current with evolving standards and best practices.",
  },
  {
    icon: Handshake,
    title: "Enhanced Credibility",
    description:
      "Working with a BKR member firm signals to investors, lenders, and partners that your financials meet international standards.",
  },
]

const relatedPosts = [
  {
    title: "In-House vs Outsourced Accounting: Complete Cost Comparison",
    href: "/blog/in-house-vs-outsourced-accounting",
    description: "Compare the true costs and benefits of each accounting model.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
  },
  {
    title: "How to Choose an Outsourced Accounting Partner",
    href: "/blog/how-to-choose-outsourced-accounting-partner",
    description: "Key criteria for evaluating and selecting the right provider.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop",
  },
  {
    title: "Internal Controls for Small Business: A Fraud Prevention Guide",
    href: "/blog/internal-controls-small-business",
    description: "Essential controls every growing business needs.",
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

            {/* Globe decoration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5">
              <Globe2 className="w-full h-full" />
            </div>

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
                <span className="text-white/80">BKR International</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span>About MZBPO</span>
              </div>

              {/* Title */}
              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                What is <span className="text-brand-teal">BKR International</span>?
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl text-white/80">
                  How Our Global Network Benefits Your Business
                </span>
              </h1>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-white/70 font-[var(--font-poppins)] leading-relaxed max-w-3xl mb-8">
                Discover how MZBPO's membership in one of the world's top accounting associations
                translates into better standards, deeper expertise, and enhanced credibility for
                your business.
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-[var(--font-poppins)]">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>MZBPO Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>November 3, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative -mt-8 mb-12 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=1920&h=820&fit=crop"
                  alt="Global business professionals collaborating across continents"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* BKR Logo Overlay */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg">
                  <Image
                    src="/logo/bkrr.png"
                    alt="BKR International Logo"
                    width={120}
                    height={60}
                    className="h-10 w-auto object-contain"
                  />
                </div>
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
                      Work with a BKR Member
                    </p>
                    <p className="text-white/70 text-sm font-[var(--font-poppins)] mb-4">
                      Get global standards and local expertise for your business.
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
                      When evaluating an accounting or finance outsourcing partner, credentials
                      matter. Anyone can claim expertise, but membership in a premier global
                      accounting association provides verifiable proof of standards, capabilities,
                      and professional standing.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      MZBPO operates as the outsourcing arm of Muniff Ziauddin and Co., an
                      independent member of <strong>BKR International</strong>—one of the world's
                      top 10 accounting associations. In this article, we'll explain what this
                      membership means and how it directly benefits the businesses we serve.
                    </p>
                  </section>

                  {/* Global Stats Banner */}
                  <div className="bg-gradient-to-r from-brand-navy to-brand-navy/90 rounded-2xl p-8 my-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {globalStats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                            <stat.icon className="w-6 h-6 text-brand-teal" />
                          </div>
                          <div className="text-3xl font-bold text-brand-teal font-[family-name:var(--font-syne)]">
                            {stat.value}
                          </div>
                          <div className="text-white/70 text-sm mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* What is BKR International */}
                  <section id="what-is-bkr" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      What is BKR International?
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      BKR International is an exclusive global association of independent accounting
                      and business advisory firms. Founded on the three pillars of{" "}
                      <strong>Business, Knowledge, and Relationships</strong>, BKR brings together
                      leading firms from around the world who share a commitment to quality,
                      professional standards, and client service.
                    </p>

                    <div className="bg-brand-teal/5 border-l-4 border-brand-teal rounded-r-xl p-6 my-8">
                      <p className="text-brand-navy font-semibold mb-2">Key Recognition</p>
                      <p className="text-gray-600">
                        BKR International is consistently ranked among the{" "}
                        <strong>top 10 global accounting associations</strong> by the International
                        Accounting Bulletin, placing it alongside names like Deloitte, PwC, KPMG,
                        and EY in terms of global reach and recognition—while maintaining the
                        personalized service of independent firms.
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      Unlike the Big Four accounting firms where all offices operate under one
                      corporate structure, BKR is an association of{" "}
                      <strong>independent member firms</strong>. Each firm maintains its own
                      identity and ownership while adhering to BKR's quality standards and
                      benefiting from the collective knowledge and resources of the network.
                    </p>
                  </section>

                  {/* Global Reach */}
                  <section id="global-reach" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Global Reach and Scale
                    </h2>

                    <div className="relative rounded-2xl overflow-hidden mb-6">
                      <Image
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop"
                        alt="Global network map showing international connections"
                        width={800}
                        height={400}
                        className="w-full object-cover"
                      />
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      BKR International's network spans the globe with remarkable breadth:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                          <Globe2 className="w-5 h-5 text-brand-teal" />
                          Americas Region
                        </h4>
                        <p className="text-sm text-gray-600">
                          Coverage across North America, Central America, South America, and the
                          Caribbean with firms in all major business centers.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                          <Globe2 className="w-5 h-5 text-brand-teal" />
                          EMEA Region
                        </h4>
                        <p className="text-sm text-gray-600">
                          Extensive presence throughout Europe, Middle East, and Africa including
                          major financial centers and emerging markets.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                          <Globe2 className="w-5 h-5 text-brand-teal" />
                          Asia Pacific Region
                        </h4>
                        <p className="text-sm text-gray-600">
                          Strong representation across Asia, Australia, and the Pacific islands
                          covering the world's fastest-growing economies.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-brand-teal" />
                          Combined Strength
                        </h4>
                        <p className="text-sm text-gray-600">
                          Together, BKR member firms employ thousands of professionals serving
                          clients ranging from startups to multinational corporations.
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      This global footprint means that wherever your business operates or plans to
                      expand, there's likely a BKR member firm with local expertise and established
                      presence ready to support you.
                    </p>
                  </section>

                  {/* Three Pillars */}
                  <section id="three-pillars" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      The Three Pillars: Business, Knowledge, Relationships
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      BKR International was founded on three core principles that guide how member
                      firms operate and collaborate:
                    </p>

                    <div className="space-y-6">
                      {/* Business */}
                      <div className="bg-gradient-to-r from-brand-teal/10 to-transparent rounded-2xl p-6 border border-brand-teal/20">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-xl bg-brand-teal/20 flex items-center justify-center flex-shrink-0">
                            <TrendingUp className="w-7 h-7 text-brand-teal" />
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-2">
                              Business
                            </h3>
                            <p className="text-gray-600">
                              BKR membership expands your firm's global reach, opens new markets,
                              and boosts growth and visibility. For clients, this means access to a
                              network that can support business expansion, cross-border
                              transactions, and international operations with trusted local
                              partners.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Knowledge */}
                      <div className="bg-gradient-to-r from-brand-navy/10 to-transparent rounded-2xl p-6 border border-brand-navy/20">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-xl bg-brand-navy/20 flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="w-7 h-7 text-brand-navy" />
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-2">
                              Knowledge
                            </h3>
                            <p className="text-gray-600">
                              Member firms share best practices, technical knowledge, and industry
                              insights through regular conferences, training programs, and
                              collaboration platforms. BKR's Leadership Institute develops the next
                              generation of firm leaders with international perspectives and
                              cutting-edge skills.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Relationships */}
                      <div className="bg-gradient-to-r from-amber-500/10 to-transparent rounded-2xl p-6 border border-amber-500/20">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                            <Handshake className="w-7 h-7 text-amber-600" />
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-brand-navy mb-2">
                              Relationships
                            </h3>
                            <p className="text-gray-600">
                              Trust-based relationships are the foundation of BKR. Annual worldwide
                              and regional meetings, featuring top industry speakers and
                              international experts, strengthen professional networks. Member firms
                              can even lend staff to other firms, giving employees opportunities to
                              work across borders.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Client Benefits */}
                  <section id="client-benefits" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      How This Benefits Your Business
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      You might be wondering: "This sounds impressive, but what does it actually
                      mean for me?" Here's how MZBPO's BKR membership directly benefits the
                      businesses we serve:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {clientBenefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-4">
                            <benefit.icon className="w-6 h-6 text-brand-teal" />
                          </div>
                          <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-brand-navy mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Real-world example */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <h4 className="font-[family-name:var(--font-syne)] font-bold text-brand-navy mb-4">
                        A Practical Example
                      </h4>
                      <p className="text-gray-600 mb-4">
                        Imagine you're a US-based e-commerce company that decides to expand into
                        European markets. Through our BKR network, we can:
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            Connect you with BKR member firms in Germany, UK, or France who
                            understand local tax regulations and VAT requirements
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            Ensure your financial reporting meets both US GAAP and local standards
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            Provide seamless coordination so you have one relationship with
                            consistent service globally
                          </span>
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* MZBPO Connection */}
                  <section id="mzbpo-connection" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      MZBPO's Connection to BKR International
                    </h2>

                    <div className="relative rounded-2xl overflow-hidden mb-6 bg-brand-navy p-8">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-40 h-40 flex-shrink-0 bg-white rounded-2xl p-4 flex items-center justify-center">
                          <Image
                            src="/logo/bkrr.png"
                            alt="BKR International Logo"
                            width={140}
                            height={70}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white mb-3">
                            Muniff Ziauddin and Co.
                          </h3>
                          <p className="text-white/80 leading-relaxed">
                            MZBPO is the dedicated outsourcing division of Muniff Ziauddin and Co.,
                            a chartered accountancy firm and proud independent member of BKR
                            International. This means when you work with MZBPO, you're backed by a
                            firm with the credentials, standards, and global connections of the BKR
                            network.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      Our parent firm, Muniff Ziauddin and Co., brings decades of experience in
                      audit, accounting, and advisory services. The MZBPO division was created to
                      extend these capabilities to businesses worldwide through outsourced
                      bookkeeping, accounting, internal audit, and payroll services.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                      This structure gives you the best of both worlds:{" "}
                      <strong>
                        the personalized attention and cost efficiency of a dedicated outsourcing
                        partner
                      </strong>
                      , combined with{" "}
                      <strong>
                        the professional standards and global resources of a top-tier accounting
                        association
                      </strong>
                      .
                    </p>
                  </section>

                  {/* Quality Standards */}
                  <section id="quality-standards" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      Quality Standards and Professional Excellence
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      BKR membership isn't automatic—firms must meet rigorous criteria and maintain
                      high standards to remain members. This commitment to quality flows through to
                      every engagement:
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <CheckCircle2 className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-brand-navy">Quality Control Reviews</p>
                          <p className="text-sm text-gray-600">
                            Member firms undergo periodic quality reviews to ensure adherence to
                            professional standards and best practices.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <CheckCircle2 className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-brand-navy">
                            International Standards Alignment
                          </p>
                          <p className="text-sm text-gray-600">
                            Work is performed according to internationally recognized frameworks
                            including IFRS, US GAAP, and ISA audit standards.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <CheckCircle2 className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-brand-navy">
                            Continuous Professional Development
                          </p>
                          <p className="text-sm text-gray-600">
                            Regular training programs and knowledge sharing ensure teams stay
                            current with evolving regulations and technologies.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <CheckCircle2 className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-brand-navy">Ethical Standards</p>
                          <p className="text-sm text-gray-600">
                            Member firms adhere to strict codes of professional ethics and
                            independence requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Conclusion */}
                  <section id="conclusion" className="scroll-mt-32 mb-12">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                      The Bottom Line
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      When you partner with MZBPO for your outsourced accounting needs, you're not
                      just working with an offshore provider—you're engaging a firm backed by one of
                      the world's premier accounting associations.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Our BKR International membership means:
                    </p>

                    <div className="bg-brand-navy rounded-2xl p-8 text-white">
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Verified credibility</strong> through membership in a top-10
                            global accounting association
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>International standards</strong> applied to your bookkeeping,
                            accounting, and audit work
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Access to global expertise</strong> through a network spanning
                            80+ countries
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Scalable support</strong> that can grow with your business,
                            domestically and internationally
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Enhanced trust</strong> with investors, lenders, and business
                            partners who recognize the BKR name
                          </span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-gray-600 leading-relaxed mt-6">
                      If you're evaluating outsourced accounting providers, ask about their
                      professional affiliations. Not all providers are created equal, and membership
                      in an association like BKR International is a meaningful differentiator that
                      directly impacts the quality of service you'll receive.
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
          headline="Ready to Work with a BKR Member Firm?"
          bodyText="Experience the difference that global standards and professional excellence make. Schedule a free consultation to discuss how MZBPO can support your business."
          ctaText="Schedule a Free Consultation"
          trackingContentName="Blog CTA - BKR International"
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
            headline:
              "What is BKR International? How Our Global Network Benefits Your Business",
            description:
              "Learn about BKR International, one of the world's top 10 accounting associations, and how MZBPO's membership delivers global standards to your business.",
            image:
              "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=1200&h=630&fit=crop",
            datePublished: "2025-11-03T00:00:00.000Z",
            dateModified: "2025-11-03T00:00:00.000Z",
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
              "@id": "https://www.mzbpo.com/blog/what-is-bkr-international",
            },
          }),
        }}
      />
    </div>
  )
}
