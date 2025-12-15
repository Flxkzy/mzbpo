"use client";

import Link from "next/link";
import Image from "next/image";

// NOTE: use default import (your CaseStudyCard exports default)
import CaseStudyCard from "@/components/case-study-card";

import { RealEstateIllustration } from "@/components/illustrations/real-estate-illustration";
import { AuditIllustration } from "@/components/illustrations/audit-illustration";
import { ErpIllustration } from "@/components/illustrations/erp-illustration";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-brand-navy text-brand-white">
      {/* Navbar */}
      <div
        className="
          sticky top-3 z-50 xl:w-4/5 2xl:w-[68%] mx-auto
          bg-brand-navy/90 backdrop-blur rounded-xl
          border border-white/10 text-white
          px-4 md:px-6 py-3 flex items-center justify-between
        "
      >
        <Link href="/">
          <Image
            src="/logo/mzbpo.png"
            alt="MZBPO Logo"
            width={1500}
            height={1500}
            className="w-28"
          />
        </Link>

        <div className="flex items-center gap-x-4">
          <Link
            href="/meeting"
            className="
              inline-block py-2 px-4 rounded-2xl font-semibold
              bg-brand-teal text-brand-navy shadow-soft
              hover:opacity-90 transition
            "
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="relative z-10 mx-auto px-4 text-center xl:w-4/5 2xl:w-[68%]">
            <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight">
              Client Success Stories
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80">
              See how MZBPO helped clients cut costs, boost accuracy, and scale
              operations with ease.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-brand-white text-brand-navy">
          <div className="xl:w-4/5 2xl:w-[68%] mx-auto px-4">
            <div className="space-y-16">
              <CaseStudyCard
                title="Real Estate Firm Cuts Accounting Costs by 57%"
                tags={["Real Estate", "USA", "Bookkeeping Outsourcing"]}
                description=""
                results={[
                  "Reduced monthly accounting costs from $35,000 to $15,000",
                  "Decreased month-end closing time from 15 days to 5 days",
                  "Improved tenant satisfaction with 99.8% reconciliation accuracy",
                  "Enabled managers to add 8 new properties",
                ]}
                // If your CaseStudyCard supports extra props, keep them:
                // clientInfo, challenge, solution, highlight, highlightSubtext, layout, illustration
                // Keeping your original content below:
                // @ts-ignore - preserve your extended props if defined in your local component
                clientInfo="A mid-sized commercial real estate management firm with 30+ properties across the Midwest."
                // @ts-ignore
                challenge="The client was spending $35,000 monthly on an in-house accounting team that struggled with property-specific reporting, tenant reconciliations, and month-end closing delays."
                // @ts-ignore
                solution="MZ BPO implemented a dedicated 5-person team with real estate accounting expertise, custom reporting dashboards, and 24-hour turnaround on all reconciliations."
                // @ts-ignore
                highlight="$35,000 → $15,000/month"
                // @ts-ignore
                highlightSubtext="57% Cost Reduction"
                // @ts-ignore
                layout="left-text"
                // @ts-ignore
                illustration={<RealEstateIllustration />}
              />

              <CaseStudyCard
                title="Monthly Audits Prevent Costly Errors"
                tags={["Consulting", "USA", "Internal Audit Support"]}
                description=""
                results={[
                  "Zero audit adjustments in the most recent fiscal year",
                  "Identified and prevented $9,000 in potential fraud",
                  "Reduced audit preparation time by 65%",
                  "Streamlined reporting with automated controls",
                ]}
                // preserve extended props
                // @ts-ignore
                clientInfo="A growing management consulting firm with 120+ employees and multiple international clients."
                // @ts-ignore
                challenge="The firm experienced several costly financial reporting errors that damaged client relationships and created compliance risks with regulatory bodies."
                // @ts-ignore
                solution="MZ BPO established monthly pre-audit reviews, implemented enhanced internal controls, and provided dedicated audit support during year-end reporting."
                // @ts-ignore
                highlight="0 Adjustments • $9,000 Fraud Caught"
                // @ts-ignore
                layout="text-only"
                // @ts-ignore
                illustration={<AuditIllustration />}
              />

              <CaseStudyCard
                title="3-Month SAP B1 ERP Migration – 100% Success"
                tags={["Distribution", "UAE", "ERP Implementation"]}
                description=""
                results={[
                  "Completed full migration in just 3 months, ahead of schedule",
                  "Reduced manual data entry by 80%",
                  "Improved inventory accuracy from 82% to 99.5%",
                  "Enabled real-time financial reporting across departments",
                ]}
                // preserve extended props
                // @ts-ignore
                clientInfo="A distribution company with 200+ employees, 3 warehouses, and over 5,000 SKUs."
                // @ts-ignore
                challenge="The client was using an outdated ERP system that couldn't handle their growth, causing inventory discrepancies, delayed reporting, and manual workarounds."
                // @ts-ignore
                solution="MZ BPO managed a complete SAP Business One implementation with custom integrations for warehouse management, CRM, and financial reporting."
                // @ts-ignore
                highlight="Live in 3 Months • 80% Less Manual Entry"
                // @ts-ignore
                layout="right-text"
                // @ts-ignore
                illustration={<ErpIllustration />}
              />
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-12 bg-brand-navy text-brand-white">
          <div className="xl:w-4/5 2xl:w-[68%] mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold">
              Want results like these?
            </h2>
            <p className="mt-3 text-white/80">
              Get a tailored plan to improve accuracy, cut costs, and scale faster.
            </p>
            <div className="mt-6">
              <Link
                href="/meeting"
                className="
                  inline-block py-2.5 px-6 rounded-2xl font-semibold
                  bg-brand-teal text-brand-navy shadow-soft
                  hover:opacity-90 transition
                "
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
