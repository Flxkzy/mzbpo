// app/meeting/MeetingClient.tsx
"use client"

import Calendly from "./calendly"
import { PiCheckCircle } from "react-icons/pi"
import { motion } from "framer-motion"
import Footer from "@/components/footer"
import Navbar from "@/components/Navbar"

const checkItemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
}

export default function MeetingClient() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-navy text-brand-white font-[var(--font-poppins)]">
      <Navbar />

      <main className="flex-1 pt-20 md:pt-28 lg:pt-32">
        <div className="mx-auto max-w-6xl px-6 md:px-6 pt-8 md:pt-12">
          <div className="flex flex-col md:flex-row md:items-start gap-10 lg:gap-12">
            {/* LEFT */}
            <div className="w-full md:w-[44%]">
              <h1 className="mt-2 font-[family-name:var(--font-syne)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Let’s Talk About{" "}
                <span className="text-brand-teal italic">Financial Control</span>
              </h1>

              <p className="text-base md:text-lg text-white/80 pt-4 leading-relaxed">
                At <span className="font-semibold text-white">MZBPO</span>, we help growth focused businesses reduce
                finance overhead by up to{" "}
                <span className="text-brand-teal font-medium">50%</span> with structured bookkeeping, payroll, ERP
                implementation, and audit support.
              </p>

              {[
                {
                  title: "Bookkeeping & Accounting Outsourcing",
                  description: "Clean books, clear numbers, and audit ready reporting delivered monthly.",
                },
                {
                  title: "Payroll Processing",
                  description: "Managed payroll with deductions, payslips, and compliance delivered every cycle.",
                },
                {
                  title: "ERP Implementation & Workflow Automation",
                  description: "Move off spreadsheets into structured systems. Setup, migration, and training included.",
                },
                {
                  title: "Audit Support & Regulatory Compliance",
                  description: "IFRS reporting, audit prep, and statutory compliance handled cleanly and calmly.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={checkItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.12, duration: 0.35, ease: "easeOut" }}
                  className="flex gap-x-3 md:gap-x-4 py-3"
                >
                  <PiCheckCircle className="text-brand-teal text-xl md:text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-[family-name:var(--font-syne)] text-base md:text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT */}
            <div className="w-full md:flex-1 pb-10 md:pb-0">
              <div className="bg-brand-white text-brand-navy rounded-2xl shadow-soft p-4 md:p-6">
                <Calendly />
              </div>

              <p className="text-xs text-white/55 mt-4 leading-relaxed">
                By booking, you agree to be contacted by MZBPO regarding your finance and bookkeeping needs.
              </p>
            </div>
          </div>
        </div>
      </main>

      <div className="mt-14 md:mt-20 lg:mt-24">
        <Footer />
      </div>
    </div>
  )
}
