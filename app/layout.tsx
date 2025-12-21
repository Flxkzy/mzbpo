// app/layout.tsx
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Syne, Poppins } from "next/font/google"
import Script from "next/script"

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
  verification: {
    google: "PP1WN75nl2PNDCE7PsfouWofPe4th-zhQud5n__5CvI",
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

export const viewport: Viewport = {
  themeColor: "#232763",
  colorScheme: "dark light",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

  return (
    <html lang="en" className={`${syne.variable} ${poppins.variable}`}>
      <head>
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "uoo3y364d3");
            `,
          }}
        />

        {/* Meta Pixel */}
        {pixelId && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${pixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </head>

      <body className="bg-background text-foreground antialiased">
        {/* Meta Pixel noscript */}
        {pixelId && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}


        {children}

        {/* Organization Schema */}
        <Script
          id="mzbpo-org-ldjson"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MZBPO",
              url: "https://www.mzbpo.com",
              description:
                "Outsourced bookkeeping and accounting services for growing businesses.",
              sameAs: ["https://www.linkedin.com/company/mzbpo"],
            }),
          }}
        />

        <Analytics />
      </body>
    </html>
  )
}
