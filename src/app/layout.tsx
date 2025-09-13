import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers/providers"

// Initialize Inter font with all weights
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    template: "%s | Optivus",
    default: "Optivus - Optimizing Adoption. Maximizing ROI.",
  },
  description: "Optimize technology adoption and prove ROI with Optivus",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}