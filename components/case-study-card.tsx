"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CaseStudyCardProps {
  title: string
  tags: string[]
  clientInfo: string
  challenge: string
  solution: string
  results: string[]
  highlight: string
  highlightSubtext?: string
  layout: "text-only" | "left-text" | "right-text"
  illustration?: React.ReactNode
  quote?: {
    text: string
    author: string
    role: string
  }
  className?: string
}

export function CaseStudyCard({
  title,
  tags,
  clientInfo,
  challenge,
  solution,
  results,
  highlight,
  highlightSubtext,
  layout = "left-text",
  illustration,
  quote,
  className,
}: CaseStudyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  const contentClasses = cn("flex flex-col space-y-4", layout === "text-only" ? "w-full" : "lg:w-1/2")

  const illustrationClasses = cn("flex items-center justify-center p-6", layout === "text-only" ? "hidden" : "lg:w-1/2")

  return (
    <Card
      ref={cardRef}
      className={cn(
        "overflow-hidden transition-all duration-700 transform border-2 border-black bg-white",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0",
        "hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]",
        "transition duration-200",
        className,
      )}
    >
      <CardContent className="p-0">
        <div className="p-6 bg-[#121212] text-white">
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-white/10 text-white border-white/20 rounded-[6px]">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "p-6 flex flex-col lg:flex-row gap-8",
            layout === "right-text" && "flex-col-reverse lg:flex-row-reverse",
          )}
        >
          <div className={contentClasses}>
            <div>
              <h4 className="text-lg font-semibold text-black mb-1">Client</h4>
              <p className="text-gray-700">{clientInfo}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-black mb-1">Challenge</h4>
              <p className="text-gray-700">{challenge}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-black mb-1">Solution</h4>
              <p className="text-gray-700">{solution}</p>
            </div>

            {quote && (
              <div className="my-4 p-4 bg-gray-50 border-l-4 border-black italic">
                <p className="text-gray-700">"{quote.text}"</p>
                <p className="mt-2 text-sm font-medium text-black">
                  — {quote.author}, {quote.role}
                </p>
              </div>
            )}

            <div>
              <h4 className="text-lg font-semibold text-black mb-2">Results</h4>
              <ul className="space-y-2">
                {results.map((result, index) => (
                  <li
                    key={index}
                    className={cn(
                      "flex items-start text-gray-700 transition-all duration-700",
                      isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
                    )}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                  >
                    <span className="mr-2 text-blue-500">•</span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {layout !== "text-only" && (
            <div className={illustrationClasses}>
              <div className="w-full flex flex-col items-center">
                {illustration}
                <div className="mt-6 p-4 bg-[#f2f2f2] rounded-[6px] border-2 border-black text-center w-full max-w-xs hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200">
                  <div className="text-2xl font-bold text-black">{highlight}</div>
                  {highlightSubtext && <div className="text-sm text-gray-600 mt-1">{highlightSubtext}</div>}
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
