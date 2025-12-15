// app/layout.tsx
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Syne, Poppins } from "next/font/google"

const syne = Syne({ subsets: ["latin"], variable: "--font-syne", display: "swap" })
const poppins = Poppins({ weight: ["300","400","500","600","700"], subsets: ["latin"], variable: "--font-poppins", display: "swap" })

export const metadata: Metadata = { /* ...unchanged... */ }
export const viewport: Viewport = { themeColor: "#232763", colorScheme: "dark light" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${poppins.variable}`}>
      {/* Use token utilities, not undefined classes */}
      <body className="bg-background text-foreground antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
