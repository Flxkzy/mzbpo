"use client";

import BoxReveal from "@/components/magicui/box-reveal";
import Link from "next/link";

const BoxRevealDemo = () => {
  return (
    <div className="h-full w-full items-center justify-center ml-10 overflow-hidden pt-8 space-y-2 text-brand-white">
      <BoxReveal boxColor={"#68C3AA"} duration={0.5}>
        <p className="text-3xl font-display font-bold">1. Connect</p>
      </BoxReveal>

      <BoxReveal boxColor={"#68C3AA"} duration={0.5}>
        <h2 className="my-2 text-lg text-white/80">
          Book a free consultation with our team.
          <Link href={"/meeting"} className="text-brand-teal hover:underline">
            {" "}meeting{" "}
          </Link>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#68C3AA"} duration={0.5}>
        <p className="text-3xl font-display font-bold">2. Collaborate</p>
      </BoxReveal>

      <BoxReveal boxColor={"#68C3AA"} duration={0.5}>
        <h2 className="my-2 text-lg text-white/80">
          We define the scope, processes, and systems that suit your business.
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#68C3AA"} duration={0.5}>
        <p className="text-3xl font-display font-bold">3. Create</p>
      </BoxReveal>

      <BoxReveal boxColor={"#68C3AA"} duration={0.5}>
        <h2 className="my-2 text-lg text-white/80">
          Our experts handle the day-to-day — you get accuracy, insights, and results.
        </h2>
      </BoxReveal>
    </div>
  );
}

export default BoxRevealDemo;
