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
  if (eventId) params.set("fb_event_id", eventId)
  if (fbp) params.set("fbp", fbp)
  if (fbc) params.set("fbc", fbc)

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
