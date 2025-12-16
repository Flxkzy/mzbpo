"use client"

import Calendly from "./calendly"
import { PiCheckCircle } from "react-icons/pi"
import { motion } from "framer-motion"
import Footer from "@/components/footer"
import Navbar from "@/components/Navbar"

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
}

const Meeting = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-navy text-brand-white font-[var(--font-poppins)]">
      {/* NAV */}
      <Navbar />

      {/* MAIN */}
      <main className="flex-1 pt-20 md:pt-32 lg:pt-36">
        <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] mx-auto pt-10 md:pt-16 flex flex-col md:flex-row gap-y-12 md:gap-y-0 md:justify-between">
          {/* Text Section */}
          <div className="md:w-2/5 w-full">
            {/* Heading – Syne */}
            <h1 className="mt-6 font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Let’s Talk About Scaling Your Finance Function
            </h1>

            {/* Body – Poppins */}
            <p className="text-base md:text-lg text-white/80 py-4 leading-relaxed">
              At <strong>MZBPO</strong>, we help growth-focused businesses reduce finance overhead by up to 50% with
              structured bookkeeping, ERP implementation, payroll processing, and audit support backed by a top-rated
              audit firm.
            </p>

            {[
              {
                title: "Bookkeeping & Accounting Outsourcing",
                description:
                  "Cut costs, eliminate in-house headaches, and receive audit-ready financials every month.",
              },
              {
                title: "Payroll Processing",
                description:
                  "Fully managed payroll with deductions, payslips, and compliance delivered on time, every cycle.",
              },
              {
                title: "ERP Implementation & Workflow Automation",
                description:
                  "Move off spreadsheets into structured systems. We handle setup, migration, and training.",
              },
              {
                title: "Audit Support & Regulatory Compliance",
                description:
                  "IFRS reporting, audit prep, and statutory compliance handled cleanly and calmly.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={checkItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.15 }}
                className="flex gap-x-3 md:gap-x-4 py-3"
              >
                <PiCheckCircle className="text-brand-teal text-xl md:text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-[family-name:var(--font-syne)] text-base md:text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Calendly */}
          <div className="md:w-1/2 w-full pb-16 md:pb-0">
            <div className="bg-brand-white text-brand-navy rounded-2xl shadow-soft p-4 md:p-6">
              <Calendly />
            </div>
          </div>
        </div>
      </main>

<div className="mt-16 md:mt-24 lg:mt-32">
  <Footer />
</div>
    </div>
  )
}

export default Meeting
