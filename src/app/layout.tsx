import "./globals.css"
import { Inter } from "next/font/google"
import { Metadata } from "next"
import { AuthProvider } from "@/components/providers/auth-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
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
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-white dark:bg-dark-bg">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}