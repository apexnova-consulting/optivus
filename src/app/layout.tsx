import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Optivus - Optimizing Adoption. Maximizing ROI.",
  description: "Optimize technology adoption and prove ROI with Optivus",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}