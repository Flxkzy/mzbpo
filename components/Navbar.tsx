// components/Navbar.tsx
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const navItems = [
  { label: "Why Us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isScrolled 
            ? "bg-brand-navy/70 backdrop-blur-2xl shadow-sm" 
            : "bg-transparent"
          }
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
          {/* LOGO */}
          <a href="/" className="relative z-10">
            <Image
              src="/logo/mzbpo.svg"
              alt="MZBPO"
              width={220}
              height={48}
              className={`
                h-auto transition-all duration-500
                ${isScrolled ? "w-24 sm:w-28" : "w-28 sm:w-32"}
              `}
              priority
            />
          </a>

          {/* DESKTOP NAV - Clean & Minimal */}
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <a
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
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA - Minimal */}
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

          {/* MOBILE MENU BUTTON - Minimal Lines */}
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

      {/* MOBILE MENU - Clean Full Screen */}
      <div
        className={`
          lg:hidden fixed inset-0 z-40
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Clean backdrop */}
        <div 
          className={`
            absolute inset-0 bg-brand-navy
            transition-all duration-700
            ${isMenuOpen ? "opacity-100" : "opacity-0"}
          `}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Subtle accent */}
        <div 
          className={`
            absolute top-0 right-0 w-[50%] h-[40%] 
            bg-gradient-to-bl from-brand-teal/[0.03] to-transparent
            transition-opacity duration-1000
            ${isMenuOpen ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col px-8 pt-28 pb-10">
          {/* Nav Items - Large & Clean */}
          <nav className="flex-1">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li 
                  key={item.label}
                  className={`
                    transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${isMenuOpen 
                      ? "translate-y-0 opacity-100" 
                      : "translate-y-6 opacity-0"
                    }
                  `}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${100 + index * 60}ms` : "0ms" 
                  }}
                >
                  <a
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
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div 
            className={`
              mt-auto space-y-6
              transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isMenuOpen 
                ? "translate-y-0 opacity-100" 
                : "translate-y-6 opacity-0"
              }
            `}
            style={{ transitionDelay: isMenuOpen ? "450ms" : "0ms" }}
          >
            {/* CTA */}
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

            {/* Minimal footer */}
            <div className="flex items-center justify-between text-[11px] text-brand-white/30 tracking-wider">
              <span>hello@mzbpo.com</span>
              <span>© 2025</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}