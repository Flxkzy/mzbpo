"use client"

import Image from "next/image"
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

const LOGOS = [
  { name: "Dunkin", src: "/logo/d.png" },
  { name: "KFC", src: "/logo/k.png" },
  { name: "Khaadi", src: "/logo/kh.png" },
  { name: "WWF", src: "/logo/wwf.png" },
  { name: "Red Crescent", src: "/logo/r.png" },
  { name: "Unilever", src: "/logo/uni.png" },
  { name: "Penny Appeal", src: "/logo/penny.png" },
  { name: "FAW", src: "/logo/faw.png" },
]

const rowA = LOGOS.slice(0, Math.ceil(LOGOS.length / 2))
const rowB = LOGOS.slice(Math.ceil(LOGOS.length / 2))

function LogoItem({ name, src }: { name: string; src: string }) {
  return (
    <div className="mx-10 flex items-center justify-center will-change-transform transform-gpu">
      <Image
        src={src}
        alt={name}
        width={140}
        height={60}
        className="
          h-10 sm:h-12 md:h-14
          w-auto
          object-contain
          select-none
          opacity-80
          grayscale
          hover:grayscale-0
          hover:opacity-100
          transition
          duration-300
        "
        draggable={false}
      />
    </div>
  )
}

export default function TrustedLogosMarquee() {
  return (
    <div className="relative mt-8 md:mt-10 will-change-transform transform-gpu">
      {/* top row */}
      <Marquee
        pauseOnHover
        className={cn(
          "py-3 [--duration:26s] transform-gpu will-change-transform",
          "md:[mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
        )}
      >
        {rowA.map((item, i) => (
          <LogoItem key={`a-${i}-${item.name}`} {...item} />
        ))}
        {rowA.map((item, i) => (
          <LogoItem key={`a2-${i}-${item.name}`} {...item} />
        ))}
      </Marquee>

      {/* bottom row (reverse) */}
      <Marquee
        reverse
        pauseOnHover
        className={cn(
          "py-3 mt-4 [--duration:28s] transform-gpu will-change-transform",
          "md:[mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
        )}
      >
        {(rowB.length ? rowB : rowA).map((item, i) => (
          <LogoItem key={`b-${i}-${item.name}`} {...item} />
        ))}
        {(rowB.length ? rowB : rowA).map((item, i) => (
          <LogoItem key={`b2-${i}-${item.name}`} {...item} />
        ))}
      </Marquee>
    </div>
  )
}
