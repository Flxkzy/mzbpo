import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MZBPO | Bookkeeping, Payroll, ERP & Audit Support Outsourcing",
  description: "Cut your accounting costs by 50% with MZBPO — Pakistan's top-rated outsourcing firm trusted by global brands like KFC, WWF & Dunkin. Get expert help with bookkeeping, payroll, audit support & ERP implementation.",
  openGraph: {
    title: "MZBPO | Trusted Outsourcing by a Top QCR-Rated Audit Firm",
    description: "MZBPO helps global businesses streamline finances through expert bookkeeping, payroll, ERP & audit services — backed by Muniff Ziauddin & Co.",
    images: [
      {
        url: "https://mzbpo.vercel.app/og-image.jpg", // Replace with your real OG image URL
        width: 1200,
        height: 630,
        alt: "MZBPO Outsourcing Banner",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>

        {children}
        <Analytics />

      </body>
    </html>
  );
}
