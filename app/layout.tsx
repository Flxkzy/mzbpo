// app/layout.tsx
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Syne, Poppins } from "next/font/google"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

/**
 * GLOBAL SEO METADATA
 * Applies to homepage by default.
 * /meeting will override its own metadata.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.mzbpo.com"),
  title: {
    default: "Outsourced Bookkeeping and Accounting Services | MZBPO",
    template: "%s | MZBPO",
  },
  description:
    "Professional outsourced bookkeeping and accounting services for growing businesses. Clean books, clear numbers, and confident decisions with MZBPO.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.mzbpo.com",
    title: "Outsourced Bookkeeping and Accounting Services | MZBPO",
    description:
      "Professional outsourced bookkeeping and accounting services for growing businesses. Clean books, clear numbers, and confident decisions with MZBPO.",
    siteName: "MZBPO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outsourced Bookkeeping and Accounting Services | MZBPO",
    description:
      "Professional outsourced bookkeeping and accounting services for growing businesses. Clean books, clear numbers, and confident decisions with MZBPO.",
  },
}

/**
 * VIEWPORT + THEME
 */
export const viewport: Viewport = {
  themeColor: "#232763",
  colorScheme: "dark light",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${poppins.variable}`}>
      <body className="bg-background text-foreground antialiased">
        {children}

        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MZBPO",
              url: "https://www.mzbpo.com",
              description:
                "Outsourced bookkeeping and accounting services for growing businesses.",
              sameAs: [
                "https://www.linkedin.com/company/mzbpo",
              ],
            }),
          }}
        />

        <Analytics />
      </body>
    </html>
  )
}
