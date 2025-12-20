"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Linkedin, Instagram, Facebook } from "lucide-react"

const footerNav = [
  { label: "Why Us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
]

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hammafarid/", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com/MZBPO", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/mzcopakistan", icon: Facebook },
]

export default function Footer() {
  return (
    <footer className="relative bg-brand-navy border-t border-white/10">
      {/* subtle accent like navbar mobile */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 h-64 w-64 bg-brand-teal/[0.06] blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 h-56 w-56 bg-brand-teal/[0.04] blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-0 py-12">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Brand & Logos */}
          <div className="max-w-md">
            {/* Logo Group */}
            <div className="flex items-center gap-5">
              {/* Main Logo */}
              <Link href="/" className="block">
                <Image
                  src="/logo/mzbp.png"
                  width={180}
                  height={60}
                  alt="MZBPO Logo"
                  className="w-32 sm:w-40 h-auto object-contain"
                />
              </Link>

              {/* Vertical Divider */}
              <div className="h-8 w-[1px] bg-white/20" />

              {/* Affiliate Logo (BKR) */}
              <div className="block">
                <Image
                  src="/logo/bkr.png"
                  alt="BKR International"
                  width={140}
                  height={55}
                  className="w-20 sm:w-24 h-auto object-contain"
                />
              </div>
            </div>

            <p className="mt-6 text-sm text-brand-white/60 font-[var(--font-poppins)] leading-relaxed">
              Outsourced bookkeeping, payroll, ERP and audit support built for growing teams.
              Clear financials, tight controls, and dependable execution.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group inline-flex items-center gap-2
                      rounded-full border border-white/10
                      bg-white/5 px-4 py-2
                      text-xs font-semibold tracking-wide
                      text-brand-white/70 hover:text-brand-white
                      hover:border-brand-teal/30 hover:bg-brand-teal/[0.08]
                      transition-all duration-300
                    "
                    aria-label={s.label}
                  >
                    <Icon size={14} className="text-brand-teal/80 group-hover:text-brand-teal transition-colors" />
                    {s.label}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-white/40 font-[var(--font-poppins)]">
                Explore
              </p>
              <ul className="mt-4 space-y-3">
                {footerNav.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="
                        text-sm text-brand-white/70 hover:text-brand-white
                        transition-colors duration-300
                      "
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-white/40 font-[var(--font-poppins)]">
                Contact
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:mzcopakistan@gmail.com"
                    className="text-sm text-brand-white/70 hover:text-brand-white transition-colors duration-300"
                  >
                    mzcopakistan@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="/meeting"
                    className="
                      inline-flex items-center gap-2 text-sm font-semibold
                      text-brand-teal hover:text-brand-teal/80 transition-colors
                    "
                  >
                    Book a Call <ArrowUpRight size={16} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-1 col-span-2">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-white/40 font-[var(--font-poppins)]">
                Company
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="https://bkrpakistan.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-white/70 hover:text-brand-white transition-colors duration-300"
                  >
                    Visit BKR Pakistan
                  </a>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-brand-white/70 hover:text-brand-white transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-brand-white/40 font-[var(--font-poppins)]">
            © 2025 MZBPO. All Rights Reserved.
          </p>

          <p className="text-xs text-brand-white/30 font-[var(--font-poppins)]">
            Built for clarity, control, and growth.
          </p>
        </div>
      </div>
    </footer>
  )
}