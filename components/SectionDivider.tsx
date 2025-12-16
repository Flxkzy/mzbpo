"use client"

import { useEffect, useRef, useState } from "react"

export default function SectionDivider() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative w-full overflow-hidden">
      {/* spacing */}
      <div className="h-14 md:h-20" />

      {/* subtle ambient glow */}
      <div
        className={`
          pointer-events-none absolute left-1/2 top-1/2
          h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full
          bg-brand-teal/10 blur-[100px]
          transition-all duration-700
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      />

      {/* shimmer sweep */}
      <div
        className={`
          pointer-events-none absolute inset-0
          translate-x-[-120%] opacity-0
          ${visible ? "animate-divider-sweep" : ""}
        `}
      />

      {/* svg wrapper (float + fade in) */}
      <div
        className={`
          relative
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className={`
            w-full h-[70px] md:h-[110px]
            will-change-transform
            ${visible ? "animate-divider-float" : ""}
          `}
        >
          <g fill="hsl(158 47% 58%)">
            <path
              d="M500 80.7C358 68 0 4 0 4V0h1000v84.7c-216 23.3-358 8.6-500-4Z"
              opacity=".18"
            />
            <path
              d="M500 65.7C358 53 0 4 0 4V0h1000v62.7c-216 23.3-358 15.6-500 3Z"
              opacity=".28"
            />
            <path
              d="M500 50.7C358 38 0 4 0 4V0h1000v40.7C784 64 642 63.3 500 50.7Z"
              opacity=".45"
            />
          </g>
        </svg>

        {/* shimmer overlay on top of svg */}
        <div
          className={`
            pointer-events-none absolute inset-0
            bg-gradient-to-r from-transparent via-white/12 to-transparent
            translate-x-[-130%]
            ${visible ? "animate-divider-shine" : ""}
          `}
        />
      </div>

      {/* spacing */}
      <div className="h-14 md:h-20" />

      {/* local keyframes */}
      <style jsx>{`
        @keyframes dividerFloat {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes dividerShine {
          0% {
            transform: translateX(-130%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          40% {
            opacity: 1;
          }
          60% {
            opacity: 0.9;
          }
          100% {
            transform: translateX(130%);
            opacity: 0;
          }
        }
        .animate-divider-float {
          animation: dividerFloat 6.5s ease-in-out infinite;
        }
        .animate-divider-shine {
          animation: dividerShine 2.8s ease-in-out 0.2s 1;
        }
      `}</style>
    </div>
  )
}
