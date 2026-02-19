"use client"

import { useEffect, useState } from "react"
import Calendly from "./calendly"
import { PiCheckCircle } from "react-icons/pi"
import { motion } from "framer-motion"
import Footer from "@/components/footer"
import Navbar from "@/components/Navbar"
import { useCalendlyEventListener } from "react-calendly"
import { Star, ShieldCheck, Clock, Users } from "lucide-react"

const checkItemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null
  const match = document.cookie
    .split("; ")
    .find(row => row.startsWith(name + "="))
  return match ? match.split("=")[1] : null
}

export default function MeetingClient() {
  const [eventId, setEventId] = useState<string | null>(null)
  const [fbp, setFbp] = useState<string | null>(null)
  const [fbc, setFbc] = useState<string | null>(null)

  useEffect(() => {
    // existing page view
    window.fbq?.("track", "ViewContent", { content_name: "Meeting Page" })

    try {
      // 1) event_id (dedup)
      let storedEvent = localStorage.getItem("fb_event_id")
      if (!storedEvent) {
        storedEvent = crypto.randomUUID()
        localStorage.setItem("fb_event_id", storedEvent)
      }
      setEventId(storedEvent)

      // 2) fbp (browser id)
      let storedFbp = localStorage.getItem("fb_fbp")
      if (!storedFbp) {
        const cookieFbp = getCookie("_fbp")
        if (cookieFbp) {
          storedFbp = cookieFbp
          localStorage.setItem("fb_fbp", storedFbp)
        }
      }
      if (storedFbp) setFbp(storedFbp)

      // 3) fbc (click id from fbclid or cookie)
      let storedFbc = localStorage.getItem("fb_fbc")
      if (!storedFbc) {
        const params = new URLSearchParams(window.location.search)
        const fbclid = params.get("fbclid")

        if (fbclid) {
          const ts = Math.floor(Date.now() / 1000)
          const newFbc = `fb.1.${ts}.${fbclid}`
          storedFbc = newFbc
          document.cookie = `_fbc=${newFbc};path=/;max-age=63072000`
          localStorage.setItem("fb_fbc", newFbc)
        } else {
          const cookieFbc = getCookie("_fbc")
          if (cookieFbc) {
            storedFbc = cookieFbc
            localStorage.setItem("fb_fbc", cookieFbc)
          }
        }
      }
      if (storedFbc) setFbc(storedFbc)
    } catch {
      // ignore
    }
  }, [])

  // Fire Schedule when Calendly confirms booking
  useCalendlyEventListener({
    onEventScheduled: () => {
      if (!eventId) return
      window.fbq?.("track", "Schedule", {}, { eventID: eventId })
    },
  })

  return (
    <div className="min-h-screen flex flex-col bg-brand-navy text-brand-white">
      <Navbar />

      <main className="flex-1 pt-20 md:pt-28 lg:pt-32">
        <div className="mx-auto max-w-6xl px-6 md:px-6 pt-8 md:pt-12">
          <div className="flex flex-col md:flex-row md:items-start gap-10 lg:gap-14">
            {/* LEFT — Value prop + social proof */}
            <div className="w-full md:w-[44%]">
              {/* Urgency badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 mb-5 py-2 px-4 rounded-full bg-brand-teal/10 border border-brand-teal/30"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-teal" />
                </span>
                <span className="font-[var(--font-poppins)] text-sm font-medium text-brand-teal">
                  Limited spots available this week
                </span>
              </motion.div>

              <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Book Your Free{" "}
                <span className="text-brand-teal italic">Strategy</span>{" "}
                Call
              </h1>

              <p className="font-[var(--font-poppins)] text-base md:text-lg text-white/80 pt-4 leading-relaxed">
                In 30 minutes, we&apos;ll review your current finance setup and show you exactly how to{" "}
                <span className="text-brand-teal font-semibold">cut costs by up to 50%</span>{" "}
                without sacrificing accuracy.
              </p>

              {/* What you'll get from this call */}
              <p className="font-[family-name:var(--font-syne)] text-lg font-semibold text-white mt-8 mb-3">
                What you&apos;ll walk away with:
              </p>

              {[
                { title: "Custom cost savings breakdown", description: "See exactly how much you'd save vs. your current setup." },
                { title: "Gap analysis of your books", description: "We'll identify where errors and inefficiencies are hiding." },
                { title: "Clear outsourcing roadmap", description: "A step by step plan to transition without disruption." },
                { title: "No obligation, no pressure", description: "If we're not the right fit, we'll tell you." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={checkItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.12, duration: 0.35 }}
                  className="flex gap-x-3 py-3"
                >
                  <PiCheckCircle className="text-brand-teal text-xl flex-shrink-0 mt-1" />
                  <div className="font-[var(--font-poppins)]">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}

              {/* Trust row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 pt-6 border-t border-white/10"
              >
                <div className="flex flex-wrap gap-x-6 gap-y-3 font-[var(--font-poppins)]">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Clock className="w-4 h-4 text-brand-teal" />
                    <span>30 min call</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <ShieldCheck className="w-4 h-4 text-brand-teal" />
                    <span>100% confidential</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Users className="w-4 h-4 text-brand-teal" />
                    <span>Senior experts only</span>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="font-[var(--font-poppins)] text-sm text-white/50">
                    Trusted by businesses across the US, UK & UAE
                  </span>
                </div>
              </motion.div>
            </div>

            {/* RIGHT — Calendly */}
            <div className="w-full md:flex-1 pb-10">
              <div className="bg-brand-white text-brand-navy rounded-2xl shadow-soft p-4 md:p-6">
                <Calendly eventId={eventId} fbp={fbp} fbc={fbc} />
              </div>

              <p className="font-[var(--font-poppins)] text-xs text-white/55 mt-4 text-center">
                By booking, you agree to be contacted by MZBPO. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
