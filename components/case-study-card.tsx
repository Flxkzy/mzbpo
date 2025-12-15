"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Props = {
  title: string
  description: string
  results?: string[]
  tags?: string[]
  className?: string
}

// named export
export function CaseStudyCard({
  title,
  description,
  results = [],
  tags = [],
  className,
}: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Card
      ref={cardRef}
      className={cn(
        "overflow-hidden transition-all duration-700 transform rounded-2xl",
        "border border-white/10 bg-brand-white text-brand-navy",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        "shadow-soft hover:shadow-lg",
        className
      )}
    >
      <CardContent className="p-0">
        <div className="p-6 bg-brand-navy text-brand-white">
          <h3 className="text-2xl font-display font-bold">{title}</h3>
          {!!tags.length && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="rounded-xl border-white/20 text-brand-white bg-white/10"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="p-6">
          <p className="text-base leading-relaxed">{description}</p>
          {!!results.length && (
            <ul className="mt-4 space-y-2">
              {results.map((r, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-2 text-brand-teal">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// default export for flexibility
export default CaseStudyCard
