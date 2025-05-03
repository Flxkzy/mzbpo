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
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto">
        <div className="md:w-2/5">
          <h1 className="text-4xl font-semibold pt-10">Book a Meeting</h1>
          <p className="text-lg text-gray-500 py-4">
            At MZBPO, we help businesses worldwide reduce costs and streamline operations through professional bookkeeping, payroll, ERP, and audit services.
          </p>

          {[
            {
              title: "Outsourced Accounting & Bookkeeping",
              description:
                "Discuss how we can take over your books and monthly financials while cutting your cost by up to 50%.",
            },
            {
              title: "ERP Implementation & Automation",
              description:
                "Explore how we can digitize your finance and inventory workflows using SAP B1, Zoho, QuickBooks & more.",
            },
            {
              title: "Audit Support & Compliance",
              description:
                "Need support with internal audits, documentation, or statutory reporting? Let’s talk.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={checkItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 1.8 }}
              className="flex gap-x-4 py-4"
            >
              <PiCheckCircle className="text-[#3d80d7] text-2xl flex-shrink-0" />
              <ul>
                <h3 className="text-lg font-bold text-gray-700">
                  {item.title}
                </h3>
                <div className="text-gray-400">{item.description}</div>
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="md:w-1/2">
          <Calendly />
        </div>
      </div>
    </div>
  );
};

export default Meeting;
