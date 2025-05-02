"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CaseStudyCard } from "@/components/case-study-card";
import { RealEstateIllustration } from "@/components/illustrations/real-estate-illustration";
import { AuditIllustration } from "@/components/illustrations/audit-illustration";
import { ErpIllustration } from "@/components/illustrations/erp-illustration";
import Image from "next/image";

export default function CaseStudiesPage() {
  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      {/* MZBPO Navbar */}
      <div className="rounded-md top-3 sticky z-50 xl:w-4/5 2xl:w-[68%] mx-auto bg-[#f2f2f2] text-white flex items-center justify-between py-3 px-4 md:px-6">
        <Link href="/">
          <Image
            src="/logo/mzbpo.png"
            alt="MZBPO Logo"
            width={1500}
            height={1500}
            className="w-28"
          />
        </Link>
        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/#services" className="hover:text-blue-500">Services</Link>
            <Link href="/#process" className="hover:text-blue-500">Process</Link>
            <Link href="/case-studies" className="hover:text-blue-500">Case Studies</Link>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <a href="tel:519400200" className="hidden lg:flex">
            <button className="px-4 py-2 rounded-md flex items-center gap-x-3 text-black">(519)-400-200</button>
          </a>
          <Link
            href="/meeting"
            className="py-3 px-6 text-lg rounded-[6px] border-2 border-black text-white bg-[#121212] hover:bg-[#abcbff] transition duration-200"
          >
            Book a call
          </Link>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
          <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
          <div className="relative z-10 mx-auto px-4 text-center xl:w-4/5 2xl:w-[68%]">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight ">
              Client Success Stories
            </h1>
            <p className="mt-6 text-lg text-gray-600 md:text-xl">
              See how MZBPO helped clients cut costs, boost accuracy, and scale operations with ease.
            </p>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 bg-white">
          <div className="xl:w-4/5 2xl:w-[68%] mx-auto px-4">
            <div className="space-y-16">
              <CaseStudyCard
                title="Real Estate Firm Cuts Accounting Costs by 57%"
                tags={["Real Estate", "USA", "Bookkeeping Outsourcing"]}
                clientInfo="A mid-sized commercial real estate management firm with 30+ properties across the Midwest."
                challenge="The client was spending $35,000 monthly on an in-house accounting team that struggled with property-specific reporting, tenant reconciliations, and month-end closing delays."
                solution="MZ BPO implemented a dedicated 5-person team with real estate accounting expertise, custom reporting dashboards, and 24-hour turnaround on all reconciliations."
                results={[
                  "Reduced monthly accounting costs from $35,000 to $15,000",
                  "Decreased month-end closing time from 15 days to just 5 days",
                  "Improved tenant satisfaction with 99.8% accuracy on reconciliations",
                  "Enabled property managers to focus on growth, adding 8 new properties",
                ]}
                highlight="$35,000 → $15,000/month"
                highlightSubtext="57% Cost Reduction"
                layout="left-text"
                illustration={<RealEstateIllustration />}
              />

              <CaseStudyCard
                title="Monthly Audits Prevent Costly Errors"
                tags={["Consulting", "USA", "Internal Audit Support"]}
                clientInfo="A growing management consulting firm with 120+ employees and multiple international clients."
                challenge="The firm experienced several costly financial reporting errors that damaged client relationships and created compliance risks with regulatory bodies."
                solution="MZ BPO established monthly pre-audit reviews, implemented enhanced internal controls, and provided dedicated audit support during year-end reporting."
                results={[
                  "Zero audit adjustments in the most recent fiscal year",
                  "Identified and prevented $9,000 in potential fraud",
                  "Reduced audit preparation time by 65%",
                  "Streamlined financial reporting process with automated controls",
                ]}
                highlight="0 Adjustments • $9,000 Fraud Caught"
                layout="text-only"
                illustration={<AuditIllustration />}
              />

              <CaseStudyCard
                title="3-Month SAP B1 ERP Migration – 100% Success"
                tags={["Distribution", "UAE", "ERP Implementation"]}
                clientInfo="A distribution company with 200+ employees, 3 warehouses, and over 5,000 SKUs."
                challenge="The client was using an outdated ERP system that couldn't handle their growth, causing inventory discrepancies, delayed reporting, and manual workarounds."
                solution="MZ BPO managed a complete SAP Business One implementation with custom integrations for warehouse management, CRM, and financial reporting."
                results={[
                  "Completed full migration in just 3 months, ahead of schedule",
                  "Reduced manual data entry by 80%",
                  "Improved inventory accuracy from 82% to 99.5%",
                  "Enabled real-time financial reporting across all departments",
                ]}
                highlight="Live in 3 Months • 80% Less Manual Entry"
                layout="right-text"
                illustration={<ErpIllustration />}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
