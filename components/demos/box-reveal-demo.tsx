"use client";

import BoxReveal from "@/components/magicui/box-reveal";
import Link from "next/link";

const BoxRevealDemo = () => {
  return (
    <div className="h-full w-full items-center justify-center ml-10 overflow-hidden pt-8 space-y-2">
      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        
        <p className="text-3xl font-semibold">1. Connect</p>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">
        Book a free consultation with our team.
          <Link href={"/meeting"} className="text-[#3b82f6]">
            {" "}
            meeting{" "}
          </Link>
        </h2>
      </BoxReveal>
      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <p className="text-3xl font-semibold">2. Collaborate</p>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">
        We define the scope, processes, and systems that suit your business.
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <p className="text-3xl font-semibold">3. Create</p>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">Our experts handle the day-to-day — you get accuracy, insights, and results.</h2>
      </BoxReveal>
    </div>
  );
}

export default BoxRevealDemo;