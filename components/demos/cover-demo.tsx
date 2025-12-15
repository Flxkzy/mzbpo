import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div className="text-center max-w-7xl mx-auto">
      <p className="text-4xl md:text-5xl font-extrabold text-brand-teal mb-6">
        Outsource Smarter. Operate Stronger.
      </p>
      <h1
        className="text-4xl md:text-6xl font-display font-semibold bg-clip-text text-transparent
                   bg-gradient-to-b from-white via-white to-white/80 relative z-20"
      >
        <Cover>
          Bookkeeping, ERP, Payroll & Audit Support Trusted by Leading Businesses
        </Cover>
      </h1>
    </div>
  );
}
