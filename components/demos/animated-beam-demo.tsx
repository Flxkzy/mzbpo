"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex xl:h-[500px] w-full items-center justify-center overflow-hidden p-10",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.linkedin />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.excel />
          </Circle>
          <Circle ref={div3Ref}>
            <Image src={"/logo/quick.png"} width={100} height={100} className="w-4 h-4" alt="quickbooks" />
          </Circle>
          <Circle ref={div4Ref}>
            <Image src={"/logo/oracle.png"} width={120} height={120} className="w-12 h-3" alt="oracle" />
          </Circle>
          <Circle ref={div5Ref}>
            <Image src={"/logo/odoo_logo.png"} width={120} height={120} className="w-12 h-3" alt="odoo" />
          </Circle>
        </div>

        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16 bg-navy">
            <Image src={"/logo/mzbp.png"} height={80} width={80} alt="MZBPO" />
          </Circle>
        </div>

        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="bg-white">
            <Icons.user />
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} />
    </div>
  );
}

const Icons = {
  // (icons unchanged)
  linkedin: () => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill="#ffffff" />
      <path
        d="M20 35h15v45H20V35zm7.5-15a8.75 8.75 0 1 1 0 17.5 8.75 8.75 0 0 1 0-17.5zM42.5 35h14.3v6.2h.2c2-3.8 6.8-7.8 14-7.8 15 0 17.8 9.8 17.8 22.6V80H73V58.3c0-5.2-.1-11.9-7.3-11.9-7.3 0-8.4 5.7-8.4 11.5V80H42.5V35z"
        fill="#0A2E55"
      />
    </svg>
  ),
  excel: () => (
    <svg width="47px" height="65px" viewBox="0 0 47 65" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path id="excel-path" d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="excel-mask" fill="white">
          <use xlinkHref="#excel-path" />
        </mask>
        <path d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L36.71875,10.3409091 L29.375,0 Z" fill="#21A366" mask="url(#excel-mask)" />
        <path d="M11.5,24 L16.5,33 L11.5,42 H15.5 L18.5,36 L21.5,42 H25.5 L20.5,33 L25.5,24 H21.5 L18.5,29.5 L15.5,24 H11.5 Z" fill="#ffffff" transform="translate(4, 10)" />
      </g>
    </svg>
  ),
  user: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};
