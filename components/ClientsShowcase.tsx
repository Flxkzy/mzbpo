// components/ClientsShowcase.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"
import NumberTicker from "@/components/magicui/number-ticker"

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

// ============================================
// DEFAULT DATA (used if no props passed)
// ============================================

const DEFAULT_LOGOS = [
  { name: "Dunkin", src: "/logo/d.png" },
  { name: "KFC", src: "/logo/k.png" },
  { name: "Khaadi", src: "/logo/kh.png" },
  { name: "WWF", src: "/logo/wwf.png" },
  { name: "Red Crescent", src: "/logo/r.png" },
  { name: "Unilever", src: "/logo/uni.png" },
  { name: "Penny Appeal", src: "/logo/penny.png" },
  { name: "FAW", src: "/logo/faw.png" },
]

const DEFAULT_SERVICES = [
  { label: "Bookkeeping" },
  { label: "Payroll" },
  { label: "Audit" },
  { label: "ERP" },
]

// ============================================
// LOTTIE ANIMATION DATA
// ============================================

const checkmarkAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 40,
  w: 100,
  h: 100,
  nm: "Checkmark",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Checkmark",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  i: [[0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0]],
                  v: [[-20, 0], [-5, 15], [25, -15]],
                  c: false,
                },
              },
              nm: "Path",
            },
            {
              ty: "st",
              c: { a: 0, k: [0.408, 0.765, 0.667, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 6 },
              lc: 2,
              lj: 2,
              nm: "Stroke",
            },
            {
              ty: "tm",
              s: { a: 0, k: 0 },
              e: {
                a: 1,
                k: [
                  { t: 10, s: [0], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
                  { t: 30, s: [100] },
                ],
              },
              o: { a: 0, k: 0 },
              m: 1,
              nm: "Trim Paths",
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
          ],
          nm: "Checkmark Group",
        },
      ],
      ip: 0,
      op: 40,
      st: 0,
    },
  ],
}

// ============================================
// HELPER COMPONENTS
// ============================================

function LogoItem({ name, src }: { name: string; src: string }) {
  return (
    <div className="mx-8 sm:mx-12 flex items-center justify-center will-change-transform transform-gpu group">
      <Image
        src={src || "/placeholder.svg"}
        alt={name}
        width={180}
        height={90}
        className="h-12 sm:h-14 lg:h-16 w-auto object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 select-none"
        draggable={false}
      />
    </div>
  )
}

function StatCard({
  value,
  suffix,
  label,
  delay = 0,
}: {
  value: number
  suffix: string
  label: string
  delay?: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`relative p-8 sm:p-10 rounded-3xl bg-brand-white shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-12 h-12 border-l-[3px] border-t-[3px] border-brand-teal rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-r-[3px] border-b-[3px] border-brand-teal/40 rounded-br-3xl" />

      <div className="text-center">
        <h4 className="font-[family-name:var(--font-syne)] text-5xl sm:text-6xl md:text-7xl font-bold text-brand-navy">
          <NumberTicker value={value} />
          <span className="text-brand-teal">{suffix}</span>
        </h4>
        <p className="mt-4 text-base sm:text-lg text-brand-navy/60 font-sans font-medium">{label}</p>
      </div>
    </div>
  )
}

function ServiceChip({ label, index }: { label: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true)
            setHasAnimated(true)
          }, index * 150)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [index, hasAnimated])

  return (
    <div
      ref={ref}
      className={`group flex items-center gap-x-3 px-6 py-3.5 rounded-full bg-brand-white/[0.08] border border-brand-white/15 hover:border-brand-teal/50 hover:bg-brand-teal/10 transition-all duration-300 cursor-default ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
      }`}
      style={{ transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)" }}
    >
      <div className="w-6 h-6 flex items-center justify-center">
        {isVisible ? (
          <Lottie
            animationData={checkmarkAnimation}
            loop={false}
            className="w-6 h-6"
          />
        ) : (
          <div className="w-4 h-4 rounded-full border-2 border-brand-teal/40" />
        )}
      </div>
      <span className="text-sm sm:text-base font-semibold text-brand-white group-hover:text-brand-teal transition-colors">
        {label}
      </span>
    </div>
  )
}

function WorldMapBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* World map SVG - centered and scaled */}
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-[0.08] sm:opacity-[0.06]"
        style={{
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 80%)',
        }}
      >
        <Image
          src="/images/earth-map.svg"
          alt=""
          width={1400}
          height={700}
          className="w-[250%] sm:w-[180%] md:w-[140%] lg:w-[120%] max-w-none h-auto min-h-[400px] object-contain select-none [filter:brightness(0)_invert(1)]"
          style={{
            transform: 'translateY(-5%)',
          }}
          priority
          aria-hidden="true"
        />
      </div>
      
      {/* Animated glow dots representing global presence */}
      <div className="absolute top-[30%] left-[20%] w-3 h-3 sm:w-2 sm:h-2 rounded-full bg-brand-teal/50 sm:bg-brand-teal/40 animate-pulse" style={{ animationDelay: '0s' }} />
      <div className="absolute top-[40%] left-[48%] w-3.5 h-3.5 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-teal/60 sm:bg-brand-teal/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-[35%] left-[75%] w-3 h-3 sm:w-2 sm:h-2 rounded-full bg-brand-teal/50 sm:bg-brand-teal/40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[55%] left-[30%] w-2.5 h-2.5 sm:w-1.5 sm:h-1.5 rounded-full bg-brand-teal/40 sm:bg-brand-teal/30 animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[45%] left-[60%] w-3 h-3 sm:w-2 sm:h-2 rounded-full bg-brand-teal/50 sm:bg-brand-teal/40 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[25%] left-[55%] w-2.5 h-2.5 sm:w-1.5 sm:h-1.5 rounded-full bg-brand-teal/45 sm:bg-brand-teal/35 animate-pulse" style={{ animationDelay: '0.7s' }} />
      <div className="absolute top-[50%] left-[42%] w-3 h-3 sm:w-2 sm:h-2 rounded-full bg-brand-teal/55 sm:bg-brand-teal/45 animate-pulse" style={{ animationDelay: '1.2s' }} />
    </div>
  )
}

// ============================================
// PROPS INTERFACE
// ============================================

interface ClientsShowcaseProps {
  // Logo section
  logoSectionLabel?: string
  logoSectionTitle?: string
  logos?: { name: string; src: string }[]
  
  // Stats section
  badgeText?: string
  headline?: string
  highlightedText?: string
  subheadline?: string
  
  // Stats
  stats?: {
    value: number
    suffix: string
    label: string
  }[]
  
  // Services
  services?: { label: string }[]
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function ClientsShowcase({
  // Logo section defaults
  logoSectionLabel = "Our Clients",
  logoSectionTitle = "Companies we've worked with",
  logos = DEFAULT_LOGOS,
  
  // Stats section defaults
  badgeText = "Trusted Partners",
  headline = "Trusted by",
  highlightedText = "leading brands",
  subheadline = "Bookkeeping, payroll, ERP, and audit support for fast growing businesses across the globe",
  
  // Stats defaults
  stats = [
    { value: 300, suffix: "+", label: "Happy Clients" },
    { value: 92, suffix: "%", label: "Satisfaction Rate" },
  ],
  
  // Services defaults
  services = DEFAULT_SERVICES,
}: ClientsShowcaseProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      {/* SECTION 1: Logo Marquee - Light Grey Background */}
      <section className="relative w-full py-16 md:py-20 bg-brand-grey overflow-hidden">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-teal to-transparent" />

        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 md:px-10">
          {/* Section Header */}
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-brand-navy/40 font-semibold mb-3">
              {logoSectionLabel}
            </p>
            <h3 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-brand-navy">
              {logoSectionTitle}
            </h3>
          </div>

          {/* Marquee */}
          <div className="relative">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-brand-grey to-transparent z-10 pointer-events-none" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-brand-grey to-transparent z-10 pointer-events-none" />

            <Marquee
              pauseOnHover
              className={cn("py-6 [--duration:35s] transform-gpu will-change-transform")}
            >
              {logos.map((item, i) => (
                <LogoItem key={`a-${i}-${item.name}`} {...item} />
              ))}
              {logos.map((item, i) => (
                <LogoItem key={`b-${i}-${item.name}`} {...item} />
              ))}
            </Marquee>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-teal/50 to-transparent" />
      </section>

      {/* SECTION 2: Stats & Services - With World Map Background */}
      <section className="relative w-full py-20 md:py-28 overflow-hidden">
        {/* World Map Background */}
        <WorldMapBackground />
        
        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 md:px-10">
          {/* Header */}
          <div
            className={`text-center transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 px-4 py-2 text-xs font-semibold text-brand-teal uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal" />
              </span>
              {badgeText}
            </span>

            <h2 className="mt-6 font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-brand-white">
              {headline}{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, hsl(var(--brand-teal)) 0%, #8DDBC8 100%)",
                }}
              >
                {highlightedText}
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-brand-white/60 max-w-2xl mx-auto font-sans">
              {subheadline}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={200 + index * 200}
              />
            ))}
          </div>

          {/* Service Chips */}
          <div className="mt-14 md:mt-20 flex justify-center">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {services.map((service, i) => (
                <ServiceChip key={service.label} label={service.label} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}