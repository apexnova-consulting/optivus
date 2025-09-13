import "./globals.css"
import { Inter } from "next/font/google"
import { Providers } from "@/components/providers/providers"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = {
  title: "Optivus - Optimizing Adoption. Maximizing ROI.",
  description: "Optivus tracks adoption, measures communication, and proves business impact — in 30 days or less.",
  keywords: ["adoption tracking", "ROI measurement", "technology adoption", "SaaS analytics"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen bg-white dark:bg-dark-bg`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}