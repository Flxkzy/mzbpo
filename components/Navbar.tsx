// components/Navbar.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Why Us", href: "#why-us" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "/blog", isExternal: true },
]

const serviceItems = [
  { label: "Back Office Support", href: "/services/back-office-support" },
  { label: "Bookkeeping and Accounting", href: "/services/bookkeeping-accounting" },
  { label: "ERP Implementation", href: "/services/erp-implementation" },
  { label: "Internal Audit and Compliance", href: "/services/internal-audit-compliance" },
  { label: "Payroll Processing", href: "/services/payroll-processing" },
]

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!servicesRef.current) return
      if (!servicesRef.current.contains(e.target as Node)) setIsServicesOpen(false)
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) setIsMobileServicesOpen(false)
  }, [isMenuOpen])

  const resolveHref = (href: string) => {
    if (isHome) return href
    return `/${href}`
  }

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isScrolled ? "bg-brand-navy/70 backdrop-blur-2xl shadow-sm" : "bg-transparent"}
        `}
      >
        <div
          className={`
            max-w-[1400px] mx-auto
            px-5 sm:px-8 lg:px-12
            flex items-center justify-between
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isScrolled ? "py-3" : "py-5 sm:py-6"}
          `}
        >
          {/* LOGO GROUP */}
          <div className="relative z-10 flex items-center gap-4 sm:gap-6">
            <Link href="/" className="block">
              <Image
                src="/logo/mzbpo.svg"
                alt="MZBPO"
                width={220}
                height={48}
                className={`
                  h-auto object-contain transition-all duration-500
                  ${isScrolled ? "w-20 sm:w-24" : "w-24 sm:w-28"}
                `}
                priority
              />
            </Link>

            <div className={`w-[1px] bg-white/20 transition-all duration-500 ${isScrolled ? "h-6" : "h-8"}`} />

            <div className="block">
              <Image
                src="/logo/bkr.png"
                alt="BKR International"
                width={140}
                height={55}
                className={`
                  h-auto object-contain transition-all duration-500
                  ${isScrolled ? "w-16 sm:w-20" : "w-20 sm:w-24"}
                `}
              />
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-12">
{/* Services dropdown */}
<div ref={servicesRef} className="relative">
  <button
    type="button"
    onClick={() => setIsServicesOpen((v) => !v)}
    className="
      relative text-[13px] font-medium tracking-wide
      text-brand-white/70 hover:text-brand-white
      transition-colors duration-300
      after:absolute after:bottom-[-4px] after:left-0
      after:h-[1px] after:w-0 after:bg-brand-teal
      after:transition-all after:duration-300
      hover:after:w-full
      inline-flex items-center gap-2
    "
    aria-haspopup="menu"
    aria-expanded={isServicesOpen}
  >
    Services
    <ChevronDown
      size={14}
      className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : "rotate-0"}`}
    />
  </button>

  <div
    className={`
      absolute left-0 top-[calc(100%+14px)]
      w-[320px] rounded-2xl overflow-hidden
      border border-white/10 bg-brand-navy/95 backdrop-blur-2xl
      shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      transition-all duration-300
      ${isServicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"}
    `}
    role="menu"
  >
    <div className="p-2">
      {serviceItems.map((s) => (
        <Link
          key={s.href}
          href={s.href}
          className="
            flex items-center justify-between
            px-4 py-3 rounded-xl
            text-[13px] font-medium
            text-brand-white/80 hover:text-brand-white
            hover:bg-white/[0.06]
            transition-colors
          "
          role="menuitem"
          onClick={() => setIsServicesOpen(false)}
        >
          <span>{s.label}</span>
          <ArrowUpRight size={14} className="text-brand-white/25" />
        </Link>
      ))}

      <div className="my-2 h-[1px] bg-white/10" />

      <a
        href={isHome ? "#services" : "/#services"}
        className="
          flex items-center justify-between
          px-4 py-3 rounded-xl
          text-[13px] font-medium
          text-brand-white/70 hover:text-brand-teal
          hover:bg-white/[0.06]
          transition-colors
        "
        role="menuitem"
        onClick={() => setIsServicesOpen(false)}
      >
        <span>View services overview</span>
        <ArrowUpRight size={14} className="text-brand-white/25" />
      </a>
    </div>
  </div>
</div>

            {navItems.map((item) =>
              item.isExternal ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    relative text-[13px] font-medium tracking-wide
                    text-brand-white/70 hover:text-brand-white
                    transition-colors duration-300
                    after:absolute after:bottom-[-4px] after:left-0
                    after:h-[1px] after:w-0 after:bg-brand-teal
                    after:transition-all after:duration-300
                    hover:after:w-full
                  "
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={resolveHref(item.href)}
                  className="
                    relative text-[13px] font-medium tracking-wide
                    text-brand-white/70 hover:text-brand-white
                    transition-colors duration-300
                    after:absolute after:bottom-[-4px] after:left-0
                    after:h-[1px] after:w-0 after:bg-brand-teal
                    after:transition-all after:duration-300
                    hover:after:w-full
                  "
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* DESKTOP CTA */}
          <a
            href="/meeting"
            className="
              hidden lg:inline-flex items-center gap-2
              text-[13px] font-semibold tracking-wide
              text-brand-navy bg-brand-teal
              px-5 py-2.5 rounded-full
              hover:bg-brand-teal/90 hover:gap-3
              transition-all duration-300
            "
          >
            Book a Call
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-5 h-3 flex flex-col justify-between">
              <span
                className={`
                  block h-[1.5px] bg-brand-white rounded-full
                  transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center
                  ${isMenuOpen ? "rotate-45 translate-y-[5.5px] w-5" : "w-5"}
                `}
              />
              <span
                className={`
                  block h-[1.5px] bg-brand-white rounded-full
                  transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center
                  ${isMenuOpen ? "-rotate-45 -translate-y-[5.5px] w-5" : "w-3.5 ml-auto"}
                `}
              />
            </div>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          lg:hidden fixed inset-0 z-40
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <div
          className={`
            absolute inset-0 bg-brand-navy
            transition-all duration-700
            ${isMenuOpen ? "opacity-100" : "opacity-0"}
          `}
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          className={`
            absolute top-0 right-0 w-[50%] h-[40%]
            bg-gradient-to-bl from-brand-teal/[0.03] to-transparent
            transition-opacity duration-1000
            ${isMenuOpen ? "opacity-100" : "opacity-0"}
          `}
        />

        <div className="relative h-full flex flex-col px-8 pt-28 pb-10">
          <nav className="flex-1">
            <ul className="space-y-1">
              {/* Services accordion */}
              <li
                className={`
                  transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                `}
                style={{ transitionDelay: isMenuOpen ? "100ms" : "0ms" }}
              >
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen((v) => !v)}
                  className="
                    group w-full flex items-center justify-between
                    py-4 border-b border-brand-white/[0.06]
                    transition-colors duration-300
                  "
                  aria-expanded={isMobileServicesOpen}
                >
                  <span className="text-[28px] sm:text-[32px] font-light text-brand-white/90 group-hover:text-brand-teal transition-colors duration-300">
                    Services
                  </span>
                  <ChevronDown
                    size={18}
                    className={`
                      text-brand-white/20 group-hover:text-brand-teal
                      transition-all duration-300
                      ${isMobileServicesOpen ? "rotate-180" : "rotate-0"}
                    `}
                  />
                </button>

                <div
                  className={`
                    overflow-hidden transition-all duration-500
                    ${isMobileServicesOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="pt-3 pb-4 space-y-1">
                    {serviceItems.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="
                          flex items-center justify-between
                          py-3 px-2 rounded-xl
                          text-brand-white/70 hover:text-brand-white
                          hover:bg-white/[0.06]
                          transition-colors
                        "
                      >
                        <span className="text-[14px]">{s.label}</span>
                        <ArrowUpRight size={16} className="text-brand-white/20" />
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* Other links */}
              {navItems.map((item, index) => (
                <li
                  key={item.label}
                  className={`
                    transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                  `}
                  style={{ transitionDelay: isMenuOpen ? `${160 + index * 60}ms` : "0ms" }}
                >
                  {item.isExternal ? (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="
                        group flex items-center justify-between
                        py-4 border-b border-brand-white/[0.06]
                        transition-colors duration-300
                      "
                    >
                      <span className="text-[28px] sm:text-[32px] font-light text-brand-white/90 group-hover:text-brand-teal transition-colors duration-300">
                        {item.label}
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="
                          text-brand-white/20 group-hover:text-brand-teal
                          transition-all duration-300
                          group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                        "
                      />
                    </Link>
                  ) : (
                    <a
                      href={resolveHref(item.href)}
                      onClick={() => setIsMenuOpen(false)}
                      className="
                        group flex items-center justify-between
                        py-4 border-b border-brand-white/[0.06]
                        transition-colors duration-300
                      "
                    >
                      <span className="text-[28px] sm:text-[32px] font-light text-brand-white/90 group-hover:text-brand-teal transition-colors duration-300">
                        {item.label}
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="
                          text-brand-white/20 group-hover:text-brand-teal
                          transition-all duration-300
                          group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                        "
                      />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={`
              mt-auto space-y-6
              transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
            `}
            style={{ transitionDelay: isMenuOpen ? "520ms" : "0ms" }}
          >
            <a
              href="/meeting"
              onClick={() => setIsMenuOpen(false)}
              className="
                flex items-center justify-center gap-2
                w-full py-4 rounded-full
                bg-brand-teal text-brand-navy
                text-sm font-semibold tracking-wide
                hover:bg-brand-teal/90
                transition-colors duration-300
              "
            >
              Book a Call
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </a>

            <div className="flex items-center justify-between text-[11px] text-brand-white/30 tracking-wider">
              <span>operations@mzbpo.com</span>
              <span>© 2026</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
