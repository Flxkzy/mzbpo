import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "MZBPO privacy policy. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-navy text-brand-white">
      <Navbar />
      <main className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto font-[var(--font-poppins)]">
          <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm mb-12">Last updated: February 2026</p>

          <div className="space-y-10 text-white/80 leading-relaxed">
            <section>
              <h2 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white mb-4">
                1. Information We Collect
              </h2>
              <p>
                When you visit our website or book a consultation, we may collect the following information:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Name and contact details (email address, phone number) provided through our booking form</li>
                <li>Company name and business information shared during consultations</li>
                <li>Usage data such as pages visited, time spent on site, and referring URLs</li>
                <li>Device and browser information collected through cookies and analytics tools</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white mb-4">
                2. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to your inquiries and schedule consultations</li>
                <li>Provide and improve our bookkeeping, accounting, audit, and payroll services</li>
                <li>Analyze website usage to improve user experience</li>
                <li>Send relevant service updates and communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white mb-4">
                3. Third-Party Services
              </h2>
              <p>
                We use the following third-party services that may collect data:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong className="text-white">Calendly</strong> for scheduling meetings</li>
                <li><strong className="text-white">Microsoft Clarity</strong> for understanding user behavior on our site</li>
                <li><strong className="text-white">Meta (Facebook) Pixel</strong> for advertising measurement</li>
                <li><strong className="text-white">Vercel Analytics</strong> for website performance monitoring</li>
              </ul>
              <p className="mt-3">
                Each of these services has their own privacy policy governing how they handle your data.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white mb-4">
                4. Cookies
              </h2>
              <p>
                Our website uses cookies to enhance your experience, analyze site traffic, and support our marketing efforts. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white mb-4">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. As the outsourcing arm of Muniff Ziauddin and Co., a BKR International member firm, we adhere to strict data confidentiality standards.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white mb-4">
                6. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Request access to the personal data we hold about you</li>
                <li>Request correction or deletion of your personal data</li>
                <li>Withdraw consent for marketing communications at any time</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white mb-4">
                7. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your data, please contact us at{" "}
                <a href="mailto:operations@mzbpo.com" className="text-brand-teal hover:underline">
                  operations@mzbpo.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
