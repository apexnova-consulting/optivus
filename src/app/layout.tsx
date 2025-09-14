import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Nav } from "@/components/layout/nav"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Optivus - Turn AI Adoption Into ROI",
  description: "Measure and maximize your AI tool investments with data-driven insights.",
  keywords: ["AI ROI", "AI Adoption", "ROI Tracking", "AI Analytics", "AI Consulting"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}