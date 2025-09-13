import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Optivus - Optimizing Adoption. Maximizing ROI.",
  description: "Optimize technology adoption and prove ROI with Optivus",
}

const navigation = [
  { name: "Product", href: "/product" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
          <nav className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center gap-2">
                  <ArrowUpRight className="h-6 w-6 text-blue-600" />
                  <span className="text-xl font-bold">Optivus</span>
                </Link>
                <div className="hidden md:flex md:gap-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-semibold text-gray-600 hover:text-blue-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/login" className="hidden md:block text-sm font-semibold text-gray-600 hover:text-blue-600">
                  Log in
                </Link>
                <Link href="/contact">
                  <Button variant="primary" size="default">
                    Book Your ROI Demo
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {children}

        <footer className="bg-gray-900 text-white py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Link href="/" className="flex items-center gap-2">
                  <ArrowUpRight className="h-6 w-6 text-blue-400" />
                  <span className="text-xl font-bold">Optivus</span>
                </Link>
                <p className="mt-2 text-sm text-gray-400">
                  Optimizing Adoption.<br />Maximizing ROI.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><Link href="/product" className="text-sm text-gray-400 hover:text-white">Features</Link></li>
                  <li><Link href="/pricing" className="text-sm text-gray-400 hover:text-white">Pricing</Link></li>
                  <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white">Book Demo</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-sm text-gray-400 hover:text-white">About</Link></li>
                  <li><Link href="/blog" className="text-sm text-gray-400 hover:text-white">Blog</Link></li>
                  <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy</Link></li>
                  <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white">Terms</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
              © {new Date().getFullYear()} Optivus. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}