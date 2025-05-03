import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div className="text-center max-w-7xl mx-auto">
      <p className="text-4xl md:text-5xl font-extrabold text-[#FA7268] mb-6">
        Outsource Smarter. Operate Stronger.
      </p>
      <h1
        className="text-4xl md:text-6xl font-semibold bg-clip-text text-transparent 
        bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 
        dark:from-neutral-800 dark:via-white dark:to-white z-20 relative"
      >
        <Cover>
          Bookkeeping, ERP, Payroll & Audit Support Trusted by Leading Businesses
        </Cover>
      </h1>
    </div>
  );
}
