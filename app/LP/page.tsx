"use client"

import Navbar from "@/components/Navbar"
import Hero from "@/components/hero"
import ClientShowcase from "@/components/ClientsShowcase"
import { GrowthScenarios } from "@/components/growth-scenarios"
import { ServicesSection } from "@/components/ServicesSection"
import { CaseStudies } from "@/components/case-study-section"
import { Testimonials } from "@/components/testimonials"
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo"
import BoxRevealDemo from "@/components/demos/box-reveal-demo"
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo"
import Footer from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import SectionDivider from "@/components/SectionDivider"
import VslSection from "@/components/VSL"
import HeroSection from "@/components/LP-Hero"

import Image from "next/image"
import Link from "next/link"
import { Element } from "react-scroll"
import { FaLinkedin } from "react-icons/fa"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-brand-navy text-white overflow-x-hidden">
      {/* Background Grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 pt-20 sm:pt-24 lg:pt-28">
        <Navbar />

        {/* HERO */}
        <section className="mt-6">
          <HeroSection />
        </section>

        {/* SOCIAL PROOF */}
        <ClientShowcase />

        {/* WHY US (GrowthScenarios) */}
        <section id="why-us" className="py-20">
          <GrowthScenarios />
        </section>

{/* PROCESS */}
<Element name="process">
  <section id="process" className="py-20 max-w-[1600px] mx-auto px-6 md:px-0">
    {/* Heading */}
    <h2 className="mt-6 font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-brand-white text-center">
      Our <span className="text-brand-teal">Proven</span> Process
    </h2>

    {/* Subheading / body */}
    <p className="text-center py-4 md:w-1/2 mx-auto text-base md:text-lg text-white/80 font-[var(--font-poppins)]">
      Every service is built to reduce costs, improve compliance, and give you clarity.
    </p>

    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
      <div className="w-full md:w-1/2">
        <AnimatedBeamMultipleOutputDemo />
      </div>
      <div className="w-full md:w-1/2">
        <BoxRevealDemo />
      </div>
    </div>
  </section>
</Element>

<SectionDivider />

        {/* CASE STUDIES */}
        <section id="case-studies" className="py-20 max-w-[1600px] mx-auto px-6 md:px-0">
          <CaseStudies />
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20">
          <Testimonials />
        </section>

        {/* ABOUT / CREDIBILITY */}
        <section id="about" className="py-20 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-navy shadow-2xl">
              {/* Decorative Gradient Bar */}
              <div className="absolute top-0 left-0 w-2 h-full bg-teal"></div>

              <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
                {/* Logo Area */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-start border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-10">
                  <Image
                    src="/logo/bkrr.png"
                    width={400}
                    height={200}
                    className="w-44 md:w-52 h-auto object-contain"
                    alt="BKR International"
                  />
                </div>

{/* Text Area */}
<div className="w-full md:w-2/3 font-[var(--font-poppins)]">
  {/* Heading: Syne (use required syntax, slightly reduced size) */}
  <p className="mt-6 font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl font-bold text-brand-white mb-4">
    Backed by a legacy of financial excellence.
  </p>

  {/* Body: Poppins */}
  <p className="text-base md:text-lg text-gray-300 font-[var(--font-poppins)] leading-relaxed">
    We are the outsourcing arm of Muniff Ziauddin & Co. As an independent member of BKR International, we bring world class standards to you
  </p>
</div>

              </div>
            </div>
          </div>
        </section>

        {/* GUARANTEES / TRUST */}
        <Element name="guarantees">
          <section id="guarantees">
            <ShootingStarsAndStarsBackgroundDemo />
          </section>
        </Element>

        {/* FINAL CTA */}
        <CTASection />

        {/* FOOTER */}

         <Footer />

      </div>
    </main>
  )
}