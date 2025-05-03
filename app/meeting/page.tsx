"use client";

import Calendly from "./calendly";
import ShowcaseNavbar from "@/components/showcase-navbar";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Meeting = () => {
  return (
    <div
      className="
      flex flex-col w-full  
      overflow-clip inset-0 -z-10 
      bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
      bg-[size:14px_24px]"
    >
      <ShowcaseNavbar />

      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] md:mt-14 mx-auto flex flex-col md:flex-row gap-y-10 md:gap-y-0 md:justify-between">
        
        {/* Text Section */}
        <div className="md:w-2/5 w-full">
          <h1 className="text-3xl md:text-4xl font-semibold pt-10 md:pt-0 leading-tight">
            Let’s Talk About Scaling Your Finance Function
          </h1>
          <p className="text-base md:text-lg text-gray-500 py-4 leading-relaxed">
            At <strong>MZBPO</strong>, we help growth-focused businesses slash finance overheads by up to 50% with expert bookkeeping, ERP implementation, payroll processing, and audit support — all powered by a top-rated audit firm.
          </p>

          {[
            {
              title: "Bookkeeping & Accounting Outsourcing",
              description:
                "Cut costs, eliminate in-house headaches, and get audit-ready financials delivered monthly.",
            },
            {
              title: "ERP Implementation & Workflow Automation",
              description:
                "Move off Excel and into real-time reporting. We handle setup, data migration, training, and support.",
            },
            {
              title: "Audit Support & Regulatory Compliance",
              description:
                "Get help with IFRS reporting, audit prep, and statutory filings — whether internal or external.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={checkItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
              className="flex gap-x-3 md:gap-x-4 py-3"
            >
              <PiCheckCircle className="text-[#3d80d7] text-xl md:text-2xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-700">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Calendly */}
        <div className="md:w-1/2 w-full">
          <Calendly />
        </div>
      </div>
    </div>
  );
};

export default Meeting;
