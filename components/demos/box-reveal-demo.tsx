"use client"

import BoxReveal from "@/components/magicui/box-reveal"
import Link from "next/link"

const steps = [
  {
    title: "1. Connect",
    body: (
      <>
        Book a free consultation with our team.
        <Link href="/meeting" className="text-brand-teal hover:underline">
          {" "}meeting
        </Link>
      </>
    ),
  },
  {
    title: "2. Collaborate",
    body: "We define the scope, processes, and systems that suit your business.",
  },
  {
    title: "3. Create",
    body: "Our experts handle the day-to-day you get accuracy, insights, and results.",
  },
]

const BoxRevealDemo = () => {
  return (
    <div className="w-full max-w-xl mx-auto px-4 sm:px-6 md:px-0 pt-6 sm:pt-8 space-y-8 text-brand-white overflow-hidden">
      {steps.map((s) => (
        <div key={s.title} className="space-y-2 sm:space-y-3">
          <BoxReveal boxColor={"#68C3AA"} duration={0.5}>
            <p className="font-[var(--font-syne)] font-semibold text-2xl sm:text-3xl leading-tight">
              {s.title}
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#68C3AA"} duration={0.5}>
            <p className="font-[var(--font-poppins)] text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
              {s.body}
            </p>
          </BoxReveal>
        </div>
      ))}
    </div>
  )
}

export default BoxRevealDemo
