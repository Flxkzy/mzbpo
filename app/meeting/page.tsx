// app/meeting/page.tsx
import type { Metadata } from "next"
import MeetingClient from "./MeetingClient"

export const metadata: Metadata = {
  title: "Book a Free Strategy Call",
  description:
    "Book a free strategy call with MZBPO. We will review your current bookkeeping setup and show you how to get clean books, clear numbers, and financial control.",
  alternates: {
    canonical: "/meeting",
  },
  openGraph: {
    title: "Book a Free Strategy Call | MZBPO",
    description:
      "Book a free strategy call with MZBPO. Review your bookkeeping setup and get a clear plan for clean books and financial control.",
    url: "https://www.mzbpo.com/meeting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Strategy Call | MZBPO",
    description:
      "Book a free strategy call with MZBPO. Review your bookkeeping setup and get a clear plan for clean books and financial control.",
  },
}

export default function MeetingPage() {
  return <MeetingClient />
}
