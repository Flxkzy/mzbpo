"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function MetaPageView() {
  const pathname = usePathname()

  useEffect(() => {
    window.fbq?.("track", "PageView")
  }, [pathname])

  return null
}
