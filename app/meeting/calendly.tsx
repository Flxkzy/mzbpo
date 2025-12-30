"use client"

import { InlineWidget } from "react-calendly"

type Props = {
  eventId?: string | null
  fbp?: string | null
  fbc?: string | null
}

const Calendly = ({ eventId, fbp, fbc }: Props) => {
  const baseUrl = "https://calendly.com/mzcopakistan/30min"

  const params = new URLSearchParams()

  // use UTM fields so Calendly exposes them to Zapier
  if (eventId) params.set("utm_content", eventId)   // will become event_id
  if (fbp) params.set("utm_term", fbp)             // will become fbp
  if (fbc) params.set("utm_campaign", fbc)         // will become fbc

  const finalUrl = params.toString()
    ? `${baseUrl}?${params.toString()}`
    : baseUrl

  return (
    <div className="w-full">
      <InlineWidget
        url={finalUrl}
        styles={{
          height: "650px",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(35,39,99,.12)",
        }}
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "68C3AA",
          textColor: "232763",
        }}
      />
    </div>
  )
}

export default Calendly
